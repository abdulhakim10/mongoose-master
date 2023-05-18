import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";


const app: Application = express();

// middle ware
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello Mongoose!')
  });

  export default app;