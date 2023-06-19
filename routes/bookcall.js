const express = require("express");

const bookacall = require("../controllers/bookcall");

const router = express.Router();

router.get("/appointments", bookacall.getAppointments);
router.post("/appointments", bookacall.postAppointment);
router.delete("/appointments/:userId", bookacall.deleteAppointment);

module.exports = router;
