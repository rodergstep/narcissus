// $(document).pjax('a', '#pjax-container');



$('.owl-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    lazyLoad: true,
    dotsData: true,
    dotsContainer: '#carousel-custom-dots'
});


$(document).ready(function() {

    $(".hover").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );
    // $('.owl-dot').click(function() {
    //     owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    // });
    // $(".owl-dots").prepend("<img class='logo' src='img/logo.png' >");

    // var counter = 0;
    // for (var i = 0; i < allDots.length; i++) {
    //     counter++;
    //     allDots[i].innerHTML = '<img src="img/thumbs/' + counter + '.jpg" >';
    // }
});
