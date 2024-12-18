import { Router } from 'express';
import { addOrder } from '../controllers/orderController';

const router = Router();

router.post('/', addOrder);

export default router;