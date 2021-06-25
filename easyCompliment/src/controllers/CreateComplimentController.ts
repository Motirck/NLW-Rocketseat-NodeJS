import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { tag_id, user_receiver, message } = req.body;
        const { user_id } = req;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender: user_id, // It wouldn't necessary colon (:) if the name of the parameter would be the same
            user_receiver,
            message
        });

        return res.json(compliment);
    }
}

export { CreateComplimentController };