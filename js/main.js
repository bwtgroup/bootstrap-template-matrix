+function ($) {
    'use strict';

    $(document).ready(function () {

        /**
         * Smooth scrolling to an anchor
         */
        $(".scroll-link-anchor").click(function (e) {
            e.preventDefault();
            var href = $(this).attr('href') ? $(this).attr('href') : $(this).find('a').attr('href');
            if (href) {
                var arr = href.split('#');
                var id = arr[arr.length - 1];
                if (arr.length > 1) {
                    if ($('#' + id).length > 0) {
                        var tag = $('#' + id);
                        $('html,body').animate({scrollTop : tag.offset().top}, 'slow');
                    } else {
                        window.location.href = href;
                    }
                } else {
                    window.location.href = href;
                }
            }
        });
    });

}(jQuery);