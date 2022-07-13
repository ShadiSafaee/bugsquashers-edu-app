const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  user: "shadab",
  host: "localhost",
  database: "bug_squashers",
  password: "222222",
  port: 5432,
});

router.get("/", (req, res) => {
  res.send("it is working!");
});

//Create a new module
router.post("/addnewmodule", async (req, res) => {
  const { module_name, module_description, module_created_date } = req.body;
  const modCreatedQuery =
    "INSERT INTO modules (module_name, module_description, module_created_date) VALUES ($1, $2, $3)";
  const modCheckedQuery =
    "SELECT EXISTS (SELECT module_name FROM modules WHERE module_name LIKE '%' || $1 || '%')";
  const newModQuery =
    "SELECT * FROM modules WHERE module_name LIKE '%' || $1 || '%'";

  const modChecked = await pool.query(modCheckedQuery, [module_name]);
  if (modChecked.rows[0].exists) {
    res.status(404).json({ msg: "This module has already been created!" });
  } else {
    const createdModule = await pool.query(modCreatedQuery, [
      module_name,
      module_description,
      module_created_date,
    ]);
    const newMod = await pool.query(newModQuery, [module_name]);
    console.log(newMod);
    res
      .status(200)
      .json({ msg: "New module is created", teacher: newMod.rows });
  }
});

//Show an existing module (based on module ID)
router.get("/module/:id", async (req, res) => {
  const { id } = req.params;
  const moduleQeury = "SELECT * FROM modules WHERE id = $1";
  const module = await pool.query(moduleQeury, [id]);
  res
    .status(200)
    .json({ msg: "This is an existing module", data: module.rows });
});

//Show all modules
router.get("/modules", async (req, res) => {
  const allModsQuery = "SELECT * FROM modules";
  const result = await pool.query(allModsQuery);
  res.status(200).json(result.rows);
});

//Update/modify an existing module (name and description only)
router.put("/updatedmodule/:id", async (req, res) => {
  const { id } = req.params;
  const { module_name, module_description, module_created_date } = req.body;
  const updateModQuery =
    "UPDATE modules SET module_name = $1, module_description = $2, module_created_date = $3 WHERE id = $4";
  const updatedDataQuery = "SELECT * FROM modules WHERE id=$1";
  const updatedModule = await pool.query(updateModQuery, [
    module_name,
    module_description,
    module_created_date,
    id,
  ]);
  const updatedSigleModule = await pool.query(updatedDataQuery, [id]);
  res
    .status(200)
    .json({ msg: "Module updated", data: updatedSigleModule.rows });
});

//Delete an existing module
router.delete("/deletedmodule/:id", async (req, res) => {
  const { id } = req.params;
  const deletedLessQuery = "DELETE FROM lessons WHERE module_id = $1";
  const deletedModQuery = "DELETE FROM modules WHERE id = $1";
  const modCheckedDelQuery =
    "SELECT EXISTS (SELECT module_name FROM modules WHERE id = $1)";
  const allModsQuery = "SELECT * FROM modules";

  const modCheckedDel = await pool.query(modCheckedDelQuery, [id]);

  if (modCheckedDel.rows[0].exists) {
    await pool.query(deletedLessQuery, [id]);
    await pool.query(deletedModQuery, [id]);

    const allMods = await pool.query(allModsQuery);
    res.status(200).json(allMods.rows);
  } else {
    res.status(400).json({ msg: "This module already deleted!" });
  }
});

module.exports = router;
