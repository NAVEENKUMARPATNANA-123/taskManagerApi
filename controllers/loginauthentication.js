import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js"; 
import loginService from "../services/loginService.js";

const User = db.users; 

const secretKey = "Naveen";


 const a = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).send("Email, password and role required");
    }
    const user = await User.findOne({ where: { email } })
    if (!user) { 
      return res.status(401).send("Invalid email or password");
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      console.log(match)
      return res.status(401).send("Invalid  password");
    }
    if (user.role !== role) {
      return res.status(403).send("Access denied: role mismatch");
    }
   
    loginService(req, res,user);

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

export default a;