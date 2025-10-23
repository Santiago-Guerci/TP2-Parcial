import usersModel from '../models/users.model.js';
//si aca hiciese factory, importaría del archivo users.factory.js

const getAllUsers = () => {
    return usersModel.getAllUsers();
}

const getUsersOfAgeRange = (ageRange) => {
    return usersModel.getUsersOfAgeRange(ageRange);
}

const postUser = (newUser) => {
    return usersModel.addUser(newUser);
}

const putUser = (id, updatedInfo) => {
    return usersModel.updateUser(id, updatedInfo);
}

const deleteUser = (id) => {
    return usersModel.deleteUser(id);
}

export default {
    getAllUsers,
    getUsersOfAgeRange,
    postUser,
    putUser,
    deleteUser
}
