const items = require("express").Router();

const {
    createItem
} = require("../queries/items")

items.post("/addItem", createItem)

module.exports = items