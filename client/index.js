// This file is the entry point for the client JavaScript (see webpack.config.js)

// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js';

// eslint-disable-next-line no-multi-assign
window.$ = window.jQuery = require('jquery');

$(() => {
    // Attach listener to the #openModalBtn button
    // $('#openModalBtn').click(function () {
    //     $('#testModal').modal('show');
    // });

    $('#createAccountBtn').click(() => {
        $('#signin-modal').modal('hide');
    });

    $('#signInToggle').click(() => {
        $('#create-account-modal').modal('hide');
    });

    $('input').click(() => {

    });
});

require('bootstrap');
