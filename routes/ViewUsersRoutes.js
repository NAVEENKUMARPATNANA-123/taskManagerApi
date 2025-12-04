import express from "express";
import viewUsers from "../controllers/viewUsers.js";
import middleware from "../middleware/auth.js";

const router=express.Router()


router.get("/", middleware, viewUsers);
export default router;
