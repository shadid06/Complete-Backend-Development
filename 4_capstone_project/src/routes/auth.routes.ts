import { Router } from "express";
import { logger } from "../lib/logger.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import { authenticate } from "../middlewares/auth.middleware.js";


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
        const {accessToken}= await loginUser(email,password);

        logger.info("user logged in successfully");

        return res.status(200).json({
            success:true,
            message:"user logged in successfully",
            data:{
                accessToken
            }
        })


    }catch(error){
        next(error);
    }
});

//get my current user information

authRouter.get("/me",authenticate(),(req,res)=>{
    res.status(200).json({
        success:true,
        data:{
            user:req.user,
        }
    })
})