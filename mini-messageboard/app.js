const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
