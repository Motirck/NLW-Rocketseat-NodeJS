import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListComplimentsReceivedUserService {

    /**
     * Returns the list of compliments received by the user
     * who is currently logged in to the application
     */
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliments = complimentRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ['userSender', 'userReceiver', 'tag']
        });

        return compliments;
    }
}

export { ListComplimentsReceivedUserService }