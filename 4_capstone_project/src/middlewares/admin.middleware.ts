import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import { authRouter } from "../routes/auth.routes.js";

export function requiredAdmin(_req:Request,_res:Response,next:NextFunction):void{
try{
    const user=_req.user;
    if(!user){
        throw new AppError(401,'Access token is required');
    }
    if(user.role!=='ADMIN'){
        throw new AppError(403,'Only ADMIN can perform this action');
    }
    next();
}catch(error){
    next(error);
}
}

