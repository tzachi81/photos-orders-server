import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const PIXABAY_API_URL = 'https://pixabay.com/api/';

let cache: string[] = [];
let lastFetchTime = 0;

export const fetchPhotoUrls = async (count: number): Promise<string[]> => {
    const currentTime = Date.now();
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (currentTime - lastFetchTime < cacheDuration && cache.length >= count) {
        return cache.slice(0, count);
    }

    const response = await axios.get(PIXABAY_API_URL, {
        params: {
            key: PIXABAY_API_KEY,
            q: 'nature',
            per_page: count,
            orientation: 'horizontal'
        }
    });

    cache = response.data.hits.map((hit: any) => hit.webformatURL);
    lastFetchTime = currentTime;

    return cache.slice(0, count);
};import { Router } from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController';

const router = Router();

router.post('/', createOrder);
router.get('/user/:user', getUserOrders);

export default router;