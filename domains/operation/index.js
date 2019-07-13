const database = require('../../database')
const OperationModel = database.model('operation')

class OperationDomain {
  async create(operationData, companyId) {
    return await OperationModel.create({ ...operationData, companyId })
  }

  async getById(operationId, companyId) {
    const where = { companyId }
    return await OperationModel.findByPk(operationId, { where })
  }

  async get(companyId) {
    const where = { companyId }
    return await OperationModel.findAll({ where })
  }
}

module.exports = OperationDomain