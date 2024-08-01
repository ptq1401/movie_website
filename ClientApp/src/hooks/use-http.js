//-----------------import file---------------
import { useState, useEffect } from "react";
//-----------------create function component----------
const useHttp = (url) => {
  const [listMovie, setListMovie] = useState([]);
  const link = url;
  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data.results;
      })
      .then((list) => {
        setListMovie(list);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url, link]);

  return { listMovie };
};

//----------------export--------------
export default useHttp;
