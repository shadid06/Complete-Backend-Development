
import { env } from "../config/env.js";
import { AppError } from "../errors/AppError.js";
import type { TokenPayload } from "../types/userType.js";
import jwt, { type SignOptions } from "jsonwebtoken";


export function signAccesstoken(payload:TokenPayload):string{

    const signOptions:SignOptions={
        expiresIn:env.accessTokenExpiry as NonNullable<SignOptions['expiresIn']>,
    };

    const token=jwt.sign(payload,env.jwtSecret,signOptions);
    return token;
}

//verify

export function verifyAccesstoken(token:string):TokenPayload{
    try{
        const decodedToken=jwt.verify(token,env.jwtSecret) as TokenPayload;
        return decodedToken;
    }catch(error){
       
        throw new AppError(401,'invalid access token');
    }
}