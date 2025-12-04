import express from "express";
import taskUpdate from "../controllers/taskUpdate.js";
import middleware from "../middleware/auth.js";

const router = express.Router();



router.post("/", middleware, taskUpdate);

export default router;
