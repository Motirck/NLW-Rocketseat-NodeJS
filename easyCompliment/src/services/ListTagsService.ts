import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {
    async execute() {
        const tagRepository = getCustomRepository(TagRepository);

        const tags = await tagRepository.find();

        //classToPlain adds the custom_Name to the json already returned with the tags.
        return classToPlain(tags);
    }
    async executeOne(id: string) {
        const tagRepository = getCustomRepository(TagRepository);

        const tags = await tagRepository.find({ where: { id: id } });

        //classToPlain adds the custom_Name to the json already returned with the tags.
        return classToPlain(tags);
    }
}

export { ListTagsService }