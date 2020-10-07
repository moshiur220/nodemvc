let theme = {
  name: "Test themes",
  dir: "themes/thmes24",
};

exports.themeDir = theme.dir;
exports.setting = `./app/${theme.dir}/core/setting`;
exports.lookView = `./app/${theme.dir}/core/route`;
exports.lookCss = `app/${theme.dir}/asset/css/`;
exports.lookJs = `app/${theme.dir}/asset/js/`;
exports.asset = `app/${theme.dir}/asset/`;

// module.exports = class Themes {
//   themeDir() {
//     return "themes/thmes2";
//   }
// };

//================ admin ===============
exports.adminAsset = "app/admin/asset/";
exports.adminCss = "app/admin/asset/css/";
exports.adminJs = "app/admin/asset/js/";
exports.adminDoc = "app/admin/asset/ducoments/";
