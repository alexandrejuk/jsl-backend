const DB_USERNAME = process.env.DB_USERNAME
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PWD = process.env.DB_PWD

module.exports = {
  development: {
    username: DB_NAME,
    password: DB_PWD,
    database: DB_USERNAME,
    host: DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: DB_NAME,
    password: DB_PWD,
    database: DB_USERNAME,
    host: DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: DB_NAME,
    password: DB_PWD,
    database: DB_USERNAME,
    host: DB_HOST,
    dialect: 'postgres'
  }
}