import db from "../models/index.js";
const users=db.users


const a=async(req,res)=>{
    const {role}=req.user.role
    if(role!=="admin"){
        return res.status(403).send("Access denied — admin only");
    }
    try{
        const availableUsers= await users.findAll({
            
        })
        res.send(availableUsers)

    }
    catch(error){
        res.send("Error fetching Users")
    }
}
export default a;