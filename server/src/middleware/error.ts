
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../core/errors';
import { Logger } from '../core/logger';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  Logger.error(err.message, { stack: err.stack, url: req.url });

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        statusCode: err.statusCode
      }
    });
  }

  return res.status(500).json({
    success: false,
    error: {
      message: 'Internal Server Error',
      statusCode: 500
    }
  });
}
