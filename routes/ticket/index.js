const router = require('express').Router()
const TicketController = require('../../controllers/ticket')

router.post('/companies/:companyId/tickets', TicketController.create)
router.get('/companies/:companyId/tickets', TicketController.get)
router.get('/companies/:companyId/tickets/:id', TicketController.getById)

module.exports = router