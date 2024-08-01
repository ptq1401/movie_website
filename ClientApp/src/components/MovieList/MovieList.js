//-----------------import file---------------
import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import Context from "../../store/Context";
import { memo, useContext } from "react";
//-----------------create function component----------
function MovieList() {
  const context = useContext(Context);
  //-------return jsx---------
  return (
    <div className={classes.MovieList}>
      <div id="original">
        <MovieItem
          arrayMovie={context.originalList}
          valid={true}
          genres="original"
        ></MovieItem>
      </div>

      <div id="trend">
        <h2 className={classes.genres}>Xu hướng</h2>
        <MovieItem arrayMovie={context.trendingList} genres="trend"></MovieItem>
      </div>
      <div id="toprate">
        <h2 className={classes.genres}>Xếp hạng cao</h2>
        <MovieItem
          arrayMovie={context.toprateList}
          genres="toprate"
        ></MovieItem>
      </div>
      <div id="action">
        <h2 className={classes.genres}>Hành động</h2>
        <MovieItem arrayMovie={context.actionList} genres="action"></MovieItem>
      </div>
      <div id="comedy">
        <h2 className={classes.genres}>Hài</h2>
        <MovieItem arrayMovie={context.comedyList} genres="comedy"></MovieItem>
      </div>
      <div id="horror">
        <h2 className={classes.genres}>Kinh dị</h2>
        <MovieItem arrayMovie={context.horrorList} genres="horror"></MovieItem>
      </div>
      <div id="romance">
        <h2 className={classes.genres}>Lãng mạn</h2>
        <MovieItem
          arrayMovie={context.romanceList}
          genres="romance"
        ></MovieItem>
      </div>
      <div id="document">
        <h2 className={classes.genres}>Tài liệu</h2>
        <MovieItem
          arrayMovie={context.documentList}
          genres="document"
        ></MovieItem>
      </div>
    </div>
  );
}

//----------------export--------------
export default memo(MovieList);
