const db = require("../utils/database");
module.exports.findAll = () => {
  return db.execute("SELECT * FROM tbl_user");
};

module.exports.findById = (id) => {
  return db.execute("SELECT * FROM tbl_user WHERE user_id = ?", [id]);
};

module.exports.updateOne = (name, email, phone, website, id) => {
  return db.execute(
    "UPDATE tbl_user SET name = ?, email = ?, phone = ?, website = ? WHERE user_id = ?",
    [name, email, phone, website, id]
  );
};
module.exports.deleteOne = (id) => {
  return db.execute("DELETE FROM tbl_user WHERE user_id = ?", [id]);
};
