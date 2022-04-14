"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = require("dotenv");
const redirect_1 = __importDefault(require("./routes/redirect"));
const auth_1 = __importDefault(require("./routes/auth"));
const url_1 = __importDefault(require("./routes/url"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use((0, cookie_parser_1.default)());
console.log(path_1.default.join(__dirname.split('dist')[0], 'cupcake', 'build'));
app.use((0, cors_1.default)({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname.split('dist')[0], 'cupcake', 'build')));
app.use('/', redirect_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/links', url_1.default);
const mongo_url = (process.env.NODE_ENV === 'development'
    ? process.env.MONGO_DEV_URL
    : process.env.MONGO_PROD_URL);
mongoose_1.default
    .connect(mongo_url)
    .then((_) => console.log(`Successfully connected to ${process.env.NODE_ENV} DB 🚀. `))
    .catch((err) => {
    console.log(JSON.stringify(err));
    throw new Error(err.message);
});
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port} ⚡️.`);
});
//# sourceMappingURL=index.js.map