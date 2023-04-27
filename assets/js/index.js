$(function() {
    $(".header .level-nav-link").on("click", function() {
        $(".header .level-nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();

    $(window).on("scroll", function() {
        if($(window).scrollTop() > $(".search-form").offset().top) {
            $(".show-navbar").removeClass("hide");
        } else {
            $(".show-navbar").addClass("hide");
            $(".header").removeClass("show");
        }
    });

    $(".show-navbar").on("click", function() {
        $(".header").toggleClass("show");
        $(".search-form").toggleClass("change");
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() <= $(".services").offset().top) {
            $(".header .level-nav-link").removeClass("active");
            $(".header .level-nav-link:nth-child(1)").addClass("active");
        } else if($(window).scrollTop() >= $(".services").offset().top && $(window).scrollTop() <= $(".recommends").offset().top) {
            $(".header .level-nav-link").removeClass("active");
            $(".header .level-nav-link:nth-child(2)").addClass("active");
        } else if($(window).scrollTop() >= $(".recommends").offset().top && $(window).scrollTop() <= $(".contact").offset().top) {
            $(".header .level-nav-link").removeClass("active");
            $(".header .level-nav-link:nth-child(3)").addClass("active");
        } else if($(window).scrollTop() >= $(".contact").offset().top) {
            $(".header .level-nav-link").removeClass("active");
            $(".header .level-nav-link:nth-child(4)").addClass("active");
        }
    });

    $(".slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    }); 

    $(".video i").on("click", function() {
        $(".video i").toggleClass("hide");
        $("video").toggleClass("pause");
        if($("video").hasClass("pause")) {
            $("video").trigger('play');
        } else {
            $('video').trigger('pause');
        }
    });
    
    let color;
    if(localStorage.color) {
        color = localStorage.color;
    } else {
        color = "#ee5057";
    }

    $(".collapse span i").on("click", function() {    
        $(".collapse span i").toggleClass("hide");
        if($(".collapse span i:first-child").hasClass("hide")) {
            color = "black"; 
            localStorage.setItem("color", "black");
            $(".navbar-brand img").attr("src","./assets/images/logo-dark.png");
            $(".collapse span i:first-child").addClass("hide");
            $(".collapse span i:last-child").removeClass("hide");
            $("i, .box p, .box h3, .slider h3").css({
                "color": `${color}`
            });
            $("a.active, .services .title, input[type='submit'], .btn, .recommended-places .title").css({
                "background-color": `${color}`
            });
            $(".level-nav-link, .slider .slick-dots li button, input[type='submit'], .btn").addClass("darkMood");
        } else {
            color = "#ee5057";
            localStorage.setItem("color", "#ee5057");
            $(".navbar-brand img").attr("src","./assets/images/logo.png");
            $(".collapse span i:first-child").removeClass("hide");
            $(".collapse span i:last-child").addClass("hide");
            $("i, .box p, .box h3, .slider h3").css({
                "color": `${color}`
            });
            $("a.active, .services .title, input[type='submit'], .btn, .recommended-places .title").css({
                "background-color": `${color}`
            });
            $(".level-nav-link, .slider .slick-dots li button, input[type='submit'], .btn").removeClass("darkMood");
        }
    });

    ChangeMood();

    function ChangeMood() {
        $("i, .box p, .box h3, .slider h3").css({
            "color": `${color}`
        });
        $("a.active, .services .title, input[type='submit'], .btn, .recommended-places .title").css({
            "background-color": `${color}`
        });
        if(color == "black") {
            $(".collapse span i:first-child").addClass("hide");
            $(".collapse span i:last-child").removeClass("hide");
            $(".navbar-brand img").attr("src","./assets/images/logo-dark.png");
            $(".level-nav-link, .slider .slick-dots li button, input[type='submit'], .btn").addClass("darkMood");
        } else {
            $(".collapse span i:first-child").removeClass("hide");
            $(".collapse span i:last-child").addClass("hide");
            $(".navbar-brand img").attr("src","./assets/images/logo.png");
            $(".level-nav-link, .slider .slick-dots li button, input[type='submit'], .btn").removeClass("darkMood");
        }
    };

    // online();

    function online() {
        if(!window.navigator.onLine) {
            window.location.href = "/error.html";
        }
    };
    window.addEventListener("offline", function() {
        window.location.href = "/error.html";
    });
});
