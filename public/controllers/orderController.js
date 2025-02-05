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
exports.createOrdersDb = exports.addOrder = void 0;
const ordersServices_1 = require("../services/ordersServices");
const createDb_1 = require("../db/queries/createDb");
const addOrder = (request, result) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, ordersServices_1.addOrderService)(request.body)
        .then(response => result.status(201).json(response))
        .catch((error) => {
        throw new Error(error.message);
    });
});
exports.addOrder = addOrder;
const createOrdersDb = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, createDb_1.createOrdersDbQuery)();
    console.log('result', result);
    if (result.errorCode) {
        response.status(500).json({ error: result.errorMessage });
    }
    else {
        response.status(200).json(result.message);
    }
});
exports.createOrdersDb = createOrdersDb;
