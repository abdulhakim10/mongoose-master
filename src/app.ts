import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";


const app: Application = express();

// middle ware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // inserting a test data into mongoDB

    /*
    1. Interface
    2. Schema
    3. Model
    4. Database Query
    */

    // res.send('Hello Mongoose!');
    // next();

    // creating an interface
    interface IUser{
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email: string;
        contactNo: string;
        emergencyContact: string;
        presentAddress: string;
        permanentAddress: string;
    };

    // creating schema using interface
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },

        name: {
            firstName:{
                type: String,
                required: true
            },
            middleName:{
                type: String,
            },
            lastName:{
                type: String,
                required: true
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["male", "female"]
        },
        email:{
            type: String,
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContact: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        },
      });
  });

  export default app;