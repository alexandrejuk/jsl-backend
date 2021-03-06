const Sequelize = require('sequelize')

const Ticket = (sequelize) => {
  const Ticket = sequelize.define('ticket', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    barCode: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: Sequelize.ENUM(['waiting_service', 'start_service', 'ended_service', 'completed', 'cancel']),
      allowNull: false,
    },
    service: {
      type: Sequelize.ENUM(['loading', 'unload', 'loading_unload']),
      allowNull: false,
    }
  })

  Ticket.associate = (models) => {
    models.ticket.belongsTo(models.company, {
      foreignKey: {
        allowNull: false,
      }
    })
    models.ticket.belongsTo(models.operation, {
      foreignKey: {
        allowNull: false,
      }
    })
    models.ticket.belongsTo(models.driver, {
      foreignKey: {
        allowNull: false,
      }
    })
    models.ticket.belongsTo(models.vehicle, {
      foreignKey: {
        allowNull: false,
      }
    })
    models.ticket.belongsTo(models.doca, {
      foreignKey: {
        allowNull: true,
      }
    })
    models.ticket.hasMany(models.ticketEvent, {
      foreignKey: {
        allowNull: true,
      }
    })
  }
  return Ticket
}

module.exports = Ticket