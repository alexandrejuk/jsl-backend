'use strict'

module.exports = {
  up: queryInterface => queryInterface.addIndex(
    'operations', ['companyId', 'description']
  ),
  down: queryInterface => queryInterface.removeIndex(
    'operations', ['companyId', 'description']
  ),
}
