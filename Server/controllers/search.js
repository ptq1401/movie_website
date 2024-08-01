//------------require module Search--------------
const Search = require("../models/search");

//---------------export-----------------------------
//---response search movies--
exports.searchMovie = (req, res, next) => {
  const page = req.query.page;
  const startIndex = page ? page * 20 - 20 : 0;
  const keyword = req.body.keyword;
  if (keyword === "") {
    res.statusMessage = "Not found keyword parram";
    res.status(400).send({ results: [] });
  } else {
    Search.getFilmByRequest(req.body, startIndex, (data) =>
      res.status(200).send(data)
    );
  }
};
