import { Router } from "express";
import { logger } from "../lib/logger.js";
import { loginUser, registerUser } from "../services/auth.service.js";


export const authRouter:Router=Router();


authRouter.post('/register',async (_req,res,next)=>{
    try{
        const {email,password}=_req.body;

        // not writing service logi chere
        await registerUser(email,password);

        logger.info("user registered successfully");

        return res.status(201).json({
            success:true,
            message:"user registered successfully"
        })
    }catch(error){
        next(error);
    }
});

authRouter.post('/login',async(_req,res,next)=>{
    try{
        const {email,password}=_req.body;
        const {accessToken}= await loginUser(_req,res,next);

        logger.info("user logged in successfully");

        return res.status(200).json({
            success:true,
            message:"user logged in successfully"
        })


    }catch(error){
        next(error);
    }
});