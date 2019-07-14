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
  },
  {
    indexes: [{
      unique: true,
      fields: ['companyId', 'docaNumber']
    }]
  })

  Doca.associate = (models) => {
    models.doca.belongsTo(models.company, {
      foreignKey: {
        allowNull: false,
      }
    })
    models.doca.hasMany(models.ticket, {
      foreignKey: {
        allowNull: true,
      }
    })
  }

  return Doca
}

module.exports = Doca