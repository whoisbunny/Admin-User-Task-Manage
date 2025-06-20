const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require("./configs/db.config");
const userRouter = require("./routes/user.route");
const taskRouter = require("./routes/task.route");
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

const start = async () => {
  await connectToDb().then(() => {
    app.listen(port, () => {
      console.log("App Listning");
    });
  });
};

start();
