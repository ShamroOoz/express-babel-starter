import express from "express";
import usersRouter from "./api/Routers/user/User";
import { dbconnection } from "./api/Helper/db";
import cors from "cors";
import morgan from "morgan";

//Init Express App
const app = express();
const Port = process.env.Port || 4000;

//init cors
app.use(cors());

//init Morgan
app.use(morgan("dev"));

//init Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB Connection
app.use(dbconnection);

//is auth  middleware
// app.use(AuthMiddleware);

//Routes
app.use("/user", usersRouter);

app.listen(Port, () =>
  console.log(`🚀 Server ready at http://localhost${Port}`)
);
