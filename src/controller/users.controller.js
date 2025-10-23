import userServices from '../services/users.services.js';

//aca hago los métodos de las rutas

const getAllUsers = async (req, res) => {
  try {
    const data = await userServices.getAllUsers();
    res.send(data);
  } catch (error) {
    res.send("Hubo un error al obtener los usuarios: " + error.message);
  }
}

const getUsersByAgeRange = async (req, res) => {
  try {
    const ageRange = req.params.range;
    const data = await userServices.getUsersOfAgeRange(ageRange);
    res.send(data);
  } catch (error) {
    res.send("Hubo un error al obtener los usuarios: " + error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const data = await userServices.postUser(userData);
    res.send(data);
  } catch (error) {
    res.send("Hubo un error al crear el usuario: " + error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = JSON.parse(req.body);
    const data = await userServices.updateUser(userId, userData);
    res.send(data);
  } catch (error) {
    res.send("Hubo un error al actualizar el usuario: " + error.message);
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await userServices.deleteUser(userId);
    res.send(data);
  } catch (error) {
    res.send("Hubo un error al eliminar el usuario: " + error.message);
  }
}

export default {
  getAllUsers,
  getUsersByAgeRange,
  createUser,
  updateUser,
  deleteUser
}