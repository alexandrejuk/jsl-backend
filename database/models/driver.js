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
      unique: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    }
  })

  Driver.associate = (models) => {
    models.driver.hasMany(models.ticket, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return Driver
}

module.exports = Driver