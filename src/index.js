const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");

const route = require("./routes/index.js");
const app = express();
const port = 2000;

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars());
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/mvc/views"));

route(app);

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}`
  );
});
