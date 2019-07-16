const Sequelize = require('sequelize')
const Models = require('./models')

const DB_USER = process.env.DB_USER
const DB_PWD = process.env.DB_PWD
const DB_NAME = process.env.DB_PWD
const DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize({
  username: DB_USER || 'postgres',
  password: DB_PWD || 'postgres',
  database: DB_NAME || 'postgres',
  host: DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

const ModelInstances = Models.map(model => model(sequelize))
  // sequelize.sync({ force: true })

ModelInstances
  .forEach(
    modelInstance => 
      modelInstance.associate && 
      modelInstance.associate(sequelize.models)
  )

module.exports = sequelize