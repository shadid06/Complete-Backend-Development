import dotenv from "dotenv";

dotenv.config();

function checkRequiredEnvVariables(key: string): string{
    const value = process.env[key];
    if(!value){
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

export const env = {
    port: Number(process.env.PORT ?? 4008),
    isProduction: (process.env.NODE_ENV ?? "development") === "production",
    nodeEnv: process.env.NODE_ENV ?? "development",
    logLevel: process.env.LOG_LEVEL ?? "info",
    databaseUrl: checkRequiredEnvVariables("DATABASE_URL"),
    jwtSecret: checkRequiredEnvVariables("JWT_SECRET"),
    accessTokenExpiry:checkRequiredEnvVariables("JWT_ACCESS_EXPIRES_IN"),
    // refreshTokenExpiry:process.env.REFRESH_TOKEN_EXPIRY || '7d',
} as const;