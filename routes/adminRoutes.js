const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.user.role === "admin") {
    res.send(`Welcome admin, ${req.user.email}`);
  } else {
    res.status(403).send("Access denied — admin only");
  }
});

module.exports = router;
