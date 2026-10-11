import pino from "pino";
import { env } from "../config/env.js";

const options: pino.LoggerOptions = {
    level: env.logLevel,
    transport: env.isProduction ? undefined : { target: "pino-pretty", options: {
        colorize: true,
        translateTime: "SYS:standard",
       
    } },
} as pino.LoggerOptions;

export const logger = pino(options);