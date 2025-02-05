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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPhotoUrlsService = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const PIXABAY_API_URL = 'https://pixabay.com/api/';
// let cache: string[] = [];
// let lastFetchTime = 0;
const fetchPhotoUrlsService = (count, category) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`count: ${count}, category: ${category}`);
    // const currentTime = Date.now();
    // const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    // if (currentTime - lastFetchTime < cacheDuration && cache.length >= count) {
    //     return cache.slice(0, count);
    // }
    const response = yield axios_1.default.get(PIXABAY_API_URL, {
        params: {
            key: PIXABAY_API_KEY,
            q: category || '',
            per_page: count || 10,
            orientation: 'horizontal'
        }
    });
    // cache = response.data.hits.map((hit: any) => hit.webformatURL);
    // lastFetchTime = currentTime;
    // return cache.slice(0, count);
    return response.data.hits.map((hit) => hit.webformatURL);
});
exports.fetchPhotoUrlsService = fetchPhotoUrlsService;
