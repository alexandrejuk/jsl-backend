const Sequelize = require('sequelize')

const Operation = (sequelize) => {
  const Operation = sequelize.define('operation', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  })

  Operation.associate = (models) => {
    models.operation.belongsTo(models.company, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return Operation
}

module.exports = Operation