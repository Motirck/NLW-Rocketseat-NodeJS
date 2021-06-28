import { getCustomRepository } from "typeorm";
import { ErrorHandler } from "../handlers/ErrorHandler";
import { TagRepository } from "../repositories/TagRepository";

class CreateTagService {

    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepository);

        const err = {
            name: 'CreateTagFailed',
            message: 'Name not informed',
            statusCode: 400,
            description: 'There was an error processing your request'
        }

        if (!name)
            throw new ErrorHandler(err)

        const tagAlreadyExists = await tagRepository.findOne({ name });

        if (tagAlreadyExists){
            const customError = err;
            customError.message = 'Tag already exists';
            customError.statusCode = 422;
            throw new ErrorHandler(customError);
        }

        const tag = tagRepository.create({ name });

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }