import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";

@Entity('compliments')
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({ name: 'user_sender' })
    @ManyToOne(() => User)
    userSender: User

    @Column()
    user_receiver: string;

    @JoinColumn({ name: 'user_receiver' })
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    @JoinColumn({ name: 'tag_id' })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) { // Check if it's a create of a new compliment
            this.id = uuid();
        }
    }
}

export { Compliment }