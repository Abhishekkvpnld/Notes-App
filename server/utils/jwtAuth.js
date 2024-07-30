import jwt from "jsonwebtoken";

export const jwtAuthentication = (req, res, next) => {
  try {
    // const token = req.cookies?.NoteCookieToken;
    let token = req.header("Authorization");
    if (!token) throw new Error("Authentication failed...🔐");
    
    if(token.startsWith("Bearer ")){
    token = token.slice(7,token.length).trimLeft();
    }
    
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, data) => {
      if (err) throw new Error("Authentication error🔐");
      req.user = data;

      next();
    });
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(401).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
