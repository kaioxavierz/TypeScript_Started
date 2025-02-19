import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'kaio', email: 'kaio@gmail.com'}
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
      const {name, email, subject, body, attachment} = req.body;
      const emailService = new EmailService();
      emailService.sendMail({
        to: {name, email}, 
        message: {subject, body, attachment}
      });
      return res.status(200).send(`E-mail enviado para ${name}`)
    }
}