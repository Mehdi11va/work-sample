window.onload = function() {
    // Start sm collapse navbar 
    if (window.jQuery) {
        $(document).ready(function() {
            $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();
            $("body").append("<div class='overlay'></div>");
            $(".navbar-toggle, .navbar-toggler").on("click", function() {
                $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
                $(".sideMenu, .overlay").toggleClass("open");
                $(".overlay").on("click", function() {
                    $(this).removeClass("open");
                    $(".sideMenu").removeClass("open")
                })
            });
            $("body").on("click", ".sideMenu.open .nav-item", function() {
                if (!$(this).hasClass("dropdown")) {
                    $(".sideMenu, .overlay").toggleClass("open")
                }
            });
            $(window).resize(function() {
                if ($(".navbar-toggler").is(":hidden")) {
                    $(".sideMenu, .overlay").hide()
                } else {
                    $(".sideMenu, .overlay").show()
                }
            })
        })
    } else {
        console.log("sidebarNavigation Requires jQuery")
    }
    // Start scroll to top class
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').css("display","block");
        } else {
            $('.scrollToTop').hide();
        }
      });
    //   Start navbar Scrolling add class
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass("fixedMenu");
        } else {
            $('.navbar').removeClass("fixedMenu");
        }
      });
    //   Start AOS scrolling
      AOS.init({
    // Global settings:
    once: true
      });
      var elm = document.querySelector('#main-header');
      var ms = new MenuSpy(elm);

      $(".load-wrapp").fadeOut(1000,function(){
          $(".load-wrapp").fadeOut(800,function(){
          $(this).remove();
        });
      });
   
}
