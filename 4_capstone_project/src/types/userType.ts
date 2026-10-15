export type User={
    id:string;
    email:string;
    role:string;
    // firstName:string;
  
    created_at:Date;
    updated_at:Date;
    
}

export type DBUserRow={
    id:string;
    email:string;
    role:string;
    // firstName:string;
    created_at:Date;
    updated_at:Date;
}

export type DBUserRowWithpassword =DBUserRow & {
    password_hash:string | null;
}

export type TokenPayload={
    userId:string;
    email:string;
    role:string;
}