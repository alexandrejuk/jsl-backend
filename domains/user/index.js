const { hash } = require('bcrypt')
const database = require('../../database')

const UserModel = database.model('user')

class UserDomain {
  async create(userData, companyId) {
    const password = await hash(userData.password, 10)
    return await UserModel.create({ ...userData, companyId, password })
  }

  async getById(id, companyId) {
    const where = { companyId }
    return await UserModel.findByPk(id, { where })
  }

  async get(companyId) {
    return await UserModel.findAll({ where: { companyId } })
  }
}

module.exports = UserDomain