/**
 * ScrollSpy - vertical and horizontal scrollspy
 * Options: sectionClass, menuActiveTarget, offset, hrefAttribute, activeClass,
 *          scrollContainer, smoothScroll, orientation ('vertical'|'horizontal')
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.scrollSpy = factory();
    }
})(typeof self !== "undefined" ? self : this, function () {
    "use strict";

    var defaults = {
        sectionClass: ".scrollspy",
        menuActiveTarget: "li > a",
        offset: 0,
        hrefAttribute: "href",
        activeClass: "active",
        scrollContainer: "",
        smoothScroll: {},
        orientation: "vertical",
    };

    function ScrollSpy(menuSelectorOrElement, options) {
        if (!menuSelectorOrElement) {
            throw new Error("Your navigation query selector is the first argument.");
        }
        if (typeof options !== "object") {
            throw new Error("The second argument must be an instance of an Object.");
        }

        this.menuList =
            menuSelectorOrElement instanceof HTMLElement
                ? menuSelectorOrElement
                : document.querySelector(menuSelectorOrElement);
        this.options = Object.assign({}, defaults, options);

        if (this.options.smoothScroll === true) {
            this.options.smoothScroll = {};
        }

        this.scroller =
            this.options.scrollContainer && this.options.scrollContainer !== ""
                ? this.options.scrollContainer instanceof HTMLElement
                    ? this.options.scrollContainer
                    : document.querySelector(this.options.scrollContainer)
                : window;

        var isHorizontal =
            this.options.orientation === "horizontal" &&
            this.scroller &&
            this.scroller !== window;

        this.sections =
            isHorizontal
                ? this.scroller.querySelectorAll(this.options.sectionClass)
                : document.querySelectorAll(this.options.sectionClass);

        this.activeItem = null;
        this.attachEventListeners();
    }

    ScrollSpy.prototype.attachEventListeners = function () {
        if (this.scroller) {
            this.scroller.addEventListener("scroll", () => this.onScroll());
        }
        if (this.options.smoothScroll && this.menuList) {
            this.menuList
                .querySelectorAll(this.options.menuActiveTarget)
                .forEach((el) =>
                    el.addEventListener("click", this.onClick.bind(this))
                );
        }
    };

    ScrollSpy.prototype.onClick = function (e) {
        if (e.target) {
            var href = e.target.getAttribute(this.options.hrefAttribute);
            if (href) {
                var target = document.querySelector(href);
                if (target && this.options.smoothScroll) {
                    e.preventDefault();
                    this.scrollTo(target);
                }
            }
        }
    };

    ScrollSpy.prototype.onScroll = function () {
        var section = this.getSectionInView();
        var menuItem = this.getMenuItemBySection(section);
        if (!section || !menuItem) return;
        var itemHref = menuItem.getAttribute(this.options.hrefAttribute);
        var currentHref = this.activeItem
            ? this.activeItem.getAttribute(this.options.hrefAttribute)
            : null;
        if (menuItem && itemHref && itemHref !== currentHref) {
            this.removeCurrentActive({ ignore: menuItem });
            this.setActive(menuItem);
        }
    };

    ScrollSpy.prototype.scrollTo = function (target) {
        var isHorizontal =
            this.options.orientation === "horizontal" &&
            this.scroller &&
            this.scroller !== window;

        if (isHorizontal) {
            this.scroller.scrollTo({
                left: target.offsetLeft,
                behavior: "smooth",
            });
            return;
        }

        if (
            typeof this.options.smoothScrollBehavior === "function"
        ) {
            this.options.smoothScrollBehavior(target, this.options.smoothScroll);
        } else {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };

    ScrollSpy.prototype.getMenuItemBySection = function (section) {
        if (!section || !this.menuList) return null;
        var id = section.getAttribute("id");
        return this.menuList.querySelector(
            "[" + this.options.hrefAttribute + '="#' + id + '"]'
        );
    };

    ScrollSpy.prototype.getSectionInView = function () {
        var isHorizontal =
            this.options.orientation === "horizontal" &&
            this.scroller &&
            this.scroller !== window;

        if (isHorizontal) {
            return this.getSectionInViewHorizontal();
        }
        return this.getSectionInViewVertical();
    };

    ScrollSpy.prototype.getSectionInViewVertical = function () {
        var scrollPos;
        if (this.options.scrollContainer && this.scroller) {
            scrollPos =
                (this.scroller instanceof Window
                    ? this.scroller.scrollY
                    : this.scroller.scrollTop) + this.options.offset;
        } else {
            scrollPos =
                (document.documentElement.scrollTop || document.body.scrollTop) +
                this.options.offset;
        }
        for (var i = 0; i < this.sections.length; i++) {
            var top = this.sections[i].offsetTop;
            var bottom = top + this.sections[i].offsetHeight;
            if (scrollPos > top && scrollPos <= bottom) {
                return this.sections[i];
            }
        }
        return null;
    };

    ScrollSpy.prototype.getSectionInViewHorizontal = function () {
        var scrollLeft = this.scroller.scrollLeft;
        var position = scrollLeft + this.scroller.offsetWidth / 2 + this.options.offset;
        for (var i = 0; i < this.sections.length; i++) {
            var section = this.sections[i];
            var left = section.offsetLeft;
            var right = left + section.offsetWidth;
            if (position >= left && position < right) {
                return section;
            }
        }
        return this.sections.length ? this.sections[0] : null;
    };

    ScrollSpy.prototype.setActive = function (element) {
        this.activeItem = element;
        if (!this.activeItem.classList.contains(this.options.activeClass)) {
            this.activeItem.classList.add(this.options.activeClass);
            if (typeof this.options.onActive === "function") {
                this.options.onActive(this.activeItem);
            }
        }
    };

    ScrollSpy.prototype.removeCurrentActive = function (opts) {
        opts = opts || {};
        var ignore = opts.ignore;
        if (this.activeItem) {
            this.activeItem.classList.remove(this.options.activeClass);
            this.activeItem = null;
        } else if (this.menuList) {
            var hrefAttr = this.options.hrefAttribute;
            var menuTarget = this.options.menuActiveTarget;
            var activeCls = this.options.activeClass;
            var selector = ignore
                ? menuTarget + "." + activeCls + ':not([' + hrefAttr + '="' + ignore.getAttribute(hrefAttr) + '"])'
                : menuTarget + "." + activeCls;
            this.menuList.querySelectorAll(selector).forEach(function (el) {
                el.classList.remove(activeCls);
            });
        }
    };

    return function (menuSelectorOrElement, options) {
        options = options || {};
        var instance = new ScrollSpy(menuSelectorOrElement, options);
        instance.onScroll();
        var scrollTarget =
            instance.scroller && instance.scroller !== window
                ? instance.scroller
                : window;
        scrollTarget.addEventListener("scroll", function () {
            instance.onScroll();
        });
        return instance;
    };
});
