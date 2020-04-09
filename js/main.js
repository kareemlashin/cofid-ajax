$(document).ready(function() {

    $("#splash-screen").fadeOut(1000);
    let heightWindow = $(window).height();
    let heightnav = $("nav").height();
    $("header").height(heightWindow - heightnav );
    $("header").css({marginTop:"50px"} );

    $(".item").hover(function() {
        $(this).addClass("secondShadow");
    }, function() {
        $(this).removeClass("secondShadow");
    })
$(window).scroll(function(){
    let hsc=$(window).scrollTop();
    if(hsc>10)
    {
        $("nav").addClass("shadow");
    }else{
        $("nav").removeClass("shadow");

    }
})


    let dirPage = $("html").attr("dir");
    if (dirPage == "rtl") {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    } else {
        $('.owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 50,
            nav: true,
            touchDrag: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
    $(".owl-prev").empty();
    $(".owl-prev").append("<i class='fas fa-arrow-left '></i>")
    $(".owl-next").empty();
    $(".owl-next").append("<i class='fas fa-arrow-right'></i>")
    $(".owl-next").addClass("shadow");
    $(".owl-prev").addClass("shadow");

})