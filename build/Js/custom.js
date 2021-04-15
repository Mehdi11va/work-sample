// start when scrolling change background of navbar
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $(".navbar").addClass('fixedMenu');
    } else {
        $(".navbar").removeClass('fixedMenu')
    }
});

// start scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').css("display", "block");
    } else {
        $('.scrollToTop').hide();
    }
});
$('.scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 700);
    return false;
});
// end scroll to top

// start loading
$(document).ready(function() {
    $(".loader,.loading img").fadeOut(1000, function() {
        $("body").css("overflow", "auto");
        $(".loading").fadeOut(800, function() {
            $(this).remove();
        });
    });
});
// end loading

// end project