import jwt from "jsonwebtoken";
const jwtSecret = "asdfgasdfg";

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  
  try {
    jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        // Assuming decoded contains the payload directly
        req.user = decoded;
        console.log(req.user); // Log decoded payload
        next();
      }
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Server Error" });
  }
}

export default auth;