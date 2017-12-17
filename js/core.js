/*Opening and closing of book*/

function clickedOpenBook() {
  if(isMobile == 1){
  clickedResume()
  document.getElementById("top-bar").style.display = "block"
  document.getElementById("book").style.height = "92%"
  document.getElementById("book").style.top = "8%"
  document.getElementById("top-bar").style.height = "8%"
  document.getElementById("top-bar").style.padding = "2%"
  document.getElementById("cover").style.display = "none"
  document.getElementById("cover-background").style.display = "none"
  document.getElementById("hidden-cover").style.display = "none"
  cancelAnimationFrame(animateCoverBackground)
  isCoverAnimating = 0
}
else{
    var n = -50;
    cancelAnimationFrame(animateCoverBackground)
    isCoverAnimating = 0
    timer = setInterval(openBook, 10)
    function openBook() {
      isBookTurning = 1
        if (n <= 270) {
            if (n >= 0 && n < 180) {
                document.getElementById('cover').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover-background').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover').style.transformOrigin = "0";
                document.getElementById('cover-background').style.transformOrigin = "0";
            }
            if (n > 90 && n < 180) {
                document.getElementById('cover-background').style.visibility = "hidden";
                document.getElementById('resume').style.transform = "rotateY(" + (-n - 180) + "deg)";
                document.getElementById('resume').style.transformOrigin = "100%";
            }
            if (n > 90 && n < 270) {
                document.getElementById('hidden-cover').style.transform = "rotateY(" + (n - 90) + "deg)";
                document.getElementById('hidden-cover').style.transformOrigin = "100%";
            }
            if (n > 180) {
                document.getElementById('contact').style.transform = "rotateY(" + (n - 270) + "deg)";
                document.getElementById('contact').style.transformOrigin = "0";
            }
            n = n + 5;
        } else {
            clearInterval(timer);
            isBookTurning = 0
            isBookOpen = 1
        }
    }
  }
}

function clickedCloseBook() {
  if(isMobile == 1){
  document.getElementById("top-bar").style.display = "none"
  document.getElementById("book").style.height = "100%"
  document.getElementById("book").style.top = "0"
  document.getElementById("cover").style.display = "block"
  document.getElementById("cover-background").style.display = "block"
  document.getElementById("hidden-cover").style.display = "block"
  requestAnimationFrame(animateCoverBackgroundFunction);
  isCoverAnimating = 1
}
else{
    var n = 270;
    timer = setInterval(closeBook, 10)
    function closeBook() {
      isBookTurning = 1
        if (n <= 270) {
            if (n <= 180) {
                document.getElementById('cover').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover-background').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover').style.transformOrigin = "0";
                document.getElementById('cover-background').style.transformOrigin = "0";
            }
            if (n >= 90 && n < 180) {
                document.getElementById('resume').style.transform = "rotateY(" + (-n - 180) + "deg)";
                document.getElementById('resume').style.transformOrigin = "100%";
            }
            if (n >= 90 && n < 270) {
                document.getElementById('hidden-cover').style.transform = "rotateY(" + (n - 90) + "deg)";
                document.getElementById('hidden-cover').style.transformOrigin = "100%";
            }
            if (n >= 180) {
                document.getElementById('contact').style.transform = "rotateY(" + (n - 270) + "deg)";
                document.getElementById('contact').style.transformOrigin = "0";
            }
            if (n <= 90) {
                document.getElementById('cover-background').style.visibility = "visible";
            }
            if (n == 0) {
                requestAnimationFrame(animateCoverBackgroundFunction);
                isCoverAnimating = 1
                clearInterval(timer);
                isBookOpen = 0
                isBookTurning = 0
            }
            n = n - 5;
        }
    }
  }

}

/*Portfolio*/

/*Filter content shown*/
$(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if (value === "all") {
        $('.filter-simple-item').show('1000');
    } else {
        $(".filter-simple-item").not('.' + value).hide('3000');
        $('.filter-simple-item').filter('.' + value).show('3000');
    }
});
/*Changes active class on filter buttons*/
$('.filter-simple-button').click(function() {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
});
$('.form-floating-label input, .form-floating-label textarea').focusin(function() {
    $(this).parent().addClass('has-value');
});
$('.form-floating-label input, .form-floating-label textarea').blur(function() {
    if (!$(this).val().length > 0) {
        $(this).parent().removeClass('has-value');
    }
});
