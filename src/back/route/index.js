import express from 'express';

import user from './user';
import project from './project';

const router = express.Router();

router.use('/user', user);
router.use('/project', project);

export default router;
