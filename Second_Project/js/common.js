$(document).ready(function(){
  $('.wrapper').slick({
    arrows: false,
    vertical: true,
    infinite: false,
    verticalSwiping: true,
    dots: true,
    swipeToSlide: true,
  });
  //StateButton
  $(".buttons").threestatebutton({
  statecount: 3,
  state: 0,
  stateChanged: stateChanged
  });
  $('[value="Login"]').click(function () {
    var $inputs = $('#sign-in :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values);
  });
  $('[value="Register now"]').click(function () {
    var $inputs = $('#sign-up :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values);
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
  //preventKeyPress from radioBut
  $('input[type="radio"]').keydown(function(e) {
    console.log(e.which);
    var arrowKeys = [37, 38, 39, 40];
    if (arrowKeys.indexOf(e.which) !== -1)
    {
        $(this).blur();
        return false;
    }
  });
});

function change_window(x) {
  if (x == 1){
    document.getElementById("sign-in").style.display="none";
    document.getElementById("sign-up").style.display="flex";
}
  else {
    document.getElementById("sign-up").style.display="none";
    document.getElementById("sign-in").style.display="flex";

  }
}

function stateChanged(state, source) {
  var elements = document.querySelectorAll("[role='presentation']");
  elements[state].click();
}
