import { getCustomRepository } from "typeorm"
import { ErrorHandler } from "../handlers/ErrorHandler";
import { ComplimentRepository } from '../repositories/ComplimentRepository'
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepository = getCustomRepository(UserRepository);

        if (user_sender === user_receiver) {
            const err = {
                name: 'CreateComplimentFailed',
                message: 'Receiver user cannot be equal Sender user',
                statusCode: 400,
                description: 'Is it easy to compliment ourselves, lets leave someone else do it'
            }

            throw new ErrorHandler(err);
        }

        const userReceiverExists = await userRepository.findOne(user_receiver);

        if (!userReceiverExists) {
            const err = {
                name: 'CompliemntFailed',
                message: 'User Receiver does not exists',
                statusCode: 404,
                description: 'There was an error processing your request'
            }

            throw new ErrorHandler(err);
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }