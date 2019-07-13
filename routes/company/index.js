const router = require('express').Router()
const CompanyController = require('../../controllers/company')

router.post('/companies', CompanyController.create)
router.get('/companies', CompanyController.get)
router.get('/companies/:id', CompanyController.getById)

module.exports = router