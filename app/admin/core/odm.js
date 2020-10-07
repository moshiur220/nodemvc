const mongoose = require("mongoose");
//**************************************************************************** */
// This is postmeta table scama
//**************************************************************************** */
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
exports.PostMeta = mongoose.model("PostMeta", PostMeta);
//**************************************************************************** */
// This is post table scama
//**************************************************************************** */

const Post = new mongoose.Schema({
  postAuthor: {
    type: Number,
  },
  postDate: {
    type: Date,
  },
  postContent: {
    type: String,
  },
  postTitle: {
    type: String,
  },
  postStatus: {
    type: String,
  },
  commentStatus: {
    type: String,
  },
  postPassword: {
    type: String,
  },
  postName: {
    type: String,
  },
  postModified: {
    type: String,
  },
  postParent: {
    type: Number,
  },
  postType: {
    type: String,
  },
  commentCount: {
    type: Number,
  },
});
exports.Post = mongoose.model("Post", Post);
//**************************************************************************** */
//TermRelationship table
//**************************************************************************** */

const TermRelationship = new mongoose.Schema({
  objectId: {
    type: Number,
  },
  termTaxonomyId: {
    type: Number,
  },
  termOrder: {
    type: Number,
  },
});
exports.TermRelationship = mongoose.model("TermRelationship", TermRelationship);
//**************************************************************************** */
// TermTaxonomy table
//**************************************************************************** */
const TermTaxonomy = new mongoose.Schema({
  termId: {
    type: Number, //come from term table term_id
  },
  taxonomy: {
    type: String,
  },
  description: {
    type: String,
  },
  parent: {
    type: Number,
  },
  count: {
    type: Number,
  },
});
exports.TermTaxonomy = mongoose.model("TermTaxonomy", TermTaxonomy);
//**************************************************************************** */
// Terms table
//**************************************************************************** */
const Term = new mongoose.Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  termGroup: {
    type: Number,
  },
});
exports.Term = mongoose.model("Term", Term);
//**************************************************************************** */
// Termmeta table
//**************************************************************************** */
const Termmeta = new mongoose.Schema({
  termId: {
    type: Number,
  }, //This id come from wp_terms term_Id
  metaKey: {
    type: String,
  },
  metaValue: {
    type: String,
  },
});
exports.Termmeta = mongoose.model("Termmeta", Termmeta);
//**************************************************************************** */
// Users table
//**************************************************************************** */
const User = new mongoose.Schema({
  userLogin: {
    type: String,
  },
  userPass: {
    type: String,
  },
  userNicename: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userRegistered: {
    type: String,
  },
  userActivationKey: {
    type: String,
  },
  userStatus: {
    type: Number,
  },
  displayName: {
    type: String,
  },
});
exports.User = mongoose.model("User", User);
//**************************************************************************** */
// Usermeta table
//**************************************************************************** */
const Usermeta = new mongoose.Schema({
  userId: {
    type: Number, //Come from user table user_id
  },
  metaKey: {
    type: String,
  },
  metaValue: {
    type: String,
  },
});
exports.Usermeta = mongoose.model("Usermeta", Usermeta);
//**************************************************************************** */
// Comments table
//**************************************************************************** */
const Comment = new mongoose.Schema({
  commentPostId: {
    type: Number,
  },
  commentAuthor: {
    type: String,
  },
  commentAuthorEmail: {
    type: String,
  },
  commentAuthorIp: {
    type: String,
  },
  commentDate: {
    type: Date,
  },
  commentContent: {
    type: String,
  },
  commentApproved: {
    type: String,
  },
  commentType: {
    type: String,
  },
  commentParent: {
    type: Number,
  },
  userId: {
    type: Number,
  },
});
exports.Comment = mongoose.model("Comment", Comment);
//**************************************************************************** */
// Comments Meta table
//**************************************************************************** */
const CommentMeta = new mongoose.Schema({
  commentId: {
    type: Number,
  },
  metaKey: {
    type: String,
  },
  metaValue: {
    type: String,
  },
});
exports.Comment = mongoose.model("CommentMeta", CommentMeta);
//**************************************************************************** */
// Userlable table
//**************************************************************************** */
const Userlavle = new mongoose.Schema({
  commentId: {
    userLavelName: String,
  },
});
exports.Userlavle = mongoose.model("Userlavle", Userlavle);

//**************************************************************************** */
// UserPermission table
//**************************************************************************** */
const UserPermission = new mongoose.Schema({
  useLevelId: {
    type: Number,
  },
  permissionTable: {
    type: String,
  },
  tablePermission: {
    type: String,
  },
});
exports.UserPermission = mongoose.model("UserPermission", UserPermission);
//**************************************************************************** */
// Menu table
//**************************************************************************** */
const Menu = new mongoose.Schema({
  menuName: {
    type: String,
  },
  menuStatus: {
    type: Boolean,
  },
  menuParent: {
    type: Number,
  },
});
exports.Menu = mongoose.model("Menu", Menu);
//**************************************************************************** */
// Menu Meta table
//**************************************************************************** */
const MenuMeta = new mongoose.Schema({
  menuId: {
    type: Number,
  },
  mataKey: {
    type: String,
  },
  mataValue: {
    type: String,
  },
});
exports.MenuMeta = mongoose.model("MenuMeta", MenuMeta);
