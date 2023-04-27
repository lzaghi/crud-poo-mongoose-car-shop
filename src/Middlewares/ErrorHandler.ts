import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    let status = 500;
    if (error.message === 'Invalid mongo id') status = 422;
    if (error.message === 'Car not found') status = 404;
    res.status(status).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;