!(function () {
  var t,
    e,
    i,
    r =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = !1;
  function s(t) {
    for (var i = Object.keys(t), r = 0; r < i.length; r++) e[i[r]] = t[i[r]];
  }
  function o(t) {
    var i = e[t];
    if (null == i) throw Error("Could not resolve bundle with id " + t);
    return i;
  }
  function a() {
    return (
      n ||
        ((n = !0), (e = {}), ((t = {}).register = s), (i = o), (t.resolve = i)),
      t
    );
  }
  function l(t, e) {
    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
  }
  function u(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function c(t, e, i) {
    return e && u(t.prototype, e), i && u(t, i), t;
  }
  function h(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function f(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, r);
    }
    return i;
  }
  function d(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? f(Object(i), !0).forEach(function (e) {
            h(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : f(Object(i)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return t;
  }
  function p(t, e) {
    if ("function" != typeof e && null !== e)
      throw TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && D(t, e);
  }
  function $(t) {
    return ($ = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function D(t, e) {
    return (D =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function g(t) {
    if (void 0 === t)
      throw ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function m(t) {
    var e = (function () {
      if (
        "undefined" == typeof Reflect ||
        !Reflect.construct ||
        Reflect.construct.sham
      )
        return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        r,
        n,
        s = $(t);
      if (e) {
        var o = $(this).constructor;
        n = Reflect.construct(s, arguments, o);
      } else n = s.apply(this, arguments);
      return (
        (i = this),
        (r = n) && ("object" == typeof r || "function" == typeof r) ? r : g(i)
      );
    };
  }
  function v(t, e, i) {
    return (v =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var r = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = $(t));

              );
              return t;
            })(t, e);
            if (r) {
              var n = Object.getOwnPropertyDescriptor(r, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  function _(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var i = [],
            r = !0,
            n = !1,
            s = void 0;
          try {
            for (
              var o, a = t[Symbol.iterator]();
              !(r = (o = a.next()).done) &&
              (i.push(o.value), !e || i.length !== e);
              r = !0
            );
          } catch (l) {
            (n = !0), (s = l);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (n) throw s;
            }
          }
          return i;
        }
      })(t, e) ||
      y(t, e) ||
      (function () {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function y(t, e) {
    if (t) {
      if ("string" == typeof t) return b(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? b(t, e)
          : void 0
      );
    }
  }
  function b(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
    return r;
  }
  a().register(
    JSON.parse(
      '{"KAtDQ":"playbook.9fb05f6e.js","2j8SH":"cate1.012f66c0.png","7G9gf":"cate2.7ea52d9e.png","72luJ":"cate3.474cc3f5.png"}'
    )
  );
  var x = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
      },
    },
    C = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, t),
          Object.assign(this, x, e),
          (this.smartphone = x.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = x.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = "tablet")
              : (this.context = "smartphone")
            : (this.context = "desktop"),
          this.isMobile && (this.direction = this[this.context].direction),
          "horizontal" === this.direction
            ? (this.directionAxis = "x")
            : (this.directionAxis = "y"),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        c(t, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile &&
                    this.windowWidth >= this.tablet.breakpoint);
                var t = this.context;
                this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                  t != this.context &&
                    ("desktop" == t ? this.smooth : this[t].smooth) !=
                      ("desktop" == this.context
                        ? this.smooth
                        : this[this.context].smooth) &&
                    window.location.reload();
              }
            },
          },
          {
            key: "initEvents",
            value: function () {
              var t = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (e) {
                  e.addEventListener("click", t.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  {
                    offset: t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-offset")
                    ),
                  }
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                r = i + this.windowHeight,
                n = this.instance.scroll.x,
                s = n + this.windowWidth;
              Object.entries(this.els).forEach(function (o) {
                var a = _(o, 2),
                  l = a[0],
                  u = a[1];
                if (
                  (!u ||
                    (u.inView && !t) ||
                    ("horizontal" === e.direction
                      ? s >= u.left && n < u.right && e.setInView(u, l)
                      : r >= u.top && i < u.bottom && e.setInView(u, l)),
                  u && u.inView)
                ) {
                  if ("horizontal" === e.direction) {
                    var c = u.right - u.left;
                    (u.progress =
                      (e.instance.scroll.x - (u.left - e.windowWidth)) /
                      (c + e.windowWidth)),
                      (s < u.left || n > u.right) && e.setOutOfView(u, l);
                  } else {
                    var h = u.bottom - u.top;
                    (u.progress =
                      (e.instance.scroll.y - (u.top - e.windowHeight)) /
                      (h + e.windowHeight)),
                      (r < u.top || i > u.bottom) && e.setOutOfView(u, l);
                  }
                }
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                (this.currentElements[e] = t),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              (this.els[e].inView = !1),
                Object.keys(this.currentElements).forEach(function (t) {
                  t === e && delete i.currentElements[t];
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  r = i.indexOf(e);
                r < 0 ||
                  (i.splice(r, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                r = this.listeners[i];
              r &&
                0 !== r.length &&
                r.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1);
                }),
                this.html.classList.remove(this.initClass);
            },
          },
        ]),
        t
      );
    })(),
    w =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== r
        ? r
        : "undefined" != typeof self
        ? self
        : {};
  function E(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var T = E(function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (
            !("scrollBehavior" in e.documentElement.style) ||
            !0 === t.__forceSmoothScrollPolyfill__
          ) {
            var i,
              r = t.HTMLElement || t.Element,
              n = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: r.prototype.scroll || a,
                scrollIntoView: r.prototype.scrollIntoView,
              },
              s =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now,
              o =
                ((i = t.navigator.userAgent),
                RegExp("MSIE |Trident/|Edge/").test(i) ? 1 : 0);
            (t.scroll = t.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? f.call(
                        t,
                        e.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : n.scroll.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
              (t.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (l(arguments[0])
                    ? n.scrollBy.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : f.call(
                        t,
                        e.body,
                        ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                        ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                      ));
              }),
              (r.prototype.scroll = r.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0]) {
                    if (!0 !== l(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      f.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw SyntaxError("Value could not be converted");
                      n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                  }
                }),
              (r.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== l(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : n.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (r.prototype.scrollIntoView = function () {
                if (!0 !== l(arguments[0])) {
                  var i = (function t(i) {
                      for (; i !== e.body && !1 === h(i); )
                        i = i.parentNode || i.host;
                      return i;
                    })(this),
                    r = i.getBoundingClientRect(),
                    s = this.getBoundingClientRect();
                  i !== e.body
                    ? (f.call(
                        this,
                        i,
                        i.scrollLeft + s.left - r.left,
                        i.scrollTop + s.top - r.top
                      ),
                      "fixed" !== t.getComputedStyle(i).position &&
                        t.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        }))
                    : t.scrollBy({
                        left: s.left,
                        top: s.top,
                        behavior: "smooth",
                      });
                } else
                  n.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function a(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function l(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function u(t, e) {
            return "Y" === e
              ? t.clientHeight + o < t.scrollHeight
              : "X" === e
              ? t.clientWidth + o < t.scrollWidth
              : void 0;
          }
          function c(e, i) {
            var r = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === r || "scroll" === r;
          }
          function h(t) {
            var e = u(t, "Y") && c(t, "Y"),
              i = u(t, "X") && c(t, "X");
            return e || i;
          }
          function f(i, r, o) {
            var l,
              u,
              c,
              h,
              f = s();
            i === e.body
              ? ((l = t),
                (u = t.scrollX || t.pageXOffset),
                (c = t.scrollY || t.pageYOffset),
                (h = n.scroll))
              : ((l = i), (u = i.scrollLeft), (c = i.scrollTop), (h = a)),
              (function e(i) {
                var r,
                  n,
                  o,
                  a,
                  l = (s() - i.startTime) / 468;
                (r = 0.5 * (1 - Math.cos(Math.PI * (a = l = l > 1 ? 1 : l)))),
                  (n = i.startX + (i.x - i.startX) * r),
                  (o = i.startY + (i.y - i.startY) * r),
                  i.method.call(i.scrollable, n, o),
                  (n === i.x && o === i.y) ||
                    t.requestAnimationFrame(e.bind(t, i));
              })({
                scrollable: l,
                method: h,
                startTime: f,
                startX: u,
                startY: c,
                x: r,
                y: o,
              });
          }
        },
      };
    }),
    S =
      (T.polyfill,
      (function (t) {
        p(i, t);
        var e = m(i);
        function i() {
          var t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            l(this, i),
            (t = e.call(this, r)).resetNativeScroll &&
              (history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0)),
            window.addEventListener("scroll", t.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill &&
              ((window.smoothscrollPolyfill = T),
              window.smoothscrollPolyfill.polyfill()),
            t
          );
        }
        return (
          c(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  v($(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                v($(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  Object.entries(this.els).length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                Object.entries(this.els).length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (e, i) {
                      e.getBoundingClientRect();
                      var r,
                        n,
                        s,
                        o = e.dataset[t.name + "Class"] || t.class,
                        a =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : i,
                        l =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        u = e.dataset[t.name + "Repeat"],
                        c = e.dataset[t.name + "Call"],
                        h = e.dataset[t.name + "Target"],
                        f = (s =
                          void 0 !== h
                            ? document.querySelector("".concat(h))
                            : e).getBoundingClientRect();
                      (r = f.top + t.instance.scroll.y),
                        (n = f.left + t.instance.scroll.x);
                      var d = r + s.offsetHeight,
                        p = n + s.offsetWidth;
                      u = "false" != u && (null != u || t.repeat);
                      var $ = t.getRelativeOffset(l),
                        D = {
                          el: e,
                          targetEl: s,
                          id: a,
                          class: o,
                          top: (r += $[0]),
                          bottom: (d -= $[1]),
                          left: n,
                          right: p,
                          offset: l,
                          progress: 0,
                          repeat: u,
                          inView: !1,
                          call: c,
                        };
                      (t.els[a] = D),
                        e.classList.contains(o) && t.setInView(t.els[a], a);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach(function (e) {
                  var i = _(e, 2),
                    r = i[0],
                    n = i[1],
                    s =
                      n.targetEl.getBoundingClientRect().top +
                      t.instance.scroll.y,
                    o = s + n.targetEl.offsetHeight,
                    a = t.getRelativeOffset(n.offset);
                  (t.els[r].top = s + a[0]), (t.els[r].bottom = o - a[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = parseInt(e.offset) || 0,
                  r = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t)
                    t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                i =
                  "number" != typeof t
                    ? t.getBoundingClientRect().top + i + this.instance.scroll.y
                    : t + i;
                var n = function () {
                  return parseInt(window.pageYOffset) === parseInt(i);
                };
                if (r) {
                  if (n()) return void r();
                  var s = function t() {
                    n() && (window.removeEventListener("scroll", t), r());
                  };
                  window.addEventListener("scroll", s);
                }
                window.scrollTo({ top: i, behavior: "smooth" });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                v($(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })(C)),
    F = Object.getOwnPropertySymbols,
    k = Object.prototype.hasOwnProperty,
    A = Object.prototype.propertyIsEnumerable,
    B = !(function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            r[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (n) {
        return !1;
      }
    })()
      ? function (t, e) {
          for (
            var i,
              r,
              n = (function t(e) {
                if (null == e)
                  throw TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(e);
              })(t),
              s = 1;
            s < arguments.length;
            s++
          ) {
            for (var o in (i = Object(arguments[s])))
              k.call(i, o) && (n[o] = i[o]);
            if (F) {
              r = F(i);
              for (var a = 0; a < r.length; a++)
                A.call(i, r[a]) && (n[r[a]] = i[r[a]]);
            }
          }
          return n;
        }
      : Object.assign;
  function L() {}
  L.prototype = {
    on: function (t, e, i) {
      var r = this.e || (this.e = {});
      return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var r = this;
      function n() {
        r.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          r = 0,
          n = i.length;
        r < n;
        r++
      )
        i[r].fn.apply(i[r].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        r = i[t],
        n = [];
      if (r && e)
        for (var s = 0, o = r.length; s < o; s++)
          r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var O = L,
    P = E(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, r) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != r ? r : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                e > 0
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, r, n, s, o, a;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((r = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (a = r.reduce(function (t, e) {
                      return t + e;
                    })),
                    (s = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    Math.abs((o = a / r.length)) <
                      Math.abs((n = s / i.length) * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }).call(w);
    }),
    R = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    },
    q = Object.prototype.toString,
    z = Object.prototype.hasOwnProperty;
  function M(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var V = P.Lethargy,
    H = "virtualscroll",
    j = W;
  function W(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          z.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == q.call(t[i]) &&
            e.push(i);
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        t[n] = M(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = B(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new V()),
      (this._emitter = new O()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function I(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function Y(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        r = i.transform || i.webkitTransform || i.mozTransform,
        n = r.match(/^matrix3d\((.+)\)$/);
      return (
        n
          ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
          : ((n = r.match(/^matrix\((.+)\)$/)),
            (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
            (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function N(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (W.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(H, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (W.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          R.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (W.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (W.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (W.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        r = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = r.pageX),
        (this.touchStartY = r.pageY),
        this._notify(t);
    }),
    (W.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case 37:
        case 38:
          e.deltaY = this.options.keyStep;
          break;
        case 39:
        case 40:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case 32:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (W.prototype._bind = function () {
      R.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        R.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        R.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        R.hasPointer &&
          R.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        R.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (W.prototype._unbind = function () {
      R.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        R.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        R.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        R.hasPointer &&
          R.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        R.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (W.prototype.on = function (t, e) {
      this._emitter.on(H, t, e);
      var i = this._emitter.e;
      i && i.virtualscroll && 1 === i.virtualscroll.length && this._bind();
    }),
    (W.prototype.off = function (t, e) {
      this._emitter.off(H, t, e);
      var i = this._emitter.e;
      (!i.virtualscroll || i.virtualscroll.length <= 0) && this._unbind();
    }),
    (W.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (W.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var X = 0.1,
    G = "function" == typeof Float32Array;
  function U(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function K(t, e) {
    return 3 * e - 6 * t;
  }
  function Q(t) {
    return 3 * t;
  }
  function Z(t, e, i) {
    var r;
    return ((U(e, i) * t + K(e, i)) * t + 3 * (r = e)) * t;
  }
  function J(t, e, i) {
    var r;
    return 3 * U(e, i) * t * t + 2 * K(e, i) * t + 3 * (r = e);
  }
  function tt(t) {
    return t;
  }
  var te = function (t, e, i, r) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw Error("bezier x values must be in [0, 1] range");
      if (t === e && i === r) return tt;
      for (var n = G ? new Float32Array(11) : Array(11), s = 0; s < 11; ++s)
        n[s] = Z(s * X, t, i);
      return function (s) {
        return 0 === s
          ? 0
          : 1 === s
          ? 1
          : Z(
              (function e(r) {
                for (var s = 0, o = 1; 10 !== o && n[o] <= r; ++o) s += X;
                var a = s + ((r - n[--o]) / (n[o + 1] - n[o])) * X,
                  l = J(a, t, i);
                return l >= 0.001
                  ? (function (t, e, i, r) {
                      for (var n = 0; n < 4; ++n) {
                        var s = J(e, i, r);
                        if (0 === s) break;
                        e -= (Z(e, i, r) - t) / s;
                      }
                      return e;
                    })(r, a, t, i)
                  : 0 === l
                  ? a
                  : (function (t, e, i, r, n) {
                      var s,
                        o,
                        a = 0;
                      do
                        (s = Z((o = e + (i - e) / 2), r, n) - t) > 0
                          ? (i = o)
                          : (e = o);
                      while (Math.abs(s) > 1e-7 && ++a < 10);
                      return o;
                    })(r, s, s + X, t, i);
              })(s),
              e,
              r
            );
      };
    },
    ti = 38,
    tr = 40,
    tn = 32,
    ts = 9,
    to = 33,
    ta = 34,
    tl = 36,
    tu = 35,
    tc = (function (t) {
      p(i, t);
      var e = m(i);
      function i() {
        var t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          l(this, i),
          history.scrollRestoration && (history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          (t = e.call(this, r)).inertia && (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = {}),
          (t.stop = !1),
          (t.scrollbarContainer = r.scrollbarContainer),
          (t.checkKey = t.checkKey.bind(g(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        c(i, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  "data-".concat(this.name, "-direction"),
                  this.direction
                ),
                (this.instance = d(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance
                )),
                (this.vs = new j({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (e) {
                  t.stop ||
                    t.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      t.updateDelta(e), t.isScrolling || t.startScrolling();
                    });
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                v($(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                "horizontal" === this.direction)
              ) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                  t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth;
              }
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                t.keyCode == ts &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (e.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0);
                  });
              else {
                switch (t.keyCode) {
                  case ts:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0),
                        e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2,
                        });
                    });
                    break;
                  case ti:
                    this.instance.delta[this.directionAxis] -= 240;
                    break;
                  case tr:
                    this.instance.delta[this.directionAxis] += 240;
                    break;
                  case to:
                    this.instance.delta[this.directionAxis] -=
                      window.innerHeight;
                    break;
                  case ta:
                    this.instance.delta[this.directionAxis] +=
                      window.innerHeight;
                    break;
                  case tl:
                    this.instance.delta[this.directionAxis] -=
                      this.instance.limit[this.directionAxis];
                    break;
                  case tu:
                    this.instance.delta[this.directionAxis] +=
                      this.instance.limit[this.directionAxis];
                    break;
                  case tn:
                    document.activeElement instanceof HTMLInputElement ||
                      document.activeElement instanceof HTMLTextAreaElement ||
                      (t.shiftKey
                        ? (this.instance.delta[this.directionAxis] -=
                            window.innerHeight)
                        : (this.instance.delta[this.directionAxis] +=
                            window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]),
                  this.stopScrolling(),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return t.checkScroll();
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var r = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]
                  ),
                  n = Date.now() - this.startScrollTs;
                if (
                  (!this.animatingScroll &&
                    n > 100 &&
                    ((r < 0.5 &&
                      0 != this.instance.delta[this.directionAxis]) ||
                      (r < 0.5 &&
                        0 == this.instance.delta[this.directionAxis])) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (i) {
                    var r = _(i, 2),
                      n = (r[0], r[1]);
                    n.persistent ||
                    (t.instance.scroll[t.directionAxis] >
                      n.offset[t.directionAxis] &&
                      t.instance.scroll[t.directionAxis] <
                        n.limit[t.directionAxis])
                      ? ("horizontal" === t.direction
                          ? t.transform(
                              n.el,
                              -t.instance.scroll[t.directionAxis],
                              0
                            )
                          : t.transform(
                              n.el,
                              0,
                              -t.instance.scroll[t.directionAxis]
                            ),
                        n.inView ||
                          ((n.inView = !0),
                          (n.el.style.opacity = 1),
                          (n.el.style.pointerEvents = "all"),
                          n.el.setAttribute(
                            "data-".concat(t.name, "-section-inview"),
                            ""
                          )))
                      : ((n.inView || e) &&
                          ((n.inView = !1),
                          (n.el.style.opacity = 0),
                          (n.el.style.pointerEvents = "none"),
                          n.el.removeAttribute(
                            "data-".concat(t.name, "-section-inview")
                          )),
                        t.transform(n.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var s =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction
                    ? this.transform(this.scrollbarThumb, s, 0)
                    : this.transform(this.scrollbarThumb, 0, s);
                }
                v($(i.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              var e,
                i =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection;
              (e =
                "both" === i
                  ? t.deltaX + t.deltaY
                  : "vertical" === i
                  ? t.deltaY
                  : "horizontal" === i
                  ? t.deltaX
                  : t.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  e * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = I(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x
                  ? "right" !== this.instance.direction &&
                    (this.instance.direction = "right")
                  : this.instance.delta.x < this.instance.scroll.x &&
                    "left" !== this.instance.direction &&
                    (this.instance.direction = "left");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              if (
                ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                "horizontal" == this.direction)
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var i =
                      (((100 * (t.clientX - e.scrollbarBCR.left)) /
                        e.scrollbarWidth) *
                        e.instance.limit.x) /
                      100,
                    r =
                      (((100 * (t.clientY - e.scrollbarBCR.top)) /
                        e.scrollbarHeight) *
                        e.instance.limit.y) /
                      100;
                  r > 0 && r < e.instance.limit.y && (e.instance.delta.y = r),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                });
            },
          },
          {
            key: "addElements",
            value: function () {
              var t = this;
              (this.els = {}),
                (this.parallaxElements = {}),
                this.el
                  .querySelectorAll("[data-".concat(this.name, "]"))
                  .forEach(function (e, i) {
                    var r,
                      n,
                      s,
                      o = N(e),
                      a = Object.entries(t.sections)
                        .map(function (t) {
                          var e = _(t, 2);
                          return e[0], e[1];
                        })
                        .find(function (t) {
                          return o.includes(t.el);
                        }),
                      l = e.dataset[t.name + "Class"] || t.class,
                      u =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "el" + i,
                      c = e.dataset[t.name + "Repeat"],
                      h = e.dataset[t.name + "Call"],
                      f = e.dataset[t.name + "Position"],
                      d = e.dataset[t.name + "Delay"],
                      p = e.dataset[t.name + "Direction"],
                      $ = "string" == typeof e.dataset[t.name + "Sticky"],
                      D =
                        !!e.dataset[t.name + "Speed"] &&
                        parseFloat(e.dataset[t.name + "Speed"]) / 10,
                      g =
                        "string" == typeof e.dataset[t.name + "Offset"]
                          ? e.dataset[t.name + "Offset"].split(",")
                          : t.offset,
                      m = e.dataset[t.name + "Target"],
                      v = (s =
                        void 0 !== m
                          ? document.querySelector("".concat(m))
                          : e).getBoundingClientRect();
                    null === a || a.inView
                      ? ((r = v.top + t.instance.scroll.y - Y(s).y),
                        (n = v.left + t.instance.scroll.x - Y(s).x))
                      : ((r = v.top - Y(a.el).y - Y(s).y),
                        (n = v.left - Y(a.el).x - Y(s).x));
                    var y = r + s.offsetHeight,
                      b = n + s.offsetWidth,
                      x = { x: (b - n) / 2 + n, y: (y - r) / 2 + r };
                    if ($) {
                      var C = e.getBoundingClientRect(),
                        w = C.top,
                        E = C.left,
                        T = { x: E - n, y: w - r };
                      (r += window.innerHeight),
                        (n += window.innerWidth),
                        (y =
                          w +
                          s.offsetHeight -
                          e.offsetHeight -
                          T[t.directionAxis]),
                        (x = {
                          x:
                            ((b =
                              E +
                              s.offsetWidth -
                              e.offsetWidth -
                              T[t.directionAxis]) -
                              n) /
                              2 +
                            n,
                          y: (y - r) / 2 + r,
                        });
                    }
                    c = "false" != c && (null != c || t.repeat);
                    var S = [0, 0];
                    if (g) {
                      if ("horizontal" === t.direction) {
                        for (var F = 0; F < g.length; F++)
                          "string" == typeof g[F]
                            ? g[F].includes("%")
                              ? (S[F] = parseInt(
                                  (g[F].replace("%", "") * t.windowWidth) / 100
                                ))
                              : (S[F] = parseInt(g[F]))
                            : (S[F] = g[F]);
                        (n += S[0]), (b -= S[1]);
                      } else {
                        for (F = 0; F < g.length; F++)
                          "string" == typeof g[F]
                            ? g[F].includes("%")
                              ? (S[F] = parseInt(
                                  (g[F].replace("%", "") * t.windowHeight) / 100
                                ))
                              : (S[F] = parseInt(g[F]))
                            : (S[F] = g[F]);
                        (r += S[0]), (y -= S[1]);
                      }
                    }
                    var k = {
                      el: e,
                      id: u,
                      class: l,
                      section: a,
                      top: r,
                      middle: x,
                      bottom: y,
                      left: n,
                      right: b,
                      offset: g,
                      progress: 0,
                      repeat: c,
                      inView: !1,
                      call: h,
                      speed: D,
                      delay: d,
                      position: f,
                      target: s,
                      direction: p,
                      sticky: $,
                    };
                    (t.els[u] = k),
                      e.classList.contains(l) && t.setInView(t.els[u], u),
                      (!1 !== D || $) && (t.parallaxElements[u] = k);
                  });
            },
          },
          {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === e.length && (e = [this.el]),
                e.forEach(function (e, i) {
                  var r =
                      "string" == typeof e.dataset[t.name + "Id"]
                        ? e.dataset[t.name + "Id"]
                        : "section" + i,
                    n = e.getBoundingClientRect(),
                    s = {
                      x: n.left - 1.5 * window.innerWidth - Y(e).x,
                      y: n.top - 1.5 * window.innerHeight - Y(e).y,
                    },
                    o = {
                      x: s.x + n.width + 2 * window.innerWidth,
                      y: s.y + n.height + 2 * window.innerHeight,
                    },
                    a = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", r);
                  var l = {
                    el: e,
                    offset: s,
                    limit: o,
                    inView: !1,
                    persistent: a,
                    id: r,
                  };
                  t.sections[r] = l;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, r) {
              var n;
              if (r) {
                var s = Y(t),
                  o = I(s.x, e, r),
                  a = I(s.y, i, r);
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(o, ",")
                  .concat(a, ",0,1)");
              } else
                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = this.instance.scroll.x + this.windowWidth,
                n = this.instance.scroll.y + this.windowHeight,
                s = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                };
              Object.entries(this.parallaxElements).forEach(function (o) {
                var a = _(o, 2),
                  l = (a[0], a[1]),
                  u = !1;
                if ((t && (u = 0), l.inView || i))
                  switch (l.position) {
                    case "top":
                    case "left":
                      u = -(e.instance.scroll[e.directionAxis] * l.speed);
                      break;
                    case "elementTop":
                      u = -((n - l.top) * l.speed);
                      break;
                    case "bottom":
                      u =
                        (e.instance.limit[e.directionAxis] -
                          n +
                          e.windowHeight) *
                        l.speed;
                      break;
                    case "elementLeft":
                      u = -((r - l.left) * l.speed);
                      break;
                    case "right":
                      u =
                        (e.instance.limit[e.directionAxis] -
                          r +
                          e.windowHeight) *
                        l.speed;
                      break;
                    default:
                      u = -(
                        (s[e.directionAxis] - l.middle[e.directionAxis]) *
                        l.speed
                      );
                  }
                l.sticky &&
                  (u = l.inView
                    ? "horizontal" === e.direction
                      ? e.instance.scroll.x - l.left + window.innerWidth
                      : e.instance.scroll.y - l.top + window.innerHeight
                    : "horizontal" === e.direction
                    ? e.instance.scroll.x < l.left - window.innerWidth &&
                      e.instance.scroll.x < l.left - window.innerWidth / 2
                      ? 0
                      : e.instance.scroll.x > l.right &&
                        e.instance.scroll.x > l.right + 100 &&
                        l.right - l.left + window.innerWidth
                    : e.instance.scroll.y < l.top - window.innerHeight &&
                      e.instance.scroll.y < l.top - window.innerHeight / 2
                    ? 0
                    : e.instance.scroll.y > l.bottom &&
                      e.instance.scroll.y > l.bottom + 100 &&
                      l.bottom - l.top + window.innerHeight),
                  !1 !== u &&
                    ("horizontal" === l.direction ||
                    ("horizontal" === e.direction && "vertical" !== l.direction)
                      ? e.transform(l.el, u, 0, !t && l.delay)
                      : e.transform(l.el, 0, u, !t && l.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t) {
              var e,
                i = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = parseInt(r.offset) || 0,
                s = isNaN(parseInt(r.duration)) ? 1e3 : parseInt(r.duration),
                o = r.easing || [0.25, 0, 0.35, 1],
                a = !!r.disableLerp,
                l = !!r.callback && r.callback;
              if (
                ((o = te.apply(
                  void 0,
                  (function (t) {
                    if (Array.isArray(t)) return b(t);
                  })((e = o)) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(e) ||
                    y(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )),
                "string" == typeof t)
              ) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return;
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName)
                return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                if (!N(t).includes(this.el)) return;
                var u = t.getBoundingClientRect(),
                  c = u.top,
                  h = u.left,
                  f = N(t).find(function (t) {
                    return Object.entries(i.sections)
                      .map(function (t) {
                        var e = _(t, 2);
                        return e[0], e[1];
                      })
                      .find(function (e) {
                        return e.el == t;
                      });
                  }),
                  d = 0;
                (d = f
                  ? Y(f)[this.directionAxis]
                  : -this.instance.scroll[this.directionAxis]),
                  (n = "horizontal" === this.direction ? h + n - d : c + n - d);
              } else n = t + n;
              var p = parseFloat(this.instance.delta[this.directionAxis]),
                $ =
                  Math.max(
                    0,
                    Math.min(n, this.instance.limit[this.directionAxis])
                  ) - p,
                D = function (t) {
                  a
                    ? "horizontal" === i.direction
                      ? i.setScroll(p + $ * t, i.instance.delta.y)
                      : i.setScroll(i.instance.delta.x, p + $ * t)
                    : (i.instance.delta[i.directionAxis] = p + $ * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var g = Date.now();
              (function t() {
                var e = (Date.now() - g) / s;
                e > 1
                  ? (D(1),
                    (i.animatingScroll = !1),
                    0 == s && i.update(),
                    l && l())
                  : ((i.scrollToRaf = requestAnimationFrame(t)), D(o(e)));
              })();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = d(
                d({}, this.instance),
                {},
                { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              v($(i.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        i
      );
    })(C),
    th = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(this, t),
          (this.options = e),
          Object.assign(this, x, e),
          (this.smartphone = x.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = x.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "\uD83D\uDEA8 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        c(t, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new tc(this.options))
                  : (this.scroll = new S(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        t
      );
    })();
  let tf = new th({
      el: document.querySelector("#js-scroll"),
      smooth: !0,
      lerp: 0.06,
    }),
    td = {
      index: 0,
      first: !0,
      slider: document.querySelector("#js-slider"),
      prog: document.querySelector("#js-prog"),
      query: document.querySelectorAll("#js-slider > div"),
      count: document.querySelector("#js-count span"),
      back: document.querySelector("#js-back"),
      count_div: document.querySelector("#js-count"),
      send: document.querySelector("#js-submit"),
      skip: document.querySelector("#js-skip"),
      show: function (t) {
        t.classList.add("--visible"), t.classList.remove("--hidden");
      },
      hide: function (t) {
        t.classList.remove("--visible"),
          t.classList.add("--hidden"),
          setTimeout(() => {
            t.classList.remove("--hidden");
          }, 600);
      },
      next_query: function () {
        (this.slider.style.transform = `translateX(${-100 * this.index}%)`),
          setTimeout(() => {
            this.count.innerHTML = this.index - 1;
          }, 700),
          this.index >= 2 && this.index <= 7
            ? (this.back.style = "")
            : (this.back.style = "visibility: hidden; opacity: 0"),
          this.index >= 1 && this.index <= 7
            ? (this.count_div.style = "")
            : (this.count_div.style = "opacity: 0"),
          7 == this.index
            ? (this.send.style = "visibility: visible; opacity: 1")
            : (this.send.style = ""),
          6 == this.index
            ? (this.skip.style = "visibility: visible; opacity: 1")
            : (this.skip.style = ""),
          this.index >= 1 &&
            this.index <= 7 &&
            (this.prog.style.transform = `scaleX(${this.index / 7})`),
          0 != this.index
            ? this.hide(this.query[this.index - 1])
            : (this.slider.style.transform = `translateX(${
                -100 * this.index
              }%)`),
          setTimeout(() => {
            this.show(this.query[this.index - 1]);
          }, 900),
          this.index++;
      },
      prev_query: function () {
        this.index > 2 &&
          ((this.index -= 2),
          this.hide(this.query[this.index + 1]),
          this.next_query());
      },
      open: function () {
        document.querySelector("#js-overlay").classList.add("--visible"),
          document.querySelector("#js-contact").classList.add("--visible"),
          setTimeout(() => {
            this.show(this.query[this.index - 1]);
          }, 1200);
      },
      close: function () {
        setTimeout(() => {
          document.querySelector("#js-contact").classList.remove("--visible");
        }, 600),
          setTimeout(() => {
            document.querySelector("#js-overlay").classList.remove("--visible");
          }, 1200),
          this.hide(this.query[this.index - 1]);
      },
    };
  function tp() {}
  tp.prototype = {
    on: function (t, e, i) {
      var r = this.e || (this.e = {});
      return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var r = this;
      function n() {
        r.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          r = 0,
          n = i.length;
        r < n;
        r++
      )
        i[r].fn.apply(i[r].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        r = i[t],
        n = [];
      if (r && e)
        for (var s = 0, o = r.length; s < o; s++)
          r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var t$ = tp;
  t$.TinyEmitter = tp;
  var tD = function (t) {
    (this.wrap = document.querySelector("[data-router-wrapper]")),
      (this.properties = t),
      (this.Transition = t.transition
        ? new t.transition.class(this.wrap, t.transition.name)
        : null);
  };
  (tD.prototype.setup = function () {
    this.onEnter && this.onEnter(),
      this.onEnterCompleted && this.onEnterCompleted();
  }),
    (tD.prototype.add = function () {
      this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
    }),
    (tD.prototype.update = function () {
      document.title = this.properties.page.title;
    }),
    (tD.prototype.show = function (t) {
      var e = this;
      return new Promise(function (i) {
        try {
          function r(t) {
            e.onEnterCompleted && e.onEnterCompleted(), i();
          }
          return (
            e.update(),
            e.onEnter && e.onEnter(),
            Promise.resolve(
              e.Transition ? Promise.resolve(e.Transition.show(t)).then(r) : r()
            )
          );
        } catch (n) {
          return Promise.reject(n);
        }
      });
    }),
    (tD.prototype.hide = function (t) {
      var e = this;
      return new Promise(function (i) {
        try {
          function r(t) {
            e.onLeaveCompleted && e.onLeaveCompleted(), i();
          }
          return (
            e.onLeave && e.onLeave(),
            Promise.resolve(
              e.Transition ? Promise.resolve(e.Transition.hide(t)).then(r) : r()
            )
          );
        } catch (n) {
          return Promise.reject(n);
        }
      });
    });
  var tg = new window.DOMParser(),
    tm = function (t, e) {
      (this.renderers = t), (this.transitions = e);
    };
  (tm.prototype.getOrigin = function (t) {
    var e = t.match(/(https?:\/\/[\w\-.]+)/);
    return e ? e[1].replace(/https?:\/\//, "") : null;
  }),
    (tm.prototype.getPathname = function (t) {
      var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
      return e ? e[1] : "/";
    }),
    (tm.prototype.getAnchor = function (t) {
      var e = t.match(/(#.*)$/);
      return e ? e[1] : null;
    }),
    (tm.prototype.getParams = function (t) {
      var e = t.match(/\?([\w_\-.=&]+)/);
      if (!e) return null;
      for (var i = e[1].split("&"), r = {}, n = 0; n < i.length; n++) {
        var s = i[n].split("=");
        r[s[0]] = s[1];
      }
      return r;
    }),
    (tm.prototype.getDOM = function (t) {
      return "string" == typeof t ? tg.parseFromString(t, "text/html") : t;
    }),
    (tm.prototype.getView = function (t) {
      return t.querySelector("[data-router-view]");
    }),
    (tm.prototype.getSlug = function (t) {
      return t.getAttribute("data-router-view");
    }),
    (tm.prototype.getRenderer = function (t) {
      if (!this.renderers) return Promise.resolve(tD);
      if (t in this.renderers) {
        var e = this.renderers[t];
        return "function" != typeof e || tD.isPrototypeOf(e)
          ? "function" == typeof e.then
            ? Promise.resolve(e).then(function (t) {
                return t.default;
              })
            : Promise.resolve(e)
          : Promise.resolve(e()).then(function (t) {
              return t.default;
            });
      }
      return Promise.resolve(tD);
    }),
    (tm.prototype.getTransition = function (t) {
      return this.transitions
        ? t in this.transitions
          ? { class: this.transitions[t], name: t }
          : "default" in this.transitions
          ? { class: this.transitions.default, name: "default" }
          : null
        : null;
    }),
    (tm.prototype.getProperties = function (t) {
      var e = this.getDOM(t),
        i = this.getView(e),
        r = this.getSlug(i);
      return {
        page: e,
        view: i,
        slug: r,
        renderer: this.getRenderer(r, this.renderers),
        transition: this.getTransition(r, this.transitions),
      };
    }),
    (tm.prototype.getLocation = function (t) {
      return {
        href: t,
        anchor: this.getAnchor(t),
        origin: this.getOrigin(t),
        params: this.getParams(t),
        pathname: this.getPathname(t),
      };
    });
  var tv = (function (t) {
      function e(e) {
        var i = this;
        void 0 === e && (e = {});
        var r = e.renderers,
          n = e.transitions;
        t.call(this),
          (this.Helpers = new tm(r, n)),
          (this.Transitions = n),
          (this.Contextual = !1),
          (this.location = this.Helpers.getLocation(window.location.href)),
          (this.properties = this.Helpers.getProperties(
            document.cloneNode(!0)
          )),
          (this.popping = !1),
          (this.running = !1),
          (this.trigger = null),
          (this.cache = new Map()),
          this.cache.set(this.location.href, this.properties),
          this.properties.renderer.then(function (t) {
            (i.From = new t(i.properties)), i.From.setup();
          }),
          (this._navigate = this.navigate.bind(this)),
          window.addEventListener("popstate", this.popState.bind(this)),
          (this.links = document.querySelectorAll(
            "a:not([target]):not([data-router-disabled])"
          )),
          this.attach(this.links);
      }
      return (
        t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e),
        (e.prototype.attach = function (t) {
          for (var e = 0, i = t; e < i.length; e += 1)
            i[e].addEventListener("click", this._navigate);
        }),
        (e.prototype.detach = function (t) {
          for (var e = 0, i = t; e < i.length; e += 1)
            i[e].removeEventListener("click", this._navigate);
        }),
        (e.prototype.navigate = function (t) {
          if (!t.metaKey && !t.ctrlKey) {
            t.preventDefault();
            var e =
              !!t.currentTarget.hasAttribute("data-transition") &&
              t.currentTarget.dataset.transition;
            this.redirect(t.currentTarget.href, e, t.currentTarget);
          }
        }),
        (e.prototype.redirect = function (t, e, i) {
          if (
            (void 0 === e && (e = !1),
            void 0 === i && (i = "script"),
            (this.trigger = i),
            !this.running && t !== this.location.href)
          ) {
            var r = this.Helpers.getLocation(t);
            (this.Contextual = !1),
              e &&
                ((this.Contextual = this.Transitions[e].prototype),
                (this.Contextual.name = e)),
              r.origin !== this.location.origin ||
              (r.anchor && r.pathname === this.location.pathname)
                ? (window.location.href = t)
                : ((this.location = r), this.beforeFetch());
          }
        }),
        (e.prototype.popState = function () {
          (this.trigger = "popstate"), (this.Contextual = !1);
          var t = this.Helpers.getLocation(window.location.href);
          this.location.pathname === t.pathname &&
          (this.location.anchor || t.anchor)
            ? (this.location = t)
            : ((this.popping = !0), (this.location = t), this.beforeFetch());
        }),
        (e.prototype.pushState = function () {
          this.popping ||
            window.history.pushState(this.location, "", this.location.href);
        }),
        (e.prototype.fetch = function () {
          try {
            var t = this;
            return Promise.resolve(
              fetch(t.location.href, {
                mode: "same-origin",
                method: "GET",
                headers: { "X-Requested-With": "Highway" },
                credentials: "same-origin",
              })
            ).then(function (e) {
              if (e.status >= 200 && e.status < 300) return e.text();
              window.location.href = t.location.href;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (e.prototype.beforeFetch = function () {
          try {
            var t = this;
            function e() {
              t.afterFetch();
            }
            t.pushState(),
              (t.running = !0),
              t.emit("NAVIGATE_OUT", {
                from: {
                  page: t.From.properties.page,
                  view: t.From.properties.view,
                },
                trigger: t.trigger,
                location: t.location,
              });
            var i = { trigger: t.trigger, contextual: t.Contextual },
              r = t.cache.has(t.location.href)
                ? Promise.resolve(t.From.hide(i)).then(function () {
                    t.properties = t.cache.get(t.location.href);
                  })
                : Promise.resolve(
                    Promise.all([t.fetch(), t.From.hide(i)])
                  ).then(function (e) {
                    (t.properties = t.Helpers.getProperties(e[0])),
                      t.cache.set(t.location.href, t.properties);
                  });
            return Promise.resolve(r && r.then ? r.then(e) : e());
          } catch (n) {
            return Promise.reject(n);
          }
        }),
        (e.prototype.afterFetch = function () {
          try {
            var t = this;
            return Promise.resolve(t.properties.renderer).then(function (e) {
              return (
                (t.To = new e(t.properties)),
                t.To.add(),
                t.emit("NAVIGATE_IN", {
                  to: {
                    page: t.To.properties.page,
                    view: t.To.wrap.lastElementChild,
                  },
                  trigger: t.trigger,
                  location: t.location,
                }),
                Promise.resolve(
                  t.To.show({ trigger: t.trigger, contextual: t.Contextual })
                ).then(function () {
                  (t.popping = !1),
                    (t.running = !1),
                    t.detach(t.links),
                    (t.links = document.querySelectorAll(
                      "a:not([target]):not([data-router-disabled])"
                    )),
                    t.attach(t.links),
                    t.emit("NAVIGATE_END", {
                      to: {
                        page: t.To.properties.page,
                        view: t.To.wrap.lastElementChild,
                      },
                      from: {
                        page: t.From.properties.page,
                        view: t.From.properties.view,
                      },
                      trigger: t.trigger,
                      location: t.location,
                    }),
                    (t.From = t.To),
                    (t.trigger = null);
                })
              );
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        e
      );
    })(t$),
    t_ = function (t, e) {
      (this.wrap = t), (this.name = e);
    };
  (t_.prototype.show = function (t) {
    var e = this,
      i = t.trigger,
      r = t.contextual,
      n = this.wrap.lastElementChild,
      s = this.wrap.firstElementChild;
    return new Promise(function (t) {
      r
        ? (n.setAttribute("data-transition-in", r.name),
          n.removeAttribute("data-transition-out", r.name),
          r.in && r.in({ to: n, from: s, trigger: i, done: t }))
        : (n.setAttribute("data-transition-in", e.name),
          n.removeAttribute("data-transition-out", e.name),
          e.in && e.in({ to: n, from: s, trigger: i, done: t }));
    });
  }),
    (t_.prototype.hide = function (t) {
      var e = this,
        i = t.trigger,
        r = t.contextual,
        n = this.wrap.firstElementChild;
      return new Promise(function (t) {
        r
          ? (n.setAttribute("data-transition-out", r.name),
            n.removeAttribute("data-transition-in", r.name),
            r.out && r.out({ from: n, trigger: i, done: t }))
          : (n.setAttribute("data-transition-out", e.name),
            n.removeAttribute("data-transition-in", e.name),
            e.out && e.out({ from: n, trigger: i, done: t }));
      });
    }),
    console.log("Highway v2.2.0");
  var ty = { Core: tv, Helpers: tm, Renderer: tD, Transition: t_ };
  function t8(t) {
    if (void 0 === t)
      throw ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function tb(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var tx,
    t0,
    tC,
    tw,
    tE,
    tT,
    tS,
    tF,
    t1,
    tk,
    tA,
    t4,
    t6,
    tB,
    tL,
    t2,
    tO,
    t3,
    t5,
    tP,
    t7,
    tR,
    tq,
    tz,
    tM,
    tV,
    tH,
    tj,
    tW = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    tI = { duration: 0.5, overwrite: !1, delay: 0 },
    tY = 1e8,
    tN = 1e-8,
    tX = 2 * Math.PI,
    tG = tX / 4,
    tU = 0,
    tK = Math.sqrt,
    tQ = Math.cos,
    t9 = Math.sin,
    tZ = function (t) {
      return "string" == typeof t;
    },
    tJ = function (t) {
      return "function" == typeof t;
    },
    et = function (t) {
      return "number" == typeof t;
    },
    ee = function (t) {
      return void 0 === t;
    },
    ei = function (t) {
      return "object" == typeof t;
    },
    er = function (t) {
      return !1 !== t;
    },
    en = function () {
      return "undefined" != typeof window;
    },
    es = function (t) {
      return tJ(t) || tZ(t);
    },
    eo =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    ea = Array.isArray,
    eu = /(?:-?\.?\d|\.)+/gi,
    ec = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    eh = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ef = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ed = /[+-]=-?[.\d]+/,
    ep = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    e$ = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    eD = {},
    eg = {},
    em = function (t) {
      return (eg = e7(t, eD)) && rc;
    },
    ev = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    e_ = function (t, e) {
      return !e && console.warn(t);
    },
    ey = function (t, e) {
      return (t && (eD[t] = e) && eg && (eg[t] = e)) || eD;
    },
    e8 = function () {
      return 0;
    },
    eb = {},
    ex = [],
    e0 = {},
    eC = {},
    ew = {},
    eE = 30,
    eT = [],
    eS = "",
    eF = function (t) {
      var e,
        i,
        r = t[0];
      if ((ei(r) || tJ(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (i = eT.length; i-- && !eT[i].targetTest(r); );
        e = eT[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new iR(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    },
    e1 = function (t) {
      return t._gsap || eF(iu(t))[0]._gsap;
    },
    ek = function (t, e, i) {
      return (i = t[e]) && tJ(i)
        ? t[e]()
        : (ee(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    eA = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    e4 = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    e6 = function (t, e) {
      for (var i = e.length, r = 0; 0 > t.indexOf(e[r]) && ++r < i; );
      return r < i;
    },
    eB = function (t, e, i) {
      var r,
        n = et(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s];
      if ((n && (o.duration = t[1]), (o.parent = i), e)) {
        for (r = o; i && !("immediateRender" in r); )
          (r = i.vars.defaults || {}), (i = er(i.vars.inherit) && i.parent);
        (o.immediateRender = er(r.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return o;
    },
    eL = function () {
      var t,
        e,
        i = ex.length,
        r = ex.slice(0);
      for (e0 = {}, ex.length = 0, t = 0; t < i; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    e2 = function (t, e, i, r) {
      ex.length && eL(), t.render(e, i, r), ex.length && eL();
    },
    eO = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(ep).length < 2
        ? e
        : tZ(t)
        ? t.trim()
        : t;
    },
    e3 = function (t) {
      return t;
    },
    e5 = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    eP = function (t, e) {
      for (var i in e)
        i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
    },
    e7 = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    eR = function t(e, i) {
      for (var r in i)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (e[r] = ei(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
      return e;
    },
    eq = function (t, e) {
      var i,
        r = {};
      for (i in t) i in e || (r[i] = t[i]);
      return r;
    },
    ez = function (t) {
      var e = t.parent || t0,
        i = t.keyframes ? eP : e5;
      if (er(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    eM = function (t, e, i, r) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var n = e._prev,
        s = e._next;
      n ? (n._next = s) : t[i] === e && (t[i] = s),
        s ? (s._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    },
    eV = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    eH = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    ej = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    eW = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    eI = function (t) {
      return t._repeat ? eY(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    eY = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    eN = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    eX = function (t) {
      return (t._end = e4(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || tN) || 0)
      ));
    },
    eG = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = e4(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))
          )),
          eX(t),
          i._dirty || eH(i, t)),
        t
      );
    },
    eU = function (t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = eN(t.rawTime(), e)),
          (!e._dur || is(0, e.totalDuration(), i) - e._tTime > tN) &&
            e.render(i, !0)),
        eH(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -0.00000001;
      }
    },
    eK = function (t, e, i, r) {
      return (
        e.parent && eV(e),
        (e._start = e4(i + e._delay)),
        (e._end = e4(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        (function (t, e, i, r, n) {
          void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
          var s,
            o = t[r];
          if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
          o
            ? ((e._next = o._next), (o._next = e))
            : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = o),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        r || eU(t, e),
        t
      );
    },
    eQ = function (t, e) {
      return (
        (eD.ScrollTrigger || ev("scrollTrigger", e)) &&
        eD.ScrollTrigger.create(e, t)
      );
    },
    e9 = function (t, e, i, r) {
      return (
        iW(t, e),
        t._initted
          ? !i &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            tS !== i1.frame
            ? (ex.push(t), (t._lazy = [e, r]), 1)
            : void 0
          : 1
      );
    },
    eZ = function t(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (0 > i.rawTime() || t(i));
    },
    eJ = function (t, e, i, r) {
      var n = t._repeat,
        s = e4(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !r && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : e4(s * (n + 1) + t._rDelay * n)) : s),
        o && !r ? eG(t, (t._tTime = t._tDur * o)) : t.parent && eX(t),
        i || eH(t.parent, t),
        t
      );
    },
    it = function (t) {
      return t instanceof iz ? eH(t) : eJ(t, t._dur);
    },
    ie = { _start: 0, endTime: e8 },
    ii = function t(e, i) {
      var r,
        n,
        s = e.labels,
        o = e._recent || ie,
        a = e.duration() >= tY ? o.endTime(!1) : e._dur;
      return tZ(i) && (isNaN(i) || i in s)
        ? "<" === (r = i.charAt(0)) || ">" === r
          ? ("<" === r ? o._start : o.endTime(o._repeat >= 0)) +
            (parseFloat(i.substr(1)) || 0)
          : (r = i.indexOf("=")) < 0
          ? (i in s || (s[i] = a), s[i])
          : ((n = +(i.charAt(r - 1) + i.substr(r + 1))),
            r > 1 ? t(e, i.substr(0, r - 1)) + n : a + n)
        : null == i
        ? a
        : +i;
    },
    ir = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    is = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    io = function (t) {
      if ("string" != typeof t) return "";
      var e = e$.exec(t);
      return e ? t.substr(e.index + e[0].length) : "";
    },
    ia = [].slice,
    il = function (t, e) {
      return (
        t &&
        ei(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && ei(t[0]))) &&
        !t.nodeType &&
        t !== tC
      );
    },
    iu = function (t, e) {
      var i, r, n;
      return !tZ(t) || e || (!tw && ik())
        ? ea(t)
          ? ((i = t),
            (r = e),
            void 0 === n && (n = []),
            i.forEach(function (t) {
              var e;
              return (tZ(t) && !r) || il(t, 1)
                ? (e = n).push.apply(e, iu(t))
                : n.push(t);
            }) || n)
          : il(t)
          ? ia.call(t, 0)
          : t
          ? [t]
          : []
        : ia.call(tE.querySelectorAll(t), 0);
    },
    ic = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    ih = function (t) {
      if (tJ(t)) return t;
      var e = ei(t) ? t : { each: t },
        i = iO(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        s = {},
        o = r > 0 && r < 1,
        a = isNaN(r) || o,
        l = e.axis,
        u = r,
        c = r;
      return (
        tZ(r)
          ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && a && ((u = r[0]), (c = r[1])),
        function (t, o, h) {
          var f,
            d,
            p,
            $,
            D,
            g,
            m,
            v,
            _,
            y = (h || e).length,
            b = s[y];
          if (!b) {
            if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, tY])[1])) {
              for (
                m = -1e8;
                m < (m = h[_++].getBoundingClientRect().left) && _ < y;

              );
              _--;
            }
            for (
              b = s[y] = [],
                f = a ? Math.min(_, y) * u - 0.5 : r % _,
                d = a ? (y * c) / _ - 0.5 : (r / _) | 0,
                m = 0,
                v = tY,
                g = 0;
              g < y;
              g++
            )
              (p = (g % _) - f),
                ($ = d - ((g / _) | 0)),
                (b[g] = D =
                  l ? Math.abs("y" === l ? $ : p) : tK(p * p + $ * $)),
                D > m && (m = D),
                D < v && (v = D);
            "random" === r && ic(b),
              (b.max = m - v),
              (b.min = v),
              (b.v = y =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (_ > y
                      ? y - 1
                      : l
                      ? "y" === l
                        ? y / _
                        : _
                      : Math.max(_, y / _)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (b.b = y < 0 ? n - y : n),
              (b.u = io(e.amount || e.each) || 0),
              (i = i && y < 0 ? iL(i) : i);
          }
          return (
            (y = (b[t] - b.min) / b.max || 0),
            e4(b.b + (i ? i(y) : y) * b.v) + b.u
          );
        }
      );
    },
    id = function (t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (i) {
        var r = Math.round(parseFloat(i) / t) * t * e;
        return (r - (r % 1)) / e + (et(i) ? 0 : io(i));
      };
    },
    ip = function (t, e) {
      var i,
        r,
        n = ea(t);
      return (
        !n &&
          ei(t) &&
          ((i = n = t.radius || tY),
          t.values
            ? ((t = iu(t.values)), (r = !et(t[0])) && (i *= i))
            : (t = id(t.increment))),
        ir(
          e,
          n
            ? tJ(t)
              ? function (e) {
                  return Math.abs((r = t(e)) - e) <= i ? r : e;
                }
              : function (e) {
                  for (
                    var n,
                      s,
                      o = parseFloat(r ? e.x : e),
                      a = parseFloat(r ? e.y : 0),
                      l = tY,
                      u = 0,
                      c = t.length;
                    c--;

                  )
                    (n = r
                      ? (n = t[c].x - o) * n + (s = t[c].y - a) * s
                      : Math.abs(t[c] - o)) < l && ((l = n), (u = c));
                  return (
                    (u = !i || l <= i ? t[u] : e),
                    r || u === e || et(e) ? u : u + io(e)
                  );
                }
            : id(t)
        )
      );
    },
    i$ = function (t, e, i, r) {
      return ir(ea(t) ? !e : !0 === i ? ((i = 0), !1) : !r, function () {
        return ea(t)
          ? t[~~(Math.random() * t.length)]
          : (r = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    iD = function (t, e, i) {
      return ir(i, function (i) {
        return t[~~e(i)];
      });
    },
    ig = function (t) {
      for (var e, i, r, n, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (r = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (i = t.substr(e + 7, r - e - 7).match(n ? ep : eu)),
          (o +=
            t.substr(s, e - s) +
            i$(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (s = r + 1);
      return o + t.substr(s, t.length - s);
    },
    im = function (t, e, i, r, n) {
      var s = e - t,
        o = r - i;
      return ir(n, function (e) {
        return i + (((e - t) / s) * o || 0);
      });
    },
    iv = function (t, e, i) {
      var r,
        n,
        s,
        o = t.labels,
        a = tY;
      for (r in o)
        (n = o[r] - e) < 0 == !!i &&
          n &&
          a > (n = Math.abs(n)) &&
          ((s = r), (a = n));
      return s;
    },
    i_ = function (t, e, i) {
      var r,
        n,
        s = t.vars,
        o = s[e];
      if (o)
        return (
          (r = s[e + "Params"]),
          (n = s.callbackScope || t),
          i && ex.length && eL(),
          r ? o.apply(n, r) : o.call(n)
        );
    },
    iy = function (t) {
      return (
        eV(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        1 > t.progress() && i_(t, "onInterrupt"),
        t
      );
    },
    i8 = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        i = tJ(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: e8,
          render: re,
          add: iH,
          kill: rr,
          modifier: ri,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: i9, aliases: {}, register: 0 };
      if ((ik(), t !== r)) {
        if (eC[e]) return;
        e5(r, e5(eq(t, n), s)),
          e7(r.prototype, e7(n, eq(t, s))),
          (eC[(r.prop = e)] = r),
          t.targetTest && (eT.push(r), (eb[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      ey(e, r), t.register && t.register(rc, r, ro);
    },
    ib = 255,
    ix = {
      aqua: [0, ib, ib],
      lime: [0, ib, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ib],
      navy: [0, 0, 128],
      white: [ib, ib, ib],
      olive: [128, 128, 0],
      yellow: [ib, ib, 0],
      orange: [ib, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ib, 0, 0],
      pink: [ib, 192, 203],
      cyan: [0, ib, ib],
      transparent: [ib, ib, ib, 0],
    },
    i0 = function (t, e, i) {
      return (
        ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          ib +
          0.5) |
        0
      );
    },
    iC = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f,
        d = t ? (et(t) ? [t >> 16, (t >> 8) & ib, t & ib] : 0) : ix.black;
      if (!d) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ix[t]))
          d = ix[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((r = t.charAt(1)),
              (t =
                "#" +
                r +
                r +
                (n = t.charAt(2)) +
                n +
                (s = t.charAt(3)) +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (d = parseInt(t.substr(1, 6), 16)) >> 16,
              (d >> 8) & ib,
              d & ib,
              parseInt(t.substr(7), 16) / 255,
            ];
          d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ib, t & ib];
        } else if ("hsl" === t.substr(0, 3)) {
          if (((d = f = t.match(eu)), e)) {
            if (~t.indexOf("="))
              return (d = t.match(ec)), i && d.length < 4 && (d[3] = 1), d;
          } else
            (o = (+d[0] % 360) / 360),
              (a = +d[1] / 100),
              (r =
                2 * (l = +d[2] / 100) -
                (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
              d.length > 3 && (d[3] *= 1),
              (d[0] = i0(o + 1 / 3, r, n)),
              (d[1] = i0(o, r, n)),
              (d[2] = i0(o - 1 / 3, r, n));
        } else d = t.match(eu) || ix.transparent;
        d = d.map(Number);
      }
      return (
        e &&
          !f &&
          ((r = d[0] / ib),
          (l =
            ((u = Math.max(r, (n = d[1] / ib), (s = d[2] / ib))) +
              (c = Math.min(r, n, s))) /
            2),
          u === c
            ? (o = a = 0)
            : ((h = u - c),
              (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
              (o =
                u === r
                  ? (n - s) / h + (n < s ? 6 : 0)
                  : u === n
                  ? (s - r) / h + 2
                  : (r - n) / h + 4),
              (o *= 60)),
          (d[0] = ~~(o + 0.5)),
          (d[1] = ~~(100 * a + 0.5)),
          (d[2] = ~~(100 * l + 0.5))),
        i && d.length < 4 && (d[3] = 1),
        d
      );
    },
    iw = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(iT).forEach(function (t) {
          var n = t.match(eh) || [];
          e.push.apply(e, n), i.push((r += n.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    iE = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a = "",
        l = (t + a).match(iT),
        u = e ? "hsla(" : "rgba(",
        c = 0;
      if (!l) return t;
      if (
        ((l = l.map(function (t) {
          return (
            (t = iC(t, e, 1)) &&
            u +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((s = iw(t)), (r = i.c).join(a) !== s.c.join(a)))
      )
        for (o = (n = t.replace(iT, "1").split(eh)).length - 1; c < o; c++)
          a +=
            n[c] +
            (~r.indexOf(c)
              ? l.shift() || u + "0,0,0,0)"
              : (s.length ? s : l.length ? l : i).shift());
      if (!n)
        for (o = (n = t.split(iT)).length - 1; c < o; c++) a += n[c] + l[c];
      return a + n[o];
    },
    iT = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in ix) e += "|" + t + "\\b";
      return RegExp(e + ")", "gi");
    })(),
    iS = /hsl[a]?\(/,
    iF = function (t) {
      var e,
        i = t.join(" ");
      if (((iT.lastIndex = 0), iT.test(i)))
        return (
          (e = iS.test(i)),
          (t[1] = iE(t[1], e)),
          (t[0] = iE(t[0], e, iw(t[1]))),
          !0
        );
    },
    i1 =
      ((tO = 500),
      (t3 = 33),
      (tP = t5 = (t2 = Date.now)()),
      (tR = t7 = 1e3 / 240),
      (tz = function t(e) {
        var i,
          r,
          n,
          s,
          o = t2() - tP,
          a = !0 === e;
        if (
          (o > tO && (t5 += o - t3),
          ((i = (n = (tP += o) - t5) - tR) > 0 || a) &&
            ((s = ++t6.frame),
            (tB = n - 1e3 * t6.time),
            (t6.time = n /= 1e3),
            (tR += i + (i >= t7 ? 4 : t7 - i)),
            (r = 1)),
          a || (tk = tA(t)),
          r)
        )
          for (tL = 0; tL < tq.length; tL++) tq[tL](n, tB, s, e);
      }),
      (t6 = {
        time: 0,
        frame: 0,
        tick: function () {
          tz(!0);
        },
        deltaRatio: function (t) {
          return tB / (1e3 / (t || 60));
        },
        wake: function () {
          tT &&
            (!tw &&
              en() &&
              ((tE = (tC = tw = window).document || {}),
              (eD.gsap = rc),
              (tC.gsapVersions || (tC.gsapVersions = [])).push(rc.version),
              em(eg || tC.GreenSockGlobals || (!tC.gsap && tC) || {}),
              (t4 = tC.requestAnimationFrame)),
            tk && t6.sleep(),
            (tA =
              t4 ||
              function (t) {
                return setTimeout(t, (tR - 1e3 * t6.time + 1) | 0);
              }),
            (t1 = 1),
            tz(2));
        },
        sleep: function () {
          (t4 ? tC.cancelAnimationFrame : clearTimeout)(tk),
            (t1 = 0),
            (tA = e8);
        },
        lagSmoothing: function (t, e) {
          t3 = Math.min(e, (tO = t || 1e8), 0);
        },
        fps: function (t) {
          (t7 = 1e3 / (t || 240)), (tR = 1e3 * t6.time + t7);
        },
        add: function (t) {
          0 > tq.indexOf(t) && tq.push(t), ik();
        },
        remove: function (t) {
          var e;
          ~(e = tq.indexOf(t)) && tq.splice(e, 1) && tL >= e && tL--;
        },
        _listeners: (tq = []),
      })),
    ik = function () {
      return !t1 && i1.wake();
    },
    iA = {},
    i4 = /^[\d.\-M][\d.\-,\s]/,
    i6 = /["']/g,
    iB = function (t) {
      for (
        var e,
          i,
          r,
          n = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          l = s.length;
        a < l;
        a++
      )
        (i = s[a]),
          (e = a !== l - 1 ? i.lastIndexOf(",") : i.length),
          (r = i.substr(0, e)),
          (n[o] = isNaN(r) ? r.replace(i6, "").trim() : +r),
          (o = i.substr(e + 1).trim());
      return n;
    },
    iL = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    i2 = function t(e, i) {
      for (var r, n = e._first; n; )
        n instanceof iz
          ? t(n, i)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === i ||
            (n.timeline
              ? t(n.timeline, i)
              : ((r = n._ease),
                (n._ease = n._yEase),
                (n._yEase = r),
                (n._yoyo = i))),
          (n = n._next);
    },
    iO = function (t, e) {
      var i, r, n, s, o, a, l;
      return (
        (t &&
          (tJ(t)
            ? t
            : iA[t] ||
              ((l = iA[(a = ((i = t) + "").split("("))[0]]) &&
              a.length > 1 &&
              l.config
                ? l.config.apply(
                    null,
                    ~i.indexOf("{")
                      ? [iB(a[1])]
                      : ((n = (r = i).indexOf("(") + 1),
                        (s = r.indexOf(")")),
                        (o = r.indexOf("(", n)),
                        r.substring(n, ~o && o < s ? r.indexOf(")", s + 1) : s))
                          .split(",")
                          .map(eO)
                  )
                : iA._CE && i4.test(i)
                ? iA._CE("", i)
                : l))) ||
        e
      );
    },
    i3 = function (t, e, i, r) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        s = { easeIn: e, easeOut: i, easeInOut: r };
      return (
        eA(t, function (t) {
          for (var e in ((iA[t] = eD[t] = s),
          (iA[(n = t.toLowerCase())] = i),
          s))
            iA[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = iA[t + "." + e] = s[e];
        }),
        s
      );
    },
    i5 = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    iP = function t(e, i, r) {
      var n = i >= 1 ? i : 1,
        s = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        o = (s / tX) * (Math.asin(1 / n) || 0),
        a = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * t9((t - o) * s) + 1;
        },
        l =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : i5(a);
      return (
        (s = tX / s),
        (l.config = function (i, r) {
          return t(e, i, r);
        }),
        l
      );
    },
    i7 = function t(e, i) {
      void 0 === i && (i = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
        },
        n =
          "out" === e
            ? r
            : "in" === e
            ? function (t) {
                return 1 - r(1 - t);
              }
            : i5(r);
      return (
        (n.config = function (i) {
          return t(e, i);
        }),
        n
      );
    };
  eA("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    i3(
      t + ",Power" + (i - 1),
      e
        ? function (t) {
            return Math.pow(t, i);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, i);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, i) / 2
          : 1 - Math.pow(2 * (1 - t), i) / 2;
      }
    );
  }),
    (iA.Linear.easeNone = iA.none = iA.Linear.easeIn),
    i3("Elastic", iP("in"), iP("out"), iP()),
    (tM = 7.5625),
    (tH = 1 / (tV = 2.75)),
    i3(
      "Bounce",
      function (t) {
        return 1 - tj(1 - t);
      },
      (tj = function (t) {
        return t < tH
          ? tM * t * t
          : t < 0.7272727272727273
          ? tM * Math.pow(t - 1.5 / tV, 2) + 0.75
          : t < 0.9090909090909092
          ? tM * (t -= 2.25 / tV) * t + 0.9375
          : tM * Math.pow(t - 2.625 / tV, 2) + 0.984375;
      })
    ),
    i3("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    i3("Circ", function (t) {
      return -(tK(1 - t * t) - 1);
    }),
    i3("Sine", function (t) {
      return 1 === t ? 1 : 1 - tQ(t * tG);
    }),
    i3("Back", i7("in"), i7("out"), i7()),
    (iA.SteppedEase =
      iA.steps =
      eD.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
              r = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((r * is(0, 0.99999999, t)) | 0) + n) * i;
            };
          },
        }),
    (tI.ease = iA["quad.out"]),
    eA(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (eS += t + "," + t + "Params,");
      }
    );
  var iR = function (t, e) {
      (this.id = tU++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : ek),
        (this.set = e ? e.getSetter : i9);
    },
    iq = (function () {
      function t(t, e) {
        var i = t.parent || t0;
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          eJ(this, +t.duration, 1, 1),
          (this.data = t.data),
          t1 || i1.wake(),
          i && eK(i, this, e || 0 === e ? e : i._time, 1),
          t.reversed && this.reverse(),
          t.paused && this.paused(!0);
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              eJ(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((ik(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (eG(this, t), !i._dp || i.parent || eU(i, this); i.parent; )
              i.parent._time !==
                i._start +
                  (i._ts >= 0
                    ? i._tTime / i._ts
                    : -((i.totalDuration() - i._tTime) / i._ts)) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              eK(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime === t &&
              (this._dur || e) &&
              (!this._initted || Math.abs(this._zTime) !== tN) &&
              (t || this._initted || (!this.add && !this._ptLookup))) ||
              (this._ts || (this._pTime = t), e2(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + eI(this)) % this._dur ||
                  (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  eI(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * i, e)
            : this._repeat
            ? eY(this._tTime, i) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length)
            return -0.00000001 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? eN(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -0.00000001 === t ? 0 : this._rts),
            ej(this.totalTime(is(-this._delay, this._tDur, e), !0))
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ik(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= tN) &&
                        Math.abs(this._zTime) !== tN
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && eK(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            (er(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && 1 > this.totalProgress()))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? eN(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
            (i = e._start + i / (e._ts || 1)), (e = e._dp);
          return i;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), it(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), it(this))
            : this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(ii(this, t), er(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, er(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -0.00000001 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (
            (this._initted = this._act = 0), (this._zTime = -0.00000001), this
          );
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            i = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= i &&
              t < this.endTime(!0) - tN
            )
          );
        }),
        (e.eventCallback = function (t, e, i) {
          var r = this.vars;
          return arguments.length > 1
            ? (e
                ? ((r[t] = e),
                  i && (r[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete r[t],
              this)
            : r[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (i) {
            var r = tJ(t) ? t : e3,
              n = function () {
                var t = e.then;
                (e.then = null),
                  tJ(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                  i(r),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (e.kill = function () {
          iy(this);
        }),
        t
      );
    })();
  e5(iq.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -0.00000001,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var iz = (function (t) {
    function e(e, i) {
      var r;
      return (
        void 0 === e && (e = {}),
        ((r = t.call(this, e, i) || this).labels = {}),
        (r.smoothChildTiming = !!e.smoothChildTiming),
        (r.autoRemoveChildren = !!e.autoRemoveChildren),
        (r._sort = er(e.sortChildren)),
        r.parent && eU(r.parent, t8(r)),
        e.scrollTrigger && eQ(t8(r), e.scrollTrigger),
        r
      );
    }
    tb(e, t);
    var i = e.prototype;
    return (
      (i.to = function (t, e, i) {
        return (
          new iX(t, eB(arguments, 0, this), ii(this, et(e) ? arguments[3] : i)),
          this
        );
      }),
      (i.from = function (t, e, i) {
        return (
          new iX(t, eB(arguments, 1, this), ii(this, et(e) ? arguments[3] : i)),
          this
        );
      }),
      (i.fromTo = function (t, e, i, r) {
        return (
          new iX(t, eB(arguments, 2, this), ii(this, et(e) ? arguments[4] : r)),
          this
        );
      }),
      (i.set = function (t, e, i) {
        return (
          (e.duration = 0),
          (e.parent = this),
          ez(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new iX(t, e, ii(this, i), 1),
          this
        );
      }),
      (i.call = function (t, e, i) {
        return eK(this, iX.delayedCall(0, t, e), ii(this, i));
      }),
      (i.staggerTo = function (t, e, i, r, n, s, o) {
        return (
          (i.duration = e),
          (i.stagger = i.stagger || r),
          (i.onComplete = s),
          (i.onCompleteParams = o),
          (i.parent = this),
          new iX(t, i, ii(this, n)),
          this
        );
      }),
      (i.staggerFrom = function (t, e, i, r, n, s, o) {
        return (
          (i.runBackwards = 1),
          (ez(i).immediateRender = er(i.immediateRender)),
          this.staggerTo(t, e, i, r, n, s, o)
        );
      }),
      (i.staggerFromTo = function (t, e, i, r, n, s, o, a) {
        return (
          (r.startAt = i),
          (ez(r).immediateRender = er(r.immediateRender)),
          this.staggerTo(t, e, r, n, s, o, a)
        );
      }),
      (i.render = function (t, e, i) {
        var r,
          n,
          s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          d,
          p,
          $ = this._time,
          D = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          m = this !== t0 && t > D - tN && t >= 0 ? D : t < tN ? 0 : t,
          v = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (m !== this._tTime || i || v) {
          if (
            ($ !== this._time &&
              g &&
              ((m += this._time - $), (t += this._time - $)),
            (r = m),
            (h = this._start),
            (l = !(c = this._ts)),
            v && (g || ($ = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((d = this._yoyo),
              (a = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * a + t, e, i);
            if (
              ((r = e4(m % a)),
              m === D
                ? ((o = this._repeat), (r = g))
                : ((o = ~~(m / a)) && o === m / a && ((r = g), o--),
                  r > g && (r = g)),
              (f = eY(this._tTime, a)),
              !$ && this._tTime && f !== o && (f = o),
              d && 1 & o && ((r = g - r), (p = 1)),
              o !== f && !this._lock)
            ) {
              var _ = d && 1 & f,
                y = _ === (d && 1 & o);
              if (
                (o < f && (_ = !_),
                ($ = _ ? 0 : g),
                (this._lock = 1),
                (this.render($ || (p ? 0 : e4(o * a)), e, !g)._lock = 0),
                !e && this.parent && i_(this, "onRepeat"),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                ($ && $ !== this._time) ||
                  !this._ts !== l ||
                  (this.vars.onRepeat && !this.parent && !this._act) ||
                  ((g = this._dur),
                  (D = this._tDur),
                  y &&
                    ((this._lock = 2),
                    ($ = _ ? g : -0.0001),
                    this.render($, !0)),
                  (this._lock = 0),
                  !this._ts && !l))
              )
                return this;
              i2(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (u = (function (t, e, i) {
                var r;
                if (i > e)
                  for (r = t._first; r && r._start <= i; ) {
                    if (!r._dur && "isPause" === r.data && r._start > e)
                      return r;
                    r = r._next;
                  }
                else
                  for (r = t._last; r && r._start >= i; ) {
                    if (!r._dur && "isPause" === r.data && r._start < e)
                      return r;
                    r = r._prev;
                  }
              })(this, e4($), e4(r))) &&
              (m -= r - (r = u._start)),
            (this._tTime = m),
            (this._time = r),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              ($ = 0)),
            $ || !r || e || i_(this, "onStart"),
            r >= $ && t >= 0)
          )
            for (n = this._first; n; ) {
              if (
                ((s = n._next), (n._act || r >= n._start) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (r - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (r - n._start) * n._ts,
                    e,
                    i
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (u = 0), s && (m += this._zTime = -0.00000001);
                  break;
                }
              }
              n = s;
            }
          else {
            n = this._last;
            for (var b = t < 0 ? t : r; n; ) {
              if (
                ((s = n._prev), (n._act || b <= n._end) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (b - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (b - n._start) * n._ts,
                    e,
                    i
                  ),
                  r !== this._time || (!this._ts && !l))
                ) {
                  (u = 0), s && (m += this._zTime = b ? -0.00000001 : tN);
                  break;
                }
              }
              n = s;
            }
          }
          if (
            u &&
            !e &&
            (this.pause(),
            (u.render(r >= $ ? 0 : -0.00000001)._zTime = r >= $ ? 1 : -1),
            this._ts)
          )
            return (this._start = h), eX(this), this.render(t, e, i);
          this._onUpdate && !e && i_(this, "onUpdate", !0),
            ((m === D && D >= this.totalDuration()) || (!m && $)) &&
              ((h !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !g) &&
                  ((m === D && this._ts > 0) || (!m && this._ts < 0)) &&
                  eV(this, 1),
                !e &&
                  (!(t < 0) || $) &&
                  (m || $) &&
                  (i_(this, m === D ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(m < D && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (t, e) {
        var i = this;
        if ((et(e) || (e = ii(this, e)), !(t instanceof iq))) {
          if (ea(t))
            return (
              t.forEach(function (t) {
                return i.add(t, e);
              }),
              this
            );
          if (tZ(t)) return this.addLabel(t, e);
          if (!tJ(t)) return this;
          t = iX.delayedCall(0, t);
        }
        return this !== t ? eK(this, t, e) : this;
      }),
      (i.getChildren = function (t, e, i, r) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === i && (i = !0),
          void 0 === r && (r = -1e8);
        for (var n = [], s = this._first; s; )
          s._start >= r &&
            (s instanceof iX
              ? e && n.push(s)
              : (i && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, i)))),
            (s = s._next);
        return n;
      }),
      (i.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
          if (e[i].vars.id === t) return e[i];
      }),
      (i.remove = function (t) {
        return tZ(t)
          ? this.removeLabel(t)
          : tJ(t)
          ? this.killTweensOf(t)
          : (eM(this, t),
            t === this._recent && (this._recent = this._last),
            eH(this));
      }),
      (i.totalTime = function (e, i) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = e4(
                i1.time -
                  (this._ts > 0
                    ? e / this._ts
                    : -((this.totalDuration() - e) / this._ts))
              )),
            t.prototype.totalTime.call(this, e, i),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (t, e) {
        return (this.labels[t] = ii(this, e)), this;
      }),
      (i.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (i.addPause = function (t, e, i) {
        var r = iX.delayedCall(0, e || e8, i);
        return (
          (r.data = "isPause"), (this._hasPause = 1), eK(this, r, ii(this, t))
        );
      }),
      (i.removePause = function (t) {
        var e = this._first;
        for (t = ii(this, t); e; )
          e._start === t && "isPause" === e.data && eV(e), (e = e._next);
      }),
      (i.killTweensOf = function (t, e, i) {
        for (var r = this.getTweensOf(t, i), n = r.length; n--; )
          iM !== r[n] && r[n].kill(t, e);
        return this;
      }),
      (i.getTweensOf = function (t, e) {
        for (var i, r = [], n = iu(t), s = this._first, o = et(e); s; )
          s instanceof iX
            ? e6(s._targets, n) &&
              (o
                ? (!iM || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              r.push(s)
            : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
            (s = s._next);
        return r;
      }),
      (i.tweenTo = function (t, e) {
        e = e || {};
        var i = this,
          r = ii(i, t),
          n = e,
          s = n.startAt,
          o = n.onStart,
          a = n.onStartParams,
          l = n.immediateRender,
          u = iX.to(
            i,
            e5(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: r,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (r - (s && "time" in s ? s.time : i._time)) / i.timeScale()
                  ) ||
                  tN,
                onStart: function () {
                  i.pause();
                  var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                  u._dur !== t && eJ(u, t, 0, 1).render(u._time, !0, !0),
                    o && o.apply(u, a || []);
                },
              },
              e
            )
          );
        return l ? u.render(0) : u;
      }),
      (i.tweenFromTo = function (t, e, i) {
        return this.tweenTo(e, e5({ startAt: { time: ii(this, t) } }, i));
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (t) {
        return void 0 === t && (t = this._time), iv(this, ii(this, t));
      }),
      (i.previousLabel = function (t) {
        return void 0 === t && (t = this._time), iv(this, ii(this, t), 1);
      }),
      (i.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + tN);
      }),
      (i.shiftChildren = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var r, n = this._first, s = this.labels; n; )
          n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (r in s) s[r] >= i && (s[r] += t);
        return eH(this);
      }),
      (i.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (i.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, i = this._first; i; )
          (e = i._next), this.remove(i), (i = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          eH(this)
        );
      }),
      (i.totalDuration = function (t) {
        var e,
          i,
          r,
          n = 0,
          s = this,
          o = s._last,
          a = tY;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (r = s.parent; o; )
            (e = o._prev),
              o._dirty && o.totalDuration(),
              (i = o._start) > a && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (eK(s, o, i - o._delay, 1)._lock = 0))
                : (a = i),
              i < 0 &&
                o._ts &&
                ((n -= i),
                ((!r && !s._dp) || (r && r.smoothChildTiming)) &&
                  ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                s.shiftChildren(-i, !1, -1 / 0),
                (a = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = e);
          eJ(s, s === t0 && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (e.updateRoot = function (t) {
        if ((t0._ts && (e2(t0, eN(t, t0)), (tS = i1.frame)), i1.frame >= eE)) {
          eE += tW.autoSleep || 120;
          var e = t0._first;
          if ((!e || !e._ts) && tW.autoSleep && i1._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || i1.sleep();
          }
        }
      }),
      e
    );
  })(iq);
  e5(iz.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var iM,
    iV = function (t, e, i, r, n, s, o) {
      var a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        $ = new ro(this._pt, t, e, 0, 1, rt, null, n),
        D = 0,
        g = 0;
      for (
        $.b = i,
          $.e = r,
          i += "",
          (d = ~(r += "").indexOf("random(")) && (r = ig(r)),
          s && (s((p = [i, r]), t, e), (i = p[0]), (r = p[1])),
          l = i.match(ef) || [];
        (a = ef.exec(r));

      )
        (c = a[0]),
          (h = r.substring(D, a.index)),
          u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
          c !== l[g++] &&
            ((f = parseFloat(l[g - 1]) || 0),
            ($._pt = {
              _next: $._pt,
              p: h || 1 === g ? h : ",",
              s: f,
              c:
                "=" === c.charAt(1)
                  ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1)
                  : parseFloat(c) - f,
              m: u && u < 4 ? Math.round : 0,
            }),
            (D = ef.lastIndex));
      return (
        ($.c = D < r.length ? r.substring(D, r.length) : ""),
        ($.fp = o),
        (ed.test(r) || d) && ($.e = 0),
        (this._pt = $),
        $
      );
    },
    iH = function (t, e, i, r, n, s, o, a, l) {
      tJ(r) && (r = r(n || 0, t, s));
      var u,
        c = t[e],
        h =
          "get" !== i
            ? i
            : tJ(c)
            ? l
              ? t[
                  e.indexOf("set") || !tJ(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : c,
        f = tJ(c) ? (l ? iK : iU) : iG;
      if (
        (tZ(r) &&
          (~r.indexOf("random(") && (r = ig(r)),
          "=" === r.charAt(1) &&
            (r =
              parseFloat(h) +
              parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
              (io(h) || 0))),
        h !== r)
      )
        return isNaN(h * r)
          ? (c || e in t || ev(e, r),
            iV.call(this, t, e, h, r, f, a || tW.stringFilter, l))
          : ((u = new ro(
              this._pt,
              t,
              e,
              +h || 0,
              r - (h || 0),
              "boolean" == typeof c ? iJ : iZ,
              0,
              f
            )),
            l && (u.fp = l),
            o && u.modifier(o, this, t),
            (this._pt = u));
    },
    ij = function (t, e, i, r, n, s) {
      var o, a, l, u;
      if (
        eC[t] &&
        !1 !==
          (o = new eC[t]()).init(
            n,
            o.rawVars
              ? e[t]
              : (function (t, e, i, r, n) {
                  if (
                    (tJ(t) && (t = iI(t, n, e, i, r)),
                    !ei(t) || (t.style && t.nodeType) || ea(t) || eo(t))
                  )
                    return tZ(t) ? iI(t, n, e, i, r) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = iI(t[s], n, e, i, r);
                  return o;
                })(e[t], r, n, s, i),
            i,
            r,
            s
          ) &&
        ((i._pt = a = new ro(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
        i !== tF)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], u = o._props.length; u--; )
          l[o._props[u]] = a;
      return o;
    },
    iW = function t(e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        $,
        D = e.vars,
        g = D.ease,
        m = D.startAt,
        v = D.immediateRender,
        _ = D.lazy,
        y = D.onUpdate,
        b = D.onUpdateParams,
        x = D.callbackScope,
        C = D.runBackwards,
        w = D.yoyoEase,
        E = D.keyframes,
        T = D.autoRevert,
        S = e._dur,
        F = e._startAt,
        k = e._targets,
        A = e.parent,
        B = A && "nested" === A.data ? A.parent._targets : k,
        L = "auto" === e._overwrite && !tx,
        O = e.timeline;
      if (
        (!O || (E && g) || (g = "none"),
        (e._ease = iO(g, tI.ease)),
        (e._yEase = w ? iL(iO(!0 === w ? g : w, tI.ease)) : 0),
        w &&
          e._yoyo &&
          !e._repeat &&
          ((w = e._yEase), (e._yEase = e._ease), (e._ease = w)),
        !O)
      ) {
        if (
          ((p = (c = k[0] ? e1(k[0]).harness : 0) && D[c.prop]),
          (r = eq(D, eb)),
          F && F.render(-1, !0).kill(),
          m)
        ) {
          if (
            (eV(
              (e._startAt = iX.set(
                k,
                e5(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: er(_),
                    startAt: null,
                    delay: 0,
                    onUpdate: y,
                    onUpdateParams: b,
                    callbackScope: x,
                    stagger: 0,
                  },
                  m
                )
              ))
            ),
            v)
          ) {
            if (i > 0) T || (e._startAt = 0);
            else if (S && !(i < 0 && F)) return void (i && (e._zTime = i));
          } else !1 === T && (e._startAt = 0);
        } else if (C && S) {
          if (F) T || (e._startAt = 0);
          else if (
            (i && (v = !1),
            (s = e5(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: v && er(_),
                immediateRender: v,
                stagger: 0,
                parent: A,
              },
              r
            )),
            p && (s[c.prop] = p),
            eV((e._startAt = iX.set(k, s))),
            v)
          ) {
            if (!i) return;
          } else t(e._startAt, tN);
        }
        for (
          e._pt = 0, _ = (S && er(_)) || (_ && !S), n = 0;
          n < k.length;
          n++
        ) {
          if (
            ((u = (a = k[n])._gsap || eF(k)[n]._gsap),
            (e._ptLookup[n] = f = {}),
            e0[u.id] && ex.length && eL(),
            (d = B === k ? n : B.indexOf(a)),
            c &&
              !1 !== (h = new c()).init(a, p || r, e, d, B) &&
              ((e._pt = o =
                new ro(e._pt, a, h.name, 0, 1, h.render, h, 0, h.priority)),
              h._props.forEach(function (t) {
                f[t] = o;
              }),
              h.priority && (l = 1)),
            !c || p)
          )
            for (s in r)
              eC[s] && (h = ij(s, r, e, d, a, B))
                ? h.priority && (l = 1)
                : (f[s] = o =
                    iH.call(e, a, s, "get", r[s], d, B, 0, D.stringFilter));
          e._op && e._op[n] && e.kill(a, e._op[n]),
            L &&
              e._pt &&
              ((iM = e),
              t0.killTweensOf(a, f, e.globalTime(0)),
              ($ = !e.parent),
              (iM = 0)),
            e._pt && _ && (e0[u.id] = 1);
        }
        l && rs(e), e._onInit && e._onInit(e);
      }
      (e._from = !O && !!D.runBackwards),
        (e._onUpdate = y),
        (e._initted = (!e._op || e._pt) && !$);
    },
    iI = function (t, e, i, r, n) {
      return tJ(t)
        ? t.call(e, i, r, n)
        : tZ(t) && ~t.indexOf("random(")
        ? ig(t)
        : t;
    },
    iY = eS + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    iN = (iY + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    iX = (function (t) {
      function e(e, i, r, n) {
        "number" == typeof i && ((r.duration = i), (i = r), (r = null));
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          d,
          p = (s = t.call(this, n ? i : ez(i), r) || this).vars,
          $ = p.duration,
          D = p.delay,
          g = p.immediateRender,
          m = p.stagger,
          v = p.overwrite,
          _ = p.keyframes,
          y = p.defaults,
          b = p.scrollTrigger,
          x = p.yoyoEase,
          C = s.parent,
          w = (ea(e) || eo(e) ? et(e[0]) : "length" in i) ? [e] : iu(e);
        if (
          ((s._targets = w.length
            ? eF(w)
            : e_(
                "GSAP target " + e + " not found. https://greensock.com",
                !tW.nullTargetWarn
              ) || []),
          (s._ptLookup = []),
          (s._overwrite = v),
          _ || m || es($) || es(D))
        ) {
          if (
            ((i = s.vars),
            (o = s.timeline =
              new iz({ data: "nested", defaults: y || {} })).kill(),
            (o.parent = o._dp = t8(s)),
            (o._start = 0),
            _)
          )
            e5(o.vars.defaults, { ease: "none" }),
              _.forEach(function (t) {
                return o.to(w, t, ">");
              });
          else {
            if (((u = w.length), (f = m ? ih(m) : e8), ei(m)))
              for (c in m) ~iY.indexOf(c) && (d || (d = {}), (d[c] = m[c]));
            for (a = 0; a < u; a++) {
              for (c in ((l = {}), i)) 0 > iN.indexOf(c) && (l[c] = i[c]);
              (l.stagger = 0),
                x && (l.yoyoEase = x),
                d && e7(l, d),
                (h = w[a]),
                (l.duration = +iI($, t8(s), a, h, w)),
                (l.delay = (+iI(D, t8(s), a, h, w) || 0) - s._delay),
                !m &&
                  1 === u &&
                  l.delay &&
                  ((s._delay = D = l.delay), (s._start += D), (l.delay = 0)),
                o.to(h, l, f(a, h, w));
            }
            o.duration() ? ($ = D = 0) : (s.timeline = 0);
          }
          $ || s.duration(($ = o.duration()));
        } else s.timeline = 0;
        return (
          !0 !== v || tx || ((iM = t8(s)), t0.killTweensOf(w), (iM = 0)),
          C && eU(C, t8(s)),
          (g ||
            (!$ &&
              !_ &&
              s._start === e4(C._time) &&
              er(g) &&
              eW(t8(s)) &&
              "nested" !== C.data)) &&
            ((s._tTime = -0.00000001), s.render(Math.max(0, -D))),
          b && eQ(t8(s), b),
          s
        );
      }
      tb(e, t);
      var i = e.prototype;
      return (
        (i.render = function (t, e, i) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f = this._time,
            d = this._tDur,
            p = this._dur,
            $ = t > d - tN && t >= 0 ? d : t < tN ? 0 : t;
          if (p) {
            if (
              $ !== this._tTime ||
              !t ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((r = $), (c = this.timeline), this._repeat)) {
                if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * o + t, e, i);
                if (
                  ((r = e4($ % o)),
                  $ === d
                    ? ((s = this._repeat), (r = p))
                    : ((s = ~~($ / o)) && s === $ / o && ((r = p), s--),
                      r > p && (r = p)),
                  (l = this._yoyo && 1 & s) && ((h = this._yEase), (r = p - r)),
                  (a = eY(this._tTime, o)),
                  r === f && !i && this._initted)
                )
                  return this;
                s !== a &&
                  (c && this._yEase && i2(c, l),
                  !this.vars.repeatRefresh ||
                    l ||
                    this._lock ||
                    ((this._lock = i = 1),
                    (this.render(e4(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (e9(this, t < 0 ? t : r, i, e))
                  return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, i);
              }
              for (
                this._tTime = $,
                  this._time = r,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = u = (h || this._ease)(r / p),
                  this._from && (this.ratio = u = 1 - u),
                  !r || f || e || i_(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              (c &&
                c.render(
                  t < 0 ? t : !r && l ? -0.00000001 : c._dur * u,
                  e,
                  i
                )) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                  i_(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  i_(this, "onRepeat"),
                ($ !== this._tDur && $) ||
                  this._tTime !== $ ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (t || !p) &&
                    (($ === this._tDur && this._ts > 0) ||
                      (!$ && this._ts < 0)) &&
                    eV(this, 1),
                  !e &&
                    (!(t < 0) || f) &&
                    ($ || f) &&
                    (i_(this, $ === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !($ < d && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, i, r) {
              var n,
                s,
                o,
                a = t.ratio,
                l =
                  e < 0 ||
                  (!e &&
                    ((!t._start && eZ(t)) ||
                      ((t._ts < 0 || t._dp._ts < 0) &&
                        "isFromStart" !== t.data &&
                        "isStart" !== t.data)))
                    ? 0
                    : 1,
                u = t._rDelay,
                c = 0;
              if (
                (u &&
                  t._repeat &&
                  ((c = is(0, t._tDur, e)),
                  (s = eY(c, u)),
                  (o = eY(t._tTime, u)),
                  t._yoyo && 1 & s && (l = 1 - l),
                  s !== o &&
                    ((a = 1 - l),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                l !== a || r || t._zTime === tN || (!e && t._zTime))
              ) {
                if (!t._initted && e9(t, e, r, i)) return;
                for (
                  o = t._zTime,
                    t._zTime = e || (i ? tN : 0),
                    i || (i = e && !o),
                    t.ratio = l,
                    t._from && (l = 1 - l),
                    t._time = 0,
                    t._tTime = c,
                    n = t._pt;
                  n;

                )
                  n.r(l, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !i && i_(t, "onUpdate"),
                  c && t._repeat && !i && t.parent && i_(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === l &&
                    (l && eV(t, 1),
                    i ||
                      (i_(t, l ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, i);
          return this;
        }),
        (i.targets = function () {
          return this._targets;
        }),
        (i.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (i.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? iy(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, iM && !0 !== iM.vars.overwrite)
                ._first || iy(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                eJ(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c = this._targets,
            h = t ? iu(t) : c,
            f = this._ptLookup,
            d = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var i = t.length, r = i === e.length;
                r && i-- && t[i] === e[i];

              );
              return i < 0;
            })(c, h)
          )
            return "all" === e && (this._pt = 0), iy(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (tZ(e) &&
                  ((a = {}),
                  eA(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var i,
                    r,
                    n,
                    s,
                    o = t[0] ? e1(t[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return e;
                  for (r in ((i = e7({}, e)), a))
                    if ((r in i))
                      for (n = (s = a[r].split(",")).length; n--; )
                        i[s[n]] = i[r];
                  return i;
                })(c, e))),
              u = c.length;
            u--;

          )
            if (~h.indexOf(c[u]))
              for (a in ((n = f[u]),
              "all" === e
                ? ((r[u] = e), (o = n), (s = {}))
                : ((s = r[u] = r[u] || {}), (o = e)),
              o))
                (l = n && n[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || eM(this, l, "_pt"),
                  delete n[a]),
                  "all" !== s && (s[a] = 1);
          return this._initted && !this._pt && d && iy(this), this;
        }),
        (e.to = function (t, i) {
          return new e(t, i, arguments[2]);
        }),
        (e.from = function (t, i) {
          return new e(t, eB(arguments, 1));
        }),
        (e.delayedCall = function (t, i, r, n) {
          return new e(i, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (e.fromTo = function (t, i, r) {
          return new e(t, eB(arguments, 2));
        }),
        (e.set = function (t, i) {
          return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
        }),
        (e.killTweensOf = function (t, e, i) {
          return t0.killTweensOf(t, e, i);
        }),
        e
      );
    })(iq);
  e5(iX.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    eA("staggerTo,staggerFrom,staggerFromTo", function (t) {
      iX[t] = function () {
        var e = new iz(),
          i = ia.call(arguments, 0);
        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var iG = function (t, e, i) {
      return (t[e] = i);
    },
    iU = function (t, e, i) {
      return t[e](i);
    },
    iK = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    iQ = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    i9 = function (t, e) {
      return tJ(t[e]) ? iU : ee(t[e]) && t.setAttribute ? iQ : iG;
    },
    iZ = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    iJ = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    rt = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    re = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    ri = function (t, e, i, r) {
      for (var n, s = this._pt; s; )
        (n = s._next), s.p === r && s.modifier(t, e, i), (s = n);
    },
    rr = function (t) {
      for (var e, i, r = this._pt; r; )
        (i = r._next),
          (r.p !== t || r.op) && r.op !== t
            ? r.dep || (e = 1)
            : eM(this, r, "_pt"),
          (r = i);
      return !e;
    },
    rn = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    rs = function (t) {
      for (var e, i, r, n, s = t._pt; s; ) {
        for (e = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
        (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s),
          (s._next = i) ? (i._prev = s) : (n = s),
          (s = e);
      }
      t._pt = r;
    },
    ro = (function () {
      function t(t, e, i, r, n, s, o, a, l) {
        (this.t = e),
          (this.s = r),
          (this.c = n),
          (this.p = i),
          (this.r = s || iZ),
          (this.d = o || this),
          (this.set = a || iG),
          (this.pr = l || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = rn),
            (this.m = t),
            (this.mt = i),
            (this.tween = e);
        }),
        t
      );
    })();
  eA(
    eS +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (eb[t] = 1);
    }
  ),
    (eD.TweenMax = eD.TweenLite = iX),
    (eD.TimelineLite = eD.TimelineMax = iz),
    (t0 = new iz({
      sortChildren: !1,
      defaults: tI,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (tW.stringFilter = iF);
  var ra = {
    registerPlugin: function () {
      for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (t) {
        return i8(t);
      });
    },
    timeline: function (t) {
      return new iz(t);
    },
    getTweensOf: function (t, e) {
      return t0.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      tZ(t) && (t = iu(t)[0]);
      var n = e1(t || {}).get,
        s = i ? e3 : eO;
      return (
        "native" === i && (i = ""),
        t
          ? e
            ? s(((eC[e] && eC[e].get) || n)(t, e, i, r))
            : function (e, i, r) {
                return s(((eC[e] && eC[e].get) || n)(t, e, i, r));
              }
          : t
      );
    },
    quickSetter: function (t, e, i) {
      if ((t = iu(t)).length > 1) {
        var r = t.map(function (t) {
            return rc.quickSetter(t, e, i);
          }),
          n = r.length;
        return function (t) {
          for (var e = n; e--; ) r[e](t);
        };
      }
      t = t[0] || {};
      var s = eC[e],
        o = e1(t),
        a = (o.harness && (o.harness.aliases || {})[e]) || e,
        l = s
          ? function (e) {
              var r = new s();
              (tF._pt = 0),
                r.init(t, i ? e + i : e, tF, 0, [t]),
                r.render(1, r),
                tF._pt && re(1, tF);
            }
          : o.set(t, a);
      return s
        ? l
        : function (e) {
            return l(t, a, i ? e + i : e, o, 1);
          };
    },
    isTweening: function (t) {
      return t0.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = iO(t.ease, tI.ease)), eR(tI, t || {});
    },
    config: function (t) {
      return eR(tW, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (t) {
        return (
          t && !eC[t] && !eD[t] && e_(e + " effect requires " + t + " plugin.")
        );
      }),
        (ew[e] = function (t, e, r) {
          return i(iu(t), e5(e || {}, n), r);
        }),
        s &&
          (iz.prototype[e] = function (t, i, r) {
            return this.add(ew[e](t, ei(i) ? i : (r = i) && {}, this), r);
          });
    },
    registerEase: function (t, e) {
      iA[t] = iO(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? iO(t, e) : iA;
    },
    getById: function (t) {
      return t0.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var i,
        r,
        n = new iz(t);
      for (
        n.smoothChildTiming = er(t.smoothChildTiming),
          t0.remove(n),
          n._dp = 0,
          n._time = n._tTime = t0._time,
          i = t0._first;
        i;

      )
        (r = i._next),
          (!e &&
            !i._dur &&
            i instanceof iX &&
            i.vars.onComplete === i._targets[0]) ||
            eK(n, i, i._start - i._delay),
          (i = r);
      return eK(t0, n, 0), n;
    },
    utils: {
      wrap: function t(e, i, r) {
        var n = i - e;
        return ea(e)
          ? iD(e, t(0, e.length), i)
          : ir(r, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, i, r) {
        var n = i - e,
          s = 2 * n;
        return ea(e)
          ? iD(e, t(0, e.length - 1), i)
          : ir(r, function (t) {
              return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
            });
      },
      distribute: ih,
      random: i$,
      snap: ip,
      normalize: function (t, e, i) {
        return im(t, e, 0, 1, i);
      },
      getUnit: io,
      clamp: function (t, e, i) {
        return ir(i, function (i) {
          return is(t, e, i);
        });
      },
      splitColor: iC,
      toArray: iu,
      mapRange: im,
      pipe: function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (i) {
          return t(parseFloat(i)) + (e || io(i));
        };
      },
      interpolate: function t(e, i, r, n) {
        var s = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!s) {
          var o,
            a,
            l,
            u,
            c,
            h = tZ(e),
            f = {};
          if ((!0 === r && (n = 1) && (r = null), h))
            (e = { p: e }), (i = { p: i });
          else if (ea(e) && !ea(i)) {
            for (l = [], c = (u = e.length) - 2, a = 1; a < u; a++)
              l.push(t(e[a - 1], e[a]));
            u--,
              (s = function (t) {
                var e = Math.min(c, ~~(t *= u));
                return l[e](t - e);
              }),
              (r = i);
          } else n || (e = e7(ea(e) ? [] : {}, e));
          if (!l) {
            for (o in i) iH.call(f, e, o, "get", i[o]);
            s = function (t) {
              return re(t, f) || (h ? e.p : e);
            };
          }
        }
        return ir(r, s);
      },
      shuffle: ic,
    },
    install: em,
    effects: ew,
    ticker: i1,
    updateRoot: iz.updateRoot,
    plugins: eC,
    globalTimeline: t0,
    core: {
      PropTween: ro,
      globals: ey,
      Tween: iX,
      Timeline: iz,
      Animation: iq,
      getCache: e1,
      _removeLinkedListItem: eM,
      suppressOverwrites: function (t) {
        return (tx = t);
      },
    },
  };
  eA("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (ra[t] = iX[t]);
  }),
    i1.add(iz.updateRoot),
    (tF = ra.to({}, { duration: 0 }));
  var rl = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    ru = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, r) {
          r._onInit = function (t) {
            var r, n;
            if (
              (tZ(i) &&
                ((r = {}),
                eA(i, function (t) {
                  return (r[t] = 1);
                }),
                (i = r)),
              e)
            ) {
              for (n in ((r = {}), i)) r[n] = e(i[n]);
              i = r;
            }
            !(function (t, e) {
              var i,
                r,
                n,
                s = t._targets;
              for (i in e)
                for (r = s.length; r--; )
                  (n = t._ptLookup[r][i]) &&
                    (n = n.d) &&
                    (n._pt && (n = rl(n, i)),
                    n && n.modifier && n.modifier(e[i], t, s[r], i));
            })(t, i);
          };
        },
      };
    },
    rc =
      ra.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, n) {
            var s, o;
            for (s in e)
              (o = this.add(
                t,
                "setAttribute",
                (t.getAttribute(s) || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )) && (o.op = s),
                this._props.push(s);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
          },
        },
        ru("roundProps", id),
        ru("modifiers"),
        ru("snap", ip)
      ) || ra;
  (iX.version = iz.version = rc.version = "3.6.1"),
    (tT = 1),
    en() && ik(),
    iA.Power0,
    iA.Power1,
    iA.Power2,
    iA.Power3,
    iA.Power4,
    iA.Linear,
    iA.Quad,
    iA.Cubic,
    iA.Quart,
    iA.Quint,
    iA.Strong,
    iA.Elastic,
    iA.Back,
    iA.SteppedEase,
    iA.Bounce,
    iA.Sine,
    iA.Expo,
    iA.Circ;
  var rh,
    rf,
    rd,
    rp,
    r$,
    rD,
    rg,
    rm = {},
    rv = 180 / Math.PI,
    r_ = Math.PI / 180,
    ry = Math.atan2,
    r8 = /([A-Z])/g,
    rb = /(?:left|right|width|margin|padding|x)/i,
    rx = /[\s,\(]\S/,
    r0 = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    rC = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    rw = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    rE = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    rT = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    rS = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    rF = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    r1 = function (t, e, i) {
      return (t.style[e] = i);
    },
    rk = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    rA = function (t, e, i) {
      return (t._gsap[e] = i);
    },
    r4 = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    r6 = function (t, e, i, r, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
    },
    rB = function (t, e, i, r, n) {
      var s = t._gsap;
      (s[e] = i), s.renderTransform(n, s);
    },
    rL = "transform",
    r2 = rL + "Origin",
    rO = function (t, e) {
      var i = rf.createElementNS
        ? rf.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : rf.createElement(t);
      return i.style ? i : rf.createElement(t);
    },
    r3 = function t(e, i, r) {
      var n = getComputedStyle(e);
      return (
        n[i] ||
        n.getPropertyValue(i.replace(r8, "-$1").toLowerCase()) ||
        n.getPropertyValue(i) ||
        (!r && t(e, rP(i) || i, 1)) ||
        ""
      );
    },
    r5 = "O,Moz,ms,Ms,Webkit".split(","),
    rP = function (t, e, i) {
      var r = (e || r$).style,
        n = 5;
      if (t in r && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(r5[n] + t in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? r5[n] : "") + t;
    },
    r7 = function () {
      "undefined" != typeof window &&
        window.document &&
        ((rd = (rf = (rh = window).document).documentElement),
        (r$ = rO("div") || { style: {} }),
        rO("div"),
        (r2 = (rL = rP(rL)) + "Origin"),
        (r$.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (rg = !!rP("perspective")),
        (rp = 1));
    },
    rR = function t(e) {
      var i,
        r = rO(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (rd.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (i = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (a) {}
      else this._gsapBBox && (i = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        rd.removeChild(r),
        (this.style.cssText = o),
        i
      );
    },
    rq = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    },
    rz = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = rR.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === rR ||
          (e = rR.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +rq(t, ["x", "cx", "x1"]) || 0,
              y: +rq(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    rM = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !rz(t));
    },
    rV = function (t, e) {
      if (e) {
        var i = t.style;
        e in rm && e !== r2 && (e = rL),
          i.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(e.replace(r8, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    },
    rH = function (t, e, i, r, n, s) {
      var o = new ro(t._pt, e, i, 0, 1, s ? rF : rS);
      return (t._pt = o), (o.b = r), (o.e = n), t._props.push(i), o;
    },
    rj = { deg: 1, rad: 1, turn: 1 },
    rW = function t(e, i, r, n) {
      var s,
        o,
        a,
        l,
        u = parseFloat(r) || 0,
        c = (r + "").trim().substr((u + "").length) || "px",
        h = r$.style,
        f = rb.test(i),
        d = "svg" === e.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        $ = "px" === n,
        D = "%" === n;
      return n === c || !u || rj[n] || rj[c]
        ? u
        : ("px" === c || $ || (u = t(e, i, r, "px")),
          (l = e.getCTM && rM(e)),
          (D || "%" === c) && (rm[i] || ~i.indexOf("adius"))
            ? ((s = l ? e.getBBox()[f ? "width" : "height"] : e[p]),
              e4(D ? (u / s) * 100 : (u / 100) * s))
            : ((h[f ? "width" : "height"] = 100 + ($ ? c : n)),
              (o =
                ~i.indexOf("adius") || ("em" === n && e.appendChild && !d)
                  ? e
                  : e.parentNode),
              l && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== rf && o.appendChild) || (o = rf.body),
              (a = o._gsap) && D && a.width && f && a.time === i1.time
                ? e4((u / a.width) * 100)
                : ((D || "%" === c) && (h.position = r3(e, "position")),
                  o === e && (h.position = "static"),
                  o.appendChild(r$),
                  (s = r$[p]),
                  o.removeChild(r$),
                  (h.position = "absolute"),
                  f && D && (((a = e1(o)).time = i1.time), (a.width = o[p])),
                  e4($ ? (s * u) / 100 : s && u ? (100 / s) * u : 0))));
    },
    rI = function (t, e, i, r) {
      var n;
      return (
        rp || r7(),
        e in r0 &&
          "transform" !== e &&
          ~(e = r0[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        rm[e] && "transform" !== e
          ? ((n = nt(t, r)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : ne(r3(t, r2)) + " " + n.zOrigin + "px"))
          : (!(n = t.style[e]) ||
              "auto" === n ||
              r ||
              ~(n + "").indexOf("calc(")) &&
            (n =
              (rG[e] && rG[e](t, e, i)) ||
              r3(t, e) ||
              ek(t, e) ||
              ("opacity" === e ? 1 : 0)),
        i && !~(n + "").trim().indexOf(" ") ? rW(t, e, n, i) + i : n
      );
    },
    rY = function (t, e, i, r) {
      if (!i || "none" === i) {
        var n = rP(e, t, 1),
          s = n && r3(t, n, 1);
        s && s !== i
          ? ((e = n), (i = s))
          : "borderColor" === e && (i = r3(t, "borderTopColor"));
      }
      var o,
        a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        $,
        D,
        g,
        m = new ro(this._pt, t.style, e, 0, 1, rt),
        v = 0,
        _ = 0;
      if (
        ((m.b = i),
        (m.e = r),
        (i += ""),
        "auto" == (r += "") &&
          ((t.style[e] = r), (r = r3(t, e) || r), (t.style[e] = i)),
        iF((o = [i, r])),
        (r = o[1]),
        (l = (i = o[0]).match(eh) || []),
        (r.match(eh) || []).length)
      ) {
        for (; (a = eh.exec(r)); )
          (f = a[0]),
            (p = r.substring(v, a.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (c = 1),
            f !== (h = l[_++] || "") &&
              ((u = parseFloat(h) || 0),
              (D = h.substr((u + "").length)),
              (g = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                (f = f.substr(2)),
              (d = parseFloat(f)),
              ($ = f.substr((d + "").length)),
              (v = eh.lastIndex - $.length),
              $ ||
                (($ = $ || tW.units[e] || D),
                v === r.length && ((r += $), (m.e += $))),
              D !== $ && (u = rW(t, e, h, $) || 0),
              (m._pt = {
                _next: m._pt,
                p: p || 1 === _ ? p : ",",
                s: u,
                c: g ? g * d : d - u,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        m.c = v < r.length ? r.substring(v, r.length) : "";
      } else m.r = "display" === e && "none" === r ? rF : rS;
      return ed.test(r) && (m.e = 0), (this._pt = m), m;
    },
    rN = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    rX = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i,
          r,
          n,
          s = e.t,
          o = s.style,
          a = e.u,
          l = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (r = 1);
        else
          for (n = (a = a.split(",")).length; --n > -1; )
            rm[(i = a[n])] &&
              ((r = 1), (i = "transformOrigin" === i ? r2 : rL)),
              rV(s, i);
        r &&
          (rV(s, rL),
          l &&
            (l.svg && s.removeAttribute("transform"),
            nt(s, 1),
            (l.uncache = 1)));
      }
    },
    rG = {
      clearProps: function (t, e, i, r, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new ro(t._pt, e, i, 0, 0, rX));
          return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
        }
      },
    },
    rU = [1, 0, 0, 1, 0, 0],
    rK = {},
    rQ = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    r9 = function (t) {
      var e = r3(t, rL);
      return rQ(e) ? rU : e.substr(7).match(ec).map(e4);
    },
    rZ = function (t, e) {
      var i,
        r,
        n,
        s,
        o = t._gsap || e1(t),
        a = t.style,
        l = r9(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? rU
          : l
        : (l !== rU ||
            t.offsetParent ||
            t === rd ||
            o.svg ||
            ((n = a.display),
            (a.display = "block"),
            ((i = t.parentNode) && t.offsetParent) ||
              ((s = 1), (r = t.nextSibling), rd.appendChild(t)),
            (l = r9(t)),
            n ? (a.display = n) : rV(t, "display"),
            s &&
              (r
                ? i.insertBefore(t, r)
                : i
                ? i.appendChild(t)
                : rd.removeChild(t))),
          e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    },
    rJ = function (t, e, i, r, n, s) {
      var o,
        a,
        l,
        u = t._gsap,
        c = n || rZ(t, !0),
        h = u.xOrigin || 0,
        f = u.yOrigin || 0,
        d = u.xOffset || 0,
        p = u.yOffset || 0,
        $ = c[0],
        D = c[1],
        g = c[2],
        m = c[3],
        v = c[4],
        _ = c[5],
        y = e.split(" "),
        b = parseFloat(y[0]) || 0,
        x = parseFloat(y[1]) || 0;
      i
        ? c !== rU &&
          (a = $ * m - D * g) &&
          ((l = b * (-D / a) + x * ($ / a) - ($ * _ - D * v) / a),
          (b = b * (m / a) + x * (-g / a) + (g * _ - m * v) / a),
          (x = l))
        : ((b = (o = rz(t)).x + (~y[0].indexOf("%") ? (b / 100) * o.width : b)),
          (x =
            o.y + (~(y[1] || y[0]).indexOf("%") ? (x / 100) * o.height : x))),
        r || (!1 !== r && u.smooth)
          ? ((v = b - h),
            (_ = x - f),
            (u.xOffset = d + (v * $ + _ * g) - v),
            (u.yOffset = p + (v * D + _ * m) - _))
          : (u.xOffset = u.yOffset = 0),
        (u.xOrigin = b),
        (u.yOrigin = x),
        (u.smooth = !!r),
        (u.origin = e),
        (u.originIsAbsolute = !!i),
        (t.style[r2] = "0px 0px"),
        s &&
          (rH(s, u, "xOrigin", h, b),
          rH(s, u, "yOrigin", f, x),
          rH(s, u, "xOffset", d, u.xOffset),
          rH(s, u, "yOffset", p, u.yOffset)),
        t.setAttribute("data-svg-origin", b + " " + x);
    },
    nt = function (t, e) {
      var i = t._gsap || new iR(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        $,
        D,
        g,
        m,
        v,
        _,
        y,
        b,
        x,
        C,
        w,
        E,
        T,
        S,
        F,
        k,
        A,
        B,
        L,
        O,
        P = t.style,
        R = i.scaleX < 0,
        q = r3(t, r2) || "0";
      return (
        (r = n = s = l = u = c = h = f = d = 0),
        (o = a = 1),
        (i.svg = !(!t.getCTM || !rM(t))),
        (D = rZ(t, i.svg)),
        i.svg &&
          ((E = !i.uncache && !e && t.getAttribute("data-svg-origin")),
          rJ(t, E || q, !!E || i.originIsAbsolute, !1 !== i.smooth, D)),
        (p = i.xOrigin || 0),
        ($ = i.yOrigin || 0),
        D !== rU &&
          ((_ = D[0]),
          (y = D[1]),
          (b = D[2]),
          (x = D[3]),
          (r = C = D[4]),
          (n = w = D[5]),
          6 === D.length
            ? ((o = Math.sqrt(_ * _ + y * y)),
              (a = Math.sqrt(x * x + b * b)),
              (l = _ || y ? ry(y, _) * rv : 0),
              (h = b || x ? ry(b, x) * rv + l : 0) &&
                (a *= Math.abs(Math.cos(h * r_))),
              i.svg && ((r -= p - (p * _ + $ * b)), (n -= $ - (p * y + $ * x))))
            : ((O = D[6]),
              (B = D[7]),
              (F = D[8]),
              (k = D[9]),
              (A = D[10]),
              (L = D[11]),
              (r = D[12]),
              (n = D[13]),
              (s = D[14]),
              (u = (g = ry(O, A)) * rv),
              g &&
                ((E = C * (m = Math.cos(-g)) + F * (v = Math.sin(-g))),
                (T = w * m + k * v),
                (S = O * m + A * v),
                (F = -(C * v) + F * m),
                (k = -(w * v) + k * m),
                (A = -(O * v) + A * m),
                (L = -(B * v) + L * m),
                (C = E),
                (w = T),
                (O = S)),
              (c = (g = ry(-b, A)) * rv),
              g &&
                ((m = Math.cos(-g)),
                (L = x * (v = Math.sin(-g)) + L * m),
                (_ = E = _ * m - F * v),
                (y = T = y * m - k * v),
                (b = S = b * m - A * v)),
              (l = (g = ry(y, _)) * rv),
              g &&
                ((E = _ * (m = Math.cos(g)) + y * (v = Math.sin(g))),
                (T = C * m + w * v),
                (y = y * m - _ * v),
                (w = w * m - C * v),
                (_ = E),
                (C = T)),
              u &&
                Math.abs(u) + Math.abs(l) > 359.9 &&
                ((u = l = 0), (c = 180 - c)),
              (o = e4(Math.sqrt(_ * _ + y * y + b * b))),
              (a = e4(Math.sqrt(w * w + O * O))),
              (h = Math.abs((g = ry(C, w))) > 2e-4 ? g * rv : 0),
              (d = L ? 1 / (L < 0 ? -L : L) : 0)),
          i.svg &&
            ((E = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !rQ(r3(t, rL))),
            E && t.setAttribute("transform", E))),
        Math.abs(h) > 90 &&
          270 > Math.abs(h) &&
          (R
            ? ((o *= -1),
              (h += l <= 0 ? 180 : -180),
              (l += l <= 0 ? 180 : -180))
            : ((a *= -1), (h += h <= 0 ? 180 : -180))),
        (i.x =
          r -
          ((i.xPercent =
            r &&
            (i.xPercent ||
              (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          "px"),
        (i.y =
          n -
          ((i.yPercent =
            n &&
            (i.yPercent ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          "px"),
        (i.z = s + "px"),
        (i.scaleX = e4(o)),
        (i.scaleY = e4(a)),
        (i.rotation = e4(l) + "deg"),
        (i.rotationX = e4(u) + "deg"),
        (i.rotationY = e4(c) + "deg"),
        (i.skewX = h + "deg"),
        (i.skewY = f + "deg"),
        (i.transformPerspective = d + "px"),
        (i.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (P[r2] = ne(q)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = tW.force3D),
        (i.renderTransform = i.svg ? no : rg ? ns : nr),
        (i.uncache = 0),
        i
      );
    },
    ne = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    ni = function (t, e, i) {
      var r = io(e);
      return e4(parseFloat(e) + parseFloat(rW(t, "x", i + "px", r))) + r;
    },
    nr = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        ns(t, e);
    },
    nn = "0deg",
    ns = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        n = i.yPercent,
        s = i.x,
        o = i.y,
        a = i.z,
        l = i.rotation,
        u = i.rotationY,
        c = i.rotationX,
        h = i.skewX,
        f = i.skewY,
        d = i.scaleX,
        p = i.scaleY,
        $ = i.transformPerspective,
        D = i.force3D,
        g = i.target,
        m = i.zOrigin,
        v = "",
        _ = ("auto" === D && t && 1 !== t) || !0 === D;
      if (m && (c !== nn || u !== nn)) {
        var y,
          b = parseFloat(u) * r_,
          x = Math.sin(b),
          C = Math.cos(b);
        (y = Math.cos((b = parseFloat(c) * r_))),
          (s = ni(g, s, -(x * y * m))),
          (o = ni(g, o, -(-Math.sin(b) * m))),
          (a = ni(g, a, -(C * y * m) + m));
      }
      "0px" !== $ && (v += "perspective(" + $ + ") "),
        (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
        (_ || "0px" !== s || "0px" !== o || "0px" !== a) &&
          (v +=
            "0px" !== a || _
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + ") "),
        l !== nn && (v += "rotate(" + l + ") "),
        u !== nn && (v += "rotateY(" + u + ") "),
        c !== nn && (v += "rotateX(" + c + ") "),
        (h === nn && f === nn) || (v += "skew(" + h + ", " + f + ") "),
        (1 === d && 1 === p) || (v += "scale(" + d + ", " + p + ") "),
        (g.style[rL] = v || "translate(0, 0)");
    },
    no = function (t, e) {
      var i,
        r,
        n,
        s,
        o,
        a = e || this,
        l = a.xPercent,
        u = a.yPercent,
        c = a.x,
        h = a.y,
        f = a.rotation,
        d = a.skewX,
        p = a.skewY,
        $ = a.scaleX,
        D = a.scaleY,
        g = a.target,
        m = a.xOrigin,
        v = a.yOrigin,
        _ = a.xOffset,
        y = a.yOffset,
        b = a.forceCSS,
        x = parseFloat(c),
        C = parseFloat(h);
      (f = parseFloat(f)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
        f || d
          ? ((f *= r_),
            (d *= r_),
            (i = Math.cos(f) * $),
            (r = Math.sin(f) * $),
            (n = -(Math.sin(f - d) * D)),
            (s = Math.cos(f - d) * D),
            d &&
              ((p *= r_),
              (n *= o = Math.sqrt(1 + (o = Math.tan(d - p)) * o)),
              (s *= o),
              p && ((i *= o = Math.sqrt(1 + (o = Math.tan(p)) * o)), (r *= o))),
            (i = e4(i)),
            (r = e4(r)),
            (n = e4(n)),
            (s = e4(s)))
          : ((i = $), (s = D), (r = n = 0)),
        ((x && !~(c + "").indexOf("px")) || (C && !~(h + "").indexOf("px"))) &&
          ((x = rW(g, "x", c, "px")), (C = rW(g, "y", h, "px"))),
        (m || v || _ || y) &&
          ((x = e4(x + m - (m * i + v * n) + _)),
          (C = e4(C + v - (m * r + v * s) + y))),
        (l || u) &&
          ((x = e4(x + (l / 100) * (o = g.getBBox()).width)),
          (C = e4(C + (u / 100) * o.height))),
        (o =
          "matrix(" +
          i +
          "," +
          r +
          "," +
          n +
          "," +
          s +
          "," +
          x +
          "," +
          C +
          ")"),
        g.setAttribute("transform", o),
        b && (g.style[rL] = o);
    },
    na = function (t, e, i, r, n, s) {
      var o,
        a,
        l = tZ(n),
        u = parseFloat(n) * (l && ~n.indexOf("rad") ? rv : 1),
        c = s ? u * s : u - r,
        h = r + c + "deg";
      return (
        l &&
          ("short" === (o = n.split("_")[1]) &&
            (c %= 360) != c % 180 &&
            (c += c < 0 ? 360 : -360),
          "cw" === o && c < 0
            ? (c = ((c + 36e9) % 360) - 360 * ~~(c / 360))
            : "ccw" === o &&
              c > 0 &&
              (c = ((c - 36e9) % 360) - 360 * ~~(c / 360))),
        (t._pt = a = new ro(t._pt, e, i, r, c, rw)),
        (a.e = h),
        (a.u = "deg"),
        t._props.push(i),
        a
      );
    },
    nl = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    nu = function (t, e, i) {
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        c = nl({}, i._gsap),
        h = i.style;
      for (n in (c.svg
        ? ((s = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (h[rL] = e),
          (r = nt(i, 1)),
          rV(i, rL),
          i.setAttribute("transform", s))
        : ((s = getComputedStyle(i)[rL]),
          (h[rL] = e),
          (r = nt(i, 1)),
          (h[rL] = s)),
      rm))
        (s = c[n]) !== (o = r[n]) &&
          0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) &&
          ((a = io(s) !== (u = io(o)) ? rW(i, n, s, u) : parseFloat(s)),
          (l = parseFloat(o)),
          (t._pt = new ro(t._pt, r, n, a, l - a, rC)),
          (t._pt.u = u || 0),
          t._props.push(n));
      nl(r, c);
    };
  eA("padding,margin,Width,Radius", function (t, e) {
    var i = "Right",
      r = "Bottom",
      n = "Left",
      s = (e < 3 ? ["Top", i, r, n] : ["Top" + n, "Top" + i, r + i, r + n]).map(
        function (i) {
          return e < 2 ? t + i : "border" + i + t;
        }
      );
    rG[e > 1 ? "border" + t : t] = function (t, e, i, r, n) {
      var o, a;
      if (arguments.length < 4)
        return 5 ===
          (a = (o = s.map(function (e) {
            return rI(t, e, i);
          })).join(" ")).split(o[0]).length
          ? o[0]
          : a;
      (o = (r + "").split(" ")),
        (a = {}),
        s.forEach(function (t, e) {
          return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, n);
    };
  });
  var nc,
    nh,
    nf,
    nd = {
      name: "css",
      register: r7,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, i, r, n) {
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          d,
          p,
          $,
          D,
          g,
          m,
          v,
          _,
          y,
          b,
          x,
          C = this._props,
          w = t.style,
          E = i.vars.startAt;
        for (h in (rp || r7(), e))
          if (
            "autoRound" !== h &&
            ((o = e[h]), !eC[h] || !ij(h, e, i, r, t, n))
          ) {
            if (
              ((u = typeof o),
              (c = rG[h]),
              "function" === u && (u = typeof (o = o.call(i, r, t, n))),
              "string" === u && ~o.indexOf("random(") && (o = ig(o)),
              c)
            )
              c(this, t, h, o, i) && (v = 1);
            else if ("--" === h.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (o += ""),
                (iT.lastIndex = 0),
                iT.test(s) || ((f = io(s)), (d = io(o))),
                d ? f !== d && (s = rW(t, h, s, d) + d) : f && (o += f),
                this.add(w, "setProperty", s, o, r, n, 0, 0, h);
            else if ("undefined" !== u) {
              if (
                (E && h in E
                  ? ((s =
                      "function" == typeof E[h] ? E[h].call(i, r, t, n) : E[h]),
                    h in tW.units && !io(s) && (s += tW.units[h]),
                    "=" === (s + "").charAt(1) && (s = rI(t, h)))
                  : (s = rI(t, h)),
                (l = parseFloat(s)),
                (p =
                  "string" === u && "=" === o.charAt(1)
                    ? +(o.charAt(0) + "1")
                    : 0) && (o = o.substr(2)),
                (a = parseFloat(o)),
                h in r0 &&
                  ("autoAlpha" === h &&
                    (1 === l &&
                      "hidden" === rI(t, "visibility") &&
                      a &&
                      (l = 0),
                    rH(
                      this,
                      w,
                      "visibility",
                      l ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = r0[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                ($ = h in rm))
              ) {
                if (
                  (D ||
                    (((g = t._gsap).renderTransform && !e.parseTransform) ||
                      nt(t, e.parseTransform),
                    (m = !1 !== e.smoothOrigin && g.smooth),
                    ((D = this._pt =
                      new ro(
                        this._pt,
                        w,
                        rL,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === h)
                )
                  (this._pt = new ro(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    p ? p * a : a - g.scaleY
                  )),
                    C.push("scaleY", h),
                    (h += "X");
                else {
                  if ("transformOrigin" === h) {
                    (y = void 0),
                      (b = void 0),
                      (x = void 0),
                      (b = (y = (_ = o).split(" "))[0]),
                      (x = y[1] || "50%"),
                      ("top" !== b &&
                        "bottom" !== b &&
                        "left" !== x &&
                        "right" !== x) ||
                        ((_ = b), (b = x), (x = _)),
                      (y[0] = rN[b] || b),
                      (y[1] = rN[x] || x),
                      (o = y.join(" ")),
                      g.svg
                        ? rJ(t, o, 0, m, 0, this)
                        : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                            g.zOrigin && rH(this, g, "zOrigin", g.zOrigin, d),
                          rH(this, w, h, ne(s), ne(o)));
                    continue;
                  }
                  if ("svgOrigin" === h) {
                    rJ(t, o, 1, m, 0, this);
                    continue;
                  }
                  if (h in rK) {
                    na(this, g, h, l, o, p);
                    continue;
                  }
                  if ("smoothOrigin" === h) {
                    rH(this, g, "smooth", g.smooth, o);
                    continue;
                  }
                  if ("force3D" === h) {
                    g[h] = o;
                    continue;
                  }
                  if ("transform" === h) {
                    nu(this, o, t);
                    continue;
                  }
                }
              } else h in w || (h = rP(h) || h);
              if (
                $ ||
                ((a || 0 === a) && (l || 0 === l) && !rx.test(o) && h in w)
              )
                a || (a = 0),
                  (f = (s + "").substr((l + "").length)) !==
                    (d = io(o) || (h in tW.units ? tW.units[h] : f)) &&
                    (l = rW(t, h, s, d)),
                  (this._pt = new ro(
                    this._pt,
                    $ ? g : w,
                    h,
                    l,
                    p ? p * a : a - l,
                    $ || ("px" !== d && "zIndex" !== h) || !1 === e.autoRound
                      ? rC
                      : rT
                  )),
                  (this._pt.u = d || 0),
                  f !== d && ((this._pt.b = s), (this._pt.r = rE));
              else if (h in w) rY.call(this, t, h, s, o);
              else {
                if (!(h in t)) {
                  ev(h, o);
                  continue;
                }
                this.add(t, h, t[h], o, r, n);
              }
              C.push(h);
            }
          }
        v && rs(this);
      },
      get: rI,
      aliases: r0,
      getSetter: function (t, e, i) {
        var r = r0[e];
        return (
          r && 0 > r.indexOf(",") && (e = r),
          e in rm && e !== r2 && (t._gsap.x || rI(t, "x"))
            ? i && rD === i
              ? "scale" === e
                ? r4
                : rA
              : ((rD = i || {}), "scale" === e ? r6 : rB)
            : t.style && !ee(t.style[e])
            ? r1
            : ~e.indexOf("-")
            ? rk
            : i9(t, e)
        );
      },
      core: { _removeProperty: rV, _getMatrix: rZ },
    };
  (rc.utils.checkPrefix = rP),
    (nf = eA(
      (nc = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (nh = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        rm[t] = 1;
      }
    )),
    eA(nh, function (t) {
      (tW.units[t] = "deg"), (rK[t] = 1);
    }),
    (r0[nf[13]] = nc + "," + nh),
    eA(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        r0[e[1]] = nf[e[0]];
      }
    ),
    eA(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        tW.units[t] = "px";
      }
    ),
    rc.registerPlugin(nd);
  var np = rc.registerPlugin(nd) || rc,
    n$ = (np.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
    nD = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    ng = Math.PI / 180,
    nm = Math.sin,
    nv = Math.cos,
    n_ = Math.abs,
    ny = Math.sqrt,
    n8 = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    };
  /*!
   * paths 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ function nb(t, e, i, r, n, s, o, a, l) {
    if (t !== a || e !== l) {
      (i = n_(i)), (r = n_(r));
      var u = (n % 360) * ng,
        c = nv(u),
        h = nm(u),
        f = Math.PI,
        d = 2 * f,
        p = (t - a) / 2,
        $ = (e - l) / 2,
        D = c * p + h * $,
        g = -h * p + c * $,
        m = D * D,
        v = g * g,
        _ = m / (i * i) + v / (r * r);
      _ > 1 && ((i = ny(_) * i), (r = ny(_) * r));
      var y = i * i,
        b = r * r,
        x = (y * b - y * v - b * m) / (y * v + b * m);
      x < 0 && (x = 0);
      var C = (s === o ? -1 : 1) * ny(x),
        w = C * ((i * g) / r),
        E = C * ((-r * D) / i),
        T = (t + a) / 2 + (c * w - h * E),
        S = (e + l) / 2 + (h * w + c * E),
        F = (D - w) / i,
        k = (g - E) / r,
        A = (-D - w) / i,
        B = (-g - E) / r,
        L = F * F + k * k,
        O = (k < 0 ? -1 : 1) * Math.acos(F / ny(L)),
        P =
          (F * B - k * A < 0 ? -1 : 1) *
          Math.acos((F * A + k * B) / ny(L * (A * A + B * B)));
      isNaN(P) && (P = f),
        !o && P > 0 ? (P -= d) : o && P < 0 && (P += d),
        (O %= d);
      var R,
        q = Math.ceil(n_((P %= d)) / (d / 4)),
        z = [],
        M = P / q,
        V = ((4 / 3) * nm(M / 2)) / (1 + nv(M / 2)),
        H = c * i,
        j = h * i,
        W = -(h * r),
        I = c * r;
      for (R = 0; R < q; R++)
        (D = nv((n = O + R * M))),
          (g = nm(n)),
          (F = nv((n += M))),
          (k = nm(n)),
          z.push(D - V * g, g + V * D, F + V * k, k - V * F, F, k);
      for (R = 0; R < z.length; R += 2)
        (D = z[R]),
          (g = z[R + 1]),
          (z[R] = D * H + g * W + T),
          (z[R + 1] = D * j + g * I + S);
      return (z[R - 2] = a), (z[R - 1] = l), z;
    }
  }
  var nx,
    n0,
    nC = function () {
      return (
        nx ||
        ("undefined" != typeof window &&
          (nx = window.gsap) &&
          nx.registerPlugin &&
          nx)
      );
    },
    nw = function () {
      (nx = nC())
        ? (nx.registerEase("_CE", n1.create), (n0 = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
    },
    nE = function (t) {
      return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
    },
    nT = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    nS = /[cLlsSaAhHvVtTqQ]/g,
    nF = function t(e, i, r, n, s, o, a, l, u, c, h) {
      var f,
        d = (e + r) / 2,
        p = (i + n) / 2,
        $ = (r + s) / 2,
        D = (n + o) / 2,
        g = (s + a) / 2,
        m = (o + l) / 2,
        v = (d + $) / 2,
        _ = (p + D) / 2,
        y = ($ + g) / 2,
        b = (D + m) / 2,
        x = (v + y) / 2,
        C = (_ + b) / 2,
        w = a - e,
        E = l - i,
        T = Math.abs((r - a) * E - (n - l) * w),
        S = Math.abs((s - a) * E - (o - l) * w);
      return (
        c ||
          ((c = [
            { x: e, y: i },
            { x: a, y: l },
          ]),
          (h = 1)),
        c.splice(h || c.length - 1, 0, { x: x, y: C }),
        (T + S) * (T + S) > u * (w * w + E * E) &&
          ((f = c.length),
          t(e, i, d, p, v, _, x, C, u, c, h),
          t(x, C, y, b, g, m, a, l, u, c, h + 1 + (c.length - f))),
        c
      );
    },
    n1 = (function () {
      function t(t, e, i) {
        n0 || nw(), (this.id = t), this.setData(e, i);
      }
      var e = t.prototype;
      return (
        (e.setData = function (t, e) {
          e = e || {};
          var i,
            r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h = (t = t || "0,0,1,1").match(nT),
            f = 1,
            d = [],
            p = [],
            $ = e.precision || 1,
            D = $ <= 1;
          if (
            ((this.data = t),
            (nS.test(t) || (~t.indexOf("M") && 0 > t.indexOf("C"))) &&
              (h = (function (t) {
                var e,
                  i,
                  r,
                  n,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  h,
                  f,
                  d,
                  p,
                  $,
                  D =
                    (t + "")
                      .replace(nD, function (t) {
                        var e = +t;
                        return e < 1e-4 && e > -0.0001 ? 0 : e;
                      })
                      .match(n$) || [],
                  g = [],
                  m = 0,
                  v = 0,
                  _ = 2 / 3,
                  y = D.length,
                  b = 0,
                  x = "ERROR: malformed path: " + t,
                  C = function (t, e, i, r) {
                    (c = (i - t) / 3),
                      (h = (r - e) / 3),
                      a.push(t + c, e + h, i - c, r - h, i, r);
                  };
                if (!t || !isNaN(D[0]) || isNaN(D[1])) return console.log(x), g;
                for (e = 0; e < y; e++)
                  if (
                    ((d = s),
                    isNaN(D[e]) ? (o = (s = D[e].toUpperCase()) !== D[e]) : e--,
                    (r = +D[e + 1]),
                    (n = +D[e + 2]),
                    o && ((r += m), (n += v)),
                    e || ((l = r), (u = n)),
                    "M" === s)
                  )
                    a && (a.length < 8 ? (g.length -= 1) : (b += a.length)),
                      (m = l = r),
                      (v = u = n),
                      (a = [r, n]),
                      g.push(a),
                      (e += 2),
                      (s = "L");
                  else if ("C" === s)
                    a || (a = [0, 0]),
                      o || (m = v = 0),
                      a.push(
                        r,
                        n,
                        m + 1 * D[e + 3],
                        v + 1 * D[e + 4],
                        (m += 1 * D[e + 5]),
                        (v += 1 * D[e + 6])
                      ),
                      (e += 6);
                  else if ("S" === s)
                    (c = m),
                      (h = v),
                      ("C" !== d && "S" !== d) ||
                        ((c += m - a[a.length - 4]),
                        (h += v - a[a.length - 3])),
                      o || (m = v = 0),
                      a.push(
                        c,
                        h,
                        r,
                        n,
                        (m += 1 * D[e + 3]),
                        (v += 1 * D[e + 4])
                      ),
                      (e += 4);
                  else if ("Q" === s)
                    (c = m + (r - m) * _),
                      (h = v + (n - v) * _),
                      o || (m = v = 0),
                      (m += 1 * D[e + 3]),
                      (v += 1 * D[e + 4]),
                      a.push(c, h, m + (r - m) * _, v + (n - v) * _, m, v),
                      (e += 4);
                  else if ("T" === s)
                    (c = m - a[a.length - 4]),
                      (h = v - a[a.length - 3]),
                      a.push(
                        m + c,
                        v + h,
                        r + (m + 1.5 * c - r) * _,
                        n + (v + 1.5 * h - n) * _,
                        (m = r),
                        (v = n)
                      ),
                      (e += 2);
                  else if ("H" === s) C(m, v, (m = r), v), (e += 1);
                  else if ("V" === s)
                    C(m, v, m, (v = r + (o ? v - m : 0))), (e += 1);
                  else if ("L" === s || "Z" === s)
                    "Z" === s && ((r = l), (n = u), (a.closed = !0)),
                      ("L" === s || n_(m - r) > 0.5 || n_(v - n) > 0.5) &&
                        (C(m, v, r, n), "L" === s && (e += 2)),
                      (m = r),
                      (v = n);
                  else if ("A" === s) {
                    if (
                      ((p = D[e + 4]),
                      ($ = D[e + 5]),
                      (c = D[e + 6]),
                      (h = D[e + 7]),
                      (i = 7),
                      p.length > 1 &&
                        (p.length < 3
                          ? ((h = c), (c = $), i--)
                          : ((h = $), (c = p.substr(2)), (i -= 2)),
                        ($ = p.charAt(1)),
                        (p = p.charAt(0))),
                      (f = nb(
                        m,
                        v,
                        +D[e + 1],
                        +D[e + 2],
                        +D[e + 3],
                        +p,
                        +$,
                        (o ? m : 0) + 1 * c,
                        (o ? v : 0) + 1 * h
                      )),
                      (e += i),
                      f)
                    )
                      for (i = 0; i < f.length; i++) a.push(f[i]);
                    (m = a[a.length - 2]), (v = a[a.length - 1]);
                  } else console.log(x);
                return (
                  (e = a.length) < 6
                    ? (g.pop(), (e = 0))
                    : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0),
                  (g.totalPoints = b + e),
                  g
                );
              })(t)[0]),
            4 === (i = h.length))
          )
            h.unshift(0, 0), h.push(1, 1), (i = 8);
          else if ((i - 2) % 6) throw "Invalid CustomEase";
          for (
            (0 == +h[0] && 1 == +h[i - 2]) ||
              (function (t, e, i) {
                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                var r,
                  n = -1 * +t[0],
                  s = -i,
                  o = t.length,
                  a = 1 / (+t[o - 2] + n),
                  l =
                    -e ||
                    (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                      ? (function (t) {
                          var e,
                            i = t.length,
                            r = 1e20;
                          for (e = 1; e < i; e += 6) +t[e] < r && (r = +t[e]);
                          return r;
                        })(t) + s
                      : +t[o - 1] + s);
                for (l = l ? 1 / l : -a, r = 0; r < o; r += 2)
                  (t[r] = (+t[r] + n) * a), (t[r + 1] = (+t[r + 1] + s) * l);
              })(h, e.height, e.originY),
              this.segment = h,
              s = 2;
            s < i;
            s += 6
          )
            (r = { x: +h[s - 2], y: +h[s - 1] }),
              (n = { x: +h[s + 4], y: +h[s + 5] }),
              d.push(r, n),
              nF(
                r.x,
                r.y,
                +h[s],
                +h[s + 1],
                +h[s + 2],
                +h[s + 3],
                n.x,
                n.y,
                1 / (2e5 * $),
                d,
                d.length - 1
              );
          for (i = d.length, s = 0; s < i; s++)
            (l = d[s]),
              (u = d[s - 1] || l),
              (l.x > u.x || (u.y !== l.y && u.x === l.x) || l === u) && l.x <= 1
                ? ((u.cx = l.x - u.x),
                  (u.cy = l.y - u.y),
                  (u.n = l),
                  (u.nx = l.x),
                  D &&
                    s > 1 &&
                    Math.abs(u.cy / u.cx - d[s - 2].cy / d[s - 2].cx) > 2 &&
                    (D = 0),
                  u.cx < f &&
                    (u.cx
                      ? (f = u.cx)
                      : ((u.cx = 0.001),
                        s === i - 1 &&
                          ((u.x -= 0.001), (f = Math.min(f, 0.001)), (D = 0)))))
                : (d.splice(s--, 1), i--);
          if (((o = 1 / (i = (1 / f + 1) | 0)), (a = 0), (l = d[0]), D)) {
            for (s = 0; s < i; s++)
              (c = s * o),
                l.nx < c && (l = d[++a]),
                (r = l.y + ((c - l.x) / l.cx) * l.cy),
                (p[s] = { x: c, cx: o, y: r, cy: 0, nx: 9 }),
                s && (p[s - 1].cy = r - p[s - 1].y);
            p[i - 1].cy = d[d.length - 1].y - r;
          } else {
            for (s = 0; s < i; s++) l.nx < s * o && (l = d[++a]), (p[s] = l);
            a < d.length - 1 && (p[s - 1] = d[d.length - 2]);
          }
          return (
            (this.ease = function (t) {
              var e = p[(t * i) | 0] || p[i - 1];
              return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
            }),
            (this.ease.custom = this),
            this.id && nx.registerEase(this.id, this.ease),
            this
          );
        }),
        (e.getSVGData = function (e) {
          return t.getSVGData(this, e);
        }),
        (t.create = function (e, i, r) {
          return new t(e, i, r).ease;
        }),
        (t.register = function (t) {
          (nx = t), nw();
        }),
        (t.get = function (t) {
          return nx.parseEase(t);
        }),
        (t.getSVGData = function (e, i) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            d = (i = i || {}).width || 100,
            p = i.height || 100,
            $ = i.x || 0,
            D = (i.y || 0) + p,
            g = nx.utils.toArray(i.path)[0];
          if (
            (i.invert && ((p = -p), (D = 0)),
            "string" == typeof e && (e = nx.parseEase(e)),
            e.custom && (e = e.custom),
            e instanceof t)
          )
            r = (function (t) {
              "number" == typeof t[0] && (t = [t]);
              var e,
                i,
                r,
                n,
                s = "",
                o = t.length;
              for (i = 0; i < o; i++) {
                for (
                  s += "M" + n8((n = t[i])[0]) + "," + n8(n[1]) + " C",
                    e = n.length,
                    r = 2;
                  r < e;
                  r++
                )
                  s +=
                    n8(n[r++]) +
                    "," +
                    n8(n[r++]) +
                    " " +
                    n8(n[r++]) +
                    "," +
                    n8(n[r++]) +
                    " " +
                    n8(n[r++]) +
                    "," +
                    n8(n[r]) +
                    " ";
                n.closed && (s += "z");
              }
              return s;
            })(
              (function (t, e, i, r, n, s, o) {
                for (var a, l, u, c, h, f = t.length; --f > -1; )
                  for (l = (a = t[f]).length, u = 0; u < l; u += 2)
                    (c = a[u]),
                      (h = a[u + 1]),
                      (a[u] = c * e + 0 * h + s),
                      (a[u + 1] = 0 * c + h * n + o);
                return (t._dirty = 1), t;
              })([e.segment], d, 0, 0, -p, $, D)
            );
          else {
            for (
              r = [$, D],
                o = 1 / (u = Math.max(5, 200 * (i.precision || 1))),
                c = 5 / (u += 2),
                h = nE($ + o * d),
                n = ((f = nE(D + -(e(o) * p))) - D) / (h - $),
                s = 2;
              s < u;
              s++
            )
              (a = nE($ + s * o * d)),
                (Math.abs(((l = nE(D + -(e(s * o) * p))) - f) / (a - h) - n) >
                  c ||
                  s === u - 1) &&
                  (r.push(h, f), (n = (l - f) / (a - h))),
                (h = a),
                (f = l);
            r = "M" + r.join(",");
          }
          return g && g.setAttribute("d", r), r;
        }),
        t
      );
    })();
  nC() && nx.registerPlugin(n1), (n1.version = "3.6.1"), np.registerPlugin(n1);
  let nk = n1.create(
    "smooth",
    "M0,0 C0.084,0.514 0.208,0.69 0.3,0.8 0.422,0.92 0.496,1 1,1"
  );
  /*!
   * DrawSVGPlugin 3.4.0
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var nA,
    n4,
    n6,
    nB,
    nL,
    n2 = function () {
      return "undefined" != typeof window;
    },
    nO = function () {
      return nA || (n2() && (nA = window.gsap) && nA.registerPlugin && nA);
    },
    n3 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    n5 = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    nP = function (t) {
      return Math.round(1e4 * t) / 1e4;
    },
    n7 = function (t) {
      return parseFloat(t || 0);
    },
    nR = function (t, e) {
      return n7(t.getAttribute(e));
    },
    nq = Math.sqrt,
    nz = function (t, e, i, r, n, s) {
      return nq(
        Math.pow((n7(i) - n7(t)) * n, 2) + Math.pow((n7(r) - n7(e)) * s, 2)
      );
    },
    nM = function (t) {
      return console.warn(t);
    },
    nV = function (t) {
      return "non-scaling-stroke" === t.getAttribute("vector-effect");
    },
    nH = function (t) {
      if (!(t = n4(t)[0])) return 0;
      var e,
        i,
        r,
        n,
        s,
        o,
        a,
        l = t.tagName.toLowerCase(),
        u = t.style,
        c = 1,
        h = 1;
      nV(t) &&
        ((c = nq((h = t.getScreenCTM()).a * h.a + h.b * h.b)),
        (h = nq(h.d * h.d + h.c * h.c)));
      try {
        i = t.getBBox();
      } catch (f) {
        nM(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var d = i || { x: 0, y: 0, width: 0, height: 0 },
        p = d.x,
        $ = d.y,
        D = d.width,
        g = d.height;
      if (
        ((i && (D || g)) ||
          !n5[l] ||
          ((D = nR(t, n5[l][0])),
          (g = nR(t, n5[l][1])),
          "rect" !== l && "line" !== l && ((D *= 2), (g *= 2)),
          "line" === l &&
            ((p = nR(t, "x1")),
            ($ = nR(t, "y1")),
            (D = Math.abs(D - p)),
            (g = Math.abs(g - $)))),
        "path" === l)
      )
        (n = u.strokeDasharray),
          (u.strokeDasharray = "none"),
          (e = t.getTotalLength() || 0),
          c !== h &&
            nM(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (e *= (c + h) / 2),
          (u.strokeDasharray = n);
      else if ("rect" === l) e = 2 * D * c + 2 * g * h;
      else if ("line" === l) e = nz(p, $, p + D, $ + g, c, h);
      else if ("polyline" === l || "polygon" === l)
        for (
          r = t.getAttribute("points").match(n3) || [],
            "polygon" === l && r.push(r[0], r[1]),
            e = 0,
            s = 2;
          s < r.length;
          s += 2
        )
          e += nz(r[s - 2], r[s - 1], r[s], r[s + 1], c, h) || 0;
      else
        ("circle" !== l && "ellipse" !== l) ||
          (e =
            Math.PI *
            (3 * ((o = (D / 2) * c) + (a = (g / 2) * h)) -
              nq((3 * o + a) * (o + 3 * a))));
      return e || 0;
    },
    nj = function (t, e) {
      if (!(t = n4(t)[0])) return [0, 0];
      e || (e = nH(t) + 1);
      var i = n6.getComputedStyle(t),
        r = i.strokeDasharray || "",
        n = n7(i.strokeDashoffset),
        s = r.indexOf(",");
      return (
        s < 0 && (s = r.indexOf(" ")),
        (r = s < 0 ? e : n7(r.substr(0, s)) || 1e-5) > e && (r = e),
        [Math.max(0, -n), Math.max(0, r - n)]
      );
    },
    nW = function () {
      n2() &&
        (document,
        (n6 = window),
        (nL = nA = nO()),
        (n4 = nA.utils.toArray),
        (nB = -1 !== ((n6.navigator || {}).userAgent || "").indexOf("Edge")));
    },
    nI = {
      version: "3.4.0",
      name: "drawSVG",
      register: function (t) {
        (nA = t), nW();
      },
      init: function (t, e, i, r, n) {
        if (!t.getBBox) return !1;
        nL || nW();
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          d,
          p,
          $ = nH(t) + 1;
        return (
          (this._style = t.style),
          (this._target = t),
          e + "" == "true"
            ? (e = "0 100%")
            : e
            ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
            : (e = "0 0"),
          (o =
            ((u = e),
            (c = $),
            (h = (s = nj(t, $))[0]),
            (p = u.indexOf(" ")) < 0
              ? ((f = void 0 !== h ? h + "" : u), (d = u))
              : ((f = u.substr(0, p)), (d = u.substr(p + 1))),
            (f = ~f.indexOf("%") ? (n7(f) / 100) * c : n7(f)) >
            (d = ~d.indexOf("%") ? (n7(d) / 100) * c : n7(d))
              ? [d, f]
              : [f, d])),
          (this._length = nP($ + 10)),
          0 === s[0] && 0 === o[0]
            ? ((a = Math.max(1e-5, o[1] - $)),
              (this._dash = nP($ + a)),
              (this._offset = nP($ - s[1] + a)),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                nP($ - o[1] + a)
              )))
            : ((this._dash = nP(s[1] - s[0]) || 1e-6),
              (this._offset = nP(-s[0])),
              (this._dashPT = this.add(
                this,
                "_dash",
                this._dash,
                nP(o[1] - o[0]) || 1e-5
              )),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                nP(-o[0])
              ))),
          nB &&
            (l = n6.getComputedStyle(t)).strokeLinecap !== l.strokeLinejoin &&
            ((o = n7(l.strokeMiterlimit)),
            this.add(t.style, "strokeMiterlimit", o, o + 0.01)),
          (this._live = nV(t) || ~(e + "").indexOf("live")),
          this._props.push("drawSVG"),
          1
        );
      },
      render: function (t, e) {
        var i,
          r,
          n,
          s,
          o = e._pt,
          a = e._style;
        if (o) {
          for (
            e._live &&
            (i = nH(e._target) + 11) !== e._length &&
            ((r = i / e._length),
            (e._length = i),
            (e._offsetPT.s *= r),
            (e._offsetPT.c *= r),
            e._dashPT
              ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
              : (e._dash *= r));
            o;

          )
            o.r(t, o.d), (o = o._next);
          (n = e._dash),
            (s = e._offset),
            (i = e._length),
            (a.strokeDashoffset = e._offset),
            1 !== t && t
              ? (a.strokeDasharray = n + "px," + i + "px")
              : (n - s < 0.001 && i - n <= 10 && (a.strokeDashoffset = s + 1),
                (a.strokeDasharray =
                  s < 0.001 && i - n <= 10
                    ? "none"
                    : s === n
                    ? "0px, 999999px"
                    : n + "px," + i + "px"));
        }
      },
      getLength: nH,
      getPosition: nj,
    };
  nO() && nA.registerPlugin(nI);
  class nY extends ty.Transition {
    in({ from: t, to: e, trigger: i, done: r }) {
      np.registerPlugin(nI),
        document.querySelector(".c-play__bg").classList.remove("--play"),
        np
          .timeline({ defaults: { ease: nk } })
          .set(".c-home__bg", { zIndex: 1, opacity: 0, pointerEvents: "none" })
          .fromTo(
            e,
            { opacity: 0, y: "2.2%" },
            { opacity: 1, y: 0, duration: 0.8 }
          )
          .set(".c-play__bg", {
            y: "100%",
            clearProps: "zIndex",
            onComplete() {
              r();
            },
          })
          .from(
            ".js-hero-title .line-child",
            { y: "100%", stagger: 0.2, duration: 1.4 },
            "-=.8"
          )
          .from(".c-visual-line", { scaleX: 0, duration: 0.5 }, "-=1.2")
          .fromTo(
            "#v_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 0.5, ease: "power1.out" },
            "-=.8"
          )
          .fromTo(
            "#i_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 0.6, ease: "power1.out" },
            "-=.7"
          )
          .fromTo(
            "#s_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 0.8, ease: "power1.out" },
            "-=.6"
          )
          .fromTo(
            "#u_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 0.9, ease: "power1.out" },
            "-=.7"
          )
          .fromTo(
            "#a_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 1, ease: "power1.out" },
            "-=.4"
          )
          .fromTo(
            "#l_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 1.2, ease: nk },
            "-=.5"
          )
          .fromTo(
            "#dot_path",
            { drawSVG: 0 },
            { drawSVG: "100%", duration: 0.3, ease: "power1.out" }
          )
          .from(
            ".c-title .o-title-small .line-child",
            { y: "100%", duration: 0.8, stagger: 0.14 },
            "-=2.8"
          );
    }
    out({ from: t, done: e }) {
      np.timeline({ defaults: { ease: nk } })
        .set(".c-play__bg", { opacity: 1 })
        .to(t, {
          y: "-2%",
          opacity: 0.2,
          duration: 0.7,
          ease: "Power4.out",
          onComplete() {
            tf.scrollTo(".c-play-title", { duration: 0, disableLerp: !0 }),
              tf.stop();
          },
        })
        .to(".c-play__bg", { y: 0, duration: 0.7 }, "-=.6")
        .set(".c-play__bg", {
          opacity: 1,
          onComplete() {
            t.remove(), tf.update(), e();
          },
        });
    }
  }
  class nN extends ty.Transition {
    in({ from: t, to: e, trigger: i, done: r }) {
      np.timeline({ defaults: { ease: nk } })
        .fromTo(e, { opacity: 0 }, { opacity: 1 })
        .set(".c-play__bg", { zIndex: 1, opacity: 1 })
        .set(".c-home__bg", {
          y: "100%",
          opacity: 0,
          clearProps: "zIndex",
          onComplete() {
            r();
          },
        })
        .fromTo(
          ".js-hero-title .line-child",
          { y: "100%" },
          { y: "0", duration: 1 }
        )
        .fromTo(
          ".c-play-title > a",
          { x: "20%", opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=1"
        )
        .fromTo(
          ".js-play-row",
          { y: "50%", opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=.5"
        );
    }
    out({ from: t, done: e }) {
      np.timeline({ defaults: { ease: nk } })
        .set(".c-home__bg", { zIndex: 9, opacity: 1 })
        .to(t, {
          y: "-2%",
          opacity: 0.2,
          duration: 0.9,
          onComplete() {
            tf.scrollTo(".c-title", { duration: 0, disableLerp: !0 }),
              tf.stop();
          },
        })
        .to(".c-home__bg", { y: "0", duration: 0.7 }, "-=.8")
        .set(".c-home__bg", { opacity: 1, pointerEvents: "none" })
        .set(".c-play__bg", {
          y: "0",
          opacity: 0,
          pointerEvents: "none",
          onComplete() {
            t.remove(), tf.update(), e();
          },
        });
    }
  }
  /*!
   * strings: 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var nX,
    nG,
    nU,
    nK =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/,
    nQ = /(?:\r|\n|\t\t)/g,
    n9 = /(?:\s\s+)/g,
    nZ = function (t) {
      return nG.getComputedStyle(t);
    },
    nJ = Array.isArray,
    st = [].slice,
    se = function (t, e) {
      var i;
      return nJ(t)
        ? t
        : "string" == (i = typeof t) && !e && t
        ? st.call(nX.querySelectorAll(t), 0)
        : t && "object" === i && "length" in t
        ? st.call(t, 0)
        : t
        ? [t]
        : [];
    },
    si = function (t) {
      return "absolute" === t.position || !0 === t.absolute;
    },
    sr = function (t, e) {
      for (var i, r = e.length; --r > -1; )
        if (((i = e[r]), t.substr(0, i.length) === i)) return i.length;
    },
    sn = function (t, e) {
      void 0 === t && (t = "");
      var i = ~t.indexOf("++"),
        r = 1;
      return (
        i && (t = t.split("++").join("")),
        function () {
          return (
            "<" +
            e +
            " style='position:relative;display:inline-block;'" +
            (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    ss = function t(e, i, r) {
      var n = e.nodeType;
      if (1 === n || 9 === n || 11 === n)
        for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
      else (3 !== n && 4 !== n) || (e.nodeValue = e.nodeValue.split(i).join(r));
    },
    so = function (t, e) {
      for (var i = e.length; --i > -1; ) t.push(e[i]);
    },
    sa = function (t, e, i) {
      for (var r; t && t !== e; ) {
        if ((r = t._next || t.nextSibling))
          return r.textContent.charAt(0) === i;
        t = t.parentNode || t._parent;
      }
    },
    sl = function t(e) {
      var i,
        r,
        n = se(e.childNodes),
        s = n.length;
      for (i = 0; i < s; i++)
        (r = n[i])._isSplit
          ? t(r)
          : (i && 3 === r.previousSibling.nodeType
              ? (r.previousSibling.nodeValue +=
                  3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue)
              : 3 !== r.nodeType && e.insertBefore(r.firstChild, r),
            e.removeChild(r));
    },
    su = function (t, e) {
      return parseFloat(e[t]) || 0;
    },
    sc = function (t, e, i, r, n, s, o) {
      var a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        $,
        D,
        g,
        m,
        v = nZ(t),
        _ = su("paddingLeft", v),
        y = -999,
        b = su("borderBottomWidth", v) + su("borderTopWidth", v),
        x = su("borderLeftWidth", v) + su("borderRightWidth", v),
        C = su("paddingTop", v) + su("paddingBottom", v),
        w = su("paddingLeft", v) + su("paddingRight", v),
        E = 0.2 * su("fontSize", v),
        T = v.textAlign,
        S = [],
        F = [],
        k = [],
        A = e.wordDelimiter || " ",
        B = e.tag ? e.tag : e.span ? "span" : "div",
        L = e.type || e.split || "chars,words,lines",
        O = n && ~L.indexOf("lines") ? [] : null,
        P = ~L.indexOf("words"),
        R = ~L.indexOf("chars"),
        q = si(e),
        z = e.linesClass,
        M = ~(z || "").indexOf("++"),
        V = [];
      for (
        M && (z = z.split("++").join("")),
          u = (l = t.getElementsByTagName("*")).length,
          h = [],
          a = 0;
        a < u;
        a++
      )
        h[a] = l[a];
      if (O || q)
        for (a = 0; a < u; a++)
          ((f = (c = h[a]).parentNode === t) || q || (R && !P)) &&
            ((m = c.offsetTop),
            O &&
              f &&
              Math.abs(m - y) > E &&
              ("BR" !== c.nodeName || 0 === a) &&
              ((d = []), O.push(d), (y = m)),
            q &&
              ((c._x = c.offsetLeft),
              (c._y = m),
              (c._w = c.offsetWidth),
              (c._h = c.offsetHeight)),
            O &&
              (((c._isSplit && f) ||
                (!R && f) ||
                (P && f) ||
                (!P &&
                  c.parentNode.parentNode === t &&
                  !c.parentNode._isSplit)) &&
                (d.push(c), (c._x -= _), sa(c, t, A) && (c._wordEnd = !0)),
              "BR" === c.nodeName &&
                ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                  0 === a) &&
                O.push([])));
      for (a = 0; a < u; a++)
        (f = (c = h[a]).parentNode === t),
          "BR" !== c.nodeName
            ? (q &&
                (($ = c.style),
                P ||
                  f ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                ($.left = c._x + "px"),
                ($.top = c._y + "px"),
                ($.position = "absolute"),
                ($.display = "block"),
                ($.width = c._w + 1 + "px"),
                ($.height = c._h + "px")),
              !P && R
                ? c._isSplit
                  ? ((c._next = c.nextSibling), c.parentNode.appendChild(c))
                  : c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                      c.firstChild &&
                      (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                      " " === c.nextSibling.textContent &&
                      !c.nextSibling.nextSibling &&
                      V.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    h.splice(a--, 1),
                    u--)
                  : f ||
                    ((m = !c.nextSibling && sa(c.parentNode, t, A)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    m && c.parentNode.appendChild(nX.createTextNode(" ")),
                    "span" === B && (c.style.display = "inline"),
                    S.push(c))
                : c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? F.push(c)
                : R &&
                  !c._isSplit &&
                  ("span" === B && (c.style.display = "inline"), S.push(c)))
            : O || q
            ? (c.parentNode && c.parentNode.removeChild(c),
              h.splice(a--, 1),
              u--)
            : P || t.appendChild(c);
      for (a = V.length; --a > -1; ) V[a].parentNode.removeChild(V[a]);
      if (O) {
        for (
          q &&
            ((D = nX.createElement(B)),
            t.appendChild(D),
            (g = D.offsetWidth + "px"),
            (m = D.offsetParent === t ? 0 : t.offsetLeft),
            t.removeChild(D)),
            $ = t.style.cssText,
            t.style.cssText = "display:none;";
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (p = " " === A && (!q || (!P && !R)), a = 0; a < O.length; a++) {
          for (
            d = O[a],
              (D = nX.createElement(B)).style.cssText =
                "display:block;text-align:" +
                T +
                ";position:" +
                (q ? "absolute;" : "relative;"),
              z && (D.className = z + (M ? a + 1 : "")),
              k.push(D),
              u = d.length,
              l = 0;
            l < u;
            l++
          )
            "BR" !== d[l].nodeName &&
              ((c = d[l]),
              D.appendChild(c),
              p && c._wordEnd && D.appendChild(nX.createTextNode(" ")),
              q &&
                (0 === l &&
                  ((D.style.top = c._y + "px"), (D.style.left = _ + m + "px")),
                (c.style.top = "0px"),
                m && (c.style.left = c._x - m + "px")));
          0 === u
            ? (D.innerHTML = "&nbsp;")
            : P || R || (sl(D), ss(D, "\xa0", " ")),
            q && ((D.style.width = g), (D.style.height = c._h + "px")),
            t.appendChild(D);
        }
        t.style.cssText = $;
      }
      q &&
        (o > t.clientHeight &&
          ((t.style.height = o - C + "px"),
          t.clientHeight < o && (t.style.height = o + b + "px")),
        s > t.clientWidth &&
          ((t.style.width = s - w + "px"),
          t.clientWidth < s && (t.style.width = s + x + "px"))),
        so(i, S),
        P && so(r, F),
        so(n, k);
    },
    sh = function (t, e, i, r) {
      var n,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        f = e.tag ? e.tag : e.span ? "span" : "div",
        d = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
        p = si(e),
        $ = e.wordDelimiter || " ",
        D = " " !== $ ? "" : p ? "&#173; " : " ",
        g = "</" + f + ">",
        m = 1,
        v = e.specialChars
          ? "function" == typeof e.specialChars
            ? e.specialChars
            : sr
          : null,
        _ = nX.createElement("div"),
        y = t.parentNode;
      for (
        y.insertBefore(_, t),
          _.textContent = t.nodeValue,
          y.removeChild(t),
          c =
            -1 !==
            (n = (function t(e) {
              var i = e.nodeType,
                r = "";
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) r += t(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
              return r;
            })((t = _))).indexOf("<"),
          !1 !== e.reduceWhiteSpace && (n = n.replace(n9, " ").replace(nQ, "")),
          c && (n = n.split("<").join("{{LT}}")),
          l = n.length,
          s = (" " === n.charAt(0) ? D : "") + i(),
          o = 0;
        o < l;
        o++
      )
        if (((u = n.charAt(o)), v && (h = v(n.substr(o), e.specialChars))))
          (u = n.substr(o, h || 1)),
            (s += d && " " !== u ? r() + u + "</" + f + ">" : u),
            (o += h - 1);
        else if (u === $ && n.charAt(o - 1) !== $ && o) {
          for (s += m ? g : "", m = 0; n.charAt(o + 1) === $; ) (s += D), o++;
          o === l - 1
            ? (s += D)
            : ")" !== n.charAt(o + 1) && ((s += D + i()), (m = 1));
        } else
          "{" === u && "{{LT}}" === n.substr(o, 6)
            ? ((s += d ? r() + "{{LT}}</" + f + ">" : "{{LT}}"), (o += 5))
            : (u.charCodeAt(0) >= 55296 && 56319 >= u.charCodeAt(0)) ||
              (n.charCodeAt(o + 1) >= 65024 && 65039 >= n.charCodeAt(o + 1))
            ? ((a = ((n.substr(o, 12).split(nK) || [])[1] || "").length || 2),
              (s +=
                d && " " !== u
                  ? r() + n.substr(o, a) + "</" + f + ">"
                  : n.substr(o, a)),
              (o += a - 1))
            : (s += d && " " !== u ? r() + u + "</" + f + ">" : u);
      (t.outerHTML = s + (m ? g : "")), c && ss(y, "{{LT}}", "<");
    },
    sf = function t(e, i, r, n) {
      var s,
        o,
        a = se(e.childNodes),
        l = a.length,
        u = si(i);
      if (3 !== e.nodeType || l > 1) {
        for (i.absolute = !1, s = 0; s < l; s++)
          (3 !== (o = a[s]).nodeType || /\S+/.test(o.nodeValue)) &&
            (u &&
              3 !== o.nodeType &&
              "inline" === nZ(o).display &&
              ((o.style.display = "inline-block"),
              (o.style.position = "relative")),
            (o._isSplit = !0),
            t(o, i, r, n));
        return (i.absolute = u), void (e._isSplit = !0);
      }
      sh(e, i, r, n);
    },
    sd = (function () {
      function t(t, e) {
        nU || ((nX = document), (nG = window), (nU = 1)),
          (this.elements = se(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = e || {}),
          this.split(e);
      }
      var e = t.prototype;
      return (
        (e.split = function (t) {
          this.isSplit && this.revert(),
            (this.vars = t = t || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var e,
              i,
              r,
              n = this.elements.length,
              s = t.tag ? t.tag : t.span ? "span" : "div",
              o = sn(t.wordsClass, s),
              a = sn(t.charsClass, s);
            --n > -1;

          )
            (r = this.elements[n]),
              (this._originals[n] = r.innerHTML),
              (e = r.clientHeight),
              (i = r.clientWidth),
              sf(r, t, o, a),
              sc(r, t, this.chars, this.words, this.lines, i, e);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var t = this._originals;
          if (!t) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (e, i) {
              return (e.innerHTML = t[i]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (t.create = function (e, i) {
          return new t(e, i);
        }),
        t
      );
    })();
  sd.version = "3.4.0";
  var sp,
    s$,
    sD = !1;
  function sg() {
    return (
      s$ ||
        (s$ = (function () {
          try {
            throw Error();
          } catch (t) {
            var e = ("" + t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
            if (e)
              return (
                ("" + e[0]).replace(
                  /^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,
                  "$1"
                ) + "/"
              );
          }
          return "/";
        })()),
      s$
    );
  }
  function sm() {
    return sD || ((sD = !0), (s$ = null), ((sp = {}).getBundleURL = sg)), sp;
  }
  var sv,
    s_,
    sy,
    s8,
    sb = !1;
  function sx(t) {
    if ("" === t) return ".";
    var e = "/" === t[t.length - 1] ? t.slice(0, t.length - 1) : t,
      i = e.lastIndexOf("/");
    return -1 === i ? "." : e.slice(0, i);
  }
  function s0(t, e) {
    if (t === e) return "";
    var i = t.split("/");
    "." === i[0] && i.shift();
    var r,
      n,
      s = e.split("/");
    for (
      "." === s[0] && s.shift(), r = 0;
      (r < s.length || r < i.length) && null == n;
      r++
    )
      i[r] !== s[r] && (n = r);
    var o = [];
    for (r = 0; r < i.length - n; r++) o.push("..");
    return s.length > n && o.push.apply(o, s.slice(n)), o.join("/");
  }
  function sC() {
    return (
      sb ||
        ((sb = !0),
        (sv = {}),
        (s_ = a().resolve),
        (sv = function (t, e) {
          return s0(sx(s_(t)), s_(e));
        }),
        (sy = sx),
        (sv._dirname = sy),
        (s8 = s0),
        (sv._relative = s8)),
      sv
    );
  }
  var sw,
    sE = !1;
  function sT() {
    return (
      sE ||
        ((sE = !0),
        (sw = {}),
        (sw = sm().getBundleURL() + sC()("KAtDQ", "2j8SH"))),
      sw
    );
  }
  var sS,
    sF = !1;
  function s1() {
    return (
      sF ||
        ((sF = !0),
        (sS = {}),
        (sS = sm().getBundleURL() + sC()("KAtDQ", "7G9gf"))),
      sS
    );
  }
  var sk,
    sA = !1;
  function s4() {
    return (
      sA ||
        ((sA = !0),
        (sk = {}),
        (sk = sm().getBundleURL() + sC()("KAtDQ", "72luJ"))),
      sk
    );
  }
  /*!
   * ScrollTrigger 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var s6,
    sB,
    sL,
    s2,
    sO,
    s3,
    s5,
    sP,
    s7,
    sR,
    sq,
    sz,
    sM,
    sV,
    sH,
    sj,
    sW,
    sI,
    sY,
    sN,
    sX,
    sG,
    sU,
    sK,
    sQ,
    s9,
    sZ,
    sJ = 1,
    ot = [],
    oe = [],
    oi = Date.now,
    or = oi(),
    on = 0,
    os = 1,
    oo = function (t) {
      return t;
    },
    oa = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    ol = function () {
      return "undefined" != typeof window;
    },
    ou = function () {
      return s6 || (ol() && (s6 = window.gsap) && s6.registerPlugin && s6);
    },
    oc = function (t) {
      return !!~s5.indexOf(t);
    },
    oh = function (t, e) {
      return ~ot.indexOf(t) && ot[ot.indexOf(t) + 1][e];
    },
    of = function (t, e) {
      var i = e.s,
        r = e.sc,
        n = oe.indexOf(t),
        s = r === o1.sc ? 1 : 2;
      return (
        ~n || (n = oe.push(t) - 1),
        oe[n + s] ||
          (oe[n + s] =
            oh(t, i) ||
            (oc(t)
              ? r
              : function (e) {
                  return arguments.length ? (t[i] = e) : t[i];
                }))
      );
    },
    od = function (t) {
      return (
        oh(t, "getBoundingClientRect") ||
        (oc(t)
          ? function () {
              return (
                (aa.width = sL.innerWidth), (aa.height = sL.innerHeight), aa
              );
            }
          : function () {
              return o4(t);
            })
      );
    },
    op = function (t, e) {
      var i = e.s,
        r = e.d2,
        n = e.d,
        s = e.a;
      return (s = oh(t, (i = "scroll" + r)))
        ? s() - od(t)()[n]
        : oc(t)
        ? Math.max(sO[i], s3[i]) -
          (sL["inner" + r] || sO["client" + r] || s3["client" + r])
        : t[i] - t["offset" + r];
    },
    o$ = function (t, e) {
      for (var i = 0; i < sX.length; i += 3)
        (!e || ~e.indexOf(sX[i + 1])) && t(sX[i], sX[i + 1], sX[i + 2]);
    },
    oD = function (t) {
      return "string" == typeof t;
    },
    og = function (t) {
      return "function" == typeof t;
    },
    om = function (t) {
      return "number" == typeof t;
    },
    ov = function (t) {
      return "object" == typeof t;
    },
    o_ = function (t) {
      return og(t) && t();
    },
    oy = function (t, e) {
      return function () {
        var i = o_(t),
          r = o_(e);
        return function () {
          o_(i), o_(r);
        };
      };
    },
    o8 = Math.abs,
    ob = "left",
    ox = "right",
    o0 = "bottom",
    oC = "width",
    ow = "height",
    oE = "padding",
    oT = "margin",
    oS = "Width",
    oF = {
      s: "scrollLeft",
      p: ob,
      p2: "Left",
      os: ox,
      os2: "Right",
      d: oC,
      d2: oS,
      a: "x",
      sc: function (t) {
        return arguments.length
          ? sL.scrollTo(t, o1.sc())
          : sL.pageXOffset ||
              s2.scrollLeft ||
              sO.scrollLeft ||
              s3.scrollLeft ||
              0;
      },
    },
    o1 = {
      s: "scrollTop",
      p: "top",
      p2: "Top",
      os: o0,
      os2: "Bottom",
      d: ow,
      d2: "Height",
      a: "y",
      op: oF,
      sc: function (t) {
        return arguments.length
          ? sL.scrollTo(oF.sc(), t)
          : sL.pageYOffset || s2.scrollTop || sO.scrollTop || s3.scrollTop || 0;
      },
    },
    ok = function (t) {
      return sL.getComputedStyle(t);
    },
    oA = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    o4 = function (t, e) {
      var i =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== ok(t)[sW] &&
          s6
            .to(t, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        r = t.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    o6 = function (t, e) {
      var i = e.d2;
      return t["offset" + i] || t["client" + i] || 0;
    },
    oB = function (t) {
      var e,
        i = [],
        r = t.labels,
        n = t.duration();
      for (e in r) i.push(r[e] / n);
      return i;
    },
    oL = function (t, e, i, r) {
      return i.split(",").forEach(function (i) {
        return t(e, i, r);
      });
    },
    o2 = function (t, e, i) {
      return t.addEventListener(e, i, { passive: !0 });
    },
    oO = function (t, e, i) {
      return t.removeEventListener(e, i);
    },
    o3 = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    o5 = { toggleActions: "play", anticipatePin: 0 },
    oP = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    o7 = function (t, e) {
      if (oD(t)) {
        var i = t.indexOf("="),
          r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))),
          (t =
            r +
            (t in oP
              ? oP[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    oR = function (t, e, i, r, n, s, o) {
      var a = n.startColor,
        l = n.endColor,
        u = n.fontSize,
        c = n.indent,
        h = n.fontWeight,
        f = s2.createElement("div"),
        d = oc(i) || "fixed" === oh(i, "pinType"),
        p = -1 !== t.indexOf("scroller"),
        $ = d ? s3 : i,
        D = -1 !== t.indexOf("start"),
        g = D ? a : l,
        m =
          "border-color:" +
          g +
          ";font-size:" +
          u +
          ";color:" +
          g +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (m += "position:" + (p && d ? "fixed;" : "absolute;")),
        (p || !d) &&
          (m += (r === o1 ? ox : o0) + ":" + (s + parseFloat(c)) + "px;"),
        o &&
          (m +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (f._isStart = D),
        f.setAttribute("class", "gsap-marker-" + t),
        (f.style.cssText = m),
        (f.innerText = e || 0 === e ? t + "-" + e : t),
        $.children[0] ? $.insertBefore(f, $.children[0]) : $.appendChild(f),
        (f._offset = f["offset" + r.op.d2]),
        oq(f, 0, r, D),
        f
      );
    },
    oq = function (t, e, i, r) {
      var n = { display: "block" },
        s = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (n[i.a + "Percent"] = r ? -100 : 0),
        (n[i.a] = r ? "1px" : 0),
        (n["border" + s + oS] = 1),
        (n["border" + o + oS] = 0),
        (n[i.p] = e + "px"),
        s6.set(t, n);
    },
    oz = [],
    oM = {},
    oV = function () {
      return sR || (sR = s7(at));
    },
    oH = function () {
      sR || ((sR = s7(at)), on || oG("scrollStart"), (on = oi()));
    },
    oj = function () {
      return !sH && !sK && !s2.fullscreenElement && sP.restart(!0);
    },
    oW = {},
    oI = [],
    oY = [],
    oN = function (t) {
      var e,
        i = s6.ticker.frame,
        r = [],
        n = 0;
      if (sZ !== i || sJ) {
        for (oQ(); n < oY.length; n += 4)
          (e = sL.matchMedia(oY[n]).matches) !== oY[n + 3] &&
            ((oY[n + 3] = e),
            e ? r.push(n) : oQ(1, oY[n]) || (og(oY[n + 2]) && oY[n + 2]()));
        for (oK(), n = 0; n < r.length; n++)
          (s9 = oY[(e = r[n])]), (oY[e + 2] = oY[e + 1](t));
        (s9 = 0), sB && o9(0, 1), (sZ = i), oG("matchMedia");
      }
    },
    oX = function t() {
      return oO(af, "scrollEnd", t) || o9(!0);
    },
    oG = function (t) {
      return (
        (oW[t] &&
          oW[t].map(function (t) {
            return t();
          })) ||
        oI
      );
    },
    oU = [],
    oK = function (t) {
      for (var e = 0; e < oU.length; e += 4)
        (t && oU[e + 3] !== t) ||
          ((oU[e].style.cssText = oU[e + 1]), (oU[e + 2].uncache = 1));
    },
    oQ = function (t, e) {
      var i;
      for (sI = 0; sI < oz.length; sI++)
        (i = oz[sI]),
          (e && i.media !== e) ||
            (t
              ? i.kill(1)
              : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
      oK(e), e || oG("revert");
    },
    o9 = function (t, e) {
      if (!on || t) {
        var i = oG("refreshInit");
        for (sG && af.sort(), e || oQ(), sI = 0; sI < oz.length; sI++)
          oz[sI].refresh();
        for (
          i.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
            sI = oz.length;
          sI--;

        )
          oz[sI].scroll.rec = 0;
        sP.pause(), oG("refresh");
      } else o2(af, "scrollEnd", oX);
    },
    oZ = 0,
    oJ = 1,
    at = function () {
      var t = oz.length,
        e = oi(),
        i = e - or >= 50,
        r = t && oz[0].scroll();
      if (
        ((oJ = oZ > r ? -1 : 1),
        (oZ = r),
        i &&
          (on && !sj && e - on > 200 && ((on = 0), oG("scrollEnd")),
          (sM = or),
          (or = e)),
        oJ < 0)
      ) {
        for (sI = t; sI-- > 0; ) oz[sI] && oz[sI].update(0, i);
        oJ = 1;
      } else for (sI = 0; sI < t; sI++) oz[sI] && oz[sI].update(0, i);
      sR = 0;
    },
    ae = [
      ob,
      "top",
      o0,
      ox,
      "marginBottom",
      "marginRight",
      "marginTop",
      "marginLeft",
      "display",
      "flexShrink",
      "float",
      "zIndex",
    ],
    ai = ae.concat([
      oC,
      ow,
      "boxSizing",
      "maxWidth",
      "maxHeight",
      "position",
      oT,
      oE,
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ]),
    ar = function (t, e, i, r) {
      if (t.parentNode !== e) {
        for (var n, s = ae.length, o = e.style, a = t.style; s--; )
          o[(n = ae[s])] = i[n];
        (o.position = "absolute" === i.position ? "absolute" : "relative"),
          "inline" === i.display && (o.display = "inline-block"),
          (a.bottom = a.right = "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o.width = o6(t, oF) + "px"),
          (o.height = o6(t, o1) + "px"),
          (o.padding = a.margin = a.top = a.left = "0"),
          as(r),
          (a.width = a.maxWidth = i.width),
          (a.height = a.maxHeight = i.height),
          (a.padding = i.padding),
          t.parentNode.insertBefore(e, t),
          e.appendChild(t);
      }
    },
    an = /([A-Z])/g,
    as = function (t) {
      if (t) {
        var e,
          i,
          r = t.t.style,
          n = t.length,
          s = 0;
        for ((t.t._gsap || s6.core.getCache(t.t)).uncache = 1; s < n; s += 2)
          (i = t[s + 1]),
            (e = t[s]),
            i
              ? (r[e] = i)
              : r[e] && r.removeProperty(e.replace(an, "-$1").toLowerCase());
      }
    },
    ao = function (t) {
      for (var e = ai.length, i = t.style, r = [], n = 0; n < e; n++)
        r.push(ai[n], i[ai[n]]);
      return (r.t = t), r;
    },
    aa = { left: 0, top: 0 },
    al = function (t, e, i, r, n, s, o, a, l, u, c, h) {
      if (
        (og(t) && (t = t(a)),
        oD(t) &&
          "max" === t.substr(0, 3) &&
          (t = h + ("=" === t.charAt(4) ? o7("0" + t.substr(3), i) : 0)),
        om(t))
      )
        o && oq(o, i, r, !0);
      else {
        og(e) && (e = e(a));
        var f,
          d,
          p,
          $ = sq(e)[0] || s3,
          D = o4($) || {},
          g = t.split(" ");
        (D && (D.left || D.top)) ||
          "none" !== ok($).display ||
          ((p = $.style.display),
          ($.style.display = "block"),
          (D = o4($)),
          p ? ($.style.display = p) : $.style.removeProperty("display")),
          (f = o7(g[0], D[r.d])),
          (d = o7(g[1] || "0", i)),
          (t = D[r.p] - l[r.p] - u + f + n - d),
          o && oq(o, d, r, i - d < 20 || (o._isStart && d > 20)),
          (i -= i - d);
      }
      if (s) {
        var m = t + i,
          v = s._isStart;
        (h = "scroll" + r.d2),
          oq(
            s,
            m,
            r,
            (v && m > 20) ||
              (!v && (c ? Math.max(s3[h], sO[h]) : s.parentNode[h]) <= m + 1)
          ),
          c &&
            ((l = o4(o)),
            c && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + "px"));
      }
      return Math.round(t);
    },
    au = /(?:webkit|moz|length|cssText|inset)/i,
    ac = function (t, e, i, r) {
      if (t.parentNode !== e) {
        var n,
          s,
          o = t.style;
        if (e === s3) {
          for (n in ((t._stOrig = o.cssText), (s = ok(t))))
            +n ||
              au.test(n) ||
              !s[n] ||
              "string" != typeof o[n] ||
              "0" === n ||
              (o[n] = s[n]);
          (o.top = i), (o.left = r);
        } else o.cssText = t._stOrig;
        (s6.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    ah = function (t, e) {
      var i,
        r,
        n = of(t, e),
        s = "_scroll" + e.p2,
        o = function e(o, a, l, u, c) {
          var h = e.tween,
            f = a.onComplete,
            d = {};
          return (
            h && h.kill(),
            (i = Math.round(l)),
            (a[s] = o),
            (a.modifiers = d),
            (d[s] = function (t) {
              return (
                (t = oa(n())) !== i && t !== r && Math.abs(t - i) > 2
                  ? (h.kill(), (e.tween = 0))
                  : (t = l + u * h.ratio + c * h.ratio * h.ratio),
                (r = i),
                (i = oa(t))
              );
            }),
            (a.onComplete = function () {
              (e.tween = 0), f && f.call(h);
            }),
            (h = e.tween = s6.to(t, a))
          );
        };
      return (
        (t[s] = n),
        t.addEventListener("wheel", function () {
          return o.tween && o.tween.kill() && (o.tween = 0);
        }),
        o
      );
    };
  oF.op = o1;
  var af = (function () {
    function t(e, i) {
      sB ||
        t.register(s6) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, i);
    }
    return (
      (t.prototype.init = function (e, i) {
        if (((this.progress = this.start = 0), this.vars && this.kill(1), os)) {
          var r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            d,
            p,
            $,
            D,
            g,
            m,
            v,
            _,
            y,
            b,
            x,
            C,
            w,
            E,
            T,
            S,
            F,
            k,
            A,
            B,
            L,
            O,
            P,
            R,
            q,
            z,
            M,
            V,
            H,
            j,
            W,
            I,
            Y,
            N,
            X,
            G,
            U,
            K,
            Q = (e = oA(oD(e) || om(e) || e.nodeType ? { trigger: e } : e, o5))
              .horizontal
              ? oF
              : o1,
            Z = e,
            J = Z.onUpdate,
            tt = Z.toggleClass,
            te = Z.id,
            ti = Z.onToggle,
            tr = Z.onRefresh,
            tn = Z.scrub,
            ts = Z.trigger,
            to = Z.pin,
            ta = Z.pinSpacing,
            tl = Z.invalidateOnRefresh,
            tu = Z.anticipatePin,
            tc = Z.onScrubComplete,
            th = Z.onSnapComplete,
            tf = Z.once,
            td = Z.snap,
            tp = Z.pinReparent,
            t$ = !tn && 0 !== tn,
            tD = sq(e.scroller || sL)[0],
            tg = s6.core.getCache(tD),
            tm = oc(tD),
            tv =
              "pinType" in e
                ? "fixed" === e.pinType
                : tm || "fixed" === oh(tD, "pinType"),
            t_ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ty = t$ && e.toggleActions.split(" "),
            t8 = "markers" in e ? e.markers : o5.markers,
            tb = tm ? 0 : parseFloat(ok(tD)["border" + Q.p2 + oS]) || 0,
            tx = this,
            t0 =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(tx);
              },
            tC =
              ((r = tD),
              (n = tm),
              (o = (s = Q).d),
              (a = s.d2),
              (l = s.a),
              (l = oh(r, "getBoundingClientRect"))
                ? function () {
                    return l()[o];
                  }
                : function () {
                    return (n ? sL["inner" + a] : r["client" + a]) || 0;
                  }),
            tw =
              ((u = tD),
              !(c = tm) || ~ot.indexOf(u)
                ? od(u)
                : function () {
                    return aa;
                  });
          (tx.media = s9),
            (tu *= 45),
            oz.push(tx),
            (tx.scroller = tD),
            (tx.scroll = of(tD, Q)),
            ($ = tx.scroll()),
            (tx.vars = e),
            (i = i || e.animation),
            "refreshPriority" in e && (sG = 1),
            (tg.tweenScroll = tg.tweenScroll || {
              top: ah(tD, o1),
              left: ah(tD, oF),
            }),
            (tx.tweenTo = h = tg.tweenScroll[Q.p]),
            i &&
              ((i.vars.lazy = !1),
              i._initted ||
                (!1 !== i.vars.immediateRender &&
                  !1 !== e.immediateRender &&
                  i.render(0, !0, !0)),
              (tx.animation = i.pause()),
              (i.scrollTrigger = tx),
              (j = om(tn) && tn) &&
                (H = s6.to(i, {
                  ease: "power3",
                  duration: j,
                  onComplete: function () {
                    return tc && tc(tx);
                  },
                })),
              (M = 0),
              te || (te = i.vars.id)),
            td &&
              (ov(td) || (td = { snapTo: td }),
              "scrollBehavior" in s3.style &&
                s6.set(tm ? [s3, sO] : tD, { scrollBehavior: "auto" }),
              (d = og(td.snapTo)
                ? td.snapTo
                : "labels" === td.snapTo
                ? ((K = i),
                  function (t) {
                    return s6.utils.snap(oB(K), t);
                  })
                : "labelsDirectional" === td.snapTo
                ? ((G = i),
                  function (t, e) {
                    var i,
                      r = oB(G);
                    if (
                      (r.sort(function (t, e) {
                        return t - e;
                      }),
                      e.direction > 0)
                    ) {
                      for (t -= 1e-4, i = 0; i < r.length; i++)
                        if (r[i] >= t) return r[i];
                      return r.pop();
                    }
                    for (i = r.length, t += 1e-4; i--; )
                      if (r[i] <= t) return r[i];
                    return r[0];
                  })
                : s6.utils.snap(td.snapTo)),
              (W = ov((W = td.duration || { min: 0.1, max: 2 }))
                ? sz(W.min, W.max)
                : sz(W, W)),
              (I = s6
                .delayedCall(td.delay || j / 2 || 0.1, function () {
                  if (10 > Math.abs(tx.getVelocity()) && !sj) {
                    var t = i && !t$ ? i.totalProgress() : tx.progress,
                      e = ((t - V) / (oi() - sM)) * 1e3 || 0,
                      r = (o8(e / 2) * e) / 0.185,
                      n = t + (!1 === td.inertia ? 0 : r),
                      s = sz(0, 1, d(n, tx)),
                      o = tx.scroll(),
                      a = Math.round(g + s * C),
                      l = td,
                      u = l.onStart,
                      c = l.onInterrupt,
                      f = l.onComplete,
                      p = h.tween;
                    if (o <= m && o >= g && a !== o) {
                      if (p && !p._initted && p.data <= Math.abs(a - o)) return;
                      h(
                        a,
                        {
                          duration: W(
                            o8(
                              (0.185 * Math.max(o8(n - t), o8(s - t))) /
                                e /
                                0.05 || 0
                            )
                          ),
                          ease: td.ease || "power3",
                          data: Math.abs(a - o),
                          onInterrupt: function () {
                            return I.restart(!0) && c && c(tx);
                          },
                          onComplete: function () {
                            (M = V =
                              i && !t$ ? i.totalProgress() : tx.progress),
                              th && th(tx),
                              f && f(tx);
                          },
                        },
                        o,
                        r * C,
                        a - o - r * C
                      ),
                        u && u(tx, h.tween);
                    }
                  } else tx.isActive && I.restart(!0);
                })
                .pause())),
            te && (oM[te] = tx),
            (ts = tx.trigger = sq(ts || to)[0]),
            (to = !0 === to ? ts : sq(to)[0]),
            oD(tt) && (tt = { targets: ts, className: tt }),
            to &&
              (!1 === ta ||
                ta === oT ||
                (ta = !(!ta && "flex" === ok(to.parentNode).display) && oE),
              (tx.pin = to),
              !1 !== e.force3D && s6.set(to, { force3D: !0 }),
              (f = s6.core.getCache(to)).spacer
                ? (w = f.pinState)
                : ((f.spacer = S = s2.createElement("div")),
                  S.setAttribute(
                    "class",
                    "pin-spacer" + (te ? " pin-spacer-" + te : "")
                  ),
                  (f.pinState = w = ao(to))),
              (tx.spacer = S = f.spacer),
              (O = (z = ok(to))[ta + Q.os2]),
              (k = s6.getProperty(to)),
              (A = s6.quickSetter(to, Q.a, "px")),
              ar(to, S, z),
              (T = ao(to))),
            t8 &&
              ((x = ov(t8) ? oA(t8, o3) : o3),
              (y = oR("scroller-start", te, tD, Q, x, 0)),
              (b = oR("scroller-end", te, tD, Q, x, 0, y)),
              (F = y["offset" + Q.op.d2]),
              (v = oR("start", te, tD, Q, x, F)),
              (_ = oR("end", te, tD, Q, x, F)),
              tv ||
                (((U = tm ? s3 : tD).style.position =
                  "absolute" === ok(U).position ? "absolute" : "relative"),
                s6.set([y, b], { force3D: !0 }),
                (R = s6.quickSetter(y, Q.a, "px")),
                (q = s6.quickSetter(b, Q.a, "px")))),
            (tx.revert = function (t) {
              var e = !1 !== t || !tx.enabled,
                r = sH;
              e !== p &&
                (e &&
                  ((N = Math.max(tx.scroll(), tx.scroll.rec || 0)),
                  (Y = tx.progress),
                  (X = i && i.progress())),
                v &&
                  [v, _, y, b].forEach(function (t) {
                    return (t.style.display = e ? "none" : "block");
                  }),
                e && (sH = 1),
                tx.update(e),
                (sH = r),
                !to ||
                  (e
                    ? (function (t, e, i) {
                        if ((as(i), t.parentNode === e)) {
                          var r = e.parentNode;
                          r && (r.insertBefore(t, e), r.removeChild(e));
                        }
                      })(to, S, w)
                    : (tp && tx.isActive) || ar(to, S, ok(to), P)),
                (p = e));
            }),
            (tx.refresh = function (r, n) {
              if ((!sH && tx.enabled) || n) {
                if (to && r && on) o2(t, "scrollEnd", oX);
                else {
                  (sH = 1),
                    H && H.pause(),
                    tl && i && i.progress(0).invalidate(),
                    p || tx.revert();
                  for (
                    var s,
                      o,
                      a,
                      l,
                      u,
                      c,
                      h,
                      f,
                      d,
                      x = tC(),
                      F = tw(),
                      A = op(tD, Q),
                      O = 0,
                      R = 0,
                      q = e.end,
                      z = e.endTrigger || ts,
                      M =
                        e.start ||
                        (0 !== e.start && ts ? (to ? "0 0" : "0 100%") : 0),
                      V = (ts && Math.max(0, oz.indexOf(tx))) || 0,
                      j = V;
                    j--;

                  )
                    (c = oz[j]).end || c.refresh(0, 1) || (sH = 1),
                      (h = c.pin) && (h === ts || h === to) && c.revert();
                  for (
                    g =
                      al(M, ts, x, Q, tx.scroll(), v, y, tx, F, tb, tv, A) ||
                      (to ? -0.001 : 0),
                      og(q) && (q = q(tx)),
                      oD(q) &&
                        !q.indexOf("+=") &&
                        (~q.indexOf(" ")
                          ? (q = (oD(M) ? M.split(" ")[0] : "") + q)
                          : ((O = o7(q.substr(2), x)),
                            (q = oD(M) ? M : g + O),
                            (z = ts))),
                      C =
                        (m =
                          Math.max(
                            g,
                            al(
                              q || (z ? "100% 0" : A),
                              z,
                              x,
                              Q,
                              tx.scroll() + O,
                              _,
                              b,
                              tx,
                              F,
                              tb,
                              tv,
                              A
                            )
                          ) || -0.001) - g ||
                        ((g -= 0.01) && 0.001),
                      O = 0,
                      j = V;
                    j--;

                  )
                    (h = (c = oz[j]).pin) &&
                      c.start - c._pinPush < g &&
                      ((s = c.end - c.start),
                      h === ts && (O += s),
                      h === to && (R += s));
                  if (
                    ((g += O),
                    (m += O),
                    (tx._pinPush = R),
                    v && O && (((s = {})[Q.a] = "+=" + O), s6.set([v, _], s)),
                    to)
                  )
                    (s = ok(to)),
                      (l = Q === o1),
                      (a = tx.scroll()),
                      (B = parseFloat(k(Q.a)) + R),
                      !A &&
                        m > 1 &&
                        ((tm ? s3 : tD).style["overflow-" + Q.a] = "scroll"),
                      ar(to, S, s),
                      (T = ao(to)),
                      (o = o4(to, !0)),
                      (f = tv && of(tD, l ? oF : o1)()),
                      ta &&
                        (((P = [ta + Q.os2, C + R + "px"]).t = S),
                        (j = ta === oE ? o6(to, Q) + C + R : 0) &&
                          P.push(Q.d, j + "px"),
                        as(P),
                        tv && tx.scroll(N)),
                      tv &&
                        (((u = {
                          top: o.top + (l ? a - g : f) + "px",
                          left: o.left + (l ? f : a - g) + "px",
                          boxSizing: "border-box",
                          position: "fixed",
                        }).width = u.maxWidth =
                          Math.ceil(o.width) + "px"),
                        (u.height = u.maxHeight = Math.ceil(o.height) + "px"),
                        (u.margin =
                          u.marginTop =
                          u.marginRight =
                          u.marginBottom =
                          u.marginLeft =
                            "0"),
                        (u.padding = s.padding),
                        (u.paddingTop = s.paddingTop),
                        (u.paddingRight = s.paddingRight),
                        (u.paddingBottom = s.paddingBottom),
                        (u.paddingLeft = s.paddingLeft),
                        (E = (function (t, e, i) {
                          for (
                            var r, n = [], s = t.length, o = i ? 8 : 0;
                            o < s;
                            o += 2
                          )
                            (r = t[o]), n.push(r, r in e ? e[r] : t[o + 1]);
                          return (n.t = t.t), n;
                        })(w, u, tp))),
                      i
                        ? ((d = i._initted),
                          sU(1),
                          i.progress(1, !0),
                          (L = k(Q.a) - B + C + R),
                          C !== L && E.splice(E.length - 2, 2),
                          i.progress(0, !0),
                          d || i.invalidate(),
                          sU(0))
                        : (L = C);
                  else if (ts && tx.scroll())
                    for (o = ts.parentNode; o && o !== s3; )
                      o._pinOffset &&
                        ((g -= o._pinOffset), (m -= o._pinOffset)),
                        (o = o.parentNode);
                  for (j = 0; j < V; j++)
                    (c = oz[j].pin) &&
                      (c === ts || c === to) &&
                      oz[j].revert(!1);
                  (tx.start = g),
                    (tx.end = m),
                    ($ = D = tx.scroll()) < N && tx.scroll(N),
                    tx.revert(!1),
                    (sH = 0),
                    i &&
                      t$ &&
                      i._initted &&
                      i.progress(X, !0).render(i.time(), !0, !0),
                    Y !== tx.progress &&
                      (H && i.totalProgress(Y, !0),
                      (tx.progress = Y),
                      tx.update()),
                    to && ta && (S._pinOffset = Math.round(tx.progress * L)),
                    tr && tr(tx);
                }
              }
            }),
            (tx.getVelocity = function () {
              return ((tx.scroll() - D) / (oi() - sM)) * 1e3 || 0;
            }),
            (tx.update = function (t, e) {
              var r,
                n,
                s,
                o,
                a,
                l = tx.scroll(),
                u = t ? 0 : (l - g) / C,
                c = u < 0 ? 0 : u > 1 ? 1 : u || 0,
                f = tx.progress;
              if (
                (e &&
                  ((D = $),
                  ($ = l),
                  td && ((V = M), (M = i && !t$ ? i.totalProgress() : c))),
                tu &&
                  !c &&
                  to &&
                  !sH &&
                  !sJ &&
                  on &&
                  g < l + ((l - D) / (oi() - sM)) * tu &&
                  (c = 1e-4),
                c !== f && tx.enabled)
              ) {
                if (
                  ((o =
                    (a = (r = tx.isActive = !!c && c < 1) != (!!f && f < 1)) ||
                    !!c != !!f),
                  (tx.direction = c > f ? 1 : -1),
                  (tx.progress = c),
                  t$ ||
                    (!H || sH || sJ
                      ? i && i.totalProgress(c, !!sH)
                      : ((H.vars.totalProgress = c), H.invalidate().restart())),
                  to)
                ) {
                  if ((t && ta && (S.style[ta + Q.os2] = O), tv)) {
                    if (o) {
                      if (
                        ((s = !t && c > f && m + 1 > l && l + 1 >= op(tD, Q)),
                        tp)
                      ) {
                        if (!t && (r || s)) {
                          var d = o4(to, !0),
                            p = l - g;
                          ac(
                            to,
                            s3,
                            d.top + (Q === o1 ? p : 0) + "px",
                            d.left + (Q === o1 ? 0 : p) + "px"
                          );
                        } else ac(to, S);
                      }
                      as(r || s ? E : T),
                        (L !== C && c < 1 && r) ||
                          A(B + (1 !== c || s ? 0 : L));
                    }
                  } else A(B + L * c);
                }
                !td || h.tween || sH || sJ || I.restart(!0),
                  tt &&
                    (a || (tf && c && (c < 1 || !sQ))) &&
                    sq(tt.targets).forEach(function (t) {
                      return t.classList[r || tf ? "add" : "remove"](
                        tt.className
                      );
                    }),
                  !J || t$ || t || J(tx),
                  o && !sH
                    ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3),
                      t$ &&
                        ((s =
                          (!a && "none" !== ty[n + 1] && ty[n + 1]) || ty[n]),
                        i &&
                          ("complete" === s || "reset" === s || s in i) &&
                          ("complete" === s
                            ? i.pause().totalProgress(1)
                            : "reset" === s
                            ? i.restart(!0).pause()
                            : i[s]()),
                        J && J(tx)),
                      (!a && sQ) ||
                        (ti && a && ti(tx),
                        t_[n] && t_[n](tx),
                        tf && (1 === c ? tx.kill(!1, 1) : (t_[n] = 0)),
                        a || (t_[(n = 1 === c ? 1 : 3)] && t_[n](tx))))
                    : t$ && J && !sH && J(tx);
              }
              q && (R(l + (y._isFlipped ? 1 : 0)), q(l));
            }),
            (tx.enable = function () {
              tx.enabled ||
                ((tx.enabled = !0),
                o2(tD, "resize", oj),
                o2(tD, "scroll", oH),
                t0 && o2(t, "refreshInit", t0),
                i && i.add
                  ? s6.delayedCall(0.01, function () {
                      return g || m || tx.refresh();
                    }) &&
                    (C = 0.01) &&
                    (g = m = 0)
                  : tx.refresh());
            }),
            (tx.disable = function (e, i) {
              if (
                tx.enabled &&
                (!1 !== e && tx.revert(),
                (tx.enabled = tx.isActive = !1),
                i || (H && H.pause()),
                (N = 0),
                f && (f.uncache = 1),
                t0 && oO(t, "refreshInit", t0),
                I && (I.pause(), h.tween && h.tween.kill() && (h.tween = 0)),
                !tm)
              ) {
                for (var r = oz.length; r--; )
                  if (oz[r].scroller === tD && oz[r] !== tx) return;
                oO(tD, "resize", oj), oO(tD, "scroll", oH);
              }
            }),
            (tx.kill = function (t, e) {
              tx.disable(t, e), te && delete oM[te];
              var r = oz.indexOf(tx);
              oz.splice(r, 1),
                r === sI && oJ > 0 && sI--,
                i &&
                  ((i.scrollTrigger = null), t && i.render(-1), e || i.kill()),
                v &&
                  [v, _, y, b].forEach(function (t) {
                    return t.parentNode.removeChild(t);
                  }),
                to &&
                  (f && (f.uncache = 1),
                  (r = 0),
                  oz.forEach(function (t) {
                    return t.pin === to && r++;
                  }),
                  r || (f.spacer = 0));
            }),
            tx.enable();
        } else this.update = this.refresh = this.kill = oo;
      }),
      (t.register = function (e) {
        if (
          !sB &&
          ((s6 = e || ou()),
          ol() &&
            window.document &&
            ((sL = window),
            (sO = (s2 = document).documentElement),
            (s3 = s2.body)),
          s6 &&
            ((sq = s6.utils.toArray),
            (sz = s6.utils.clamp),
            (sU = s6.core.suppressOverwrites || oo),
            s6.core.globals("ScrollTrigger", t),
            s3))
        ) {
          (s7 =
            sL.requestAnimationFrame ||
            function (t) {
              return setTimeout(t, 16);
            }),
            o2(sL, "wheel", oH),
            (s5 = [sL, s2, sO, s3]),
            o2(s2, "scroll", oH);
          var i,
            r = s3.style,
            n = r.borderTop;
          (r.borderTop = "1px solid #000"),
            (i = o4(s3)),
            (o1.m = Math.round(i.top + o1.sc()) || 0),
            (oF.m = Math.round(i.left + oF.sc()) || 0),
            n ? (r.borderTop = n) : r.removeProperty("border-top"),
            (sV = setInterval(oV, 200)),
            s6.delayedCall(0.5, function () {
              return (sJ = 0);
            }),
            o2(s2, "touchcancel", oo),
            o2(s3, "touchstart", oo),
            oL(o2, s2, "pointerdown,touchstart,mousedown", function () {
              return (sj = 1);
            }),
            oL(o2, s2, "pointerup,touchend,mouseup", function () {
              return (sj = 0);
            }),
            (sW = s6.utils.checkPrefix("transform")),
            ai.push(sW),
            (sB = oi()),
            (sP = s6.delayedCall(0.2, o9).pause()),
            (sX = [
              s2,
              "visibilitychange",
              function () {
                var t = sL.innerWidth,
                  e = sL.innerHeight;
                s2.hidden
                  ? ((sY = t), (sN = e))
                  : (sY === t && sN === e) || oj();
              },
              s2,
              "DOMContentLoaded",
              o9,
              sL,
              "load",
              function () {
                return on || o9();
              },
              sL,
              "resize",
              oj,
            ]),
            o$(o2);
        }
        return sB;
      }),
      (t.defaults = function (t) {
        for (var e in t) o5[e] = t[e];
      }),
      (t.kill = function () {
        (os = 0),
          oz.slice(0).forEach(function (t) {
            return t.kill(1);
          });
      }),
      (t.config = function (t) {
        "limitCallbacks" in t && (sQ = !!t.limitCallbacks);
        var e = t.syncInterval;
        (e && clearInterval(sV)) || ((sV = e) && setInterval(oV, e)),
          "autoRefreshEvents" in t &&
            (o$(oO) || o$(o2, t.autoRefreshEvents || "none"),
            (sK = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
      }),
      (t.scrollerProxy = function (t, e) {
        var i = sq(t)[0],
          r = oe.indexOf(i),
          n = oc(i);
        ~r && oe.splice(r, n ? 6 : 2),
          n ? ot.unshift(sL, e, s3, e, sO, e) : ot.unshift(i, e);
      }),
      (t.matchMedia = function (t) {
        var e, i, r, n, s;
        for (i in t)
          (r = oY.indexOf(i)),
            (n = t[i]),
            (s9 = i),
            "all" === i
              ? n()
              : (e = sL.matchMedia(i)) &&
                (e.matches && (s = n()),
                ~r
                  ? ((oY[r + 1] = oy(oY[r + 1], n)),
                    (oY[r + 2] = oy(oY[r + 2], s)))
                  : ((r = oY.length),
                    oY.push(i, n, s),
                    e.addListener
                      ? e.addListener(oN)
                      : e.addEventListener("change", oN)),
                (oY[r + 3] = e.matches)),
            (s9 = 0);
        return oY;
      }),
      (t.clearMatchMedia = function (t) {
        t || (oY.length = 0), (t = oY.indexOf(t)) >= 0 && oY.splice(t, 4);
      }),
      t
    );
  })();
  (af.version = "3.6.1"),
    (af.saveStyles = function (t) {
      return t
        ? sq(t).forEach(function (t) {
            if (t && t.style) {
              var e = oU.indexOf(t);
              e >= 0 && oU.splice(e, 4),
                oU.push(t, t.style.cssText, s6.core.getCache(t), s9);
            }
          })
        : oU;
    }),
    (af.revert = function (t, e) {
      return oQ(!t, e);
    }),
    (af.create = function (t, e) {
      return new af(t, e);
    }),
    (af.refresh = function (t) {
      return t ? oj() : o9(!0);
    }),
    (af.update = at),
    (af.maxScroll = function (t, e) {
      return op(t, e ? oF : o1);
    }),
    (af.getScrollFunc = function (t, e) {
      return of(sq(t)[0], e ? oF : o1);
    }),
    (af.getById = function (t) {
      return oM[t];
    }),
    (af.getAll = function () {
      return oz.slice(0);
    }),
    (af.isScrolling = function () {
      return !!on;
    }),
    (af.addEventListener = function (t, e) {
      var i = oW[t] || (oW[t] = []);
      ~i.indexOf(e) || i.push(e);
    }),
    (af.removeEventListener = function (t, e) {
      var i = oW[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    }),
    (af.batch = function (t, e) {
      var i,
        r = [],
        n = {},
        s = e.interval || 0.016,
        o = e.batchMax || 1e9,
        a = function (t, e) {
          var i = [],
            r = [],
            n = s6
              .delayedCall(s, function () {
                e(i, r), (i = []), (r = []);
              })
              .pause();
          return function (t) {
            i.length || n.restart(!0),
              i.push(t.trigger),
              r.push(t),
              o <= i.length && n.progress(1);
          };
        };
      for (i in e)
        n[i] =
          "on" === i.substr(0, 2) && og(e[i]) && "onRefreshInit" !== i
            ? a(0, e[i])
            : e[i];
      return (
        og(o) &&
          ((o = o()),
          o2(af, "refresh", function () {
            return (o = e.batchMax());
          })),
        sq(t).forEach(function (t) {
          var e = {};
          for (i in n) e[i] = n[i];
          (e.trigger = t), r.push(af.create(e));
        }),
        r
      );
    }),
    (af.sort = function (t) {
      return oz.sort(
        t ||
          function (t, e) {
            return (
              -1e6 * (t.vars.refreshPriority || 0) +
              t.start -
              (e.start + -1e6 * (e.vars.refreshPriority || 0))
            );
          }
      );
    }),
    ou() && s6.registerPlugin(af);
  class ad extends ty.Renderer {
    onEnter() {
      np.registerPlugin(nI),
        np.registerPlugin(af),
        document.querySelectorAll(".c-project").forEach(function (e) {
          e.addEventListener("mouseenter", () => {
            t.set(e.querySelector("#line1"), { drawSVG: "100%" })
              .set(e.querySelector("#line2"), { drawSVG: 0 })
              .set(e.querySelector("#arrow-head-1"), { drawSVG: "100%" })
              .set(e.querySelector("#arrow-head-2"), { drawSVG: 0 })
              .to(e.querySelector("#line1"), {
                drawSVG: "100% 100%",
                duration: 0.2,
              })
              .to(e.querySelector("#arrow-head-1"), {
                drawSVG: "100% 100%",
                duration: 0.2,
              })
              .to(e.querySelector("#arrow-head-2"), {
                drawSVG: "100%",
                duration: 0.4,
              })
              .to(e.querySelector("#line2"), {
                drawSVG: "100%",
                duration: 0.2,
              });
          });
        });
      let t = np.timeline();
      if (
        ((window.onload = () => {
          let t = document.querySelector(".c-loader"),
            e = document.querySelector(".js-loader-title");
          e.classList.remove("is-loading"),
            e.classList.add("is-loaded"),
            window.setTimeout(() => {
              t.classList.remove("is-loading"), t.classList.add("is-loaded");
            }, 800),
            np
              .timeline({ delay: 0.6, defaults: { ease: nk } })
              .from(
                ".js-hero-title .line-child",
                { y: "40%", rotateX: "-90deg", stagger: 0.2, duration: 1.9 },
                "+=1"
              )
              .from(".c-visual-line", { scaleX: 0, duration: 0.5 }, "-=1.2")
              .fromTo(
                "#v_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.5, ease: "power1.out" },
                "-=.8"
              )
              .fromTo(
                "#i_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.6, ease: "power1.out" },
                "-=.7"
              )
              .fromTo(
                "#s_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.8, ease: "power1.out" },
                "-=.6"
              )
              .fromTo(
                "#u_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.9, ease: "power1.out" },
                "-=.5"
              )
              .fromTo(
                "#a_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 1, ease: "power1.out" },
                "-=.4"
              )
              .fromTo(
                "#l_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 1.2, ease: nk },
                "-=.3"
              )
              .fromTo(
                "#dot_path",
                { drawSVG: 0 },
                { drawSVG: "100%", duration: 0.3, ease: "power1.out" }
              )
              .from(
                ".c-title .o-title-small .line-child",
                { y: "100%", duration: 0.8, stagger: 0.14 },
                "-=2.8"
              );
        }),
        tf.on("scroll", af.update),
        af.scrollerProxy("#js-scroll", {
          scrollTop: function (t) {
            return arguments.length
              ? tf.scrollTo(t, 0, 0)
              : tf.scroll.instance.scroll.y;
          },
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: document.querySelector("#js-scroll").style.transform
            ? "transform"
            : "fixed",
        }),
        np.utils.toArray(".js-reveal").forEach((t) => {
          np.from(t.querySelectorAll(".line-child"), {
            scrollTrigger: { trigger: t, scroller: "#js-scroll" },
            y: "100%",
            ease: nk,
            delay: 0.1,
            duration: 1.2,
            stagger: 0.1,
          });
        }),
        np.utils.toArray(".c-honors__list").forEach((t) => {
          np.from(t.querySelectorAll(".c-honors__list p > span"), {
            scrollTrigger: {
              trigger: t,
              scroller: "#js-scroll",
              start: "10 center",
            },
            y: "100%",
            duration: 1.2,
            stagger: 0.1,
            ease: nk,
          });
        }),
        np.utils.toArray(".c-honors__list").forEach((t) => {
          np.from(t.querySelectorAll(".c-honors__list li a"), {
            scrollTrigger: {
              trigger: t,
              scroller: "#js-scroll",
              start: "10 center",
            },
            x: "-90%",
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: nk,
          });
        }),
        window.innerWidth > 1e3)
      ) {
        let e = document.querySelectorAll(".js-cards > div");
        np.from(e[0], {
          scrollTrigger: { trigger: e[0], scroller: "#js-scroll", scrub: !0 },
          y: "-18%",
          duration: 2.8,
          rotate: "-20deg",
        }),
          np.from(e[1], {
            scrollTrigger: { trigger: e[1], scroller: "#js-scroll", scrub: !0 },
            y: "-12%",
            duration: 2.8,
            rotate: "-10deg",
          }),
          np.from(e[2], {
            scrollTrigger: { trigger: e[2], scroller: "#js-scroll", scrub: !0 },
            y: "-6%",
            duration: 2.8,
            rotate: "-5deg",
          });
      }
      if (window.innerWidth < 1e3) {
        let i = document.querySelectorAll(".js-cards > div");
        np.from(i[0], {
          scrollTrigger: {
            trigger: i[0],
            scroller: "#js-scroll",
            end: "bottom 0",
            ease: "Power0.easeNone",
            scrub: !0,
          },
          y: "-35%",
        }),
          np.from(i[1], {
            scrollTrigger: {
              trigger: i[1],
              scroller: "#js-scroll",
              end: "bottom 0",
              ease: "Power0.easeNone",
              scrub: !0,
            },
            y: "-22%",
          }),
          np.from(i[2], {
            scrollTrigger: {
              trigger: i[2],
              scroller: "#js-scroll",
              end: "bottom 0",
              ease: "Power0.easeNone",
              scrub: !0,
            },
            y: "-10%",
          });
      }
      function r() {
        document.querySelector("nav").classList.add("--white");
      }
      function n() {
        document.querySelector("nav").classList.remove("--white");
      }
      af.create({
        trigger: "footer",
        scroller: "#js-scroll",
        start: "top 50",
        onEnter: r,
        onLeave: n,
        onEnterBack: r,
        onLeaveBack: n,
      }),
        np.from("#c-circle", {
          scrollTrigger: {
            trigger: "footer",
            scroller: "#js-scroll",
            scrub: !0,
          },
          y: "-70%",
          duration: 2,
          ease: nk,
        }),
        af.addEventListener("refresh", () => tf.update()),
        af.refresh();
      var s = ["#C1C6D7", "#FF99A8", "#DBCABD", "#FFBC99", "#E5B5B3"];
      let o = document.querySelectorAll(".js-project"),
        a = document.querySelector("#js-cursor"),
        l = document.querySelector("#js-work-bg"),
        u = document.querySelectorAll("#js-cursor > div");
      function c(t) {
        var e;
        let i = new Date(),
          r = i.getTime() + 6e4 * i.getTimezoneOffset(),
          n = new Date(r + 36e5 * t);
        return (
          n.getHours() + ":" + ((e = n.getMinutes()) < 10 && (e = "0" + e), e)
        );
      }
      function h() {
        td.open(),
          1 == td.first &&
            (setTimeout(() => {
              td.next_query();
            }, 1e3),
            setTimeout(() => {
              td.next_query();
            }, 4500),
            (td.first = !1));
      }
      o.forEach((t, e) => {
        t.addEventListener("mouseenter", (t) => {
          u[e].classList.add("--visible"),
            l.classList.add("--transparent"),
            (l.style = `background: ${s[e]}`);
        }),
          t.addEventListener("mouseleave", (t) => {
            u[e].classList.remove("--visible"),
              l.classList.remove("--transparent");
          });
      }),
        document
          .querySelector("#js-work")
          .addEventListener("mousemove", (t) => {
            np.to(a, { x: t.clientX - 18, y: t.clientY - 10, duration: 0.5 });
          }),
        document.querySelectorAll(".js-year").forEach((t) => {
          t.innerHTML = "\xa9" + new Date().getFullYear();
        }),
        (document.querySelectorAll(".js-time")[0].innerHTML = c(2)),
        (document.querySelectorAll(".js-time")[1].innerHTML = c(2)),
        setInterval(() => {
          let t = document.querySelectorAll(".js-time");
          for (let e of t) e.innerHTML = c(2);
        }, 6e4);
      let f,
        d = document.querySelector(".c-cate"),
        p = document.querySelector(".c-cate > img"),
        $ = document.querySelectorAll(".c-cate > div > button");
      document.querySelector("#contact_btn").addEventListener("click", () => {
        var t, e;
        (e = 6),
          (t = Math.ceil((t = 0))),
          (f = Math.floor(Math.random() * ((e = Math.floor(e)) - t + 1)) + t),
          (document.querySelector(".c-cate > div").style.display = ""),
          (p.src = sT()),
          4 == f
            ? ((d.style = "display: block"),
              $[0].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (p.src = s1()),
                  setTimeout(() => {
                    (d.style = "display: none"), h();
                  }, 3e3);
              }),
              $[1].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (p.src = s4()),
                  setTimeout(() => {
                    (d.style = "display: none"), h();
                  }, 3e3);
              }))
            : h();
      }),
        window.matchMedia("(max-width: 900px)").matches &&
          window.scrollTo(0, 0),
        document
          .querySelector(".c-footer-credit")
          .addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
          });
    }
    onLeave() {
      window.clearTimeout();
    }
  }
  class ap extends ty.Renderer {
    onEnter() {
      function t() {
        td.open(),
          1 == td.first &&
            (setTimeout(() => {
              td.next_query();
            }, 1e3),
            setTimeout(() => {
              td.next_query();
            }, 4500),
            (td.first = !1));
      }
      window.matchMedia("(max-width: 900px)").matches && window.scrollTo(0, 0),
        document.querySelectorAll(".js-year").forEach((t) => {
          t.innerHTML = "\xa9" + new Date().getFullYear();
        }),
        np.registerPlugin(af),
        setTimeout(() => {
          af.refresh();
        }, 2e3);
      let e,
        i = document.querySelector(".c-cate"),
        r = document.querySelector(".c-cate > img"),
        n = document.querySelectorAll(".c-cate > div > button");
      function s() {
        document.querySelector("nav").classList.add("--white");
      }
      function o() {
        document.querySelector("nav").classList.remove("--white");
      }
      document.querySelector("#contact_btn").addEventListener("click", () => {
        var s, o;
        (o = 6),
          (s = Math.ceil((s = 0))),
          (e = Math.floor(Math.random() * ((o = Math.floor(o)) - s + 1)) + s),
          (document.querySelector(".c-cate > div").style.display = ""),
          (r.src = sT()),
          4 == e
            ? ((i.style = "display: block"),
              n[0].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (r.src = s1()),
                  setTimeout(() => {
                    (i.style = "display: none"), t();
                  }, 3e3);
              }),
              n[1].addEventListener("click", () => {
                (document.querySelector(".c-cate > div").style.display =
                  "none"),
                  (r.src = s4()),
                  setTimeout(() => {
                    (i.style = "display: none"), t();
                  }, 3e3);
              }))
            : t();
      }),
        af.create({
          trigger: "footer",
          scroller: "#js-scroll",
          start: "top 50",
          onEnter: s,
          onLeave: o,
          onEnterBack: s,
          onLeaveBack: o,
        }),
        np.from("#c-circle", {
          scrollTrigger: {
            trigger: "footer",
            scroller: "#js-scroll",
            scrub: !0,
          },
          y: "-70%",
          duration: 2,
          ease: nk,
        }),
        document
          .querySelector(".c-footer-credit")
          .addEventListener("click", () => {
            document.querySelector(".c-credits").classList.toggle("--visible");
          });
    }
  }
  new ty.Core({
    renderers: { home: ad, play: ap },
    transitions: { home: nY, play: nN },
  }).on("NAVIGATE_END", () => {
    tf.start(), tf.update();
  }),
    new sd(".js-split", { type: "lines", linesClass: "line-parent" }),
    new sd(".js-split > .line-parent", {
      type: "lines",
      linesClass: "line-child",
    }),
    (window.onload = () => {
      let t = document.querySelector(".c-loader"),
        e = document.querySelector(".js-loader-title");
      e.classList.remove("is-loading"),
        e.classList.add("is-loaded"),
        window.setTimeout(() => {
          t.classList.remove("is-loading"), t.classList.add("is-loaded");
        }, 800),
        tf.update();
    }),
    td.skip.addEventListener("click", () => {
      td.next_query();
    }),
    td.back.addEventListener("click", () => {
      td.prev_query();
    }),
    document.querySelector(".c-close").addEventListener("click", () => {
      td.close();
    }),
    td.send.addEventListener("click", function (t) {
      td.next_query();
    });
  let a$ = document.querySelectorAll("#js-slider > div label"),
    aD = document.querySelectorAll("#js-slider .s-text input");
  for (let ag of a$)
    ag.addEventListener("click", function () {
      td.next_query();
    });
  for (let am of aD)
    am.addEventListener("keydown", function (t) {
      var e = am.checkValidity();
      ("Enter" != t.key && 9 != t.keyCode) ||
        (t.preventDefault(),
        0 == e
          ? document.querySelector(".c-error").classList.add("--visible")
          : (td.next_query(),
            document.querySelector(".c-error").classList.remove("--visible")));
    });
  document
    .querySelector(".c-credits > div:last-child")
    .addEventListener("click", () => {
      document.querySelector(".c-credits").classList.toggle("--visible");
    });
  let av = document.querySelector("#contact");
  av.addEventListener("submit", (t) => {
    t.preventDefault(),
      fetch(
        "https://script.google.com/macros/s/AKfycbyefbwnCC8eeHCU4bFPEivRNE7e7UmINvjqTQiLH-TLxHxGzKtmoYh0C9mgudhnU_sdTQ/exec",
        { method: "POST", body: new FormData(av) }
      )
        .then((t) => console.log("Success!", t))
        .catch((t) => console.error("Error!", t.message));
  }),
    document.addEventListener("keydown", (t) => {
      t.ctrlKey &&
        "s" === t.key &&
        (t.preventDefault(),
        console.log(
          "Please don't steal this website, if you wish to learn how to build somehting similar, check out this course: https://www.youtube.com/watch?v=XaEmcDMU01w&list=PLbtI3_MArDOkVji53VGRyQIPBOi1nB8rC"
        ));
    }),
    console.log(
      "Designed and Developed by Elio Dev. This website is copyrighted, any act of stealing or altering would result in legal action."
    );
})();
class TextScramble {
  constructor(t) {
    (this.el = t),
      (this.chars = "!<>-_\\/[]{}—=+*^?#________"),
      (this.update = this.update.bind(this));
  }
  setText(t) {
    let e = this.el.innerText,
      i = Math.max(e.length, t.length),
      r = new Promise((t) => (this.resolve = t));
    this.queue = [];
    for (let n = 0; n < i; n++) {
      let s = e[n] || "",
        o = t[n] || "",
        a = Math.floor(40 * Math.random()),
        l = a + Math.floor(40 * Math.random());
      this.queue.push({ from: s, to: o, start: a, end: l });
    }
    return (
      cancelAnimationFrame(this.frameRequest),
      (this.frame = 0),
      this.update(),
      r
    );
  }
  update() {
    let t = "",
      e = 0;
    for (let i = 0, r = this.queue.length; i < r; i++) {
      let { from: n, to: s, start: o, end: a, char: l } = this.queue[i];
      this.frame >= a
        ? (e++, (t += s))
        : this.frame >= o
        ? ((!l || 0.28 > Math.random()) &&
            ((l = this.randomChar()), (this.queue[i].char = l)),
          (t += `<span class="dud">${l}</span>`))
        : (t += n);
    }
    (this.el.innerHTML = t),
      e === this.queue.length
        ? this.resolve()
        : ((this.frameRequest = requestAnimationFrame(this.update)),
          this.frame++);
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
const phrases = [
    "ElioDev",
    "Is A",
    "Creative Developer",
    "Web Developer",
    "UI/UX Designer",
  ],
  el = document.querySelector(".text"),
  fx = new TextScramble(el);
let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1200);
  }),
    (counter = (counter + 1) % phrases.length);
};
next();
