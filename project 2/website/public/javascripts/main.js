/**
 * Created by austin on 3/22/17.
 */
(function () {
    $(window).ready(function () {
        // equal height
        var max_height = 0;
        $(".row .equal-height img").each(function () {
            max_height = max_height < $(this).height() ? $(this).height() : max_height;
            $(this).height(max_height);
        });
    })
})();