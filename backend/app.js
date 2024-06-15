import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Разрешить запросы с этого домена
  optionsSuccessStatus: 200, // Для поддержки старых браузеров
};

app.use(cors(corsOptions));

import todoRouter from "./todo/todo-router.js";

app.use(express.json());

app.use("/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello from express server!");
});

export default app;
