const express = require("express");
const router = express.Router();
const postCtrl = require("../adminController/postController");
// /admin/add-product => GET
router.post("/", postCtrl.getpost);
router.get("/fmeta", postCtrl.getMeta);

// /admin/add-product => POST
//router.post('/add-product', productsController.postAddProduct);

module.exports = router;
