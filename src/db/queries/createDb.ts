import { pool } from '../dbSetup';


export const createOrdersDbQuery = async (): Promise<{ message?: string; errorCode?: string; errorMessage?: string }> => {

  try {
    await pool.query(
      `CREATE TABLE orders (
              id SERIAL PRIMARY KEY,
              email VARCHAR(255) NOT NULL,
              full_name VARCHAR(255) NOT NULL,
              address TEXT NOT NULL,
              image_urls TEXT[],
              frame_color VARCHAR(50),
              user_name VARCHAR(255)
          )`
    );
    return { message: 'Table "orders" has been created successfully.' };
  } catch (error) {
    const pgError = error as { code?: string; message?: string; detail?: string; hint?: string };
    const errorCode = pgError.code; // PostgreSQL error code (e.g., '42P07')
    const errorMessage = pgError.message; // Human-readable error message

    return { errorCode, errorMessage };
  }
};