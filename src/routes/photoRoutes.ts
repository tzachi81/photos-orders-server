import { Router } from 'express';
import { getPhotoUrls } from '../controllers/photoController';

const router = Router();

router.get('/:count', getPhotoUrls);

export default router;