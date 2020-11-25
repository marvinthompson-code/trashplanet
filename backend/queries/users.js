const db = require("../db/index");

const createUser = async (req, res, next) => {
  try {
    let { email, username, full_name, id } = req.body;
    let user = await db.one(
      "INSERT INTO users (email, username, full_name, id) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, username, full_name, id]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new user",
      body: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessful",
      message: "Unable to create new user",
    });
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "Success",
      message: "Retrieved all users",
      body: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessful",
      message: "Unable to get all users",
    });
    next(error);
  }
};

const getSingleUserById = async (req, res, next) => {
  try {
    let { id } = req.body
    let user = await db.one("SELECT * FROM users WHERE id = $1 RETURNING *", [id])
    res.status(200).json({
      status: "Success",
      message: "Retrieved a single user",
      body: {
        user
      }
    })
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessful",
      message: "Unable to get single user",
    });
    next(error);
  }
}

module.exports = { createUser, getAllUsers, getSingleUserById };
