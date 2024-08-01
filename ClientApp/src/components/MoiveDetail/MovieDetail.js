//----------------import file---------------
import classes from "./MovieDetail.module.css";
import ReactDOM from "react-dom";
import Context from "../../store/Context";
import { useContext } from "react";
import YouTube from "react-youtube";
//----------------create function component---------
const Movieinfo = () => {
  const context = useContext(Context);
  const opts = {
    height: "400px",
    width: "720px",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className={classes.moviedetail}>
      <div className={classes.infoMovie}>
        <h2 className={classes.nameMovie}>
          {context.currentMovie.name || context.currentMovie.title}
        </h2>
        <div>
          <p>
            Release date:{" "}
            {context.currentMovie.release_date ||
              context.currentMovie.first_air_date}
          </p>
          <p>Vote: {context.currentMovie.vote_average}/10</p>
        </div>
        <span>{context.currentMovie.overview}</span>
      </div>
      {/* thay trailer bằng backdrop nếu không có (nhiều phim không có trailer) */}
      {context.keyTrailer ? (
        <YouTube videoId={context.keyTrailer} opts={opts} />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original${context.currentMovie.backdrop_path}`}
          alt="backdrop"
          className={classes.backdrop}
        />
      )}
    </div>
  );
};
function MovieDetail() {
  return ReactDOM.createPortal(
    <Movieinfo></Movieinfo>,
    document.getElementById("moviedetail")
  );
}
//----------------export file--------------------
export default MovieDetail;
