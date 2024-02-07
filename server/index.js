import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import eventRoutes from "./routes/events.routes.js";
import userRoutes from "./routes/user.routes.js";
import bodyParser from 'body-parser';
const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(indexRoutes);
app.use(eventRoutes);
app.use(userRoutes);
app.listen(PORT);
console.log("server is running", PORT);
