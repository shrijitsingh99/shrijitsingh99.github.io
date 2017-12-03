function clickedOpenBook(){
  var n = 1;
  timer = setInterval(openBook, 1)
  function openBook(){
    if(n <= 270){
      if(n < 180){
        document.getElementById('front-page').style.transform = "rotateY("+(-n)+"deg)";
        document.getElementById('large-header').style.transform = "rotateY("+(-n)+"deg)";
        document.getElementById('front-page').style.transformOrigin = "0";
        document.getElementById('large-header').style.transformOrigin = "0";
      }
      if(n > 90 && n < 180){
        document.getElementById('large-header').style.display = "none";
        document.getElementById('history').style.transform = "rotateY("+(-n-180)+"deg)";
        document.getElementById('history').style.transformOrigin = "100%";
      }
      if (n > 90 && n < 270) {
        document.getElementById('second-page').style.transform = "rotateY("+(n-90)+"deg)";
        document.getElementById('second-page').style.transformOrigin = "100%";
      }
      if(n > 180){
        document.getElementById('contact').style.transform = "rotateY("+(n-270)+"deg)";
        document.getElementById('contact').style.transformOrigin = "0";
      }
      ++n;
    }
    else{
      clearInterval(timer);
    }
  }
}
function clickedCloseBook(){
  var n = 270;
  timer = setInterval(closeBook, 1)
  function closeBook(){
    if(n <= 270){
      if(n <= 180){
        document.getElementById('front-page').style.transform = "rotateY("+(-n)+"deg)";
        document.getElementById('large-header').style.transform = "rotateY("+(-n)+"deg)";
        document.getElementById('front-page').style.transformOrigin = "0";
        document.getElementById('large-header').style.transformOrigin = "0";
      }
      if(n >= 90 && n < 180){
        document.getElementById('history').style.transform = "rotateY("+(-n-180)+"deg)";
        document.getElementById('history').style.transformOrigin = "100%";
      }
      if (n >= 90 && n < 270) {
        document.getElementById('second-page').style.transform = "rotateY("+(n-90)+"deg)";
        document.getElementById('second-page').style.transformOrigin = "100%";
      }
      if(n >= 180){
        document.getElementById('contact').style.transform = "rotateY("+(n-270)+"deg)";
        document.getElementById('contact').style.transformOrigin = "0";
      }
      if(n == 0){
        clearInterval(timer);
      }
      if(n<=90){
        document.getElementById('large-header').style.display = "inherit";
      }
      --n;
    }
  }
}
// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  }
  else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});
// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});
$('.form-floating-label input, .form-floating-label textarea').focusin(function(){
  $(this).parent().addClass('has-value');
});
$('.form-floating-label input, .form-floating-label textarea').blur(function(){
  if(!$(this).val().length > 0) {
    $(this).parent().removeClass('has-value');
  }
});
