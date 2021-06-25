import { Request, Response } from 'express';
import { ListComplimentsReceivedUserService } from '../services/ListComplimentsReceivedUserService';

class ListComplimentsReceivedUserController {

    async handle(req: Request, res: Response) {

        const { user_id } = req;

        const listComplimentsReceivedUserService = new ListComplimentsReceivedUserService();

        const compliments = await listComplimentsReceivedUserService.execute(user_id);

        return res.send(compliments);
    }
}

export { ListComplimentsReceivedUserController };