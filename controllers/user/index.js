const UserDomain = require('../../domains/user')
const userDomain = new UserDomain()

const create = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await userDomain.create(req.body, companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await userDomain.get(companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id, companyId } = req.params
  try {
    const response = await userDomain.getById(id, companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  get,
  getById,
}