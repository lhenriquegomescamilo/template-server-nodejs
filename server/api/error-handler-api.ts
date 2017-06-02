
import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi(error: ErrorRequestHandler, req: Request, res: Response
    , next: NextFunction) {
    console.error(`API ERROR HANDLER EXEC ${error}`);
    res
        .status(500)
        .json({
            errorCode: 'ERROR-001',
            message: 'Internal Error',
            detailError: error
        });
}