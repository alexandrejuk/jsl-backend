const Sequelize = require('sequelize')

const Vehicle = (sequelize) => {
  const Vehicle = sequelize.define('vehicle', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plate: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  })

  return Vehicle
}

module.exports = Vehicle