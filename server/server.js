const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const teacherRouter = require("./routes/teacher");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

// -----------------------Routes Midleware-------------------------

app.use("/api/user", userRouter);
app.use("/api/teacher", teacherRouter);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
