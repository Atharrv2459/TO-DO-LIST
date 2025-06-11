import jwt from "jsonwebtoken";
export const authorization = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;

    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};
