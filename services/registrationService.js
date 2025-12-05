import db from "../models/index.js"; 
import bcrypt from "bcrypt";
const users = db.users; 
const a=async (req, res) => {
  const { id,email, password, role } = req.body;
try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)

    await users.create({id,email, password: hashedPassword, role});

    res.send(`User registered successfully,${email},${hashedPassword}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
}
export default a;