const Sequelize = require('sequelize')
const Models = require('./models')

const DB_USERNAME = 'postgres'
const DB_HOST = 'localhost'
const DB_NAME = 'postgres'
const DB_PWD = 'postgres'

let sequelize = null
const { DATABASE_URL } = process.env

if(DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL,{
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })
} else {
  sequelize = new Sequelize({
    username: DB_NAME,
    password: DB_PWD,
    database: DB_USERNAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })
}

const ModelInstances = Models.map(model => model(sequelize))

ModelInstances
  .forEach(
    modelInstance => 
      modelInstance.associate && 
      modelInstance.associate(sequelize.models)
  )

module.exports = sequelize