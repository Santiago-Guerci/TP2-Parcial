import Factory from '../factory/users.factory.js';

const usersModel = await Factory("MEM"); //Usar MEM o FS

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
