// login create account modals

$('#createAccountBtn').click(() => {
    $('#signin-modal').modal('hide');
});

$('#signInToggle').click(() => {
    $('#create-account-modal').modal('hide');
});

// registration form validation

// change change birthdate input placeholder value when clicked
$('#birthdate-input').focus(function () {
    this.placeholder = 'mm/dd/yy';
}).focusout(function () {
    this.placeholder = 'Birth Date mm/dd/yy';
});
