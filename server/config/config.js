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
  prod: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    // TODO Is there a reason we don't hardcode this?
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      options: {
        encrypt: true,
      },
    },
    operatorsAliases: false,
  },
};
