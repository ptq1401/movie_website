const path = require("path");
const fs = require("fs");

const path_video = path.join(__dirname, "../", "datas", "videoList.json");

const getProductsFromFile = (mtd) => {
  fs.readFile(path_video, (err, fileContent) => {
    if (err) {
      console.log("error");
    } else {
      mtd(JSON.parse(fileContent));
    }
  });
};
module.exports = class Video {
  constructor() {}
  static getTrailerMovies(idMovie, ctm) {
    getProductsFromFile((data) => {
      let movieById = data.find((cur) => cur.id === idMovie); //find video by id
      if (!movieById) return ctm(false);
      let movieByRequest = movieById.videos;
      // video by site=youtube and official = true
      movieByRequest = movieByRequest.filter(
        (cur) => cur.site === "YouTube" && cur.official === true
      );
      // video by trailer > teaser
      let movieByTrailerOrTeaser = movieByRequest.filter(
        (cur) => cur.type === "Trailer"
      );
      // get Teaser instead of trailer
      if (movieByTrailerOrTeaser.length === 0) {
        movieByTrailerOrTeaser = movieByRequest.filter(
          (cur) => cur.type === "Teaser"
        );
      }
      if (movieByTrailerOrTeaser.length === 0) {
        return ctm(false);
      } else {
        //get video by latest time
        const max_index = movieByTrailerOrTeaser.length;
        let resVideo = movieByTrailerOrTeaser[0];
        for (let i = 1; i <= max_index - 1; i++) {
          const d1 = new Date(resVideo.published_at);
          const d2 = new Date(movieByTrailerOrTeaser[i].published_at);
          if (d2 > d1) resVideo = movieByTrailerOrTeaser[i];
        }
        ctm({ results: [resVideo] });
      }
    });
  }
};
