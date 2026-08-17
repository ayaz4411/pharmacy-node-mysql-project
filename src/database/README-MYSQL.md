# MySQL database setup

This project has been converted from the Oracle Node.js driver to `mysql2`.

Configure these environment variables before starting the application:

```env
DB_HOST=<mysql-host>
DB_PORT=3306
DB_USER=<mysql-user>
DB_PASSWORD=<mysql-password>
DB_NAME=pharmacy
PORT=3000
```

The original project did not contain a complete executable Oracle schema/seed set, so no database schema has been invented here. Create the required MySQL database and tables according to the application's data model before testing database-dependent endpoints.
