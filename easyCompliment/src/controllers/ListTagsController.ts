import { Request, Response } from 'express';
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        return res.send(tags);
    }

    async handleOne(req: Request, res: Response) {
        const { tagId } = req.params;
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.executeOne(tagId);

        return res.send(tags);
    }
}

export { ListTagsController }