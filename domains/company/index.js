const database = require('../../database')
const CompanyModel = database.model('company')
const UserModel = database.model('user')

class CompanyDomain {
  async create(companyData) {
    return await CompanyModel.create(companyData)
  }

  async register(companyData, transaction = null) {
    const { company, user } = companyData
    const companyCreated = await CompanyModel.create(company, { transaction })
    await UserModel.create({ ...user, companyId: companyCreated.id }, { transaction })
    return companyCreated
  }

  async getById(companyId) {
    return await CompanyModel.findByPk(companyId)
  }

  async get() {
    return await CompanyModel.findAll()
  }
}

module.exports = CompanyDomain