const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/products");
// /admin/add-product => GET
router.get("/", productCtrl.getproduct);
router.get("/contact", productCtrl.getContact);
router.post("/con", productCtrl.postContact);

// /admin/add-product => POST
//router.post('/add-product', productsController.postAddProduct);

module.exports = router;
