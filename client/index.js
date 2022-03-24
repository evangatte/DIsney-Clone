// This file is the entry point for the client JavaScript (see webpack.config.js)

// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js';

// eslint-disable-next-line no-multi-assign
window.$ = window.jQuery = require('jquery');

$(() => {
    require('./js/navbar');
});

require('bootstrap');
