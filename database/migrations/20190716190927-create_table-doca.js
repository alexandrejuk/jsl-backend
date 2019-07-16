'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('docas', {
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }).then(
    () => queryInterface.addIndex('docas', ['companyId', 'docaNumber'])
  ),
  down: (queryInterface) => queryInterface.dropTable('docas')
}

