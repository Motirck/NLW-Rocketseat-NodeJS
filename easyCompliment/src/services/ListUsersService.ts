import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from "class-transformer";

class ListUsersService {
    async execute(admin: any) {
        const userRepository = getCustomRepository(UserRepository);

        const users = await userRepository.find({
            where: admin

        });

        return classToPlain(users);
    }
}

export { ListUsersService }