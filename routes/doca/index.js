const router = require('express').Router()
const DocaController = require('../../controllers/doca')

router.post('/companies/:companyId/docas', DocaController.create)
router.get('/companies/:companyId/docas', DocaController.get)
router.get('/companies/:companyId/docas/:id', DocaController.getById)

module.exports = router