$(document).ready(function() {
    $('.cont_text_1').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

