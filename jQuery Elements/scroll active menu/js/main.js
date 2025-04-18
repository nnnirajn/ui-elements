(function (a) {
    var b = {
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null
    };
    a.scrollIt = function (d) {
        var e = a.extend(b, d);
        var g = 0;
        var i = a("[data-scroll-index]:last").attr("data-scroll-index");
        var c = function (j) {
            if (j < 0 || j > i) {
                return
            }
            var k = a("[data-scroll-index=" + j + "]").offset().top;
            a("html,body").animate({
                scrollTop: k,
                easing: e.easing
            }, e.scrollTime)
        };
        var f = function (j) {
            if (e.onPageChange && j && (g != j)) {
                e.onPageChange(j)
            }
            g = j;
            a("[data-scroll-nav]").removeClass(e.activeClass);
            a("[data-scroll-nav=" + j + "]").addClass(e.activeClass)
        };
        var h = function () {
            var j = a(window).scrollTop();
            var l = a("[data-scroll-index]").filter(function (m, n) {
                return j >= a(n).offset().top && j < a(n).offset().top + a(n).outerHeight()
            });
            var k = l.first().attr("data-scroll-index");
            f(k)
        };
        a(window).scroll(h).scroll();
        a(window).keydown(function (j) {
            var k = j.which;
            if (k == e.upKey && g > 0) {
                c(parseInt(g) - 1);
                return false
            } else {
                if (k == e.downKey && g < i) {
                    c(parseInt(g) + 1);
                    return false
                }
            }
            return true
        });
        a("[data-scroll-nav], [data-scroll-goto]").click(function (j) {
            var k = a(j.target).attr("data-scroll-nav") || a(j.target).attr("data-scroll-goto");
            c(k)
        })
    }
}(jQuery));


$(function () {
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 2000, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 60 // offste (in px) for fixed top navigation
    });
});