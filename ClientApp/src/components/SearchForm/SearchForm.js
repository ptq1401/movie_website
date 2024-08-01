//------------import file--------------
import classes from "./SearchForm.module.css";
import ResultList from "../ResultList/ResultList";
import { useState } from "react";
import Context from "../../store/Context";
import { useContext, useRef } from "react";
import genre from "./genreList.json";
import year from "./year.json";
//-----------create component---------------
function SearchFrom() {
  const initial = {
    keyword: "",
    genre: "all",
    type: "all",
    language: "all",
    year: "all",
  };
  const context = useContext(Context);
  const [searchListValid, setSearchListValid] = useState(false);
  const [clicked, setClicked] = useState(true); //chỉ search khi nhấn nút search -> chạy useEffect
  const reqBody = useRef(initial);

  const resetHandle = () => {
    setSearchListValid(false);
    context.setfunction("reset");
    document.getElementById("input").value = "";
    document.getElementById("genre").value = "all";
    document.getElementById("type").value = "all";
    document.getElementById("language").value = "all";
    document.getElementById("year").value = "all";
  };
  const searchHandle = () => {
    setSearchListValid(true);
    setClicked((prev) => !prev);
  };

  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.searchform}>
        <form>
          <div className={classes.inputkey}>
            <input
              type="text"
              placeholder="Enter keywords ..."
              onChange={(e) => {
                reqBody.current.keyword = e.target.value;
              }}
              id="input"
            ></input>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={classes.require}>
            <div>
              <label>Genre: </label>
              <select
                defaultValue="all"
                onChange={(e) => {
                  reqBody.current.genre = e.target.value;
                }}
                id="genre"
              >
                <option value="all">All</option>
                {genre.map((cur) => (
                  <option value={cur.id} key={cur.id}>
                    {cur.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Media Type: </label>
              <select
                defaultValue="all"
                onChange={(e) => {
                  reqBody.current.type = e.target.value;
                }}
                id="type"
              >
                <option value="all">All</option>
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
                <option value="person">Person</option>
              </select>
            </div>
            <div>
              <label>Language: </label>
              <select
                defaultValue="all"
                onChange={(e) => {
                  reqBody.current.language = e.target.value;
                }}
                id="language"
              >
                <option value="all">All</option>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
              </select>
            </div>
            <div>
              <label>Year: </label>
              <select
                defaultValue="all"
                onChange={(e) => {
                  reqBody.current.year = e.target.value;
                }}
                id="year"
              >
                <option value="all">All</option>
                {year.map((cur) => (
                  <option value={cur} key={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <div className={classes.btn}>
          <button onClick={resetHandle}>Reset</button>
          <button className={classes["btn-search"]} onClick={searchHandle}>
            Search
          </button>
        </div>
      </div>
      {searchListValid && (
        <ResultList reqBody={reqBody.current} search={clicked}></ResultList>
      )}
    </>
  );
}
//-------------export component------------------
export default SearchFrom;
