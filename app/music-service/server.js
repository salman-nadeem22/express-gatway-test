const express = require("express");

let app = express();

app.get("/musics", (req, res, next) => {
  res.status(200).send(["Hello", "From music service", "listening on 3001"]);
});

app.listen(3001, () => {
  console.log("Server running on 3001");
});
