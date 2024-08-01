//------------require module Movies--------------
const Video = require("../models/video");

//---response video trailer--
exports.getTrailer = (req, res, next) => {
  const idMovie = req.body.idMovie;
  if (!idMovie) {
    res.statusMessage = "Not found film_id parram";
    res.status(404).json('message: "Not found film_id parram"');
  } else {
    Video.getTrailerMovies(idMovie, (data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.statusMessage = "Not found video";
        res.status(400).send({ results: [] });
      }
    });
  }
};
