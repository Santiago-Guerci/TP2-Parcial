const users = [
    { id: 1, name: "Juan Pérez", email: "juanperez@example.com", age: 28, ageRange: "Adult" },
    { id: 2, name: "María Gómez", email: "mariagomez@example.com", age: 34, ageRange: "Adult" }, //lo del range lo podría sacar en otra lógica
    { id: 3, name: "Luis Rodríguez", email: "luisrodriguez@example.com", age: 17, ageRange: "Young" },
    { id: 4, name: "Ana Martínez", email: "anamartinez@example.com", age: 60, ageRange: "Senior" }
];

const getAllUsers = () => {
    return users;
};

const getUsersOfAgeRange = (ageRange) => {
    const usersOfRange = users.filter(user => user.ageRange === ageRange);
    return {
        count: users.filter(user => user.ageRange === ageRange).length,
        data: usersOfRange
    };
};

const addUser = (newUser) => {
    const userExists = users.some(user => user.email === newUser.email);
    if (userExists) {
        return "El usuario ya existe";
    } else {
        users.push(newUser);
        return "El usuario ha sido agregado";
    }
}

const updateUser = (id, updatedInfo) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return "El usuario no existe";
    } else {
        const newUser = { ...users[userIndex], ...updatedInfo };
        users[userIndex] = newUser;
        return "El usuario ha sido actualizado";
    }
}

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return "El usuario no existe";
    } else {
        users.splice(userIndex, 1);
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