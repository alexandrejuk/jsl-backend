const { compare } = require('bcrypt')
const database = require('../../database')
const UserModel = database.model('user')

class AuthDomain {
  async login({ email, password }) {
    const findUser = await UserModel.findOne({ email })
    return await compare(password, findUser.password)
  }
}

module.exports = AuthDomain