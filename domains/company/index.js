const database = require('../../database')
const CompanyModel = database.model('company')
const UserDomain = require('../user')

const userDomain = new UserDomain()

class CompanyDomain {
  async create(companyData) {
    return await CompanyModel.create(companyData)
  }

  async register(companyData, transaction = null) {
    const { company, user } = companyData
    const companyCreated = await CompanyModel.create(company, { transaction })
    await userDomain.create(user, companyCreated.id, transaction)
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