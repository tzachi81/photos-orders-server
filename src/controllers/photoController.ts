import { Request, Response, NextFunction } from 'express';
import { fetchPhotoUrls } from '../services/photosService';

export const getPhotoUrls = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const count = parseInt(req.params.count);

    if (isNaN(count) || count <= 0) {
        res.status(400).json({ error: 'Invalid count parameter' });
    }

    try {
        const photoUrls = await fetchPhotoUrls(count);
        res.json(photoUrls);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
};