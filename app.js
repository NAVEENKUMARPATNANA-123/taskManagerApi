import dotenv from "dotenv";
dotenv.config();

import express from "express";
import db from "./config/db.js";
import authMiddleware from "./middleware/auth.js";



import authRoutes from "./routes/authRoutes.js";
import registerRoutes from "./routes/registrationRoutes.js";
import taskRoutes from "./routes/addTaskRoutes.js";
import viewTaskRoutes from "./routes/viewTaskRoutes.js";
import updateTaskRoutes from "./routes/updateTaskRoutes.js";
import deleteTaskRoutes from "./routes/deleteTaskRoute.js";
import viewUsersRoutes from "./routes/ViewUsersRoutes.js";

const app = express();
app.use(express.json());

app.use("/register", registerRoutes);
app.use("/auth", authRoutes);

app.use(authMiddleware);
app.use("/task", taskRoutes);
app.use("/view", viewTaskRoutes);
app.use("/update", updateTaskRoutes);
app.use("/delete", deleteTaskRoutes);
app.use("/users", viewUsersRoutes);

console.log(process.env.DB_DIALECT)
db.sync()
  .then(() => console.log("Tables Synced "),
app.listen(3000, () => console.log("Server running on port 3000")))
  .catch(err => console.error(err));


