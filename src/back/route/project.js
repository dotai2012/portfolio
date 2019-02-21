import express from 'express';
import passport from 'passport';
import multer from 'multer';
import fs from 'fs-extra';

import {
  listProject, addProject, viewProject, editProject, deleteProject, getUser, uploadAdapter,
} from '../controller/project';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = 'public/img/';
    fs.ensureDir(folder)
      .then(() => {
        cb(null, folder);
      })
      .catch(() => {
        cb(null, folder);
      });
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

router.post('/uploadadapter', passport.authenticate('jwt', { session: false }), upload.any(), uploadAdapter);

router.route('/:slug')
  .get(passport.authenticate('jwt', { session: false }), viewProject)
  .put(passport.authenticate('jwt', { session: false }), editProject)
  .delete(passport.authenticate('jwt', { session: false }), deleteProject);

router.get('/:slug/user', passport.authenticate('jwt', { session: false }), getUser);
export default router;
