const query = require("./odm");

exports.postMata = function () {
  return new Promise((resolve, reject) => {
    query.PostMeta.find({})
      .then((data) => {
        resolve(data);
        //console.log(data);
      })
      .catch((err) => {
        reject(err);
        //console.log(err);
      });
  });
};
