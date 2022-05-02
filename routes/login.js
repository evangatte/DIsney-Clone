const express = require('express');
const req = require('express/lib/request');
const { renderSync } = require('node-sass');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    if (req.query.login === 'true') {
        res.render('login/login');
    } else if (req.query.login === 'false') {
        res.send('error');
    } else {
        res.render('login/login');
    }
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
