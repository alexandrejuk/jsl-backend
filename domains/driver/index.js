const database = require('../../database')
const DriverModel = database.model('driver')

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
}

module.exports = DriverDomain