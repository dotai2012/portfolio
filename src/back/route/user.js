import express from 'express';
import passport from 'passport';
import { registerUser, loginUser, deleteUser } from '../controller/user';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/', passport.authenticate('jwt', { session: false }), deleteUser);

export default router;
