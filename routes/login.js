const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.email);
    console.log('haha')
});

module.exports = router;
