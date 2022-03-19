const express = require('express');
const router = express.Router();

router.get('/show', (req, res) => {
    res.render('admin/home', {
        pageTitle: 'Admin'
    });
});

router.get('/products', async (req, res) => {
    const {ProductModel} = require('../src/db');
    let products = await ProductModel.find({});

    res.render('admin/products', {
        pageTitle: 'Admin - Products',
        products: products
    });
});

router.post('newProduct', async (req, res) => {
    // ProductModel.create({
    //     ID: '1',
    //     name: 'First Product'
    // });
    res.json({
        params: req.params
    })
});

module.exports = router;
