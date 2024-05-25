import express from "express";
import PostController from "../../posts/controller/PostsController";
import MongoosePostsRepository from "../../posts/repositories/MongoosePostsRepository";
import Post from "../../posts/model/Post";

const postsRouter = express.Router();

const postsRepository = new MongoosePostsRepository(Post);
const postsController = new PostController(postsRepository);

postsRouter.get("/", postsController.getPosts);

export default postsRouter;
