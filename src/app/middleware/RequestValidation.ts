import { NextFunction, Request, RequestHandler } from 'express';
import { AnyZodObject } from 'zod';
const validateRequest =
  (schema: AnyZodObject) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };
export default validateRequest;
