
import express from "express";
import deleteTask from "../controllers/deleteTask.js";
import middleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", middleware, deleteTask);
 
export default router;
