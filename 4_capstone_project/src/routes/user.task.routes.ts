import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createUserTask, getAllUserTasks } from "../services/user.task.service.js";


export const userTaskRouter=Router();

userTaskRouter.use(authenticate());

userTaskRouter.post("/",async(req,res,next)=>{
    try{

        const task = await createUserTask(req.user!.userId, req.body.title, req.body.description);
        res.status(201).json({message:"Task created successfully",data:{task}});
    }catch(error){
        next(error);
    }
});

userTaskRouter.get("/",async(req,res,next)=>{
    try{
        const tasks=await getAllUserTasks(req.user!.userId);
        res.status(200).json({message:"Tasks fetched successfully",data:{tasks}});
    }catch(error){
        next(error);
    }
})
