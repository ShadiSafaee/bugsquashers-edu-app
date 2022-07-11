const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");

const cors = require("cors");
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// -----------------------Routes Midleware-------------------------

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
