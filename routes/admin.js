const express = require('express');
const router = express.Router();
const Product = require('../src/db').ProductModel;

router.get('/', (req, res) => {
    res.render('admin/home');
});

router.get('/products', async (req, res) => {
    const products = await Product.find({});

    res.render('admin/productList');
});

router.get('/products/new', (req, res) => {
    res.render('admin/productForm');
});

router.post('/products/new', async (req, res) => {
    const newProduct = new Product({
        name: req.body.productName,
        description: req.body.productDescription,
        price: req.body.productPrice,
        image: req.body.productImage,
    });
    try {
        const product = await newProduct.save();
        res.redirect('/admin/products/new');
    } catch (e) {
        console.log(e.message);
    }
});

module.exports = router;
