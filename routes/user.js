
import express from "express";
import addTask from "../controllers/addTask.js";
import deleteTask from "../controllers/deleteTask.js";
import taskUpdate from "../controllers/taskUpdate.js";
import authentication from "../middleware/auth.js";

const router = express.Router();



router.post("/addTask", authentication, addTask);

router.post("/deleteTask", authentication, deleteTask);

router.post("/updateTask", authentication, taskUpdate);

export default router;
