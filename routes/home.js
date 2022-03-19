const express = require('express');
const router = express.Router();

router.get('/show', async (req, res) => {
    const {ProductModel} = require('../src/db');

    let foundProducts = await ProductModel.find({
        ID: '1'
    });

    if (foundProducts.length === 0) {
        foundProducts = ProductModel.create({
            ID: '1',
            name: 'First Product'
        });
    }

    res.render('home/home', {
        pageTitle: 'Home',
        products: foundProducts
    });
});

module.exports = router;