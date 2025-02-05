"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photoController_1 = require("../controllers/photoController");
const router = (0, express_1.Router)();
router.get('/:count/:category?', photoController_1.getPhotoUrls);
exports.default = router;
