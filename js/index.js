/**
 * Created by gilli on 06/02/2017.
 */

$(document).ready(function($){

    var nav = $('.nav-container');
    var navTopOffset = $('#header nav').offset().top + 120;
    var contentHeight = $('#content').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > navTopOffset && contentHeight > 800) {
            nav.addClass("fixed-nav");
        } else {
            nav.removeClass("fixed-nav");
        }
    });

    $('.contact-form').on('click', function(event) {
        send();
    });

    function send() {

    }


    $("#copyright-year").text( (new Date).getFullYear() );


});