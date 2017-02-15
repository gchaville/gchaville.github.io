/**
 * Created by gilli on 06/02/2017.
 */

$(document).ready(function($){

    var nav = $('.nav-container');
    var navTopOffset = $('#header nav').offset().top + 84;

    $(window).scroll(function () {
        if ($(this).scrollTop() > navTopOffset) {
            nav.addClass("fixed-nav"), nav.$(".container").addClass("grid_12");
        } else {
            nav.removeClass("fixed-nav");
        }
    });

    $("#copyright-year").text( (new Date).getFullYear() );


});