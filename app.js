const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const bookcallRoutes = require("./routes/bookcall");

app.use(bodyParser.json({ extended: false }));
app.use("/bookcall", bookcallRoutes);

app.listen(3000);
