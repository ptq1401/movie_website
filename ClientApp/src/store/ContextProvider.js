import { useState } from "react";
import Context from "./Context";
import useHttp from "../hooks/use-http";
//-------------------------
const ContextProvider = (props) => {
  //get data list movie from API
  //original
  const { listMovie: originalList } = useHttp(
    "https://api.themoviedb.org/3/discover/tv?api_key=939c6a6ec9c1b55e7629bf7bf2db22f3&with_network=123"
  );
  //trending
  const { listMovie: trendingList } = useHttp(
    "http://localhost:5000/api/movies/trending?token=8qlOkxz4wq"
  );
  //top rate
  const { listMovie: toprateList } = useHttp(
    "http://localhost:5000/api/movies/top-rate?token=8qlOkxz4wq"
  );
  //action
  const { listMovie: actionList } = useHttp(
    "http://localhost:5000/api/movies/discover/action?token=8qlOkxz4wq"
  );
  //comedy
  const { listMovie: comedyList } = useHttp(
    "http://localhost:5000/api/movies/discover/comedy?token=8qlOkxz4wq"
  );
  //horror
  const { listMovie: horrorList } = useHttp(
    "http://localhost:5000/api/movies/discover/horror?token=8qlOkxz4wq"
  );
  //romance
  const { listMovie: romanceList } = useHttp(
    "http://localhost:5000/api/movies/discover/romance?token=8qlOkxz4wq"
  );
  //documentary
  const { listMovie: documentList } = useHttp(
    "http://localhost:5000/api/movies/discover/documentary?token=8qlOkxz4wq"
  );

  //----------------------------------
  const [detailValid, setDetailVaid] = useState(false);
  const [trailer, setTrailer] = useState();
  const [currentMovie, setCurrentMovie] = useState({});
  const setvalid = (reset) => {
    if (reset) {
      setDetailVaid(false);
      return;
    }
    setDetailVaid(!detailValid);
  };
  const setMovieClicked = (movie) => {
    setCurrentMovie(movie);
  };
  //---------------Detail movie: trailer--------------
  const getDataTrailer = (idMovie) => {
    // console.log(idMovie);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idMovie: idMovie }),
    };
    const url = `http://localhost:5000/api/movies/video?token=8qlOkxz4wq`;
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((detailMovie) => {
        if (detailMovie[0]) {
          if (
            detailMovie[0].site === "YouTube" &&
            (detailMovie[0].type === "Teaser" ||
              detailMovie[0].type === "Trailer")
          ) {
            setTrailer(detailMovie[0].key);
          } else setTrailer("");
        } else setTrailer("");
      })
      .catch((error) => console.log(error.message));
  };
  //--------------------------------------------
  const value = {
    isvalid: detailValid,
    keyTrailer: trailer,
    originalList,
    trendingList,
    toprateList,
    actionList,
    comedyList,
    horrorList,
    romanceList,
    documentList,
    currentMovie,
    setfunction: setvalid,
    getTrailer: getDataTrailer,
    setMovieClicked,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
