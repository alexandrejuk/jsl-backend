const database = require('../../database')

const DocaModel = database.model('doca')
const DriverModel = database.model('driver')
const VehicleModel = database.model('vehicle')
const OperationModel = database.model('operation')
const TicketModel = database.model('ticket')
const TicketEventModel = database.model('ticketEvent')

const order =  [ ['docaNumber', 'ASC' ] ]
class DocaDomain {
  async create(docaData, companyId) {
    return await DocaModel.create({ ...docaData, companyId })
  }

  async getById(id, companyId) {
    const where = { companyId }
    return await DocaModel.findByPk(id, { where, order })
  }

  async get(companyId, status = 'start_service' ) {
    const search = { 
      where: { companyId }, 
      order, 
      include: [{
        model: TicketModel,
        include: [
          DriverModel,
          VehicleModel,
          OperationModel,
          TicketEventModel,
        ]
      }] 
    }

    return await DocaModel.findAll(search)
  }
}

module.exports = DocaDomain