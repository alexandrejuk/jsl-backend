'use strict'

module.exports = {
  up: queryInterface => queryInterface.addIndex(
    'ticketEvents', ['ticketId', 'status']
  ),
  down: queryInterface => queryInterface.removeIndex(
    'ticketEvents', ['ticketId', 'status']
  ),
}
