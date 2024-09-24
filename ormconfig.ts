import { Post } from 'src/post/entities/post.entity';
import { Category } from 'src/category/entities/category.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Tag } from 'src/tag/entities/tag.entity';
import { PostTag } from 'src/tag/entities/post-tag.entity';


export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User,Category,Comment,Post,Tag,PostTag], // Add all your entities here
  migrations: ['src/migrations/*.ts'], // Path to your migrations folder
  synchronize: false, // Set to false when using migrations
  migrationsTableName: 'migrations_history', // Optional: name for migration history table
});
