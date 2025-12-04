import express from "express";
import db from "../models/index.js"; 

const router = express.Router();

const Task = db.Task; 

router.get("/", async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied — admin only");
  }

  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
});

export default router;
