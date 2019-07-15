const router = require('express').Router()
const UserController = require('../../controllers/user')

router.post('/companies/:companyId/users', UserController.create)
router.get('/companies/:companyId/users', UserController.get)
router.get('/companies/:companyId/users/:id', UserController.getById)
router.put('/companies/:companyId/users/:id', UserController.update)

module.exports = router