const { User, Review } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id, {
      include: [{ model: Review, as: 'user_reviews' }]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserById,
  CreateUser
}
