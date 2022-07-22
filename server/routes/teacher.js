const express = require("express");
const router = express.Router();
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
  const allModsQuery = "SELECT * FROM modules ORDER by id";
  const result = await pool.query(allModsQuery);
  res.status(200).json(result.rows);
});

//Update/modify an existing module (name and description only)
router.put("/updatedmodule", async (req, res) => {
  const { module_name, module_description, module_created_date, id } = req.body;
  const updateModQuery =
    "UPDATE modules SET module_name = $1, module_description = $2, module_created_date = $3 WHERE id = $4";

  const updatedModule = await pool.query(updateModQuery, [
    module_name,
    module_description,
    module_created_date,
    id,
  ]);
  res.status(200).json({ msg: "Module updated", data: updatedModule.rows });
});

//Delete an existing module
router.delete("/deletedmodule/:id", async (req, res) => {
  const { id } = req.params;
  const deletedLessQuery = "DELETE FROM lessons WHERE module_id = $1";
  const deletedModQuery = "DELETE FROM modules WHERE id = $1";
  const modCheckedDelQuery =
    "SELECT EXISTS (SELECT module_name FROM modules WHERE id = $1)";

  const modCheckedDel = await pool.query(modCheckedDelQuery, [id]);

  if (modCheckedDel.rows[0].exists) {
    await pool.query(deletedLessQuery, [id]);
    await pool.query(deletedModQuery, [id]);

    res.status(200).json({ msg: "Item delete!" });
  } else {
    res.status(400).json({ msg: "This module already deleted!" });
  }
});

//*******************************************LESSONS' END POINTS*******************************************//

//Create a new lesson
router.post("/addnewlesson", upload.single("file"), async (req, res) => {
  const {
    module_id,
    lesson_name,
    lesson_description,
    lesson_type,
    lesson_created_date,
    lesson_file,
  } = req.body;
  const lessCreatedQuery =
    "INSERT INTO lessons (module_id, lesson_name, lesson_description, lesson_type, lesson_url, lesson_created_date) VALUES ($1, $2, $3, $4, $5, $6)";
  lesson_url = req.file.path;
  await pool.query(lessCreatedQuery, [
    module_id,
    lesson_name,
    lesson_description,
    lesson_type,
    lesson_url,
    lesson_created_date,
  ]);
  console.log(res, req.files);

  res.status(200).json({ msg: "New lesson is created" });
});

//show a lesson (based on Lesson ID)
router.get("/lesson/:id", async (req, res) => {
  const { id } = req.params;
  const lessonQeury = "SELECT * FROM lessons WHERE id = $1";
  const lesson = await pool.query(lessonQeury, [id]);
  res
    .status(200)
    .json({ msg: "This is an existing lesson", data: lesson.rows });
});

//Update/modify an existing lesson (name, description, and re-upload document only)
//uploading files
const uploadFiles = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ msg: "Successfully uploaded files" });
};
router.post("/upload_files", upload.single("files"), uploadFiles);
//Update/modify
router.put("/updatedlesson/:id", async (req, res) => {
  const { id } = req.params;
  const { lesson_name, lesson_description, lesson_url } = req.body;
  const updateLessQuery =
    "UPDATE lessons SET lesson_name = $1, lesson_description = $2,  lesson_url = $3, WHERE id = $4";
  const updatedDataQuery = "SELECT * FROM lessons WHERE id=$1";
  await pool.query(updateLessQuery, [
    lesson_name,
    lesson_description,
    lesson_url,
    id,
  ]);
  const updatedSigleLesson = await pool.query(updatedDataQuery, [id]);
  res
    .status(200)
    .json({ msg: "Lesson updated", data: updatedSigleLesson.rows });
});

//Delete a lesson
router.delete("/deletedlesson/:id", async (req, res) => {
  const { id } = req.params;
  const deletedLessQuery = "DELETE FROM lessons WHERE id = $1";
  const lessCheckedDelQuery =
    "SELECT EXISTS (SELECT lesson_name FROM lessons WHERE id = $1)";
  const allLessQuery = "SELECT * FROM lessons";

  const lessCheckedDel = await pool.query(lessCheckedDelQuery, [id]);

  if (lessCheckedDel.rows[0].exists) {
    await pool.query(deletedLessQuery, [id]);

    const allLessons = await pool.query(allLessQuery);
    res.status(200).json(allLessons.rows);
  } else {
    res.status(400).json({ msg: "This lesson already deleted!" });
  }
});

//Show all lessons
router.get("/lessons", async (req, res) => {
  const allLessonsQuery = "SELECT * FROM lessons";
  const result = await pool.query(allLessonsQuery);
  res.status(200).json(result.rows);
});

//********************************************** Marking Endpoints ******************************//

router.update("/marksubmission/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id, lesson_id, mark, mark_by, mark_comments } = req.body;
  const markSubQuery =
    "UPDATE submission SET mark = $1, mark_by = $2, mark_comments = $3 WHERE id = $4";
  if (!user_id || !lesson_id) {
    res.status(404).json({ msg: "User or Lesson not found!" });
  } else {
    await pool.query(markSubQuery, [mark, mark_by, mark_comments, id]);
    res.status(200).json({ msg: "Marking done! Thanks" });
  }
});

router.get("/submission/:id", async (req, res) => {
  const { id } = req.params;
  const submissionQeury = "SELECT * FROM submission WHERE id = $1";
  const submission = await pool.query(submissionQeury, [id]);
  res
    .status(200)
    .json({ msg: "This is a marked assignment", data: submission.rows });
});

module.exports = router;
