const express = require('express');
const router = express.Router();

router.get('/show', (req, res) => {
    res.send('failure');
});

module.exports = router;
