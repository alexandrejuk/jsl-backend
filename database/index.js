const Sequelize = require('sequelize')
const Models = require('./models')

const sequelize = new Sequelize({
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

const ModelInstances = Models.map(model => model(sequelize))

ModelInstances
  .forEach(
    modelInstance => 
      modelInstance.associate && 
      modelInstance.associate(sequelize.models)
  )

module.exports = sequelize