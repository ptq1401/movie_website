//---------imort------------------
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchFrom from "../../components/SearchForm/SearchForm";
import MovieDetail from "../../components/MoiveDetail/MovieDetail";
import Context from "../../store/Context";
import { useContext } from "react";
//----------component---------------
const Search = () => {
  const context = useContext(Context);
  return (
    <div className="app">
      <NavBar></NavBar>
      <SearchFrom></SearchFrom>
      {context.isvalid && <MovieDetail></MovieDetail>}
    </div>
  );
};
//------export-------------------
export default Search;
