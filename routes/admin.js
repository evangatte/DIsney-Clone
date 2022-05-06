const express = require('express');
const router = express.Router();
const Product = require('../src/db').ProductModel;

router.get('/', (req, res) => {
    res.render('admin/home');
});

router.get('/products', async (req, res) => {
    const products = await Product.find({});

    res.render('admin/productList', {
        pageTitle: 'Admin - Products',
        products,
    });
});

router.get('/products/new', (req, res) => {
    res.render('admin/productForm');
});

router.post('/newProduct', async (req, res) => {
    res.render('admin/productForm');
});

module.exports = router;
