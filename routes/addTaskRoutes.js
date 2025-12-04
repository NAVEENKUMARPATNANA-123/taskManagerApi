
import express from "express";
import addTask from "../controllers/addTask.js";
import middleware from "../middleware/auth.js";

const router = express.Router();



router.post("/", middleware, addTask);

export default router;
