import { type NextFunction, type Request, type Response } from "express";
interface PingControllerStructure {
  getPong: (req: Request, res: Response, next: NextFunction) => void;
}
export default PingControllerStructure;
