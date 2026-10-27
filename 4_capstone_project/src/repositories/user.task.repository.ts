import { AppError } from "../errors/AppError.js";
import { pool } from "../lib/db.js";
import type { Task } from "../types/task.js";

export async function createTask(userId:string, title:string, description:string):Promise<Task>{

    const result=await pool.query<Task>(
        `INSERT INTO support_tasks (user_id,title,description) VALUES ($1,$2,$3) RETURNING *`,
        [userId,title,description]
    );
    return result.rows[0] as Task;

}

export async function getAllUserTasksByUserId(userId: string): Promise<Task[]> {
    const result=await pool.query<Task>(
        `SELECT * FROM support_tasks WHERE user_id=$1 ORDER BY created_at DESC`,
        [userId]
    );
    return result.rows as Task[];
}

export async function findTaskByIdAndUserId(taskId:string,userId:string):Promise<Task>{
    const result=await pool.query<Task>(
        `SELECT * FROM support_tasks WHERE id=$1 AND user_id=$2`,
        [taskId,userId]
    );
    if(result.rows.length===0){
        throw new AppError(404,"Task not found");
    }
    return result.rows[0] as Task ?? null;
}

export async function updateTask(taskId:string,title:string,description:string):Promise<Task>{
    const result=await pool.query<Task>(
        `UPDATE support_tasks SET title=$1,description=$2 WHERE id=$3 RETURNING *`,
        [title,description,taskId]
    );
    if(result.rows.length===0){
        throw new AppError(404,"Task not found");
    }
    return result.rows[0] as Task ?? null;
}

export async function deleteTask(taskId:string,userId:string):Promise<Task>{
    const result=await pool.query<Task>(
        `DELETE FROM support_tasks WHERE id=$1 AND user_id=$2 RETURNING *`,
        [taskId,userId]
    );
    if(result.rows.length===0){
        throw new AppError(404,"Task not found");
    }
    return result.rows[0] as Task ?? null;
}