
import express from "express";

import registration from "../controllers/registration.js";
import loginAuthentication from "../controllers/loginauthentication.js";
const router = express.Router();

router.post("/login",loginAuthentication);
router.post("/register", registration);


export default router;

