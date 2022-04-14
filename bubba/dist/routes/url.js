"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const urls_1 = require("../models/urls");
const router = express_1.default.Router();
router.post('/custom', async (req, res) => {
    try {
        const { hash, originalLink } = req.body;
        const cookie = req.cookies.snowman;
        if (!cookie) {
            return res.status(401).send({
                message: 'Something went wrong. User is unauthenticated.',
                data: null,
                errors: ['user is unauthenticated'],
            });
        }
        const token = jsonwebtoken_1.default.verify(cookie, process.env.jid);
        console.log(token);
        if (!token) {
            return res.status(401).send({
                message: 'Something went wrong. User is unauthenticated.',
                data: null,
                errors: ['user is unauthenticated'],
            });
        }
        const user = await users_1.User.findById(token.payload.userId);
        if (!user) {
            return res.status(401).send({
                message: 'Something went wrong',
                data: null,
                errors: ['user is unauthenticated'],
            });
        }
        const existingHash = await urls_1.Url.findOne({ hash });
        if (existingHash) {
            return res.status(401).send({
                message: 'Short link taken.',
                data: null,
                errors: ['Hash in use.'],
            });
        }
        const url = await urls_1.Url.create({
            creationDate: new Date().toISOString(),
            originalLink,
            hash,
            user,
        });
        return res.status(200).send({
            message: 'Custom short link available',
            data: url,
            errors: [],
        });
    }
    catch (e) {
        return res
            .status(404)
            .send({ message: e.message, data: null, errors: [JSON.stringify(e)] });
    }
});
exports.default = router;
//# sourceMappingURL=url.js.map