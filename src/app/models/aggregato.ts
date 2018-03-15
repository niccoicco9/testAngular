import { User } from './user';
import { Album } from './album';
import { Post } from './post';

export class Aggregato {
    id: number;
    user: User = new User();
    post: Post[];
    album: Album[];
}
