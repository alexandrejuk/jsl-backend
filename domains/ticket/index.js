const database = require('../../database')
const Op = require('sequelize').Op
const DriverModel = database.model('driver')
const VehicleModel = database.model('vehicle')
const OperationModel = database.model('operation')
const TicketModel = database.model('ticket')
const TicketEventModel = database.model('ticketEvent')
const DocaModel = database.model('doca')

const include = [
  DriverModel,
  VehicleModel,
  OperationModel,
  TicketEventModel
]

class TicketDomain {
  async create(ticketData, companyId, transaction = null) {
    const startedAt = new Date()
    const { driver, vehicle, operationId, service, status } = ticketData
    let driverInstance = await DriverModel.findOne({ where: { documentId: driver.documentId } })
    let vehicleInstance = await VehicleModel.findOne({ where: { plate: vehicle.plate } })
    
    const barCode = [
      startedAt.getDate(),
      (startedAt.getMonth() + 1),
      startedAt.getFullYear(),
      startedAt.getHours(),
      startedAt.getMinutes(),
      startedAt.getSeconds()
    ].join('')

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

    await ticketCreated.save()
    
    await ticketCreated.reload({
      transaction,
      include,
    })

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

  changeStatus(value) {
    const statusType = {
      waiting_service: 'start_service',
      start_service: 'ended_service',
      ended_service: 'completed'
    }
    return statusType[value]
  }

  async update({ docaId = null, barCode = null, id = null }, companyId, transaction = null) {
    let status = null
    const statusDoca = {
      start_service: 'operation',
      ended_service: 'available'
    }
    const startedAt = new Date()
    const where = { barCode, companyId }
    const findTicket = id ? await TicketModel.findByPk(id) : await TicketModel.findOne({ where })
    const findDoca = await DocaModel.findByPk(docaId)
   
    if(!docaId && findTicket && findTicket.status === 'waiting_service') {
      await findTicket.update({ status: 'cancel' }, { transaction })
      await findTicket.reload({ transaction, include })
      
      await TicketEventModel.create({
        status: 'cancel',
        ticketId: findTicket.id,
        startedAt,
      }, { transaction })
    }

    if(findTicket && findDoca && findTicket.status !== 'completed') {
      status = this.changeStatus(findTicket.status)

      if(findDoca.id === findTicket.docaId) {
        await findTicket.update({ status }, { transaction })        
        await findTicket.reload({ transaction, include })
        const res = await TicketEventModel.create({
          status,
          ticketId: findTicket.id,
          startedAt,
        }, { transaction })
  
        if(status === 'start_service' || status === 'ended_service') {
          await findDoca.update({ status: statusDoca[status] })
        }
      }

      if(!findTicket.docaId) {
        await findTicket.update({ docaId, status }, { transaction })
        await findTicket.reload({ transaction, include })
        await TicketEventModel.create({
          status,
          ticketId: findTicket.id,
          startedAt,
        }, { transaction })
  
        if(status === 'start_service' || status === 'ended_service') {
          await findDoca.update({ status: statusDoca[status] })
        }
      }
    }

    return findTicket
  }

  async getByIdTicket(id) {
    return await TicketModel.findByPk(id, { 
        where: { 
          status: {
            [Op.or]: ['waiting_service', 'start_service', 'ended_service']
          },
        }, 
        include 
      })
  }
}

module.exports = TicketDomain