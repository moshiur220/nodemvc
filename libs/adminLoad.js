// const adminPath = require("./path");
const adminPath = require("./theme");
const query = require("../app/admin/core/adminQuery");
var adminContent = {
  // This is css return
  adminCss: adminPath.adminCss,
  //this is javascript file url return
  adminJs: adminPath.adminJs,
  // this is themes asset return
  adminAsset: adminPath.adminAsset,
  // admin Document
  adminDoc: adminPath.adminDoc,
  admin: {},
  //all data lod admin from database
};
async function allData() {
  // console.log("hi");
  adminContent.admin.postMeta = await query.postMata();
}
allData();

module.exports = class AdminLoding {
  static load(data = {}) {
    adminContent.data = data;
    return adminContent;
  }
  static pageUrl(page = "index") {
    // this is template return
    return `admin/${page}`;
  }
};

// static load(data = {}) {
//   return {
//     // This is css return
//     adminCss: adminPath.adminCss,
//     //this is javascript file url return
//     adminJs: adminPath.adminJs,
//     // this is themes asset return
//     adminAsset: adminPath.adminAsset,
//     // admin Document
//     adminDoc: adminPath.adminDoc,
//     //all data lod admin from database
//     admin: { metaPost: allData() },
//     // pass custom data by users
//     data,
//   };
// }
