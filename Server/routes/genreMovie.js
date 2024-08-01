//---------------require--------------
const express = require("express");
const genreController = require("../controllers/genre");

const router = express.Router();
const token = require("../middleware/middleware");
//---------------------------------------
router.use("/api/movies/discover/:id_genre", token.authentication);
router.get("/api/movies/discover/:id_genre", genreController.genreMovie); //genre: musis, comedy, romantic, ....
router.get("/api/movies/discover", (req, res, next) => {
  res.statusMessage = "Not found gerne parram";
  res.status(400).end();
});
//----------------------------------------
module.exports = router;
