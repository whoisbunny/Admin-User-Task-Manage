const { generateAuthToken } = require("../configs/jwt.config");
const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber, employeeCode, birthDate } =
      req.body;

    if (
      !username ||
      !email ||
      !password ||
      !phoneNumber ||
      !employeeCode ||
      !birthDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.find({ email });

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User({
      username,
      email,
      password,
      phoneNumber,
      employeeCode,
      birthDate,
    });

    await user.save();

    res.status(201).json({ message: "User Has Been Created", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users, message: "Fetch All Users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateAuthToken(user._id);


    res.status(200).json({ user, token, message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getAllUsers, userLogin };
