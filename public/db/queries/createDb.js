"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrdersDbQuery = void 0;
const dbSetup_1 = require("../dbSetup");
const createOrdersDbQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbSetup_1.pool.query(`CREATE TABLE orders (
              id SERIAL PRIMARY KEY,
              email VARCHAR(255) NOT NULL,
              full_name VARCHAR(255) NOT NULL,
              address TEXT NOT NULL,
              image_urls TEXT[],
              frame_color VARCHAR(50),
              user_name VARCHAR(255)
          )`);
        return { message: 'Table "orders" has been created successfully.' };
    }
    catch (error) {
        const pgError = error;
        const errorCode = pgError.code; // PostgreSQL error code (e.g., '42P07')
        const errorMessage = pgError.message; // Human-readable error message
        return { errorCode, errorMessage };
    }
});
exports.createOrdersDbQuery = createOrdersDbQuery;
