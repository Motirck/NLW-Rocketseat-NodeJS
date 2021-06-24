import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserRepository } from "../repositories/UserRepository"

interface IAuthenticateRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new Error('Email/Password incorrect')
        }

        const matchPassword = await compare(password, user.password);

        if (!matchPassword) {
            throw new Error('Email/Password incorrect')
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