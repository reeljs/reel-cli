const express = require('express');
import { Request, Response, NextFunction, Application } from 'express';
import { createServer as createViteServer } from "vite";
import { serverRenderRoute } from "./serverRenderRoute";

async function startServer(options: {} | any) {
    // creates a standard express app
    const app: Application = express();

    // // create vite using ssr mode
    // const vite = await createViteServer({
    //     server: { middlewareMode: "ssr" },
    // });
    // // register vite's middleware
    // app.use(vite.middlewares);

    // when a page is requested, call our serverRenderRoute method
    app.use("*", serverRenderRoute);

    // start the server on port 3000
    app.listen(options.port || 3000, () => console.log(`Server started on port ${options.port}`));
}

export default startServer;
module.exports = startServer;