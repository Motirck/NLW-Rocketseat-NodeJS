import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs'
import { ErrorHandler } from "../handlers/ErrorHandler";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin = false, password }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        const err = {
            name: 'CreateUserFailed',
            message: 'Email not informed',
            statusCode: 400,
            description: 'There was an error processing your request'
        }

        if (!email)
            throw new ErrorHandler(err);

        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists) {
            const customError = err;
            customError.message = 'User already exists'
            throw new ErrorHandler(customError);
        }

        const hashPassword = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            admin,
            password: hashPassword // It wouldn't necessary colon (:) if the name of the parameter would be the same
        });

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService }