
import express from "express";
import bcrypt from "bcrypt";
import db from "../models/index.js"; 

const router = express.Router();
const users = db.users; 

router.post("/", async (req, res) => {
  const { id,email, password, role } = req.body;

  if (!email || !password || !role)
    return res.status(400).send("Email, password and role required");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await users.create({id,email, password: hashedPassword, role});

    res.send(`User registered successfully,${email},${hashedPassword}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});

export default router;

