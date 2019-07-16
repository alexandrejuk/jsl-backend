const router = require('express').Router()
const middlewareAuthorization = require('../../controllers/auth')

router.post('/login', middlewareAuthorization)

module.exports = router