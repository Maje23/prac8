var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/actors", function (req, res, next) {
  dbConnection.query("select * from actor;", [], async (err, rows, info) => {
    return res.json([...rows]);
  });
});
router.post("/add-actor", function (req, res, next) {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  dbConnection.query(
    "INSERT INTO actor (first_name, last_name) VALUES (?, ?);",
    [first_name, last_name],
    async (err, rows, info) => {
      return res.json({ id: rows.insertId });
    }
  );
});
module.exports = router;
