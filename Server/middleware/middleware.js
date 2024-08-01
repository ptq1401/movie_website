const path = require("path");
const fs = require("fs");
const path_user = path.join(__dirname, "../", "datas", "userToken.json");
const getDataFromFile = (cb) => {
  fs.readFile(path_user, (err, data) => {
    if (err) {
      console.log("have some error!");
    } else {
      cb(JSON.parse(data));
    }
  });
};
//---ruthentication--
exports.authentication = (req, res, next) => {
  const token = req.query.token;
  getDataFromFile((data) => {
    const user = data.find((cur) => cur.token === token);
    if (user) {
      return next();
    } else {
      res.statusMessage = "Unauthorized";
      res.status(401).end();
    }
  });
};
