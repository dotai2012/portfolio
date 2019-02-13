import express from 'express';
import passport from 'passport';
import multer from 'multer';

import {
  listProject, addProject, viewProject, editProject, deleteProject, getUser,
} from '../controller/project';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/');
  },
  filename: (req, file, cb) => {
    cb(null, `-${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), listProject)
  .post(passport.authenticate('jwt', { session: false }), upload.any(), addProject);

router.route('/:projectId')
  .get(passport.authenticate('jwt', { session: false }), viewProject)
  .put(passport.authenticate('jwt', { session: false }), editProject)
  .delete(passport.authenticate('jwt', { session: false }), deleteProject);

router.get('/:projectId/user', passport.authenticate('jwt', { session: false }), getUser);
export default router;
