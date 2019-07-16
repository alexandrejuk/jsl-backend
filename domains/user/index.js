const { hash, compare } = require('bcrypt')
const database = require('../../database')

const UserModel = database.model('user')

class UserDomain {
  async create(userData, companyId, transaction = null) {
    const password = await hash(userData.password, 10)
    return await UserModel.create({ ...userData, companyId, password }, { transaction })
  }

  async getById(id, companyId) {
    const where = { companyId }
    return await UserModel.findByPk(id, { where })
  }

  async get(companyId) {
    return await UserModel.findAll({ where: { companyId } })
  }

  async update(id, userData, companyId) {
    const { email, userName, password = null } = userData
    const where = { companyId }

    const findUser = await UserModel.findByPk(id, { where })
    await findUser.update({ email, userName })
    await findUser.reload()

    if(password) {
      const pwd = await hash(password, 10)
      await findUser.update({ password: pwd })
      await findUser.reload()
    }

    return findUser
  }
}

module.exports = UserDomain