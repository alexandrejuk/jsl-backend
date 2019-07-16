const Sequelize = require('sequelize')
const Models = require('./models')

const sequelize = new Sequelize({
  username: 'ealoudfnecdwzl',
  password: '4f60b043c0c6317796a985777a2b9e53f2b782c8f552b05c5d33197084bf6c7d',
  database: 'd4tsdfqidoglim',
  host: 'ec2-54-204-35-248.compute-1.amazonaws.com',
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