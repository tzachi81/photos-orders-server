"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var photoController_1 = require("../controllers/photoController");
var router = (0, express_1.Router)();
router.get('/:count/:category?', photoController_1.getPhotoUrls);
exports.default = router;
