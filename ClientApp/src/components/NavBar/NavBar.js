//----------------import file------------------
import classes from "./NavBar.module.css";
import { useState, memo } from "react";

//---------create component function--------------
//---click handle----
const appClickHandle = () => {
  window.location.replace("/");
};
const searchClickHandle = () => {
  window.location.replace("/search");
};
function NavBar() {
  const [color, setColor] = useState("#ffffff00"); //ffffff00
  //---window scrool--
  window.onscroll = function scroolHandle() {
    if (window.pageYOffset > 100) {
      setColor("#000");
    } else setColor("#ffffff00");
  };
  return (
    <div className={classes.navbar} style={{ backgroundColor: color }}>
      <button className={classes[`btn-browse`]} onClick={appClickHandle}>
        Movie App
      </button>
      <button className={classes[`btn-search`]} onClick={searchClickHandle}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
export default memo(NavBar);
