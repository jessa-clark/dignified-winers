import jwt from "jsonwebtoken";

const TOKEN_KEY = process.env.TOKEN_KEY || "themostamazingestkey";

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, TOKEN_KEY);
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send("Unauthorized");
  }
};

export default restrict