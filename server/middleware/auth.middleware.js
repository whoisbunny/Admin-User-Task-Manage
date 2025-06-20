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

module.exports = {
  authMiddleware,
};
