// make 2 seperate images scale at the same time
$('#empower-left, #empower-middle').hover(
    function () {
        $('#empower-left, #empower-middle').css('transition', 'all 0.8s');
        $('#empower-left, #empower-middle').css('background-size', '110%');
        $('#empower-middle').removeClass('mx-2');
        $('#empower-middle').addClass('ml-2', 'mr-1');
    },
    function () {
        $('#empower-left, #empower-middle').css('transition', 'all 1s');
        $('#empower-left, #empower-middle').css('background-size', '100%');
        $('#empower-middle').removeClass('ml-2', 'mr-1');
        $('#empower-middle').addClass('mx-2');
    },
);

$('#starwars-middle, #starwars-right').hover(function () {
    $('#starwars-middle, #starwars-right').css('transition', 'all 0.8s');
    $('#starwars-middle, #starwars-right').css('background-size', '110%');
    $('#starwars-middle').removeClass('mx-2');
    $('#starwars-middle').addClass('mr-2', 'ml-1');
}, function () {
    $('#starwars-middle, #starwars-right').css('transition', 'all 1s');
    $('#starwars-middle, #starwars-right').css('background-size', '100%');
    $('#starwars-middle').removeClass('mr-2', 'ml-1');
    $('#starwars-middle').addClass('mx-2');
});
