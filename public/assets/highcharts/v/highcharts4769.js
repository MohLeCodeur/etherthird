/*
 Highcharts JS v10.2.1 (2022-08-29)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/

(function (Z, L) {
  "object" === typeof module && module.exports
    ? ((L["default"] = L), (module.exports = Z.document ? L(Z) : L))
    : "function" === typeof define && define.amd
    ? define("highcharts/highcharts", function () {
        return L(Z);
      })
    : (Z.Highcharts && Z.Highcharts.error(16, !0), (Z.Highcharts = L(Z)));
})("undefined" !== typeof window ? window : this, function (Z) {
  function L(a, B, f, G) {
    a.hasOwnProperty(B) ||
      ((a[B] = G.apply(null, f)),
      "function" === typeof CustomEvent &&
        Z.dispatchEvent(
          new CustomEvent("HighchartsModuleLoaded", {
            detail: { path: B, module: a[B] },
          })
        ));
  }
  var f = {};
  L(f, "Core/Globals.js", [], function () {
    var a;
    (function (a) {
      a.SVG_NS = "http://www.w3.org/2000/svg";
      a.product = "Highcharts";
      a.version = "10.2.1";
      a.win = "undefined" !== typeof Z ? Z : {};
      a.doc = a.win.document;
      a.svg =
        a.doc &&
        a.doc.createElementNS &&
        !!a.doc.createElementNS(a.SVG_NS, "svg").createSVGRect;
      a.userAgent = (a.win.navigator && a.win.navigator.userAgent) || "";
      a.isChrome = -1 !== a.userAgent.indexOf("Chrome");
      a.isFirefox = -1 !== a.userAgent.indexOf("Firefox");
      a.isMS = /(edge|msie|trident)/i.test(a.userAgent) && !a.win.opera;
      a.isSafari = !a.isChrome && -1 !== a.userAgent.indexOf("Safari");
      a.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a.userAgent);
      a.isWebKit = -1 !== a.userAgent.indexOf("AppleWebKit");
      a.deg2rad = (2 * Math.PI) / 360;
      a.hasBidiBug =
        a.isFirefox && 4 > parseInt(a.userAgent.split("Firefox/")[1], 10);
      a.hasTouch = !!a.win.TouchEvent;
      a.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
      a.noop = function () {};
      a.supportsPassiveEvents = (function () {
        var f = !1;
        if (!a.isMS) {
          var B = Object.defineProperty({}, "passive", {
            get: function () {
              f = !0;
            },
          });
          a.win.addEventListener &&
            a.win.removeEventListener &&
            (a.win.addEventListener("testPassive", a.noop, B),
            a.win.removeEventListener("testPassive", a.noop, B));
        }
        return f;
      })();
      a.charts = [];
      a.dateFormats = {};
      a.seriesTypes = {};
      a.symbolSizes = {};
      a.chartCount = 0;
    })(a || (a = {}));
    ("");
    return a;
  });
  L(f, "Core/Utilities.js", [f["Core/Globals.js"]], function (a) {
    function f(n, b, h, w) {
      var u = b ? "Highcharts error" : "Highcharts warning";
      32 === n && (n = "" + u + ": Deprecated member");
      var q = p(n),
        K = q
          ? "" + u + " #" + n + ": www.highcharts.com/errors/" + n + "/"
          : n.toString();
      if ("undefined" !== typeof w) {
        var t = "";
        q && (K += "?");
        J(w, function (b, n) {
          t += "\n - ".concat(n, ": ").concat(b);
          q && (K += encodeURI(n) + "=" + encodeURI(b));
        });
        K += t;
      }
      E(
        a,
        "displayError",
        { chart: h, code: n, message: K, params: w },
        function () {
          if (b) throw Error(K);
          d.console && -1 === f.messages.indexOf(K) && console.warn(K);
        }
      );
      f.messages.push(K);
    }
    function A(b, d) {
      var n = {};
      J(b, function (w, u) {
        if (I(b[u], !0) && !b.nodeType && d[u])
          (w = A(b[u], d[u])), Object.keys(w).length && (n[u] = w);
        else if (I(b[u]) || b[u] !== d[u] || (u in b && !(u in d))) n[u] = b[u];
      });
      return n;
    }
    function G(b, d) {
      return parseInt(b, d || 10);
    }
    function y(b) {
      return "string" === typeof b;
    }
    function F(b) {
      b = Object.prototype.toString.call(b);
      return "[object Array]" === b || "[object Array Iterator]" === b;
    }
    function I(b, d) {
      return !!b && "object" === typeof b && (!d || !F(b));
    }
    function v(b) {
      return I(b) && "number" === typeof b.nodeType;
    }
    function r(b) {
      var d = b && b.constructor;
      return !(!I(b, !0) || v(b) || !d || !d.name || "Object" === d.name);
    }
    function p(b) {
      return (
        "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b
      );
    }
    function e(b) {
      return "undefined" !== typeof b && null !== b;
    }
    function c(b, d, h) {
      var n = y(d) && !e(h),
        u,
        q = function (d, w) {
          e(d)
            ? b.setAttribute(w, d)
            : n
            ? (u = b.getAttribute(w)) ||
              "class" !== w ||
              (u = b.getAttribute(w + "Name"))
            : b.removeAttribute(w);
        };
      y(d) ? q(h, d) : J(d, q);
      return u;
    }
    function k(b, d) {
      var n;
      b || (b = {});
      for (n in d) b[n] = d[n];
      return b;
    }
    function g() {
      for (var b = arguments, d = b.length, h = 0; h < d; h++) {
        var w = b[h];
        if ("undefined" !== typeof w && null !== w) return w;
      }
    }
    function l(b, d) {
      a.isMS &&
        !a.svg &&
        d &&
        e(d.opacity) &&
        (d.filter = "alpha(opacity=".concat(100 * d.opacity, ")"));
      k(b.style, d);
    }
    function m(b) {
      return Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
    }
    function z(b, d) {
      return 1e14 < b ? b : parseFloat(b.toPrecision(d || 14));
    }
    function N(b, u, h) {
      var w = a.getStyle || N;
      if ("width" === u)
        return (
          (u = Math.min(b.offsetWidth, b.scrollWidth)),
          (h = b.getBoundingClientRect && b.getBoundingClientRect().width),
          h < u && h >= u - 1 && (u = Math.floor(h)),
          Math.max(
            0,
            u -
              (w(b, "padding-left", !0) || 0) -
              (w(b, "padding-right", !0) || 0)
          )
        );
      if ("height" === u)
        return Math.max(
          0,
          Math.min(b.offsetHeight, b.scrollHeight) -
            (w(b, "padding-top", !0) || 0) -
            (w(b, "padding-bottom", !0) || 0)
        );
      d.getComputedStyle || f(27, !0);
      if ((b = d.getComputedStyle(b, void 0))) {
        var n = b.getPropertyValue(u);
        g(h, "opacity" !== u) && (n = G(n));
      }
      return n;
    }
    function J(b, d, h) {
      for (var w in b)
        Object.hasOwnProperty.call(b, w) && d.call(h || b[w], b[w], w, b);
    }
    function D(b, d, h) {
      function w(d, C) {
        var w = b.removeEventListener || a.removeEventListenerPolyfill;
        w && w.call(b, d, C, !1);
      }
      function n(n) {
        var C;
        if (b.nodeName) {
          if (d) {
            var u = {};
            u[d] = !0;
          } else u = n;
          J(u, function (b, d) {
            if (n[d]) for (C = n[d].length; C--; ) w(d, n[d][C].fn);
          });
        }
      }
      var u = ("function" === typeof b && b.prototype) || b;
      if (Object.hasOwnProperty.call(u, "hcEvents")) {
        var q = u.hcEvents;
        d
          ? ((u = q[d] || []),
            h
              ? ((q[d] = u.filter(function (b) {
                  return h !== b.fn;
                })),
                w(d, h))
              : (n(q), (q[d] = [])))
          : (n(q), delete u.hcEvents);
      }
    }
    function E(b, d, h, w) {
      h = h || {};
      if (x.createEvent && (b.dispatchEvent || (b.fireEvent && b !== a))) {
        var n = x.createEvent("Events");
        n.initEvent(d, !0, !0);
        h = k(n, h);
        b.dispatchEvent ? b.dispatchEvent(h) : b.fireEvent(d, h);
      } else if (b.hcEvents) {
        h.target ||
          k(h, {
            preventDefault: function () {
              h.defaultPrevented = !0;
            },
            target: b,
            type: d,
          });
        n = [];
        for (var u = b, q = !1; u.hcEvents; )
          Object.hasOwnProperty.call(u, "hcEvents") &&
            u.hcEvents[d] &&
            (n.length && (q = !0), n.unshift.apply(n, u.hcEvents[d])),
            (u = Object.getPrototypeOf(u));
        q &&
          n.sort(function (b, d) {
            return b.order - d.order;
          });
        n.forEach(function (d) {
          !1 === d.fn.call(b, h) && h.preventDefault();
        });
      }
      w && !h.defaultPrevented && w.call(b, h);
    }
    var t = a.charts,
      x = a.doc,
      d = a.win;
    (f || (f = {})).messages = [];
    Math.easeInOutSine = function (b) {
      return -0.5 * (Math.cos(Math.PI * b) - 1);
    };
    var h = Array.prototype.find
      ? function (b, d) {
          return b.find(d);
        }
      : function (b, d) {
          var n,
            w = b.length;
          for (n = 0; n < w; n++) if (d(b[n], n)) return b[n];
        };
    J(
      {
        map: "map",
        each: "forEach",
        grep: "filter",
        reduce: "reduce",
        some: "some",
      },
      function (b, d) {
        a[d] = function (n) {
          var w;
          f(
            32,
            !1,
            void 0,
            ((w = {}), (w["Highcharts.".concat(d)] = "use Array.".concat(b)), w)
          );
          return Array.prototype[b].apply(n, [].slice.call(arguments, 1));
        };
      }
    );
    var b,
      q = (function () {
        var d = Math.random().toString(36).substring(2, 9) + "-",
          u = 0;
        return function () {
          return "highcharts-" + (b ? "" : d) + u++;
        };
      })();
    d.jQuery &&
      (d.jQuery.fn.highcharts = function () {
        var b = [].slice.call(arguments);
        if (this[0])
          return b[0]
            ? (new a[y(b[0]) ? b.shift() : "Chart"](this[0], b[0], b[1]), this)
            : t[c(this[0], "data-highcharts-chart")];
      });
    h = {
      addEvent: function (b, d, h, w) {
        void 0 === w && (w = {});
        var n = ("function" === typeof b && b.prototype) || b;
        Object.hasOwnProperty.call(n, "hcEvents") || (n.hcEvents = {});
        n = n.hcEvents;
        a.Point &&
          b instanceof a.Point &&
          b.series &&
          b.series.chart &&
          (b.series.chart.runTrackerClick = !0);
        var u = b.addEventListener || a.addEventListenerPolyfill;
        u &&
          u.call(
            b,
            d,
            h,
            a.supportsPassiveEvents
              ? {
                  passive:
                    void 0 === w.passive
                      ? -1 !== d.indexOf("touch")
                      : w.passive,
                  capture: !1,
                }
              : !1
          );
        n[d] || (n[d] = []);
        n[d].push({
          fn: h,
          order: "number" === typeof w.order ? w.order : Infinity,
        });
        n[d].sort(function (b, d) {
          return b.order - d.order;
        });
        return function () {
          D(b, d, h);
        };
      },
      arrayMax: function (b) {
        for (var d = b.length, n = b[0]; d--; ) b[d] > n && (n = b[d]);
        return n;
      },
      arrayMin: function (b) {
        for (var d = b.length, n = b[0]; d--; ) b[d] < n && (n = b[d]);
        return n;
      },
      attr: c,
      clamp: function (b, d, h) {
        return b > d ? (b < h ? b : h) : d;
      },
      cleanRecursively: A,
      clearTimeout: function (b) {
        e(b) && clearTimeout(b);
      },
      correctFloat: z,
      createElement: function (b, d, h, w, q) {
        b = x.createElement(b);
        d && k(b, d);
        q && l(b, { padding: "0", border: "none", margin: "0" });
        h && l(b, h);
        w && w.appendChild(b);
        return b;
      },
      css: l,
      defined: e,
      destroyObjectProperties: function (b, d) {
        J(b, function (n, w) {
          n && n !== d && n.destroy && n.destroy();
          delete b[w];
        });
      },
      discardElement: function (b) {
        b && b.parentElement && b.parentElement.removeChild(b);
      },
      erase: function (b, d) {
        for (var n = b.length; n--; )
          if (b[n] === d) {
            b.splice(n, 1);
            break;
          }
      },
      error: f,
      extend: k,
      extendClass: function (b, d) {
        var n = function () {};
        n.prototype = new b();
        k(n.prototype, d);
        return n;
      },
      find: h,
      fireEvent: E,
      getMagnitude: m,
      getNestedProperty: function (b, h) {
        for (b = b.split("."); b.length && e(h); ) {
          var n = b.shift();
          if ("undefined" === typeof n || "__proto__" === n) return;
          h = h[n];
          if (
            !e(h) ||
            "function" === typeof h ||
            "number" === typeof h.nodeType ||
            h === d
          )
            return;
        }
        return h;
      },
      getStyle: N,
      inArray: function (b, d, h) {
        f(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" });
        return d.indexOf(b, h);
      },
      isArray: F,
      isClass: r,
      isDOMElement: v,
      isFunction: function (b) {
        return "function" === typeof b;
      },
      isNumber: p,
      isObject: I,
      isString: y,
      keys: function (b) {
        f(32, !1, void 0, { "Highcharts.keys": "use Object.keys" });
        return Object.keys(b);
      },
      merge: function () {
        var b,
          d = arguments,
          h = {},
          w = function (b, d) {
            "object" !== typeof b && (b = {});
            J(d, function (h, C) {
              "__proto__" !== C &&
                "constructor" !== C &&
                (!I(h, !0) || r(h) || v(h)
                  ? (b[C] = d[C])
                  : (b[C] = w(b[C] || {}, h)));
            });
            return b;
          };
        !0 === d[0] && ((h = d[1]), (d = Array.prototype.slice.call(d, 2)));
        var q = d.length;
        for (b = 0; b < q; b++) h = w(h, d[b]);
        return h;
      },
      normalizeTickInterval: function (b, d, h, w, q) {
        var n = b;
        h = g(h, m(b));
        var u = b / h;
        d ||
          ((d = q
            ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
            : [1, 2, 2.5, 5, 10]),
          !1 === w &&
            (1 === h
              ? (d = d.filter(function (b) {
                  return 0 === b % 1;
                }))
              : 0.1 >= h && (d = [1 / h])));
        for (
          w = 0;
          w < d.length &&
          !((n = d[w]),
          (q && n * h >= b) || (!q && u <= (d[w] + (d[w + 1] || d[w])) / 2));
          w++
        );
        return (n = z(n * h, -Math.round(Math.log(0.001) / Math.LN10)));
      },
      objectEach: J,
      offset: function (b) {
        var h = x.documentElement;
        b =
          b.parentElement || b.parentNode
            ? b.getBoundingClientRect()
            : { top: 0, left: 0, width: 0, height: 0 };
        return {
          top: b.top + (d.pageYOffset || h.scrollTop) - (h.clientTop || 0),
          left: b.left + (d.pageXOffset || h.scrollLeft) - (h.clientLeft || 0),
          width: b.width,
          height: b.height,
        };
      },
      pad: function (b, d, h) {
        return (
          Array((d || 2) + 1 - String(b).replace("-", "").length).join(
            h || "0"
          ) + b
        );
      },
      pick: g,
      pInt: G,
      relativeLength: function (b, d, h) {
        return /%$/.test(b)
          ? (d * parseFloat(b)) / 100 + (h || 0)
          : parseFloat(b);
      },
      removeEvent: D,
      splat: function (b) {
        return F(b) ? b : [b];
      },
      stableSort: function (b, d) {
        var h = b.length,
          w,
          n;
        for (n = 0; n < h; n++) b[n].safeI = n;
        b.sort(function (b, h) {
          w = d(b, h);
          return 0 === w ? b.safeI - h.safeI : w;
        });
        for (n = 0; n < h; n++) delete b[n].safeI;
      },
      syncTimeout: function (b, d, h) {
        if (0 < d) return setTimeout(b, d, h);
        b.call(0, h);
        return -1;
      },
      timeUnits: {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 24192e5,
        year: 314496e5,
      },
      uniqueKey: q,
      useSerialIds: function (d) {
        return (b = g(d, b));
      },
      wrap: function (b, d, h) {
        var w = b[d];
        b[d] = function () {
          var b = Array.prototype.slice.call(arguments),
            d = arguments,
            n = this;
          n.proceed = function () {
            w.apply(n, arguments.length ? arguments : d);
          };
          b.unshift(w);
          b = h.apply(this, b);
          n.proceed = null;
          return b;
        };
      },
    };
    ("");
    return h;
  });
  L(f, "Core/Chart/ChartDefaults.js", [], function () {
    return {
      alignThresholds: !1,
      panning: { enabled: !1, type: "x" },
      styledMode: !1,
      borderRadius: 0,
      colorCount: 10,
      allowMutatingData: !0,
      defaultSeriesType: "line",
      ignoreHiddenSeries: !0,
      spacing: [10, 10, 15, 10],
      resetZoomButton: {
        theme: { zIndex: 6 },
        position: { align: "right", x: -10, y: 10 },
      },
      zoomBySingleTouch: !1,
      zooming: {
        singleTouch: !1,
        resetButton: {
          theme: { zIndex: 6 },
          position: { align: "right", x: -10, y: 10 },
        },
      },
      width: null,
      height: null,
      borderColor: "#335cad",
      backgroundColor: "#ffffff",
      plotBorderColor: "#cccccc",
    };
  });
  L(
    f,
    "Core/Color/Color.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B = f.isNumber,
        G = f.merge,
        y = f.pInt;
      f = (function () {
        function f(B) {
          this.rgba = [NaN, NaN, NaN, NaN];
          this.input = B;
          var v = a.Color;
          if (v && v !== f) return new v(B);
          if (!(this instanceof f)) return new f(B);
          this.init(B);
        }
        f.parse = function (a) {
          return a ? new f(a) : f.None;
        };
        f.prototype.init = function (a) {
          var v;
          if ("object" === typeof a && "undefined" !== typeof a.stops)
            this.stops = a.stops.map(function (c) {
              return new f(c[1]);
            });
          else if ("string" === typeof a) {
            this.input = a = f.names[a.toLowerCase()] || a;
            if ("#" === a.charAt(0)) {
              var r = a.length;
              var p = parseInt(a.substr(1), 16);
              7 === r
                ? (v = [(p & 16711680) >> 16, (p & 65280) >> 8, p & 255, 1])
                : 4 === r &&
                  (v = [
                    ((p & 3840) >> 4) | ((p & 3840) >> 8),
                    ((p & 240) >> 4) | (p & 240),
                    ((p & 15) << 4) | (p & 15),
                    1,
                  ]);
            }
            if (!v)
              for (p = f.parsers.length; p-- && !v; ) {
                var e = f.parsers[p];
                (r = e.regex.exec(a)) && (v = e.parse(r));
              }
          }
          v && (this.rgba = v);
        };
        f.prototype.get = function (a) {
          var v = this.input,
            r = this.rgba;
          if ("object" === typeof v && "undefined" !== typeof this.stops) {
            var p = G(v);
            p.stops = [].slice.call(p.stops);
            this.stops.forEach(function (e, c) {
              p.stops[c] = [p.stops[c][0], e.get(a)];
            });
            return p;
          }
          return r && B(r[0])
            ? "rgb" === a || (!a && 1 === r[3])
              ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")"
              : "a" === a
              ? "".concat(r[3])
              : "rgba(" + r.join(",") + ")"
            : v;
        };
        f.prototype.brighten = function (a) {
          var v = this.rgba;
          if (this.stops)
            this.stops.forEach(function (p) {
              p.brighten(a);
            });
          else if (B(a) && 0 !== a)
            for (var r = 0; 3 > r; r++)
              (v[r] += y(255 * a)),
                0 > v[r] && (v[r] = 0),
                255 < v[r] && (v[r] = 255);
          return this;
        };
        f.prototype.setOpacity = function (a) {
          this.rgba[3] = a;
          return this;
        };
        f.prototype.tweenTo = function (a, v) {
          var r = this.rgba,
            p = a.rgba;
          if (!B(r[0]) || !B(p[0])) return a.input || "none";
          a = 1 !== p[3] || 1 !== r[3];
          return (
            (a ? "rgba(" : "rgb(") +
            Math.round(p[0] + (r[0] - p[0]) * (1 - v)) +
            "," +
            Math.round(p[1] + (r[1] - p[1]) * (1 - v)) +
            "," +
            Math.round(p[2] + (r[2] - p[2]) * (1 - v)) +
            (a ? "," + (p[3] + (r[3] - p[3]) * (1 - v)) : "") +
            ")"
          );
        };
        f.names = { white: "#ffffff", black: "#000000" };
        f.parsers = [
          {
            regex:
              /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function (a) {
              return [y(a[1]), y(a[2]), y(a[3]), parseFloat(a[4], 10)];
            },
          },
          {
            regex:
              /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function (a) {
              return [y(a[1]), y(a[2]), y(a[3]), 1];
            },
          },
        ];
        f.None = new f("");
        return f;
      })();
      ("");
      return f;
    }
  );
  L(f, "Core/Color/Palettes.js", [], function () {
    return {
      colors:
        "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
          " "
        ),
    };
  });
  L(
    f,
    "Core/Time.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B = a.win,
        G = f.defined,
        y = f.error,
        F = f.extend,
        I = f.isObject,
        v = f.merge,
        r = f.objectEach,
        p = f.pad,
        e = f.pick,
        c = f.splat,
        k = f.timeUnits,
        g = a.isSafari && B.Intl && B.Intl.DateTimeFormat.prototype.formatRange,
        l =
          a.isSafari && B.Intl && !B.Intl.DateTimeFormat.prototype.formatRange;
      f = (function () {
        function m(c) {
          this.options = {};
          this.variableTimezone = this.useUTC = !1;
          this.Date = B.Date;
          this.getTimezoneOffset = this.timezoneOffsetFunction();
          this.update(c);
        }
        m.prototype.get = function (c, g) {
          if (this.variableTimezone || this.timezoneOffset) {
            var e = g.getTime(),
              l = e - this.getTimezoneOffset(g);
            g.setTime(l);
            c = g["getUTC" + c]();
            g.setTime(e);
            return c;
          }
          return this.useUTC ? g["getUTC" + c]() : g["get" + c]();
        };
        m.prototype.set = function (c, e, l) {
          if (this.variableTimezone || this.timezoneOffset) {
            if (
              "Milliseconds" === c ||
              "Seconds" === c ||
              ("Minutes" === c && 0 === this.getTimezoneOffset(e) % 36e5)
            )
              return e["setUTC" + c](l);
            var m = this.getTimezoneOffset(e);
            m = e.getTime() - m;
            e.setTime(m);
            e["setUTC" + c](l);
            c = this.getTimezoneOffset(e);
            m = e.getTime() + c;
            return e.setTime(m);
          }
          return this.useUTC || (g && "FullYear" === c)
            ? e["setUTC" + c](l)
            : e["set" + c](l);
        };
        m.prototype.update = function (c) {
          var g = e(c && c.useUTC, !0);
          this.options = c = v(!0, this.options || {}, c);
          this.Date = c.Date || B.Date || Date;
          this.timezoneOffset =
            ((this.useUTC = g) && c.timezoneOffset) || void 0;
          this.getTimezoneOffset = this.timezoneOffsetFunction();
          this.variableTimezone = g && !(!c.getTimezoneOffset && !c.timezone);
        };
        m.prototype.makeTime = function (c, g, m, k, E, t) {
          if (this.useUTC) {
            var x = this.Date.UTC.apply(0, arguments);
            var d = this.getTimezoneOffset(x);
            x += d;
            var h = this.getTimezoneOffset(x);
            d !== h
              ? (x += h - d)
              : d - 36e5 !== this.getTimezoneOffset(x - 36e5) ||
                l ||
                (x -= 36e5);
          } else
            x = new this.Date(
              c,
              g,
              e(m, 1),
              e(k, 0),
              e(E, 0),
              e(t, 0)
            ).getTime();
          return x;
        };
        m.prototype.timezoneOffsetFunction = function () {
          var c = this,
            g = this.options,
            e = g.getTimezoneOffset,
            l = g.moment || B.moment;
          if (!this.useUTC)
            return function (c) {
              return 6e4 * new Date(c.toString()).getTimezoneOffset();
            };
          if (g.timezone) {
            if (l)
              return function (c) {
                return 6e4 * -l.tz(c, g.timezone).utcOffset();
              };
            y(25);
          }
          return this.useUTC && e
            ? function (c) {
                return 6e4 * e(c.valueOf());
              }
            : function () {
                return 6e4 * (c.timezoneOffset || 0);
              };
        };
        m.prototype.dateFormat = function (c, g, l) {
          if (!G(g) || isNaN(g))
            return (
              (a.defaultOptions.lang && a.defaultOptions.lang.invalidDate) || ""
            );
          c = e(c, "%Y-%m-%d %H:%M:%S");
          var m = this,
            k = new this.Date(g),
            t = this.get("Hours", k),
            x = this.get("Day", k),
            d = this.get("Date", k),
            h = this.get("Month", k),
            b = this.get("FullYear", k),
            q = a.defaultOptions.lang,
            n = q && q.weekdays,
            u = q && q.shortWeekdays;
          k = F(
            {
              a: u ? u[x] : n[x].substr(0, 3),
              A: n[x],
              d: p(d),
              e: p(d, 2, " "),
              w: x,
              b: q.shortMonths[h],
              B: q.months[h],
              m: p(h + 1),
              o: h + 1,
              y: b.toString().substr(2, 2),
              Y: b,
              H: p(t),
              k: t,
              I: p(t % 12 || 12),
              l: t % 12 || 12,
              M: p(this.get("Minutes", k)),
              p: 12 > t ? "AM" : "PM",
              P: 12 > t ? "am" : "pm",
              S: p(k.getSeconds()),
              L: p(Math.floor(g % 1e3), 3),
            },
            a.dateFormats
          );
          r(k, function (b, d) {
            for (; -1 !== c.indexOf("%" + d); )
              c = c.replace(
                "%" + d,
                "function" === typeof b ? b.call(m, g) : b
              );
          });
          return l ? c.substr(0, 1).toUpperCase() + c.substr(1) : c;
        };
        m.prototype.resolveDTLFormat = function (g) {
          return I(g, !0)
            ? g
            : ((g = c(g)), { main: g[0], from: g[1], to: g[2] });
        };
        m.prototype.getTimeTicks = function (c, g, l, m) {
          var z = this,
            t = [],
            x = {},
            d = new z.Date(g),
            h = c.unitRange,
            b = c.count || 1,
            q;
          m = e(m, 1);
          if (G(g)) {
            z.set(
              "Milliseconds",
              d,
              h >= k.second ? 0 : b * Math.floor(z.get("Milliseconds", d) / b)
            );
            h >= k.second &&
              z.set(
                "Seconds",
                d,
                h >= k.minute ? 0 : b * Math.floor(z.get("Seconds", d) / b)
              );
            h >= k.minute &&
              z.set(
                "Minutes",
                d,
                h >= k.hour ? 0 : b * Math.floor(z.get("Minutes", d) / b)
              );
            h >= k.hour &&
              z.set(
                "Hours",
                d,
                h >= k.day ? 0 : b * Math.floor(z.get("Hours", d) / b)
              );
            h >= k.day &&
              z.set(
                "Date",
                d,
                h >= k.month
                  ? 1
                  : Math.max(1, b * Math.floor(z.get("Date", d) / b))
              );
            if (h >= k.month) {
              z.set(
                "Month",
                d,
                h >= k.year ? 0 : b * Math.floor(z.get("Month", d) / b)
              );
              var n = z.get("FullYear", d);
            }
            h >= k.year && z.set("FullYear", d, n - (n % b));
            h === k.week &&
              ((n = z.get("Day", d)),
              z.set("Date", d, z.get("Date", d) - n + m + (n < m ? -7 : 0)));
            n = z.get("FullYear", d);
            m = z.get("Month", d);
            var u = z.get("Date", d),
              K = z.get("Hours", d);
            g = d.getTime();
            (!z.variableTimezone && z.useUTC) ||
              !G(l) ||
              (q =
                l - g > 4 * k.month ||
                z.getTimezoneOffset(g) !== z.getTimezoneOffset(l));
            g = d.getTime();
            for (d = 1; g < l; )
              t.push(g),
                (g =
                  h === k.year
                    ? z.makeTime(n + d * b, 0)
                    : h === k.month
                    ? z.makeTime(n, m + d * b)
                    : !q || (h !== k.day && h !== k.week)
                    ? q && h === k.hour && 1 < b
                      ? z.makeTime(n, m, u, K + d * b)
                      : g + h * b
                    : z.makeTime(n, m, u + d * b * (h === k.day ? 1 : 7))),
                d++;
            t.push(g);
            h <= k.hour &&
              1e4 > t.length &&
              t.forEach(function (b) {
                0 === b % 18e5 &&
                  "000000000" === z.dateFormat("%H%M%S%L", b) &&
                  (x[b] = "day");
              });
          }
          t.info = F(c, { higherRanks: x, totalRange: h * b });
          return t;
        };
        m.prototype.getDateFormat = function (c, g, e, l) {
          var m = this.dateFormat("%m-%d %H:%M:%S.%L", g),
            t = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
            x = "millisecond";
          for (d in k) {
            if (
              c === k.week &&
              +this.dateFormat("%w", g) === e &&
              "00:00:00.000" === m.substr(6)
            ) {
              var d = "week";
              break;
            }
            if (k[d] > c) {
              d = x;
              break;
            }
            if (t[d] && m.substr(t[d]) !== "01-01 00:00:00.000".substr(t[d]))
              break;
            "week" !== d && (x = d);
          }
          return this.resolveDTLFormat(l[d]).main;
        };
        return m;
      })();
      ("");
      return f;
    }
  );
  L(
    f,
    "Core/DefaultOptions.js",
    [
      f["Core/Chart/ChartDefaults.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Color/Palettes.js"],
      f["Core/Time.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F) {
      f = f.parse;
      var B = F.merge,
        v = {
          colors: G.colors,
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months:
              "January February March April May June July August September October November December".split(
                " "
              ),
            shortMonths:
              "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays:
              "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                " "
              ),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " ",
          },
          global: {},
          time: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: !0,
          },
          chart: a,
          title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            widthAdjust: -44,
          },
          subtitle: { text: "", align: "center", widthAdjust: -44 },
          caption: {
            margin: 15,
            text: "",
            align: "left",
            verticalAlign: "bottom",
          },
          plotOptions: {},
          labels: { style: { position: "absolute", color: "#333333" } },
          legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            className: "highcharts-no-tooltip",
            layout: "horizontal",
            labelFormatter: function () {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              textOverflow: "ellipsis",
            },
            itemHoverStyle: { color: "#000000" },
            itemHiddenStyle: { color: "#cccccc" },
            shadow: !1,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px",
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: { style: { fontWeight: "bold" } },
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%",
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: 0.5,
              textAlign: "center",
            },
          },
          tooltip: {
            enabled: !0,
            animation: A.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y",
            },
            footerFormat: "",
            headerShape: "callout",
            hideDelay: 500,
            padding: 8,
            shape: "callout",
            shared: !1,
            snap: A.isTouchDevice ? 25 : 10,
            headerFormat:
              '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat:
              '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            backgroundColor: f("#f7f7f7").setOpacity(0.85).get(),
            borderWidth: 1,
            shadow: !0,
            stickOnContact: !1,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "12px",
              whiteSpace: "nowrap",
            },
            useHTML: !1,
          },
          credits: {
            enabled: !0,
            href: "https://www.highcharts.com?credits",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5,
            },
            style: { cursor: "pointer", color: "#999999", fontSize: "9px" },
            text: "Highcharts.com",
          },
        };
      v.chart.styledMode = !1;
      ("");
      var r = new y(B(v.global, v.time));
      a = {
        defaultOptions: v,
        defaultTime: r,
        getOptions: function () {
          return v;
        },
        setOptions: function (a) {
          B(!0, v, a);
          if (a.time || a.global)
            A.time
              ? A.time.update(B(v.global, v.time, a.global, a.time))
              : (A.time = r);
          return v;
        },
      };
      ("");
      return a;
    }
  );
  L(
    f,
    "Core/Animation/Fx.js",
    [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f, A) {
      var B = a.parse,
        y = f.win,
        F = A.isNumber,
        I = A.objectEach;
      return (function () {
        function a(a, p, e) {
          this.pos = NaN;
          this.options = p;
          this.elem = a;
          this.prop = e;
        }
        a.prototype.dSetter = function () {
          var a = this.paths,
            p = a && a[0];
          a = a && a[1];
          var e = this.now || 0,
            c = [];
          if (1 !== e && p && a)
            if (p.length === a.length && 1 > e)
              for (var k = 0; k < a.length; k++) {
                for (var g = p[k], l = a[k], m = [], z = 0; z < l.length; z++) {
                  var N = g[z],
                    J = l[z];
                  F(N) && F(J) && ("A" !== l[0] || (4 !== z && 5 !== z))
                    ? (m[z] = N + e * (J - N))
                    : (m[z] = J);
                }
                c.push(m);
              }
            else c = a;
          else c = this.toD || [];
          this.elem.attr("d", c, void 0, !0);
        };
        a.prototype.update = function () {
          var a = this.elem,
            p = this.prop,
            e = this.now,
            c = this.options.step;
          if (this[p + "Setter"]) this[p + "Setter"]();
          else
            a.attr
              ? a.element && a.attr(p, e, null, !0)
              : (a.style[p] = e + this.unit);
          c && c.call(a, e, this);
        };
        a.prototype.run = function (r, p, e) {
          var c = this,
            k = c.options,
            g = function (e) {
              return g.stopped ? !1 : c.step(e);
            },
            l =
              y.requestAnimationFrame ||
              function (c) {
                setTimeout(c, 13);
              },
            m = function () {
              for (var c = 0; c < a.timers.length; c++)
                a.timers[c]() || a.timers.splice(c--, 1);
              a.timers.length && l(m);
            };
          r !== p || this.elem["forceAnimate:" + this.prop]
            ? ((this.startTime = +new Date()),
              (this.start = r),
              (this.end = p),
              (this.unit = e),
              (this.now = this.start),
              (this.pos = 0),
              (g.elem = this.elem),
              (g.prop = this.prop),
              g() && 1 === a.timers.push(g) && l(m))
            : (delete k.curAnim[this.prop],
              k.complete &&
                0 === Object.keys(k.curAnim).length &&
                k.complete.call(this.elem));
        };
        a.prototype.step = function (a) {
          var p = +new Date(),
            e = this.options,
            c = this.elem,
            k = e.complete,
            g = e.duration,
            l = e.curAnim;
          if (c.attr && !c.element) a = !1;
          else if (a || p >= g + this.startTime) {
            this.now = this.end;
            this.pos = 1;
            this.update();
            var m = (l[this.prop] = !0);
            I(l, function (c) {
              !0 !== c && (m = !1);
            });
            m && k && k.call(c);
            a = !1;
          } else
            (this.pos = e.easing((p - this.startTime) / g)),
              (this.now = this.start + (this.end - this.start) * this.pos),
              this.update(),
              (a = !0);
          return a;
        };
        a.prototype.initPath = function (a, p, e) {
          function c(c, g) {
            for (; c.length < D; ) {
              var t = c[0],
                d = g[D - c.length];
              d &&
                "M" === t[0] &&
                (c[0] =
                  "C" === d[0]
                    ? ["C", t[1], t[2], t[1], t[2], t[1], t[2]]
                    : ["L", t[1], t[2]]);
              c.unshift(t);
              m && ((t = c.pop()), c.push(c[c.length - 1], t));
            }
          }
          function k(c, g) {
            for (; c.length < D; )
              if (
                ((g = c[Math.floor(c.length / z) - 1].slice()),
                "C" === g[0] && ((g[1] = g[5]), (g[2] = g[6])),
                m)
              ) {
                var t = c[Math.floor(c.length / z)].slice();
                c.splice(c.length / 2, 0, g, t);
              } else c.push(g);
          }
          var g = a.startX,
            l = a.endX;
          e = e.slice();
          var m = a.isArea,
            z = m ? 2 : 1;
          p = p && p.slice();
          if (!p) return [e, e];
          if (g && l && l.length) {
            for (a = 0; a < g.length; a++)
              if (g[a] === l[0]) {
                var N = a;
                break;
              } else if (g[0] === l[l.length - g.length + a]) {
                N = a;
                var J = !0;
                break;
              } else if (g[g.length - 1] === l[l.length - g.length + a]) {
                N = g.length - a;
                break;
              }
            "undefined" === typeof N && (p = []);
          }
          if (p.length && F(N)) {
            var D = e.length + N * z;
            J ? (c(p, e), k(e, p)) : (c(e, p), k(p, e));
          }
          return [p, e];
        };
        a.prototype.fillSetter = function () {
          a.prototype.strokeSetter.apply(this, arguments);
        };
        a.prototype.strokeSetter = function () {
          this.elem.attr(
            this.prop,
            B(this.start).tweenTo(B(this.end), this.pos),
            void 0,
            !0
          );
        };
        a.timers = [];
        return a;
      })();
    }
  );
  L(
    f,
    "Core/Animation/AnimationUtilities.js",
    [f["Core/Animation/Fx.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function B(c) {
        return r(c)
          ? p({ duration: 500, defer: 0 }, c)
          : { duration: c ? 500 : 0, defer: 0 };
      }
      function G(c, g) {
        for (var e = a.timers.length; e--; )
          a.timers[e].elem !== c ||
            (g && g !== a.timers[e].prop) ||
            (a.timers[e].stopped = !0);
      }
      var y = f.defined,
        F = f.getStyle,
        I = f.isArray,
        v = f.isNumber,
        r = f.isObject,
        p = f.merge,
        e = f.objectEach,
        c = f.pick;
      return {
        animate: function (c, g, l) {
          var m,
            k = "",
            N,
            J;
          if (!r(l)) {
            var D = arguments;
            l = { duration: D[2], easing: D[3], complete: D[4] };
          }
          v(l.duration) || (l.duration = 400);
          l.easing =
            "function" === typeof l.easing
              ? l.easing
              : Math[l.easing] || Math.easeInOutSine;
          l.curAnim = p(g);
          e(g, function (e, t) {
            G(c, t);
            J = new a(c, l, t);
            N = void 0;
            "d" === t && I(g.d)
              ? ((J.paths = J.initPath(c, c.pathArray, g.d)),
                (J.toD = g.d),
                (m = 0),
                (N = 1))
              : c.attr
              ? (m = c.attr(t))
              : ((m = parseFloat(F(c, t)) || 0), "opacity" !== t && (k = "px"));
            N || (N = e);
            "string" === typeof N &&
              N.match("px") &&
              (N = N.replace(/px/g, ""));
            J.run(m, N, k);
          });
        },
        animObject: B,
        getDeferredAnimation: function (c, g, e) {
          var m = B(g),
            l = 0,
            k = 0;
          (e ? [e] : c.series).forEach(function (c) {
            c = B(c.options.animation);
            l = g && y(g.defer) ? m.defer : Math.max(l, c.duration + c.defer);
            k = Math.min(m.duration, c.duration);
          });
          c.renderer.forExport && (l = 0);
          return { defer: Math.max(0, l - k), duration: Math.min(l, k) };
        },
        setAnimation: function (e, g) {
          g.renderer.globalAnimation = c(e, g.options.chart.animation, !0);
        },
        stop: G,
      };
    }
  );
  L(
    f,
    "Core/Renderer/HTML/AST.js",
    [f["Core/Globals.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B = a.SVG_NS,
        G = f.attr,
        y = f.createElement,
        F = f.css,
        I = f.error,
        v = f.isFunction,
        r = f.isString,
        p = f.objectEach,
        e = f.splat,
        c =
          (f = a.win.trustedTypes) &&
          v(f.createPolicy) &&
          f.createPolicy("highcharts", {
            createHTML: function (c) {
              return c;
            },
          }),
        k = c ? c.createHTML("") : "";
      try {
        var g = !!new DOMParser().parseFromString(k, "text/html");
      } catch (l) {
        g = !1;
      }
      v = (function () {
        function l(c) {
          this.nodes = "string" === typeof c ? this.parseMarkup(c) : c;
        }
        l.filterUserAttributes = function (c) {
          p(c, function (g, e) {
            var m = !0;
            -1 === l.allowedAttributes.indexOf(e) && (m = !1);
            -1 !==
              ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(e) &&
              (m =
                r(g) &&
                l.allowedReferences.some(function (c) {
                  return 0 === g.indexOf(c);
                }));
            m ||
              (I(33, !1, void 0, {
                "Invalid attribute in config": "".concat(e),
              }),
              delete c[e]);
          });
          return c;
        };
        l.parseStyle = function (c) {
          return c.split(";").reduce(function (c, g) {
            g = g.split(":").map(function (c) {
              return c.trim();
            });
            var e = g.shift();
            e &&
              g.length &&
              (c[
                e.replace(/-([a-z])/g, function (c) {
                  return c[1].toUpperCase();
                })
              ] = g.join(":"));
            return c;
          }, {});
        };
        l.setElementHTML = function (c, g) {
          c.innerHTML = l.emptyHTML;
          g && new l(g).addToDOM(c);
        };
        l.prototype.addToDOM = function (c) {
          function g(c, m) {
            var k;
            e(c).forEach(function (c) {
              var e = c.tagName,
                x = c.textContent
                  ? a.doc.createTextNode(c.textContent)
                  : void 0,
                d = l.bypassHTMLFiltering;
              if (e)
                if ("#text" === e) var h = x;
                else if (-1 !== l.allowedTags.indexOf(e) || d) {
                  e = a.doc.createElementNS(
                    "svg" === e ? B : m.namespaceURI || B,
                    e
                  );
                  var b = c.attributes || {};
                  p(c, function (d, h) {
                    "tagName" !== h &&
                      "attributes" !== h &&
                      "children" !== h &&
                      "style" !== h &&
                      "textContent" !== h &&
                      (b[h] = d);
                  });
                  G(e, d ? b : l.filterUserAttributes(b));
                  c.style && F(e, c.style);
                  x && e.appendChild(x);
                  g(c.children || [], e);
                  h = e;
                } else I(33, !1, void 0, { "Invalid tagName in config": e });
              h && m.appendChild(h);
              k = h;
            });
            return k;
          }
          return g(this.nodes, c);
        };
        l.prototype.parseMarkup = function (e) {
          var m = [];
          e = e.trim().replace(/ style=(["'])/g, " data-style=$1");
          if (g)
            e = new DOMParser().parseFromString(
              c ? c.createHTML(e) : e,
              "text/html"
            );
          else {
            var k = y("div");
            k.innerHTML = e;
            e = { body: k };
          }
          var a = function (c, g) {
            var e = c.nodeName.toLowerCase(),
              m = { tagName: e };
            "#text" === e && (m.textContent = c.textContent || "");
            if ((e = c.attributes)) {
              var d = {};
              [].forEach.call(e, function (b) {
                "data-style" === b.name
                  ? (m.style = l.parseStyle(b.value))
                  : (d[b.name] = b.value);
              });
              m.attributes = d;
            }
            if (c.childNodes.length) {
              var h = [];
              [].forEach.call(c.childNodes, function (b) {
                a(b, h);
              });
              h.length && (m.children = h);
            }
            g.push(m);
          };
          [].forEach.call(e.body.childNodes, function (c) {
            return a(c, m);
          });
          return m;
        };
        l.allowedAttributes =
          "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(
            " "
          );
        l.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
        l.allowedTags =
          "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead tbody tspan td th tr u ul #text".split(
            " "
          );
        l.emptyHTML = k;
        l.bypassHTMLFiltering = !1;
        return l;
      })();
      ("");
      return v;
    }
  );
  L(
    f,
    "Core/FormatUtilities.js",
    [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function B(a, e, c, k) {
        a = +a || 0;
        e = +e;
        var g = G.lang,
          l = (a.toString().split(".")[1] || "").split("e")[0].length,
          m = a.toString().split("e"),
          z = e;
        if (-1 === e) e = Math.min(l, 20);
        else if (!I(e)) e = 2;
        else if (e && m[1] && 0 > m[1]) {
          var p = e + +m[1];
          0 <= p
            ? ((m[0] = (+m[0]).toExponential(p).split("e")[0]), (e = p))
            : ((m[0] = m[0].split(".")[0] || 0),
              (a = 20 > e ? (m[0] * Math.pow(10, m[1])).toFixed(e) : 0),
              (m[1] = 0));
        }
        p = (
          Math.abs(m[1] ? m[0] : a) + Math.pow(10, -Math.max(e, l) - 1)
        ).toFixed(e);
        l = String(r(p));
        var f = 3 < l.length ? l.length % 3 : 0;
        c = v(c, g.decimalPoint);
        k = v(k, g.thousandsSep);
        a = (0 > a ? "-" : "") + (f ? l.substr(0, f) + k : "");
        a =
          0 > +m[1] && !z
            ? "0"
            : a + l.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + k);
        e && (a += c + p.slice(-e));
        m[1] && 0 !== +a && (a += "e" + m[1]);
        return a;
      }
      var G = a.defaultOptions,
        y = a.defaultTime,
        F = f.getNestedProperty,
        I = f.isNumber,
        v = f.pick,
        r = f.pInt;
      return {
        dateFormat: function (a, e, c) {
          return y.dateFormat(a, e, c);
        },
        format: function (a, e, c) {
          var k = "{",
            g = !1,
            l = /f$/,
            m = /\.([0-9])/,
            z = G.lang,
            f = (c && c.time) || y;
          c = (c && c.numberFormatter) || B;
          for (var p = []; a; ) {
            var D = a.indexOf(k);
            if (-1 === D) break;
            var E = a.slice(0, D);
            if (g) {
              E = E.split(":");
              k = F(E.shift() || "", e);
              if (E.length && "number" === typeof k)
                if (((E = E.join(":")), l.test(E))) {
                  var t = parseInt((E.match(m) || ["", "-1"])[1], 10);
                  null !== k &&
                    (k = c(
                      k,
                      t,
                      z.decimalPoint,
                      -1 < E.indexOf(",") ? z.thousandsSep : ""
                    ));
                } else k = f.dateFormat(E, k);
              p.push(k);
            } else p.push(E);
            a = a.slice(D + 1);
            k = (g = !g) ? "}" : "{";
          }
          p.push(a);
          return p.join("");
        },
        numberFormat: B,
      };
    }
  );
  L(
    f,
    "Core/Renderer/RendererUtilities.js",
    [f["Core/Utilities.js"]],
    function (a) {
      var f = a.clamp,
        A = a.pick,
        G = a.stableSort,
        y;
      (function (a) {
        function B(a, r, p) {
          var e = a,
            c = e.reducedLen || r,
            k = function (c, g) {
              return (g.rank || 0) - (c.rank || 0);
            },
            g = function (c, g) {
              return c.target - g.target;
            },
            l,
            m = !0,
            z = [],
            N = 0;
          for (l = a.length; l--; ) N += a[l].size;
          if (N > c) {
            G(a, k);
            for (N = l = 0; N <= c; ) (N += a[l].size), l++;
            z = a.splice(l - 1, a.length);
          }
          G(a, g);
          for (
            a = a.map(function (c) {
              return {
                size: c.size,
                targets: [c.target],
                align: A(c.align, 0.5),
              };
            });
            m;

          ) {
            for (l = a.length; l--; )
              (c = a[l]),
                (k =
                  (Math.min.apply(0, c.targets) +
                    Math.max.apply(0, c.targets)) /
                  2),
                (c.pos = f(k - c.size * c.align, 0, r - c.size));
            l = a.length;
            for (m = !1; l--; )
              0 < l &&
                a[l - 1].pos + a[l - 1].size > a[l].pos &&
                ((a[l - 1].size += a[l].size),
                (a[l - 1].targets = a[l - 1].targets.concat(a[l].targets)),
                (a[l - 1].align = 0.5),
                a[l - 1].pos + a[l - 1].size > r &&
                  (a[l - 1].pos = r - a[l - 1].size),
                a.splice(l, 1),
                (m = !0));
          }
          e.push.apply(e, z);
          l = 0;
          a.some(function (c) {
            var g = 0;
            return (c.targets || []).some(function () {
              e[l].pos = c.pos + g;
              if (
                "undefined" !== typeof p &&
                Math.abs(e[l].pos - e[l].target) > p
              )
                return (
                  e.slice(0, l + 1).forEach(function (c) {
                    return delete c.pos;
                  }),
                  (e.reducedLen = (e.reducedLen || r) - 0.1 * r),
                  e.reducedLen > 0.1 * r && B(e, r, p),
                  !0
                );
              g += e[l].size;
              l++;
              return !1;
            });
          });
          G(e, g);
          return e;
        }
        a.distribute = B;
      })(y || (y = {}));
      return y;
    }
  );
  L(
    f,
    "Core/Renderer/SVG/SVGElement.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B = a.animate,
        F = a.animObject,
        I = a.stop,
        v = A.deg2rad,
        r = A.doc,
        p = A.svg,
        e = A.SVG_NS,
        c = A.win,
        k = G.addEvent,
        g = G.attr,
        l = G.createElement,
        m = G.css,
        z = G.defined,
        N = G.erase,
        J = G.extend,
        D = G.fireEvent,
        E = G.isArray,
        t = G.isFunction,
        x = G.isString,
        d = G.merge,
        h = G.objectEach,
        b = G.pick,
        q = G.pInt,
        n = G.syncTimeout,
        u = G.uniqueKey;
      a = (function () {
        function a() {
          this.element = void 0;
          this.onEvents = {};
          this.opacity = 1;
          this.renderer = void 0;
          this.SVG_NS = e;
          this.symbolCustomAttribs =
            "x y width height r start end innerR anchorX anchorY rounded".split(
              " "
            );
        }
        a.prototype._defaultGetter = function (d) {
          d = b(
            this[d + "Value"],
            this[d],
            this.element ? this.element.getAttribute(d) : null,
            0
          );
          /^[\-0-9\.]+$/.test(d) && (d = parseFloat(d));
          return d;
        };
        a.prototype._defaultSetter = function (b, d, c) {
          c.setAttribute(d, b);
        };
        a.prototype.add = function (b) {
          var d = this.renderer,
            c = this.element;
          b && (this.parentGroup = b);
          this.parentInverted = b && b.inverted;
          "undefined" !== typeof this.textStr &&
            "text" === this.element.nodeName &&
            d.buildText(this);
          this.added = !0;
          if (!b || b.handleZ || this.zIndex) var h = this.zIndexSetter();
          h || (b ? b.element : d.box).appendChild(c);
          if (this.onAdd) this.onAdd();
          return this;
        };
        a.prototype.addClass = function (b, d) {
          var c = d ? "" : this.attr("class") || "";
          b = (b || "")
            .split(/ /g)
            .reduce(
              function (b, d) {
                -1 === c.indexOf(d) && b.push(d);
                return b;
              },
              c ? [c] : []
            )
            .join(" ");
          b !== c && this.attr("class", b);
          return this;
        };
        a.prototype.afterSetters = function () {
          this.doTransform && (this.updateTransform(), (this.doTransform = !1));
        };
        a.prototype.align = function (d, c, h) {
          var w = {},
            n = this.renderer,
            C = n.alignedObjects,
            M,
            g,
            q;
          if (d) {
            if (
              ((this.alignOptions = d), (this.alignByTranslate = c), !h || x(h))
            )
              (this.alignTo = M = h || "renderer"),
                N(C, this),
                C.push(this),
                (h = void 0);
          } else
            (d = this.alignOptions),
              (c = this.alignByTranslate),
              (M = this.alignTo);
          h = b(h, n[M], "scrollablePlotBox" === M ? n.plotBox : void 0, n);
          M = d.align;
          var u = d.verticalAlign;
          n = (h.x || 0) + (d.x || 0);
          C = (h.y || 0) + (d.y || 0);
          "right" === M ? (g = 1) : "center" === M && (g = 2);
          g && (n += (h.width - (d.width || 0)) / g);
          w[c ? "translateX" : "x"] = Math.round(n);
          "bottom" === u ? (q = 1) : "middle" === u && (q = 2);
          q && (C += (h.height - (d.height || 0)) / q);
          w[c ? "translateY" : "y"] = Math.round(C);
          this[this.placed ? "animate" : "attr"](w);
          this.placed = !0;
          this.alignAttr = w;
          return this;
        };
        a.prototype.alignSetter = function (b) {
          var d = { left: "start", center: "middle", right: "end" };
          d[b] &&
            ((this.alignValue = b),
            this.element.setAttribute("text-anchor", d[b]));
        };
        a.prototype.animate = function (d, c, g) {
          var w = this,
            q = F(b(c, this.renderer.globalAnimation, !0));
          c = q.defer;
          b(r.hidden, r.msHidden, r.webkitHidden, !1) && (q.duration = 0);
          0 !== q.duration
            ? (g && (q.complete = g),
              n(function () {
                w.element && B(w, d, q);
              }, c))
            : (this.attr(d, void 0, g || q.complete),
              h(
                d,
                function (b, d) {
                  q.step &&
                    q.step.call(this, b, { prop: d, pos: 1, elem: this });
                },
                this
              ));
          return this;
        };
        a.prototype.applyTextOutline = function (b) {
          var d = this.element;
          -1 !== b.indexOf("contrast") &&
            (b = b.replace(
              /contrast/g,
              this.renderer.getContrast(d.style.fill)
            ));
          var c = b.split(" ");
          b = c[c.length - 1];
          if ((c = c[0]) && "none" !== c && A.svg) {
            this.fakeTS = !0;
            this.ySetter = this.xSetter;
            c = c.replace(/(^[\d\.]+)(.*?)$/g, function (b, d, c) {
              return 2 * Number(d) + c;
            });
            this.removeTextOutline();
            var h = r.createElementNS(e, "tspan");
            g(h, {
              class: "highcharts-text-outline",
              fill: b,
              stroke: b,
              "stroke-width": c,
              "stroke-linejoin": "round",
            });
            b = d.querySelector("textPath") || d;
            [].forEach.call(b.childNodes, function (b) {
              var d = b.cloneNode(!0);
              d.removeAttribute &&
                ["fill", "stroke", "stroke-width", "stroke"].forEach(function (
                  b
                ) {
                  return d.removeAttribute(b);
                });
              h.appendChild(d);
            });
            var w = 0;
            [].forEach.call(b.querySelectorAll("text tspan"), function (b) {
              w += Number(b.getAttribute("dy"));
            });
            c = r.createElementNS(e, "tspan");
            c.textContent = "\u200b";
            g(c, { x: Number(d.getAttribute("x")), dy: -w });
            h.appendChild(c);
            b.insertBefore(h, b.firstChild);
          }
        };
        a.prototype.attr = function (b, d, c, n) {
          var w = this.element,
            C = this.symbolCustomAttribs,
            M,
            g = this,
            q,
            u;
          if ("string" === typeof b && "undefined" !== typeof d) {
            var e = b;
            b = {};
            b[e] = d;
          }
          "string" === typeof b
            ? (g = (this[b + "Getter"] || this._defaultGetter).call(this, b, w))
            : (h(
                b,
                function (d, c) {
                  q = !1;
                  n || I(this, c);
                  this.symbolName &&
                    -1 !== C.indexOf(c) &&
                    (M || (this.symbolAttr(b), (M = !0)), (q = !0));
                  !this.rotation ||
                    ("x" !== c && "y" !== c) ||
                    (this.doTransform = !0);
                  q ||
                    ((u = this[c + "Setter"] || this._defaultSetter),
                    u.call(this, d, c, w),
                    !this.styledMode &&
                      this.shadows &&
                      /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
                        c
                      ) &&
                      this.updateShadows(c, d, u));
                },
                this
              ),
              this.afterSetters());
          c && c.call(this);
          return g;
        };
        a.prototype.clip = function (b) {
          return this.attr(
            "clip-path",
            b ? "url(" + this.renderer.url + "#" + b.id + ")" : "none"
          );
        };
        a.prototype.crisp = function (b, d) {
          d = d || b.strokeWidth || 0;
          var c = (Math.round(d) % 2) / 2;
          b.x = Math.floor(b.x || this.x || 0) + c;
          b.y = Math.floor(b.y || this.y || 0) + c;
          b.width = Math.floor((b.width || this.width || 0) - 2 * c);
          b.height = Math.floor((b.height || this.height || 0) - 2 * c);
          z(b.strokeWidth) && (b.strokeWidth = d);
          return b;
        };
        a.prototype.complexColor = function (b, c, n) {
          var g = this.renderer,
            q,
            C,
            M,
            w,
            e,
            a,
            t,
            H,
            l,
            m,
            k = [],
            x;
          D(this.renderer, "complexColor", { args: arguments }, function () {
            b.radialGradient
              ? (C = "radialGradient")
              : b.linearGradient && (C = "linearGradient");
            if (C) {
              M = b[C];
              e = g.gradients;
              a = b.stops;
              l = n.radialReference;
              E(M) &&
                (b[C] = M =
                  {
                    x1: M[0],
                    y1: M[1],
                    x2: M[2],
                    y2: M[3],
                    gradientUnits: "userSpaceOnUse",
                  });
              "radialGradient" === C &&
                l &&
                !z(M.gradientUnits) &&
                ((w = M),
                (M = d(M, g.getRadialAttr(l, w), {
                  gradientUnits: "userSpaceOnUse",
                })));
              h(M, function (b, d) {
                "id" !== d && k.push(d, b);
              });
              h(a, function (b) {
                k.push(b);
              });
              k = k.join(",");
              if (e[k]) m = e[k].attr("id");
              else {
                M.id = m = u();
                var O = (e[k] = g.createElement(C).attr(M).add(g.defs));
                O.radAttr = w;
                O.stops = [];
                a.forEach(function (b) {
                  0 === b[1].indexOf("rgba")
                    ? ((q = f.parse(b[1])),
                      (t = q.get("rgb")),
                      (H = q.get("a")))
                    : ((t = b[1]), (H = 1));
                  b = g
                    .createElement("stop")
                    .attr({ offset: b[0], "stop-color": t, "stop-opacity": H })
                    .add(O);
                  O.stops.push(b);
                });
              }
              x = "url(" + g.url + "#" + m + ")";
              n.setAttribute(c, x);
              n.gradient = k;
              b.toString = function () {
                return x;
              };
            }
          });
        };
        a.prototype.css = function (b) {
          var c = this.styles,
            n = {},
            g = this.element,
            u = !c;
          b.color && (b.fill = b.color);
          c &&
            h(b, function (b, d) {
              c && c[d] !== b && ((n[d] = b), (u = !0));
            });
          if (u) {
            c && (b = J(c, n));
            if (null === b.width || "auto" === b.width) delete this.textWidth;
            else if ("text" === g.nodeName.toLowerCase() && b.width)
              var C = (this.textWidth = q(b.width));
            this.styles = b;
            C && !p && this.renderer.forExport && delete b.width;
            var M = d(b);
            g.namespaceURI === this.SVG_NS &&
              ["textOutline", "textOverflow", "width"].forEach(function (b) {
                return M && delete M[b];
              });
            m(g, M);
            this.added &&
              ("text" === this.element.nodeName &&
                this.renderer.buildText(this),
              b.textOutline && this.applyTextOutline(b.textOutline));
          }
          return this;
        };
        a.prototype.dashstyleSetter = function (d) {
          var c = this["stroke-width"];
          "inherit" === c && (c = 1);
          if ((d = d && d.toLowerCase())) {
            var h = d
              .replace("shortdashdotdot", "3,1,1,1,1,1,")
              .replace("shortdashdot", "3,1,1,1")
              .replace("shortdot", "1,1,")
              .replace("shortdash", "3,1,")
              .replace("longdash", "8,3,")
              .replace(/dot/g, "1,3,")
              .replace("dash", "4,3,")
              .replace(/,$/, "")
              .split(",");
            for (d = h.length; d--; ) h[d] = "" + q(h[d]) * b(c, NaN);
            d = h.join(",").replace(/NaN/g, "none");
            this.element.setAttribute("stroke-dasharray", d);
          }
        };
        a.prototype.destroy = function () {
          var b = this,
            d = b.element || {},
            c = b.renderer,
            n = d.ownerSVGElement,
            g = (c.isSVG && "SPAN" === d.nodeName && b.parentGroup) || void 0;
          d.onclick =
            d.onmouseout =
            d.onmouseover =
            d.onmousemove =
            d.point =
              null;
          I(b);
          if (b.clipPath && n) {
            var C = b.clipPath;
            [].forEach.call(
              n.querySelectorAll("[clip-path],[CLIP-PATH]"),
              function (b) {
                -1 < b.getAttribute("clip-path").indexOf(C.element.id) &&
                  b.removeAttribute("clip-path");
              }
            );
            b.clipPath = C.destroy();
          }
          if (b.stops) {
            for (n = 0; n < b.stops.length; n++) b.stops[n].destroy();
            b.stops.length = 0;
            b.stops = void 0;
          }
          b.safeRemoveChild(d);
          for (
            c.styledMode || b.destroyShadows();
            g && g.div && 0 === g.div.childNodes.length;

          )
            (d = g.parentGroup),
              b.safeRemoveChild(g.div),
              delete g.div,
              (g = d);
          b.alignTo && N(c.alignedObjects, b);
          h(b, function (d, c) {
            b[c] && b[c].parentGroup === b && b[c].destroy && b[c].destroy();
            delete b[c];
          });
        };
        a.prototype.destroyShadows = function () {
          (this.shadows || []).forEach(function (b) {
            this.safeRemoveChild(b);
          }, this);
          this.shadows = void 0;
        };
        a.prototype.dSetter = function (b, d, c) {
          E(b) &&
            ("string" === typeof b[0] && (b = this.renderer.pathToSegments(b)),
            (this.pathArray = b),
            (b = b.reduce(function (b, d, c) {
              return d && d.join
                ? (c ? b + " " : "") + d.join(" ")
                : (d || "").toString();
            }, "")));
          /(NaN| {2}|^$)/.test(b) && (b = "M 0 0");
          this[d] !== b && (c.setAttribute(d, b), (this[d] = b));
        };
        a.prototype.fadeOut = function (d) {
          var c = this;
          c.animate(
            { opacity: 0 },
            {
              duration: b(d, 150),
              complete: function () {
                c.hide();
              },
            }
          );
        };
        a.prototype.fillSetter = function (b, d, c) {
          "string" === typeof b
            ? c.setAttribute(d, b)
            : b && this.complexColor(b, d, c);
        };
        a.prototype.getBBox = function (d, c) {
          var h = this.alignValue,
            n = this.element,
            g = this.renderer,
            C = this.styles,
            q = this.textStr,
            u = g.cache,
            e = g.cacheKeys,
            w = n.namespaceURI === this.SVG_NS;
          c = b(c, this.rotation, 0);
          var l = g.styledMode
              ? n && a.prototype.getStyle.call(n, "font-size")
              : C && C.fontSize,
            H;
          if (z(q)) {
            var k = q.toString();
            -1 === k.indexOf("<") && (k = k.replace(/[0-9]/g, "0"));
            k += [
              "",
              c,
              l,
              this.textWidth,
              h,
              C && C.textOverflow,
              C && C.fontWeight,
            ].join();
          }
          k && !d && (H = u[k]);
          if (!H) {
            if (w || g.forExport) {
              try {
                var O =
                  this.fakeTS &&
                  function (b) {
                    var d = n.querySelector(".highcharts-text-outline");
                    d && m(d, { display: b });
                  };
                t(O) && O("none");
                H = n.getBBox
                  ? J({}, n.getBBox())
                  : {
                      width: n.offsetWidth,
                      height: n.offsetHeight,
                      x: 0,
                      y: 0,
                    };
                t(O) && O("");
              } catch (U) {
                ("");
              }
              if (!H || 0 > H.width) H = { x: 0, y: 0, width: 0, height: 0 };
            } else H = this.htmlGetBBox();
            if (
              g.isSVG &&
              ((g = H.width),
              (d = H.height),
              w &&
                (H.height = d =
                  { "11px,17": 14, "13px,20": 16 }[
                    "" + (l || "") + ",".concat(Math.round(d))
                  ] || d),
              c)
            ) {
              w = Number(n.getAttribute("y") || 0) - H.y;
              h = { right: 1, center: 0.5 }[h || 0] || 0;
              C = c * v;
              l = (c - 90) * v;
              var x = g * Math.cos(C);
              c = g * Math.sin(C);
              O = Math.cos(l);
              C = Math.sin(l);
              g = H.x + h * (g - x) + w * O;
              l = g + x;
              O = l - d * O;
              x = O - x;
              w = H.y + w - h * c + w * C;
              h = w + c;
              d = h - d * C;
              c = d - c;
              H.x = Math.min(g, l, O, x);
              H.y = Math.min(w, h, d, c);
              H.width = Math.max(g, l, O, x) - H.x;
              H.height = Math.max(w, h, d, c) - H.y;
            }
            if (k && ("" === q || 0 < H.height)) {
              for (; 250 < e.length; ) delete u[e.shift()];
              u[k] || e.push(k);
              u[k] = H;
            }
          }
          return H;
        };
        a.prototype.getStyle = function (b) {
          return c
            .getComputedStyle(this.element || this, "")
            .getPropertyValue(b);
        };
        a.prototype.hasClass = function (b) {
          return -1 !== ("" + this.attr("class")).split(" ").indexOf(b);
        };
        a.prototype.hide = function () {
          return this.attr({ visibility: "hidden" });
        };
        a.prototype.htmlGetBBox = function () {
          return { height: 0, width: 0, x: 0, y: 0 };
        };
        a.prototype.init = function (b, d) {
          this.element =
            "span" === d ? l(d) : r.createElementNS(this.SVG_NS, d);
          this.renderer = b;
          D(this, "afterInit");
        };
        a.prototype.invert = function (b) {
          this.inverted = b;
          this.updateTransform();
          return this;
        };
        a.prototype.on = function (b, d) {
          var c = this.onEvents;
          if (c[b]) c[b]();
          c[b] = k(this.element, b, d);
          return this;
        };
        a.prototype.opacitySetter = function (b, d, c) {
          this.opacity = b = Number(Number(b).toFixed(3));
          c.setAttribute(d, b);
        };
        a.prototype.removeClass = function (b) {
          return this.attr(
            "class",
            ("" + this.attr("class"))
              .replace(x(b) ? new RegExp("(^| )".concat(b, "( |$)")) : b, " ")
              .replace(/ +/g, " ")
              .trim()
          );
        };
        a.prototype.removeTextOutline = function () {
          var b = this.element.querySelector("tspan.highcharts-text-outline");
          b && this.safeRemoveChild(b);
        };
        a.prototype.safeRemoveChild = function (b) {
          var d = b.parentNode;
          d && d.removeChild(b);
        };
        a.prototype.setRadialReference = function (b) {
          var d =
            this.element.gradient &&
            this.renderer.gradients[this.element.gradient];
          this.element.radialReference = b;
          d &&
            d.radAttr &&
            d.animate(this.renderer.getRadialAttr(b, d.radAttr));
          return this;
        };
        a.prototype.setTextPath = function (b, c) {
          var h = this;
          c = d(
            !0,
            {
              enabled: !0,
              attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" },
            },
            c
          );
          var n = this.renderer.url,
            g = this.text || this,
            C = g.textPath,
            q = c.attributes,
            e = c.enabled;
          b = b || (C && C.path);
          C && C.undo();
          b && e
            ? ((c = k(g, "afterModifyTree", function (d) {
                if (b && e) {
                  var c = b.attr("id");
                  c || b.attr("id", (c = u()));
                  var C = { x: 0, y: 0 };
                  z(q.dx) && ((C.dx = q.dx), delete q.dx);
                  z(q.dy) && ((C.dy = q.dy), delete q.dy);
                  g.attr(C);
                  h.attr({ transform: "" });
                  h.box && (h.box = h.box.destroy());
                  C = d.nodes.slice(0);
                  d.nodes.length = 0;
                  d.nodes[0] = {
                    tagName: "textPath",
                    attributes: J(q, {
                      "text-anchor": q.textAnchor,
                      href: "" + n + "#".concat(c),
                    }),
                    children: C,
                  };
                }
              })),
              (g.textPath = { path: b, undo: c }))
            : (g.attr({ dx: 0, dy: 0 }), delete g.textPath);
          this.added && ((g.textCache = ""), this.renderer.buildText(g));
          return this;
        };
        a.prototype.shadow = function (b, d, c) {
          var n = [],
            q = this.element,
            C = this.oldShadowOptions,
            u = {
              color: "#000000",
              offsetX: this.parentInverted ? -1 : 1,
              offsetY: this.parentInverted ? -1 : 1,
              opacity: 0.15,
              width: 3,
            },
            e = !1,
            a;
          !0 === b ? (a = u) : "object" === typeof b && (a = J(u, b));
          a &&
            (a &&
              C &&
              h(a, function (b, d) {
                b !== C[d] && (e = !0);
              }),
            e && this.destroyShadows(),
            (this.oldShadowOptions = a));
          if (!a) this.destroyShadows();
          else if (!this.shadows) {
            var l = a.opacity / a.width;
            var t = this.parentInverted
              ? "translate(".concat(a.offsetY, ", ").concat(a.offsetX, ")")
              : "translate(".concat(a.offsetX, ", ").concat(a.offsetY, ")");
            for (u = 1; u <= a.width; u++) {
              var H = q.cloneNode(!1);
              var k = 2 * a.width + 1 - 2 * u;
              g(H, {
                stroke: b.color || "#000000",
                "stroke-opacity": l * u,
                "stroke-width": k,
                transform: t,
                fill: "none",
              });
              H.setAttribute(
                "class",
                (H.getAttribute("class") || "") + " highcharts-shadow"
              );
              c &&
                (g(H, "height", Math.max(g(H, "height") - k, 0)),
                (H.cutHeight = k));
              d
                ? d.element.appendChild(H)
                : q.parentNode && q.parentNode.insertBefore(H, q);
              n.push(H);
            }
            this.shadows = n;
          }
          return this;
        };
        a.prototype.show = function (b) {
          void 0 === b && (b = !0);
          return this.attr({ visibility: b ? "inherit" : "visible" });
        };
        a.prototype.strokeSetter = function (b, d, c) {
          this[d] = b;
          this.stroke && this["stroke-width"]
            ? (a.prototype.fillSetter.call(this, this.stroke, "stroke", c),
              c.setAttribute("stroke-width", this["stroke-width"]),
              (this.hasStroke = !0))
            : "stroke-width" === d && 0 === b && this.hasStroke
            ? (c.removeAttribute("stroke"), (this.hasStroke = !1))
            : this.renderer.styledMode &&
              this["stroke-width"] &&
              (c.setAttribute("stroke-width", this["stroke-width"]),
              (this.hasStroke = !0));
        };
        a.prototype.strokeWidth = function () {
          if (!this.renderer.styledMode) return this["stroke-width"] || 0;
          var b = this.getStyle("stroke-width"),
            d = 0;
          if (b.indexOf("px") === b.length - 2) d = q(b);
          else if ("" !== b) {
            var c = r.createElementNS(e, "rect");
            g(c, { width: b, "stroke-width": 0 });
            this.element.parentNode.appendChild(c);
            d = c.getBBox().width;
            c.parentNode.removeChild(c);
          }
          return d;
        };
        a.prototype.symbolAttr = function (d) {
          var c = this;
          "x y r start end width height innerR anchorX anchorY clockwise"
            .split(" ")
            .forEach(function (h) {
              c[h] = b(d[h], c[h]);
            });
          c.attr({
            d: c.renderer.symbols[c.symbolName](c.x, c.y, c.width, c.height, c),
          });
        };
        a.prototype.textSetter = function (b) {
          b !== this.textStr &&
            (delete this.textPxLength,
            (this.textStr = b),
            this.added && this.renderer.buildText(this));
        };
        a.prototype.titleSetter = function (d) {
          var c = this.element,
            h =
              c.getElementsByTagName("title")[0] ||
              r.createElementNS(this.SVG_NS, "title");
          c.insertBefore ? c.insertBefore(h, c.firstChild) : c.appendChild(h);
          h.textContent = String(b(d, ""))
            .replace(/<[^>]*>/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
        };
        a.prototype.toFront = function () {
          var b = this.element;
          b.parentNode.appendChild(b);
          return this;
        };
        a.prototype.translate = function (b, d) {
          return this.attr({ translateX: b, translateY: d });
        };
        a.prototype.updateShadows = function (b, d, c) {
          var h = this.shadows;
          if (h)
            for (var g = h.length; g--; )
              c.call(
                h[g],
                "height" === b
                  ? Math.max(d - (h[g].cutHeight || 0), 0)
                  : "d" === b
                  ? this.d
                  : d,
                b,
                h[g]
              );
        };
        a.prototype.updateTransform = function () {
          var d = this.scaleX,
            c = this.scaleY,
            h = this.inverted,
            g = this.rotation,
            n = this.matrix,
            C = this.element,
            q = this.translateX || 0,
            u = this.translateY || 0;
          h && ((q += this.width), (u += this.height));
          q = ["translate(" + q + "," + u + ")"];
          z(n) && q.push("matrix(" + n.join(",") + ")");
          h
            ? q.push("rotate(90) scale(-1,1)")
            : g &&
              q.push(
                "rotate(" +
                  g +
                  " " +
                  b(this.rotationOriginX, C.getAttribute("x"), 0) +
                  " " +
                  b(this.rotationOriginY, C.getAttribute("y") || 0) +
                  ")"
              );
          (z(d) || z(c)) && q.push("scale(" + b(d, 1) + " " + b(c, 1) + ")");
          q.length &&
            !(this.text || this).textPath &&
            C.setAttribute("transform", q.join(" "));
        };
        a.prototype.visibilitySetter = function (b, d, c) {
          "inherit" === b
            ? c.removeAttribute(d)
            : this[d] !== b && c.setAttribute(d, b);
          this[d] = b;
        };
        a.prototype.xGetter = function (b) {
          "circle" === this.element.nodeName &&
            ("x" === b ? (b = "cx") : "y" === b && (b = "cy"));
          return this._defaultGetter(b);
        };
        a.prototype.zIndexSetter = function (b, d) {
          var c = this.renderer,
            h = this.parentGroup,
            g = (h || c).element || c.box,
            C = this.element;
          c = g === c.box;
          var n = !1;
          var u = this.added;
          var e;
          z(b)
            ? (C.setAttribute("data-z-index", b),
              (b = +b),
              this[d] === b && (u = !1))
            : z(this[d]) && C.removeAttribute("data-z-index");
          this[d] = b;
          if (u) {
            (b = this.zIndex) && h && (h.handleZ = !0);
            d = g.childNodes;
            for (e = d.length - 1; 0 <= e && !n; e--) {
              h = d[e];
              u = h.getAttribute("data-z-index");
              var a = !z(u);
              if (h !== C)
                if (0 > b && a && !c && !e) g.insertBefore(C, d[e]), (n = !0);
                else if (q(u) <= b || (a && (!z(b) || 0 <= b)))
                  g.insertBefore(C, d[e + 1] || null), (n = !0);
            }
            n || (g.insertBefore(C, d[c ? 3 : 0] || null), (n = !0));
          }
          return n;
        };
        return a;
      })();
      a.prototype["stroke-widthSetter"] = a.prototype.strokeSetter;
      a.prototype.yGetter = a.prototype.xGetter;
      a.prototype.matrixSetter =
        a.prototype.rotationOriginXSetter =
        a.prototype.rotationOriginYSetter =
        a.prototype.rotationSetter =
        a.prototype.scaleXSetter =
        a.prototype.scaleYSetter =
        a.prototype.translateXSetter =
        a.prototype.translateYSetter =
        a.prototype.verticalAlignSetter =
          function (b, d) {
            this[d] = b;
            this.doTransform = !0;
          };
      ("");
      return a;
    }
  );
  L(
    f,
    "Core/Renderer/RendererRegistry.js",
    [f["Core/Globals.js"]],
    function (a) {
      var f;
      (function (f) {
        f.rendererTypes = {};
        var B;
        f.getRendererType = function (a) {
          void 0 === a && (a = B);
          return f.rendererTypes[a] || f.rendererTypes[B];
        };
        f.registerRendererType = function (y, A, I) {
          f.rendererTypes[y] = A;
          if (!B || I) (B = y), (a.Renderer = A);
        };
      })(f || (f = {}));
      return f;
    }
  );
  L(
    f,
    "Core/Renderer/SVG/SVGLabel.js",
    [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (e, c) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, g) {
                    c.__proto__ = g;
                  }) ||
                function (c, g) {
                  for (var e in g) g.hasOwnProperty(e) && (c[e] = g[e]);
                };
              return a(e, c);
            };
            return function (e, c) {
              function k() {
                this.constructor = e;
              }
              a(e, c);
              e.prototype =
                null === c
                  ? Object.create(c)
                  : ((k.prototype = c.prototype), new k());
            };
          })(),
        G = f.defined,
        y = f.extend,
        F = f.isNumber,
        I = f.merge,
        v = f.pick,
        r = f.removeEvent;
      return (function (f) {
        function e(c, a, g, l, m, z, p, r, D, E) {
          var t = f.call(this) || this;
          t.paddingLeftSetter = t.paddingSetter;
          t.paddingRightSetter = t.paddingSetter;
          t.init(c, "g");
          t.textStr = a;
          t.x = g;
          t.y = l;
          t.anchorX = z;
          t.anchorY = p;
          t.baseline = D;
          t.className = E;
          t.addClass(
            "button" === E ? "highcharts-no-tooltip" : "highcharts-label"
          );
          E && t.addClass("highcharts-" + E);
          t.text = c.text(void 0, 0, 0, r).attr({ zIndex: 1 });
          var k;
          "string" === typeof m &&
            ((k = /^url\((.*?)\)$/.test(m)) || t.renderer.symbols[m]) &&
            (t.symbolKey = m);
          t.bBox = e.emptyBBox;
          t.padding = 3;
          t.baselineOffset = 0;
          t.needsBox = c.styledMode || k;
          t.deferredAttr = {};
          t.alignFactor = 0;
          return t;
        }
        B(e, f);
        e.prototype.alignSetter = function (c) {
          c = { left: 0, center: 0.5, right: 1 }[c];
          c !== this.alignFactor &&
            ((this.alignFactor = c),
            this.bBox && F(this.xSetting) && this.attr({ x: this.xSetting }));
        };
        e.prototype.anchorXSetter = function (c, e) {
          this.anchorX = c;
          this.boxAttr(
            e,
            Math.round(c) - this.getCrispAdjust() - this.xSetting
          );
        };
        e.prototype.anchorYSetter = function (c, e) {
          this.anchorY = c;
          this.boxAttr(e, c - this.ySetting);
        };
        e.prototype.boxAttr = function (c, e) {
          this.box ? this.box.attr(c, e) : (this.deferredAttr[c] = e);
        };
        e.prototype.css = function (c) {
          if (c) {
            var k = {};
            c = I(c);
            e.textProps.forEach(function (g) {
              "undefined" !== typeof c[g] && ((k[g] = c[g]), delete c[g]);
            });
            this.text.css(k);
            var g = "width" in k;
            "fontSize" in k || "fontWeight" in k
              ? this.updateTextPadding()
              : g && this.updateBoxSize();
          }
          return a.prototype.css.call(this, c);
        };
        e.prototype.destroy = function () {
          r(this.element, "mouseenter");
          r(this.element, "mouseleave");
          this.text && this.text.destroy();
          this.box && (this.box = this.box.destroy());
          a.prototype.destroy.call(this);
        };
        e.prototype.fillSetter = function (c, e) {
          c && (this.needsBox = !0);
          this.fill = c;
          this.boxAttr(e, c);
        };
        e.prototype.getBBox = function () {
          this.textStr &&
            0 === this.bBox.width &&
            0 === this.bBox.height &&
            this.updateBoxSize();
          var c = this.padding,
            e = v(this.paddingLeft, c);
          return {
            width: this.width,
            height: this.height,
            x: this.bBox.x - e,
            y: this.bBox.y - c,
          };
        };
        e.prototype.getCrispAdjust = function () {
          return this.renderer.styledMode && this.box
            ? (this.box.strokeWidth() % 2) / 2
            : ((this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) %
                2) /
                2;
        };
        e.prototype.heightSetter = function (c) {
          this.heightSetting = c;
        };
        e.prototype.onAdd = function () {
          var c = this.textStr;
          this.text.add(this);
          this.attr({ text: G(c) ? c : "", x: this.x, y: this.y });
          this.box &&
            G(this.anchorX) &&
            this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        };
        e.prototype.paddingSetter = function (c, e) {
          F(c)
            ? c !== this[e] && ((this[e] = c), this.updateTextPadding())
            : (this[e] = void 0);
        };
        e.prototype.rSetter = function (c, e) {
          this.boxAttr(e, c);
        };
        e.prototype.shadow = function (c) {
          c &&
            !this.renderer.styledMode &&
            (this.updateBoxSize(), this.box && this.box.shadow(c));
          return this;
        };
        e.prototype.strokeSetter = function (c, e) {
          this.stroke = c;
          this.boxAttr(e, c);
        };
        e.prototype["stroke-widthSetter"] = function (c, e) {
          c && (this.needsBox = !0);
          this["stroke-width"] = c;
          this.boxAttr(e, c);
        };
        e.prototype["text-alignSetter"] = function (c) {
          this.textAlign = c;
        };
        e.prototype.textSetter = function (c) {
          "undefined" !== typeof c && this.text.attr({ text: c });
          this.updateTextPadding();
        };
        e.prototype.updateBoxSize = function () {
          var c = this.text,
            a = c.element.style,
            g = {},
            l = this.padding,
            m = (this.bBox =
              (F(this.widthSetting) &&
                F(this.heightSetting) &&
                !this.textAlign) ||
              !G(c.textStr)
                ? e.emptyBBox
                : c.getBBox());
          this.width = this.getPaddedWidth();
          this.height = (this.heightSetting || m.height || 0) + 2 * l;
          a = this.renderer.fontMetrics(a && a.fontSize, c);
          this.baselineOffset =
            l +
            Math.min((this.text.firstLineMetrics || a).b, m.height || Infinity);
          this.heightSetting &&
            (this.baselineOffset += (this.heightSetting - a.h) / 2);
          this.needsBox &&
            !c.textPath &&
            (this.box ||
              ((c = this.box =
                this.symbolKey
                  ? this.renderer.symbol(this.symbolKey)
                  : this.renderer.rect()),
              c.addClass(
                ("button" === this.className ? "" : "highcharts-label-box") +
                  (this.className
                    ? " highcharts-" + this.className + "-box"
                    : "")
              ),
              c.add(this)),
            (c = this.getCrispAdjust()),
            (g.x = c),
            (g.y = (this.baseline ? -this.baselineOffset : 0) + c),
            (g.width = Math.round(this.width)),
            (g.height = Math.round(this.height)),
            this.box.attr(y(g, this.deferredAttr)),
            (this.deferredAttr = {}));
        };
        e.prototype.updateTextPadding = function () {
          var c = this.text;
          if (!c.textPath) {
            this.updateBoxSize();
            var e = this.baseline ? 0 : this.baselineOffset,
              g = v(this.paddingLeft, this.padding);
            G(this.widthSetting) &&
              this.bBox &&
              ("center" === this.textAlign || "right" === this.textAlign) &&
              (g +=
                { center: 0.5, right: 1 }[this.textAlign] *
                (this.widthSetting - this.bBox.width));
            if (g !== c.x || e !== c.y)
              c.attr("x", g),
                c.hasBoxWidthChanged && (this.bBox = c.getBBox(!0)),
                "undefined" !== typeof e && c.attr("y", e);
            c.x = g;
            c.y = e;
          }
        };
        e.prototype.widthSetter = function (c) {
          this.widthSetting = F(c) ? c : void 0;
        };
        e.prototype.getPaddedWidth = function () {
          var c = this.padding,
            e = v(this.paddingLeft, c);
          c = v(this.paddingRight, c);
          return (this.widthSetting || this.bBox.width || 0) + e + c;
        };
        e.prototype.xSetter = function (c) {
          this.x = c;
          this.alignFactor &&
            ((c -= this.alignFactor * this.getPaddedWidth()),
            (this["forceAnimate:x"] = !0));
          this.xSetting = Math.round(c);
          this.attr("translateX", this.xSetting);
        };
        e.prototype.ySetter = function (c) {
          this.ySetting = this.y = Math.round(c);
          this.attr("translateY", this.ySetting);
        };
        e.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
        e.textProps =
          "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
            " "
          );
        return e;
      })(a);
    }
  );
  L(f, "Core/Renderer/SVG/Symbols.js", [f["Core/Utilities.js"]], function (a) {
    function f(a, f, p, e, c) {
      var k = [];
      if (c) {
        var g = c.start || 0,
          l = I(c.r, p);
        p = I(c.r, e || p);
        var m = (c.end || 0) - 0.001;
        e = c.innerR;
        var z = I(c.open, 0.001 > Math.abs((c.end || 0) - g - 2 * Math.PI)),
          N = Math.cos(g),
          r = Math.sin(g),
          D = Math.cos(m),
          E = Math.sin(m);
        g = I(c.longArc, 0.001 > m - g - Math.PI ? 0 : 1);
        k.push(
          ["M", a + l * N, f + p * r],
          ["A", l, p, 0, g, I(c.clockwise, 1), a + l * D, f + p * E]
        );
        y(e) &&
          k.push(
            z ? ["M", a + e * D, f + e * E] : ["L", a + e * D, f + e * E],
            [
              "A",
              e,
              e,
              0,
              g,
              y(c.clockwise) ? 1 - c.clockwise : 0,
              a + e * N,
              f + e * r,
            ]
          );
        z || k.push(["Z"]);
      }
      return k;
    }
    function A(a, f, p, e, c) {
      return c && c.r
        ? G(a, f, p, e, c)
        : [
            ["M", a, f],
            ["L", a + p, f],
            ["L", a + p, f + e],
            ["L", a, f + e],
            ["Z"],
          ];
    }
    function G(a, f, p, e, c) {
      c = (c && c.r) || 0;
      return [
        ["M", a + c, f],
        ["L", a + p - c, f],
        ["C", a + p, f, a + p, f, a + p, f + c],
        ["L", a + p, f + e - c],
        ["C", a + p, f + e, a + p, f + e, a + p - c, f + e],
        ["L", a + c, f + e],
        ["C", a, f + e, a, f + e, a, f + e - c],
        ["L", a, f + c],
        ["C", a, f, a, f, a + c, f],
      ];
    }
    var y = a.defined,
      F = a.isNumber,
      I = a.pick;
    return {
      arc: f,
      callout: function (a, f, p, e, c) {
        var k = Math.min((c && c.r) || 0, p, e),
          g = k + 6,
          l = c && c.anchorX;
        c = (c && c.anchorY) || 0;
        var m = G(a, f, p, e, { r: k });
        if (!F(l)) return m;
        a + l >= p
          ? c > f + g && c < f + e - g
            ? m.splice(
                3,
                1,
                ["L", a + p, c - 6],
                ["L", a + p + 6, c],
                ["L", a + p, c + 6],
                ["L", a + p, f + e - k]
              )
            : m.splice(
                3,
                1,
                ["L", a + p, e / 2],
                ["L", l, c],
                ["L", a + p, e / 2],
                ["L", a + p, f + e - k]
              )
          : 0 >= a + l
          ? c > f + g && c < f + e - g
            ? m.splice(
                7,
                1,
                ["L", a, c + 6],
                ["L", a - 6, c],
                ["L", a, c - 6],
                ["L", a, f + k]
              )
            : m.splice(
                7,
                1,
                ["L", a, e / 2],
                ["L", l, c],
                ["L", a, e / 2],
                ["L", a, f + k]
              )
          : c && c > e && l > a + g && l < a + p - g
          ? m.splice(
              5,
              1,
              ["L", l + 6, f + e],
              ["L", l, f + e + 6],
              ["L", l - 6, f + e],
              ["L", a + k, f + e]
            )
          : c &&
            0 > c &&
            l > a + g &&
            l < a + p - g &&
            m.splice(
              1,
              1,
              ["L", l - 6, f],
              ["L", l, f - 6],
              ["L", l + 6, f],
              ["L", p - k, f]
            );
        return m;
      },
      circle: function (a, r, p, e) {
        return f(a + p / 2, r + e / 2, p / 2, e / 2, {
          start: 0.5 * Math.PI,
          end: 2.5 * Math.PI,
          open: !1,
        });
      },
      diamond: function (a, f, p, e) {
        return [
          ["M", a + p / 2, f],
          ["L", a + p, f + e / 2],
          ["L", a + p / 2, f + e],
          ["L", a, f + e / 2],
          ["Z"],
        ];
      },
      rect: A,
      roundedRect: G,
      square: A,
      triangle: function (a, f, p, e) {
        return [
          ["M", a + p / 2, f],
          ["L", a + p, f + e],
          ["L", a, f + e],
          ["Z"],
        ];
      },
      "triangle-down": function (a, f, p, e) {
        return [["M", a, f], ["L", a + p, f], ["L", a + p / 2, f + e], ["Z"]];
      },
    };
  });
  L(
    f,
    "Core/Renderer/SVG/TextBuilder.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B = f.doc,
        y = f.SVG_NS,
        F = f.win,
        I = A.attr,
        v = A.extend,
        r = A.fireEvent,
        p = A.isString,
        e = A.objectEach,
        c = A.pick;
      return (function () {
        function k(c) {
          var a = c.styles;
          this.renderer = c.renderer;
          this.svgElement = c;
          this.width = c.textWidth;
          this.textLineHeight = a && a.lineHeight;
          this.textOutline = a && a.textOutline;
          this.ellipsis = !(!a || "ellipsis" !== a.textOverflow);
          this.noWrap = !(!a || "nowrap" !== a.whiteSpace);
          this.fontSize = a && a.fontSize;
        }
        k.prototype.buildSVG = function () {
          var g = this.svgElement,
            e = g.element,
            m = g.renderer,
            k = c(g.textStr, "").toString(),
            f = -1 !== k.indexOf("<"),
            J = e.childNodes;
          m = this.width && !g.added && m.box;
          var D = /<br.*?>/g,
            E = [
              k,
              this.ellipsis,
              this.noWrap,
              this.textLineHeight,
              this.textOutline,
              this.fontSize,
              this.width,
            ].join();
          if (E !== g.textCache) {
            g.textCache = E;
            delete g.actualWidth;
            for (E = J.length; E--; ) e.removeChild(J[E]);
            f ||
            this.ellipsis ||
            this.width ||
            g.textPath ||
            (-1 !== k.indexOf(" ") && (!this.noWrap || D.test(k)))
              ? "" !== k &&
                (m && m.appendChild(e),
                (k = new a(k)),
                this.modifyTree(k.nodes),
                k.addToDOM(e),
                this.modifyDOM(),
                this.ellipsis &&
                  -1 !== (e.textContent || "").indexOf("\u2026") &&
                  g.attr(
                    "title",
                    this.unescapeEntities(g.textStr || "", ["&lt;", "&gt;"])
                  ),
                m && m.removeChild(e))
              : e.appendChild(B.createTextNode(this.unescapeEntities(k)));
            p(this.textOutline) &&
              g.applyTextOutline &&
              g.applyTextOutline(this.textOutline);
          }
        };
        k.prototype.modifyDOM = function () {
          var c = this,
            a = this.svgElement,
            e = I(a.element, "x");
          a.firstLineMetrics = void 0;
          for (var k; (k = a.element.firstChild); )
            if (/^[\s\u200B]*$/.test(k.textContent || " "))
              a.element.removeChild(k);
            else break;
          [].forEach.call(
            a.element.querySelectorAll("tspan.highcharts-br"),
            function (g, t) {
              g.nextSibling &&
                g.previousSibling &&
                (0 === t &&
                  1 === g.previousSibling.nodeType &&
                  (a.firstLineMetrics = a.renderer.fontMetrics(
                    void 0,
                    g.previousSibling
                  )),
                I(g, { dy: c.getLineHeight(g.nextSibling), x: e }));
            }
          );
          var f = this.width || 0;
          if (f) {
            var p = function (g, t) {
                var m = g.textContent || "",
                  d = m.replace(/([^\^])-/g, "$1- ").split(" "),
                  h =
                    !c.noWrap &&
                    (1 < d.length || 1 < a.element.childNodes.length),
                  b = c.getLineHeight(t),
                  q = 0,
                  n = a.actualWidth;
                if (c.ellipsis)
                  m &&
                    c.truncate(
                      g,
                      m,
                      void 0,
                      0,
                      Math.max(0, f - parseInt(c.fontSize || 12, 10)),
                      function (b, d) {
                        return b.substring(0, d) + "\u2026";
                      }
                    );
                else if (h) {
                  m = [];
                  for (h = []; t.firstChild && t.firstChild !== g; )
                    h.push(t.firstChild), t.removeChild(t.firstChild);
                  for (; d.length; )
                    d.length &&
                      !c.noWrap &&
                      0 < q &&
                      (m.push(g.textContent || ""),
                      (g.textContent = d.join(" ").replace(/- /g, "-"))),
                      c.truncate(
                        g,
                        void 0,
                        d,
                        0 === q ? n || 0 : 0,
                        f,
                        function (b, c) {
                          return d.slice(0, c).join(" ").replace(/- /g, "-");
                        }
                      ),
                      (n = a.actualWidth),
                      q++;
                  h.forEach(function (b) {
                    t.insertBefore(b, g);
                  });
                  m.forEach(function (d) {
                    t.insertBefore(B.createTextNode(d), g);
                    d = B.createElementNS(y, "tspan");
                    d.textContent = "\u200b";
                    I(d, { dy: b, x: e });
                    t.insertBefore(d, g);
                  });
                }
              },
              D = function (c) {
                [].slice.call(c.childNodes).forEach(function (g) {
                  g.nodeType === F.Node.TEXT_NODE
                    ? p(g, c)
                    : (-1 !== g.className.baseVal.indexOf("highcharts-br") &&
                        (a.actualWidth = 0),
                      D(g));
                });
              };
            D(a.element);
          }
        };
        k.prototype.getLineHeight = function (c) {
          var a;
          c = c.nodeType === F.Node.TEXT_NODE ? c.parentElement : c;
          this.renderer.styledMode ||
            (a =
              c && /(px|em)$/.test(c.style.fontSize)
                ? c.style.fontSize
                : this.fontSize || this.renderer.style.fontSize || 12);
          return this.textLineHeight
            ? parseInt(this.textLineHeight.toString(), 10)
            : this.renderer.fontMetrics(a, c || this.svgElement.element).h;
        };
        k.prototype.modifyTree = function (c) {
          var a = this,
            g = function (e, m) {
              var k = e.attributes;
              k = void 0 === k ? {} : k;
              var l = e.children,
                f = e.style;
              f = void 0 === f ? {} : f;
              var t = e.tagName,
                x = a.renderer.styledMode;
              if ("b" === t || "strong" === t)
                x
                  ? (k["class"] = "highcharts-strong")
                  : (f.fontWeight = "bold");
              else if ("i" === t || "em" === t)
                x
                  ? (k["class"] = "highcharts-emphasized")
                  : (f.fontStyle = "italic");
              f && f.color && (f.fill = f.color);
              "br" === t
                ? ((k["class"] = "highcharts-br"),
                  (e.textContent = "\u200b"),
                  (m = c[m + 1]) &&
                    m.textContent &&
                    (m.textContent = m.textContent.replace(/^ +/gm, "")))
                : "a" === t &&
                  l &&
                  l.some(function (d) {
                    return "#text" === d.tagName;
                  }) &&
                  (e.children = [{ children: l, tagName: "tspan" }]);
              "#text" !== t && "a" !== t && (e.tagName = "tspan");
              v(e, { attributes: k, style: f });
              l &&
                l
                  .filter(function (d) {
                    return "#text" !== d.tagName;
                  })
                  .forEach(g);
            };
          c.forEach(g);
          r(this.svgElement, "afterModifyTree", { nodes: c });
        };
        k.prototype.truncate = function (c, a, e, k, f, p) {
          var g = this.svgElement,
            m = g.renderer,
            t = g.rotation,
            l = [],
            d = e ? 1 : 0,
            h = (a || e || "").length,
            b = h,
            q,
            n = function (b, d) {
              d = d || b;
              var h = c.parentNode;
              if (h && "undefined" === typeof l[d])
                if (h.getSubStringLength)
                  try {
                    l[d] = k + h.getSubStringLength(0, e ? d + 1 : d);
                  } catch (P) {
                    ("");
                  }
                else
                  m.getSpanWidth &&
                    ((c.textContent = p(a || e, b)),
                    (l[d] = k + m.getSpanWidth(g, c)));
              return l[d];
            };
          g.rotation = 0;
          var u = n(c.textContent.length);
          if (k + u > f) {
            for (; d <= h; )
              (b = Math.ceil((d + h) / 2)),
                e && (q = p(e, b)),
                (u = n(b, q && q.length - 1)),
                d === h ? (d = h + 1) : u > f ? (h = b - 1) : (d = b);
            0 === h
              ? (c.textContent = "")
              : (a && h === a.length - 1) ||
                (c.textContent = q || p(a || e, b));
          }
          e && e.splice(0, b);
          g.actualWidth = u;
          g.rotation = t;
        };
        k.prototype.unescapeEntities = function (c, a) {
          e(this.renderer.escapes, function (g, e) {
            (a && -1 !== a.indexOf(g)) ||
              (c = c.toString().replace(new RegExp(g, "g"), e));
          });
          return c;
        };
        return k;
      })();
    }
  );
  L(
    f,
    "Core/Renderer/SVG/SVGRenderer.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGLabel.js"],
      f["Core/Renderer/SVG/Symbols.js"],
      f["Core/Renderer/SVG/TextBuilder.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F, I, v, r) {
      var p = A.charts,
        e = A.deg2rad,
        c = A.doc,
        k = A.isFirefox,
        g = A.isMS,
        l = A.isWebKit,
        m = A.noop,
        z = A.SVG_NS,
        N = A.symbolSizes,
        J = A.win,
        D = r.addEvent,
        E = r.attr,
        t = r.createElement,
        x = r.css,
        d = r.defined,
        h = r.destroyObjectProperties,
        b = r.extend,
        q = r.isArray,
        n = r.isNumber,
        u = r.isObject,
        K = r.isString,
        w = r.merge,
        S = r.pick,
        P = r.pInt,
        B = r.uniqueKey,
        V;
      A = (function () {
        function C(b, d, c, h, a, C, g) {
          this.width =
            this.url =
            this.style =
            this.isSVG =
            this.imgCount =
            this.height =
            this.gradients =
            this.globalAnimation =
            this.defs =
            this.chartIndex =
            this.cacheKeys =
            this.cache =
            this.boxWrapper =
            this.box =
            this.alignedObjects =
              void 0;
          this.init(b, d, c, h, a, C, g);
        }
        C.prototype.init = function (b, d, h, a, C, g, n) {
          var e = this.createElement("svg").attr({
              version: "1.1",
              class: "highcharts-root",
            }),
            q = e.element;
          n || e.css(this.getStyle(a));
          b.appendChild(q);
          E(b, "dir", "ltr");
          -1 === b.innerHTML.indexOf("xmlns") && E(q, "xmlns", this.SVG_NS);
          this.isSVG = !0;
          this.box = q;
          this.boxWrapper = e;
          this.alignedObjects = [];
          this.url = this.getReferenceURL();
          this.createElement("desc")
            .add()
            .element.appendChild(
              c.createTextNode("Created with Highcharts 10.2.1")
            );
          this.defs = this.createElement("defs").add();
          this.allowHTML = g;
          this.forExport = C;
          this.styledMode = n;
          this.gradients = {};
          this.cache = {};
          this.cacheKeys = [];
          this.imgCount = 0;
          this.setSize(d, h, !1);
          var u;
          k &&
            b.getBoundingClientRect &&
            ((d = function () {
              x(b, { left: 0, top: 0 });
              u = b.getBoundingClientRect();
              x(b, {
                left: Math.ceil(u.left) - u.left + "px",
                top: Math.ceil(u.top) - u.top + "px",
              });
            }),
            d(),
            (this.unSubPixelFix = D(J, "resize", d)));
        };
        C.prototype.definition = function (b) {
          return new a([b]).addToDOM(this.defs.element);
        };
        C.prototype.getReferenceURL = function () {
          if ((k || l) && c.getElementsByTagName("base").length) {
            if (!d(V)) {
              var b = B();
              b = new a([
                {
                  tagName: "svg",
                  attributes: { width: 8, height: 8 },
                  children: [
                    {
                      tagName: "defs",
                      children: [
                        {
                          tagName: "clipPath",
                          attributes: { id: b },
                          children: [
                            {
                              tagName: "rect",
                              attributes: { width: 4, height: 4 },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tagName: "rect",
                      attributes: {
                        id: "hitme",
                        width: 8,
                        height: 8,
                        "clip-path": "url(#".concat(b, ")"),
                        fill: "rgba(0,0,0,0.001)",
                      },
                    },
                  ],
                },
              ]).addToDOM(c.body);
              x(b, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              var h = c.elementFromPoint(6, 6);
              V = "hitme" === (h && h.id);
              c.body.removeChild(b);
            }
            if (V)
              return J.location.href
                .split("#")[0]
                .replace(/<[^>]*>/g, "")
                .replace(/([\('\)])/g, "\\$1")
                .replace(/ /g, "%20");
          }
          return "";
        };
        C.prototype.getStyle = function (d) {
          return (this.style = b(
            {
              fontFamily:
                '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
              fontSize: "12px",
            },
            d
          ));
        };
        C.prototype.setStyle = function (b) {
          this.boxWrapper.css(this.getStyle(b));
        };
        C.prototype.isHidden = function () {
          return !this.boxWrapper.getBBox().width;
        };
        C.prototype.destroy = function () {
          var b = this.defs;
          this.box = null;
          this.boxWrapper = this.boxWrapper.destroy();
          h(this.gradients || {});
          this.gradients = null;
          b && (this.defs = b.destroy());
          this.unSubPixelFix && this.unSubPixelFix();
          return (this.alignedObjects = null);
        };
        C.prototype.createElement = function (b) {
          var d = new this.Element();
          d.init(this, b);
          return d;
        };
        C.prototype.getRadialAttr = function (b, d) {
          return {
            cx: b[0] - b[2] / 2 + (d.cx || 0) * b[2],
            cy: b[1] - b[2] / 2 + (d.cy || 0) * b[2],
            r: (d.r || 0) * b[2],
          };
        };
        C.prototype.buildText = function (b) {
          new v(b).buildSVG();
        };
        C.prototype.getContrast = function (b) {
          b = f.parse(b).rgba.map(function (b) {
            b /= 255;
            return 0.03928 >= b
              ? b / 12.92
              : Math.pow((b + 0.055) / 1.055, 2.4);
          });
          b = 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2];
          return 1.05 / (b + 0.05) > (b + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        };
        C.prototype.button = function (d, c, h, C, e, n, q, t, k, m) {
          void 0 === e && (e = {});
          var H = this.label(d, c, h, k, void 0, void 0, m, void 0, "button"),
            M = this.styledMode;
          d = e.states || {};
          var l = 0;
          e = w(e);
          delete e.states;
          var O = w(
            { color: "#333333", cursor: "pointer", fontWeight: "normal" },
            e.style
          );
          delete e.style;
          var f = a.filterUserAttributes(e);
          H.attr(w({ padding: 8, r: 2 }, f));
          if (!M) {
            f = w({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, f);
            n = w(
              f,
              { fill: "#e6e6e6" },
              a.filterUserAttributes(n || d.hover || {})
            );
            var x = n.style;
            delete n.style;
            q = w(
              f,
              {
                fill: "#e6ebf5",
                style: { color: "#000000", fontWeight: "bold" },
              },
              a.filterUserAttributes(q || d.select || {})
            );
            var z = q.style;
            delete q.style;
            t = w(
              f,
              { style: { color: "#cccccc" } },
              a.filterUserAttributes(t || d.disabled || {})
            );
            var T = t.style;
            delete t.style;
          }
          D(H.element, g ? "mouseover" : "mouseenter", function () {
            3 !== l && H.setState(1);
          });
          D(H.element, g ? "mouseout" : "mouseleave", function () {
            3 !== l && H.setState(l);
          });
          H.setState = function (b) {
            1 !== b && (H.state = l = b);
            H.removeClass(
              /highcharts-button-(normal|hover|pressed|disabled)/
            ).addClass(
              "highcharts-button-" +
                ["normal", "hover", "pressed", "disabled"][b || 0]
            );
            M ||
              (H.attr([f, n, q, t][b || 0]),
              (b = [O, x, z, T][b || 0]),
              u(b) && H.css(b));
          };
          M || H.attr(f).css(b({ cursor: "default" }, O));
          return H.on("touchstart", function (b) {
            return b.stopPropagation();
          }).on("click", function (b) {
            3 !== l && C.call(H, b);
          });
        };
        C.prototype.crispLine = function (b, c, h) {
          void 0 === h && (h = "round");
          var a = b[0],
            C = b[1];
          d(a[1]) &&
            a[1] === C[1] &&
            (a[1] = C[1] = Math[h](a[1]) - (c % 2) / 2);
          d(a[2]) &&
            a[2] === C[2] &&
            (a[2] = C[2] = Math[h](a[2]) + (c % 2) / 2);
          return b;
        };
        C.prototype.path = function (d) {
          var c = this.styledMode ? {} : { fill: "none" };
          q(d) ? (c.d = d) : u(d) && b(c, d);
          return this.createElement("path").attr(c);
        };
        C.prototype.circle = function (b, d, c) {
          b = u(b) ? b : "undefined" === typeof b ? {} : { x: b, y: d, r: c };
          d = this.createElement("circle");
          d.xSetter = d.ySetter = function (b, d, c) {
            c.setAttribute("c" + d, b);
          };
          return d.attr(b);
        };
        C.prototype.arc = function (b, d, c, h, a, C) {
          u(b)
            ? ((h = b), (d = h.y), (c = h.r), (b = h.x))
            : (h = { innerR: h, start: a, end: C });
          b = this.symbol("arc", b, d, c, c, h);
          b.r = c;
          return b;
        };
        C.prototype.rect = function (b, d, c, h, a, C) {
          a = u(b) ? b.r : a;
          var e = this.createElement("rect");
          b = u(b)
            ? b
            : "undefined" === typeof b
            ? {}
            : { x: b, y: d, width: Math.max(c, 0), height: Math.max(h, 0) };
          this.styledMode ||
            ("undefined" !== typeof C &&
              ((b["stroke-width"] = C), (b = e.crisp(b))),
            (b.fill = "none"));
          a && (b.r = a);
          e.rSetter = function (b, d, c) {
            e.r = b;
            E(c, { rx: b, ry: b });
          };
          e.rGetter = function () {
            return e.r || 0;
          };
          return e.attr(b);
        };
        C.prototype.setSize = function (b, d, c) {
          this.width = b;
          this.height = d;
          this.boxWrapper.animate(
            { width: b, height: d },
            {
              step: function () {
                this.attr({
                  viewBox:
                    "0 0 " + this.attr("width") + " " + this.attr("height"),
                });
              },
              duration: S(c, !0) ? void 0 : 0,
            }
          );
          this.alignElements();
        };
        C.prototype.g = function (b) {
          var d = this.createElement("g");
          return b ? d.attr({ class: "highcharts-" + b }) : d;
        };
        C.prototype.image = function (b, d, c, h, a, C) {
          var e = { preserveAspectRatio: "none" },
            g = function (b, d) {
              b.setAttributeNS
                ? b.setAttributeNS("http://www.w3.org/1999/xlink", "href", d)
                : b.setAttribute("hc-svg-href", d);
            };
          n(d) && (e.x = d);
          n(c) && (e.y = c);
          n(h) && (e.width = h);
          n(a) && (e.height = a);
          var q = this.createElement("image").attr(e);
          d = function (d) {
            g(q.element, b);
            C.call(q, d);
          };
          C
            ? (g(
                q.element,
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              ),
              (c = new J.Image()),
              D(c, "load", d),
              (c.src = b),
              c.complete && d({}))
            : g(q.element, b);
          return q;
        };
        C.prototype.symbol = function (h, a, C, e, g, n) {
          var q = this,
            u = /^url\((.*?)\)$/,
            H = u.test(h),
            k = !H && (this.symbols[h] ? h : "circle"),
            m = k && this.symbols[k],
            l;
          if (m) {
            "number" === typeof a &&
              (l = m.call(
                this.symbols,
                Math.round(a || 0),
                Math.round(C || 0),
                e || 0,
                g || 0,
                n
              ));
            var f = this.path(l);
            q.styledMode || f.attr("fill", "none");
            b(f, { symbolName: k || void 0, x: a, y: C, width: e, height: g });
            n && b(f, n);
          } else if (H) {
            var M = h.match(u)[1];
            var w = (f = this.image(M));
            w.imgwidth = S(N[M] && N[M].width, n && n.width);
            w.imgheight = S(N[M] && N[M].height, n && n.height);
            var z = function (b) {
              return b.attr({ width: b.width, height: b.height });
            };
            ["width", "height"].forEach(function (b) {
              w[b + "Setter"] = function (b, c) {
                var h = this["img" + c];
                this[c] = b;
                d(h) &&
                  (n &&
                    "within" === n.backgroundSize &&
                    this.width &&
                    this.height &&
                    (h = Math.round(
                      h *
                        Math.min(
                          this.width / this.imgwidth,
                          this.height / this.imgheight
                        )
                    )),
                  this.element && this.element.setAttribute(c, h),
                  this.alignByTranslate ||
                    ((b = ((this[c] || 0) - h) / 2),
                    this.attr(
                      "width" === c ? { translateX: b } : { translateY: b }
                    )));
              };
            });
            d(a) && w.attr({ x: a, y: C });
            w.isImg = !0;
            d(w.imgwidth) && d(w.imgheight)
              ? z(w)
              : (w.attr({ width: 0, height: 0 }),
                t("img", {
                  onload: function () {
                    var b = p[q.chartIndex];
                    0 === this.width &&
                      (x(this, { position: "absolute", top: "-999em" }),
                      c.body.appendChild(this));
                    N[M] = { width: this.width, height: this.height };
                    w.imgwidth = this.width;
                    w.imgheight = this.height;
                    w.element && z(w);
                    this.parentNode && this.parentNode.removeChild(this);
                    q.imgCount--;
                    if (!q.imgCount && b && !b.hasLoaded) b.onload();
                  },
                  src: M,
                }),
                this.imgCount++);
          }
          return f;
        };
        C.prototype.clipRect = function (b, d, c, h) {
          var a = B() + "-",
            C = this.createElement("clipPath").attr({ id: a }).add(this.defs);
          b = this.rect(b, d, c, h, 0).add(C);
          b.id = a;
          b.clipPath = C;
          b.count = 0;
          return b;
        };
        C.prototype.text = function (b, c, h, a) {
          var C = {};
          if (a && (this.allowHTML || !this.forExport))
            return this.html(b, c, h);
          C.x = Math.round(c || 0);
          h && (C.y = Math.round(h));
          d(b) && (C.text = b);
          b = this.createElement("text").attr(C);
          if (!a || (this.forExport && !this.allowHTML))
            b.xSetter = function (b, d, c) {
              for (
                var h = c.getElementsByTagName("tspan"),
                  a = c.getAttribute(d),
                  C = 0,
                  e;
                C < h.length;
                C++
              )
                (e = h[C]), e.getAttribute(d) === a && e.setAttribute(d, b);
              c.setAttribute(d, b);
            };
          return b;
        };
        C.prototype.fontMetrics = function (b, d) {
          b =
            (!this.styledMode && /px/.test(b)) || !J.getComputedStyle
              ? b ||
                (d && d.style && d.style.fontSize) ||
                (this.style && this.style.fontSize)
              : d && y.prototype.getStyle.call(d, "font-size");
          b = /px/.test(b) ? P(b) : 12;
          d = 24 > b ? b + 3 : Math.round(1.2 * b);
          return { h: d, b: Math.round(0.8 * d), f: b };
        };
        C.prototype.rotCorr = function (b, d, c) {
          var h = b;
          d && c && (h = Math.max(h * Math.cos(d * e), 4));
          return { x: (-b / 3) * Math.sin(d * e), y: h };
        };
        C.prototype.pathToSegments = function (b) {
          for (
            var d = [],
              c = [],
              h = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 },
              a = 0;
            a < b.length;
            a++
          )
            K(c[0]) &&
              n(b[a]) &&
              c.length === h[c[0].toUpperCase()] &&
              b.splice(a, 0, c[0].replace("M", "L").replace("m", "l")),
              "string" === typeof b[a] &&
                (c.length && d.push(c.slice(0)), (c.length = 0)),
              c.push(b[a]);
          d.push(c.slice(0));
          return d;
        };
        C.prototype.label = function (b, d, c, h, a, C, e, n, g) {
          return new F(this, b, d, c, h, a, C, e, n, g);
        };
        C.prototype.alignElements = function () {
          this.alignedObjects.forEach(function (b) {
            return b.align();
          });
        };
        return C;
      })();
      b(A.prototype, {
        Element: y,
        SVG_NS: z,
        escapes: {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        },
        symbols: I,
        draw: m,
      });
      G.registerRendererType("svg", A, !0);
      ("");
      return A;
    }
  );
  L(
    f,
    "Core/Renderer/HTML/HTMLElement.js",
    [
      f["Core/Globals.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B =
          (this && this.__extends) ||
          (function () {
            var c = function (a, e) {
              c =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, a) {
                    c.__proto__ = a;
                  }) ||
                function (c, a) {
                  for (var e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                };
              return c(a, e);
            };
            return function (a, e) {
              function g() {
                this.constructor = a;
              }
              c(a, e);
              a.prototype =
                null === e
                  ? Object.create(e)
                  : ((g.prototype = e.prototype), new g());
            };
          })(),
        y = a.isFirefox,
        F = a.isMS,
        I = a.isWebKit,
        v = a.win,
        r = A.css,
        p = A.defined,
        e = A.extend,
        c = A.pick,
        k = A.pInt;
      return (function (a) {
        function g() {
          return (null !== a && a.apply(this, arguments)) || this;
        }
        B(g, a);
        g.compose = function (c) {
          if (-1 === g.composedClasses.indexOf(c)) {
            g.composedClasses.push(c);
            var a = g.prototype,
              e = c.prototype;
            e.getSpanCorrection = a.getSpanCorrection;
            e.htmlCss = a.htmlCss;
            e.htmlGetBBox = a.htmlGetBBox;
            e.htmlUpdateTransform = a.htmlUpdateTransform;
            e.setSpanRotation = a.setSpanRotation;
          }
          return c;
        };
        g.prototype.getSpanCorrection = function (c, a, e) {
          this.xCorr = -c * e;
          this.yCorr = -a;
        };
        g.prototype.htmlCss = function (a) {
          var g = "SPAN" === this.element.tagName && a && "width" in a,
            k = c(g && a.width, void 0);
          if (g) {
            delete a.width;
            this.textWidth = k;
            var m = !0;
          }
          a &&
            "ellipsis" === a.textOverflow &&
            ((a.whiteSpace = "nowrap"), (a.overflow = "hidden"));
          this.styles = e(this.styles, a);
          r(this.element, a);
          m && this.htmlUpdateTransform();
          return this;
        };
        g.prototype.htmlGetBBox = function () {
          var c = this.element;
          return {
            x: c.offsetLeft,
            y: c.offsetTop,
            width: c.offsetWidth,
            height: c.offsetHeight,
          };
        };
        g.prototype.htmlUpdateTransform = function () {
          if (this.added) {
            var c = this.renderer,
              a = this.element,
              e = this.translateX || 0,
              g = this.translateY || 0,
              f = this.x || 0,
              l = this.y || 0,
              t = this.textAlign || "left",
              x = { left: 0, center: 0.5, right: 1 }[t],
              d = this.styles;
            d = d && d.whiteSpace;
            r(a, { marginLeft: e, marginTop: g });
            !c.styledMode &&
              this.shadows &&
              this.shadows.forEach(function (b) {
                r(b, { marginLeft: e + 1, marginTop: g + 1 });
              });
            this.inverted &&
              [].forEach.call(a.childNodes, function (b) {
                c.invertChild(b, a);
              });
            if ("SPAN" === a.tagName) {
              var h = this.rotation,
                b = this.textWidth && k(this.textWidth),
                q = [h, t, a.innerHTML, this.textWidth, this.textAlign].join(),
                n = void 0;
              n = !1;
              if (b !== this.oldTextWidth) {
                if (this.textPxLength) var u = this.textPxLength;
                else
                  r(a, { width: "", whiteSpace: d || "nowrap" }),
                    (u = a.offsetWidth);
                (b > this.oldTextWidth || u > b) &&
                  (/[ \-]/.test(a.textContent || a.innerText) ||
                    "ellipsis" === a.style.textOverflow) &&
                  (r(a, {
                    width: u > b || h ? b + "px" : "auto",
                    display: "block",
                    whiteSpace: d || "normal",
                  }),
                  (this.oldTextWidth = b),
                  (n = !0));
              }
              this.hasBoxWidthChanged = n;
              q !== this.cTT &&
                ((n = c.fontMetrics(a.style.fontSize, a).b),
                !p(h) ||
                  (h === (this.oldRotation || 0) && t === this.oldAlign) ||
                  this.setSpanRotation(h, x, n),
                this.getSpanCorrection(
                  (!p(h) && this.textPxLength) || a.offsetWidth,
                  n,
                  x,
                  h,
                  t
                ));
              r(a, {
                left: f + (this.xCorr || 0) + "px",
                top: l + (this.yCorr || 0) + "px",
              });
              this.cTT = q;
              this.oldRotation = h;
              this.oldAlign = t;
            }
          } else this.alignOnAdd = !0;
        };
        g.prototype.setSpanRotation = function (c, a, e) {
          var g = {},
            k =
              F && !/Edge/.test(v.navigator.userAgent)
                ? "-ms-transform"
                : I
                ? "-webkit-transform"
                : y
                ? "MozTransform"
                : v.opera
                ? "-o-transform"
                : void 0;
          k &&
            ((g[k] = g.transform = "rotate(" + c + "deg)"),
            (g[k + (y ? "Origin" : "-origin")] = g.transformOrigin =
              100 * a + "% " + e + "px"),
            r(this.element, g));
        };
        g.composedClasses = [];
        return g;
      })(f);
    }
  );
  L(
    f,
    "Core/Renderer/HTML/HTMLRenderer.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (e, c) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, a) {
                    c.__proto__ = a;
                  }) ||
                function (c, a) {
                  for (var e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                };
              return a(e, c);
            };
            return function (e, c) {
              function k() {
                this.constructor = e;
              }
              a(e, c);
              e.prototype =
                null === c
                  ? Object.create(c)
                  : ((k.prototype = c.prototype), new k());
            };
          })(),
        F = G.attr,
        I = G.createElement,
        v = G.extend,
        r = G.pick;
      return (function (p) {
        function e() {
          return (null !== p && p.apply(this, arguments)) || this;
        }
        B(e, p);
        e.compose = function (c) {
          -1 === e.composedClasses.indexOf(c) &&
            (e.composedClasses.push(c), (c.prototype.html = e.prototype.html));
          return c;
        };
        e.prototype.html = function (c, e, g) {
          var k = this.createElement("span"),
            m = k.element,
            z = k.renderer,
            p = z.isSVG,
            J = function (c, a) {
              ["opacity", "visibility"].forEach(function (e) {
                c[e + "Setter"] = function (g, d, h) {
                  var b = c.div ? c.div.style : a;
                  f.prototype[e + "Setter"].call(this, g, d, h);
                  b && (b[d] = g);
                };
              });
              c.addedSetters = !0;
            };
          k.textSetter = function (c) {
            c !== this.textStr &&
              (delete this.bBox,
              delete this.oldTextWidth,
              a.setElementHTML(this.element, r(c, "")),
              (this.textStr = c),
              (k.doTransform = !0));
          };
          p && J(k, k.element.style);
          k.xSetter =
            k.ySetter =
            k.alignSetter =
            k.rotationSetter =
              function (c, a) {
                "align" === a ? (k.alignValue = k.textAlign = c) : (k[a] = c);
                k.doTransform = !0;
              };
          k.afterSetters = function () {
            this.doTransform &&
              (this.htmlUpdateTransform(), (this.doTransform = !1));
          };
          k.attr({ text: c, x: Math.round(e), y: Math.round(g) }).css({
            position: "absolute",
          });
          z.styledMode ||
            k.css({
              fontFamily: this.style.fontFamily,
              fontSize: this.style.fontSize,
            });
          m.style.whiteSpace = "nowrap";
          k.css = k.htmlCss;
          p &&
            (k.add = function (c) {
              var a = z.box.parentNode,
                e = [];
              if ((this.parentGroup = c)) {
                var g = c.div;
                if (!g) {
                  for (; c; ) e.push(c), (c = c.parentGroup);
                  e.reverse().forEach(function (d) {
                    function c(b, c) {
                      d[c] = b;
                      "translateX" === c
                        ? (n.left = b + "px")
                        : (n.top = b + "px");
                      d.doTransform = !0;
                    }
                    var b = F(d.element, "class"),
                      q = d.styles || {};
                    g = d.div =
                      d.div ||
                      I(
                        "div",
                        b ? { className: b } : void 0,
                        {
                          position: "absolute",
                          left: (d.translateX || 0) + "px",
                          top: (d.translateY || 0) + "px",
                          display: d.display,
                          opacity: d.opacity,
                          cursor: q.cursor,
                          pointerEvents: q.pointerEvents,
                          visibility: d.visibility,
                        },
                        g || a
                      );
                    var n = g.style;
                    v(d, {
                      classSetter: (function (b) {
                        return function (d) {
                          this.element.setAttribute("class", d);
                          b.className = d;
                        };
                      })(g),
                      on: function () {
                        e[0].div &&
                          k.on.apply(
                            { element: e[0].div, onEvents: d.onEvents },
                            arguments
                          );
                        return d;
                      },
                      translateXSetter: c,
                      translateYSetter: c,
                    });
                    d.addedSetters || J(d);
                  });
                }
              } else g = a;
              g.appendChild(m);
              k.added = !0;
              k.alignOnAdd && k.htmlUpdateTransform();
              return k;
            });
          return k;
        };
        e.composedClasses = [];
        return e;
      })(A);
    }
  );
  L(f, "Core/Axis/AxisDefaults.js", [], function () {
    var a;
    (function (a) {
      a.defaultXAxisOptions = {
        alignTicks: !0,
        allowDecimals: void 0,
        panningEnabled: !0,
        zIndex: 2,
        zoomEnabled: !0,
        dateTimeLabelFormats: {
          millisecond: { main: "%H:%M:%S.%L", range: !1 },
          second: { main: "%H:%M:%S", range: !1 },
          minute: { main: "%H:%M", range: !1 },
          hour: { main: "%H:%M", range: !1 },
          day: { main: "%e. %b" },
          week: { main: "%e. %b" },
          month: { main: "%b '%y" },
          year: { main: "%Y" },
        },
        endOnTick: !1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
        labels: {
          autoRotation: void 0,
          autoRotationLimit: 80,
          distance: void 0,
          enabled: !0,
          indentation: 10,
          overflow: "justify",
          padding: 5,
          reserveSpace: void 0,
          rotation: void 0,
          staggerLines: 0,
          step: 0,
          useHTML: !1,
          x: 0,
          zIndex: 7,
          style: { color: "#666666", cursor: "default", fontSize: "11px" },
        },
        maxPadding: 0.01,
        minorGridLineDashStyle: "Solid",
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: 0.01,
        offset: void 0,
        opposite: !1,
        reversed: void 0,
        reversedStacks: !1,
        showEmpty: !0,
        showFirstLabel: !0,
        showLastLabel: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          rotation: 0,
          useHTML: !1,
          x: 0,
          y: 0,
          style: { color: "#666666" },
        },
        type: "linear",
        uniqueNames: !0,
        visible: !0,
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        gridLineWidth: void 0,
        tickColor: "#ccd6eb",
      };
      a.defaultYAxisOptions = {
        reversedStacks: !0,
        endOnTick: !0,
        maxPadding: 0.05,
        minPadding: 0.05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: { x: -8 },
        startOnTick: !0,
        title: { rotation: 270, text: "Values" },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function () {
            var a = this.axis.chart.numberFormatter;
            return a(this.total || 0, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast",
          },
        },
        gridLineWidth: 1,
        lineWidth: 0,
      };
      a.defaultLeftAxisOptions = {
        labels: { x: -15 },
        title: { rotation: 270 },
      };
      a.defaultRightAxisOptions = {
        labels: { x: 15 },
        title: { rotation: 90 },
      };
      a.defaultBottomAxisOptions = {
        labels: { autoRotation: [-45], x: 0 },
        margin: 15,
        title: { rotation: 0 },
      };
      a.defaultTopAxisOptions = {
        labels: { autoRotation: [-45], x: 0 },
        margin: 15,
        title: { rotation: 0 },
      };
    })(a || (a = {}));
    return a;
  });
  L(f, "Core/Foundation.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      A = a.isFunction,
      G = a.objectEach,
      y = a.removeEvent,
      F;
    (function (a) {
      a.registerEventOptions = function (a, r) {
        a.eventOptions = a.eventOptions || {};
        G(r.events, function (p, e) {
          a.eventOptions[e] !== p &&
            (a.eventOptions[e] &&
              (y(a, e, a.eventOptions[e]), delete a.eventOptions[e]),
            A(p) && ((a.eventOptions[e] = p), f(a, e, p)));
        });
      };
    })(F || (F = {}));
    return F;
  });
  L(
    f,
    "Core/Axis/Tick.js",
    [
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B = f.deg2rad,
        y = A.clamp,
        F = A.correctFloat,
        I = A.defined,
        v = A.destroyObjectProperties,
        r = A.extend,
        p = A.fireEvent,
        e = A.isNumber,
        c = A.merge,
        k = A.objectEach,
        g = A.pick;
      f = (function () {
        function f(c, a, e, g, k) {
          this.isNewLabel = this.isNew = !0;
          this.axis = c;
          this.pos = a;
          this.type = e || "";
          this.parameters = k || {};
          this.tickmarkOffset = this.parameters.tickmarkOffset;
          this.options = this.parameters.options;
          p(this, "init");
          e || g || this.addLabel();
        }
        f.prototype.addLabel = function () {
          var c = this,
            k = c.axis,
            f = k.options,
            l = k.chart,
            D = k.categories,
            E = k.logarithmic,
            t = k.names,
            x = c.pos,
            d = g(c.options && c.options.labels, f.labels),
            h = k.tickPositions,
            b = x === h[0],
            q = x === h[h.length - 1],
            n = (!d.step || 1 === d.step) && 1 === k.tickInterval;
          h = h.info;
          var u = c.label,
            K;
          D = this.parameters.category || (D ? g(D[x], t[x], x) : x);
          E && e(D) && (D = F(E.lin2log(D)));
          if (k.dateTime)
            if (h) {
              var w = l.time.resolveDTLFormat(
                f.dateTimeLabelFormats[
                  (!f.grid && h.higherRanks[x]) || h.unitName
                ]
              );
              var S = w.main;
            } else
              e(D) &&
                (S = k.dateTime.getXDateFormat(
                  D,
                  f.dateTimeLabelFormats || {}
                ));
          c.isFirst = b;
          c.isLast = q;
          var P = {
            axis: k,
            chart: l,
            dateTimeLabelFormat: S,
            isFirst: b,
            isLast: q,
            pos: x,
            tick: c,
            tickPositionInfo: h,
            value: D,
          };
          p(this, "labelFormat", P);
          var B = function (b) {
            return d.formatter
              ? d.formatter.call(b, b)
              : d.format
              ? ((b.text = k.defaultLabelFormatter.call(b)),
                a.format(d.format, b, l))
              : k.defaultLabelFormatter.call(b, b);
          };
          f = B.call(P, P);
          var V = w && w.list;
          c.shortenLabel = V
            ? function () {
                for (K = 0; K < V.length; K++)
                  if (
                    (r(P, { dateTimeLabelFormat: V[K] }),
                    u.attr({ text: B.call(P, P) }),
                    u.getBBox().width < k.getSlotWidth(c) - 2 * d.padding)
                  )
                    return;
                u.attr({ text: "" });
              }
            : void 0;
          n && k._addedPlotLB && c.moveLabel(f, d);
          I(u) || c.movedLabel
            ? u &&
              u.textStr !== f &&
              !n &&
              (!u.textWidth ||
                d.style.width ||
                u.styles.width ||
                u.css({ width: null }),
              u.attr({ text: f }),
              (u.textPxLength = u.getBBox().width))
            : ((c.label = u = c.createLabel({ x: 0, y: 0 }, f, d)),
              (c.rotation = 0));
        };
        f.prototype.createLabel = function (a, e, g) {
          var k = this.axis,
            f = k.chart;
          if (
            (a =
              I(e) && g.enabled
                ? f.renderer.text(e, a.x, a.y, g.useHTML).add(k.labelGroup)
                : null)
          )
            f.styledMode || a.css(c(g.style)),
              (a.textPxLength = a.getBBox().width);
          return a;
        };
        f.prototype.destroy = function () {
          v(this, this.axis);
        };
        f.prototype.getPosition = function (c, a, e, g) {
          var k = this.axis,
            f = k.chart,
            t = (g && f.oldChartHeight) || f.chartHeight;
          c = {
            x: c
              ? F(k.translate(a + e, void 0, void 0, g) + k.transB)
              : k.left +
                k.offset +
                (k.opposite
                  ? ((g && f.oldChartWidth) || f.chartWidth) - k.right - k.left
                  : 0),
            y: c
              ? t - k.bottom + k.offset - (k.opposite ? k.height : 0)
              : F(t - k.translate(a + e, void 0, void 0, g) - k.transB),
          };
          c.y = y(c.y, -1e5, 1e5);
          p(this, "afterGetPosition", { pos: c });
          return c;
        };
        f.prototype.getLabelPosition = function (c, a, e, g, k, f, t, x) {
          var d = this.axis,
            h = d.transA,
            b =
              d.isLinked && d.linkedParent
                ? d.linkedParent.reversed
                : d.reversed,
            q = d.staggerLines,
            n = d.tickRotCorr || { x: 0, y: 0 },
            u =
              g || d.reserveSpaceDefault
                ? 0
                : -d.labelOffset * ("center" === d.labelAlign ? 0.5 : 1),
            m = {};
          e =
            0 === d.side
              ? e.rotation
                ? -8
                : -e.getBBox().height
              : 2 === d.side
              ? n.y + 8
              : Math.cos(e.rotation * B) * (n.y - e.getBBox(!1, 0).height / 2);
          I(k.y) && (e = 0 === d.side && d.horiz ? k.y + e : k.y);
          c = c + k.x + u + n.x - (f && g ? f * h * (b ? -1 : 1) : 0);
          a = a + e - (f && !g ? f * h * (b ? 1 : -1) : 0);
          q &&
            ((g = (t / (x || 1)) % q),
            d.opposite && (g = q - g - 1),
            (a += (d.labelOffset / q) * g));
          m.x = c;
          m.y = Math.round(a);
          p(this, "afterGetLabelPosition", {
            pos: m,
            tickmarkOffset: f,
            index: t,
          });
          return m;
        };
        f.prototype.getLabelSize = function () {
          return this.label
            ? this.label.getBBox()[this.axis.horiz ? "height" : "width"]
            : 0;
        };
        f.prototype.getMarkPath = function (c, a, e, g, k, f) {
          return f.crispLine(
            [
              ["M", c, a],
              ["L", c + (k ? 0 : -e), a + (k ? e : 0)],
            ],
            g
          );
        };
        f.prototype.handleOverflow = function (c) {
          var a = this.axis,
            e = a.options.labels,
            k = c.x,
            f = a.chart.chartWidth,
            m = a.chart.spacing,
            t = g(a.labelLeft, Math.min(a.pos, m[3]));
          m = g(
            a.labelRight,
            Math.max(a.isRadial ? 0 : a.pos + a.len, f - m[1])
          );
          var x = this.label,
            d = this.rotation,
            h = { left: 0, center: 0.5, right: 1 }[
              a.labelAlign || x.attr("align")
            ],
            b = x.getBBox().width,
            q = a.getSlotWidth(this),
            n = {},
            u = q,
            l = 1,
            w;
          if (d || "justify" !== e.overflow)
            0 > d && k - h * b < t
              ? (w = Math.round(k / Math.cos(d * B) - t))
              : 0 < d &&
                k + h * b > m &&
                (w = Math.round((f - k) / Math.cos(d * B)));
          else if (
            ((f = k + (1 - h) * b),
            k - h * b < t
              ? (u = c.x + u * (1 - h) - t)
              : f > m && ((u = m - c.x + u * h), (l = -1)),
            (u = Math.min(q, u)),
            u < q &&
              "center" === a.labelAlign &&
              (c.x += l * (q - u - h * (q - Math.min(b, u)))),
            b > u || (a.autoRotation && (x.styles || {}).width))
          )
            w = u;
          w &&
            (this.shortenLabel
              ? this.shortenLabel()
              : ((n.width = Math.floor(w) + "px"),
                (e.style || {}).textOverflow || (n.textOverflow = "ellipsis"),
                x.css(n)));
        };
        f.prototype.moveLabel = function (c, a) {
          var e = this,
            g = e.label,
            f = e.axis,
            m = f.reversed,
            t = !1;
          g && g.textStr === c
            ? ((e.movedLabel = g), (t = !0), delete e.label)
            : k(f.ticks, function (d) {
                t ||
                  d.isNew ||
                  d === e ||
                  !d.label ||
                  d.label.textStr !== c ||
                  ((e.movedLabel = d.label),
                  (t = !0),
                  (d.labelPos = e.movedLabel.xy),
                  delete d.label);
              });
          if (!t && (e.labelPos || g)) {
            var x = e.labelPos || g.xy;
            g = f.horiz ? (m ? 0 : f.width + f.left) : x.x;
            f = f.horiz ? x.y : m ? f.width + f.left : 0;
            e.movedLabel = e.createLabel({ x: g, y: f }, c, a);
            e.movedLabel && e.movedLabel.attr({ opacity: 0 });
          }
        };
        f.prototype.render = function (c, a, e) {
          var k = this.axis,
            f = k.horiz,
            m = this.pos,
            t = g(this.tickmarkOffset, k.tickmarkOffset);
          m = this.getPosition(f, m, t, a);
          t = m.x;
          var x = m.y;
          k = (f && t === k.pos + k.len) || (!f && x === k.pos) ? -1 : 1;
          f = g(e, this.label && this.label.newOpacity, 1);
          e = g(e, 1);
          this.isActive = !0;
          this.renderGridLine(a, e, k);
          this.renderMark(m, e, k);
          this.renderLabel(m, a, f, c);
          this.isNew = !1;
          p(this, "afterRender");
        };
        f.prototype.renderGridLine = function (c, a, e) {
          var k = this.axis,
            f = k.options,
            m = {},
            t = this.pos,
            x = this.type,
            d = g(this.tickmarkOffset, k.tickmarkOffset),
            h = k.chart.renderer,
            b = this.gridLine,
            q = f.gridLineWidth,
            n = f.gridLineColor,
            u = f.gridLineDashStyle;
          "minor" === this.type &&
            ((q = f.minorGridLineWidth),
            (n = f.minorGridLineColor),
            (u = f.minorGridLineDashStyle));
          b ||
            (k.chart.styledMode ||
              ((m.stroke = n), (m["stroke-width"] = q || 0), (m.dashstyle = u)),
            x || (m.zIndex = 1),
            c && (a = 0),
            (this.gridLine = b =
              h
                .path()
                .attr(m)
                .addClass("highcharts-" + (x ? x + "-" : "") + "grid-line")
                .add(k.gridGroup)));
          if (
            b &&
            (e = k.getPlotLinePath({
              value: t + d,
              lineWidth: b.strokeWidth() * e,
              force: "pass",
              old: c,
            }))
          )
            b[c || this.isNew ? "attr" : "animate"]({ d: e, opacity: a });
        };
        f.prototype.renderMark = function (c, a, e) {
          var k = this.axis,
            f = k.options,
            m = k.chart.renderer,
            t = this.type,
            x = k.tickSize(t ? t + "Tick" : "tick"),
            d = c.x;
          c = c.y;
          var h = g(
            f["minor" !== t ? "tickWidth" : "minorTickWidth"],
            !t && k.isXAxis ? 1 : 0
          );
          f = f["minor" !== t ? "tickColor" : "minorTickColor"];
          var b = this.mark,
            q = !b;
          x &&
            (k.opposite && (x[0] = -x[0]),
            b ||
              ((this.mark = b =
                m
                  .path()
                  .addClass("highcharts-" + (t ? t + "-" : "") + "tick")
                  .add(k.axisGroup)),
              k.chart.styledMode || b.attr({ stroke: f, "stroke-width": h })),
            b[q ? "attr" : "animate"]({
              d: this.getMarkPath(d, c, x[0], b.strokeWidth() * e, k.horiz, m),
              opacity: a,
            }));
        };
        f.prototype.renderLabel = function (c, a, k, f) {
          var m = this.axis,
            l = m.horiz,
            t = m.options,
            x = this.label,
            d = t.labels,
            h = d.step;
          m = g(this.tickmarkOffset, m.tickmarkOffset);
          var b = c.x;
          c = c.y;
          var q = !0;
          x &&
            e(b) &&
            ((x.xy = c = this.getLabelPosition(b, c, x, l, d, m, f, h)),
            (this.isFirst && !this.isLast && !t.showFirstLabel) ||
            (this.isLast && !this.isFirst && !t.showLastLabel)
              ? (q = !1)
              : !l ||
                d.step ||
                d.rotation ||
                a ||
                0 === k ||
                this.handleOverflow(c),
            h && f % h && (q = !1),
            q && e(c.y)
              ? ((c.opacity = k),
                x[this.isNewLabel ? "attr" : "animate"](c).show(!0),
                (this.isNewLabel = !1))
              : (x.hide(), (this.isNewLabel = !0)));
        };
        f.prototype.replaceMovedLabel = function () {
          var c = this.label,
            a = this.axis,
            e = a.reversed;
          if (c && !this.isNew) {
            var g = a.horiz ? (e ? a.left : a.width + a.left) : c.xy.x;
            e = a.horiz ? c.xy.y : e ? a.width + a.top : a.top;
            c.animate({ x: g, y: e, opacity: 0 }, void 0, c.destroy);
            delete this.label;
          }
          a.isDirty = !0;
          this.label = this.movedLabel;
          delete this.movedLabel;
        };
        return f;
      })();
      ("");
      return f;
    }
  );
  L(
    f,
    "Core/Axis/Axis.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/AxisDefaults.js"],
      f["Core/Color/Color.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Axis/Tick.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F, I, v) {
      var r = a.animObject,
        p = G.defaultOptions,
        e = y.registerEventOptions,
        c = F.deg2rad,
        k = v.arrayMax,
        g = v.arrayMin,
        l = v.clamp,
        m = v.correctFloat,
        z = v.defined,
        N = v.destroyObjectProperties,
        J = v.erase,
        D = v.error,
        E = v.extend,
        t = v.fireEvent,
        x = v.isArray,
        d = v.isNumber,
        h = v.isString,
        b = v.merge,
        q = v.normalizeTickInterval,
        n = v.objectEach,
        u = v.pick,
        K = v.relativeLength,
        w = v.removeEvent,
        S = v.splat,
        P = v.syncTimeout,
        B = function (b, d) {
          return q(
            d,
            void 0,
            void 0,
            u(b.options.allowDecimals, 0.5 > d || void 0 !== b.tickAmount),
            !!b.tickAmount
          );
        };
      a = (function () {
        function a(b, d) {
          this.zoomEnabled =
            this.width =
            this.visible =
            this.userOptions =
            this.translationSlope =
            this.transB =
            this.transA =
            this.top =
            this.ticks =
            this.tickRotCorr =
            this.tickPositions =
            this.tickmarkOffset =
            this.tickInterval =
            this.tickAmount =
            this.side =
            this.series =
            this.right =
            this.positiveValuesOnly =
            this.pos =
            this.pointRangePadding =
            this.pointRange =
            this.plotLinesAndBandsGroups =
            this.plotLinesAndBands =
            this.paddedTicks =
            this.overlap =
            this.options =
            this.offset =
            this.names =
            this.minPixelPadding =
            this.minorTicks =
            this.minorTickInterval =
            this.min =
            this.maxLabelLength =
            this.max =
            this.len =
            this.left =
            this.labelFormatter =
            this.labelEdge =
            this.isLinked =
            this.height =
            this.hasVisibleSeries =
            this.hasNames =
            this.eventOptions =
            this.coll =
            this.closestPointRange =
            this.chart =
            this.bottom =
            this.alternateBands =
              void 0;
          this.init(b, d);
        }
        a.prototype.init = function (b, c) {
          var a = c.isX;
          this.chart = b;
          this.horiz = b.inverted && !this.isZAxis ? !a : a;
          this.isXAxis = a;
          this.coll = this.coll || (a ? "xAxis" : "yAxis");
          t(this, "init", { userOptions: c });
          this.opposite = u(c.opposite, this.opposite);
          this.side = u(
            c.side,
            this.side,
            this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
          );
          this.setOptions(c);
          var h = this.options,
            g = h.labels,
            C = h.type;
          this.userOptions = c;
          this.minPixelPadding = 0;
          this.reversed = u(h.reversed, this.reversed);
          this.visible = h.visible;
          this.zoomEnabled = h.zoomEnabled;
          this.hasNames = "category" === C || !0 === h.categories;
          this.categories = h.categories || (this.hasNames ? [] : void 0);
          this.names || ((this.names = []), (this.names.keys = {}));
          this.plotLinesAndBandsGroups = {};
          this.positiveValuesOnly = !!this.logarithmic;
          this.isLinked = z(h.linkedTo);
          this.ticks = {};
          this.labelEdge = [];
          this.minorTicks = {};
          this.plotLinesAndBands = [];
          this.alternateBands = {};
          this.len = 0;
          this.minRange = this.userMinRange = h.minRange || h.maxZoom;
          this.range = h.range;
          this.offset = h.offset || 0;
          this.min = this.max = null;
          c = u(h.crosshair, S(b.options.tooltip.crosshairs)[a ? 0 : 1]);
          this.crosshair = !0 === c ? {} : c;
          -1 === b.axes.indexOf(this) &&
            (a ? b.axes.splice(b.xAxis.length, 0, this) : b.axes.push(this),
            b[this.coll].push(this));
          this.series = this.series || [];
          b.inverted &&
            !this.isZAxis &&
            a &&
            "undefined" === typeof this.reversed &&
            (this.reversed = !0);
          this.labelRotation = d(g.rotation) ? g.rotation : void 0;
          e(this, h);
          t(this, "afterInit");
        };
        a.prototype.setOptions = function (d) {
          this.options = b(
            f.defaultXAxisOptions,
            "yAxis" === this.coll && f.defaultYAxisOptions,
            [
              f.defaultTopAxisOptions,
              f.defaultRightAxisOptions,
              f.defaultBottomAxisOptions,
              f.defaultLeftAxisOptions,
            ][this.side],
            b(p[this.coll], d)
          );
          t(this, "afterSetOptions", { userOptions: d });
        };
        a.prototype.defaultLabelFormatter = function (b) {
          var c = this.axis;
          b = this.chart.numberFormatter;
          var a = d(this.value) ? this.value : NaN,
            h = c.chart.time,
            e = this.dateTimeLabelFormat,
            g = p.lang,
            C = g.numericSymbols;
          g = g.numericSymbolMagnitude || 1e3;
          var n = c.logarithmic ? Math.abs(a) : c.tickInterval,
            q = C && C.length;
          if (c.categories) var k = "".concat(this.value);
          else if (e) k = h.dateFormat(e, a);
          else if (q && 1e3 <= n)
            for (; q-- && "undefined" === typeof k; )
              (c = Math.pow(g, q + 1)),
                n >= c &&
                  0 === (10 * a) % c &&
                  null !== C[q] &&
                  0 !== a &&
                  (k = b(a / c, -1) + C[q]);
          "undefined" === typeof k &&
            (k = 1e4 <= Math.abs(a) ? b(a, -1) : b(a, -1, void 0, ""));
          return k;
        };
        a.prototype.getSeriesExtremes = function () {
          var b = this,
            c = b.chart,
            a;
          t(this, "getSeriesExtremes", null, function () {
            b.hasVisibleSeries = !1;
            b.dataMin = b.dataMax = b.threshold = null;
            b.softThreshold = !b.isXAxis;
            b.stacking && b.stacking.buildStacks();
            b.series.forEach(function (h) {
              if (h.visible || !c.options.chart.ignoreHiddenSeries) {
                var e = h.options,
                  g = e.threshold;
                b.hasVisibleSeries = !0;
                b.positiveValuesOnly && 0 >= g && (g = null);
                if (b.isXAxis) {
                  if (((e = h.xData), e.length)) {
                    e = b.logarithmic ? e.filter(b.validatePositiveValue) : e;
                    a = h.getXExtremes(e);
                    var n = a.min;
                    var C = a.max;
                    d(n) ||
                      n instanceof Date ||
                      ((e = e.filter(d)),
                      (a = h.getXExtremes(e)),
                      (n = a.min),
                      (C = a.max));
                    e.length &&
                      ((b.dataMin = Math.min(u(b.dataMin, n), n)),
                      (b.dataMax = Math.max(u(b.dataMax, C), C)));
                  }
                } else if (
                  ((h = h.applyExtremes()),
                  d(h.dataMin) &&
                    ((n = h.dataMin),
                    (b.dataMin = Math.min(u(b.dataMin, n), n))),
                  d(h.dataMax) &&
                    ((C = h.dataMax),
                    (b.dataMax = Math.max(u(b.dataMax, C), C))),
                  z(g) && (b.threshold = g),
                  !e.softThreshold || b.positiveValuesOnly)
                )
                  b.softThreshold = !1;
              }
            });
          });
          t(this, "afterGetSeriesExtremes");
        };
        a.prototype.translate = function (b, c, a, h, e, g) {
          var n = this.linkedParent || this,
            C = h && n.old ? n.old.min : n.min;
          if (!d(C)) return NaN;
          var q = n.minPixelPadding;
          e =
            (n.isOrdinal ||
              (n.brokenAxis && n.brokenAxis.hasBreaks) ||
              (n.logarithmic && e)) &&
            n.lin2val;
          var k = 1,
            u = 0;
          h = h && n.old ? n.old.transA : n.transA;
          h || (h = n.transA);
          a && ((k *= -1), (u = n.len));
          n.reversed && ((k *= -1), (u -= k * (n.sector || n.len)));
          c
            ? ((g = (b * k + u - q) / h + C), e && (g = n.lin2val(g)))
            : (e && (b = n.val2lin(b)),
              (b = k * (b - C) * h),
              (g = (n.isRadial ? b : m(b)) + u + k * q + (d(g) ? h * g : 0)));
          return g;
        };
        a.prototype.toPixels = function (b, d) {
          return (
            this.translate(b, !1, !this.horiz, void 0, !0) + (d ? 0 : this.pos)
          );
        };
        a.prototype.toValue = function (b, d) {
          return this.translate(
            b - (d ? 0 : this.pos),
            !0,
            !this.horiz,
            void 0,
            !0
          );
        };
        a.prototype.getPlotLinePath = function (b) {
          function c(b, d, c) {
            if (("pass" !== x && b < d) || b > c)
              x ? (b = l(b, d, c)) : (r = !0);
            return b;
          }
          var a = this,
            h = a.chart,
            e = a.left,
            g = a.top,
            n = b.old,
            C = b.value,
            q = b.lineWidth,
            k = (n && h.oldChartHeight) || h.chartHeight,
            f = (n && h.oldChartWidth) || h.chartWidth,
            w = a.transB,
            m = b.translatedValue,
            x = b.force,
            K,
            p,
            z,
            E,
            r;
          b = {
            value: C,
            lineWidth: q,
            old: n,
            force: x,
            acrossPanes: b.acrossPanes,
            translatedValue: m,
          };
          t(this, "getPlotLinePath", b, function (b) {
            m = u(m, a.translate(C, void 0, void 0, n));
            m = l(m, -1e5, 1e5);
            K = z = Math.round(m + w);
            p = E = Math.round(k - m - w);
            d(m)
              ? a.horiz
                ? ((p = g), (E = k - a.bottom), (K = z = c(K, e, e + a.width)))
                : ((K = e), (z = f - a.right), (p = E = c(p, g, g + a.height)))
              : ((r = !0), (x = !1));
            b.path =
              r && !x
                ? null
                : h.renderer.crispLine(
                    [
                      ["M", K, p],
                      ["L", z, E],
                    ],
                    q || 1
                  );
          });
          return b.path;
        };
        a.prototype.getLinearTickPositions = function (b, d, c) {
          var a = m(Math.floor(d / b) * b);
          c = m(Math.ceil(c / b) * b);
          var h = [],
            e;
          m(a + b) === a && (e = 20);
          if (this.single) return [d];
          for (d = a; d <= c; ) {
            h.push(d);
            d = m(d + b, e);
            if (d === g) break;
            var g = d;
          }
          return h;
        };
        a.prototype.getMinorTickInterval = function () {
          var b = this.options;
          return !0 === b.minorTicks
            ? u(b.minorTickInterval, "auto")
            : !1 === b.minorTicks
            ? null
            : b.minorTickInterval;
        };
        a.prototype.getMinorTickPositions = function () {
          var b = this.options,
            d = this.tickPositions,
            c = this.minorTickInterval,
            a = this.pointRangePadding || 0,
            h = this.min - a;
          a = this.max + a;
          var e = a - h,
            g = [];
          if (e && e / c < this.len / 3) {
            var n = this.logarithmic;
            if (n)
              this.paddedTicks.forEach(function (b, d, a) {
                d &&
                  g.push.apply(g, n.getLogTickPositions(c, a[d - 1], a[d], !0));
              });
            else if (this.dateTime && "auto" === this.getMinorTickInterval())
              g = g.concat(
                this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(c),
                  h,
                  a,
                  b.startOfWeek
                )
              );
            else
              for (b = h + ((d[0] - h) % c); b <= a && b !== g[0]; b += c)
                g.push(b);
          }
          0 !== g.length && this.trimTicks(g);
          return g;
        };
        a.prototype.adjustForMinRange = function () {
          var b = this.options,
            d = this.logarithmic,
            c = this.min,
            a = this.max,
            h = 0,
            e,
            n,
            q,
            f;
          this.isXAxis &&
            "undefined" === typeof this.minRange &&
            !d &&
            (z(b.min) || z(b.max) || z(b.floor) || z(b.ceiling)
              ? (this.minRange = null)
              : (this.series.forEach(function (b) {
                  q = b.xData;
                  f = b.xIncrement ? 1 : q.length - 1;
                  if (1 < q.length)
                    for (e = f; 0 < e; e--)
                      if (((n = q[e] - q[e - 1]), !h || n < h)) h = n;
                }),
                (this.minRange = Math.min(
                  5 * h,
                  this.dataMax - this.dataMin
                ))));
          if (a - c < this.minRange) {
            var t = this.dataMax - this.dataMin >= this.minRange;
            var m = this.minRange;
            var x = (m - a + c) / 2;
            x = [c - x, u(b.min, c - x)];
            t &&
              (x[2] = this.logarithmic
                ? this.logarithmic.log2lin(this.dataMin)
                : this.dataMin);
            c = k(x);
            a = [c + m, u(b.max, c + m)];
            t && (a[2] = d ? d.log2lin(this.dataMax) : this.dataMax);
            a = g(a);
            a - c < m && ((x[0] = a - m), (x[1] = u(b.min, a - m)), (c = k(x)));
          }
          this.min = c;
          this.max = a;
        };
        a.prototype.getClosest = function () {
          var b;
          this.categories
            ? (b = 1)
            : this.series.forEach(function (d) {
                var c = d.closestPointRange,
                  a = d.visible || !d.chart.options.chart.ignoreHiddenSeries;
                !d.noSharedTooltip &&
                  z(c) &&
                  a &&
                  (b = z(b) ? Math.min(b, c) : c);
              });
          return b;
        };
        a.prototype.nameToX = function (b) {
          var d = x(this.options.categories),
            c = d ? this.categories : this.names,
            a = b.options.x;
          b.series.requireSorting = !1;
          z(a) ||
            (a =
              this.options.uniqueNames && c
                ? d
                  ? c.indexOf(b.name)
                  : u(c.keys[b.name], -1)
                : b.series.autoIncrement());
          if (-1 === a) {
            if (!d && c) var h = c.length;
          } else h = a;
          "undefined" !== typeof h
            ? ((this.names[h] = b.name), (this.names.keys[b.name] = h))
            : b.x && (h = b.x);
          return h;
        };
        a.prototype.updateNames = function () {
          var b = this,
            d = this.names;
          0 < d.length &&
            (Object.keys(d.keys).forEach(function (b) {
              delete d.keys[b];
            }),
            (d.length = 0),
            (this.minRange = this.userMinRange),
            (this.series || []).forEach(function (d) {
              d.xIncrement = null;
              if (!d.points || d.isDirtyData)
                (b.max = Math.max(b.max, d.xData.length - 1)),
                  d.processData(),
                  d.generatePoints();
              d.data.forEach(function (c, a) {
                if (c && c.options && "undefined" !== typeof c.name) {
                  var h = b.nameToX(c);
                  "undefined" !== typeof h &&
                    h !== c.x &&
                    ((c.x = h), (d.xData[a] = h));
                }
              });
            }));
        };
        a.prototype.setAxisTranslation = function () {
          var b = this,
            d = b.max - b.min,
            c = b.linkedParent,
            a = !!b.categories,
            e = b.isXAxis,
            g = b.axisPointRange || 0,
            n = 0,
            q = 0,
            k = b.transA;
          if (e || a || g) {
            var f = b.getClosest();
            c
              ? ((n = c.minPointOffset), (q = c.pointRangePadding))
              : b.series.forEach(function (d) {
                  var c = a
                      ? 1
                      : e
                      ? u(d.options.pointRange, f, 0)
                      : b.axisPointRange || 0,
                    k = d.options.pointPlacement;
                  g = Math.max(g, c);
                  if (!b.single || a)
                    (d = d.is("xrange") ? !e : e),
                      (n = Math.max(n, d && h(k) ? 0 : c / 2)),
                      (q = Math.max(q, d && "on" === k ? 0 : c));
                });
            c = b.ordinal && b.ordinal.slope && f ? b.ordinal.slope / f : 1;
            b.minPointOffset = n *= c;
            b.pointRangePadding = q *= c;
            b.pointRange = Math.min(g, b.single && a ? 1 : d);
            e && (b.closestPointRange = f);
          }
          b.translationSlope =
            b.transA =
            k =
              b.staticScale || b.len / (d + q || 1);
          b.transB = b.horiz ? b.left : b.bottom;
          b.minPixelPadding = k * n;
          t(this, "afterSetAxisTranslation");
        };
        a.prototype.minFromRange = function () {
          return this.max - this.range;
        };
        a.prototype.setTickInterval = function (b) {
          var c = this.chart,
            a = this.logarithmic,
            h = this.options,
            e = this.isXAxis,
            g = this.isLinked,
            n = h.tickPixelInterval,
            q = this.categories,
            k = this.softThreshold,
            f = h.maxPadding,
            C = h.minPadding,
            x =
              d(h.tickInterval) && 0 <= h.tickInterval
                ? h.tickInterval
                : void 0,
            w = d(this.threshold) ? this.threshold : null;
          this.dateTime || q || g || this.getTickAmount();
          var l = u(this.userMin, h.min);
          var K = u(this.userMax, h.max);
          if (g) {
            this.linkedParent = c[this.coll][h.linkedTo];
            var p = this.linkedParent.getExtremes();
            this.min = u(p.min, p.dataMin);
            this.max = u(p.max, p.dataMax);
            h.type !== this.linkedParent.options.type && D(11, 1, c);
          } else {
            if (k && z(w))
              if (this.dataMin >= w) (p = w), (C = 0);
              else if (this.dataMax <= w) {
                var E = w;
                f = 0;
              }
            this.min = u(l, p, this.dataMin);
            this.max = u(K, E, this.dataMax);
          }
          a &&
            (this.positiveValuesOnly &&
              !b &&
              0 >= Math.min(this.min, u(this.dataMin, this.min)) &&
              D(10, 1, c),
            (this.min = m(a.log2lin(this.min), 16)),
            (this.max = m(a.log2lin(this.max), 16)));
          this.range &&
            z(this.max) &&
            ((this.userMin =
              this.min =
              l =
                Math.max(this.dataMin, this.minFromRange())),
            (this.userMax = K = this.max),
            (this.range = null));
          t(this, "foundExtremes");
          this.beforePadding && this.beforePadding();
          this.adjustForMinRange();
          !(
            q ||
            this.axisPointRange ||
            (this.stacking && this.stacking.usePercentage) ||
            g
          ) &&
            z(this.min) &&
            z(this.max) &&
            (c = this.max - this.min) &&
            (!z(l) && C && (this.min -= c * C),
            !z(K) && f && (this.max += c * f));
          d(this.userMin) ||
            (d(h.softMin) && h.softMin < this.min && (this.min = l = h.softMin),
            d(h.floor) && (this.min = Math.max(this.min, h.floor)));
          d(this.userMax) ||
            (d(h.softMax) && h.softMax > this.max && (this.max = K = h.softMax),
            d(h.ceiling) && (this.max = Math.min(this.max, h.ceiling)));
          k &&
            z(this.dataMin) &&
            ((w = w || 0),
            !z(l) && this.min < w && this.dataMin >= w
              ? (this.min = this.options.minRange
                  ? Math.min(w, this.max - this.minRange)
                  : w)
              : !z(K) &&
                this.max > w &&
                this.dataMax <= w &&
                (this.max = this.options.minRange
                  ? Math.max(w, this.min + this.minRange)
                  : w));
          d(this.min) &&
            d(this.max) &&
            !this.chart.polar &&
            this.min > this.max &&
            (z(this.options.min)
              ? (this.max = this.min)
              : z(this.options.max) && (this.min = this.max));
          this.tickInterval =
            this.min === this.max ||
            "undefined" === typeof this.min ||
            "undefined" === typeof this.max
              ? 1
              : g &&
                this.linkedParent &&
                !x &&
                n === this.linkedParent.options.tickPixelInterval
              ? (x = this.linkedParent.tickInterval)
              : u(
                  x,
                  this.tickAmount
                    ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1)
                    : void 0,
                  q ? 1 : ((this.max - this.min) * n) / Math.max(this.len, n)
                );
          if (e && !b) {
            var r =
              this.min !== (this.old && this.old.min) ||
              this.max !== (this.old && this.old.max);
            this.series.forEach(function (b) {
              b.forceCrop = b.forceCropping && b.forceCropping();
              b.processData(r);
            });
            t(this, "postProcessData", { hasExtemesChanged: r });
          }
          this.setAxisTranslation();
          t(this, "initialAxisTranslation");
          this.pointRange &&
            !x &&
            (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          b = u(
            h.minTickInterval,
            this.dateTime &&
              !this.series.some(function (b) {
                return b.noSharedTooltip;
              })
              ? this.closestPointRange
              : 0
          );
          !x && this.tickInterval < b && (this.tickInterval = b);
          this.dateTime ||
            this.logarithmic ||
            x ||
            (this.tickInterval = B(this, this.tickInterval));
          this.tickAmount || (this.tickInterval = this.unsquish());
          this.setTickPositions();
        };
        a.prototype.setTickPositions = function () {
          var b = this.options,
            d = b.tickPositions,
            c = this.getMinorTickInterval(),
            a = this.hasVerticalPanning(),
            h = "colorAxis" === this.coll,
            e = (h || !a) && b.startOnTick;
          a = (h || !a) && b.endOnTick;
          h = b.tickPositioner;
          this.tickmarkOffset =
            this.categories &&
            "between" === b.tickmarkPlacement &&
            1 === this.tickInterval
              ? 0.5
              : 0;
          this.minorTickInterval =
            "auto" === c && this.tickInterval ? this.tickInterval / 5 : c;
          this.single =
            this.min === this.max &&
            z(this.min) &&
            !this.tickAmount &&
            (parseInt(this.min, 10) === this.min || !1 !== b.allowDecimals);
          this.tickPositions = c = d && d.slice();
          if (!c) {
            if (
              (this.ordinal && this.ordinal.positions) ||
              !(
                (this.max - this.min) / this.tickInterval >
                Math.max(2 * this.len, 200)
              )
            )
              if (this.dateTime)
                c = this.getTimeTicks(
                  this.dateTime.normalizeTimeTickInterval(
                    this.tickInterval,
                    b.units
                  ),
                  this.min,
                  this.max,
                  b.startOfWeek,
                  this.ordinal && this.ordinal.positions,
                  this.closestPointRange,
                  !0
                );
              else if (this.logarithmic)
                c = this.logarithmic.getLogTickPositions(
                  this.tickInterval,
                  this.min,
                  this.max
                );
              else
                for (var g = (b = this.tickInterval); g <= 2 * b; )
                  if (
                    ((c = this.getLinearTickPositions(
                      this.tickInterval,
                      this.min,
                      this.max
                    )),
                    this.tickAmount && c.length > this.tickAmount)
                  )
                    this.tickInterval = B(this, (g *= 1.1));
                  else break;
            else (c = [this.min, this.max]), D(19, !1, this.chart);
            c.length > this.len &&
              ((c = [c[0], c.pop()]), c[0] === c[1] && (c.length = 1));
            this.tickPositions = c;
            h &&
              (h = h.apply(this, [this.min, this.max])) &&
              (this.tickPositions = c = h);
          }
          this.paddedTicks = c.slice(0);
          this.trimTicks(c, e, a);
          this.isLinked ||
            (this.single &&
              2 > c.length &&
              !this.categories &&
              !this.series.some(function (b) {
                return (
                  b.is("heatmap") && "between" === b.options.pointPlacement
                );
              }) &&
              ((this.min -= 0.5), (this.max += 0.5)),
            d || h || this.adjustTickAmount());
          t(this, "afterSetTickPositions");
        };
        a.prototype.trimTicks = function (b, d, c) {
          var a = b[0],
            h = b[b.length - 1],
            e = (!this.isOrdinal && this.minPointOffset) || 0;
          t(this, "trimTicks");
          if (!this.isLinked) {
            if (d && -Infinity !== a) this.min = a;
            else for (; this.min - e > b[0]; ) b.shift();
            if (c) this.max = h;
            else for (; this.max + e < b[b.length - 1]; ) b.pop();
            0 === b.length &&
              z(a) &&
              !this.options.tickPositions &&
              b.push((h + a) / 2);
          }
        };
        a.prototype.alignToOthers = function () {
          var b = this,
            c = [this],
            a = b.options,
            h =
              "yAxis" === this.coll && this.chart.options.chart.alignThresholds,
            e = [],
            g;
          b.thresholdAlignment = void 0;
          if (
            ((!1 !== this.chart.options.chart.alignTicks && a.alignTicks) ||
              h) &&
            !1 !== a.startOnTick &&
            !1 !== a.endOnTick &&
            !b.logarithmic
          ) {
            var n = function (b) {
                var d = b.options;
                return [
                  b.horiz ? d.left : d.top,
                  d.width,
                  d.height,
                  d.pane,
                ].join();
              },
              q = n(this);
            this.chart[this.coll].forEach(function (d) {
              var a = d.series;
              a.length &&
                a.some(function (b) {
                  return b.visible;
                }) &&
                d !== b &&
                n(d) === q &&
                ((g = !0), c.push(d));
            });
          }
          if (g && h) {
            c.forEach(function (c) {
              c = c.getThresholdAlignment(b);
              d(c) && e.push(c);
            });
            var k =
              1 < e.length
                ? e.reduce(function (b, d) {
                    return b + d;
                  }, 0) / e.length
                : void 0;
            c.forEach(function (b) {
              b.thresholdAlignment = k;
            });
          }
          return g;
        };
        a.prototype.getThresholdAlignment = function (b) {
          (!d(this.dataMin) ||
            (this !== b &&
              this.series.some(function (b) {
                return b.isDirty || b.isDirtyData;
              }))) &&
            this.getSeriesExtremes();
          if (d(this.threshold))
            return (
              (b = l(
                (this.threshold - (this.dataMin || 0)) /
                  ((this.dataMax || 0) - (this.dataMin || 0)),
                0,
                1
              )),
              this.options.reversed && (b = 1 - b),
              b
            );
        };
        a.prototype.getTickAmount = function () {
          var b = this.options,
            d = b.tickPixelInterval,
            c = b.tickAmount;
          !z(b.tickInterval) &&
            !c &&
            this.len < d &&
            !this.isRadial &&
            !this.logarithmic &&
            b.startOnTick &&
            b.endOnTick &&
            (c = 2);
          !c && this.alignToOthers() && (c = Math.ceil(this.len / d) + 1);
          4 > c && ((this.finalTickAmt = c), (c = 5));
          this.tickAmount = c;
        };
        a.prototype.adjustTickAmount = function () {
          var b = this,
            c = b.finalTickAmt,
            a = b.max,
            h = b.min,
            e = b.options,
            g = b.tickPositions,
            n = b.tickAmount,
            q = b.thresholdAlignment,
            k = g && g.length,
            f = u(b.threshold, b.softThreshold ? 0 : null);
          var t = b.tickInterval;
          if (d(q)) {
            var x = 0.5 > q ? Math.ceil(q * (n - 1)) : Math.floor(q * (n - 1));
            e.reversed && (x = n - 1 - x);
          }
          if (b.hasData() && d(h) && d(a)) {
            q = function () {
              b.transA *= (k - 1) / (n - 1);
              b.min = e.startOnTick ? g[0] : Math.min(h, g[0]);
              b.max = e.endOnTick
                ? g[g.length - 1]
                : Math.max(a, g[g.length - 1]);
            };
            if (d(x) && d(b.threshold)) {
              for (
                ;
                g[x] !== f || g.length !== n || g[0] > h || g[g.length - 1] < a;

              ) {
                g.length = 0;
                for (g.push(b.threshold); g.length < n; )
                  void 0 === g[x] || g[x] > b.threshold
                    ? g.unshift(m(g[0] - t))
                    : g.push(m(g[g.length - 1] + t));
                if (t > 8 * b.tickInterval) break;
                t *= 2;
              }
              q();
            } else if (k < n) {
              for (; g.length < n; )
                g.length % 2 || h === f
                  ? g.push(m(g[g.length - 1] + t))
                  : g.unshift(m(g[0] - t));
              q();
            }
            if (z(c)) {
              for (t = f = g.length; t--; )
                ((3 === c && 1 === t % 2) || (2 >= c && 0 < t && t < f - 1)) &&
                  g.splice(t, 1);
              b.finalTickAmt = void 0;
            }
          }
        };
        a.prototype.setScale = function () {
          var b = !1,
            d = !1;
          this.series.forEach(function (c) {
            b = b || c.isDirtyData || c.isDirty;
            d = d || (c.xAxis && c.xAxis.isDirty) || !1;
          });
          this.setAxisSize();
          var c = this.len !== (this.old && this.old.len);
          c ||
          b ||
          d ||
          this.isLinked ||
          this.forceRedraw ||
          this.userMin !== (this.old && this.old.userMin) ||
          this.userMax !== (this.old && this.old.userMax) ||
          this.alignToOthers()
            ? (this.stacking && this.stacking.resetStacks(),
              (this.forceRedraw = !1),
              this.getSeriesExtremes(),
              this.setTickInterval(),
              this.isDirty ||
                (this.isDirty =
                  c ||
                  this.min !== (this.old && this.old.min) ||
                  this.max !== (this.old && this.old.max)))
            : this.stacking && this.stacking.cleanStacks();
          b && this.panningState && (this.panningState.isDirty = !0);
          t(this, "afterSetScale");
        };
        a.prototype.setExtremes = function (b, d, c, a, h) {
          var e = this,
            g = e.chart;
          c = u(c, !0);
          e.series.forEach(function (b) {
            delete b.kdTree;
          });
          h = E(h, { min: b, max: d });
          t(e, "setExtremes", h, function () {
            e.userMin = b;
            e.userMax = d;
            e.eventArgs = h;
            c && g.redraw(a);
          });
        };
        a.prototype.zoom = function (b, d) {
          var c = this,
            a = this.dataMin,
            h = this.dataMax,
            e = this.options,
            g = Math.min(a, u(e.min, a)),
            n = Math.max(h, u(e.max, h));
          b = { newMin: b, newMax: d };
          t(this, "zoom", b, function (b) {
            var d = b.newMin,
              e = b.newMax;
            if (d !== c.min || e !== c.max)
              c.allowZoomOutside ||
                (z(a) && (d < g && (d = g), d > n && (d = n)),
                z(h) && (e < g && (e = g), e > n && (e = n))),
                (c.displayBtn =
                  "undefined" !== typeof d || "undefined" !== typeof e),
                c.setExtremes(d, e, !1, void 0, { trigger: "zoom" });
            b.zoomed = !0;
          });
          return b.zoomed;
        };
        a.prototype.setAxisSize = function () {
          var b = this.chart,
            d = this.options,
            c = d.offsets || [0, 0, 0, 0],
            a = this.horiz,
            h = (this.width = Math.round(
              K(u(d.width, b.plotWidth - c[3] + c[1]), b.plotWidth)
            )),
            e = (this.height = Math.round(
              K(u(d.height, b.plotHeight - c[0] + c[2]), b.plotHeight)
            )),
            g = (this.top = Math.round(
              K(u(d.top, b.plotTop + c[0]), b.plotHeight, b.plotTop)
            ));
          d = this.left = Math.round(
            K(u(d.left, b.plotLeft + c[3]), b.plotWidth, b.plotLeft)
          );
          this.bottom = b.chartHeight - e - g;
          this.right = b.chartWidth - h - d;
          this.len = Math.max(a ? h : e, 0);
          this.pos = a ? d : g;
        };
        a.prototype.getExtremes = function () {
          var b = this.logarithmic;
          return {
            min: b ? m(b.lin2log(this.min)) : this.min,
            max: b ? m(b.lin2log(this.max)) : this.max,
            dataMin: this.dataMin,
            dataMax: this.dataMax,
            userMin: this.userMin,
            userMax: this.userMax,
          };
        };
        a.prototype.getThreshold = function (b) {
          var d = this.logarithmic,
            c = d ? d.lin2log(this.min) : this.min;
          d = d ? d.lin2log(this.max) : this.max;
          null === b || -Infinity === b
            ? (b = c)
            : Infinity === b
            ? (b = d)
            : c > b
            ? (b = c)
            : d < b && (b = d);
          return this.translate(b, 0, 1, 0, 1);
        };
        a.prototype.autoLabelAlign = function (b) {
          var d = (u(b, 0) - 90 * this.side + 720) % 360;
          b = { align: "center" };
          t(this, "autoLabelAlign", b, function (b) {
            15 < d && 165 > d
              ? (b.align = "right")
              : 195 < d && 345 > d && (b.align = "left");
          });
          return b.align;
        };
        a.prototype.tickSize = function (b) {
          var d = this.options,
            c = u(
              d["tick" === b ? "tickWidth" : "minorTickWidth"],
              "tick" === b && this.isXAxis && !this.categories ? 1 : 0
            ),
            a = d["tick" === b ? "tickLength" : "minorTickLength"];
          if (c && a) {
            "inside" === d[b + "Position"] && (a = -a);
            var h = [a, c];
          }
          b = { tickSize: h };
          t(this, "afterTickSize", b);
          return b.tickSize;
        };
        a.prototype.labelMetrics = function () {
          var b = (this.tickPositions && this.tickPositions[0]) || 0;
          return this.chart.renderer.fontMetrics(
            this.options.labels.style.fontSize,
            this.ticks[b] && this.ticks[b].label
          );
        };
        a.prototype.unsquish = function () {
          var b = this.options.labels,
            a = this.horiz,
            h = this.tickInterval,
            e =
              this.len /
              (((this.categories ? 1 : 0) + this.max - this.min) / h),
            g = b.rotation,
            n = this.labelMetrics(),
            q = Math.max(this.max - this.min, 0),
            k = function (b) {
              var d = b / (e || 1);
              d = 1 < d ? Math.ceil(d) : 1;
              d * h > q &&
                Infinity !== b &&
                Infinity !== e &&
                q &&
                (d = Math.ceil(q / h));
              return m(d * h);
            },
            f = h,
            t,
            x,
            w = Number.MAX_VALUE;
          if (a) {
            if (!b.staggerLines && !b.step)
              if (d(g)) var l = [g];
              else e < b.autoRotationLimit && (l = b.autoRotation);
            l &&
              l.forEach(function (b) {
                if (b === g || (b && -90 <= b && 90 >= b)) {
                  x = k(Math.abs(n.h / Math.sin(c * b)));
                  var d = x + Math.abs(b / 360);
                  d < w && ((w = d), (t = b), (f = x));
                }
              });
          } else b.step || (f = k(n.h));
          this.autoRotation = l;
          this.labelRotation = u(t, d(g) ? g : 0);
          return f;
        };
        a.prototype.getSlotWidth = function (b) {
          var c = this.chart,
            a = this.horiz,
            h = this.options.labels,
            e = Math.max(
              this.tickPositions.length - (this.categories ? 0 : 1),
              1
            ),
            g = c.margin[3];
          if (b && d(b.slotWidth)) return b.slotWidth;
          if (a && 2 > h.step)
            return h.rotation ? 0 : ((this.staggerLines || 1) * this.len) / e;
          if (!a) {
            b = h.style.width;
            if (void 0 !== b) return parseInt(String(b), 10);
            if (g) return g - c.spacing[3];
          }
          return 0.33 * c.chartWidth;
        };
        a.prototype.renderUnsquish = function () {
          var b = this.chart,
            d = b.renderer,
            c = this.tickPositions,
            a = this.ticks,
            e = this.options.labels,
            g = e.style,
            n = this.horiz,
            q = this.getSlotWidth(),
            k = Math.max(1, Math.round(q - 2 * e.padding)),
            u = {},
            f = this.labelMetrics(),
            t = g.textOverflow,
            x = 0;
          h(e.rotation) || (u.rotation = e.rotation || 0);
          c.forEach(function (b) {
            b = a[b];
            b.movedLabel && b.replaceMovedLabel();
            b &&
              b.label &&
              b.label.textPxLength > x &&
              (x = b.label.textPxLength);
          });
          this.maxLabelLength = x;
          if (this.autoRotation)
            x > k && x > f.h
              ? (u.rotation = this.labelRotation)
              : (this.labelRotation = 0);
          else if (q) {
            var w = k;
            if (!t) {
              var m = "clip";
              for (k = c.length; !n && k--; ) {
                var l = c[k];
                if ((l = a[l].label))
                  l.styles && "ellipsis" === l.styles.textOverflow
                    ? l.css({ textOverflow: "clip" })
                    : l.textPxLength > q && l.css({ width: q + "px" }),
                    l.getBBox().height > this.len / c.length - (f.h - f.f) &&
                      (l.specificTextOverflow = "ellipsis");
              }
            }
          }
          u.rotation &&
            ((w = x > 0.5 * b.chartHeight ? 0.33 * b.chartHeight : x),
            t || (m = "ellipsis"));
          if (
            (this.labelAlign =
              e.align || this.autoLabelAlign(this.labelRotation))
          )
            u.align = this.labelAlign;
          c.forEach(function (b) {
            var d = (b = a[b]) && b.label,
              c = g.width,
              h = {};
            d &&
              (d.attr(u),
              b.shortenLabel
                ? b.shortenLabel()
                : w &&
                  !c &&
                  "nowrap" !== g.whiteSpace &&
                  (w < d.textPxLength || "SPAN" === d.element.tagName)
                ? ((h.width = w + "px"),
                  t || (h.textOverflow = d.specificTextOverflow || m),
                  d.css(h))
                : d.styles &&
                  d.styles.width &&
                  !h.width &&
                  !c &&
                  d.css({ width: null }),
              delete d.specificTextOverflow,
              (b.rotation = u.rotation));
          }, this);
          this.tickRotCorr = d.rotCorr(
            f.b,
            this.labelRotation || 0,
            0 !== this.side
          );
        };
        a.prototype.hasData = function () {
          return (
            this.series.some(function (b) {
              return b.hasData();
            }) ||
            (this.options.showEmpty && z(this.min) && z(this.max))
          );
        };
        a.prototype.addTitle = function (d) {
          var c = this.chart.renderer,
            a = this.horiz,
            h = this.opposite,
            e = this.options.title,
            g = this.chart.styledMode,
            n;
          this.axisTitle ||
            ((n = e.textAlign) ||
              (n = (
                a
                  ? { low: "left", middle: "center", high: "right" }
                  : {
                      low: h ? "right" : "left",
                      middle: "center",
                      high: h ? "left" : "right",
                    }
              )[e.align]),
            (this.axisTitle = c
              .text(e.text || "", 0, 0, e.useHTML)
              .attr({ zIndex: 7, rotation: e.rotation, align: n })
              .addClass("highcharts-axis-title")),
            g || this.axisTitle.css(b(e.style)),
            this.axisTitle.add(this.axisGroup),
            (this.axisTitle.isNew = !0));
          g ||
            e.style.width ||
            this.isRadial ||
            this.axisTitle.css({ width: this.len + "px" });
          this.axisTitle[d ? "show" : "hide"](d);
        };
        a.prototype.generateTick = function (b) {
          var d = this.ticks;
          d[b] ? d[b].addLabel() : (d[b] = new I(this, b));
        };
        a.prototype.getOffset = function () {
          var b = this,
            d = this,
            c = d.chart,
            a = d.horiz,
            h = d.options,
            e = d.side,
            g = d.ticks,
            q = d.tickPositions,
            k = d.coll,
            f = d.axisParent,
            x = c.renderer,
            w = c.inverted && !d.isZAxis ? [1, 0, 3, 2][e] : e,
            l = d.hasData(),
            m = h.title,
            K = h.labels,
            p = c.axisOffset;
          c = c.clipOffset;
          var E = [-1, 1, 1, -1][e],
            r = h.className,
            P,
            D = 0,
            ja = 0,
            ba = 0;
          d.showAxis = P = l || h.showEmpty;
          d.staggerLines = (d.horiz && K.staggerLines) || void 0;
          if (!d.axisGroup) {
            var S = function (d, c, a) {
              return x
                .g(d)
                .attr({ zIndex: a })
                .addClass(
                  "highcharts-".concat(k.toLowerCase()).concat(c, " ") +
                    (b.isRadial
                      ? "highcharts-radial-axis".concat(c, " ")
                      : "") +
                    (r || "")
                )
                .add(f);
            };
            d.gridGroup = S("grid", "-grid", h.gridZIndex);
            d.axisGroup = S("axis", "", h.zIndex);
            d.labelGroup = S("axis-labels", "-labels", K.zIndex);
          }
          l || d.isLinked
            ? (q.forEach(function (b) {
                d.generateTick(b);
              }),
              d.renderUnsquish(),
              (d.reserveSpaceDefault =
                0 === e ||
                2 === e ||
                { 1: "left", 3: "right" }[e] === d.labelAlign),
              u(
                K.reserveSpace,
                "center" === d.labelAlign ? !0 : null,
                d.reserveSpaceDefault
              ) &&
                q.forEach(function (b) {
                  ba = Math.max(g[b].getLabelSize(), ba);
                }),
              d.staggerLines && (ba *= d.staggerLines),
              (d.labelOffset = ba * (d.opposite ? -1 : 1)))
            : n(g, function (b, d) {
                b.destroy();
                delete g[d];
              });
          if (
            m &&
            m.text &&
            !1 !== m.enabled &&
            (d.addTitle(P), P && !1 !== m.reserveSpace)
          ) {
            d.titleOffset = D = d.axisTitle.getBBox()[a ? "height" : "width"];
            var N = m.offset;
            ja = z(N) ? 0 : u(m.margin, a ? 5 : 10);
          }
          d.renderLine();
          d.offset = E * u(h.offset, p[e] ? p[e] + (h.margin || 0) : 0);
          d.tickRotCorr = d.tickRotCorr || { x: 0, y: 0 };
          m = 0 === e ? -d.labelMetrics().h : 2 === e ? d.tickRotCorr.y : 0;
          l = Math.abs(ba) + ja;
          ba && (l = l - m + E * (a ? u(K.y, d.tickRotCorr.y + 8 * E) : K.x));
          d.axisTitleMargin = u(N, l);
          d.getMaxLabelDimensions &&
            (d.maxLabelDimensions = d.getMaxLabelDimensions(g, q));
          "colorAxis" !== k &&
            ((a = this.tickSize("tick")),
            (p[e] = Math.max(
              p[e],
              (d.axisTitleMargin || 0) + D + E * d.offset,
              l,
              q && q.length && a ? a[0] + E * d.offset : 0
            )),
            (h =
              !d.axisLine || h.offset
                ? 0
                : 2 * Math.floor(d.axisLine.strokeWidth() / 2)),
            (c[w] = Math.max(c[w], h)));
          t(this, "afterGetOffset");
        };
        a.prototype.getLinePath = function (b) {
          var d = this.chart,
            c = this.opposite,
            a = this.offset,
            h = this.horiz,
            e = this.left + (c ? this.width : 0) + a;
          a = d.chartHeight - this.bottom - (c ? this.height : 0) + a;
          c && (b *= -1);
          return d.renderer.crispLine(
            [
              ["M", h ? this.left : e, h ? a : this.top],
              [
                "L",
                h ? d.chartWidth - this.right : e,
                h ? a : d.chartHeight - this.bottom,
              ],
            ],
            b
          );
        };
        a.prototype.renderLine = function () {
          this.axisLine ||
            ((this.axisLine = this.chart.renderer
              .path()
              .addClass("highcharts-axis-line")
              .add(this.axisGroup)),
            this.chart.styledMode ||
              this.axisLine.attr({
                stroke: this.options.lineColor,
                "stroke-width": this.options.lineWidth,
                zIndex: 7,
              }));
        };
        a.prototype.getTitlePosition = function () {
          var b = this.horiz,
            d = this.left,
            c = this.top,
            a = this.len,
            h = this.options.title,
            e = b ? d : c,
            g = this.opposite,
            n = this.offset,
            q = h.x,
            k = h.y,
            u = this.axisTitle,
            f = this.chart.renderer.fontMetrics(h.style.fontSize, u);
          u = u ? Math.max(u.getBBox(!1, 0).height - f.h - 1, 0) : 0;
          a = {
            low: e + (b ? 0 : a),
            middle: e + a / 2,
            high: e + (b ? a : 0),
          }[h.align];
          d =
            (b ? c + this.height : d) +
            (b ? 1 : -1) * (g ? -1 : 1) * (this.axisTitleMargin || 0) +
            [-u, u, f.f, -u][this.side];
          b = {
            x: b ? a + q : d + (g ? this.width : 0) + n + q,
            y: b ? d + k - (g ? this.height : 0) + n : a + k,
          };
          t(this, "afterGetTitlePosition", { titlePosition: b });
          return b;
        };
        a.prototype.renderMinorTick = function (b, d) {
          var c = this.minorTicks;
          c[b] || (c[b] = new I(this, b, "minor"));
          d && c[b].isNew && c[b].render(null, !0);
          c[b].render(null, !1, 1);
        };
        a.prototype.renderTick = function (b, d, c) {
          var a = this.ticks;
          if (
            !this.isLinked ||
            (b >= this.min && b <= this.max) ||
            (this.grid && this.grid.isColumn)
          )
            a[b] || (a[b] = new I(this, b)),
              c && a[b].isNew && a[b].render(d, !0, -1),
              a[b].render(d);
        };
        a.prototype.render = function () {
          var b = this,
            c = b.chart,
            a = b.logarithmic,
            h = b.options,
            e = b.isLinked,
            g = b.tickPositions,
            q = b.axisTitle,
            k = b.ticks,
            u = b.minorTicks,
            f = b.alternateBands,
            x = h.stackLabels,
            l = h.alternateGridColor,
            w = b.tickmarkOffset,
            m = b.axisLine,
            K = b.showAxis,
            p = r(c.renderer.globalAnimation),
            z,
            E;
          b.labelEdge.length = 0;
          b.overlap = !1;
          [k, u, f].forEach(function (b) {
            n(b, function (b) {
              b.isActive = !1;
            });
          });
          if (b.hasData() || e) {
            var D = b.chart.hasRendered && b.old && d(b.old.min);
            b.minorTickInterval &&
              !b.categories &&
              b.getMinorTickPositions().forEach(function (d) {
                b.renderMinorTick(d, D);
              });
            g.length &&
              (g.forEach(function (d, c) {
                b.renderTick(d, c, D);
              }),
              w &&
                (0 === b.min || b.single) &&
                (k[-1] || (k[-1] = new I(b, -1, null, !0)), k[-1].render(-1)));
            l &&
              g.forEach(function (d, h) {
                E = "undefined" !== typeof g[h + 1] ? g[h + 1] + w : b.max - w;
                0 === h % 2 &&
                  d < b.max &&
                  E <= b.max + (c.polar ? -w : w) &&
                  (f[d] || (f[d] = new F.PlotLineOrBand(b)),
                  (z = d + w),
                  (f[d].options = {
                    from: a ? a.lin2log(z) : z,
                    to: a ? a.lin2log(E) : E,
                    color: l,
                    className: "highcharts-alternate-grid",
                  }),
                  f[d].render(),
                  (f[d].isActive = !0));
              });
            b._addedPlotLB ||
              ((b._addedPlotLB = !0),
              (h.plotLines || [])
                .concat(h.plotBands || [])
                .forEach(function (d) {
                  b.addPlotBandOrLine(d);
                }));
          }
          [k, u, f].forEach(function (b) {
            var d = [],
              a = p.duration;
            n(b, function (b, c) {
              b.isActive || (b.render(c, !1, 0), (b.isActive = !1), d.push(c));
            });
            P(
              function () {
                for (var c = d.length; c--; )
                  b[d[c]] &&
                    !b[d[c]].isActive &&
                    (b[d[c]].destroy(), delete b[d[c]]);
              },
              b !== f && c.hasRendered && a ? a : 0
            );
          });
          m &&
            (m[m.isPlaced ? "animate" : "attr"]({
              d: this.getLinePath(m.strokeWidth()),
            }),
            (m.isPlaced = !0),
            m[K ? "show" : "hide"](K));
          q &&
            K &&
            ((h = b.getTitlePosition()),
            q[q.isNew ? "attr" : "animate"](h),
            (q.isNew = !1));
          x && x.enabled && b.stacking && b.stacking.renderStackTotals();
          b.old = {
            len: b.len,
            max: b.max,
            min: b.min,
            transA: b.transA,
            userMax: b.userMax,
            userMin: b.userMin,
          };
          b.isDirty = !1;
          t(this, "afterRender");
        };
        a.prototype.redraw = function () {
          this.visible &&
            (this.render(),
            this.plotLinesAndBands.forEach(function (b) {
              b.render();
            }));
          this.series.forEach(function (b) {
            b.isDirty = !0;
          });
        };
        a.prototype.getKeepProps = function () {
          return this.keepProps || a.keepProps;
        };
        a.prototype.destroy = function (b) {
          var d = this,
            c = d.plotLinesAndBands,
            a = this.eventOptions;
          t(this, "destroy", { keepEvents: b });
          b || w(d);
          [d.ticks, d.minorTicks, d.alternateBands].forEach(function (b) {
            N(b);
          });
          if (c) for (b = c.length; b--; ) c[b].destroy();
          "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
            .split(" ")
            .forEach(function (b) {
              d[b] && (d[b] = d[b].destroy());
            });
          for (var h in d.plotLinesAndBandsGroups)
            d.plotLinesAndBandsGroups[h] =
              d.plotLinesAndBandsGroups[h].destroy();
          n(d, function (b, c) {
            -1 === d.getKeepProps().indexOf(c) && delete d[c];
          });
          this.eventOptions = a;
        };
        a.prototype.drawCrosshair = function (b, d) {
          var c = this.crosshair,
            a = u(c && c.snap, !0),
            h = this.chart,
            e,
            g = this.cross;
          t(this, "drawCrosshair", { e: b, point: d });
          b || (b = this.cross && this.cross.e);
          if (c && !1 !== (z(d) || !a)) {
            a
              ? z(d) &&
                (e = u(
                  "colorAxis" !== this.coll ? d.crosshairPos : null,
                  this.isXAxis ? d.plotX : this.len - d.plotY
                ))
              : (e =
                  b &&
                  (this.horiz
                    ? b.chartX - this.pos
                    : this.len - b.chartY + this.pos));
            if (z(e)) {
              var n = {
                value: d && (this.isXAxis ? d.x : u(d.stackY, d.y)),
                translatedValue: e,
              };
              h.polar &&
                E(n, {
                  isCrosshair: !0,
                  chartX: b && b.chartX,
                  chartY: b && b.chartY,
                  point: d,
                });
              n = this.getPlotLinePath(n) || null;
            }
            if (!z(n)) {
              this.hideCrosshair();
              return;
            }
            a = this.categories && !this.isRadial;
            g ||
              ((this.cross = g =
                h.renderer
                  .path()
                  .addClass(
                    "highcharts-crosshair highcharts-crosshair-" +
                      (a ? "category " : "thin ") +
                      (c.className || "")
                  )
                  .attr({ zIndex: u(c.zIndex, 2) })
                  .add()),
              h.styledMode ||
                (g
                  .attr({
                    stroke:
                      c.color ||
                      (a
                        ? A.parse("#ccd6eb").setOpacity(0.25).get()
                        : "#cccccc"),
                    "stroke-width": u(c.width, 1),
                  })
                  .css({ "pointer-events": "none" }),
                c.dashStyle && g.attr({ dashstyle: c.dashStyle })));
            g.show().attr({ d: n });
            a && !c.width && g.attr({ "stroke-width": this.transA });
            this.cross.e = b;
          } else this.hideCrosshair();
          t(this, "afterDrawCrosshair", { e: b, point: d });
        };
        a.prototype.hideCrosshair = function () {
          this.cross && this.cross.hide();
          t(this, "afterHideCrosshair");
        };
        a.prototype.hasVerticalPanning = function () {
          var b = this.chart.options.chart.panning;
          return !!(b && b.enabled && /y/.test(b.type));
        };
        a.prototype.validatePositiveValue = function (b) {
          return d(b) && 0 < b;
        };
        a.prototype.update = function (d, c) {
          var a = this.chart;
          d = b(this.userOptions, d);
          this.destroy(!0);
          this.init(a, d);
          a.isDirtyBox = !0;
          u(c, !0) && a.redraw();
        };
        a.prototype.remove = function (b) {
          for (
            var d = this.chart, c = this.coll, a = this.series, h = a.length;
            h--;

          )
            a[h] && a[h].remove(!1);
          J(d.axes, this);
          J(d[c], this);
          d[c].forEach(function (b, d) {
            b.options.index = b.userOptions.index = d;
          });
          this.destroy();
          d.isDirtyBox = !0;
          u(b, !0) && d.redraw();
        };
        a.prototype.setTitle = function (b, d) {
          this.update({ title: b }, d);
        };
        a.prototype.setCategories = function (b, d) {
          this.update({ categories: b }, d);
        };
        a.defaultOptions = f.defaultXAxisOptions;
        a.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
        return a;
      })();
      ("");
      return a;
    }
  );
  L(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      A = a.getMagnitude,
      G = a.normalizeTickInterval,
      y = a.timeUnits,
      F;
    (function (a) {
      function v() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
      }
      function r(c) {
        "datetime" !== c.userOptions.type
          ? (this.dateTime = void 0)
          : this.dateTime || (this.dateTime = new e(this));
      }
      var p = [];
      a.compose = function (c) {
        -1 === p.indexOf(c) &&
          (p.push(c),
          c.keepProps.push("dateTime"),
          (c.prototype.getTimeTicks = v),
          f(c, "init", r));
        return c;
      };
      var e = (function () {
        function c(c) {
          this.axis = c;
        }
        c.prototype.normalizeTimeTickInterval = function (c, a) {
          var e = a || [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1, 2]],
            ["week", [1, 2]],
            ["month", [1, 2, 3, 4, 6]],
            ["year", null],
          ];
          a = e[e.length - 1];
          var g = y[a[0]],
            k = a[1],
            f;
          for (
            f = 0;
            f < e.length &&
            !((a = e[f]),
            (g = y[a[0]]),
            (k = a[1]),
            e[f + 1] && c <= (g * k[k.length - 1] + y[e[f + 1][0]]) / 2);
            f++
          );
          g === y.year && c < 5 * g && (k = [1, 2, 5]);
          c = G(c / g, k, "year" === a[0] ? Math.max(A(c / g), 1) : 1);
          return { unitRange: g, count: c, unitName: a[0] };
        };
        c.prototype.getXDateFormat = function (c, a) {
          var e = this.axis,
            g = e.chart.time;
          return e.closestPointRange
            ? g.getDateFormat(
                e.closestPointRange,
                c,
                e.options.startOfWeek,
                a
              ) || g.resolveDTLFormat(a.year).main
            : g.resolveDTLFormat(a.day).main;
        };
        return c;
      })();
      a.Additions = e;
    })(F || (F = {}));
    return F;
  });
  L(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.addEvent,
      A = a.normalizeTickInterval,
      G = a.pick,
      y;
    (function (a) {
      function B(a) {
        var c = this.logarithmic;
        "logarithmic" !== a.userOptions.type
          ? (this.logarithmic = void 0)
          : c || (this.logarithmic = new p(this));
      }
      function v() {
        var a = this.logarithmic;
        a &&
          ((this.lin2val = function (c) {
            return a.lin2log(c);
          }),
          (this.val2lin = function (c) {
            return a.log2lin(c);
          }));
      }
      var r = [];
      a.compose = function (a) {
        -1 === r.indexOf(a) &&
          (r.push(a),
          a.keepProps.push("logarithmic"),
          f(a, "init", B),
          f(a, "afterInit", v));
        return a;
      };
      var p = (function () {
        function a(c) {
          this.axis = c;
        }
        a.prototype.getLogTickPositions = function (c, a, e, f) {
          var g = this.axis,
            k = g.len,
            l = g.options,
            p = [];
          f || (this.minorAutoInterval = void 0);
          if (0.5 <= c)
            (c = Math.round(c)), (p = g.getLinearTickPositions(c, a, e));
          else if (0.08 <= c) {
            var r = Math.floor(a),
              E,
              t = (l = void 0);
            for (
              k =
                0.3 < c
                  ? [1, 2, 4]
                  : 0.15 < c
                  ? [1, 2, 4, 6, 8]
                  : [1, 2, 3, 4, 5, 6, 7, 8, 9];
              r < e + 1 && !t;
              r++
            ) {
              var x = k.length;
              for (E = 0; E < x && !t; E++) {
                var d = this.log2lin(this.lin2log(r) * k[E]);
                d > a &&
                  (!f || l <= e) &&
                  "undefined" !== typeof l &&
                  p.push(l);
                l > e && (t = !0);
                l = d;
              }
            }
          } else
            (a = this.lin2log(a)),
              (e = this.lin2log(e)),
              (c = f ? g.getMinorTickInterval() : l.tickInterval),
              (c = G(
                "auto" === c ? null : c,
                this.minorAutoInterval,
                ((l.tickPixelInterval / (f ? 5 : 1)) * (e - a)) /
                  ((f ? k / g.tickPositions.length : k) || 1)
              )),
              (c = A(c)),
              (p = g.getLinearTickPositions(c, a, e).map(this.log2lin)),
              f || (this.minorAutoInterval = c / 5);
          f || (g.tickInterval = c);
          return p;
        };
        a.prototype.lin2log = function (c) {
          return Math.pow(10, c);
        };
        a.prototype.log2lin = function (c) {
          return Math.log(c) / Math.LN10;
        };
        return a;
      })();
      a.Additions = p;
    })(y || (y = {}));
    return y;
  });
  L(
    f,
    "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
    [f["Core/Utilities.js"]],
    function (a) {
      var f = a.erase,
        A = a.extend,
        G = a.isNumber,
        y;
      (function (a) {
        var B = [],
          v;
        a.compose = function (a, e) {
          v || (v = a);
          -1 === B.indexOf(e) && (B.push(e), A(e.prototype, r.prototype));
          return e;
        };
        var r = (function () {
          function a() {}
          a.prototype.getPlotBandPath = function (a, c, k) {
            void 0 === k && (k = this.options);
            var e = this.getPlotLinePath({
                value: c,
                force: !0,
                acrossPanes: k.acrossPanes,
              }),
              f = [],
              m = this.horiz;
            c =
              !G(this.min) ||
              !G(this.max) ||
              (a < this.min && c < this.min) ||
              (a > this.max && c > this.max);
            a = this.getPlotLinePath({
              value: a,
              force: !0,
              acrossPanes: k.acrossPanes,
            });
            k = 1;
            if (a && e) {
              if (c) {
                var p = a.toString() === e.toString();
                k = 0;
              }
              for (c = 0; c < a.length; c += 2) {
                var r = a[c],
                  J = a[c + 1],
                  D = e[c],
                  E = e[c + 1];
                ("M" !== r[0] && "L" !== r[0]) ||
                  ("M" !== J[0] && "L" !== J[0]) ||
                  ("M" !== D[0] && "L" !== D[0]) ||
                  ("M" !== E[0] && "L" !== E[0]) ||
                  (m && D[1] === r[1]
                    ? ((D[1] += k), (E[1] += k))
                    : m || D[2] !== r[2] || ((D[2] += k), (E[2] += k)),
                  f.push(
                    ["M", r[1], r[2]],
                    ["L", J[1], J[2]],
                    ["L", E[1], E[2]],
                    ["L", D[1], D[2]],
                    ["Z"]
                  ));
                f.isFlat = p;
              }
            }
            return f;
          };
          a.prototype.addPlotBand = function (a) {
            return this.addPlotBandOrLine(a, "plotBands");
          };
          a.prototype.addPlotLine = function (a) {
            return this.addPlotBandOrLine(a, "plotLines");
          };
          a.prototype.addPlotBandOrLine = function (a, c) {
            var e = this,
              g = this.userOptions,
              f = new v(this, a);
            this.visible && (f = f.render());
            if (f) {
              this._addedPlotLB ||
                ((this._addedPlotLB = !0),
                (g.plotLines || [])
                  .concat(g.plotBands || [])
                  .forEach(function (c) {
                    e.addPlotBandOrLine(c);
                  }));
              if (c) {
                var m = g[c] || [];
                m.push(a);
                g[c] = m;
              }
              this.plotLinesAndBands.push(f);
            }
            return f;
          };
          a.prototype.removePlotBandOrLine = function (a) {
            var c = this.plotLinesAndBands,
              e = this.options,
              g = this.userOptions;
            if (c) {
              for (var l = c.length; l--; ) c[l].id === a && c[l].destroy();
              [
                e.plotLines || [],
                g.plotLines || [],
                e.plotBands || [],
                g.plotBands || [],
              ].forEach(function (c) {
                for (l = c.length; l--; ) (c[l] || {}).id === a && f(c, c[l]);
              });
            }
          };
          a.prototype.removePlotBand = function (a) {
            this.removePlotBandOrLine(a);
          };
          a.prototype.removePlotLine = function (a) {
            this.removePlotBandOrLine(a);
          };
          return a;
        })();
      })(y || (y = {}));
      return y;
    }
  );
  L(
    f,
    "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
    [
      f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f) {
      var B = f.arrayMax,
        G = f.arrayMin,
        y = f.defined,
        F = f.destroyObjectProperties,
        I = f.erase,
        v = f.fireEvent,
        r = f.merge,
        p = f.objectEach,
        e = f.pick;
      f = (function () {
        function c(c, a) {
          this.axis = c;
          a && ((this.options = a), (this.id = a.id));
        }
        c.compose = function (e) {
          return a.compose(c, e);
        };
        c.prototype.render = function () {
          v(this, "render");
          var c = this,
            a = c.axis,
            f = a.horiz,
            m = a.logarithmic,
            z = c.options,
            N = z.color,
            J = e(z.zIndex, 0),
            D = z.events,
            E = {},
            t = a.chart.renderer,
            x = z.label,
            d = c.label,
            h = z.to,
            b = z.from,
            q = z.value,
            n = c.svgElem,
            u = [],
            K = y(b) && y(h);
          u = y(q);
          var w = !n,
            S = {
              class:
                "highcharts-plot-" +
                (K ? "band " : "line ") +
                (z.className || ""),
            },
            P = K ? "bands" : "lines";
          m && ((b = m.log2lin(b)), (h = m.log2lin(h)), (q = m.log2lin(q)));
          a.chart.styledMode ||
            (u
              ? ((S.stroke = N || "#999999"),
                (S["stroke-width"] = e(z.width, 1)),
                z.dashStyle && (S.dashstyle = z.dashStyle))
              : K &&
                ((S.fill = N || "#e6ebf5"),
                z.borderWidth &&
                  ((S.stroke = z.borderColor),
                  (S["stroke-width"] = z.borderWidth))));
          E.zIndex = J;
          P += "-" + J;
          (m = a.plotLinesAndBandsGroups[P]) ||
            (a.plotLinesAndBandsGroups[P] = m =
              t
                .g("plot-" + P)
                .attr(E)
                .add());
          w && (c.svgElem = n = t.path().attr(S).add(m));
          if (u)
            u = a.getPlotLinePath({
              value: q,
              lineWidth: n.strokeWidth(),
              acrossPanes: z.acrossPanes,
            });
          else if (K) u = a.getPlotBandPath(b, h, z);
          else return;
          !c.eventsAdded &&
            D &&
            (p(D, function (b, d) {
              n.on(d, function (b) {
                D[d].apply(c, [b]);
              });
            }),
            (c.eventsAdded = !0));
          (w || !n.d) && u && u.length
            ? n.attr({ d: u })
            : n &&
              (u
                ? (n.show(), n.animate({ d: u }))
                : n.d && (n.hide(), d && (c.label = d = d.destroy())));
          x &&
          (y(x.text) || y(x.formatter)) &&
          u &&
          u.length &&
          0 < a.width &&
          0 < a.height &&
          !u.isFlat
            ? ((x = r(
                {
                  align: f && K && "center",
                  x: f ? !K && 4 : 10,
                  verticalAlign: !f && K && "middle",
                  y: f ? (K ? 16 : 10) : K ? 6 : -4,
                  rotation: f && !K && 90,
                },
                x
              )),
              this.renderLabel(x, u, K, J))
            : d && d.hide();
          return c;
        };
        c.prototype.renderLabel = function (c, a, e, f) {
          var g = this.axis,
            k = g.chart.renderer,
            m = this.label;
          m ||
            ((this.label = m =
              k
                .text(this.getLabelText(c), 0, 0, c.useHTML)
                .attr({
                  align: c.textAlign || c.align,
                  rotation: c.rotation,
                  class:
                    "highcharts-plot-" +
                    (e ? "band" : "line") +
                    "-label " +
                    (c.className || ""),
                  zIndex: f,
                })
                .add()),
            g.chart.styledMode ||
              m.css(r({ textOverflow: "ellipsis" }, c.style)));
          f = a.xBounds || [a[0][1], a[1][1], e ? a[2][1] : a[0][1]];
          a = a.yBounds || [a[0][2], a[1][2], e ? a[2][2] : a[0][2]];
          e = G(f);
          k = G(a);
          m.align(c, !1, { x: e, y: k, width: B(f) - e, height: B(a) - k });
          (m.alignValue && "left" !== m.alignValue) ||
            m.css({
              width:
                (90 === m.rotation
                  ? g.height - (m.alignAttr.y - g.top)
                  : g.width - (m.alignAttr.x - g.left)) + "px",
            });
          m.show(!0);
        };
        c.prototype.getLabelText = function (c) {
          return y(c.formatter) ? c.formatter.call(this) : c.text;
        };
        c.prototype.destroy = function () {
          I(this.axis.plotLinesAndBands, this);
          delete this.axis;
          F(this);
        };
        return c;
      })();
      ("");
      ("");
      return f;
    }
  );
  L(
    f,
    "Core/Tooltip.js",
    [
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y) {
      var B = a.format,
        I = f.doc,
        v = A.distribute,
        r = y.addEvent,
        p = y.clamp,
        e = y.css,
        c = y.defined,
        k = y.discardElement,
        g = y.extend,
        l = y.fireEvent,
        m = y.isArray,
        z = y.isNumber,
        N = y.isString,
        J = y.merge,
        D = y.pick,
        E = y.splat,
        t = y.syncTimeout;
      a = (function () {
        function a(d, c) {
          this.allowShared = !0;
          this.container = void 0;
          this.crosshairs = [];
          this.distance = 0;
          this.isHidden = !0;
          this.isSticky = !1;
          this.now = {};
          this.options = {};
          this.outside = !1;
          this.chart = d;
          this.init(d, c);
        }
        a.prototype.applyFilter = function () {
          var d = this.chart;
          d.renderer.definition({
            tagName: "filter",
            attributes: { id: "drop-shadow-" + d.index, opacity: 0.5 },
            children: [
              {
                tagName: "feGaussianBlur",
                attributes: { in: "SourceAlpha", stdDeviation: 1 },
              },
              { tagName: "feOffset", attributes: { dx: 1, dy: 1 } },
              {
                tagName: "feComponentTransfer",
                children: [
                  {
                    tagName: "feFuncA",
                    attributes: { type: "linear", slope: 0.3 },
                  },
                ],
              },
              {
                tagName: "feMerge",
                children: [
                  { tagName: "feMergeNode" },
                  {
                    tagName: "feMergeNode",
                    attributes: { in: "SourceGraphic" },
                  },
                ],
              },
            ],
          });
        };
        a.prototype.bodyFormatter = function (d) {
          return d.map(function (d) {
            var b = d.series.tooltipOptions;
            return (
              b[(d.point.formatPrefix || "point") + "Formatter"] ||
              d.point.tooltipFormatter
            ).call(
              d.point,
              b[(d.point.formatPrefix || "point") + "Format"] || ""
            );
          });
        };
        a.prototype.cleanSplit = function (d) {
          this.chart.series.forEach(function (c) {
            var b = c && c.tt;
            b && (!b.isActive || d ? (c.tt = b.destroy()) : (b.isActive = !1));
          });
        };
        a.prototype.defaultFormatter = function (d) {
          var c = this.points || E(this);
          var b = [d.tooltipFooterHeaderFormatter(c[0])];
          b = b.concat(d.bodyFormatter(c));
          b.push(d.tooltipFooterHeaderFormatter(c[0], !0));
          return b;
        };
        a.prototype.destroy = function () {
          this.label && (this.label = this.label.destroy());
          this.split &&
            this.tt &&
            (this.cleanSplit(!0), (this.tt = this.tt.destroy()));
          this.renderer &&
            ((this.renderer = this.renderer.destroy()), k(this.container));
          y.clearTimeout(this.hideTimer);
          y.clearTimeout(this.tooltipTimeout);
        };
        a.prototype.getAnchor = function (d, c) {
          var b = this.chart,
            a = b.pointer,
            h = b.inverted,
            e = b.plotTop,
            g = b.plotLeft,
            f,
            k,
            t = 0,
            x = 0;
          d = E(d);
          this.followPointer && c
            ? ("undefined" === typeof c.chartX && (c = a.normalize(c)),
              (a = [c.chartX - g, c.chartY - e]))
            : d[0].tooltipPos
            ? (a = d[0].tooltipPos)
            : (d.forEach(function (d) {
                f = d.series.yAxis;
                k = d.series.xAxis;
                t += d.plotX || 0;
                x += d.plotLow
                  ? (d.plotLow + (d.plotHigh || 0)) / 2
                  : d.plotY || 0;
                k &&
                  f &&
                  (h
                    ? ((t += e + b.plotHeight - k.len - k.pos),
                      (x += g + b.plotWidth - f.len - f.pos))
                    : ((t += k.pos - g), (x += f.pos - e)));
              }),
              (t /= d.length),
              (x /= d.length),
              (a = [h ? b.plotWidth - x : t, h ? b.plotHeight - t : x]),
              this.shared &&
                1 < d.length &&
                c &&
                (h ? (a[0] = c.chartX - g) : (a[1] = c.chartY - e)));
          return a.map(Math.round);
        };
        a.prototype.getLabel = function () {
          var d = this,
            a = this.chart.styledMode,
            b = this.options,
            g = this.split && this.allowShared,
            n = "tooltip" + (c(b.className) ? " " + b.className : ""),
            k =
              b.style.pointerEvents ||
              (!this.followPointer && b.stickOnContact ? "auto" : "none"),
            t = function () {
              d.inContact = !0;
            },
            x = function (b) {
              var c = d.chart.hoverSeries;
              d.inContact =
                d.shouldStickOnContact() &&
                d.chart.pointer.inClass(b.relatedTarget, "highcharts-tooltip");
              if (!d.inContact && c && c.onMouseOut) c.onMouseOut();
            },
            m,
            l = this.chart.renderer;
          if (d.label) {
            var p = !d.label.hasClass("highcharts-label");
            ((g && !p) || (!g && p)) && d.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              p = this.chart.options.chart.style;
              var E = G.getRendererType();
              this.container = m = f.doc.createElement("div");
              m.className = "highcharts-tooltip-container";
              e(m, {
                position: "absolute",
                top: "1px",
                pointerEvents: k,
                zIndex: Math.max(
                  this.options.style.zIndex || 0,
                  ((p && p.zIndex) || 0) + 3
                ),
              });
              r(m, "mouseenter", t);
              r(m, "mouseleave", x);
              f.doc.body.appendChild(m);
              this.renderer = l = new E(
                m,
                0,
                0,
                p,
                void 0,
                void 0,
                l.styledMode
              );
            }
            g
              ? (this.label = l.g(n))
              : ((this.label = l
                  .label(
                    "",
                    0,
                    0,
                    b.shape,
                    void 0,
                    void 0,
                    b.useHTML,
                    void 0,
                    n
                  )
                  .attr({ padding: b.padding, r: b.borderRadius })),
                a ||
                  this.label
                    .attr({
                      fill: b.backgroundColor,
                      "stroke-width": b.borderWidth,
                    })
                    .css(b.style)
                    .css({ pointerEvents: k })
                    .shadow(b.shadow));
            a &&
              b.shadow &&
              (this.applyFilter(),
              this.label.attr({
                filter: "url(#drop-shadow-" + this.chart.index + ")",
              }));
            if (d.outside && !d.split) {
              var C = this.label,
                z = C.xSetter,
                D = C.ySetter;
              C.xSetter = function (b) {
                z.call(C, d.distance);
                m.style.left = b + "px";
              };
              C.ySetter = function (b) {
                D.call(C, d.distance);
                m.style.top = b + "px";
              };
            }
            this.label
              .on("mouseenter", t)
              .on("mouseleave", x)
              .attr({ zIndex: 8 })
              .add();
          }
          return this.label;
        };
        a.prototype.getPosition = function (d, c, b) {
          var a = this.chart,
            h = this.distance,
            e = {},
            g = (a.inverted && b.h) || 0,
            f = this.outside,
            k = f ? I.documentElement.clientWidth - 2 * h : a.chartWidth,
            t = f
              ? Math.max(
                  I.body.scrollHeight,
                  I.documentElement.scrollHeight,
                  I.body.offsetHeight,
                  I.documentElement.offsetHeight,
                  I.documentElement.clientHeight
                )
              : a.chartHeight,
            x = a.pointer.getChartPosition(),
            m = function (e) {
              var g = "x" === e;
              return [e, g ? k : t, g ? d : c].concat(
                f
                  ? [
                      g ? d * x.scaleX : c * x.scaleY,
                      g
                        ? x.left - h + (b.plotX + a.plotLeft) * x.scaleX
                        : x.top - h + (b.plotY + a.plotTop) * x.scaleY,
                      0,
                      g ? k : t,
                    ]
                  : [
                      g ? d : c,
                      g ? b.plotX + a.plotLeft : b.plotY + a.plotTop,
                      g ? a.plotLeft : a.plotTop,
                      g ? a.plotLeft + a.plotWidth : a.plotTop + a.plotHeight,
                    ]
              );
            },
            l = m("y"),
            p = m("x"),
            E;
          m = !!b.negative;
          !a.polar &&
            a.hoverSeries &&
            a.hoverSeries.yAxis &&
            a.hoverSeries.yAxis.reversed &&
            (m = !m);
          var z = !this.followPointer && D(b.ttBelow, !a.inverted === m),
            r = function (b, d, c, a, n, q, k) {
              var u = f ? ("y" === b ? h * x.scaleY : h * x.scaleX) : h,
                t = (c - a) / 2,
                m = a < n - h,
                w = n + h + a < d,
                H = n - u - c + t;
              n = n + u - t;
              if (z && w) e[b] = n;
              else if (!z && m) e[b] = H;
              else if (m) e[b] = Math.min(k - a, 0 > H - g ? H : H - g);
              else if (w) e[b] = Math.max(q, n + g + c > d ? n : n + g);
              else return !1;
            },
            v = function (b, d, c, a, g) {
              var n;
              g < h || g > d - h
                ? (n = !1)
                : (e[b] =
                    g < c / 2 ? 1 : g > d - a / 2 ? d - a - 2 : g - c / 2);
              return n;
            },
            H = function (b) {
              var d = l;
              l = p;
              p = d;
              E = b;
            },
            T = function () {
              !1 !== r.apply(0, l)
                ? !1 !== v.apply(0, p) || E || (H(!0), T())
                : E
                ? (e.x = e.y = 0)
                : (H(!0), T());
            };
          (a.inverted || 1 < this.len) && H();
          T();
          return e;
        };
        a.prototype.hide = function (d) {
          var c = this;
          y.clearTimeout(this.hideTimer);
          d = D(d, this.options.hideDelay);
          this.isHidden ||
            (this.hideTimer = t(function () {
              c.getLabel().fadeOut(d ? void 0 : d);
              c.isHidden = !0;
            }, d));
        };
        a.prototype.init = function (d, c) {
          this.chart = d;
          this.options = c;
          this.crosshairs = [];
          this.now = { x: 0, y: 0 };
          this.isHidden = !0;
          this.split = c.split && !d.inverted && !d.polar;
          this.shared = c.shared || this.split;
          this.outside = D(
            c.outside,
            !(!d.scrollablePixelsX && !d.scrollablePixelsY)
          );
        };
        a.prototype.shouldStickOnContact = function () {
          return !(this.followPointer || !this.options.stickOnContact);
        };
        a.prototype.isStickyOnContact = function () {
          return !(!this.shouldStickOnContact() || !this.inContact);
        };
        a.prototype.move = function (d, c, b, a) {
          var h = this,
            e = h.now,
            f =
              !1 !== h.options.animation &&
              !h.isHidden &&
              (1 < Math.abs(d - e.x) || 1 < Math.abs(c - e.y)),
            q = h.followPointer || 1 < h.len;
          g(e, {
            x: f ? (2 * e.x + d) / 3 : d,
            y: f ? (e.y + c) / 2 : c,
            anchorX: q ? void 0 : f ? (2 * e.anchorX + b) / 3 : b,
            anchorY: q ? void 0 : f ? (e.anchorY + a) / 2 : a,
          });
          h.getLabel().attr(e);
          h.drawTracker();
          f &&
            (y.clearTimeout(this.tooltipTimeout),
            (this.tooltipTimeout = setTimeout(function () {
              h && h.move(d, c, b, a);
            }, 32)));
        };
        a.prototype.refresh = function (d, c) {
          var b = this.chart,
            a = this.options,
            h = E(d),
            e = h[0],
            g = [],
            f = a.formatter || this.defaultFormatter,
            k = this.shared,
            t = b.styledMode,
            x = {};
          if (a.enabled && e.series) {
            y.clearTimeout(this.hideTimer);
            this.allowShared = !(!m(d) && d.series && d.series.noSharedTooltip);
            this.followPointer =
              !this.split && e.series.tooltipOptions.followPointer;
            d = this.getAnchor(d, c);
            var p = d[0],
              C = d[1];
            k && this.allowShared
              ? (b.pointer.applyInactiveState(h),
                h.forEach(function (b) {
                  b.setState("hover");
                  g.push(b.getLabelConfig());
                }),
                (x = { x: e.category, y: e.y }),
                (x.points = g))
              : (x = e.getLabelConfig());
            this.len = g.length;
            f = f.call(x, this);
            k = e.series;
            this.distance = D(k.tooltipOptions.distance, 16);
            if (!1 === f) this.hide();
            else {
              if (this.split && this.allowShared) this.renderSplit(f, h);
              else {
                var z = p,
                  r = C;
                c &&
                  b.pointer.isDirectTouch &&
                  ((z = c.chartX - b.plotLeft), (r = c.chartY - b.plotTop));
                if (
                  b.polar ||
                  !1 === k.options.clip ||
                  h.some(function (b) {
                    return b.series.shouldShowTooltip(z, r);
                  })
                )
                  (c = this.getLabel()),
                    (a.style.width && !t) ||
                      c.css({ width: this.chart.spacingBox.width + "px" }),
                    c.attr({ text: f && f.join ? f.join("") : f }),
                    c
                      .removeClass(/highcharts-color-[\d]+/g)
                      .addClass(
                        "highcharts-color-" + D(e.colorIndex, k.colorIndex)
                      ),
                    t ||
                      c.attr({
                        stroke:
                          a.borderColor || e.color || k.color || "#666666",
                      }),
                    this.updatePosition({
                      plotX: p,
                      plotY: C,
                      negative: e.negative,
                      ttBelow: e.ttBelow,
                      h: d[2] || 0,
                    });
                else {
                  this.hide();
                  return;
                }
              }
              this.isHidden &&
                this.label &&
                this.label.attr({ opacity: 1 }).show();
              this.isHidden = !1;
            }
            l(this, "refresh");
          }
        };
        a.prototype.renderSplit = function (d, c) {
          function b(b, d, c, h, e) {
            void 0 === e && (e = !0);
            c
              ? ((d = Y ? 0 : F),
                (b = p(b - h / 2, O.left, O.right - h - (a.outside ? Q : 0))))
              : ((d -= y),
                (b = e ? b - h - B : b + B),
                (b = p(b, e ? b : O.left, O.right)));
            return { x: b, y: d };
          }
          var a = this,
            h = a.chart,
            e = a.chart,
            f = e.chartWidth,
            k = e.chartHeight,
            t = e.plotHeight,
            x = e.plotLeft,
            m = e.plotTop,
            l = e.pointer,
            C = e.scrollablePixelsY;
          C = void 0 === C ? 0 : C;
          var E = e.scrollablePixelsX,
            z = e.scrollingContainer;
          z = void 0 === z ? { scrollLeft: 0, scrollTop: 0 } : z;
          var r = z.scrollLeft;
          z = z.scrollTop;
          var J = e.styledMode,
            B = a.distance,
            H = a.options,
            T = a.options.positioner,
            O =
              a.outside && "number" !== typeof E
                ? I.documentElement.getBoundingClientRect()
                : { left: r, right: r + f, top: z, bottom: z + k },
            W = a.getLabel(),
            U = this.renderer || h.renderer,
            Y = !(!h.xAxis[0] || !h.xAxis[0].opposite);
          h = l.getChartPosition();
          var Q = h.left;
          h = h.top;
          var y = m + z,
            A = 0,
            F = t - C;
          N(d) && (d = [!1, d]);
          d = d.slice(0, c.length + 1).reduce(function (d, h, e) {
            if (!1 !== h && "" !== h) {
              e = c[e - 1] || {
                isHeader: !0,
                plotX: c[0].plotX,
                plotY: t,
                series: {},
              };
              var g = e.isHeader,
                n = g ? a : e.series;
              h = h.toString();
              var f = n.tt,
                q = e.isHeader;
              var k = e.series;
              var u =
                "highcharts-color-" + D(e.colorIndex, k.colorIndex, "none");
              f ||
                ((f = { padding: H.padding, r: H.borderRadius }),
                J ||
                  ((f.fill = H.backgroundColor),
                  (f["stroke-width"] = H.borderWidth)),
                (f = U.label(
                  "",
                  0,
                  0,
                  H[q ? "headerShape" : "shape"],
                  void 0,
                  void 0,
                  H.useHTML
                )
                  .addClass(
                    (q ? "highcharts-tooltip-header " : "") +
                      "highcharts-tooltip-box " +
                      u
                  )
                  .attr(f)
                  .add(W)));
              f.isActive = !0;
              f.attr({ text: h });
              J ||
                f
                  .css(H.style)
                  .shadow(H.shadow)
                  .attr({
                    stroke: H.borderColor || e.color || k.color || "#333333",
                  });
              n = n.tt = f;
              q = n.getBBox();
              h = q.width + n.strokeWidth();
              g && ((A = q.height), (F += A), Y && (y -= A));
              k = e.plotX;
              k = void 0 === k ? 0 : k;
              u = e.plotY;
              u = void 0 === u ? 0 : u;
              f = e.series;
              if (e.isHeader) {
                k = x + k;
                var w = m + t / 2;
              } else {
                var l = f.xAxis,
                  K = f.yAxis;
                k = l.pos + p(k, -B, l.len + B);
                f.shouldShowTooltip(0, K.pos - m + u, { ignoreX: !0 }) &&
                  (w = K.pos + u);
              }
              k = p(k, O.left - B, O.right + B);
              "number" === typeof w
                ? ((q = q.height + 1),
                  (u = T ? T.call(a, h, q, e) : b(k, w, g, h)),
                  d.push({
                    align: T ? 0 : void 0,
                    anchorX: k,
                    anchorY: w,
                    boxWidth: h,
                    point: e,
                    rank: D(u.rank, g ? 1 : 0),
                    size: q,
                    target: u.y,
                    tt: n,
                    x: u.x,
                  }))
                : (n.isActive = !1);
            }
            return d;
          }, []);
          !T &&
            d.some(function (b) {
              var d = (a.outside ? Q : 0) + b.anchorX;
              return d < O.left && d + b.boxWidth < O.right
                ? !0
                : d < Q - O.left + b.boxWidth && O.right - d > d;
            }) &&
            (d = d.map(function (d) {
              var c = b(d.anchorX, d.anchorY, d.point.isHeader, d.boxWidth, !1);
              return g(d, { target: c.y, x: c.x });
            }));
          a.cleanSplit();
          v(d, F);
          var G = Q,
            aa = Q;
          d.forEach(function (b) {
            var d = b.x,
              c = b.boxWidth;
            b = b.isHeader;
            b ||
              (a.outside && Q + d < G && (G = Q + d),
              !b && a.outside && G + c > aa && (aa = Q + d));
          });
          d.forEach(function (b) {
            var d = b.x,
              c = b.anchorX,
              h = b.pos,
              e = b.point.isHeader;
            h = {
              visibility: "undefined" === typeof h ? "hidden" : "inherit",
              x: d,
              y: h + y,
              anchorX: c,
              anchorY: b.anchorY,
            };
            if (a.outside && d < c) {
              var g = Q - G;
              0 < g &&
                (e || ((h.x = d + g), (h.anchorX = c + g)),
                e && ((h.x = (aa - G) / 2), (h.anchorX = c + g)));
            }
            b.tt.attr(h);
          });
          d = a.container;
          C = a.renderer;
          a.outside &&
            d &&
            C &&
            ((e = W.getBBox()),
            C.setSize(e.width + e.x, e.height + e.y, !1),
            (d.style.left = G + "px"),
            (d.style.top = h + "px"));
        };
        a.prototype.drawTracker = function () {
          if (this.followPointer || !this.options.stickOnContact)
            this.tracker && this.tracker.destroy();
          else {
            var d = this.chart,
              c = this.label,
              b = this.shared ? d.hoverPoints : d.hoverPoint;
            if (c && b) {
              var a = { x: 0, y: 0, width: 0, height: 0 };
              b = this.getAnchor(b);
              var e = c.getBBox();
              b[0] += d.plotLeft - c.translateX;
              b[1] += d.plotTop - c.translateY;
              a.x = Math.min(0, b[0]);
              a.y = Math.min(0, b[1]);
              a.width =
                0 > b[0]
                  ? Math.max(Math.abs(b[0]), e.width - b[0])
                  : Math.max(Math.abs(b[0]), e.width);
              a.height =
                0 > b[1]
                  ? Math.max(Math.abs(b[1]), e.height - Math.abs(b[1]))
                  : Math.max(Math.abs(b[1]), e.height);
              this.tracker
                ? this.tracker.attr(a)
                : ((this.tracker = c.renderer
                    .rect(a)
                    .addClass("highcharts-tracker")
                    .add(c)),
                  d.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
            }
          }
        };
        a.prototype.styledModeFormat = function (d) {
          return d
            .replace('style="font-size: 10px"', 'class="highcharts-header"')
            .replace(
              /style="color:{(point|series)\.color}"/g,
              'class="highcharts-color-{$1.colorIndex}"'
            );
        };
        a.prototype.tooltipFooterHeaderFormatter = function (d, c) {
          var b = d.series,
            a = b.tooltipOptions,
            e = b.xAxis,
            h = e && e.dateTime;
          e = { isFooter: c, labelConfig: d };
          var g = a.xDateFormat,
            f = a[c ? "footerFormat" : "headerFormat"];
          l(this, "headerFormatter", e, function (c) {
            h &&
              !g &&
              z(d.key) &&
              (g = h.getXDateFormat(d.key, a.dateTimeLabelFormats));
            h &&
              g &&
              ((d.point && d.point.tooltipDateKeys) || ["key"]).forEach(
                function (b) {
                  f = f.replace(
                    "{point." + b + "}",
                    "{point." + b + ":" + g + "}"
                  );
                }
              );
            b.chart.styledMode && (f = this.styledModeFormat(f));
            c.text = B(f, { point: d, series: b }, this.chart);
          });
          return e.text;
        };
        a.prototype.update = function (d) {
          this.destroy();
          J(!0, this.chart.options.tooltip.userOptions, d);
          this.init(this.chart, J(!0, this.options, d));
        };
        a.prototype.updatePosition = function (d) {
          var c = this.chart,
            b = this.options,
            a = c.pointer,
            g = this.getLabel();
          a = a.getChartPosition();
          var f = (b.positioner || this.getPosition).call(
              this,
              g.width,
              g.height,
              d
            ),
            k = d.plotX + c.plotLeft;
          d = d.plotY + c.plotTop;
          if (this.outside) {
            b = b.borderWidth + 2 * this.distance;
            this.renderer.setSize(g.width + b, g.height + b, !1);
            if (1 !== a.scaleX || 1 !== a.scaleY)
              e(this.container, {
                transform: "scale("
                  .concat(a.scaleX, ", ")
                  .concat(a.scaleY, ")"),
              }),
                (k *= a.scaleX),
                (d *= a.scaleY);
            k += a.left - f.x;
            d += a.top - f.y;
          }
          this.move(Math.round(f.x), Math.round(f.y || 0), k, d);
        };
        return a;
      })();
      ("");
      return a;
    }
  );
  L(
    f,
    "Core/Series/Point.js",
    [
      f["Core/Renderer/HTML/AST.js"],
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y) {
      var B = f.animObject,
        I = A.defaultOptions,
        v = G.format,
        r = y.addEvent,
        p = y.defined,
        e = y.erase,
        c = y.extend,
        k = y.fireEvent,
        g = y.getNestedProperty,
        l = y.isArray,
        m = y.isFunction,
        z = y.isNumber,
        N = y.isObject,
        J = y.merge,
        D = y.objectEach,
        E = y.pick,
        t = y.syncTimeout,
        x = y.removeEvent,
        d = y.uniqueKey;
      f = (function () {
        function h() {
          this.colorIndex = this.category = void 0;
          this.formatPrefix = "point";
          this.id = void 0;
          this.isNull = !1;
          this.percentage = this.options = this.name = void 0;
          this.selected = !1;
          this.total = this.shapeArgs = this.series = void 0;
          this.visible = !0;
          this.x = void 0;
        }
        h.prototype.animateBeforeDestroy = function () {
          var b = this,
            d = { x: b.startXPos, opacity: 0 },
            a = b.getGraphicalProps();
          a.singular.forEach(function (c) {
            b[c] = b[c].animate(
              "dataLabel" === c
                ? { x: b[c].startXPos, y: b[c].startYPos, opacity: 0 }
                : d
            );
          });
          a.plural.forEach(function (d) {
            b[d].forEach(function (d) {
              d.element &&
                d.animate(
                  c(
                    { x: b.startXPos },
                    d.startYPos ? { x: d.startXPos, y: d.startYPos } : {}
                  )
                );
            });
          });
        };
        h.prototype.applyOptions = function (b, d) {
          var a = this.series,
            e = a.options.pointValKey || a.pointValKey;
          b = h.prototype.optionsToObject.call(this, b);
          c(this, b);
          this.options = this.options ? c(this.options, b) : b;
          b.group && delete this.group;
          b.dataLabels && delete this.dataLabels;
          e && (this.y = h.prototype.getNestedProperty.call(this, e));
          this.formatPrefix = (this.isNull = E(
            this.isValid && !this.isValid(),
            null === this.x || !z(this.y)
          ))
            ? "null"
            : "point";
          this.selected && (this.state = "select");
          "name" in this &&
            "undefined" === typeof d &&
            a.xAxis &&
            a.xAxis.hasNames &&
            (this.x = a.xAxis.nameToX(this));
          "undefined" === typeof this.x && a
            ? (this.x = "undefined" === typeof d ? a.autoIncrement() : d)
            : z(b.x) &&
              a.options.relativeXValue &&
              (this.x = a.autoIncrement(b.x));
          return this;
        };
        h.prototype.destroy = function () {
          function b() {
            if (d.graphic || d.dataLabel || d.dataLabels)
              x(d), d.destroyElements();
            for (f in d) d[f] = null;
          }
          var d = this,
            c = d.series,
            a = c.chart;
          c = c.options.dataSorting;
          var h = a.hoverPoints,
            g = B(d.series.chart.renderer.globalAnimation),
            f;
          d.legendItem && a.legend.destroyItem(d);
          h && (d.setState(), e(h, d), h.length || (a.hoverPoints = null));
          if (d === a.hoverPoint) d.onMouseOut();
          c && c.enabled
            ? (this.animateBeforeDestroy(), t(b, g.duration))
            : b();
          a.pointCount--;
        };
        h.prototype.destroyElements = function (b) {
          var d = this;
          b = d.getGraphicalProps(b);
          b.singular.forEach(function (b) {
            d[b] = d[b].destroy();
          });
          b.plural.forEach(function (b) {
            d[b].forEach(function (b) {
              b.element && b.destroy();
            });
            delete d[b];
          });
        };
        h.prototype.firePointEvent = function (b, d, c) {
          var a = this,
            e = this.series.options;
          (e.point.events[b] ||
            (a.options && a.options.events && a.options.events[b])) &&
            a.importEvents();
          "click" === b &&
            e.allowPointSelect &&
            (c = function (b) {
              a.select && a.select(null, b.ctrlKey || b.metaKey || b.shiftKey);
            });
          k(a, b, d, c);
        };
        h.prototype.getClassName = function () {
          return (
            "highcharts-point" +
            (this.selected ? " highcharts-point-select" : "") +
            (this.negative ? " highcharts-negative" : "") +
            (this.isNull ? " highcharts-null-point" : "") +
            ("undefined" !== typeof this.colorIndex
              ? " highcharts-color-" + this.colorIndex
              : "") +
            (this.options.className ? " " + this.options.className : "") +
            (this.zone && this.zone.className
              ? " " + this.zone.className.replace("highcharts-negative", "")
              : "")
          );
        };
        h.prototype.getGraphicalProps = function (b) {
          var d = this,
            c = [],
            a = { singular: [], plural: [] },
            e;
          b = b || { graphic: 1, dataLabel: 1 };
          b.graphic && c.push("graphic", "upperGraphic", "shadowGroup");
          b.dataLabel &&
            c.push("dataLabel", "dataLabelPath", "dataLabelUpper", "connector");
          for (e = c.length; e--; ) {
            var h = c[e];
            d[h] && a.singular.push(h);
          }
          ["dataLabel", "connector"].forEach(function (c) {
            var e = c + "s";
            b[c] && d[e] && a.plural.push(e);
          });
          return a;
        };
        h.prototype.getLabelConfig = function () {
          return {
            x: this.category,
            y: this.y,
            color: this.color,
            colorIndex: this.colorIndex,
            key: this.name || this.category,
            series: this.series,
            point: this,
            percentage: this.percentage,
            total: this.total || this.stackTotal,
          };
        };
        h.prototype.getNestedProperty = function (b) {
          if (b)
            return 0 === b.indexOf("custom.") ? g(b, this.options) : this[b];
        };
        h.prototype.getZone = function () {
          var b = this.series,
            d = b.zones;
          b = b.zoneAxis || "y";
          var c,
            a = 0;
          for (c = d[a]; this[b] >= c.value; ) c = d[++a];
          this.nonZonedColor || (this.nonZonedColor = this.color);
          this.color =
            c && c.color && !this.options.color ? c.color : this.nonZonedColor;
          return c;
        };
        h.prototype.hasNewShapeType = function () {
          return (
            (this.graphic &&
              (this.graphic.symbolName || this.graphic.element.nodeName)) !==
            this.shapeType
          );
        };
        h.prototype.init = function (b, c, a) {
          this.series = b;
          this.applyOptions(c, a);
          this.id = p(this.id) ? this.id : d();
          this.resolveColor();
          b.chart.pointCount++;
          k(this, "afterInit");
          return this;
        };
        h.prototype.optionsToObject = function (b) {
          var d = this.series,
            c = d.options.keys,
            a = c || d.pointArrayMap || ["y"],
            e = a.length,
            g = {},
            f = 0,
            k = 0;
          if (z(b) || null === b) g[a[0]] = b;
          else if (l(b))
            for (
              !c &&
              b.length > e &&
              ((d = typeof b[0]),
              "string" === d ? (g.name = b[0]) : "number" === d && (g.x = b[0]),
              f++);
              k < e;

            )
              (c && "undefined" === typeof b[f]) ||
                (0 < a[k].indexOf(".")
                  ? h.prototype.setNestedProperty(g, b[f], a[k])
                  : (g[a[k]] = b[f])),
                f++,
                k++;
          else
            "object" === typeof b &&
              ((g = b),
              b.dataLabels && (d._hasPointLabels = !0),
              b.marker && (d._hasPointMarkers = !0));
          return g;
        };
        h.prototype.resolveColor = function () {
          var b = this.series,
            d = b.chart.styledMode;
          var c = b.chart.options.chart.colorCount;
          delete this.nonZonedColor;
          if (b.options.colorByPoint) {
            if (!d) {
              c = b.options.colors || b.chart.options.colors;
              var a = c[b.colorCounter];
              c = c.length;
            }
            d = b.colorCounter;
            b.colorCounter++;
            b.colorCounter === c && (b.colorCounter = 0);
          } else d || (a = b.color), (d = b.colorIndex);
          this.colorIndex = E(this.options.colorIndex, d);
          this.color = E(this.options.color, a);
        };
        h.prototype.setNestedProperty = function (b, d, c) {
          c.split(".").reduce(function (b, c, a, e) {
            b[c] = e.length - 1 === a ? d : N(b[c], !0) ? b[c] : {};
            return b[c];
          }, b);
          return b;
        };
        h.prototype.tooltipFormatter = function (b) {
          var d = this.series,
            c = d.tooltipOptions,
            a = E(c.valueDecimals, ""),
            e = c.valuePrefix || "",
            h = c.valueSuffix || "";
          d.chart.styledMode && (b = d.chart.tooltip.styledModeFormat(b));
          (d.pointArrayMap || ["y"]).forEach(function (d) {
            d = "{point." + d;
            if (e || h) b = b.replace(RegExp(d + "}", "g"), e + d + "}" + h);
            b = b.replace(RegExp(d + "}", "g"), d + ":,." + a + "f}");
          });
          return v(b, { point: this, series: this.series }, d.chart);
        };
        h.prototype.update = function (b, d, c, a) {
          function e() {
            h.applyOptions(b);
            var a = f && h.hasDummyGraphic;
            a = null === h.y ? !a : a;
            f && a && ((h.graphic = f.destroy()), delete h.hasDummyGraphic);
            N(b, !0) &&
              (f &&
                f.element &&
                b &&
                b.marker &&
                "undefined" !== typeof b.marker.symbol &&
                (h.graphic = f.destroy()),
              b &&
                b.dataLabels &&
                h.dataLabel &&
                (h.dataLabel = h.dataLabel.destroy()),
              h.connector && (h.connector = h.connector.destroy()));
            q = h.index;
            g.updateParallelArrays(h, q);
            n.data[q] =
              N(n.data[q], !0) || N(b, !0) ? h.options : E(b, n.data[q]);
            g.isDirty = g.isDirtyData = !0;
            !g.fixedBox && g.hasCartesianSeries && (k.isDirtyBox = !0);
            "point" === n.legendType && (k.isDirtyLegend = !0);
            d && k.redraw(c);
          }
          var h = this,
            g = h.series,
            f = h.graphic,
            k = g.chart,
            n = g.options,
            q;
          d = E(d, !0);
          !1 === a ? e() : h.firePointEvent("update", { options: b }, e);
        };
        h.prototype.remove = function (b, d) {
          this.series.removePoint(this.series.data.indexOf(this), b, d);
        };
        h.prototype.select = function (b, d) {
          var c = this,
            a = c.series,
            e = a.chart;
          this.selectedStaging = b = E(b, !c.selected);
          c.firePointEvent(
            b ? "select" : "unselect",
            { accumulate: d },
            function () {
              c.selected = c.options.selected = b;
              a.options.data[a.data.indexOf(c)] = c.options;
              c.setState(b && "select");
              d ||
                e.getSelectedPoints().forEach(function (b) {
                  var d = b.series;
                  b.selected &&
                    b !== c &&
                    ((b.selected = b.options.selected = !1),
                    (d.options.data[d.data.indexOf(b)] = b.options),
                    b.setState(
                      e.hoverPoints && d.options.inactiveOtherPoints
                        ? "inactive"
                        : ""
                    ),
                    b.firePointEvent("unselect"));
                });
            }
          );
          delete this.selectedStaging;
        };
        h.prototype.onMouseOver = function (b) {
          var d = this.series.chart,
            c = d.pointer;
          b = b
            ? c.normalize(b)
            : c.getChartCoordinatesFromPoint(this, d.inverted);
          c.runPointActions(b, this);
        };
        h.prototype.onMouseOut = function () {
          var b = this.series.chart;
          this.firePointEvent("mouseOut");
          this.series.options.inactiveOtherPoints ||
            (b.hoverPoints || []).forEach(function (b) {
              b.setState();
            });
          b.hoverPoints = b.hoverPoint = null;
        };
        h.prototype.importEvents = function () {
          if (!this.hasImportedEvents) {
            var b = this,
              d = J(b.series.options.point, b.options).events;
            b.events = d;
            D(d, function (d, c) {
              m(d) && r(b, c, d);
            });
            this.hasImportedEvents = !0;
          }
        };
        h.prototype.setState = function (b, d) {
          var e = this.series,
            h = this.state,
            g = e.options.states[b || "normal"] || {},
            f = I.plotOptions[e.type].marker && e.options.marker,
            q = f && !1 === f.enabled,
            t = (f && f.states && f.states[b || "normal"]) || {},
            x = !1 === t.enabled,
            m = this.marker || {},
            l = e.chart,
            p = f && e.markerAttribs,
            r = e.halo,
            D,
            v = e.stateMarkerGraphic;
          b = b || "";
          if (
            !(
              (b === this.state && !d) ||
              (this.selected && "select" !== b) ||
              !1 === g.enabled ||
              (b && (x || (q && !1 === t.enabled))) ||
              (b && m.states && m.states[b] && !1 === m.states[b].enabled)
            )
          ) {
            this.state = b;
            p && (D = e.markerAttribs(this, b));
            if (this.graphic && !this.hasDummyGraphic) {
              h && this.graphic.removeClass("highcharts-point-" + h);
              b && this.graphic.addClass("highcharts-point-" + b);
              if (!l.styledMode) {
                var J = e.pointAttribs(this, b);
                var H = E(l.options.chart.animation, g.animation);
                e.options.inactiveOtherPoints &&
                  z(J.opacity) &&
                  ((this.dataLabels || []).forEach(function (b) {
                    b && b.animate({ opacity: J.opacity }, H);
                  }),
                  this.connector &&
                    this.connector.animate({ opacity: J.opacity }, H));
                this.graphic.animate(J, H);
              }
              D &&
                this.graphic.animate(
                  D,
                  E(l.options.chart.animation, t.animation, f.animation)
                );
              v && v.hide();
            } else {
              if (b && t) {
                h = m.symbol || e.symbol;
                v && v.currentSymbol !== h && (v = v.destroy());
                if (D)
                  if (v) v[d ? "animate" : "attr"]({ x: D.x, y: D.y });
                  else
                    h &&
                      ((e.stateMarkerGraphic = v =
                        l.renderer
                          .symbol(h, D.x, D.y, D.width, D.height)
                          .add(e.markerGroup)),
                      (v.currentSymbol = h));
                !l.styledMode &&
                  v &&
                  "inactive" !== this.state &&
                  v.attr(e.pointAttribs(this, b));
              }
              v &&
                (v[b && this.isInside ? "show" : "hide"](),
                (v.element.point = this),
                v.addClass(this.getClassName(), !0));
            }
            g = g.halo;
            D = ((v = this.graphic || v) && v.visibility) || "inherit";
            g && g.size && v && "hidden" !== D && !this.isCluster
              ? (r || (e.halo = r = l.renderer.path().add(v.parentGroup)),
                r.show()[d ? "animate" : "attr"]({ d: this.haloPath(g.size) }),
                r.attr({
                  class:
                    "highcharts-halo highcharts-color-" +
                    E(this.colorIndex, e.colorIndex) +
                    (this.className ? " " + this.className : ""),
                  visibility: D,
                  zIndex: -1,
                }),
                (r.point = this),
                l.styledMode ||
                  r.attr(
                    c(
                      {
                        fill: this.color || e.color,
                        "fill-opacity": g.opacity,
                      },
                      a.filterUserAttributes(g.attributes || {})
                    )
                  ))
              : r &&
                r.point &&
                r.point.haloPath &&
                r.animate({ d: r.point.haloPath(0) }, null, r.hide);
            k(this, "afterSetState", { state: b });
          }
        };
        h.prototype.haloPath = function (b) {
          return this.series.chart.renderer.symbols.circle(
            Math.floor(this.plotX) - b,
            this.plotY - b,
            2 * b,
            2 * b
          );
        };
        return h;
      })();
      ("");
      return f;
    }
  );
  L(
    f,
    "Core/Pointer.js",
    [
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Tooltip.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B = a.parse,
        F = f.charts,
        I = f.noop,
        v = G.addEvent,
        r = G.attr,
        p = G.css,
        e = G.defined,
        c = G.extend,
        k = G.find,
        g = G.fireEvent,
        l = G.isNumber,
        m = G.isObject,
        z = G.objectEach,
        N = G.offset,
        J = G.pick,
        D = G.splat;
      a = (function () {
        function a(c, a) {
          this.lastValidTouch = {};
          this.pinchDown = [];
          this.runChartClick = !1;
          this.eventsToUnbind = [];
          this.chart = c;
          this.hasDragged = !1;
          this.options = a;
          this.init(c, a);
        }
        a.prototype.applyInactiveState = function (c) {
          var a = [],
            d;
          (c || []).forEach(function (c) {
            d = c.series;
            a.push(d);
            d.linkedParent && a.push(d.linkedParent);
            d.linkedSeries && (a = a.concat(d.linkedSeries));
            d.navigatorSeries && a.push(d.navigatorSeries);
          });
          this.chart.series.forEach(function (d) {
            -1 === a.indexOf(d)
              ? d.setState("inactive", !0)
              : d.options.inactiveOtherPoints &&
                d.setAllPointsToState("inactive");
          });
        };
        a.prototype.destroy = function () {
          var c = this;
          this.eventsToUnbind.forEach(function (c) {
            return c();
          });
          this.eventsToUnbind = [];
          f.chartCount ||
            (a.unbindDocumentMouseUp &&
              (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()),
            a.unbindDocumentTouchEnd &&
              (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd()));
          clearInterval(c.tooltipTimeout);
          z(c, function (a, d) {
            c[d] = void 0;
          });
        };
        a.prototype.drag = function (c) {
          var a = this.chart,
            d = a.options.chart,
            e = this.zoomHor,
            b = this.zoomVert,
            g = a.plotLeft,
            f = a.plotTop,
            k = a.plotWidth,
            t = a.plotHeight,
            l = this.mouseDownX || 0,
            p = this.mouseDownY || 0,
            r = m(d.panning) ? d.panning && d.panning.enabled : d.panning,
            z = d.panKey && c[d.panKey + "Key"],
            D = c.chartX,
            C = c.chartY,
            E = this.selectionMarker;
          if (!E || !E.touch)
            if (
              (D < g ? (D = g) : D > g + k && (D = g + k),
              C < f ? (C = f) : C > f + t && (C = f + t),
              (this.hasDragged = Math.sqrt(
                Math.pow(l - D, 2) + Math.pow(p - C, 2)
              )),
              10 < this.hasDragged)
            ) {
              var v = a.isInsidePlot(l - g, p - f, { visiblePlotOnly: !0 });
              (!a.hasCartesianSeries && !a.mapView) ||
                (!this.zoomX && !this.zoomY) ||
                !v ||
                z ||
                E ||
                ((this.selectionMarker = E =
                  a.renderer
                    .rect(g, f, e ? 1 : k, b ? 1 : t, 0)
                    .attr({ class: "highcharts-selection-marker", zIndex: 7 })
                    .add()),
                a.styledMode ||
                  E.attr({
                    fill:
                      d.selectionMarkerFill ||
                      B("#335cad").setOpacity(0.25).get(),
                  }));
              E &&
                e &&
                ((e = D - l),
                E.attr({ width: Math.abs(e), x: (0 < e ? 0 : e) + l }));
              E &&
                b &&
                ((e = C - p),
                E.attr({ height: Math.abs(e), y: (0 < e ? 0 : e) + p }));
              v && !E && r && a.pan(c, d.panning);
            }
        };
        a.prototype.dragStart = function (c) {
          var a = this.chart;
          a.mouseIsDown = c.type;
          a.cancelClick = !1;
          a.mouseDownX = this.mouseDownX = c.chartX;
          a.mouseDownY = this.mouseDownY = c.chartY;
        };
        a.prototype.drop = function (a) {
          var f = this,
            d = this.chart,
            h = this.hasPinched;
          if (this.selectionMarker) {
            var b = this.selectionMarker,
              k = b.attr ? b.attr("x") : b.x,
              n = b.attr ? b.attr("y") : b.y,
              t = b.attr ? b.attr("width") : b.width,
              m = b.attr ? b.attr("height") : b.height,
              w = {
                originalEvent: a,
                xAxis: [],
                yAxis: [],
                x: k,
                y: n,
                width: t,
                height: m,
              },
              r = !!d.mapView;
            if (this.hasDragged || h)
              d.axes.forEach(function (b) {
                if (
                  b.zoomEnabled &&
                  e(b.min) &&
                  (h || f[{ xAxis: "zoomX", yAxis: "zoomY" }[b.coll]]) &&
                  l(k) &&
                  l(n)
                ) {
                  var d = b.horiz,
                    c = "touchend" === a.type ? b.minPixelPadding : 0,
                    g = b.toValue((d ? k : n) + c);
                  d = b.toValue((d ? k + t : n + m) - c);
                  w[b.coll].push({
                    axis: b,
                    min: Math.min(g, d),
                    max: Math.max(g, d),
                  });
                  r = !0;
                }
              }),
                r &&
                  g(d, "selection", w, function (b) {
                    d.zoom(c(b, h ? { animation: !1 } : null));
                  });
            l(d.index) &&
              (this.selectionMarker = this.selectionMarker.destroy());
            h && this.scaleGroups();
          }
          d &&
            l(d.index) &&
            (p(d.container, { cursor: d._cursor }),
            (d.cancelClick = 10 < this.hasDragged),
            (d.mouseIsDown = this.hasDragged = this.hasPinched = !1),
            (this.pinchDown = []));
        };
        a.prototype.findNearestKDPoint = function (c, a, d) {
          var e = this.chart,
            b = e.hoverPoint;
          e = e.tooltip;
          if (b && e && e.isStickyOnContact()) return b;
          var g;
          c.forEach(function (b) {
            var c =
              !(b.noSharedTooltip && a) &&
              0 > b.options.findNearestPointBy.indexOf("y");
            b = b.searchPoint(d, c);
            if ((c = m(b, !0) && b.series) && !(c = !m(g, !0))) {
              c = g.distX - b.distX;
              var e = g.dist - b.dist,
                h =
                  (b.series.group && b.series.group.zIndex) -
                  (g.series.group && g.series.group.zIndex);
              c =
                0 <
                (0 !== c && a
                  ? c
                  : 0 !== e
                  ? e
                  : 0 !== h
                  ? h
                  : g.series.index > b.series.index
                  ? -1
                  : 1);
            }
            c && (g = b);
          });
          return g;
        };
        a.prototype.getChartCoordinatesFromPoint = function (c, a) {
          var d = c.series,
            e = d.xAxis;
          d = d.yAxis;
          var b = c.shapeArgs;
          if (e && d) {
            var g = J(c.clientX, c.plotX),
              f = c.plotY || 0;
            c.isNode && b && l(b.x) && l(b.y) && ((g = b.x), (f = b.y));
            return a
              ? { chartX: d.len + d.pos - f, chartY: e.len + e.pos - g }
              : { chartX: g + e.pos, chartY: f + d.pos };
          }
          if (b && b.x && b.y) return { chartX: b.x, chartY: b.y };
        };
        a.prototype.getChartPosition = function () {
          if (this.chartPosition) return this.chartPosition;
          var c = this.chart.container,
            a = N(c);
          this.chartPosition = {
            left: a.left,
            top: a.top,
            scaleX: 1,
            scaleY: 1,
          };
          var d = c.offsetWidth;
          c = c.offsetHeight;
          2 < d &&
            2 < c &&
            ((this.chartPosition.scaleX = a.width / d),
            (this.chartPosition.scaleY = a.height / c));
          return this.chartPosition;
        };
        a.prototype.getCoordinates = function (c) {
          var a = { xAxis: [], yAxis: [] };
          this.chart.axes.forEach(function (d) {
            a[d.isXAxis ? "xAxis" : "yAxis"].push({
              axis: d,
              value: d.toValue(c[d.horiz ? "chartX" : "chartY"]),
            });
          });
          return a;
        };
        a.prototype.getHoverData = function (c, a, d, e, b, f) {
          var h = [];
          e = !(!e || !c);
          var q = function (d) {
              return (
                d.visible &&
                !(!b && d.directTouch) &&
                J(d.options.enableMouseTracking, !0)
              );
            },
            t = {
              chartX: f ? f.chartX : void 0,
              chartY: f ? f.chartY : void 0,
              shared: b,
            };
          g(this, "beforeGetHoverData", t);
          var l =
            a && !a.stickyTracking
              ? [a]
              : d.filter(function (b) {
                  return b.stickyTracking && (t.filter || q)(b);
                });
          var x = e || !f ? c : this.findNearestKDPoint(l, b, f);
          a = x && x.series;
          x &&
            (b && !a.noSharedTooltip
              ? ((l = d.filter(function (b) {
                  return t.filter ? t.filter(b) : q(b) && !b.noSharedTooltip;
                })),
                l.forEach(function (b) {
                  var d = k(b.points, function (b) {
                    return b.x === x.x && !b.isNull;
                  });
                  m(d) &&
                    (b.boosted && b.boost && (d = b.boost.getPoint(d)),
                    h.push(d));
                }))
              : h.push(x));
          t = { hoverPoint: x };
          g(this, "afterGetHoverData", t);
          return { hoverPoint: t.hoverPoint, hoverSeries: a, hoverPoints: h };
        };
        a.prototype.getPointFromEvent = function (c) {
          c = c.target;
          for (var a; c && !a; ) (a = c.point), (c = c.parentNode);
          return a;
        };
        a.prototype.onTrackerMouseOut = function (c) {
          c = c.relatedTarget || c.toElement;
          var a = this.chart.hoverSeries;
          this.isDirectTouch = !1;
          if (
            !(
              !a ||
              !c ||
              a.stickyTracking ||
              this.inClass(c, "highcharts-tooltip") ||
              (this.inClass(c, "highcharts-series-" + a.index) &&
                this.inClass(c, "highcharts-tracker"))
            )
          )
            a.onMouseOut();
        };
        a.prototype.inClass = function (c, a) {
          for (var d; c; ) {
            if ((d = r(c, "class"))) {
              if (-1 !== d.indexOf(a)) return !0;
              if (-1 !== d.indexOf("highcharts-container")) return !1;
            }
            c = c.parentElement;
          }
        };
        a.prototype.init = function (c, a) {
          this.options = a;
          this.chart = c;
          this.runChartClick = !(!a.chart.events || !a.chart.events.click);
          this.pinchDown = [];
          this.lastValidTouch = {};
          A &&
            ((c.tooltip = new A(c, a.tooltip)),
            (this.followTouchMove = J(a.tooltip.followTouchMove, !0)));
          this.setDOMEvents();
        };
        a.prototype.normalize = function (a, e) {
          var d = a.touches,
            h = d
              ? d.length
                ? d.item(0)
                : J(d.changedTouches, a.changedTouches)[0]
              : a;
          e || (e = this.getChartPosition());
          d = h.pageX - e.left;
          h = h.pageY - e.top;
          d /= e.scaleX;
          h /= e.scaleY;
          return c(a, { chartX: Math.round(d), chartY: Math.round(h) });
        };
        a.prototype.onContainerClick = function (a) {
          var e = this.chart,
            d = e.hoverPoint;
          a = this.normalize(a);
          var h = e.plotLeft,
            b = e.plotTop;
          e.cancelClick ||
            (d && this.inClass(a.target, "highcharts-tracker")
              ? (g(d.series, "click", c(a, { point: d })),
                e.hoverPoint && d.firePointEvent("click", a))
              : (c(a, this.getCoordinates(a)),
                e.isInsidePlot(a.chartX - h, a.chartY - b, {
                  visiblePlotOnly: !0,
                }) && g(e, "click", a)));
        };
        a.prototype.onContainerMouseDown = function (c) {
          var a = 1 === ((c.buttons || c.button) & 1);
          c = this.normalize(c);
          if (f.isFirefox && 0 !== c.button) this.onContainerMouseMove(c);
          if ("undefined" === typeof c.button || a)
            this.zoomOption(c),
              a && c.preventDefault && c.preventDefault(),
              this.dragStart(c);
        };
        a.prototype.onContainerMouseLeave = function (c) {
          var e = F[J(a.hoverChartIndex, -1)],
            d = this.chart.tooltip;
          (d &&
            d.shouldStickOnContact() &&
            this.inClass(c.relatedTarget, "highcharts-tooltip-container")) ||
            ((c = this.normalize(c)),
            e &&
              (c.relatedTarget || c.toElement) &&
              (e.pointer.reset(), (e.pointer.chartPosition = void 0)),
            d && !d.isHidden && this.reset());
        };
        a.prototype.onContainerMouseEnter = function (c) {
          delete this.chartPosition;
        };
        a.prototype.onContainerMouseMove = function (c) {
          var a = this.chart;
          c = this.normalize(c);
          this.setHoverChartIndex();
          c.preventDefault || (c.returnValue = !1);
          ("mousedown" === a.mouseIsDown || this.touchSelect(c)) &&
            this.drag(c);
          a.openMenu ||
            (!this.inClass(c.target, "highcharts-tracker") &&
              !a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, {
                visiblePlotOnly: !0,
              })) ||
            (this.inClass(c.target, "highcharts-no-tooltip")
              ? this.reset(!1, 0)
              : this.runPointActions(c));
        };
        a.prototype.onDocumentTouchEnd = function (c) {
          var e = F[J(a.hoverChartIndex, -1)];
          e && e.pointer.drop(c);
        };
        a.prototype.onContainerTouchMove = function (c) {
          if (this.touchSelect(c)) this.onContainerMouseMove(c);
          else this.touch(c);
        };
        a.prototype.onContainerTouchStart = function (c) {
          if (this.touchSelect(c)) this.onContainerMouseDown(c);
          else this.zoomOption(c), this.touch(c, !0);
        };
        a.prototype.onDocumentMouseMove = function (c) {
          var a = this.chart,
            d = this.chartPosition;
          c = this.normalize(c, d);
          var e = a.tooltip;
          !d ||
            (e && e.isStickyOnContact()) ||
            a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, {
              visiblePlotOnly: !0,
            }) ||
            this.inClass(c.target, "highcharts-tracker") ||
            this.reset();
        };
        a.prototype.onDocumentMouseUp = function (c) {
          var e = F[J(a.hoverChartIndex, -1)];
          e && e.pointer.drop(c);
        };
        a.prototype.pinch = function (a) {
          var e = this,
            d = e.chart,
            h = e.pinchDown,
            b = a.touches || [],
            f = b.length,
            k = e.lastValidTouch,
            u = e.hasZoom,
            m = {},
            l =
              1 === f &&
              ((e.inClass(a.target, "highcharts-tracker") &&
                d.runTrackerClick) ||
                e.runChartClick),
            t = {},
            p = e.selectionMarker;
          1 < f
            ? (e.initiated = !0)
            : 1 === f && this.followTouchMove && (e.initiated = !1);
          u && e.initiated && !l && !1 !== a.cancelable && a.preventDefault();
          [].map.call(b, function (b) {
            return e.normalize(b);
          });
          "touchstart" === a.type
            ? ([].forEach.call(b, function (b, c) {
                h[c] = { chartX: b.chartX, chartY: b.chartY };
              }),
              (k.x = [h[0].chartX, h[1] && h[1].chartX]),
              (k.y = [h[0].chartY, h[1] && h[1].chartY]),
              d.axes.forEach(function (b) {
                if (b.zoomEnabled) {
                  var c = d.bounds[b.horiz ? "h" : "v"],
                    a = b.minPixelPadding,
                    e = b.toPixels(
                      Math.min(J(b.options.min, b.dataMin), b.dataMin)
                    ),
                    h = b.toPixels(
                      Math.max(J(b.options.max, b.dataMax), b.dataMax)
                    ),
                    g = Math.max(e, h);
                  c.min = Math.min(b.pos, Math.min(e, h) - a);
                  c.max = Math.max(b.pos + b.len, g + a);
                }
              }),
              (e.res = !0))
            : e.followTouchMove && 1 === f
            ? this.runPointActions(e.normalize(a))
            : h.length &&
              (g(d, "touchpan", { originalEvent: a }, function () {
                p ||
                  (e.selectionMarker = p =
                    c({ destroy: I, touch: !0 }, d.plotBox));
                e.pinchTranslate(h, b, m, p, t, k);
                e.hasPinched = u;
                e.scaleGroups(m, t);
              }),
              e.res && ((e.res = !1), this.reset(!1, 0)));
        };
        a.prototype.pinchTranslate = function (c, a, d, e, b, g) {
          this.zoomHor && this.pinchTranslateDirection(!0, c, a, d, e, b, g);
          this.zoomVert && this.pinchTranslateDirection(!1, c, a, d, e, b, g);
        };
        a.prototype.pinchTranslateDirection = function (
          c,
          a,
          d,
          e,
          b,
          g,
          f,
          k
        ) {
          var h = this.chart,
            n = c ? "x" : "y",
            q = c ? "X" : "Y",
            u = "chart" + q,
            m = c ? "width" : "height",
            l = h["plot" + (c ? "Left" : "Top")],
            t = h.inverted,
            p = h.bounds[c ? "h" : "v"],
            x = 1 === a.length,
            r = a[0][u],
            z = !x && a[1][u];
          a = function () {
            "number" === typeof E &&
              20 < Math.abs(r - z) &&
              (T = k || Math.abs(O - E) / Math.abs(r - z));
            H = (l - O) / T + r;
            D = h["plot" + (c ? "Width" : "Height")] / T;
          };
          var D,
            H,
            T = k || 1,
            O = d[0][u],
            E = !x && d[1][u];
          a();
          d = H;
          if (d < p.min) {
            d = p.min;
            var U = !0;
          } else d + D > p.max && ((d = p.max - D), (U = !0));
          U
            ? ((O -= 0.8 * (O - f[n][0])),
              "number" === typeof E && (E -= 0.8 * (E - f[n][1])),
              a())
            : (f[n] = [O, E]);
          t || ((g[n] = H - l), (g[m] = D));
          g = t ? 1 / T : T;
          b[m] = D;
          b[n] = d;
          e[t ? (c ? "scaleY" : "scaleX") : "scale" + q] = T;
          e["translate" + q] = g * l + (O - g * r);
        };
        a.prototype.reset = function (c, a) {
          var d = this.chart,
            e = d.hoverSeries,
            b = d.hoverPoint,
            g = d.hoverPoints,
            f = d.tooltip,
            k = f && f.shared ? g : b;
          c &&
            k &&
            D(k).forEach(function (b) {
              b.series.isCartesian &&
                "undefined" === typeof b.plotX &&
                (c = !1);
            });
          if (c)
            f &&
              k &&
              D(k).length &&
              (f.refresh(k),
              f.shared && g
                ? g.forEach(function (b) {
                    b.setState(b.state, !0);
                    b.series.isCartesian &&
                      (b.series.xAxis.crosshair &&
                        b.series.xAxis.drawCrosshair(null, b),
                      b.series.yAxis.crosshair &&
                        b.series.yAxis.drawCrosshair(null, b));
                  })
                : b &&
                  (b.setState(b.state, !0),
                  d.axes.forEach(function (c) {
                    c.crosshair &&
                      b.series[c.coll] === c &&
                      c.drawCrosshair(null, b);
                  })));
          else {
            if (b) b.onMouseOut();
            g &&
              g.forEach(function (b) {
                b.setState();
              });
            if (e) e.onMouseOut();
            f && f.hide(a);
            this.unDocMouseMove &&
              (this.unDocMouseMove = this.unDocMouseMove());
            d.axes.forEach(function (b) {
              b.hideCrosshair();
            });
            this.hoverX = d.hoverPoints = d.hoverPoint = null;
          }
        };
        a.prototype.runPointActions = function (c, e) {
          var d = this.chart,
            h = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            b = h ? h.shared : !1,
            g = e || d.hoverPoint,
            f = (g && g.series) || d.hoverSeries;
          e = this.getHoverData(
            g,
            f,
            d.series,
            (!c || "touchmove" !== c.type) &&
              (!!e || (f && f.directTouch && this.isDirectTouch)),
            b,
            c
          );
          g = e.hoverPoint;
          f = e.hoverSeries;
          var u = e.hoverPoints;
          e = f && f.tooltipOptions.followPointer && !f.tooltipOptions.split;
          var m = b && f && !f.noSharedTooltip;
          if (g && (g !== d.hoverPoint || (h && h.isHidden))) {
            (d.hoverPoints || []).forEach(function (b) {
              -1 === u.indexOf(b) && b.setState();
            });
            if (d.hoverSeries !== f) f.onMouseOver();
            this.applyInactiveState(u);
            (u || []).forEach(function (b) {
              b.setState("hover");
            });
            d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
            if (!g.series) return;
            d.hoverPoints = u;
            d.hoverPoint = g;
            g.firePointEvent("mouseOver", void 0, function () {
              h && g && h.refresh(m ? u : g, c);
            });
          } else
            e &&
              h &&
              !h.isHidden &&
              ((b = h.getAnchor([{}], c)),
              d.isInsidePlot(b[0], b[1], { visiblePlotOnly: !0 }) &&
                h.updatePosition({ plotX: b[0], plotY: b[1] }));
          this.unDocMouseMove ||
            ((this.unDocMouseMove = v(
              d.container.ownerDocument,
              "mousemove",
              function (b) {
                var c = F[a.hoverChartIndex];
                if (c) c.pointer.onDocumentMouseMove(b);
              }
            )),
            this.eventsToUnbind.push(this.unDocMouseMove));
          d.axes.forEach(function (b) {
            var a = J((b.crosshair || {}).snap, !0),
              e;
            a &&
              (((e = d.hoverPoint) && e.series[b.coll] === b) ||
                (e = k(u, function (c) {
                  return c.series && c.series[b.coll] === b;
                })));
            e || !a ? b.drawCrosshair(c, e) : b.hideCrosshair();
          });
        };
        a.prototype.scaleGroups = function (c, a) {
          var d = this.chart;
          d.series.forEach(function (e) {
            var b = c || e.getPlotBox();
            e.group &&
              ((e.xAxis && e.xAxis.zoomEnabled) || d.mapView) &&
              (e.group.attr(b),
              e.markerGroup &&
                (e.markerGroup.attr(b),
                e.markerGroup.clip(a ? d.clipRect : null)),
              e.dataLabelsGroup && e.dataLabelsGroup.attr(b));
          });
          d.clipRect.attr(a || d.clipBox);
        };
        a.prototype.setDOMEvents = function () {
          var c = this,
            e = this.chart.container,
            d = e.ownerDocument;
          e.onmousedown = this.onContainerMouseDown.bind(this);
          e.onmousemove = this.onContainerMouseMove.bind(this);
          e.onclick = this.onContainerClick.bind(this);
          this.eventsToUnbind.push(
            v(e, "mouseenter", this.onContainerMouseEnter.bind(this))
          );
          this.eventsToUnbind.push(
            v(e, "mouseleave", this.onContainerMouseLeave.bind(this))
          );
          a.unbindDocumentMouseUp ||
            (a.unbindDocumentMouseUp = v(
              d,
              "mouseup",
              this.onDocumentMouseUp.bind(this)
            ));
          for (
            var h = this.chart.renderTo.parentElement;
            h && "BODY" !== h.tagName;

          )
            this.eventsToUnbind.push(
              v(h, "scroll", function () {
                delete c.chartPosition;
              })
            ),
              (h = h.parentElement);
          f.hasTouch &&
            (this.eventsToUnbind.push(
              v(e, "touchstart", this.onContainerTouchStart.bind(this), {
                passive: !1,
              })
            ),
            this.eventsToUnbind.push(
              v(e, "touchmove", this.onContainerTouchMove.bind(this), {
                passive: !1,
              })
            ),
            a.unbindDocumentTouchEnd ||
              (a.unbindDocumentTouchEnd = v(
                d,
                "touchend",
                this.onDocumentTouchEnd.bind(this),
                { passive: !1 }
              )));
        };
        a.prototype.setHoverChartIndex = function () {
          var c = this.chart,
            e = f.charts[J(a.hoverChartIndex, -1)];
          if (e && e !== c)
            e.pointer.onContainerMouseLeave({ relatedTarget: c.container });
          (e && e.mouseIsDown) || (a.hoverChartIndex = c.index);
        };
        a.prototype.touch = function (c, a) {
          var d = this.chart,
            e;
          this.setHoverChartIndex();
          if (1 === c.touches.length)
            if (
              ((c = this.normalize(c)),
              (e = d.isInsidePlot(c.chartX - d.plotLeft, c.chartY - d.plotTop, {
                visiblePlotOnly: !0,
              })) && !d.openMenu)
            ) {
              a && this.runPointActions(c);
              if ("touchmove" === c.type) {
                a = this.pinchDown;
                var b = a[0]
                  ? 4 <=
                    Math.sqrt(
                      Math.pow(a[0].chartX - c.chartX, 2) +
                        Math.pow(a[0].chartY - c.chartY, 2)
                    )
                  : !1;
              }
              J(b, !0) && this.pinch(c);
            } else a && this.reset();
          else 2 === c.touches.length && this.pinch(c);
        };
        a.prototype.touchSelect = function (c) {
          return !(
            !this.chart.options.chart.zooming.singleTouch ||
            !c.touches ||
            1 !== c.touches.length
          );
        };
        a.prototype.zoomOption = function (c) {
          var a = this.chart,
            d = a.options.chart;
          a = a.inverted;
          var e = d.zooming.type || "";
          /touch/.test(c.type) && (e = J(d.zooming.pinchType, e));
          this.zoomX = c = /x/.test(e);
          this.zoomY = d = /y/.test(e);
          this.zoomHor = (c && !a) || (d && a);
          this.zoomVert = (d && !a) || (c && a);
          this.hasZoom = c || d;
        };
        return a;
      })();
      ("");
      return a;
    }
  );
  L(
    f,
    "Core/MSPointer.js",
    [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]],
    function (a, f, A) {
      function B() {
        var c = [];
        c.item = function (c) {
          return this[c];
        };
        k(l, function (a) {
          c.push({ pageX: a.pageX, pageY: a.pageY, target: a.target });
        });
        return c;
      }
      function y(c, a, e, g) {
        var k = I[f.hoverChartIndex || NaN];
        ("touch" !== c.pointerType &&
          c.pointerType !== c.MSPOINTER_TYPE_TOUCH) ||
          !k ||
          ((k = k.pointer),
          g(c),
          k[a]({
            type: e,
            target: c.currentTarget,
            preventDefault: r,
            touches: B(),
          }));
      }
      var F =
          (this && this.__extends) ||
          (function () {
            var c = function (a, e) {
              c =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, a) {
                    c.__proto__ = a;
                  }) ||
                function (c, a) {
                  for (var e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                };
              return c(a, e);
            };
            return function (a, e) {
              function g() {
                this.constructor = a;
              }
              c(a, e);
              a.prototype =
                null === e
                  ? Object.create(e)
                  : ((g.prototype = e.prototype), new g());
            };
          })(),
        I = a.charts,
        v = a.doc,
        r = a.noop,
        p = a.win,
        e = A.addEvent,
        c = A.css,
        k = A.objectEach,
        g = A.removeEvent,
        l = {},
        m = !!p.PointerEvent;
      return (function (f) {
        function k() {
          return (null !== f && f.apply(this, arguments)) || this;
        }
        F(k, f);
        k.isRequired = function () {
          return !(a.hasTouch || (!p.PointerEvent && !p.MSPointerEvent));
        };
        k.prototype.batchMSEvents = function (c) {
          c(
            this.chart.container,
            m ? "pointerdown" : "MSPointerDown",
            this.onContainerPointerDown
          );
          c(
            this.chart.container,
            m ? "pointermove" : "MSPointerMove",
            this.onContainerPointerMove
          );
          c(v, m ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        };
        k.prototype.destroy = function () {
          this.batchMSEvents(g);
          f.prototype.destroy.call(this);
        };
        k.prototype.init = function (a, e) {
          f.prototype.init.call(this, a, e);
          this.hasZoom &&
            c(a.container, {
              "-ms-touch-action": "none",
              "touch-action": "none",
            });
        };
        k.prototype.onContainerPointerDown = function (c) {
          y(c, "onContainerTouchStart", "touchstart", function (c) {
            l[c.pointerId] = {
              pageX: c.pageX,
              pageY: c.pageY,
              target: c.currentTarget,
            };
          });
        };
        k.prototype.onContainerPointerMove = function (c) {
          y(c, "onContainerTouchMove", "touchmove", function (c) {
            l[c.pointerId] = { pageX: c.pageX, pageY: c.pageY };
            l[c.pointerId].target || (l[c.pointerId].target = c.currentTarget);
          });
        };
        k.prototype.onDocumentPointerUp = function (c) {
          y(c, "onDocumentTouchEnd", "touchend", function (c) {
            delete l[c.pointerId];
          });
        };
        k.prototype.setDOMEvents = function () {
          f.prototype.setDOMEvents.call(this);
          (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e);
        };
        return k;
      })(f);
    }
  );
  L(
    f,
    "Core/Legend/Legend.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Globals.js"],
      f["Core/Series/Point.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F) {
      var B = a.animObject,
        v = a.setAnimation,
        r = f.format;
      a = A.isFirefox;
      var p = A.marginNames;
      A = A.win;
      var e = y.distribute,
        c = F.addEvent,
        k = F.createElement,
        g = F.css,
        l = F.defined,
        m = F.discardElement,
        z = F.find,
        N = F.fireEvent,
        J = F.isNumber,
        D = F.merge,
        E = F.pick,
        t = F.relativeLength,
        x = F.stableSort,
        d = F.syncTimeout;
      y = F.wrap;
      F = (function () {
        function a(b, c) {
          this.allItems = [];
          this.contentGroup = this.box = void 0;
          this.display = !1;
          this.group = void 0;
          this.offsetWidth =
            this.maxLegendWidth =
            this.maxItemWidth =
            this.legendWidth =
            this.legendHeight =
            this.lastLineHeight =
            this.lastItemY =
            this.itemY =
            this.itemX =
            this.itemMarginTop =
            this.itemMarginBottom =
            this.itemHeight =
            this.initialItemY =
              0;
          this.options = void 0;
          this.padding = 0;
          this.pages = [];
          this.proximate = !1;
          this.scrollGroup = void 0;
          this.widthOption =
            this.totalItemWidth =
            this.titleHeight =
            this.symbolWidth =
            this.symbolHeight =
              0;
          this.chart = b;
          this.init(b, c);
        }
        a.prototype.init = function (b, a) {
          this.chart = b;
          this.setOptions(a);
          a.enabled &&
            (this.render(),
            c(this.chart, "endResize", function () {
              this.legend.positionCheckboxes();
            }),
            this.proximate
              ? (this.unchartrender = c(this.chart, "render", function () {
                  this.legend.proximatePositions();
                  this.legend.positionItems();
                }))
              : this.unchartrender && this.unchartrender());
        };
        a.prototype.setOptions = function (b) {
          var c = E(b.padding, 8);
          this.options = b;
          this.chart.styledMode ||
            ((this.itemStyle = b.itemStyle),
            (this.itemHiddenStyle = D(this.itemStyle, b.itemHiddenStyle)));
          this.itemMarginTop = b.itemMarginTop || 0;
          this.itemMarginBottom = b.itemMarginBottom || 0;
          this.padding = c;
          this.initialItemY = c - 5;
          this.symbolWidth = E(b.symbolWidth, 16);
          this.pages = [];
          this.proximate = "proximate" === b.layout && !this.chart.inverted;
          this.baseline = void 0;
        };
        a.prototype.update = function (b, c) {
          var a = this.chart;
          this.setOptions(D(!0, this.options, b));
          this.destroy();
          a.isDirtyLegend = a.isDirtyBox = !0;
          E(c, !0) && a.redraw();
          N(this, "afterUpdate");
        };
        a.prototype.colorizeItem = function (b, c) {
          b.legendGroup[c ? "removeClass" : "addClass"](
            "highcharts-legend-item-hidden"
          );
          if (!this.chart.styledMode) {
            var a = this.options,
              d = b.legendItem,
              e = b.legendLine,
              g = b.legendSymbol,
              h = this.itemHiddenStyle.color;
            a = c ? a.itemStyle.color : h;
            var f = c ? b.color || h : h,
              k = b.options && b.options.marker,
              q = { fill: f };
            d && d.css({ fill: a, color: a });
            e && e.attr({ stroke: f });
            g &&
              (k &&
                g.isMarker &&
                ((q = b.pointAttribs()), c || (q.stroke = q.fill = h)),
              g.attr(q));
          }
          N(this, "afterColorizeItem", { item: b, visible: c });
        };
        a.prototype.positionItems = function () {
          this.allItems.forEach(this.positionItem, this);
          this.chart.isResizing || this.positionCheckboxes();
        };
        a.prototype.positionItem = function (b) {
          var c = this,
            a = this.options,
            d = a.symbolPadding,
            e = !a.rtl,
            g = b._legendItemPos;
          a = g[0];
          g = g[1];
          var h = b.checkbox,
            f = b.legendGroup;
          f &&
            f.element &&
            ((d = {
              translateX: e ? a : this.legendWidth - a - 2 * d - 4,
              translateY: g,
            }),
            (e = function () {
              N(c, "afterPositionItem", { item: b });
            }),
            l(f.translateY) ? f.animate(d, void 0, e) : (f.attr(d), e()));
          h && ((h.x = a), (h.y = g));
        };
        a.prototype.destroyItem = function (b) {
          var c = b.checkbox;
          ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(
            function (c) {
              b[c] && (b[c] = b[c].destroy());
            }
          );
          c && m(b.checkbox);
        };
        a.prototype.destroy = function () {
          function b(b) {
            this[b] && (this[b] = this[b].destroy());
          }
          this.getAllItems().forEach(function (c) {
            ["legendItem", "legendGroup"].forEach(b, c);
          });
          "clipRect up down pager nav box title group"
            .split(" ")
            .forEach(b, this);
          this.display = null;
        };
        a.prototype.positionCheckboxes = function () {
          var b = this.group && this.group.alignAttr,
            c = this.clipHeight || this.legendHeight,
            a = this.titleHeight;
          if (b) {
            var d = b.translateY;
            this.allItems.forEach(function (e) {
              var h = e.checkbox;
              if (h) {
                var f = d + a + h.y + (this.scrollOffset || 0) + 3;
                g(h, {
                  left: b.translateX + e.checkboxOffset + h.x - 20 + "px",
                  top: f + "px",
                  display:
                    this.proximate || (f > d - 6 && f < d + c - 6)
                      ? ""
                      : "none",
                });
              }
            }, this);
          }
        };
        a.prototype.renderTitle = function () {
          var b = this.options,
            c = this.padding,
            a = b.title,
            d = 0;
          a.text &&
            (this.title ||
              ((this.title = this.chart.renderer
                .label(
                  a.text,
                  c - 3,
                  c - 4,
                  void 0,
                  void 0,
                  void 0,
                  b.useHTML,
                  void 0,
                  "legend-title"
                )
                .attr({ zIndex: 1 })),
              this.chart.styledMode || this.title.css(a.style),
              this.title.add(this.group)),
            a.width || this.title.css({ width: this.maxLegendWidth + "px" }),
            (b = this.title.getBBox()),
            (d = b.height),
            (this.offsetWidth = b.width),
            this.contentGroup.attr({ translateY: d }));
          this.titleHeight = d;
        };
        a.prototype.setText = function (b) {
          var c = this.options;
          b.legendItem.attr({
            text: c.labelFormat
              ? r(c.labelFormat, b, this.chart)
              : c.labelFormatter.call(b),
          });
        };
        a.prototype.renderItem = function (b) {
          var c = this.chart,
            a = c.renderer,
            d = this.options,
            e = this.symbolWidth,
            g = d.symbolPadding || 0,
            h = this.itemStyle,
            f = this.itemHiddenStyle,
            k = "horizontal" === d.layout ? E(d.itemDistance, 20) : 0,
            m = !d.rtl,
            l = !b.series,
            p = !l && b.series.drawLegendSymbol ? b.series : b,
            t = p.options,
            x = this.createCheckboxForItem && t && t.showCheckbox,
            r = d.useHTML,
            z = b.options.className,
            H = b.legendItem;
          t = e + g + k + (x ? 20 : 0);
          H ||
            ((b.legendGroup = a
              .g("legend-item")
              .addClass(
                "highcharts-" +
                  p.type +
                  "-series highcharts-color-" +
                  b.colorIndex +
                  (z ? " " + z : "") +
                  (l ? " highcharts-series-" + b.index : "")
              )
              .attr({ zIndex: 1 })
              .add(this.scrollGroup)),
            (b.legendItem = H =
              a.text("", m ? e + g : -g, this.baseline || 0, r)),
            c.styledMode || H.css(D(b.visible ? h : f)),
            H.attr({ align: m ? "left" : "right", zIndex: 2 }).add(
              b.legendGroup
            ),
            this.baseline ||
              ((this.fontMetrics = a.fontMetrics(
                c.styledMode ? 12 : h.fontSize,
                H
              )),
              (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
              H.attr("y", this.baseline),
              (this.symbolHeight = d.symbolHeight || this.fontMetrics.f),
              d.squareSymbol &&
                ((this.symbolWidth = E(
                  d.symbolWidth,
                  Math.max(this.symbolHeight, 16)
                )),
                (t = this.symbolWidth + g + k + (x ? 20 : 0)),
                m && H.attr("x", this.symbolWidth + g))),
            p.drawLegendSymbol(this, b),
            this.setItemEvents && this.setItemEvents(b, H, r));
          x &&
            !b.checkbox &&
            this.createCheckboxForItem &&
            this.createCheckboxForItem(b);
          this.colorizeItem(b, b.visible);
          (!c.styledMode && h.width) ||
            H.css({
              width:
                (d.itemWidth || this.widthOption || c.spacingBox.width) -
                t +
                "px",
            });
          this.setText(b);
          c = H.getBBox();
          a = (this.fontMetrics && this.fontMetrics.h) || 0;
          b.itemWidth = b.checkboxOffset =
            d.itemWidth || b.legendItemWidth || c.width + t;
          this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
          this.totalItemWidth += b.itemWidth;
          this.itemHeight = b.itemHeight = Math.round(
            b.legendItemHeight || (c.height > 1.5 * a ? c.height : a)
          );
        };
        a.prototype.layoutItem = function (b) {
          var c = this.options,
            a = this.padding,
            d = "horizontal" === c.layout,
            e = b.itemHeight,
            g = this.itemMarginBottom,
            h = this.itemMarginTop,
            f = d ? E(c.itemDistance, 20) : 0,
            k = this.maxLegendWidth;
          c =
            c.alignColumns && this.totalItemWidth > k
              ? this.maxItemWidth
              : b.itemWidth;
          d &&
            this.itemX - a + c > k &&
            ((this.itemX = a),
            this.lastLineHeight && (this.itemY += h + this.lastLineHeight + g),
            (this.lastLineHeight = 0));
          this.lastItemY = h + this.itemY + g;
          this.lastLineHeight = Math.max(e, this.lastLineHeight);
          b._legendItemPos = [this.itemX, this.itemY];
          d
            ? (this.itemX += c)
            : ((this.itemY += h + e + g), (this.lastLineHeight = e));
          this.offsetWidth =
            this.widthOption ||
            Math.max(
              (d ? this.itemX - a - (b.checkbox ? 0 : f) : c) + a,
              this.offsetWidth
            );
        };
        a.prototype.getAllItems = function () {
          var b = [];
          this.chart.series.forEach(function (c) {
            var a = c && c.options;
            c &&
              E(a.showInLegend, l(a.linkedTo) ? !1 : void 0, !0) &&
              (b = b.concat(
                c.legendItems || ("point" === a.legendType ? c.data : c)
              ));
          });
          N(this, "afterGetAllItems", { allItems: b });
          return b;
        };
        a.prototype.getAlignment = function () {
          var b = this.options;
          return this.proximate
            ? b.align.charAt(0) + "tv"
            : b.floating
            ? ""
            : b.align.charAt(0) +
              b.verticalAlign.charAt(0) +
              b.layout.charAt(0);
        };
        a.prototype.adjustMargins = function (b, c) {
          var a = this.chart,
            d = this.options,
            e = this.getAlignment();
          e &&
            [
              /(lth|ct|rth)/,
              /(rtv|rm|rbv)/,
              /(rbh|cb|lbh)/,
              /(lbv|lm|ltv)/,
            ].forEach(function (g, h) {
              g.test(e) &&
                !l(b[h]) &&
                (a[p[h]] = Math.max(
                  a[p[h]],
                  a.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] +
                    [1, -1, -1, 1][h] * d[h % 2 ? "x" : "y"] +
                    E(d.margin, 12) +
                    c[h] +
                    (a.titleOffset[h] || 0)
                ));
            });
        };
        a.prototype.proximatePositions = function () {
          var b = this.chart,
            c = [],
            a = "left" === this.options.align;
          this.allItems.forEach(function (d) {
            var e;
            var g = a;
            if (d.yAxis) {
              d.xAxis.options.reversed && (g = !g);
              d.points &&
                (e = z(
                  g ? d.points : d.points.slice(0).reverse(),
                  function (b) {
                    return J(b.plotY);
                  }
                ));
              g =
                this.itemMarginTop +
                d.legendItem.getBBox().height +
                this.itemMarginBottom;
              var h = d.yAxis.top - b.plotTop;
              d.visible
                ? ((e = e ? e.plotY : d.yAxis.height), (e += h - 0.3 * g))
                : (e = h + d.yAxis.height);
              c.push({ target: e, size: g, item: d });
            }
          }, this);
          e(c, b.plotHeight).forEach(function (c) {
            c.item._legendItemPos &&
              c.pos &&
              (c.item._legendItemPos[1] = b.plotTop - b.spacing[0] + c.pos);
          });
        };
        a.prototype.render = function () {
          var b = this.chart,
            c = b.renderer,
            a = this.options,
            d = this.padding,
            e = this.getAllItems(),
            g = this.group,
            h = this.box;
          this.itemX = d;
          this.itemY = this.initialItemY;
          this.lastItemY = this.offsetWidth = 0;
          this.widthOption = t(a.width, b.spacingBox.width - d);
          var f = b.spacingBox.width - 2 * d - a.x;
          -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) &&
            (f /= 2);
          this.maxLegendWidth = this.widthOption || f;
          g ||
            ((this.group = g =
              c
                .g("legend")
                .addClass(a.className || "")
                .attr({ zIndex: 7 })
                .add()),
            (this.contentGroup = c.g().attr({ zIndex: 1 }).add(g)),
            (this.scrollGroup = c.g().add(this.contentGroup)));
          this.renderTitle();
          x(e, function (b, c) {
            return (
              ((b.options && b.options.legendIndex) || 0) -
              ((c.options && c.options.legendIndex) || 0)
            );
          });
          a.reversed && e.reverse();
          this.allItems = e;
          this.display = f = !!e.length;
          this.itemHeight =
            this.totalItemWidth =
            this.maxItemWidth =
            this.lastLineHeight =
              0;
          e.forEach(this.renderItem, this);
          e.forEach(this.layoutItem, this);
          e = (this.widthOption || this.offsetWidth) + d;
          var k = this.lastItemY + this.lastLineHeight + this.titleHeight;
          k = this.handleOverflow(k);
          k += d;
          h ||
            (this.box = h =
              c
                .rect()
                .addClass("highcharts-legend-box")
                .attr({ r: a.borderRadius })
                .add(g));
          b.styledMode ||
            h
              .attr({
                stroke: a.borderColor,
                "stroke-width": a.borderWidth || 0,
                fill: a.backgroundColor || "none",
              })
              .shadow(a.shadow);
          if (0 < e && 0 < k)
            h[h.placed ? "animate" : "attr"](
              h.crisp.call(
                {},
                { x: 0, y: 0, width: e, height: k },
                h.strokeWidth()
              )
            );
          g[f ? "show" : "hide"]();
          b.styledMode && "none" === g.getStyle("display") && (e = k = 0);
          this.legendWidth = e;
          this.legendHeight = k;
          f && this.align();
          this.proximate || this.positionItems();
          N(this, "afterRender");
        };
        a.prototype.align = function (b) {
          void 0 === b && (b = this.chart.spacingBox);
          var c = this.chart,
            a = this.options,
            d = b.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0]
            ? (d += c.titleOffset[0])
            : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
              0 < c.titleOffset[2] &&
              (d -= c.titleOffset[2]);
          d !== b.y && (b = D(b, { y: d }));
          c.hasRendered || (this.group.placed = !1);
          this.group.align(
            D(a, {
              width: this.legendWidth,
              height: this.legendHeight,
              verticalAlign: this.proximate ? "top" : a.verticalAlign,
            }),
            !0,
            b
          );
        };
        a.prototype.handleOverflow = function (b) {
          var c = this,
            a = this.chart,
            d = a.renderer,
            e = this.options,
            g = e.y,
            h = "top" === e.verticalAlign,
            f = this.padding,
            k = e.maxHeight,
            m = e.navigation,
            l = E(m.animation, !0),
            t = m.arrowSize || 12,
            p = this.pages,
            x = this.allItems,
            r = function (b) {
              "number" === typeof b
                ? D.attr({ height: b })
                : D && ((c.clipRect = D.destroy()), c.contentGroup.clip());
              c.contentGroup.div &&
                (c.contentGroup.div.style.clip = b
                  ? "rect(" + f + "px,9999px," + (f + b) + "px,0)"
                  : "auto");
            },
            z = function (b) {
              c[b] = d
                .circle(0, 0, 1.3 * t)
                .translate(t / 2, t / 2)
                .add(O);
              a.styledMode || c[b].attr("fill", "rgba(0,0,0,0.0001)");
              return c[b];
            },
            H,
            T;
          g = a.spacingBox.height + (h ? -g : g) - f;
          var O = this.nav,
            D = this.clipRect;
          "horizontal" !== e.layout ||
            "middle" === e.verticalAlign ||
            e.floating ||
            (g /= 2);
          k && (g = Math.min(g, k));
          p.length = 0;
          b && 0 < g && b > g && !1 !== m.enabled
            ? ((this.clipHeight = H =
                Math.max(g - 20 - this.titleHeight - f, 0)),
              (this.currentPage = E(this.currentPage, 1)),
              (this.fullHeight = b),
              x.forEach(function (b, c) {
                var a = b._legendItemPos[1],
                  d = Math.round(b.legendItem.getBBox().height),
                  e = p.length;
                if (!e || (a - p[e - 1] > H && (T || a) !== p[e - 1]))
                  p.push(T || a), e++;
                b.pageIx = e - 1;
                T && (x[c - 1].pageIx = e - 1);
                c === x.length - 1 &&
                  a + d - p[e - 1] > H &&
                  d <= H &&
                  (p.push(a), (b.pageIx = e));
                a !== T && (T = a);
              }),
              D ||
                ((D = c.clipRect = d.clipRect(0, f, 9999, 0)),
                c.contentGroup.clip(D)),
              r(H),
              O ||
                ((this.nav = O = d.g().attr({ zIndex: 1 }).add(this.group)),
                (this.up = d.symbol("triangle", 0, 0, t, t).add(O)),
                z("upTracker").on("click", function () {
                  c.scroll(-1, l);
                }),
                (this.pager = d
                  .text("", 15, 10)
                  .addClass("highcharts-legend-navigation")),
                !a.styledMode && m.style && this.pager.css(m.style),
                this.pager.add(O),
                (this.down = d.symbol("triangle-down", 0, 0, t, t).add(O)),
                z("downTracker").on("click", function () {
                  c.scroll(1, l);
                })),
              c.scroll(0),
              (b = g))
            : O &&
              (r(),
              (this.nav = O.destroy()),
              this.scrollGroup.attr({ translateY: 1 }),
              (this.clipHeight = 0));
          return b;
        };
        a.prototype.scroll = function (b, c) {
          var a = this,
            e = this.chart,
            g = this.pages,
            h = g.length,
            f = this.clipHeight,
            k = this.options.navigation,
            m = this.pager,
            l = this.padding,
            q = this.currentPage + b;
          q > h && (q = h);
          0 < q &&
            ("undefined" !== typeof c && v(c, e),
            this.nav.attr({
              translateX: l,
              translateY: f + this.padding + 7 + this.titleHeight,
              visibility: "inherit",
            }),
            [this.up, this.upTracker].forEach(function (b) {
              b.attr({
                class:
                  1 === q
                    ? "highcharts-legend-nav-inactive"
                    : "highcharts-legend-nav-active",
              });
            }),
            m.attr({ text: q + "/" + h }),
            [this.down, this.downTracker].forEach(function (b) {
              b.attr({
                x: 18 + this.pager.getBBox().width,
                class:
                  q === h
                    ? "highcharts-legend-nav-inactive"
                    : "highcharts-legend-nav-active",
              });
            }, this),
            e.styledMode ||
              (this.up.attr({
                fill: 1 === q ? k.inactiveColor : k.activeColor,
              }),
              this.upTracker.css({ cursor: 1 === q ? "default" : "pointer" }),
              this.down.attr({
                fill: q === h ? k.inactiveColor : k.activeColor,
              }),
              this.downTracker.css({
                cursor: q === h ? "default" : "pointer",
              })),
            (this.scrollOffset = -g[q - 1] + this.initialItemY),
            this.scrollGroup.animate({ translateY: this.scrollOffset }),
            (this.currentPage = q),
            this.positionCheckboxes(),
            (b = B(E(c, e.renderer.globalAnimation, !0))),
            d(function () {
              N(a, "afterScroll", { currentPage: q });
            }, b.duration));
        };
        a.prototype.setItemEvents = function (b, c, a) {
          var d = this,
            e = d.chart.renderer.boxWrapper,
            g = b instanceof G,
            h = "highcharts-legend-" + (g ? "point" : "series") + "-active",
            f = d.chart.styledMode,
            k = function (c) {
              d.allItems.forEach(function (a) {
                b !== a &&
                  [a].concat(a.linkedSeries || []).forEach(function (b) {
                    b.setState(c, !g);
                  });
              });
            };
          (a ? [c, b.legendSymbol] : [b.legendGroup]).forEach(function (a) {
            if (a)
              a.on("mouseover", function () {
                b.visible && k("inactive");
                b.setState("hover");
                b.visible && e.addClass(h);
                f || c.css(d.options.itemHoverStyle);
              })
                .on("mouseout", function () {
                  d.chart.styledMode ||
                    c.css(D(b.visible ? d.itemStyle : d.itemHiddenStyle));
                  k("");
                  e.removeClass(h);
                  b.setState();
                })
                .on("click", function (c) {
                  var a = function () {
                    b.setVisible && b.setVisible();
                    k(b.visible ? "inactive" : "");
                  };
                  e.removeClass(h);
                  c = { browserEvent: c };
                  b.firePointEvent
                    ? b.firePointEvent("legendItemClick", c, a)
                    : N(b, "legendItemClick", c, a);
                });
          });
        };
        a.prototype.createCheckboxForItem = function (b) {
          b.checkbox = k(
            "input",
            {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: b.selected,
              defaultChecked: b.selected,
            },
            this.options.itemCheckboxStyle,
            this.chart.container
          );
          c(b.checkbox, "click", function (c) {
            N(
              b.series || b,
              "checkboxClick",
              { checked: c.target.checked, item: b },
              function () {
                b.select();
              }
            );
          });
        };
        return a;
      })();
      (/Trident\/7\.0/.test(A.navigator && A.navigator.userAgent) || a) &&
        y(F.prototype, "positionItem", function (c, b) {
          var a = this,
            d = function () {
              b._legendItemPos && c.call(a, b);
            };
          d();
          a.bubbleLegend || setTimeout(d);
        });
      ("");
      return F;
    }
  );
  L(
    f,
    "Core/Series/SeriesRegistry.js",
    [
      f["Core/Globals.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Series/Point.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B = f.defaultOptions,
        F = G.extendClass,
        I = G.merge,
        v;
      (function (f) {
        function p(a, c) {
          var e = B.plotOptions || {},
            g = c.defaultOptions,
            l = c.prototype;
          l.type = a;
          l.pointClass || (l.pointClass = A);
          g && (e[a] = g);
          f.seriesTypes[a] = c;
        }
        f.seriesTypes = a.seriesTypes;
        f.registerSeriesType = p;
        f.seriesType = function (a, c, k, g, l) {
          var e = B.plotOptions || {};
          c = c || "";
          e[a] = I(e[c], k);
          p(a, F(f.seriesTypes[c] || function () {}, g));
          f.seriesTypes[a].prototype.type = a;
          l && (f.seriesTypes[a].prototype.pointClass = F(A, l));
          return f.seriesTypes[a];
        };
      })(v || (v = {}));
      return v;
    }
  );
  L(
    f,
    "Core/Chart/Chart.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Legend/Legend.js"],
      f["Core/MSPointer.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Pointer.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Time.js"],
      f["Core/Utilities.js"],
      f["Core/Renderer/HTML/AST.js"],
    ],
    function (a, f, A, G, y, F, I, v, r, p, e, c, k, g, l) {
      var m = a.animate,
        z = a.animObject,
        B = a.setAnimation,
        J = A.numberFormat,
        D = G.registerEventOptions,
        E = y.charts,
        t = y.doc,
        x = y.marginNames,
        d = y.svg,
        h = y.win,
        b = v.defaultOptions,
        q = v.defaultTime,
        n = e.seriesTypes,
        u = g.addEvent,
        K = g.attr,
        w = g.cleanRecursively,
        S = g.createElement,
        P = g.css,
        X = g.defined,
        V = g.discardElement,
        C = g.erase,
        M = g.error,
        L = g.extend,
        ca = g.find,
        R = g.fireEvent,
        da = g.getStyle,
        H = g.isArray,
        T = g.isNumber,
        O = g.isObject,
        W = g.isString,
        U = g.merge,
        Y = g.objectEach,
        Q = g.pick,
        ea = g.pInt,
        ha = g.relativeLength,
        ia = g.removeEvent,
        fa = g.splat,
        aa = g.syncTimeout,
        ka = g.uniqueKey;
      a = (function () {
        function a(b, c, a) {
          this.series =
            this.renderTo =
            this.renderer =
            this.pointer =
            this.pointCount =
            this.plotWidth =
            this.plotTop =
            this.plotLeft =
            this.plotHeight =
            this.plotBox =
            this.options =
            this.numberFormatter =
            this.margin =
            this.legend =
            this.labelCollectors =
            this.isResizing =
            this.index =
            this.eventOptions =
            this.container =
            this.colorCounter =
            this.clipBox =
            this.chartWidth =
            this.chartHeight =
            this.bounds =
            this.axisOffset =
            this.axes =
              void 0;
          this.sharedClips = {};
          this.yAxis =
            this.xAxis =
            this.userOptions =
            this.titleOffset =
            this.time =
            this.symbolCounter =
            this.spacingBox =
            this.spacing =
              void 0;
          this.getArgs(b, c, a);
        }
        a.chart = function (b, c, d) {
          return new a(b, c, d);
        };
        a.prototype.getArgs = function (b, c, a) {
          W(b) || b.nodeName
            ? ((this.renderTo = b), this.init(c, a))
            : this.init(b, c);
        };
        a.prototype.init = function (c, a) {
          var d = c.plotOptions || {};
          R(this, "init", { args: arguments }, function () {
            var e = U(b, c),
              g = e.chart;
            Y(e.plotOptions, function (b, c) {
              O(b) && (b.tooltip = (d[c] && U(d[c].tooltip)) || void 0);
            });
            e.tooltip.userOptions =
              (c.chart && c.chart.forExport && c.tooltip.userOptions) ||
              c.tooltip;
            this.userOptions = c;
            this.margin = [];
            this.spacing = [];
            this.bounds = { h: {}, v: {} };
            this.labelCollectors = [];
            this.callback = a;
            this.isResizing = 0;
            var h = (g.zooming = g.zooming || {});
            c.chart && !c.chart.zooming && (h.resetButton = g.resetZoomButton);
            h.key = Q(h.key, g.zoomKey);
            h.pinchType = Q(h.pinchType, g.pinchType);
            h.singleTouch = Q(h.singleTouch, g.zoomBySingleTouch);
            h.type = Q(h.type, g.zoomType);
            this.options = e;
            this.axes = [];
            this.series = [];
            this.time =
              c.time && Object.keys(c.time).length ? new k(c.time) : y.time;
            this.numberFormatter = g.numberFormatter || J;
            this.styledMode = g.styledMode;
            this.hasCartesianSeries = g.showAxes;
            this.index = E.length;
            E.push(this);
            y.chartCount++;
            D(this, g);
            this.xAxis = [];
            this.yAxis = [];
            this.pointCount = this.colorCounter = this.symbolCounter = 0;
            R(this, "afterInit");
            this.firstRender();
          });
        };
        a.prototype.initSeries = function (b) {
          var c = this.options.chart;
          c = b.type || c.type || c.defaultSeriesType;
          var a = n[c];
          a || M(17, !0, this, { missingModuleFor: c });
          c = new a();
          "function" === typeof c.init && c.init(this, b);
          return c;
        };
        a.prototype.setSeriesData = function () {
          this.getSeriesOrderByLinks().forEach(function (b) {
            b.points ||
              b.data ||
              !b.enabledDataSorting ||
              b.setData(b.options.data, !1);
          });
        };
        a.prototype.getSeriesOrderByLinks = function () {
          return this.series.concat().sort(function (b, c) {
            return b.linkedSeries.length || c.linkedSeries.length
              ? c.linkedSeries.length - b.linkedSeries.length
              : 0;
          });
        };
        a.prototype.orderSeries = function (b) {
          var c = this.series;
          b = b || 0;
          for (var a = c.length; b < a; ++b)
            c[b] && ((c[b].index = b), (c[b].name = c[b].getName()));
        };
        a.prototype.isInsidePlot = function (b, c, a) {
          void 0 === a && (a = {});
          var d = this.inverted,
            e = this.plotBox,
            g = this.plotLeft,
            h = this.plotTop,
            f = this.scrollablePlotBox,
            k = 0;
          var n = 0;
          a.visiblePlotOnly &&
            this.scrollingContainer &&
            ((n = this.scrollingContainer),
            (k = n.scrollLeft),
            (n = n.scrollTop));
          var m = a.series;
          e = (a.visiblePlotOnly && f) || e;
          f = a.inverted ? c : b;
          c = a.inverted ? b : c;
          b = { x: f, y: c, isInsidePlot: !0 };
          if (!a.ignoreX) {
            var l = (m && (d ? m.yAxis : m.xAxis)) || { pos: g, len: Infinity };
            f = a.paneCoordinates ? l.pos + f : g + f;
            (f >= Math.max(k + g, l.pos) &&
              f <= Math.min(k + g + e.width, l.pos + l.len)) ||
              (b.isInsidePlot = !1);
          }
          !a.ignoreY &&
            b.isInsidePlot &&
            ((d = (m && (d ? m.xAxis : m.yAxis)) || { pos: h, len: Infinity }),
            (a = a.paneCoordinates ? d.pos + c : h + c),
            (a >= Math.max(n + h, d.pos) &&
              a <= Math.min(n + h + e.height, d.pos + d.len)) ||
              (b.isInsidePlot = !1));
          R(this, "afterIsInsidePlot", b);
          return b.isInsidePlot;
        };
        a.prototype.redraw = function (b) {
          R(this, "beforeRedraw");
          var c = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
            a = this.series,
            d = this.pointer,
            e = this.legend,
            g = this.userOptions.legend,
            h = this.renderer,
            f = h.isHidden(),
            k = [],
            n = this.isDirtyBox,
            m = this.isDirtyLegend;
          this.setResponsive && this.setResponsive(!1);
          B(this.hasRendered ? b : !1, this);
          f && this.temporaryDisplay();
          this.layOutTitles();
          for (b = a.length; b--; ) {
            var l = a[b];
            if (l.options.stacking || l.options.centerInCategory) {
              var H = !0;
              if (l.isDirty) {
                var q = !0;
                break;
              }
            }
          }
          if (q)
            for (b = a.length; b--; )
              (l = a[b]), l.options.stacking && (l.isDirty = !0);
          a.forEach(function (b) {
            b.isDirty &&
              ("point" === b.options.legendType
                ? ("function" === typeof b.updateTotals && b.updateTotals(),
                  (m = !0))
                : g && (g.labelFormatter || g.labelFormat) && (m = !0));
            b.isDirtyData && R(b, "updatedData");
          });
          m &&
            e &&
            e.options.enabled &&
            (e.render(), (this.isDirtyLegend = !1));
          H && this.getStacks();
          c.forEach(function (b) {
            b.updateNames();
            b.setScale();
          });
          this.getMargins();
          c.forEach(function (b) {
            b.isDirty && (n = !0);
          });
          c.forEach(function (b) {
            var c = b.min + "," + b.max;
            b.extKey !== c &&
              ((b.extKey = c),
              k.push(function () {
                R(b, "afterSetExtremes", L(b.eventArgs, b.getExtremes()));
                delete b.eventArgs;
              }));
            (n || H) && b.redraw();
          });
          n && this.drawChartBox();
          R(this, "predraw");
          a.forEach(function (b) {
            (n || b.isDirty) && b.visible && b.redraw();
            b.isDirtyData = !1;
          });
          d && d.reset(!0);
          h.draw();
          R(this, "redraw");
          R(this, "render");
          f && this.temporaryDisplay(!0);
          k.forEach(function (b) {
            b.call();
          });
        };
        a.prototype.get = function (b) {
          function c(c) {
            return c.id === b || (c.options && c.options.id === b);
          }
          for (
            var a = this.series,
              d = ca(this.axes, c) || ca(this.series, c),
              e = 0;
            !d && e < a.length;
            e++
          )
            d = ca(a[e].points || [], c);
          return d;
        };
        a.prototype.getAxes = function () {
          var b = this,
            c = this.options,
            a = (c.xAxis = fa(c.xAxis || {}));
          c = c.yAxis = fa(c.yAxis || {});
          R(this, "getAxes");
          a.forEach(function (b, c) {
            b.index = c;
            b.isX = !0;
          });
          c.forEach(function (b, c) {
            b.index = c;
          });
          a.concat(c).forEach(function (c) {
            new f(b, c);
          });
          R(this, "afterGetAxes");
        };
        a.prototype.getSelectedPoints = function () {
          return this.series.reduce(function (b, c) {
            c.getPointsCollection().forEach(function (c) {
              Q(c.selectedStaging, c.selected) && b.push(c);
            });
            return b;
          }, []);
        };
        a.prototype.getSelectedSeries = function () {
          return this.series.filter(function (b) {
            return b.selected;
          });
        };
        a.prototype.setTitle = function (b, c, a) {
          this.applyDescription("title", b);
          this.applyDescription("subtitle", c);
          this.applyDescription("caption", void 0);
          this.layOutTitles(a);
        };
        a.prototype.applyDescription = function (b, c) {
          var a = this,
            d =
              "title" === b
                ? {
                    color: "#333333",
                    fontSize: this.options.isStock ? "16px" : "18px",
                  }
                : { color: "#666666" };
          d = this.options[b] = U(
            !this.styledMode && { style: d },
            this.options[b],
            c
          );
          var e = this[b];
          e && c && (this[b] = e = e.destroy());
          d &&
            !e &&
            ((e = this.renderer
              .text(d.text, 0, 0, d.useHTML)
              .attr({
                align: d.align,
                class: "highcharts-" + b,
                zIndex: d.zIndex || 4,
              })
              .add()),
            (e.update = function (c) {
              a[
                {
                  title: "setTitle",
                  subtitle: "setSubtitle",
                  caption: "setCaption",
                }[b]
              ](c);
            }),
            this.styledMode || e.css(d.style),
            (this[b] = e));
        };
        a.prototype.layOutTitles = function (b) {
          var c = [0, 0, 0],
            a = this.renderer,
            d = this.spacingBox;
          ["title", "subtitle", "caption"].forEach(function (b) {
            var e = this[b],
              g = this.options[b],
              h = g.verticalAlign || "top";
            b =
              "title" === b
                ? "top" === h
                  ? -3
                  : 0
                : "top" === h
                ? c[0] + 2
                : 0;
            var f;
            if (e) {
              this.styledMode || (f = g.style && g.style.fontSize);
              f = a.fontMetrics(f, e).b;
              e.css({
                width: (g.width || d.width + (g.widthAdjust || 0)) + "px",
              });
              var k = Math.round(e.getBBox(g.useHTML).height);
              e.align(
                L({ y: "bottom" === h ? f : b + f, height: k }, g),
                !1,
                "spacingBox"
              );
              g.floating ||
                ("top" === h
                  ? (c[0] = Math.ceil(c[0] + k))
                  : "bottom" === h && (c[2] = Math.ceil(c[2] + k)));
            }
          }, this);
          c[0] &&
            "top" === (this.options.title.verticalAlign || "top") &&
            (c[0] += this.options.title.margin);
          c[2] &&
            "bottom" === this.options.caption.verticalAlign &&
            (c[2] += this.options.caption.margin);
          var e =
            !this.titleOffset || this.titleOffset.join(",") !== c.join(",");
          this.titleOffset = c;
          R(this, "afterLayOutTitles");
          !this.isDirtyBox &&
            e &&
            ((this.isDirtyBox = this.isDirtyLegend = e),
            this.hasRendered && Q(b, !0) && this.isDirtyBox && this.redraw());
        };
        a.prototype.getChartSize = function () {
          var b = this.options.chart,
            c = b.width;
          b = b.height;
          var a = this.renderTo;
          X(c) || (this.containerWidth = da(a, "width"));
          X(b) || (this.containerHeight = da(a, "height"));
          this.chartWidth = Math.max(0, c || this.containerWidth || 600);
          this.chartHeight = Math.max(
            0,
            ha(b, this.chartWidth) ||
              (1 < this.containerHeight ? this.containerHeight : 400)
          );
        };
        a.prototype.temporaryDisplay = function (b) {
          var c = this.renderTo;
          if (b)
            for (; c && c.style; )
              c.hcOrigStyle && (P(c, c.hcOrigStyle), delete c.hcOrigStyle),
                c.hcOrigDetached &&
                  (t.body.removeChild(c), (c.hcOrigDetached = !1)),
                (c = c.parentNode);
          else
            for (; c && c.style; ) {
              t.body.contains(c) ||
                c.parentNode ||
                ((c.hcOrigDetached = !0), t.body.appendChild(c));
              if ("none" === da(c, "display", !1) || c.hcOricDetached)
                (c.hcOrigStyle = {
                  display: c.style.display,
                  height: c.style.height,
                  overflow: c.style.overflow,
                }),
                  (b = { display: "block", overflow: "hidden" }),
                  c !== this.renderTo && (b.height = 0),
                  P(c, b),
                  c.offsetWidth ||
                    c.style.setProperty("display", "block", "important");
              c = c.parentNode;
              if (c === t.body) break;
            }
        };
        a.prototype.setClassName = function (b) {
          this.container.className = "highcharts-container " + (b || "");
        };
        a.prototype.getContainer = function () {
          var b = this.options,
            a = b.chart,
            e = ka(),
            g,
            h = this.renderTo;
          h || (this.renderTo = h = a.renderTo);
          W(h) && (this.renderTo = h = t.getElementById(h));
          h || M(13, !0, this);
          var f = ea(K(h, "data-highcharts-chart"));
          T(f) && E[f] && E[f].hasRendered && E[f].destroy();
          K(h, "data-highcharts-chart", this.index);
          h.innerHTML = l.emptyHTML;
          a.skipClone || h.offsetWidth || this.temporaryDisplay();
          this.getChartSize();
          f = this.chartWidth;
          var k = this.chartHeight;
          P(h, { overflow: "hidden" });
          this.styledMode ||
            (g = L(
              {
                position: "relative",
                overflow: "hidden",
                width: f + "px",
                height: k + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                userSelect: "none",
                "touch-action": "manipulation",
                outline: "none",
              },
              a.style || {}
            ));
          this.container = e = S("div", { id: e }, g, h);
          this._cursor = e.style.cursor;
          this.renderer = new (
            a.renderer || !d ? p.getRendererType(a.renderer) : c
          )(
            e,
            f,
            k,
            void 0,
            a.forExport,
            b.exporting && b.exporting.allowHTML,
            this.styledMode
          );
          B(void 0, this);
          this.setClassName(a.className);
          if (this.styledMode)
            for (var n in b.defs) this.renderer.definition(b.defs[n]);
          else this.renderer.setStyle(a.style);
          this.renderer.chartIndex = this.index;
          R(this, "afterGetContainer");
        };
        a.prototype.getMargins = function (b) {
          var c = this.spacing,
            a = this.margin,
            d = this.titleOffset;
          this.resetMargins();
          d[0] &&
            !X(a[0]) &&
            (this.plotTop = Math.max(this.plotTop, d[0] + c[0]));
          d[2] &&
            !X(a[2]) &&
            (this.marginBottom = Math.max(this.marginBottom, d[2] + c[2]));
          this.legend && this.legend.display && this.legend.adjustMargins(a, c);
          R(this, "getMargins");
          b || this.getAxisMargins();
        };
        a.prototype.getAxisMargins = function () {
          var b = this,
            c = (b.axisOffset = [0, 0, 0, 0]),
            a = b.colorAxis,
            d = b.margin,
            e = function (b) {
              b.forEach(function (b) {
                b.visible && b.getOffset();
              });
            };
          b.hasCartesianSeries ? e(b.axes) : a && a.length && e(a);
          x.forEach(function (a, e) {
            X(d[e]) || (b[a] += c[e]);
          });
          b.setChartSize();
        };
        a.prototype.reflow = function (b) {
          var c = this,
            a = c.options.chart,
            d = c.renderTo,
            e = X(a.width) && X(a.height),
            f = a.width || da(d, "width");
          a = a.height || da(d, "height");
          d = b ? b.target : h;
          delete c.pointer.chartPosition;
          if (!e && !c.isPrinting && f && a && (d === h || d === t)) {
            if (f !== c.containerWidth || a !== c.containerHeight)
              g.clearTimeout(c.reflowTimeout),
                (c.reflowTimeout = aa(
                  function () {
                    c.container && c.setSize(void 0, void 0, !1);
                  },
                  b ? 100 : 0
                ));
            c.containerWidth = f;
            c.containerHeight = a;
          }
        };
        a.prototype.setReflow = function (b) {
          var c = this;
          !1 === b || this.unbindReflow
            ? !1 === b &&
              this.unbindReflow &&
              (this.unbindReflow = this.unbindReflow())
            : ((this.unbindReflow = u(h, "resize", function (b) {
                c.options && c.reflow(b);
              })),
              u(this, "destroy", this.unbindReflow));
        };
        a.prototype.setSize = function (b, c, a) {
          var d = this,
            e = d.renderer;
          d.isResizing += 1;
          B(a, d);
          a = e.globalAnimation;
          d.oldChartHeight = d.chartHeight;
          d.oldChartWidth = d.chartWidth;
          "undefined" !== typeof b && (d.options.chart.width = b);
          "undefined" !== typeof c && (d.options.chart.height = c);
          d.getChartSize();
          d.styledMode ||
            (a ? m : P)(
              d.container,
              { width: d.chartWidth + "px", height: d.chartHeight + "px" },
              a
            );
          d.setChartSize(!0);
          e.setSize(d.chartWidth, d.chartHeight, a);
          d.axes.forEach(function (b) {
            b.isDirty = !0;
            b.setScale();
          });
          d.isDirtyLegend = !0;
          d.isDirtyBox = !0;
          d.layOutTitles();
          d.getMargins();
          d.redraw(a);
          d.oldChartHeight = null;
          R(d, "resize");
          aa(function () {
            d &&
              R(d, "endResize", null, function () {
                --d.isResizing;
              });
          }, z(a).duration);
        };
        a.prototype.setChartSize = function (b) {
          var c = this.inverted,
            a = this.renderer,
            d = this.chartWidth,
            e = this.chartHeight,
            g = this.options.chart,
            h = this.spacing,
            f = this.clipOffset,
            k,
            n,
            m,
            l;
          this.plotLeft = k = Math.round(this.plotLeft);
          this.plotTop = n = Math.round(this.plotTop);
          this.plotWidth = m = Math.max(
            0,
            Math.round(d - k - this.marginRight)
          );
          this.plotHeight = l = Math.max(
            0,
            Math.round(e - n - this.marginBottom)
          );
          this.plotSizeX = c ? l : m;
          this.plotSizeY = c ? m : l;
          this.plotBorderWidth = g.plotBorderWidth || 0;
          this.spacingBox = a.spacingBox = {
            x: h[3],
            y: h[0],
            width: d - h[3] - h[1],
            height: e - h[0] - h[2],
          };
          this.plotBox = a.plotBox = { x: k, y: n, width: m, height: l };
          c = 2 * Math.floor(this.plotBorderWidth / 2);
          d = Math.ceil(Math.max(c, f[3]) / 2);
          e = Math.ceil(Math.max(c, f[0]) / 2);
          this.clipBox = {
            x: d,
            y: e,
            width: Math.floor(this.plotSizeX - Math.max(c, f[1]) / 2 - d),
            height: Math.max(
              0,
              Math.floor(this.plotSizeY - Math.max(c, f[2]) / 2 - e)
            ),
          };
          b ||
            (this.axes.forEach(function (b) {
              b.setAxisSize();
              b.setAxisTranslation();
            }),
            a.alignElements());
          R(this, "afterSetChartSize", { skipAxes: b });
        };
        a.prototype.resetMargins = function () {
          R(this, "resetMargins");
          var b = this,
            c = b.options.chart;
          ["margin", "spacing"].forEach(function (a) {
            var d = c[a],
              e = O(d) ? d : [d, d, d, d];
            ["Top", "Right", "Bottom", "Left"].forEach(function (d, g) {
              b[a][g] = Q(c[a + d], e[g]);
            });
          });
          x.forEach(function (c, a) {
            b[c] = Q(b.margin[a], b.spacing[a]);
          });
          b.axisOffset = [0, 0, 0, 0];
          b.clipOffset = [0, 0, 0, 0];
        };
        a.prototype.drawChartBox = function () {
          var b = this.options.chart,
            c = this.renderer,
            a = this.chartWidth,
            d = this.chartHeight,
            e = this.styledMode,
            g = this.plotBGImage,
            h = b.backgroundColor,
            f = b.plotBackgroundColor,
            k = b.plotBackgroundImage,
            n = this.plotLeft,
            m = this.plotTop,
            l = this.plotWidth,
            H = this.plotHeight,
            q = this.plotBox,
            u = this.clipRect,
            t = this.clipBox,
            p = this.chartBackground,
            O = this.plotBackground,
            x = this.plotBorder,
            r,
            z = "animate";
          p ||
            ((this.chartBackground = p =
              c.rect().addClass("highcharts-background").add()),
            (z = "attr"));
          if (e) var w = (r = p.strokeWidth());
          else {
            w = b.borderWidth || 0;
            r = w + (b.shadow ? 8 : 0);
            h = { fill: h || "none" };
            if (w || p["stroke-width"])
              (h.stroke = b.borderColor), (h["stroke-width"] = w);
            p.attr(h).shadow(b.shadow);
          }
          p[z]({
            x: r / 2,
            y: r / 2,
            width: a - r - (w % 2),
            height: d - r - (w % 2),
            r: b.borderRadius,
          });
          z = "animate";
          O ||
            ((z = "attr"),
            (this.plotBackground = O =
              c.rect().addClass("highcharts-plot-background").add()));
          O[z](q);
          e ||
            (O.attr({ fill: f || "none" }).shadow(b.plotShadow),
            k &&
              (g
                ? (k !== g.attr("href") && g.attr("href", k), g.animate(q))
                : (this.plotBGImage = c.image(k, n, m, l, H).add())));
          u
            ? u.animate({ width: t.width, height: t.height })
            : (this.clipRect = c.clipRect(t));
          z = "animate";
          x ||
            ((z = "attr"),
            (this.plotBorder = x =
              c
                .rect()
                .addClass("highcharts-plot-border")
                .attr({ zIndex: 1 })
                .add()));
          e ||
            x.attr({
              stroke: b.plotBorderColor,
              "stroke-width": b.plotBorderWidth || 0,
              fill: "none",
            });
          x[z](x.crisp({ x: n, y: m, width: l, height: H }, -x.strokeWidth()));
          this.isDirtyBox = !1;
          R(this, "afterDrawChartBox");
        };
        a.prototype.propFromSeries = function () {
          var b = this,
            c = b.options.chart,
            a = b.options.series,
            d,
            e,
            g;
          ["inverted", "angular", "polar"].forEach(function (h) {
            e = n[c.type || c.defaultSeriesType];
            g = c[h] || (e && e.prototype[h]);
            for (d = a && a.length; !g && d--; )
              (e = n[a[d].type]) && e.prototype[h] && (g = !0);
            b[h] = g;
          });
        };
        a.prototype.linkSeries = function () {
          var b = this,
            c = b.series;
          c.forEach(function (b) {
            b.linkedSeries.length = 0;
          });
          c.forEach(function (c) {
            var a = c.options.linkedTo;
            W(a) &&
              (a = ":previous" === a ? b.series[c.index - 1] : b.get(a)) &&
              a.linkedParent !== c &&
              (a.linkedSeries.push(c),
              (c.linkedParent = a),
              a.enabledDataSorting && c.setDataSortingOptions(),
              (c.visible = Q(c.options.visible, a.options.visible, c.visible)));
          });
          R(this, "afterLinkSeries");
        };
        a.prototype.renderSeries = function () {
          this.series.forEach(function (b) {
            b.translate();
            b.render();
          });
        };
        a.prototype.renderLabels = function () {
          var b = this,
            c = b.options.labels;
          c.items &&
            c.items.forEach(function (a) {
              var d = L(c.style, a.style),
                e = ea(d.left) + b.plotLeft,
                g = ea(d.top) + b.plotTop + 12;
              delete d.left;
              delete d.top;
              b.renderer.text(a.html, e, g).attr({ zIndex: 2 }).css(d).add();
            });
        };
        a.prototype.render = function () {
          var b = this.axes,
            c = this.colorAxis,
            a = this.renderer,
            d = this.options,
            e = function (b) {
              b.forEach(function (b) {
                b.visible && b.render();
              });
            },
            g = 0;
          this.setTitle();
          this.legend = new F(this, d.legend);
          this.getStacks && this.getStacks();
          this.getMargins(!0);
          this.setChartSize();
          d = this.plotWidth;
          b.some(function (b) {
            if (
              b.horiz &&
              b.visible &&
              b.options.labels.enabled &&
              b.series.length
            )
              return (g = 21), !0;
          });
          var h = (this.plotHeight = Math.max(this.plotHeight - g, 0));
          b.forEach(function (b) {
            b.setScale();
          });
          this.getAxisMargins();
          var f = 1.1 < d / this.plotWidth,
            k = 1.05 < h / this.plotHeight;
          if (f || k)
            b.forEach(function (b) {
              ((b.horiz && f) || (!b.horiz && k)) && b.setTickInterval(!0);
            }),
              this.getMargins();
          this.drawChartBox();
          this.hasCartesianSeries ? e(b) : c && c.length && e(c);
          this.seriesGroup ||
            (this.seriesGroup = a.g("series-group").attr({ zIndex: 3 }).add());
          this.renderSeries();
          this.renderLabels();
          this.addCredits();
          this.setResponsive && this.setResponsive();
          this.hasRendered = !0;
        };
        a.prototype.addCredits = function (b) {
          var c = this,
            a = U(!0, this.options.credits, b);
          a.enabled &&
            !this.credits &&
            ((this.credits = this.renderer
              .text(a.text + (this.mapCredits || ""), 0, 0)
              .addClass("highcharts-credits")
              .on("click", function () {
                a.href && (h.location.href = a.href);
              })
              .attr({ align: a.position.align, zIndex: 8 })),
            c.styledMode || this.credits.css(a.style),
            this.credits.add().align(a.position),
            (this.credits.update = function (b) {
              c.credits = c.credits.destroy();
              c.addCredits(b);
            }));
        };
        a.prototype.destroy = function () {
          var b = this,
            c = b.axes,
            a = b.series,
            d = b.container,
            e = d && d.parentNode,
            g;
          R(b, "destroy");
          b.renderer.forExport ? C(E, b) : (E[b.index] = void 0);
          y.chartCount--;
          b.renderTo.removeAttribute("data-highcharts-chart");
          ia(b);
          for (g = c.length; g--; ) c[g] = c[g].destroy();
          this.scroller && this.scroller.destroy && this.scroller.destroy();
          for (g = a.length; g--; ) a[g] = a[g].destroy();
          "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
            .split(" ")
            .forEach(function (c) {
              var a = b[c];
              a && a.destroy && (b[c] = a.destroy());
            });
          d && ((d.innerHTML = l.emptyHTML), ia(d), e && V(d));
          Y(b, function (c, a) {
            delete b[a];
          });
        };
        a.prototype.firstRender = function () {
          var b = this,
            c = b.options;
          if (!b.isReadyToRender || b.isReadyToRender()) {
            b.getContainer();
            b.resetMargins();
            b.setChartSize();
            b.propFromSeries();
            b.getAxes();
            (H(c.series) ? c.series : []).forEach(function (c) {
              b.initSeries(c);
            });
            b.linkSeries();
            b.setSeriesData();
            R(b, "beforeRender");
            r &&
              (I.isRequired()
                ? (b.pointer = new I(b, c))
                : (b.pointer = new r(b, c)));
            b.render();
            b.pointer.getChartPosition();
            if (!b.renderer.imgCount && !b.hasLoaded) b.onload();
            b.temporaryDisplay(!0);
          }
        };
        a.prototype.onload = function () {
          this.callbacks.concat([this.callback]).forEach(function (b) {
            b && "undefined" !== typeof this.index && b.apply(this, [this]);
          }, this);
          R(this, "load");
          R(this, "render");
          X(this.index) && this.setReflow(this.options.chart.reflow);
          this.warnIfA11yModuleNotLoaded();
          this.hasLoaded = !0;
        };
        a.prototype.warnIfA11yModuleNotLoaded = function () {
          var b = this.options,
            c = this.title;
          b &&
            !this.accessibility &&
            (this.renderer.boxWrapper.attr({
              role: "img",
              "aria-label": (c && c.element.textContent) || "",
            }),
            (b.accessibility && !1 === b.accessibility.enabled) ||
              M(
                'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                !1,
                this
              ));
        };
        a.prototype.addSeries = function (b, c, a) {
          var d = this,
            e;
          b &&
            ((c = Q(c, !0)),
            R(d, "addSeries", { options: b }, function () {
              e = d.initSeries(b);
              d.isDirtyLegend = !0;
              d.linkSeries();
              e.enabledDataSorting && e.setData(b.data, !1);
              R(d, "afterAddSeries", { series: e });
              c && d.redraw(a);
            }));
          return e;
        };
        a.prototype.addAxis = function (b, c, a, d) {
          return this.createAxis(c ? "xAxis" : "yAxis", {
            axis: b,
            redraw: a,
            animation: d,
          });
        };
        a.prototype.addColorAxis = function (b, c, a) {
          return this.createAxis("colorAxis", {
            axis: b,
            redraw: c,
            animation: a,
          });
        };
        a.prototype.createAxis = function (b, c) {
          b = new f(
            this,
            U(c.axis, { index: this[b].length, isX: "xAxis" === b })
          );
          Q(c.redraw, !0) && this.redraw(c.animation);
          return b;
        };
        a.prototype.showLoading = function (b) {
          var c = this,
            a = c.options,
            d = a.loading,
            e = function () {
              g &&
                P(g, {
                  left: c.plotLeft + "px",
                  top: c.plotTop + "px",
                  width: c.plotWidth + "px",
                  height: c.plotHeight + "px",
                });
            },
            g = c.loadingDiv,
            h = c.loadingSpan;
          g ||
            (c.loadingDiv = g =
              S(
                "div",
                { className: "highcharts-loading highcharts-loading-hidden" },
                null,
                c.container
              ));
          h ||
            ((c.loadingSpan = h =
              S("span", { className: "highcharts-loading-inner" }, null, g)),
            u(c, "redraw", e));
          g.className = "highcharts-loading";
          l.setElementHTML(h, Q(b, a.lang.loading, ""));
          c.styledMode ||
            (P(g, L(d.style, { zIndex: 10 })),
            P(h, d.labelStyle),
            c.loadingShown ||
              (P(g, { opacity: 0, display: "" }),
              m(
                g,
                { opacity: d.style.opacity || 0.5 },
                { duration: d.showDuration || 0 }
              )));
          c.loadingShown = !0;
          e();
        };
        a.prototype.hideLoading = function () {
          var b = this.options,
            c = this.loadingDiv;
          c &&
            ((c.className = "highcharts-loading highcharts-loading-hidden"),
            this.styledMode ||
              m(
                c,
                { opacity: 0 },
                {
                  duration: b.loading.hideDuration || 100,
                  complete: function () {
                    P(c, { display: "none" });
                  },
                }
              ));
          this.loadingShown = !1;
        };
        a.prototype.update = function (b, c, a, d) {
          var e = this,
            g = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption",
            },
            h = b.isResponsiveOptions,
            f = [],
            n,
            m;
          R(e, "update", { options: b });
          h || e.setResponsive(!1, !0);
          b = w(b, e.options);
          e.userOptions = U(e.userOptions, b);
          var l = b.chart;
          if (l) {
            U(!0, e.options.chart, l);
            "className" in l && e.setClassName(l.className);
            "reflow" in l && e.setReflow(l.reflow);
            if ("inverted" in l || "polar" in l || "type" in l) {
              e.propFromSeries();
              var H = !0;
            }
            "alignTicks" in l && (H = !0);
            "events" in l && D(this, l);
            Y(l, function (b, c) {
              -1 !== e.propsRequireUpdateSeries.indexOf("chart." + c) &&
                (n = !0);
              -1 !== e.propsRequireDirtyBox.indexOf(c) && (e.isDirtyBox = !0);
              -1 !== e.propsRequireReflow.indexOf(c) &&
                (h ? (e.isDirtyBox = !0) : (m = !0));
            });
            !e.styledMode &&
              l.style &&
              e.renderer.setStyle(e.options.chart.style || {});
          }
          !e.styledMode && b.colors && (this.options.colors = b.colors);
          b.time &&
            (this.time === q && (this.time = new k(b.time)),
            U(!0, e.options.time, b.time));
          Y(b, function (c, a) {
            if (e[a] && "function" === typeof e[a].update) e[a].update(c, !1);
            else if ("function" === typeof e[g[a]]) e[g[a]](c);
            else
              "colors" !== a &&
                -1 === e.collectionsWithUpdate.indexOf(a) &&
                U(!0, e.options[a], b[a]);
            "chart" !== a &&
              -1 !== e.propsRequireUpdateSeries.indexOf(a) &&
              (n = !0);
          });
          this.collectionsWithUpdate.forEach(function (c) {
            if (b[c]) {
              var d = [];
              e[c].forEach(function (b, c) {
                b.options.isInternal || d.push(Q(b.options.index, c));
              });
              fa(b[c]).forEach(function (b, g) {
                var h = X(b.id),
                  f;
                h && (f = e.get(b.id));
                !f &&
                  e[c] &&
                  (f = e[c][d ? d[g] : g]) &&
                  h &&
                  X(f.options.id) &&
                  (f = void 0);
                f && f.coll === c && (f.update(b, !1), a && (f.touched = !0));
                !f &&
                  a &&
                  e.collectionsWithInit[c] &&
                  (e.collectionsWithInit[c][0].apply(
                    e,
                    [b].concat(e.collectionsWithInit[c][1] || []).concat([!1])
                  ).touched = !0);
              });
              a &&
                e[c].forEach(function (b) {
                  b.touched || b.options.isInternal
                    ? delete b.touched
                    : f.push(b);
                });
            }
          });
          f.forEach(function (b) {
            b.chart && b.remove && b.remove(!1);
          });
          H &&
            e.axes.forEach(function (b) {
              b.update({}, !1);
            });
          n &&
            e.getSeriesOrderByLinks().forEach(function (b) {
              b.chart && b.update({}, !1);
            }, this);
          H = l && l.width;
          l = l && (W(l.height) ? ha(l.height, H || e.chartWidth) : l.height);
          m || (T(H) && H !== e.chartWidth) || (T(l) && l !== e.chartHeight)
            ? e.setSize(H, l, d)
            : Q(c, !0) && e.redraw(d);
          R(e, "afterUpdate", { options: b, redraw: c, animation: d });
        };
        a.prototype.setSubtitle = function (b, c) {
          this.applyDescription("subtitle", b);
          this.layOutTitles(c);
        };
        a.prototype.setCaption = function (b, c) {
          this.applyDescription("caption", b);
          this.layOutTitles(c);
        };
        a.prototype.showResetZoom = function () {
          function c() {
            a.zoomOut();
          }
          var a = this,
            d = b.lang,
            e = a.options.chart.zooming.resetButton,
            g = e.theme,
            h =
              "chart" === e.relativeTo || "spacingBox" === e.relativeTo
                ? null
                : "scrollablePlotBox";
          R(this, "beforeShowResetZoom", null, function () {
            a.resetZoomButton = a.renderer
              .button(d.resetZoom, null, null, c, g)
              .attr({ align: e.position.align, title: d.resetZoomTitle })
              .addClass("highcharts-reset-zoom")
              .add()
              .align(e.position, !1, h);
          });
          R(this, "afterShowResetZoom");
        };
        a.prototype.zoomOut = function () {
          R(this, "selection", { resetSelection: !0 }, this.zoom);
        };
        a.prototype.zoom = function (b) {
          var c = this,
            a = c.pointer,
            d = c.inverted ? a.mouseDownX : a.mouseDownY,
            e = !1,
            g;
          !b || b.resetSelection
            ? (c.axes.forEach(function (b) {
                g = b.zoom();
              }),
              (a.initiated = !1))
            : b.xAxis.concat(b.yAxis).forEach(function (b) {
                var h = b.axis,
                  f = c.inverted ? h.left : h.top,
                  k = c.inverted ? f + h.width : f + h.height,
                  n = h.isXAxis,
                  l = !1;
                if ((!n && d >= f && d <= k) || n || !X(d)) l = !0;
                a[n ? "zoomX" : "zoomY"] &&
                  l &&
                  ((g = h.zoom(b.min, b.max)), h.displayBtn && (e = !0));
              });
          var h = c.resetZoomButton;
          e && !h
            ? c.showResetZoom()
            : !e && O(h) && (c.resetZoomButton = h.destroy());
          g &&
            c.redraw(
              Q(c.options.chart.animation, b && b.animation, 100 > c.pointCount)
            );
        };
        a.prototype.pan = function (b, c) {
          var a = this,
            d = a.hoverPoints;
          c = "object" === typeof c ? c : { enabled: c, type: "x" };
          var e = a.options.chart;
          e && e.panning && (e.panning = c);
          var g = c.type,
            h;
          R(this, "pan", { originalEvent: b }, function () {
            d &&
              d.forEach(function (b) {
                b.setState();
              });
            var c = a.xAxis;
            "xy" === g ? (c = c.concat(a.yAxis)) : "y" === g && (c = a.yAxis);
            var e = {};
            c.forEach(function (c) {
              if (c.options.panningEnabled && !c.options.isInternal) {
                var d = c.horiz,
                  f = b[d ? "chartX" : "chartY"];
                d = d ? "mouseDownX" : "mouseDownY";
                var k = a[d],
                  n = c.minPointOffset || 0,
                  l =
                    (c.reversed && !a.inverted) || (!c.reversed && a.inverted)
                      ? -1
                      : 1,
                  m = c.getExtremes(),
                  H = c.toValue(k - f, !0) + n * l,
                  q =
                    c.toValue(k + c.len - f, !0) -
                    (n * l || (c.isXAxis && c.pointRangePadding) || 0),
                  u = q < H;
                l = c.hasVerticalPanning();
                k = u ? q : H;
                H = u ? H : q;
                var p = c.panningState;
                !l ||
                  c.isXAxis ||
                  (p && !p.isDirty) ||
                  c.series.forEach(function (b) {
                    var c = b.getProcessedData(!0);
                    c = b.getExtremes(c.yData, !0);
                    p ||
                      (p = {
                        startMin: Number.MAX_VALUE,
                        startMax: -Number.MAX_VALUE,
                      });
                    T(c.dataMin) &&
                      T(c.dataMax) &&
                      ((p.startMin = Math.min(
                        Q(b.options.threshold, Infinity),
                        c.dataMin,
                        p.startMin
                      )),
                      (p.startMax = Math.max(
                        Q(b.options.threshold, -Infinity),
                        c.dataMax,
                        p.startMax
                      )));
                  });
                l = Math.min(
                  Q(p && p.startMin, m.dataMin),
                  n ? m.min : c.toValue(c.toPixels(m.min) - c.minPixelPadding)
                );
                q = Math.max(
                  Q(p && p.startMax, m.dataMax),
                  n ? m.max : c.toValue(c.toPixels(m.max) + c.minPixelPadding)
                );
                c.panningState = p;
                c.isOrdinal ||
                  ((n = l - k),
                  0 < n && ((H += n), (k = l)),
                  (n = H - q),
                  0 < n && ((H = q), (k -= n)),
                  c.series.length &&
                    k !== m.min &&
                    H !== m.max &&
                    k >= l &&
                    H <= q &&
                    (c.setExtremes(k, H, !1, !1, { trigger: "pan" }),
                    !a.resetZoomButton &&
                      k !== l &&
                      H !== q &&
                      g.match("y") &&
                      (a.showResetZoom(), (c.displayBtn = !1)),
                    (h = !0)),
                  (e[d] = f));
              }
            });
            Y(e, function (b, c) {
              a[c] = b;
            });
            h && a.redraw(!1);
            P(a.container, { cursor: "move" });
          });
        };
        return a;
      })();
      L(a.prototype, {
        callbacks: [],
        collectionsWithInit: {
          xAxis: [a.prototype.addAxis, [!0]],
          yAxis: [a.prototype.addAxis, [!1]],
          series: [a.prototype.addSeries],
        },
        collectionsWithUpdate: ["xAxis", "yAxis", "series"],
        propsRequireDirtyBox:
          "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
            " "
          ),
        propsRequireReflow:
          "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
            " "
          ),
        propsRequireUpdateSeries:
          "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
            " "
          ),
      });
      ("");
      return a;
    }
  );
  L(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.merge,
      A = a.pick,
      G;
    (function (a) {
      a.drawLineMarker = function (a) {
        var B = this.options,
          v = a.symbolWidth,
          r = a.symbolHeight,
          p = r / 2,
          e = this.chart.renderer,
          c = this.legendGroup;
        a = a.baseline - Math.round(0.3 * a.fontMetrics.b);
        var k = {},
          g = B.marker;
        this.chart.styledMode ||
          ((k = { "stroke-width": B.lineWidth || 0 }),
          B.dashStyle && (k.dashstyle = B.dashStyle));
        this.legendLine = e
          .path([
            ["M", 0, a],
            ["L", v, a],
          ])
          .addClass("highcharts-graph")
          .attr(k)
          .add(c);
        g &&
          !1 !== g.enabled &&
          v &&
          ((B = Math.min(A(g.radius, p), p)),
          0 === this.symbol.indexOf("url") &&
            ((g = f(g, { width: r, height: r })), (B = 0)),
          (this.legendSymbol = v =
            e
              .symbol(this.symbol, v / 2 - B, a - B, 2 * B, 2 * B, g)
              .addClass("highcharts-point")
              .add(c)),
          (v.isMarker = !0));
      };
      a.drawRectangle = function (a, f) {
        var v = a.symbolHeight,
          r = a.options.squareSymbol;
        f.legendSymbol = this.chart.renderer
          .rect(
            r ? (a.symbolWidth - v) / 2 : 0,
            a.baseline - v + 1,
            r ? v : a.symbolWidth,
            v,
            A(a.options.symbolRadius, v / 2)
          )
          .addClass("highcharts-point")
          .attr({ zIndex: 3 })
          .add(f.legendGroup);
      };
    })(G || (G = {}));
    return G;
  });
  L(f, "Core/Series/SeriesDefaults.js", [], function () {
    return {
      lineWidth: 2,
      allowPointSelect: !1,
      crisp: !0,
      showCheckbox: !1,
      animation: { duration: 1e3 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: !0 },
          hover: {
            animation: { duration: 50 },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1,
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 },
        },
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: !0,
        formatter: function () {
          var a = this.series.chart.numberFormatter;
          return "number" !== typeof this.y ? "" : a(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast",
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0,
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: { animation: !0 },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 },
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 },
      },
      stickyTracking: !0,
      turboThreshold: 1e3,
      findNearestPointBy: "x",
    };
  });
  L(
    f,
    "Core/Series/Series.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Foundation.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/Point.js"],
      f["Core/Series/SeriesDefaults.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F, I, v, r, p) {
      var e = a.animObject,
        c = a.setAnimation,
        k = f.defaultOptions,
        g = A.registerEventOptions,
        l = G.hasTouch,
        m = G.svg,
        z = G.win,
        B = v.seriesTypes,
        J = p.addEvent,
        D = p.arrayMax,
        E = p.arrayMin,
        t = p.clamp,
        x = p.cleanRecursively,
        d = p.correctFloat,
        h = p.defined,
        b = p.erase,
        q = p.error,
        n = p.extend,
        u = p.find,
        K = p.fireEvent,
        w = p.getNestedProperty,
        S = p.isArray,
        P = p.isNumber,
        X = p.isString,
        V = p.merge,
        C = p.objectEach,
        M = p.pick,
        L = p.removeEvent,
        ca = p.splat,
        R = p.syncTimeout;
      a = (function () {
        function a() {
          this.zones =
            this.yAxis =
            this.xAxis =
            this.userOptions =
            this.tooltipOptions =
            this.processedYData =
            this.processedXData =
            this.points =
            this.options =
            this.linkedSeries =
            this.index =
            this.eventsToUnbind =
            this.eventOptions =
            this.data =
            this.chart =
            this._i =
              void 0;
        }
        a.prototype.init = function (b, c) {
          K(this, "init", { options: c });
          var a = this,
            d = b.series;
          this.eventsToUnbind = [];
          a.chart = b;
          a.options = a.setOptions(c);
          c = a.options;
          a.linkedSeries = [];
          a.bindAxes();
          n(a, {
            name: c.name,
            state: "",
            visible: !1 !== c.visible,
            selected: !0 === c.selected,
          });
          g(this, c);
          var e = c.events;
          if (
            (e && e.click) ||
            (c.point && c.point.events && c.point.events.click) ||
            c.allowPointSelect
          )
            b.runTrackerClick = !0;
          a.getColor();
          a.getSymbol();
          a.parallelArrays.forEach(function (b) {
            a[b + "Data"] || (a[b + "Data"] = []);
          });
          a.isCartesian && (b.hasCartesianSeries = !0);
          var h;
          d.length && (h = d[d.length - 1]);
          a._i = M(h && h._i, -1) + 1;
          a.opacity = a.options.opacity;
          b.orderSeries(this.insert(d));
          c.dataSorting && c.dataSorting.enabled
            ? a.setDataSortingOptions()
            : a.points || a.data || a.setData(c.data, !1);
          K(this, "afterInit");
        };
        a.prototype.is = function (b) {
          return B[b] && this instanceof B[b];
        };
        a.prototype.insert = function (b) {
          var c = this.options.index,
            a;
          if (P(c)) {
            for (a = b.length; a--; )
              if (c >= M(b[a].options.index, b[a]._i)) {
                b.splice(a + 1, 0, this);
                break;
              }
            -1 === a && b.unshift(this);
            a += 1;
          } else b.push(this);
          return M(a, b.length - 1);
        };
        a.prototype.bindAxes = function () {
          var b = this,
            c = b.options,
            a = b.chart,
            d;
          K(this, "bindAxes", null, function () {
            (b.axisTypes || []).forEach(function (e) {
              var g = 0;
              a[e].forEach(function (a) {
                d = a.options;
                if (
                  (c[e] === g && !d.isInternal) ||
                  ("undefined" !== typeof c[e] && c[e] === d.id) ||
                  ("undefined" === typeof c[e] && 0 === d.index)
                )
                  b.insert(a.series), (b[e] = a), (a.isDirty = !0);
                d.isInternal || g++;
              });
              b[e] || b.optionalAxis === e || q(18, !0, a);
            });
          });
          K(this, "afterBindAxes");
        };
        a.prototype.updateParallelArrays = function (b, c) {
          var a = b.series,
            d = arguments,
            e = P(c)
              ? function (d) {
                  var e = "y" === d && a.toYData ? a.toYData(b) : b[d];
                  a[d + "Data"][c] = e;
                }
              : function (b) {
                  Array.prototype[c].apply(
                    a[b + "Data"],
                    Array.prototype.slice.call(d, 2)
                  );
                };
          a.parallelArrays.forEach(e);
        };
        a.prototype.hasData = function () {
          return (
            (this.visible &&
              "undefined" !== typeof this.dataMax &&
              "undefined" !== typeof this.dataMin) ||
            (this.visible && this.yData && 0 < this.yData.length)
          );
        };
        a.prototype.autoIncrement = function (b) {
          var c = this.options,
            a = c.pointIntervalUnit,
            d = c.relativeXValue,
            e = this.chart.time,
            g = this.xIncrement,
            h;
          g = M(g, c.pointStart, 0);
          this.pointInterval = h = M(this.pointInterval, c.pointInterval, 1);
          d && P(b) && (h *= b);
          a &&
            ((c = new e.Date(g)),
            "day" === a
              ? e.set("Date", c, e.get("Date", c) + h)
              : "month" === a
              ? e.set("Month", c, e.get("Month", c) + h)
              : "year" === a && e.set("FullYear", c, e.get("FullYear", c) + h),
            (h = c.getTime() - g));
          if (d && P(b)) return g + h;
          this.xIncrement = g + h;
          return g;
        };
        a.prototype.setDataSortingOptions = function () {
          var b = this.options;
          n(this, {
            requireSorting: !1,
            sorted: !1,
            enabledDataSorting: !0,
            allowDG: !1,
          });
          h(b.pointRange) || (b.pointRange = 1);
        };
        a.prototype.setOptions = function (b) {
          var c = this.chart,
            a = c.options,
            d = a.plotOptions,
            e = c.userOptions || {};
          b = V(b);
          c = c.styledMode;
          var g = { plotOptions: d, userOptions: b };
          K(this, "setOptions", g);
          var f = g.plotOptions[this.type],
            n = e.plotOptions || {};
          this.userOptions = g.userOptions;
          e = V(f, d.series, e.plotOptions && e.plotOptions[this.type], b);
          this.tooltipOptions = V(
            k.tooltip,
            k.plotOptions.series && k.plotOptions.series.tooltip,
            k.plotOptions[this.type].tooltip,
            a.tooltip.userOptions,
            d.series && d.series.tooltip,
            d[this.type].tooltip,
            b.tooltip
          );
          this.stickyTracking = M(
            b.stickyTracking,
            n[this.type] && n[this.type].stickyTracking,
            n.series && n.series.stickyTracking,
            this.tooltipOptions.shared && !this.noSharedTooltip
              ? !0
              : e.stickyTracking
          );
          null === f.marker && delete e.marker;
          this.zoneAxis = e.zoneAxis;
          d = this.zones = (e.zones || []).slice();
          (!e.negativeColor && !e.negativeFillColor) ||
            e.zones ||
            ((a = {
              value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
              className: "highcharts-negative",
            }),
            c ||
              ((a.color = e.negativeColor),
              (a.fillColor = e.negativeFillColor)),
            d.push(a));
          d.length &&
            h(d[d.length - 1].value) &&
            d.push(c ? {} : { color: this.color, fillColor: this.fillColor });
          K(this, "afterSetOptions", { options: e });
          return e;
        };
        a.prototype.getName = function () {
          return M(this.options.name, "Series " + (this.index + 1));
        };
        a.prototype.getCyclic = function (b, c, a) {
          var d = this.chart,
            e = this.userOptions,
            g = b + "Index",
            f = b + "Counter",
            k = a ? a.length : M(d.options.chart[b + "Count"], d[b + "Count"]);
          if (!c) {
            var n = M(e[g], e["_" + g]);
            h(n) ||
              (d.series.length || (d[f] = 0),
              (e["_" + g] = n = d[f] % k),
              (d[f] += 1));
            a && (c = a[n]);
          }
          "undefined" !== typeof n && (this[g] = n);
          this[b] = c;
        };
        a.prototype.getColor = function () {
          this.chart.styledMode
            ? this.getCyclic("color")
            : this.options.colorByPoint
            ? (this.color = "#cccccc")
            : this.getCyclic(
                "color",
                this.options.color || k.plotOptions[this.type].color,
                this.chart.options.colors
              );
        };
        a.prototype.getPointsCollection = function () {
          return (this.hasGroupedData ? this.points : this.data) || [];
        };
        a.prototype.getSymbol = function () {
          this.getCyclic(
            "symbol",
            this.options.marker.symbol,
            this.chart.options.symbols
          );
        };
        a.prototype.findPointIndex = function (b, c) {
          var a = b.id,
            d = b.x,
            e = this.points,
            g = this.options.dataSorting,
            h,
            f;
          if (a) (g = this.chart.get(a)), g instanceof F && (h = g);
          else if (
            this.linkedParent ||
            this.enabledDataSorting ||
            this.options.relativeXValue
          )
            if (
              ((h = function (c) {
                return !c.touched && c.index === b.index;
              }),
              g && g.matchByName
                ? (h = function (c) {
                    return !c.touched && c.name === b.name;
                  })
                : this.options.relativeXValue &&
                  (h = function (c) {
                    return !c.touched && c.options.x === b.x;
                  }),
              (h = u(e, h)),
              !h)
            )
              return;
          if (h) {
            var k = h && h.index;
            "undefined" !== typeof k && (f = !0);
          }
          "undefined" === typeof k && P(d) && (k = this.xData.indexOf(d, c));
          -1 !== k &&
            "undefined" !== typeof k &&
            this.cropped &&
            (k = k >= this.cropStart ? k - this.cropStart : k);
          !f && P(k) && e[k] && e[k].touched && (k = void 0);
          return k;
        };
        a.prototype.updateData = function (b, c) {
          var a = this.options,
            d = a.dataSorting,
            e = this.points,
            g = [],
            f = this.requireSorting,
            k = b.length === e.length,
            n,
            l,
            m,
            q = !0;
          this.xIncrement = null;
          b.forEach(function (b, c) {
            var l =
                (h(b) &&
                  this.pointClass.prototype.optionsToObject.call(
                    { series: this },
                    b
                  )) ||
                {},
              q = l.x;
            if (l.id || P(q)) {
              if (
                ((l = this.findPointIndex(l, m)),
                -1 === l || "undefined" === typeof l
                  ? g.push(b)
                  : e[l] && b !== a.data[l]
                  ? (e[l].update(b, !1, null, !1),
                    (e[l].touched = !0),
                    f && (m = l + 1))
                  : e[l] && (e[l].touched = !0),
                !k || c !== l || (d && d.enabled) || this.hasDerivedData)
              )
                n = !0;
            } else g.push(b);
          }, this);
          if (n)
            for (b = e.length; b--; )
              (l = e[b]) && !l.touched && l.remove && l.remove(!1, c);
          else
            !k || (d && d.enabled)
              ? (q = !1)
              : (b.forEach(function (b, c) {
                  b !== e[c].y && e[c].update && e[c].update(b, !1, null, !1);
                }),
                (g.length = 0));
          e.forEach(function (b) {
            b && (b.touched = !1);
          });
          if (!q) return !1;
          g.forEach(function (b) {
            this.addPoint(b, !1, null, null, !1);
          }, this);
          null === this.xIncrement &&
            this.xData &&
            this.xData.length &&
            ((this.xIncrement = D(this.xData)), this.autoIncrement());
          return !0;
        };
        a.prototype.setData = function (b, c, a, d) {
          void 0 === c && (c = !0);
          var e = this,
            g = e.points,
            h = (g && g.length) || 0,
            f = e.options,
            k = e.chart,
            n = f.dataSorting,
            l = e.xAxis,
            m = f.turboThreshold,
            p = this.xData,
            u = this.yData,
            t = e.pointArrayMap;
          t = t && t.length;
          var H = f.keys,
            x,
            r = 0,
            z = 1,
            O = null;
          if (!k.options.chart.allowMutatingData) {
            f.data && delete e.options.data;
            e.userOptions.data && delete e.userOptions.data;
            var w = V(!0, b);
          }
          b = w || b || [];
          w = b.length;
          n && n.enabled && (b = this.sortData(b));
          k.options.chart.allowMutatingData &&
            !1 !== d &&
            w &&
            h &&
            !e.cropped &&
            !e.hasGroupedData &&
            e.visible &&
            !e.boosted &&
            (x = this.updateData(b, a));
          if (!x) {
            e.xIncrement = null;
            e.colorCounter = 0;
            this.parallelArrays.forEach(function (b) {
              e[b + "Data"].length = 0;
            });
            if (m && w > m)
              if (((O = e.getFirstValidPoint(b)), P(O)))
                for (a = 0; a < w; a++)
                  (p[a] = this.autoIncrement()), (u[a] = b[a]);
              else if (S(O))
                if (t)
                  if (O.length === t)
                    for (a = 0; a < w; a++)
                      (p[a] = this.autoIncrement()), (u[a] = b[a]);
                  else
                    for (a = 0; a < w; a++)
                      (d = b[a]), (p[a] = d[0]), (u[a] = d.slice(1, t + 1));
                else if (
                  (H &&
                    ((r = H.indexOf("x")),
                    (z = H.indexOf("y")),
                    (r = 0 <= r ? r : 0),
                    (z = 0 <= z ? z : 1)),
                  1 === O.length && (z = 0),
                  r === z)
                )
                  for (a = 0; a < w; a++)
                    (p[a] = this.autoIncrement()), (u[a] = b[a][z]);
                else
                  for (a = 0; a < w; a++)
                    (d = b[a]), (p[a] = d[r]), (u[a] = d[z]);
              else q(12, !1, k);
            else
              for (a = 0; a < w; a++)
                "undefined" !== typeof b[a] &&
                  ((d = { series: e }),
                  e.pointClass.prototype.applyOptions.apply(d, [b[a]]),
                  e.updateParallelArrays(d, a));
            u && X(u[0]) && q(14, !0, k);
            e.data = [];
            e.options.data = e.userOptions.data = b;
            for (a = h; a--; ) g[a] && g[a].destroy && g[a].destroy();
            l && (l.minRange = l.userMinRange);
            e.isDirty = k.isDirtyBox = !0;
            e.isDirtyData = !!g;
            a = !1;
          }
          "point" === f.legendType &&
            (this.processData(), this.generatePoints());
          c && k.redraw(a);
        };
        a.prototype.sortData = function (b) {
          var c = this,
            a = c.options.dataSorting.sortKey || "y",
            d = function (b, c) {
              return (
                (h(c) &&
                  b.pointClass.prototype.optionsToObject.call(
                    { series: b },
                    c
                  )) ||
                {}
              );
            };
          b.forEach(function (a, e) {
            b[e] = d(c, a);
            b[e].index = e;
          }, this);
          b.concat()
            .sort(function (b, c) {
              b = w(a, b);
              c = w(a, c);
              return c < b ? -1 : c > b ? 1 : 0;
            })
            .forEach(function (b, c) {
              b.x = c;
            }, this);
          c.linkedSeries &&
            c.linkedSeries.forEach(function (c) {
              var a = c.options,
                e = a.data;
              (a.dataSorting && a.dataSorting.enabled) ||
                !e ||
                (e.forEach(function (a, g) {
                  e[g] = d(c, a);
                  b[g] && ((e[g].x = b[g].x), (e[g].index = g));
                }),
                c.setData(e, !1));
            });
          return b;
        };
        a.prototype.getProcessedData = function (b) {
          var c = this.xAxis,
            a = this.options,
            d = a.cropThreshold,
            e = b || this.getExtremesFromAll || a.getExtremesFromAll,
            g = this.isCartesian;
          b = c && c.val2lin;
          a = !(!c || !c.logarithmic);
          var h = 0,
            f = this.xData,
            k = this.yData,
            n = this.requireSorting;
          var l = !1;
          var m = f.length;
          if (c) {
            l = c.getExtremes();
            var p = l.min;
            var u = l.max;
            l = !(!c.categories || c.names.length);
          }
          if (g && this.sorted && !e && (!d || m > d || this.forceCrop))
            if (f[m - 1] < p || f[0] > u) (f = []), (k = []);
            else if (this.yData && (f[0] < p || f[m - 1] > u)) {
              var t = this.cropData(this.xData, this.yData, p, u);
              f = t.xData;
              k = t.yData;
              h = t.start;
              t = !0;
            }
          for (d = f.length || 1; --d; )
            if (
              ((c = a ? b(f[d]) - b(f[d - 1]) : f[d] - f[d - 1]),
              0 < c && ("undefined" === typeof H || c < H))
            )
              var H = c;
            else 0 > c && n && !l && (q(15, !1, this.chart), (n = !1));
          return {
            xData: f,
            yData: k,
            cropped: t,
            cropStart: h,
            closestPointRange: H,
          };
        };
        a.prototype.processData = function (b) {
          var c = this.xAxis;
          if (
            this.isCartesian &&
            !this.isDirty &&
            !c.isDirty &&
            !this.yAxis.isDirty &&
            !b
          )
            return !1;
          b = this.getProcessedData();
          this.cropped = b.cropped;
          this.cropStart = b.cropStart;
          this.processedXData = b.xData;
          this.processedYData = b.yData;
          this.closestPointRange = this.basePointRange = b.closestPointRange;
          K(this, "afterProcessData");
        };
        a.prototype.cropData = function (b, c, a, d, e) {
          var g = b.length,
            h,
            f = 0,
            k = g;
          e = M(e, this.cropShoulder);
          for (h = 0; h < g; h++)
            if (b[h] >= a) {
              f = Math.max(0, h - e);
              break;
            }
          for (a = h; a < g; a++)
            if (b[a] > d) {
              k = a + e;
              break;
            }
          return {
            xData: b.slice(f, k),
            yData: c.slice(f, k),
            start: f,
            end: k,
          };
        };
        a.prototype.generatePoints = function () {
          var b = this.options,
            c = this.processedData || b.data,
            a = this.processedXData,
            d = this.processedYData,
            e = this.pointClass,
            g = a.length,
            h = this.cropStart || 0,
            f = this.hasGroupedData,
            k = b.keys,
            l = [];
          b = b.dataGrouping && b.dataGrouping.groupAll ? h : 0;
          var m,
            q,
            p = this.data;
          if (!p && !f) {
            var u = [];
            u.length = c.length;
            p = this.data = u;
          }
          k && f && (this.options.keys = !1);
          for (q = 0; q < g; q++) {
            u = h + q;
            if (f) {
              var t = new e().init(this, [a[q]].concat(ca(d[q])));
              t.dataGroup = this.groupMap[b + q];
              t.dataGroup.options &&
                ((t.options = t.dataGroup.options),
                n(t, t.dataGroup.options),
                delete t.dataLabels);
            } else
              (t = p[u]) ||
                "undefined" === typeof c[u] ||
                (p[u] = t = new e().init(this, c[u], a[q]));
            t && ((t.index = f ? b + q : u), (l[q] = t));
          }
          this.options.keys = k;
          if (p && (g !== (m = p.length) || f))
            for (q = 0; q < m; q++)
              q !== h || f || (q += g),
                p[q] && (p[q].destroyElements(), (p[q].plotX = void 0));
          this.data = p;
          this.points = l;
          K(this, "afterGeneratePoints");
        };
        a.prototype.getXExtremes = function (b) {
          return { min: E(b), max: D(b) };
        };
        a.prototype.getExtremes = function (b, c) {
          var a = this.xAxis,
            d = this.yAxis,
            e = this.processedXData || this.xData,
            g = [],
            h = this.requireSorting ? this.cropShoulder : 0;
          d = d ? d.positiveValuesOnly : !1;
          var f,
            k = 0,
            n = 0,
            l = 0;
          b = b || this.stackedYData || this.processedYData || [];
          var m = b.length;
          if (a) {
            var q = a.getExtremes();
            k = q.min;
            n = q.max;
          }
          for (f = 0; f < m; f++) {
            var p = e[f];
            q = b[f];
            var u = (P(q) || S(q)) && (q.length || 0 < q || !d);
            p =
              c ||
              this.getExtremesFromAll ||
              this.options.getExtremesFromAll ||
              this.cropped ||
              !a ||
              ((e[f + h] || p) >= k && (e[f - h] || p) <= n);
            if (u && p)
              if ((u = q.length)) for (; u--; ) P(q[u]) && (g[l++] = q[u]);
              else g[l++] = q;
          }
          b = { activeYData: g, dataMin: E(g), dataMax: D(g) };
          K(this, "afterGetExtremes", { dataExtremes: b });
          return b;
        };
        a.prototype.applyExtremes = function () {
          var b = this.getExtremes();
          this.dataMin = b.dataMin;
          this.dataMax = b.dataMax;
          return b;
        };
        a.prototype.getFirstValidPoint = function (b) {
          for (var c = b.length, a = 0, d = null; null === d && a < c; )
            (d = b[a]), a++;
          return d;
        };
        a.prototype.translate = function () {
          this.processedXData || this.processData();
          this.generatePoints();
          var b = this.options,
            c = b.stacking,
            a = this.xAxis,
            e = a.categories,
            g = this.enabledDataSorting,
            f = this.yAxis,
            k = this.points,
            n = k.length,
            l = this.pointPlacementToXValue(),
            m = !!l,
            q = b.threshold,
            p = b.startFromThreshold ? q : 0,
            u = this.zoneAxis || "y",
            x,
            r,
            z = Number.MAX_VALUE;
          for (x = 0; x < n; x++) {
            var w = k[x],
              C = w.x,
              E = void 0,
              D = void 0,
              v = w.y,
              B = w.low,
              J =
                c &&
                f.stacking &&
                f.stacking.stacks[
                  (this.negStacks && v < (p ? 0 : q) ? "-" : "") + this.stackKey
                ];
            if (
              (f.positiveValuesOnly && !f.validatePositiveValue(v)) ||
              (a.positiveValuesOnly && !a.validatePositiveValue(C))
            )
              w.isNull = !0;
            w.plotX = r = d(
              t(a.translate(C, 0, 0, 0, 1, l, "flags" === this.type), -1e5, 1e5)
            );
            if (c && this.visible && J && J[C]) {
              var A = this.getStackIndicator(A, C, this.index);
              w.isNull || ((E = J[C]), (D = E.points[A.key]));
            }
            S(D) &&
              ((B = D[0]),
              (v = D[1]),
              B === p && A.key === J[C].base && (B = M(P(q) && q, f.min)),
              f.positiveValuesOnly && 0 >= B && (B = null),
              (w.total = w.stackTotal = E.total),
              (w.percentage = E.total && (w.y / E.total) * 100),
              (w.stackY = v),
              this.irregularWidths ||
                E.setOffset(this.pointXOffset || 0, this.barW || 0));
            w.yBottom = h(B) ? t(f.translate(B, 0, 1, 0, 1), -1e5, 1e5) : null;
            this.dataModify && (v = this.dataModify.modifyValue(v, x));
            w.plotY = void 0;
            P(v) &&
              ((E = f.translate(v, !1, !0, !1, !0)),
              "undefined" !== typeof E && (w.plotY = t(E, -1e5, 1e5)));
            w.isInside = this.isPointInside(w);
            w.clientX = m ? d(a.translate(C, 0, 0, 0, 1, l)) : r;
            w.negative = w[u] < (b[u + "Threshold"] || q || 0);
            w.category = M(e && e[w.x], w.x);
            if (!w.isNull && !1 !== w.visible) {
              "undefined" !== typeof y && (z = Math.min(z, Math.abs(r - y)));
              var y = r;
            }
            w.zone = this.zones.length ? w.getZone() : void 0;
            !w.graphic && this.group && g && (w.isNew = !0);
          }
          this.closestPointRangePx = z;
          K(this, "afterTranslate");
        };
        a.prototype.getValidPoints = function (b, c, a) {
          var d = this.chart;
          return (b || this.points || []).filter(function (b) {
            return c &&
              !d.isInsidePlot(b.plotX, b.plotY, { inverted: d.inverted })
              ? !1
              : !1 !== b.visible && (a || !b.isNull);
          });
        };
        a.prototype.getClipBox = function () {
          var b = this.chart,
            c = this.xAxis,
            a = this.yAxis,
            d = V(b.clipBox);
          c && c.len !== b.plotSizeX && (d.width = c.len);
          a && a.len !== b.plotSizeY && (d.height = a.len);
          return d;
        };
        a.prototype.getSharedClipKey = function () {
          return (this.sharedClipKey =
            (this.options.xAxis || 0) + "," + (this.options.yAxis || 0));
        };
        a.prototype.setClip = function () {
          var b = this.chart,
            c = this.group,
            a = this.markerGroup,
            d = b.sharedClips;
          b = b.renderer;
          var e = this.getClipBox(),
            g = this.getSharedClipKey(),
            h = d[g];
          h ? h.animate(e) : (d[g] = h = b.clipRect(e));
          c && c.clip(!1 === this.options.clip ? void 0 : h);
          a && a.clip();
        };
        a.prototype.animate = function (b) {
          var c = this.chart,
            a = this.group,
            d = this.markerGroup,
            g = c.inverted,
            h = e(this.options.animation),
            f = [this.getSharedClipKey(), h.duration, h.easing, h.defer].join(),
            k = c.sharedClips[f],
            n = c.sharedClips[f + "m"];
          if (b && a)
            (h = this.getClipBox()),
              k
                ? k.attr("height", h.height)
                : ((h.width = 0),
                  g && (h.x = c.plotHeight),
                  (k = c.renderer.clipRect(h)),
                  (c.sharedClips[f] = k),
                  (n = c.renderer.clipRect({
                    x: g ? (c.plotSizeX || 0) + 99 : -99,
                    y: g ? -c.plotLeft : -c.plotTop,
                    width: 99,
                    height: g ? c.chartWidth : c.chartHeight,
                  })),
                  (c.sharedClips[f + "m"] = n)),
              a.clip(k),
              d && d.clip(n);
          else if (k && !k.hasClass("highcharts-animating")) {
            c = this.getClipBox();
            var l = h.step;
            d &&
              d.element.childNodes.length &&
              (h.step = function (b, c) {
                l && l.apply(c, arguments);
                n &&
                  n.element &&
                  n.attr(c.prop, "width" === c.prop ? b + 99 : b);
              });
            k.addClass("highcharts-animating").animate(c, h);
          }
        };
        a.prototype.afterAnimate = function () {
          var b = this;
          this.setClip();
          C(this.chart.sharedClips, function (c, a, d) {
            c &&
              !b.chart.container.querySelector(
                '[clip-path="url(#'.concat(c.id, ')"]')
              ) &&
              (c.destroy(), delete d[a]);
          });
          this.finishedAnimating = !0;
          K(this, "afterAnimate");
        };
        a.prototype.drawPoints = function () {
          var b = this.points,
            c = this.chart,
            a = this.options.marker,
            d = this[this.specialGroup] || this.markerGroup,
            e = this.xAxis,
            g = M(
              a.enabled,
              !e || e.isRadial ? !0 : null,
              this.closestPointRangePx >= a.enabledThreshold * a.radius
            ),
            h,
            f;
          if (!1 !== a.enabled || this._hasPointMarkers)
            for (h = 0; h < b.length; h++) {
              var k = b[h];
              var n = (f = k.graphic) ? "animate" : "attr";
              var l = k.marker || {};
              var m = !!k.marker;
              if (
                ((g && "undefined" === typeof l.enabled) || l.enabled) &&
                !k.isNull &&
                !1 !== k.visible
              ) {
                var q = M(l.symbol, this.symbol, "rect");
                var p = this.markerAttribs(k, k.selected && "select");
                this.enabledDataSorting &&
                  (k.startXPos = e.reversed ? -(p.width || 0) : e.width);
                var u = !1 !== k.isInside;
                f
                  ? f[u ? "show" : "hide"](u).animate(p)
                  : u &&
                    (0 < (p.width || 0) || k.hasImage) &&
                    ((k.graphic = f =
                      c.renderer
                        .symbol(q, p.x, p.y, p.width, p.height, m ? l : a)
                        .add(d)),
                    this.enabledDataSorting &&
                      c.hasRendered &&
                      (f.attr({ x: k.startXPos }), (n = "animate")));
                f && "animate" === n && f[u ? "show" : "hide"](u).animate(p);
                if (f && !c.styledMode)
                  f[n](this.pointAttribs(k, k.selected && "select"));
                f && f.addClass(k.getClassName(), !0);
              } else f && (k.graphic = f.destroy());
            }
        };
        a.prototype.markerAttribs = function (b, c) {
          var a = this.options,
            d = a.marker,
            e = b.marker || {},
            g = e.symbol || d.symbol,
            h = M(e.radius, d && d.radius);
          c &&
            ((d = d.states[c]),
            (c = e.states && e.states[c]),
            (h = M(
              c && c.radius,
              d && d.radius,
              h && h + ((d && d.radiusPlus) || 0)
            )));
          b.hasImage = g && 0 === g.indexOf("url");
          b.hasImage && (h = 0);
          b = P(h)
            ? {
                x: a.crisp ? Math.floor(b.plotX - h) : b.plotX - h,
                y: b.plotY - h,
              }
            : {};
          h && (b.width = b.height = 2 * h);
          return b;
        };
        a.prototype.pointAttribs = function (b, c) {
          var a = this.options.marker,
            d = b && b.options,
            e = (d && d.marker) || {},
            g = d && d.color,
            h = b && b.color,
            f = b && b.zone && b.zone.color,
            k = this.color;
          b = M(e.lineWidth, a.lineWidth);
          d = 1;
          k = g || f || h || k;
          g = e.fillColor || a.fillColor || k;
          h = e.lineColor || a.lineColor || k;
          c = c || "normal";
          a = a.states[c] || {};
          c = (e.states && e.states[c]) || {};
          b = M(
            c.lineWidth,
            a.lineWidth,
            b + M(c.lineWidthPlus, a.lineWidthPlus, 0)
          );
          g = c.fillColor || a.fillColor || g;
          h = c.lineColor || a.lineColor || h;
          d = M(c.opacity, a.opacity, d);
          return { stroke: h, "stroke-width": b, fill: g, opacity: d };
        };
        a.prototype.destroy = function (c) {
          var a = this,
            d = a.chart,
            e = /AppleWebKit\/533/.test(z.navigator.userAgent),
            g = a.data || [],
            h,
            f,
            k,
            n;
          K(a, "destroy", { keepEventsForUpdate: c });
          this.removeEvents(c);
          (a.axisTypes || []).forEach(function (c) {
            (n = a[c]) &&
              n.series &&
              (b(n.series, a), (n.isDirty = n.forceRedraw = !0));
          });
          a.legendItem && a.chart.legend.destroyItem(a);
          for (f = g.length; f--; ) (k = g[f]) && k.destroy && k.destroy();
          a.clips &&
            a.clips.forEach(function (b) {
              return b.destroy();
            });
          p.clearTimeout(a.animationTimeout);
          C(a, function (b, c) {
            b instanceof r &&
              !b.survive &&
              ((h = e && "group" === c ? "hide" : "destroy"), b[h]());
          });
          d.hoverSeries === a && (d.hoverSeries = void 0);
          b(d.series, a);
          d.orderSeries();
          C(a, function (b, d) {
            (c && "hcEvents" === d) || delete a[d];
          });
        };
        a.prototype.applyZones = function () {
          var b = this,
            c = this.chart,
            a = c.renderer,
            d = this.zones,
            e = this.clips || [],
            g = this.graph,
            h = this.area,
            f = Math.max(c.plotWidth, c.plotHeight),
            k = this[(this.zoneAxis || "y") + "Axis"],
            n = c.inverted,
            l,
            m,
            q,
            p,
            u,
            x,
            w,
            r,
            z = !1;
          if (d.length && (g || h) && k && "undefined" !== typeof k.min) {
            var C = k.reversed;
            var E = k.horiz;
            g && !this.showLine && g.hide();
            h && h.hide();
            var D = k.getExtremes();
            d.forEach(function (d, H) {
              l = C ? (E ? c.plotWidth : 0) : E ? 0 : k.toPixels(D.min) || 0;
              l = t(M(m, l), 0, f);
              m = t(Math.round(k.toPixels(M(d.value, D.max), !0) || 0), 0, f);
              z && (l = m = k.toPixels(D.max));
              p = Math.abs(l - m);
              u = Math.min(l, m);
              x = Math.max(l, m);
              k.isXAxis
                ? ((q = { x: n ? x : u, y: 0, width: p, height: f }),
                  E || (q.x = c.plotHeight - q.x))
                : ((q = { x: 0, y: n ? x : u, width: f, height: p }),
                  E && (q.y = c.plotWidth - q.y));
              n &&
                a.isVML &&
                (q = k.isXAxis
                  ? { x: 0, y: C ? u : x, height: q.width, width: c.chartWidth }
                  : {
                      x: q.y - c.plotLeft - c.spacingBox.x,
                      y: 0,
                      width: q.height,
                      height: c.chartHeight,
                    });
              e[H] ? e[H].animate(q) : (e[H] = a.clipRect(q));
              w = b["zone-area-" + H];
              r = b["zone-graph-" + H];
              g && r && r.clip(e[H]);
              h && w && w.clip(e[H]);
              z = d.value > D.max;
              b.resetZones && 0 === m && (m = void 0);
            });
            this.clips = e;
          } else b.visible && (g && g.show(), h && h.show());
        };
        a.prototype.invertGroups = function (b) {
          function c() {
            ["group", "markerGroup"].forEach(function (c) {
              a[c] &&
                (d.renderer.isVML &&
                  a[c].attr({ width: a.yAxis.len, height: a.xAxis.len }),
                (a[c].width = a.yAxis.len),
                (a[c].height = a.xAxis.len),
                a[c].invert(a.isRadialSeries ? !1 : b));
            });
          }
          var a = this,
            d = a.chart;
          a.xAxis &&
            (a.eventsToUnbind.push(J(d, "resize", c)),
            c(),
            (a.invertGroups = c));
        };
        a.prototype.plotGroup = function (b, c, a, d, e) {
          var g = this[b],
            f = !g;
          a = { visibility: a, zIndex: d || 0.1 };
          "undefined" === typeof this.opacity ||
            this.chart.styledMode ||
            "inactive" === this.state ||
            (a.opacity = this.opacity);
          f && (this[b] = g = this.chart.renderer.g().add(e));
          g.addClass(
            "highcharts-" +
              c +
              " highcharts-series-" +
              this.index +
              " highcharts-" +
              this.type +
              "-series " +
              (h(this.colorIndex)
                ? "highcharts-color-" + this.colorIndex + " "
                : "") +
              (this.options.className || "") +
              (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""),
            !0
          );
          g.attr(a)[f ? "attr" : "animate"](this.getPlotBox());
          return g;
        };
        a.prototype.getPlotBox = function () {
          var b = this.chart,
            c = this.xAxis,
            a = this.yAxis;
          b.inverted && ((c = a), (a = this.xAxis));
          return {
            translateX: c ? c.left : b.plotLeft,
            translateY: a ? a.top : b.plotTop,
            scaleX: 1,
            scaleY: 1,
          };
        };
        a.prototype.removeEvents = function (b) {
          b || L(this);
          this.eventsToUnbind.length &&
            (this.eventsToUnbind.forEach(function (b) {
              b();
            }),
            (this.eventsToUnbind.length = 0));
        };
        a.prototype.render = function () {
          var b = this,
            c = b.chart,
            a = b.options,
            d = e(a.animation),
            g = b.visible ? "inherit" : "hidden",
            h = a.zIndex,
            f = b.hasRendered,
            k = c.seriesGroup,
            n = c.inverted;
          c = !b.finishedAnimating && c.renderer.isSVG ? d.duration : 0;
          K(this, "render");
          var l = b.plotGroup("group", "series", g, h, k);
          b.markerGroup = b.plotGroup("markerGroup", "markers", g, h, k);
          !1 !== a.clip && b.setClip();
          b.animate && c && b.animate(!0);
          l.inverted = M(b.invertible, b.isCartesian) ? n : !1;
          b.drawGraph && (b.drawGraph(), b.applyZones());
          b.visible && b.drawPoints();
          b.drawDataLabels && b.drawDataLabels();
          b.redrawPoints && b.redrawPoints();
          b.drawTracker &&
            !1 !== b.options.enableMouseTracking &&
            b.drawTracker();
          b.invertGroups(n);
          b.animate && c && b.animate();
          f ||
            (c && d.defer && (c += d.defer),
            (b.animationTimeout = R(function () {
              b.afterAnimate();
            }, c || 0)));
          b.isDirty = !1;
          b.hasRendered = !0;
          K(b, "afterRender");
        };
        a.prototype.redraw = function () {
          var b = this.chart,
            c = this.isDirty || this.isDirtyData,
            a = this.group,
            d = this.xAxis,
            e = this.yAxis;
          a &&
            (b.inverted && a.attr({ width: b.plotWidth, height: b.plotHeight }),
            a.animate({
              translateX: M(d && d.left, b.plotLeft),
              translateY: M(e && e.top, b.plotTop),
            }));
          this.translate();
          this.render();
          c && delete this.kdTree;
        };
        a.prototype.searchPoint = function (b, c) {
          var a = this.xAxis,
            d = this.yAxis,
            e = this.chart.inverted;
          return this.searchKDTree(
            {
              clientX: e ? a.len - b.chartY + a.pos : b.chartX - a.pos,
              plotY: e ? d.len - b.chartX + d.pos : b.chartY - d.pos,
            },
            c,
            b
          );
        };
        a.prototype.buildKDTree = function (b) {
          function c(b, d, e) {
            var g = b && b.length;
            if (g) {
              var h = a.kdAxisArray[d % e];
              b.sort(function (b, c) {
                return b[h] - c[h];
              });
              g = Math.floor(g / 2);
              return {
                point: b[g],
                left: c(b.slice(0, g), d + 1, e),
                right: c(b.slice(g + 1), d + 1, e),
              };
            }
          }
          this.buildingKdTree = !0;
          var a = this,
            d = -1 < a.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          delete a.kdTree;
          R(
            function () {
              a.kdTree = c(a.getValidPoints(null, !a.directTouch), d, d);
              a.buildingKdTree = !1;
            },
            a.options.kdNow || (b && "touchstart" === b.type) ? 0 : 1
          );
        };
        a.prototype.searchKDTree = function (b, c, a) {
          function d(b, c, a, n) {
            var l = c.point,
              m = e.kdAxisArray[a % n],
              q = l,
              p = h(b[g]) && h(l[g]) ? Math.pow(b[g] - l[g], 2) : null;
            var u = h(b[f]) && h(l[f]) ? Math.pow(b[f] - l[f], 2) : null;
            u = (p || 0) + (u || 0);
            l.dist = h(u) ? Math.sqrt(u) : Number.MAX_VALUE;
            l.distX = h(p) ? Math.sqrt(p) : Number.MAX_VALUE;
            m = b[m] - l[m];
            u = 0 > m ? "left" : "right";
            p = 0 > m ? "right" : "left";
            c[u] && ((u = d(b, c[u], a + 1, n)), (q = u[k] < q[k] ? u : l));
            c[p] &&
              Math.sqrt(m * m) < q[k] &&
              ((b = d(b, c[p], a + 1, n)), (q = b[k] < q[k] ? b : q));
            return q;
          }
          var e = this,
            g = this.kdAxisArray[0],
            f = this.kdAxisArray[1],
            k = c ? "distX" : "dist";
          c = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
          this.kdTree || this.buildingKdTree || this.buildKDTree(a);
          if (this.kdTree) return d(b, this.kdTree, c, c);
        };
        a.prototype.pointPlacementToXValue = function () {
          var b = this.options,
            c = b.pointRange,
            a = this.xAxis;
          b = b.pointPlacement;
          "between" === b && (b = a.reversed ? -0.5 : 0.5);
          return P(b) ? b * (c || a.pointRange) : 0;
        };
        a.prototype.isPointInside = function (b) {
          var c = this.chart,
            a = this.xAxis,
            d = this.yAxis;
          return (
            "undefined" !== typeof b.plotY &&
            "undefined" !== typeof b.plotX &&
            0 <= b.plotY &&
            b.plotY <= (d ? d.len : c.plotHeight) &&
            0 <= b.plotX &&
            b.plotX <= (a ? a.len : c.plotWidth)
          );
        };
        a.prototype.drawTracker = function () {
          var b = this,
            c = b.options,
            a = c.trackByArea,
            d = [].concat(a ? b.areaPath : b.graphPath),
            e = b.chart,
            g = e.pointer,
            h = e.renderer,
            f = e.options.tooltip.snap,
            k = b.tracker,
            n = function (c) {
              if (e.hoverSeries !== b) b.onMouseOver();
            },
            q = "rgba(192,192,192," + (m ? 0.0001 : 0.002) + ")";
          k
            ? k.attr({ d: d })
            : b.graph &&
              ((b.tracker = h
                .path(d)
                .attr({
                  visibility: b.visible ? "inherit" : "hidden",
                  zIndex: 2,
                })
                .addClass(
                  a ? "highcharts-tracker-area" : "highcharts-tracker-line"
                )
                .add(b.group)),
              e.styledMode ||
                b.tracker.attr({
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  stroke: q,
                  fill: a ? q : "none",
                  "stroke-width": b.graph.strokeWidth() + (a ? 0 : 2 * f),
                }),
              [b.tracker, b.markerGroup, b.dataLabelsGroup].forEach(function (
                b
              ) {
                if (
                  b &&
                  (b
                    .addClass("highcharts-tracker")
                    .on("mouseover", n)
                    .on("mouseout", function (b) {
                      g.onTrackerMouseOut(b);
                    }),
                  c.cursor && !e.styledMode && b.css({ cursor: c.cursor }),
                  l)
                )
                  b.on("touchstart", n);
              }));
          K(this, "afterDrawTracker");
        };
        a.prototype.addPoint = function (b, c, a, d, e) {
          var g = this.options,
            h = this.data,
            f = this.chart,
            k = this.xAxis;
          k = k && k.hasNames && k.names;
          var n = g.data,
            l = this.xData,
            m;
          c = M(c, !0);
          var q = { series: this };
          this.pointClass.prototype.applyOptions.apply(q, [b]);
          var p = q.x;
          var u = l.length;
          if (this.requireSorting && p < l[u - 1])
            for (m = !0; u && l[u - 1] > p; ) u--;
          this.updateParallelArrays(q, "splice", u, 0, 0);
          this.updateParallelArrays(q, u);
          k && q.name && (k[p] = q.name);
          n.splice(u, 0, b);
          if (m || this.processedData)
            this.data.splice(u, 0, null), this.processData();
          "point" === g.legendType && this.generatePoints();
          a &&
            (h[0] && h[0].remove
              ? h[0].remove(!1)
              : (h.shift(), this.updateParallelArrays(q, "shift"), n.shift()));
          !1 !== e && K(this, "addPoint", { point: q });
          this.isDirtyData = this.isDirty = !0;
          c && f.redraw(d);
        };
        a.prototype.removePoint = function (b, a, d) {
          var e = this,
            g = e.data,
            h = g[b],
            f = e.points,
            k = e.chart,
            n = function () {
              f && f.length === g.length && f.splice(b, 1);
              g.splice(b, 1);
              e.options.data.splice(b, 1);
              e.updateParallelArrays(h || { series: e }, "splice", b, 1);
              h && h.destroy();
              e.isDirty = !0;
              e.isDirtyData = !0;
              a && k.redraw();
            };
          c(d, k);
          a = M(a, !0);
          h ? h.firePointEvent("remove", null, n) : n();
        };
        a.prototype.remove = function (b, c, a, d) {
          function e() {
            g.destroy(d);
            h.isDirtyLegend = h.isDirtyBox = !0;
            h.linkSeries();
            M(b, !0) && h.redraw(c);
          }
          var g = this,
            h = g.chart;
          !1 !== a ? K(g, "remove", null, e) : e();
        };
        a.prototype.update = function (b, c) {
          b = x(b, this.userOptions);
          K(this, "update", { options: b });
          var a = this,
            d = a.chart,
            e = a.userOptions,
            g = a.initialType || a.type,
            h = d.options.plotOptions,
            f = B[g].prototype,
            k = a.finishedAnimating && { animation: !1 },
            l = {},
            m,
            p = ["eventOptions", "navigatorSeries", "baseSeries"],
            u = b.type || e.type || d.options.chart.type,
            t = !(
              this.hasDerivedData ||
              (u && u !== this.type) ||
              "undefined" !== typeof b.pointStart ||
              "undefined" !== typeof b.pointInterval ||
              "undefined" !== typeof b.relativeXValue ||
              b.joinBy ||
              b.mapData ||
              a.hasOptionChanged("dataGrouping") ||
              a.hasOptionChanged("pointStart") ||
              a.hasOptionChanged("pointInterval") ||
              a.hasOptionChanged("pointIntervalUnit") ||
              a.hasOptionChanged("keys")
            );
          u = u || g;
          t &&
            (p.push(
              "data",
              "isDirtyData",
              "points",
              "processedData",
              "processedXData",
              "processedYData",
              "xIncrement",
              "cropped",
              "_hasPointMarkers",
              "_hasPointLabels",
              "clips",
              "nodes",
              "layout",
              "level",
              "mapMap",
              "mapData",
              "minY",
              "maxY",
              "minX",
              "maxX"
            ),
            !1 !== b.visible && p.push("area", "graph"),
            a.parallelArrays.forEach(function (b) {
              p.push(b + "Data");
            }),
            b.data &&
              (b.dataSorting && n(a.options.dataSorting, b.dataSorting),
              this.setData(b.data, !1)));
          b = V(
            e,
            k,
            {
              index: "undefined" === typeof e.index ? a.index : e.index,
              pointStart: M(
                h && h.series && h.series.pointStart,
                e.pointStart,
                a.xData[0]
              ),
            },
            !t && { data: a.options.data },
            b
          );
          t && b.data && (b.data = a.options.data);
          p = [
            "group",
            "markerGroup",
            "dataLabelsGroup",
            "transformGroup",
          ].concat(p);
          p.forEach(function (b) {
            p[b] = a[b];
            delete a[b];
          });
          h = !1;
          if (B[u]) {
            if (((h = u !== a.type), a.remove(!1, !1, !1, !0), h))
              if (Object.setPrototypeOf)
                Object.setPrototypeOf(a, B[u].prototype);
              else {
                k = Object.hasOwnProperty.call(a, "hcEvents") && a.hcEvents;
                for (m in f) a[m] = void 0;
                n(a, B[u].prototype);
                k ? (a.hcEvents = k) : delete a.hcEvents;
              }
          } else q(17, !0, d, { missingModuleFor: u });
          p.forEach(function (b) {
            a[b] = p[b];
          });
          a.init(d, b);
          if (t && this.points) {
            var w = a.options;
            !1 === w.visible
              ? ((l.graphic = 1), (l.dataLabel = 1))
              : a._hasPointLabels ||
                ((b = w.marker),
                (f = w.dataLabels),
                !b ||
                  (!1 !== b.enabled &&
                    (e.marker && e.marker.symbol) === b.symbol) ||
                  (l.graphic = 1),
                f && !1 === f.enabled && (l.dataLabel = 1));
            this.points.forEach(function (b) {
              b &&
                b.series &&
                (b.resolveColor(),
                Object.keys(l).length && b.destroyElements(l),
                !1 === w.showInLegend &&
                  b.legendItem &&
                  d.legend.destroyItem(b));
            }, this);
          }
          a.initialType = g;
          d.linkSeries();
          h && a.linkedSeries.length && (a.isDirtyData = !0);
          K(this, "afterUpdate");
          M(c, !0) && d.redraw(t ? void 0 : !1);
        };
        a.prototype.setName = function (b) {
          this.name = this.options.name = this.userOptions.name = b;
          this.chart.isDirtyLegend = !0;
        };
        a.prototype.hasOptionChanged = function (b) {
          var c = this.options[b],
            a = this.chart.options.plotOptions,
            d = this.userOptions[b];
          return d
            ? c !== d
            : c !==
                M(
                  a && a[this.type] && a[this.type][b],
                  a && a.series && a.series[b],
                  c
                );
        };
        a.prototype.onMouseOver = function () {
          var b = this.chart,
            c = b.hoverSeries;
          b.pointer.setHoverChartIndex();
          if (c && c !== this) c.onMouseOut();
          this.options.events.mouseOver && K(this, "mouseOver");
          this.setState("hover");
          b.hoverSeries = this;
        };
        a.prototype.onMouseOut = function () {
          var b = this.options,
            c = this.chart,
            a = c.tooltip,
            d = c.hoverPoint;
          c.hoverSeries = null;
          if (d) d.onMouseOut();
          this && b.events.mouseOut && K(this, "mouseOut");
          !a ||
            this.stickyTracking ||
            (a.shared && !this.noSharedTooltip) ||
            a.hide();
          c.series.forEach(function (b) {
            b.setState("", !0);
          });
        };
        a.prototype.setState = function (b, c) {
          var a = this,
            d = a.options,
            e = a.graph,
            g = d.inactiveOtherPoints,
            h = d.states,
            f = M(
              h[b || "normal"] && h[b || "normal"].animation,
              a.chart.options.chart.animation
            ),
            k = d.lineWidth,
            l = 0,
            n = d.opacity;
          b = b || "";
          if (
            a.state !== b &&
            ([a.group, a.markerGroup, a.dataLabelsGroup].forEach(function (c) {
              c &&
                (a.state && c.removeClass("highcharts-series-" + a.state),
                b && c.addClass("highcharts-series-" + b));
            }),
            (a.state = b),
            !a.chart.styledMode)
          ) {
            if (h[b] && !1 === h[b].enabled) return;
            b &&
              ((k = h[b].lineWidth || k + (h[b].lineWidthPlus || 0)),
              (n = M(h[b].opacity, n)));
            if (e && !e.dashstyle)
              for (
                d = { "stroke-width": k }, e.animate(d, f);
                a["zone-graph-" + l];

              )
                a["zone-graph-" + l].animate(d, f), (l += 1);
            g ||
              [
                a.group,
                a.markerGroup,
                a.dataLabelsGroup,
                a.labelBySeries,
              ].forEach(function (b) {
                b && b.animate({ opacity: n }, f);
              });
          }
          c && g && a.points && a.setAllPointsToState(b || void 0);
        };
        a.prototype.setAllPointsToState = function (b) {
          this.points.forEach(function (c) {
            c.setState && c.setState(b);
          });
        };
        a.prototype.setVisible = function (b, c) {
          var a = this,
            d = a.chart,
            e = a.legendItem,
            g = d.options.chart.ignoreHiddenSeries,
            h = a.visible,
            f = (a.visible =
              b =
              a.options.visible =
              a.userOptions.visible =
                "undefined" === typeof b ? !h : b)
              ? "show"
              : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(
            function (b) {
              if (a[b]) a[b][f]();
            }
          );
          if (
            d.hoverSeries === a ||
            (d.hoverPoint && d.hoverPoint.series) === a
          )
            a.onMouseOut();
          e && d.legend.colorizeItem(a, b);
          a.isDirty = !0;
          a.options.stacking &&
            d.series.forEach(function (b) {
              b.options.stacking && b.visible && (b.isDirty = !0);
            });
          a.linkedSeries.forEach(function (c) {
            c.setVisible(b, !1);
          });
          g && (d.isDirtyBox = !0);
          K(a, f);
          !1 !== c && d.redraw();
        };
        a.prototype.show = function () {
          this.setVisible(!0);
        };
        a.prototype.hide = function () {
          this.setVisible(!1);
        };
        a.prototype.select = function (b) {
          this.selected =
            b =
            this.options.selected =
              "undefined" === typeof b ? !this.selected : b;
          this.checkbox && (this.checkbox.checked = b);
          K(this, b ? "select" : "unselect");
        };
        a.prototype.shouldShowTooltip = function (b, c, a) {
          void 0 === a && (a = {});
          a.series = this;
          a.visiblePlotOnly = !0;
          return this.chart.isInsidePlot(b, c, a);
        };
        a.defaultOptions = I;
        a.types = v.seriesTypes;
        a.registerType = v.registerSeriesType;
        return a;
      })();
      n(a.prototype, {
        axisTypes: ["xAxis", "yAxis"],
        coll: "series",
        colorCounter: 0,
        cropShoulder: 1,
        directTouch: !1,
        drawLegendSymbol: y.drawLineMarker,
        isCartesian: !0,
        kdAxisArray: ["clientX", "plotY"],
        parallelArrays: ["x", "y"],
        pointClass: F,
        requireSorting: !0,
        sorted: !0,
      });
      v.series = a;
      ("");
      ("");
      return a;
    }
  );
  L(
    f,
    "Extensions/ScrollablePlotArea.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Chart/Chart.js"],
      f["Core/Series/Series.js"],
      f["Core/Renderer/RendererRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F) {
      var B = a.stop,
        v = F.addEvent,
        r = F.createElement,
        p = F.defined,
        e = F.merge,
        c = F.pick;
      v(A, "afterSetChartSize", function (c) {
        var a = this.options.chart.scrollablePlotArea,
          k = a && a.minWidth;
        a = a && a.minHeight;
        if (!this.renderer.forExport) {
          if (k) {
            if (
              (this.scrollablePixelsX = k = Math.max(0, k - this.chartWidth))
            ) {
              this.scrollablePlotBox = this.renderer.scrollablePlotBox = e(
                this.plotBox
              );
              this.plotBox.width = this.plotWidth += k;
              this.inverted
                ? (this.clipBox.height += k)
                : (this.clipBox.width += k);
              var m = { 1: { name: "right", value: k } };
            }
          } else
            a &&
              ((this.scrollablePixelsY = k = Math.max(0, a - this.chartHeight)),
              p(k) &&
                ((this.scrollablePlotBox = this.renderer.scrollablePlotBox =
                  e(this.plotBox)),
                (this.plotBox.height = this.plotHeight += k),
                this.inverted
                  ? (this.clipBox.width += k)
                  : (this.clipBox.height += k),
                (m = { 2: { name: "bottom", value: k } })));
          m &&
            !c.skipAxes &&
            this.axes.forEach(function (c) {
              m[c.side]
                ? (c.getPlotLinePath = function () {
                    var a = m[c.side].name,
                      e = this[a];
                    this[a] = e - m[c.side].value;
                    var g = f.prototype.getPlotLinePath.apply(this, arguments);
                    this[a] = e;
                    return g;
                  })
                : (c.setAxisSize(), c.setAxisTranslation());
            });
        }
      });
      v(A, "render", function () {
        this.scrollablePixelsX || this.scrollablePixelsY
          ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed())
          : this.fixedDiv && this.applyFixed();
      });
      A.prototype.setUpScrolling = function () {
        var c = this,
          a = {
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
            overflowY: "hidden",
          };
        this.scrollablePixelsX && (a.overflowX = "auto");
        this.scrollablePixelsY && (a.overflowY = "auto");
        this.scrollingParent = r(
          "div",
          { className: "highcharts-scrolling-parent" },
          { position: "relative" },
          this.renderTo
        );
        this.scrollingContainer = r(
          "div",
          { className: "highcharts-scrolling" },
          a,
          this.scrollingParent
        );
        v(this.scrollingContainer, "scroll", function () {
          c.pointer && delete c.pointer.chartPosition;
        });
        this.innerContainer = r(
          "div",
          { className: "highcharts-inner-container" },
          null,
          this.scrollingContainer
        );
        this.innerContainer.appendChild(this.container);
        this.setUpScrolling = null;
      };
      A.prototype.moveFixedElements = function () {
        var c = this.container,
          a = this.fixedRenderer,
          e =
            ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
              " "
            ),
          f;
        this.scrollablePixelsX && !this.inverted
          ? (f = ".highcharts-yaxis")
          : this.scrollablePixelsX && this.inverted
          ? (f = ".highcharts-xaxis")
          : this.scrollablePixelsY && !this.inverted
          ? (f = ".highcharts-xaxis")
          : this.scrollablePixelsY &&
            this.inverted &&
            (f = ".highcharts-yaxis");
        f &&
          e.push(
            "" + f + ":not(.highcharts-radial-axis)",
            "" + f + "-labels:not(.highcharts-radial-axis-labels)"
          );
        e.forEach(function (e) {
          [].forEach.call(c.querySelectorAll(e), function (c) {
            (c.namespaceURI === a.SVG_NS
              ? a.box
              : a.box.parentNode
            ).appendChild(c);
            c.style.pointerEvents = "auto";
          });
        });
      };
      A.prototype.applyFixed = function () {
        var a = !this.fixedDiv,
          e = this.options.chart,
          f = e.scrollablePlotArea,
          m = y.getRendererType();
        a
          ? ((this.fixedDiv = r(
              "div",
              { className: "highcharts-fixed" },
              {
                position: "absolute",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: ((e.style && e.style.zIndex) || 0) + 2,
                top: 0,
              },
              null,
              !0
            )),
            this.scrollingContainer &&
              this.scrollingContainer.parentNode.insertBefore(
                this.fixedDiv,
                this.scrollingContainer
              ),
            (this.renderTo.style.overflow = "visible"),
            (this.fixedRenderer = e =
              new m(
                this.fixedDiv,
                this.chartWidth,
                this.chartHeight,
                this.options.chart.style
              )),
            (this.scrollableMask = e
              .path()
              .attr({
                fill: this.options.chart.backgroundColor || "#fff",
                "fill-opacity": c(f.opacity, 0.85),
                zIndex: -1,
              })
              .addClass("highcharts-scrollable-mask")
              .add()),
            v(this, "afterShowResetZoom", this.moveFixedElements),
            v(this, "afterApplyDrilldown", this.moveFixedElements),
            v(this, "afterLayOutTitles", this.moveFixedElements))
          : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
        if (this.scrollableDirty || a)
          (this.scrollableDirty = !1), this.moveFixedElements();
        e = this.chartWidth + (this.scrollablePixelsX || 0);
        m = this.chartHeight + (this.scrollablePixelsY || 0);
        B(this.container);
        this.container.style.width = e + "px";
        this.container.style.height = m + "px";
        this.renderer.boxWrapper.attr({
          width: e,
          height: m,
          viewBox: [0, 0, e, m].join(" "),
        });
        this.chartBackground.attr({ width: e, height: m });
        this.scrollingContainer.style.height = this.chartHeight + "px";
        a &&
          (f.scrollPositionX &&
            (this.scrollingContainer.scrollLeft =
              this.scrollablePixelsX * f.scrollPositionX),
          f.scrollPositionY &&
            (this.scrollingContainer.scrollTop =
              this.scrollablePixelsY * f.scrollPositionY));
        m = this.axisOffset;
        a = this.plotTop - m[0] - 1;
        f = this.plotLeft - m[3] - 1;
        e = this.plotTop + this.plotHeight + m[2] + 1;
        m = this.plotLeft + this.plotWidth + m[1] + 1;
        var p = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          A = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
        a = this.scrollablePixelsX
          ? [
              ["M", 0, a],
              ["L", this.plotLeft - 1, a],
              ["L", this.plotLeft - 1, e],
              ["L", 0, e],
              ["Z"],
              ["M", p, a],
              ["L", this.chartWidth, a],
              ["L", this.chartWidth, e],
              ["L", p, e],
              ["Z"],
            ]
          : this.scrollablePixelsY
          ? [
              ["M", f, 0],
              ["L", f, this.plotTop - 1],
              ["L", m, this.plotTop - 1],
              ["L", m, 0],
              ["Z"],
              ["M", f, A],
              ["L", f, this.chartHeight],
              ["L", m, this.chartHeight],
              ["L", m, A],
              ["Z"],
            ]
          : [["M", 0, 0]];
        "adjustHeight" !== this.redrawTrigger &&
          this.scrollableMask.attr({ d: a });
      };
      v(f, "afterInit", function () {
        this.chart.scrollableDirty = !0;
      });
      v(G, "show", function () {
        this.chart.scrollableDirty = !0;
      });
      ("");
    }
  );
  L(
    f,
    "Core/Axis/Stacking/StackItem.js",
    [
      f["Core/FormatUtilities.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B = a.format,
        y = f.series,
        F = A.defined,
        I = A.destroyObjectProperties,
        v = A.isNumber,
        r = A.pick;
      a = (function () {
        function a(a, c, f, g, l) {
          var e = a.chart.inverted;
          this.axis = a;
          this.isNegative = f;
          this.options = c = c || {};
          this.x = g;
          this.cumulative = this.total = null;
          this.points = {};
          this.hasValidPoints = !1;
          this.stack = l;
          this.rightCliff = this.leftCliff = 0;
          this.alignOptions = {
            align: c.align || (e ? (f ? "left" : "right") : "center"),
            verticalAlign:
              c.verticalAlign || (e ? "middle" : f ? "bottom" : "top"),
            y: c.y,
            x: c.x,
          };
          this.textAlign =
            c.textAlign || (e ? (f ? "right" : "left") : "center");
        }
        a.prototype.destroy = function () {
          I(this, this.axis);
        };
        a.prototype.render = function (a) {
          var c = this.axis.chart,
            e = this.options,
            g = e.format;
          g = g ? B(g, this, c) : e.formatter.call(this);
          this.label
            ? this.label.attr({ text: g, visibility: "hidden" })
            : ((this.label = c.renderer.label(
                g,
                null,
                null,
                e.shape,
                null,
                null,
                e.useHTML,
                !1,
                "stack-labels"
              )),
              (g = {
                r: e.borderRadius || 0,
                text: g,
                rotation: e.rotation,
                padding: r(e.padding, 5),
                visibility: "hidden",
              }),
              c.styledMode ||
                ((g.fill = e.backgroundColor),
                (g.stroke = e.borderColor),
                (g["stroke-width"] = e.borderWidth),
                this.label.css(e.style)),
              this.label.attr(g),
              this.label.added || this.label.add(a));
          this.label.labelrank = c.plotSizeY;
        };
        a.prototype.setOffset = function (a, c, f, g, l) {
          var e = this.axis,
            k = e.chart;
          g = e.translate(
            e.stacking.usePercentage ? 100 : g ? g : this.total,
            0,
            0,
            0,
            1
          );
          f = e.translate(f ? f : 0);
          a = r(l, k.xAxis[0].translate(this.x)) + a;
          e = F(g) && this.getStackBox(k, this, a, g, c, Math.abs(g - f), e);
          c = this.label;
          f = this.isNegative;
          var p = this.textAlign;
          c &&
            e &&
            ((a = c.getBBox()),
            (l = c.padding),
            (g = "justify" === r(this.options.overflow, "justify")),
            (p =
              "left" === p
                ? k.inverted
                  ? -l
                  : l
                : "right" === p
                ? a.width
                : k.inverted && "center" === p
                ? a.width / 2
                : k.inverted
                ? f
                  ? a.width + l
                  : -l
                : a.width / 2),
            (f = k.inverted ? a.height / 2 : f ? -l : a.height),
            (this.alignOptions.x = r(this.options.x, 0)),
            (this.alignOptions.y = r(this.options.y, 0)),
            (e.x -= p),
            (e.y -= f),
            c.align(this.alignOptions, null, e),
            k.isInsidePlot(
              c.alignAttr.x + p - this.alignOptions.x,
              c.alignAttr.y + f - this.alignOptions.y
            )
              ? c.show()
              : (c.hide(), (g = !1)),
            g &&
              y.prototype.justifyDataLabel.call(
                this.axis,
                c,
                this.alignOptions,
                c.alignAttr,
                a,
                e
              ),
            c.attr({ x: c.alignAttr.x, y: c.alignAttr.y }),
            r(!g && this.options.crop, !0) &&
              ((k =
                v(c.x) &&
                v(c.y) &&
                k.isInsidePlot(c.x - l + c.width, c.y) &&
                k.isInsidePlot(c.x + l, c.y)) ||
                c.hide()));
        };
        a.prototype.getStackBox = function (a, c, f, g, l, m, p) {
          var e = c.axis.reversed,
            k = a.inverted,
            r = p.height + p.pos - (k ? a.plotLeft : a.plotTop);
          c = (c.isNegative && !e) || (!c.isNegative && e);
          return {
            x: k
              ? c
                ? g - p.right
                : g - m + p.pos - a.plotLeft
              : f + a.xAxis[0].transB - a.plotLeft,
            y: k ? p.height - f - l : c ? r - g - m : r - g,
            width: k ? m : l,
            height: k ? l : m,
          };
        };
        return a;
      })();
      ("");
      return a;
    }
  );
  L(
    f,
    "Core/Axis/Stacking/StackingAxis.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Axis/Stacking/StackItem.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y) {
      function B() {
        var b = this,
          c = b.inverted;
        b.yAxis.forEach(function (b) {
          b.stacking &&
            b.stacking.stacks &&
            b.hasVisibleSeries &&
            (b.stacking.oldStacks = b.stacking.stacks);
        });
        b.series.forEach(function (a) {
          var e = (a.xAxis && a.xAxis.options) || {};
          !a.options.stacking ||
            (!0 !== a.visible && !1 !== b.options.chart.ignoreHiddenSeries) ||
            (a.stackKey = [
              a.type,
              d(a.options.stack, ""),
              c ? e.top : e.left,
              c ? e.height : e.width,
            ].join());
        });
      }
      function I() {
        var b = this.stacking;
        if (b) {
          var c = b.stacks;
          x(c, function (b, a) {
            J(b);
            c[a] = null;
          });
          b && b.stackTotalGroup && b.stackTotalGroup.destroy();
        }
      }
      function v() {
        this.stacking || (this.stacking = new h(this));
      }
      function r(b, c, a, d) {
        !N(b) || b.x !== c || (d && b.stackKey !== d)
          ? (b = { x: c, index: 0, key: d, stackKey: d })
          : b.index++;
        b.key = [a, c, b.index].join();
        return b;
      }
      function p() {
        var b = this,
          c = b.stackKey,
          a = b.yAxis.stacking.stacks,
          d = b.processedXData,
          e = b[b.options.stacking + "Stacker"],
          h;
        e &&
          [c, "-" + c].forEach(function (c) {
            for (var g = d.length, f, k; g--; )
              (f = d[g]),
                (h = b.getStackIndicator(h, f, b.index, c)),
                (k = (f = a[c] && a[c][f]) && f.points[h.key]) &&
                  e.call(b, k, f, g);
          });
      }
      function e(b, c, a) {
        c = c.total ? 100 / c.total : 0;
        b[0] = z(b[0] * c);
        b[1] = z(b[1] * c);
        this.stackedYData[a] = b[1];
      }
      function c() {
        var b = this.yAxis.stacking;
        this.options.centerInCategory &&
        (this.is("column") || this.is("columnrange")) &&
        !this.options.stacking &&
        1 < this.chart.series.length
          ? l.setStackedPoints.call(this, "group")
          : b &&
            x(b.stacks, function (c, a) {
              "group" === a.slice(-5) &&
                (x(c, function (b) {
                  return b.destroy();
                }),
                delete b.stacks[a]);
            });
      }
      function k(b) {
        var c = b || this.options.stacking;
        if (
          c &&
          (!0 === this.visible ||
            !1 === this.chart.options.chart.ignoreHiddenSeries)
        ) {
          var a = this.processedXData,
            e = this.processedYData,
            h = [],
            g = e.length,
            f = this.options,
            k = f.threshold,
            l = d(f.startFromThreshold && k, 0);
          f = f.stack;
          b = b ? "" + this.type + ",".concat(c) : this.stackKey;
          var m = "-" + b,
            p = this.negStacks,
            q = this.yAxis,
            t = q.stacking.stacks,
            x = q.stacking.oldStacks,
            r,
            D;
          q.stacking.stacksTouched += 1;
          for (D = 0; D < g; D++) {
            var v = a[D];
            var B = e[D];
            var J = this.getStackIndicator(J, v, this.index);
            var A = J.key;
            var y = (r = p && B < (l ? 0 : k)) ? m : b;
            t[y] || (t[y] = {});
            t[y][v] ||
              (x[y] && x[y][v]
                ? ((t[y][v] = x[y][v]), (t[y][v].total = null))
                : (t[y][v] = new G(q, q.options.stackLabels, !!r, v, f)));
            y = t[y][v];
            null !== B
              ? ((y.points[A] = y.points[this.index] = [d(y.cumulative, l)]),
                N(y.cumulative) || (y.base = A),
                (y.touched = q.stacking.stacksTouched),
                0 < J.index &&
                  !1 === this.singleStacks &&
                  (y.points[A][0] = y.points[this.index + "," + v + ",0"][0]))
              : (y.points[A] = y.points[this.index] = null);
            "percent" === c
              ? ((r = r ? b : m),
                p && t[r] && t[r][v]
                  ? ((r = t[r][v]),
                    (y.total = r.total =
                      Math.max(r.total, y.total) + Math.abs(B) || 0))
                  : (y.total = z(y.total + (Math.abs(B) || 0))))
              : "group" === c
              ? (E(B) && (B = B[0]),
                null !== B && (y.total = (y.total || 0) + 1))
              : (y.total = z(y.total + (B || 0)));
            y.cumulative =
              "group" === c
                ? (y.total || 1) - 1
                : d(y.cumulative, l) + (B || 0);
            null !== B &&
              (y.points[A].push(y.cumulative),
              (h[D] = y.cumulative),
              (y.hasValidPoints = !0));
          }
          "percent" === c && (q.stacking.usePercentage = !0);
          "group" !== c && (this.stackedYData = h);
          q.stacking.oldStacks = {};
        }
      }
      var g = a.getDeferredAnimation,
        l = A.series.prototype,
        m = y.addEvent,
        z = y.correctFloat,
        N = y.defined,
        J = y.destroyObjectProperties,
        D = y.fireEvent,
        E = y.isArray,
        t = y.isNumber,
        x = y.objectEach,
        d = y.pick,
        h = (function () {
          function b(b) {
            this.oldStacks = {};
            this.stacks = {};
            this.stacksTouched = 0;
            this.axis = b;
          }
          b.prototype.buildStacks = function () {
            var b = this.axis,
              c = b.series,
              a = b.options.reversedStacks,
              d = c.length,
              e;
            if (!b.isXAxis) {
              this.usePercentage = !1;
              for (e = d; e--; ) {
                var h = c[a ? e : d - e - 1];
                h.setStackedPoints();
                h.setGroupedPoints();
              }
              for (e = 0; e < d; e++) c[e].modifyStacks();
              D(b, "afterBuildStacks");
            }
          };
          b.prototype.cleanStacks = function () {
            if (!this.axis.isXAxis) {
              if (this.oldStacks) var b = (this.stacks = this.oldStacks);
              x(b, function (b) {
                x(b, function (b) {
                  b.cumulative = b.total;
                });
              });
            }
          };
          b.prototype.resetStacks = function () {
            var b = this,
              c = b.stacks;
            b.axis.isXAxis ||
              x(c, function (c) {
                x(c, function (a, d) {
                  t(a.touched) && a.touched < b.stacksTouched
                    ? (a.destroy(), delete c[d])
                    : ((a.total = null), (a.cumulative = null));
                });
              });
          };
          b.prototype.renderStackTotals = function () {
            var b = this.axis,
              c = b.chart,
              a = c.renderer,
              d = this.stacks;
            b = g(
              c,
              (b.options.stackLabels && b.options.stackLabels.animation) || !1
            );
            var e = (this.stackTotalGroup =
              this.stackTotalGroup ||
              a.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add());
            e.translate(c.plotLeft, c.plotTop);
            x(d, function (b) {
              x(b, function (b) {
                b.render(e);
              });
            });
            e.animate({ opacity: 1 }, b);
          };
          return b;
        })(),
        b;
      (function (b) {
        var a = [];
        b.compose = function (b, d, h) {
          -1 === a.indexOf(b) &&
            (a.push(b), m(b, "init", v), m(b, "destroy", I));
          -1 === a.indexOf(d) && (a.push(d), (d.prototype.getStacks = B));
          -1 === a.indexOf(h) &&
            (a.push(h),
            (b = h.prototype),
            (b.getStackIndicator = r),
            (b.modifyStacks = p),
            (b.percentStacker = e),
            (b.setGroupedPoints = c),
            (b.setStackedPoints = k));
        };
      })(b || (b = {}));
      return b;
    }
  );
  L(
    f,
    "Series/Line/LineSeries.js",
    [
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (f, r) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, e) {
                    a.__proto__ = e;
                  }) ||
                function (a, e) {
                  for (var c in e) e.hasOwnProperty(c) && (a[c] = e[c]);
                };
              return a(f, r);
            };
            return function (f, r) {
              function p() {
                this.constructor = f;
              }
              a(f, r);
              f.prototype =
                null === r
                  ? Object.create(r)
                  : ((p.prototype = r.prototype), new p());
            };
          })(),
        y = A.defined,
        F = A.merge;
      A = (function (f) {
        function v() {
          var a = (null !== f && f.apply(this, arguments)) || this;
          a.data = void 0;
          a.options = void 0;
          a.points = void 0;
          return a;
        }
        B(v, f);
        v.prototype.drawGraph = function () {
          var a = this,
            f = this.options,
            e = (this.gappedPath || this.getGraphPath).call(this),
            c = this.chart.styledMode,
            k = [["graph", "highcharts-graph"]];
          c || k[0].push(f.lineColor || this.color || "#cccccc", f.dashStyle);
          k = a.getZonesGraphs(k);
          k.forEach(function (g, k) {
            var l = g[0],
              p = a[l],
              r = p ? "animate" : "attr";
            p
              ? ((p.endX = a.preventGraphAnimation ? null : e.xMap),
                p.animate({ d: e }))
              : e.length &&
                (a[l] = p =
                  a.chart.renderer
                    .path(e)
                    .addClass(g[1])
                    .attr({ zIndex: 1 })
                    .add(a.group));
            p &&
              !c &&
              ((l = {
                stroke: g[2],
                "stroke-width": f.lineWidth,
                fill: (a.fillGraph && a.color) || "none",
              }),
              g[3]
                ? (l.dashstyle = g[3])
                : "square" !== f.linecap &&
                  (l["stroke-linecap"] = l["stroke-linejoin"] = "round"),
              p[r](l).shadow(2 > k && f.shadow));
            p && ((p.startX = e.xMap), (p.isArea = e.isArea));
          });
        };
        v.prototype.getGraphPath = function (a, f, e) {
          var c = this,
            k = c.options,
            g = [],
            l = [],
            m,
            p = k.step;
          a = a || c.points;
          var r = a.reversed;
          r && a.reverse();
          (p = { right: 1, center: 2 }[p] || (p && 3)) && r && (p = 4 - p);
          a = this.getValidPoints(a, !1, !(k.connectNulls && !f && !e));
          a.forEach(function (r, z) {
            var E = r.plotX,
              t = r.plotY,
              x = a[z - 1];
            (r.leftCliff || (x && x.rightCliff)) && !e && (m = !0);
            r.isNull && !y(f) && 0 < z
              ? (m = !k.connectNulls)
              : r.isNull && !f
              ? (m = !0)
              : (0 === z || m
                  ? (z = [["M", r.plotX, r.plotY]])
                  : c.getPointSpline
                  ? (z = [c.getPointSpline(a, r, z)])
                  : p
                  ? ((z =
                      1 === p
                        ? [["L", x.plotX, t]]
                        : 2 === p
                        ? [
                            ["L", (x.plotX + E) / 2, x.plotY],
                            ["L", (x.plotX + E) / 2, t],
                          ]
                        : [["L", E, x.plotY]]),
                    z.push(["L", E, t]))
                  : (z = [["L", E, t]]),
                l.push(r.x),
                p && (l.push(r.x), 2 === p && l.push(r.x)),
                g.push.apply(g, z),
                (m = !1));
          });
          g.xMap = l;
          return (c.graphPath = g);
        };
        v.prototype.getZonesGraphs = function (a) {
          this.zones.forEach(function (f, e) {
            e = [
              "zone-graph-" + e,
              "highcharts-graph highcharts-zone-graph-" +
                e +
                " " +
                (f.className || ""),
            ];
            this.chart.styledMode ||
              e.push(
                f.color || this.color,
                f.dashStyle || this.options.dashStyle
              );
            a.push(e);
          }, this);
          return a;
        };
        v.defaultOptions = F(a.defaultOptions, {});
        return v;
      })(a);
      f.registerSeriesType("line", A);
      ("");
      return A;
    }
  );
  L(
    f,
    "Series/Area/AreaSeries.js",
    [
      f["Core/Color/Color.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (c, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, c) {
                    a.__proto__ = c;
                  }) ||
                function (a, c) {
                  for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]);
                };
              return a(c, e);
            };
            return function (c, e) {
              function g() {
                this.constructor = c;
              }
              a(c, e);
              c.prototype =
                null === e
                  ? Object.create(e)
                  : ((g.prototype = e.prototype), new g());
            };
          })(),
        F = a.parse,
        I = A.seriesTypes.line;
      a = G.extend;
      var v = G.merge,
        r = G.objectEach,
        p = G.pick;
      G = (function (a) {
        function c() {
          var c = (null !== a && a.apply(this, arguments)) || this;
          c.data = void 0;
          c.options = void 0;
          c.points = void 0;
          return c;
        }
        B(c, a);
        c.prototype.drawGraph = function () {
          this.areaPath = [];
          a.prototype.drawGraph.apply(this);
          var c = this,
            e = this.areaPath,
            f = this.options,
            m = [["area", "highcharts-area", this.color, f.fillColor]];
          this.zones.forEach(function (a, e) {
            m.push([
              "zone-area-" + e,
              "highcharts-area highcharts-zone-area-" + e + " " + a.className,
              a.color || c.color,
              a.fillColor || f.fillColor,
            ]);
          });
          m.forEach(function (a) {
            var g = a[0],
              k = {},
              l = c[g],
              m = l ? "animate" : "attr";
            l
              ? ((l.endX = c.preventGraphAnimation ? null : e.xMap),
                l.animate({ d: e }))
              : ((k.zIndex = 0),
                (l = c[g] =
                  c.chart.renderer.path(e).addClass(a[1]).add(c.group)),
                (l.isArea = !0));
            c.chart.styledMode ||
              (k.fill = p(
                a[3],
                F(a[2]).setOpacity(p(f.fillOpacity, 0.75)).get()
              ));
            l[m](k);
            l.startX = e.xMap;
            l.shiftUnit = f.step ? 2 : 1;
          });
        };
        c.prototype.getGraphPath = function (a) {
          var c = I.prototype.getGraphPath,
            e = this.options,
            f = e.stacking,
            k = this.yAxis,
            r = [],
            v = [],
            D = this.index,
            E = k.stacking.stacks[this.stackKey],
            t = e.threshold,
            x = Math.round(k.getThreshold(e.threshold));
          e = p(e.connectNulls, "percent" === f);
          var d = function (b, c, d) {
            var e = a[b];
            b = f && E[e.x].points[D];
            var h = e[d + "Null"] || 0;
            d = e[d + "Cliff"] || 0;
            e = !0;
            if (d || h) {
              var g = (h ? b[0] : b[1]) + d;
              var l = b[0] + d;
              e = !!h;
            } else !f && a[c] && a[c].isNull && (g = l = t);
            "undefined" !== typeof g &&
              (v.push({
                plotX: n,
                plotY: null === g ? x : k.getThreshold(g),
                isNull: e,
                isCliff: !0,
              }),
              r.push({
                plotX: n,
                plotY: null === l ? x : k.getThreshold(l),
                doCurve: !1,
              }));
          };
          a = a || this.points;
          f && (a = this.getStackPoints(a));
          for (var h = 0, b = a.length; h < b; ++h) {
            f ||
              (a[h].leftCliff =
                a[h].rightCliff =
                a[h].leftNull =
                a[h].rightNull =
                  void 0);
            var q = a[h].isNull;
            var n = p(a[h].rectPlotX, a[h].plotX);
            var u = f ? p(a[h].yBottom, x) : x;
            if (!q || e)
              e || d(h, h - 1, "left"),
                (q && !f && e) ||
                  (v.push(a[h]), r.push({ x: h, plotX: n, plotY: u })),
                e || d(h, h + 1, "right");
          }
          d = c.call(this, v, !0, !0);
          r.reversed = !0;
          q = c.call(this, r, !0, !0);
          (u = q[0]) && "M" === u[0] && (q[0] = ["L", u[1], u[2]]);
          q = d.concat(q);
          q.length && q.push(["Z"]);
          c = c.call(this, v, !1, e);
          q.xMap = d.xMap;
          this.areaPath = q;
          return c;
        };
        c.prototype.getStackPoints = function (a) {
          var c = this,
            e = [],
            f = [],
            k = this.xAxis,
            v = this.yAxis,
            B = v.stacking.stacks[this.stackKey],
            D = {},
            E = v.series,
            t = E.length,
            x = v.options.reversedStacks ? 1 : -1,
            d = E.indexOf(c);
          a = a || this.points;
          if (this.options.stacking) {
            for (var h = 0; h < a.length; h++)
              (a[h].leftNull = a[h].rightNull = void 0), (D[a[h].x] = a[h]);
            r(B, function (b, a) {
              null !== b.total && f.push(a);
            });
            f.sort(function (b, a) {
              return b - a;
            });
            var b = E.map(function (b) {
              return b.visible;
            });
            f.forEach(function (a, h) {
              var g = 0,
                l,
                n;
              if (D[a] && !D[a].isNull)
                e.push(D[a]),
                  [-1, 1].forEach(function (e) {
                    var g = 1 === e ? "rightNull" : "leftNull",
                      k = B[f[h + e]],
                      m = 0;
                    if (k)
                      for (var p = d; 0 <= p && p < t; ) {
                        var q = E[p].index;
                        l = k.points[q];
                        l ||
                          (q === c.index
                            ? (D[a][g] = !0)
                            : b[p] &&
                              (n = B[a].points[q]) &&
                              (m -= n[1] - n[0]));
                        p += x;
                      }
                    D[a][1 === e ? "rightCliff" : "leftCliff"] = m;
                  });
              else {
                for (var m = d; 0 <= m && m < t; ) {
                  if ((l = B[a].points[E[m].index])) {
                    g = l[1];
                    break;
                  }
                  m += x;
                }
                g = p(g, 0);
                g = v.translate(g, 0, 1, 0, 1);
                e.push({
                  isNull: !0,
                  plotX: k.translate(a, 0, 0, 0, 1),
                  x: a,
                  plotY: g,
                  yBottom: g,
                });
              }
            });
          }
          return e;
        };
        c.defaultOptions = v(I.defaultOptions, { threshold: 0 });
        return c;
      })(I);
      a(G.prototype, { singleStacks: !1, drawLegendSymbol: f.drawRectangle });
      A.registerSeriesType("area", G);
      ("");
      return G;
    }
  );
  L(
    f,
    "Series/Spline/SplineSeries.js",
    [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (f, r) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, e) {
                    a.__proto__ = e;
                  }) ||
                function (a, e) {
                  for (var c in e) e.hasOwnProperty(c) && (a[c] = e[c]);
                };
              return a(f, r);
            };
            return function (f, r) {
              function p() {
                this.constructor = f;
              }
              a(f, r);
              f.prototype =
                null === r
                  ? Object.create(r)
                  : ((p.prototype = r.prototype), new p());
            };
          })(),
        G = a.seriesTypes.line,
        y = f.merge,
        F = f.pick;
      f = (function (a) {
        function f() {
          var f = (null !== a && a.apply(this, arguments)) || this;
          f.data = void 0;
          f.options = void 0;
          f.points = void 0;
          return f;
        }
        B(f, a);
        f.prototype.getPointSpline = function (a, f, e) {
          var c = f.plotX || 0,
            k = f.plotY || 0,
            g = a[e - 1];
          e = a[e + 1];
          if (
            g &&
            !g.isNull &&
            !1 !== g.doCurve &&
            !f.isCliff &&
            e &&
            !e.isNull &&
            !1 !== e.doCurve &&
            !f.isCliff
          ) {
            a = g.plotY || 0;
            var l = e.plotX || 0;
            e = e.plotY || 0;
            var m = 0;
            var p = (1.5 * c + (g.plotX || 0)) / 2.5;
            var r = (1.5 * k + a) / 2.5;
            l = (1.5 * c + l) / 2.5;
            var v = (1.5 * k + e) / 2.5;
            l !== p && (m = ((v - r) * (l - c)) / (l - p) + k - v);
            r += m;
            v += m;
            r > a && r > k
              ? ((r = Math.max(a, k)), (v = 2 * k - r))
              : r < a && r < k && ((r = Math.min(a, k)), (v = 2 * k - r));
            v > e && v > k
              ? ((v = Math.max(e, k)), (r = 2 * k - v))
              : v < e && v < k && ((v = Math.min(e, k)), (r = 2 * k - v));
            f.rightContX = l;
            f.rightContY = v;
          }
          f = [
            "C",
            F(g.rightContX, g.plotX, 0),
            F(g.rightContY, g.plotY, 0),
            F(p, c, 0),
            F(r, k, 0),
            c,
            k,
          ];
          g.rightContX = g.rightContY = void 0;
          return f;
        };
        f.defaultOptions = y(G.defaultOptions);
        return f;
      })(G);
      a.registerSeriesType("spline", f);
      ("");
      return f;
    }
  );
  L(
    f,
    "Series/AreaSpline/AreaSplineSeries.js",
    [
      f["Series/Spline/SplineSeries.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (e, c) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, c) {
                    a.__proto__ = c;
                  }) ||
                function (a, c) {
                  for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]);
                };
              return a(e, c);
            };
            return function (e, c) {
              function f() {
                this.constructor = e;
              }
              a(e, c);
              e.prototype =
                null === c
                  ? Object.create(c)
                  : ((f.prototype = c.prototype), new f());
            };
          })(),
        F = A.seriesTypes,
        I = F.area;
      F = F.area.prototype;
      var v = G.extend,
        r = G.merge;
      G = (function (f) {
        function e() {
          var a = (null !== f && f.apply(this, arguments)) || this;
          a.data = void 0;
          a.points = void 0;
          a.options = void 0;
          return a;
        }
        B(e, f);
        e.defaultOptions = r(a.defaultOptions, I.defaultOptions);
        return e;
      })(a);
      v(G.prototype, {
        getGraphPath: F.getGraphPath,
        getStackPoints: F.getStackPoints,
        drawGraph: F.drawGraph,
        drawLegendSymbol: f.drawRectangle,
      });
      A.registerSeriesType("areaspline", G);
      ("");
      return G;
    }
  );
  L(
    f,
    "Series/Column/ColumnSeries.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Color/Color.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F, I) {
      var v =
          (this && this.__extends) ||
          (function () {
            var a = function (c, d) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, b) {
                    a.__proto__ = b;
                  }) ||
                function (a, b) {
                  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                };
              return a(c, d);
            };
            return function (c, d) {
              function e() {
                this.constructor = c;
              }
              a(c, d);
              c.prototype =
                null === d
                  ? Object.create(d)
                  : ((e.prototype = d.prototype), new e());
            };
          })(),
        r = a.animObject,
        p = f.parse,
        e = A.hasTouch;
      a = A.noop;
      var c = I.clamp,
        k = I.css,
        g = I.defined,
        l = I.extend,
        m = I.fireEvent,
        z = I.isArray,
        B = I.isNumber,
        J = I.merge,
        D = I.pick,
        E = I.objectEach;
      I = (function (a) {
        function f() {
          var c = (null !== a && a.apply(this, arguments)) || this;
          c.borderWidth = void 0;
          c.data = void 0;
          c.group = void 0;
          c.options = void 0;
          c.points = void 0;
          return c;
        }
        v(f, a);
        f.prototype.animate = function (a) {
          var d = this,
            b = this.yAxis,
            e = d.options,
            f = this.chart.inverted,
            g = {},
            k = f ? "translateX" : "translateY";
          if (a)
            (g.scaleY = 0.001),
              (a = c(b.toPixels(e.threshold), b.pos, b.pos + b.len)),
              f ? (g.translateX = a - b.len) : (g.translateY = a),
              d.clipBox && d.setClip(),
              d.group.attr(g);
          else {
            var m = Number(d.group.attr(k));
            d.group.animate(
              { scaleY: 1 },
              l(r(d.options.animation), {
                step: function (a, c) {
                  d.group &&
                    ((g[k] = m + c.pos * (b.pos - m)), d.group.attr(g));
                },
              })
            );
          }
        };
        f.prototype.init = function (c, e) {
          a.prototype.init.apply(this, arguments);
          var b = this;
          c = b.chart;
          c.hasRendered &&
            c.series.forEach(function (a) {
              a.type === b.type && (a.isDirty = !0);
            });
        };
        f.prototype.getColumnMetrics = function () {
          var a = this,
            c = a.options,
            b = a.xAxis,
            e = a.yAxis,
            f = b.options.reversedStacks;
          f = (b.reversed && !f) || (!b.reversed && f);
          var g = {},
            k,
            l = 0;
          !1 === c.grouping
            ? (l = 1)
            : a.chart.series.forEach(function (b) {
                var c = b.yAxis,
                  d = b.options;
                if (
                  b.type === a.type &&
                  (b.visible || !a.chart.options.chart.ignoreHiddenSeries) &&
                  e.len === c.len &&
                  e.pos === c.pos
                ) {
                  if (d.stacking && "group" !== d.stacking) {
                    k = b.stackKey;
                    "undefined" === typeof g[k] && (g[k] = l++);
                    var f = g[k];
                  } else !1 !== d.grouping && (f = l++);
                  b.columnIndex = f;
                }
              });
          var m = Math.min(
              Math.abs(b.transA) *
                ((b.ordinal && b.ordinal.slope) ||
                  c.pointRange ||
                  b.closestPointRange ||
                  b.tickInterval ||
                  1),
              b.len
            ),
            p = m * c.groupPadding,
            t = (m - 2 * p) / (l || 1);
          c = Math.min(
            c.maxPointWidth || b.len,
            D(c.pointWidth, t * (1 - 2 * c.pointPadding))
          );
          a.columnMetrics = {
            width: c,
            offset:
              (t - c) / 2 +
              (p + ((a.columnIndex || 0) + (f ? 1 : 0)) * t - m / 2) *
                (f ? -1 : 1),
            paddedWidth: t,
            columnCount: l,
          };
          return a.columnMetrics;
        };
        f.prototype.crispCol = function (a, c, b, e) {
          var d = this.chart,
            f = this.borderWidth,
            g = -(f % 2 ? 0.5 : 0);
          f = f % 2 ? 0.5 : 1;
          d.inverted && d.renderer.isVML && (f += 1);
          this.options.crisp &&
            ((b = Math.round(a + b) + g), (a = Math.round(a) + g), (b -= a));
          e = Math.round(c + e) + f;
          g = 0.5 >= Math.abs(c) && 0.5 < e;
          c = Math.round(c) + f;
          e -= c;
          g && e && (--c, (e += 1));
          return { x: a, y: c, width: b, height: e };
        };
        f.prototype.adjustForMissingColumns = function (a, c, b, e) {
          var d = this,
            f = this.options.stacking;
          if (!b.isNull && 1 < e.columnCount) {
            var g = this.yAxis.options.reversedStacks,
              h = 0,
              k = g ? 0 : -e.columnCount;
            E(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
              if ("number" === typeof b.x && (a = a[b.x.toString()])) {
                var c = a.points[d.index],
                  e = a.total;
                f
                  ? (c && (h = k), a.hasValidPoints && (g ? k++ : k--))
                  : z(c) && ((h = c[1]), (k = e || 0));
              }
            });
            a =
              (b.plotX || 0) +
              ((k - 1) * e.paddedWidth + c) / 2 -
              c -
              h * e.paddedWidth;
          }
          return a;
        };
        f.prototype.translate = function () {
          var a = this,
            e = a.chart,
            b = a.options,
            f = (a.dense = 2 > a.closestPointRange * a.xAxis.transA);
          f = a.borderWidth = D(b.borderWidth, f ? 0 : 1);
          var k = a.xAxis,
            l = a.yAxis,
            m = b.threshold,
            p = (a.translatedThreshold = l.getThreshold(m)),
            t = D(b.minPointLength, 5),
            r = a.getColumnMetrics(),
            x = r.width,
            E = (a.pointXOffset = r.offset),
            C = a.dataMin,
            v = a.dataMax,
            z = (a.barW = Math.max(x, 1 + 2 * f));
          e.inverted && (p -= 0.5);
          b.pointPadding && (z = Math.ceil(z));
          y.prototype.translate.apply(a);
          a.points.forEach(function (d) {
            var f = D(d.yBottom, p),
              h = 999 + Math.abs(f),
              n = d.plotX || 0;
            h = c(d.plotY, -h, l.len + h);
            var q = Math.min(h, f),
              u = Math.max(h, f) - q,
              w = x,
              y = n + E,
              A = z;
            t &&
              Math.abs(u) < t &&
              ((u = t),
              (n = (!l.reversed && !d.negative) || (l.reversed && d.negative)),
              B(m) &&
                B(v) &&
                d.y === m &&
                v <= m &&
                (l.min || 0) < m &&
                (C !== v || (l.max || 0) <= m) &&
                (n = !n),
              (q = Math.abs(q - p) > t ? f - t : p - (n ? t : 0)));
            g(d.options.pointWidth) &&
              ((w = A = Math.ceil(d.options.pointWidth)),
              (y -= Math.round((w - x) / 2)));
            b.centerInCategory && (y = a.adjustForMissingColumns(y, w, d, r));
            d.barX = y;
            d.pointWidth = w;
            d.tooltipPos = e.inverted
              ? [
                  c(
                    l.len + l.pos - e.plotLeft - h,
                    l.pos - e.plotLeft,
                    l.len + l.pos - e.plotLeft
                  ),
                  k.len + k.pos - e.plotTop - y - A / 2,
                  u,
                ]
              : [
                  k.left - e.plotLeft + y + A / 2,
                  c(
                    h + l.pos - e.plotTop,
                    l.pos - e.plotTop,
                    l.len + l.pos - e.plotTop
                  ),
                  u,
                ];
            d.shapeType = a.pointClass.prototype.shapeType || "rect";
            d.shapeArgs = a.crispCol.apply(
              a,
              d.isNull ? [y, p, A, 0] : [y, q, A, u]
            );
          });
        };
        f.prototype.drawGraph = function () {
          this.group[this.dense ? "addClass" : "removeClass"](
            "highcharts-dense-data"
          );
        };
        f.prototype.pointAttribs = function (a, c) {
          var b = this.options,
            d = this.pointAttrToOptions || {},
            e = d.stroke || "borderColor",
            f = d["stroke-width"] || "borderWidth",
            g = (a && a.color) || this.color,
            h = (a && a[e]) || b[e] || g;
          d = (a && a.options.dashStyle) || b.dashStyle;
          var k = (a && a[f]) || b[f] || this[f] || 0,
            l = D(a && a.opacity, b.opacity, 1);
          if (a && this.zones.length) {
            var m = a.getZone();
            g =
              a.options.color ||
              (m && (m.color || a.nonZonedColor)) ||
              this.color;
            m &&
              ((h = m.borderColor || h),
              (d = m.dashStyle || d),
              (k = m.borderWidth || k));
          }
          c &&
            a &&
            ((a = J(
              b.states[c],
              (a.options.states && a.options.states[c]) || {}
            )),
            (c = a.brightness),
            (g =
              a.color ||
              ("undefined" !== typeof c && p(g).brighten(a.brightness).get()) ||
              g),
            (h = a[e] || h),
            (k = a[f] || k),
            (d = a.dashStyle || d),
            (l = D(a.opacity, l)));
          e = { fill: g, stroke: h, "stroke-width": k, opacity: l };
          d && (e.dashstyle = d);
          return e;
        };
        f.prototype.drawPoints = function () {
          var a = this,
            c = this.chart,
            b = a.options,
            e = c.renderer,
            f = b.animationLimit || 250,
            g;
          a.points.forEach(function (d) {
            var h = d.graphic,
              k = !!h,
              l = h && c.pointCount < f ? "animate" : "attr";
            if (B(d.plotY) && null !== d.y) {
              g = d.shapeArgs;
              h && d.hasNewShapeType() && (h = h.destroy());
              a.enabledDataSorting &&
                (d.startXPos = a.xAxis.reversed
                  ? -(g ? g.width || 0 : 0)
                  : a.xAxis.width);
              h ||
                ((d.graphic = h = e[d.shapeType](g).add(d.group || a.group)) &&
                  a.enabledDataSorting &&
                  c.hasRendered &&
                  c.pointCount < f &&
                  (h.attr({ x: d.startXPos }), (k = !0), (l = "animate")));
              if (h && k) h[l](J(g));
              if (b.borderRadius) h[l]({ r: b.borderRadius });
              c.styledMode ||
                h[l](a.pointAttribs(d, d.selected && "select")).shadow(
                  !1 !== d.allowShadow && b.shadow,
                  null,
                  b.stacking && !b.borderRadius
                );
              h &&
                (h.addClass(d.getClassName(), !0),
                h.attr({ visibility: d.visible ? "inherit" : "hidden" }));
            } else h && (d.graphic = h.destroy());
          });
        };
        f.prototype.drawTracker = function () {
          var a = this,
            c = a.chart,
            b = c.pointer,
            f = function (a) {
              var c = b.getPointFromEvent(a);
              "undefined" !== typeof c &&
                ((b.isDirectTouch = !0), c.onMouseOver(a));
            },
            g;
          a.points.forEach(function (b) {
            g = z(b.dataLabels)
              ? b.dataLabels
              : b.dataLabel
              ? [b.dataLabel]
              : [];
            b.graphic && (b.graphic.element.point = b);
            g.forEach(function (a) {
              a.div ? (a.div.point = b) : (a.element.point = b);
            });
          });
          a._hasTracking ||
            (a.trackerGroups.forEach(function (d) {
              if (a[d]) {
                a[d]
                  .addClass("highcharts-tracker")
                  .on("mouseover", f)
                  .on("mouseout", function (a) {
                    b.onTrackerMouseOut(a);
                  });
                if (e) a[d].on("touchstart", f);
                !c.styledMode &&
                  a.options.cursor &&
                  a[d].css(k).css({ cursor: a.options.cursor });
              }
            }),
            (a._hasTracking = !0));
          m(this, "afterDrawTracker");
        };
        f.prototype.remove = function () {
          var a = this,
            c = a.chart;
          c.hasRendered &&
            c.series.forEach(function (b) {
              b.type === a.type && (b.isDirty = !0);
            });
          y.prototype.remove.apply(a, arguments);
        };
        f.defaultOptions = J(y.defaultOptions, {
          borderRadius: 0,
          centerInCategory: !1,
          groupPadding: 0.2,
          marker: null,
          pointPadding: 0.1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: { halo: !1, brightness: 0.1 },
            select: { color: "#cccccc", borderColor: "#000000" },
          },
          dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: { distance: 6 },
          threshold: 0,
          borderColor: "#ffffff",
        });
        return f;
      })(y);
      l(I.prototype, {
        cropShoulder: 0,
        directTouch: !0,
        drawLegendSymbol: G.drawRectangle,
        getSymbol: a,
        negStacks: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
      });
      F.registerSeriesType("column", I);
      ("");
      ("");
      return I;
    }
  );
  L(
    f,
    "Core/Series/DataLabel.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B = a.getDeferredAnimation,
        y = f.format,
        F = A.defined,
        I = A.extend,
        v = A.fireEvent,
        r = A.isArray,
        p = A.isString,
        e = A.merge,
        c = A.objectEach,
        k = A.pick,
        g = A.splat,
        l;
      (function (a) {
        function f(a, c, b, e, f) {
          var d = this,
            g = this.chart,
            h = this.isCartesian && g.inverted,
            l = this.enabledDataSorting,
            m = k(a.dlBox && a.dlBox.centerX, a.plotX),
            n = a.plotY,
            p = b.rotation,
            t = b.align,
            q =
              F(m) &&
              F(n) &&
              g.isInsidePlot(m, Math.round(n), {
                inverted: h,
                paneCoordinates: !0,
                series: d,
              }),
            r = function (b) {
              l && d.xAxis && !x && d.setDataLabelStartPos(a, c, f, q, b);
            },
            x = "justify" === k(b.overflow, l ? "none" : "justify"),
            E =
              this.visible &&
              !1 !== a.visible &&
              (a.series.forceDL ||
                (l && !x) ||
                q ||
                (k(b.inside, !!this.options.stacking) &&
                  e &&
                  g.isInsidePlot(m, h ? e.x + 1 : e.y + e.height - 1, {
                    inverted: h,
                    paneCoordinates: !0,
                    series: d,
                  })));
          if (E && F(m) && F(n)) {
            p && c.attr({ align: t });
            t = c.getBBox(!0);
            var v = [0, 0];
            var z = g.renderer.fontMetrics(
              g.styledMode ? void 0 : b.style.fontSize,
              c
            ).b;
            e = I(
              {
                x: h ? this.yAxis.len - n : m,
                y: Math.round(h ? this.xAxis.len - m : n),
                width: 0,
                height: 0,
              },
              e
            );
            I(b, { width: t.width, height: t.height });
            p
              ? ((x = !1),
                (v = g.renderer.rotCorr(z, p)),
                (m = {
                  x: e.x + (b.x || 0) + e.width / 2 + v.x,
                  y:
                    e.y +
                    (b.y || 0) +
                    { top: 0, middle: 0.5, bottom: 1 }[b.verticalAlign] *
                      e.height,
                }),
                (v = [t.x - Number(c.attr("x")), t.y - Number(c.attr("y"))]),
                r(m),
                c[f ? "attr" : "animate"](m))
              : (r(e), c.align(b, void 0, e), (m = c.alignAttr));
            x && 0 <= e.height
              ? this.justifyDataLabel(c, b, m, t, e, f)
              : k(b.crop, !0) &&
                ((e = m.x),
                (r = m.y),
                (e += v[0]),
                (r += v[1]),
                (E =
                  g.isInsidePlot(e, r, { paneCoordinates: !0, series: d }) &&
                  g.isInsidePlot(e + t.width, r + t.height, {
                    paneCoordinates: !0,
                    series: d,
                  })));
            if (b.shape && !p)
              c[f ? "attr" : "animate"]({
                anchorX: h ? g.plotWidth - a.plotY : a.plotX,
                anchorY: h ? g.plotHeight - a.plotX : a.plotY,
              });
          }
          f && l && (c.placed = !1);
          E || (l && !x) ? c.show() : (c.hide(), (c.placed = !1));
        }
        function l(a, c) {
          var b = c.filter;
          return b
            ? ((c = b.operator),
              (a = a[b.property]),
              (b = b.value),
              (">" === c && a > b) ||
              ("<" === c && a < b) ||
              (">=" === c && a >= b) ||
              ("<=" === c && a <= b) ||
              ("==" === c && a == b) ||
              ("===" === c && a === b)
                ? !0
                : !1)
            : !0;
        }
        function m() {
          var a = this,
            e = a.chart,
            b = a.options,
            f = a.points,
            m = a.hasRendered || 0,
            t = e.renderer,
            x = e.options.chart,
            w = x.backgroundColor;
          x = x.plotBackgroundColor;
          var z = t.getContrast((p(x) && x) || (p(w) && w) || "#000000"),
            D = b.dataLabels,
            A;
          w = D.animation;
          w = D.defer ? B(e, w, a) : { defer: 0, duration: 0 };
          D = E(
            E(
              e.options.plotOptions &&
                e.options.plotOptions.series &&
                e.options.plotOptions.series.dataLabels,
              e.options.plotOptions &&
                e.options.plotOptions[a.type] &&
                e.options.plotOptions[a.type].dataLabels
            ),
            D
          );
          v(this, "drawDataLabels");
          if (r(D) || D.enabled || a._hasPointLabels) {
            var G = a.plotGroup(
              "dataLabelsGroup",
              "data-labels",
              m ? "inherit" : "hidden",
              D.zIndex || 6
            );
            G.attr({ opacity: +m });
            !m &&
              (m = a.dataLabelsGroup) &&
              (a.visible && G.show(),
              m[b.animation ? "animate" : "attr"]({ opacity: 1 }, w));
            f.forEach(function (d) {
              A = g(E(D, d.dlOptions || (d.options && d.options.dataLabels)));
              A.forEach(function (f, g) {
                var h =
                    f.enabled && (!d.isNull || d.dataLabelOnNull) && l(d, f),
                  m = d.connectors ? d.connectors[g] : d.connector,
                  n = d.dataLabels ? d.dataLabels[g] : d.dataLabel,
                  p = !n,
                  q = k(f.distance, d.labelDistance);
                if (h) {
                  var u = d.getLabelConfig();
                  var r = k(f[d.formatPrefix + "Format"], f.format);
                  u = F(r)
                    ? y(r, u, e)
                    : (f[d.formatPrefix + "Formatter"] || f.formatter).call(
                        u,
                        f
                      );
                  r = f.style;
                  var x = f.rotation;
                  e.styledMode ||
                    ((r.color = k(f.color, r.color, a.color, "#000000")),
                    "contrast" === r.color
                      ? ((d.contrastColor = t.getContrast(d.color || a.color)),
                        (r.color =
                          (!F(q) && f.inside) || 0 > q || b.stacking
                            ? d.contrastColor
                            : z))
                      : delete d.contrastColor,
                    b.cursor && (r.cursor = b.cursor));
                  var w = {
                    r: f.borderRadius || 0,
                    rotation: x,
                    padding: f.padding,
                    zIndex: 1,
                  };
                  e.styledMode ||
                    ((w.fill = f.backgroundColor),
                    (w.stroke = f.borderColor),
                    (w["stroke-width"] = f.borderWidth));
                  c(w, function (b, a) {
                    "undefined" === typeof b && delete w[a];
                  });
                }
                !n ||
                  (h &&
                    F(u) &&
                    !!n.div === !!f.useHTML &&
                    ((n.rotation && f.rotation) ||
                      n.rotation === f.rotation)) ||
                  ((p = !0),
                  (d.dataLabel = n = d.dataLabel && d.dataLabel.destroy()),
                  d.dataLabels &&
                    (1 === d.dataLabels.length
                      ? delete d.dataLabels
                      : delete d.dataLabels[g]),
                  g || delete d.dataLabel,
                  m &&
                    ((d.connector = d.connector.destroy()),
                    d.connectors &&
                      (1 === d.connectors.length
                        ? delete d.connectors
                        : delete d.connectors[g])));
                h && F(u)
                  ? (n
                      ? (w.text = u)
                      : ((d.dataLabels = d.dataLabels || []),
                        (n = d.dataLabels[g] =
                          x
                            ? t
                                .text(u, 0, 0, f.useHTML)
                                .addClass("highcharts-data-label")
                            : t.label(
                                u,
                                0,
                                0,
                                f.shape,
                                null,
                                null,
                                f.useHTML,
                                null,
                                "data-label"
                              )),
                        g || (d.dataLabel = n),
                        n.addClass(
                          " highcharts-data-label-color-" +
                            d.colorIndex +
                            " " +
                            (f.className || "") +
                            (f.useHTML ? " highcharts-tracker" : "")
                        )),
                    (n.options = f),
                    n.attr(w),
                    e.styledMode || n.css(r).shadow(f.shadow),
                    f.textPath &&
                      !f.useHTML &&
                      (n.setTextPath(
                        (d.getDataLabelPath && d.getDataLabelPath(n)) ||
                          d.graphic,
                        f.textPath
                      ),
                      d.dataLabelPath &&
                        !f.textPath.enabled &&
                        (d.dataLabelPath = d.dataLabelPath.destroy())),
                    n.added || n.add(G),
                    a.alignDataLabel(d, n, f, null, p))
                  : n && n.hide();
              });
            });
          }
          v(this, "afterDrawDataLabels");
        }
        function D(a, c, b, e, f, g) {
          var d = this.chart,
            h = c.align,
            k = c.verticalAlign,
            l = a.box ? 0 : a.padding || 0,
            m = c.x;
          m = void 0 === m ? 0 : m;
          var n = c.y;
          n = void 0 === n ? 0 : n;
          var p = (b.x || 0) + l;
          if (0 > p) {
            "right" === h && 0 <= m
              ? ((c.align = "left"), (c.inside = !0))
              : (m -= p);
            var t = !0;
          }
          p = (b.x || 0) + e.width - l;
          p > d.plotWidth &&
            ("left" === h && 0 >= m
              ? ((c.align = "right"), (c.inside = !0))
              : (m += d.plotWidth - p),
            (t = !0));
          p = b.y + l;
          0 > p &&
            ("bottom" === k && 0 <= n
              ? ((c.verticalAlign = "top"), (c.inside = !0))
              : (n -= p),
            (t = !0));
          p = (b.y || 0) + e.height - l;
          p > d.plotHeight &&
            ("top" === k && 0 >= n
              ? ((c.verticalAlign = "bottom"), (c.inside = !0))
              : (n += d.plotHeight - p),
            (t = !0));
          t && ((c.x = m), (c.y = n), (a.placed = !g), a.align(c, void 0, f));
          return t;
        }
        function E(a, c) {
          var b = [],
            d;
          if (r(a) && !r(c))
            b = a.map(function (b) {
              return e(b, c);
            });
          else if (r(c) && !r(a))
            b = c.map(function (b) {
              return e(a, b);
            });
          else if (r(a) || r(c))
            for (d = Math.max(a.length, c.length); d--; ) b[d] = e(a[d], c[d]);
          else b = e(a, c);
          return b;
        }
        function t(a, c, b, e, f) {
          var d = this.chart,
            g = d.inverted,
            h = this.xAxis,
            k = h.reversed,
            l = g ? c.height / 2 : c.width / 2;
          a = (a = a.pointWidth) ? a / 2 : 0;
          c.startXPos = g ? f.x : k ? -l - a : h.width - l + a;
          c.startYPos = g ? (k ? this.yAxis.height - l + a : -l - a) : f.y;
          e
            ? "hidden" === c.visibility &&
              (c.show(), c.attr({ opacity: 0 }).animate({ opacity: 1 }))
            : c.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c.hide);
          d.hasRendered &&
            (b && c.attr({ x: c.startXPos, y: c.startYPos }), (c.placed = !0));
        }
        var x = [];
        a.compose = function (a) {
          if (-1 === x.indexOf(a)) {
            var c = a.prototype;
            x.push(a);
            c.alignDataLabel = f;
            c.drawDataLabels = m;
            c.justifyDataLabel = D;
            c.setDataLabelStartPos = t;
          }
        };
      })(l || (l = {}));
      ("");
      return l;
    }
  );
  L(
    f,
    "Series/Column/ColumnDataLabel.js",
    [
      f["Core/Series/DataLabel.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B = f.series,
        y = A.merge,
        F = A.pick,
        I;
      (function (f) {
        function r(a, c, f, g, l) {
          var e = this.chart.inverted,
            k = a.series,
            p = (k.xAxis ? k.xAxis.len : this.chart.plotSizeX) || 0;
          k = (k.yAxis ? k.yAxis.len : this.chart.plotSizeY) || 0;
          var r = a.dlBox || a.shapeArgs,
            v = F(a.below, a.plotY > F(this.translatedThreshold, k)),
            E = F(f.inside, !!this.options.stacking);
          r &&
            ((g = y(r)),
            0 > g.y && ((g.height += g.y), (g.y = 0)),
            (r = g.y + g.height - k),
            0 < r && r < g.height && (g.height -= r),
            e &&
              (g = {
                x: k - g.y - g.height,
                y: p - g.x - g.width,
                width: g.height,
                height: g.width,
              }),
            E ||
              (e
                ? ((g.x += v ? 0 : g.width), (g.width = 0))
                : ((g.y += v ? g.height : 0), (g.height = 0))));
          f.align = F(f.align, !e || E ? "center" : v ? "right" : "left");
          f.verticalAlign = F(
            f.verticalAlign,
            e || E ? "middle" : v ? "top" : "bottom"
          );
          B.prototype.alignDataLabel.call(this, a, c, f, g, l);
          f.inside && a.contrastColor && c.css({ color: a.contrastColor });
        }
        var p = [];
        f.compose = function (e) {
          a.compose(B);
          -1 === p.indexOf(e) && (p.push(e), (e.prototype.alignDataLabel = r));
        };
      })(I || (I = {}));
      return I;
    }
  );
  L(
    f,
    "Series/Bar/BarSeries.js",
    [
      f["Series/Column/ColumnSeries.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (f, r) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, e) {
                    a.__proto__ = e;
                  }) ||
                function (a, e) {
                  for (var c in e) e.hasOwnProperty(c) && (a[c] = e[c]);
                };
              return a(f, r);
            };
            return function (f, r) {
              function p() {
                this.constructor = f;
              }
              a(f, r);
              f.prototype =
                null === r
                  ? Object.create(r)
                  : ((p.prototype = r.prototype), new p());
            };
          })(),
        y = A.extend,
        F = A.merge;
      A = (function (f) {
        function v() {
          var a = (null !== f && f.apply(this, arguments)) || this;
          a.data = void 0;
          a.options = void 0;
          a.points = void 0;
          return a;
        }
        B(v, f);
        v.defaultOptions = F(a.defaultOptions, {});
        return v;
      })(a);
      y(A.prototype, { inverted: !0 });
      f.registerSeriesType("bar", A);
      ("");
      return A;
    }
  );
  L(
    f,
    "Series/Scatter/ScatterSeries.js",
    [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]],
    function (a, f) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (f, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, e) {
                    a.__proto__ = e;
                  }) ||
                function (a, e) {
                  for (var c in e) e.hasOwnProperty(c) && (a[c] = e[c]);
                };
              return a(f, e);
            };
            return function (f, e) {
              function c() {
                this.constructor = f;
              }
              a(f, e);
              f.prototype =
                null === e
                  ? Object.create(e)
                  : ((c.prototype = e.prototype), new c());
            };
          })(),
        G = a.seriesTypes,
        y = G.column,
        F = G.line;
      G = f.addEvent;
      var I = f.extend,
        v = f.merge;
      f = (function (a) {
        function f() {
          var e = (null !== a && a.apply(this, arguments)) || this;
          e.data = void 0;
          e.options = void 0;
          e.points = void 0;
          return e;
        }
        B(f, a);
        f.prototype.applyJitter = function () {
          var a = this,
            c = this.options.jitter,
            f = this.points.length;
          c &&
            this.points.forEach(function (e, k) {
              ["x", "y"].forEach(function (g, l) {
                var m = "plot" + g.toUpperCase();
                if (c[g] && !e.isNull) {
                  var p = a[g + "Axis"];
                  var r = c[g] * p.transA;
                  if (p && !p.isLog) {
                    var E = Math.max(0, e[m] - r);
                    p = Math.min(p.len, e[m] + r);
                    l = 1e4 * Math.sin(k + l * f);
                    e[m] = E + (p - E) * (l - Math.floor(l));
                    "x" === g && (e.clientX = e.plotX);
                  }
                }
              });
            });
        };
        f.prototype.drawGraph = function () {
          this.options.lineWidth
            ? a.prototype.drawGraph.call(this)
            : this.graph && (this.graph = this.graph.destroy());
        };
        f.defaultOptions = v(F.defaultOptions, {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: { x: 0, y: 0 },
          marker: { enabled: !0 },
          tooltip: {
            headerFormat:
              '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
          },
        });
        return f;
      })(F);
      I(f.prototype, {
        drawTracker: y.prototype.drawTracker,
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
      });
      G(f, "afterTranslate", function () {
        this.applyJitter();
      });
      a.registerSeriesType("scatter", f);
      ("");
      return f;
    }
  );
  L(
    f,
    "Series/CenteredUtilities.js",
    [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]],
    function (a, f, A) {
      var B = a.deg2rad,
        y = A.fireEvent,
        F = A.isNumber,
        I = A.pick,
        v = A.relativeLength,
        r;
      (function (a) {
        a.getCenter = function () {
          var a = this.options,
            c = this.chart,
            k = 2 * (a.slicedOffset || 0),
            g = c.plotWidth - 2 * k,
            l = c.plotHeight - 2 * k,
            m = a.center,
            p = Math.min(g, l),
            r = a.thickness,
            B = a.size,
            D = a.innerSize || 0;
          "string" === typeof B && (B = parseFloat(B));
          "string" === typeof D && (D = parseFloat(D));
          a = [
            I(m[0], "50%"),
            I(m[1], "50%"),
            I(B && 0 > B ? void 0 : a.size, "100%"),
            I(D && 0 > D ? void 0 : a.innerSize || 0, "0%"),
          ];
          !c.angular || this instanceof f || (a[3] = 0);
          for (m = 0; 4 > m; ++m)
            (B = a[m]),
              (c = 2 > m || (2 === m && /%$/.test(B))),
              (a[m] = v(B, [g, l, p, a[2]][m]) + (c ? k : 0));
          a[3] > a[2] && (a[3] = a[2]);
          F(r) && 2 * r < a[2] && 0 < r && (a[3] = a[2] - 2 * r);
          y(this, "afterGetCenter", { positions: a });
          return a;
        };
        a.getStartAndEndRadians = function (a, c) {
          a = F(a) ? a : 0;
          c = F(c) && c > a && 360 > c - a ? c : a + 360;
          return { start: B * (a + -90), end: B * (c + -90) };
        };
      })(r || (r = {}));
      ("");
      return r;
    }
  );
  L(
    f,
    "Series/Pie/PiePoint.js",
    [
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Series/Point.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A) {
      var B =
          (this && this.__extends) ||
          (function () {
            var a = function (c, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, c) {
                    a.__proto__ = c;
                  }) ||
                function (a, c) {
                  for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]);
                };
              return a(c, e);
            };
            return function (c, e) {
              function f() {
                this.constructor = c;
              }
              a(c, e);
              c.prototype =
                null === e
                  ? Object.create(e)
                  : ((f.prototype = e.prototype), new f());
            };
          })(),
        y = a.setAnimation,
        F = A.addEvent,
        I = A.defined;
      a = A.extend;
      var v = A.isNumber,
        r = A.pick,
        p = A.relativeLength;
      f = (function (a) {
        function c() {
          var c = (null !== a && a.apply(this, arguments)) || this;
          c.labelDistance = void 0;
          c.options = void 0;
          c.series = void 0;
          return c;
        }
        B(c, a);
        c.prototype.getConnectorPath = function () {
          var a = this.labelPosition,
            c = this.series.options.dataLabels,
            e = this.connectorShapes,
            f = c.connectorShape;
          e[f] && (f = e[f]);
          return f.call(
            this,
            { x: a.final.x, y: a.final.y, alignment: a.alignment },
            a.connectorPosition,
            c
          );
        };
        c.prototype.getTranslate = function () {
          return this.sliced
            ? this.slicedTranslation
            : { translateX: 0, translateY: 0 };
        };
        c.prototype.haloPath = function (a) {
          var c = this.shapeArgs;
          return this.sliced || !this.visible
            ? []
            : this.series.chart.renderer.symbols.arc(
                c.x,
                c.y,
                c.r + a,
                c.r + a,
                { innerR: c.r - 1, start: c.start, end: c.end }
              );
        };
        c.prototype.init = function () {
          var c = this;
          a.prototype.init.apply(this, arguments);
          this.name = r(this.name, "Slice");
          var e = function (a) {
            c.slice("select" === a.type);
          };
          F(this, "select", e);
          F(this, "unselect", e);
          return this;
        };
        c.prototype.isValid = function () {
          return v(this.y) && 0 <= this.y;
        };
        c.prototype.setVisible = function (a, c) {
          var e = this,
            f = this.series,
            g = f.chart,
            k = f.options.ignoreHiddenPoint;
          c = r(c, k);
          a !== this.visible &&
            ((this.visible =
              this.options.visible =
              a =
                "undefined" === typeof a ? !this.visible : a),
            (f.options.data[f.data.indexOf(this)] = this.options),
            ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(
              function (c) {
                if (e[c]) e[c][a ? "show" : "hide"](a);
              }
            ),
            this.legendItem && g.legend.colorizeItem(this, a),
            a || "hover" !== this.state || this.setState(""),
            k && (f.isDirty = !0),
            c && g.redraw());
        };
        c.prototype.slice = function (a, c, e) {
          var f = this.series;
          y(e, f.chart);
          r(c, !0);
          this.sliced = this.options.sliced = I(a) ? a : !this.sliced;
          f.options.data[f.data.indexOf(this)] = this.options;
          this.graphic && this.graphic.animate(this.getTranslate());
          this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
        };
        return c;
      })(f);
      a(f.prototype, {
        connectorShapes: {
          fixedOffset: function (a, c, f) {
            var e = c.breakAt;
            c = c.touchingSliceAt;
            return [
              ["M", a.x, a.y],
              f.softConnector
                ? [
                    "C",
                    a.x + ("left" === a.alignment ? -5 : 5),
                    a.y,
                    2 * e.x - c.x,
                    2 * e.y - c.y,
                    e.x,
                    e.y,
                  ]
                : ["L", e.x, e.y],
              ["L", c.x, c.y],
            ];
          },
          straight: function (a, c) {
            c = c.touchingSliceAt;
            return [
              ["M", a.x, a.y],
              ["L", c.x, c.y],
            ];
          },
          crookedLine: function (a, c, f) {
            c = c.touchingSliceAt;
            var e = this.series,
              k = e.center[0],
              m = e.chart.plotWidth,
              r = e.chart.plotLeft;
            e = a.alignment;
            var v = this.shapeArgs.r;
            f = p(f.crookDistance, 1);
            m =
              "left" === e
                ? k + v + (m + r - k - v) * (1 - f)
                : r + (k - v) * f;
            f = ["L", m, a.y];
            k = !0;
            if ("left" === e ? m > a.x || m < c.x : m < a.x || m > c.x) k = !1;
            a = [["M", a.x, a.y]];
            k && a.push(f);
            a.push(["L", c.x, c.y]);
            return a;
          },
        },
      });
      return f;
    }
  );
  L(
    f,
    "Series/Pie/PieSeries.js",
    [
      f["Series/CenteredUtilities.js"],
      f["Series/Column/ColumnSeries.js"],
      f["Core/Globals.js"],
      f["Core/Legend/LegendSymbol.js"],
      f["Series/Pie/PiePoint.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Renderer/SVG/Symbols.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y, F, I, v, r) {
      var p =
          (this && this.__extends) ||
          (function () {
            var a = function (c, e) {
              a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, c) {
                    a.__proto__ = c;
                  }) ||
                function (a, c) {
                  for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]);
                };
              return a(c, e);
            };
            return function (c, e) {
              function f() {
                this.constructor = c;
              }
              a(c, e);
              c.prototype =
                null === e
                  ? Object.create(e)
                  : ((f.prototype = e.prototype), new f());
            };
          })(),
        e = a.getStartAndEndRadians;
      A = A.noop;
      var c = r.clamp,
        k = r.extend,
        g = r.fireEvent,
        l = r.merge,
        m = r.pick,
        z = r.relativeLength;
      r = (function (a) {
        function f() {
          var c = (null !== a && a.apply(this, arguments)) || this;
          c.center = void 0;
          c.data = void 0;
          c.maxLabelDistance = void 0;
          c.options = void 0;
          c.points = void 0;
          return c;
        }
        p(f, a);
        f.prototype.animate = function (a) {
          var c = this,
            e = c.points,
            f = c.startAngleRad;
          a ||
            e.forEach(function (a) {
              var d = a.graphic,
                b = a.shapeArgs;
              d &&
                b &&
                (d.attr({
                  r: m(a.startR, c.center && c.center[3] / 2),
                  start: f,
                  end: f,
                }),
                d.animate(
                  { r: b.r, start: b.start, end: b.end },
                  c.options.animation
                ));
            });
        };
        f.prototype.drawEmpty = function () {
          var a = this.startAngleRad,
            c = this.endAngleRad,
            e = this.options;
          if (0 === this.total && this.center) {
            var f = this.center[0];
            var d = this.center[1];
            this.graph ||
              (this.graph = this.chart.renderer
                .arc(f, d, this.center[1] / 2, 0, a, c)
                .addClass("highcharts-empty-series")
                .add(this.group));
            this.graph.attr({
              d: v.arc(f, d, this.center[2] / 2, 0, {
                start: a,
                end: c,
                innerR: this.center[3] / 2,
              }),
            });
            this.chart.styledMode ||
              this.graph.attr({
                "stroke-width": e.borderWidth,
                fill: e.fillColor || "none",
                stroke: e.color || "#cccccc",
              });
          } else this.graph && (this.graph = this.graph.destroy());
        };
        f.prototype.drawPoints = function () {
          var a = this.chart.renderer;
          this.points.forEach(function (c) {
            c.graphic &&
              c.hasNewShapeType() &&
              (c.graphic = c.graphic.destroy());
            c.graphic ||
              ((c.graphic = a[c.shapeType](c.shapeArgs).add(c.series.group)),
              (c.delayedRendering = !0));
          });
        };
        f.prototype.generatePoints = function () {
          a.prototype.generatePoints.call(this);
          this.updateTotals();
        };
        f.prototype.getX = function (a, e, f) {
          var g = this.center,
            d = this.radii ? this.radii[f.index] || 0 : g[2] / 2;
          a = Math.asin(c((a - g[1]) / (d + f.labelDistance), -1, 1));
          return (
            g[0] +
            (e ? -1 : 1) * Math.cos(a) * (d + f.labelDistance) +
            (0 < f.labelDistance
              ? (e ? -1 : 1) * this.options.dataLabels.padding
              : 0)
          );
        };
        f.prototype.hasData = function () {
          return !!this.processedXData.length;
        };
        f.prototype.redrawPoints = function () {
          var a = this,
            c = a.chart,
            e = c.renderer,
            f = a.options.shadow,
            d,
            g,
            b,
            k;
          this.drawEmpty();
          !f ||
            a.shadowGroup ||
            c.styledMode ||
            (a.shadowGroup = e.g("shadow").attr({ zIndex: -1 }).add(a.group));
          a.points.forEach(function (h) {
            var m = {};
            g = h.graphic;
            if (!h.isNull && g) {
              var n = void 0;
              k = h.shapeArgs;
              d = h.getTranslate();
              c.styledMode ||
                ((n = h.shadowGroup),
                f &&
                  !n &&
                  (n = h.shadowGroup = e.g("shadow").add(a.shadowGroup)),
                n && n.attr(d),
                (b = a.pointAttribs(h, h.selected && "select")));
              h.delayedRendering
                ? (g.setRadialReference(a.center).attr(k).attr(d),
                  c.styledMode ||
                    g.attr(b).attr({ "stroke-linejoin": "round" }).shadow(f, n),
                  (h.delayedRendering = !1))
                : (g.setRadialReference(a.center),
                  c.styledMode || l(!0, m, b),
                  l(!0, m, k, d),
                  g.animate(m));
              g.attr({ visibility: h.visible ? "inherit" : "hidden" });
              g.addClass(h.getClassName(), !0);
            } else g && (h.graphic = g.destroy());
          });
        };
        f.prototype.sortByAngle = function (a, c) {
          a.sort(function (a, e) {
            return "undefined" !== typeof a.angle && (e.angle - a.angle) * c;
          });
        };
        f.prototype.translate = function (a) {
          g(this, "translate");
          this.generatePoints();
          var c = this.options,
            f = c.slicedOffset,
            k = f + (c.borderWidth || 0),
            d = e(c.startAngle, c.endAngle),
            h = (this.startAngleRad = d.start);
          d = (this.endAngleRad = d.end) - h;
          var b = this.points,
            l = c.dataLabels.distance;
          c = c.ignoreHiddenPoint;
          var n = b.length,
            p,
            r = 0;
          a || (this.center = a = this.getCenter());
          for (p = 0; p < n; p++) {
            var w = b[p];
            var v = h + r * d;
            !w.isValid() || (c && !w.visible) || (r += w.percentage / 100);
            var B = h + r * d;
            var y = {
              x: a[0],
              y: a[1],
              r: a[2] / 2,
              innerR: a[3] / 2,
              start: Math.round(1e3 * v) / 1e3,
              end: Math.round(1e3 * B) / 1e3,
            };
            w.shapeType = "arc";
            w.shapeArgs = y;
            w.labelDistance = m(
              w.options.dataLabels && w.options.dataLabels.distance,
              l
            );
            w.labelDistance = z(w.labelDistance, y.r);
            this.maxLabelDistance = Math.max(
              this.maxLabelDistance || 0,
              w.labelDistance
            );
            B = (B + v) / 2;
            B > 1.5 * Math.PI
              ? (B -= 2 * Math.PI)
              : B < -Math.PI / 2 && (B += 2 * Math.PI);
            w.slicedTranslation = {
              translateX: Math.round(Math.cos(B) * f),
              translateY: Math.round(Math.sin(B) * f),
            };
            y = (Math.cos(B) * a[2]) / 2;
            var D = (Math.sin(B) * a[2]) / 2;
            w.tooltipPos = [a[0] + 0.7 * y, a[1] + 0.7 * D];
            w.half = B < -Math.PI / 2 || B > Math.PI / 2 ? 1 : 0;
            w.angle = B;
            v = Math.min(k, w.labelDistance / 5);
            w.labelPosition = {
              natural: {
                x: a[0] + y + Math.cos(B) * w.labelDistance,
                y: a[1] + D + Math.sin(B) * w.labelDistance,
              },
              final: {},
              alignment:
                0 > w.labelDistance ? "center" : w.half ? "right" : "left",
              connectorPosition: {
                breakAt: {
                  x: a[0] + y + Math.cos(B) * v,
                  y: a[1] + D + Math.sin(B) * v,
                },
                touchingSliceAt: { x: a[0] + y, y: a[1] + D },
              },
            };
          }
          g(this, "afterTranslate");
        };
        f.prototype.updateTotals = function () {
          var a = this.points,
            c = a.length,
            e = this.options.ignoreHiddenPoint,
            f,
            d = 0;
          for (f = 0; f < c; f++) {
            var g = a[f];
            !g.isValid() || (e && !g.visible) || (d += g.y);
          }
          this.total = d;
          for (f = 0; f < c; f++)
            (g = a[f]),
              (g.percentage = 0 < d && (g.visible || !e) ? (g.y / d) * 100 : 0),
              (g.total = d);
        };
        f.defaultOptions = l(F.defaultOptions, {
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            allowOverlap: !0,
            connectorPadding: 5,
            connectorShape: "fixedOffset",
            crookDistance: "70%",
            distance: 30,
            enabled: !0,
            formatter: function () {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: !0,
            x: 0,
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: { followPointer: !0 },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: { hover: { brightness: 0.1 } },
        });
        return f;
      })(F);
      k(r.prototype, {
        axisTypes: [],
        directTouch: !0,
        drawGraph: void 0,
        drawLegendSymbol: G.drawRectangle,
        drawTracker: f.prototype.drawTracker,
        getCenter: a.getCenter,
        getSymbol: A,
        isCartesian: !1,
        noSharedTooltip: !0,
        pointAttribs: f.prototype.pointAttribs,
        pointClass: y,
        requireSorting: !1,
        searchPoint: A,
        trackerGroups: ["group", "dataLabelsGroup"],
      });
      I.registerSeriesType("pie", r);
      ("");
      return r;
    }
  );
  L(
    f,
    "Series/Pie/PieDataLabel.js",
    [
      f["Core/Series/DataLabel.js"],
      f["Core/Globals.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Core/Utilities.js"],
    ],
    function (a, f, A, G, y) {
      var B = f.noop,
        I = A.distribute,
        v = G.series,
        r = y.arrayMax,
        p = y.clamp,
        e = y.defined,
        c = y.merge,
        k = y.pick,
        g = y.relativeLength,
        l;
      (function (f) {
        function l() {
          var a = this,
            f = a.data,
            d = a.chart,
            g = a.options.dataLabels || {},
            b = g.connectorPadding,
            l = d.plotWidth,
            m = d.plotHeight,
            p = d.plotLeft,
            B = Math.round(d.chartWidth / 3),
            w = a.center,
            z = w[2] / 2,
            y = w[1],
            E = [[], []],
            D = [0, 0, 0, 0],
            C = a.dataLabelPositioners,
            A,
            G,
            F,
            J,
            N,
            H,
            L,
            O,
            W,
            U,
            Y,
            Q;
          a.visible &&
            (g.enabled || a._hasPointLabels) &&
            (f.forEach(function (b) {
              b.dataLabel &&
                b.visible &&
                b.dataLabel.shortened &&
                (b.dataLabel
                  .attr({ width: "auto" })
                  .css({ width: "auto", textOverflow: "clip" }),
                (b.dataLabel.shortened = !1));
            }),
            v.prototype.drawDataLabels.apply(a),
            f.forEach(function (b) {
              b.dataLabel &&
                (b.visible
                  ? (E[b.half].push(b),
                    (b.dataLabel._pos = null),
                    !e(g.style.width) &&
                      !e(
                        b.options.dataLabels &&
                          b.options.dataLabels.style &&
                          b.options.dataLabels.style.width
                      ) &&
                      b.dataLabel.getBBox().width > B &&
                      (b.dataLabel.css({ width: Math.round(0.7 * B) + "px" }),
                      (b.dataLabel.shortened = !0)))
                  : ((b.dataLabel = b.dataLabel.destroy()),
                    b.dataLabels &&
                      1 === b.dataLabels.length &&
                      delete b.dataLabels));
            }),
            E.forEach(function (c, f) {
              var h = c.length,
                n = [],
                t;
              if (h) {
                a.sortByAngle(c, f - 0.5);
                if (0 < a.maxLabelDistance) {
                  var q = Math.max(0, y - z - a.maxLabelDistance);
                  var r = Math.min(y + z + a.maxLabelDistance, d.plotHeight);
                  c.forEach(function (b) {
                    0 < b.labelDistance &&
                      b.dataLabel &&
                      ((b.top = Math.max(0, y - z - b.labelDistance)),
                      (b.bottom = Math.min(
                        y + z + b.labelDistance,
                        d.plotHeight
                      )),
                      (t = b.dataLabel.getBBox().height || 21),
                      (b.distributeBox = {
                        target: b.labelPosition.natural.y - b.top + t / 2,
                        size: t,
                        rank: b.y,
                      }),
                      n.push(b.distributeBox));
                  });
                  q = r + t - q;
                  I(n, q, q / 5);
                }
                for (Y = 0; Y < h; Y++) {
                  A = c[Y];
                  H = A.labelPosition;
                  J = A.dataLabel;
                  U = !1 === A.visible ? "hidden" : "inherit";
                  W = q = H.natural.y;
                  n &&
                    e(A.distributeBox) &&
                    ("undefined" === typeof A.distributeBox.pos
                      ? (U = "hidden")
                      : ((L = A.distributeBox.size),
                        (W = C.radialDistributionY(A))));
                  delete A.positionIndex;
                  if (g.justify) O = C.justify(A, z, w);
                  else
                    switch (g.alignTo) {
                      case "connectors":
                        O = C.alignToConnectors(c, f, l, p);
                        break;
                      case "plotEdges":
                        O = C.alignToPlotEdges(J, f, l, p);
                        break;
                      default:
                        O = C.radialDistributionX(a, A, W, q);
                    }
                  J._attr = { visibility: U, align: H.alignment };
                  Q = A.options.dataLabels || {};
                  J._pos = {
                    x:
                      O +
                      k(Q.x, g.x) +
                      ({ left: b, right: -b }[H.alignment] || 0),
                    y: W + k(Q.y, g.y) - 10,
                  };
                  H.final.x = O;
                  H.final.y = W;
                  k(g.crop, !0) &&
                    ((N = J.getBBox().width),
                    (q = null),
                    O - N < b && 1 === f
                      ? ((q = Math.round(N - O + b)),
                        (D[3] = Math.max(q, D[3])))
                      : O + N > l - b &&
                        0 === f &&
                        ((q = Math.round(O + N - l + b)),
                        (D[1] = Math.max(q, D[1]))),
                    0 > W - L / 2
                      ? (D[0] = Math.max(Math.round(-W + L / 2), D[0]))
                      : W + L / 2 > m &&
                        (D[2] = Math.max(Math.round(W + L / 2 - m), D[2])),
                    (J.sideOverflow = q));
                }
              }
            }),
            0 === r(D) || this.verifyDataLabelOverflow(D)) &&
            (this.placeDataLabels(),
            this.points.forEach(function (b) {
              Q = c(g, b.options.dataLabels);
              if ((G = k(Q.connectorWidth, 1))) {
                var e;
                F = b.connector;
                if (
                  (J = b.dataLabel) &&
                  J._pos &&
                  b.visible &&
                  0 < b.labelDistance
                ) {
                  U = J._attr.visibility;
                  if ((e = !F))
                    (b.connector = F =
                      d.renderer
                        .path()
                        .addClass(
                          "highcharts-data-label-connector  highcharts-color-" +
                            b.colorIndex +
                            (b.className ? " " + b.className : "")
                        )
                        .add(a.dataLabelsGroup)),
                      d.styledMode ||
                        F.attr({
                          "stroke-width": G,
                          stroke: Q.connectorColor || b.color || "#666666",
                        });
                  F[e ? "attr" : "animate"]({ d: b.getConnectorPath() });
                  F.attr("visibility", U);
                } else F && (b.connector = F.destroy());
              }
            }));
        }
        function m() {
          this.points.forEach(function (a) {
            var c = a.dataLabel,
              d;
            c &&
              a.visible &&
              ((d = c._pos)
                ? (c.sideOverflow &&
                    ((c._attr.width = Math.max(
                      c.getBBox().width - c.sideOverflow,
                      0
                    )),
                    c.css({
                      width: c._attr.width + "px",
                      textOverflow:
                        (this.options.dataLabels.style || {}).textOverflow ||
                        "ellipsis",
                    }),
                    (c.shortened = !0)),
                  c.attr(c._attr),
                  c[c.moved ? "animate" : "attr"](d),
                  (c.moved = !0))
                : c && c.attr({ y: -9999 }));
            delete a.distributeBox;
          }, this);
        }
        function y(a) {
          var c = this.center,
            d = this.options,
            e = d.center,
            b = d.minSize || 80,
            f = null !== d.size;
          if (!f) {
            if (null !== e[0]) var k = Math.max(c[2] - Math.max(a[1], a[3]), b);
            else
              (k = Math.max(c[2] - a[1] - a[3], b)),
                (c[0] += (a[3] - a[1]) / 2);
            null !== e[1]
              ? (k = p(k, b, c[2] - Math.max(a[0], a[2])))
              : ((k = p(k, b, c[2] - a[0] - a[2])),
                (c[1] += (a[0] - a[2]) / 2));
            k < c[2]
              ? ((c[2] = k),
                (c[3] = Math.min(
                  d.thickness
                    ? Math.max(0, k - 2 * d.thickness)
                    : Math.max(0, g(d.innerSize || 0, k)),
                  k
                )),
                this.translate(c),
                this.drawDataLabels && this.drawDataLabels())
              : (f = !0);
          }
          return f;
        }
        var D = [],
          E = {
            radialDistributionY: function (a) {
              return a.top + a.distributeBox.pos;
            },
            radialDistributionX: function (a, c, d, e) {
              return a.getX(
                d < c.top + 2 || d > c.bottom - 2 ? e : d,
                c.half,
                c
              );
            },
            justify: function (a, c, d) {
              return d[0] + (a.half ? -1 : 1) * (c + a.labelDistance);
            },
            alignToPlotEdges: function (a, c, d, e) {
              a = a.getBBox().width;
              return c ? a + e : d - a - e;
            },
            alignToConnectors: function (a, c, d, e) {
              var b = 0,
                f;
              a.forEach(function (a) {
                f = a.dataLabel.getBBox().width;
                f > b && (b = f);
              });
              return c ? b + e : d - b - e;
            },
          };
        f.compose = function (c) {
          a.compose(v);
          -1 === D.indexOf(c) &&
            (D.push(c),
            (c = c.prototype),
            (c.dataLabelPositioners = E),
            (c.alignDataLabel = B),
            (c.drawDataLabels = l),
            (c.placeDataLabels = m),
            (c.verifyDataLabelOverflow = y));
        };
      })(l || (l = {}));
      return l;
    }
  );
  L(
    f,
    "Extensions/OverlappingDataLabels.js",
    [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]],
    function (a, f) {
      function B(a, e) {
        var c = !1;
        if (a) {
          var f = a.newOpacity;
          a.oldOpacity !== f &&
            (a.alignAttr && a.placed
              ? (a[f ? "removeClass" : "addClass"](
                  "highcharts-data-label-hidden"
                ),
                (c = !0),
                (a.alignAttr.opacity = f),
                a[a.isOld ? "animate" : "attr"](a.alignAttr, null, function () {
                  e.styledMode || a.css({ pointerEvents: f ? "auto" : "none" });
                }),
                y(e, "afterHideOverlappingLabel"))
              : a.attr({ opacity: f }));
          a.isOld = !0;
        }
        return c;
      }
      var G = f.addEvent,
        y = f.fireEvent,
        F = f.isArray,
        I = f.isNumber,
        v = f.objectEach,
        r = f.pick;
      G(a, "render", function () {
        var a = this,
          e = [];
        (this.labelCollectors || []).forEach(function (a) {
          e = e.concat(a());
        });
        (this.yAxis || []).forEach(function (a) {
          a.stacking &&
            a.options.stackLabels &&
            !a.options.stackLabels.allowOverlap &&
            v(a.stacking.stacks, function (a) {
              v(a, function (a) {
                a.label && e.push(a.label);
              });
            });
        });
        (this.series || []).forEach(function (c) {
          var f = c.options.dataLabels;
          c.visible &&
            (!1 !== f.enabled || c._hasPointLabels) &&
            ((f = function (c) {
              return c.forEach(function (c) {
                c.visible &&
                  (F(c.dataLabels)
                    ? c.dataLabels
                    : c.dataLabel
                    ? [c.dataLabel]
                    : []
                  ).forEach(function (f) {
                    var g = f.options;
                    f.labelrank = r(
                      g.labelrank,
                      c.labelrank,
                      c.shapeArgs && c.shapeArgs.height
                    );
                    g.allowOverlap
                      ? ((f.oldOpacity = f.opacity),
                        (f.newOpacity = 1),
                        B(f, a))
                      : e.push(f);
                  });
              });
            }),
            f(c.nodes || []),
            f(c.points));
        });
        this.hideOverlappingLabels(e);
      });
      a.prototype.hideOverlappingLabels = function (a) {
        var e = this,
          c = a.length,
          f = e.renderer,
          g,
          l,
          m,
          p = !1;
        var r = function (a) {
          var c,
            e = a.box ? 0 : a.padding || 0,
            d = (c = 0),
            g;
          if (a && (!a.alignAttr || a.placed)) {
            var b = a.alignAttr || { x: a.attr("x"), y: a.attr("y") };
            var k = a.parentGroup;
            a.width ||
              ((c = a.getBBox()),
              (a.width = c.width),
              (a.height = c.height),
              (c = f.fontMetrics(null, a.element).h));
            var l = a.width - 2 * e;
            (g = { left: "0", center: "0.5", right: "1" }[a.alignValue])
              ? (d = +g * l)
              : I(a.x) &&
                Math.round(a.x) !== a.translateX &&
                (d = a.x - a.translateX);
            return {
              x: b.x + (k.translateX || 0) + e - (d || 0),
              y: b.y + (k.translateY || 0) + e - c,
              width: a.width - 2 * e,
              height: a.height - 2 * e,
            };
          }
        };
        for (l = 0; l < c; l++)
          if ((g = a[l]))
            (g.oldOpacity = g.opacity),
              (g.newOpacity = 1),
              (g.absoluteBox = r(g));
        a.sort(function (a, c) {
          return (c.labelrank || 0) - (a.labelrank || 0);
        });
        for (l = 0; l < c; l++) {
          var v = (r = a[l]) && r.absoluteBox;
          for (g = l + 1; g < c; ++g) {
            var D = (m = a[g]) && m.absoluteBox;
            !v ||
              !D ||
              r === m ||
              0 === r.newOpacity ||
              0 === m.newOpacity ||
              "hidden" === r.visibility ||
              "hidden" === m.visibility ||
              D.x >= v.x + v.width ||
              D.x + D.width <= v.x ||
              D.y >= v.y + v.height ||
              D.y + D.height <= v.y ||
              ((r.labelrank < m.labelrank ? r : m).newOpacity = 0);
          }
        }
        a.forEach(function (a) {
          B(a, e) && (p = !0);
        });
        p && y(e, "afterHideAllOverlappingLabels");
      };
    }
  );
  L(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function (a) {
    var f = a.extend,
      A = a.find,
      G = a.isArray,
      y = a.isObject,
      F = a.merge,
      I = a.objectEach,
      v = a.pick,
      r = a.splat,
      p = a.uniqueKey,
      e;
    (function (a) {
      var c = [];
      a.compose = function (a) {
        -1 === c.indexOf(a) && (c.push(a), f(a.prototype, e.prototype));
        return a;
      };
      var e = (function () {
        function a() {}
        a.prototype.currentOptions = function (a) {
          function c(a, f, g, k) {
            var d;
            I(a, function (a, b) {
              if (!k && -1 < e.collectionsWithUpdate.indexOf(b) && f[b])
                for (
                  a = r(a), g[b] = [], d = 0;
                  d < Math.max(a.length, f[b].length);
                  d++
                )
                  f[b][d] &&
                    (void 0 === a[d]
                      ? (g[b][d] = f[b][d])
                      : ((g[b][d] = {}), c(a[d], f[b][d], g[b][d], k + 1)));
              else
                y(a)
                  ? ((g[b] = G(a) ? [] : {}), c(a, f[b] || {}, g[b], k + 1))
                  : (g[b] = "undefined" === typeof f[b] ? null : f[b]);
            });
          }
          var e = this,
            f = {};
          c(a, this.options, f, 0);
          return f;
        };
        a.prototype.matchResponsiveRule = function (a, c) {
          var e = a.condition;
          (
            e.callback ||
            function () {
              return (
                this.chartWidth <= v(e.maxWidth, Number.MAX_VALUE) &&
                this.chartHeight <= v(e.maxHeight, Number.MAX_VALUE) &&
                this.chartWidth >= v(e.minWidth, 0) &&
                this.chartHeight >= v(e.minHeight, 0)
              );
            }
          ).call(this) && c.push(a._id);
        };
        a.prototype.setResponsive = function (a, c) {
          var e = this,
            f = this.options.responsive,
            g = this.currentResponsive,
            k = [];
          !c &&
            f &&
            f.rules &&
            f.rules.forEach(function (a) {
              "undefined" === typeof a._id && (a._id = p());
              e.matchResponsiveRule(a, k);
            }, this);
          c = F.apply(
            void 0,
            k
              .map(function (a) {
                return A((f || {}).rules || [], function (c) {
                  return c._id === a;
                });
              })
              .map(function (a) {
                return a && a.chartOptions;
              })
          );
          c.isResponsiveOptions = !0;
          k = k.toString() || void 0;
          k !== (g && g.ruleIds) &&
            (g && this.update(g.undoOptions, a, !0),
            k
              ? ((g = this.currentOptions(c)),
                (g.isResponsiveOptions = !0),
                (this.currentResponsive = {
                  ruleIds: k,
                  mergedOptions: c,
                  undoOptions: g,
                }),
                this.update(c, a, !0))
              : (this.currentResponsive = void 0));
        };
        return a;
      })();
    })(e || (e = {}));
    ("");
    ("");
    return e;
  });
  L(
    f,
    "masters/highcharts.src.js",
    [
      f["Core/Globals.js"],
      f["Core/Utilities.js"],
      f["Core/DefaultOptions.js"],
      f["Core/Animation/Fx.js"],
      f["Core/Animation/AnimationUtilities.js"],
      f["Core/Renderer/HTML/AST.js"],
      f["Core/FormatUtilities.js"],
      f["Core/Renderer/RendererUtilities.js"],
      f["Core/Renderer/SVG/SVGElement.js"],
      f["Core/Renderer/SVG/SVGRenderer.js"],
      f["Core/Renderer/HTML/HTMLElement.js"],
      f["Core/Renderer/HTML/HTMLRenderer.js"],
      f["Core/Axis/Axis.js"],
      f["Core/Axis/DateTimeAxis.js"],
      f["Core/Axis/LogarithmicAxis.js"],
      f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
      f["Core/Axis/Tick.js"],
      f["Core/Tooltip.js"],
      f["Core/Series/Point.js"],
      f["Core/Pointer.js"],
      f["Core/MSPointer.js"],
      f["Core/Legend/Legend.js"],
      f["Core/Chart/Chart.js"],
      f["Core/Axis/Stacking/StackingAxis.js"],
      f["Core/Axis/Stacking/StackItem.js"],
      f["Core/Series/Series.js"],
      f["Core/Series/SeriesRegistry.js"],
      f["Series/Column/ColumnSeries.js"],
      f["Series/Column/ColumnDataLabel.js"],
      f["Series/Pie/PieSeries.js"],
      f["Series/Pie/PieDataLabel.js"],
      f["Core/Series/DataLabel.js"],
      f["Core/Responsive.js"],
      f["Core/Color/Color.js"],
      f["Core/Time.js"],
    ],
    function (
      a,
      f,
      A,
      G,
      y,
      F,
      I,
      v,
      r,
      p,
      e,
      c,
      k,
      g,
      l,
      m,
      z,
      L,
      J,
      D,
      E,
      t,
      x,
      d,
      h,
      b,
      q,
      n,
      u,
      K,
      w,
      S,
      P,
      X,
      V
    ) {
      a.animate = y.animate;
      a.animObject = y.animObject;
      a.getDeferredAnimation = y.getDeferredAnimation;
      a.setAnimation = y.setAnimation;
      a.stop = y.stop;
      a.timers = G.timers;
      a.AST = F;
      a.Axis = k;
      a.Chart = x;
      a.chart = x.chart;
      a.Fx = G;
      a.Legend = t;
      a.PlotLineOrBand = m;
      a.Point = J;
      a.Pointer = E.isRequired() ? E : D;
      a.Series = b;
      a.StackItem = h;
      a.SVGElement = r;
      a.SVGRenderer = p;
      a.Tick = z;
      a.Time = V;
      a.Tooltip = L;
      a.Color = X;
      a.color = X.parse;
      c.compose(p);
      e.compose(r);
      a.defaultOptions = A.defaultOptions;
      a.getOptions = A.getOptions;
      a.time = A.defaultTime;
      a.setOptions = A.setOptions;
      a.dateFormat = I.dateFormat;
      a.format = I.format;
      a.numberFormat = I.numberFormat;
      a.addEvent = f.addEvent;
      a.arrayMax = f.arrayMax;
      a.arrayMin = f.arrayMin;
      a.attr = f.attr;
      a.clearTimeout = f.clearTimeout;
      a.correctFloat = f.correctFloat;
      a.createElement = f.createElement;
      a.css = f.css;
      a.defined = f.defined;
      a.destroyObjectProperties = f.destroyObjectProperties;
      a.discardElement = f.discardElement;
      a.distribute = v.distribute;
      a.erase = f.erase;
      a.error = f.error;
      a.extend = f.extend;
      a.extendClass = f.extendClass;
      a.find = f.find;
      a.fireEvent = f.fireEvent;
      a.getMagnitude = f.getMagnitude;
      a.getStyle = f.getStyle;
      a.inArray = f.inArray;
      a.isArray = f.isArray;
      a.isClass = f.isClass;
      a.isDOMElement = f.isDOMElement;
      a.isFunction = f.isFunction;
      a.isNumber = f.isNumber;
      a.isObject = f.isObject;
      a.isString = f.isString;
      a.keys = f.keys;
      a.merge = f.merge;
      a.normalizeTickInterval = f.normalizeTickInterval;
      a.objectEach = f.objectEach;
      a.offset = f.offset;
      a.pad = f.pad;
      a.pick = f.pick;
      a.pInt = f.pInt;
      a.relativeLength = f.relativeLength;
      a.removeEvent = f.removeEvent;
      a.seriesType = q.seriesType;
      a.splat = f.splat;
      a.stableSort = f.stableSort;
      a.syncTimeout = f.syncTimeout;
      a.timeUnits = f.timeUnits;
      a.uniqueKey = f.uniqueKey;
      a.useSerialIds = f.useSerialIds;
      a.wrap = f.wrap;
      u.compose(n);
      S.compose(b);
      g.compose(k);
      l.compose(k);
      w.compose(K);
      m.compose(k);
      P.compose(x);
      d.compose(k, x, b);
      return a;
    }
  );
  f["masters/highcharts.src.js"]._modules = f;
  return f["masters/highcharts.src.js"];
});
