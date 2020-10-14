import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { siteName: "UCOC", title: "Home" });
});

module.exports = router;
