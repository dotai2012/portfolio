import express from 'express';

import user from './user';
import project from './project';
import message from './message';

const router = express.Router();

router.use('/user', user);
router.use('/project', project);
router.use('/message', message);

export default router;
