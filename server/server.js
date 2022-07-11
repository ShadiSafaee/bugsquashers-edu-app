const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");
const { setHeaders } = require("./headers");
const cors = require("cors");

app.use(setHeaders);
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// -----------------------Routes Midleware-------------------------

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
