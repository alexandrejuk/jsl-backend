const database = require('../../database')
const DocaModel = database.model('doca')

const order =  [ ['docaNumber', 'ASC' ] ]
class DocaDomain {
  async create(docaData, companyId) {
    return await DocaModel.create({ ...docaData, companyId })
  }

  async getById(id, companyId) {
    const where = { companyId }
    return await DocaModel.findByPk(id, { where, order })
  }

  async get(companyId) {
    const where = { companyId }
    return await DocaModel.findAll({ where, order })
  }
}

module.exports = DocaDomain