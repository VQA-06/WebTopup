import mysql from "mysql2/promise";

if (!process.env.DB_HOST) {
  throw new Error(
    "❌ Error: Environment Variables tidak terbaca! Pastikan file .env ada dan server sudah direstart."
  );
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;
