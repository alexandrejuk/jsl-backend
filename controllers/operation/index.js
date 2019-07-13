const OperationDomain = require('../../domains/operation')
const operationDomain = new OperationDomain()

const create = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await operationDomain.create(req.body, companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await operationDomain.get(companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id, companyId } = req.params
  try {
    const response = await operationDomain.getById(id, companyId)
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