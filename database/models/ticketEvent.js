const Sequelize = require('sequelize')

const TicketEvent = (sequelize) => {
  const TicketEvent = sequelize.define('ticketEvent', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    status: {
      type: Sequelize.ENUM(['waiting_service', 'start_service', 'ended_service', 'completed']),
      allowNull: false,
    },
    startedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  },
  {
    indexes: [{
      unique: true,
      fields: ['ticketId', 'status']
    }]
  })

  TicketEvent.associate = (models) => {
    models.ticketEvent.belongsTo(models.ticket, {
      foreignKey: {
        allowNull: false,
      }
    })
  }
  return TicketEvent
}

module.exports = TicketEvent