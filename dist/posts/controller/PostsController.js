import ServerError from "../../server/middlewares/errors/ServerError/ServerError";
class PostController {
  repository;
  constructor(repository) {
    this.repository = repository;
  }
  getPosts = async (_req, res, next) => {
    try {
      const posts = await this.repository.getAll();
      res.status(200).json({ posts });
    } catch (error) {
      const serverError = new ServerError(error.message, 404);
      next(serverError);
    }
  };
}
export default PostController;
//# sourceMappingURL=PostsController.js.map
