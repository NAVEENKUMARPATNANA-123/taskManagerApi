import  jwt  from "jsonwebtoken"

const secretkey = "Naveen";

const a = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send("No token provided");

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secretkey, (err, user) => {
    if (err) return res.status(403).send("Invalid or  token expired");
    req.user = user;
    next();
  });
};

export default a;
