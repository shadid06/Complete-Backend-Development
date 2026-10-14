
import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger.js";
import { AppError } from "../errors/AppError.js";

export function errorhandler(
    err:Error,
    _req:Request,
    res:Response,
    _next:NextFunction
    
):void{
    if(err instanceof AppError){
        res.status(err.statusCode).json({
            success:false,
            message:err.message
        });
        return;
    }
   logger.error(err,"Something went wrong");
   res.status(500).json({
       success:false,
       message:"Internal Server Error"
   })

    
}