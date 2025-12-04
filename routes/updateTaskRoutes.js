
import express from "express";
import db from "../models/index.js"; 

const router = express.Router();

const Task = db.Task; 

router.post("/",  (req, res) => {
  if (req.user.role !== "user")
    return res.status(403).send("Only users can update tasks");

  const { task,status } = req.body;
  if (!task) return res.status(400).send("Task required");

  Task.update({ status}, { where: { task } });
  res.send("Task updated successfully");
});

export default router;
