function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = 0;
}

function enableScroll() {
    document.body.style.overflow = null;
}

disableScroll();

window.onload = () => {
    // scroll
    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('a.go-to').removeClass('active');
        $('a.go-to').each(function() {
            var currLink = $(this);

            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                currLink.addClass("active");
            }
        });
    }

    $(document).on("scroll", onScroll);

    $('a.go-to').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a.go-to').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    // scroll end

    // carousel
    var CAROUSEL_OPTIONS = {
        center: true,
        loop: true,
        margin: 40,
        autoWidth: true,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        navSpeed: 500,
        dots: true,
        nav: true,
        navText: [
            '<span class="icon-menu-left"></span>',
            '<span class="icon-menu-right"></span>'
        ]
    };

    $('.owl-carousel-three').owlCarousel(Object.assign({}, CAROUSEL_OPTIONS, {
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            768: {
                items: 1,
                slideBy: 1
            },
            992: {
                items: 3,
                slideBy: 3,
                center: false
            }
        }
    }));
    // carousel end

    // load in-viewport.js manually
    var script = document.createElement('script');
    script.type = 'text/javascript';

    function callback() {
        enableScroll();
        $('#page-loader').fadeOut(1000, () => {
            checkAndShowBirthdayPopup();
            window.scrollTo(0, 100);
            $(document).inViewportClass();
            window.scrollTo(0, 0);
            $('#page-loader').remove();
        });
    }

    try {
        if (script.readyState) { // IE
            script.onreadystatechange = function() {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            // �園�条�讛汗�膥�𣈲�螱 onload
            script.onload = function() {
                callback();
            };
        }

        script.src = 'static/libs/jquery.in-viewport-class.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    } catch (e) {
        if (null !== callbackError) callbackError(e);
    }
    // load in-viewport.js end

    // clear dom elements and scroll to top
    window.onbeforeunload = function() {
        document.body.removeChild(document.getElementById('__next'));
        window.scrollTo(0, 0);
    }

    // js
    $('body').on('click', '#btn-modal-menu', function() {
        $('body').addClass('modal-bg-green');
    });

    $('#modal-menu').on('hidden.bs.modal', function(e) {
        $('body').removeClass('modal-bg-green');
    });

    // mobile carousel ��𧢲��
    $('.carousel').on('touchstart', function(event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
            } else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
            }
        });
        $('.carousel').on('touchend', function() {
            $(this).off('touchmove');
        });
    });
}