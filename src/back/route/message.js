import express from 'express';
import passport from 'passport';

import {
  listMessage, addMessage, viewMessage, deleteMessage,
} from '../controller/message';

const router = express.Router();

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), listMessage)
  .post(addMessage);

router.route('/:slug')
  .get(passport.authenticate('jwt', { session: false }), viewMessage)
  .delete(passport.authenticate('jwt', { session: false }), deleteMessage);

export default router;
