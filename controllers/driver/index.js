const DriverDomain = require('../../domains/driver')
const driverDomain = new DriverDomain()

const create = async (req, res, next) => {
  try {
    const response = await driverDomain.create(req.body)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  try {
    const response = await driverDomain.get()
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const response = await driverDomain.getById(req.params.id)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getTicketIdDriver = async (req, res, next) => {
  try {
    const response = await driverDomain.getTicketIdDriver(req.body.documentId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  get,
  getById,
  getTicketIdDriver,
}