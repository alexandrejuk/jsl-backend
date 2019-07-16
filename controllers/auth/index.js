const jwt = require('jsonwebtoken')
const { secret } = require('../../config')
const AuthDomain = require('../../domains/auth')
const authDomain = new AuthDomain()

const middlewareAuthorization = async (req, res, next) => {
  try {
    const findUser = await authDomain.login(req.body)
    const token = jwt.sign({ user: findUser }, secret, { expiresIn: '24h'})
    res.json({ user: findUser, token }) 
  } catch (error) {
    next(error)
  }
}

module.exports = middlewareAuthorization