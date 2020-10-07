const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

//app.set("views", path.join(__dirname, "../", "app"));
// or
//app.set("views", path.join(__dirname, "..", "app"));

// admin path is here for view part
// exports.adminAsset = "app/admin/asset/";
// exports.adminCss = "app/admin/asset/css/";
// exports.adminJs = "app/admin/asset/js/";
// exports.adminDoc = "app/admin/asset/ducoments/";
