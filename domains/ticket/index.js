const database = require('../../database')

const DriverModel = database.model('driver')
const VehicleModel = database.model('vehicle')
const OperationModel = database.model('operation')
const TicketModel = database.model('ticket')
const TicketEventModel = database.model('ticketEvent')

const include = [
  DriverModel,
  VehicleModel,
  OperationModel,
  TicketEventModel
]

class TicketDomain {
  async create(ticketData, companyId, transaction = null) {
    const startedAt = new Date()
    const { driver, vehicle, operationId, service, status, barCode } = ticketData
    let driverInstance = await DriverModel.findOne({ where: { documentId: driver.documentId } })
    let vehicleInstance = await VehicleModel.findOne({ where: { plate: vehicle.plate } })
    
    if(!driverInstance) {
      driverInstance = await DriverModel.create(driver, { transaction })
    }

    if(!vehicleInstance) {
      vehicleInstance = await VehicleModel.create(vehicle, { transaction })
    }

    const ticketCreated = await TicketModel.create({
      service,
      operationId,
      companyId,
      status, 
      barCode,
      driverId: driverInstance.id,
      vehicleId: vehicleInstance.id,
    }, { transaction, include })

    await TicketEventModel.create({
      status,
      ticketId: ticketCreated.id,
      startedAt,
    }, { transaction })

    return ticketCreated
  }

  async getById(ticketId, companyId) {
    const where = { companyId }
    return await TicketModel.findByPk(ticketId, { where, include })
  }

  async get(companyId) {
    const where = { companyId }
    return await TicketModel.findAll({ where, include })
  }
}

module.exports = TicketDomain