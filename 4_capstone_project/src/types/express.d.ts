import type { TokenPayload } from "./userType.ts";

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload
        }
    }
}
export {};