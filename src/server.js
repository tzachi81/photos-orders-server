"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var photoRoutes_1 = require("./routes/photoRoutes");
var orderRoutes_1 = require("./routes/orderRoutes");
var userRoutes_1 = require("./routes/userRoutes");
var createDbRoutes_1 = require("./routes/createDbRoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes setup
app.use('/api/photos', photoRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/createDb', createDbRoutes_1.default);
//init-start listening
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
