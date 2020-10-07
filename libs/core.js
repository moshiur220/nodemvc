const path = require("path");
const express = require("express");
const app = express();
const rootDir = require("./path");
const theme = require("./theme");
const port = 3000;

// view engine setup
app.use("/public", express.static(path.join(rootDir, "public")));
app.use("/app", express.static(path.join(rootDir, "app")));
app.set("views", path.join(rootDir, "app"));
app.set("view engine", "ejs");
//setup public folder

app.get("/", (req, res) => {
  res.render(`${theme.dir}/index`);
});
// console.log("From server");
// console.log(path.join(__dirname, "../", "app"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
