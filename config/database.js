const DB_USERNAME = 'postgres'
const DB_HOST = 'localhost'
const DB_NAME = 'postgres'
const DB_PWD = 'postgres'

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