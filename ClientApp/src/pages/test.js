import { useEffect } from "react";
function TextBackEnd() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 18755 }),
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/movies") //?page=1
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Back End</h1>
    </div>
  );
}
export default TextBackEnd;
