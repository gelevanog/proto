// Custom scripts and plugins initializations (available to all pages)
var App = (function() {
    'use strict';

    var $window = $(window),
        $html = $('html'),
        $body = $('body'),
        DSIZE = {
            large: 1200,
            middle: 992,
            small: 768,
            etxraSmall: 480
        },
        THEME_COLORS = {
            gray: '#E5E5E5',
            body: '#EFEFEF',
            inverse: '#575B63',
            text: '#333333',
            primary: '#4DA1FF',
            success: '#00C853',
            info: '#00B5EA',
            danger: '#F44336',
            warning: '#F4BB06',
            pink: '#E91E63',
            red: '#F44336',
            purple: '#9C27B0',
            deepPurple: '#5E35B1',
            indigo: '#3949AB',
            blue: '#1E88E5',
            cyan: '#00BCD4',
            teal: '#009688',
            green: '#4CAF50',
            lime: '#CDDC39',
            yellow: '#FDD835',
            orange: '#EF6C00',
            deepOrange: '#F4511E',
            brown: '#5D4037',
            blueGray: '#607D8B'
        };

    // Reusable methods also are available out of scope - App.helpers.methodName(args)
    var helpers = {
        isTouch: function() {
            return $html.hasClass('touch');
        },
        isSmallDevice: function() {
            return $window.width() < DSIZE.middle;
        },
        isMobile: function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else {
                return false;
            }
        },
        sidebarIsCollapsed: function() {
            return $body.hasClass('main-nav-collapse');
        },
        initResizeHandler: initResizeHandler,
        generateRandomData: generateRandomData,
        themeColors: THEME_COLORS
    };

    // Function to generate random numbers 
    // returns array of numbers
    function generateRandomData(min, max, quantity) {
        var data = [],
            min = min || 0,
            max = max || 50,
            quantity = quantity || 15,
            getRandomInt = function(min, max) {
                return ~~(Math.random() * (max - min + 1)) + min;
            };
        for (var i = 0; i < quantity; i++) {
            data.push(getRandomInt(min, max));
        };
        return data;
    }

    // Function to activate the block tools
    function interActiveBlocks() {

        // Block collapse
        $('[data-toggle="block-toggle-content"]').on('click', function(e) {
            e.preventDefault();

            var blockContent = $(this).closest('.block').find('.block-content');

            if ($(this).hasClass('active')) {
                blockContent.slideDown();
            } else {
                blockContent.slideUp();
            }

            $(this).toggleClass('active');
        });

        // Block toggle fullscreen
        $('[data-toggle="block-toggle-fullscreen"]').on('click', function(e) {
            e.preventDefault();

            var block = $(this).closest('.block');

            if ($(this).hasClass('active')) {
                block.removeClass('block-fullscreen');
            } else {
                block.addClass('block-fullscreen');
            }

            $(this).toggleClass('active');
        });

        // Block hide
        $('[data-toggle="block-hide"]').on('click', function(e) {
            e.preventDefault();

            $(this).closest('.block').fadeOut();
        });
    };

    // Switchery
    function switcheryHandler() {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function(html) {
            var options = $(html).data().options || {},
                switchery = new Switchery(html, options);
        });
    };

    // Sidebar Navigation functionality
    function handleNav() {
        var subMenuLink = $('.menu-nav-list a.has-submenu'),
            menuLink = $('.menu-nav-list a'),
            path = window.location.pathname;

        subMenuLink.on({
            click: function(e) {
                e.preventDefault();
                var $this = $(this);
                $this.closest('li').siblings().removeClass('active');
                $this.closest('li').toggleClass('active');
            }
        });

        menuLink.each(function() {
            if (($(this)[0].href).indexOf(path) !== -1 && /[^/]*$/.exec(path)[0] !== "") {
                $(this).parentsUntil($('.menu-nav-list'), 'li').addClass('active');
            }
        });
    }

    // Toggle Sidebar function
    function toggleSidebar() {
        var toggleSidebarLink = $('.toggle-sidebar');

        toggleSidebarLink.on({
            click: function(e) {
                e.preventDefault();
                var $this = $(this);

                if (helpers.isSmallDevice()) {
                    $body.toggleClass('main-nav-collapse-small');
                } else {
                    $body.toggleClass('main-nav-collapse');
                }

                if (helpers.sidebarIsCollapsed()) {
                    customScrollBar('.custom-scrollbar').destroy();
                } else {
                    customScrollBar('.custom-scrollbar').init();
                }
            }
        });
    }

    function resizeHandler() {
        var windowWidth = $window.width();
        // window width greater than 992px
        if (!helpers.isSmallDevice()) {
            $body.removeClass('main-nav-collapse-small');
        } else {
            $body.removeClass('main-nav-collapse');
        }
    }

    function initResizeHandler(handler) {
        handler();
        $(window).resize(function() {
            handler();
        });
        $(window).bind('orientationchange', handler);
    }

    function activateBootstrapComponents() {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }

    function customScrollBar(elem, options) {
        var elem = $(elem),
            options = options || {};
        return {
            init: function() {
                if (elem.length) {
                    $(elem).mCustomScrollbar(options);
                }
            },
            destroy: function() {
                if (elem.length) {
                    $(elem).mCustomScrollbar('destroy');
                }
            }
        }
    }

    function iconSearch() {
        var $input = $('#icons-searcher'),
            $iconList = $('#icons-source');

        $input.on('keyup', function() {
            var val = $(this).val();
            $iconList.find('li i').each(function(i, el) {
                $(el).closest('button').popover('hide');
                if (($(el)[0].className).indexOf(val) > -1) {
                    $(el).closest('li').show();
                } else {
                    $(el).closest('li').hide();
                }
            });
        });
    }

    function initSidebarOff() {
        $('#activate-sidebar-off').on({
            click: function(e) {
                e.stopPropagation();
                e.preventDefault();
                $('#sidebar-off').toggleClass('sidebar-on');
            }
        });

        $('html').on({
            click: function(e) {
                if (!$(e.target).parents('#sidebar-off').length) {
                    $('#sidebar-off').removeClass('sidebar-on');
                }
            }
        });
    }

    function preloader(elem) {
        return {
            hide: function() {
                $(window).load(function() {
                    $(elem).fadeOut();
                });
            },
            show: function() {
                $(elem).fadeIn();
            }
        }
    }

    function searchInit() {
        $('#show-search').on({
            click: function(e) {
                e.preventDefault();
                $('.search-container').addClass('active');
                $('.search-container').find('input').focus();
            }
        });

        $('#hide-search').on({
            click: function(e) {
                e.preventDefault();
                $('.search-container').removeClass('active');
                $('.search-container').find('input').blur();
            }
        });
    }

    function stickFooter() {
        if ($('.main-footer').length) {
            var docHeight = $(window).height(),
                windowHeight = $(window).height(),
                footerHeight = $('.main-footer').height(),
                footerTop = $('.main-footer').position().top + footerHeight + 30;
            if (footerTop < docHeight) {
                $('.main-footer').addClass("fixed-bottom");
            }
        }
    }

    return {
        init: function() {
            interActiveBlocks();
            switcheryHandler();
            handleNav();
            toggleSidebar();
            resizeHandler();
            initResizeHandler(resizeHandler);
            activateBootstrapComponents();
            customScrollBar('.custom-scrollbar').init();
            customScrollBar('.sidebar-off-content').init();
            initSidebarOff();
            preloader('.preloader').hide();
            searchInit();
            stickFooter();
        },
        helpers: helpers,
        iconSearch: iconSearch
    }


}());

$(function() {
    App.init();
});
