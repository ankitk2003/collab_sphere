
import jwt from "jsonwebtoken";

const JWT_USER_PASSWORD = "ankit123";
//@ts-ignore
function userMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token is missing or invalid." });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);
//@ts-ignore
    if (!decoded || !decoded.id) {
      return res.status(403).json({ message: "Invalid token." });
    }

    // Attach the decoded user ID to the request object
    //@ts-ignore
    req.userId = decoded.id;
    console.log(decoded);
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(403).json({ message: "Token verification failed.", error: error });
  }
}

export { userMiddleware };
