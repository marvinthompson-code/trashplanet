const items = require("express").Router();

const {
  createItem,
  getAllItems,
  deleteSingleItem,
  getSingleItem,
} = require("../queries/items");

items.post("/addItem", createItem);
items.get("/", getAllItems);
items.get("/:id", getSingleItem);
items.delete("/:id", deleteSingleItem);

module.exports = items;
