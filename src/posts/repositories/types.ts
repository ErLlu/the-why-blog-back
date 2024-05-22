import type Post from "../types";

interface PostsRepository {
  getAll(): Promise<Post[]>;
}

export default PostsRepository;
