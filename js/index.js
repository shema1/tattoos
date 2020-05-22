
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: ".grid-sizer",
        gutter: ".gutter-sizer",
    }
});


jQuery(document).ready(function ($) {
    $('.navigation  ul li').hover(
        function () {
            $('ul', this).stop().slideDown(400);
            $('ul', this).css("display", "flex");
        },
        function () {
            $('ul', this).stop().slideUp(400);
        }
    );
});

$(document).ready(function () {
    $('.works-group',).magnificPopup({
        type: 'image',
        delegate: 'a',
    });

    $('.gallery-group').magnificPopup({
        type: 'image',
        delegate: 'a',
    });
});

$(function(){

    $('.menuToggle').on('click', function() {
       $('.navigation-list').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});