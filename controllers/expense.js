const Expneses = require("../models/expense");

exports.getExpenses = (req, res, next) => {
  Expneses.fetchAll()
    .then(([rows, otherdata]) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.addExpense = (req, res, next) => {
  const data = new Expneses(
    req.body.id,
    req.body.price,
    req.body.description,
    req.body.categary
  );
  data
    .save()
    .then((result) => {
      console.log(result[0].insertId); // Access the insertId property
      res.json({
        id: result[0].insertId,
        price: req.body.price,
        description: req.body.description,
        categary: req.body.categary,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.deleteExpense = (req, res, next) => {
  const prodId = req.params.userId;
  console.log(prodId);
  Expneses.deleteProduct(prodId)
    .then((rows) => {
      console.log("sussfully deleted", rows);
      res.json({
        message: "success",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
