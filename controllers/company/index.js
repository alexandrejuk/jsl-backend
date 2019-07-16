const database = require('../../database')
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

const register = async (req, res, next) => {
  const transaction = await database.transaction()
  try {
    const response = await companyDomain.register(req.body, transaction)
    res.json(response)
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
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
  register,
}