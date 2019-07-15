const { compare } = require('bcrypt')
const database = require('../../database')
const UserModel = database.model('user')

class AuthDomain {
  async login({ userName, password }) {
    const findUser = await UserModel.findOne({ where: { userName }})
    
    if(!findUser) {
      throw new Error('Username or password do not match')
    }
    
    const checkedPassword = await compare(password, findUser.password)

    if(checkedPassword) {
      return findUser
    }

    throw new Error('Username or password do not match')
  }
}

module.exports = AuthDomain