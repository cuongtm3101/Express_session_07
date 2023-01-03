const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
} = require("../controllers/users.controllers");
// const getAllUser = require(url).getAllUser
// const getOneUser = require(url).getOneUser

router.get("/", getAllUser);

router.get("/:id", getOneUser);

router.put("/:id", updateOneUser);

router.delete("/:id", deleteOneUser);

module.exports = router;
