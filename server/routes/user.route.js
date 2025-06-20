const express = require("express");
const {
  createUser,
  getAllUsers,
  userLogin,
} = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/", createUser);
router.get("/", authMiddleware, getAllUsers);
router.post("/login", userLogin);

module.exports = router;
