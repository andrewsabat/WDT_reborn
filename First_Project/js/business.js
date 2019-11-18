$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    appendArrows: '.arrows',
    swipeToSlide: true,
  });
  //Preloader
  $(window).on("load", function() {
    preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
  });
});
