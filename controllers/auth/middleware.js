const jwt = require('jsonwebtoken')
const { secret } = require('../../config')

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  
  if(token) {
    jwt.verify(token.slice(7, token.length), secret, (err, decoded) => {
      if(err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    })
  }
}

module.exports = checkToken