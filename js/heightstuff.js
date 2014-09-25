// heightstuff.js

$(document).ready(function() {

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

$('#container').css({
  "height" : viewportHeight
});

/*
$('#slide-2').css({
  "height" : viewportHeight
});

*/
$.fn.center = function () {
   this.css("position","absolute");
   this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
/*   this.css("left", ( $(window).width() - this.width() ) / 2 + "px"); */
   return this;
}

$('#inner').center();


});
