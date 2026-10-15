
import { env } from "../config/env.js";
import type { TokenPayload } from "../types/userType.js";
import jwt, { type SignOptions } from "jsonwebtoken";


export function signAccesstoken(payload:TokenPayload):string{

    const signOptions:SignOptions={
        expiresIn:env.accessTokenExpiry as NonNullable<SignOptions['expiresIn']>,
    };

    const token=jwt.sign(payload,env.jwtSecret,signOptions);
    return token;
}

//