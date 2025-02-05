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
exports.getUserQuery = void 0;
const dbSetup_1 = require("../dbSetup");
const getUserQuery = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    const getUserOrderQuery = `
   SELECT * 
   FROM orders
   WHERE user_name = $1
   `;
    return yield dbSetup_1.pool.query(getUserOrderQuery, [userName])
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
        throw new Error(`Error getting user details, ${error.message}`);
    });
});
exports.getUserQuery = getUserQuery;
