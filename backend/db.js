const { Pool } = require("pg");
require("dotenv").config({ path: "./.env" });

const db = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
});

module.exports = {
  query: (text, params) => db.query(text, params),
};
