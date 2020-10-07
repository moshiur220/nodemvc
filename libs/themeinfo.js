const appRoot = require("app-root-path");
const theme = require(appRoot + "/libs/theme.js");

module.exports = class Themeinfo {
  static cssUrl(obj = []) {
    var urlCss = "";
    obj.forEach((css) => {
      urlCss += `<link rel="stylesheet" href="${theme.lookCss}${css}.css" />`;
    });

    return urlCss;
  }
  static jsUrl(obj = []) {
    var urlJs = "";
    obj.forEach((js) => {
      //   urlJs += `<link rel="stylesheet" href="${theme.lookJs}${js}.js" />`;
      urlJs += `<script src="${theme.lookJs}${js}.js"></script>`;
    });

    return urlJs;
  }
};
