const express = require("express");
const userRouter = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 5000;

// -----------------------Routes Midleware-------------------------

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
