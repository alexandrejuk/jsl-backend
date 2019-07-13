const database = require('../../database')
const CompanyModel = database.model('company')

class CompanyDomain {
  async create(companyData) {
    return await CompanyModel.create(companyData)
  }

  async getById(companyId) {
    return await CompanyModel.findByPk(companyId)
  }

  async get() {
    return await CompanyModel.findAll()
  }
}

module.exports = CompanyDomain