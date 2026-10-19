import { pool } from "../lib/db.js";
import type { Task } from "../types/task.js";

export async function createTask(userId:string, title:string, description:string):Promise<Task>{

    const result=await pool.query<Task>(
        `INSERT INTO support_tasks (user_id,title,description) VALUES ($1,$2,$3) RETURNING *`,
        [userId,title,description]
    );
    return result.rows[0] as Task;

}

export async function getAllUserTasksFromRepo(userId: string): Promise<Task[]> {
    const result=await pool.query<Task>(
        `SELECT * FROM support_tasks WHERE user_id=$1`,
        [userId]
    );
    return result.rows as Task[];
}