import { Request, Response, NextFunction } from 'express'

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    // JWT will be added to this project in the next days
    const admin = true;

    if (admin) {
        return next()
    }

    return res.status(401).json({ error: 'User not authorized' })

}