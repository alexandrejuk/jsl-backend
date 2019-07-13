const DocaDomain = require('../../domains/doca')
const docaDomain = new DocaDomain()

const create = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await docaDomain.create(req.body, companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await docaDomain.get(companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id, companyId } = req.params
  try {
    const response = await docaDomain.getById(id, companyId)
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