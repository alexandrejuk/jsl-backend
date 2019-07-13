const Sequelize = require('sequelize')
const Models = require('./models')

const sequelize = new Sequelize({
  username:'postgres',
  password: 'postgres',
  database: 'postgres',
  host: 'localhost',
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