const CompanyDomain = require('../../domains/company')
const companyDomain = new CompanyDomain()

const create = async (req, res, next) => {
  try {
    const response = await companyDomain.create(req.body)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  try {
    const response = await companyDomain.get()
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await companyDomain.getById(id)
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