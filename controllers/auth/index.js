const AuthDomain = require('../../domains/auth')
const authDomain = new AuthDomain()

const login = async (req, res, next) => {
  const findUser = await authDomain.login(req.body)
  res.json(findUser) 
}

module.exports = {
  login,
}