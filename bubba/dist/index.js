"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname.split('dist')[0], 'cupcake', 'build')));
app.use(express_1.default.json());
console.log(path_1.default.join(__dirname.split('dist')[0], 'cupcake', 'build'));
app.get('/:key', (_, res) => {
    res.redirect(301, 'https://github.com/glamboyosa');
});
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
//# sourceMappingURL=index.js.map