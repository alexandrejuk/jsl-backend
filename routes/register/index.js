const router = require('express').Router()
const CompanyController = require('../../controllers/company')

router.post('/register', CompanyController.register)

module.exports = router