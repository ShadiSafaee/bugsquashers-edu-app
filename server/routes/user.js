const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  user: "shadab",
  host: "localhost",
  database: "bug_squashers",
  password: "222222",
  port: 5432,
});

router.get("/", async (req, res) => {
  const query = "SELECT * FROM user_data";
  const data = await pool.query(query);
  res.send(data.rows);
});

router.post("/signup", async (req, res) => {
  let { firstname, surname, email, password, dob, country } = req.body;
  const signUpQuery =
    "INSERT INTO user_data (firstname, surname, email, password, dob, country) VALUES ($1, $2, $3, $4, $5, $6)";
  if (email.length === 0 || password.length === 0) {
    res.status(400).json({ error: "Data not formatted properly" });
  } else {
    //generate salt to hash the password
    const salt = await bcrypt.genSalt(10);
    //now we need to set user's password to hashed password
    password = await bcrypt.hash(password, salt);
    //insert data into db
    console.log(password.length);
    await pool.query(signUpQuery, [
      firstname,
      surname,
      email,
      password,
      dob,
      country,
    ]);
    res.json("New user created");
    // res.redirect("/api/user/");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
});

module.exports = router;
