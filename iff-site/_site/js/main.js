$(document).ready(function(){

  // Overlay Menu
  $("#overlay-menu").click(function() {
    $(".overlay").addClass("overlay-open");
    $("body").addClass("noScroll");
  });

  // Overlay Menu - prevent scrolling on iOS devices
    // var overlay = $('.overlay');
    // overlay.addEventListener('touchmove', function(e) {
    //   e.preventDefault();
    // }, false);

	// Change Logo text when menu is active
	$("#overlay-menu").click(function() {
		$(".logo_text").css("color", "#fff");
	});

  // Close and open overlay menu
  $(".overlay-close").click(function() {
    $(".overlay").removeClass("overlay-open");
    $("body").removeClass("noScroll");
    $(".logo_text").css("color", "#000");
  });

  (function () {

    var _overlay = document.getElementById('js-overlay');

    var _clientY = null; // remember Y position on touch start

    _overlay.addEventListener('touchstart', function (event) {

    if (event.targetTouches.length === 1) {

    // detect single touch

    _clientY = event.targetTouches[0].clientY;

    }

    }, false);

    _overlay.addEventListener('touchmove', function (event) {

    if (event.targetTouches.length === 1) {

    // detect single touch

    disableRubberBand(event);

    }

    }, false);

    function disableRubberBand(event) {

    var clientY = event.targetTouches[0].clientY - _clientY;

    if (_overlay.scrollTop === 0 && clientY > 0) {

    // element is at the top of its scroll

    event.preventDefault();

    }

    if (isOverlayTotallyScrolled() && clientY < 0) {

    //element is at the top of its scroll

    event.preventDefault();

    }

    }

    function isOverlayTotallyScrolled() {

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions

    return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;

    }

  }())

});