//---------------require--------------
const express = require("express");
const moviesController = require("../controllers/movies");
const token = require("../middleware/middleware");
const router = express.Router();

//---------------------------------------
router.use("/api/movies/top-rate", token.authentication);
router.get("/api/movies/top-rate", moviesController.ratingMovies);
//----------------------------------------
module.exports = router;
