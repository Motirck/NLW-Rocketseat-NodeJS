import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}


class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        if (!email)
            throw new Error("Incorrect email")

        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists)
            throw new Error(`User ${name} already exists`);

        const user = userRepository.create({
            name,
            email,
            admin
        });

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService }