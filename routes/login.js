const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    if (req.query.registration === 'true') {
        res.render('login/login', { registrationMessage: 'Registration Successful!' });
    } else if (req.query.registration === 'false') {
        res.send('error');
    } else {
        res.render('login/login', { registrationMessage: 'Please Log In' });
    }
});


router.post(
    '/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    }),
);

router.get('/log-out', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
