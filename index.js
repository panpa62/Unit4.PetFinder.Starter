// init express app
const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", require("./pets/api/pets"));

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

module.exports = app;
