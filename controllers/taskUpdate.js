import express from "express";
import db from "../models/index.js"; 

const Task = db.Task; 

const a=async (req, res) => {
  if (req.user.role !== "user")
    return res.status(403).send("Only users can update tasks");

  const { task,status } = req.body;
  if (!task) return res.status(400).send("Task required");

  await Task.update({ status}, { where: { task } });
  res.send("Task updated successfully");
}

export default a;