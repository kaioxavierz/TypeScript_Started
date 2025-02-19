"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = __importDefault(require("../services/EmailService"));
const users = [
    { name: 'kaio', email: 'kaio@gmail.com' }
];
exports.default = {
    async index(req, res) {
        return res.json(users);
    },
    async create(req, res) {
        const { name, email, subject, body, attachment } = req.body;
        const emailService = new EmailService_1.default();
        emailService.sendMail({
            to: { name, email },
            message: { subject, body, attachment }
        });
        return res.status(200).send(`E-mail enviado para ${name}`);
    }
};
