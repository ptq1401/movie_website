//---------------require--------------
const express = require("express");
const videoController = require("../controllers/video");
const token = require("../middleware/middleware");
const router = express.Router();

//---------------------------------------
router.use("/api/movies/video", token.authentication);
router.post("/api/movies/video", videoController.getTrailer);
//----------------------------------------
module.exports = router;
