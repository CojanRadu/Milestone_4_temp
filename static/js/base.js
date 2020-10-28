var Layout = function () {

var handleSearch = function() {    
    $('.search-btn').click(function () {            
        if($('.search-btn').hasClass('show-search-icon')){
            if ($(window).width()>767) {
                $('.search-box').fadeOut(300);
            } else {
                $('.search-box').fadeOut(0);
            }
            $('.search-btn').removeClass('show-search-icon');
        } else {
            if ($(window).width()>767) {
                $('.search-box').fadeIn(300);
            } else {
                $('.search-box').fadeIn(0);
            }
            $('.search-btn').addClass('show-search-icon');
        } 
    }); 

    // close search box on body click
    if($('.search-btn').size() != 0) {
        $('.search-box, .search-btn').on('click', function(e){
            e.stopPropagation();
        });

        $('body').on('click', function() {
            if ($('.search-btn').hasClass('show-search-icon')) {
                $('.search-btn').removeClass("show-search-icon");
                $('.search-box').fadeOut(300);
            }
        });
    }
}

var handleMenu = function() {
    $(".header .navbar-toggle").click(function () {
        if ($(".header .navbar-collapse").hasClass("open")) {
            $(".header .navbar-collapse").slideDown(300)
            .removeClass("open");
        } else {             
            $(".header .navbar-collapse").slideDown(300)
            .addClass("open");
        }
    });
}
var handleSubMenuExt = function() {
    $(".header-navigation .dropdown").on("hover", function() {
        if ($(this).children(".header-navigation-content-ext").show()) {
            if ($(".header-navigation-content-ext").height()>=$(".header-navigation-description").height()) {
                $(".header-navigation-description").css("height", $(".header-navigation-content-ext").height()+22);
            }
        }
    });        
}

var handleMobiToggler = function () {
    $(".mobi-toggler").on("click", function(event) {
        event.preventDefault();
        
        $(".header").toggleClass("menuOpened");
        $(".header").find(".header-navigation").toggle(300);
    });
}

return {
    init: function () {
        handleSearch();
        handleMenu();
        handleSubMenuExt();
        handleMobiToggler();
        
    },
   
}

}();

