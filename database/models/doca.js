const Sequelize = require('sequelize')

const Doca = (sequelize) => {
  const Doca = sequelize.define('doca', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    docaNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM(['available', 'operation']),
      allowNull: false,
    }
  })

  Doca.associate = (models) => {
    models.doca.belongsTo(models.company, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return Doca
}

module.exports = Doca