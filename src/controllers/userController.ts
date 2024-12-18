import { Request, Response } from 'express';

import { IUser } from '../db/types';
import { getUserService } from '../services/userServices';

export const getUserDetails = async (request: Request, response: Response) => {
    
    const { userName } = request.params;

    await getUserService(userName)
        .then((result: IUser[]) => response.json(result))
        .catch((error: Error) => {
            console.error(error.message);
            response.status(500).json({ error: `Failed to get user orders ${error.message}` })
        });
};