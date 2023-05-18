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
    4. Database Query on model
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

    //   create model
    const User = model<IUser>('User', userSchema);

    const createUserToDB = async () => {
        const user = new User({
            id: "898",
            role: "student",
            password: "58498",
            name: {
                firstName: "Md",
                middleName: "Shadab",
                lastName: "Hamid",
            },
            dateOfBirth: "5/4/1988",
            gender: "male",
            email: "shadab@hamid.com",
            contactNo: "015438905",
            emergencyContact: "0184389709",
            presentAddress: "23/A ghosh road",
            permanentAddress: "33/C das road uganda",
          });
          await user.save();
          console.log(user);
    };

    createUserToDB();
  });

  export default app;