import { Request, Response, NextFunction } from 'express';
import { fetchPhotoUrlsService } from '../services/photosServices';

export const getPhotoUrls = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    // const count = Number(request.params.count) || 10;
    // const theme = request.params.category as string || 'all';

    // console.log('photos requested', count, theme);

    //TODO: add count limitation support (3 and above...)
    try {
        const photoUrls = await fetchPhotoUrlsService(Number(request.params.count) || 10, request.params.category as string || 'all');
        response.set('Cache-Control', 'no-store');
        response.json(photoUrls);
    } catch (error) {
        response.status(500).json({ error: 'Failed to fetch photos' });
    }
};