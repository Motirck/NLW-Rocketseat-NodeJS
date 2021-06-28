import { Request, Response } from 'express'

class ServiceTermsController {
    async handle(req: Request, res: Response) {
        const terms = { "message": "Service Terms API" }
        return res.json(terms);
    }
}

export { ServiceTermsController };