const pgp = require("pg-promise")();
require("dotenv").config();

const databaseUrl = process.env.DB_URL;

const cn = {
  connectionString: databaseUrl,
  allowExitOnIdle: true,
  max: 30,
};

// Postgres Instructions
// const cn = {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER,
// };

const db = pgp(cn);

module.exports = db;