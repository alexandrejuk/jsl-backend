const database = require('../../database')
const Op = require('sequelize').Op
const DriverModel = database.model('driver')
const TicketModel = database.model('ticket')


class DriverDomain {
  async create(driverData) {
    return await DriverModel.create(driverData)
  }

  async getById(id) {
    return await DriverModel.findByPk(id)
  }

  async get() {
    return await DriverModel.findAll()
  }

  async getTicketIdDriver(documentId) {
    return await DriverModel.findOne({
      where: { documentId },
        include: [{
          model: TicketModel,
          where: {
            status: {
              [Op.or]: ['waiting_service', 'start_service', 'ended_service']
            }
          }
        }] 
      })
  }

}

module.exports = DriverDomain