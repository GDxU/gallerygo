"use strict";

/* ========================================================================= */
/*	Preloader
 /* ========================================================================= */

jQuery(window).load(function () {
  $("#preloader").fadeOut("slow");
});
$(document).ready(function () {

  /* ========================================================================= */
  /*	Menu item highlighting
   /* ========================================================================= */

  jQuery('#nav').singlePageNav({
    offset: jQuery('#nav').outerHeight(),
    filter: ':not(.external)',
    speed: 1200,
    currentClass: 'current',
    easing: 'easeInOutExpo',
    updateHash: true,
    beforeStart: function beforeStart() {
      console.log('begin scrolling');
    },
    onComplete: function onComplete() {
      console.log('done scrolling');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#navigation").css("background-color", "#0EB493");
    } else {
      $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
    }
  });
  /* ========================================================================= */
  /*	Fix Slider Height
  /* ========================================================================= */
  var slideHeight = $(window).height();
  $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
  $(window).resize(function () {
    'use strict', $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
  });
  /* ========================================================================= */
  /*	Portfolio Filtering
  /* ========================================================================= */
  // portfolio filtering
  $(".project-wrapper").mixItUp();
  $(".fancybox").fancybox({
    padding: 0,
    openEffect: 'elastic',
    openSpeed: 650,
    closeEffect: 'elastic',
    closeSpeed: 550,
    closeClick: true
  });

  $("#testing-link").on("click", function () {
    if (installation != undefined) {
      location.href = installation.chinaandroid;
    }
    event.preventDefault();
  });
  $("#playstore-link").on("click", function () {
    if (installation != undefined) {
      location.href = installation.playstore;
    }
    event.preventDefault();
  });
  $("#coolapk-link").on("click", function () {
    if (installation != undefined) {
      location.href = installation.coolapk;
    }
    event.preventDefault();
  });
  /* ========================================================================= */
  /*	Parallax
   /* ========================================================================= */

  $('#facts').parallax("50%", 0.3);

  /* ========================================================================= */
  /*	Timer count
   /* ========================================================================= */

  "use strict";
  $(".number-counters").appear(function () {
    $(".number-counters [data-to]").each(function () {
      var e = $(this).attr("data-to");
      $(this).delay(6e3).countTo({
        from: 50,
        to: e,
        speed: 3e3,
        refreshInterval: 50
      });
    });
  });

  /* ========================================================================= */
  /*	Back to Top
   /* ========================================================================= */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#back-top").fadeIn(200);
    } else {
      $("#back-top").fadeOut(200);
    }
  });
  $("#back-top").click(function () {
    $("html, body").stop().animate({
      scrollTop: 0
    }, 1500, "easeInOutExpo");
  });
});

// ==========  START GOOGLE MAP ========== //
function initialize() {
  var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

  var mapOptions = {
    zoom: 14,
    center: myLatLng,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'img/location-icon.png',
    title: ''
  });
}
/* Start of LiveChat (www.livechatinc.com) code */
window.__lc = window.__lc || {};
window.__lc.license = 8476872;
(function () {
  var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = true;
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
  var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();
/*End of LiveChat code */
$(function () {
  /* ========================================================================= */
  /*	Contact Form
   /* ========================================================================= */

  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: "come on, you have a name don't you?",
        minlength: "your name must consist of at least 2 characters"
      },
      email: {
        required: "no email, no message"
      },
      message: {
        required: "um...yea, you have to write something to send this form.",
        minlength: "thats all? really?"
      }
    },
    submitHandler: function submitHandler(form) {
      $(form).ajaxSubmit({
        type: "POST",
        data: $(form).serialize(),
        url: "process.php",
        success: function success() {
          $('#contact-form :input').attr('disabled', 'disabled');
          $('#contact-form').fadeTo("slow", 0.15, function () {
            $(this).find(':input').attr('disabled', 'disabled');
            $(this).find('label').css('cursor', 'default');
            $('#success').fadeIn();
          });
        },
        error: function error() {
          $('#contact-form').fadeTo("slow", 0.15, function () {
            $('#error').fadeIn();
          });
        }
      });
    }
  });
});

//google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //

//# sourceMappingURL=custom-compiled.js.map