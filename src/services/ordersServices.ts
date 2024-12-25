import { createOrder } from "../db/queries/createOrder";
import { IOrder } from "../db/types";

export const addOrderService = async (orderDetails: IOrder): Promise<IOrder[]> => {

  console.log('orderDetails', orderDetails);

    return createOrder(orderDetails)
    .then(result => result)
    .catch((error: Error) => {
      throw new Error(`Error creating order, ${error.message}`)
    })
};