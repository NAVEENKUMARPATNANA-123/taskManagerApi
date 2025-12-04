import db from "../models/index.js"; 
const Task = db.Task; 


const a=async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied — admin only");
  }

  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
}

export default a;