import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostTag } from "src/tag/entities/post-tag.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

    @ManyToOne(() => Category, (category) => category.posts)
    category: Category;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    @OneToMany(() => PostTag, (postTag) => postTag.post)
    postTags: PostTag[];
}
