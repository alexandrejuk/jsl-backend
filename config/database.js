const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PWD
const DB_NAME = process.env.DB_PWD
const DB_HOST = process.env.DB_HOST

module.exports = {
  development: {
    username: DB_USER || 'postgres',
    password: DB_PWD || 'postgres',
    database: DB_NAME || 'postgres',
    host: DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: DB_USER || 'postgres',
    password: DB_PWD || 'postgres',
    database: DB_NAME || 'postgres',
    host: DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: DB_USER || 'postgres',
    password: DB_PWD || 'postgres',
    database: DB_NAME || 'postgres',
    host: DB_HOST || 'localhost',
    dialect: 'postgres'
  }
}