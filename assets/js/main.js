"use strict";

$(document).ready(function(){
    // Menu action
    $(".menu-tougle").on("click", function(){
        $("html").css('height', $(".menu-sidebar").css('height'));
        $("body").css('height', $(".menu-sidebar").css('height'));
        $(".menu-sidebar").addClass('open');
        $(".menu-sidebar-disable").addClass('menu-sidebar-open');

    });

    // Menu close action
    $(".exit").on("click", function(){
        if($(".menu-sidebar").hasClass('open')) {
            $(".menu-sidebar").removeClass('open');
            $(".menu-sidebar-disable").removeClass('menu-sidebar-open');
            $("html").css('height', "auto");
            $("body").css('height', "auto");
        }
    });

    //Slider setting up
    $('.carousel-default').owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        paginationSpeed : 800,
        autoPlay: true,
        singleItem:true
    });

    //Responsive slider settings
    $('.carousel-default').owlCarousel({
        items: 1
    });
    $('.carousel-3-items').owlCarousel({
        items: 3
    });
});