const router = require('express').Router()
const OperationController = require('../../controllers/operation')

router.post('/companies/:companyId/operations', OperationController.create)
router.get('/companies/:companyId/operations', OperationController.get)
router.get('/companies/:companyId/operations/:id', OperationController.getById)

module.exports = router