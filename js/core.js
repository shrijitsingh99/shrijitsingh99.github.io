/*Opening and closing of book*/

function clickedOpenBook() {
    var n = 1;
    timer = setInterval(openBook, 1)
    function openBook() {
        if (n <= 270) {
            if (n < 180) {
                document.getElementById('cover').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover-background').style.transform = "rotateY(" + (-n) + "deg)";
                document.getElementById('cover').style.transformOrigin = "0";
                document.getElementById('cover-background').style.transformOrigin = "0";
            }
            if (n > 90 && n < 180) {
                document.getElementById('cover-background').style.display = "none";
                cancelAnimationFrame(animateCoverBackground)
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
            ++n;
        } else {
            clearInterval(timer);
        }
    }
}

function clickedCloseBook() {
    var n = 270;
    timer = setInterval(closeBook, 1)
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
                document.getElementById('cover-background').style.display = "inherit";
            }
            if (n == 0) {
                clearInterval(timer);
                requestAnimationFrame(animateCoverBackgroundFunction);
            }
            --n;
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
