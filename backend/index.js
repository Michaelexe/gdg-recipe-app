const express = require("express");
const cors = require("cors");
const { query } = require("./db");
const format = require("pg-format");

let app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
const port = 3000;

app.get("/recipe", async (req, res) => {
  const data = await query("SELECT * FROM  recipes");
  res.send(data.rows);
});

app.post("/recipe", async (req, res) => {
  let data = req.body;

  const response = await query(
    format(
      "INSERT INTO recipes(recipeid, title, ingredients, instructions) VALUES (1, %L, %L, %L) RETURNING *",
      data.title,
      data.ingredients,
      data.instructions
    )
  );

  res.send(response.rows);
});

app.post("/login", async (req, res) => {
  let username = req.body.username;

  const data = await query(
    format(
      "INSERT INTO users(userid, username) VALUES (3, %L) RETURNING username",
      username
    )
  );

  res.send(data.rows);
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
