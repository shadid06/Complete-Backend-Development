
import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger.js";

export function errorhandler(
    err:Error,
    _req:Request,
    res:Response,
    _next:NextFunction
    
):void{
   logger.error(err,"Something went wrong");
   res.status(500).json({
       success:false,
       message:"Internal Server Error"
   })

    
}