const users = [
    { id: 1, name: "Juan Pérez", email: "juanperez@example.com", age: 28 },
    { id: 2, name: "María Gómez", email: "mariagomez@example.com", age: 34},
    { id: 3, name: "Luis Rodríguez", email: "luisrodriguez@example.com", age: 17},
    { id: 4, name: "Ana Martínez", email: "anamartinez@example.com", age: 60} 
];

const ageRanges = {
    young: { min: 0, max: 17 },
    adult: { min: 18, max: 59 },
    senior: { min: 60, max: 120 }
};

const getAllUsers = () => {
    return users;
};

const getUsersOfAgeRange = (ageRange) => {

    const ageRange = ageRanges[ageRange];
    const usersOfRange = users.filter(user => user.age > ageRange.min && user.age < ageRange.max);
    return {
        count: usersOfRange.length,
        data: usersOfRange
    };
};

const addUser = (newUser) => {
    const userExists = users.find(user => user.email === newUser.email);
    if (userExists) {
        return "El usuario ya existe";
    } else {
        const newId = users.length ? users[users.length - 1].id + 1 : 1;
        newUser = { id: newId, ...newUser }; //esto es solo por el toc que lo pusheaba al final y no al principio, y en la rta del json me quedaba desparejo
        users.push(newUser);
        return "Nuevo usuario agregado";
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