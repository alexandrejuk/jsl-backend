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

const CompanyRoute = require('./routes/company')
const OperationRoute = require('./routes/operation')
const DocaRoute = require('./routes/doca')
const DriverRoute = require('./routes/driver')
const VehicleRoute = require('./routes/vehicle')
const TicketRoute = require('./routes/ticket')

const app = Express()
const baseUrl = '/api/v1'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(httpLogger)

app.use(baseUrl, CompanyRoute)
app.use(baseUrl, OperationRoute)
app.use(baseUrl, DocaRoute)
app.use(baseUrl, DriverRoute)
app.use(baseUrl, VehicleRoute)
app.use(baseUrl, TicketRoute)



module.exports = app 