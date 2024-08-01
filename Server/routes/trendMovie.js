//---------------require--------------
const express = require("express");
const moviesController = require("../controllers/movies");
const token = require("../middleware/middleware");
const router = express.Router();

//---------------------------------------
router.use("/api/movies/trending", token.authentication);
router.get("/api/movies/trending", moviesController.trendingMovies);
//----------------------------------------
module.exports = router;
