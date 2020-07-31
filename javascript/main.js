// Smooth Scrolling
$(' .header a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});


var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.header').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if (newscroll < mypos && up) {
        $('.header').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});