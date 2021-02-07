
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 82) {
        //clearHeader, not clearheader - caps H
        $("nav").addClass("scrollHeader");
    }else{
        $("nav").removeClass("scrollHeader");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 347) {
        //clearHeader, not clearheader - caps H
        $(".ddd").addClass("order-summery-add");
    }else{
        $(".ddd").removeClass("order-summery-add");
    }
});
$(document).ready(function () {
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
});
$(document).ready(function () {
    $("#patner").owlCarousel({
        nav: false,
        dots: false,
        center: false,
        loop: true,
        margin: 40,
        autoplay: 900,
        autoPlaySpeed: 900,
        autoPlayTimeout: 900,
        autoplayHoverPause: false,
        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:2},
            767 : {items:2},
            576 : {items:2},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }
      });

});




$(document).ready(function(){
    $(".product-section ul li a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        console.log(target);
        $(".product-section ul li a").removeClass("active");
        $(this).addClass("active");
        $(".product-section .section").hide();
        $(target).fadeIn();
    })
});
$(document).ready(function () {
    var owl = $('.profiles');
    owl.owlCarousel({
        items: 4,
        loop: true,
        dots:false,
        margin: 0,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:4},
            480 : {items:2},
            360 : {items:2},
            320 : {items:2}
        }

    });

});

$(document).ready(function(){
    $('.nav-tabs').scrollingTabs({
      bootstrapVersion: 4,
      reverseScroll: true,
      scrollToTabEdge: true,
      disableScrollArrowsOnFullyScrolled: true,
      // widthMultiplier: 0.5,
    });
  });

//   $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop();
    
//     var serTop = $("#service").offset().top;
//     var productSection = $("#productSection").offset().top;
//     var about = $("#about").offset().top;
//     var completeTechnology = $("#completeTechnology").offset().top;
    
//     var blog = $("#blog").offset().top;
    
//     if(productSection <= scrollTop + 100){
//         $("#productSection .heading h2 span").addClass("addClass");
//     }
//     else{
//         $("#productSection .heading h2 span").removeClass("addClass");

//     }
//     if(serTop <= scrollTop+100){
//         $("#service .heading h2 span").addClass("addClass");
//     }
//     else{
//         $("#service .heading h2 span").removeClass("addClass");

//     }
//     if(about <= scrollTop+100){
//         $("#about .heading h2 span").addClass("addClass");
//     }
//     else{
//         $("#about .heading h2 span").removeClass("addClass");

//     }
//     if(completeTechnology <= scrollTop+100){
//         $("#completeTechnology .heading h2 span").addClass("addClass");
//     }
//     else{
//         $("#completeTechnology .heading h2 span").removeClass("addClass");

//     }
//     if(blog <= scrollTop+100){
//         $("#blog .heading h2 span").addClass("addClass");
//     }
//     else{
//         $("#blog .heading h2 span").removeClass("addClass");

//     }
    
// })
// });
//   window.onload = function () {
//       document.addEventListener("contextmenu", function (e) {
//           e.preventDefault();
//       }, false);
//       document.addEventListener("keydown", function (e) {
//           //document.onkeydown = function(e) {
//           // "I" key
//           if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//               disabledEvent(e);
//           }
//           // "J" key
//           if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//               disabledEvent(e);
//           }
//           // "S" key + macOS
//           if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
//               disabledEvent(e);
//           }
//           // "U" key
//           if (e.ctrlKey && e.keyCode == 85) {
//               disabledEvent(e);
//           }
//           // "F12" key
//           if (event.keyCode == 123) {
//               disabledEvent(e);
//           }
//           if (event.ctrlKey && (pressedKey == "c" || pressedKey == "v")) {
//             // disable key press porcessing
//             disabledEvent(e);
//           }
//       }, false);
//       function disabledEvent(e) {
//           if (e.stopPropagation) {
//               e.stopPropagation();
//           } else if (window.event) {
//               window.event.cancelBubble = true;
//           }
//           e.preventDefault();
//           return false;
//       }
  
//         function Disable_Control_C() {
//           let keystroke = String.fromCharCode(event.keyCode).toLowerCase();

//           if (event.ctrlKey && (keystroke == 'c' || keystroke == 'v')) {
//           event.returnValue = false;
//           }
//         }
// }






