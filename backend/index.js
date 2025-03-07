const express = require("express");
const cors = require("cors");

let recipe = [];

let app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
const port = 3000;

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.post("/recipe", (req, res) => {
  let data = req.body;
  recipe.push(data);
  res.send("success");
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
