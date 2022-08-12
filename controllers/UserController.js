const { User, Review } = require('../models');

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Review, as: 'user_reviews' }]
    });
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id, {
      include: [{ model: Review, as: 'user_reviews' }]
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updatedUser);
  } catch (error) {
    throw error;
  }
};
const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({ where: { id: userId } });
    res.send({ message: `Deleted user with an id of ${userId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
  DeleteUser
};
