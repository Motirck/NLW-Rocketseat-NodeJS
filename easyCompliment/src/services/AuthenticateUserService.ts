import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserRepository } from "../repositories/UserRepository"
import { ErrorHandler } from "../handlers/ErrorHandler";

interface IAuthenticateRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({ email });

        const err = {
            name: 'AuthenticationFailed',
            message: 'Email/Password incorrect',
            statusCode: 400,
            description: 'There was an error processing your request authenticating the credentials'
        }

        if (!user) {
            throw new ErrorHandler(err);
        }

        const matchPassword = await compare(password, user.password);

        if (!matchPassword) {
            throw new ErrorHandler(err)
        }

        const token = sign(
            {
                email: user.email
            },
            '3a20eda32067a350bff355dff0fc6111',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService }