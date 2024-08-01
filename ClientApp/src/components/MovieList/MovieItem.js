//-----------------import file---------------
import classes from "./MovieItem.module.css";
import Context from "../../store/Context";
import { useContext, useRef } from "react";
//-----------------create function component----------
function MovieItem(props) {
  const detailShow = useRef("");
  const context = useContext(Context);
  const nameclass = props.valid ? "poster" : "backdrop";
  const arrayPoster = props.arrayMovie.map((movie) => {
    let url_img = movie[props.valid ? "poster_path" : "backdrop_path"];
    if (!url_img) {
      url_img = movie[props.valid ? "backdrop_path" : "poster_path"];
    }
    return [url_img, movie.id];
  });
  return (
    <div className={`${classes.container} ${classes[nameclass]}`}>
      {arrayPoster.map((url, i) => (
        <button
          key={url[1]}
          onClick={(e) => {
            context.setMovieClicked(props.arrayMovie[i]);
            // click new movie => show detail
            if (!context.isvalid) {
              context.setfunction();
              context.getTrailer(url[1]);
              detailShow.current = url[1];
              document.getElementById(props.genres).classList.add(classes.fix);
              return;
            }
            if (detailShow.current === url[1]) {
              context.setfunction();
              document
                .getElementById(props.genres)
                .classList.remove(classes.fix);
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
  );
}

//----------------export--------------
export default MovieItem;
