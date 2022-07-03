$(window).on('load', function() {
    "use strict";   

    

    /*=========================================================================
        Preloader
    =========================================================================*/

    /*=========================================================================
     Isotope
     =========================================================================*/
    $('.portfolio-filter').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });

    var $container = $('.portfolio-wrapper');

    /*=========================================================================
     Infinite Scroll
     =========================================================================*/
    var curPage = 1;
    var pagesNum = $(".portfolio-pagination").find("li a:last").text();   // Number of pages


    /* ======= Mobile Filter ======= */

    // bind filter on select change
    $('.portfolio-filter-mobile').on( 'change', function() {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
});




$(function(){
    "use strict";

    /*=========================================================================
            Mobile Menu Toggle
    =========================================================================*/
    $('.menu-icon button').on( 'click', function() {
        $('header.header, main.content').toggleClass('open');
    });

    $('.menu-icon button').on( 'click', function() {
      $('header.mobile-header').toggleClass('open');
      $('.menu-icon button span').toggleClass('open');
    });

    $('main.content').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    $('.main-menu li a, .main-menu li').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-image');

     for (var i = 0; i < list.length; i++) {
       var bgimage = list[i].getAttribute('data-bg-image');
       list[i].style.backgroundImage  = "url('" + bgimage + "')";
     }

    /*=========================================================================
     Background Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-color');

     for (var i = 0; i < list.length; i++) {
       var bgcolor = list[i].getAttribute('data-bg-color');
       list[i].style.backgroundColor = "" + bgcolor + "";
     }

     /*=========================================================================
     Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-color');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.color = "" + color + "";
     }

     /*=========================================================================
     Border Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-border-color');

     for (var i = 0; i < list.length; i++) {
       var border_color = list[i].getAttribute('data-border-color');
       list[i].style.borderColor = "" + border_color + "";
     }

     /*=========================================================================
     Progress Bar width with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('progress-bar');

     for (var i = 0; i < list.length; i++) {
       var barwidth = list[i].getAttribute('data-width');
       list[i].style.width = "" + barwidth + "%";
     }

    /*=========================================================================
            Main Menu
    =========================================================================*/
    $( ".submenu" ).before( '<i class="ion-md-add switch"></i>' );

    $(".vertical-menu li i.switch").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });
});