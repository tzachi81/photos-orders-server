import { Request, Response } from 'express';

let orders: any[] = []; // Mock database for orders
// Sorry, I did not have enough time to fully mimic the DB

export const createOrder = (req: Request, res: Response) => {
    const { email, fullName, address, imageUrls, frameColor, user } = req.body;

    const newOrder = {
        id: orders.length + 1,
        email,
        fullName,
        address,
        imageUrls,
        frameColor,
        user,
    };

    orders.push(newOrder);
    
    res.status(201).json(newOrder); //status - 'created'
};

export const getUserOrders = (req: Request, res: Response) => {
    const { user } = req.params;
    const userOrders = orders.filter(order => order.user === user);
    res.json(userOrders);
};