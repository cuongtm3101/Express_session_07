const {
  findAll,
  findById,
  updateOne,
  deleteOne,
} = require("../models/users.models");

module.exports.getAllUser = async (req, res) => {
  try {
    let resArr = await findAll();
    let result = resArr[0];

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.getOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    let [result, column] = await findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.updateOneUser = async (req, res) => {
  try {
    let { id } = req.params; // object destructuring
    const { name, email, phone, website } = req.body;
    await updateOne(name, email, phone, website, id);
    res.status(200).json({
      message: "Update successfully",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.deleteOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    await deleteOne(id);
    res.status(200).json({
      message: "Delete successfully",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
