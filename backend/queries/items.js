const db = require("../db/index");

const createItem = async (req, res, next) => {
  try {
    let { item_image_url, category, caption, price, size, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (item_image_url, category, caption, price, size) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [item_image_url, category, caption, price, size]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new item",
      body: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessful",
      message: "Unable to create new item",
    });
    next(error);
  }
};

const getAllItems = async (req, res, next) => {
  try {
    let items = await db.any("SELECT * FROM items");
    res.status(200).json({
      status: "Success",
      message: "Retrieved all items",
      body: {
        items,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not get items",
    });
  }
};

const getAllItemsByCategory = async (req, res, next) => {
  try {
    let { category } = req.body
    let items = await db.any("SELECT * FROM items WHERE category = $1 RETURNING *", [ category ])
    res.status(200).json({
      status: "Success",
      message: "Retrieved all items",
      body: {
        items
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not get items",
    });
  }
}

const deleteSingleItem = async (req, res, next) => {
  try {
    let { id } = req.body;
    let item = await db.one("DELETE * FROM items WHERE id = $1 RETURNING *", [
      id,
    ]);
    res.status(200).json({
      status: "Successful",
      message: `Removed an item at id ${id}`,
      body: {
        item,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not remove an item",
    });
    next(error);
  }
};

const getSingleItem = async (req, res, next) => {
  try {
    let { id } = req.body;
    let item = await db.one("SELECT * FROM items WHERE id = $1", [id]);
    res.status(200).json({
      status: "Successful",
      message: `Retrieved an item at id ${id}`,
      body: {
        item,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Could not retrieve user by ID",
    });
    next(error);
  }
};

module.exports = { createItem, getAllItems, deleteSingleItem, getSingleItem, getAllItemsByCategory };
