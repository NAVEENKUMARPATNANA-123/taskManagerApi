import bcrypt from "bcrypt";

import registration from "../services/registrationService.js";
import db from "../models/index.js"; 
const users = db.users; 


const a=async (req, res) => {
  const { id,email, password, role } = req.body;

  if (!email || !password || !role)
    return res.status(400).send("Email, password and role required");
  if (role==="admin"){
    return res.status(403).send("Admin registration is not allowed");
  }

  registration(req, res);
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     await users.create({id,email, password: hashedPassword, role});

//     res.send(`User registered successfully,${email},${hashedPassword}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Database error");
//   }
}

export default a;