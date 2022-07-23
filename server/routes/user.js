const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
let upload = multer({ storage: storage });

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  user: "ali",
  host: "localhost",
  database: "bug_squashers",
  password: "111111",
  port: 5432,
});

const isEqual = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};
router.get("/", async (req, res) => {
  const query = "SELECT * FROM user_data";
  const data = await pool.query(query);
  res.json(data.rows);
});

router.post("/signup", async (req, res) => {
  let { firstname, surname, email, password, dob, country, role } = req.body;
  const signUpQuery =
    "INSERT INTO user_data (firstname, surname, email, password, dob, country, role) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  const checkEmailQuery =
    "SELECT EXISTS (SELECT email FROM user_data WHERE email= $1)";
  const query = "SELECT * FROM user_data WHERE email = $1";

  const emailChecked = await pool.query(checkEmailQuery, [email]);

  if (emailChecked.rows[0].exists) {
    res
      .status(404)
      .json({ msg: "This email address exists, use another email or log in" });
  } else if (email.length === 0 || password.length === 0) {
    res.status(400).json({ error: "Data not formatted properly" });
  } else {
    //generate salt to hash the password
    const salt = await bcrypt.genSalt(10);
    //now we need to set user's password to hashed password
    password = await bcrypt.hash(password, salt);
    //insert data into db
    await pool.query(signUpQuery, [
      firstname,
      surname,
      email,
      password,
      dob,
      country,
      role,
    ]);
    const data = await pool.query(query, [email]);
    res.status(200).json({ msg: "New user created", user: data.rows });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  process.env.mySecret = crypto.randomBytes(64).toString("hex");
  const emailCheckedQuery =
    "SELECT EXISTS (SELECT email FROM user_data WHERE email=$1)";
  const userFoundQuery = "SELECT * FROM user_data WHERE email=$1";
  const checkedEmail = await pool.query(emailCheckedQuery, [email]);
  const userFound = await pool.query(userFoundQuery, [email]);

  if (checkedEmail.rows[0].exists) {
    const passwordChecked = await isEqual(password, userFound.rows[0].password);
    if (passwordChecked) {
      if (email === userFound.rows[0].email) {
        jwt.sign(
          userFound.rows[0],
          process.env.mySecret,
          { expiresIn: "1h" },
          (err, token) => {
            if (err) {
              console.log(err);
            }
            res.status(200).json({ token: token, msg: "Log in successfull" });
          }
        );
      } else {
        res.status(404).json({ msg: "Please enter a valid email" });
      }
    } else {
      res.status(400).json({ msg: "Plaese enter a valid password" });
    }
  } else {
    res.status(400).json({ msg: "user not found" });
  }
  // res.redirect("/dashboard");
});

//Check to make sure header is not undefined, if so, return Forbidden (403), checkToken variable is being initialized here so that we can use it for the get req at the next level
const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

//accessing a protected route for user
router.post("/dashboard", checkToken, (req, res) => {
  jwt.verify(req.token, process.env.mySecret, (err, authorizedData) => {
    if (err) {
      res.status(403).json({ msg: "Not authorized" });
    } else {
      res.status(200).json({ msg: "User authorized", authorizedData });
    }
  });
});

//log out route
router.put("/logout", checkToken, (req, res) => {
  const authHeader = req.headers["authorization"];
  process.env.mySecret = crypto.randomBytes(64).toString("hex");
  jwt.sign(
    authHeader,
    process.env.mySecret,
    { expiresIn: 1 },
    (logout, err) => {
      if (logout) {
        res.send({ msg: "You have been Logged Out" });
      } else {
        res.send({ msg: "Error" });
      }
    }
  );
});

//********************************Submission Endpoints ****/

//Create a new submission

router.post("/addnewsubmission", upload.single("file"), async (req, res) => {
  const { lesson_id, user_id, file } = req.body;

  if (!lesson_id || !user_id) {
    res.status(404).json({ msg: "User or Lesson not found!" });
  }
  const submissionQuery =
    "INSERT INTO submission (lesson_id, user_id, url) VALUES ($1, $2, $3)";
  const url = req.file.path;
  await pool.query(submissionQuery, [lesson_id, user_id, url]);

  res.status(200).json({ msg: "Submission done!" });
});

//Show a submission (based on submission ID)
router.get("/submission/:id", async (req, res) => {
  const { id } = req.params;
  const submissionQeury = "SELECT * FROM submission WHERE id = $1";
  const submission = await pool.query(submissionQeury, [id]);
  res
    .status(200)
    .json({ msg: "This is a submitted assignment", data: submission.rows });
});

module.exports = router;
