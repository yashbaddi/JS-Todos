import pg from "pg";
const Pool = pg.Pool;

const pool = new Pool({
  user: "yashbaddi",
  host: "localhost",
  database: "tododb",
  port: "5432",
});

export default pool;
