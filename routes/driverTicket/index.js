const router = require('express').Router()
const DriverController = require('../../controllers/driver')
const TicketController = require('../../controllers/ticket')

router.post('/driver-ticket', DriverController.getTicketIdDriver)
router.get('/driver-ticket/:id', TicketController.getByIdTicket)

module.exports = router
