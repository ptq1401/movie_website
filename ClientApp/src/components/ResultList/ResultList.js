//------------import file--------------
import classes from "./ResultList.module.css";
import Context from "../../store/Context";
import { useContext, useEffect, useRef, useState } from "react";

//-----------create component---------------
function ResultList(props) {
  const detailShow = useRef("");
  const context = useContext(Context);
  const [listMovie, setListMovie] = useState([]);

  //----------
  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/search?token=8qlOkxz4wq`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.reqBody),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      })
      .then((list) => {
        setListMovie(list);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [props.search, props.reqBody]);
  //-------------------------------------------
  if (listMovie && listMovie.length === 0)
    return (
      <div className={classes.result}>
        <h2>No Results</h2>
      </div>
    );
  const arrayPosterPath = listMovie.map((movie) => {
    return [movie.poster_path, movie.id];
  });
  return (
    <div className={classes.result}>
      <h2> Search Result</h2>
      <div className={classes.container}>
        {arrayPosterPath.map((url, i) => (
          <button
            key={url[1]}
            onClick={(e) => {
              context.setMovieClicked(listMovie[i]);
              // click new movie => show detail
              if (!context.isvalid) {
                context.setfunction();
                context.getTrailer(url[1]);
                detailShow.current = url[1];
                document.body.style.marginBottom = "60vh";
                e.currentTarget.scrollIntoView({ behavior: "smooth" });
                return;
              }
              if (detailShow.current === url[1]) {
                context.setfunction();
                document.body.style.marginBottom = "0";
              } else {
                context.getTrailer(url[1]);
                detailShow.current = url[1];
              }
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${url[0]}`}
              alt="Poster/Backdrop"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

//-------------export component------------------
export default ResultList;
