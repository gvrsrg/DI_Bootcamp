const express = require("express");
const userRouter = require("./routes/userRouter.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5175", "http://localhost:3000"],
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/user", userRouter);
