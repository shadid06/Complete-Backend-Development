import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createUserTask } from "../services/user.task.service.js";


export const userTaskRouter=Router();

userTaskRouter.use(authenticate());

userTaskRouter.post("/",async(req,res,next)=>{
    try{

        const task = await createUserTask();
    }catch(error){
        next(error);
    }
});
