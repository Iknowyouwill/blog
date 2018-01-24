(function($, doc, win) {
    var sidebar = $('#sidebar'),
        sbOverlay = $('.sb-overlay'),
        backtop = $('.backtop'),
        win = $(win),
        topnav = $('#topnav'),
        sbTrigger = $('.sb-trigger');
    sbTrigger.on('click', function() {
        sbOverlay.show();
        sidebar.animate({ 'right': 0 }, 200);
    });
    sbOverlay.on('click', function() {
        sbOverlay.fadeOut();
        sidebar.animate({ 'right': -sidebar.width() }, 200);
    });

    win.on('scroll', function() {
        if (win.scrollTop() > topnav.height()) {
            topnav.css({
                'position': 'fixed'
            });
        } else {
            topnav.css({
                'position': 'absolute'
            })
        }
        if (win.scrollTop() > win.height()) {
            backtop.fadeIn();
        } else {
            backtop.fadeOut();
        }
    });
    backtop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });


})(jQuery, document, window)