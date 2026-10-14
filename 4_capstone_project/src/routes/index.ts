
// combine all our routes of application here

import {Router } from 'express'
import healthRouter from './health.routes.js';
import { authRouter } from './auth.routes.js';


const apiRouter=Router();
apiRouter.use(healthRouter);
apiRouter.use('/auth',authRouter);
export default apiRouter;