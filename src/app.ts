// import express from "express";
import cors from "cors"
import authRoutes from "./modules/auth/auth.route";
import taskRoutes from "./modules/task/task.route";
import errorMiddleware from "./middlewares/error.middleware";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use(errorMiddleware);

export default app;
