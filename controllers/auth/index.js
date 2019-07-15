const AuthDomain = require('../../domains/auth')
const authDomain = new AuthDomain()

const login = async (req, res, next) => {
  try {
    const findUser = await authDomain.login(req.body)
    res.json(findUser) 
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
}