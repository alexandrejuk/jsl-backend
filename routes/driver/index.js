const router = require('express').Router()
const DriverController = require('../../controllers/driver')

router.post('/drivers', DriverController.create)
router.get('/drivers', DriverController.get)
router.get('/drivers/:id', DriverController.getById)

module.exports = router