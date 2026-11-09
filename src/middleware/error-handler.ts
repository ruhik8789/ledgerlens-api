import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { env } from '../config/env';

export function errorHandler(err: unknown,_req: Request,res: Response,_next: NextFunction) {
        if (err instanceof AppError) {
            res.status(err.statusCode).json({
                error: {
                    message: err.message
                }
            });

            return;
        }

        console.error(err);

        if (env.NODE_ENV === 'development' && err instanceof Error) {
            res.status(500).json({
                error: {
                    message: 'Internal Server Error',
                    stack: err.stack
                }
            });
            return;
        }

        res.status(500).json({
            error: {
                message: 'Internal Server Error'
            }
        });
}