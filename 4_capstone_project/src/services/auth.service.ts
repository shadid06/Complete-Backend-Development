
//register


import { AppError } from "../errors/AppError.js";
import { signAccesstoken } from "../lib/jwt.js";
import { logger } from "../lib/logger.js";
import {  createUser, findUserByEmail } from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

export async function registerUser(email:string,password:string):Promise<void>{
    if(!email || !password){
        throw new AppError(400,'Email and password are required');
    }
    if(!email.includes('@')){
        throw new AppError(400,'Invalid email');
    }
    if(password.length<6){
        throw new AppError(400,'Password must be at least 6 characters long');
    }

    const normalizedEmail=email.toLowerCase().trim();


    try{
        const userExist=await findUserByEmail(normalizedEmail);
        if(userExist){
            throw new AppError(400,'User already exists');
        }
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);



        await createUser(email,hash);

        
    }catch(error){
        logger.error(error);
        throw error;
    }
}



//login

export async function loginUser(req:Express.Request,res:Express.Response,next:Express.NextFunction):Promise<{accessToken:string}>{
    const {email,password}=req.body;
     if(!email || !password){
        throw new AppError(400,'Email and password are required');
    }
    if(!email.includes('@')){
        throw new AppError(400,'Invalid email');
    }
    if(password.length<6){
        throw new AppError(400,'Password must be at least 6 characters long');
    }

    const normalizedEmail=email.toLowerCase().trim();
    try{
        const userExist=await findUserByEmail(normalizedEmail);
          const isPasswordValid=await bcrypt.compare(password,userExist?.password_hash)
        if(!userExist || !isPasswordValid){
            throw new AppError(400,'Invalid email or password');
        }
      
      const accessToken=signAccesstoken({
        userId:userExist.id,
        email:userExist.email,
        role:userExist.role,
        
      });
     return{
        accessToken,
     }
      
    }catch(error){
       next(error);
    }
}