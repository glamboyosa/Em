"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../models/users");
const router = express_1.default.Router();
router.post('/sign-in', async (req, res) => {
    const { name, email } = req.body;
    if (!(0, isEmail_1.default)(email) && name.length < 2) {
        return res
            .status(400)
            .send({ message: 'Invalid Input', data: null, errors: [] });
    }
    try {
        const existingUser = await users_1.User.findOne({ email });
        if (existingUser) {
            const token = jsonwebtoken_1.default.sign({ userId: existingUser.id }, process.env.jid, {
                expiresIn: '7d',
            });
            const maxAge = 1000 * 60 * 60 * 24 * 7;
            res.cookie('snowman', token, {
                secure: true,
                maxAge: maxAge,
                httpOnly: process.env.NODE_ENV === 'production',
            });
            return res
                .status(200)
                .send({ message: 'Success', data: existingUser, errors: [] });
        }
        const user = await users_1.User.create({
            name,
            email,
        });
        await user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.jid, {
            expiresIn: '7d',
        });
        const maxAge = 1000 * 60 * 60 * 24 * 7;
        res.cookie('snowman', token, {
            secure: true,
            maxAge: maxAge,
            httpOnly: process.env.NODE_ENV === 'production',
        });
        return res.status(200).send({ message: 'Success', data: user, errors: [] });
    }
    catch (e) {
        return res
            .status(404)
            .send({ message: e.message, data: null, errors: [JSON.stringify(e)] });
    }
});
router.get('/sign-out', async (_, res) => {
    res.clearCookie('snowman');
    res.status(200).send({ message: 'Success', data: null, errors: [] });
});
exports.default = router;
//# sourceMappingURL=auth.js.map