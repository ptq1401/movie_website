//------------require module Movies--------------
const Movies = require("../models/movies");

//---------------export-----------------------------
//---response trending movies--
exports.trendingMovies = (req, res, next) => {
  const page = req.query.page;
  const startIndex = page ? page * 20 - 20 : 0;
  Movies.getFilm(
    (data) => res.status(200).send(data),
    startIndex,
    "popularity"
  );
};
exports.ratingMovies = (req, res, next) => {
  const page = req.query.page;
  const startIndex = page ? page * 20 - 20 : 0;
  Movies.getFilm(
    (data) => res.status(200).send(data),
    startIndex,
    "vote_average"
  );
};
