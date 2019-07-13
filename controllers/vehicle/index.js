const VehicleDomain = require('../../domains/vehicle')
const vehicleDomain = new VehicleDomain()

const create = async (req, res, next) => {
  try {
    const response = await vehicleDomain.create(req.body)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const get = async (req, res, next) => {
  try {
    const response = await vehicleDomain.get()
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const response = await vehicleDomain.getById(req.params.id)
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