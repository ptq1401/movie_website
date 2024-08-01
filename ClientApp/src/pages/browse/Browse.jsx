//-----------------import file---------------
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";
import MovieDetail from "../../components/MoiveDetail/MovieDetail";
import { useContext } from "react";
import Context from "../../store/Context";
//-----------------create function component----------
function Browse() {
  const context = useContext(Context);
  return (
    <>
      <Banner></Banner>
      <NavBar></NavBar>
      <MovieList></MovieList>
      {context.isvalid && <MovieDetail></MovieDetail>}
    </>
  );
}

//----------------export--------------
export default Browse;
