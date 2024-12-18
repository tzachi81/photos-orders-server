import { Router } from 'express';
import { createOrdersDb } from '../controllers/orderController';

const router = Router();

router.post('/', createOrdersDb);

export default router;