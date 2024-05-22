class ServerError extends Error {
  statusCode;
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export default ServerError;
//# sourceMappingURL=ServerError.js.map
