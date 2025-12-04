
import express from "express";

import loginAuthentication from "../controllers/loginauthentication.js";
const router = express.Router();

router.post("/login", loginAuthentication);

export default router;
