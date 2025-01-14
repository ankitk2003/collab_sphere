import jwt from "jsonwebtoken";

const JWT_user_password = "ankit123";
//@ts-ignore
function userMiddleware(req,res,next){
  const authHeader = req.headers.authorization;

    const token=authHeader.split(" ")[1];
    const decoded=jwt.verify(token,JWT_user_password)
  if(decoded){
    //@ts-ignore
  req.userId=decoded.id;
  next();
  }
  else{
    res.status(403).json({
        message:"you are not signed in"
    })
  }
}
export{userMiddleware};