/**
 * Created by austin on 2/5/17.
 */
(function () {
    $(window).load(function () {
            var h = $('#surf').height();
            if (h >= 1195) {
                $("#title").css({'line-height': '1195px'});
            } else if (h < 1195) {
                $("#title").css({'line-height': h + "px"});
            }
        }
    );

    $('.page-scroll a').bind('click', function (event) {
        var $position = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: $position
        }, 600);
        event.preventDefault();
    });

})();