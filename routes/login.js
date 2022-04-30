const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const passport = require('passport');

router.get('/show', (req, res) => {
    res.send('authentication error');
});

router.post(
    '/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login/show',
    }),
);

router.get('/log-out', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
