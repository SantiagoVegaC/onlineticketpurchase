import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/events.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();

app.use(cors())
app.use(express.json())

app.use(indexRoutes);
app.use(tasksRoutes);
app.use(userRoutes);
app.listen(PORT);
console.log("server is running", PORT);
