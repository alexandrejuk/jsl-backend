const router = require('express').Router()
const VehicleController = require('../../controllers/vehicle')

router.post('/vehicles', VehicleController.create)
router.get('/vehicles', VehicleController.get)
router.get('/vehicles/:id', VehicleController.getById)

module.exports = router