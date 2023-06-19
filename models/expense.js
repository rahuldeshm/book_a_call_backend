const db = require("../util/database");

module.exports = class Product {
  constructor(id, price, description, categary) {
    this.id = id;
    this.price = price;
    this.description = description;
    this.categary = categary;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE expenses SET  price=?,description=?,categary=? WHERE id=?",
        [this.price, this.description, this.categary, this.id]
      );
    }
    return db.execute(
      "INSERT INTO expenses (price, description, categary) VALUES (?,?,?)",
      [this.price, this.description, this.categary]
    );
  }
  static deleteProduct(id) {
    return db.execute("DELETE FROM expenses WHERE expenses.id = ?", [id]);
  }
  static fetchAll(cb) {
    return db.execute("SELECT * FROM expenses");
  }
};
