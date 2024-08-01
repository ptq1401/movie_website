//-----------------import file---------------
import classes from "./Banner.module.css";
import { useState, useEffect, memo } from "react";

//-----------------create function component----------
function Banner() {
  const [Movie, setMovie] = useState([]);
  const [Loading, setLoading] = useState(true);
  const listHandle = (data) => {
    let random = Math.floor(Math.random() * data.length - 1);
    random = random < 0 ? 0 : random;
    setMovie(data[random]);
  };

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/tv?api_key=939c6a6ec9c1b55e7629bf7bf2db22f3&with_network=123";
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((list) => {
        listHandle(list);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(true);
      });
  }, []);
  return Loading ? (
    ""
  ) : (
    <>
      <div
        style={{
          backgroundImage: `URL(
            "https://image.tmdb.org/t/p/original${Movie.backdrop_path}"
          )`,
        }}
        className={classes[`banner-image`]}
      >
        <div className={classes["descript-movie"]}>
          <h1>{Movie.name}</h1>
          <button>Play</button>
          <button>My List</button>
          <p>
            {Movie.overview.length !== 0
              ? Movie.overview.slice(0, 100) + " ..."
              : "No overview"}
          </p>
        </div>
      </div>
    </>
  );
}
//----------------export--------------
export default memo(Banner);
