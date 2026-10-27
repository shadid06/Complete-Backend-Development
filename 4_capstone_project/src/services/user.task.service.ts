import { AppError } from "../errors/AppError.js";
import type { Task } from "../types/task.js";
import { createTask,  deleteTask,  findTaskByIdAndUserId,  getAllUserTasksByUserId, updateTask } from "../repositories/user.task.repository.js";

function validateTitle(title: unknown): string {
    if (typeof title !== 'string' || !title.trim()) {
        throw new AppError(400, 'Task title is required');
    }
    return title.trim();
}

function validateDescription(description: unknown): string {
    if (typeof description !== 'string' || !description.trim()) {
        throw new AppError(400, 'Task description is required');
    }
    return description.trim();
}


export async function createUserTask(userId: string, title: unknown, description: unknown): Promise<Task> {
    const taskTitle = validateTitle(title);
    const taskDescription = validateDescription(description);
    return await createTask(userId, taskTitle, taskDescription);
}

export async function getUserTasks(userId: string): Promise<Task[]> {
    return await getAllUserTasksByUserId(userId);
}

export async function getUserTaskByUserId(taskId:string,userId:string):Promise<Task>{
    const task=await findTaskByIdAndUserId(taskId,userId);
    if(!task){
        throw new AppError(404,"Task not found");
    }
    return task;
}

export async function updateUserTask(taskId:string,userId:string,title:string,description:string):Promise<Task>{
    const task=await findTaskByIdAndUserId(taskId,userId);
    if(!task){
        throw new AppError(404,"Task not found");
    }
    const taskTitle=validateTitle(title);
    const taskDescription=validateDescription(description);
    return await updateTask(taskId,taskTitle,taskDescription);
}

export async function deleteUserTask(taskId:string,userId:string):Promise<Task>{
    const task=await findTaskByIdAndUserId(taskId,userId);
    if(!task){
        throw new AppError(404,"Task not found");
    }
    return await deleteTask(taskId,userId);
}
