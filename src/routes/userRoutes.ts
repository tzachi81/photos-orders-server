import { Router } from 'express';
import { getUserDetails } from '../controllers/userController';

const router = Router();

router.get('/:userName', getUserDetails);

export default router;