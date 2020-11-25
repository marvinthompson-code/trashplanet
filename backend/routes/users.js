const users = require("express").Router();

const {
    createUser
    // getAllUsers,
    // getSingleUserById
} = require("../queries/users")

// users.get("/", getAllUsers);
// users.get("/:id", getSingleUserById);
users.post("/addUser", createUser);


module.exports = users