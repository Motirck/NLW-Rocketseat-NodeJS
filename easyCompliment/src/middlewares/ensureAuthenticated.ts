import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    /**
    * Divide by space the token. E.g. "Bearer 1234"  
    * [,token] ignore the first array position and get only the second one
    */
    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(token, '3a20eda32067a350bff355dff0fc6111') as IPayload;
        
        // Recover user id
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }
}