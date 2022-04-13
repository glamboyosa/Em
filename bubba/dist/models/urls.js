"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    originalLink: String,
    hash: {
        type: String,
        unique: true,
        length: 6,
    },
    creationDate: String,
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
});
const Url = (0, mongoose_1.model)('Url', urlSchema);
exports.Url = Url;
//# sourceMappingURL=urls.js.map