import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import jwtDecode from 'jwt-decode';

import User from '../model/user';
import config from '../config';
import returnQuery from '../service/query';

const registerUser = (req, res) => {
  const {
    name, email, password,
  } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });
  bcryptjs.hash(newUser.password, 10, (err, hash) => {
    newUser.password = hash;
    newUser.save((error) => {
      if (error) {
        res.json({ success: false, msg: 'Failed to create user', debug: err });
      } else {
        res.json({ success: true, msg: 'Created user' });
      }
    });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, userFound) => {
    if (err) throw err;
    if (!userFound) {
      return res.json({ success: false, msg: 'User not found' });
    }
    bcryptjs.compare(password, userFound.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(userFound.toJSON(), config.secret, {
          expiresIn: 604800,
        });
        res.json({
          success: true,
          msg: 'User found',
          token: `Bearer ${token}`,
          user: {
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            admin: userFound.admin,
          },
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
};

const deleteUser = (req, res) => {
  const profile = jwtDecode(req.get('Authorization'));
  User.findById(profile._id).exec((err, result) => {
    result.remove();
    returnQuery(err, result, res);
  });
};

export {
  registerUser,
  loginUser,
  deleteUser,
};
