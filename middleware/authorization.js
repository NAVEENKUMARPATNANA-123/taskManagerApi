
import  jwt  from "jsonwebtoken"

const secretkey = "Naveen";

const a = (req, res, next) => {
    if (req.user.role === "admin") {
    res.send(`Welcome admin, ${req.user.email}`);
  } else {
    res.status(403).send("Access denied — admin only");
  }
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send("No token provided");

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secretkey, (err, user) => {
    if (err) return res.status(403).send("Invalid or  token");
    req.user = user;
    next();
  });
};




export default a;