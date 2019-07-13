const database = require('../../database')
const VehicleModel = database.model('vehicle')

class VehicleDomain {
  async create(vehicleData) {
    return await VehicleModel.create(vehicleData)
  }

  async getById(id) {
    return await VehicleModel.findByPk(id)
  }

  async get() {
    return await VehicleModel.findAll()
  }
}

module.exports = VehicleDomain