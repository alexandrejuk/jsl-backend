'use strict'

module.exports = {
  up: queryInterface => queryInterface.addIndex(
    'docas', ['companyId', 'docaNumber']
  ),
  down: queryInterface => queryInterface.removeIndex(
    'docas', ['companyId', 'docaNumber']
  ),
}

