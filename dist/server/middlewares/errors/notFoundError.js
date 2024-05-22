import ServerError from "./ServerError/ServerError.js";
const notFoundError = (_req, _res, next) => {
  const error = new ServerError("Endpoint not found", 404);
  next(error);
};
export default notFoundError;
//# sourceMappingURL=notFoundError.js.map
