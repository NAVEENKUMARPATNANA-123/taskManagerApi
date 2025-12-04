import express from "express";
import db from "../models/index.js";

const router=express.Router()

const users=db.users
router.get("/",async(req,res)=>{
    const {role}=req.user.role
    if(role!=="admin"){
        return res.status(403).send("Access denied — admin only");
    }
    try{
        const availableUsers= await users.findAll({
            attributes: ["email", "role"]
        })
        res.send(availableUsers)

    }
    catch(error){
        res.send("Error fetching Users")
    }
})
export default router;
