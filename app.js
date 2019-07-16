const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js')
const escriba = require('escriba')

const logger = log4js.getLogger()

logger.level = 'all'

const { httpLogger } = escriba({
  loggerEngine: logger,
  service: 'api',
})

const middlewareValidation = require('./controllers/auth/middleware')

const authRoute = require('./routes/auth')
const CompanyRoute = require('./routes/company')
const OperationRoute = require('./routes/operation')
const DocaRoute = require('./routes/doca')
const DriverRoute = require('./routes/driver')
const VehicleRoute = require('./routes/vehicle')
const TicketRoute = require('./routes/ticket')
const UserRoute = require('./routes/user')

const app = Express()
const baseUrl = '/api/v1'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(httpLogger)

app.use('/', authRoute)

app.use(baseUrl, middlewareValidation)
app.use(baseUrl, UserRoute)
app.use(baseUrl, CompanyRoute)
app.use(baseUrl, OperationRoute)
app.use(baseUrl, DocaRoute)
app.use(baseUrl, DriverRoute)
app.use(baseUrl, VehicleRoute)
app.use(baseUrl, TicketRoute)

module.exports = app 