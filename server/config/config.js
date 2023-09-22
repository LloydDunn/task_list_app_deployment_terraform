module.exports = {
  global: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'test',
    password: 'postgres',
    database: 'test_db',
    host: 'postgres',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  dev: {
    // For a refresher on how to set up your local database, revisit steps 1
    // and 2 of the SQL Bites challenges from Databases week
    // (https://github.com/makersacademy/databases#phase-one-sql-bites).
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'task_listing_app',
    host: 'host.docker.internal',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  prod: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    operatorsAliases: false,
  },
};
