import { pool } from "../dbSetup";
import { IUser } from "../types";

export const getUserQuery = async (userName: string): Promise<IUser[]> => {

  const getUserOrderQuery = `
   SELECT * 
   FROM orders
   WHERE user_name = $1
   `;

  return await pool.query(getUserOrderQuery, [userName])
  .then((result) => {
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      //TODO: find better solution for this 
      return [];
    }
  })
  .catch((error: Error) => {
    throw new Error(`Error getting user details, ${error.message}`)
  });


}