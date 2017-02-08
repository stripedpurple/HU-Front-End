/**
 * Created by austin on 2/5/17.
 */
(function () {
    $(window).load(function () {
            // hero height
            var h = $('#surf').height();
            if (h >= 1195) {
                $("#title").css({'line-height': '1195px'});
            } else if (h < 1195) {
                $("#title").css({'line-height': h + "px"});
            }

            // smooth scrolling
            $('.page-scroll a').bind('click', function (event) {
                var $position = $($(this).attr('href')).offset().top;
                $('html, body').stop().animate({
                    scrollTop: $position
                }, 600);
                event.preventDefault();
            });


            // lighbox
            $('.play-btn').click(function () {


                var lightbox = $($(this).attr('href'));
                lightbox.removeClass('hidden');

                var source = $(this).data('video') + '?autoplay=1';

                var width = 720;
                var height = 480;
                var iframe = "<iframe width='" + width + "' height='" + height + "' src='" + source + "' frameborder='0' allowfullscreen></iframe>";
                lightbox.find(".lightbox-content").html(iframe);

                lightbox.click(function () {
                    lightbox.addClass(function () {
                        lightbox.find('.lightbox-content').html('');
                        return 'hidden'
                    });

                })
            });

            // equal height
            var max_height = 0;
            $(".row .equal-height img").each(function () {
                max_height = max_height < $(this).height() ? $(this).height() : max_height;
                $(this).height(max_height);
            });

            // rick roll
            $('#title').dblclick(function () {
                $('.play-btn').each(function () {
                    $(this).data('video', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
                });
            });

            // Life style articles
            $('.article-body').each(function (i, e) {
                $(this).css({'background-image': 'url("' + $(this).data('img') + '")'});
            });

            // Copyright
            var year = new Date().getFullYear();
            $('#footer .col-md-12').html('<footer class="copy">&copy; ' + year + ' Striped Purple. All Rights Reserved</footer>')
        }
    );
})();