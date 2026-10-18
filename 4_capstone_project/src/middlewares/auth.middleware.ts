
import type { NextFunction, Request, Response } from "express";
import { verifyAccesstoken } from "../lib/jwt.js";
import { AppError } from "../errors/AppError.js";


export function authenticate(){
    return (req:Request,_res:Response,next:NextFunction)=>{
        try{
            const authHeader=req.headers.authorization;
            if(!authHeader || !authHeader.startsWith('Bearer ')){
                next(new AppError(401,'access token is required'));
                return;
            }
            const token=authHeader.split(' ')[1];
            const decodedToken=verifyAccesstoken(token || "");
            req.user=decodedToken;
            next();
        }catch(error){
            next(error);
        }
    }
}