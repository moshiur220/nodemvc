const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const rootDir = require("./libs/path");
const theme = require("./libs/theme");
const adminRoute = require("./app/admin/core/adminRoute");
const port = process.env.APP_PORT;
//database connections
require("./libs/db");
// Body parser enable
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.use("/public", express.static(path.join(rootDir, "public")));
app.use("/app", express.static(path.join(rootDir, "app")));
app.set("views", path.join(rootDir, "app"));
app.set("view engine", "ejs");
//setup public folder

//const themeLoad = require("./app/themes/thmes2/core/route");
const themeLoad = require(theme.lookView);
app.use("/admin", adminRoute);
app.use(themeLoad);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
