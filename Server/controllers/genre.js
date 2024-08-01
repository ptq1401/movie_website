//------------require module Movies--------------
const Genre = require("../models/genre");
//---------------export-----------------------------
//---response movies by genre--
exports.genreMovie = (req, res, next) => {
  const genre = req.params.id_genre;
  const page = req.query.page;
  const startIndex = page ? page * 20 - 20 : 0;
  Genre.moiveById(genre, startIndex, (data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.statusMessage = "Not found that gerne id";
      res.status(400).end();
    }
  });
};
