const express = require("express");
const userRouter = require("./routes/user");
const cors = require("cors");
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// -----------------------Routes Midleware-------------------------

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
