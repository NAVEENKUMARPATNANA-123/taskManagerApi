import express from "express";
const router = express.Router();

import authorization from "../middleware/authorization.js";
import viewTask from "../controllers/viewTask.js";
import viewUsers from "../controllers/viewUsers.js";



router.get("/", authorization);

router.get("/viewTask", authorization, viewTask);


router.get("/viewUsers", authorization, viewUsers);



export default router;

