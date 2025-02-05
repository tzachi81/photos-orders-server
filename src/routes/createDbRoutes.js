"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderController_1 = require("../controllers/orderController");
var router = (0, express_1.Router)();
router.post('/', orderController_1.createOrdersDb);
exports.default = router;
