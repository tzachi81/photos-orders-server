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
exports.getPhotoUrls = void 0;
const photosServices_1 = require("../services/photosServices");
const getPhotoUrls = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const count = Number(request.params.count) || 10;
    // const theme = request.params.category as string || 'all';
    // console.log('photos requested', count, theme);
    //TODO: add count limitation support (3 and above...)
    try {
        const photoUrls = yield (0, photosServices_1.fetchPhotoUrlsService)(Number(request.params.count) || 10, request.params.category || 'all');
        response.set('Cache-Control', 'no-store');
        response.json(photoUrls);
    }
    catch (error) {
        response.status(500).json({ error: 'Failed to fetch photos' });
    }
});
exports.getPhotoUrls = getPhotoUrls;
