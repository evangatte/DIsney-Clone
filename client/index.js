// This file is the entry point for the client JavaScript (see webpack.config.js)

import Popper from "popper.js";
window.$ = window.jQuery = require('jquery');

$(function () {
    // Attach listener to the #openModalBtn button
    // $('#openModalBtn').click(function () {
    //     $('#testModal').modal('show');
    // });

    $('#createAccountBtn').click(function() {
        $('#signin-modal').modal('hide')
    })

    $('#signInToggle').click(function() {
        $('#create-account-modal').modal('hide')
    })


    $('input').click(function() {
    
        
    })




















});

require('bootstrap');
