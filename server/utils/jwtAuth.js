import jwt from "jsonwebtoken";

export const jwtAuthentication = (req, res, next) => {
  try {
    const token = req.cookies?.NoteCookieToken;
    // console.log("🔐🔐🔐🔐🔐🔐🔐🔐🔐",token)

    
    if (!token) throw new Error("Authentication failed...🔐");

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
