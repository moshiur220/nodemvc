const mongoose = require("mongoose");
const PostMeta = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    trim: true,
  },
  metaKey: {
    type: String,
    required: true,
    trim: true,
  },
  metaValue: {
    type: String,
    required: true,
    trim: true,
  },
});

// const PostMeta1 = mongoose.model("PostMeta", PostMeta);
// module.exports = PostMeta1;
exports.postMeta1 = mongoose.model("PostMeta", PostMeta);
