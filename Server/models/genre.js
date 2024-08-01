const path = require("path");
const fs = require("fs");

const path_movie = path.join(__dirname, "../", "datas", "movieList.json");
const path_genre = path.join(__dirname, "../", "datas", "genreList.json");

const getProductsFromFile = (path, mtd) => {
  fs.readFile(path, (err, fileContent) => {
    if (err) {
      console.log("error");
    } else {
      mtd(JSON.parse(fileContent));
    }
  });
};
module.exports = class Genre {
  constructor() {}
  static moiveById(genre, startIndex, ctm) {
    getProductsFromFile(path_genre, (data) => {
      const genre_id = data.find(
        (cur) => cur.name.toLowerCase() === genre.toLowerCase()
      );
      if (!genre_id) return ctm(false);
      getProductsFromFile(path_movie, (list) => {
        const listMovie = list.filter((cur) =>
          cur.genre_ids.includes(genre_id.id)
        );
        const resMovie = {
          results: listMovie.slice(startIndex, startIndex + 20),
          page: startIndex / 20 + 1,
          total_pages: Math.ceil(listMovie.length / 20),
        };
        ctm(resMovie);
      });
    });
  }
};
