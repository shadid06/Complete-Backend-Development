// entry file for express

// express related logic
import express from "express";
import cors from "cors";
import { errorhandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";
import apiRouter from "./routes/index.js";

export function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/api',apiRouter);



    // routes


    app.use(errorhandler);
    app.use(notFound);

    return app;

}