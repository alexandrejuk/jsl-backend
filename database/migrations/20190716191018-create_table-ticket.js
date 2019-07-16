'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tickets', {
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
    },
    companyId: {
      type: Sequelize.UUID,
      references: {
        model: 'companies',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    },
    operationId: {
      type: Sequelize.UUID,
      references: {
        model: 'operations',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    },
    driverId: {
      type: Sequelize.UUID,
      references: {
        model: 'drivers',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    },
    vehicleId: {
      type: Sequelize.UUID,
      references: {
        model: 'vehicles',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    },
    docaId: {
      type: Sequelize.UUID,
      references: {
        model: 'docas',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'restrict',
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('tickets')
}
