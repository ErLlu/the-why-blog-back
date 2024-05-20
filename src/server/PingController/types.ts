import { type NextFunction, type Request, type Response } from "express";
type PingControllerStructure = {
  getPong: (req: Request, res: Response, next: NextFunction) => void;
};
export default PingControllerStructure;
