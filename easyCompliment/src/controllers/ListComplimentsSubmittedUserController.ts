import { Request, Response } from 'express';
import { ListComplimentsSubmittedUserService } from '../services/ListComplimentsSubmittedUserService';

class ListComplimentsSubmittedUserController {

    async handle(req: Request, res: Response) {

        const listComplimentsSubmittedUserService = new ListComplimentsSubmittedUserService();

        const compliments = await listComplimentsSubmittedUserService.execute(req.user_id);

        return res.send(compliments);
    }
}

export { ListComplimentsSubmittedUserController }