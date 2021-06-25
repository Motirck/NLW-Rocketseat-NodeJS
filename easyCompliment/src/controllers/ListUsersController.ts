import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';

class ListUsersController {
    async handleAdminUsers(req: Request, res: Response) {
        await handleAll(req, res, { admin: true });
    }
    async handleNonAdminUsers(req: Request, res: Response) {
        await handleAll(req, res, { admin: false });
    }
    async handleAll(req: Request, res: Response) {
        await handleAll(req, res, {});
    }
}

async function handleAll(req: Request, res: Response, admin: any) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute(admin);

    return res.json(users);
}

export { ListUsersController }