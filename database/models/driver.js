const Sequelize = require('sequelize')

const Driver = (sequelize) => {
  const Driver = sequelize.define('driver', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    documentId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  })

  return Driver
}

module.exports = Driver