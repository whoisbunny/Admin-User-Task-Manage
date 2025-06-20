const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded?.userId);
      if (!user) throw new Error("Invalid token");
      req.user = user;

      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } else {
    return res
      .status(401)
      .json({ message: "There is no authorization token " });
  }
};

// Role-Based Access Control Middleware
const verifyRole =
  (...allowedRoles) =>
  (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      console.log("problem in back auth");
      return res
        .status(403)
        .json({ message: "Access denied: Insufficient permissions" });
    }
    next();
  };

module.exports = {
  authMiddleware,
  verifyRole,
};
