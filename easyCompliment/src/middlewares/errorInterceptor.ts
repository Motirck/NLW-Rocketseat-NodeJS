import { Request, Response, NextFunction } from 'express'
import { ErrorHandler } from '../handlers/ErrorHandler'

export function errorInterceptor(err: ErrorHandler, req: Request, res: Response, next: NextFunction) {

    if (err instanceof ErrorHandler) {
        const { name, message, description, statusCode } = err;

        return res.status(statusCode).json({ name, message, description })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
}