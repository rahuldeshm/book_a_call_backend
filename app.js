const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

const bookcallRoutes = require("./routes/bookcall");
const expenseRoutes = require("./routes/expense");

app.use(bodyParser.json({ extended: false }));
app.use("/bookcall", bookcallRoutes);
app.use("/expense", expenseRoutes);

app.listen(3000);
