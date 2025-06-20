const jwt = require("jsonwebtoken");

 function generateAuthToken(userId) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION || "1h",
  });
  return token;
}


const verifyAuthToken = (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error("Invalid token");
    }
  };

module.exports = {
  generateAuthToken,
  verifyAuthToken
};