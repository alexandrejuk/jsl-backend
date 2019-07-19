const database = require('../../database')
const TicketDomain = require('../../domains/ticket')
const ticketDomain = new TicketDomain()

const create = async (req, res, next) => {
  const transaction = await database.transaction()
  const { companyId } = req.params
  try {
    const response = await ticketDomain.create(
      req.body,
      companyId,
      transaction
    )
    
    res.json(response)
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

const get = async (req, res, next) => {
  const { companyId } = req.params
  try {
    const response = await ticketDomain.get(companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  const { id, companyId } = req.params
  try {
    const response = await ticketDomain.getById(id, companyId)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  const transaction = await database.transaction()
  const { companyId } = req.params
  try {
    const response = await ticketDomain.update(
      req.body,
      companyId,
      transaction
    )

    res.json(response)
    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

const getByIdTicket = async (req, res, next) => {
  const { id } = req.params
  try {
    const response = await ticketDomain.getByIdTicket(id)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  get,
  getById,
  update,
  getByIdTicket,
}