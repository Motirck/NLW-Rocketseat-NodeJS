import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListComplimentsSubmittedUserService {

    /**
     * Returns the list of compliments sent by the user
     * who is currently logged in to the application
     */
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliments = complimentRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ['userSender', 'userReceiver', 'tag']
        });

        return compliments;
    }
}

export { ListComplimentsSubmittedUserService }