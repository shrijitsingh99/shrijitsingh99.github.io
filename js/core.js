var isMobile = 0
if (window.innerWidth < 1024) {
  isMobile = 1
}

function clickedOpenBook() {

  if (isMobile == 1) {
    $("#menu-home").removeClass("active");
    $("#menu-resume").addClass("active");
    clickedResume()
    document.getElementById("top-bar").style.display = "block"
    document.getElementById("book").style.top = $("#top-bar").height() + "px"
    document.getElementById("book").style.margin = "0"
    document.getElementById("cover").style.display = "none"
    document.getElementById("cover-background").style.display = "none"
    document.getElementById("hidden-cover").style.display = "none"
    cancelAnimationFrame(animateCoverBackground)
  } else {
    var n = -50;
    document.getElementById('portfolio').style.borderRadius = "0"
    document.getElementById('resume').style.borderTopRightRadius = "0"
    document.getElementById('resume').style.borderBottomRightRadius = "0"
    document.getElementById('contact').style.borderTopLeftRadius = "0"
    document.getElementById('contact').style.borderBottomLeftRadius = "0"
    cancelAnimationFrame(animateCoverBackground)
    timer = setInterval(openBook, 10)

    function openBook() {
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
      }
    }
  }
}

function clickedCloseBook() {
  if (isMobile == 1) {
    requestAnimationFrame(animateCoverBackgroundFunction);
    document.getElementById("top-bar").style.display = "none"
    document.getElementById("book").style.height = "100%"
    document.getElementById("book").style.top = "0"
    document.getElementById("cover").style.display = "block"
    document.getElementById("cover-background").style.display = "block"
    document.getElementById("hidden-cover").style.display = "block"
  } else {
    document.getElementById('portfolio').style.borderRadius = "5px"
    document.getElementById('resume').style.borderTopRightRadius = "5px"
    document.getElementById('resume').style.borderBottomRightRadius = "5px"
    document.getElementById('contact').style.borderTopLeftRadius = "5px"
    document.getElementById('contact').style.borderBottomLeftRadius = "5px"
    requestAnimationFrame(animateCoverBackgroundFunction);
    var n = 270;
    timer = setInterval(closeBook, 10)

    function closeBook() {
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
          clearInterval(timer);
        }
        n = n - 5;
      }
    }
  }

}

$(document).ready(function() {
  $("#top-bar ul li").click(function() {
    $("#top-bar ul li").removeClass("active");
    $(this).addClass("active");
  });
});

function clickedPortfolio() {
  document.getElementById("portfolio").style.opacity = "1"
  document.getElementById("contact").style.opacity = "0"
  document.getElementById("resume").style.opacity = "0";

}

function clickedResume() {
  document.getElementById("resume").style.opacity = "1"
  document.getElementById("contact").style.opacity = "0"
  document.getElementById("portfolio").style.opacity = "0";
}

function clickedContact() {
  document.getElementById("contact").style.opacity = "1"
  document.getElementById("portfolio").style.opacity = "0"
  document.getElementById("resume").style.opacity = "0";
}

function clickedHome() {
  clickedCloseBook()
}
