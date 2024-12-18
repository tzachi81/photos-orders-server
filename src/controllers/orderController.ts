import { Request, Response } from 'express';
import { addOrderService } from '../services/ordersServices';
import { createOrdersDbQuery } from '../db/queries/createDb';

export const addOrder = async (request: Request, result: Response) => {

    await addOrderService(request.body)
        .then(response => result.status(201).json(response))
        .catch((error: Error) => {
            throw new Error(error.message);
        });
};

export const createOrdersDb = async (request: Request, response: Response) => {

    const result = await createOrdersDbQuery();
    console.log('result', result);

    if (result.errorCode) {
        response.status(500).json({ error: result.errorMessage });
    } else {
        response.status(200).json(result.message);
    }
}