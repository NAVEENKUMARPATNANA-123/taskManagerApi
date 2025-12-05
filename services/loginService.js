import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js"; 
const User = db.users; 
const secretKey = "Naveen";


const a = async (req, res,user) =>{
    try {
    const userData = { email: user.email, role: user.role };
        const token = jwt.sign(
          userData,
          secretKey,
          { expiresIn: "1h" }
        );
    
        res.json({
          message: "Login successful", token});
        } catch (err) {
          console.error(err);
          res.status(500).send("Server error");
        }}
export default a;