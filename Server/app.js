//---------require --------------
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//---------routes----------------
const trendRouter = require("./routes/trendMovie");
const rateRotuer = require("./routes/ratingMovie");
const genreRotuer = require("./routes/genreMovie");
const videoRouter = require("./routes/video");
const searchRouter = require("./routes/searchMovie");
//--------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(trendRouter);
app.use(rateRotuer);
app.use(genreRotuer);
app.use(videoRouter);
app.use(searchRouter);
app.use((req, res, next) => {
  res.statusMessage = "Route not found";
  res.status(404).json({ message: "Route not found" });
});
//--------------run app in server------------------
app.listen(5000);
