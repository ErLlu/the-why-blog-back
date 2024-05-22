import { type NextFunction, type Request, type Response } from "express";
import type PostsControllerStructure from "./types";
import type PostsRepository from "../repositories/types";
import ServerError from "../../server/middlewares/errors/ServerError/ServerError";

class PostController implements PostsControllerStructure {
  constructor(public repository: PostsRepository) {}

  getPosts = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const posts = await this.repository.getAll();
      res.status(200).json({ posts });
    } catch (error) {
      const serverError = new ServerError((error as Error).message, 404);
      next(serverError);
    }
  };
}

export default PostController;
