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
exports.createOrder = void 0;
const dbSetup_1 = require("../dbSetup");
const createOrder = (orderDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullName, fullAddress, imageUrls, frameColor, userName } = orderDetails;
    const addOrderQuery = `
  INSERT INTO orders (email, full_name, address, image_urls, frame_color, user_name)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    return yield dbSetup_1.pool.query(addOrderQuery, [email, fullName, fullAddress, imageUrls, frameColor, userName])
        .then((result) => {
        if (result.rows.length > 0) {
            return result.rows[0];
        }
        else {
            //TODO: find better solution for this 
            return [];
        }
    })
        .catch((error) => {
        throw new Error(`Error creating order, ${error.message}`);
    });
});
exports.createOrder = createOrder;
