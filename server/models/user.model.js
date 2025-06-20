const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, require: true, trim: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  employeeCode: { type: String, require: true, unique: true },
  birthDate: { type: Date, require: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
