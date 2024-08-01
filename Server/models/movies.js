const path = require("path");
const fs = require("fs");

const path_movie = path.join(__dirname, "../", "datas", "movieList.json");
const getProductsFromFile = (mtd) => {
  fs.readFile(path_movie, (err, fileContent) => {
    if (err) {
      console.log("error");
    } else {
      mtd(JSON.parse(fileContent));
    }
  });
};
module.exports = class Movies {
  constructor() {}
  static getFilm(ctm, startIndex, key) {
    getProductsFromFile((data) => {
      const listMovie = data.sort((a, b) => b[key] - a[key]);
      const resMovie = {
        results: listMovie.slice(startIndex, startIndex + 20),
        page: startIndex / 20 + 1,
        total_pages: Math.ceil(listMovie.length / 20),
      };
      ctm(resMovie);
    });
  }
};
