import express from "express";
import taskUpdate from "../controllers/taskUpdate.js";

const router = express.Router();



router.post("/",  taskUpdate);

export default router;
