'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('operations', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
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
    () => queryInterface.addIndex('operations', ['companyId', 'description'])
  ),
  down: (queryInterface) => queryInterface.dropTable('operations')
}
