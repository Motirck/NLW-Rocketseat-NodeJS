import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs'

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin, password }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        if (!email)
            throw new Error("Email not informed")

        const userAlreadyExists = await userRepository.findOne({ email });

        console.log(userAlreadyExists);

        if (userAlreadyExists) {
            console.log('erro encontrado');
            throw new Error(`User already exists`);
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