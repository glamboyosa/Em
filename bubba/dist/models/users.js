"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: {
        unique: true,
        type: String,
    },
    url: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Url',
        },
    ],
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
//# sourceMappingURL=users.js.map