/**
 * Created by gilli on 06/02/2017.
 */

$(document).ready(function($){

    var nav = $('.nav-container');
    var navTopOffset = $('#header nav').offset().top + 240;
    var contentHeight = $('#content').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > navTopOffset && contentHeight > 800) {
            nav.addClass("fixed-nav");
        } else {
            nav.removeClass("fixed-nav");
        }
    });

    $('.panel-heading').on('click', function(event) {
        $(this).find('.glyphicon').toggleClass('glyphicon-chevron-right');
        $(this).find('.glyphicon').toggleClass('glyphicon-chevron-down');
    });

    $(".skill-bar").each(function() {
        $(this)
            .data("origWidth", $(this).width())
            .width(0)
            .animate({
                width: $(this).data("origWidth") // or + "%" if fluid
            }, 1200);
    });


    $("#copyright-year").text( (new Date).getFullYear() );


});