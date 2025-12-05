import db from "../models/index.js";
const users=db.users


const a=async(req,res)=>{
   
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