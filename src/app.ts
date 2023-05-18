import express, { Application } from "express";
import cors from "cors";

// Application routes
import userRoutes from "./app/modules/user/user.route"

const app: Application = express();

// middle ware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/user", userRoutes);

  
export default app;

    // inserting a test data into mongoDB

    /*
    1. Interface
    2. Schema
    3. Model
    4. Database Query on model
    */

    // res.send('Hello Mongoose!');
    // next();


//   Pattern MVC / Modular

/**
 * Interface -> interface.ts
 * Schema, Model -> model.ts
 * route
 * route.function -> controller.ts
 * database query function -> service
 */