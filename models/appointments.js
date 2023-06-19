const db = require("../util/database");

module.exports = class Product {
  constructor(username, email, phone, time) {
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.time = time;
  }

  save() {
    return db.execute(
      "INSERT INTO users (username,email,phone,time) VALUES (?,?,?,?)",
      [this.username, this.email, this.phone, this.time]
    );
  }
  static deleteProduct(id) {
    return db.execute("DELETE FROM users WHERE users.id = ?", [id]);
  }
  static fetchAll(cb) {
    return db.execute("SELECT * FROM users");
  }
};
