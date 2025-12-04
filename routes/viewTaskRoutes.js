import express from "express";
import viewTask from "../controllers/viewTask.js";
import middleware from "../middleware/auth.js";

const router = express.Router();



router.get("/", middleware, viewTask);

export default router;
