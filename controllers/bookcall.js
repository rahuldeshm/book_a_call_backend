const Appointments = require("../models/appointments");
const { param } = require("../routes/bookcall");

exports.getAppointments = (req, res, next) => {
  Appointments.fetchAll()
    .then(([rows, otherdata]) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.postAppointment = (req, res, next) => {
  const data = new Appointments(
    req.body.username,
    req.body.email,
    req.body.phone,
    req.body.time
  );
  data
    .save()
    .then((rows) => {
      res.json({
        id: rows.insertId,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        time: req.body.time,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.deleteAppointment = (req, res, next) => {
  const prodId = req.params.userId;
  console.log(prodId);
  Appointments.deleteProduct(prodId)
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
