import User from '../models/user.js'

const saveUser = (user) => {
    let users = getUsers()

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))
}

const editUser = (email, user) => {
    let users = getUsers()
    users.forEach((localUser, index) => {
        if (localUser.email === email) {
            return users[index] = user
        }
    })

    localStorage.setItem("users", JSON.stringify(users))
}

const removeUser = (user) => {
    // @TODO implement remove user form localStorage
}

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users"))
}

const getUserByEmail = (email) => {
    let users = getUsers()

    let user = users.filter((user) => user.email === email)
        user = new User().fromJSON(user[0])

    return user
}

export {
    saveUser,
    editUser,
    removeUser,
    getUsers,
    getUserByEmail
};
