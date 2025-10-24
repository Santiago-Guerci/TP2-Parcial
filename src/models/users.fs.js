import fs from 'fs';

const readFile = async () => {
    const data = await fs.promises.readFile("users.json", "utf-8")
    return JSON.parse(data)
}

const writeFile = async (data) => {
    await fs.promises.writeFile("users.json", JSON.stringify(data, null, 2));
}

const ageRanges = {
    young: { min: 0, max: 17 },
    adult: { min: 18, max: 59 },
    senior: { min: 60, max: 120 }
};

const getAllUsers = async () => {
    const users = await readFile();
    return users;
}

const getUsersOfAgeRange = async (ageRange) => {
    const users = await readFile();
    const range = ageRanges[ageRange];
    const usersOfRange = users.filter(user => user.age >= range.min && user.age <= range.max);
     return {
        count: usersOfRange.length,
        data: usersOfRange
    };
}

const addUser = async (newUser) => {
    const users = await readFile();
    const userExists = users.find(user => user.email === newUser.email);
    if (userExists) {
        return "El usuario ya existe";
    } else {
        const newId = users.length ? users[users.length - 1].id + 1 : 1;
        newUser = { id: newId, ...newUser };
        users.push(newUser);
        await writeFile(users);
        return "Nuevo usuario agregado";
    }
}

const updateUser = async (id, updatedInfo) => {
    const users = await readFile();
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return "El usuario no existe";
    } else {
        const newUser = { ...users[userIndex], ...updatedInfo };
        users[userIndex] = newUser;
        await writeFile(users);
        return "El usuario ha sido actualizado";
    }
}

const deleteUser = async (id) => {
    const users = await readFile();
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return "El usuario no existe";
    } else {
        users.splice(userIndex, 1);
        await writeFile(users);
        return "El usuario ha sido eliminado";
    }
}

export default {
    getAllUsers,
    getUsersOfAgeRange,
    addUser,
    updateUser,
    deleteUser
}