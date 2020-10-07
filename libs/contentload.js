const theme = require("./theme");
const setting = require(`../${theme.setting}`);
const tinfo = require("./themeinfo");

module.exports = class ContentLoad {
  static load(data) {
    return {
      // This is css return
      cssUrl: tinfo.cssUrl(setting.css),
      //this is javascript file url return
      jsUrl: tinfo.jsUrl(setting.script),
      // this is themes asset return
      asset: theme.asset,
      //this is controller data return
      data,
    };
  }
  static pageUrl(obj = "index") {
    // this is template return
    return `${theme.themeDir}/${obj}`;
  }
};
