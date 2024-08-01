//---------------require--------------
const express = require("express");
const searchController = require("../controllers/search");
const token = require("../middleware/middleware");
const router = express.Router();

//---------------------------------------
router.use("/api/movies/search", token.authentication);
router.post("/api/movies/search", searchController.searchMovie);
//----------------------------------------
module.exports = router;
