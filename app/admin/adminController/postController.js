const appRoot = require("app-root-path");
const admin = require(appRoot + "/libs/adminLoad");
// const postMeta = require("../adminModel/postMeta");
const objOdm = require("../core/odm");
exports.getpost = (req, res) => {
  // var a = admin.load();

  // console.log(req.body);
  const post = new objOdm.PostMeta({
    postId: Number(req.body.postId),
    metaKey: req.body.metaKey,
    metaValue: req.body.metaValue,
  });
  post
    .save()
    .then((result) => {
      console.log("data save");
      res.render(
        admin.pageUrl("index"),
        admin.load({ message: "Hello i am admin moshiur" })
      );
      //console.log(admin.load());
    })
    .catch((err) => {
      console.log("data not save");
      console.log(err);
    });
  // try {
  //   await post.seve();
  //   console.log("data save");
  //   res.render(
  //     admin.pageUrl("index"),
  //     admin.load({ message: "Hello i am admin" })
  //   );
  // } catch (error) {
  //   console.log("data not save some problem");
  //   res.status(500).send(error);
  // }
};

exports.getMeta = (req, res, next) => {
  res.render("admin/postmeta");
};
