const mysql = require("mysql2/promise");

async function getConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}

async function testConnection() {
  let connection;

  try {
    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT 'MySQL connection successful' AS MESSAGE, DATABASE() AS DB_NAME`
    );

    return rows[0];
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

module.exports = { getConnection, testConnection };
