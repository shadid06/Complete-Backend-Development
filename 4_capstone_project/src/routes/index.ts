
// combine all our routes of application here

import {Router } from 'express'
import healthRouter from './health.routes.js';


export const apiRouter=Router();
apiRouter.use(healthRouter);

export default apiRouter;