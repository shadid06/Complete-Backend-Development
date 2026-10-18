

// find user by email

import { pool } from "../lib/db.js";
import type { DBUserRow, User } from "../types/userType.js";

export async function findUserByEmail(email:string):Promise <User | null>{
    const result=await pool.query<DBUserRow>(
        "SELECT id,email,password_hash,role,created_at,updated_at FROM users WHERE email=$1",
        [email]
       
    )
    if(result.rows.length===0){
        return null;
    }
    return result.rows[0] ?? null;
}



//create user



export async function createUser(email:string,password:string):Promise<User>{
    const result=await pool.query<DBUserRow>(
        "INSERT INTO users (email,password_hash) VALUES ($1,$2) RETURNING id,email,role,created_at,updated_at",
        [email,password]
    )
    if(result.rows.length===0){
        throw new Error("User not created");
    }
    return result.rows[0] as User;
}
