import db from "../models/index.js"; 
const Task = db.Task; 
const a=async (req, res) => {
  if (req.user.role !== "user")
    return res.status(403).send("Only users can add tasks");

  const { task,status } = req.body;
  if (!task) return res.status(400).send("Task required");

  Task.create({ task, status });
  res.send("Task added successfully");
}
export default a;