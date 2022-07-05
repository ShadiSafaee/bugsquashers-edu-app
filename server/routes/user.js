const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("done");
  res.json({ message: "Hello World!" });
});

module.exports = router;
