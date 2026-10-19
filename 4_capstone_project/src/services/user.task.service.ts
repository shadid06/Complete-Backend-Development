import { AppError } from "../errors/AppError.js";
import { createTask,  getAllUserTasksFromRepo } from "../repositories/admin.task.repository.js";
import type { Task } from "../types/task.js";

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

export async function getAllUserTasks(userId: string): Promise<Task[]> {
    return await getAllUserTasksFromRepo(userId);
}