const appRoot = require("app-root-path");
const info = require(appRoot + "/libs/contentload");
exports.getproduct = (req, res, next) => {
  res.render(info.pageUrl(), info.load({ name: "moshiur" }));
};

exports.getContact = (req, res, next) => {
  res.render(info.pageUrl("contac"), info.load({ name: "moshiur" }));
};
exports.postContact = (req, res, next) => {
  //res.render(info.pageUrl("contact"), info.load({ name: "moshiur" }));
  //consave
  console.log(req.body);
  res.render(
    info.pageUrl("consave"),
    info.load({ name: req.body.name, age: req.age })
  );
};
