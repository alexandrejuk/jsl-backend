'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ticketEvents', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    status: {
      type: Sequelize.ENUM(['waiting_service', 'start_service', 'ended_service', 'completed', 'cancel']),
      allowNull: false,
    },
    startedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    ticketId: {
      type: Sequelize.UUID,
      references: {
        model: 'tickets',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    }, createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }).then(
    () => queryInterface.addIndex('ticketEvents', ['ticketId', 'status'])
  ),
  down: (queryInterface) => queryInterface.dropTable('ticketEvents')
}
