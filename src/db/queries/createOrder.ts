import { pool } from "../dbSetup";
import { IOrder } from "../types";

export const createOrder = async (orderDetails: IOrder): Promise<IOrder[]> => {

  const { email, fullName, fullAddress, imageUrls, frameColor, userName } = orderDetails;

  const addOrderQuery = `INSERT INTO orders (email, full_name, address, image_urls, frame_color, user_name)
   VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  return await pool.query(addOrderQuery, [email, fullName, fullAddress, imageUrls, frameColor, userName])
    .then((result) => {
      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        //TODO: find better solution for this 
        return [];
      }
    })
    .catch((error: Error) => {
      throw new Error(`Error creating order, ${error.message}`)
    });

}