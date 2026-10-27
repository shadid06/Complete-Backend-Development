import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createUserTask, deleteUserTask, getUserTaskByUserId, getUserTasks, updateUserTask } from "../services/user.task.service.js";


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
        const tasks=await getUserTasks(req.user!.userId);
        res.status(200).json({message:"Tasks fetched successfully",data:{tasks}});
    }catch(error){
        next(error);
    }
});

userTaskRouter.get("/:taskId",async(req,res,next)=>{
    try{
        const task=await getUserTaskByUserId(req.params.taskId,req.user!.userId);        
        res.status(200).json({status:true,message:"Task fetched successfully",data:{task}});
    }catch(error){
        next(error);
    }
});

userTaskRouter.patch("/:taskId",async(req,res,next)=>{
    try{
        const task=await updateUserTask(req.params.taskId,req.user!.userId,req.body.title,req.body.description);
        res.status(200).json({status:true,message:"Task updated successfully",data:{task}});
    }catch(error){
        next(error);
    }
});

userTaskRouter.delete("/:taskId",async(req,res,next)=>{
    try{
        const task=await deleteUserTask(req.params.taskId,req.user!.userId);
        res.status(200).json({status:true,message:"Task deleted successfully",data:{task}});
    }catch(error){
        next(error);
    }
});
