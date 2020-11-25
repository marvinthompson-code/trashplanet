const db = require("../db/index");

const createItem = async (req, res, next) => {
  try {
    let { item_image_url, category, caption, price, size, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (item_image_url, category, caption, price, size, id ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [item_image_url, category, caption, price, size, id ]
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

module.exports = { createItem };