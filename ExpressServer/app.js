import express from "express";
import todoRouter from "./routes/todos.js";
import cors from "cors";

const app = express();

app.use(cors("http://127.0.0.1:8080"));
app.use("/todos", todoRouter);

app.listen(3000);

//Cors---empty-->
//localhost:3000/agdgd
