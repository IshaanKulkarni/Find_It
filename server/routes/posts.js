import express from 'express';
const router= express.Router();

import {getpost,createpost} from '../controllers/posts.js';
router.get('/', getpost);
router.post('/',createpost);


export default router;