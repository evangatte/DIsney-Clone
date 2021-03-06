const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../src/db').UserModel;

router.get('/', (req, res) => {
    res.render('registration/registration');
});

router.post('/show', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        birthDate: req.body.birthDate,
    });
    try {
        await newUser.save();
        res.redirect('/login/?registration=true');
    } catch (e) {
        console.log(e.message);
        res.redirect('/home/show')
    }
});

module.exports = router;
