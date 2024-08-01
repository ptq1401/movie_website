const path = require("path");
const fs = require("fs");

const path_video = path.join(__dirname, "../", "datas", "movieList.json");

const getProductsFromFile = (mtd) => {
  fs.readFile(path_video, (err, fileContent) => {
    if (err) {
      console.log("error");
    } else {
      mtd(JSON.parse(fileContent));
    }
  });
};
module.exports = class Search {
  constructor() {}
  static getFilmByRequest(reqBody, startIndex, ctm) {
    getProductsFromFile((data) => {
      let listMovie;
      listMovie = data.filter(
        (cur) =>
          cur.overview.toLowerCase().includes(reqBody.keyword.toLowerCase()) ||
          (cur.name
            ? cur.name.toLowerCase().includes(reqBody.keyword.toLowerCase())
            : false) ||
          (cur.title
            ? cur.title.toLowerCase().includes(reqBody.keyword.toLowerCase())
            : false)
      );
      //------find by genre---------
      if (reqBody.genre !== "all") {
        listMovie = listMovie.filter((cur) =>
          cur.genre_ids.includes(Number(reqBody.genre))
        );
      }
      //------find by mediaType---------
      if (reqBody.type !== "all") {
        listMovie = listMovie.filter((cur) => cur.media_type === reqBody.type);
      }
      //------find by mediaType---------
      if (reqBody.language !== "all") {
        listMovie = listMovie.filter(
          (cur) => cur.original_language === reqBody.language
        );
      }
      //------find by year---------
      if (reqBody.year !== "all") {
        listMovie = listMovie.filter((cur) => {
          if (cur.release_date) {
            const d = new Date(cur.release_date);
            return d.getFullYear() === Number(reqBody.year);
          } else {
            const d = new Date(cur.first_air_date);
            return d.getFullYear() === Number(reqBody.year);
          }
        });
      }

      const resData = {
        results: listMovie.slice(startIndex, startIndex + 20),
        page: startIndex / 20 + 1,
        total_pages: Math.ceil(listMovie.length / 20),
      };
      ctm(resData);
    });
  }
};
