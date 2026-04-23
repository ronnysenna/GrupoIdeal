!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
  "use strict";
  var t = [],
    C = T.document,
    n = Object.getPrototypeOf,
    r = t.slice,
    g = t.concat,
    l = t.push,
    s = t.indexOf,
    i = {},
    a = i.toString,
    f = i.hasOwnProperty,
    o = f.toString,
    c = o.call(Object),
    m = {};
  function v(e, t) {
    var n = (t = t || C).createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function u(e, t) {
    return t.toUpperCase();
  }
  var d = "3.2.1",
    E = function (e, t) {
      return new E.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    y = /-([a-z])/g;
  function b(e) {
    var t = !!e && "length" in e && e.length,
      n = E.type(e);
    return (
      "function" !== n &&
      !E.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: d,
      constructor: E,
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null == e
          ? r.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        e = E.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: l,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          s,
          a = arguments[0] || {},
          o = 1,
          r = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[o] || {}), o++),
            "object" == typeof a || E.isFunction(a) || (a = {}),
            o === r && ((a = this), o--);
          o < r;
          o++
        )
          if (null != (e = arguments[o]))
            for (t in e)
              (s = a[t]),
                (n = e[t]),
                a !== n &&
                  (l && n && (E.isPlainObject(n) || (i = Array.isArray(n)))
                    ? ((s = i
                        ? ((i = !1), s && Array.isArray(s) ? s : [])
                        : s && E.isPlainObject(s)
                        ? s
                        : {}),
                      (a[t] = E.extend(l, s, n)))
                    : void 0 !== n && (a[t] = n));
        return a;
      }),
    E.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === E.type(e);
      },
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      },
      isPlainObject: function (e) {
        return !(
          !e ||
          "[object Object]" !== a.call(e) ||
          ((e = n(e)) &&
            ("function" !=
              typeof (e = f.call(e, "constructor") && e.constructor) ||
              o.call(e) !== c))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? i[a.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        v(e);
      },
      camelCase: function (e) {
        return e.replace(p, "ms-").replace(y, u);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (b(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (b(Object(e))
              ? E.merge(t, "string" == typeof e ? [e] : e)
              : l.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
        return (e.length = s), e;
      },
      grep: function (e, t, n) {
        for (var i = [], s = 0, a = e.length, o = !n; s < a; s++)
          !t(e[s], s) != o && i.push(e[s]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          s,
          a = 0,
          o = [];
        if (b(e))
          for (i = e.length; a < i; a++)
            null != (s = t(e[a], a, n)) && o.push(s);
        else for (a in e) (s = t(e[a], a, n)), null != s && o.push(s);
        return g.apply([], o);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i;
        if (
          ("string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          E.isFunction(e))
        )
          return (
            (n = r.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, n.concat(r.call(arguments)));
            }).guid = e.guid =
              e.guid || E.guid++),
            i
          );
      },
      now: Date.now,
      support: m,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var w = (function (n) {
    function d(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n
        ? t
        : i < 0
        ? String.fromCharCode(65536 + i)
        : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
    }
    function i() {
      T();
    }
    var e,
      p,
      w,
      a,
      s,
      f,
      h,
      g,
      x,
      l,
      c,
      T,
      C,
      o,
      E,
      m,
      r,
      u,
      v,
      S = "sizzle" + +new Date(),
      y = n.document,
      _ = 0,
      b = 0,
      k = oe(),
      $ = oe(),
      A = oe(),
      P = function (e, t) {
        return e === t && (c = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      M = t.pop,
      I = t.push,
      L = t.push,
      O = t.slice,
      N = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      j =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      z = "[\\x20\\t\\r\\n\\f]",
      F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      q =
        "\\[" +
        z +
        "*(" +
        F +
        ")(?:" +
        z +
        "*([*^$|!~]?=)" +
        z +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        z +
        "*\\]",
      H =
        ":(" +
        F +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        q +
        ")*)|.*)\\)|)",
      R = new RegExp(z + "+", "g"),
      B = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
      W = new RegExp("^" + z + "*," + z + "*"),
      X = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
      G = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
      Y = new RegExp(H),
      V = new RegExp("^" + F + "$"),
      U = {
        ID: new RegExp("^#(" + F + ")"),
        CLASS: new RegExp("^\\.(" + F + ")"),
        TAG: new RegExp("^(" + F + "|[*])"),
        ATTR: new RegExp("^" + q),
        PSEUDO: new RegExp("^" + H),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            z +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            z +
            "*(?:([+-]|)" +
            z +
            "*(\\d+)|))" +
            z +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + j + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            z +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            z +
            "*((?:-\\d)?\\d*)" +
            z +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      se = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((t = O.call(y.childNodes)), y.childNodes),
        t[y.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: t.length
          ? function (e, t) {
              I.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    function ae(e, t, n, i) {
      var s,
        a,
        o,
        r,
        l,
        c,
        u,
        d = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : y) !== C && T(t), (t = t || C), E)
      ) {
        if (11 !== h && (l = J.exec(e)))
          if ((s = l[1])) {
            if (9 === h) {
              if (!(o = t.getElementById(s))) return n;
              if (o.id === s) return n.push(o), n;
            } else if (d && (o = d.getElementById(s)) && v(t, o) && o.id === s)
              return n.push(o), n;
          } else {
            if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
            if (
              (s = l[3]) &&
              p.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(n, t.getElementsByClassName(s)), n;
          }
        if (p.qsa && !A[e + " "] && (!m || !m.test(e))) {
          if (1 !== h) (d = t), (u = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (r = t.getAttribute("id"))
                ? (r = r.replace(ne, ie))
                : t.setAttribute("id", (r = S)),
                a = (c = f(e)).length;
              a--;

            )
              c[a] = "#" + r + " " + ge(c[a]);
            (u = c.join(",")), (d = (ee.test(e) && pe(t.parentNode)) || t);
          }
          if (u)
            try {
              return L.apply(n, d.querySelectorAll(u)), n;
            } catch (e) {
            } finally {
              r === S && t.removeAttribute("id");
            }
        }
      }
      return g(e.replace(B, "$1"), t, n, i);
    }
    function oe() {
      var n = [];
      function i(e, t) {
        return (
          n.push(e + " ") > w.cacheLength && delete i[n.shift()],
          (i[e + " "] = t)
        );
      }
      return i;
    }
    function re(e) {
      return (e[S] = !0), e;
    }
    function le(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ce(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
    }
    function ue(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && se(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function he(o) {
      return re(function (a) {
        return (
          (a = +a),
          re(function (e, t) {
            for (var n, i = o([], e.length, a), s = i.length; s--; )
              e[(n = i[s])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((p = ae.support = {}),
    (s = ae.isXML =
      function (e) {
        e = e && (e.ownerDocument || e).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (T = ae.setDocument =
      function (e) {
        var t,
          e = e ? e.ownerDocument || e : y;
        return (
          e !== C &&
            9 === e.nodeType &&
            e.documentElement &&
            ((o = (C = e).documentElement),
            (E = !s(C)),
            y !== C &&
              (t = C.defaultView) &&
              t.top !== t &&
              (t.addEventListener
                ? t.addEventListener("unload", i, !1)
                : t.attachEvent && t.attachEvent("onunload", i)),
            (p.attributes = le(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (p.getElementsByTagName = le(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (p.getElementsByClassName = Z.test(C.getElementsByClassName)),
            (p.getById = le(function (e) {
              return (
                (o.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            p.getById
              ? ((w.filter.ID = function (e) {
                  var t = e.replace(te, d);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (w.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    e = t.getElementById(e);
                    return e ? [e] : [];
                  }
                }))
              : ((w.filter.ID = function (e) {
                  var t = e.replace(te, d);
                  return function (e) {
                    e =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t;
                  };
                }),
                (w.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n,
                      i,
                      s,
                      a = t.getElementById(e);
                    if (a) {
                      if ((n = a.getAttributeNode("id")) && n.value === e)
                        return [a];
                      for (s = t.getElementsByName(e), i = 0; (a = s[i++]); )
                        if ((n = a.getAttributeNode("id")) && n.value === e)
                          return [a];
                    }
                    return [];
                  }
                })),
            (w.find.TAG = p.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : p.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    s = 0,
                    a = t.getElementsByTagName(e);
                  if ("*" !== e) return a;
                  for (; (n = a[s++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (w.find.CLASS =
              p.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (r = []),
            (m = []),
            (p.qsa = Z.test(C.querySelectorAll)) &&
              (le(function (e) {
                (o.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + z + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    m.push("\\[" + z + "*(?:value|" + j + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || m.push("~="),
                  e.querySelectorAll(":checked").length || m.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              le(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    m.push("name" + z + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (o.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (p.matchesSelector = Z.test(
              (u =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              le(function (e) {
                (p.disconnectedMatch = u.call(e, "*")),
                  u.call(e, "[s!='']:x"),
                  r.push("!=", H);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (t = Z.test(o.compareDocumentPosition)),
            (v =
              t || Z.test(o.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      t = t && t.parentNode;
                    return (
                      e === t ||
                      !(
                        !t ||
                        1 !== t.nodeType ||
                        !(n.contains
                          ? n.contains(t)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(t))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (P = t
              ? function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!p.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === y && v(y, e))
                        ? -1
                        : t === C || (t.ownerDocument === y && v(y, t))
                        ? 1
                        : l
                        ? N(l, e) - N(l, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (c = !0), 0;
                  var n,
                    i = 0,
                    s = e.parentNode,
                    a = t.parentNode,
                    o = [e],
                    r = [t];
                  if (!s || !a)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : s
                      ? -1
                      : a
                      ? 1
                      : l
                      ? N(l, e) - N(l, t)
                      : 0;
                  if (s === a) return ue(e, t);
                  for (n = e; (n = n.parentNode); ) o.unshift(n);
                  for (n = t; (n = n.parentNode); ) r.unshift(n);
                  for (; o[i] === r[i]; ) i++;
                  return i
                    ? ue(o[i], r[i])
                    : o[i] === y
                    ? -1
                    : r[i] === y
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (ae.matches = function (e, t) {
      return ae(e, null, null, t);
    }),
    (ae.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        (t = t.replace(G, "='$1']")),
        p.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!r || !r.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = u.call(e, t);
          if (
            n ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < ae(t, C, null, [e]).length;
    }),
    (ae.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), v(e, t);
    }),
    (ae.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = w.attrHandle[t.toLowerCase()],
        n = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== n
        ? n
        : p.attributes || !E
        ? e.getAttribute(t)
        : (n = e.getAttributeNode(t)) && n.specified
        ? n.value
        : null;
    }),
    (ae.escape = function (e) {
      return (e + "").replace(ne, ie);
    }),
    (ae.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ae.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        s = 0;
      if (
        ((c = !p.detectDuplicates),
        (l = !p.sortStable && e.slice(0)),
        e.sort(P),
        c)
      ) {
        for (; (t = e[s++]); ) t === e[s] && (i = n.push(s));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (l = null), e;
    }),
    (a = ae.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          s = e.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
          } else if (3 === s || 4 === s) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += a(t);
        return n;
      }),
    ((w = ae.selectors =
      {
        cacheLength: 50,
        createPseudo: re,
        match: U,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, d)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, d)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || ae.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && ae.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return U.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    Y.test(n) &&
                    (t = f(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, d).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = k[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) &&
                k(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, n, i) {
            return function (e) {
              e = ae.attr(e, t);
              return null == e
                ? "!=" === n
                : !n ||
                    ((e += ""),
                    "=" === n
                      ? e === i
                      : "!=" === n
                      ? e !== i
                      : "^=" === n
                      ? i && 0 === e.indexOf(i)
                      : "*=" === n
                      ? i && -1 < e.indexOf(i)
                      : "$=" === n
                      ? i && e.slice(-i.length) === i
                      : "~=" === n
                      ? -1 < (" " + e.replace(R, " ") + " ").indexOf(i)
                      : "|=" === n &&
                        (e === i || e.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (f, e, t, g, m) {
            var v = "nth" !== f.slice(0, 3),
              y = "last" !== f.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var i,
                    s,
                    a,
                    o,
                    r,
                    l,
                    c = v != y ? "nextSibling" : "previousSibling",
                    u = e.parentNode,
                    d = b && e.nodeName.toLowerCase(),
                    h = !n && !b,
                    p = !1;
                  if (u) {
                    if (v) {
                      for (; c; ) {
                        for (o = e; (o = o[c]); )
                          if (
                            b
                              ? o.nodeName.toLowerCase() === d
                              : 1 === o.nodeType
                          )
                            return !1;
                        l = c = "only" === f && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? u.firstChild : u.lastChild]), y && h)) {
                      for (
                        p =
                          (r =
                            (i =
                              (s =
                                (a = (o = u)[S] || (o[S] = {}))[o.uniqueID] ||
                                (a[o.uniqueID] = {}))[f] || [])[0] === _ &&
                            i[1]) && i[2],
                          o = r && u.childNodes[r];
                        (o = (++r && o && o[c]) || (p = r = 0) || l.pop());

                      )
                        if (1 === o.nodeType && ++p && o === e) {
                          s[f] = [_, r, p];
                          break;
                        }
                    } else if (
                      !1 ===
                      (p = h
                        ? (r =
                            (i =
                              (s =
                                (a = (o = e)[S] || (o[S] = {}))[o.uniqueID] ||
                                (a[o.uniqueID] = {}))[f] || [])[0] === _ &&
                            i[1])
                        : p)
                    )
                      for (
                        ;
                        (o = (++r && o && o[c]) || (p = r = 0) || l.pop()) &&
                        ((b
                          ? o.nodeName.toLowerCase() !== d
                          : 1 !== o.nodeType) ||
                          !++p ||
                          (h &&
                            ((s =
                              (a = o[S] || (o[S] = {}))[o.uniqueID] ||
                              (a[o.uniqueID] = {}))[f] = [_, p]),
                          o !== e));

                      );
                    return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                  }
                };
          },
          PSEUDO: function (e, a) {
            var t,
              o =
                w.pseudos[e] ||
                w.setFilters[e.toLowerCase()] ||
                ae.error("unsupported pseudo: " + e);
            return o[S]
              ? o(a)
              : 1 < o.length
              ? ((t = [e, e, "", a]),
                w.setFilters.hasOwnProperty(e.toLowerCase())
                  ? re(function (e, t) {
                      for (var n, i = o(e, a), s = i.length; s--; )
                        e[(n = N(e, i[s]))] = !(t[n] = i[s]);
                    })
                  : function (e) {
                      return o(e, 0, t);
                    })
              : o;
          },
        },
        pseudos: {
          not: re(function (e) {
            var i = [],
              s = [],
              r = h(e.replace(B, "$1"));
            return r[S]
              ? re(function (e, t, n, i) {
                  for (var s, a = r(e, null, i, []), o = e.length; o--; )
                    (s = a[o]) && (e[o] = !(t[o] = s));
                })
              : function (e, t, n) {
                  return (i[0] = e), r(i, null, n, s), (i[0] = null), !s.pop();
                };
          }),
          has: re(function (t) {
            return function (e) {
              return 0 < ae(t, e).length;
            };
          }),
          contains: re(function (t) {
            return (
              (t = t.replace(te, d)),
              function (e) {
                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t);
              }
            );
          }),
          lang: re(function (n) {
            return (
              V.test(n || "") || ae.error("unsupported lang: " + n),
              (n = n.replace(te, d).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === o;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !w.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (e = e.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = w.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      w.pseudos[e] = (function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      w.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      })(e);
    function fe() {}
    function ge(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function me(o, e, t) {
      var r = e.dir,
        l = e.next,
        c = l || r,
        u = t && "parentNode" === c,
        d = b++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[r]); ) if (1 === e.nodeType || u) return o(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var i,
              s,
              a = [_, d];
            if (n) {
              for (; (e = e[r]); )
                if ((1 === e.nodeType || u) && o(e, t, n)) return !0;
            } else
              for (; (e = e[r]); )
                if (1 === e.nodeType || u)
                  if (
                    ((i =
                      (s = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (s[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[r] || e;
                  else {
                    if ((s = i[c]) && s[0] === _ && s[1] === d)
                      return (a[2] = s[2]);
                    if (((i[c] = a)[2] = o(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function ve(s) {
      return 1 < s.length
        ? function (e, t, n) {
            for (var i = s.length; i--; ) if (!s[i](e, t, n)) return !1;
            return !0;
          }
        : s[0];
    }
    function ye(e, t, n, i, s) {
      for (var a, o = [], r = 0, l = e.length, c = null != t; r < l; r++)
        (a = e[r]) && ((n && !n(a, i, s)) || (o.push(a), c && t.push(r)));
      return o;
    }
    function be(p, f, g, m, v, e) {
      return (
        m && !m[S] && (m = be(m)),
        v && !v[S] && (v = be(v, e)),
        re(function (e, t, n, i) {
          var s,
            a,
            o,
            r = [],
            l = [],
            c = t.length,
            u =
              e ||
              (function (e, t, n) {
                for (var i = 0, s = t.length; i < s; i++) ae(e, t[i], n);
                return n;
              })(f || "*", n.nodeType ? [n] : n, []),
            d = !p || (!e && f) ? u : ye(u, r, p, n, i),
            h = g ? (v || (e ? p : c || m) ? [] : t) : d;
          if ((g && g(d, h, n, i), m))
            for (s = ye(h, l), m(s, [], n, i), a = s.length; a--; )
              (o = s[a]) && (h[l[a]] = !(d[l[a]] = o));
          if (e) {
            if (v || p) {
              if (v) {
                for (s = [], a = h.length; a--; )
                  (o = h[a]) && s.push((d[a] = o));
                v(null, (h = []), s, i);
              }
              for (a = h.length; a--; )
                (o = h[a]) &&
                  -1 < (s = v ? N(e, o) : r[a]) &&
                  (e[s] = !(t[s] = o));
            }
          } else (h = ye(h === t ? h.splice(c, h.length) : h)), v ? v(null, t, h, i) : L.apply(t, h);
        })
      );
    }
    function we(m, v) {
      function e(e, t, n, i, s) {
        var a,
          o,
          r,
          l = 0,
          c = "0",
          u = e && [],
          d = [],
          h = x,
          p = e || (b && w.find.TAG("*", s)),
          f = (_ += null == h ? 1 : Math.random() || 0.1),
          g = p.length;
        for (s && (x = t === C || t || s); c !== g && null != (a = p[c]); c++) {
          if (b && a) {
            for (
              o = 0, t || a.ownerDocument === C || (T(a), (n = !E));
              (r = m[o++]);

            )
              if (r(a, t || C, n)) {
                i.push(a);
                break;
              }
            s && (_ = f);
          }
          y && ((a = !r && a) && l--, e && u.push(a));
        }
        if (((l += c), y && c !== l)) {
          for (o = 0; (r = v[o++]); ) r(u, d, t, n);
          if (e) {
            if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = M.call(i));
            d = ye(d);
          }
          L.apply(i, d),
            s && !e && 0 < d.length && 1 < l + v.length && ae.uniqueSort(i);
        }
        return s && ((_ = f), (x = h)), u;
      }
      var y = 0 < v.length,
        b = 0 < m.length;
      return y ? re(e) : e;
    }
    return (
      (fe.prototype = w.filters = w.pseudos),
      (w.setFilters = new fe()),
      (f = ae.tokenize =
        function (e, t) {
          var n,
            i,
            s,
            a,
            o,
            r,
            l,
            c = $[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (o = e, r = [], l = w.preFilter; o; ) {
            for (a in ((n && !(i = W.exec(o))) ||
              (i && (o = o.slice(i[0].length) || o), r.push((s = []))),
            (n = !1),
            (i = X.exec(o)) &&
              ((n = i.shift()),
              s.push({ value: n, type: i[0].replace(B, " ") }),
              (o = o.slice(n.length))),
            w.filter))
              !(i = U[a].exec(o)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                s.push({ value: n, type: a, matches: i }),
                (o = o.slice(n.length)));
            if (!n) break;
          }
          return t ? o.length : o ? ae.error(e) : $(e, r).slice(0);
        }),
      (h = ae.compile =
        function (e, t) {
          var n,
            i = [],
            s = [],
            a = A[e + " "];
          if (!a) {
            for (n = (t = t || f(e)).length; n--; )
              ((a = (function e(t) {
                for (
                  var i,
                    n,
                    s,
                    a = t.length,
                    o = w.relative[t[0].type],
                    r = o || w.relative[" "],
                    l = o ? 1 : 0,
                    c = me(
                      function (e) {
                        return e === i;
                      },
                      r,
                      !0
                    ),
                    u = me(
                      function (e) {
                        return -1 < N(i, e);
                      },
                      r,
                      !0
                    ),
                    d = [
                      function (e, t, n) {
                        return (
                          (n =
                            (!o && (n || t !== x)) ||
                            ((i = t).nodeType ? c : u)(e, t, n)),
                          (i = null),
                          n
                        );
                      },
                    ];
                  l < a;
                  l++
                )
                  if ((n = w.relative[t[l].type])) d = [me(ve(d), n)];
                  else {
                    if (
                      (n = w.filter[t[l].type].apply(null, t[l].matches))[S]
                    ) {
                      for (s = ++l; s < a && !w.relative[t[s].type]; s++);
                      return be(
                        1 < l && ve(d),
                        1 < l &&
                          ge(
                            t.slice(0, l - 1).concat({
                              value: " " === t[l - 2].type ? "*" : "",
                            })
                          ).replace(B, "$1"),
                        n,
                        l < s && e(t.slice(l, s)),
                        s < a && e((t = t.slice(s))),
                        s < a && ge(t)
                      );
                    }
                    d.push(n);
                  }
                return ve(d);
              })(t[n]))[S]
                ? i
                : s
              ).push(a);
            (a = A(e, we(s, i))).selector = e;
          }
          return a;
        }),
      (g = ae.select =
        function (e, t, n, i) {
          var s,
            a,
            o,
            r,
            l,
            c = "function" == typeof e && e,
            u = !i && f((e = c.selector || e));
          if (((n = n || []), 1 === u.length)) {
            if (
              2 < (a = u[0] = u[0].slice(0)).length &&
              "ID" === (o = a[0]).type &&
              9 === t.nodeType &&
              E &&
              w.relative[a[1].type]
            ) {
              if (!(t = (w.find.ID(o.matches[0].replace(te, d), t) || [])[0]))
                return n;
              c && (t = t.parentNode), (e = e.slice(a.shift().value.length));
            }
            for (
              s = U.needsContext.test(e) ? 0 : a.length;
              s-- && ((o = a[s]), !w.relative[(r = o.type)]);

            )
              if (
                (l = w.find[r]) &&
                (i = l(
                  o.matches[0].replace(te, d),
                  (ee.test(a[0].type) && pe(t.parentNode)) || t
                ))
              ) {
                if ((a.splice(s, 1), !(e = i.length && ge(a))))
                  return L.apply(n, i), n;
                break;
              }
          }
          return (
            (c || h(e, u))(
              i,
              t,
              !E,
              n,
              !t || (ee.test(e) && pe(t.parentNode)) || t
            ),
            n
          );
        }),
      (p.sortStable = S.split("").sort(P).join("") === S),
      (p.detectDuplicates = !!c),
      T(),
      (p.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      le(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ce("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        le(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ce("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      le(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ce(j, function (e, t, n) {
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (t = e.getAttributeNode(t)) && t.specified
              ? t.value
              : null;
        }),
      ae
    );
  })(T);
  (E.find = w),
    (E.expr = w.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = w.uniqueSort),
    (E.text = w.getText),
    (E.isXMLDoc = w.isXML),
    (E.contains = w.contains),
    (E.escapeSelector = w.escape);
  function x(e, t, n) {
    for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (s && E(e).is(n)) break;
        i.push(e);
      }
    return i;
  }
  function S(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var _ = E.expr.match.needsContext;
  function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    A = /^.[^:#\[\.,]*$/;
  function P(e, n, i) {
    return E.isFunction(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== i;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== i;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < s.call(n, e) !== i;
        })
      : A.test(n)
      ? E.filter(n, e, i)
      : ((n = E.filter(n, e)),
        E.grep(e, function (e) {
          return -1 < s.call(n, e) !== i && 1 === e.nodeType;
        }));
  }
  (E.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? E.find.matchesSelector(i, e)
          ? [i]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          s = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < i; t++) if (E.contains(s[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, s[t], n);
        return 1 < i ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(P(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(P(this, e || [], !0));
      },
      is: function (e) {
        return !!P(this, "string" == typeof e && _.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function (e, t, n) {
    if (!e) return this;
    if (((n = n || M), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : E.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(E)
        : E.makeArray(e, this);
    if (
      !(i =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : D.exec(e)) ||
      (!i[1] && t)
    )
      return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
    if (i[1]) {
      if (
        ((t = t instanceof E ? t[0] : t),
        E.merge(
          this,
          E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        $.test(i[1]) && E.isPlainObject(t))
      )
        for (var i in t)
          E.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this;
    }
    return (
      (e = C.getElementById(i[2])) && ((this[0] = e), (this.length = 1)), this
    );
  }).prototype = E.fn;
  var M = E(C),
    I = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        s = this.length,
        a = [],
        o = "string" != typeof e && E(e);
      if (!_.test(e))
        for (; i < s; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (o
                ? -1 < o.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              a.push(n);
              break;
            }
      return this.pushStack(1 < a.length ? E.uniqueSort(a) : a);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? s.call(E(e), this[0])
          : s.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return x(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return x(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return x(e, "nextSibling");
        },
        prevAll: function (e) {
          return x(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return x(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return x(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return k(e, "iframe")
            ? e.contentDocument
            : (k(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (i, s) {
        E.fn[i] = function (e, t) {
          var n = E.map(this, s, e);
          return (
            (t = "Until" !== i.slice(-5) ? e : t) &&
              "string" == typeof t &&
              (n = E.filter(t, n)),
            1 < this.length &&
              (L[i] || E.uniqueSort(n), I.test(i) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var N = /[^\x20\t\r\n\f]+/g;
  function j(e) {
    return e;
  }
  function z(e) {
    throw e;
  }
  function F(e, t, n, i) {
    var s;
    try {
      e && E.isFunction((s = e.promise))
        ? s.call(e).done(t).fail(n)
        : e && E.isFunction((s = e.then))
        ? s.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (i) {
    var e, n;
    i =
      "string" == typeof i
        ? ((e = i),
          (n = {}),
          E.each(e.match(N) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, i);
    function s() {
      for (r = r || i.once, o = a = !0; c.length; u = -1)
        for (t = c.shift(); ++u < l.length; )
          !1 === l[u].apply(t[0], t[1]) &&
            i.stopOnFalse &&
            ((u = l.length), (t = !1));
      i.memory || (t = !1), (a = !1), r && (l = t ? [] : "");
    }
    var a,
      t,
      o,
      r,
      l = [],
      c = [],
      u = -1,
      d = {
        add: function () {
          return (
            l &&
              (t && !a && ((u = l.length - 1), c.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  E.isFunction(t)
                    ? (i.unique && d.has(t)) || l.push(t)
                    : t && t.length && "string" !== E.type(t) && n(t);
                });
              })(arguments),
              t && !a && s()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              for (var n; -1 < (n = E.inArray(t, l, n)); )
                l.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return (l = l && []), this;
        },
        disable: function () {
          return (r = c = []), (l = t = ""), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (r = c = []), t || a || (l = t = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              c.push(t),
              a || s()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
    E.extend({
      Deferred: function (e) {
        var a = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          s = "pending",
          o = {
            state: function () {
              return s;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var s = arguments;
              return E.Deferred(function (i) {
                E.each(a, function (e, t) {
                  var n = E.isFunction(s[t[4]]) && s[t[4]];
                  r[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && E.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (s = null);
              }).promise();
            },
            then: function (t, n, i) {
              var l = 0;
              function c(s, a, o, r) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(s < l)) {
                      if ((e = o.apply(n, i)) === a.promise())
                        throw new TypeError("Thenable self-resolution");
                      (t =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        E.isFunction(t)
                          ? r
                            ? t.call(e, c(l, a, j, r), c(l, a, z, r))
                            : (l++,
                              t.call(
                                e,
                                c(l, a, j, r),
                                c(l, a, z, r),
                                c(l, a, j, a.notifyWith)
                              ))
                          : (o !== j && ((n = void 0), (i = [e])),
                            (r || a.resolveWith)(n, i));
                    }
                  }
                  var n = this,
                    i = arguments,
                    t = r
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              l <= s + 1 &&
                                (o !== z && ((n = void 0), (i = [e])),
                                a.rejectWith(n, i));
                          }
                        };
                  s
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      T.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                a[0][3].add(c(0, e, E.isFunction(i) ? i : j, e.notifyWith)),
                  a[1][3].add(c(0, e, E.isFunction(t) ? t : j)),
                  a[2][3].add(c(0, e, E.isFunction(n) ? n : z));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, o) : o;
            },
          },
          r = {};
        return (
          E.each(a, function (e, t) {
            var n = t[2],
              i = t[5];
            (o[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    s = i;
                  },
                  a[3 - e][2].disable,
                  a[0][2].lock
                ),
              n.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = n.fireWith);
          }),
          o.promise(r),
          e && e.call(r, r),
          r
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (s[t] = this),
              (a[t] = 1 < arguments.length ? r.call(arguments) : e),
              --n || o.resolveWith(s, a);
          };
        }
        var n = arguments.length,
          i = n,
          s = Array(i),
          a = r.call(arguments),
          o = E.Deferred();
        if (
          n <= 1 &&
          (F(e, o.done(t(i)).resolve, o.reject, !n),
          "pending" === o.state() || E.isFunction(a[i] && a[i].then))
        )
          return o.then();
        for (; i--; ) F(a[i], t(i), o.reject);
        return o.promise();
      },
    });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    T.console &&
      T.console.warn &&
      e &&
      q.test(e.name) &&
      T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      T.setTimeout(function () {
        throw e;
      });
    });
  var H = E.Deferred();
  function R() {
    C.removeEventListener("DOMContentLoaded", R),
      T.removeEventListener("load", R),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      H.then(e).catch(function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          H.resolveWith(C, [E]);
      },
    }),
    (E.ready.then = H.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? T.setTimeout(E.ready)
      : (C.addEventListener("DOMContentLoaded", R),
        T.addEventListener("load", R));
  function B(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  var W = function (e, t, n, i, s, a, o) {
    var r = 0,
      l = e.length,
      c = null == n;
    if ("object" === E.type(n))
      for (r in ((s = !0), n)) W(e, t, r, n[r], !0, a, o);
    else if (
      void 0 !== i &&
      ((s = !0),
      E.isFunction(i) || (o = !0),
      (t = c
        ? o
          ? (t.call(e, i), null)
          : ((c = t),
            function (e, t, n) {
              return c.call(E(e), n);
            })
        : t))
    )
      for (; r < l; r++) t(e[r], n, o ? i : i.call(e[r], r, t(e[r], n)));
    return s ? e : c ? t.call(e) : l ? t(e[0], n) : a;
  };
  function X() {
    this.expando = E.expando + X.uid++;
  }
  (X.uid = 1),
    (X.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            B(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          s = this.cache(e);
        if ("string" == typeof t) s[E.camelCase(t)] = n;
        else for (i in t) s[E.camelCase(i)] = t[i];
        return s;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][E.camelCase(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(E.camelCase)
              : (t = E.camelCase(t)) in i
              ? [t]
              : t.match(N) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 !== t && !E.isEmptyObject(i)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !E.isEmptyObject(e);
      },
    });
  var G = new X(),
    Y = new X(),
    V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function Q(e, t, n) {
    var i, s;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (s = n) ||
            ("false" !== s &&
              ("null" === s
                ? null
                : s === +s + ""
                ? +s
                : V.test(s)
                ? JSON.parse(s)
                : s));
        } catch (e) {}
        Y.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return Y.hasData(e) || G.hasData(e);
    },
    data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    removeData: function (e, t) {
      Y.remove(e, t);
    },
    _data: function (e, t, n) {
      return G.access(e, t, n);
    },
    _removeData: function (e, t) {
      G.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          i,
          s,
          a = this[0],
          o = a && a.attributes;
        if (void 0 !== n)
          return "object" == typeof n
            ? this.each(function () {
                Y.set(this, n);
              })
            : W(
                this,
                function (e) {
                  var t;
                  return a && void 0 === e
                    ? void 0 !== (t = Y.get(a, n)) || void 0 !== (t = Q(a, n))
                      ? t
                      : void 0
                    : void this.each(function () {
                        Y.set(this, n, e);
                      });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((s = Y.get(a)), 1 === a.nodeType && !G.get(a, "hasDataAttrs"))
        ) {
          for (t = o.length; t--; )
            o[t] &&
              0 === (i = o[t].name).indexOf("data-") &&
              ((i = E.camelCase(i.slice(5))), Q(a, i, s[i]));
          G.set(a, "hasDataAttrs", !0);
        }
        return s;
      },
      removeData: function (e) {
        return this.each(function () {
          Y.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (i = G.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = G.access(e, t, E.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          i = n.length,
          s = n.shift(),
          a = E._queueHooks(e, t);
        "inprogress" === s && ((s = n.shift()), i--),
          s &&
            ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            s.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              a
            )),
          !i && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          G.get(e, n) ||
          G.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              G.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --s || a.resolveWith(o, [o]);
        }
        var i,
          s = 1,
          a = E.Deferred(),
          o = this,
          r = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          r--;

        )
          (i = G.get(o[r], e + "queueHooks")) &&
            i.empty &&
            (s++, i.empty.add(n));
        return n(), a.promise(t);
      },
    });
  function K(e, t, n, i) {
    var s,
      a = {};
    for (s in t) (a[s] = e.style[s]), (e.style[s] = t[s]);
    for (s in ((i = n.apply(e, i || [])), t)) e.style[s] = a[s];
    return i;
  }
  var d = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Z = new RegExp("^(?:([+-])=|)(" + d + ")([a-z%]*)$", "i"),
    J = ["Top", "Right", "Bottom", "Left"],
    ee = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          E.contains(e.ownerDocument, e) &&
          "none" === E.css(e, "display"))
      );
    };
  function te(e, t, n, i) {
    var s,
      a = 1,
      o = 20,
      r = i
        ? function () {
            return i.cur();
          }
        : function () {
            return E.css(e, t, "");
          },
      l = r(),
      c = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
      u = (E.cssNumber[t] || ("px" !== c && +l)) && Z.exec(E.css(e, t));
    if (u && u[3] !== c)
      for (
        c = c || u[3], n = n || [], u = +l || 1;
        E.style(e, t, (u /= a = a || ".5") + c),
          a !== (a = r() / l) && 1 !== a && --o;

      );
    return (
      n &&
        ((u = +u || +l || 0),
        (s = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = s))),
      s
    );
  }
  var ne = {};
  function ie(e, t) {
    for (var n, i, s, a, o, r = [], l = 0, c = e.length; l < c; l++)
      (i = e[l]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((r[l] = G.get(i, "display") || null),
              r[l] || (i.style.display = "")),
            "" === i.style.display &&
              ee(i) &&
              (r[l] =
                ((o = a = void 0),
                (a = (s = i).ownerDocument),
                (o = s.nodeName),
                (s = ne[o]) ||
                  ((a = a.body.appendChild(a.createElement(o))),
                  (s = E.css(a, "display")),
                  a.parentNode.removeChild(a),
                  (ne[o] = s = "none" === s ? "block" : s)))))
          : "none" !== n && ((r[l] = "none"), G.set(i, "display", n)));
    for (l = 0; l < c; l++) null != r[l] && (e[l].style.display = r[l]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return ie(this, !0);
    },
    hide: function () {
      return ie(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var se = /^(?:checkbox|radio)$/i,
    ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    oe = /^$|\/(?:java|ecma)script/i,
    re = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function le(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && k(e, t)) ? E.merge([e], n) : n;
  }
  function ce(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
  }
  (re.optgroup = re.option),
    (re.tbody = re.tfoot = re.colgroup = re.caption = re.thead),
    (re.th = re.td);
  var ue = /<|&#?\w+;/;
  function de(e, t, n, i, s) {
    for (
      var a,
        o,
        r,
        l,
        c,
        u = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((a = e[h]) || 0 === a)
        if ("object" === E.type(a)) E.merge(d, a.nodeType ? [a] : a);
        else if (ue.test(a)) {
          for (
            o = o || u.appendChild(t.createElement("div")),
              r = (ae.exec(a) || ["", ""])[1].toLowerCase(),
              r = re[r] || re._default,
              o.innerHTML = r[1] + E.htmlPrefilter(a) + r[2],
              c = r[0];
            c--;

          )
            o = o.lastChild;
          E.merge(d, o.childNodes), ((o = u.firstChild).textContent = "");
        } else d.push(t.createTextNode(a));
    for (u.textContent = "", h = 0; (a = d[h++]); )
      if (i && -1 < E.inArray(a, i)) s && s.push(a);
      else if (
        ((l = E.contains(a.ownerDocument, a)),
        (o = le(u.appendChild(a), "script")),
        l && ce(o),
        n)
      )
        for (c = 0; (a = o[c++]); ) oe.test(a.type || "") && n.push(a);
    return u;
  }
  (t = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (w = C.createElement("input")).setAttribute("type", "radio"),
    w.setAttribute("checked", "checked"),
    w.setAttribute("name", "t"),
    t.appendChild(w),
    (m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (t.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  var he = C.documentElement,
    pe = /^key/,
    fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ge = /^([^.]*)(?:\.(.+)|)/;
  function me() {
    return !0;
  }
  function ve() {
    return !1;
  }
  function ye() {
    try {
      return C.activeElement;
    } catch (e) {}
  }
  function be(e, t, n, i, s, a) {
    var o, r;
    if ("object" == typeof t) {
      for (r in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        be(e, r, n, i, t[r], a);
      return e;
    }
    if (
      (null == i && null == s
        ? ((s = n), (i = n = void 0))
        : null == s &&
          ("string" == typeof n
            ? ((s = i), (i = void 0))
            : ((s = i), (i = n), (n = void 0))),
      !1 === s)
    )
      s = ve;
    else if (!s) return e;
    return (
      1 === a &&
        ((o = s),
        ((s = function (e) {
          return E().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, s, i, n);
      })
    );
  }
  (E.event = {
    global: {},
    add: function (t, e, n, i, s) {
      var a,
        o,
        r,
        l,
        c,
        u,
        d,
        h,
        p,
        f = G.get(t);
      if (f)
        for (
          n.handler && ((n = (a = n).handler), (s = a.selector)),
            s && E.find.matchesSelector(he, s),
            n.guid || (n.guid = E.guid++),
            (r = f.events) || (r = f.events = {}),
            (o = f.handle) ||
              (o = f.handle =
                function (e) {
                  return void 0 !== E && E.event.triggered !== e.type
                    ? E.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            l = (e = (e || "").match(N) || [""]).length;
          l--;

        )
          (d = p = (c = ge.exec(e[l]) || [])[1]),
            (h = (c[2] || "").split(".").sort()),
            d &&
              ((u = E.event.special[d] || {}),
              (d = (s ? u.delegateType : u.bindType) || d),
              (u = E.event.special[d] || {}),
              (c = E.extend(
                {
                  type: d,
                  origType: p,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: s,
                  needsContext: s && E.expr.match.needsContext.test(s),
                  namespace: h.join("."),
                },
                a
              )),
              (p = r[d]) ||
                (((p = r[d] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, i, h, o)) ||
                  (t.addEventListener && t.addEventListener(d, o))),
              u.add &&
                (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              s ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (E.event.global[d] = !0));
    },
    remove: function (e, t, n, i, s) {
      var a,
        o,
        r,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        g,
        m = G.hasData(e) && G.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(N) || [""]).length; c--; )
          if (
            ((p = g = (r = ge.exec(t[c]) || [])[1]),
            (f = (r[2] || "").split(".").sort()),
            p)
          ) {
            for (
              d = E.event.special[p] || {},
                h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                r =
                  r[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = a = h.length;
              a--;

            )
              (u = h[a]),
                (!s && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (r && !r.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (h.splice(a, 1),
                  u.selector && h.delegateCount--,
                  d.remove && d.remove.call(e, u));
            o &&
              !h.length &&
              ((d.teardown && !1 !== d.teardown.call(e, f, m.handle)) ||
                E.removeEvent(e, p, m.handle),
              delete l[p]);
          } else for (p in l) E.event.remove(e, p + t[c], n, i, !0);
        E.isEmptyObject(l) && G.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        s,
        a,
        o = E.event.fix(e),
        r = new Array(arguments.length),
        l = (G.get(this, "events") || {})[o.type] || [],
        e = E.event.special[o.type] || {};
      for (r[0] = o, t = 1; t < arguments.length; t++) r[t] = arguments[t];
      if (
        ((o.delegateTarget = this),
        !e.preDispatch || !1 !== e.preDispatch.call(this, o))
      ) {
        for (
          a = E.event.handlers.call(this, o, l), t = 0;
          (i = a[t++]) && !o.isPropagationStopped();

        )
          for (
            o.currentTarget = i.elem, n = 0;
            (s = i.handlers[n++]) && !o.isImmediatePropagationStopped();

          )
            (o.rnamespace && !o.rnamespace.test(s.namespace)) ||
              ((o.handleObj = s),
              (o.data = s.data),
              void 0 !==
                (s = (
                  (E.event.special[s.origType] || {}).handle || s.handler
                ).apply(i.elem, r)) &&
                !1 === (o.result = s) &&
                (o.preventDefault(), o.stopPropagation()));
        return e.postDispatch && e.postDispatch.call(this, o), o.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        s,
        a,
        o,
        r = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (a = [], o = {}, n = 0; n < l; n++)
              void 0 === o[(s = (i = t[n]).selector + " ")] &&
                (o[s] = i.needsContext
                  ? -1 < E(s, this).index(c)
                  : E.find(s, this, null, [c]).length),
                o[s] && a.push(i);
            a.length && r.push({ elem: c, handlers: a });
          }
      return (
        (c = this), l < t.length && r.push({ elem: c, handlers: t.slice(l) }), r
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: E.isFunction(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ye() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === ye() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && k(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return k(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      return this instanceof E.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? me
                  : ve),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && E.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || E.now()),
          void (this[E.expando] = !0))
        : new E.Event(e, t);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: ve,
      isPropagationStopped: ve,
      isImmediatePropagationStopped: ve,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = me),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = me),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = me),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && pe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && fe.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      E.event.addProp
    ),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, s) {
        E.event.special[e] = {
          delegateType: s,
          bindType: s,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = s)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, i) {
        return be(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return be(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, s;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            E(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ve),
            this.each(function () {
              E.event.remove(this, e, n, t);
            })
          );
        for (s in e) this.off(s, t, e[s]);
        return this;
      },
    });
  var we =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    xe = /<script|<style|<link/i,
    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ce = /^true\/(.*)/,
    Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Se(e, t) {
    return (
      (k(e, "table") &&
        k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(">tbody", e)[0]) ||
      e
    );
  }
  function _e(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function ke(e) {
    var t = Ce.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function $e(e, t) {
    var n, i, s, a, o, r;
    if (1 === t.nodeType) {
      if (
        G.hasData(e) &&
        ((a = G.access(e)), (o = G.set(t, a)), (r = a.events))
      )
        for (s in (delete o.handle, (o.events = {}), r))
          for (n = 0, i = r[s].length; n < i; n++) E.event.add(t, s, r[s][n]);
      Y.hasData(e) && ((e = Y.access(e)), (e = E.extend({}, e)), Y.set(t, e));
    }
  }
  function Ae(n, i, s, a) {
    i = g.apply([], i);
    var e,
      t,
      o,
      r,
      l,
      c,
      u = 0,
      d = n.length,
      h = d - 1,
      p = i[0],
      f = E.isFunction(p);
    if (f || (1 < d && "string" == typeof p && !m.checkClone && Te.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        f && (i[0] = p.call(this, e, t.html())), Ae(t, i, s, a);
      });
    if (
      d &&
      ((t = (e = de(i, n[0].ownerDocument, !1, n, a)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || a)
    ) {
      for (r = (o = E.map(le(e, "script"), _e)).length; u < d; u++)
        (l = e),
          u !== h &&
            ((l = E.clone(l, !0, !0)), r && E.merge(o, le(l, "script"))),
          s.call(n[u], l, u);
      if (r)
        for (c = o[o.length - 1].ownerDocument, E.map(o, ke), u = 0; u < r; u++)
          (l = o[u]),
            oe.test(l.type || "") &&
              !G.access(l, "globalEval") &&
              E.contains(c, l) &&
              (l.src
                ? E._evalUrl && E._evalUrl(l.src)
                : v(l.textContent.replace(Ee, ""), c));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var i, s = t ? E.filter(t, e) : e, a = 0; null != (i = s[a]); a++)
      n || 1 !== i.nodeType || E.cleanData(le(i)),
        i.parentNode &&
          (n && E.contains(i.ownerDocument, i) && ce(le(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e.replace(we, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        s,
        a,
        o,
        r,
        l,
        c,
        u = e.cloneNode(!0),
        d = E.contains(e.ownerDocument, e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (o = le(u), i = 0, s = (a = le(e)).length; i < s; i++)
          (r = a[i]),
            (l = o[i]),
            (c = void 0),
            "input" === (c = l.nodeName.toLowerCase()) && se.test(r.type)
              ? (l.checked = r.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = r.defaultValue);
      if (t)
        if (n)
          for (a = a || le(e), o = o || le(u), i = 0, s = a.length; i < s; i++)
            $e(a[i], o[i]);
        else $e(e, u);
      return (
        0 < (o = le(u, "script")).length && ce(o, !d && le(e, "script")), u
      );
    },
    cleanData: function (e) {
      for (var t, n, i, s = E.event.special, a = 0; void 0 !== (n = e[a]); a++)
        if (B(n)) {
          if ((t = n[G.expando])) {
            if (t.events)
              for (i in t.events)
                s[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
            n[G.expando] = void 0;
          }
          n[Y.expando] && (n[Y.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return W(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ae(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Se(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ae(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = Se(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return Ae(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ae(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(le(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return W(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !xe.test(e) &&
              !re[(ae.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(le(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ae(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(le(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, o) {
        E.fn[e] = function (e) {
          for (var t, n = [], i = E(e), s = i.length - 1, a = 0; a <= s; a++)
            (t = a === s ? this : this.clone(!0)),
              E(i[a])[o](t),
              l.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var De,
    Me,
    Ie,
    Le,
    Oe,
    Ne,
    je = /^margin/,
    ze = new RegExp("^(" + d + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t = !t || !t.opener ? T : t).getComputedStyle(e);
    };
  function qe() {
    var e;
    Ne &&
      ((Ne.style.cssText =
        "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
      (Ne.innerHTML = ""),
      he.appendChild(Oe),
      (e = T.getComputedStyle(Ne)),
      (De = "1%" !== e.top),
      (Le = "2px" === e.marginLeft),
      (Me = "4px" === e.width),
      (Ne.style.marginRight = "50%"),
      (Ie = "4px" === e.marginRight),
      he.removeChild(Oe),
      (Ne = null));
  }
  function He(e, t, n) {
    var i,
      s,
      a = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          E.contains(e.ownerDocument, e) ||
          (s = E.style(e, t)),
        !m.pixelMarginRight() &&
          ze.test(s) &&
          je.test(t) &&
          ((i = a.width),
          (e = a.minWidth),
          (t = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = e),
          (a.maxWidth = t))),
      void 0 !== s ? s + "" : s
    );
  }
  function Re(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  (Oe = C.createElement("div")),
    (Ne = C.createElement("div")).style &&
      ((Ne.style.backgroundClip = "content-box"),
      (Ne.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === Ne.style.backgroundClip),
      (Oe.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      Oe.appendChild(Ne),
      E.extend(m, {
        pixelPosition: function () {
          return qe(), De;
        },
        boxSizingReliable: function () {
          return qe(), Me;
        },
        pixelMarginRight: function () {
          return qe(), Ie;
        },
        reliableMarginLeft: function () {
          return qe(), Le;
        },
      }));
  var Be = /^(none|table(?!-c[ea]).+)/,
    We = /^--/,
    Xe = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    Ge = { letterSpacing: "0", fontWeight: "400" },
    Ye = ["Webkit", "Moz", "ms"],
    Ve = C.createElement("div").style;
  function Ue(e) {
    return (
      E.cssProps[e] ||
      (E.cssProps[e] =
        (function (e) {
          if (e in Ve) return e;
          for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
            if ((e = Ye[n] + t) in Ve) return e;
        })(e) || e)
    );
  }
  function Qe(e, t, n) {
    var i = Z.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function Ke(e, t, n, i, s) {
    for (
      var a = 0,
        o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += E.css(e, n + J[o], !0, s)),
        i
          ? ("content" === n && (a -= E.css(e, "padding" + J[o], !0, s)),
            "margin" !== n && (a -= E.css(e, "border" + J[o] + "Width", !0, s)))
          : ((a += E.css(e, "padding" + J[o], !0, s)),
            "padding" !== n &&
              (a += E.css(e, "border" + J[o] + "Width", !0, s)));
    return a;
  }
  function Ze(e, t, n) {
    var i,
      s = Fe(e),
      a = He(e, t, s),
      o = "border-box" === E.css(e, "boxSizing", !1, s);
    return ze.test(a)
      ? a
      : ((i = o && (m.boxSizingReliable() || a === e.style[t])),
        "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (a = parseFloat(a) || 0) +
          Ke(e, t, n || (o ? "border" : "content"), i, s) +
          "px");
  }
  function Je(e, t, n, i, s) {
    return new Je.prototype.init(e, t, n, i, s);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            e = He(e, "opacity");
            return "" === e ? "1" : e;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var s,
          a,
          o,
          r = E.camelCase(t),
          l = We.test(t),
          c = e.style;
        return (
          l || (t = Ue(r)),
          (o = E.cssHooks[t] || E.cssHooks[r]),
          void 0 === n
            ? o && "get" in o && void 0 !== (s = o.get(e, !1, i))
              ? s
              : c[t]
            : ("string" === (a = typeof n) &&
                (s = Z.exec(n)) &&
                s[1] &&
                ((n = te(e, t, s)), (a = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === a &&
                  (n += (s && s[3]) || (E.cssNumber[r] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)))
              ))
        );
      }
    },
    css: function (e, t, n, i) {
      var s,
        a = E.camelCase(t);
      return (
        We.test(t) || (t = Ue(a)),
        "normal" ===
          (s =
            void 0 ===
            (s =
              (a = E.cssHooks[t] || E.cssHooks[a]) && "get" in a
                ? a.get(e, !0, n)
                : s)
              ? He(e, t, i)
              : s) &&
          t in Ge &&
          (s = Ge[t]),
        "" === n || n
          ? ((t = parseFloat(s)), !0 === n || isFinite(t) ? t || 0 : s)
          : s
      );
    },
  }),
    E.each(["height", "width"], function (e, a) {
      E.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !Be.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, a, n)
              : K(e, Xe, function () {
                  return Ze(e, a, n);
                });
        },
        set: function (e, t, n) {
          var i,
            s = n && Fe(e),
            s =
              n &&
              Ke(e, a, n, "border-box" === E.css(e, "boxSizing", !1, s), s);
          return (
            s &&
              (i = Z.exec(t)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[a] = t), (t = E.css(e, a))),
            Qe(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Re(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(He(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              K(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (s, a) {
      (E.cssHooks[s + a] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[s + J[t] + a] = i[t] || i[t - 2] || i[0];
          return n;
        },
      }),
        je.test(s) || (E.cssHooks[s + a].set = Qe);
    }),
    E.fn.extend({
      css: function (e, t) {
        return W(
          this,
          function (e, t, n) {
            var i,
              s,
              a = {},
              o = 0;
            if (Array.isArray(t)) {
              for (i = Fe(e), s = t.length; o < s; o++)
                a[t[o]] = E.css(e, t[o], !1, i);
              return a;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    ((E.Tween = Je).prototype = {
      constructor: Je,
      init: function (e, t, n, i, s, a) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = s || E.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = a || (E.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Je.propHooks[this.prop];
        return (e && e.get ? e : Je.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = Je.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                E.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : Je.propHooks._default).set(this),
          this
        );
      },
    }),
    (Je.prototype.init.prototype = Je.prototype),
    (Je.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = E.css(e.elem, e.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (e) {
          E.fx.step[e.prop]
            ? E.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : E.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (Je.propHooks.scrollTop = Je.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (E.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (E.fx = Je.prototype.init),
    (E.fx.step = {});
  var et,
    tt,
    nt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function st() {
    tt &&
      (!1 === C.hidden && T.requestAnimationFrame
        ? T.requestAnimationFrame(st)
        : T.setTimeout(st, E.fx.interval),
      E.fx.tick());
  }
  function at() {
    return (
      T.setTimeout(function () {
        et = void 0;
      }),
      (et = E.now())
    );
  }
  function ot(e, t) {
    var n,
      i = 0,
      s = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      s["margin" + (n = J[i])] = s["padding" + n] = e;
    return t && (s.opacity = s.width = e), s;
  }
  function rt(e, t, n) {
    for (
      var i,
        s = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        a = 0,
        o = s.length;
      a < o;
      a++
    )
      if ((i = s[a].call(n, t, e))) return i;
  }
  function lt(s, e, t) {
    var n,
      a,
      i = 0,
      o = lt.prefilters.length,
      r = E.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (a) return !1;
        for (
          var e = et || at(),
            e = Math.max(0, c.startTime + c.duration - e),
            t = 1 - (e / c.duration || 0),
            n = 0,
            i = c.tweens.length;
          n < i;
          n++
        )
          c.tweens[n].run(t);
        return (
          r.notifyWith(s, [c, t, e]),
          t < 1 && i
            ? e
            : (i || r.notifyWith(s, [c, 1, 0]), r.resolveWith(s, [c]), !1)
        );
      },
      c = r.promise({
        elem: s,
        props: E.extend({}, e),
        opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: et || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          e = E.Tween(
            s,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(e), e;
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) c.tweens[t].run(1);
          return (
            e
              ? (r.notifyWith(s, [c, 1, 0]), r.resolveWith(s, [c, e]))
              : r.rejectWith(s, [c, e]),
            this
          );
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, s, a, o;
        for (n in e)
          if (
            ((i = E.camelCase(n)),
            (s = t[i]),
            (a = e[n]),
            Array.isArray(a) && ((s = a[1]), (a = e[n] = a[0])),
            n !== i && ((e[i] = a), delete e[n]),
            (o = E.cssHooks[i]),
            o && ("expand" in o))
          )
            for (n in ((a = o.expand(a)), delete e[i], a))
              (n in e) || ((e[n] = a[n]), (t[n] = s));
          else t[i] = s;
      })(u, c.opts.specialEasing);
      i < o;
      i++
    )
      if ((n = lt.prefilters[i].call(c, s, u, c.opts)))
        return (
          E.isFunction(n.stop) &&
            (E._queueHooks(c.elem, c.opts.queue).stop = E.proxy(n.stop, n)),
          n
        );
    return (
      E.map(u, rt, c),
      E.isFunction(c.opts.start) && c.opts.start.call(s, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      E.fx.timer(E.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (E.Animation = E.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Z.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n,
          i = 0,
          s = (e = E.isFunction(e) ? ((t = e), ["*"]) : e.match(N)).length;
        i < s;
        i++
      )
        (n = e[i]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          s,
          a,
          o,
          r,
          l,
          c,
          u = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          f = e.nodeType && ee(e),
          g = G.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (o = E._queueHooks(e, "fx")).unqueued &&
            ((o.unqueued = 0),
            (r = o.empty.fire),
            (o.empty.fire = function () {
              o.unqueued || r();
            })),
          o.unqueued++,
          d.always(function () {
            d.always(function () {
              o.unqueued--, E.queue(e, "fx").length || o.empty.fire();
            });
          })),
        t))
          if (((s = t[i]), nt.test(s))) {
            if (
              (delete t[i],
              (a = a || "toggle" === s),
              s === (f ? "hide" : "show"))
            ) {
              if ("show" !== s || !g || void 0 === g[i]) continue;
              f = !0;
            }
            h[i] = (g && g[i]) || E.style(e, i);
          }
        if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
          for (i in (u &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (c = g && g.display) && (c = G.get(e, "display")),
            "none" === (u = E.css(e, "display")) &&
              (c
                ? (u = c)
                : (ie([e], !0),
                  (c = e.style.display || c),
                  (u = E.css(e, "display")),
                  ie([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === E.css(e, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
          n.overflow &&
            ((p.overflow = "hidden"),
            d.always(function () {
              (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (g
                ? "hidden" in g && (f = g.hidden)
                : (g = G.access(e, "fxshow", { display: c })),
              a && (g.hidden = !f),
              f && ie([e], !0),
              d.done(function () {
                for (i in (f || ie([e]), G.remove(e, "fxshow"), h))
                  E.style(e, i, h[i]);
              })),
              (l = rt(f ? g[i] : 0, i, d)),
              i in g ||
                ((g[i] = l.start), f && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (E.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? E.extend({}, e)
          : {
              complete: n || (!n && t) || (E.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !E.isFunction(t) && t),
            };
      return (
        E.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in E.fx.speeds
              ? (i.duration = E.fx.speeds[i.duration])
              : (i.duration = E.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          E.isFunction(i.old) && i.old.call(this),
            i.queue && E.dequeue(this, i.queue);
        }),
        i
      );
    }),
    E.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(ee)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (t, e, n, i) {
        var s = E.isEmptyObject(t),
          a = E.speed(e, n, i),
          i = function () {
            var e = lt(this, E.extend({}, t), a);
            (s || G.get(this, "finish")) && e.stop(!0);
          };
        return (
          (i.finish = i),
          s || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        );
      },
      stop: function (s, e, a) {
        function o(e) {
          var t = e.stop;
          delete e.stop, t(a);
        }
        return (
          "string" != typeof s && ((a = e), (e = s), (s = void 0)),
          e && !1 !== s && this.queue(s || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != s && s + "queueHooks",
              n = E.timers,
              i = G.get(this);
            if (t) i[t] && i[t].stop && o(i[t]);
            else for (t in i) i[t] && i[t].stop && it.test(t) && o(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != s && n[t].queue !== s) ||
                (n[t].anim.stop(a), (e = !1), n.splice(t, 1));
            (!e && a) || E.dequeue(this, s);
          })
        );
      },
      finish: function (o) {
        return (
          !1 !== o && (o = o || "fx"),
          this.each(function () {
            var e,
              t = G.get(this),
              n = t[o + "queue"],
              i = t[o + "queueHooks"],
              s = E.timers,
              a = n ? n.length : 0;
            for (
              t.finish = !0,
                E.queue(this, o, []),
                i && i.stop && i.stop.call(this, !0),
                e = s.length;
              e--;

            )
              s[e].elem === this &&
                s[e].queue === o &&
                (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; e < a; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    E.each(["toggle", "show", "hide"], function (e, i) {
      var s = E.fn[i];
      E.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? s.apply(this, arguments)
          : this.animate(ot(i, !0), e, t, n);
      };
    }),
    E.each(
      {
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        E.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var e,
        t = 0,
        n = E.timers;
      for (et = E.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || E.fx.stop(), (et = void 0);
    }),
    (E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      tt || ((tt = !0), st());
    }),
    (E.fx.stop = function () {
      tt = null;
    }),
    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (E.fn.delay = function (i, e) {
      return (
        (i = (E.fx && E.fx.speeds[i]) || i),
        this.queue((e = e || "fx"), function (e, t) {
          var n = T.setTimeout(e, i);
          t.stop = function () {
            T.clearTimeout(n);
          };
        })
      );
    }),
    (t = C.createElement("input")),
    (d = C.createElement("select").appendChild(C.createElement("option"))),
    (t.type = "checkbox"),
    (m.checkOn = "" !== t.value),
    (m.optSelected = d.selected),
    ((t = C.createElement("input")).value = "t"),
    (t.type = "radio"),
    (m.radioValue = "t" === t.value);
  var ct,
    ut = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return W(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var i,
          s,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return void 0 === e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === a && E.isXMLDoc(e)) ||
                (s =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : s && "set" in s && void 0 !== (i = s.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : s && "get" in s && null !== (i = s.get(e, t))
                ? i
                : null == (i = E.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          s = t && t.match(N);
        if (s && 1 === e.nodeType) for (; (n = s[i++]); ) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = ut[t] || E.find.attr;
      ut[t] = function (e, t, n) {
        var i,
          s,
          a = t.toLowerCase();
        return (
          n ||
            ((s = ut[a]),
            (ut[a] = i),
            (i = null != o(e, t, n) ? a : null),
            (ut[a] = s)),
          i
        );
      };
    });
  var dt = /^(?:input|select|textarea|button)$/i,
    ht = /^(?:a|area)$/i;
  function pt(e) {
    return (e.match(N) || []).join(" ");
  }
  function ft(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  E.fn.extend({
    prop: function (e, t) {
      return W(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var i,
          s,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (s = E.propHooks[t])),
            void 0 !== n
              ? s && "set" in s && void 0 !== (i = s.set(e, n, t))
                ? i
                : (e[t] = n)
              : s && "get" in s && null !== (i = s.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          s,
          a,
          o,
          r = 0;
        if (E.isFunction(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, ft(this)));
          });
        if ("string" == typeof t && t)
          for (e = t.match(N) || []; (n = this[r++]); )
            if (((o = ft(n)), (i = 1 === n.nodeType && " " + pt(o) + " "))) {
              for (a = 0; (s = e[a++]); )
                i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              o !== (o = pt(i)) && n.setAttribute("class", o);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          s,
          a,
          o,
          r = 0;
        if (E.isFunction(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, ft(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (e = t.match(N) || []; (n = this[r++]); )
            if (((o = ft(n)), (i = 1 === n.nodeType && " " + pt(o) + " "))) {
              for (a = 0; (s = e[a++]); )
                for (; -1 < i.indexOf(" " + s + " "); )
                  i = i.replace(" " + s + " ", " ");
              o !== (o = pt(i)) && n.setAttribute("class", o);
            }
        return this;
      },
      toggleClass: function (s, t) {
        var a = typeof s;
        return "boolean" == typeof t && "string" == a
          ? t
            ? this.addClass(s)
            : this.removeClass(s)
          : E.isFunction(s)
          ? this.each(function (e) {
              E(this).toggleClass(s.call(this, e, ft(this), t), t);
            })
          : this.each(function () {
              var e, t, n, i;
              if ("string" == a)
                for (t = 0, n = E(this), i = s.match(N) || []; (e = i[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== s && "boolean" != a) ||
                  ((e = ft(this)) && G.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== s && G.get(this, "__className__")) || ""
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (" " + pt(ft(t)) + " ").indexOf(i))
            return !0;
        return !1;
      },
    });
  var gt = /\r/g;
  E.fn.extend({
    val: function (t) {
      var n,
        e,
        i,
        s = this[0];
      return arguments.length
        ? ((i = E.isFunction(t)),
          this.each(function (e) {
            1 === this.nodeType &&
              (null == (e = i ? t.call(this, e, E(this).val()) : t)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : Array.isArray(e) &&
                  (e = E.map(e, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((n =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, e, "value")) ||
                (this.value = e));
          }))
        : s
        ? (n = E.valHooks[s.type] || E.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (e = n.get(s, "value"))
          ? e
          : "string" == typeof (e = s.value)
          ? e.replace(gt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : pt(E.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                o = s ? i + 1 : n.length,
                r = i < 0 ? o : s ? i : 0;
              r < o;
              r++
            )
              if (
                ((t = n[r]).selected || r === i) &&
                !t.disabled &&
                (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))
              ) {
                if (((t = E(t).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, i, s = e.options, a = E.makeArray(t), o = s.length;
              o--;

            )
              ((i = s[o]).selected =
                -1 < E.inArray(E.valHooks.option.get(i), a)) && (n = !0);
            return n || (e.selectedIndex = -1), a;
          },
        },
      },
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        m.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var mt = /^(?:focusinfocus|focusoutblur)$/;
  E.extend(E.event, {
    trigger: function (e, t, n, i) {
      var s,
        a,
        o,
        r,
        l,
        c,
        u = [n || C],
        d = f.call(e, "type") ? e.type : e,
        h = f.call(e, "namespace") ? e.namespace.split(".") : [],
        p = (a = n = n || C);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !mt.test(d + E.event.triggered) &&
        (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
        (r = d.indexOf(":") < 0 && "on" + d),
        ((e = e[E.expando]
          ? e
          : new E.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
        (e.namespace = h.join(".")),
        (e.rnamespace = e.namespace
          ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : E.makeArray(t, [e])),
        (c = E.event.special[d] || {}),
        i || !c.trigger || !1 !== c.trigger.apply(n, t))
      ) {
        if (!i && !c.noBubble && !E.isWindow(n)) {
          for (
            o = c.delegateType || d, mt.test(o + d) || (p = p.parentNode);
            p;
            p = p.parentNode
          )
            u.push(p), (a = p);
          a === (n.ownerDocument || C) &&
            u.push(a.defaultView || a.parentWindow || T);
        }
        for (s = 0; (p = u[s++]) && !e.isPropagationStopped(); )
          (e.type = 1 < s ? o : c.bindType || d),
            (l = (G.get(p, "events") || {})[e.type] && G.get(p, "handle")) &&
              l.apply(p, t),
            (l = r && p[r]) &&
              l.apply &&
              B(p) &&
              ((e.result = l.apply(p, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          i ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(u.pop(), t)) ||
            !B(n) ||
            (r &&
              E.isFunction(n[d]) &&
              !E.isWindow(n) &&
              ((a = n[r]) && (n[r] = null),
              n[(E.event.triggered = d)](),
              (E.event.triggered = void 0),
              a && (n[r] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      e = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(e, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    E.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    E.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (m.focusin = "onfocusin" in T),
    m.focusin ||
      E.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        function s(e) {
          E.event.simulate(i, e.target, E.event.fix(e));
        }
        E.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = G.access(e, i);
            t || e.addEventListener(n, s, !0), G.access(e, i, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = G.access(e, i) - 1;
            t
              ? G.access(e, i, t)
              : (e.removeEventListener(n, s, !0), G.remove(e, i));
          },
        };
      });
  var vt = T.location,
    yt = E.now(),
    bt = /\?/;
  E.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new T.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        E.error("Invalid XML: " + e),
      t
    );
  };
  var wt = /\[\]$/,
    xt = /\r?\n/g,
    Tt = /^(?:submit|button|image|reset|file)$/i,
    Ct = /^(?:input|select|textarea|keygen)/i;
  (E.param = function (e, t) {
    function n(e, t) {
      (t = E.isFunction(t) ? t() : t),
        (s[s.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
    }
    var i,
      s = [];
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (i in e)
        !(function n(i, e, s, a) {
          if (Array.isArray(e))
            E.each(e, function (e, t) {
              s || wt.test(i)
                ? a(i, t)
                : n(
                    i +
                      "[" +
                      ("object" == typeof t && null != t ? e : "") +
                      "]",
                    t,
                    s,
                    a
                  );
            });
          else if (s || "object" !== E.type(e)) a(i, e);
          else for (var t in e) n(i + "[" + t + "]", e[t], s, a);
        })(i, e[i], t, n);
    return s.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              Ct.test(this.nodeName) &&
              !Tt.test(e) &&
              (this.checked || !se.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(xt, "\r\n") };
                })
              : { name: t.name, value: n.replace(xt, "\r\n") };
          })
          .get();
      },
    });
  var Et = /%20/g,
    St = /#.*$/,
    _t = /([?&])_=[^&]*/,
    kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    $t = /^(?:GET|HEAD)$/,
    At = /^\/\//,
    Pt = {},
    Dt = {},
    Mt = "*/".concat("*"),
    It = C.createElement("a");
  function Lt(a) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        s = e.toLowerCase().match(N) || [];
      if (E.isFunction(t))
        for (; (n = s[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (a[n] = a[n] || []).unshift(t))
            : (a[n] = a[n] || []).push(t);
    };
  }
  function Ot(t, i, s, a) {
    var o = {},
      r = t === Dt;
    function l(e) {
      var n;
      return (
        (o[e] = !0),
        E.each(t[e] || [], function (e, t) {
          t = t(i, s, a);
          return "string" != typeof t || r || o[t]
            ? r
              ? !(n = t)
              : void 0
            : (i.dataTypes.unshift(t), l(t), !1);
        }),
        n
      );
    }
    return l(i.dataTypes[0]) || (!o["*"] && l("*"));
  }
  function Nt(e, t) {
    var n,
      i,
      s = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((s[n] ? e : (i = i || {}))[n] = t[n]);
    return i && E.extend(!0, e, i), e;
  }
  (It.href = vt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            vt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Mt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Nt(Nt(e, E.ajaxSettings), t) : Nt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Lt(Pt),
      ajaxTransport: Lt(Dt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        var l,
          c,
          u,
          n,
          d,
          h,
          p,
          i,
          s,
          f = E.ajaxSetup({}, (t = t || {})),
          g = f.context || f,
          m = f.context && (g.nodeType || g.jquery) ? E(g) : E.event,
          v = E.Deferred(),
          y = E.Callbacks("once memory"),
          b = f.statusCode || {},
          a = {},
          o = {},
          r = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = kt.exec(u)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return h ? u : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = o[e.toLowerCase()] = o[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (f.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (h) w.always(e[w.status]);
                else for (var t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || r;
              return l && l.abort(e), x(0, e), this;
            },
          };
        if (
          (v.promise(w),
          (f.url = ((e || f.url || vt.href) + "").replace(
            At,
            vt.protocol + "//"
          )),
          (f.type = t.method || t.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""]),
          null == f.crossDomain)
        ) {
          s = C.createElement("a");
          try {
            (s.href = f.url),
              (s.href = s.href),
              (f.crossDomain =
                It.protocol + "//" + It.host != s.protocol + "//" + s.host);
          } catch (e) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = E.param(f.data, f.traditional)),
          Ot(Pt, f, t, w),
          h)
        )
          return w;
        for (i in ((p = E.event && f.global) &&
          0 == E.active++ &&
          E.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !$t.test(f.type)),
        (c = f.url.replace(St, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(Et, "+"))
          : ((s = f.url.slice(c.length)),
            f.data && ((c += (bt.test(c) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((c = c.replace(_t, "$1")),
              (s = (bt.test(c) ? "&" : "?") + "_=" + yt++ + s)),
            (f.url = c + s)),
        f.ifModified &&
          (E.lastModified[c] &&
            w.setRequestHeader("If-Modified-Since", E.lastModified[c]),
          E.etag[c] && w.setRequestHeader("If-None-Match", E.etag[c])),
        ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", f.contentType),
        w.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          w.setRequestHeader(i, f.headers[i]);
        if (f.beforeSend && (!1 === f.beforeSend.call(g, w, f) || h))
          return w.abort();
        if (
          ((r = "abort"),
          y.add(f.complete),
          w.done(f.success),
          w.fail(f.error),
          (l = Ot(Dt, f, t, w)))
        ) {
          if (((w.readyState = 1), p && m.trigger("ajaxSend", [w, f]), h))
            return w;
          f.async &&
            0 < f.timeout &&
            (d = T.setTimeout(function () {
              w.abort("timeout");
            }, f.timeout));
          try {
            (h = !1), l.send(a, x);
          } catch (e) {
            if (h) throw e;
            x(-1, e);
          }
        } else x(-1, "No Transport");
        function x(e, t, n, i) {
          var s,
            a,
            o,
            r = t;
          h ||
            ((h = !0),
            d && T.clearTimeout(d),
            (l = void 0),
            (u = i || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (o = (function (e, t, n) {
                for (
                  var i, s, a, o, r = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (s in r)
                    if (r[s] && r[s].test(i)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in n) a = l[0];
                else {
                  for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                      a = s;
                      break;
                    }
                    o = o || s;
                  }
                  a = a || o;
                }
                if (a) return a !== l[0] && l.unshift(a), n[a];
              })(f, w, n)),
            (o = (function (e, t, n, i) {
              var s,
                a,
                o,
                r,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
              for (a = u.shift(); a; )
                if (
                  (e.responseFields[a] && (n[e.responseFields[a]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = a),
                  (a = u.shift()))
                )
                  if ("*" === a) a = l;
                  else if ("*" !== l && l !== a) {
                    if (!(o = c[l + " " + a] || c["* " + a]))
                      for (s in c)
                        if (
                          ((r = s.split(" ")),
                          r[1] === a &&
                            (o = c[l + " " + r[0]] || c["* " + r[0]]))
                        ) {
                          !0 === o
                            ? (o = c[s])
                            : !0 !== c[s] && ((a = r[0]), u.unshift(r[1]));
                          break;
                        }
                    if (!0 !== o)
                      if (o && e.throws) t = o(t);
                      else
                        try {
                          t = o(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: o
                              ? e
                              : "No conversion from " + l + " to " + a,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(f, o, w, i)),
            i
              ? (f.ifModified &&
                  ((n = w.getResponseHeader("Last-Modified")) &&
                    (E.lastModified[c] = n),
                  (n = w.getResponseHeader("etag")) && (E.etag[c] = n)),
                204 === e || "HEAD" === f.type
                  ? (r = "nocontent")
                  : 304 === e
                  ? (r = "notmodified")
                  : ((r = o.state), (s = o.data), (i = !(a = o.error))))
              : ((a = r), (!e && r) || ((r = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || r) + ""),
            i ? v.resolveWith(g, [s, r, w]) : v.rejectWith(g, [w, r, a]),
            w.statusCode(b),
            (b = void 0),
            p && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? s : a]),
            y.fireWith(g, [w, r]),
            p &&
              (m.trigger("ajaxComplete", [w, f]),
              --E.active || E.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, "script");
      },
    }),
    E.each(["get", "post"], function (e, s) {
      E[s] = function (e, t, n, i) {
        return (
          E.isFunction(t) && ((i = i || n), (n = t), (t = void 0)),
          E.ajax(
            E.extend(
              { url: e, type: s, dataType: i, data: t, success: n },
              E.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (E._evalUrl = function (e) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    E.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (E.isFunction(e) && (e = e.call(this[0])),
            (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return E.isFunction(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = E.isFunction(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    });
  var jt = { 0: 200, 1223: 204 },
    zt = E.ajaxSettings.xhr();
  (m.cors = !!zt && "withCredentials" in zt),
    (m.ajax = zt = !!zt),
    E.ajaxTransport(function (s) {
      var a, o;
      if (m.cors || (zt && !s.crossDomain))
        return {
          send: function (e, t) {
            var n,
              i = s.xhr();
            if (
              (i.open(s.type, s.url, s.async, s.username, s.password),
              s.xhrFields)
            )
              for (n in s.xhrFields) i[n] = s.xhrFields[n];
            for (n in (s.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(s.mimeType),
            s.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              i.setRequestHeader(n, e[n]);
            (a = function (e) {
              return function () {
                a &&
                  ((a =
                    o =
                    i.onload =
                    i.onerror =
                    i.onabort =
                    i.onreadystatechange =
                      null),
                  "abort" === e
                    ? i.abort()
                    : "error" === e
                    ? "number" != typeof i.status
                      ? t(0, "error")
                      : t(i.status, i.statusText)
                    : t(
                        jt[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = a()),
              (o = i.onerror = a("error")),
              void 0 !== i.onabort
                ? (i.onabort = o)
                : (i.onreadystatechange = function () {
                    4 === i.readyState &&
                      T.setTimeout(function () {
                        a && o();
                      });
                  }),
              (a = a("abort"));
            try {
              i.send((s.hasContent && s.data) || null);
            } catch (e) {
              if (a) throw e;
            }
          },
          abort: function () {
            a && a();
          },
        };
    }),
    E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return E.globalEval(e), e;
        },
      },
    }),
    E.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    E.ajaxTransport("script", function (n) {
      var i, s;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (i = E("<script>")
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (s = function (e) {
                  i.remove(),
                    (s = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(i[0]);
          },
          abort: function () {
            s && s();
          },
        };
    });
  var Ft = [],
    qt = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Ft.pop() || E.expando + "_" + yt++;
      return (this[e] = !0), e;
    },
  }),
    E.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i,
        s,
        a,
        o =
          !1 !== e.jsonp &&
          (qt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              qt.test(e.data) &&
              "data");
      if (o || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback =
            E.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          o
            ? (e[o] = e[o].replace(qt, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return a || E.error(i + " was not called"), a[0];
          }),
          (e.dataTypes[0] = "json"),
          (s = T[i]),
          (T[i] = function () {
            a = arguments;
          }),
          n.always(function () {
            void 0 === s ? E(T).removeProp(i) : (T[i] = s),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), Ft.push(i)),
              a && E.isFunction(s) && s(a[0]),
              (a = s = void 0);
          }),
          "script"
        );
    }),
    (m.createHTMLDocument =
      (((t = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === t.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((i = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(i))
              : (t = C)),
          (i = !n && []),
          (n = $.exec(e))
            ? [t.createElement(n[1])]
            : ((n = de([e], t, i)),
              i && i.length && E(i).remove(),
              E.merge([], n.childNodes)));
      var i;
    }),
    (E.fn.load = function (e, t, n) {
      var i,
        s,
        a,
        o = this,
        r = e.indexOf(" ");
      return (
        -1 < r && ((i = pt(e.slice(r))), (e = e.slice(0, r))),
        E.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (s = "POST"),
        0 < o.length &&
          E.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t,
          })
            .done(function (e) {
              (a = arguments),
                o.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  o.each(function () {
                    n.apply(this, a || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    E.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        E.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (E.expr.pseudos.animated = function (t) {
      return E.grep(E.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var i,
          s,
          a,
          o,
          r = E.css(e, "position"),
          l = E(e),
          c = {};
        "static" === r && (e.style.position = "relative"),
          (a = l.offset()),
          (i = E.css(e, "top")),
          (o = E.css(e, "left")),
          (o =
            ("absolute" === r || "fixed" === r) && -1 < (i + o).indexOf("auto")
              ? ((s = (r = l.position()).top), r.left)
              : ((s = parseFloat(i) || 0), parseFloat(o) || 0)),
          null !=
            (t = E.isFunction(t) ? t.call(e, n, E.extend({}, a)) : t).top &&
            (c.top = t.top - a.top + s),
          null != t.left && (c.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, c) : l.css(c);
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((e = i.getBoundingClientRect()),
              (i = (n = i.ownerDocument).documentElement),
              (n = n.defaultView),
              {
                top: e.top + n.pageYOffset - i.clientTop,
                left: e.left + n.pageXOffset - i.clientLeft,
              })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === E.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                (i = {
                  top:
                    (i = !k(e[0], "html") ? e.offset() : i).top +
                    E.css(e[0], "borderTopWidth", !0),
                  left: i.left + E.css(e[0], "borderLeftWidth", !0),
                })),
            {
              top: t.top - i.top - E.css(n, "marginTop", !0),
              left: t.left - i.left - E.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === E.css(e, "position");

          )
            e = e.offsetParent;
          return e || he;
        });
      },
    }),
    E.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, s) {
        var a = "pageYOffset" === s;
        E.fn[t] = function (e) {
          return W(
            this,
            function (e, t, n) {
              var i;
              return (
                E.isWindow(e)
                  ? (i = e)
                  : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n
                  ? i
                    ? i[s]
                    : e[t]
                  : void (i
                      ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset)
                      : (e[t] = n))
              );
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = Re(m.pixelPosition, function (e, t) {
        if (t)
          return (t = He(e, n)), ze.test(t) ? E(e).position()[n] + "px" : t;
      });
    }),
    E.each({ Height: "height", Width: "width" }, function (o, r) {
      E.each(
        { padding: "inner" + o, content: r, "": "outer" + o },
        function (i, a) {
          E.fn[a] = function (e, t) {
            var n = arguments.length && (i || "boolean" != typeof e),
              s = i || (!0 === e || !0 === t ? "margin" : "border");
            return W(
              this,
              function (e, t, n) {
                var i;
                return E.isWindow(e)
                  ? 0 === a.indexOf("outer")
                    ? e["inner" + o]
                    : e.document.documentElement["client" + o]
                  : 9 === e.nodeType
                  ? ((i = e.documentElement),
                    Math.max(
                      e.body["scroll" + o],
                      i["scroll" + o],
                      e.body["offset" + o],
                      i["offset" + o],
                      i["client" + o]
                    ))
                  : void 0 === n
                  ? E.css(e, t, s)
                  : E.style(e, t, n, s);
              },
              r,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = k),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var Ht = T.jQuery,
    Rt = T.$;
  return (
    (E.noConflict = function (e) {
      return T.$ === E && (T.$ = Rt), e && T.jQuery === E && (T.jQuery = Ht), E;
    }),
    e || (T.jQuery = T.$ = E),
    E
  );
}),
  (function () {
    function i(e, t, n) {
      return e.call.apply(e.bind, arguments);
    }
    function s(t, n, e) {
      if (!t) throw Error();
      if (2 < arguments.length) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          return Array.prototype.unshift.apply(e, i), t.apply(n, e);
        };
      }
      return function () {
        return t.apply(n, arguments);
      };
    }
    function p(e, t, n) {
      return (p =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? i
          : s).apply(null, arguments);
    }
    var r =
      Date.now ||
      function () {
        return +new Date();
      };
    function t(e, t) {
      (this.a = e), (this.m = t || e), (this.c = this.m.document);
    }
    var l = !!window.FontFace;
    function c(e, t, n, i) {
      if (((t = e.c.createElement(t)), n))
        for (var s in n)
          n.hasOwnProperty(s) &&
            ("style" == s ? (t.style.cssText = n[s]) : t.setAttribute(s, n[s]));
      return i && t.appendChild(e.c.createTextNode(i)), t;
    }
    function u(e, t, n) {
      (e =
        (e = e.c.getElementsByTagName(t)[0]) ||
        document.documentElement).insertBefore(n, e.lastChild);
    }
    function n(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function f(e, t, n) {
      (t = t || []), (n = n || []);
      for (var i = e.className.split(/\s+/), s = 0; s < t.length; s += 1) {
        for (var a = !1, o = 0; o < i.length; o += 1)
          if (t[s] === i[o]) {
            a = !0;
            break;
          }
        a || i.push(t[s]);
      }
      for (t = [], s = 0; s < i.length; s += 1) {
        for (a = !1, o = 0; o < n.length; o += 1)
          if (i[s] === n[o]) {
            a = !0;
            break;
          }
        a || t.push(i[s]);
      }
      e.className = t
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/^\s+|\s+$/, "");
    }
    function a(e, t) {
      for (var n = e.className.split(/\s+/), i = 0, s = n.length; i < s; i++)
        if (n[i] == t) return !0;
      return !1;
    }
    function d(e) {
      if ("string" == typeof e.f) return e.f;
      var t = e.m.location.protocol;
      return "https:" == (t = "about:" == t ? e.a.location.protocol : t)
        ? "https:"
        : "http:";
    }
    function h(e, t, n) {
      function i() {
        o && s && (o(a), (o = null));
      }
      t = c(e, "link", { rel: "stylesheet", href: t, media: "all" });
      var s = !1,
        a = null,
        o = n || null;
      l
        ? ((t.onload = function () {
            (s = !0), i();
          }),
          (t.onerror = function () {
            (s = !0), (a = Error("Stylesheet failed to load")), i();
          }))
        : setTimeout(function () {
            (s = !0), i();
          }, 0),
        u(e, "head", t);
    }
    function g(e, t, n, i) {
      var s = e.c.getElementsByTagName("head")[0];
      if (s) {
        var a = c(e, "script", { src: t }),
          o = !1;
        return (
          (a.onload = a.onreadystatechange =
            function () {
              o ||
                (this.readyState &&
                  "loaded" != this.readyState &&
                  "complete" != this.readyState) ||
                ((o = !0),
                n && n(null),
                (a.onload = a.onreadystatechange = null),
                "HEAD" == a.parentNode.tagName && s.removeChild(a));
            }),
          s.appendChild(a),
          setTimeout(function () {
            o || ((o = !0), n && n(Error("Script load timeout")));
          }, i || 5e3),
          a
        );
      }
      return null;
    }
    function m() {
      (this.a = 0), (this.c = null);
    }
    function v(e) {
      return (
        e.a++,
        function () {
          e.a--, o(e);
        }
      );
    }
    function y(e, t) {
      (e.c = t), o(e);
    }
    function o(e) {
      0 == e.a && e.c && (e.c(), (e.c = null));
    }
    function b(e) {
      this.a = e || "-";
    }
    function w(e, t) {
      (this.c = e), (this.f = 4), (this.a = "n");
      t = (t || "n4").match(/^([nio])([1-9])$/i);
      t && ((this.a = t[1]), (this.f = parseInt(t[2], 10)));
    }
    function x(e) {
      var t = [];
      e = e.split(/,\s*/);
      for (var n = 0; n < e.length; n++) {
        var i = e[n].replace(/['"]/g, "");
        -1 != i.indexOf(" ") || /^\d/.test(i)
          ? t.push("'" + i + "'")
          : t.push(i);
      }
      return t.join(",");
    }
    function T(e) {
      return e.a + e.f;
    }
    function C(e) {
      var t = "normal";
      return "o" === e.a ? (t = "oblique") : "i" === e.a && (t = "italic"), t;
    }
    function E(e, t) {
      (this.c = e),
        (this.f = e.m.document.documentElement),
        (this.h = t),
        (this.a = new b("-")),
        (this.j = !1 !== t.events),
        (this.g = !1 !== t.classes);
    }
    function S(e) {
      var t, n, i;
      e.g &&
        ((t = a(e.f, e.a.c("wf", "active"))),
        (n = []),
        (i = [e.a.c("wf", "loading")]),
        t || n.push(e.a.c("wf", "inactive")),
        f(e.f, n, i)),
        _(e, "inactive");
    }
    function _(e, t, n) {
      e.j && e.h[t] && (n ? e.h[t](n.c, T(n)) : e.h[t]());
    }
    function k() {
      this.c = {};
    }
    function $(e, t) {
      (this.c = e),
        (this.f = t),
        (this.a = c(this.c, "span", { "aria-hidden": "true" }, this.f));
    }
    function A(e) {
      u(e.c, "body", e.a);
    }
    function P(e) {
      return (
        "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
        x(e.c) +
        ";font-style:" +
        C(e) +
        ";font-weight:" +
        e.f +
        "00;"
      );
    }
    function D(e, t, n, i, s, a) {
      (this.g = e),
        (this.j = t),
        (this.a = i),
        (this.c = n),
        (this.f = s || 3e3),
        (this.h = a || void 0);
    }
    function M(e, t, n, i, s, a, o) {
      (this.v = e),
        (this.B = t),
        (this.c = n),
        (this.a = i),
        (this.s = o || "BESbswy"),
        (this.f = {}),
        (this.w = s || 3e3),
        (this.u = a || null),
        (this.o = this.j = this.h = this.g = null),
        (this.g = new $(this.c, this.s)),
        (this.h = new $(this.c, this.s)),
        (this.j = new $(this.c, this.s)),
        (this.o = new $(this.c, this.s)),
        (e = P((e = new w(this.a.c + ",serif", T(this.a))))),
        (this.g.a.style.cssText = e),
        (e = P((e = new w(this.a.c + ",sans-serif", T(this.a))))),
        (this.h.a.style.cssText = e),
        (e = P((e = new w("serif", T(this.a))))),
        (this.j.a.style.cssText = e),
        (e = P((e = new w("sans-serif", T(this.a))))),
        (this.o.a.style.cssText = e),
        A(this.g),
        A(this.h),
        A(this.j),
        A(this.o);
    }
    (b.prototype.c = function (e) {
      for (var t = [], n = 0; n < arguments.length; n++)
        t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
      return t.join(this.a);
    }),
      (D.prototype.start = function () {
        var s = this.c.m.document,
          a = this,
          o = r(),
          e = new Promise(function (n, i) {
            !(function t() {
              var e;
              r() - o >= a.f
                ? i()
                : s.fonts
                    .load(C((e = a.a)) + " " + e.f + "00 300px " + x(e.c), a.h)
                    .then(
                      function (e) {
                        1 <= e.length ? n() : setTimeout(t, 25);
                      },
                      function () {
                        i();
                      }
                    );
            })();
          }),
          t = new Promise(function (e, t) {
            setTimeout(t, a.f);
          });
        Promise.race([t, e]).then(
          function () {
            a.g(a.a);
          },
          function () {
            a.j(a.a);
          }
        );
      });
    var I = { D: "serif", C: "sans-serif" },
      L = null;
    function O() {
      var e;
      return (
        null === L &&
          ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
            window.navigator.userAgent
          )),
          (L =
            !!e &&
            (parseInt(e[1], 10) < 536 ||
              (536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)))),
        L
      );
    }
    function N(e, t, n) {
      for (var i in I)
        if (I.hasOwnProperty(i) && t === e.f[I[i]] && n === e.f[I[i]])
          return !0;
      return !1;
    }
    function j(e) {
      var t,
        n = e.g.a.offsetWidth,
        i = e.h.a.offsetWidth;
      (t = !(t = n === e.f.serif && i === e.f["sans-serif"])
        ? O() && N(e, n, i)
        : t)
        ? r() - e.A >= e.w
          ? O() && N(e, n, i) && (null === e.u || e.u.hasOwnProperty(e.a.c))
            ? z(e, e.v)
            : z(e, e.B)
          : setTimeout(
              p(function () {
                j(this);
              }, e),
              50
            )
        : z(e, e.v);
    }
    function z(e, t) {
      setTimeout(
        p(function () {
          n(this.g.a), n(this.h.a), n(this.j.a), n(this.o.a), t(this.a);
        }, e),
        0
      );
    }
    function F(e, t, n) {
      (this.c = e),
        (this.a = t),
        (this.f = 0),
        (this.o = this.j = !1),
        (this.s = n);
    }
    M.prototype.start = function () {
      (this.f.serif = this.j.a.offsetWidth),
        (this.f["sans-serif"] = this.o.a.offsetWidth),
        (this.A = r()),
        j(this);
    };
    var q = null;
    function H(e) {
      0 == --e.f &&
        e.j &&
        (e.o
          ? ((e = e.a).g &&
              f(
                e.f,
                [e.a.c("wf", "active")],
                [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]
              ),
            _(e, "active"))
          : S(e.a));
    }
    function e(e) {
      (this.j = e), (this.a = new k()), (this.h = 0), (this.f = this.g = !0);
    }
    function R(e, t) {
      (this.c = e), (this.a = t);
    }
    function B(e, t) {
      (this.c = e), (this.a = t);
    }
    function W(e, t, n) {
      (this.c = e || t + "//fonts.googleapis.com/css"),
        (this.a = []),
        (this.f = []),
        (this.g = n || "");
    }
    (F.prototype.g = function (e) {
      var t = this.a;
      t.g &&
        f(
          t.f,
          [t.a.c("wf", e.c, T(e).toString(), "active")],
          [
            t.a.c("wf", e.c, T(e).toString(), "loading"),
            t.a.c("wf", e.c, T(e).toString(), "inactive"),
          ]
        ),
        _(t, "fontactive", e),
        (this.o = !0),
        H(this);
    }),
      (F.prototype.h = function (e) {
        var t,
          n,
          i,
          s = this.a;
        s.g &&
          ((t = a(s.f, s.a.c("wf", e.c, T(e).toString(), "active"))),
          (n = []),
          (i = [s.a.c("wf", e.c, T(e).toString(), "loading")]),
          t || n.push(s.a.c("wf", e.c, T(e).toString(), "inactive")),
          f(s.f, n, i)),
          _(s, "fontinactive", e),
          H(this);
      }),
      (e.prototype.load = function (e) {
        (this.c = new t(this.j, e.context || this.j)),
          (this.g = !1 !== e.events),
          (this.f = !1 !== e.classes),
          (function (i, e, t) {
            var n = [],
              s = t.timeout;
            !(function (e) {
              e.g && f(e.f, [e.a.c("wf", "loading")]), _(e, "loading");
            })(e);
            var n = (function (e, t, n) {
                var i,
                  s,
                  a = [];
                for (i in t)
                  !t.hasOwnProperty(i) || ((s = e.c[i]) && a.push(s(t[i], n)));
                return a;
              })(i.a, t, i.c),
              a = new F(i.c, e, s);
            for (i.h = n.length, e = 0, t = n.length; e < t; e++)
              n[e].load(function (e, t, n) {
                var l, c, u, d, h;
                (l = a),
                  (c = e),
                  (u = t),
                  (d = n),
                  (h = 0 == --(n = i).h),
                  (n.f || n.g) &&
                    setTimeout(function () {
                      var e = d || null,
                        t = u || {};
                      if (0 === c.length && h) S(l.a);
                      else {
                        (l.f += c.length), h && (l.j = h);
                        for (var n = [], i = 0; i < c.length; i++) {
                          var s = c[i],
                            a = t[s.c],
                            o = l.a,
                            r = s;
                          o.g &&
                            f(o.f, [
                              o.a.c("wf", r.c, T(r).toString(), "loading"),
                            ]),
                            _(o, "fontloading", r),
                            (o = (q =
                              (o = null) === q
                                ? !!window.FontFace &&
                                  (!(r = /Gecko.*Firefox\/(\d+)/.exec(
                                    window.navigator.userAgent
                                  )) ||
                                    42 < parseInt(r[1], 10))
                                : q)
                              ? new D(p(l.g, l), p(l.h, l), l.c, s, l.s, a)
                              : new M(p(l.g, l), p(l.h, l), l.c, s, l.s, e, a)),
                            n.push(o);
                        }
                        for (i = 0; i < n.length; i++) n[i].start();
                      }
                    }, 0);
              });
          })(this, new E(this.c, e), e);
      }),
      (R.prototype.load = function (o) {
        var r,
          e,
          t,
          n = this,
          l = n.a.projectId,
          i = n.a.version;
        l
          ? ((r = n.c.m),
            (g(
              this.c,
              ((e = l),
              (t = i),
              d((i = n).c) +
                "//" +
                (i = (i.a.api || "fast.fonts.net/jsapi").replace(
                  /^.*http(s?):(\/\/)?/,
                  ""
                )) +
                "/" +
                e +
                ".js" +
                (t ? "?v=" + t : "")),
              function (e) {
                e
                  ? o([])
                  : ((r["__MonotypeConfiguration__" + l] = function () {
                      return n.a;
                    }),
                    (function e() {
                      if (r["__mti_fntLst" + l]) {
                        var t,
                          n = r["__mti_fntLst" + l](),
                          i = [];
                        if (n)
                          for (var s = 0; s < n.length; s++) {
                            var a = n[s].fontfamily;
                            null != n[s].fontStyle && null != n[s].fontWeight
                              ? ((t = n[s].fontStyle + n[s].fontWeight),
                                i.push(new w(a, t)))
                              : i.push(new w(a));
                          }
                        o(i);
                      } else
                        setTimeout(function () {
                          e();
                        }, 50);
                    })());
              }
            ).id = "__MonotypeAPIScript__" + l))
          : o([]);
      }),
      (B.prototype.load = function (e) {
        for (
          var t = this.a.urls || [],
            n = this.a.families || [],
            i = this.a.testStrings || {},
            s = new m(),
            a = 0,
            o = t.length;
          a < o;
          a++
        )
          h(this.c, t[a], v(s));
        var r = [];
        for (a = 0, o = n.length; a < o; a++)
          if ((t = n[a].split(":"))[1])
            for (var l = t[1].split(","), c = 0; c < l.length; c += 1)
              r.push(new w(t[0], l[c]));
          else r.push(new w(t[0]));
        y(s, function () {
          e(r, i);
        });
      });
    function X(e) {
      (this.f = e), (this.a = []), (this.c = {});
    }
    var G = {
        latin: "BESbswy",
        "latin-ext": "çöüğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ",
      },
      Y = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7",
      },
      V = { i: "i", italic: "i", n: "n", normal: "n" },
      U =
        /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Q(e, t) {
      (this.c = e), (this.a = t);
    }
    var K = { Arimo: !0, Cousine: !0, Tinos: !0 };
    function Z(e, t) {
      (this.c = e), (this.a = t);
    }
    function J(e, t) {
      (this.c = e), (this.f = t), (this.a = []);
    }
    (Q.prototype.load = function (e) {
      var t = new m(),
        n = this.c,
        i = new W(this.a.api, d(n), this.a.text),
        s = this.a.families;
      !(function (e, t) {
        for (var n = t.length, i = 0; i < n; i++) {
          var s = t[i].split(":");
          3 == s.length && e.f.push(s.pop());
          var a = "";
          2 == s.length && "" != s[1] && (a = ":"), e.a.push(s.join(a));
        }
      })(i, s);
      var a = new X(s);
      !(function (e) {
        for (var t = e.f.length, n = 0; n < t; n++) {
          var i = e.f[n].split(":"),
            s = i[0].replace(/\+/g, " "),
            a = ["n4"];
          if (2 <= i.length) {
            var o,
              r,
              l = i[1],
              c = [];
            if (l)
              for (var u = (l = l.split(",")).length, d = 0; d < u; d++)
                (r =
                  !(r = l[d]).match(/^[\w-]+$/) ||
                  null == (o = U.exec(r.toLowerCase()))
                    ? ""
                    : [
                        (r = null == (r = o[2]) || "" == r ? "n" : V[r]),
                        (o =
                          null == (o = o[1]) || "" == o
                            ? "4"
                            : Y[o] || (isNaN(o) ? "4" : o.substr(0, 1))),
                      ].join("")) && c.push(r);
            0 < c.length && (a = c),
              3 == i.length &&
                ((c = []),
                0 < (i = (i = i[2]) ? i.split(",") : c).length &&
                  (i = G[i[0]]) &&
                  (e.c[s] = i));
          }
          for (
            e.c[s] || ((i = G[s]) && (e.c[s] = i)), i = 0;
            i < a.length;
            i += 1
          )
            e.a.push(new w(s, a[i]));
        }
      })(a),
        h(
          n,
          (function (e) {
            if (0 == e.a.length) throw Error("No fonts to load!");
            if (-1 != e.c.indexOf("kit=")) return e.c;
            for (var t = e.a.length, n = [], i = 0; i < t; i++)
              n.push(e.a[i].replace(/ /g, "+"));
            return (
              (t = e.c + "?family=" + n.join("%7C")),
              0 < e.f.length && (t += "&subset=" + e.f.join(",")),
              0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
              t
            );
          })(i),
          v(t)
        ),
        y(t, function () {
          e(a.a, a.c, K);
        });
    }),
      (Z.prototype.load = function (o) {
        var e = this.a.id,
          r = this.c.m;
        e
          ? g(
              this.c,
              (this.a.api || "https://use.typekit.net/") + "/" + e + ".js",
              function (e) {
                if (e) o([]);
                else if (r.Typekit && r.Typekit.config && r.Typekit.config.fn) {
                  e = r.Typekit.config.fn;
                  for (var t = [], n = 0; n < e.length; n += 2)
                    for (var i = e[n], s = e[n + 1], a = 0; a < s.length; a++)
                      t.push(new w(i, s[a]));
                  try {
                    r.Typekit.load({
                      events: !1,
                      classes: !1,
                      async: !0,
                    });
                  } catch (e) {}
                  o(t);
                }
              },
              2e3
            )
          : o([]);
      }),
      (J.prototype.load = function (l) {
        var e = this.f.id,
          t = this.c.m,
          c = this;
        e
          ? (t.__webfontfontdeckmodule__ || (t.__webfontfontdeckmodule__ = {}),
            (t.__webfontfontdeckmodule__[e] = function (e, t) {
              for (var n, i, s, a = 0, o = t.fonts.length; a < o; ++a) {
                var r = t.fonts[a];
                c.a.push(
                  new w(
                    r.name,
                    ((n = "font-weight:" + r.weight + ";font-style:" + r.style),
                    (r = s = i = void 0),
                    (i = 4),
                    (s = "n"),
                    (r = null),
                    n &&
                      ((r = n.match(/(normal|oblique|italic)/i)) &&
                        r[1] &&
                        (s = r[1].substr(0, 1).toLowerCase()),
                      (r = n.match(/([1-9]00|normal|bold)/i)) &&
                        r[1] &&
                        (/bold/i.test(r[1])
                          ? (i = 7)
                          : /[1-9]00/.test(r[1]) &&
                            (i = parseInt(r[1].substr(0, 1), 10)))),
                    s + i)
                  )
                );
              }
              l(c.a);
            }),
            g(
              this.c,
              d(this.c) +
                (this.f.api || "http://f.fontdeck.com/s/css/js/") +
                ((t = this.c).m.location.hostname || t.a.location.hostname) +
                "/" +
                e +
                ".js",
              function (e) {
                e && l([]);
              }
            ))
          : l([]);
      });
    var ee = new e(window);
    (ee.a.c.custom = function (e, t) {
      return new B(t, e);
    }),
      (ee.a.c.fontdeck = function (e, t) {
        return new J(t, e);
      }),
      (ee.a.c.monotype = function (e, t) {
        return new R(t, e);
      }),
      (ee.a.c.typekit = function (e, t) {
        return new Z(t, e);
      }),
      (ee.a.c.google = function (e, t) {
        return new Q(t, e);
      });
    var te = { load: p(ee.load, ee) };
    "function" == typeof define && define.amd
      ? define(function () {
          return te;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = te)
      : ((window.WebFont = te),
        window.WebFontConfig && ee.load(window.WebFontConfig));
  })(),
  (function (c, o, f, g) {
    "use strict";
    function n(e, t) {
      var n,
        i,
        s = [],
        a = 0;
      (e && e.isDefaultPrevented()) ||
        (e.preventDefault(),
        (i =
          (n =
            (t = e && e.data ? e.data.options : t || {}).$target ||
            f(e.currentTarget)).attr("data-fancybox") || "")
          ? (a = (s = (s = t.selector
              ? f(t.selector)
              : e.data
              ? e.data.items
              : []).length
              ? s.filter('[data-fancybox="' + i + '"]')
              : f('[data-fancybox="' + i + '"]')).index(n)) < 0 && (a = 0)
          : (s = [n]),
        f.fancybox.open(s, t, a));
    }
    if (((c.console = c.console || { info: function (e) {} }), f)) {
      if (f.fn.fancybox) return console.info("fancyBox already initialized");
      var e = {
          loop: !1,
          gutter: 50,
          keyboard: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
            smallBtn:
              '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
            arrowLeft:
              '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
            arrowRight:
              '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>',
          },
          parentEl: "body",
          autoFocus: !1,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 4e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: f.noop,
          beforeLoad: f.noop,
          afterLoad: f.noop,
          beforeShow: f.noop,
          afterShow: f.noop,
          beforeClose: f.noop,
          afterClose: f.noop,
          onActivate: f.noop,
          onDeactivate: f.noop,
          clickContent: function (e, t) {
            return "image" === e.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            idleTime: !1,
            clickContent: function (e, t) {
              return "image" === e.type && "toggleControls";
            },
            clickSlide: function (e, t) {
              return "image" === e.type ? "toggleControls" : "close";
            },
            dblclickContent: function (e, t) {
              return "image" === e.type && "zoom";
            },
            dblclickSlide: function (e, t) {
              return "image" === e.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schliessen",
              NEXT: "Weiter",
              PREV: "Zurück",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Maßstab",
            },
          },
        },
        s = f(c),
        a = f(o),
        r = 0,
        u =
          c.requestAnimationFrame ||
          c.webkitRequestAnimationFrame ||
          c.mozRequestAnimationFrame ||
          c.oRequestAnimationFrame ||
          function (e) {
            return c.setTimeout(e, 1e3 / 60);
          },
        d = (function () {
          var e,
            t = o.createElement("fakeelement"),
            n = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in n) if (t.style[e] !== g) return n[e];
          return "transitionend";
        })(),
        h = function (e) {
          return e && e.length && e[0].offsetHeight;
        },
        l = function (e, t) {
          var n = f.extend(!0, {}, e, t);
          return (
            f.each(t, function (e, t) {
              f.isArray(t) && (n[e] = t);
            }),
            n
          );
        },
        i = function (e, t, n) {
          var i = this;
          (i.opts = l({ index: n }, f.fancybox.defaults)),
            f.isPlainObject(t) && (i.opts = l(i.opts, t)),
            f.fancybox.isMobile && (i.opts = l(i.opts, i.opts.mobile)),
            (i.id = i.opts.id || ++r),
            (i.currIndex = parseInt(i.opts.index, 10) || 0),
            (i.prevIndex = null),
            (i.prevPos = null),
            (i.currPos = 0),
            (i.firstRun = !0),
            (i.group = []),
            (i.slides = {}),
            i.addContent(e),
            i.group.length &&
              ((i.$lastFocus = f(o.activeElement).trigger("blur")), i.init());
        };
      f.extend(i.prototype, {
        init: function () {
          var e,
            t,
            n,
            i = this,
            s = i.group[i.currIndex].opts,
            a = f.fancybox.scrollbarWidth;
          f.fancybox.getInstance() ||
            !1 === s.hideScrollbar ||
            (f("body").addClass("fancybox-active"),
            !f.fancybox.isMobile &&
              o.body.scrollHeight > c.innerHeight &&
              (a === g &&
                ((e = f(
                  '<div style="width:100px;height:100px;overflow:scroll;" />'
                ).appendTo("body")),
                (a = f.fancybox.scrollbarWidth =
                  e[0].offsetWidth - e[0].clientWidth),
                e.remove()),
              f("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                  a +
                  "px; }</style>"
              ),
              f("body").addClass("compensate-for-scrollbar"))),
            (n = ""),
            f.each(s.buttons, function (e, t) {
              n += s.btnTpl[t] || "";
            }),
            (t = f(
              i.translate(
                i,
                s.baseTpl
                  .replace("{{buttons}}", n)
                  .replace(
                    "{{arrows}}",
                    s.btnTpl.arrowLeft + s.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + i.id)
              .addClass("fancybox-is-hidden")
              .addClass(s.baseClass)
              .data("FancyBox", i)
              .appendTo(s.parentEl)),
            (i.$refs = { container: t }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (e) {
              i.$refs[e] = t.find(".fancybox-" + e);
            }),
            i.trigger("onInit"),
            i.activate(),
            i.jumpTo(i.currIndex);
        },
        translate: function (e, t) {
          var n = e.opts.i18n[e.opts.lang];
          return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
            t = n[t];
            return t === g ? e : t;
          });
        },
        addContent: function (e) {
          var o = this,
            e = f.makeArray(e);
          f.each(e, function (e, t) {
            var n,
              i,
              s = {},
              a = {};
            f.isPlainObject(t)
              ? (a = (s = t).opts || t)
              : "object" === f.type(t) && f(t).length
              ? ((a = (i = f(t)).data() || {}),
                ((a = f.extend(!0, {}, a, a.options)).$orig = i),
                (s.src = o.opts.src || a.src || i.attr("href")),
                s.type || s.src || ((s.type = "inline"), (s.src = t)))
              : (s = { type: "html", src: t + "" }),
              (s.opts = f.extend(!0, {}, o.opts, a)),
              f.isArray(a.buttons) && (s.opts.buttons = a.buttons),
              (n = s.type || s.opts.type),
              (i = s.src || ""),
              !n &&
                i &&
                ((a = i.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                  ? ((n = "video"),
                    s.opts.videoFormat ||
                      (s.opts.videoFormat =
                        "video/" + ("ogv" === a[1] ? "ogg" : a[1])))
                  : i.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (n = "image")
                  : i.match(/\.(pdf)((\?|#).*)?$/i)
                  ? (n = "iframe")
                  : "#" === i.charAt(0) && (n = "inline")),
              n ? (s.type = n) : o.trigger("objectNeedsType", s),
              s.contentType ||
                (s.contentType =
                  -1 < f.inArray(s.type, ["html", "inline", "ajax"])
                    ? "html"
                    : s.type),
              (s.index = o.group.length),
              "auto" == s.opts.smallBtn &&
                (s.opts.smallBtn =
                  -1 < f.inArray(s.type, ["html", "inline", "ajax"])),
              "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn),
              s.opts.$trigger &&
                s.index === o.opts.index &&
                (s.opts.$thumb = s.opts.$trigger.find("img:first")),
              (s.opts.$thumb && s.opts.$thumb.length) ||
                !s.opts.$orig ||
                (s.opts.$thumb = s.opts.$orig.find("img:first")),
              "function" === f.type(s.opts.caption) &&
                (s.opts.caption = s.opts.caption.apply(t, [o, s])),
              "function" === f.type(o.opts.caption) &&
                (s.opts.caption = o.opts.caption.apply(t, [o, s])),
              s.opts.caption instanceof f ||
                (s.opts.caption =
                  s.opts.caption === g ? "" : s.opts.caption + ""),
              "ajax" !== s.type ||
                (1 < (i = i.split(/\s+/, 2)).length &&
                  ((s.src = i.shift()), (s.opts.filter = i.shift()))),
              s.opts.modal &&
                (s.opts = f.extend(!0, s.opts, {
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              o.group.push(s);
          }),
            Object.keys(o.slides).length &&
              (o.updateControls(),
              (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
        },
        addEvents: function () {
          var i = this;
          i.removeEvents(),
            i.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (e) {
                e.stopPropagation(), e.preventDefault(), i.close(e);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), i.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), i.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (e) {
                i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            s.on("orientationchange.fb resize.fb", function (e) {
              e && e.originalEvent && "resize" === e.originalEvent.type
                ? u(function () {
                    i.update();
                  })
                : (i.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      i.$refs.stage.show(), i.update();
                    },
                    f.fancybox.isMobile ? 600 : 250
                  ));
            }),
            a.on("focusin.fb", function (e) {
              var t = f.fancybox ? f.fancybox.getInstance() : null;
              t.isClosing ||
                !t.current ||
                !t.current.opts.trapFocus ||
                f(e.target).hasClass("fancybox-container") ||
                f(e.target).is(o) ||
                (t &&
                  "fixed" !== f(e.target).css("position") &&
                  !t.$refs.container.has(e.target).length &&
                  (e.stopPropagation(), t.focus()));
            }),
            a.on("keydown.fb", function (e) {
              var t = i.current,
                n = e.keyCode || e.which;
              if (
                t &&
                t.opts.keyboard &&
                !(
                  e.ctrlKey ||
                  e.altKey ||
                  e.shiftKey ||
                  f(e.target).is("input") ||
                  f(e.target).is("textarea")
                )
              )
                return 8 === n || 27 === n
                  ? (e.preventDefault(), void i.close(e))
                  : 37 === n || 38 === n
                  ? (e.preventDefault(), void i.previous())
                  : 39 === n || 40 === n
                  ? (e.preventDefault(), void i.next())
                  : void i.trigger("afterKeydown", e, n);
            }),
            i.group[i.currIndex].opts.idleTime &&
              ((i.idleSecondsCounter = 0),
              a.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (e) {
                  (i.idleSecondsCounter = 0),
                    i.isIdle && i.showControls(),
                    (i.isIdle = !1);
                }
              ),
              (i.idleInterval = c.setInterval(function () {
                i.idleSecondsCounter++,
                  i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime &&
                    !i.isDragging &&
                    ((i.isIdle = !0),
                    (i.idleSecondsCounter = 0),
                    i.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          s.off("orientationchange.fb resize.fb"),
            a.off("focusin.fb keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            this.idleInterval &&
              (c.clearInterval(this.idleInterval), (this.idleInterval = null));
        },
        previous: function (e) {
          return this.jumpTo(this.currPos - 1, e);
        },
        next: function (e) {
          return this.jumpTo(this.currPos + 1, e);
        },
        jumpTo: function (e, i) {
          var t,
            n,
            s,
            a,
            o,
            r,
            l = this,
            c = l.group.length;
          if (!(l.isDragging || l.isClosing || (l.isAnimating && l.firstRun))) {
            if (
              ((e = parseInt(e, 10)),
              !(n = (l.current || l).opts.loop) && (e < 0 || c <= e))
            )
              return !1;
            if (
              ((t = l.firstRun = !Object.keys(l.slides).length),
              !(c < 2 && !t && l.isDragging))
            ) {
              if (
                ((a = l.current),
                (l.prevIndex = l.currIndex),
                (l.prevPos = l.currPos),
                (s = l.createSlide(e)),
                1 < c &&
                  ((n || 0 < s.index) && l.createSlide(e - 1),
                  (n || s.index < c - 1) && l.createSlide(e + 1)),
                (l.current = s),
                (l.currIndex = s.index),
                (l.currPos = s.pos),
                l.trigger("beforeShow", t),
                l.updateControls(),
                (e = f.fancybox.getTranslate(s.$slide)),
                (s.isMoved =
                  (0 !== e.left || 0 !== e.top) &&
                  !s.$slide.hasClass("fancybox-animated")),
                (s.forcedDuration = g),
                f.isNumeric(i)
                  ? (s.forcedDuration = i)
                  : (i =
                      s.opts[t ? "animationDuration" : "transitionDuration"]),
                (i = parseInt(i, 10)),
                t)
              )
                return (
                  s.opts.animationEffect &&
                    i &&
                    l.$refs.container.css("transition-duration", i + "ms"),
                  l.$refs.container.removeClass("fancybox-is-hidden"),
                  h(l.$refs.container),
                  l.$refs.container.addClass("fancybox-is-open"),
                  h(l.$refs.container),
                  s.$slide.addClass("fancybox-slide--previous"),
                  l.loadSlide(s),
                  s.$slide
                    .removeClass("fancybox-slide--previous")
                    .addClass("fancybox-slide--current"),
                  void l.preload("image")
                );
              f.each(l.slides, function (e, t) {
                f.fancybox.stop(t.$slide);
              }),
                s.$slide
                  .removeClass("fancybox-slide--next fancybox-slide--previous")
                  .addClass("fancybox-slide--current"),
                s.isMoved
                  ? ((o = Math.round(s.$slide.width())),
                    f.each(l.slides, function (e, t) {
                      var n = t.pos - s.pos;
                      f.fancybox.animate(
                        t.$slide,
                        { top: 0, left: n * o + n * t.opts.gutter },
                        i,
                        function () {
                          t.$slide
                            .removeAttr("style")
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            t.pos === l.currPos &&
                              ((s.isMoved = !1), l.complete());
                        }
                      );
                    }))
                  : l.$refs.stage.children().removeAttr("style"),
                s.isLoaded ? l.revealContent(s) : l.loadSlide(s),
                l.preload("image"),
                a.pos !== s.pos &&
                  ((r =
                    "fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")),
                  a.$slide.removeClass(
                    "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                  ),
                  (a.isComplete = !1),
                  i &&
                    (s.isMoved || s.opts.transitionEffect) &&
                    (s.isMoved
                      ? a.$slide.addClass(r)
                      : ((r =
                          "fancybox-animated " +
                          r +
                          " fancybox-fx-" +
                          s.opts.transitionEffect),
                        f.fancybox.animate(a.$slide, r, i, function () {
                          a.$slide.removeClass(r).removeAttr("style");
                        }))));
            }
          }
        },
        createSlide: function (e) {
          var t,
            n = this,
            i = e % n.group.length;
          return (
            (i = i < 0 ? n.group.length + i : i),
            !n.slides[e] &&
              n.group[i] &&
              ((t = f('<div class="fancybox-slide"></div>').appendTo(
                n.$refs.stage
              )),
              (n.slides[e] = f.extend(!0, {}, n.group[i], {
                pos: e,
                $slide: t,
                isLoaded: !1,
              })),
              n.updateSlide(n.slides[e])),
            n.slides[e]
          );
        },
        scaleToActual: function (e, t, n) {
          var i,
            s,
            a,
            o,
            r = this,
            l = r.current,
            c = l.$content,
            u = f.fancybox.getTranslate(l.$slide).width,
            d = f.fancybox.getTranslate(l.$slide).height,
            h = l.width,
            p = l.height;
          !r.isAnimating &&
            c &&
            "image" == l.type &&
            l.isLoaded &&
            !l.hasError &&
            (f.fancybox.stop(c),
            (r.isAnimating = !0),
            (e = e === g ? 0.5 * u : e),
            (t = t === g ? 0.5 * d : t),
            ((i = f.fancybox.getTranslate(c)).top -= f.fancybox.getTranslate(
              l.$slide
            ).top),
            (i.left -= f.fancybox.getTranslate(l.$slide).left),
            (a = h / i.width),
            (o = p / i.height),
            (s = 0.5 * u - 0.5 * h),
            (l = 0.5 * d - 0.5 * p),
            u < h &&
              (s = 0 < (s = i.left * a - (e * a - e)) ? 0 : s) < u - h &&
              (s = u - h),
            d < p &&
              (l = 0 < (l = i.top * o - (t * o - t)) ? 0 : l) < d - p &&
              (l = d - p),
            r.updateCursor(h, p),
            f.fancybox.animate(
              c,
              { top: l, left: s, scaleX: a, scaleY: o },
              n || 330,
              function () {
                r.isAnimating = !1;
              }
            ),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop());
        },
        scaleToFit: function (e) {
          var t = this,
            n = t.current,
            i = n.$content;
          !t.isAnimating &&
            i &&
            "image" == n.type &&
            n.isLoaded &&
            !n.hasError &&
            (f.fancybox.stop(i),
            (t.isAnimating = !0),
            (n = t.getFitPos(n)),
            t.updateCursor(n.width, n.height),
            f.fancybox.animate(
              i,
              {
                top: n.top,
                left: n.left,
                scaleX: n.width / i.width(),
                scaleY: n.height / i.height(),
              },
              e || 330,
              function () {
                t.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (e) {
          var t,
            n,
            i,
            s = e.$content,
            a = e.width || e.opts.width,
            o = e.height || e.opts.height,
            r = {};
          return (
            !!(e.isLoaded && s && s.length) &&
            ((i = {
              top: parseInt(e.$slide.css("paddingTop"), 10),
              right: parseInt(e.$slide.css("paddingRight"), 10),
              bottom: parseInt(e.$slide.css("paddingBottom"), 10),
              left: parseInt(e.$slide.css("paddingLeft"), 10),
            }),
            (t = parseInt(this.$refs.stage.width(), 10) - (i.left + i.right)),
            (n = parseInt(this.$refs.stage.height(), 10) - (i.top + i.bottom)),
            (a && o) || ((a = t), (o = n)),
            (s = Math.min(1, t / a, n / o)),
            (a = Math.floor(s * a)),
            (o = Math.floor(s * o)),
            "image" === e.type
              ? ((r.top = Math.floor(0.5 * (n - o)) + i.top),
                (r.left = Math.floor(0.5 * (t - a)) + i.left))
              : "video" === e.contentType &&
                (a /
                  (e =
                    e.opts.width && e.opts.height
                      ? a / o
                      : e.opts.ratio || 16 / 9) <
                o
                  ? (o = a / e)
                  : o * e < a && (a = o * e)),
            (r.width = a),
            (r.height = o),
            r)
          );
        },
        update: function () {
          var n = this;
          f.each(n.slides, function (e, t) {
            n.updateSlide(t);
          });
        },
        updateSlide: function (e, t) {
          var n = this,
            i = e && e.$content,
            s = e.width || e.opts.width,
            a = e.height || e.opts.height;
          i &&
            (s || a || "video" === e.contentType) &&
            !e.hasError &&
            (f.fancybox.stop(i),
            f.fancybox.setTranslate(i, n.getFitPos(e)),
            e.pos === n.currPos && ((n.isAnimating = !1), n.updateCursor())),
            e.$slide.trigger("refresh"),
            n.$refs.toolbar.toggleClass(
              "compensate-for-scrollbar",
              e.$slide.get(0).scrollHeight > e.$slide.get(0).clientHeight
            ),
            n.trigger("onUpdate", e);
        },
        centerSlide: function (e, t) {
          var n, i;
          this.current &&
            ((n = Math.round(e.$slide.width())),
            (i = e.pos - this.current.pos),
            f.fancybox.animate(
              e.$slide,
              { top: 0, left: i * n + i * e.opts.gutter, opacity: 1 },
              t === g ? 0 : t,
              null,
              !1
            ));
        },
        updateCursor: function (e, t) {
          var n,
            i = this,
            s = i.current,
            a = i.$refs.container.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
            );
          s &&
            !i.isClosing &&
            ((n = i.isZoomable()),
            a.toggleClass("fancybox-is-zoomable", n),
            f("[data-fancybox-zoom]").prop("disabled", !n),
            n &&
            ("zoom" === s.opts.clickContent ||
              (f.isFunction(s.opts.clickContent) &&
                "zoom" === s.opts.clickContent(s)))
              ? i.isScaledDown(e, t)
                ? a.addClass("fancybox-can-zoomIn")
                : s.opts.touch
                ? a.addClass("fancybox-can-drag")
                : a.addClass("fancybox-can-zoomOut")
              : s.opts.touch &&
                "video" !== s.contentType &&
                a.addClass("fancybox-can-drag"));
        },
        isZoomable: function () {
          var e,
            t = this.current;
          if (t && !this.isClosing && "image" === t.type && !t.hasError) {
            if (!t.isLoaded) return !0;
            if (
              ((e = this.getFitPos(t)),
              t.width > e.width || t.height > e.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (e, t) {
          var n = !1,
            i = this.current,
            s = i.$content;
          return (
            e !== g && t !== g
              ? (n = e < i.width && t < i.height)
              : s &&
                (n =
                  (n = f.fancybox.getTranslate(s)).width < i.width &&
                  n.height < i.height),
            n
          );
        },
        canPan: function () {
          var e,
            t = !1,
            n = this.current;
          return (
            "image" === n.type &&
              (e = n.$content) &&
              !n.hasError &&
              ((t = this.getFitPos(n)),
              (t =
                1 < Math.abs(e.width() - t.width) ||
                1 < Math.abs(e.height() - t.height))),
            t
          );
        },
        loadSlide: function (n) {
          var e,
            t,
            i,
            s = this;
          if (!n.isLoading && !n.isLoaded) {
            switch (
              ((n.isLoading = !0),
              s.trigger("beforeLoad", n),
              (e = n.type),
              (t = n.$slide)
                .off("refresh")
                .trigger("onReset")
                .addClass(n.opts.slideClass),
              e)
            ) {
              case "image":
                s.setImage(n);
                break;
              case "iframe":
                s.setIframe(n);
                break;
              case "html":
                s.setContent(n, n.src || n.content);
                break;
              case "video":
                s.setContent(
                  n,
                  '<video class="fancybox-video" controls controlsList="nodownload"><source src="' +
                    n.src +
                    '" type="' +
                    n.opts.videoFormat +
                    "\">Your browser doesn't support HTML5 video</video"
                );
                break;
              case "inline":
                f(n.src).length ? s.setContent(n, f(n.src)) : s.setError(n);
                break;
              case "ajax":
                s.showLoading(n),
                  (i = f.ajax(
                    f.extend({}, n.opts.ajax.settings, {
                      url: n.src,
                      success: function (e, t) {
                        "success" === t && s.setContent(n, e);
                      },
                      error: function (e, t) {
                        e && "abort" !== t && s.setError(n);
                      },
                    })
                  )),
                  t.one("onReset", function () {
                    i.abort();
                  });
                break;
              default:
                s.setError(n);
            }
            return !0;
          }
        },
        setImage: function (t) {
          var e,
            n,
            i,
            s,
            a = this,
            o = t.opts.srcset || t.opts.image.srcset;
          if (
            ((t.timouts = setTimeout(function () {
              var e = t.$image;
              !t.isLoading ||
                (e && e[0].complete) ||
                t.hasError ||
                a.showLoading(t);
            }, 350)),
            o)
          ) {
            (i = c.devicePixelRatio || 1),
              (s = c.innerWidth * i),
              (n = o.split(",").map(function (e) {
                var i = {};
                return (
                  e
                    .trim()
                    .split(/\s+/)
                    .forEach(function (e, t) {
                      var n = parseInt(e.substring(0, e.length - 1), 10);
                      return 0 === t
                        ? (i.url = e)
                        : void (
                            n && ((i.value = n), (i.postfix = e[e.length - 1]))
                          );
                    }),
                  i
                );
              })).sort(function (e, t) {
                return e.value - t.value;
              });
            for (var r = 0; r < n.length; r++) {
              var l = n[r];
              if (
                ("w" === l.postfix && l.value >= s) ||
                ("x" === l.postfix && l.value >= i)
              ) {
                e = l;
                break;
              }
            }
            (e = !e && n.length ? n[n.length - 1] : e) &&
              ((t.src = e.url),
              t.width &&
                t.height &&
                "w" == e.postfix &&
                ((t.height = (t.width / t.height) * e.value),
                (t.width = e.value)),
              (t.opts.srcset = o));
          }
          (t.$content = f('<div class="fancybox-content"></div>')
            .addClass("fancybox-is-hidden")
            .appendTo(t.$slide.addClass("fancybox-slide--image"))),
            (o =
              t.opts.thumb ||
              (!(!t.opts.$thumb || !t.opts.$thumb.length) &&
                t.opts.$thumb.attr("src"))),
            !1 !== t.opts.preload &&
              t.opts.width &&
              t.opts.height &&
              o &&
              ((t.width = t.opts.width),
              (t.height = t.opts.height),
              (t.$ghost = f("<img />")
                .one("error", function () {
                  f(this).remove(), (t.$ghost = null);
                })
                .one("load", function () {
                  a.afterLoad(t);
                })
                .addClass("fancybox-image")
                .appendTo(t.$content)
                .attr("src", o))),
            a.setBigImage(t);
        },
        setBigImage: function (t) {
          var n = this,
            i = f("<img />");
          (t.$image = i
            .one("error", function () {
              n.setError(t);
            })
            .one("load", function () {
              var e;
              t.$ghost ||
                (n.resolveImageSlideSize(
                  t,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                n.afterLoad(t)),
                t.timouts && (clearTimeout(t.timouts), (t.timouts = null)),
                n.isClosing ||
                  (t.opts.srcset &&
                    (((e = t.opts.sizes) && "auto" !== e) ||
                      (e =
                        (1 < t.width / t.height && 1 < s.width() / s.height()
                          ? "100"
                          : Math.round((t.width / t.height) * 100)) + "vw"),
                    i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                  t.$ghost &&
                    setTimeout(function () {
                      t.$ghost && !n.isClosing && t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                  n.hideLoading(t));
            })
            .addClass("fancybox-image")
            .attr("src", t.src)
            .appendTo(t.$content)),
            (i[0].complete || "complete" == i[0].readyState) &&
            i[0].naturalWidth &&
            i[0].naturalHeight
              ? i.trigger("load")
              : i[0].error && i.trigger("error");
        },
        resolveImageSlideSize: function (e, t, n) {
          var i = parseInt(e.opts.width, 10),
            s = parseInt(e.opts.height, 10);
          (e.width = t),
            (e.height = n),
            0 < i && ((e.width = i), (e.height = Math.floor((i * n) / t))),
            0 < s && ((e.width = Math.floor((s * t) / n)), (e.height = s));
        },
        setIframe: function (s) {
          var a,
            t = this,
            o = s.opts.iframe,
            e = s.$slide;
          (s.$content = f(
            '<div class="fancybox-content' +
              (o.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(o.css)
            .appendTo(e)),
            e.addClass("fancybox-slide--" + s.contentType),
            (s.$iframe = a =
              f(o.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(o.attr)
                .appendTo(s.$content)),
            o.preload
              ? (t.showLoading(s),
                a.on("load.fb error.fb", function (e) {
                  (this.isReady = 1),
                    s.$slide.trigger("refresh"),
                    t.afterLoad(s);
                }),
                e.on("refresh.fb", function () {
                  var e,
                    t = s.$content,
                    n = o.css.width,
                    i = o.css.height;
                  if (1 === a[0].isReady) {
                    try {
                      e = a.contents().find("body");
                    } catch (e) {}
                    e &&
                      e.length &&
                      e.children().length &&
                      (t.css({ width: "", height: "" }),
                      (n =
                        n === g
                          ? Math.ceil(
                              Math.max(e[0].clientWidth, e.outerWidth(!0))
                            )
                          : n) && t.width(n),
                      (i =
                        i === g
                          ? Math.ceil(
                              Math.max(e[0].clientHeight, e.outerHeight(!0))
                            )
                          : i) && t.height(i)),
                      t.removeClass("fancybox-is-hidden");
                  }
                }))
              : this.afterLoad(s),
            a.attr("src", s.src),
            e.one("onReset", function () {
              try {
                f(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (e) {}
              f(this).off("refresh.fb").empty(), (s.isLoaded = !1);
            });
        },
        setContent: function (e, t) {
          var n;
          this.isClosing ||
            (this.hideLoading(e),
            e.$content && f.fancybox.stop(e.$content),
            e.$slide.empty(),
            (n = t) && n.hasOwnProperty && n instanceof f && t.parent().length
              ? (t
                  .parent()
                  .parent(".fancybox-slide--inline")
                  .trigger("onReset"),
                (e.$placeholder = f("<div>").hide().insertAfter(t)),
                t.css("display", "inline-block"))
              : e.hasError ||
                ("string" !== f.type(t) ||
                  (3 ===
                    (t = f("<div>").append(f.trim(t)).contents())[0].nodeType &&
                    (t = f("<div>").html(t))),
                e.opts.filter && (t = f("<div>").html(t).find(e.opts.filter))),
            e.$slide.one("onReset", function () {
              f(this).find("video,audio").trigger("pause"),
                e.$placeholder &&
                  (e.$placeholder.after(t.hide()).remove(),
                  (e.$placeholder = null)),
                e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                e.hasError || (f(this).empty(), (e.isLoaded = !1));
            }),
            f(t).appendTo(e.$slide),
            f(t).is("video,audio") &&
              (f(t).addClass("fancybox-video"),
              f(t).wrap("<div></div>"),
              (e.contentType = "video"),
              (e.opts.width = e.opts.width || f(t).attr("width")),
              (e.opts.height = e.opts.height || f(t).attr("height"))),
            (e.$content = e.$slide
              .children()
              .filter("div,form,main,video,audio")
              .first()
              .addClass("fancybox-content")),
            e.$slide.addClass("fancybox-slide--" + e.contentType),
            this.afterLoad(e));
        },
        setError: function (e) {
          (e.hasError = !0),
            e.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + e.contentType)
              .addClass("fancybox-slide--error"),
            (e.contentType = "html"),
            this.setContent(e, this.translate(e, e.opts.errorTpl)),
            e.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (e) {
          (e = e || this.current) &&
            !e.$spinner &&
            (e.$spinner = f(
              this.translate(this, this.opts.spinnerTpl)
            ).appendTo(e.$slide));
        },
        hideLoading: function (e) {
          (e = e || this.current) &&
            e.$spinner &&
            (e.$spinner.remove(), delete e.$spinner);
        },
        afterLoad: function (e) {
          var t = this;
          t.isClosing ||
            ((e.isLoading = !1),
            (e.isLoaded = !0),
            t.trigger("afterLoad", e),
            t.hideLoading(e),
            e.pos === t.currPos && t.updateCursor(),
            !e.opts.smallBtn ||
              (e.$smallBtn && e.$smallBtn.length) ||
              (e.$smallBtn = f(
                t.translate(e, e.opts.btnTpl.smallBtn)
              ).prependTo(e.$content)),
            e.opts.protect &&
              e.$content &&
              !e.hasError &&
              (e.$content.on("contextmenu.fb", function (e) {
                return 2 == e.button && e.preventDefault(), !0;
              }),
              "image" === e.type &&
                f('<div class="fancybox-spaceball"></div>').appendTo(
                  e.$content
                )),
            t.revealContent(e));
        },
        revealContent: function (t) {
          var n,
            e,
            i = this,
            s = t.$slide,
            a = !1,
            o = !1,
            r = t.opts[i.firstRun ? "animationEffect" : "transitionEffect"],
            l = t.opts[i.firstRun ? "animationDuration" : "transitionDuration"];
          return (
            (l = parseInt(t.forcedDuration === g ? l : t.forcedDuration, 10)),
            t.pos === i.currPos &&
              (t.isComplete ? (r = !1) : (i.isAnimating = !0)),
            "zoom" === (r = t.isMoved || t.pos !== i.currPos || !l ? !1 : r) &&
              (t.pos === i.currPos &&
              l &&
              "image" === t.type &&
              !t.hasError &&
              (o = i.getThumbPos(t))
                ? (a = i.getFitPos(t))
                : (r = "fade")),
            "zoom" === r
              ? ((a.scaleX = a.width / o.width),
                (a.scaleY = a.height / o.height),
                (e =
                  "auto" == (e = t.opts.zoomOpacity)
                    ? 0.1 < Math.abs(t.width / t.height - o.width / o.height)
                    : e) && ((o.opacity = 0.1), (a.opacity = 1)),
                f.fancybox.setTranslate(
                  t.$content.removeClass("fancybox-is-hidden"),
                  o
                ),
                h(t.$content),
                void f.fancybox.animate(t.$content, a, l, function () {
                  (i.isAnimating = !1), i.complete();
                }))
              : (i.updateSlide(t),
                r
                  ? (f.fancybox.stop(s),
                    (n =
                      "fancybox-animated fancybox-slide--" +
                      (t.pos >= i.prevPos ? "next" : "previous") +
                      " fancybox-fx-" +
                      r),
                    s
                      .removeAttr("style")
                      .removeClass(
                        "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                      )
                      .addClass(n),
                    t.$content.removeClass("fancybox-is-hidden"),
                    h(s),
                    void f.fancybox.animate(
                      s,
                      "fancybox-slide--current",
                      l,
                      function (e) {
                        s.removeClass(n).removeAttr("style"),
                          t.pos === i.currPos && i.complete();
                      },
                      !0
                    ))
                  : (h(s),
                    t.$content.removeClass("fancybox-is-hidden"),
                    void (t.pos === i.currPos && i.complete())))
          );
        },
        getThumbPos: function (e) {
          var t = !1,
            n = e.opts.$thumb,
            i = n && n.length && n[0].ownerDocument === o ? n.offset() : 0;
          return (
            i &&
              (function (e) {
                for (
                  var t = e[0], n = t.getBoundingClientRect(), i = [];
                  null !== t.parentElement;

                )
                  ("hidden" !== f(t.parentElement).css("overflow") &&
                    "auto" !== f(t.parentElement).css("overflow")) ||
                    i.push(t.parentElement.getBoundingClientRect()),
                    (t = t.parentElement);
                return (
                  i.every(function (e) {
                    var t =
                        Math.min(n.right, e.right) - Math.max(n.left, e.left),
                      e = Math.min(n.bottom, e.bottom) - Math.max(n.top, e.top);
                    return 0 < t && 0 < e;
                  }) &&
                  0 < n.bottom &&
                  0 < n.right &&
                  n.left < f(c).width() &&
                  n.top < f(c).height()
                );
              })(n) &&
              ((e = this.$refs.stage.offset()),
              (t = {
                top: i.top - e.top + parseFloat(n.css("border-top-width") || 0),
                left:
                  i.left - e.left + parseFloat(n.css("border-left-width") || 0),
                width: n.width(),
                height: n.height(),
                scaleX: 1,
                scaleY: 1,
              })),
            t
          );
        },
        complete: function () {
          var n = this,
            e = n.current,
            i = {};
          !e.isMoved &&
            e.isLoaded &&
            (e.isComplete ||
              ((e.isComplete = !0),
              e.$slide.siblings().trigger("onReset"),
              n.preload("inline"),
              h(e.$slide),
              e.$slide.addClass("fancybox-slide--complete"),
              f.each(n.slides, function (e, t) {
                t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1
                  ? (i[t.pos] = t)
                  : t && (f.fancybox.stop(t.$slide), t.$slide.off().remove());
              }),
              (n.slides = i)),
            (n.isAnimating = !1),
            n.updateCursor(),
            n.trigger("afterShow"),
            e.$slide
              .find("video,audio")
              .filter(":visible:first")
              .trigger("play"),
            (f(o.activeElement).is("[disabled]") ||
              (e.opts.autoFocus && "image" != e.type && "iframe" !== e.type)) &&
              n.focus());
        },
        preload: function (e) {
          var t = this,
            n = t.slides[t.currPos + 1],
            i = t.slides[t.currPos - 1];
          n && n.type === e && t.loadSlide(n),
            i && i.type === e && t.loadSlide(i);
        },
        focus: function () {
          var e,
            t = this.current;
          this.isClosing ||
            (t &&
              t.isComplete &&
              t.$content &&
              (e =
                (e = !(e = t.$content.find(
                  "input[autofocus]:enabled:visible:first"
                )).length
                  ? t.$content
                      .find("button,:input,[tabindex],a")
                      .filter(":enabled:visible:first")
                  : e) && e.length
                  ? e
                  : t.$content).trigger("focus"));
        },
        activate: function () {
          var t = this;
          f(".fancybox-container").each(function () {
            var e = f(this).data("FancyBox");
            e &&
              e.id !== t.id &&
              !e.isClosing &&
              (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
          }),
            (t.isVisible = !0),
            (t.current || t.isIdle) && (t.update(), t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents();
        },
        close: function (e, t) {
          function n() {
            l.cleanUp(e);
          }
          var i,
            s,
            a,
            o,
            r,
            l = this,
            c = l.current;
          return (
            !l.isClosing &&
            (!(l.isClosing = !0) === l.trigger("beforeClose", e)
              ? ((l.isClosing = !1),
                u(function () {
                  l.update();
                }),
                !1)
              : (l.removeEvents(),
                c.timouts && clearTimeout(c.timouts),
                (a = c.$content),
                (i = c.opts.animationEffect),
                (s = f.isNumeric(t) ? t : i ? c.opts.animationDuration : 0),
                c.$slide
                  .off(d)
                  .removeClass(
                    "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                  ),
                c.$slide.siblings().trigger("onReset").remove(),
                s &&
                  l.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing"),
                l.hideLoading(c),
                l.hideControls(),
                l.updateCursor(),
                "zoom" ===
                (i = !(
                  "zoom" !== i ||
                  (!0 !== e &&
                    a &&
                    s &&
                    "image" === c.type &&
                    !c.hasError &&
                    (r = l.getThumbPos(c)))
                )
                  ? "fade"
                  : i)
                  ? (f.fancybox.stop(a),
                    (t = {
                      top: (o = f.fancybox.getTranslate(a)).top,
                      left: o.left,
                      scaleX: o.width / r.width,
                      scaleY: o.height / r.height,
                      width: r.width,
                      height: r.height,
                    }),
                    (o =
                      "auto" == (o = c.opts.zoomOpacity)
                        ? 0.1 <
                          Math.abs(c.width / c.height - r.width / r.height)
                        : o) && (r.opacity = 0),
                    f.fancybox.setTranslate(a, t),
                    h(a),
                    f.fancybox.animate(a, r, s, n))
                  : i && s
                  ? !0 === e
                    ? setTimeout(n, s)
                    : f.fancybox.animate(
                        c.$slide.removeClass("fancybox-slide--current"),
                        "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                          i,
                        s,
                        n
                      )
                  : n(),
                !0))
          );
        },
        cleanUp: function (e) {
          var t = this,
            n = f("body");
          t.current.$slide.trigger("onReset"),
            t.$refs.container.empty().remove(),
            t.trigger("afterClose", e),
            t.$lastFocus &&
              t.current.opts.backFocus &&
              t.$lastFocus.trigger("focus"),
            (t.current = null),
            (t = f.fancybox.getInstance())
              ? t.activate()
              : (n.removeClass("fancybox-active compensate-for-scrollbar"),
                f("#fancybox-style-noscroll").remove());
        },
        trigger: function (e, t) {
          var n,
            i = Array.prototype.slice.call(arguments, 1),
            s = this,
            t = t && t.opts ? t : s.current;
          return (
            t ? i.unshift(t) : (t = s),
            i.unshift(s),
            !1 === (n = f.isFunction(t.opts[e]) ? t.opts[e].apply(t, i) : n)
              ? n
              : void (
                  "afterClose" !== e && s.$refs ? s.$refs.container : a
                ).trigger(e + ".fb", i)
          );
        },
        updateControls: function (e) {
          var t = this,
            n = t.current,
            i = n.index,
            s = n.opts.caption,
            a = t.$refs.container,
            o = t.$refs.caption;
          n.$slide.trigger("refresh"),
            (t.$caption = s && s.length ? o.html(s) : null),
            t.isHiddenControls || t.isIdle || t.showControls(),
            a.find("[data-fancybox-count]").html(t.group.length),
            a.find("[data-fancybox-index]").html(i + 1),
            a
              .find("[data-fancybox-prev]")
              .toggleClass("disabled", !n.opts.loop && i <= 0),
            a
              .find("[data-fancybox-next]")
              .toggleClass("disabled", !n.opts.loop && i >= t.group.length - 1),
            "image" === n.type
              ? a
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", n.opts.image.src || n.src)
                  .show()
              : n.opts.toolbar &&
                a.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
        },
        hideControls: function () {
          (this.isHiddenControls = !0),
            this.$refs.container.removeClass(
              "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
            );
        },
        showControls: function () {
          var e = this,
            t = (e.current || e).opts,
            n = e.$refs.container;
          (e.isHiddenControls = !1),
            (e.idleSecondsCounter = 0),
            n
              .toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(t.infobar && 1 < e.group.length)
              )
              .toggleClass(
                "fancybox-show-nav",
                !!(t.arrows && 1 < e.group.length)
              )
              .toggleClass("fancybox-is-modal", !!t.modal),
            e.$caption
              ? n.addClass("fancybox-show-caption ")
              : n.removeClass("fancybox-show-caption");
        },
        toggleControls: function () {
          this.isHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (f.fancybox = {
          version: "3.3.5",
          defaults: e,
          getInstance: function (e) {
            var t = f(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              n = Array.prototype.slice.call(arguments, 1);
            return (
              t instanceof i &&
              ("string" === f.type(e)
                ? t[e].apply(t, n)
                : "function" === f.type(e) && e.apply(t, n),
              t)
            );
          },
          open: function (e, t, n) {
            return new i(e, t, n);
          },
          close: function (e) {
            var t = this.getInstance();
            t && (t.close(), !0 === e && this.close());
          },
          destroy: function () {
            this.close(!0), a.add("body").off("click.fb-start", "**");
          },
          isMobile:
            o.createTouch !== g &&
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d:
            ((e = o.createElement("div")),
            c.getComputedStyle &&
              c.getComputedStyle(e) &&
              c.getComputedStyle(e).getPropertyValue("transform") &&
              !(o.documentMode && o.documentMode < 11)),
          getTranslate: function (e) {
            var t;
            return (
              !(!e || !e.length) && {
                top: (t = e[0].getBoundingClientRect()).top || 0,
                left: t.left || 0,
                width: t.width,
                height: t.height,
                opacity: parseFloat(e.css("opacity")),
              }
            );
          },
          setTranslate: function (e, t) {
            var n = "",
              i = {};
            if (e && t)
              return (
                (t.left === g && t.top === g) ||
                  ((n =
                    (t.left === g ? e.position() : t).left +
                    "px, " +
                    (t.top === g ? e.position() : t).top +
                    "px"),
                  (n = this.use3d
                    ? "translate3d(" + n + ", 0px)"
                    : "translate(" + n + ")")),
                (n =
                  t.scaleX !== g && t.scaleY !== g
                    ? (n.length ? n + " " : "") +
                      "scale(" +
                      t.scaleX +
                      ", " +
                      t.scaleY +
                      ")"
                    : n).length && (i.transform = n),
                t.opacity !== g && (i.opacity = t.opacity),
                t.width !== g && (i.width = t.width),
                t.height !== g && (i.height = t.height),
                e.css(i)
              );
          },
          animate: function (t, n, e, i, s) {
            var a = !1;
            f.isFunction(e) && ((i = e), (e = null)),
              f.isPlainObject(n) || t.removeAttr("style"),
              f.fancybox.stop(t),
              t.on(d, function (e) {
                (e &&
                  e.originalEvent &&
                  (!t.is(e.originalEvent.target) ||
                    "z-index" == e.originalEvent.propertyName)) ||
                  (f.fancybox.stop(t),
                  a && f.fancybox.setTranslate(t, a),
                  f.isPlainObject(n)
                    ? !1 === s && t.removeAttr("style")
                    : !0 !== s && t.removeClass(n),
                  f.isFunction(i) && i(e));
              }),
              f.isNumeric(e) && t.css("transition-duration", e + "ms"),
              f.isPlainObject(n)
                ? (n.scaleX !== g &&
                    n.scaleY !== g &&
                    ((a = f.extend({}, n, {
                      width: t.width() * n.scaleX,
                      height: t.height() * n.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })),
                    delete n.width,
                    delete n.height,
                    t.parent().hasClass("fancybox-slide--image") &&
                      t.parent().addClass("fancybox-is-scaling")),
                  f.fancybox.setTranslate(t, n))
                : t.addClass(n),
              t.data(
                "timer",
                setTimeout(function () {
                  t.trigger("transitionend");
                }, e + 16)
              );
          },
          stop: function (e) {
            e &&
              e.length &&
              (clearTimeout(e.data("timer")),
              e.off("transitionend").css("transition-duration", ""),
              e.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (f.fn.fancybox = function (e) {
          var t;
          return (
            (t = (e = e || {}).selector || !1)
              ? f("body")
                  .off("click.fb-start", t)
                  .on("click.fb-start", t, { options: e }, n)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: e },
                  n
                ),
            this
          );
        }),
        a.on("click.fb-start", "[data-fancybox]", n),
        a.on("click.fb-start", "[data-trigger]", function (e) {
          n(e, {
            $target: f(
              '[data-fancybox="' +
                f(e.currentTarget).attr("data-trigger") +
                '"]'
            ).eq(f(e.currentTarget).attr("data-index") || 0),
            $trigger: f(this),
          });
        });
    }
  })(window, document, window.jQuery || jQuery),
  (function (p) {
    "use strict";
    function f(n, e, t) {
      if (n)
        return (
          "object" === p.type((t = t || "")) && (t = p.param(t, !0)),
          p.each(e, function (e, t) {
            n = n.replace("$" + e, t || "");
          }),
          t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
          n
        );
    }
    var i = {
      youtube: {
        matcher:
          /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1,
        },
        paramPlace: 8,
        type: "iframe",
        url: "//www.youtube.com/embed/$4",
        thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
      },
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
          api: 1,
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2",
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l",
      },
      gmap_place: {
        matcher:
          /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (e) {
          return (
            "//maps.google." +
            e[2] +
            "/?ll=" +
            (e[9]
              ? e[9] +
                "&z=" +
                Math.floor(e[10]) +
                (e[12] ? e[12].replace(/^\//, "&") : "")
              : e[12] + ""
            ).replace(/\?/, "&") +
            "&output=" +
            (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
          );
        },
      },
      gmap_search: {
        matcher:
          /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (e) {
          return (
            "//maps.google." +
            e[2] +
            "/maps?q=" +
            e[5].replace("query=", "q=").replace("api=1", "") +
            "&output=embed"
          );
        },
      },
    };
    p(document).on("objectNeedsType.fb", function (e, t, s) {
      var a,
        o,
        r,
        l,
        c,
        u,
        d = s.src || "",
        h = !1,
        n = p.extend(!0, {}, i, s.opts.media);
      p.each(n, function (e, t) {
        if ((o = d.match(t.matcher))) {
          if (
            ((h = t.type), (u = e), (c = {}), t.paramPlace && o[t.paramPlace])
          ) {
            l = (l =
              "?" == (l = o[t.paramPlace])[0] ? l.substring(1) : l).split("&");
            for (var n = 0; n < l.length; ++n) {
              var i = l[n].split("=", 2);
              2 == i.length &&
                (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
            }
          }
          return (
            (r = p.extend(!0, {}, t.params, s.opts[e], c)),
            (d =
              "function" === p.type(t.url)
                ? t.url.call(this, o, r, s)
                : f(t.url, o, r)),
            (a =
              "function" === p.type(t.thumb)
                ? t.thumb.call(this, o, r, s)
                : f(t.thumb, o)),
            "youtube" === e
              ? (d = d.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
                  return (
                    "&start=" +
                    ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                  );
                }))
              : "vimeo" === e && (d = d.replace("&%23", "#")),
            !1
          );
        }
      }),
        h
          ? (s.opts.thumb ||
              (s.opts.$thumb && s.opts.$thumb.length) ||
              (s.opts.thumb = a),
            "iframe" === h &&
              (s.opts = p.extend(!0, s.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            p.extend(s, {
              type: h,
              src: d,
              origSrc: s.src,
              contentSource: u,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == u || "gmap_search" == u
                  ? "map"
                  : "video",
            }))
          : d && (s.type = s.opts.defaultType);
    });
  })(window.jQuery || jQuery),
  (function (u, r, d) {
    "use strict";
    function h(e) {
      var t,
        n = [];
      for (t in (e =
        (e = e.originalEvent || e || u.e).touches && e.touches.length
          ? e.touches
          : e.changedTouches && e.changedTouches.length
          ? e.changedTouches
          : [e]))
        e[t].pageX
          ? n.push({ x: e[t].pageX, y: e[t].pageY })
          : e[t].clientX && n.push({ x: e[t].clientX, y: e[t].clientY });
      return n;
    }
    function p(e, t, n) {
      return t && e
        ? "x" === n
          ? e.x - t.x
          : "y" === n
          ? e.y - t.y
          : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        : 0;
    }
    function l(e) {
      if (
        e.is(
          'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio'
        ) ||
        d.isFunction(e.get(0).onclick) ||
        e.data("selectable")
      )
        return 1;
      for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++)
        if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1;
    }
    function c(e) {
      for (
        var t, n, i, s = !1;
        ((t = e.get(0)),
        (n = i = n = void 0),
        (n = u.getComputedStyle(t)["overflow-y"]),
        (i = u.getComputedStyle(t)["overflow-x"]),
        (n =
          ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight),
        (t = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth),
        !(s = n || t)) &&
        (e = e.parent()).length &&
        !e.hasClass("fancybox-stage") &&
        !e.is("body");

      );
      return s;
    }
    function n(e) {
      var t = this;
      (t.instance = e),
        (t.$bg = e.$refs.bg),
        (t.$stage = e.$refs.stage),
        (t.$container = e.$refs.container),
        t.destroy(),
        t.$container.on(
          "touchstart.fb.touch mousedown.fb.touch",
          d.proxy(t, "ontouchstart")
        );
    }
    var f =
        u.requestAnimationFrame ||
        u.webkitRequestAnimationFrame ||
        u.mozRequestAnimationFrame ||
        u.oRequestAnimationFrame ||
        function (e) {
          return u.setTimeout(e, 1e3 / 60);
        },
      g =
        u.cancelAnimationFrame ||
        u.webkitCancelAnimationFrame ||
        u.mozCancelAnimationFrame ||
        u.oCancelAnimationFrame ||
        function (e) {
          u.clearTimeout(e);
        };
    (n.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (n.prototype.ontouchstart = function (e) {
        var t = this,
          n = d(e.target),
          i = t.instance,
          s = i.current,
          a = s.$content,
          o = "touchstart" == e.type;
        if (
          (o && t.$container.off("mousedown.fb.touch"),
          (!e.originalEvent || 2 != e.originalEvent.button) &&
            n.length &&
            !l(n) &&
            !l(n.parent()) &&
            (n.is("img") ||
              !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left)))
        ) {
          if (!s || i.isAnimating || i.isClosing)
            return e.stopPropagation(), void e.preventDefault();
          (t.realPoints = t.startPoints = h(e)),
            t.startPoints.length &&
              (e.stopPropagation(),
              (t.startEvent = e),
              (t.canTap = !0),
              (t.$target = n),
              (t.$content = a),
              (t.opts = s.opts.touch),
              (t.isPanning = !1),
              (t.isSwiping = !1),
              (t.isZooming = !1),
              (t.isScrolling = !1),
              (t.startTime = new Date().getTime()),
              (t.distanceX = t.distanceY = t.distance = 0),
              (t.canvasWidth = Math.round(s.$slide[0].clientWidth)),
              (t.canvasHeight = Math.round(s.$slide[0].clientHeight)),
              (t.contentLastPos = null),
              (t.contentStartPos = d.fancybox.getTranslate(t.$content) || {
                top: 0,
                left: 0,
              }),
              (t.sliderStartPos =
                t.sliderLastPos || d.fancybox.getTranslate(s.$slide)),
              (t.stagePos = d.fancybox.getTranslate(i.$refs.stage)),
              (t.sliderStartPos.top -= t.stagePos.top),
              (t.sliderStartPos.left -= t.stagePos.left),
              (t.contentStartPos.top -= t.stagePos.top),
              (t.contentStartPos.left -= t.stagePos.left),
              d(r)
                .off(".fb.touch")
                .on(
                  o
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  d.proxy(t, "ontouchend")
                )
                .on(
                  o ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  d.proxy(t, "ontouchmove")
                ),
              d.fancybox.isMobile &&
                r.addEventListener("scroll", t.onscroll, !0),
              (t.opts || i.canPan()) &&
              (n.is(t.$stage) || t.$stage.find(n).length)
                ? ((d.fancybox.isMobile && (c(n) || c(n.parent()))) ||
                    e.preventDefault(),
                  (1 !== t.startPoints.length && !s.hasError) ||
                    (t.instance.canPan()
                      ? (d.fancybox.stop(t.$content),
                        t.$content.css("transition-duration", ""),
                        (t.isPanning = !0))
                      : (t.isSwiping = !0),
                    t.$container.addClass("fancybox-controls--isGrabbing")),
                  2 === t.startPoints.length &&
                    "image" === s.type &&
                    (s.isLoaded || s.$ghost) &&
                    ((t.canTap = !1),
                    (t.isSwiping = !1),
                    (t.isPanning = !1),
                    (t.isZooming = !0),
                    d.fancybox.stop(t.$content),
                    t.$content.css("transition-duration", ""),
                    (t.centerPointStartX =
                      0.5 * (t.startPoints[0].x + t.startPoints[1].x) -
                      d(u).scrollLeft()),
                    (t.centerPointStartY =
                      0.5 * (t.startPoints[0].y + t.startPoints[1].y) -
                      d(u).scrollTop()),
                    (t.percentageOfImageAtPinchPointX =
                      (t.centerPointStartX - t.contentStartPos.left) /
                      t.contentStartPos.width),
                    (t.percentageOfImageAtPinchPointY =
                      (t.centerPointStartY - t.contentStartPos.top) /
                      t.contentStartPos.height),
                    (t.startDistanceBetweenFingers = p(
                      t.startPoints[0],
                      t.startPoints[1]
                    ))))
                : n.is(".fancybox-image") && e.preventDefault());
        }
      }),
      (n.prototype.onscroll = function (e) {
        (this.isScrolling = !0),
          r.removeEventListener("scroll", this.onscroll, !0);
      }),
      (n.prototype.ontouchmove = function (e) {
        var t = this,
          n = d(e.target);
        return void 0 !== e.originalEvent.buttons &&
          0 === e.originalEvent.buttons
          ? void t.ontouchend(e)
          : t.isScrolling || (!n.is(t.$stage) && !t.$stage.find(n).length)
          ? void (t.canTap = !1)
          : ((t.newPoints = h(e)),
            void (
              (t.opts || t.instance.canPan()) &&
              t.newPoints.length &&
              t.newPoints.length &&
              ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
              (t.distanceX = p(t.newPoints[0], t.startPoints[0], "x")),
              (t.distanceY = p(t.newPoints[0], t.startPoints[0], "y")),
              (t.distance = p(t.newPoints[0], t.startPoints[0])),
              0 < t.distance &&
                (t.isSwiping
                  ? t.onSwipe(e)
                  : t.isPanning
                  ? t.onPan()
                  : t.isZooming && t.onZoom()))
            ));
      }),
      (n.prototype.onSwipe = function (e) {
        var i = this,
          t = i.isSwiping,
          n = i.sliderStartPos.left || 0;
        !0 !== t
          ? ("x" == t &&
              (0 < i.distanceX &&
              (i.instance.group.length < 2 ||
                (0 === i.instance.current.index &&
                  !i.instance.current.opts.loop))
                ? (n += Math.pow(i.distanceX, 0.8))
                : i.distanceX < 0 &&
                  (i.instance.group.length < 2 ||
                    (i.instance.current.index === i.instance.group.length - 1 &&
                      !i.instance.current.opts.loop))
                ? (n -= Math.pow(-i.distanceX, 0.8))
                : (n += i.distanceX)),
            (i.sliderLastPos = {
              top: "x" == t ? 0 : i.sliderStartPos.top + i.distanceY,
              left: n,
            }),
            i.requestId && (g(i.requestId), (i.requestId = null)),
            (i.requestId = f(function () {
              i.sliderLastPos &&
                (d.each(i.instance.slides, function (e, t) {
                  var n = t.pos - i.instance.currPos;
                  d.fancybox.setTranslate(t.$slide, {
                    top: i.sliderLastPos.top,
                    left:
                      i.sliderLastPos.left +
                      n * i.canvasWidth +
                      n * t.opts.gutter,
                  });
                }),
                i.$container.addClass("fancybox-is-sliding"));
            })))
          : 10 < Math.abs(i.distance) &&
            ((i.canTap = !1),
            i.instance.group.length < 2 && i.opts.vertical
              ? (i.isSwiping = "y")
              : i.instance.isDragging ||
                !1 === i.opts.vertical ||
                ("auto" === i.opts.vertical && 800 < d(u).width())
              ? (i.isSwiping = "x")
              : ((n = Math.abs(
                  (180 * Math.atan2(i.distanceY, i.distanceX)) / Math.PI
                )),
                (i.isSwiping = 45 < n && n < 135 ? "y" : "x")),
            (i.canTap = !1),
            "y" === i.isSwiping &&
            d.fancybox.isMobile &&
            (c(i.$target) || c(i.$target.parent()))
              ? (i.isScrolling = !0)
              : ((i.instance.isDragging = i.isSwiping),
                (i.startPoints = i.newPoints),
                d.each(i.instance.slides, function (e, t) {
                  d.fancybox.stop(t.$slide),
                    t.$slide.css("transition-duration", ""),
                    (t.inTransition = !1),
                    t.pos === i.instance.current.pos &&
                      (i.sliderStartPos.left =
                        d.fancybox.getTranslate(t.$slide).left -
                        d.fancybox.getTranslate(i.instance.$refs.stage).left);
                }),
                i.instance.SlideShow &&
                  i.instance.SlideShow.isActive &&
                  i.instance.SlideShow.stop()));
      }),
      (n.prototype.onPan = function () {
        var e = this;
        return p(e.newPoints[0], e.realPoints[0]) <
          (d.fancybox.isMobile ? 10 : 5)
          ? void (e.startPoints = e.newPoints)
          : ((e.canTap = !1),
            (e.contentLastPos = e.limitMovement()),
            e.requestId && (g(e.requestId), (e.requestId = null)),
            void (e.requestId = f(function () {
              d.fancybox.setTranslate(e.$content, e.contentLastPos);
            })));
      }),
      (n.prototype.limitMovement = function () {
        var e = this,
          t = e.canvasWidth,
          n = e.canvasHeight,
          i = e.distanceX,
          s = e.distanceY,
          a = e.contentStartPos,
          o = a.left,
          r = a.top,
          l = a.width,
          c = a.height,
          u = t < l ? o + i : o,
          d = r + s,
          e = Math.max(0, 0.5 * t - 0.5 * l),
          a = Math.max(0, 0.5 * n - 0.5 * c),
          l = Math.min(t - l, 0.5 * t - 0.5 * l),
          c = Math.min(n - c, 0.5 * n - 0.5 * c);
        return (
          0 < i && e < u && (u = e - 1 + Math.pow(-e + o + i, 0.8) || 0),
          i < 0 && u < l && (u = l + 1 - Math.pow(l - o - i, 0.8) || 0),
          0 < s && a < d && (d = a - 1 + Math.pow(-a + r + s, 0.8) || 0),
          {
            top: (d =
              s < 0 && d < c ? c + 1 - Math.pow(c - r - s, 0.8) || 0 : d),
            left: u,
          }
        );
      }),
      (n.prototype.limitPosition = function (e, t, n, i) {
        var s = this.canvasWidth,
          a = this.canvasHeight;
        return (
          (e =
            s < n
              ? (e = 0 < e ? 0 : e) < s - n
                ? s - n
                : e
              : Math.max(0, s / 2 - n / 2)),
          {
            top: (t =
              a < i
                ? (t = 0 < t ? 0 : t) < a - i
                  ? a - i
                  : t
                : Math.max(0, a / 2 - i / 2)),
            left: e,
          }
        );
      }),
      (n.prototype.onZoom = function () {
        var e = this,
          t = e.contentStartPos,
          n = t.width,
          i = t.height,
          s = t.left,
          a = t.top,
          o = p(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
          r = Math.floor(n * o),
          l = Math.floor(i * o),
          c = (n - r) * e.percentageOfImageAtPinchPointX,
          t = (i - l) * e.percentageOfImageAtPinchPointY,
          n = (e.newPoints[0].x + e.newPoints[1].x) / 2 - d(u).scrollLeft(),
          i = (e.newPoints[0].y + e.newPoints[1].y) / 2 - d(u).scrollTop(),
          n = n - e.centerPointStartX,
          o = {
            top: a + (t + (i - e.centerPointStartY)),
            left: s + (c + n),
            scaleX: o,
            scaleY: o,
          };
        (e.canTap = !1),
          (e.newWidth = r),
          (e.newHeight = l),
          (e.contentLastPos = o),
          e.requestId && (g(e.requestId), (e.requestId = null)),
          (e.requestId = f(function () {
            d.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (n.prototype.ontouchend = function (e) {
        var t = this,
          n = Math.max(new Date().getTime() - t.startTime, 1),
          i = t.isSwiping,
          s = t.isPanning,
          a = t.isZooming,
          o = t.isScrolling;
        return (
          (t.endPoints = h(e)),
          t.$container.removeClass("fancybox-controls--isGrabbing"),
          d(r).off(".fb.touch"),
          r.removeEventListener("scroll", t.onscroll, !0),
          t.requestId && (g(t.requestId), (t.requestId = null)),
          (t.isSwiping = !1),
          (t.isPanning = !1),
          (t.isZooming = !1),
          (t.isScrolling = !1),
          (t.instance.isDragging = !1),
          t.canTap
            ? t.onTap(e)
            : ((t.speed = 366),
              (t.velocityX = (t.distanceX / n) * 0.5),
              (t.velocityY = (t.distanceY / n) * 0.5),
              (t.speedX = Math.max(
                0.5 * t.speed,
                Math.min(1.5 * t.speed, (1 / Math.abs(t.velocityX)) * t.speed)
              )),
              void (s
                ? t.endPanning()
                : a
                ? t.endZooming()
                : t.endSwiping(i, o)))
        );
      }),
      (n.prototype.endSwiping = function (e, t) {
        var n = this,
          i = !1,
          s = n.instance.group.length;
        (n.sliderLastPos = null),
          "y" == e && !t && 50 < Math.abs(n.distanceY)
            ? (d.fancybox.animate(
                n.instance.current.$slide,
                {
                  top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = n.instance.close(!0, 200)))
            : "x" == e && 50 < n.distanceX && 1 < s
            ? (i = n.instance.previous(n.speedX))
            : "x" == e &&
              n.distanceX < -50 &&
              1 < s &&
              (i = n.instance.next(n.speedX)),
          !1 !== i ||
            ("x" != e && "y" != e) ||
            (t || s < 2
              ? n.instance.centerSlide(n.instance.current, 150)
              : n.instance.jumpTo(n.instance.current.index)),
          n.$container.removeClass("fancybox-is-sliding");
      }),
      (n.prototype.endPanning = function () {
        var e,
          t,
          n = this;
        n.contentLastPos &&
          ((t =
            !1 === n.opts.momentum
              ? ((e = n.contentLastPos.left), n.contentLastPos.top)
              : ((e = n.contentLastPos.left + n.velocityX * n.speed),
                n.contentLastPos.top + n.velocityY * n.speed)),
          ((t = n.limitPosition(
            e,
            t,
            n.contentStartPos.width,
            n.contentStartPos.height
          )).width = n.contentStartPos.width),
          (t.height = n.contentStartPos.height),
          d.fancybox.animate(n.$content, t, 330));
      }),
      (n.prototype.endZooming = function () {
        var e,
          t,
          n = this,
          i = n.instance.current,
          s = n.newWidth,
          a = n.newHeight;
        n.contentLastPos &&
          ((e = n.contentLastPos.left),
          (t = n.contentLastPos.top),
          d.fancybox.setTranslate(n.$content, {
            top: t,
            left: e,
            width: s,
            height: a,
            scaleX: 1,
            scaleY: 1,
          }),
          s < n.canvasWidth && a < n.canvasHeight
            ? n.instance.scaleToFit(150)
            : s > i.width || a > i.height
            ? n.instance.scaleToActual(
                n.centerPointStartX,
                n.centerPointStartY,
                150
              )
            : ((a = n.limitPosition(e, t, s, a)),
              d.fancybox.setTranslate(
                n.$content,
                d.fancybox.getTranslate(n.$content)
              ),
              d.fancybox.animate(n.$content, a, 150)));
      }),
      (n.prototype.onTap = function (t) {
        function e(e) {
          if (((e = o.opts[e]), (e = d.isFunction(e) ? e.apply(a, [o, t]) : e)))
            switch (e) {
              case "close":
                a.close(i.startEvent);
                break;
              case "toggleControls":
                a.toggleControls(!0);
                break;
              case "next":
                a.next();
                break;
              case "nextOrClose":
                1 < a.group.length ? a.next() : a.close(i.startEvent);
                break;
              case "zoom":
                "image" == o.type &&
                  (o.isLoaded || o.$ghost) &&
                  (a.canPan()
                    ? a.scaleToFit()
                    : a.isScaledDown()
                    ? a.scaleToActual(l, c)
                    : a.group.length < 2 && a.close(i.startEvent));
            }
        }
        var n,
          i = this,
          s = d(t.target),
          a = i.instance,
          o = a.current,
          r = (t && h(t)) || i.startPoints,
          l = r[0] ? r[0].x - d(u).scrollLeft() - i.stagePos.left : 0,
          c = r[0] ? r[0].y - d(u).scrollTop() - i.stagePos.top : 0;
        if (
          (!t.originalEvent || 2 != t.originalEvent.button) &&
          (s.is("img") || !(l > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            n = "Outside";
          else if (s.is(".fancybox-slide")) n = "Slide";
          else {
            if (
              !a.current.$content ||
              !a.current.$content.find(s).addBack().filter(s).length
            )
              return;
            n = "Content";
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY))
            )
              return this;
            e("dblclick" + n);
          } else
            (i.tapX = l),
              (i.tapY = c),
              o.opts["dblclick" + n] &&
              o.opts["dblclick" + n] !== o.opts["click" + n]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), e("click" + n);
                  }, 500))
                : e("click" + n);
          return this;
        }
      }),
      d(r).on("onActivate.fb", function (e, t) {
        t && !t.Guestures && (t.Guestures = new n(t));
      });
  })(window, document, window.jQuery || jQuery),
  (function (a, o) {
    "use strict";
    o.extend(!0, o.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3 },
    });
    function n(e) {
      (this.instance = e), this.init();
    }
    o.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var e = this;
        (e.$button = e.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            e.toggle();
          })),
          (e.instance.group.length < 2 ||
            !e.instance.group[e.instance.currIndex].opts.slideShow) &&
            e.$button.hide();
      },
      set: function (e) {
        var t = this;
        t.instance &&
        t.instance.current &&
        (!0 === e ||
          t.instance.current.opts.loop ||
          t.instance.currIndex < t.instance.group.length - 1)
          ? (t.timer = setTimeout(function () {
              t.isActive &&
                t.instance.jumpTo(
                  (t.instance.currIndex + 1) % t.instance.group.length
                );
            }, t.instance.current.opts.slideShow.speed))
          : (t.stop(),
            (t.instance.idleSecondsCounter = 0),
            t.instance.showControls());
      },
      clear: function () {
        clearTimeout(this.timer), (this.timer = null);
      },
      start: function () {
        var e = this.instance.current;
        e &&
          ((this.isActive = !0),
          this.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          this.set(!0));
      },
      stop: function () {
        var e = this.instance.current;
        this.clear(),
          this.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (this.isActive = !1);
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      o(a).on({
        "onInit.fb": function (e, t) {
          t && !t.SlideShow && (t.SlideShow = new n(t));
        },
        "beforeShow.fb": function (e, t, n, i) {
          t = t && t.SlideShow;
          i
            ? t && n.opts.slideShow.autoStart && t.start()
            : t && t.isActive && t.clear();
        },
        "afterShow.fb": function (e, t, n) {
          t = t && t.SlideShow;
          t && t.isActive && t.set();
        },
        "afterKeydown.fb": function (e, t, n, i, s) {
          t = t && t.SlideShow;
          !t ||
            !n.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            o(a.activeElement).is("button,a,input") ||
            (i.preventDefault(), t.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (e, t) {
          t = t && t.SlideShow;
          t && t.stop();
        },
      }),
      o(a).on("visibilitychange", function () {
        var e = o.fancybox.getInstance(),
          e = e && e.SlideShow;
        e && e.isActive && (a.hidden ? e.clear() : e.set());
      });
  })(document, window.jQuery || jQuery),
  (function (a, n) {
    "use strict";
    var t = (function () {
      for (
        var e = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          t = {},
          n = 0;
        n < e.length;
        n++
      ) {
        var i = e[n];
        if (i && i[1] in a) {
          for (var s = 0; s < i.length; s++) t[e[0][s]] = i[s];
          return t;
        }
      }
      return !1;
    })();
    if (!t)
      return n && n.fancybox && (n.fancybox.defaults.btnTpl.fullScreen = !1);
    var i = {
      request: function (e) {
        (e = e || a.documentElement)[t.requestFullscreen](
          e.ALLOW_KEYBOARD_INPUT
        );
      },
      exit: function () {
        a[t.exitFullscreen]();
      },
      toggle: function (e) {
        (e = e || a.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(a[t.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(a[t.fullscreenEnabled]);
      },
    };
    n.extend(!0, n.fancybox.defaults, {
      btnTpl: {
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>',
      },
      fullScreen: { autoStart: !1 },
    }),
      n(a).on({
        "onInit.fb": function (e, t) {
          t && t.group[t.currIndex].opts.fullScreen
            ? (t.$refs.container.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (e) {
                  e.stopPropagation(), e.preventDefault(), i.toggle();
                }
              ),
              t.opts.fullScreen &&
                !0 === t.opts.fullScreen.autoStart &&
                i.request(),
              (t.FullScreen = i))
            : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (e, t, n, i, s) {
          t &&
            t.FullScreen &&
            70 === s &&
            (i.preventDefault(), t.FullScreen.toggle());
        },
        "beforeClose.fb": function (e, t) {
          t &&
            t.FullScreen &&
            t.$refs.container.hasClass("fancybox-is-fullscreen") &&
            i.exit();
        },
      }),
      n(a).on(t.fullscreenchange, function () {
        var e = i.isFullscreen(),
          t = n.fancybox.getInstance();
        t &&
          (t.current &&
            "image" === t.current.type &&
            t.isAnimating &&
            (t.current.$content.css("transition", "none"),
            (t.isAnimating = !1),
            t.update(!0, !0, 0)),
          t.trigger("onFullscreenChange", e),
          t.$refs.container.toggleClass("fancybox-is-fullscreen", e));
      });
  })(document, window.jQuery || jQuery),
  (function (e, a) {
    "use strict";
    var o = "fancybox-thumbs",
      r = o + "-active";
    a.fancybox.defaults = a.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      a.fancybox.defaults
    );
    function n(e) {
      this.init(e);
    }
    a.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (e) {
        var t,
          n,
          i = this;
        (((i.instance = e).Thumbs = i).opts = e.group[e.currIndex].opts.thumbs),
          (t =
            (t = e.group[0]).opts.thumb ||
            (!(!t.opts.$thumb || !t.opts.$thumb.length) &&
              t.opts.$thumb.attr("src"))),
          1 < e.group.length &&
            (n =
              (n = e.group[1]).opts.thumb ||
              (!(!n.opts.$thumb || !n.opts.$thumb.length) &&
                n.opts.$thumb.attr("src"))),
          (i.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]")),
          i.opts && t && n && t && n
            ? (i.$button.show().on("click", function () {
                i.toggle();
              }),
              (i.isActive = !0))
            : i.$button.hide();
      },
      create: function () {
        var n,
          e = this,
          t = e.instance,
          i = e.opts.parentEl,
          s = [];
        e.$grid ||
          ((e.$grid = a(
            '<div class="' + o + " " + o + "-" + e.opts.axis + '"></div>'
          ).appendTo(t.$refs.container.find(i).addBack().filter(i))),
          e.$grid.on("click", "li", function () {
            t.jumpTo(a(this).attr("data-index"));
          })),
          e.$list || (e.$list = a("<ul>").appendTo(e.$grid)),
          a.each(t.group, function (e, t) {
            (n =
              t.opts.thumb ||
              (t.opts.$thumb ? t.opts.$thumb.attr("src") : null)) ||
              "image" !== t.type ||
              (n = t.src),
              s.push(
                '<li data-index="' +
                  e +
                  '" tabindex="0" class="fancybox-thumbs-loading"' +
                  (n && n.length
                    ? ' style="background-image:url(' + n + ')" />'
                    : "") +
                  "></li>"
              );
          }),
          (e.$list[0].innerHTML = s.join("")),
          "x" === e.opts.axis &&
            e.$list.width(
              parseInt(e.$grid.css("padding-right"), 10) +
                t.group.length * e.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (e) {
        var t,
          n,
          i = this,
          s = i.$list,
          a = i.$grid;
        i.instance.current &&
          ((n = (t = s
            .children()
            .removeClass(r)
            .filter('[data-index="' + i.instance.current.index + '"]')
            .addClass(r)).position()),
          "y" === i.opts.axis &&
          (n.top < 0 || n.top > s.height() - t.outerHeight())
            ? s.stop().animate({ scrollTop: s.scrollTop() + n.top }, e)
            : "x" === i.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - t.outerWidth())) &&
              s.parent().stop().animate({ scrollLeft: n.left }, e));
      },
      update: function () {
        var e = this;
        e.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          e.isVisible
            ? (e.$grid || e.create(),
              e.instance.trigger("onThumbsShow"),
              e.focus(0))
            : e.$grid && e.instance.trigger("onThumbsHide"),
          e.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      a(e).on({
        "onInit.fb": function (e, t) {
          !t ||
            t.Thumbs ||
            ((t = new n(t)).isActive && !0 === t.opts.autoStart && t.show());
        },
        "beforeShow.fb": function (e, t, n, i) {
          t = t && t.Thumbs;
          t && t.isVisible && t.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function (e, t, n, i, s) {
          t = t && t.Thumbs;
          t && t.isActive && 71 === s && (i.preventDefault(), t.toggle());
        },
        "beforeClose.fb": function (e, t) {
          t = t && t.Thumbs;
          t && t.isVisible && !1 !== t.opts.hideOnClose && t.$grid.hide();
        },
      });
  })(document, window.jQuery || jQuery),
  (function (e, s) {
    "use strict";
    s.extend(!0, s.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
      },
      share: {
        url: function (e, t) {
          return (
            (!e.currentHash &&
              "inline" !== t.type &&
              "html" !== t.type &&
              (t.origSrc || t.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&amp;text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&amp;description={{descr}}&amp;media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>',
      },
    }),
      s(e).on("click", "[data-fancybox-share]", function () {
        var e,
          t,
          n = s.fancybox.getInstance(),
          i = n.current || null;
        i &&
          ("function" === s.type(i.opts.share.url) &&
            (e = i.opts.share.url.apply(i, [n, i])),
          (e = i.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === i.type ? encodeURIComponent(i.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(e))
            .replace(
              /\{\{url_raw\}\}/g,
              ((t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String(e).replace(/[&<>"'`=\/]/g, function (e) {
                return t[e];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              n.$caption ? encodeURIComponent(n.$caption.text()) : ""
            )),
          s.fancybox.open({
            src: n.translate(n, e),
            type: "html",
            opts: {
              animationEffect: !1,
              afterLoad: function (e, t) {
                n.$refs.container.one("beforeClose.fb", function () {
                  e.close(null, 0);
                }),
                  t.$content
                    .find(".fancybox-share__links a")
                    .click(function () {
                      return (
                        window.open(
                          this.href,
                          "Share",
                          "width=550, height=450"
                        ),
                        !1
                      );
                    });
              },
            },
          }));
      });
  })(document, window.jQuery || jQuery),
  (function (a, o, i) {
    "use strict";
    function s() {
      var e = o.location.hash.substr(1),
        t = e.split("-"),
        n =
          (1 < t.length &&
            /^\+?\d+$/.test(t[t.length - 1]) &&
            parseInt(t.pop(-1), 10)) ||
          1;
      return { hash: e, index: n < 1 ? 1 : n, gallery: t.join("-") };
    }
    function t(e) {
      "" !== e.gallery &&
        i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']")
          .eq(e.index - 1)
          .trigger("click.fb-start");
    }
    function r(e) {
      return (
        !!e &&
        "" !==
          (e =
            (e = (e.current || e).opts).hash ||
            (e.$orig ? e.$orig.data("fancybox") : "")) &&
        e
      );
    }
    i.escapeSelector ||
      (i.escapeSelector = function (e) {
        return (e + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
        );
      }),
      i(function () {
        !1 !== i.fancybox.defaults.hash &&
          (i(a).on({
            "onInit.fb": function (e, t) {
              var n, i;
              !1 !== t.group[t.currIndex].opts.hash &&
                ((n = s()),
                (i = r(t)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (t.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (e, t, n, i) {
              var s;
              !n ||
                !1 === n.opts.hash ||
                ((s = r(t)) &&
                  ((t.currentHash =
                    s + (1 < t.group.length ? "-" + (n.index + 1) : "")),
                  o.location.hash !== "#" + t.currentHash &&
                    (t.origHash || (t.origHash = o.location.hash),
                    t.hashTimer && clearTimeout(t.hashTimer),
                    (t.hashTimer = setTimeout(function () {
                      "replaceState" in o.history
                        ? (o.history[i ? "pushState" : "replaceState"](
                            {},
                            a.title,
                            o.location.pathname +
                              o.location.search +
                              "#" +
                              t.currentHash
                          ),
                          i && (t.hasCreatedHistory = !0))
                        : (o.location.hash = t.currentHash),
                        (t.hashTimer = null);
                    }, 300)))));
            },
            "beforeClose.fb": function (e, t, n) {
              !1 !== n.opts.hash &&
                (r(t),
                t.currentHash && t.hasCreatedHistory
                  ? o.history.back()
                  : t.currentHash &&
                    ("replaceState" in o.history
                      ? o.history.replaceState(
                          {},
                          a.title,
                          o.location.pathname +
                            o.location.search +
                            (t.origHash || "")
                        )
                      : (o.location.hash = t.origHash)),
                (t.currentHash = null),
                clearTimeout(t.hashTimer));
            },
          }),
          i(o).on("hashchange.fb", function () {
            var n,
              e = s();
            i.each(i(".fancybox-container").get().reverse(), function (e, t) {
              t = i(t).data("FancyBox");
              if (t.currentHash) return (n = t), !1;
            }),
              n
                ? !n.currentHash ||
                  n.currentHash === e.gallery + "-" + e.index ||
                  (1 === e.index && n.currentHash == e.gallery) ||
                  ((n.currentHash = null), n.close())
                : "" !== e.gallery && t(e);
          }),
          setTimeout(function () {
            i.fancybox.getInstance() || t(s());
          }, 50));
      });
  })(document, window, window.jQuery || jQuery),
  (function (e, t) {
    "use strict";
    var s = new Date().getTime();
    t(e).on({
      "onInit.fb": function (e, i, t) {
        i.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (e) {
            var t = i.current,
              n = new Date().getTime();
            i.group.length < 2 ||
              !1 === t.opts.wheel ||
              ("auto" === t.opts.wheel && "image" !== t.type) ||
              (e.preventDefault(),
              e.stopPropagation(),
              t.$slide.hasClass("fancybox-animated") ||
                ((e = e.originalEvent || e),
                n - s < 250 ||
                  ((s = n),
                  i[
                    (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, window.jQuery || jQuery),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).Swiper = t());
  })(this, function () {
    "use strict";
    var d =
        "undefined" == typeof document
          ? {
              body: {},
              addEventListener: function () {},
              removeEventListener: function () {},
              activeElement: { blur: function () {}, nodeName: "" },
              querySelector: function () {
                return null;
              },
              querySelectorAll: function () {
                return [];
              },
              getElementById: function () {
                return null;
              },
              createEvent: function () {
                return { initEvent: function () {} };
              },
              createElement: function () {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                    return [];
                  },
                };
              },
              location: { hash: "" },
            }
          : document,
      B =
        "undefined" == typeof window
          ? {
              document: d,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function () {
                return this;
              },
              addEventListener: function () {},
              removeEventListener: function () {},
              getComputedStyle: function () {
                return {
                  getPropertyValue: function () {
                    return "";
                  },
                };
              },
              Image: function () {},
              Date: function () {},
              screen: {},
              setTimeout: function () {},
              clearTimeout: function () {},
            }
          : window,
      l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return (this.length = e.length), this;
      };
    function C(e, t) {
      var n = [],
        i = 0;
      if (e && !t && e instanceof l) return e;
      if (e)
        if ("string" == typeof e) {
          var s,
            a,
            o = e.trim();
          if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
            var r = "div";
            for (
              0 === o.indexOf("<li") && (r = "ul"),
                0 === o.indexOf("<tr") && (r = "tbody"),
                (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                  (r = "tr"),
                0 === o.indexOf("<tbody") && (r = "table"),
                0 === o.indexOf("<option") && (r = "select"),
                (a = d.createElement(r)).innerHTML = o,
                i = 0;
              i < a.childNodes.length;
              i += 1
            )
              n.push(a.childNodes[i]);
          } else
            for (
              s =
                t || "#" !== e[0] || e.match(/[ .<>:~]/)
                  ? (t || d).querySelectorAll(e.trim())
                  : [d.getElementById(e.trim().split("#")[1])],
                i = 0;
              i < s.length;
              i += 1
            )
              s[i] && n.push(s[i]);
        } else if (e.nodeType || e === B || e === d) n.push(e);
        else if (0 < e.length && e[0].nodeType)
          for (i = 0; i < e.length; i += 1) n.push(e[i]);
      return new l(n);
    }
    function a(e) {
      for (var t = [], n = 0; n < e.length; n += 1)
        -1 === t.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
    (C.fn = l.prototype), (C.Class = l), (C.Dom7 = l);
    var t = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.add(t[n]);
        return this;
      },
      removeClass: function (e) {
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.remove(t[n]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        for (var t = e.split(" "), n = 0; n < t.length; n += 1)
          for (var i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.toggle(t[n]);
        return this;
      },
      attr: function (e, t) {
        var n = arguments;
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === n.length) this[i].setAttribute(e, t);
          else
            for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        var n;
        if (void 0 !== t) {
          for (var i = 0; i < this.length; i += 1)
            (n = this[i]).dom7ElementDataStorage ||
              (n.dom7ElementDataStorage = {}),
              (n.dom7ElementDataStorage[e] = t);
          return this;
        }
        if ((n = this[0]))
          return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage
            ? n.dom7ElementDataStorage[e]
            : n.getAttribute("data-" + e) || void 0;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) {
          var n = this[t].style;
          (n.webkitTransform = e), (n.transform = e);
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var n = this[t].style;
          (n.webkitTransitionDuration = e), (n.transitionDuration = e);
        }
        return this;
      },
      on: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = e[0],
          a = e[1],
          o = e[2],
          i = e[3];
        function s(e) {
          var t = e.target;
          if (t) {
            var n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), C(t).is(a))) o.apply(t, n);
            else
              for (var i = C(t).parents(), s = 0; s < i.length; s += 1)
                C(i[s]).is(a) && o.apply(i[s], n);
          }
        }
        function r(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
        }
        "function" == typeof e[1] &&
          ((n = e[0]), (o = e[1]), (i = e[2]), (a = void 0));
        for (
          var l, i = i || !1, c = n.split(" "), u = 0;
          u < this.length;
          u += 1
        ) {
          var d = this[u];
          if (a)
            for (l = 0; l < c.length; l += 1) {
              var h = c[l];
              d.dom7LiveListeners || (d.dom7LiveListeners = {}),
                d.dom7LiveListeners[h] || (d.dom7LiveListeners[h] = []),
                d.dom7LiveListeners[h].push({
                  listener: o,
                  proxyListener: s,
                }),
                d.addEventListener(h, s, i);
            }
          else
            for (l = 0; l < c.length; l += 1) {
              var p = c[l];
              d.dom7Listeners || (d.dom7Listeners = {}),
                d.dom7Listeners[p] || (d.dom7Listeners[p] = []),
                d.dom7Listeners[p].push({
                  listener: o,
                  proxyListener: r,
                }),
                d.addEventListener(p, r, i);
            }
        }
        return this;
      },
      off: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = e[0],
          i = e[1],
          s = e[2],
          a = e[3];
        "function" == typeof e[1] &&
          ((n = e[0]), (s = e[1]), (a = e[2]), (i = void 0));
        for (var a = a || !1, o = n.split(" "), r = 0; r < o.length; r += 1)
          for (var l = o[r], c = 0; c < this.length; c += 1) {
            var u = this[c],
              d = void 0;
            if (
              (!i && u.dom7Listeners
                ? (d = u.dom7Listeners[l])
                : i && u.dom7LiveListeners && (d = u.dom7LiveListeners[l]),
              d && d.length)
            )
              for (var h = d.length - 1; 0 <= h; --h) {
                var p = d[h];
                ((s && p.listener === s) ||
                  (s &&
                    p.listener &&
                    p.listener.dom7proxy &&
                    p.listener.dom7proxy === s) ||
                  !s) &&
                  (u.removeEventListener(l, p.proxyListener, a),
                  d.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var n = e[0].split(" "), i = e[1], s = 0; s < n.length; s += 1)
          for (var a = n[s], o = 0; o < this.length; o += 1) {
            var r = this[o],
              l = void 0;
            try {
              l = new B.CustomEvent(a, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
            } catch (e) {
              (l = d.createEvent("Event")).initEvent(a, !0, !0), (l.detail = i);
            }
            (r.dom7EventData = e.filter(function (e, t) {
              return 0 < t;
            })),
              r.dispatchEvent(l),
              (r.dom7EventData = []),
              delete r.dom7EventData;
          }
        return this;
      },
      transitionEnd: function (t) {
        var n,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;
        function a(e) {
          if (e.target === this)
            for (t.call(this, e), n = 0; n < i.length; n += 1) s.off(i[n], a);
        }
        if (t) for (n = 0; n < i.length; n += 1) s.on(i[n], a);
        return this;
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (0 < this.length) {
          var e = this[0],
            t = e.getBoundingClientRect(),
            n = d.body,
            i = e.clientTop || n.clientTop || 0,
            s = e.clientLeft || n.clientLeft || 0,
            n = e === B ? B.scrollY : e.scrollTop,
            e = e === B ? B.scrollX : e.scrollLeft;
          return { top: t.top + n - i, left: t.left + e - s };
        }
        return null;
      },
      css: function (e, t) {
        var n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var i in e) this[n].style[i] = e[i];
            return this;
          }
          if (this[0])
            return B.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 !== arguments.length || "string" != typeof e) return this;
        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          n,
          i = this[0];
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (t = C(e), n = 0; n < t.length; n += 1) if (t[n] === i) return !0;
          return !1;
        }
        if (e === d) return i === d;
        if (e === B) return i === B;
        if (e.nodeType || e instanceof l) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
            if (t[n] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        return new l(
          t - 1 < e
            ? []
            : e < 0
            ? (t = t + e) < 0
              ? []
              : [this[t]]
            : [this[e]]
        );
      },
      append: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var n = 0; n < e.length; n += 1)
          for (var i = e[n], s = 0; s < this.length; s += 1)
            if ("string" == typeof i) {
              var a = d.createElement("div");
              for (a.innerHTML = i; a.firstChild; )
                this[s].appendChild(a.firstChild);
            } else if (i instanceof l)
              for (var o = 0; o < i.length; o += 1) this[s].appendChild(i[o]);
            else this[s].appendChild(i);
        return this;
      },
      prepend: function (e) {
        for (var t, n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            var i = d.createElement("div");
            for (i.innerHTML = e, t = i.childNodes.length - 1; 0 <= t; --t)
              this[n].insertBefore(i.childNodes[t], this[n].childNodes[0]);
          } else if (e instanceof l)
            for (t = 0; t < e.length; t += 1)
              this[n].insertBefore(e[t], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(e)
              ? new l([this[0].nextElementSibling])
              : new l([])
            : this[0].nextElementSibling
            ? new l([this[0].nextElementSibling])
            : new l([])
          : new l([]);
      },
      nextAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return new l([]);
        for (; n.nextElementSibling; ) {
          var i = n.nextElementSibling;
          (e && !C(i).is(e)) || t.push(i), (n = i);
        }
        return new l(t);
      },
      prev: function (e) {
        if (0 < this.length) {
          var t = this[0];
          return e
            ? t.previousElementSibling && C(t.previousElementSibling).is(e)
              ? new l([t.previousElementSibling])
              : new l([])
            : t.previousElementSibling
            ? new l([t.previousElementSibling])
            : new l([]);
        }
        return new l([]);
      },
      prevAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return new l([]);
        for (; n.previousElementSibling; ) {
          var i = n.previousElementSibling;
          (e && !C(i).is(e)) || t.push(i), (n = i);
        }
        return new l(t);
      },
      parent: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          null === this[n].parentNode ||
            (e && !C(this[n].parentNode).is(e)) ||
            t.push(this[n].parentNode);
        return C(a(t));
      },
      parents: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].parentNode; i; )
            (e && !C(i).is(e)) || t.push(i), (i = i.parentNode);
        return C(a(t));
      },
      closest: function (e) {
        var t = this;
        return void 0 === e
          ? new l([])
          : (t = !t.is(e) ? t.parents(e).eq(0) : t);
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].querySelectorAll(e), s = 0; s < i.length; s += 1)
            t.push(i[s]);
        return new l(t);
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].childNodes, s = 0; s < i.length; s += 1)
            e
              ? 1 === i[s].nodeType && C(i[s]).is(e) && t.push(i[s])
              : 1 === i[s].nodeType && t.push(i[s]);
        return new l(a(t));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function () {
        for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
        for (e = 0; e < t.length; e += 1)
          for (var i = C(t[e]), s = 0; s < i.length; s += 1)
            (this[this.length] = i[s]), (this.length += 1);
        return this;
      },
      styles: function () {
        return this[0] ? B.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(t).forEach(function (e) {
      C.fn[e] = t[e];
    });
    var i,
      W = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (e, t) {
          var n, i, s;
          void 0 === t && (t = "x");
          e = B.getComputedStyle(e, null);
          return (
            B.WebKitCSSMatrix
              ? (6 < (i = e.transform || e.webkitTransform).split(",").length &&
                  (i = i
                    .split(", ")
                    .map(function (e) {
                      return e.replace(",", ".");
                    })
                    .join(", ")),
                (s = new B.WebKitCSSMatrix("none" === i ? "" : i)))
              : (n = (s =
                  e.MozTransform ||
                  e.OTransform ||
                  e.MsTransform ||
                  e.msTransform ||
                  e.transform ||
                  e
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                  .toString()
                  .split(",")),
            "x" === t &&
              (i = B.WebKitCSSMatrix
                ? s.m41
                : 16 === n.length
                ? parseFloat(n[12])
                : parseFloat(n[4])),
            (i =
              "y" === t
                ? B.WebKitCSSMatrix
                  ? s.m42
                  : 16 === n.length
                  ? parseFloat(n[13])
                  : parseFloat(n[5])
                : i) || 0
          );
        },
        parseUrlQuery: function (e) {
          var t,
            n,
            i,
            s,
            a = {},
            e = e || B.location.href;
          if ("string" == typeof e && e.length)
            for (
              s = (n = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(function (e) {
                  return "" !== e;
                })).length,
                t = 0;
              t < s;
              t += 1
            )
              (i = n[t].replace(/#\S+/g, "").split("=")),
                (a[decodeURIComponent(i[0])] =
                  void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
          return a;
        },
        isObject: function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object
          );
        },
        extend: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
            var s = e[i];
            if (null != s)
              for (
                var a = Object.keys(Object(s)), o = 0, r = a.length;
                o < r;
                o += 1
              ) {
                var l = a[o],
                  c = Object.getOwnPropertyDescriptor(s, l);
                void 0 !== c &&
                  c.enumerable &&
                  (W.isObject(n[l]) && W.isObject(s[l])
                    ? W.extend(n[l], s[l])
                    : !W.isObject(n[l]) && W.isObject(s[l])
                    ? ((n[l] = {}), W.extend(n[l], s[l]))
                    : (n[l] = s[l]));
              }
          }
          return n;
        },
      },
      X =
        ((i = d.createElement("div")),
        {
          touch:
            (B.Modernizr && !0 === B.Modernizr.touch) ||
            !!(
              0 < B.navigator.maxTouchPoints ||
              "ontouchstart" in B ||
              (B.DocumentTouch && d instanceof B.DocumentTouch)
            ),
          pointerEvents: !!(
            B.navigator.pointerEnabled ||
            B.PointerEvent ||
            ("maxTouchPoints" in B.navigator && 0 < B.navigator.maxTouchPoints)
          ),
          prefixedPointerEvents: !!B.navigator.msPointerEnabled,
          transition:
            "transition" in (o = i.style) ||
            "webkitTransition" in o ||
            "MozTransition" in o,
          transforms3d:
            (B.Modernizr && !0 === B.Modernizr.csstransforms3d) ||
            "webkitPerspective" in (T = i.style) ||
            "MozPerspective" in T ||
            "OPerspective" in T ||
            "MsPerspective" in T ||
            "perspective" in T,
          flexbox: (function () {
            for (
              var e = i.style,
                t =
                  "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                    " "
                  ),
                n = 0;
              n < t.length;
              n += 1
            )
              if (t[n] in e) return !0;
            return !1;
          })(),
          observer: "MutationObserver" in B || "WebkitMutationObserver" in B,
          passiveListener: (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              B.addEventListener("testPassiveListener", null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in B,
        }),
      E = {
        isIE:
          !!B.navigator.userAgent.match(/Trident/g) ||
          !!B.navigator.userAgent.match(/MSIE/g),
        isEdge: !!B.navigator.userAgent.match(/Edge/g),
        isSafari:
          0 <= (r = B.navigator.userAgent.toLowerCase()).indexOf("safari") &&
          r.indexOf("chrome") < 0 &&
          r.indexOf("android") < 0,
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          B.navigator.userAgent
        ),
      },
      e = function (e) {
        var t = this;
        (t.params = e = void 0 === e ? {} : e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach(function (e) {
              t.on(e, t.params.on[e]);
            });
      },
      n = { components: { configurable: !0 } };
    (e.prototype.on = function (e, t, n) {
      var i = this;
      if ("function" != typeof t) return i;
      var s = n ? "unshift" : "push";
      return (
        e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][s](t);
        }),
        i
      );
    }),
      (e.prototype.once = function (n, i, e) {
        var s = this;
        return "function" != typeof i ? s : ((a.f7proxy = i), s.on(n, a, e));
        function a() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          i.apply(s, e), s.off(n, a), a.f7proxy && delete a.f7proxy;
        }
      }),
      (e.prototype.off = function (e, i) {
        var s = this;
        return (
          s.eventsListeners &&
            e.split(" ").forEach(function (n) {
              void 0 === i
                ? (s.eventsListeners[n] = [])
                : s.eventsListeners[n] &&
                  s.eventsListeners[n].length &&
                  s.eventsListeners[n].forEach(function (e, t) {
                    (e === i || (e.f7proxy && e.f7proxy === i)) &&
                      s.eventsListeners[n].splice(t, 1);
                  });
            }),
          s
        );
      }),
      (e.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n,
          i,
          s,
          a = this;
        return (
          a.eventsListeners &&
            ((s =
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (i = e.slice(1, e.length)), a)
                : ((n = e[0].events), (i = e[0].data), e[0].context || a)),
            (Array.isArray(n) ? n : n.split(" ")).forEach(function (e) {
              var t;
              a.eventsListeners &&
                a.eventsListeners[e] &&
                ((t = []),
                a.eventsListeners[e].forEach(function (e) {
                  t.push(e);
                }),
                t.forEach(function (e) {
                  e.apply(s, i);
                }));
            })),
          a
        );
      }),
      (e.prototype.useModulesParams = function (t) {
        var n = this;
        n.modules &&
          Object.keys(n.modules).forEach(function (e) {
            e = n.modules[e];
            e.params && W.extend(t, e.params);
          });
      }),
      (e.prototype.useModules = function (t) {
        void 0 === t && (t = {});
        var i = this;
        i.modules &&
          Object.keys(i.modules).forEach(function (e) {
            var n = i.modules[e],
              e = t[e] || {};
            n.instance &&
              Object.keys(n.instance).forEach(function (e) {
                var t = n.instance[e];
                i[e] = "function" == typeof t ? t.bind(i) : t;
              }),
              n.on &&
                i.on &&
                Object.keys(n.on).forEach(function (e) {
                  i.on(e, n.on[e]);
                }),
              n.create && n.create.bind(i)(e);
          });
      }),
      (n.components.set = function (e) {
        this.use && this.use(e);
      }),
      (e.installModule = function (t) {
        for (var e = [], n = arguments.length - 1; 0 < n--; )
          e[n] = arguments[n + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s =
          t.name || Object.keys(i.prototype.modules).length + "_" + W.now();
        return (
          (i.prototype.modules[s] = t).proto &&
            Object.keys(t.proto).forEach(function (e) {
              i.prototype[e] = t.proto[e];
            }),
          t.static &&
            Object.keys(t.static).forEach(function (e) {
              i[e] = t.static[e];
            }),
          t.install && t.install.apply(i, e),
          i
        );
      }),
      (e.use = function (e) {
        for (var t = [], n = arguments.length - 1; 0 < n--; )
          t[n] = arguments[n + 1];
        var i = this;
        return Array.isArray(e)
          ? (e.forEach(function (e) {
              return i.installModule(e);
            }),
            i)
          : i.installModule.apply(i, [e].concat(t));
      }),
      Object.defineProperties(e, n);
    var s,
      o,
      r,
      c = {
        updateSize: function () {
          var e = this,
            t = e.$el,
            n = void 0 !== e.params.width ? e.params.width : t[0].clientWidth,
            i =
              void 0 !== e.params.height ? e.params.height : t[0].clientHeight;
          (0 === n && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((n =
              n -
              parseInt(t.css("padding-left"), 10) -
              parseInt(t.css("padding-right"), 10)),
            (i =
              i -
              parseInt(t.css("padding-top"), 10) -
              parseInt(t.css("padding-bottom"), 10)),
            W.extend(e, {
              width: n,
              height: i,
              size: e.isHorizontal() ? n : i,
            }));
        },
        updateSlides: function () {
          var e = this,
            t = e.params,
            n = e.$wrapperEl,
            i = e.size,
            s = e.rtlTranslate,
            a = e.wrongRTL,
            o = e.virtual && t.virtual.enabled,
            r = (o ? e.virtual : e).slides.length,
            l = n.children("." + e.params.slideClass),
            c = (o ? e.virtual.slides : l).length,
            u = [],
            d = [],
            h = [],
            p = t.slidesOffsetBefore;
          "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
          var f = t.slidesOffsetAfter;
          "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
          var g,
            m = e.snapGrid.length,
            o = e.snapGrid.length,
            v = t.spaceBetween,
            y = -p,
            b = 0,
            w = 0;
          if (void 0 !== i) {
            "string" == typeof v &&
              0 <= v.indexOf("%") &&
              (v = (parseFloat(v.replace("%", "")) / 100) * i),
              (e.virtualSize = -v),
              s
                ? l.css({ marginLeft: "", marginTop: "" })
                : l.css({ marginRight: "", marginBottom: "" }),
              1 < t.slidesPerColumn &&
                ((g =
                  Math.floor(c / t.slidesPerColumn) ===
                  c / e.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (g = Math.max(g, t.slidesPerView * t.slidesPerColumn)));
            for (
              var x,
                T,
                C = t.slidesPerColumn,
                E = g / C,
                S = Math.floor(c / t.slidesPerColumn),
                _ = 0;
              _ < c;
              _ += 1
            ) {
              P = 0;
              var k,
                $,
                A,
                P,
                D,
                M,
                I,
                L,
                O,
                N,
                j = l.eq(_);
              1 < t.slidesPerColumn &&
                ((A = $ = k = void 0),
                "column" === t.slidesPerColumnFill
                  ? ((A = _ - ($ = Math.floor(_ / C)) * C),
                    (S < $ || ($ === S && A === C - 1)) &&
                      C <= (A += 1) &&
                      ((A = 0), ($ += 1)),
                    j.css({
                      "-webkit-box-ordinal-group": (k = $ + (A * g) / C),
                      "-moz-box-ordinal-group": k,
                      "-ms-flex-order": k,
                      "-webkit-order": k,
                      order: k,
                    }))
                  : ($ = _ - (A = Math.floor(_ / E)) * E),
                j
                  .css(
                    "margin-" + (e.isHorizontal() ? "top" : "left"),
                    0 !== A && t.spaceBetween && t.spaceBetween + "px"
                  )
                  .attr("data-swiper-column", $)
                  .attr("data-swiper-row", A)),
                "none" !== j.css("display") &&
                  ("auto" === t.slidesPerView
                    ? ((N = B.getComputedStyle(j[0], null)),
                      (k = j[0].style.transform),
                      ($ = j[0].style.webkitTransform),
                      k && (j[0].style.transform = "none"),
                      $ && (j[0].style.webkitTransform = "none"),
                      (P = t.roundLengths
                        ? e.isHorizontal()
                          ? j.outerWidth(!0)
                          : j.outerHeight(!0)
                        : e.isHorizontal()
                        ? ((D = parseFloat(N.getPropertyValue("width"))),
                          (M = parseFloat(N.getPropertyValue("padding-left"))),
                          (I = parseFloat(N.getPropertyValue("padding-right"))),
                          (L = parseFloat(N.getPropertyValue("margin-left"))),
                          (O = parseFloat(N.getPropertyValue("margin-right"))),
                          (A = N.getPropertyValue("box-sizing")) &&
                          "border-box" === A
                            ? D + L + O
                            : D + M + I + L + O)
                        : ((D = parseFloat(N.getPropertyValue("height"))),
                          (M = parseFloat(N.getPropertyValue("padding-top"))),
                          (I = parseFloat(
                            N.getPropertyValue("padding-bottom")
                          )),
                          (L = parseFloat(N.getPropertyValue("margin-top"))),
                          (O = parseFloat(N.getPropertyValue("margin-bottom"))),
                          (N = N.getPropertyValue("box-sizing")) &&
                          "border-box" === N
                            ? D + L + O
                            : D + M + I + L + O)),
                      k && (j[0].style.transform = k),
                      $ && (j[0].style.webkitTransform = $),
                      t.roundLengths && (P = Math.floor(P)))
                    : ((P = (i - (t.slidesPerView - 1) * v) / t.slidesPerView),
                      t.roundLengths && (P = Math.floor(P)),
                      l[_] &&
                        (e.isHorizontal()
                          ? (l[_].style.width = P + "px")
                          : (l[_].style.height = P + "px"))),
                  l[_] && (l[_].swiperSlideSize = P),
                  h.push(P),
                  t.centeredSlides
                    ? ((y = y + P / 2 + b / 2 + v),
                      0 === b && 0 !== _ && (y = y - i / 2 - v),
                      0 === _ && (y = y - i / 2 - v),
                      Math.abs(y) < 0.001 && (y = 0),
                      t.roundLengths && (y = Math.floor(y)),
                      w % t.slidesPerGroup == 0 && u.push(y),
                      d.push(y))
                    : (t.roundLengths && (y = Math.floor(y)),
                      w % t.slidesPerGroup == 0 && u.push(y),
                      d.push(y),
                      (y = y + P + v)),
                  (e.virtualSize += P + v),
                  (b = P),
                  (w += 1));
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + f),
              s &&
                a &&
                ("slide" === t.effect || "coverflow" === t.effect) &&
                n.css({ width: e.virtualSize + t.spaceBetween + "px" }),
              (X.flexbox && !t.setWrapperSize) ||
                (e.isHorizontal()
                  ? n.css({
                      width: e.virtualSize + t.spaceBetween + "px",
                    })
                  : n.css({
                      height: e.virtualSize + t.spaceBetween + "px",
                    })),
              1 < t.slidesPerColumn &&
                ((e.virtualSize = (P + t.spaceBetween) * g),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                e.isHorizontal()
                  ? n.css({
                      width: e.virtualSize + t.spaceBetween + "px",
                    })
                  : n.css({
                      height: e.virtualSize + t.spaceBetween + "px",
                    }),
                t.centeredSlides))
            ) {
              for (var z = [], F = 0; F < u.length; F += 1) {
                var q = u[F];
                t.roundLengths && (q = Math.floor(q)),
                  u[F] < e.virtualSize + u[0] && z.push(q);
              }
              u = z;
            }
            if (!t.centeredSlides) {
              z = [];
              for (var H = 0; H < u.length; H += 1) {
                var R = u[H];
                t.roundLengths && (R = Math.floor(R)),
                  u[H] <= e.virtualSize - i && z.push(R);
              }
              (u = z),
                1 <
                  Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) &&
                  u.push(e.virtualSize - i);
            }
            0 === u.length && (u = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? s
                    ? l.css({ marginLeft: v + "px" })
                    : l.css({ marginRight: v + "px" })
                  : l.css({ marginBottom: v + "px" })),
              t.centerInsufficientSlides &&
                ((x = 0),
                h.forEach(function (e) {
                  x += e + (t.spaceBetween || 0);
                }),
                (x -= t.spaceBetween) < i &&
                  ((T = (i - x) / 2),
                  u.forEach(function (e, t) {
                    u[t] = e - T;
                  }),
                  d.forEach(function (e, t) {
                    d[t] = e + T;
                  }))),
              W.extend(e, {
                slides: l,
                snapGrid: u,
                slidesGrid: d,
                slidesSizesGrid: h,
              }),
              c !== r && e.emit("slidesLengthChange"),
              u.length !== m &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              d.length !== o && e.emit("slidesGridLengthChange"),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n,
            i = this,
            s = [],
            a = 0;
          if (
            ("number" == typeof e
              ? i.setTransition(e)
              : !0 === e && i.setTransition(i.params.speed),
            "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
          )
            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
              var o = i.activeIndex + t;
              if (o > i.slides.length) break;
              s.push(i.slides.eq(o)[0]);
            }
          else s.push(i.slides.eq(i.activeIndex)[0]);
          for (t = 0; t < s.length; t += 1)
            void 0 !== s[t] && (a = a < (n = s[t].offsetHeight) ? n : a);
          a && i.$wrapperEl.css("height", a + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            i = t.slides,
            s = t.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var a = s ? e : -e;
            i.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < i.length; o += 1) {
              var r,
                l,
                c = i[o],
                u =
                  (a +
                    (n.centeredSlides ? t.minTranslate() : 0) -
                    c.swiperSlideOffset) /
                  (c.swiperSlideSize + n.spaceBetween);
              n.watchSlidesVisibility &&
                ((l = (r = -(a - c.swiperSlideOffset)) + t.slidesSizesGrid[o]),
                ((0 <= r && r < t.size) ||
                  (0 < l && l <= t.size) ||
                  (r <= 0 && l >= t.size)) &&
                  (t.visibleSlides.push(c),
                  t.visibleSlidesIndexes.push(o),
                  i.eq(o).addClass(n.slideVisibleClass))),
                (c.progress = s ? -u : u);
            }
            t.visibleSlides = C(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            s = t.progress,
            a = t.isBeginning,
            o = a,
            r = (l = t.isEnd),
            l =
              0 == i
                ? (a = !(s = 0))
                : ((a = (s = (e - t.minTranslate()) / i) <= 0), 1 <= s);
          W.extend(t, { progress: s, isBeginning: a, isEnd: l }),
            (n.watchSlidesProgress || n.watchSlidesVisibility) &&
              t.updateSlidesProgress(e),
            a && !o && t.emit("reachBeginning toEdge"),
            l && !r && t.emit("reachEnd toEdge"),
            ((o && !a) || (r && !l)) && t.emit("fromEdge"),
            t.emit("progress", s);
        },
        updateSlidesClasses: function () {
          var e = this,
            t = e.slides,
            n = e.params,
            i = e.$wrapperEl,
            s = e.activeIndex,
            a = e.realIndex,
            o = e.virtual && n.virtual.enabled;
          t.removeClass(
            n.slideActiveClass +
              " " +
              n.slideNextClass +
              " " +
              n.slidePrevClass +
              " " +
              n.slideDuplicateActiveClass +
              " " +
              n.slideDuplicateNextClass +
              " " +
              n.slideDuplicatePrevClass
          ),
            (s = o
              ? e.$wrapperEl.find(
                  "." + n.slideClass + '[data-swiper-slide-index="' + s + '"]'
                )
              : t.eq(s)).addClass(n.slideActiveClass),
            n.loop &&
              (s.hasClass(n.slideDuplicateClass)
                ? i.children(
                    "." +
                      n.slideClass +
                      ":not(." +
                      n.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      a +
                      '"]'
                  )
                : i.children(
                    "." +
                      n.slideClass +
                      "." +
                      n.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      a +
                      '"]'
                  )
              ).addClass(n.slideDuplicateActiveClass);
          a = s
            .nextAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop && 0 === a.length && (a = t.eq(0)).addClass(n.slideNextClass);
          s = s
            .prevAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop && 0 === s.length && (s = t.eq(-1)).addClass(n.slidePrevClass),
            n.loop &&
              ((a.hasClass(n.slideDuplicateClass)
                ? i.children(
                    "." +
                      n.slideClass +
                      ":not(." +
                      n.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      a.attr("data-swiper-slide-index") +
                      '"]'
                  )
                : i.children(
                    "." +
                      n.slideClass +
                      "." +
                      n.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      a.attr("data-swiper-slide-index") +
                      '"]'
                  )
              ).addClass(n.slideDuplicateNextClass),
              (s.hasClass(n.slideDuplicateClass)
                ? i.children(
                    "." +
                      n.slideClass +
                      ":not(." +
                      n.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      s.attr("data-swiper-slide-index") +
                      '"]'
                  )
                : i.children(
                    "." +
                      n.slideClass +
                      "." +
                      n.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      s.attr("data-swiper-slide-index") +
                      '"]'
                  )
              ).addClass(n.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          var t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            i = t.slidesGrid,
            s = t.snapGrid,
            a = t.params,
            o = t.activeIndex,
            r = t.realIndex,
            l = t.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var u = 0; u < i.length; u += 1)
              void 0 !== i[u + 1]
                ? n >= i[u] && n < i[u + 1] - (i[u + 1] - i[u]) / 2
                  ? (c = u)
                  : n >= i[u] && n < i[u + 1] && (c = u + 1)
                : n >= i[u] && (c = u);
            a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          (a =
            0 <= s.indexOf(n)
              ? s.indexOf(n)
              : Math.floor(c / a.slidesPerGroup)) >= s.length &&
            (a = s.length - 1),
            c !== o
              ? ((s = parseInt(
                  t.slides.eq(c).attr("data-swiper-slide-index") || c,
                  10
                )),
                W.extend(t, {
                  snapIndex: a,
                  realIndex: s,
                  previousIndex: o,
                  activeIndex: c,
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                r !== s && t.emit("realIndexChange"),
                t.emit("slideChange"))
              : a !== l && ((t.snapIndex = a), t.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this,
            n = t.params,
            i = C(e.target).closest("." + n.slideClass)[0],
            s = !1;
          if (i)
            for (var a = 0; a < t.slides.length; a += 1)
              t.slides[a] === i && (s = !0);
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  C(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = C(i).index()),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      u = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
            n = this.rtlTranslate,
            i = this.translate,
            s = this.$wrapperEl;
          if (t.virtualTranslate) return n ? -i : i;
          e = W.getTranslate(s[0], e);
          return (e = n ? -e : e) || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            i = n.rtlTranslate,
            s = n.params,
            a = n.$wrapperEl,
            o = n.progress,
            r = 0,
            l = 0;
          n.isHorizontal() ? (r = i ? -e : e) : (l = e),
            s.roundLengths && ((r = Math.floor(r)), (l = Math.floor(l))),
            s.virtualTranslate ||
              (X.transforms3d
                ? a.transform("translate3d(" + r + "px, " + l + "px, 0px)")
                : a.transform("translate(" + r + "px, " + l + "px)")),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? r : l);
          l = n.maxTranslate() - n.minTranslate();
          (0 == l ? 0 : (e - n.minTranslate()) / l) !== o &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
      },
      h = {
        slideTo: function (e, t, n, i) {
          void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
          var s = this,
            a = (e = void 0 === e ? 0 : e);
          a < 0 && (a = 0);
          var o = s.params,
            r = s.snapGrid,
            l = s.slidesGrid,
            c = s.previousIndex,
            u = s.activeIndex,
            d = s.rtlTranslate;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          e = Math.floor(a / o.slidesPerGroup);
          e >= r.length && (e = r.length - 1),
            (u || o.initialSlide || 0) === (c || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          var h,
            p = -r[e];
          if ((s.updateProgress(p), o.normalizeSlideIndex))
            for (var f = 0; f < l.length; f += 1)
              -Math.floor(100 * p) >= Math.floor(100 * l[f]) && (a = f);
          if (s.initialized && a !== u) {
            if (!s.allowSlideNext && p < s.translate && p < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              p > s.translate &&
              p > s.maxTranslate() &&
              (u || 0) !== a
            )
              return !1;
          }
          return (
            (h = u < a ? "next" : a < u ? "prev" : "reset"),
            (d && -p === s.translate) || (!d && p === s.translate)
              ? (s.updateActiveIndex(a),
                o.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                "slide" !== o.effect && s.setTranslate(p),
                "reset" != h &&
                  (s.transitionStart(n, h), s.transitionEnd(n, h)),
                !1)
              : (0 !== t && X.transition
                  ? (s.setTransition(t),
                    s.setTranslate(p),
                    s.updateActiveIndex(a),
                    s.updateSlidesClasses(),
                    s.emit("beforeTransitionStart", t, i),
                    s.transitionStart(n, h),
                    s.animating ||
                      ((s.animating = !0),
                      s.onSlideToWrapperTransitionEnd ||
                        (s.onSlideToWrapperTransitionEnd = function (e) {
                          s &&
                            !s.destroyed &&
                            e.target === this &&
                            (s.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              s.onSlideToWrapperTransitionEnd
                            ),
                            s.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              s.onSlideToWrapperTransitionEnd
                            ),
                            (s.onSlideToWrapperTransitionEnd = null),
                            delete s.onSlideToWrapperTransitionEnd,
                            s.transitionEnd(n, h));
                        }),
                      s.$wrapperEl[0].addEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      )))
                  : (s.setTransition(0),
                    s.setTranslate(p),
                    s.updateActiveIndex(a),
                    s.updateSlidesClasses(),
                    s.emit("beforeTransitionStart", t, i),
                    s.transitionStart(n, h),
                    s.transitionEnd(n, h)),
                !0)
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === t && (t = this.params.speed);
          e = void 0 === e ? 0 : e;
          return (
            this.params.loop && (e += this.loopedSlides),
            this.slideTo(e, t, (n = void 0 === n ? !0 : n), i)
          );
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            a = i.animating;
          return s.loop
            ? !a &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, n))
            : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            a = i.animating,
            o = i.snapGrid,
            r = i.slidesGrid,
            l = i.rtlTranslate;
          if (s.loop) {
            if (a) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var u,
            a = c(l ? i.translate : -i.translate),
            l = o.map(c),
            a = (r.map(c), o[l.indexOf(a)], o[l.indexOf(a) - 1]);
          return (
            void 0 !== a && (u = r.indexOf(a)) < 0 && (u = i.activeIndex - 1),
            i.slideTo(u, e, t, n)
          );
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), n)
          );
        },
        slideToClosest: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i,
            s,
            a = this,
            o = a.activeIndex,
            r = Math.floor(o / a.params.slidesPerGroup);
          return (
            r < a.snapGrid.length - 1 &&
              ((i = a.rtlTranslate ? a.translate : -a.translate),
              (s = a.snapGrid[r]),
              (a.snapGrid[r + 1] - s) / 2 < i - s &&
                (o = a.params.slidesPerGroup)),
            a.slideTo(o, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            i = t.$wrapperEl,
            s =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            a = t.clickedIndex;
          n.loop
            ? t.animating ||
              ((e = parseInt(
                C(t.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
              n.centeredSlides
                ? a < t.loopedSlides - s / 2 ||
                  a > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (a = i
                      .children(
                        "." +
                          n.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    W.nextTick(function () {
                      t.slideTo(a);
                    }))
                  : t.slideTo(a)
                : a > t.slides.length - s
                ? (t.loopFix(),
                  (a = i
                    .children(
                      "." +
                        n.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        n.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  W.nextTick(function () {
                    t.slideTo(a);
                  }))
                : t.slideTo(a))
            : t.slideTo(a);
        },
      },
      p = {
        loopCreate: function () {
          var i = this,
            e = i.params,
            t = i.$wrapperEl;
          t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
          var s = t.children("." + e.slideClass);
          if (e.loopFillGroupWithBlank) {
            var n = e.slidesPerGroup - (s.length % e.slidesPerGroup);
            if (n !== e.slidesPerGroup) {
              for (var a = 0; a < n; a += 1) {
                var o = C(d.createElement("div")).addClass(
                  e.slideClass + " " + e.slideBlankClass
                );
                t.append(o);
              }
              s = t.children("." + e.slideClass);
            }
          }
          "auto" !== e.slidesPerView ||
            e.loopedSlides ||
            (e.loopedSlides = s.length),
            (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
            (i.loopedSlides += e.loopAdditionalSlides),
            i.loopedSlides > s.length && (i.loopedSlides = s.length);
          var r = [],
            l = [];
          s.each(function (e, t) {
            var n = C(t);
            e < i.loopedSlides && l.push(t),
              e < s.length && e >= s.length - i.loopedSlides && r.push(t),
              n.attr("data-swiper-slide-index", e);
          });
          for (var c = 0; c < l.length; c += 1)
            t.append(C(l[c].cloneNode(!0)).addClass(e.slideDuplicateClass));
          for (var u = r.length - 1; 0 <= u; --u)
            t.prepend(C(r[u].cloneNode(!0)).addClass(e.slideDuplicateClass));
        },
        loopFix: function () {
          var e,
            t = this,
            n = t.params,
            i = t.activeIndex,
            s = t.slides,
            a = t.loopedSlides,
            o = t.allowSlidePrev,
            r = t.allowSlideNext,
            l = t.snapGrid,
            c = t.rtlTranslate;
          (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
          l = -l[i] - t.getTranslate();
          i < a
            ? ((e = s.length - 3 * a + i),
              t.slideTo((e += a), 0, !1, !0) &&
                0 != l &&
                t.setTranslate((c ? -t.translate : t.translate) - l))
            : (("auto" === n.slidesPerView && 2 * a <= i) ||
                i >= s.length - a) &&
              ((e = -s.length + i + a),
              t.slideTo((e += a), 0, !1, !0) &&
                0 != l &&
                t.setTranslate((c ? -t.translate : t.translate) - l)),
            (t.allowSlidePrev = o),
            (t.allowSlideNext = r);
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            n = this.slides;
          e
            .children(
              "." +
                t.slideClass +
                "." +
                t.slideDuplicateClass +
                ",." +
                t.slideClass +
                "." +
                t.slideBlankClass
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      },
      f = {
        setGrabCursor: function (e) {
          var t;
          X.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            (((t = this.el).style.cursor = "move"),
            (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (t.style.cursor = e ? "grabbing" : "grab"));
        },
        unsetGrabCursor: function () {
          X.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            (this.el.style.cursor = "");
        },
      },
      g = {
        appendSlide: function (e) {
          var t = this,
            n = t.$wrapperEl,
            i = t.params;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && n.append(e[s]);
          else n.append(e);
          i.loop && t.loopCreate(), (i.observer && X.observer) || t.update();
        },
        prependSlide: function (e) {
          var t = this,
            n = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          n.loop && t.loopDestroy();
          var a = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
            a = s + e.length;
          } else i.prepend(e);
          n.loop && t.loopCreate(),
            (n.observer && X.observer) || t.update(),
            t.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var n = this,
            i = n.$wrapperEl,
            s = n.params,
            a = n.activeIndex;
          s.loop &&
            ((a -= n.loopedSlides),
            n.loopDestroy(),
            (n.slides = i.children("." + s.slideClass)));
          var o = n.slides.length;
          if (e <= 0) n.prependSlide(t);
          else if (o <= e) n.appendSlide(t);
          else {
            for (var r = e < a ? a + 1 : a, l = [], c = o - 1; e <= c; --c) {
              var u = n.slides.eq(c);
              u.remove(), l.unshift(u);
            }
            if ("object" == typeof t && "length" in t) {
              for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
              r = e < a ? a + t.length : a;
            } else i.append(t);
            for (var h = 0; h < l.length; h += 1) i.append(l[h]);
            s.loop && n.loopCreate(),
              (s.observer && X.observer) || n.update(),
              s.loop
                ? n.slideTo(r + n.loopedSlides, 0, !1)
                : n.slideTo(r, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this,
            n = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
          n.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children("." + n.slideClass)));
          var a,
            o = s;
          if ("object" == typeof e && "length" in e) {
            for (var r = 0; r < e.length; r += 1)
              (a = e[r]), t.slides[a] && t.slides.eq(a).remove(), a < o && --o;
            o = Math.max(o, 0);
          } else
            t.slides[(a = e)] && t.slides.eq(a).remove(),
              a < o && --o,
              (o = Math.max(o, 0));
          n.loop && t.loopCreate(),
            (n.observer && X.observer) || t.update(),
            n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      m =
        ((S = B.navigator.userAgent),
        (_ = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: B.cordova || B.phonegap,
          phonegap: B.cordova || B.phonegap,
        }),
        (s = S.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)),
        (o = S.match(/(Android);?[\s\/]+([\d.]+)?/)),
        (T = S.match(/(iPad).*OS\s([\d_]+)/)),
        (r = S.match(/(iPod)(.*OS\s([\d_]+))?/)),
        (n = !T && S.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
        s && ((_.os = "windows"), (_.osVersion = s[2]), (_.windows = !0)),
        o &&
          !s &&
          ((_.os = "android"),
          (_.osVersion = o[2]),
          (_.android = !0),
          (_.androidChrome = 0 <= S.toLowerCase().indexOf("chrome"))),
        (T || n || r) && ((_.os = "ios"), (_.ios = !0)),
        n && !r && ((_.osVersion = n[2].replace(/_/g, ".")), (_.iphone = !0)),
        T && ((_.osVersion = T[2].replace(/_/g, ".")), (_.ipad = !0)),
        r &&
          ((_.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
          (_.iphone = !0)),
        _.ios &&
          _.osVersion &&
          0 <= S.indexOf("Version/index.html") &&
          "10" === _.osVersion.split(".")[0] &&
          (_.osVersion = S.toLowerCase()
            .split("version/index-2.html")[1]
            .split(" ")[0]),
        (_.desktop = !(_.os || _.android || _.webView)),
        (_.webView = (n || T || r) && S.match(/.*AppleWebKit(?!.*Safari)/i)),
        _.os &&
          "ios" === _.os &&
          ((T = _.osVersion.split(".")),
          (S = d.querySelector('meta[name="viewport"]')),
          (_.minimalUi =
            !_.webView &&
            (r || n) &&
            (7 == +T[0] ? 1 <= +T[1] : 7 < +T[0]) &&
            S &&
            0 <= S.getAttribute("content").indexOf("minimal-ui"))),
        (_.pixelRatio = B.devicePixelRatio || 1),
        _);
    function v() {
      var e,
        t,
        n,
        i = this,
        s = i.params,
        a = i.el;
      (a && 0 === a.offsetWidth) ||
        (s.breakpoints && i.setBreakpoint(),
        (e = i.allowSlideNext),
        (t = i.allowSlidePrev),
        (n = i.snapGrid),
        (i.allowSlideNext = !0),
        (i.allowSlidePrev = !0),
        i.updateSize(),
        i.updateSlides(),
        s.freeMode
          ? ((a = Math.min(
              Math.max(i.translate, i.maxTranslate()),
              i.minTranslate()
            )),
            i.setTranslate(a),
            i.updateActiveIndex(),
            i.updateSlidesClasses(),
            s.autoHeight && i.updateAutoHeight())
          : (i.updateSlidesClasses(),
            ("auto" === s.slidesPerView || 1 < s.slidesPerView) &&
            i.isEnd &&
            !i.params.centeredSlides
              ? i.slideTo(i.slides.length - 1, 0, !1, !0)
              : i.slideTo(i.activeIndex, 0, !1, !0)),
        (i.allowSlidePrev = t),
        (i.allowSlideNext = e),
        i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow());
    }
    var y = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      },
      b = {
        update: c,
        translate: u,
        transition: {
          setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              s = n.params,
              a = n.previousIndex;
            s.autoHeight && n.updateAutoHeight();
            t = t || (a < i ? "next" : i < a ? "prev" : "reset");
            n.emit("transitionStart"),
              e &&
                i !== a &&
                ("reset" !== t
                  ? (n.emit("slideChangeTransitionStart"),
                    "next" === t
                      ? n.emit("slideNextTransitionStart")
                      : n.emit("slidePrevTransitionStart"))
                  : n.emit("slideResetTransitionStart"));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              s = n.previousIndex;
            (n.animating = !1), n.setTransition(0);
            t = t || (s < i ? "next" : i < s ? "prev" : "reset");
            n.emit("transitionEnd"),
              e &&
                i !== s &&
                ("reset" !== t
                  ? (n.emit("slideChangeTransitionEnd"),
                    "next" === t
                      ? n.emit("slideNextTransitionEnd")
                      : n.emit("slidePrevTransitionEnd"))
                  : n.emit("slideResetTransitionEnd"));
          },
        },
        slide: h,
        loop: p,
        grabCursor: f,
        manipulation: g,
        events: {
          attachEvents: function () {
            var e = this,
              t = e.params,
              n = e.touchEvents,
              i = e.el,
              s = e.wrapperEl;
            (e.onTouchStart = function (e) {
              var t,
                n,
                i,
                s,
                a = this,
                o = a.touchEventsData,
                r = a.params,
                l = a.touches;
              (a.animating && r.preventInteractionOnTransition) ||
                ((t = e).originalEvent && (t = t.originalEvent),
                (o.isTouchEvent = "touchstart" === t.type),
                (!o.isTouchEvent && "which" in t && 3 === t.which) ||
                  (!o.isTouchEvent && "button" in t && 0 < t.button) ||
                  (o.isTouched && o.isMoved) ||
                  (r.noSwiping &&
                  C(t.target).closest(
                    r.noSwipingSelector || "." + r.noSwipingClass
                  )[0]
                    ? (a.allowClick = !0)
                    : (r.swipeHandler && !C(t).closest(r.swipeHandler)[0]) ||
                      ((l.currentX = (
                        "touchstart" === t.type ? t.targetTouches[0] : t
                      ).pageX),
                      (l.currentY = (
                        "touchstart" === t.type ? t.targetTouches[0] : t
                      ).pageY),
                      (n = l.currentX),
                      (s = l.currentY),
                      (i = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection),
                      (e = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold),
                      (i && (n <= e || n >= B.screen.width - e)) ||
                        (W.extend(o, {
                          isTouched: !0,
                          isMoved: !1,
                          allowTouchCallbacks: !0,
                          isScrolling: void 0,
                          startMoving: void 0,
                        }),
                        (l.startX = n),
                        (l.startY = s),
                        (o.touchStartTime = W.now()),
                        (a.allowClick = !0),
                        a.updateSize(),
                        (a.swipeDirection = void 0),
                        0 < r.threshold && (o.allowThresholdMove = !1),
                        "touchstart" !== t.type &&
                          ((s = !0),
                          C(t.target).is(o.formElements) && (s = !1),
                          d.activeElement &&
                            C(d.activeElement).is(o.formElements) &&
                            d.activeElement !== t.target &&
                            d.activeElement.blur(),
                          (s =
                            s &&
                            a.allowTouchMove &&
                            r.touchStartPreventDefault),
                          (r.touchStartForcePreventDefault || s) &&
                            t.preventDefault()),
                        a.emit("touchStart", t)))));
            }.bind(e)),
              (e.onTouchMove = function (e) {
                var t = this,
                  n = t.touchEventsData,
                  i = t.params,
                  s = t.touches,
                  a = t.rtlTranslate,
                  o = e;
                if ((o.originalEvent && (o = o.originalEvent), n.isTouched)) {
                  if (!n.isTouchEvent || "mousemove" !== o.type) {
                    var r = ("touchmove" === o.type ? o.targetTouches[0] : o)
                        .pageX,
                      l = ("touchmove" === o.type ? o.targetTouches[0] : o)
                        .pageY;
                    if (o.preventedByNestedSwiper)
                      return (s.startX = r), void (s.startY = l);
                    if (!t.allowTouchMove)
                      return (
                        (t.allowClick = !1),
                        void (
                          n.isTouched &&
                          (W.extend(s, {
                            startX: r,
                            startY: l,
                            currentX: r,
                            currentY: l,
                          }),
                          (n.touchStartTime = W.now()))
                        )
                      );
                    if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                      if (t.isVertical()) {
                        if (
                          (l < s.startY && t.translate <= t.maxTranslate()) ||
                          (l > s.startY && t.translate >= t.minTranslate())
                        )
                          return (n.isTouched = !1), void (n.isMoved = !1);
                      } else if (
                        (r < s.startX && t.translate <= t.maxTranslate()) ||
                        (r > s.startX && t.translate >= t.minTranslate())
                      )
                        return;
                    if (
                      n.isTouchEvent &&
                      d.activeElement &&
                      o.target === d.activeElement &&
                      C(o.target).is(n.formElements)
                    )
                      return (n.isMoved = !0), void (t.allowClick = !1);
                    if (
                      (n.allowTouchCallbacks && t.emit("touchMove", o),
                      !(o.targetTouches && 1 < o.targetTouches.length))
                    ) {
                      (s.currentX = r), (s.currentY = l);
                      (e = s.currentX - s.startX), (r = s.currentY - s.startY);
                      if (
                        !(
                          t.params.threshold &&
                          Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) <
                            t.params.threshold
                        )
                      )
                        if (
                          (void 0 === n.isScrolling &&
                            ((t.isHorizontal() && s.currentY === s.startY) ||
                            (t.isVertical() && s.currentX === s.startX)
                              ? (n.isScrolling = !1)
                              : 25 <= e * e + r * r &&
                                ((l =
                                  (180 * Math.atan2(Math.abs(r), Math.abs(e))) /
                                  Math.PI),
                                (n.isScrolling = t.isHorizontal()
                                  ? l > i.touchAngle
                                  : 90 - l > i.touchAngle))),
                          n.isScrolling && t.emit("touchMoveOpposite", o),
                          void 0 === n.startMoving &&
                            ((s.currentX === s.startX &&
                              s.currentY === s.startY) ||
                              (n.startMoving = !0)),
                          n.isScrolling)
                        )
                          n.isTouched = !1;
                        else if (n.startMoving) {
                          (t.allowClick = !1),
                            o.preventDefault(),
                            i.touchMoveStopPropagation &&
                              !i.nested &&
                              o.stopPropagation(),
                            n.isMoved ||
                              (i.loop && t.loopFix(),
                              (n.startTranslate = t.getTranslate()),
                              t.setTransition(0),
                              t.animating &&
                                t.$wrapperEl.trigger(
                                  "webkitTransitionEnd transitionend"
                                ),
                              (n.allowMomentumBounce = !1),
                              !i.grabCursor ||
                                (!0 !== t.allowSlideNext &&
                                  !0 !== t.allowSlidePrev) ||
                                t.setGrabCursor(!0),
                              t.emit("sliderFirstMove", o)),
                            t.emit("sliderMove", o),
                            (n.isMoved = !0);
                          e = t.isHorizontal() ? e : r;
                          (s.diff = e),
                            (e *= i.touchRatio),
                            (t.swipeDirection =
                              0 < (e = a ? -e : e) ? "prev" : "next"),
                            (n.currentTranslate = e + n.startTranslate);
                          (r = !0), (a = i.resistanceRatio);
                          if (
                            (i.touchReleaseOnEdges && (a = 0),
                            0 < e && n.currentTranslate > t.minTranslate()
                              ? ((r = !1),
                                i.resistance &&
                                  (n.currentTranslate =
                                    t.minTranslate() -
                                    1 +
                                    Math.pow(
                                      -t.minTranslate() + n.startTranslate + e,
                                      a
                                    )))
                              : e < 0 &&
                                n.currentTranslate < t.maxTranslate() &&
                                ((r = !1),
                                i.resistance &&
                                  (n.currentTranslate =
                                    t.maxTranslate() +
                                    1 -
                                    Math.pow(
                                      t.maxTranslate() - n.startTranslate - e,
                                      a
                                    ))),
                            r && (o.preventedByNestedSwiper = !0),
                            !t.allowSlideNext &&
                              "next" === t.swipeDirection &&
                              n.currentTranslate < n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            !t.allowSlidePrev &&
                              "prev" === t.swipeDirection &&
                              n.currentTranslate > n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            0 < i.threshold)
                          ) {
                            if (
                              !(
                                Math.abs(e) > i.threshold ||
                                n.allowThresholdMove
                              )
                            )
                              return void (n.currentTranslate =
                                n.startTranslate);
                            if (!n.allowThresholdMove)
                              return (
                                (n.allowThresholdMove = !0),
                                (s.startX = s.currentX),
                                (s.startY = s.currentY),
                                (n.currentTranslate = n.startTranslate),
                                void (s.diff = t.isHorizontal()
                                  ? s.currentX - s.startX
                                  : s.currentY - s.startY)
                              );
                          }
                          i.followFinger &&
                            ((i.freeMode ||
                              i.watchSlidesProgress ||
                              i.watchSlidesVisibility) &&
                              (t.updateActiveIndex(), t.updateSlidesClasses()),
                            i.freeMode &&
                              (0 === n.velocities.length &&
                                n.velocities.push({
                                  position:
                                    s[t.isHorizontal() ? "startX" : "startY"],
                                  time: n.touchStartTime,
                                }),
                              n.velocities.push({
                                position:
                                  s[t.isHorizontal() ? "currentX" : "currentY"],
                                time: W.now(),
                              })),
                            t.updateProgress(n.currentTranslate),
                            t.setTranslate(n.currentTranslate));
                        }
                    }
                  }
                } else
                  n.startMoving &&
                    n.isScrolling &&
                    t.emit("touchMoveOpposite", o);
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                var t = this,
                  n = t.touchEventsData,
                  i = t.params,
                  s = t.touches,
                  a = t.rtlTranslate,
                  o = t.$wrapperEl,
                  r = t.slidesGrid,
                  l = t.snapGrid,
                  c = e;
                if (
                  (c.originalEvent && (c = c.originalEvent),
                  n.allowTouchCallbacks && t.emit("touchEnd", c),
                  (n.allowTouchCallbacks = !1),
                  !n.isTouched)
                )
                  return (
                    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                i.grabCursor &&
                  n.isMoved &&
                  n.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                var u,
                  d = W.now(),
                  e = d - n.touchStartTime;
                if (
                  (t.allowClick &&
                    (t.updateClickedSlide(c),
                    t.emit("tap", c),
                    e < 300 &&
                      300 < d - n.lastClickTime &&
                      (n.clickTimeout && clearTimeout(n.clickTimeout),
                      (n.clickTimeout = W.nextTick(function () {
                        t && !t.destroyed && t.emit("click", c);
                      }, 300))),
                    e < 300 &&
                      d - n.lastClickTime < 300 &&
                      (n.clickTimeout && clearTimeout(n.clickTimeout),
                      t.emit("doubleTap", c))),
                  (n.lastClickTime = W.now()),
                  W.nextTick(function () {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !n.isTouched ||
                    !n.isMoved ||
                    !t.swipeDirection ||
                    0 === s.diff ||
                    n.currentTranslate === n.startTranslate)
                )
                  return (
                    (n.isTouched = !1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                if (
                  ((n.isTouched = !1),
                  (n.isMoved = !1),
                  (n.startMoving = !1),
                  (u = i.followFinger
                    ? a
                      ? t.translate
                      : -t.translate
                    : -n.currentTranslate),
                  i.freeMode)
                )
                  if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                  else if (u > -t.maxTranslate())
                    t.slides.length < l.length
                      ? t.slideTo(l.length - 1)
                      : t.slideTo(t.slides.length - 1);
                  else {
                    if (i.freeModeMomentum) {
                      1 < n.velocities.length
                        ? ((v = n.velocities.pop()),
                          (p = n.velocities.pop()),
                          (h = v.position - p.position),
                          (p = v.time - p.time),
                          (t.velocity = h / p),
                          (t.velocity /= 2),
                          Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                            (t.velocity = 0),
                          (150 < p || 300 < W.now() - v.time) &&
                            (t.velocity = 0))
                        : (t.velocity = 0),
                        (t.velocity *= i.freeModeMomentumVelocityRatio),
                        (n.velocities.length = 0);
                      var h = 1e3 * i.freeModeMomentumRatio,
                        p = t.velocity * h,
                        f = t.translate + p;
                      a && (f = -f);
                      var g,
                        m,
                        v = !1,
                        p =
                          20 *
                          Math.abs(t.velocity) *
                          i.freeModeMomentumBounceRatio;
                      if (f < t.maxTranslate())
                        i.freeModeMomentumBounce
                          ? (f + t.maxTranslate() < -p &&
                              (f = t.maxTranslate() - p),
                            (g = t.maxTranslate()),
                            (n.allowMomentumBounce = v = !0))
                          : (f = t.maxTranslate()),
                          i.loop && i.centeredSlides && (m = !0);
                      else if (f > t.minTranslate())
                        i.freeModeMomentumBounce
                          ? (f - t.minTranslate() > p &&
                              (f = t.minTranslate() + p),
                            (g = t.minTranslate()),
                            (n.allowMomentumBounce = v = !0))
                          : (f = t.minTranslate()),
                          i.loop && i.centeredSlides && (m = !0);
                      else if (i.freeModeSticky) {
                        for (var y, b = 0; b < l.length; b += 1)
                          if (l[b] > -f) {
                            y = b;
                            break;
                          }
                        f = -(Math.abs(l[y] - f) < Math.abs(l[y - 1] - f) ||
                        "next" === t.swipeDirection
                          ? l[y]
                          : l[y - 1]);
                      }
                      if (
                        (m &&
                          t.once("transitionEnd", function () {
                            t.loopFix();
                          }),
                        0 !== t.velocity)
                      )
                        h = a
                          ? Math.abs((-f - t.translate) / t.velocity)
                          : Math.abs((f - t.translate) / t.velocity);
                      else if (i.freeModeSticky) return void t.slideToClosest();
                      i.freeModeMomentumBounce && v
                        ? (t.updateProgress(g),
                          t.setTransition(h),
                          t.setTranslate(f),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          o.transitionEnd(function () {
                            t &&
                              !t.destroyed &&
                              n.allowMomentumBounce &&
                              (t.emit("momentumBounce"),
                              t.setTransition(i.speed),
                              t.setTranslate(g),
                              o.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd();
                              }));
                          }))
                        : t.velocity
                        ? (t.updateProgress(f),
                          t.setTransition(h),
                          t.setTranslate(f),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                            ((t.animating = !0),
                            o.transitionEnd(function () {
                              t && !t.destroyed && t.transitionEnd();
                            })))
                        : t.updateProgress(f),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || e >= i.longSwipesMs) &&
                      (t.updateProgress(),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses());
                  }
                else {
                  for (
                    var w = 0, x = t.slidesSizesGrid[0], T = 0;
                    T < r.length;
                    T += i.slidesPerGroup
                  )
                    void 0 !== r[T + i.slidesPerGroup]
                      ? u >= r[T] &&
                        u < r[T + i.slidesPerGroup] &&
                        (x = r[(w = T) + i.slidesPerGroup] - r[T])
                      : u >= r[T] &&
                        ((w = T), (x = r[r.length - 1] - r[r.length - 2]));
                  h = (u - r[w]) / x;
                  e > i.longSwipesMs
                    ? i.longSwipes
                      ? ("next" === t.swipeDirection &&
                          (h >= i.longSwipesRatio
                            ? t.slideTo(w + i.slidesPerGroup)
                            : t.slideTo(w)),
                        "prev" === t.swipeDirection &&
                          (h > 1 - i.longSwipesRatio
                            ? t.slideTo(w + i.slidesPerGroup)
                            : t.slideTo(w)))
                      : t.slideTo(t.activeIndex)
                    : i.shortSwipes
                    ? ("next" === t.swipeDirection &&
                        t.slideTo(w + i.slidesPerGroup),
                      "prev" === t.swipeDirection && t.slideTo(w))
                    : t.slideTo(t.activeIndex);
                }
              }.bind(e)),
              (e.onClick = function (e) {
                this.allowClick ||
                  (this.params.preventClicks && e.preventDefault(),
                  this.params.preventClicksPropagation &&
                    this.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(e));
            var a = "container" === t.touchEventsTarget ? i : s,
              i = !!t.nested;
            X.touch || (!X.pointerEvents && !X.prefixedPointerEvents)
              ? (X.touch &&
                  ((s = !(
                    "touchstart" !== n.start ||
                    !X.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  a.addEventListener(n.start, e.onTouchStart, s),
                  a.addEventListener(
                    n.move,
                    e.onTouchMove,
                    X.passiveListener ? { passive: !1, capture: i } : i
                  ),
                  a.addEventListener(n.end, e.onTouchEnd, s)),
                ((t.simulateTouch && !m.ios && !m.android) ||
                  (t.simulateTouch && !X.touch && m.ios)) &&
                  (a.addEventListener("mousedown", e.onTouchStart, !1),
                  d.addEventListener("mousemove", e.onTouchMove, i),
                  d.addEventListener("mouseup", e.onTouchEnd, !1)))
              : (a.addEventListener(n.start, e.onTouchStart, !1),
                d.addEventListener(n.move, e.onTouchMove, i),
                d.addEventListener(n.end, e.onTouchEnd, !1)),
              (t.preventClicks || t.preventClicksPropagation) &&
                a.addEventListener("click", e.onClick, !0),
              e.on(
                m.ios || m.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                v,
                !0
              );
          },
          detachEvents: function () {
            var e = this,
              t = e.params,
              n = e.touchEvents,
              i = e.el,
              s = e.wrapperEl,
              a = "container" === t.touchEventsTarget ? i : s,
              i = !!t.nested;
            X.touch || (!X.pointerEvents && !X.prefixedPointerEvents)
              ? (X.touch &&
                  ((s = !(
                    "onTouchStart" !== n.start ||
                    !X.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  a.removeEventListener(n.start, e.onTouchStart, s),
                  a.removeEventListener(n.move, e.onTouchMove, i),
                  a.removeEventListener(n.end, e.onTouchEnd, s)),
                ((t.simulateTouch && !m.ios && !m.android) ||
                  (t.simulateTouch && !X.touch && m.ios)) &&
                  (a.removeEventListener("mousedown", e.onTouchStart, !1),
                  d.removeEventListener("mousemove", e.onTouchMove, i),
                  d.removeEventListener("mouseup", e.onTouchEnd, !1)))
              : (a.removeEventListener(n.start, e.onTouchStart, !1),
                d.removeEventListener(n.move, e.onTouchMove, i),
                d.removeEventListener(n.end, e.onTouchEnd, !1)),
              (t.preventClicks || t.preventClicksPropagation) &&
                a.removeEventListener("click", e.onClick, !0),
              e.off(
                m.ios || m.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                v
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
              t = e.activeIndex,
              n = e.initialized,
              i = e.loopedSlides;
            void 0 === i && (i = 0);
            var s,
              a,
              o,
              r = e.params,
              l = r.breakpoints;
            !l ||
              (l && 0 === Object.keys(l).length) ||
              ((s = e.getBreakpoint(l)) &&
                e.currentBreakpoint !== s &&
                ((a = s in l ? l[s] : void 0) &&
                  ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                    function (e) {
                      var t = a[e];
                      void 0 !== t &&
                        (a[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    }
                  ),
                (l =
                  (o = a || e.originalParams).direction &&
                  o.direction !== r.direction),
                (r = r.loop && (o.slidesPerView !== r.slidesPerView || l)),
                l && n && e.changeDirection(),
                W.extend(e.params, o),
                W.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = s),
                r &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", o)));
          },
          getBreakpoint: function (e) {
            if (e) {
              var t = !1,
                n = [];
              Object.keys(e).forEach(function (e) {
                n.push(e);
              }),
                n.sort(function (e, t) {
                  return parseInt(e, 10) - parseInt(t, 10);
                });
              for (var i = 0; i < n.length; i += 1) {
                var s = n[i];
                this.params.breakpointsInverse
                  ? s <= B.innerWidth && (t = s)
                  : s >= B.innerWidth && !t && (t = s);
              }
              return t || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.isLocked;
            (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var t = this.classNames,
              n = this.params,
              e = this.rtl,
              i = this.$el,
              s = [];
            s.push("initialized"),
              s.push(n.direction),
              n.freeMode && s.push("free-mode"),
              X.flexbox || s.push("no-flexbox"),
              n.autoHeight && s.push("autoheight"),
              e && s.push("rtl"),
              1 < n.slidesPerColumn && s.push("multirow"),
              m.android && s.push("android"),
              m.ios && s.push("ios"),
              (E.isIE || E.isEdge) &&
                (X.pointerEvents || X.prefixedPointerEvents) &&
                s.push("wp8-" + n.direction),
              s.forEach(function (e) {
                t.push(n.containerModifierClass + e);
              }),
              i.addClass(t.join(" "));
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" "));
          },
        },
        images: {
          loadImage: function (e, t, n, i, s, a) {
            function o() {
              a && a();
            }
            (!e.complete || !s) && t
              ? (((s = new B.Image()).onload = o),
                (s.onerror = o),
                i && (s.sizes = i),
                n && (s.srcset = n),
                t && (s.src = t))
              : o();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var n = 0; n < e.imagesToLoad.length; n += 1) {
              var i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      w = {},
      x = (function (l) {
        function c() {
          for (var e, n, t = [], i = arguments.length; i--; )
            t[i] = arguments[i];
          (n =
            (n =
              1 === t.length && t[0].constructor && t[0].constructor === Object
                ? t[0]
                : ((e = t[0]), t[1])) || {}),
            (n = W.extend({}, n)),
            e && !n.el && (n.el = e),
            l.call(this, n),
            Object.keys(b).forEach(function (t) {
              Object.keys(b[t]).forEach(function (e) {
                c.prototype[e] || (c.prototype[e] = b[t][e]);
              });
            });
          var s = this;
          void 0 === s.modules && (s.modules = {}),
            Object.keys(s.modules).forEach(function (e) {
              var t = s.modules[e];
              t.params &&
                ((e = Object.keys(t.params)[0]),
                "object" == typeof (t = t.params[e]) &&
                  null !== t &&
                  e in n &&
                  "enabled" in t &&
                  (!0 === n[e] && (n[e] = { enabled: !0 }),
                  "object" != typeof n[e] ||
                    "enabled" in n[e] ||
                    (n[e].enabled = !0),
                  n[e] || (n[e] = { enabled: !1 })));
            });
          var a = W.extend({}, y);
          s.useModulesParams(a),
            (s.params = W.extend({}, a, w, n)),
            (s.originalParams = W.extend({}, s.params)),
            (s.passedParams = W.extend({}, n));
          var o = (s.$ = C)(s.params.el);
          if ((e = o[0])) {
            if (1 < o.length) {
              var r = [];
              return (
                o.each(function (e, t) {
                  t = W.extend({}, n, { el: t });
                  r.push(new c(t));
                }),
                r
              );
            }
            (e.swiper = s), o.data("swiper", s);
            var a = o.children("." + s.params.wrapperClass);
            return (
              W.extend(s, {
                $el: o,
                el: e,
                $wrapperEl: a,
                wrapperEl: a[0],
                classNames: [],
                slides: C(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
                rtlTranslate:
                  "horizontal" === s.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === o.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents:
                  ((o = ["mousedown", "mousemove", "mouseup"]),
                  X.pointerEvents
                    ? (o = ["pointerdown", "pointermove", "pointerup"])
                    : X.prefixedPointerEvents &&
                      (o = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                  (s.touchEventsTouch = {
                    start: (a = ["touchstart", "touchmove", "touchend"])[0],
                    move: a[1],
                    end: a[2],
                  }),
                  (s.touchEventsDesktop = {
                    start: o[0],
                    move: o[1],
                    end: o[2],
                  }),
                  X.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video",
                  lastClickTime: W.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.useModules(),
              s.params.init && s.init(),
              s
            );
          }
        }
        l && (c.__proto__ = l);
        var e = {
          extendedDefaults: { configurable: !0 },
          defaults: { configurable: !0 },
          Class: { configurable: !0 },
          $: { configurable: !0 },
        };
        return (
          (((c.prototype = Object.create(l && l.prototype)).constructor =
            c).prototype.slidesPerViewDynamic = function () {
            var e = this.params,
              t = this.slides,
              n = this.slidesGrid,
              i = this.size,
              s = this.activeIndex,
              a = 1;
            if (e.centeredSlides) {
              for (
                var o, r = t[s].swiperSlideSize, l = s + 1;
                l < t.length;
                l += 1
              )
                t[l] &&
                  !o &&
                  ((a += 1), i < (r += t[l].swiperSlideSize) && (o = !0));
              for (var c = s - 1; 0 <= c; --c)
                t[c] &&
                  !o &&
                  ((a += 1), i < (r += t[c].swiperSlideSize) && (o = !0));
            } else
              for (var u = s + 1; u < t.length; u += 1)
                n[u] - n[s] < i && (a += 1);
            return a;
          }),
          (c.prototype.update = function () {
            var e,
              t,
              n = this;
            function i() {
              var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
              n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses();
            }
            n &&
              !n.destroyed &&
              ((e = n.snapGrid),
              (t = n.params).breakpoints && n.setBreakpoint(),
              n.updateSize(),
              n.updateSlides(),
              n.updateProgress(),
              n.updateSlidesClasses(),
              n.params.freeMode
                ? (i(), n.params.autoHeight && n.updateAutoHeight())
                : (("auto" === n.params.slidesPerView ||
                    1 < n.params.slidesPerView) &&
                  n.isEnd &&
                  !n.params.centeredSlides
                    ? n.slideTo(n.slides.length - 1, 0, !1, !0)
                    : n.slideTo(n.activeIndex, 0, !1, !0)) || i(),
              t.watchOverflow && e !== n.snapGrid && n.checkOverflow(),
              n.emit("update"));
          }),
          (c.prototype.changeDirection = function (n, e) {
            void 0 === e && (e = !0);
            var t = this,
              i = t.params.direction;
            return (
              (n = n || ("horizontal" === i ? "vertical" : "horizontal")) ===
                i ||
                ("horizontal" !== n && "vertical" !== n) ||
                ("vertical" === i &&
                  (t.$el
                    .removeClass(
                      t.params.containerModifierClass + "vertical wp8-vertical"
                    )
                    .addClass("" + t.params.containerModifierClass + n),
                  (E.isIE || E.isEdge) &&
                    (X.pointerEvents || X.prefixedPointerEvents) &&
                    t.$el.addClass(
                      t.params.containerModifierClass + "wp8-" + n
                    )),
                "horizontal" === i &&
                  (t.$el
                    .removeClass(
                      t.params.containerModifierClass +
                        "horizontal wp8-horizontal"
                    )
                    .addClass("" + t.params.containerModifierClass + n),
                  (E.isIE || E.isEdge) &&
                    (X.pointerEvents || X.prefixedPointerEvents) &&
                    t.$el.addClass(
                      t.params.containerModifierClass + "wp8-" + n
                    )),
                (t.params.direction = n),
                t.slides.each(function (e, t) {
                  "vertical" === n
                    ? (t.style.width = "")
                    : (t.style.height = "");
                }),
                t.emit("changeDirection"),
                e && t.update()),
              t
            );
          }),
          (c.prototype.init = function () {
            var e = this;
            e.initialized ||
              (e.emit("beforeInit"),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit("init"));
          }),
          (c.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var n = this,
              i = n.params,
              s = n.$el,
              a = n.$wrapperEl,
              o = n.slides;
            return (
              void 0 === n.params ||
                n.destroyed ||
                (n.emit("beforeDestroy"),
                (n.initialized = !1),
                n.detachEvents(),
                i.loop && n.loopDestroy(),
                t &&
                  (n.removeClasses(),
                  s.removeAttr("style"),
                  a.removeAttr("style"),
                  o &&
                    o.length &&
                    o
                      .removeClass(
                        [
                          i.slideVisibleClass,
                          i.slideActiveClass,
                          i.slideNextClass,
                          i.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")
                      .removeAttr("data-swiper-column")
                      .removeAttr("data-swiper-row")),
                n.emit("destroy"),
                Object.keys(n.eventsListeners).forEach(function (e) {
                  n.off(e);
                }),
                !1 !== e &&
                  ((n.$el[0].swiper = null),
                  n.$el.data("swiper", null),
                  W.deleteProps(n)),
                (n.destroyed = !0)),
              null
            );
          }),
          (c.extendDefaults = function (e) {
            W.extend(w, e);
          }),
          (e.extendedDefaults.get = function () {
            return w;
          }),
          (e.defaults.get = function () {
            return y;
          }),
          (e.Class.get = function () {
            return l;
          }),
          (e.$.get = function () {
            return C;
          }),
          Object.defineProperties(c, e),
          c
        );
      })(e),
      T = {
        name: "device",
        proto: { device: m },
        static: { device: m },
      },
      S = {
        name: "support",
        proto: { support: X },
        static: { support: X },
      },
      _ = {
        name: "browser",
        proto: { browser: E },
        static: { browser: E },
      },
      c = {
        name: "resize",
        create: function () {
          var e = this;
          W.extend(e, {
            resize: {
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            B.addEventListener("resize", this.resize.resizeHandler),
              B.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy: function () {
            B.removeEventListener("resize", this.resize.resizeHandler),
              B.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      },
      k = {
        func: B.MutationObserver || B.WebkitMutationObserver,
        attach: function (e, t) {
          void 0 === t && (t = {});
          var n = this,
            i = new k.func(function (e) {
              var t;
              1 !== e.length
                ? ((t = function () {
                    n.emit("observerUpdate", e[0]);
                  }),
                  B.requestAnimationFrame
                    ? B.requestAnimationFrame(t)
                    : B.setTimeout(t, 0))
                : n.emit("observerUpdate", e[0]);
            });
          i.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            n.observer.observers.push(i);
        },
        init: function () {
          if (X.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren,
            }),
              this.observer.attach(this.$wrapperEl[0], {
                attributes: !1,
              });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      u = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1,
        },
        create: function () {
          W.extend(this, {
            observer: {
              init: k.init.bind(this),
              attach: k.attach.bind(this),
              destroy: k.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      },
      $ = {
        update: function (e) {
          var t = this,
            n = t.params,
            i = n.slidesPerView,
            s = n.slidesPerGroup,
            a = n.centeredSlides,
            o = t.params.virtual,
            r = o.addSlidesBefore,
            l = o.addSlidesAfter,
            c = t.virtual,
            u = c.from,
            d = c.to,
            h = c.slides,
            p = c.slidesGrid,
            f = c.renderSlide,
            n = c.offset;
          t.updateActiveIndex();
          var o = t.activeIndex || 0,
            c = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            l = a
              ? ((v = Math.floor(i / 2) + s + r), Math.floor(i / 2) + s + l)
              : ((v = i + (s - 1) + r), s + l),
            g = Math.max((o || 0) - l, 0),
            m = Math.min((o || 0) + v, h.length - 1),
            v = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);
          function y() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (W.extend(t.virtual, {
              from: g,
              to: m,
              offset: v,
              slidesGrid: t.slidesGrid,
            }),
            u === g && d === m && !e)
          )
            return (
              t.slidesGrid !== p && v !== n && t.slides.css(c, v + "px"),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: v,
                from: g,
                to: m,
                slides: (function () {
                  for (var e = [], t = g; t <= m; t += 1) e.push(h[t]);
                  return e;
                })(),
              }),
              void y()
            );
          var b = [],
            w = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var x = u; x <= d; x += 1)
              (x < g || m < x) &&
                t.$wrapperEl
                  .find(
                    "." +
                      t.params.slideClass +
                      '[data-swiper-slide-index="' +
                      x +
                      '"]'
                  )
                  .remove();
          for (var T = 0; T < h.length; T += 1)
            g <= T &&
              T <= m &&
              (void 0 === d || e
                ? w.push(T)
                : (d < T && w.push(T), T < u && b.push(T)));
          w.forEach(function (e) {
            t.$wrapperEl.append(f(h[e], e));
          }),
            b
              .sort(function (e, t) {
                return t - e;
              })
              .forEach(function (e) {
                t.$wrapperEl.prepend(f(h[e], e));
              }),
            t.$wrapperEl.children(".swiper-slide").css(c, v + "px"),
            y();
        },
        renderSlide: function (e, t) {
          var n = this.params.virtual;
          if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          e = n.renderSlide
            ? C(n.renderSlide.call(this, e, t))
            : C(
                '<div class="' +
                  this.params.slideClass +
                  '" data-swiper-slide-index="' +
                  t +
                  '">' +
                  e +
                  "</div>"
              );
          return (
            e.attr("data-swiper-slide-index") ||
              e.attr("data-swiper-slide-index", t),
            n.cache && (this.virtual.cache[t] = e),
            e
          );
        },
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e)
            for (var t = 0; t < e.length; t += 1)
              e[t] && this.virtual.slides.push(e[t]);
          else this.virtual.slides.push(e);
          this.virtual.update(!0);
        },
        prependSlide: function (e) {
          var t,
            n,
            i = this.activeIndex,
            s = i + 1,
            a = 1;
          if (Array.isArray(e)) {
            for (var o = 0; o < e.length; o += 1)
              e[o] && this.virtual.slides.unshift(e[o]);
            (s = i + e.length), (a = e.length);
          } else this.virtual.slides.unshift(e);
          this.params.virtual.cache &&
            ((t = this.virtual.cache),
            (n = {}),
            Object.keys(t).forEach(function (e) {
              n[parseInt(e, 10) + a] = t[e];
            }),
            (this.virtual.cache = n)),
            this.virtual.update(!0),
            this.slideTo(s, 0);
        },
        removeSlide: function (e) {
          if (null != e) {
            var t = this.activeIndex;
            if (Array.isArray(e))
              for (var n = e.length - 1; 0 <= n; --n)
                this.virtual.slides.splice(e[n], 1),
                  this.params.virtual.cache && delete this.virtual.cache[e[n]],
                  e[n] < t && --t,
                  (t = Math.max(t, 0));
            else
              this.virtual.slides.splice(e, 1),
                this.params.virtual.cache && delete this.virtual.cache[e],
                e < t && --t,
                (t = Math.max(t, 0));
            this.virtual.update(!0), this.slideTo(t, 0);
          }
        },
        removeAllSlides: function () {
          (this.virtual.slides = []),
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0);
        },
      },
      h = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          W.extend(this, {
            virtual: {
              update: $.update.bind(this),
              appendSlide: $.appendSlide.bind(this),
              prependSlide: $.prependSlide.bind(this),
              removeSlide: $.removeSlide.bind(this),
              removeAllSlides: $.removeAllSlides.bind(this),
              renderSlide: $.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            var e;
            this.params.virtual.enabled &&
              (this.classNames.push(
                this.params.containerModifierClass + "virtual"
              ),
              W.extend(this.params, (e = { watchSlidesProgress: !0 })),
              W.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update());
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      },
      A = {
        handle: function (e) {
          var t = this,
            n = t.rtlTranslate,
            i = e,
            s =
              (i = i.originalEvent ? i.originalEvent : i).keyCode || i.charCode;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))
          )
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (d.activeElement &&
                d.activeElement.nodeName &&
                ("input" === d.activeElement.nodeName.toLowerCase() ||
                  "textarea" === d.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (37 === s || 39 === s || 38 === s || 40 === s)
            ) {
              var a = !1;
              if (
                0 < t.$el.parents("." + t.params.slideClass).length &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              var o = B.innerWidth,
                r = B.innerHeight,
                e = t.$el.offset();
              n && (e.left -= t.$el[0].scrollLeft);
              for (
                var l = [
                    [e.left, e.top],
                    [e.left + t.width, e.top],
                    [e.left, e.top + t.height],
                    [e.left + t.width, e.top + t.height],
                  ],
                  c = 0;
                c < l.length;
                c += 1
              ) {
                var u = l[c];
                0 <= u[0] && u[0] <= o && 0 <= u[1] && u[1] <= r && (a = !0);
              }
              if (!a) return;
            }
            t.isHorizontal()
              ? ((37 !== s && 39 !== s) ||
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                ((39 === s && !n) || (37 === s && n)) && t.slideNext(),
                ((37 === s && !n) || (39 === s && n)) && t.slidePrev())
              : ((38 !== s && 40 !== s) ||
                  (i.preventDefault
                    ? i.preventDefault()
                    : (i.returnValue = !1)),
                40 === s && t.slideNext(),
                38 === s && t.slidePrev()),
              t.emit("keyPress", s);
          }
        },
        enable: function () {
          this.keyboard.enabled ||
            (C(d).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled &&
            (C(d).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      },
      p = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function () {
          W.extend(this, {
            keyboard: {
              enabled: !1,
              enable: A.enable.bind(this),
              disable: A.disable.bind(this),
              handle: A.handle.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      },
      P = {
        lastScrollTime: W.now(),
        event:
          -1 < B.navigator.userAgent.indexOf("firefox")
            ? "DOMMouseScroll"
            : ((g = (f = "onwheel") in d) ||
                ((e = d.createElement("div")).setAttribute(f, "return;"),
                (g = "function" == typeof e[f])),
              (g =
                !g &&
                d.implementation &&
                d.implementation.hasFeature &&
                !0 !== d.implementation.hasFeature("", "")
                  ? d.implementation.hasFeature("Events.wheel", "3.0")
                  : g)
                ? "wheel"
                : "mousewheel"),
        normalize: function (e) {
          var t = 0,
            n = 0,
            i = 0,
            s = 0;
          return (
            "detail" in e && (n = e.detail),
            "wheelDelta" in e && (n = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
            (i = 10 * t),
            (s = 10 * n),
            "deltaY" in e && (s = e.deltaY),
            ((i = "deltaX" in e ? e.deltaX : i) || s) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((i *= 40), (s *= 40))
                : ((i *= 800), (s *= 800))),
            {
              spinX: (t = i && !t ? (i < 1 ? -1 : 1) : t),
              spinY: (n = s && !n ? (s < 1 ? -1 : 1) : n),
              pixelX: i,
              pixelY: s,
            }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (e) {
          var t = e,
            n = this,
            i = n.params.mousewheel;
          if (!n.mouseEntered && !i.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var s = 0,
            a = n.rtlTranslate ? -1 : 1,
            o = P.normalize(t);
          if (i.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              s = o.pixelX * a;
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              s = o.pixelY;
            }
          else
            s =
              Math.abs(o.pixelX) > Math.abs(o.pixelY)
                ? -o.pixelX * a
                : -o.pixelY;
          if (0 === s) return !0;
          if ((i.invert && (s = -s), n.params.freeMode)) {
            n.params.loop && n.loopFix();
            (e = n.getTranslate() + s * i.sensitivity),
              (a = n.isBeginning),
              (o = n.isEnd);
            if (
              ((e = e >= n.minTranslate() ? n.minTranslate() : e) <=
                n.maxTranslate() && (e = n.maxTranslate()),
              n.setTransition(0),
              n.setTranslate(e),
              n.updateProgress(),
              n.updateActiveIndex(),
              n.updateSlidesClasses(),
              ((!a && n.isBeginning) || (!o && n.isEnd)) &&
                n.updateSlidesClasses(),
              n.params.freeModeSticky &&
                (clearTimeout(n.mousewheel.timeout),
                (n.mousewheel.timeout = W.nextTick(function () {
                  n.slideToClosest();
                }, 300))),
              n.emit("scroll", t),
              n.params.autoplay &&
                n.params.autoplayDisableOnInteraction &&
                n.autoplay.stop(),
              e === n.minTranslate() || e === n.maxTranslate())
            )
              return !0;
          } else {
            if (60 < W.now() - n.mousewheel.lastScrollTime)
              if (s < 0)
                if ((n.isEnd && !n.params.loop) || n.animating) {
                  if (i.releaseOnEdges) return !0;
                } else n.slideNext(), n.emit("scroll", t);
              else if ((n.isBeginning && !n.params.loop) || n.animating) {
                if (i.releaseOnEdges) return !0;
              } else n.slidePrev(), n.emit("scroll", t);
            n.mousewheel.lastScrollTime = new B.Date().getTime();
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        },
        enable: function () {
          if (!P.event) return !1;
          if (this.mousewheel.enabled) return !1;
          var e = this.$el;
          return (
            (e =
              "container" !== this.params.mousewheel.eventsTarged
                ? C(this.params.mousewheel.eventsTarged)
                : e).on("mouseenter", this.mousewheel.handleMouseEnter),
            e.on("mouseleave", this.mousewheel.handleMouseLeave),
            e.on(P.event, this.mousewheel.handle),
            (this.mousewheel.enabled = !0)
          );
        },
        disable: function () {
          if (!P.event) return !1;
          if (!this.mousewheel.enabled) return !1;
          var e = this.$el;
          return (
            (e =
              "container" !== this.params.mousewheel.eventsTarged
                ? C(this.params.mousewheel.eventsTarged)
                : e).off(P.event, this.mousewheel.handle),
            !(this.mousewheel.enabled = !1)
          );
        },
      },
      D = {
        update: function () {
          var e,
            t,
            n = this.params.navigation;
          this.params.loop ||
            ((e = (t = this.navigation).$nextEl),
            (t = t.$prevEl) &&
              0 < t.length &&
              (this.isBeginning
                ? t.addClass(n.disabledClass)
                : t.removeClass(n.disabledClass),
              t[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](n.lockClass)),
            e &&
              0 < e.length &&
              (this.isEnd
                ? e.addClass(n.disabledClass)
                : e.removeClass(n.disabledClass),
              e[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](n.lockClass)));
        },
        onPrevClick: function (e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick: function (e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init: function () {
          var e,
            t,
            n = this,
            i = n.params.navigation;
          (i.nextEl || i.prevEl) &&
            (i.nextEl &&
              ((e = C(i.nextEl)),
              n.params.uniqueNavElements &&
                "string" == typeof i.nextEl &&
                1 < e.length &&
                1 === n.$el.find(i.nextEl).length &&
                (e = n.$el.find(i.nextEl))),
            i.prevEl &&
              ((t = C(i.prevEl)),
              n.params.uniqueNavElements &&
                "string" == typeof i.prevEl &&
                1 < t.length &&
                1 === n.$el.find(i.prevEl).length &&
                (t = n.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", n.navigation.onNextClick),
            t && 0 < t.length && t.on("click", n.navigation.onPrevClick),
            W.extend(n.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this.navigation,
            t = e.$nextEl,
            e = e.$prevEl;
          t &&
            t.length &&
            (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            e &&
              e.length &&
              (e.off("click", this.navigation.onPrevClick),
              e.removeClass(this.params.navigation.disabledClass));
        },
      },
      M = {
        update: function () {
          var e = this,
            t = e.rtl,
            i = e.params.pagination;
          if (
            i.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var s,
              n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides
                .length,
              a = e.pagination.$el,
              o = e.params.loop
                ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((s = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )) >
                    n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides),
                  o - 1 < s && (s -= o),
                  s < 0 && "bullets" !== e.params.paginationType && (s = o + s))
                : (s =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === i.type &&
                e.pagination.bullets &&
                0 < e.pagination.bullets.length)
            ) {
              var r,
                l,
                c,
                u,
                d,
                h = e.pagination.bullets;
              if (
                (i.dynamicBullets &&
                  ((e.pagination.bulletSize = h
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  a.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
                  ),
                  1 < i.dynamicMainBullets &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += s - e.previousIndex),
                    e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          i.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (r = s - e.pagination.dynamicBulletIndex),
                  (c =
                    ((l = r + (Math.min(h.length, i.dynamicMainBullets) - 1)) +
                      r) /
                    2)),
                h.removeClass(
                  i.bulletActiveClass +
                    " " +
                    i.bulletActiveClass +
                    "-next " +
                    i.bulletActiveClass +
                    "-next-next " +
                    i.bulletActiveClass +
                    "-prev " +
                    i.bulletActiveClass +
                    "-prev-prev " +
                    i.bulletActiveClass +
                    "-main"
                ),
                1 < a.length)
              )
                h.each(function (e, t) {
                  var n = C(t),
                    t = n.index();
                  t === s && n.addClass(i.bulletActiveClass),
                    i.dynamicBullets &&
                      (r <= t &&
                        t <= l &&
                        n.addClass(i.bulletActiveClass + "-main"),
                      t === r &&
                        n
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(i.bulletActiveClass + "-prev-prev"),
                      t === l &&
                        n
                          .next()
                          .addClass(i.bulletActiveClass + "-next")
                          .next()
                          .addClass(i.bulletActiveClass + "-next-next"));
                });
              else if (
                (h.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets)
              ) {
                for (var p = h.eq(r), n = h.eq(l), f = r; f <= l; f += 1)
                  h.eq(f).addClass(i.bulletActiveClass + "-main");
                p
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev-prev"),
                  n
                    .next()
                    .addClass(i.bulletActiveClass + "-next")
                    .next()
                    .addClass(i.bulletActiveClass + "-next-next");
              }
              i.dynamicBullets &&
                ((d = Math.min(h.length, i.dynamicMainBullets + 4)),
                (u =
                  (e.pagination.bulletSize * d - e.pagination.bulletSize) / 2 -
                  c * e.pagination.bulletSize),
                (d = t ? "right" : "left"),
                h.css(e.isHorizontal() ? d : "top", u + "px"));
            }
            "fraction" === i.type &&
              (a
                .find("." + i.currentClass)
                .text(i.formatFractionCurrent(s + 1)),
              a.find("." + i.totalClass).text(i.formatFractionTotal(o))),
              "progressbar" === i.type &&
                ((c = i.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical"),
                (t = (s + 1) / o),
                (u = d = 1),
                "horizontal" == c ? (d = t) : (u = t),
                a
                  .find("." + i.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + d + ") scaleY(" + u + ")"
                  )
                  .transition(e.params.speed)),
              "custom" === i.type && i.renderCustom
                ? (a.html(i.renderCustom(e, s + 1, o)),
                  e.emit("paginationRender", e, a[0]))
                : e.emit("paginationUpdate", e, a[0]),
              a[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](i.lockClass);
          }
        },
        render: function () {
          var e = this,
            t = e.params.pagination;
          if (
            t.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e)
                .slides.length,
              i = e.pagination.$el,
              s = "";
            if ("bullets" === t.type) {
              for (
                var a = e.params.loop
                    ? Math.ceil(
                        (n - 2 * e.loopedSlides) / e.params.slidesPerGroup
                      )
                    : e.snapGrid.length,
                  o = 0;
                o < a;
                o += 1
              )
                t.renderBullet
                  ? (s += t.renderBullet.call(e, o, t.bulletClass))
                  : (s +=
                      "<" +
                      t.bulletElement +
                      ' class="' +
                      t.bulletClass +
                      '"></' +
                      t.bulletElement +
                      ">");
              i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
            }
            "fraction" === t.type &&
              ((s = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : '<span class="' +
                  t.currentClass +
                  '"></span> / <span class="' +
                  t.totalClass +
                  '"></span>'),
              i.html(s)),
              "progressbar" === t.type &&
                ((s = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : '<span class="' + t.progressbarFillClass + '"></span>'),
                i.html(s)),
              "custom" !== t.type &&
                e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e,
            t = this,
            n = t.params.pagination;
          !n.el ||
            (0 !== (e = C(n.el)).length &&
              (t.params.uniqueNavElements &&
                "string" == typeof n.el &&
                1 < e.length &&
                1 === t.$el.find(n.el).length &&
                (e = t.$el.find(n.el)),
              "bullets" === n.type &&
                n.clickable &&
                e.addClass(n.clickableClass),
              e.addClass(n.modifierClass + n.type),
              "bullets" === n.type &&
                n.dynamicBullets &&
                (e.addClass("" + n.modifierClass + n.type + "-dynamic"),
                (t.pagination.dynamicBulletIndex = 0),
                n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)),
              "progressbar" === n.type &&
                n.progressbarOpposite &&
                e.addClass(n.progressbarOppositeClass),
              n.clickable &&
                e.on("click", "." + n.bulletClass, function (e) {
                  e.preventDefault();
                  e = C(this).index() * t.params.slidesPerGroup;
                  t.params.loop && (e += t.loopedSlides), t.slideTo(e);
                }),
              W.extend(t.pagination, { $el: e, el: e[0] })));
        },
        destroy: function () {
          var e,
            t = this.params.pagination;
          t.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length &&
            ((e = this.pagination.$el).removeClass(t.hiddenClass),
            e.removeClass(t.modifierClass + t.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && e.off("click", "." + t.bulletClass));
        },
      },
      I = {
        setTranslate: function () {
          var e, t, n, i, s, a, o, r;
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            ((o = this.scrollbar),
            (e = this.rtlTranslate),
            (r = this.progress),
            (t = o.dragSize),
            (n = o.trackSize),
            (i = o.$dragEl),
            (s = o.$el),
            (a = this.params.scrollbar),
            (r = (n - (o = t)) * r),
            e
              ? 0 < (r = -r)
                ? ((o = t - r), (r = 0))
                : n < -r + t && (o = n + r)
              : r < 0
              ? ((o = t + r), (r = 0))
              : n < r + t && (o = n - r),
            this.isHorizontal()
              ? (X.transforms3d
                  ? i.transform("translate3d(" + r + "px, 0, 0)")
                  : i.transform("translateX(" + r + "px)"),
                (i[0].style.width = o + "px"))
              : (X.transforms3d
                  ? i.transform("translate3d(0px, " + r + "px, 0)")
                  : i.transform("translateY(" + r + "px)"),
                (i[0].style.height = o + "px")),
            a.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (s[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (s[0].style.opacity = 0), s.transition(400);
              }, 1e3))));
        },
        setTransition: function (e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e,
            t,
            n,
            i,
            s,
            a,
            o,
            r = this;
          r.params.scrollbar.el &&
            r.scrollbar.el &&
            ((t = (e = r.scrollbar).$dragEl),
            (n = e.$el),
            (t[0].style.width = ""),
            (t[0].style.height = ""),
            (i = r.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
            (a = (s = r.size / r.virtualSize) * (i / r.size)),
            (o =
              "auto" === r.params.scrollbar.dragSize
                ? i * s
                : parseInt(r.params.scrollbar.dragSize, 10)),
            r.isHorizontal()
              ? (t[0].style.width = o + "px")
              : (t[0].style.height = o + "px"),
            (n[0].style.display = 1 <= s ? "none" : ""),
            r.params.scrollbar.hide && (n[0].style.opacity = 0),
            W.extend(e, {
              trackSize: i,
              divider: s,
              moveDivider: a,
              dragSize: o,
            }),
            e.$el[
              r.params.watchOverflow && r.isLocked ? "addClass" : "removeClass"
            ](r.params.scrollbar.lockClass));
        },
        setDragPosition: function (e) {
          var t = this,
            n = t.scrollbar,
            i = t.rtlTranslate,
            s = n.$el,
            a = n.dragSize,
            n = n.trackSize,
            a =
              ((t.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX || e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageY
                : e.pageY || e.clientY) -
                s.offset()[t.isHorizontal() ? "left" : "top"] -
                a / 2) /
              (n - a);
          (a = Math.max(Math.min(a, 1), 0)), i && (a = 1 - a);
          a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
          t.updateProgress(a),
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this.params.scrollbar,
            n = this.scrollbar,
            i = this.$wrapperEl,
            s = n.$el,
            a = n.$dragEl;
          (this.scrollbar.isTouched = !0),
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            a.transition(100),
            n.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            s.transition(0),
            t.hide && s.css("opacity", 1),
            this.emit("scrollbarDragStart", e);
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
            n = this.$wrapperEl,
            i = t.$el,
            s = t.$dragEl;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            n.transition(0),
            i.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e));
        },
        onDragEnd: function (e) {
          var t = this.params.scrollbar,
            n = this.scrollbar.$el;
          this.scrollbar.isTouched &&
            ((this.scrollbar.isTouched = !1),
            t.hide &&
              (clearTimeout(this.scrollbar.dragTimeout),
              (this.scrollbar.dragTimeout = W.nextTick(function () {
                n.css("opacity", 0), n.transition(400);
              }, 1e3))),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function () {
          var e,
            t,
            n,
            i,
            s,
            a = this;
          a.params.scrollbar.el &&
            ((i = a.scrollbar),
            (e = a.touchEventsTouch),
            (t = a.touchEventsDesktop),
            (s = a.params),
            (n = i.$el[0]),
            (i = !(!X.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            }),
            (s = !(!X.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            }),
            X.touch
              ? (n.addEventListener(e.start, a.scrollbar.onDragStart, i),
                n.addEventListener(e.move, a.scrollbar.onDragMove, i),
                n.addEventListener(e.end, a.scrollbar.onDragEnd, s))
              : (n.addEventListener(t.start, a.scrollbar.onDragStart, i),
                d.addEventListener(t.move, a.scrollbar.onDragMove, i),
                d.addEventListener(t.end, a.scrollbar.onDragEnd, s)));
        },
        disableDraggable: function () {
          var e,
            t,
            n,
            i,
            s,
            a = this;
          a.params.scrollbar.el &&
            ((i = a.scrollbar),
            (e = a.touchEventsTouch),
            (t = a.touchEventsDesktop),
            (s = a.params),
            (n = i.$el[0]),
            (i = !(!X.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            }),
            (s = !(!X.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            }),
            X.touch
              ? (n.removeEventListener(e.start, a.scrollbar.onDragStart, i),
                n.removeEventListener(e.move, a.scrollbar.onDragMove, i),
                n.removeEventListener(e.end, a.scrollbar.onDragEnd, s))
              : (n.removeEventListener(t.start, a.scrollbar.onDragStart, i),
                d.removeEventListener(t.move, a.scrollbar.onDragMove, i),
                d.removeEventListener(t.end, a.scrollbar.onDragEnd, s)));
        },
        init: function () {
          var e, t, n, i;
          this.params.scrollbar.el &&
            ((e = this.scrollbar),
            (i = this.$el),
            (n = C((t = this.params.scrollbar).el)),
            0 ===
              (i = (n =
                this.params.uniqueNavElements &&
                "string" == typeof t.el &&
                1 < n.length &&
                1 === i.find(t.el).length
                  ? i.find(t.el)
                  : n).find("." + this.params.scrollbar.dragClass)).length &&
              ((i = C(
                '<div class="' + this.params.scrollbar.dragClass + '"></div>'
              )),
              n.append(i)),
            W.extend(e, { $el: n, el: n[0], $dragEl: i, dragEl: i[0] }),
            t.draggable && e.enableDraggable());
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      },
      L = {
        setTransform: function (e, t) {
          var n = this.rtl,
            i = C(e),
            s = n ? -1 : 1,
            a = i.attr("data-swiper-parallax") || "0",
            o = i.attr("data-swiper-parallax-x"),
            r = i.attr("data-swiper-parallax-y"),
            e = i.attr("data-swiper-parallax-scale"),
            n = i.attr("data-swiper-parallax-opacity");
          o || r
            ? ((o = o || "0"), (r = r || "0"))
            : this.isHorizontal()
            ? ((o = a), (r = "0"))
            : ((r = a), (o = "0")),
            (o =
              0 <= o.indexOf("%")
                ? parseInt(o, 10) * t * s + "%"
                : o * t * s + "px"),
            (r =
              0 <= r.indexOf("%") ? parseInt(r, 10) * t + "%" : r * t + "px"),
            null != n &&
              ((n = n - (n - 1) * (1 - Math.abs(t))), (i[0].style.opacity = n)),
            null == e
              ? i.transform("translate3d(" + o + ", " + r + ", 0px)")
              : ((t = e - (e - 1) * (1 - Math.abs(t))),
                i.transform(
                  "translate3d(" + o + ", " + r + ", 0px) scale(" + t + ")"
                ));
        },
        setTranslate: function () {
          var i = this,
            e = i.$el,
            t = i.slides,
            s = i.progress,
            a = i.snapGrid;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
            )
            .each(function (e, t) {
              i.parallax.setTransform(t, s);
            }),
            t.each(function (e, t) {
              var n = t.progress;
              1 < i.params.slidesPerGroup &&
                "auto" !== i.params.slidesPerView &&
                (n += Math.ceil(e / 2) - s * (a.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                C(t)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function (e, t) {
                    i.parallax.setTransform(t, n);
                  });
            });
        },
        setTransition: function (i) {
          void 0 === i && (i = this.params.speed),
            this.$el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function (e, t) {
                var n = C(t),
                  t =
                    parseInt(n.attr("data-swiper-parallax-duration"), 10) || i;
                0 === i && (t = 0), n.transition(t);
              });
        },
      },
      O = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            e = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - n, 2));
        },
        onGestureStart: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (
            ((n.fakeGestureTouched = !1),
            (n.fakeGestureMoved = !1),
            !X.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (n.fakeGestureTouched = !0),
              (i.scaleStart = O.getDistanceBetweenTouches(e));
          }
          (i.$slideEl && i.$slideEl.length) ||
          ((i.$slideEl = C(e.target).closest(".swiper-slide")),
          0 === i.$slideEl.length &&
            (i.$slideEl = this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
          (i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
          0 !== i.$imageWrapEl.length)
            ? (i.$imageEl.transition(0), (this.zoom.isScaling = !0))
            : (i.$imageEl = void 0);
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (!X.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (n.fakeGestureMoved = !0),
              (i.scaleMove = O.getDistanceBetweenTouches(e));
          }
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((n.scale = X.gestures
              ? e.scale * n.currentScale
              : (i.scaleMove / i.scaleStart) * n.currentScale),
            n.scale > i.maxRatio &&
              (n.scale =
                i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, 0.5)),
            n.scale < t.minRatio &&
              (n.scale =
                t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, 0.5)),
            i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"));
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
            n = this.zoom,
            i = n.gesture;
          if (!X.gestures) {
            if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !m.android)
            )
              return;
            (n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1);
          }
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio)),
            i.$imageEl
              .transition(this.params.speed)
              .transform("translate3d(0,0,0) scale(" + n.scale + ")"),
            (n.currentScale = n.scale),
            (n.isScaling = !1),
            1 === n.scale && (i.$slideEl = void 0));
        },
        onTouchStart: function (e) {
          var t = this.zoom,
            n = t.gesture,
            t = t.image;
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            (t.isTouched ||
              (m.android && e.preventDefault(),
              (t.isTouched = !0),
              (t.touchesStart.x = (
                "touchstart" === e.type ? e.targetTouches[0] : e
              ).pageX),
              (t.touchesStart.y = (
                "touchstart" === e.type ? e.targetTouches[0] : e
              ).pageY)));
        },
        onTouchMove: function (e) {
          var t = this.zoom,
            n = t.gesture,
            i = t.image,
            s = t.velocity;
          if (
            n.$imageEl &&
            0 !== n.$imageEl.length &&
            ((this.allowClick = !1), i.isTouched && n.$slideEl)
          ) {
            i.isMoved ||
              ((i.width = n.$imageEl[0].offsetWidth),
              (i.height = n.$imageEl[0].offsetHeight),
              (i.startX = W.getTranslate(n.$imageWrapEl[0], "x") || 0),
              (i.startY = W.getTranslate(n.$imageWrapEl[0], "y") || 0),
              (n.slideWidth = n.$slideEl[0].offsetWidth),
              (n.slideHeight = n.$slideEl[0].offsetHeight),
              n.$imageWrapEl.transition(0),
              this.rtl && ((i.startX = -i.startX), (i.startY = -i.startY)));
            var a = i.width * t.scale,
              o = i.height * t.scale;
            if (!(a < n.slideWidth && o < n.slideHeight)) {
              if (
                ((i.minX = Math.min(n.slideWidth / 2 - a / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(n.slideHeight / 2 - o / 2, 0)),
                (i.maxY = -i.minY),
                (i.touchesCurrent.x = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageX),
                (i.touchesCurrent.y = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageY),
                !i.isMoved && !t.isScaling)
              ) {
                if (
                  this.isHorizontal() &&
                  ((Math.floor(i.minX) === Math.floor(i.startX) &&
                    i.touchesCurrent.x < i.touchesStart.x) ||
                    (Math.floor(i.maxX) === Math.floor(i.startX) &&
                      i.touchesCurrent.x > i.touchesStart.x))
                )
                  return void (i.isTouched = !1);
                if (
                  !this.isHorizontal() &&
                  ((Math.floor(i.minY) === Math.floor(i.startY) &&
                    i.touchesCurrent.y < i.touchesStart.y) ||
                    (Math.floor(i.maxY) === Math.floor(i.startY) &&
                      i.touchesCurrent.y > i.touchesStart.y))
                )
                  return void (i.isTouched = !1);
              }
              e.preventDefault(),
                e.stopPropagation(),
                (i.isMoved = !0),
                (i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX),
                (i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY),
                i.currentX < i.minX &&
                  (i.currentX =
                    i.minX + 1 - Math.pow(i.minX - i.currentX + 1, 0.8)),
                i.currentX > i.maxX &&
                  (i.currentX =
                    i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, 0.8)),
                i.currentY < i.minY &&
                  (i.currentY =
                    i.minY + 1 - Math.pow(i.minY - i.currentY + 1, 0.8)),
                i.currentY > i.maxY &&
                  (i.currentY =
                    i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, 0.8)),
                s.prevPositionX || (s.prevPositionX = i.touchesCurrent.x),
                s.prevPositionY || (s.prevPositionY = i.touchesCurrent.y),
                s.prevTime || (s.prevTime = Date.now()),
                (s.x =
                  (i.touchesCurrent.x - s.prevPositionX) /
                  (Date.now() - s.prevTime) /
                  2),
                (s.y =
                  (i.touchesCurrent.y - s.prevPositionY) /
                  (Date.now() - s.prevTime) /
                  2),
                Math.abs(i.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0),
                Math.abs(i.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0),
                (s.prevPositionX = i.touchesCurrent.x),
                (s.prevPositionY = i.touchesCurrent.y),
                (s.prevTime = Date.now()),
                n.$imageWrapEl.transform(
                  "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
                );
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
            t = e.gesture,
            n = e.image,
            i = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!n.isTouched || !n.isMoved)
              return (n.isTouched = !1), void (n.isMoved = !1);
            (n.isTouched = !1), (n.isMoved = !1);
            var s = 300,
              a = 300,
              o = i.x * s,
              r = n.currentX + o,
              o = i.y * a,
              o = n.currentY + o;
            0 !== i.x && (s = Math.abs((r - n.currentX) / i.x)),
              0 !== i.y && (a = Math.abs((o - n.currentY) / i.y));
            a = Math.max(s, a);
            (n.currentX = r), (n.currentY = o);
            (o = n.width * e.scale), (e = n.height * e.scale);
            (n.minX = Math.min(t.slideWidth / 2 - o / 2, 0)),
              (n.maxX = -n.minX),
              (n.minY = Math.min(t.slideHeight / 2 - e / 2, 0)),
              (n.maxY = -n.minY),
              (n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX)),
              (n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY)),
              t.$imageWrapEl
                .transition(a)
                .transform(
                  "translate3d(" + n.currentX + "px, " + n.currentY + "px,0)"
                );
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
            t = e.gesture;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0));
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in: function (e) {
          var t,
            n,
            i,
            s = this.zoom,
            a = this.params.zoom,
            o = s.gesture,
            r = s.image;
          o.$slideEl ||
            ((o.$slideEl = this.clickedSlide
              ? C(this.clickedSlide)
              : this.slides.eq(this.activeIndex)),
            (o.$imageEl = o.$slideEl.find("img, svg, canvas")),
            (o.$imageWrapEl = o.$imageEl.parent("." + a.containerClass))),
            o.$imageEl &&
              0 !== o.$imageEl.length &&
              (o.$slideEl.addClass("" + a.zoomedSlideClass),
              (r =
                void 0 === r.touchesStart.x && e
                  ? ((i = ("touchend" === e.type ? e.changedTouches[0] : e)
                      .pageX),
                    ("touchend" === e.type ? e.changedTouches[0] : e).pageY)
                  : ((i = r.touchesStart.x), r.touchesStart.y)),
              (s.scale = o.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
              (s.currentScale =
                o.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
              e
                ? ((a = o.$slideEl[0].offsetWidth),
                  (e = o.$slideEl[0].offsetHeight),
                  (t = o.$slideEl.offset().left + a / 2 - i),
                  (n = o.$slideEl.offset().top + e / 2 - r),
                  (i = o.$imageEl[0].offsetWidth),
                  (r = o.$imageEl[0].offsetHeight),
                  (i = i * s.scale),
                  (r = r * s.scale),
                  (i = -(a = Math.min(a / 2 - i / 2, 0))),
                  (r = -(e = Math.min(e / 2 - r / 2, 0))),
                  i < (t = (t = t * s.scale) < a ? a : t) && (t = i),
                  r < (n = (n = n * s.scale) < e ? e : n) && (n = r))
                : (n = t = 0),
              o.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + t + "px, " + n + "px,0)"),
              o.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + s.scale + ")"));
        },
        out: function () {
          var e = this.zoom,
            t = this.params.zoom,
            n = e.gesture;
          n.$slideEl ||
            ((n.$slideEl = this.clickedSlide
              ? C(this.clickedSlide)
              : this.slides.eq(this.activeIndex)),
            (n.$imageEl = n.$slideEl.find("img, svg, canvas")),
            (n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass))),
            n.$imageEl &&
              0 !== n.$imageEl.length &&
              ((e.scale = 1),
              (e.currentScale = 1),
              n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              n.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              n.$slideEl.removeClass("" + t.zoomedSlideClass),
              (n.$slideEl = void 0));
        },
        enable: function () {
          var e,
            t = this,
            n = t.zoom;
          n.enabled ||
            ((n.enabled = !0),
            (e = !(
              "touchstart" !== t.touchEvents.start ||
              !X.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            X.gestures
              ? (t.$wrapperEl.on(
                  "gesturestart",
                  ".swiper-slide",
                  n.onGestureStart,
                  e
                ),
                t.$wrapperEl.on(
                  "gesturechange",
                  ".swiper-slide",
                  n.onGestureChange,
                  e
                ),
                t.$wrapperEl.on(
                  "gestureend",
                  ".swiper-slide",
                  n.onGestureEnd,
                  e
                ))
              : "touchstart" === t.touchEvents.start &&
                (t.$wrapperEl.on(
                  t.touchEvents.start,
                  ".swiper-slide",
                  n.onGestureStart,
                  e
                ),
                t.$wrapperEl.on(
                  t.touchEvents.move,
                  ".swiper-slide",
                  n.onGestureChange,
                  e
                ),
                t.$wrapperEl.on(
                  t.touchEvents.end,
                  ".swiper-slide",
                  n.onGestureEnd,
                  e
                )),
            t.$wrapperEl.on(
              t.touchEvents.move,
              "." + t.params.zoom.containerClass,
              n.onTouchMove
            ));
        },
        disable: function () {
          var e,
            t = this,
            n = t.zoom;
          n.enabled &&
            ((t.zoom.enabled = !1),
            (e = !(
              "touchstart" !== t.touchEvents.start ||
              !X.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            X.gestures
              ? (t.$wrapperEl.off(
                  "gesturestart",
                  ".swiper-slide",
                  n.onGestureStart,
                  e
                ),
                t.$wrapperEl.off(
                  "gesturechange",
                  ".swiper-slide",
                  n.onGestureChange,
                  e
                ),
                t.$wrapperEl.off(
                  "gestureend",
                  ".swiper-slide",
                  n.onGestureEnd,
                  e
                ))
              : "touchstart" === t.touchEvents.start &&
                (t.$wrapperEl.off(
                  t.touchEvents.start,
                  ".swiper-slide",
                  n.onGestureStart,
                  e
                ),
                t.$wrapperEl.off(
                  t.touchEvents.move,
                  ".swiper-slide",
                  n.onGestureChange,
                  e
                ),
                t.$wrapperEl.off(
                  t.touchEvents.end,
                  ".swiper-slide",
                  n.onGestureEnd,
                  e
                )),
            t.$wrapperEl.off(
              t.touchEvents.move,
              "." + t.params.zoom.containerClass,
              n.onTouchMove
            ));
        },
      },
      N = {
        loadInSlide: function (e, r) {
          void 0 === r && (r = !0);
          var l,
            c = this,
            u = c.params.lazy;
          void 0 !== e &&
            0 !== c.slides.length &&
            ((e = (l =
              c.virtual && c.params.virtual.enabled
                ? c.$wrapperEl.children(
                    "." +
                      c.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : c.slides.eq(e)).find(
              "." +
                u.elementClass +
                ":not(." +
                u.loadedClass +
                "):not(." +
                u.loadingClass +
                ")"
            )),
            0 !==
              (e =
                l.hasClass(u.elementClass) &&
                !l.hasClass(u.loadedClass) &&
                !l.hasClass(u.loadingClass)
                  ? e.add(l[0])
                  : e).length &&
              e.each(function (e, t) {
                var n = C(t);
                n.addClass(u.loadingClass);
                var i = n.attr("data-background"),
                  s = n.attr("data-src"),
                  a = n.attr("data-srcset"),
                  o = n.attr("data-sizes");
                c.loadImage(n[0], s || i, a, o, !1, function () {
                  var e, t;
                  null == c ||
                    !c ||
                    (c && !c.params) ||
                    c.destroyed ||
                    (i
                      ? (n.css("background-image", 'url("' + i + '")'),
                        n.removeAttr("data-background"))
                      : (a &&
                          (n.attr("srcset", a), n.removeAttr("data-srcset")),
                        o && (n.attr("sizes", o), n.removeAttr("data-sizes")),
                        s && (n.attr("src", s), n.removeAttr("data-src"))),
                    n.addClass(u.loadedClass).removeClass(u.loadingClass),
                    l.find("." + u.preloaderClass).remove(),
                    c.params.loop &&
                      r &&
                      ((t = l.attr("data-swiper-slide-index")),
                      l.hasClass(c.params.slideDuplicateClass)
                        ? ((e = c.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              t +
                              '"]:not(.' +
                              c.params.slideDuplicateClass +
                              ")"
                          )),
                          c.lazy.loadInSlide(e.index(), !1))
                        : ((t = c.$wrapperEl.children(
                            "." +
                              c.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              t +
                              '"]'
                          )),
                          c.lazy.loadInSlide(t.index(), !1))),
                    c.emit("lazyImageReady", l[0], n[0]));
                }),
                  c.emit("lazyImageLoad", l[0], n[0]);
              }));
        },
        load: function () {
          var n = this,
            t = n.$wrapperEl,
            i = n.params,
            s = n.slides,
            e = n.activeIndex,
            a = n.virtual && i.virtual.enabled,
            o = i.lazy,
            r = i.slidesPerView;
          function l(e) {
            if (a) {
              if (
                t.children(
                  "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
                ).length
              )
                return 1;
            } else if (s[e]) return 1;
          }
          function c(e) {
            return a ? C(e).attr("data-swiper-slide-index") : C(e).index();
          }
          if (
            ("auto" === r && (r = 0),
            n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
            n.params.watchSlidesVisibility)
          )
            t.children("." + i.slideVisibleClass).each(function (e, t) {
              t = a ? C(t).attr("data-swiper-slide-index") : C(t).index();
              n.lazy.loadInSlide(t);
            });
          else if (1 < r)
            for (var u = e; u < e + r; u += 1) l(u) && n.lazy.loadInSlide(u);
          else n.lazy.loadInSlide(e);
          if (o.loadPrevNext)
            if (1 < r || (o.loadPrevNextAmount && 1 < o.loadPrevNextAmount)) {
              for (
                var d = o.loadPrevNextAmount,
                  o = r,
                  h = Math.min(e + o + Math.max(d, o), s.length),
                  d = Math.max(e - Math.max(o, d), 0),
                  p = e + r;
                p < h;
                p += 1
              )
                l(p) && n.lazy.loadInSlide(p);
              for (var f = d; f < e; f += 1) l(f) && n.lazy.loadInSlide(f);
            } else {
              d = t.children("." + i.slideNextClass);
              0 < d.length && n.lazy.loadInSlide(c(d));
              d = t.children("." + i.slidePrevClass);
              0 < d.length && n.lazy.loadInSlide(c(d));
            }
        },
      },
      j = {
        LinearSpline: function (e, t) {
          var n, i, s, a, o;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((o = (function (e, t) {
                    for (i = -1, n = e.length; 1 < n - i; )
                      e[(s = (n + i) >> 1)] <= t ? (i = s) : (n = s);
                    return n;
                  })(this.x, e)),
                  (a = o - 1),
                  ((e - this.x[a]) * (this.y[o] - this.y[a])) /
                    (this.x[o] - this.x[a]) +
                    this.y[a])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (e) {
          this.controller.spline ||
            (this.controller.spline = this.params.loop
              ? new j.LinearSpline(this.slidesGrid, e.slidesGrid)
              : new j.LinearSpline(this.snapGrid, e.snapGrid));
        },
        setTranslate: function (e, t) {
          var n,
            i,
            s = this,
            a = s.controller.control;
          function o(e) {
            var t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by &&
              (s.controller.getInterpolateFunction(e),
              (i = -s.controller.spline.interpolate(-t))),
              (i && "container" !== s.params.controller.by) ||
                ((n =
                  (e.maxTranslate() - e.minTranslate()) /
                  (s.maxTranslate() - s.minTranslate())),
                (i = (t - s.minTranslate()) * n + e.minTranslate())),
              s.params.controller.inverse && (i = e.maxTranslate() - i),
              e.updateProgress(i),
              e.setTranslate(i, s),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(a))
            for (var r = 0; r < a.length; r += 1)
              a[r] !== t && a[r] instanceof x && o(a[r]);
          else a instanceof x && t !== a && o(a);
        },
        setTransition: function (t, e) {
          var n,
            i = this,
            s = i.controller.control;
          function a(e) {
            e.setTransition(t, i),
              0 !== t &&
                (e.transitionStart(),
                e.params.autoHeight &&
                  W.nextTick(function () {
                    e.updateAutoHeight();
                  }),
                e.$wrapperEl.transitionEnd(function () {
                  s &&
                    (e.params.loop &&
                      "slide" === i.params.controller.by &&
                      e.loopFix(),
                    e.transitionEnd());
                }));
          }
          if (Array.isArray(s))
            for (n = 0; n < s.length; n += 1)
              s[n] !== e && s[n] instanceof x && a(s[n]);
          else s instanceof x && e !== s && a(s);
        },
      },
      z = {
        makeElFocusable: function (e) {
          return e.attr("tabIndex", "0"), e;
        },
        addElRole: function (e, t) {
          return e.attr("role", t), e;
        },
        addElLabel: function (e, t) {
          return e.attr("aria-label", t), e;
        },
        disableEl: function (e) {
          return e.attr("aria-disabled", !0), e;
        },
        enableEl: function (e) {
          return e.attr("aria-disabled", !1), e;
        },
        onEnterKey: function (e) {
          var t = this,
            n = t.params.a11y;
          13 === e.keyCode &&
            ((e = C(e.target)),
            t.navigation &&
              t.navigation.$nextEl &&
              e.is(t.navigation.$nextEl) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd
                ? t.a11y.notify(n.lastSlideMessage)
                : t.a11y.notify(n.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              e.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(n.firstSlideMessage)
                : t.a11y.notify(n.prevSlideMessage)),
            t.pagination &&
              e.is("." + t.params.pagination.bulletClass) &&
              e[0].click());
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation: function () {
          var e, t;
          this.params.loop ||
            ((e = (t = this.navigation).$nextEl),
            (t = t.$prevEl) &&
              0 < t.length &&
              (this.isBeginning
                ? this.a11y.disableEl(t)
                : this.a11y.enableEl(t)),
            e &&
              0 < e.length &&
              (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e)));
        },
        updatePagination: function () {
          var n = this,
            i = n.params.a11y;
          n.pagination &&
            n.params.pagination.clickable &&
            n.pagination.bullets &&
            n.pagination.bullets.length &&
            n.pagination.bullets.each(function (e, t) {
              t = C(t);
              n.a11y.makeElFocusable(t),
                n.a11y.addElRole(t, "button"),
                n.a11y.addElLabel(
                  t,
                  i.paginationBulletMessage.replace(/{{index}}/, t.index() + 1)
                );
            });
        },
        init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t,
            n,
            i = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
            t &&
              (e.a11y.makeElFocusable(t),
              e.a11y.addElRole(t, "button"),
              e.a11y.addElLabel(t, i.nextSlideMessage),
              t.on("keydown", e.a11y.onEnterKey)),
            n &&
              (e.a11y.makeElFocusable(n),
              e.a11y.addElRole(n, "button"),
              e.a11y.addElLabel(n, i.prevSlideMessage),
              n.on("keydown", e.a11y.onEnterKey)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on(
                "keydown",
                "." + e.params.pagination.bulletClass,
                e.a11y.onEnterKey
              );
        },
        destroy: function () {
          var e,
            t,
            n = this;
          n.a11y.liveRegion &&
            0 < n.a11y.liveRegion.length &&
            n.a11y.liveRegion.remove(),
            n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl),
            n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl),
            e && e.off("keydown", n.a11y.onEnterKey),
            t && t.off("keydown", n.a11y.onEnterKey),
            n.pagination &&
              n.params.pagination.clickable &&
              n.pagination.bullets &&
              n.pagination.bullets.length &&
              n.pagination.$el.off(
                "keydown",
                "." + n.params.pagination.bulletClass,
                n.a11y.onEnterKey
              );
        },
      },
      F = {
        init: function () {
          if (this.params.history) {
            if (!B.history || !B.history.pushState)
              return (
                (this.params.history.enabled = !1),
                void (this.params.hashNavigation.enabled = !0)
              );
            var e = this.history;
            (e.initialized = !0),
              (e.paths = F.getPathValues()),
              (e.paths.key || e.paths.value) &&
                (e.scrollToSlide(
                  0,
                  e.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  B.addEventListener(
                    "popstate",
                    this.history.setHistoryPopState
                  ));
          }
        },
        destroy: function () {
          this.params.history.replaceState ||
            B.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = F.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues: function () {
          var e = B.location.pathname
              .slice(1)
              .split("index.html")
              .filter(function (e) {
                return "" !== e;
              }),
            t = e.length;
          return { key: e[t - 2], value: e[t - 1] };
        },
        setHistory: function (e, t) {
          this.history.initialized &&
            this.params.history.enabled &&
            ((t = this.slides.eq(t)),
            (t = F.slugify(t.attr("data-history"))),
            B.location.pathname.includes(e) || (t = e + "/" + t),
            ((e = B.history.state) && e.value === t) ||
              (this.params.history.replaceState
                ? B.history.replaceState({ value: t }, null, t)
                : B.history.pushState({ value: t }, null, t)));
        },
        slugify: function (e) {
          return e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (e, t, n) {
          if (t)
            for (var i = 0, s = this.slides.length; i < s; i += 1) {
              var a = this.slides.eq(i);
              F.slugify(a.attr("data-history")) !== t ||
                a.hasClass(this.params.slideDuplicateClass) ||
                ((a = a.index()), this.slideTo(a, e, n));
            }
          else this.slideTo(0, e, n);
        },
      },
      q = {
        onHashCange: function () {
          var e = d.location.hash.replace("#", "");
          e === this.slides.eq(this.activeIndex).attr("data-hash") ||
            (void 0 !==
              (e = this.$wrapperEl
                .children(
                  "." + this.params.slideClass + '[data-hash="' + e + '"]'
                )
                .index()) &&
              this.slideTo(e));
        },
        setHash: function () {
          var e;
          this.hashNavigation.initialized &&
            this.params.hashNavigation.enabled &&
            (this.params.hashNavigation.replaceState &&
            B.history &&
            B.history.replaceState
              ? B.history.replaceState(
                  null,
                  null,
                  "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
                )
              : ((e =
                  (e = this.slides.eq(this.activeIndex)).attr("data-hash") ||
                  e.attr("data-history")),
                (d.location.hash = e || "")));
        },
        init: function () {
          var e = this;
          if (
            !(
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
          ) {
            e.hashNavigation.initialized = !0;
            var t = d.location.hash.replace("#", "");
            if (t)
              for (var n = 0, i = e.slides.length; n < i; n += 1) {
                var s = e.slides.eq(n);
                (s.attr("data-hash") || s.attr("data-history")) !== t ||
                  s.hasClass(e.params.slideDuplicateClass) ||
                  ((s = s.index()),
                  e.slideTo(s, 0, e.params.runCallbacksOnInit, !0));
              }
            e.params.hashNavigation.watchState &&
              C(B).on("hashchange", e.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState &&
            C(B).off("hashchange", this.hashNavigation.onHashCange);
        },
      },
      H = {
        run: function () {
          var e = this,
            t = e.slides.eq(e.activeIndex),
            n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            (e.autoplay.timeout = W.nextTick(function () {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                      e.emit("autoplay"))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
            }, n));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      },
      R = {
        setTranslate: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            var n = this.slides.eq(t),
              i = -n[0].swiperSlideOffset;
            this.params.virtualTranslate || (i -= this.translate);
            var s = 0;
            this.isHorizontal() || ((s = i), (i = 0));
            var a = this.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(n[0].progress), 0)
              : 1 + Math.min(Math.max(n[0].progress, -1), 0);
            n.css({ opacity: a }).transform(
              "translate3d(" + i + "px, " + s + "px, 0px)"
            );
          }
        },
        setTransition: function (e) {
          var n,
            i = this,
            t = i.slides,
            s = i.$wrapperEl;
          t.transition(e),
            i.params.virtualTranslate &&
              0 !== e &&
              ((n = !1),
              t.transitionEnd(function () {
                if (!n && i && !i.destroyed) {
                  (n = !0), (i.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                    t < e.length;
                    t += 1
                  )
                    s.trigger(e[t]);
                }
              }));
        },
      },
      G = {
        setTranslate: function () {
          var e,
            t = this,
            n = t.$el,
            i = t.$wrapperEl,
            s = t.slides,
            a = t.width,
            o = t.height,
            r = t.rtlTranslate,
            l = t.size,
            c = t.params.cubeEffect,
            u = t.isHorizontal(),
            d = t.virtual && t.params.virtual.enabled,
            h = 0;
          c.shadow &&
            (u
              ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                  ((e = C('<div class="swiper-cube-shadow"></div>')),
                  i.append(e)),
                e.css({ height: a + "px" }))
              : 0 === (e = n.find(".swiper-cube-shadow")).length &&
                ((e = C('<div class="swiper-cube-shadow"></div>')),
                n.append(e)));
          for (var p, f = 0; f < s.length; f += 1) {
            var g = s.eq(f),
              m = f,
              v =
                90 *
                (m = d ? parseInt(g.attr("data-swiper-slide-index"), 10) : m),
              y = Math.floor(v / 360);
            r && ((v = -v), (y = Math.floor(-v / 360)));
            var b = Math.max(Math.min(g[0].progress, 1), -1),
              w = 0,
              x = 0,
              T = 0;
            m % 4 == 0
              ? ((w = 4 * -y * l), (T = 0))
              : (m - 1) % 4 == 0
              ? ((w = 0), (T = 4 * -y * l))
              : (m - 2) % 4 == 0
              ? ((w = l + 4 * y * l), (T = l))
              : (m - 3) % 4 == 0 && ((w = -l), (T = 3 * l + 4 * l * y)),
              r && (w = -w),
              u || ((x = w), (w = 0)),
              b <= 1 && -1 < b && (h = r ? 90 * -m - 90 * b : 90 * m + 90 * b),
              g.transform(
                "rotateX(" +
                  (u ? 0 : -v) +
                  "deg) rotateY(" +
                  (u ? v : 0) +
                  "deg) translate3d(" +
                  w +
                  "px, " +
                  x +
                  "px, " +
                  T +
                  "px)"
              ),
              c.slideShadows &&
                ((x = u
                  ? g.find(".swiper-slide-shadow-left")
                  : g.find(".swiper-slide-shadow-top")),
                (T = u
                  ? g.find(".swiper-slide-shadow-right")
                  : g.find(".swiper-slide-shadow-bottom")),
                0 === x.length &&
                  ((x = C(
                    '<div class="swiper-slide-shadow-' +
                      (u ? "left" : "top") +
                      '"></div>'
                  )),
                  g.append(x)),
                0 === T.length &&
                  ((T = C(
                    '<div class="swiper-slide-shadow-' +
                      (u ? "right" : "bottom") +
                      '"></div>'
                  )),
                  g.append(T)),
                x.length && (x[0].style.opacity = Math.max(-b, 0)),
                T.length && (T[0].style.opacity = Math.max(b, 0)));
          }
          i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
            c.shadow &&
              (u
                ? e.transform(
                    "translate3d(0px, " +
                      (a / 2 + c.shadowOffset) +
                      "px, " +
                      -a / 2 +
                      "px) rotateX(90deg) rotateZ(0deg) scale(" +
                      c.shadowScale +
                      ")"
                  )
                : ((p = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)),
                  (n =
                    1.5 -
                    (Math.sin((2 * p * Math.PI) / 360) / 2 +
                      Math.cos((2 * p * Math.PI) / 360) / 2)),
                  (a = c.shadowScale),
                  (p = c.shadowScale / n),
                  (n = c.shadowOffset),
                  e.transform(
                    "scale3d(" +
                      a +
                      ", 1, " +
                      p +
                      ") translate3d(0px, " +
                      (o / 2 + n) +
                      "px, " +
                      -o / 2 / p +
                      "px) rotateX(-90deg)"
                  ))),
            i.transform(
              "translate3d(0px,0," +
                (E.isSafari || E.isUiWebView ? -l / 2 : 0) +
                "px) rotateX(" +
                (t.isHorizontal() ? 0 : h) +
                "deg) rotateY(" +
                (t.isHorizontal() ? -h : 0) +
                "deg)"
            );
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find(".swiper-cube-shadow").transition(e);
        },
      },
      Y = {
        setTranslate: function () {
          for (
            var e = this.slides, t = this.rtlTranslate, n = 0;
            n < e.length;
            n += 1
          ) {
            var i,
              s,
              a = e.eq(n),
              o = a[0].progress,
              r =
                -180 *
                (o = this.params.flipEffect.limitRotation
                  ? Math.max(Math.min(a[0].progress, 1), -1)
                  : o),
              l = 0,
              c = -a[0].swiperSlideOffset,
              u = 0;
            this.isHorizontal()
              ? t && (r = -r)
              : ((u = c), (l = -r), (r = c = 0)),
              (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length),
              this.params.flipEffect.slideShadows &&
                ((i = this.isHorizontal()
                  ? a.find(".swiper-slide-shadow-left")
                  : a.find(".swiper-slide-shadow-top")),
                (s = this.isHorizontal()
                  ? a.find(".swiper-slide-shadow-right")
                  : a.find(".swiper-slide-shadow-bottom")),
                0 === i.length &&
                  ((i = C(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "left" : "top") +
                      '"></div>'
                  )),
                  a.append(i)),
                0 === s.length &&
                  ((s = C(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  )),
                  a.append(s)),
                i.length && (i[0].style.opacity = Math.max(-o, 0)),
                s.length && (s[0].style.opacity = Math.max(o, 0))),
              a.transform(
                "translate3d(" +
                  c +
                  "px, " +
                  u +
                  "px, 0px) rotateX(" +
                  l +
                  "deg) rotateY(" +
                  r +
                  "deg)"
              );
          }
        },
        setTransition: function (e) {
          var n,
            i = this,
            t = i.slides,
            s = i.activeIndex,
            a = i.$wrapperEl;
          t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            i.params.virtualTranslate &&
              0 !== e &&
              ((n = !1),
              t.eq(s).transitionEnd(function () {
                if (!n && i && !i.destroyed) {
                  (n = !0), (i.animating = !1);
                  for (
                    var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                    t < e.length;
                    t += 1
                  )
                    a.trigger(e[t]);
                }
              }));
        },
      },
      V = {
        setTranslate: function () {
          for (
            var e = this.width,
              t = this.height,
              n = this.slides,
              i = this.$wrapperEl,
              s = this.slidesSizesGrid,
              a = this.params.coverflowEffect,
              o = this.isHorizontal(),
              r = this.translate,
              l = o ? e / 2 - r : t / 2 - r,
              c = o ? a.rotate : -a.rotate,
              u = a.depth,
              d = 0,
              h = n.length;
            d < h;
            d += 1
          ) {
            var p = n.eq(d),
              f = s[d],
              g = ((l - p[0].swiperSlideOffset - f / 2) / f) * a.modifier,
              m = o ? c * g : 0,
              v = o ? 0 : c * g,
              y = -u * Math.abs(g),
              b = o ? 0 : a.stretch * g,
              f = o ? a.stretch * g : 0;
            Math.abs(f) < 0.001 && (f = 0),
              Math.abs(b) < 0.001 && (b = 0),
              Math.abs(y) < 0.001 && (y = 0),
              Math.abs(m) < 0.001 && (m = 0),
              Math.abs(v) < 0.001 && (v = 0),
              p.transform(
                "translate3d(" +
                  f +
                  "px," +
                  b +
                  "px," +
                  y +
                  "px)  rotateX(" +
                  v +
                  "deg) rotateY(" +
                  m +
                  "deg)"
              ),
              (p[0].style.zIndex = 1 - Math.abs(Math.round(g))),
              a.slideShadows &&
                ((v = o
                  ? p.find(".swiper-slide-shadow-left")
                  : p.find(".swiper-slide-shadow-top")),
                (m = o
                  ? p.find(".swiper-slide-shadow-right")
                  : p.find(".swiper-slide-shadow-bottom")),
                0 === v.length &&
                  ((v = C(
                    '<div class="swiper-slide-shadow-' +
                      (o ? "left" : "top") +
                      '"></div>'
                  )),
                  p.append(v)),
                0 === m.length &&
                  ((m = C(
                    '<div class="swiper-slide-shadow-' +
                      (o ? "right" : "bottom") +
                      '"></div>'
                  )),
                  p.append(m)),
                v.length && (v[0].style.opacity = 0 < g ? g : 0),
                m.length && (m[0].style.opacity = 0 < -g ? -g : 0));
          }
          (X.pointerEvents || X.prefixedPointerEvents) &&
            (i[0].style.perspectiveOrigin = l + "px 50%");
        },
        setTransition: function (e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e);
        },
      },
      U = {
        init: function () {
          var e = this,
            t = e.params.thumbs,
            n = e.constructor;
          t.swiper instanceof n
            ? ((e.thumbs.swiper = t.swiper),
              W.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              W.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : W.isObject(t.swiper) &&
              ((e.thumbs.swiper = new n(
                W.extend({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
        },
        onThumbClick: function () {
          var e,
            t,
            n,
            i = this,
            s = i.thumbs.swiper;
          s &&
            ((t = s.clickedIndex),
            ((e = s.clickedSlide) &&
              C(e).hasClass(i.params.thumbs.slideThumbActiveClass)) ||
              null == t ||
              ((n = s.params.loop
                ? parseInt(
                    C(s.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              i.params.loop &&
                ((e = i.activeIndex),
                i.slides.eq(e).hasClass(i.params.slideDuplicateClass) &&
                  (i.loopFix(),
                  (i._clientLeft = i.$wrapperEl[0].clientLeft),
                  (e = i.activeIndex)),
                (s = i.slides
                  .eq(e)
                  .prevAll('[data-swiper-slide-index="' + n + '"]')
                  .eq(0)
                  .index()),
                (t = i.slides
                  .eq(e)
                  .nextAll('[data-swiper-slide-index="' + n + '"]')
                  .eq(0)
                  .index()),
                (n = void 0 === s || (void 0 !== t && t - e < e - s) ? t : s)),
              i.slideTo(n)));
        },
        update: function (e) {
          var t = this,
            n = t.thumbs.swiper;
          if (n) {
            var i,
              s,
              a,
              o =
                "auto" === n.params.slidesPerView
                  ? n.slidesPerViewDynamic()
                  : n.params.slidesPerView;
            t.realIndex !== n.realIndex &&
              ((i = n.activeIndex),
              (a = n.params.loop
                ? (n.slides.eq(i).hasClass(n.params.slideDuplicateClass) &&
                    (n.loopFix(),
                    (n._clientLeft = n.$wrapperEl[0].clientLeft),
                    (i = n.activeIndex)),
                  (a = n.slides
                    .eq(i)
                    .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index()),
                  (s = n.slides
                    .eq(i)
                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                    .eq(0)
                    .index()),
                  void 0 === a
                    ? s
                    : void 0 === s
                    ? a
                    : s - i == i - a
                    ? i
                    : s - i < i - a
                    ? s
                    : a)
                : t.realIndex),
              n.visibleSlidesIndexes.indexOf(a) < 0 &&
                (n.params.centeredSlides
                  ? (a =
                      i < a
                        ? a - Math.floor(o / 2) + 1
                        : a + Math.floor(o / 2) - 1)
                  : i < a && (a = a - o + 1),
                n.slideTo(a, e ? 0 : void 0)));
            var r = 1,
              l = t.params.thumbs.slideThumbActiveClass;
            if (
              (1 < t.params.slidesPerView &&
                !t.params.centeredSlides &&
                (r = t.params.slidesPerView),
              n.slides.removeClass(l),
              n.params.loop)
            )
              for (var c = 0; c < r; c += 1)
                n.$wrapperEl
                  .children(
                    '[data-swiper-slide-index="' + (t.realIndex + c) + '"]'
                  )
                  .addClass(l);
            else
              for (var u = 0; u < r; u += 1)
                n.slides.eq(t.realIndex + u).addClass(l);
          }
        },
      },
      p = [
        T,
        S,
        _,
        c,
        u,
        h,
        p,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create: function () {
            W.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: P.enable.bind(this),
                disable: P.disable.bind(this),
                handle: P.handle.bind(this),
                handleMouseEnter: P.handleMouseEnter.bind(this),
                handleMouseLeave: P.handleMouseLeave.bind(this),
                lastScrollTime: W.now(),
              },
            });
          },
          on: {
            init: function () {
              this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            W.extend(this, {
              navigation: {
                init: D.init.bind(this),
                update: D.update.bind(this),
                destroy: D.destroy.bind(this),
                onNextClick: D.onNextClick.bind(this),
                onPrevClick: D.onPrevClick.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var t,
                n = this,
                i = n.navigation,
                s = i.$nextEl,
                i = i.$prevEl;
              !n.params.navigation.hideOnClick ||
                C(e.target).is(i) ||
                C(e.target).is(s) ||
                (s
                  ? (t = s.hasClass(n.params.navigation.hiddenClass))
                  : i && (t = i.hasClass(n.params.navigation.hiddenClass)),
                !0 === t
                  ? n.emit("navigationShow", n)
                  : n.emit("navigationHide", n),
                s && s.toggleClass(n.params.navigation.hiddenClass),
                i && i.toggleClass(n.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e;
              },
              formatFractionTotal: function (e) {
                return e;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            W.extend(this, {
              pagination: {
                init: M.init.bind(this),
                render: M.render.bind(this),
                update: M.update.bind(this),
                destroy: M.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange: function () {
              (!this.params.loop && void 0 !== this.snapIndex) ||
                this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (e) {
              var t = this;
              t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                0 < t.pagination.$el.length &&
                !C(e.target).hasClass(t.params.pagination.bulletClass) &&
                (!0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow", t)
                  : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            var e = this;
            W.extend(e, {
              scrollbar: {
                init: I.init.bind(e),
                destroy: I.destroy.bind(e),
                updateSize: I.updateSize.bind(e),
                setTranslate: I.setTranslate.bind(e),
                setTransition: I.setTransition.bind(e),
                enableDraggable: I.enableDraggable.bind(e),
                disableDraggable: I.disableDraggable.bind(e),
                setDragPosition: I.setDragPosition.bind(e),
                onDragStart: I.onDragStart.bind(e),
                onDragMove: I.onDragMove.bind(e),
                onDragEnd: I.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            W.extend(this, {
              parallax: {
                setTransform: L.setTransform.bind(this),
                setTranslate: L.setTranslate.bind(this),
                setTransition: L.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function (e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var i = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (e) {
                t[e] = O[e].bind(i);
              }),
              W.extend(i, { zoom: t });
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
              get: function () {
                return s;
              },
              set: function (e) {
                var t, n;
                s !== e &&
                  ((t = i.zoom.gesture.$imageEl
                    ? i.zoom.gesture.$imageEl[0]
                    : void 0),
                  (n = i.zoom.gesture.$slideEl
                    ? i.zoom.gesture.$slideEl[0]
                    : void 0),
                  i.emit("zoomChange", e, t, n)),
                  (s = e);
              },
            });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap: function (e) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(e);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            W.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: N.load.bind(this),
                loadInSlide: N.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled &&
                this.params.preloadImages &&
                (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled &&
                !this.params.loop &&
                0 === this.params.initialSlide &&
                this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode &&
                !this.params.freeModeSticky &&
                this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              this.params.lazy.enabled &&
                (this.params.lazy.loadOnTransitionStart ||
                  (!this.params.lazy.loadOnTransitionStart &&
                    !this.lazy.initialImageLoaded)) &&
                this.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled &&
                !this.params.lazy.loadOnTransitionStart &&
                this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: {
            controller: { control: void 0, inverse: !1, by: "slide" },
          },
          create: function () {
            W.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: j.getInterpolateFunction.bind(this),
                setTranslate: j.setTranslate.bind(this),
                setTransition: j.setTransition.bind(this),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            resize: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create: function () {
            var t = this;
            W.extend(t, {
              a11y: {
                liveRegion: C(
                  '<span class="' +
                    t.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              },
            }),
              Object.keys(z).forEach(function (e) {
                t.a11y[e] = z[e].bind(t);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: {
            history: { enabled: !1, replaceState: !1, key: "slides" },
          },
          create: function () {
            W.extend(this, {
              history: {
                init: F.init.bind(this),
                setHistory: F.setHistory.bind(this),
                setHistoryPopState: F.setHistoryPopState.bind(this),
                scrollToSlide: F.scrollToSlide.bind(this),
                destroy: F.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1,
            },
          },
          create: function () {
            W.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: q.init.bind(this),
                destroy: q.destroy.bind(this),
                setHash: q.setHash.bind(this),
                onHashCange: q.onHashCange.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled &&
                this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var t = this;
            W.extend(t, {
              autoplay: {
                running: !1,
                paused: !1,
                run: H.run.bind(t),
                start: H.start.bind(t),
                stop: H.stop.bind(t),
                pause: H.pause.bind(t),
                onTransitionEnd: function (e) {
                  t &&
                    !t.destroyed &&
                    t.$wrapperEl &&
                    e.target === this &&
                    (t.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd
                    ),
                    (t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start();
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running &&
                (t || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(e)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop();
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            W.extend(this, {
              fadeEffect: {
                setTranslate: R.setTranslate.bind(this),
                setTransition: R.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "fade" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "fade"
                ),
                W.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  })
                ),
                W.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            W.extend(this, {
              cubeEffect: {
                setTranslate: G.setTranslate.bind(this),
                setTransition: G.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "cube" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "cube"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                W.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  })
                ),
                W.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: {
            flipEffect: { slideShadows: !0, limitRotation: !0 },
          },
          create: function () {
            W.extend(this, {
              flipEffect: {
                setTranslate: Y.setTranslate.bind(this),
                setTransition: Y.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e;
              "flip" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "flip"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                W.extend(
                  this.params,
                  (e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  })
                ),
                W.extend(this.originalParams, e));
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            W.extend(this, {
              coverflowEffect: {
                setTranslate: V.setTranslate.bind(this),
                setTransition: V.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition: function (e) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            W.extend(this, {
              thumbs: {
                swiper: null,
                init: U.init.bind(this),
                update: U.update.bind(this),
                onThumbClick: U.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var e = this.params.thumbs;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function (e) {
              var t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy: function () {
              var e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
    return (
      void 0 === x.use &&
        ((x.use = x.Class.use), (x.installModule = x.Class.installModule)),
      x.use(p),
      x
    );
  }),
  (function (e, t, n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports && "undefined" == typeof Meteor
      ? (module.exports = e(require("jquery")))
      : e(t || n);
  })(
    function (o) {
      "use strict";
      function r(u, b, w) {
        var x = {
          invalid: [],
          getCaret: function () {
            try {
              var e,
                t = 0,
                n = u.get(0),
                i = document.selection,
                s = n.selectionStart;
              return (
                i && -1 === navigator.appVersion.indexOf("MSIE 10")
                  ? ((e = i.createRange()).moveStart(
                      "character",
                      -x.val().length
                    ),
                    (t = e.text.length))
                  : (!s && "0" !== s) || (t = s),
                t
              );
            } catch (e) {}
          },
          setCaret: function (e) {
            try {
              var t, n;
              u.is(":focus") &&
                ((n = u.get(0)).setSelectionRange
                  ? n.setSelectionRange(e, e)
                  : ((t = n.createTextRange()).collapse(!0),
                    t.moveEnd("character", e),
                    t.moveStart("character", e),
                    t.select()));
            } catch (e) {}
          },
          events: function () {
            u.on("keydown.mask", function (e) {
              u.data("mask-keycode", e.keyCode || e.which),
                u.data("mask-previus-value", u.val()),
                u.data("mask-previus-caret-pos", x.getCaret()),
                (x.maskDigitPosMapOld = x.maskDigitPosMap);
            })
              .on(
                o.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
                x.behaviour
              )
              .on("paste.mask drop.mask", function () {
                setTimeout(function () {
                  u.keydown().keyup();
                }, 100);
              })
              .on("change.mask", function () {
                u.data("changed", !0);
              })
              .on("blur.mask", function () {
                a === x.val() || u.data("changed") || u.trigger("change"),
                  u.data("changed", !1);
              })
              .on("blur.mask", function () {
                a = x.val();
              })
              .on("focus.mask", function (e) {
                !0 === w.selectOnFocus && o(e.target).select();
              })
              .on("focusout.mask", function () {
                w.clearIfNotMatch && !s.test(x.val()) && x.val("");
              });
          },
          getRegexMask: function () {
            for (var e, t, n, i, s, a = [], o = 0; o < b.length; o++)
              (n = T.translation[b.charAt(o)])
                ? ((e = n.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                  (t = n.optional),
                  (n = n.recursive)
                    ? (a.push(b.charAt(o)),
                      (i = { digit: b.charAt(o), pattern: e }))
                    : a.push(t || n ? e + "?" : e))
                : a.push(b.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
            return (
              (s = a.join("")),
              i &&
                (s = s
                  .replace(
                    new RegExp("(" + i.digit + "(.*" + i.digit + ")?)"),
                    "($1)?"
                  )
                  .replace(new RegExp(i.digit, "g"), i.pattern)),
              new RegExp(s)
            );
          },
          destroyEvents: function () {
            u.off(
              [
                "input",
                "keydown",
                "keyup",
                "paste",
                "drop",
                "blur",
                "focusout",
                "",
              ].join(".mask ")
            );
          },
          val: function (e) {
            var t = u.is("input") ? "val" : "text",
              t = 0 < arguments.length ? (u[t]() !== e && u[t](e), u) : u[t]();
            return t;
          },
          calculateCaretPosition: function (e) {
            var t = x.getMasked(),
              n = x.getCaret();
            if (e !== t) {
              for (
                var i = u.data("mask-previus-caret-pos") || 0,
                  s = t.length,
                  e = e.length,
                  a = 0,
                  o = 0,
                  r = 0,
                  l = 0,
                  c = 0,
                  c = n;
                c < s && x.maskDigitPosMap[c];
                c++
              )
                o++;
              for (c = n - 1; 0 <= c && x.maskDigitPosMap[c]; c--) a++;
              for (c = n - 1; 0 <= c; c--) x.maskDigitPosMap[c] && r++;
              for (c = i - 1; 0 <= c; c--) x.maskDigitPosMapOld[c] && l++;
              e < n
                ? (n = 10 * s)
                : n <= i && i !== e
                ? x.maskDigitPosMapOld[n] ||
                  ((e = n),
                  (n -= l - r),
                  x.maskDigitPosMap[(n -= a)] && (n = e))
                : i < n && ((n += r - l), (n += o));
            }
            return n;
          },
          behaviour: function (e) {
            (e = e || window.event), (x.invalid = []);
            var t = u.data("mask-keycode");
            if (-1 === o.inArray(t, T.byPassKeys)) {
              var n = x.getMasked(),
                t = x.getCaret(),
                i = u.data("mask-previus-value") || "";
              return (
                setTimeout(function () {
                  x.setCaret(x.calculateCaretPosition(i));
                }, o.jMaskGlobals.keyStrokeCompensation),
                x.val(n),
                x.setCaret(t),
                x.callbacks(e)
              );
            }
          },
          getMasked: function (e, t) {
            for (
              var n,
                i,
                s = [],
                a = void 0 === t ? x.val() : t + "",
                o = 0,
                r = b.length,
                l = 0,
                c = a.length,
                u = 1,
                d = "push",
                h = -1,
                p = 0,
                f = [],
                g = w.reverse
                  ? ((d = "unshift"),
                    (u = -1),
                    (n = 0),
                    (o = r - 1),
                    (l = c - 1),
                    function () {
                      return -1 < o && -1 < l;
                    })
                  : ((n = r - 1),
                    function () {
                      return o < r && l < c;
                    });
              g();

            ) {
              var m = b.charAt(o),
                v = a.charAt(l),
                y = T.translation[m];
              y
                ? (v.match(y.pattern)
                    ? (s[d](v),
                      y.recursive &&
                        (-1 === h ? (h = o) : o === n && o !== h && (o = h - u),
                        n === h && (o -= u)),
                      (o += u))
                    : v === i
                    ? (p--, (i = void 0))
                    : y.optional
                    ? ((o += u), (l -= u))
                    : y.fallback
                    ? (s[d](y.fallback), (o += u), (l -= u))
                    : x.invalid.push({ p: l, v: v, e: y.pattern }),
                  (l += u))
                : (e || s[d](m),
                  v === m
                    ? (f.push(l), (l += u))
                    : ((i = m), f.push(l + p), p++),
                  (o += u));
            }
            t = b.charAt(n);
            r !== c + 1 || T.translation[t] || s.push(t);
            t = s.join("");
            return x.mapMaskdigitPositions(t, f, c), t;
          },
          mapMaskdigitPositions: function (e, t, n) {
            var i = w.reverse ? e.length - n : 0;
            x.maskDigitPosMap = {};
            for (var s = 0; s < t.length; s++) x.maskDigitPosMap[t[s] + i] = 1;
          },
          callbacks: function (e) {
            function t(e, t, n) {
              "function" == typeof w[e] && t && w[e].apply(this, n);
            }
            var n = x.val(),
              i = n !== a,
              s = [n, e, u, w];
            t("onChange", !0 == i, s),
              t("onKeyPress", !0 == i, s),
              t("onComplete", n.length === b.length, s),
              t("onInvalid", 0 < x.invalid.length, [n, e, u, x.invalid, w]);
          },
        };
        u = o(u);
        var s,
          T = this,
          a = x.val();
        (b = "function" == typeof b ? b(x.val(), void 0, u, w) : b),
          (T.mask = b),
          (T.options = w),
          (T.remove = function () {
            var e = x.getCaret();
            return (
              T.options.placeholder && u.removeAttr("placeholder"),
              u.data("mask-maxlength") && u.removeAttr("maxlength"),
              x.destroyEvents(),
              x.val(T.getCleanVal()),
              x.setCaret(e),
              u
            );
          }),
          (T.getCleanVal = function () {
            return x.getMasked(!0);
          }),
          (T.getMaskedVal = function (e) {
            return x.getMasked(!1, e);
          }),
          (T.init = function (e) {
            if (
              ((e = e || !1),
              (w = w || {}),
              (T.clearIfNotMatch = o.jMaskGlobals.clearIfNotMatch),
              (T.byPassKeys = o.jMaskGlobals.byPassKeys),
              (T.translation = o.extend(
                {},
                o.jMaskGlobals.translation,
                w.translation
              )),
              (T = o.extend(!0, {}, T, w)),
              (s = x.getRegexMask()),
              e)
            )
              x.events(), x.val(x.getMasked());
            else {
              w.placeholder && u.attr("placeholder", w.placeholder),
                u.data("mask") && u.attr("autocomplete", "off");
              for (var t = 0, n = !0; t < b.length; t++) {
                var i = T.translation[b.charAt(t)];
                if (i && i.recursive) {
                  n = !1;
                  break;
                }
              }
              n && u.attr("maxlength", b.length).data("mask-maxlength", !0),
                x.destroyEvents(),
                x.events();
              e = x.getCaret();
              x.val(x.getMasked()), x.setCaret(e);
            }
          }),
          T.init(!u.is("input"));
      }
      o.maskWatchers = {};
      function t() {
        var e = o(this),
          t = {},
          n = "data-mask-",
          i = e.attr("data-mask");
        if (
          (e.attr(n + "reverse") && (t.reverse = !0),
          e.attr(n + "clearifnotmatch") && (t.clearIfNotMatch = !0),
          "true" === e.attr(n + "selectonfocus") && (t.selectOnFocus = !0),
          l(e, i, t))
        )
          return e.data("mask", new r(this, i, t));
      }
      var l = function (e, t, n) {
        n = n || {};
        var i = o(e).data("mask"),
          s = JSON.stringify,
          e = o(e).val() || o(e).text();
        try {
          return (
            "function" == typeof t && (t = t(e)),
            "object" != typeof i || s(i.options) !== s(n) || i.mask !== t
          );
        } catch (e) {}
      };
      (o.fn.mask = function (e, t) {
        t = t || {};
        function n() {
          if (l(this, e, t)) return o(this).data("mask", new r(this, e, t));
        }
        var i = this.selector,
          s = o.jMaskGlobals,
          a = s.watchInterval,
          s = t.watchInputs || s.watchInputs;
        return (
          o(this).each(n),
          i &&
            "" !== i &&
            s &&
            (clearInterval(o.maskWatchers[i]),
            (o.maskWatchers[i] = setInterval(function () {
              o(document).find(i).each(n);
            }, a))),
          this
        );
      }),
        (o.fn.masked = function (e) {
          return this.data("mask").getMaskedVal(e);
        }),
        (o.fn.unmask = function () {
          return (
            clearInterval(o.maskWatchers[this.selector]),
            delete o.maskWatchers[this.selector],
            this.each(function () {
              var e = o(this).data("mask");
              e && e.remove().removeData("mask");
            })
          );
        }),
        (o.fn.cleanVal = function () {
          return this.data("mask").getCleanVal();
        }),
        (o.applyDataMask = function (e) {
          ((e = e || o.jMaskGlobals.maskElements) instanceof o ? e : o(e))
            .filter(o.jMaskGlobals.dataMaskAttr)
            .each(t);
        });
      var e,
        n,
        i,
        s = {
          maskElements: "input,td,span,div",
          dataMaskAttr: "*[data-mask]",
          dataMask: !0,
          watchInterval: 300,
          watchInputs: !0,
          keyStrokeCompensation: 10,
          useInput:
            !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(
              window.navigator.userAgent
            ) &&
            ((e = "input"),
            (i = document.createElement("div")),
            (n = (e = "on" + e) in i) ||
              (i.setAttribute(e, "return;"), (n = "function" == typeof i[e])),
            (i = null),
            n),
          watchDataMask: !1,
          byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
          translation: {
            0: { pattern: /\d/ },
            9: { pattern: /\d/, optional: !0 },
            "#": { pattern: /\d/, recursive: !0 },
            A: { pattern: /[a-zA-Z0-9]/ },
            S: { pattern: /[a-zA-Z]/ },
          },
        };
      (o.jMaskGlobals = o.jMaskGlobals || {}),
        (s = o.jMaskGlobals = o.extend(!0, {}, s, o.jMaskGlobals)).dataMask &&
          o.applyDataMask(),
        setInterval(function () {
          o.jMaskGlobals.watchDataMask && o.applyDataMask();
        }, s.watchInterval);
    },
    window.jQuery,
    window.Zepto
  ),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t),
            t
          );
        })
      : n(jQuery);
  })(function (t) {
    var e,
      n,
      i,
      s,
      h,
      a,
      o,
      p,
      f,
      g,
      m,
      v,
      y,
      r,
      l,
      b,
      s =
        (((e =
          t && t.fn && t.fn.select2 && t.fn.select2.amd
            ? t.fn.select2.amd
            : e) &&
          e.requirejs) ||
          (e ? (i = e) : (e = {}),
          (g = {}),
          (m = {}),
          (v = {}),
          (y = {}),
          (r = Object.prototype.hasOwnProperty),
          (l = [].slice),
          (b = /\.js$/),
          (p = function (e, t) {
            var n,
              i,
              s = u(e),
              a = s[0],
              t = t[1];
            return (
              (e = s[1]),
              a && (n = T((a = c(a, t)))),
              a
                ? (e =
                    n && n.normalize
                      ? n.normalize(
                          e,
                          ((i = t),
                          function (e) {
                            return c(e, i);
                          })
                        )
                      : c(e, t))
                : ((a = (s = u((e = c(e, t))))[0]),
                  (e = s[1]),
                  a && (n = T(a))),
              { f: a ? a + "!" + e : e, n: e, pr: a, p: n }
            );
          }),
          (f = {
            require: function (e) {
              return x(e);
            },
            exports: function (e) {
              var t = g[e];
              return void 0 !== t ? t : (g[e] = {});
            },
            module: function (e) {
              return {
                id: e,
                uri: "",
                exports: g[e],
                config:
                  ((t = e),
                  function () {
                    return (v && v.config && v.config[t]) || {};
                  }),
              };
              var t;
            },
          }),
          (a = function (e, t, n, i) {
            var s,
              a,
              o,
              r,
              l,
              c = [],
              u = typeof n,
              d = C((i = i || e));
            if ("undefined" == u || "function" == u) {
              for (
                t =
                  !t.length && n.length ? ["require", "exports", "module"] : t,
                  r = 0;
                r < t.length;
                r += 1
              )
                if ("require" === (a = (o = p(t[r], d)).f)) c[r] = f.require(e);
                else if ("exports" === a) (c[r] = f.exports(e)), (l = !0);
                else if ("module" === a) s = c[r] = f.module(e);
                else if (w(g, a) || w(m, a) || w(y, a)) c[r] = T(a);
                else {
                  if (!o.p) throw new Error(e + " missing " + a);
                  o.p.load(
                    o.n,
                    x(i, !0),
                    (function (t) {
                      return function (e) {
                        g[t] = e;
                      };
                    })(a),
                    {}
                  ),
                    (c[r] = g[a]);
                }
              (u = n ? n.apply(g[e], c) : void 0),
                e &&
                  (s && s.exports !== h && s.exports !== g[e]
                    ? (g[e] = s.exports)
                    : (u === h && l) || (g[e] = u));
            } else e && (g[e] = n);
          }),
          (n =
            i =
            o =
              function (e, t, n, i, s) {
                if ("string" == typeof e)
                  return f[e] ? f[e](t) : T(p(e, C(t)).f);
                if (!e.splice) {
                  if (((v = e).deps && o(v.deps, v.callback), !t)) return;
                  t.splice ? ((e = t), (t = n), (n = null)) : (e = h);
                }
                return (
                  (t = t || function () {}),
                  "function" == typeof n && ((n = i), (i = s)),
                  i
                    ? a(h, e, t, n)
                    : setTimeout(function () {
                        a(h, e, t, n);
                      }, 4),
                  o
                );
              }),
          (o.config = function (e) {
            return o(e);
          }),
          (n._defined = g),
          ((s = function (e, t, n) {
            if ("string" != typeof e)
              throw new Error(
                "See almond README: incorrect module build, no module name"
              );
            t.splice || ((n = t), (t = [])),
              w(g, e) || w(m, e) || (m[e] = [e, t, n]);
          }).amd = { jQuery: !0 }),
          (e.requirejs = n),
          (e.require = i),
          (e.define = s)),
        e.define("almond", function () {}),
        e.define("jquery", [], function () {
          var e = t || $;
          return (
            null == e &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            e
          );
        }),
        e.define("select2/utils", ["jquery"], function (a) {
          var i = {};
          function c(e) {
            var t,
              n = e.prototype,
              i = [];
            for (t in n)
              "function" == typeof n[t] && "constructor" !== t && i.push(t);
            return i;
          }
          function e() {
            this.listeners = {};
          }
          (i.Extend = function (e, t) {
            var n,
              i = {}.hasOwnProperty;
            function s() {
              this.constructor = e;
            }
            for (n in t) i.call(t, n) && (e[n] = t[n]);
            return (
              (s.prototype = t.prototype),
              (e.prototype = new s()),
              (e.__super__ = t.prototype),
              e
            );
          }),
            (i.Decorate = function (i, s) {
              var e = c(s),
                t = c(i);
              function a() {
                var e = Array.prototype.unshift,
                  t = s.prototype.constructor.length,
                  n = i.prototype.constructor;
                0 < t &&
                  (e.call(arguments, i.prototype.constructor),
                  (n = s.prototype.constructor)),
                  n.apply(this, arguments);
              }
              (s.displayName = i.displayName),
                (a.prototype = new (function () {
                  this.constructor = a;
                })());
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                a.prototype[o] = i.prototype[o];
              }
              for (var r = 0; r < e.length; r++) {
                var l = e[r];
                a.prototype[l] = (function (e) {
                  var t = function () {};
                  e in a.prototype && (t = a.prototype[e]);
                  var n = s.prototype[e];
                  return function () {
                    return (
                      Array.prototype.unshift.call(arguments, t),
                      n.apply(this, arguments)
                    );
                  };
                })(l);
              }
              return a;
            }),
            (e.prototype.on = function (e, t) {
              (this.listeners = this.listeners || {}),
                e in this.listeners
                  ? this.listeners[e].push(t)
                  : (this.listeners[e] = [t]);
            }),
            (e.prototype.trigger = function (e) {
              var t = Array.prototype.slice,
                n = t.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                0 === (n = null == n ? [] : n).length && n.push({}),
                (n[0]._type = e) in this.listeners &&
                  this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (e.prototype.invoke = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
            }),
            (i.Observable = e),
            (i.generateChars = function (e) {
              for (var t = "", n = 0; n < e; n++)
                t += Math.floor(36 * Math.random()).toString(36);
              return t;
            }),
            (i.bind = function (e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }),
            (i._convertData = function (e) {
              for (var t in e) {
                var n = t.split("-"),
                  i = e;
                if (1 !== n.length) {
                  for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    (a = a.substring(0, 1).toLowerCase() + a.substring(1)) in
                      i || (i[a] = {}),
                      s == n.length - 1 && (i[a] = e[t]),
                      (i = i[a]);
                  }
                  delete e[t];
                }
              }
              return e;
            }),
            (i.hasScroll = function (e, t) {
              var n = a(t),
                i = t.style.overflowX,
                s = t.style.overflowY;
              return (
                (i !== s || ("hidden" !== s && "visible" !== s)) &&
                ("scroll" === i ||
                  "scroll" === s ||
                  n.innerHeight() < t.scrollHeight ||
                  n.innerWidth() < t.scrollWidth)
              );
            }),
            (i.escapeMarkup = function (e) {
              var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof e
                ? e
                : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e];
                  });
            }),
            (i.appendMany = function (e, t) {
              var n;
              "1.7" === a.fn.jquery.substr(0, 3) &&
                ((n = a()),
                a.map(t, function (e) {
                  n = n.add(e);
                }),
                (t = n)),
                e.append(t);
            }),
            (i.__cache = {});
          var n = 0;
          return (
            (i.GetUniqueElementId = function (e) {
              var t = e.getAttribute("data-select2-id");
              return (
                null == t &&
                  (e.id
                    ? ((t = e.id), e.setAttribute("data-select2-id", t))
                    : (e.setAttribute("data-select2-id", ++n),
                      (t = n.toString()))),
                t
              );
            }),
            (i.StoreData = function (e, t, n) {
              e = i.GetUniqueElementId(e);
              i.__cache[e] || (i.__cache[e] = {}), (i.__cache[e][t] = n);
            }),
            (i.GetData = function (e, t) {
              var n = i.GetUniqueElementId(e);
              return t
                ? i.__cache[n] && null != i.__cache[n][t]
                  ? i.__cache[n][t]
                  : a(e).data(t)
                : i.__cache[n];
            }),
            (i.RemoveData = function (e) {
              var t = i.GetUniqueElementId(e);
              null != i.__cache[t] && delete i.__cache[t],
                e.removeAttribute("data-select2-id");
            }),
            i
          );
        }),
        e.define("select2/results", ["jquery", "./utils"], function (d, h) {
          function i(e, t, n) {
            (this.$element = e),
              (this.data = n),
              (this.options = t),
              i.__super__.constructor.call(this);
          }
          return (
            h.Extend(i, h.Observable),
            (i.prototype.render = function () {
              var e = d(
                '<ul class="select2-results__options" role="listbox"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  e.attr("aria-multiselectable", "true"),
                (this.$results = e)
              );
            }),
            (i.prototype.clear = function () {
              this.$results.empty();
            }),
            (i.prototype.displayMessage = function (e) {
              var t = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var n = d(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                ),
                i = this.options.get("translations").get(e.message);
              n.append(t(i(e.args))),
                (n[0].className += " select2-results__message"),
                this.$results.append(n);
            }),
            (i.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (i.prototype.append = function (e) {
              this.hideLoading();
              var t = [];
              if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                  var i = e.results[n],
                    i = this.option(i);
                  t.push(i);
                }
                this.$results.append(t);
              } else
                0 === this.$results.children().length &&
                  this.trigger("results:message", {
                    message: "noResults",
                  });
            }),
            (i.prototype.position = function (e, t) {
              t.find(".select2-results").append(e);
            }),
            (i.prototype.sort = function (e) {
              return this.options.get("sorter")(e);
            }),
            (i.prototype.highlightFirstItem = function () {
              var e = this.$results.find(
                  ".select2-results__option[aria-selected]"
                ),
                t = e.filter("[aria-selected=true]");
              (0 < t.length ? t : e).first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (i.prototype.setClasses = function () {
              var t = this;
              this.data.current(function (e) {
                var i = d.map(e, function (e) {
                  return e.id.toString();
                });
                t.$results
                  .find(".select2-results__option[aria-selected]")
                  .each(function () {
                    var e = d(this),
                      t = h.GetData(this, "data"),
                      n = "" + t.id;
                    (null != t.element && t.element.selected) ||
                    (null == t.element && -1 < d.inArray(n, i))
                      ? e.attr("aria-selected", "true")
                      : e.attr("aria-selected", "false");
                  });
              });
            }),
            (i.prototype.showLoading = function (e) {
              this.hideLoading();
              (e = {
                disabled: !0,
                loading: !0,
                text: this.options.get("translations").get("searching")(e),
              }),
                (e = this.option(e));
              (e.className += " loading-results"), this.$results.prepend(e);
            }),
            (i.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (i.prototype.option = function (e) {
              var t = document.createElement("li");
              t.className = "select2-results__option";
              var n,
                i = { role: "option", "aria-selected": "false" },
                s =
                  window.Element.prototype.matches ||
                  window.Element.prototype.msMatchesSelector ||
                  window.Element.prototype.webkitMatchesSelector;
              for (n in (((null != e.element &&
                s.call(e.element, ":disabled")) ||
                (null == e.element && e.disabled)) &&
                (delete i["aria-selected"], (i["aria-disabled"] = "true")),
              null == e.id && delete i["aria-selected"],
              null != e._resultId && (t.id = e._resultId),
              e.title && (t.title = e.title),
              e.children &&
                ((i.role = "group"),
                (i["aria-label"] = e.text),
                delete i["aria-selected"]),
              i)) {
                var a = i[n];
                t.setAttribute(n, a);
              }
              if (e.children) {
                var o = d(t),
                  r = document.createElement("strong");
                (r.className = "select2-results__group"),
                  d(r),
                  this.template(e, r);
                for (var l = [], c = 0; c < e.children.length; c++) {
                  var u = e.children[c],
                    u = this.option(u);
                  l.push(u);
                }
                s = d("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                });
                s.append(l), o.append(r), o.append(s);
              } else this.template(e, t);
              return h.StoreData(t, "data", e), t;
            }),
            (i.prototype.bind = function (t, e) {
              var s = this,
                n = t.id + "-results";
              this.$results.attr("id", n),
                t.on("results:all", function (e) {
                  s.clear(),
                    s.append(e.data),
                    t.isOpen() && (s.setClasses(), s.highlightFirstItem());
                }),
                t.on("results:append", function (e) {
                  s.append(e.data), t.isOpen() && s.setClasses();
                }),
                t.on("query", function (e) {
                  s.hideMessages(), s.showLoading(e);
                }),
                t.on("select", function () {
                  t.isOpen() &&
                    (s.setClasses(),
                    s.options.get("scrollAfterSelect") &&
                      s.highlightFirstItem());
                }),
                t.on("unselect", function () {
                  t.isOpen() &&
                    (s.setClasses(),
                    s.options.get("scrollAfterSelect") &&
                      s.highlightFirstItem());
                }),
                t.on("open", function () {
                  s.$results.attr("aria-expanded", "true"),
                    s.$results.attr("aria-hidden", "false"),
                    s.setClasses(),
                    s.ensureHighlightVisible();
                }),
                t.on("close", function () {
                  s.$results.attr("aria-expanded", "false"),
                    s.$results.attr("aria-hidden", "true"),
                    s.$results.removeAttr("aria-activedescendant");
                }),
                t.on("results:toggle", function () {
                  var e = s.getHighlightedResults();
                  0 !== e.length && e.trigger("mouseup");
                }),
                t.on("results:select", function () {
                  var e,
                    t = s.getHighlightedResults();
                  0 !== t.length &&
                    ((e = h.GetData(t[0], "data")),
                    "true" == t.attr("aria-selected")
                      ? s.trigger("close", {})
                      : s.trigger("select", { data: e }));
                }),
                t.on("results:previous", function () {
                  var e,
                    t = s.getHighlightedResults(),
                    n = s.$results.find("[aria-selected]"),
                    i = n.index(t);
                  i <= 0 ||
                    ((e = i - 1),
                    0 === t.length && (e = 0),
                    (i = n.eq(e)).trigger("mouseenter"),
                    (t = s.$results.offset().top),
                    (n = i.offset().top),
                    (i = s.$results.scrollTop() + (n - t)),
                    0 === e
                      ? s.$results.scrollTop(0)
                      : n - t < 0 && s.$results.scrollTop(i));
                }),
                t.on("results:next", function () {
                  var e,
                    t = s.getHighlightedResults(),
                    n = s.$results.find("[aria-selected]"),
                    i = n.index(t) + 1;
                  i >= n.length ||
                    ((e = n.eq(i)).trigger("mouseenter"),
                    (t = s.$results.offset().top + s.$results.outerHeight(!1)),
                    (n = e.offset().top + e.outerHeight(!1)),
                    (e = s.$results.scrollTop() + n - t),
                    0 === i
                      ? s.$results.scrollTop(0)
                      : t < n && s.$results.scrollTop(e));
                }),
                t.on("results:focus", function (e) {
                  e.element.addClass("select2-results__option--highlighted");
                }),
                t.on("results:message", function (e) {
                  s.displayMessage(e);
                }),
                d.fn.mousewheel &&
                  this.$results.on("mousewheel", function (e) {
                    var t = s.$results.scrollTop(),
                      n = s.$results.get(0).scrollHeight - t + e.deltaY,
                      t = 0 < e.deltaY && t - e.deltaY <= 0,
                      n = e.deltaY < 0 && n <= s.$results.height();
                    t
                      ? (s.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation())
                      : n &&
                        (s.$results.scrollTop(
                          s.$results.get(0).scrollHeight - s.$results.height()
                        ),
                        e.preventDefault(),
                        e.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[aria-selected]",
                  function (e) {
                    var t = d(this),
                      n = h.GetData(this, "data");
                    "true" !== t.attr("aria-selected")
                      ? s.trigger("select", {
                          originalEvent: e,
                          data: n,
                        })
                      : s.options.get("multiple")
                      ? s.trigger("unselect", {
                          originalEvent: e,
                          data: n,
                        })
                      : s.trigger("close", {});
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[aria-selected]",
                  function (e) {
                    var t = h.GetData(this, "data");
                    s
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted"),
                      s.trigger("results:focus", {
                        data: t,
                        element: d(this),
                      });
                  }
                );
            }),
            (i.prototype.getHighlightedResults = function () {
              return this.$results.find(
                ".select2-results__option--highlighted"
              );
            }),
            (i.prototype.destroy = function () {
              this.$results.remove();
            }),
            (i.prototype.ensureHighlightVisible = function () {
              var e,
                t,
                n,
                i,
                s = this.getHighlightedResults();
              0 !== s.length &&
                ((e = this.$results.find("[aria-selected]").index(s)),
                (i = this.$results.offset().top),
                (t = s.offset().top),
                (n = this.$results.scrollTop() + (t - i)),
                (i = t - i),
                (n -= 2 * s.outerHeight(!1)),
                e <= 2
                  ? this.$results.scrollTop(0)
                  : (i > this.$results.outerHeight() || i < 0) &&
                    this.$results.scrollTop(n));
            }),
            (i.prototype.template = function (e, t) {
              var n = this.options.get("templateResult"),
                i = this.options.get("escapeMarkup"),
                e = n(e, t);
              null == e
                ? (t.style.display = "none")
                : "string" == typeof e
                ? (t.innerHTML = i(e))
                : d(t).append(e);
            }),
            i
          );
        }),
        e.define("select2/keys", [], function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
        }),
        e.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (n, i, s) {
            function a(e, t) {
              (this.$element = e),
                (this.options = t),
                a.__super__.constructor.call(this);
            }
            return (
              i.Extend(a, i.Observable),
              (a.prototype.render = function () {
                var e = n(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != i.GetData(this.$element[0], "old-tabindex")
                    ? (this._tabindex = i.GetData(
                        this.$element[0],
                        "old-tabindex"
                      ))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  e.attr("title", this.$element.attr("title")),
                  e.attr("tabindex", this._tabindex),
                  e.attr("aria-disabled", "false"),
                  (this.$selection = e)
                );
              }),
              (a.prototype.bind = function (e, t) {
                var n = this,
                  i = e.id + "-results";
                (this.container = e),
                  this.$selection.on("focus", function (e) {
                    n.trigger("focus", e);
                  }),
                  this.$selection.on("blur", function (e) {
                    n._handleBlur(e);
                  }),
                  this.$selection.on("keydown", function (e) {
                    n.trigger("keypress", e),
                      e.which === s.SPACE && e.preventDefault();
                  }),
                  e.on("results:focus", function (e) {
                    n.$selection.attr(
                      "aria-activedescendant",
                      e.data._resultId
                    );
                  }),
                  e.on("selection:update", function (e) {
                    n.update(e.data);
                  }),
                  e.on("open", function () {
                    n.$selection.attr("aria-expanded", "true"),
                      n.$selection.attr("aria-owns", i),
                      n._attachCloseHandler(e);
                  }),
                  e.on("close", function () {
                    n.$selection.attr("aria-expanded", "false"),
                      n.$selection.removeAttr("aria-activedescendant"),
                      n.$selection.removeAttr("aria-owns"),
                      n.$selection.trigger("focus"),
                      n._detachCloseHandler(e);
                  }),
                  e.on("enable", function () {
                    n.$selection.attr("tabindex", n._tabindex),
                      n.$selection.attr("aria-disabled", "false");
                  }),
                  e.on("disable", function () {
                    n.$selection.attr("tabindex", "-1"),
                      n.$selection.attr("aria-disabled", "true");
                  });
              }),
              (a.prototype._handleBlur = function (e) {
                var t = this;
                window.setTimeout(function () {
                  document.activeElement == t.$selection[0] ||
                    n.contains(t.$selection[0], document.activeElement) ||
                    t.trigger("blur", e);
                }, 1);
              }),
              (a.prototype._attachCloseHandler = function (e) {
                n(document.body).on("mousedown.select2." + e.id, function (e) {
                  var t = n(e.target).closest(".select2");
                  n(".select2.select2-container--open").each(function () {
                    this != t[0] && i.GetData(this, "element").select2("close");
                  });
                });
              }),
              (a.prototype._detachCloseHandler = function (e) {
                n(document.body).off("mousedown.select2." + e.id);
              }),
              (a.prototype.position = function (e, t) {
                t.find(".selection").append(e);
              }),
              (a.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (a.prototype.update = function (e) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              (a.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (a.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              a
            );
          }
        ),
        e.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (e, t, n, i) {
            function s() {
              s.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(s, t),
              (s.prototype.render = function () {
                var e = s.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--single"),
                  e.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  e
                );
              }),
              (s.prototype.bind = function (t, e) {
                var n = this;
                s.__super__.bind.apply(this, arguments);
                var i = t.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", i)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", i),
                  this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on("focus", function (e) {}),
                  this.$selection.on("blur", function (e) {}),
                  t.on("focus", function (e) {
                    t.isOpen() || n.$selection.trigger("focus");
                  });
              }),
              (s.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (s.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (s.prototype.selectionContainer = function () {
                return e("<span></span>");
              }),
              (s.prototype.update = function (e) {
                var t, n;
                0 !== e.length
                  ? ((n = e[0]),
                    (t = this.$selection.find(".select2-selection__rendered")),
                    (e = this.display(n, t)),
                    t.empty().append(e),
                    (n = n.title || n.text)
                      ? t.attr("title", n)
                      : t.removeAttr("title"))
                  : this.clear();
              }),
              s
            );
          }
        ),
        e.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (i, e, r) {
            function s(e, t) {
              s.__super__.constructor.apply(this, arguments);
            }
            return (
              r.Extend(s, e),
              (s.prototype.render = function () {
                var e = s.__super__.render.call(this);
                return (
                  e.addClass("select2-selection--multiple"),
                  e.html('<ul class="select2-selection__rendered"></ul>'),
                  e
                );
              }),
              (s.prototype.bind = function (e, t) {
                var n = this;
                s.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function (e) {
                    n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (e) {
                      var t;
                      n.isDisabled() ||
                        ((t = i(this).parent()),
                        (t = r.GetData(t[0], "data")),
                        n.trigger("unselect", {
                          originalEvent: e,
                          data: t,
                        }));
                    }
                  );
              }),
              (s.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (s.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (s.prototype.selectionContainer = function () {
                return i(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
              }),
              (s.prototype.update = function (e) {
                if ((this.clear(), 0 !== e.length)) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n],
                      s = this.selectionContainer(),
                      a = this.display(i, s);
                    s.append(a);
                    a = i.title || i.text;
                    a && s.attr("title", a),
                      r.StoreData(s[0], "data", i),
                      t.push(s);
                  }
                  var o = this.$selection.find(".select2-selection__rendered");
                  r.appendMany(o, t);
                }
              }),
              s
            );
          }
        ),
        e.define("select2/selection/placeholder", ["../utils"], function (e) {
          function t(e, t, n) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n);
          }
          return (
            (t.prototype.normalizePlaceholder = function (e, t) {
              return (t = "string" == typeof t ? { id: "", text: t } : t);
            }),
            (t.prototype.createPlaceholder = function (e, t) {
              var n = this.selectionContainer();
              return (
                n.html(this.display(t)),
                n
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                n
              );
            }),
            (t.prototype.update = function (e, t) {
              var n = 1 == t.length && t[0].id != this.placeholder.id;
              if (1 < t.length || n) return e.call(this, t);
              this.clear();
              t = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(t);
            }),
            t
          );
        }),
        e.define(
          "select2/selection/allowClear",
          ["jquery", "../keys", "../utils"],
          function (n, i, r) {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (e) {
                      i._handleClear(e);
                    }
                  ),
                  t.on("keypress", function (e) {
                    i._handleKeyboardClear(e, t);
                  });
              }),
              (e.prototype._handleClear = function (e, t) {
                if (!this.isDisabled()) {
                  var n = this.$selection.find(".select2-selection__clear");
                  if (0 !== n.length) {
                    t.stopPropagation();
                    var i = r.GetData(n[0], "data"),
                      s = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var a = { data: i };
                    if ((this.trigger("clear", a), a.prevented))
                      this.$element.val(s);
                    else {
                      for (var o = 0; o < i.length; o++)
                        if (
                          ((a = { data: i[o] }),
                          this.trigger("unselect", a),
                          a.prevented)
                        )
                          return void this.$element.val(s);
                      this.$element.trigger("input").trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }
              }),
              (e.prototype._handleKeyboardClear = function (e, t, n) {
                n.isOpen() ||
                  (t.which != i.DELETE && t.which != i.BACKSPACE) ||
                  this._handleClear(t);
              }),
              (e.prototype.update = function (e, t) {
                e.call(this, t),
                  0 <
                    this.$selection.find(".select2-selection__placeholder")
                      .length ||
                    0 === t.length ||
                    ((e = this.options
                      .get("translations")
                      .get("removeAllItems")),
                    (e = n(
                      '<span class="select2-selection__clear" title="' +
                        e() +
                        '">&times;</span>'
                    )),
                    r.StoreData(e[0], "data", t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(e));
              }),
              e
            );
          }
        ),
        e.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (n, o, r) {
            function e(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (e.prototype.render = function (e) {
                var t = n(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = t), (this.$search = t.find("input"));
                e = e.call(this);
                return this._transferTabIndex(), e;
              }),
              (e.prototype.bind = function (e, t, n) {
                var i = this,
                  s = t.id + "-results";
                e.call(this, t, n),
                  t.on("open", function () {
                    i.$search.attr("aria-controls", s),
                      i.$search.trigger("focus");
                  }),
                  t.on("close", function () {
                    i.$search.val(""),
                      i.$search.removeAttr("aria-controls"),
                      i.$search.removeAttr("aria-activedescendant"),
                      i.$search.trigger("focus");
                  }),
                  t.on("enable", function () {
                    i.$search.prop("disabled", !1), i._transferTabIndex();
                  }),
                  t.on("disable", function () {
                    i.$search.prop("disabled", !0);
                  }),
                  t.on("focus", function (e) {
                    i.$search.trigger("focus");
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? i.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
                      : i.$search.removeAttr("aria-activedescendant");
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (e) {
                      i.trigger("focus", e);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (e) {
                      i._handleBlur(e);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (e) {
                      var t;
                      e.stopPropagation(),
                        i.trigger("keypress", e),
                        (i._keyUpPrevented = e.isDefaultPrevented()),
                        e.which === r.BACKSPACE &&
                          "" === i.$search.val() &&
                          0 <
                            (t = i.$searchContainer.prev(
                              ".select2-selection__choice"
                            )).length &&
                          ((t = o.GetData(t[0], "data")),
                          i.searchRemoveChoice(t),
                          e.preventDefault());
                    }
                  ),
                  this.$selection.on(
                    "click",
                    ".select2-search--inline",
                    function (e) {
                      i.$search.val() && e.stopPropagation();
                    }
                  );
                var t = document.documentMode,
                  a = t && t <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (e) {
                    a
                      ? i.$selection.off("input.search input.searchcheck")
                      : i.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (e) {
                      var t;
                      a && "input" === e.type
                        ? i.$selection.off("input.search input.searchcheck")
                        : (t = e.which) != r.SHIFT &&
                          t != r.CTRL &&
                          t != r.ALT &&
                          t != r.TAB &&
                          i.handleSearch(e);
                    }
                  );
              }),
              (e.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (e.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text);
              }),
              (e.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  e.call(this, t),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  n && this.$search.trigger("focus");
              }),
              (e.prototype.handleSearch = function () {
                var e;
                this.resizeSearch(),
                  this._keyUpPrevented ||
                    ((e = this.$search.val()),
                    this.trigger("query", { term: e })),
                  (this._keyUpPrevented = !1);
              }),
              (e.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", { data: t }),
                  this.$search.val(t.text),
                  this.handleSearch();
              }),
              (e.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "",
                  e =
                    "" !== this.$search.attr("placeholder")
                      ? this.$selection
                          .find(".select2-selection__rendered")
                          .width()
                      : 0.75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", e);
              }),
              e
            );
          }
        ),
        e.define("select2/selection/eventRelay", ["jquery"], function (o) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this,
                s = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                  "clear",
                  "clearing",
                ],
                a = [
                  "opening",
                  "closing",
                  "selecting",
                  "unselecting",
                  "clearing",
                ];
              e.call(this, t, n),
                t.on("*", function (e, t) {
                  var n;
                  -1 !== o.inArray(e, s) &&
                    ((n = o.Event("select2:" + e, {
                      params: (t = t || {}),
                    })),
                    i.$element.trigger(n),
                    -1 !== o.inArray(e, a) &&
                      (t.prevented = n.isDefaultPrevented()));
                });
            }),
            e
          );
        }),
        e.define("select2/translation", ["jquery", "require"], function (t, n) {
          function i(e) {
            this.dict = e || {};
          }
          return (
            (i.prototype.all = function () {
              return this.dict;
            }),
            (i.prototype.get = function (e) {
              return this.dict[e];
            }),
            (i.prototype.extend = function (e) {
              this.dict = t.extend({}, e.all(), this.dict);
            }),
            (i._cache = {}),
            (i.loadPath = function (e) {
              var t;
              return (
                e in i._cache || ((t = n(e)), (i._cache[e] = t)),
                new i(i._cache[e])
              );
            }),
            i
          );
        }),
        e.define("select2/diacritics", [], function () {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Œ: "OE",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            œ: "oe",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ώ: "ω",
            ς: "σ",
            "’": "'",
          };
        }),
        e.define("select2/data/base", ["../utils"], function (n) {
          function i(e, t) {
            i.__super__.constructor.call(this);
          }
          return (
            n.Extend(i, n.Observable),
            (i.prototype.current = function (e) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (i.prototype.query = function (e, t) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (i.prototype.bind = function (e, t) {}),
            (i.prototype.destroy = function () {}),
            (i.prototype.generateResultId = function (e, t) {
              e = e.id + "-result-";
              return (
                (e += n.generateChars(4)),
                null != t.id
                  ? (e += "-" + t.id.toString())
                  : (e += "-" + n.generateChars(4)),
                e
              );
            }),
            i
          );
        }),
        e.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (e, o, r) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              o.Extend(n, e),
              (n.prototype.current = function (e) {
                var t = [],
                  n = this;
                this.$element.find(":selected").each(function () {
                  var e = r(this),
                    e = n.item(e);
                  t.push(e);
                }),
                  e(t);
              }),
              (n.prototype.select = function (s) {
                var e,
                  a = this;
                if (((s.selected = !0), r(s.element).is("option")))
                  return (
                    (s.element.selected = !0),
                    void this.$element.trigger("input").trigger("change")
                  );
                this.$element.prop("multiple")
                  ? this.current(function (e) {
                      var t = [];
                      (s = [s]).push.apply(s, e);
                      for (var n = 0; n < s.length; n++) {
                        var i = s[n].id;
                        -1 === r.inArray(i, t) && t.push(i);
                      }
                      a.$element.val(t),
                        a.$element.trigger("input").trigger("change");
                    })
                  : ((e = s.id),
                    this.$element.val(e),
                    this.$element.trigger("input").trigger("change"));
              }),
              (n.prototype.unselect = function (s) {
                var a = this;
                if (this.$element.prop("multiple")) {
                  if (((s.selected = !1), r(s.element).is("option")))
                    return (
                      (s.element.selected = !1),
                      void this.$element.trigger("input").trigger("change")
                    );
                  this.current(function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                      var i = e[n].id;
                      i !== s.id && -1 === r.inArray(i, t) && t.push(i);
                    }
                    a.$element.val(t),
                      a.$element.trigger("input").trigger("change");
                  });
                }
              }),
              (n.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {
                  n.select(e.data);
                }),
                  e.on("unselect", function (e) {
                    n.unselect(e.data);
                  });
              }),
              (n.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  o.RemoveData(this);
                });
              }),
              (n.prototype.query = function (t, e) {
                var n = [],
                  i = this;
                this.$element.children().each(function () {
                  var e = r(this);
                  (e.is("option") || e.is("optgroup")) &&
                    ((e = i.item(e)),
                    null !== (e = i.matches(t, e)) && n.push(e));
                }),
                  e({ results: n });
              }),
              (n.prototype.addOptions = function (e) {
                o.appendMany(this.$element, e);
              }),
              (n.prototype.option = function (e) {
                var t;
                e.children
                  ? ((t = document.createElement("optgroup")).label = e.text)
                  : void 0 !==
                    (t = document.createElement("option")).textContent
                  ? (t.textContent = e.text)
                  : (t.innerText = e.text),
                  void 0 !== e.id && (t.value = e.id),
                  e.disabled && (t.disabled = !0),
                  e.selected && (t.selected = !0),
                  e.title && (t.title = e.title);
                var n = r(t),
                  e = this._normalizeItem(e);
                return (e.element = t), o.StoreData(t, "data", e), n;
              }),
              (n.prototype.item = function (e) {
                var t = {};
                if (null != (t = o.GetData(e[0], "data"))) return t;
                if (e.is("option"))
                  t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title"),
                  };
                else if (e.is("optgroup")) {
                  for (
                    var t = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title"),
                      },
                      n = e.children("option"),
                      i = [],
                      s = 0;
                    s < n.length;
                    s++
                  ) {
                    var a = r(n[s]),
                      a = this.item(a);
                    i.push(a);
                  }
                  t.children = i;
                }
                return (
                  ((t = this._normalizeItem(t)).element = e[0]),
                  o.StoreData(e[0], "data", t),
                  t
                );
              }),
              (n.prototype._normalizeItem = function (e) {
                return (
                  e !== Object(e) && (e = { id: e, text: e }),
                  null != (e = r.extend({}, { text: "" }, e)).id &&
                    (e.id = e.id.toString()),
                  null != e.text && (e.text = e.text.toString()),
                  null == e._resultId &&
                    e.id &&
                    null != this.container &&
                    (e._resultId = this.generateResultId(this.container, e)),
                  r.extend({}, { selected: !1, disabled: !1 }, e)
                );
              }),
              (n.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t);
              }),
              n
            );
          }
        ),
        e.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (e, c, u) {
            function i(e, t) {
              (this._dataToConvert = t.get("data") || []),
                i.__super__.constructor.call(this, e, t);
            }
            return (
              c.Extend(i, e),
              (i.prototype.bind = function (e, t) {
                i.__super__.bind.call(this, e, t),
                  this.addOptions(this.convertToOptions(this._dataToConvert));
              }),
              (i.prototype.select = function (n) {
                var e;
                0 ===
                  (e = this.$element.find("option").filter(function (e, t) {
                    return t.value == n.id.toString();
                  })).length && ((e = this.option(n)), this.addOptions(e)),
                  i.__super__.select.call(this, n);
              }),
              (i.prototype.convertToOptions = function (e) {
                var t = this,
                  n = this.$element.find("option"),
                  i = n
                    .map(function () {
                      return t.item(u(this)).id;
                    })
                    .get(),
                  s = [];
                for (var a = 0; a < e.length; a++) {
                  var o,
                    r,
                    l = this._normalizeItem(e[a]);
                  0 <= u.inArray(l.id, i)
                    ? ((o = n.filter(
                        (function (e) {
                          return function () {
                            return u(this).val() == e.id;
                          };
                        })(l)
                      )),
                      (r = this.item(o)),
                      (r = u.extend(!0, {}, l, r)),
                      (r = this.option(r)),
                      o.replaceWith(r))
                    : ((r = this.option(l)),
                      l.children &&
                        ((l = this.convertToOptions(l.children)),
                        c.appendMany(r, l)),
                      s.push(r));
                }
                return s;
              }),
              i
            );
          }
        ),
        e.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (e, t, a) {
            function n(e, t) {
              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                n.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(n, e),
              (n.prototype._applyDefaults = function (e) {
                var t = {
                  data: function (e) {
                    return a.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, n) {
                    e = a.ajax(e);
                    return e.then(t), e.fail(n), e;
                  },
                };
                return a.extend({}, t, e, !0);
              }),
              (n.prototype.processResults = function (e) {
                return e;
              }),
              (n.prototype.query = function (t, n) {
                var i = this;
                null != this._request &&
                  (a.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var s = a.extend({ type: "GET" }, this.ajaxOptions);
                function e() {
                  var e = s.transport(
                    s,
                    function (e) {
                      e = i.processResults(e, t);
                      i.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((e && e.results && a.isArray(e.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        n(e);
                    },
                    function () {
                      ("status" in e && (0 === e.status || "0" === e.status)) ||
                        i.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  i._request = e;
                }
                "function" == typeof s.url &&
                  (s.url = s.url.call(this.$element, t)),
                  "function" == typeof s.data &&
                    (s.data = s.data.call(this.$element, t)),
                  this.ajaxOptions.delay && null != t.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        e,
                        this.ajaxOptions.delay
                      )))
                    : e();
              }),
              n
            );
          }
        ),
        e.define("select2/data/tags", ["jquery"], function (r) {
          function e(e, t, n) {
            var i = n.get("tags"),
              s = n.get("createTag");
            void 0 !== s && (this.createTag = s);
            s = n.get("insertTag");
            if (
              (void 0 !== s && (this.insertTag = s),
              e.call(this, t, n),
              r.isArray(i))
            )
              for (var a = 0; a < i.length; a++) {
                var o = i[a],
                  o = this._normalizeItem(o),
                  o = this.option(o);
                this.$element.append(o);
              }
          }
          return (
            (e.prototype.query = function (e, c, u) {
              var d = this;
              this._removeOldTags(),
                null != c.term && null == c.page
                  ? e.call(this, c, function e(t, n) {
                      for (var i = t.results, s = 0; s < i.length; s++) {
                        var a = i[s],
                          o =
                            null != a.children &&
                            !e({ results: a.children }, !0);
                        if (
                          (a.text || "").toUpperCase() ===
                            (c.term || "").toUpperCase() ||
                          o
                        )
                          return !n && ((t.data = i), void u(t));
                      }
                      if (n) return !0;
                      var r,
                        l = d.createTag(c);
                      null != l &&
                        ((r = d.option(l)).attr("data-select2-tag", !0),
                        d.addOptions([r]),
                        d.insertTag(i, l)),
                        (t.results = i),
                        u(t);
                    })
                  : e.call(this, c, u);
            }),
            (e.prototype.createTag = function (e, t) {
              t = r.trim(t.term);
              return "" === t ? null : { id: t, text: t };
            }),
            (e.prototype.insertTag = function (e, t, n) {
              t.unshift(n);
            }),
            (e.prototype._removeOldTags = function (e) {
              this.$element.find("option[data-select2-tag]").each(function () {
                this.selected || r(this).remove();
              });
            }),
            e
          );
        }),
        e.define("select2/data/tokenizer", ["jquery"], function (c) {
          function e(e, t, n) {
            var i = n.get("tokenizer");
            void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              e.call(this, t, n),
                (this.$search =
                  t.dropdown.$search ||
                  t.selection.$search ||
                  n.find(".select2-search__field"));
            }),
            (e.prototype.query = function (e, t, n) {
              var i = this;
              t.term = t.term || "";
              var s = this.tokenizer(t, this.options, function (e) {
                var t = i._normalizeItem(e);
                i.$element.find("option").filter(function () {
                  return c(this).val() === t.id;
                }).length ||
                  ((e = i.option(t)).attr("data-select2-tag", !0),
                  i._removeOldTags(),
                  i.addOptions([e])),
                  i.trigger("select", { data: t });
              });
              s.term !== t.term &&
                (this.$search.length &&
                  (this.$search.val(s.term), this.$search.trigger("focus")),
                (t.term = s.term)),
                e.call(this, t, n);
            }),
            (e.prototype.tokenizer = function (e, t, n, i) {
              for (
                var s = n.get("tokenSeparators") || [],
                  a = t.term,
                  o = 0,
                  r =
                    this.createTag ||
                    function (e) {
                      return { id: e.term, text: e.term };
                    };
                o < a.length;

              ) {
                var l = a[o];
                -1 !== c.inArray(l, s)
                  ? ((l = a.substr(0, o)),
                    null != (l = r(c.extend({}, t, { term: l })))
                      ? (i(l), (a = a.substr(o + 1) || ""), (o = 0))
                      : o++)
                  : o++;
              }
              return { term: a };
            }),
            e
          );
        }),
        e.define("select2/data/minimumInputLength", [], function () {
          function e(e, t, n) {
            (this.minimumInputLength = n.get("minimumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                t.term.length < this.minimumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumInputLength", [], function () {
          function e(e, t, n) {
            (this.maximumInputLength = n.get("maximumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                0 < this.maximumInputLength &&
                t.term.length > this.maximumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        e.define("select2/data/maximumSelectionLength", [], function () {
          function e(e, t, n) {
            (this.maximumSelectionLength = n.get("maximumSelectionLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("select", function () {
                  i._checkIfMaximumSelected();
                });
            }),
            (e.prototype.query = function (e, t, n) {
              var i = this;
              this._checkIfMaximumSelected(function () {
                e.call(i, t, n);
              });
            }),
            (e.prototype._checkIfMaximumSelected = function (e, t) {
              var n = this;
              this.current(function (e) {
                e = null != e ? e.length : 0;
                0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                  ? n.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: n.maximumSelectionLength },
                    })
                  : t && t();
              });
            }),
            e
          );
        }),
        e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            e.Extend(n, e.Observable),
            (n.prototype.render = function () {
              var e = t(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                e.attr("dir", this.options.get("dir")), (this.$dropdown = e)
              );
            }),
            (n.prototype.bind = function () {}),
            (n.prototype.position = function (e, t) {}),
            (n.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            n
          );
        }),
        e.define(
          "select2/dropdown/search",
          ["jquery", "../utils"],
          function (a, e) {
            function t() {}
            return (
              (t.prototype.render = function (e) {
                var t = e.call(this),
                  e = a(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                  );
                return (
                  (this.$searchContainer = e),
                  (this.$search = e.find("input")),
                  t.prepend(e),
                  t
                );
              }),
              (t.prototype.bind = function (e, t, n) {
                var i = this,
                  s = t.id + "-results";
                e.call(this, t, n),
                  this.$search.on("keydown", function (e) {
                    i.trigger("keypress", e),
                      (i._keyUpPrevented = e.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (e) {
                    a(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (e) {
                    i.handleSearch(e);
                  }),
                  t.on("open", function () {
                    i.$search.attr("tabindex", 0),
                      i.$search.attr("aria-controls", s),
                      i.$search.trigger("focus"),
                      window.setTimeout(function () {
                        i.$search.trigger("focus");
                      }, 0);
                  }),
                  t.on("close", function () {
                    i.$search.attr("tabindex", -1),
                      i.$search.removeAttr("aria-controls"),
                      i.$search.removeAttr("aria-activedescendant"),
                      i.$search.val(""),
                      i.$search.trigger("blur");
                  }),
                  t.on("focus", function () {
                    t.isOpen() || i.$search.trigger("focus");
                  }),
                  t.on("results:all", function (e) {
                    (null != e.query.term && "" !== e.query.term) ||
                      (i.showSearch(e)
                        ? i.$searchContainer.removeClass("select2-search--hide")
                        : i.$searchContainer.addClass("select2-search--hide"));
                  }),
                  t.on("results:focus", function (e) {
                    e.data._resultId
                      ? i.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
                      : i.$search.removeAttr("aria-activedescendant");
                  });
              }),
              (t.prototype.handleSearch = function (e) {
                var t;
                this._keyUpPrevented ||
                  ((t = this.$search.val()),
                  this.trigger("query", { term: t })),
                  (this._keyUpPrevented = !1);
              }),
              (t.prototype.showSearch = function (e, t) {
                return !0;
              }),
              t
            );
          }
        ),
        e.define("select2/dropdown/hidePlaceholder", [], function () {
          function e(e, t, n, i) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n, i);
          }
          return (
            (e.prototype.append = function (e, t) {
              (t.results = this.removePlaceholder(t.results)), e.call(this, t);
            }),
            (e.prototype.normalizePlaceholder = function (e, t) {
              return (t = "string" == typeof t ? { id: "", text: t } : t);
            }),
            (e.prototype.removePlaceholder = function (e, t) {
              for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                var s = t[i];
                this.placeholder.id === s.id && n.splice(i, 1);
              }
              return n;
            }),
            e
          );
        }),
        e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
          function e(e, t, n, i) {
            (this.lastParams = {}),
              e.call(this, t, n, i),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (e.prototype.append = function (e, t) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                e.call(this, t),
                this.showLoadingMore(t) &&
                  (this.$results.append(this.$loadingMore),
                  this.loadMoreIfNeeded());
            }),
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("query", function (e) {
                  (i.lastParams = e), (i.loading = !0);
                }),
                t.on("query:append", function (e) {
                  (i.lastParams = e), (i.loading = !0);
                }),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }),
            (e.prototype.loadMoreIfNeeded = function () {
              var e = n.contains(
                document.documentElement,
                this.$loadingMore[0]
              );
              !this.loading &&
                e &&
                ((e =
                  this.$results.offset().top + this.$results.outerHeight(!1)),
                this.$loadingMore.offset().top +
                  this.$loadingMore.outerHeight(!1) <=
                  e + 50 && this.loadMore());
            }),
            (e.prototype.loadMore = function () {
              this.loading = !0;
              var e = n.extend({}, { page: 1 }, this.lastParams);
              e.page++, this.trigger("query:append", e);
            }),
            (e.prototype.showLoadingMore = function (e, t) {
              return t.pagination && t.pagination.more;
            }),
            (e.prototype.createLoadingMore = function () {
              var e = n(
                  '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                ),
                t = this.options.get("translations").get("loadingMore");
              return e.html(t(this.lastParams)), e;
            }),
            e
          );
        }),
        e.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (u, o) {
            function e(e, t, n) {
              (this.$dropdownParent = u(
                n.get("dropdownParent") || document.body
              )),
                e.call(this, t, n);
            }
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("open", function () {
                    i._showDropdown(),
                      i._attachPositioningHandler(t),
                      i._bindContainerResultHandlers(t);
                  }),
                  t.on("close", function () {
                    i._hideDropdown(), i._detachPositioningHandler(t);
                  }),
                  this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation();
                  });
              }),
              (e.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove();
              }),
              (e.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")),
                  t.removeClass("select2"),
                  t.addClass("select2-container--open"),
                  t.css({ position: "absolute", top: -999999 }),
                  (this.$container = n);
              }),
              (e.prototype.render = function (e) {
                var t = u("<span></span>"),
                  e = e.call(this);
                return t.append(e), (this.$dropdownContainer = t);
              }),
              (e.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach();
              }),
              (e.prototype._bindContainerResultHandlers = function (e, t) {
                var n;
                this._containerResultsHandlersBound ||
                  ((n = this),
                  t.on("results:all", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("results:append", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("results:message", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("select", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  t.on("unselect", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                  (this._containerResultsHandlersBound = !0));
              }),
              (e.prototype._attachPositioningHandler = function (e, t) {
                var n = this,
                  i = "scroll.select2." + t.id,
                  s = "resize.select2." + t.id,
                  a = "orientationchange.select2." + t.id,
                  t = this.$container.parents().filter(o.hasScroll);
                t.each(function () {
                  o.StoreData(this, "select2-scroll-position", {
                    x: u(this).scrollLeft(),
                    y: u(this).scrollTop(),
                  });
                }),
                  t.on(i, function (e) {
                    var t = o.GetData(this, "select2-scroll-position");
                    u(this).scrollTop(t.y);
                  }),
                  u(window).on(i + " " + s + " " + a, function (e) {
                    n._positionDropdown(), n._resizeDropdown();
                  });
              }),
              (e.prototype._detachPositioningHandler = function (e, t) {
                var n = "scroll.select2." + t.id,
                  i = "resize.select2." + t.id,
                  t = "orientationchange.select2." + t.id;
                this.$container.parents().filter(o.hasScroll).off(n),
                  u(window).off(n + " " + i + " " + t);
              }),
              (e.prototype._positionDropdown = function () {
                var e = u(window),
                  t = this.$dropdown.hasClass("select2-dropdown--above"),
                  n = this.$dropdown.hasClass("select2-dropdown--below"),
                  i = null,
                  s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var a = { height: this.$container.outerHeight(!1) };
                (a.top = s.top), (a.bottom = s.top + a.height);
                var o = this.$dropdown.outerHeight(!1),
                  r = e.scrollTop(),
                  l = e.scrollTop() + e.height(),
                  c = r < s.top - o,
                  e = l > s.bottom + o,
                  r = { left: s.left, top: a.bottom },
                  l = this.$dropdownParent;
                "static" === l.css("position") && (l = l.offsetParent());
                s = { top: 0, left: 0 };
                (u.contains(document.body, l[0]) || l[0].isConnected) &&
                  (s = l.offset()),
                  (r.top -= s.top),
                  (r.left -= s.left),
                  t || n || (i = "below"),
                  e || !c || t ? !c && e && t && (i = "below") : (i = "above"),
                  ("above" == i || (t && "below" !== i)) &&
                    (r.top = a.top - s.top - o),
                  null != i &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + i),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + i)),
                  this.$dropdownContainer.css(r);
              }),
              (e.prototype._resizeDropdown = function () {
                var e = {
                  width: this.$container.outerWidth(!1) + "px",
                };
                this.options.get("dropdownAutoWidth") &&
                  ((e.minWidth = e.width),
                  (e.position = "relative"),
                  (e.width = "auto")),
                  this.$dropdown.css(e);
              }),
              (e.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              e
            );
          }
        ),
        e.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function e(e, t, n, i) {
            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              e.call(this, t, n, i);
          }
          return (
            (e.prototype.showSearch = function (e, t) {
              return (
                !(
                  (function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                      var s = t[i];
                      s.children ? (n += e(s.children)) : n++;
                    }
                    return n;
                  })(t.data.results) < this.minimumResultsForSearch
                ) && e.call(this, t)
              );
            }),
            e
          );
        }),
        e.define("select2/dropdown/selectOnClose", ["../utils"], function (i) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("close", function (e) {
                  i._handleSelectOnClose(e);
                });
            }),
            (e.prototype._handleSelectOnClose = function (e, t) {
              if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ("select" === n._type || "unselect" === n._type) return;
              }
              n = this.getHighlightedResults();
              n.length < 1 ||
                (null != (n = i.GetData(n[0], "data")).element &&
                  n.element.selected) ||
                (null == n.element && n.selected) ||
                this.trigger("select", { data: n });
            }),
            e
          );
        }),
        e.define("select2/dropdown/closeOnSelect", [], function () {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var i = this;
              e.call(this, t, n),
                t.on("select", function (e) {
                  i._selectTriggered(e);
                }),
                t.on("unselect", function (e) {
                  i._selectTriggered(e);
                });
            }),
            (e.prototype._selectTriggered = function (e, t) {
              var n = t.originalEvent;
              (n && (n.ctrlKey || n.metaKey)) ||
                this.trigger("close", {
                  originalEvent: n,
                  originalSelect2Event: t,
                });
            }),
            e
          );
        }),
        e.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (e) {
              var t = e.input.length - e.maximum,
                e = "Please delete " + t + " character";
              return 1 != t && (e += "s"), e;
            },
            inputTooShort: function (e) {
              return (
                "Please enter " +
                (e.minimum - e.input.length) +
                " or more characters"
              );
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
            removeAllItems: function () {
              return "Remove all items";
            },
          };
        }),
        e.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en",
          ],
          function (
            l,
            r,
            c,
            u,
            d,
            h,
            p,
            f,
            g,
            m,
            o,
            t,
            v,
            y,
            b,
            w,
            x,
            T,
            C,
            E,
            S,
            _,
            k,
            $,
            A,
            P,
            D,
            M,
            e
          ) {
            function n() {
              this.reset();
            }
            return (
              (n.prototype.apply = function (e) {
                var t, n, i;
                null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                  (null != e.ajax
                    ? (e.dataAdapter = b)
                    : null != e.data
                    ? (e.dataAdapter = y)
                    : (e.dataAdapter = v),
                  0 < e.minimumInputLength &&
                    (e.dataAdapter = m.Decorate(e.dataAdapter, T)),
                  0 < e.maximumInputLength &&
                    (e.dataAdapter = m.Decorate(e.dataAdapter, C)),
                  0 < e.maximumSelectionLength &&
                    (e.dataAdapter = m.Decorate(e.dataAdapter, E)),
                  e.tags && (e.dataAdapter = m.Decorate(e.dataAdapter, w)),
                  (null == e.tokenSeparators && null == e.tokenizer) ||
                    (e.dataAdapter = m.Decorate(e.dataAdapter, x)),
                  null != e.query &&
                    ((t = r(e.amdBase + "compat/query")),
                    (e.dataAdapter = m.Decorate(e.dataAdapter, t))),
                  null != e.initSelection &&
                    ((n = r(e.amdBase + "compat/initSelection")),
                    (e.dataAdapter = m.Decorate(e.dataAdapter, n)))),
                  null == e.resultsAdapter &&
                    ((e.resultsAdapter = c),
                    null != e.ajax &&
                      (e.resultsAdapter = m.Decorate(e.resultsAdapter, $)),
                    null != e.placeholder &&
                      (e.resultsAdapter = m.Decorate(e.resultsAdapter, k)),
                    e.selectOnClose &&
                      (e.resultsAdapter = m.Decorate(e.resultsAdapter, D))),
                  null == e.dropdownAdapter &&
                    (e.multiple
                      ? (e.dropdownAdapter = S)
                      : ((n = m.Decorate(S, _)), (e.dropdownAdapter = n)),
                    0 !== e.minimumResultsForSearch &&
                      (e.dropdownAdapter = m.Decorate(e.dropdownAdapter, P)),
                    e.closeOnSelect &&
                      (e.dropdownAdapter = m.Decorate(e.dropdownAdapter, M)),
                    (null == e.dropdownCssClass &&
                      null == e.dropdownCss &&
                      null == e.adaptDropdownCssClass) ||
                      ((i = r(e.amdBase + "compat/dropdownCss")),
                      (e.dropdownAdapter = m.Decorate(e.dropdownAdapter, i))),
                    (e.dropdownAdapter = m.Decorate(e.dropdownAdapter, A))),
                  null == e.selectionAdapter &&
                    (e.multiple
                      ? (e.selectionAdapter = d)
                      : (e.selectionAdapter = u),
                    null != e.placeholder &&
                      (e.selectionAdapter = m.Decorate(e.selectionAdapter, h)),
                    e.allowClear &&
                      (e.selectionAdapter = m.Decorate(e.selectionAdapter, p)),
                    e.multiple &&
                      (e.selectionAdapter = m.Decorate(e.selectionAdapter, f)),
                    (null == e.containerCssClass &&
                      null == e.containerCss &&
                      null == e.adaptContainerCssClass) ||
                      ((i = r(e.amdBase + "compat/containerCss")),
                      (e.selectionAdapter = m.Decorate(e.selectionAdapter, i))),
                    (e.selectionAdapter = m.Decorate(e.selectionAdapter, g))),
                  (e.language = this._resolveLanguage(e.language)),
                  e.language.push("en");
                for (var s = [], a = 0; a < e.language.length; a++) {
                  var o = e.language[a];
                  -1 === s.indexOf(o) && s.push(o);
                }
                return (
                  (e.language = s),
                  (e.translations = this._processTranslations(
                    e.language,
                    e.debug
                  )),
                  e
                );
              }),
              (n.prototype.reset = function () {
                function r(e) {
                  return e.replace(/[^\u0000-\u007E]/g, function (e) {
                    return t[e] || e;
                  });
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: m.escapeMarkup,
                  language: {},
                  matcher: function e(t, n) {
                    if ("" === l.trim(t.term)) return n;
                    if (n.children && 0 < n.children.length) {
                      for (
                        var i = l.extend(!0, {}, n), s = n.children.length - 1;
                        0 <= s;
                        s--
                      )
                        null == e(t, n.children[s]) && i.children.splice(s, 1);
                      return 0 < i.children.length ? i : e(t, i);
                    }
                    var a = r(n.text).toUpperCase(),
                      o = r(t.term).toUpperCase();
                    return -1 < a.indexOf(o) ? n : null;
                  },
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  scrollAfterSelect: !1,
                  sorter: function (e) {
                    return e;
                  },
                  templateResult: function (e) {
                    return e.text;
                  },
                  templateSelection: function (e) {
                    return e.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (n.prototype.applyFromElement = function (e, t) {
                var n = e.language,
                  i = this.defaults.language,
                  s = t.prop("lang"),
                  t = t.closest("[lang]").prop("lang"),
                  t = Array.prototype.concat.call(
                    this._resolveLanguage(s),
                    this._resolveLanguage(n),
                    this._resolveLanguage(i),
                    this._resolveLanguage(t)
                  );
                return (e.language = t), e;
              }),
              (n.prototype._resolveLanguage = function (e) {
                if (!e) return [];
                if (l.isEmptyObject(e)) return [];
                if (l.isPlainObject(e)) return [e];
                for (
                  var t, n = l.isArray(e) ? e : [e], i = [], s = 0;
                  s < n.length;
                  s++
                )
                  i.push(n[s]),
                    "string" == typeof n[s] &&
                      0 < n[s].indexOf("-") &&
                      ((t = n[s].split("-")[0]), i.push(t));
                return i;
              }),
              (n.prototype._processTranslations = function (e, t) {
                for (var n = new o(), i = 0; i < e.length; i++) {
                  var s = new o(),
                    a = e[i];
                  if ("string" == typeof a)
                    try {
                      s = o.loadPath(a);
                    } catch (e) {
                      try {
                        (a = this.defaults.amdLanguageBase + a),
                          (s = o.loadPath(a));
                      } catch (e) {
                        t &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              a +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                      }
                    }
                  else s = l.isPlainObject(a) ? new o(a) : a;
                  n.extend(s);
                }
                return n;
              }),
              (n.prototype.set = function (e, t) {
                var n = {};
                n[l.camelCase(e)] = t;
                n = m._convertData(n);
                l.extend(!0, this.defaults, n);
              }),
              new n()
            );
          }
        ),
        e.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function (n, c, i, u) {
            function e(e, t) {
              (this.options = e),
                null != t && this.fromElement(t),
                null != t &&
                  (this.options = i.applyFromElement(this.options, t)),
                (this.options = i.apply(this.options)),
                t &&
                  t.is("input") &&
                  ((t = n(this.get("amdBase") + "compat/inputData")),
                  (this.options.dataAdapter = u.Decorate(
                    this.options.dataAdapter,
                    t
                  )));
            }
            return (
              (e.prototype.fromElement = function (e) {
                var t = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = e.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = e.prop("disabled")),
                  null == this.options.dir &&
                    (e.prop("dir")
                      ? (this.options.dir = e.prop("dir"))
                      : e.closest("[dir]").prop("dir")
                      ? (this.options.dir = e.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  e.prop("disabled", this.options.disabled),
                  e.prop("multiple", this.options.multiple),
                  u.GetData(e[0], "select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
                    u.StoreData(e[0], "tags", !0)),
                  u.GetData(e[0], "ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
                    u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
                var n = {};
                function i(e, t) {
                  return t.toUpperCase();
                }
                for (var s = 0; s < e[0].attributes.length; s++) {
                  var a,
                    o = e[0].attributes[s].name;
                  "data-" == o.substr(0, "data-".length) &&
                    ((a = o.substring("data-".length)),
                    (o = u.GetData(e[0], a)),
                    (n[a.replace(/-([a-z])/g, i)] = o));
                }
                c.fn.jquery &&
                  "1." == c.fn.jquery.substr(0, 2) &&
                  e[0].dataset &&
                  (n = c.extend(!0, {}, e[0].dataset, n));
                var r,
                  l = c.extend(!0, {}, u.GetData(e[0]), n);
                for (r in (l = u._convertData(l)))
                  -1 < c.inArray(r, t) ||
                    (c.isPlainObject(this.options[r])
                      ? c.extend(this.options[r], l[r])
                      : (this.options[r] = l[r]));
                return this;
              }),
              (e.prototype.get = function (e) {
                return this.options[e];
              }),
              (e.prototype.set = function (e, t) {
                this.options[e] = t;
              }),
              e
            );
          }
        ),
        e.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (a, s, o, i) {
            var r = function (e, t) {
              null != o.GetData(e[0], "select2") &&
                o.GetData(e[0], "select2").destroy(),
                (this.$element = e),
                (this.id = this._generateId(e)),
                (this.options = new s((t = t || {}), e)),
                r.__super__.constructor.call(this);
              var n = e.attr("tabindex") || 0;
              o.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
              t = this.options.get("dataAdapter");
              this.dataAdapter = new t(e, this.options);
              n = this.render();
              this._placeContainer(n);
              t = this.options.get("selectionAdapter");
              (this.selection = new t(e, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, n);
              t = this.options.get("dropdownAdapter");
              (this.dropdown = new t(e, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, n);
              n = this.options.get("resultsAdapter");
              (this.results = new n(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var i = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (e) {
                  i.trigger("selection:update", { data: e });
                }),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                o.StoreData(e[0], "select2", this),
                e.data("select2", this);
            };
            return (
              o.Extend(r, o.Observable),
              (r.prototype._generateId = function (e) {
                return (
                  "select2-" +
                  (null != e.attr("id")
                    ? e.attr("id")
                    : null != e.attr("name")
                    ? e.attr("name") + "-" + o.generateChars(2)
                    : o.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, "")
                );
              }),
              (r.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != t && e.css("width", t);
              }),
              (r.prototype._resolveWidth = function (e, t) {
                var n =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                  var i = this._resolveWidth(e, "style");
                  return null != i ? i : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                  i = e.outerWidth(!1);
                  return i <= 0 ? "auto" : i + "px";
                }
                if ("style" != t)
                  return "computedstyle" != t
                    ? t
                    : window.getComputedStyle(e[0]).width;
                e = e.attr("style");
                if ("string" != typeof e) return null;
                for (var s = e.split(";"), a = 0, o = s.length; a < o; a += 1) {
                  var r = s[a].replace(/\s/g, "").match(n);
                  if (null !== r && 1 <= r.length) return r[1];
                }
                return null;
              }),
              (r.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (r.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                  t.dataAdapter.current(function (e) {
                    t.trigger("selection:update", { data: e });
                  });
                }),
                  this.$element.on("focus.select2", function (e) {
                    t.trigger("focus", e);
                  }),
                  (this._syncA = o.bind(this._syncAttributes, this)),
                  (this._syncS = o.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var e =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != e
                  ? ((this._observer = new e(function (e) {
                      t._syncA(), t._syncS(null, e);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      t._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      t._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      t._syncS,
                      !1
                    ));
              }),
              (r.prototype._registerDataEvents = function () {
                var n = this;
                this.dataAdapter.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (r.prototype._registerSelectionEvents = function () {
                var n = this,
                  i = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  n.toggleDropdown();
                }),
                  this.selection.on("focus", function (e) {
                    n.focus(e);
                  }),
                  this.selection.on("*", function (e, t) {
                    -1 === a.inArray(e, i) && n.trigger(e, t);
                  });
              }),
              (r.prototype._registerDropdownEvents = function () {
                var n = this;
                this.dropdown.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (r.prototype._registerResultsEvents = function () {
                var n = this;
                this.results.on("*", function (e, t) {
                  n.trigger(e, t);
                });
              }),
              (r.prototype._registerEvents = function () {
                var n = this;
                this.on("open", function () {
                  n.$container.addClass("select2-container--open");
                }),
                  this.on("close", function () {
                    n.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function () {
                    n.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function () {
                    n.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    n.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function (t) {
                    n.isOpen() || n.trigger("open", {}),
                      this.dataAdapter.query(t, function (e) {
                        n.trigger("results:all", { data: e, query: t });
                      });
                  }),
                  this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (e) {
                      n.trigger("results:append", {
                        data: e,
                        query: t,
                      });
                    });
                  }),
                  this.on("keypress", function (e) {
                    var t = e.which;
                    n.isOpen()
                      ? t === i.ESC || t === i.TAB || (t === i.UP && e.altKey)
                        ? (n.close(e), e.preventDefault())
                        : t === i.ENTER
                        ? (n.trigger("results:select", {}), e.preventDefault())
                        : t === i.SPACE && e.ctrlKey
                        ? (n.trigger("results:toggle", {}), e.preventDefault())
                        : t === i.UP
                        ? (n.trigger("results:previous", {}),
                          e.preventDefault())
                        : t === i.DOWN &&
                          (n.trigger("results:next", {}), e.preventDefault())
                      : (t === i.ENTER ||
                          t === i.SPACE ||
                          (t === i.DOWN && e.altKey)) &&
                        (n.open(), e.preventDefault());
                  });
              }),
              (r.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.isDisabled()
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (r.prototype._isChangeMutation = function (e, t) {
                var n = !1,
                  i = this;
                if (
                  !e ||
                  !e.target ||
                  "OPTION" === e.target.nodeName ||
                  "OPTGROUP" === e.target.nodeName
                ) {
                  if (t)
                    if (t.addedNodes && 0 < t.addedNodes.length)
                      for (var s = 0; s < t.addedNodes.length; s++)
                        t.addedNodes[s].selected && (n = !0);
                    else
                      t.removedNodes && 0 < t.removedNodes.length
                        ? (n = !0)
                        : a.isArray(t) &&
                          a.each(t, function (e, t) {
                            if (i._isChangeMutation(e, t)) return !(n = !0);
                          });
                  else n = !0;
                  return n;
                }
              }),
              (r.prototype._syncSubtree = function (e, t) {
                var t = this._isChangeMutation(e, t),
                  n = this;
                t &&
                  this.dataAdapter.current(function (e) {
                    n.trigger("selection:update", { data: e });
                  });
              }),
              (r.prototype.trigger = function (e, t) {
                var n = r.__super__.trigger,
                  i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing",
                  };
                if ((void 0 === t && (t = {}), e in i)) {
                  var s = { prevented: !1, name: e, args: t };
                  if ((n.call(this, i[e], s), s.prevented))
                    return void (t.prevented = !0);
                }
                n.call(this, e, t);
              }),
              (r.prototype.toggleDropdown = function () {
                this.isDisabled() ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (r.prototype.open = function () {
                this.isOpen() || this.isDisabled() || this.trigger("query", {});
              }),
              (r.prototype.close = function (e) {
                this.isOpen() && this.trigger("close", { originalEvent: e });
              }),
              (r.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (r.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              (r.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
              }),
              (r.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
              }),
              (r.prototype.focus = function (e) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (r.prototype.enable = function (e) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  );
                e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
                this.$element.prop("disabled", e);
              }),
              (r.prototype.data = function () {
                this.options.get("debug") &&
                  0 < arguments.length &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var t = [];
                return (
                  this.dataAdapter.current(function (e) {
                    t = e;
                  }),
                  t
                );
              }),
              (r.prototype.val = function (e) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                e = e[0];
                a.isArray(e) &&
                  (e = a.map(e, function (e) {
                    return e.toString();
                  })),
                  this.$element.val(e).trigger("input").trigger("change");
              }),
              (r.prototype.destroy = function () {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    o.GetData(this.$element[0], "old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  o.RemoveData(this.$element[0]),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (r.prototype.render = function () {
                var e = a(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  e.attr("dir", this.options.get("dir")),
                  (this.$container = e),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  o.StoreData(e[0], "element", this.$element),
                  e
                );
              }),
              r
            );
          }
        ),
        e.define("jquery-mousewheel", ["jquery"], function (e) {
          return e;
        }),
        e.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
            "./select2/utils",
          ],
          function (s, e, a, t, o) {
            var r;
            return (
              null == s.fn.select2 &&
                ((r = ["open", "close", "destroy"]),
                (s.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var e = s.extend(!0, {}, t);
                        new a(s(this), e);
                      }),
                      this
                    );
                  if ("string" != typeof t)
                    throw new Error("Invalid arguments for Select2: " + t);
                  var n,
                    i = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var e = o.GetData(this, "select2");
                      null == e &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            t +
                            "') method was called on an element that is not using Select2."
                        ),
                        (n = e[t].apply(e, i));
                    }),
                    -1 < s.inArray(t, r) ? this : n
                  );
                })),
              null == s.fn.select2.defaults && (s.fn.select2.defaults = t),
              a
            );
          }
        ),
        { define: e.define, require: e.require }),
      e = s.require("jquery.select2");
    function w(e, t) {
      return r.call(e, t);
    }
    function c(e, t) {
      var n,
        i,
        s,
        a,
        o,
        r,
        l,
        c,
        u,
        d,
        h = t && t.split("/"),
        p = v.map,
        f = (p && p["*"]) || {};
      if (e) {
        for (
          t = (e = e.split("/")).length - 1,
            v.nodeIdCompat && b.test(e[t]) && (e[t] = e[t].replace(b, "")),
            "." === e[0].charAt(0) &&
              h &&
              (e = h.slice(0, h.length - 1).concat(e)),
            c = 0;
          c < e.length;
          c++
        )
          if ("." === (d = e[c])) e.splice(c, 1), --c;
          else if (".." === d) {
            if (0 === c || (1 === c && ".." === e[2]) || ".." === e[c - 1])
              continue;
            0 < c && (e.splice(c - 1, 2), (c -= 2));
          }
        e = e.join("/");
      }
      if ((h || f) && p) {
        for (c = (n = e.split("/")).length; 0 < c; --c) {
          if (((i = n.slice(0, c).join("/")), h))
            for (u = h.length; 0 < u; --u)
              if ((s = (s = p[h.slice(0, u).join("/")]) && s[i])) {
                (a = s), (o = c);
                break;
              }
          if (a) break;
          !r && f && f[i] && ((r = f[i]), (l = c));
        }
        !a && r && ((a = r), (o = l)),
          a && (n.splice(0, o, a), (e = n.join("/")));
      }
      return e;
    }
    function x(t, n) {
      return function () {
        var e = l.call(arguments, 0);
        return (
          "string" != typeof e[0] && 1 === e.length && e.push(null),
          o.apply(h, e.concat([t, n]))
        );
      };
    }
    function T(e) {
      var t;
      if (
        (w(m, e) && ((t = m[e]), delete m[e], (y[e] = !0), a.apply(h, t)),
        !w(g, e) && !w(y, e))
      )
        throw new Error("No " + e);
      return g[e];
    }
    function u(e) {
      var t,
        n = e ? e.indexOf("!") : -1;
      return (
        -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
        [t, e]
      );
    }
    function C(e) {
      return e ? u(e) : [];
    }
    return (t.fn.select2.amd = s), e;
  }),
  (function (k) {
    (k.isScrollToFixed = function (e) {
      return !!k(e).data("ScrollToFixed");
    }),
      (k.ScrollToFixed = function (e, t) {
        var a = this;
        (a.$el = k(e)), (a.el = e), a.$el.data("ScrollToFixed", a);
        var o,
          r,
          n,
          i,
          l = !1,
          c = a.$el,
          u = 0,
          d = 0,
          h = -1,
          p = -1,
          s = null;
        function f() {
          var e = a.options.limit;
          return e ? ("function" == typeof e ? e.apply(c) : e) : 0;
        }
        function g() {
          return "fixed" === o;
        }
        function m() {
          return "absolute" === o;
        }
        function v() {
          return !(g() || m());
        }
        function y() {
          var e;
          g() ||
            ((e = c[0].getBoundingClientRect()),
            s.css({
              display: c.css("display"),
              width: e.width,
              height: e.height,
              float: c.css("float"),
            }),
            (cssOptions = {
              "z-index": a.options.zIndex,
              position: "fixed",
              top: -1 == a.options.bottom ? T() : "",
              bottom: -1 == a.options.bottom ? "" : a.options.bottom,
              "margin-left": "0px",
            }),
            a.options.dontSetWidth || (cssOptions.width = c.css("width")),
            c.css(cssOptions),
            c.addClass(a.options.baseClassName),
            a.options.className && c.addClass(a.options.className),
            (o = "fixed"));
        }
        function b() {
          var e = f(),
            t = d;
          a.options.removeOffsets && ((t = ""), (e -= u)),
            (cssOptions = {
              position: "absolute",
              top: e,
              left: t,
              "margin-left": "0px",
              bottom: "",
            }),
            a.options.dontSetWidth || (cssOptions.width = c.css("width")),
            c.css(cssOptions),
            (o = "absolute");
        }
        function w() {
          v() ||
            ((p = -1),
            s.css("display", "none"),
            c.css({
              "z-index": i,
              width: "",
              position: r,
              left: "",
              top: n,
              "margin-left": "",
            }),
            c.removeClass("scroll-to-fixed-fixed"),
            a.options.className && c.removeClass(a.options.className),
            (o = null));
        }
        function x(e) {
          e != p && (c.css("left", d - e), (p = e));
        }
        function T() {
          var e = a.options.marginTop;
          return e ? ("function" == typeof e ? e.apply(c) : e) : 0;
        }
        function C() {
          var e, t, n, i, s;
          k.isScrollToFixed(c) &&
            !c.is(":hidden") &&
            ((t = v()),
            (e = l)
              ? v() && ((u = c.offset().top), (d = c.offset().left))
              : (c.trigger("preUnfixed.ScrollToFixed"),
                w(),
                c.trigger("unfixed.ScrollToFixed"),
                (p = -1),
                (u = c.offset().top),
                (d = c.offset().left),
                a.options.offsets && (d += c.offset().left - c.position().left),
                -1 == h && (h = d),
                (o = c.css("position")),
                (l = !0),
                -1 != a.options.bottom &&
                  (c.trigger("preFixed.ScrollToFixed"),
                  y(),
                  c.trigger("fixed.ScrollToFixed"))),
            (n = k(window).scrollLeft()),
            (i = k(window).scrollTop()),
            (s = f()),
            (a.options.minWidth && k(window).width() < a.options.minWidth) ||
            (a.options.maxWidth && k(window).width() > a.options.maxWidth)
              ? (v() && e) ||
                (E(),
                c.trigger("preUnfixed.ScrollToFixed"),
                w(),
                c.trigger("unfixed.ScrollToFixed"))
              : -1 == a.options.bottom
              ? 0 < s && i >= s - T()
                ? t ||
                  (m() && e) ||
                  (E(),
                  c.trigger("preAbsolute.ScrollToFixed"),
                  b(),
                  c.trigger("unfixed.ScrollToFixed"))
                : i >= u - T()
                ? ((g() && e) ||
                    (E(),
                    c.trigger("preFixed.ScrollToFixed"),
                    y(),
                    (p = -1),
                    c.trigger("fixed.ScrollToFixed")),
                  x(n))
                : (v() && e) ||
                  (E(),
                  c.trigger("preUnfixed.ScrollToFixed"),
                  w(),
                  c.trigger("unfixed.ScrollToFixed"))
              : 0 < s
              ? i + k(window).height() - c.outerHeight(!0) >=
                s - (T() || -(a.options.bottom || 0))
                ? g() &&
                  (E(),
                  c.trigger("preUnfixed.ScrollToFixed"),
                  ("absolute" === r ? b : w)(),
                  c.trigger("unfixed.ScrollToFixed"))
                : (g() || (E(), c.trigger("preFixed.ScrollToFixed"), y()),
                  x(n),
                  c.trigger("fixed.ScrollToFixed"))
              : x(n));
        }
        function E() {
          var e = c.css("position");
          "absolute" == e
            ? c.trigger("postAbsolute.ScrollToFixed")
            : "fixed" == e
            ? c.trigger("postFixed.ScrollToFixed")
            : c.trigger("postUnfixed.ScrollToFixed");
        }
        function S(e) {
          c.is(":visible") ? ((l = !1), C()) : w();
        }
        function _(e) {
          window.requestAnimationFrame ? requestAnimationFrame(C) : C();
        }
        (a.init = function () {
          (a.options = k.extend({}, k.ScrollToFixed.defaultOptions, t)),
            (i = c.css("z-index")),
            a.$el.css("z-index", a.options.zIndex),
            (s = k("<div />")),
            (o = c.css("position")),
            (r = c.css("position")),
            c.css("float"),
            (n = c.css("top")),
            v() && a.$el.after(s),
            k(window).bind("resize.ScrollToFixed", S),
            k(window).bind("scroll.ScrollToFixed", _),
            "ontouchmove" in window &&
              k(window).bind("touchmove.ScrollToFixed", C),
            a.options.preFixed &&
              c.bind("preFixed.ScrollToFixed", a.options.preFixed),
            a.options.postFixed &&
              c.bind("postFixed.ScrollToFixed", a.options.postFixed),
            a.options.preUnfixed &&
              c.bind("preUnfixed.ScrollToFixed", a.options.preUnfixed),
            a.options.postUnfixed &&
              c.bind("postUnfixed.ScrollToFixed", a.options.postUnfixed),
            a.options.preAbsolute &&
              c.bind("preAbsolute.ScrollToFixed", a.options.preAbsolute),
            a.options.postAbsolute &&
              c.bind("postAbsolute.ScrollToFixed", a.options.postAbsolute),
            a.options.fixed && c.bind("fixed.ScrollToFixed", a.options.fixed),
            a.options.unfixed &&
              c.bind("unfixed.ScrollToFixed", a.options.unfixed),
            a.options.spacerClass && s.addClass(a.options.spacerClass),
            c.bind("resize.ScrollToFixed", function () {
              s.height(c.height());
            }),
            c.bind("scroll.ScrollToFixed", function () {
              c.trigger("preUnfixed.ScrollToFixed"),
                w(),
                c.trigger("unfixed.ScrollToFixed"),
                C();
            }),
            c.bind("detach.ScrollToFixed", function (e) {
              (e = (e = e) || window.event).preventDefault &&
                e.preventDefault(),
                (e.returnValue = !1),
                c.trigger("preUnfixed.ScrollToFixed"),
                w(),
                c.trigger("unfixed.ScrollToFixed"),
                k(window).unbind("resize.ScrollToFixed", S),
                k(window).unbind("scroll.ScrollToFixed", _),
                c.unbind(".ScrollToFixed"),
                s.remove(),
                a.$el.removeData("ScrollToFixed");
            }),
            S();
        }),
          a.init();
      }),
      (k.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed",
      }),
      (k.fn.scrollToFixed = function (e) {
        return this.each(function () {
          new k.ScrollToFixed(this, e);
        });
      });
  })(jQuery),
  (function () {
    var e;
    (e =
      jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd
        ? jQuery.fn.select2.amd
        : e).define("select2/i18n/pt-BR", [], function () {
      return {
        errorLoading: function () {
          return "Os resultados não puderam ser carregados.";
        },
        inputTooLong: function (e) {
          var t = e.input.length - e.maximum,
            e = "Apague " + t + " caracter";
          return 1 != t && (e += "es"), e;
        },
        inputTooShort: function (e) {
          return (
            "Digite " + (e.minimum - e.input.length) + " ou mais caracteres"
          );
        },
        loadingMore: function () {
          return "Carregando mais resultados…";
        },
        maximumSelected: function (e) {
          var t = "Você só pode selecionar " + e.maximum + " ite";
          return 1 == e.maximum ? (t += "m") : (t += "ns"), t;
        },
        noResults: function () {
          return "Nenhum resultado encontrado";
        },
        searching: function () {
          return "Buscando…";
        },
        removeAllItems: function () {
          return "Remover todos os itens";
        },
      };
    }),
      e.define,
      e.require;
  })(),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).bootstrap = {}),
          e.jQuery,
          e.Popper
        );
  })(this, function (e, t, n) {
    "use strict";
    function i(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var u = i(t),
      a = i(n);
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t, n) {
      return t && s(e.prototype, t), n && s(e, n), e;
    }
    function r() {
      return (r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var l = "transitionend";
    function c(e) {
      var t = this,
        n = !1;
      return (
        u.default(this).one(d.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || d.triggerTransitionEnd(t);
        }, e),
        this
      );
    }
    var d = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute("data-target");
        (t && "#" !== t) ||
          (t = (e = e.getAttribute("href")) && "#" !== e ? e.trim() : "");
        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var t = u.default(e).css("transition-duration"),
          n = u.default(e).css("transition-delay"),
          i = parseFloat(t),
          e = parseFloat(n);
        return i || e
          ? ((t = t.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (parseFloat(t) + parseFloat(n)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        u.default(e).trigger(l);
      },
      supportsTransitionEnd: function () {
        return Boolean(l);
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var s = n[i],
              a = t[i],
              o =
                a && d.isElement(a)
                  ? "element"
                  : null == (o = a)
                  ? "" + o
                  : {}.toString
                      .call(o)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(s).test(o))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  o +
                  '" but expected type "' +
                  s +
                  '".'
              );
          }
        var o;
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof e.getRootNode)
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? d.findShadowRoot(e.parentNode)
            : null;
        e = e.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      },
      jQueryDetection: function () {
        if (void 0 === u.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = u.default.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          4 <= e[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    d.jQueryDetection(),
      (u.default.fn.emulateTransitionEnd = c),
      (u.default.event.special[d.TRANSITION_END] = {
        bindType: l,
        delegateType: l,
        handle: function (e) {
          if (u.default(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      });
    var h = "alert",
      p = "bs.alert",
      f = u.default.fn[h],
      g = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, p), (this._element = null);
          }),
          (e._getRootElement = function (e) {
            var t = d.getSelectorFromElement(e),
              n = !1;
            return (n =
              (n = t ? document.querySelector(t) : n) ||
              u.default(e).closest(".alert")[0]);
          }),
          (e._triggerCloseEvent = function (e) {
            var t = u.default.Event("close.bs.alert");
            return u.default(e).trigger(t), t;
          }),
          (e._removeElement = function (t) {
            var e,
              n = this;
            u.default(t).removeClass("show"),
              u.default(t).hasClass("fade")
                ? ((e = d.getTransitionDurationFromElement(t)),
                  u
                    .default(t)
                    .one(d.TRANSITION_END, function (e) {
                      return n._destroyElement(t, e);
                    })
                    .emulateTransitionEnd(e))
                : this._destroyElement(t);
          }),
          (e._destroyElement = function (e) {
            u.default(e).detach().trigger("closed.bs.alert").remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(p);
              t || ((t = new i(this)), e.data(p, t)),
                "close" === n && t[n](this);
            });
          }),
          (i._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          i
        );
      })();
    u
      .default(document)
      .on(
        "click.bs.alert.data-api",
        '[data-dismiss="alert"]',
        g._handleDismiss(new g())
      ),
      (u.default.fn[h] = g._jQueryInterface),
      (u.default.fn[h].Constructor = g),
      (u.default.fn[h].noConflict = function () {
        return (u.default.fn[h] = f), g._jQueryInterface;
      });
    var m = "button",
      v = "bs.button",
      t = "." + v,
      n = ".data-api",
      y = u.default.fn[m],
      b = "active",
      w = '[data-toggle^="button"]',
      x = 'input:not([type="hidden"])',
      T = (function () {
        function s(e) {
          (this._element = e), (this.shouldAvoidTriggerChange = !1);
        }
        var e = s.prototype;
        return (
          (e.toggle = function () {
            var e,
              t = !0,
              n = !0,
              i = u
                .default(this._element)
                .closest('[data-toggle="buttons"]')[0];
            !i ||
              ((e = this._element.querySelector(x)) &&
                ("radio" === e.type &&
                  (e.checked && this._element.classList.contains(b)
                    ? (t = !1)
                    : (i = i.querySelector(".active")) &&
                      u.default(i).removeClass(b)),
                t &&
                  (("checkbox" !== e.type && "radio" !== e.type) ||
                    (e.checked = !this._element.classList.contains(b)),
                  this.shouldAvoidTriggerChange ||
                    u.default(e).trigger("change")),
                e.focus(),
                (n = !1))),
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(b)
                  ),
                t && u.default(this._element).toggleClass(b));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, v), (this._element = null);
          }),
          (s._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(v);
              t || ((t = new s(this)), e.data(v, t)),
                (t.shouldAvoidTriggerChange = i),
                "toggle" === n && t[n]();
            });
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          s
        );
      })();
    u
      .default(document)
      .on("click.bs.button.data-api", w, function (e) {
        var t,
          n = e.target,
          i = n;
        !(n = !u.default(n).hasClass("btn")
          ? u.default(n).closest(".btn")[0]
          : n) ||
        n.hasAttribute("disabled") ||
        n.classList.contains("disabled") ||
        ((t = n.querySelector(x)) &&
          (t.hasAttribute("disabled") || t.classList.contains("disabled")))
          ? e.preventDefault()
          : ("INPUT" !== i.tagName && "LABEL" === n.tagName) ||
            T._jQueryInterface.call(
              u.default(n),
              "toggle",
              "INPUT" === i.tagName
            );
      })
      .on("focus.bs.button.data-api blur.bs.button.data-api", w, function (e) {
        var t = u.default(e.target).closest(".btn")[0];
        u.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
      }),
      u.default(window).on("load.bs.button.data-api", function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = e[t],
            s = i.querySelector(x);
          s.checked || s.hasAttribute("checked")
            ? i.classList.add(b)
            : i.classList.remove(b);
        }
        for (
          var a = 0,
            o = (e = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          a < o;
          a++
        ) {
          var r = e[a];
          "true" === r.getAttribute("aria-pressed")
            ? r.classList.add(b)
            : r.classList.remove(b);
        }
      }),
      (u.default.fn[m] = T._jQueryInterface),
      (u.default.fn[m].Constructor = T),
      (u.default.fn[m].noConflict = function () {
        return (u.default.fn[m] = y), T._jQueryInterface;
      });
    var C = "carousel",
      E = "bs.carousel",
      S = "." + E,
      _ = u.default.fn[C],
      k = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      $ = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      A = "next",
      P = "prev",
      D = "slid" + S,
      M = "active",
      I = ".active.carousel-item",
      L = { TOUCH: "touch", PEN: "pen" },
      O = (function () {
        function s(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(
              ".carousel-indicators"
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var e = s.prototype;
        return (
          (e.next = function () {
            this._isSliding || this._slide(A);
          }),
          (e.nextWhenVisible = function () {
            var e = u.default(this._element);
            !document.hidden &&
              e.is(":visible") &&
              "hidden" !== e.css("visibility") &&
              this.next();
          }),
          (e.prev = function () {
            this._isSliding || this._slide(P);
          }),
          (e.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (d.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (e.to = function (e) {
            var t = this;
            this._activeElement = this._element.querySelector(I);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                u.default(this._element).one(D, function () {
                  return t.to(e);
                });
              else {
                if (n === e) return this.pause(), void this.cycle();
                this._slide(n < e ? A : P, this._items[e]);
              }
          }),
          (e.dispose = function () {
            u.default(this._element).off(S),
              u.default.removeData(this._element, E),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function (e) {
            return (e = r({}, k, e)), d.typeCheckConfig(C, e, $), e;
          }),
          (e._handleSwipe = function () {
            var e = Math.abs(this.touchDeltaX);
            e <= 40 ||
              ((e = e / this.touchDeltaX),
              (this.touchDeltaX = 0) < e && this.prev(),
              e < 0 && this.next());
          }),
          (e._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              u.default(this._element).on("keydown.bs.carousel", function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                u
                  .default(this._element)
                  .on("mouseenter.bs.carousel", function (e) {
                    return t.pause(e);
                  })
                  .on("mouseleave.bs.carousel", function (e) {
                    return t.cycle(e);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (e._addTouchEventListeners = function () {
            var e,
              t,
              n = this;
            this._touchSupported &&
              ((e = function (e) {
                n._pointerEvent && L[e.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = e.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = e.originalEvent.touches[0].clientX);
              }),
              (t = function (e) {
                n._pointerEvent &&
                  L[e.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (e) {
                      return n.cycle(e);
                    }, 500 + n._config.interval)));
              }),
              u
                .default(this._element.querySelectorAll(".carousel-item img"))
                .on("dragstart.bs.carousel", function (e) {
                  return e.preventDefault();
                }),
              this._pointerEvent
                ? (u.default(this._element).on("pointerdown.bs.carousel", e),
                  u.default(this._element).on("pointerup.bs.carousel", t),
                  this._element.classList.add("pointer-event"))
                : (u.default(this._element).on("touchstart.bs.carousel", e),
                  u
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      (e = e).originalEvent.touches &&
                      1 < e.originalEvent.touches.length
                        ? (n.touchDeltaX = 0)
                        : (n.touchDeltaX =
                            e.originalEvent.touches[0].clientX - n.touchStartX);
                    }),
                  u.default(this._element).on("touchend.bs.carousel", t)));
          }),
          (e._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (e._getItemByDirection = function (e, t) {
            var n = e === A,
              i = e === P,
              s = this._getItemIndex(t),
              a = this._items.length - 1;
            if (((i && 0 === s) || (n && s === a)) && !this._config.wrap)
              return t;
            e = (s + (e === P ? -1 : 1)) % this._items.length;
            return -1 == e
              ? this._items[this._items.length - 1]
              : this._items[e];
          }),
          (e._triggerSlideEvent = function (e, t) {
            var n = this._getItemIndex(e),
              i = this._getItemIndex(this._element.querySelector(I)),
              n = u.default.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n,
              });
            return u.default(this._element).trigger(n), n;
          }),
          (e._setActiveIndicatorElement = function (e) {
            var t;
            this._indicatorsElement &&
              ((t = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              )),
              u.default(t).removeClass(M),
              (e = this._indicatorsElement.children[this._getItemIndex(e)]) &&
                u.default(e).addClass(M));
          }),
          (e._updateInterval = function () {
            var e = this._activeElement || this._element.querySelector(I);
            e &&
              ((e = parseInt(e.getAttribute("data-interval"), 10))
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval));
          }),
          (e._slide = function (e, t) {
            var n,
              i,
              s,
              a = this,
              o = this._element.querySelector(I),
              r = this._getItemIndex(o),
              l = t || (o && this._getItemByDirection(e, o)),
              c = this._getItemIndex(l),
              t = Boolean(this._interval),
              e =
                e === A
                  ? ((n = "carousel-item-left"),
                    (i = "carousel-item-next"),
                    "left")
                  : ((n = "carousel-item-right"),
                    (i = "carousel-item-prev"),
                    "right");
            l && u.default(l).hasClass(M)
              ? (this._isSliding = !1)
              : this._triggerSlideEvent(l, e).isDefaultPrevented() ||
                (o &&
                  l &&
                  ((this._isSliding = !0),
                  t && this.pause(),
                  this._setActiveIndicatorElement(l),
                  (this._activeElement = l),
                  (s = u.default.Event(D, {
                    relatedTarget: l,
                    direction: e,
                    from: r,
                    to: c,
                  })),
                  u.default(this._element).hasClass("slide")
                    ? (u.default(l).addClass(i),
                      d.reflow(l),
                      u.default(o).addClass(n),
                      u.default(l).addClass(n),
                      (c = d.getTransitionDurationFromElement(o)),
                      u
                        .default(o)
                        .one(d.TRANSITION_END, function () {
                          u
                            .default(l)
                            .removeClass(n + " " + i)
                            .addClass(M),
                            u.default(o).removeClass(M + " " + i + " " + n),
                            (a._isSliding = !1),
                            setTimeout(function () {
                              return u.default(a._element).trigger(s);
                            }, 0);
                        })
                        .emulateTransitionEnd(c))
                    : (u.default(o).removeClass(M),
                      u.default(l).addClass(M),
                      (this._isSliding = !1),
                      u.default(this._element).trigger(s)),
                  t && this.cycle()));
          }),
          (s._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this).data(E),
                t = r({}, k, u.default(this).data());
              "object" == typeof i && (t = r({}, t, i));
              var n = "string" == typeof i ? i : t.slide;
              if (
                (e || ((e = new s(this, t)), u.default(this).data(E, e)),
                "number" == typeof i)
              )
                e.to(i);
              else if ("string" == typeof n) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              } else t.interval && t.ride && (e.pause(), e.cycle());
            });
          }),
          (s._dataApiClickHandler = function (e) {
            var t,
              n,
              i = d.getSelectorFromElement(this);
            !i ||
              ((t = u.default(i)[0]) &&
                u.default(t).hasClass("carousel") &&
                ((n = r({}, u.default(t).data(), u.default(this).data())),
                (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
                s._jQueryInterface.call(u.default(t), n),
                i && u.default(t).data(E).to(i),
                e.preventDefault()));
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return k;
              },
            },
          ]),
          s
        );
      })();
    u
      .default(document)
      .on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        O._dataApiClickHandler
      ),
      u.default(window).on("load.bs.carousel.data-api", function () {
        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            t = 0,
            n = e.length;
          t < n;
          t++
        ) {
          var i = u.default(e[t]);
          O._jQueryInterface.call(i, i.data());
        }
      }),
      (u.default.fn[C] = O._jQueryInterface),
      (u.default.fn[C].Constructor = O),
      (u.default.fn[C].noConflict = function () {
        return (u.default.fn[C] = _), O._jQueryInterface;
      });
    var N = "collapse",
      j = "bs.collapse",
      t = "." + j,
      z = u.default.fn[N],
      F = { toggle: !0, parent: "" },
      q = { toggle: "boolean", parent: "(string|element)" },
      H = "show",
      R = "collapse",
      B = "collapsing",
      W = "collapsed",
      X = '[data-toggle="collapse"]',
      G = (function () {
        function a(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(X)),
              i = 0,
              s = n.length;
            i < s;
            i++
          ) {
            var a = n[i],
              o = d.getSelectorFromElement(a),
              r = [].slice
                .call(document.querySelectorAll(o))
                .filter(function (e) {
                  return e === t;
                });
            null !== o &&
              0 < r.length &&
              ((this._selector = o), this._triggerArray.push(a));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = a.prototype;
        return (
          (e.toggle = function () {
            u.default(this._element).hasClass(H) ? this.hide() : this.show();
          }),
          (e.show = function () {
            var e,
              t,
              n,
              i,
              s = this;
            this._isTransitioning ||
              u.default(this._element).hasClass(H) ||
              ((i =
                this._parent &&
                0 ===
                  (i = [].slice
                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                    .filter(function (e) {
                      return "string" == typeof s._config.parent
                        ? e.getAttribute("data-parent") === s._config.parent
                        : e.classList.contains(R);
                    })).length
                  ? null
                  : i) &&
                (n = u.default(i).not(this._selector).data(j)) &&
                n._isTransitioning) ||
              ((e = u.default.Event("show.bs.collapse")),
              u.default(this._element).trigger(e),
              e.isDefaultPrevented() ||
                (i &&
                  (a._jQueryInterface.call(
                    u.default(i).not(this._selector),
                    "hide"
                  ),
                  n || u.default(i).data(j, null)),
                (t = this._getDimension()),
                u.default(this._element).removeClass(R).addClass(B),
                (this._element.style[t] = 0),
                this._triggerArray.length &&
                  u
                    .default(this._triggerArray)
                    .removeClass(W)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0),
                (n = "scroll" + (t[0].toUpperCase() + t.slice(1))),
                (i = d.getTransitionDurationFromElement(this._element)),
                u
                  .default(this._element)
                  .one(d.TRANSITION_END, function () {
                    u
                      .default(s._element)
                      .removeClass(B)
                      .addClass(R + " " + H),
                      (s._element.style[t] = ""),
                      s.setTransitioning(!1),
                      u.default(s._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(i),
                (this._element.style[t] = this._element[n] + "px")));
          }),
          (e.hide = function () {
            var e = this;
            if (
              !this._isTransitioning &&
              u.default(this._element).hasClass(H)
            ) {
              var t = u.default.Event("hide.bs.collapse");
              if (
                (u.default(this._element).trigger(t), !t.isDefaultPrevented())
              ) {
                t = this._getDimension();
                (this._element.style[t] =
                  this._element.getBoundingClientRect()[t] + "px"),
                  d.reflow(this._element),
                  u
                    .default(this._element)
                    .addClass(B)
                    .removeClass(R + " " + H);
                var n = this._triggerArray.length;
                if (0 < n)
                  for (var i = 0; i < n; i++) {
                    var s = this._triggerArray[i],
                      a = d.getSelectorFromElement(s);
                    null !== a &&
                      (u
                        .default([].slice.call(document.querySelectorAll(a)))
                        .hasClass(H) ||
                        u.default(s).addClass(W).attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0);
                this._element.style[t] = "";
                t = d.getTransitionDurationFromElement(this._element);
                u.default(this._element)
                  .one(d.TRANSITION_END, function () {
                    e.setTransitioning(!1),
                      u
                        .default(e._element)
                        .removeClass(B)
                        .addClass(R)
                        .trigger("hidden.bs.collapse");
                  })
                  .emulateTransitionEnd(t);
              }
            }
          }),
          (e.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, j),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function (e) {
            return (
              ((e = r({}, F, e)).toggle = Boolean(e.toggle)),
              d.typeCheckConfig(N, e, q),
              e
            );
          }),
          (e._getDimension = function () {
            return u.default(this._element).hasClass("width")
              ? "width"
              : "height";
          }),
          (e._getParent = function () {
            var e,
              n = this;
            d.isElement(this._config.parent)
              ? ((e = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (e = this._config.parent[0]))
              : (e = document.querySelector(this._config.parent));
            var t =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              t = [].slice.call(e.querySelectorAll(t));
            return (
              u.default(t).each(function (e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
              }),
              e
            );
          }),
          (e._addAriaAndCollapsedClass = function (e, t) {
            e = u.default(e).hasClass(H);
            t.length &&
              u.default(t).toggleClass(W, !e).attr("aria-expanded", e);
          }),
          (a._getTargetFromElement = function (e) {
            e = d.getSelectorFromElement(e);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(j),
                n = r({}, F, e.data(), "object" == typeof i && i ? i : {});
              if (
                (!t &&
                  n.toggle &&
                  "string" == typeof i &&
                  /show|hide/.test(i) &&
                  (n.toggle = !1),
                t || ((t = new a(this, n)), e.data(j, t)),
                "string" == typeof i)
              ) {
                if (void 0 === t[i])
                  throw new TypeError('No method named "' + i + '"');
                t[i]();
              }
            });
          }),
          o(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return F;
              },
            },
          ]),
          a
        );
      })();
    u.default(document).on("click.bs.collapse.data-api", X, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = u.default(this),
        e = d.getSelectorFromElement(this),
        e = [].slice.call(document.querySelectorAll(e));
      u.default(e).each(function () {
        var e = u.default(this),
          t = e.data(j) ? "toggle" : n.data();
        G._jQueryInterface.call(e, t);
      });
    }),
      (u.default.fn[N] = G._jQueryInterface),
      (u.default.fn[N].Constructor = G),
      (u.default.fn[N].noConflict = function () {
        return (u.default.fn[N] = z), G._jQueryInterface;
      });
    var Y = "dropdown",
      V = "bs.dropdown",
      U = "." + V,
      n = ".data-api",
      Q = u.default.fn[Y],
      K = new RegExp("38|40|27"),
      Z = "hide" + U,
      J = "hidden" + U,
      w = "click" + U + n,
      t = "keydown" + U + n,
      ee = "disabled",
      te = "show",
      ne = "dropdown-menu-right",
      ie = '[data-toggle="dropdown"]',
      se = ".dropdown-menu",
      ae = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      oe = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      re = (function () {
        function c(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = c.prototype;
        return (
          (e.toggle = function () {
            var e;
            this._element.disabled ||
              u.default(this._element).hasClass(ee) ||
              ((e = u.default(this._menu).hasClass(te)),
              c._clearMenus(),
              e || this.show(!0));
          }),
          (e.show = function (e) {
            if (
              (void 0 === e && (e = !1),
              !(
                this._element.disabled ||
                u.default(this._element).hasClass(ee) ||
                u.default(this._menu).hasClass(te)
              ))
            ) {
              var t = { relatedTarget: this._element },
                n = u.default.Event("show.bs.dropdown", t),
                i = c._getParentFromElement(this._element);
              if ((u.default(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && e) {
                  if (void 0 === a.default)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  e = this._element;
                  "parent" === this._config.reference
                    ? (e = i)
                    : d.isElement(this._config.reference) &&
                      ((e = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (e = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      u.default(i).addClass("position-static"),
                    (this._popper = new a.default(
                      e,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === u.default(i).closest(".navbar-nav").length &&
                  u
                    .default(document.body)
                    .children()
                    .on("mouseover", null, u.default.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  u.default(this._menu).toggleClass(te),
                  u
                    .default(i)
                    .toggleClass(te)
                    .trigger(u.default.Event("shown.bs.dropdown", t));
              }
            }
          }),
          (e.hide = function () {
            var e, t, n;
            this._element.disabled ||
              u.default(this._element).hasClass(ee) ||
              !u.default(this._menu).hasClass(te) ||
              ((e = { relatedTarget: this._element }),
              (t = u.default.Event(Z, e)),
              (n = c._getParentFromElement(this._element)),
              u.default(n).trigger(t),
              t.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                u.default(this._menu).toggleClass(te),
                u.default(n).toggleClass(te).trigger(u.default.Event(J, e))));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, V),
              u.default(this._element).off(U),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            u.default(this._element).on("click.bs.dropdown", function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (e) {
            return (
              (e = r(
                {},
                this.constructor.Default,
                u.default(this._element).data(),
                e
              )),
              d.typeCheckConfig(Y, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._getMenuElement = function () {
            var e;
            return (
              this._menu ||
                ((e = c._getParentFromElement(this._element)) &&
                  (this._menu = e.querySelector(se))),
              this._menu
            );
          }),
          (e._getPlacement = function () {
            var e = u.default(this._element.parentNode),
              t = "bottom-start";
            return (
              e.hasClass("dropup")
                ? (t = u.default(this._menu).hasClass(ne)
                    ? "top-end"
                    : "top-start")
                : e.hasClass("dropright")
                ? (t = "right-start")
                : e.hasClass("dropleft")
                ? (t = "left-start")
                : u.default(this._menu).hasClass(ne) && (t = "bottom-end"),
              t
            );
          }),
          (e._detectNavbar = function () {
            return 0 < u.default(this._element).closest(".navbar").length;
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = r(
                        {},
                        e.offsets,
                        t._config.offset(e.offsets, t._element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (e._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: {
                  boundariesElement: this._config.boundary,
                },
              },
            };
            return (
              "static" === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              r({}, e, this._config.popperConfig)
            );
          }),
          (c._jQueryInterface = function (t) {
            return this.each(function () {
              var e = u.default(this).data(V);
              if (
                (e ||
                  ((e = new c(this, "object" == typeof t ? t : null)),
                  u.default(this).data(V, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          (c._clearMenus = function (e) {
            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
              for (
                var t = [].slice.call(document.querySelectorAll(ie)),
                  n = 0,
                  i = t.length;
                n < i;
                n++
              ) {
                var s,
                  a,
                  o = c._getParentFromElement(t[n]),
                  r = u.default(t[n]).data(V),
                  l = { relatedTarget: t[n] };
                e && "click" === e.type && (l.clickEvent = e),
                  r &&
                    ((s = r._menu),
                    u.default(o).hasClass(te) &&
                      ((e &&
                        (("click" === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ("keyup" === e.type && 9 === e.which)) &&
                        u.default.contains(o, e.target)) ||
                        ((a = u.default.Event(Z, l)),
                        u.default(o).trigger(a),
                        a.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            u
                              .default(document.body)
                              .children()
                              .off("mouseover", null, u.default.noop),
                          t[n].setAttribute("aria-expanded", "false"),
                          r._popper && r._popper.destroy(),
                          u.default(s).removeClass(te),
                          u
                            .default(o)
                            .removeClass(te)
                            .trigger(u.default.Event(J, l))))));
              }
          }),
          (c._getParentFromElement = function (e) {
            var t,
              n = d.getSelectorFromElement(e);
            return (t = n ? document.querySelector(n) : t) || e.parentNode;
          }),
          (c._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        u.default(e.target).closest(se).length))
                  )
                : K.test(e.which)) &&
              !this.disabled &&
              !u.default(this).hasClass(ee)
            ) {
              var t = c._getParentFromElement(this),
                n = u.default(t).hasClass(te);
              if (n || 27 !== e.which) {
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  !n || 27 === e.which || 32 === e.which)
                )
                  return (
                    27 === e.which &&
                      u.default(t.querySelector(ie)).trigger("focus"),
                    void u.default(this).trigger("click")
                  );
                n = [].slice
                  .call(
                    t.querySelectorAll(
                      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                    )
                  )
                  .filter(function (e) {
                    return u.default(e).is(":visible");
                  });
                0 !== n.length &&
                  ((t = n.indexOf(e.target)),
                  38 === e.which && 0 < t && t--,
                  40 === e.which && t < n.length - 1 && t++,
                  n[(t = t < 0 ? 0 : t)].focus());
              }
            }
          }),
          o(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return ae;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return oe;
              },
            },
          ]),
          c
        );
      })();
    u
      .default(document)
      .on(t, ie, re._dataApiKeydownHandler)
      .on(t, se, re._dataApiKeydownHandler)
      .on(w + " keyup.bs.dropdown.data-api", re._clearMenus)
      .on(w, ie, function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          re._jQueryInterface.call(u.default(this), "toggle");
      })
      .on(w, ".dropdown form", function (e) {
        e.stopPropagation();
      }),
      (u.default.fn[Y] = re._jQueryInterface),
      (u.default.fn[Y].Constructor = re),
      (u.default.fn[Y].noConflict = function () {
        return (u.default.fn[Y] = Q), re._jQueryInterface;
      });
    var le = "modal",
      ce = "bs.modal",
      ue = "." + ce,
      de = u.default.fn[le],
      he = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      pe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      fe = "hidden" + ue,
      ge = "show" + ue,
      me = "focusin" + ue,
      ve = "resize" + ue,
      ye = "click.dismiss" + ue,
      be = "keydown.dismiss" + ue,
      we = "mousedown.dismiss" + ue,
      xe = "modal-open",
      Te = "fade",
      Ce = "show",
      Ee = "modal-static",
      Se = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      _e = ".sticky-top",
      ke = (function () {
        function s(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var e = s.prototype;
        return (
          (e.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (e.show = function (e) {
            var t,
              n = this;
            this._isShown ||
              this._isTransitioning ||
              (u.default(this._element).hasClass(Te) &&
                (this._isTransitioning = !0),
              (t = u.default.Event(ge, { relatedTarget: e })),
              u.default(this._element).trigger(t),
              this._isShown ||
                t.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                u
                  .default(this._element)
                  .on(ye, '[data-dismiss="modal"]', function (e) {
                    return n.hide(e);
                  }),
                u.default(this._dialog).on(we, function () {
                  u.default(n._element).one(
                    "mouseup.dismiss.bs.modal",
                    function (e) {
                      u.default(e.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return n._showElement(e);
                })));
          }),
          (e.hide = function (e) {
            var t = this;
            e && e.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                ((e = u.default.Event("hide.bs.modal")),
                u.default(this._element).trigger(e),
                this._isShown &&
                  !e.isDefaultPrevented() &&
                  ((this._isShown = !1),
                  (e = u.default(this._element).hasClass(Te)) &&
                    (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  u.default(document).off(me),
                  u.default(this._element).removeClass(Ce),
                  u.default(this._element).off(ye),
                  u.default(this._dialog).off(we),
                  e
                    ? ((e = d.getTransitionDurationFromElement(this._element)),
                      u
                        .default(this._element)
                        .one(d.TRANSITION_END, function (e) {
                          return t._hideModal(e);
                        })
                        .emulateTransitionEnd(e))
                    : this._hideModal()));
          }),
          (e.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return u.default(e).off(ue);
            }),
              u.default(document).off(me),
              u.default.removeData(this._element, ce),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (e) {
            return (e = r({}, he, e)), d.typeCheckConfig(le, e, pe), e;
          }),
          (e._triggerBackdropTransition = function () {
            var e,
              t,
              n = this,
              i = u.default.Event("hidePrevented.bs.modal");
            u.default(this._element).trigger(i),
              i.isDefaultPrevented() ||
                ((e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight) ||
                  (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Ee),
                (t = d.getTransitionDurationFromElement(this._dialog)),
                u.default(this._element).off(d.TRANSITION_END),
                u
                  .default(this._element)
                  .one(d.TRANSITION_END, function () {
                    n._element.classList.remove(Ee),
                      e ||
                        u
                          .default(n._element)
                          .one(d.TRANSITION_END, function () {
                            n._element.style.overflowY = "";
                          })
                          .emulateTransitionEnd(n._element, t);
                  })
                  .emulateTransitionEnd(t),
                this._element.focus());
          }),
          (e._showElement = function (e) {
            var t = this,
              n = u.default(this._element).hasClass(Te),
              i = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              u.default(this._dialog).hasClass("modal-dialog-scrollable") && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && d.reflow(this._element),
              u.default(this._element).addClass(Ce),
              this._config.focus && this._enforceFocus();
            var s = u.default.Event("shown.bs.modal", {
                relatedTarget: e,
              }),
              e = function () {
                t._config.focus && t._element.focus(),
                  (t._isTransitioning = !1),
                  u.default(t._element).trigger(s);
              };
            n
              ? ((n = d.getTransitionDurationFromElement(this._dialog)),
                u
                  .default(this._dialog)
                  .one(d.TRANSITION_END, e)
                  .emulateTransitionEnd(n))
              : e();
          }),
          (e._enforceFocus = function () {
            var t = this;
            u.default(document)
              .off(me)
              .on(me, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === u.default(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown
              ? u.default(this._element).on(be, function (e) {
                  t._config.keyboard && 27 === e.which
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      27 !== e.which ||
                      t._triggerBackdropTransition();
                })
              : this._isShown || u.default(this._element).off(be);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? u.default(window).on(ve, function (e) {
                  return t.handleUpdate(e);
                })
              : u.default(window).off(ve);
          }),
          (e._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                u.default(document.body).removeClass(xe),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  u.default(e._element).trigger(fe);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (u.default(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (e) {
            var t,
              n = this,
              i = u.default(this._element).hasClass(Te) ? Te : "";
            this._isShown && this._config.backdrop
              ? ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                i && this._backdrop.classList.add(i),
                u.default(this._backdrop).appendTo(document.body),
                u.default(this._element).on(ye, function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      ("static" === n._config.backdrop
                        ? n._triggerBackdropTransition()
                        : n.hide());
                }),
                i && d.reflow(this._backdrop),
                u.default(this._backdrop).addClass(Ce),
                e &&
                  (i
                    ? ((t = d.getTransitionDurationFromElement(this._backdrop)),
                      u
                        .default(this._backdrop)
                        .one(d.TRANSITION_END, e)
                        .emulateTransitionEnd(t))
                    : e()))
              : !this._isShown && this._backdrop
              ? (u.default(this._backdrop).removeClass(Ce),
                (i = function () {
                  n._removeBackdrop(), e && e();
                }),
                u.default(this._element).hasClass(Te)
                  ? ((t = d.getTransitionDurationFromElement(this._backdrop)),
                    u
                      .default(this._backdrop)
                      .one(d.TRANSITION_END, i)
                      .emulateTransitionEnd(t))
                  : i())
              : e && e();
          }),
          (e._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(e.left + e.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var e,
              t,
              s = this;
            this._isBodyOverflowing &&
              ((e = [].slice.call(document.querySelectorAll(Se))),
              (t = [].slice.call(document.querySelectorAll(_e))),
              u.default(e).each(function (e, t) {
                var n = t.style.paddingRight,
                  i = u.default(t).css("padding-right");
                u.default(t)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + s._scrollbarWidth + "px"
                  );
              }),
              u.default(t).each(function (e, t) {
                var n = t.style.marginRight,
                  i = u.default(t).css("margin-right");
                u.default(t)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - s._scrollbarWidth + "px"
                  );
              }),
              (e = document.body.style.paddingRight),
              (t = u.default(document.body).css("padding-right")),
              u
                .default(document.body)
                .data("padding-right", e)
                .css(
                  "padding-right",
                  parseFloat(t) + this._scrollbarWidth + "px"
                )),
              u.default(document.body).addClass(xe);
          }),
          (e._resetScrollbar = function () {
            var e = [].slice.call(document.querySelectorAll(Se));
            u.default(e).each(function (e, t) {
              var n = u.default(t).data("padding-right");
              u.default(t).removeData("padding-right"),
                (t.style.paddingRight = n || "");
            });
            e = [].slice.call(document.querySelectorAll(_e));
            u.default(e).each(function (e, t) {
              var n = u.default(t).data("margin-right");
              void 0 !== n &&
                u.default(t).css("margin-right", n).removeData("margin-right");
            });
            e = u.default(document.body).data("padding-right");
            u.default(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = e || "");
          }),
          (e._getScrollbarWidth = function () {
            var e = document.createElement("div");
            (e.className = "modal-scrollbar-measure"),
              document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (s._jQueryInterface = function (n, i) {
            return this.each(function () {
              var e = u.default(this).data(ce),
                t = r(
                  {},
                  he,
                  u.default(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (e || ((e = new s(this, t)), u.default(this).data(ce, e)),
                "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](i);
              } else t.show && e.show(i);
            });
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return he;
              },
            },
          ]),
          s
        );
      })();
    u
      .default(document)
      .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var t,
          n = this,
          i = d.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        i = u.default(t).data(ce)
          ? "toggle"
          : r({}, u.default(t).data(), u.default(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
        var s = u.default(t).one(ge, function (e) {
          e.isDefaultPrevented() ||
            s.one(fe, function () {
              u.default(n).is(":visible") && n.focus();
            });
        });
        ke._jQueryInterface.call(u.default(t), i, this);
      }),
      (u.default.fn[le] = ke._jQueryInterface),
      (u.default.fn[le].Constructor = ke),
      (u.default.fn[le].noConflict = function () {
        return (u.default.fn[le] = de), ke._jQueryInterface;
      });
    var $e = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      w = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Pe =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function De(e, a, t) {
      if (0 === e.length) return e;
      if (t && "function" == typeof t) return t(e);
      for (
        var e = new window.DOMParser().parseFromString(e, "text/html"),
          o = Object.keys(a),
          r = [].slice.call(e.body.querySelectorAll("*")),
          n = function (e, t) {
            var n = r[e],
              i = n.nodeName.toLowerCase();
            if (-1 === o.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n), "continue";
            var e = [].slice.call(n.attributes),
              s = [].concat(a["*"] || [], a[i] || []);
            e.forEach(function (e) {
              !(function (e, t) {
                var n = e.nodeName.toLowerCase();
                if (-1 !== t.indexOf(n))
                  return (
                    -1 === $e.indexOf(n) ||
                    Boolean(e.nodeValue.match(Ae) || e.nodeValue.match(Pe))
                  );
                for (
                  var i = t.filter(function (e) {
                      return e instanceof RegExp;
                    }),
                    s = 0,
                    a = i.length;
                  s < a;
                  s++
                )
                  if (n.match(i[s])) return 1;
              })(e, s) && n.removeAttribute(e.nodeName);
            });
          },
          i = 0,
          s = r.length;
        i < s;
        i++
      )
        n(i);
      return e.body.innerHTML;
    }
    var Me = "tooltip",
      Ie = "bs.tooltip",
      Le = "." + Ie,
      Oe = u.default.fn[Me],
      Ne = "bs-tooltip",
      je = new RegExp("(^|\\s)" + Ne + "\\S+", "g"),
      ze = ["sanitize", "whiteList", "sanitizeFn"],
      Fe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      qe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      He = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: w,
        popperConfig: null,
      },
      Re = "show",
      Be = {
        HIDE: "hide" + Le,
        HIDDEN: "hidden" + Le,
        SHOW: "show" + Le,
        SHOWN: "shown" + Le,
        INSERTED: "inserted" + Le,
        CLICK: "click" + Le,
        FOCUSIN: "focusin" + Le,
        FOCUSOUT: "focusout" + Le,
        MOUSEENTER: "mouseenter" + Le,
        MOUSELEAVE: "mouseleave" + Le,
      },
      We = "fade",
      Xe = "show",
      Ge = "hover",
      Ye = (function () {
        function s(e, t) {
          if (void 0 === a.default)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var e = s.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (e) {
            var t, n;
            this._isEnabled &&
              (e
                ? ((t = this.constructor.DATA_KEY),
                  (n = u.default(e.currentTarget).data(t)) ||
                    ((n = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    u.default(e.currentTarget).data(t, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n))
                : u.default(this.getTipElement()).hasClass(Xe)
                ? this._leave(null, this)
                : this._enter(null, this));
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              u.default.removeData(this.element, this.constructor.DATA_KEY),
              u.default(this.element).off(this.constructor.EVENT_KEY),
              u
                .default(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && u.default(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ("none" === u.default(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var e,
              n,
              i = u.default.Event(this.constructor.Event.SHOW);
            this.isWithContent() &&
              this._isEnabled &&
              (u.default(this.element).trigger(i),
              (n = d.findShadowRoot(this.element)),
              (e = u.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              )),
              !i.isDefaultPrevented() &&
                e &&
                ((n = this.getTipElement()),
                (i = d.getUID(this.constructor.NAME)),
                n.setAttribute("id", i),
                this.element.setAttribute("aria-describedby", i),
                this.setContent(),
                this.config.animation && u.default(n).addClass(We),
                (e =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, n, this.element)
                    : this.config.placement),
                (i = this._getAttachment(e)),
                this.addAttachmentClass(i),
                (e = this._getContainer()),
                u.default(n).data(this.constructor.DATA_KEY, this),
                u.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || u.default(n).appendTo(e),
                u
                  .default(this.element)
                  .trigger(this.constructor.Event.INSERTED),
                (this._popper = new a.default(
                  this.element,
                  n,
                  this._getPopperConfig(i)
                )),
                u.default(n).addClass(Xe),
                u.default(n).addClass(this.config.customClass),
                "ontouchstart" in document.documentElement &&
                  u
                    .default(document.body)
                    .children()
                    .on("mouseover", null, u.default.noop),
                (i = function () {
                  t.config.animation && t._fixTransition();
                  var e = t._hoverState;
                  (t._hoverState = null),
                    u.default(t.element).trigger(t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t);
                }),
                u.default(this.tip).hasClass(We)
                  ? ((n = d.getTransitionDurationFromElement(this.tip)),
                    u
                      .default(this.tip)
                      .one(d.TRANSITION_END, i)
                      .emulateTransitionEnd(n))
                  : i()));
          }),
          (e.hide = function (e) {
            function t() {
              n._hoverState !== Re &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                u.default(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e();
            }
            var n = this,
              i = this.getTipElement(),
              s = u.default.Event(this.constructor.Event.HIDE);
            u.default(this.element).trigger(s),
              s.isDefaultPrevented() ||
                (u.default(i).removeClass(Xe),
                "ontouchstart" in document.documentElement &&
                  u
                    .default(document.body)
                    .children()
                    .off("mouseover", null, u.default.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger[Ge] = !1),
                u.default(this.tip).hasClass(We)
                  ? ((s = d.getTransitionDurationFromElement(i)),
                    u
                      .default(i)
                      .one(d.TRANSITION_END, t)
                      .emulateTransitionEnd(s))
                  : t(),
                (this._hoverState = ""));
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (e) {
            u.default(this.getTipElement()).addClass(Ne + "-" + e);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || u.default(this.config.template)[0]),
              this.tip
            );
          }),
          (e.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(
              u.default(e.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              u.default(e).removeClass("fade show");
          }),
          (e.setElementContent = function (e, t) {
            "object" != typeof t || (!t.nodeType && !t.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (t = De(t, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(t))
                : e.text(t)
              : this.config.html
              ? u.default(t).parent().is(e) || e.empty().append(t)
              : e.text(u.default(t).text());
          }),
          (e.getTitle = function () {
            return (
              this.element.getAttribute("data-original-title") ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title)
            );
          }),
          (e._getPopperConfig = function (e) {
            var t = this;
            return r(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: {
                    boundariesElement: this.config.boundary,
                  },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              },
              this.config.popperConfig
            );
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = r(
                        {},
                        e.offsets,
                        t.config.offset(e.offsets, t.element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (e._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : d.isElement(this.config.container)
              ? u.default(this.config.container)
              : u.default(document).find(this.config.container);
          }),
          (e._getAttachment = function (e) {
            return qe[e.toUpperCase()];
          }),
          (e._setListeners = function () {
            var n = this;
            this.config.trigger.split(" ").forEach(function (e) {
              var t;
              "click" === e
                ? u
                    .default(n.element)
                    .on(
                      n.constructor.Event.CLICK,
                      n.config.selector,
                      function (e) {
                        return n.toggle(e);
                      }
                    )
                : "manual" !== e &&
                  ((t =
                    e === Ge
                      ? n.constructor.Event.MOUSEENTER
                      : n.constructor.Event.FOCUSIN),
                  (e =
                    e === Ge
                      ? n.constructor.Event.MOUSELEAVE
                      : n.constructor.Event.FOCUSOUT),
                  u
                    .default(n.element)
                    .on(t, n.config.selector, function (e) {
                      return n._enter(e);
                    })
                    .on(e, n.config.selector, function (e) {
                      return n._leave(e);
                    }));
            }),
              (this._hideModalHandler = function () {
                n.element && n.hide();
              }),
              u
                .default(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == e) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              u.default(e.currentTarget).data(n, t)),
              e && (t._activeTrigger["focusin" === e.type ? "focus" : Ge] = !0),
              u.default(t.getTipElement()).hasClass(Xe) || t._hoverState === Re
                ? (t._hoverState = Re)
                : (clearTimeout(t._timeout),
                  (t._hoverState = Re),
                  t.config.delay && t.config.delay.show
                    ? (t._timeout = setTimeout(function () {
                        t._hoverState === Re && t.show();
                      }, t.config.delay.show))
                    : t.show());
          }),
          (e._leave = function (e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u.default(e.currentTarget).data(n)) ||
              ((t = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              u.default(e.currentTarget).data(n, t)),
              e &&
                (t._activeTrigger["focusout" === e.type ? "focus" : Ge] = !1),
              t._isWithActiveTrigger() ||
                (clearTimeout(t._timeout),
                (t._hoverState = "out"),
                t.config.delay && t.config.delay.hide
                  ? (t._timeout = setTimeout(function () {
                      "out" === t._hoverState && t.hide();
                    }, t.config.delay.hide))
                  : t.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (e._getConfig = function (e) {
            var t = u.default(this.element).data();
            return (
              Object.keys(t).forEach(function (e) {
                -1 !== ze.indexOf(e) && delete t[e];
              }),
              "number" ==
                typeof (e = r(
                  {},
                  this.constructor.Default,
                  t,
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              d.typeCheckConfig(Me, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = De(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (e._getDelegateConfig = function () {
            var e = {};
            if (this.config)
              for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (e._cleanTipClass = function () {
            var e = u.default(this.getTipElement()),
              t = e.attr("class").match(je);
            null !== t && t.length && e.removeClass(t.join(""));
          }),
          (e._handlePopperPlacementChange = function (e) {
            (this.tip = e.instance.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (e._fixTransition = function () {
            var e = this.getTipElement(),
              t = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (u.default(e).removeClass(We),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = t));
          }),
          (s._jQueryInterface = function (i) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(Ie),
                n = "object" == typeof i && i;
              if (
                (t || !/dispose|hide/.test(i)) &&
                (t || ((t = new s(this, n)), e.data(Ie, t)),
                "string" == typeof i)
              ) {
                if (void 0 === t[i])
                  throw new TypeError('No method named "' + i + '"');
                t[i]();
              }
            });
          }),
          o(s, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return He;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Me;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ie;
              },
            },
            {
              key: "Event",
              get: function () {
                return Be;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Le;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Fe;
              },
            },
          ]),
          s
        );
      })();
    (u.default.fn[Me] = Ye._jQueryInterface),
      (u.default.fn[Me].Constructor = Ye),
      (u.default.fn[Me].noConflict = function () {
        return (u.default.fn[Me] = Oe), Ye._jQueryInterface;
      });
    var Ve = "popover",
      Ue = "bs.popover",
      Qe = "." + Ue,
      Ke = u.default.fn[Ve],
      Ze = "bs-popover",
      Je = new RegExp("(^|\\s)" + Ze + "\\S+", "g"),
      et = r({}, Ye.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      tt = r({}, Ye.DefaultType, {
        content: "(string|element|function)",
      }),
      nt = {
        HIDE: "hide" + Qe,
        HIDDEN: "hidden" + Qe,
        SHOW: "show" + Qe,
        SHOWN: "shown" + Qe,
        INSERTED: "inserted" + Qe,
        CLICK: "click" + Qe,
        FOCUSIN: "focusin" + Qe,
        FOCUSOUT: "focusout" + Qe,
        MOUSEENTER: "mouseenter" + Qe,
        MOUSELEAVE: "mouseleave" + Qe,
      },
      it = (function (e) {
        var t;
        function i() {
          return e.apply(this, arguments) || this;
        }
        (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          ((t.prototype.constructor = t).__proto__ = n);
        var n = i.prototype;
        return (
          (n.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (n.addAttachmentClass = function (e) {
            u.default(this.getTipElement()).addClass(Ze + "-" + e);
          }),
          (n.getTipElement = function () {
            return (
              (this.tip = this.tip || u.default(this.config.template)[0]),
              this.tip
            );
          }),
          (n.setContent = function () {
            var e = u.default(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
              this.setElementContent(e.find(".popover-body"), t),
              e.removeClass("fade show");
          }),
          (n._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (n._cleanTipClass = function () {
            var e = u.default(this.getTipElement()),
              t = e.attr("class").match(Je);
            null !== t && 0 < t.length && e.removeClass(t.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this).data(Ue),
                t = "object" == typeof n ? n : null;
              if (
                (e || !/dispose|hide/.test(n)) &&
                (e || ((e = new i(this, t)), u.default(this).data(Ue, e)),
                "string" == typeof n)
              ) {
                if (void 0 === e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return et;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ue;
              },
            },
            {
              key: "Event",
              get: function () {
                return nt;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Qe;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return tt;
              },
            },
          ]),
          i
        );
      })(Ye);
    (u.default.fn[Ve] = it._jQueryInterface),
      (u.default.fn[Ve].Constructor = it),
      (u.default.fn[Ve].noConflict = function () {
        return (u.default.fn[Ve] = Ke), it._jQueryInterface;
      });
    var st = "scrollspy",
      at = "bs.scrollspy",
      ot = "." + at,
      rt = u.default.fn[st],
      lt = { offset: 10, method: "auto", target: "" },
      ct = {
        offset: "number",
        method: "string",
        target: "(string|element)",
      },
      ut = "active",
      dt = ".nav, .list-group",
      ht = ".nav-link",
      pt = ".list-group-item",
      ft = (function () {
        function n(e, t) {
          var n = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(t)),
            (this._selector =
              this._config.target +
              " " +
              ht +
              "," +
              this._config.target +
              " " +
              pt +
              "," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            u
              .default(this._scrollElement)
              .on("scroll.bs.scrollspy", function (e) {
                return n._process(e);
              }),
            this.refresh(),
            this._process();
        }
        var e = n.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : "position",
              i = "auto" === this._config.method ? e : this._config.method,
              s = "position" === i ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var t,
                    n = d.getSelectorFromElement(e);
                  if ((t = n ? document.querySelector(n) : t)) {
                    e = t.getBoundingClientRect();
                    if (e.width || e.height)
                      return [u.default(t)[i]().top + s, n];
                  }
                  return null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, at),
              u.default(this._scrollElement).off(ot),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (e) {
            var t;
            return (
              "string" !=
                typeof (e = r({}, lt, "object" == typeof e && e ? e : {}))
                  .target &&
                d.isElement(e.target) &&
                ((t = u.default(e.target).attr("id")) ||
                  ((t = d.getUID(st)), u.default(e.target).attr("id", t)),
                (e.target = "#" + t)),
              d.typeCheckConfig(st, e, ct),
              e
            );
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              n = this._targets[this._targets.length - 1];
              this._activeTarget !== n && this._activate(n);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var i = this._offsets.length; i--; )
                this._activeTarget !== this._targets[i] &&
                  e >= this._offsets[i] &&
                  (void 0 === this._offsets[i + 1] ||
                    e < this._offsets[i + 1]) &&
                  this._activate(this._targets[i]);
            }
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",").map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              e = u.default(
                [].slice.call(document.querySelectorAll(e.join(",")))
              );
            e.hasClass("dropdown-item")
              ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(ut),
                e.addClass(ut))
              : (e.addClass(ut),
                e
                  .parents(dt)
                  .prev(ht + ", " + pt)
                  .addClass(ut),
                e.parents(dt).prev(".nav-item").children(ht).addClass(ut)),
              u
                .default(this._scrollElement)
                .trigger("activate.bs.scrollspy", { relatedTarget: t });
          }),
          (e._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(ut);
              })
              .forEach(function (e) {
                return e.classList.remove(ut);
              });
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var e = u.default(this).data(at);
              if (
                (e ||
                  ((e = new n(this, "object" == typeof t && t)),
                  u.default(this).data(at, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          o(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "Default",
              get: function () {
                return lt;
              },
            },
          ]),
          n
        );
      })();
    u.default(window).on("load.bs.scrollspy.data-api", function () {
      for (
        var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          t = e.length;
        t--;

      ) {
        var n = u.default(e[t]);
        ft._jQueryInterface.call(n, n.data());
      }
    }),
      (u.default.fn[st] = ft._jQueryInterface),
      (u.default.fn[st].Constructor = ft),
      (u.default.fn[st].noConflict = function () {
        return (u.default.fn[st] = rt), ft._jQueryInterface;
      });
    var gt = "bs.tab",
      mt = u.default.fn.tab,
      vt = "active",
      yt = "> li > .active",
      bt = (function () {
        function i(e) {
          this._element = e;
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var e,
              t,
              n,
              i,
              s,
              a,
              o = this;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              u.default(this._element).hasClass(vt)) ||
              u.default(this._element).hasClass("disabled") ||
              ((a = u.default(this._element).closest(".nav, .list-group")[0]),
              (t = d.getSelectorFromElement(this._element)),
              a &&
                ((s =
                  "UL" === a.nodeName || "OL" === a.nodeName ? yt : ".active"),
                (n = (n = u.default.makeArray(u.default(a).find(s)))[
                  n.length - 1
                ])),
              (i = u.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              })),
              (s = u.default.Event("show.bs.tab", {
                relatedTarget: n,
              })),
              n && u.default(n).trigger(i),
              u.default(this._element).trigger(s),
              s.isDefaultPrevented() ||
                i.isDefaultPrevented() ||
                (t && (e = document.querySelector(t)),
                this._activate(this._element, a),
                (a = function () {
                  var e = u.default.Event("hidden.bs.tab", {
                      relatedTarget: o._element,
                    }),
                    t = u.default.Event("shown.bs.tab", {
                      relatedTarget: n,
                    });
                  u.default(n).trigger(e), u.default(o._element).trigger(t);
                }),
                e ? this._activate(e, e.parentNode, a) : a()));
          }),
          (e.dispose = function () {
            u.default.removeData(this._element, gt), (this._element = null);
          }),
          (e._activate = function (e, t, n) {
            var i = this,
              s = (
                !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                  ? u.default(t).children(".active")
                  : u.default(t).find(yt)
              )[0],
              a = n && s && u.default(s).hasClass("fade"),
              t = function () {
                return i._transitionComplete(e, s, n);
              };
            s && a
              ? ((a = d.getTransitionDurationFromElement(s)),
                u
                  .default(s)
                  .removeClass("show")
                  .one(d.TRANSITION_END, t)
                  .emulateTransitionEnd(a))
              : t();
          }),
          (e._transitionComplete = function (e, t, n) {
            var i;
            t &&
              (u.default(t).removeClass(vt),
              (i = u
                .default(t.parentNode)
                .find("> .dropdown-menu .active")[0]) &&
                u.default(i).removeClass(vt),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1)),
              u.default(e).addClass(vt),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !0),
              d.reflow(e),
              e.classList.contains("fade") && e.classList.add("show"),
              e.parentNode &&
                u.default(e.parentNode).hasClass("dropdown-menu") &&
                ((t = u.default(e).closest(".dropdown")[0]) &&
                  ((t = [].slice.call(t.querySelectorAll(".dropdown-toggle"))),
                  u.default(t).addClass(vt)),
                e.setAttribute("aria-expanded", !0)),
              n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(gt);
              if (
                (t || ((t = new i(this)), e.data(gt, t)), "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
          ]),
          i
        );
      })();
    u
      .default(document)
      .on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (e) {
          e.preventDefault(), bt._jQueryInterface.call(u.default(this), "show");
        }
      ),
      (u.default.fn.tab = bt._jQueryInterface),
      (u.default.fn.tab.Constructor = bt),
      (u.default.fn.tab.noConflict = function () {
        return (u.default.fn.tab = mt), bt._jQueryInterface;
      });
    var wt = "toast",
      xt = "bs.toast",
      w = "." + xt,
      Tt = u.default.fn[wt],
      Ct = "click.dismiss" + w,
      Et = "show",
      St = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number",
      },
      _t = { animation: !0, autohide: !0, delay: 500 },
      kt = (function () {
        function i(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var e = i.prototype;
        return (
          (e.show = function () {
            var e,
              t = this,
              n = u.default.Event("show.bs.toast");
            u.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                (e = function () {
                  t._element.classList.remove("showing"),
                    t._element.classList.add(Et),
                    u.default(t._element).trigger("shown.bs.toast"),
                    t._config.autohide &&
                      (t._timeout = setTimeout(function () {
                        t.hide();
                      }, t._config.delay));
                }),
                this._element.classList.remove("hide"),
                d.reflow(this._element),
                this._element.classList.add("showing"),
                this._config.animation
                  ? ((n = d.getTransitionDurationFromElement(this._element)),
                    u
                      .default(this._element)
                      .one(d.TRANSITION_END, e)
                      .emulateTransitionEnd(n))
                  : e());
          }),
          (e.hide = function () {
            var e;
            this._element.classList.contains(Et) &&
              ((e = u.default.Event("hide.bs.toast")),
              u.default(this._element).trigger(e),
              e.isDefaultPrevented() || this._close());
          }),
          (e.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains(Et) &&
                this._element.classList.remove(Et),
              u.default(this._element).off(Ct),
              u.default.removeData(this._element, xt),
              (this._element = null),
              (this._config = null);
          }),
          (e._getConfig = function (e) {
            return (
              (e = r(
                {},
                _t,
                u.default(this._element).data(),
                "object" == typeof e && e ? e : {}
              )),
              d.typeCheckConfig(wt, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._setListeners = function () {
            var e = this;
            u.default(this._element).on(
              Ct,
              '[data-dismiss="toast"]',
              function () {
                return e.hide();
              }
            );
          }),
          (e._close = function () {
            function e() {
              n._element.classList.add("hide"),
                u.default(n._element).trigger("hidden.bs.toast");
            }
            var t,
              n = this;
            this._element.classList.remove(Et),
              this._config.animation
                ? ((t = d.getTransitionDurationFromElement(this._element)),
                  u
                    .default(this._element)
                    .one(d.TRANSITION_END, e)
                    .emulateTransitionEnd(t))
                : e();
          }),
          (e._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var e = u.default(this),
                t = e.data(xt);
              if (
                (t ||
                  ((t = new i(this, "object" == typeof n && n)), e.data(xt, t)),
                "string" == typeof n)
              ) {
                if (void 0 === t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](this);
              }
            });
          }),
          o(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.6.0";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return St;
              },
            },
            {
              key: "Default",
              get: function () {
                return _t;
              },
            },
          ]),
          i
        );
      })();
    (u.default.fn[wt] = kt._jQueryInterface),
      (u.default.fn[wt].Constructor = kt),
      (u.default.fn[wt].noConflict = function () {
        return (u.default.fn[wt] = Tt), kt._jQueryInterface;
      }),
      (e.Alert = g),
      (e.Button = T),
      (e.Carousel = O),
      (e.Collapse = G),
      (e.Dropdown = re),
      (e.Modal = ke),
      (e.Popover = it),
      (e.Scrollspy = ft),
      (e.Tab = bt),
      (e.Toast = kt),
      (e.Tooltip = Ye),
      (e.Util = d),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
//# sourceMappingURL=vendors.js.map

jQuery(document).ready(function (e) {
  WebFont.load({
    google: {
      families: [
        "Barlow:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
      ],
    },
  });
}),
  jQuery(document).ready(function (e) {
    var n,
      t = e(".btn-toggle-menu");
    t.length &&
      ((n = e(".toggle-menu")),
      t.on("click", function (e) {
        e.preventDefault(), n.slideToggle(), n.addClass("mobile");
      }));
  }),
  jQuery(document).ready(function (e) {
    function a(e) {
      return 11 === e.replace(/\D/g, "").length
        ? "(00) 00000-0000"
        : "(00) 0000-00009";
    }
    var n = {
      onKeyPress: function (e, n, t, i) {
        t.mask(a.apply({}, arguments), i);
      },
    };
    e(".mask-phone").mask(a, n),
      e(".mask-date").mask("00/00/0000"),
      e(".mask-datetime").mask("00/00/0000 00:00"),
      e(".mask-month").mask("00/0000"),
      e(".mask-cpf").mask("000.000.000-00"),
      e(".mask-cnpj").mask("00.000.000/0000-00"),
      e(".mask-zipcode").mask("00000-000"),
      e(".mask-money").mask("R$ 000.000.000.000.000,00", {
        reverse: !0,
        placeholder: "0,00",
      });
  }),
  jQuery(document).ready(function (e) {
    e = e(".section-slide .swiper-container");
    e.length &&
      new Swiper(e, {
        autoplay: { delay: 7e3 },
        navigation: {
          prevEl: e.parent().find(".slide-navigation.prev"),
          nextEl: e.parent().find(".slide-navigation.next"),
        },
        speed: 550,
        pagination: {
          el: ".slide-pagination",
          clickable: !0,
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active",
          modifierClass: "slide-pagination-",
        },
      });
  }),
  $(document).ready(function () {
    $(".site-header .header-bottom").scrollToFixed();
  }),
  $(function () {
    $("#navbar-menu ul li a[href^='#']").on("click", function (e) {
      e.preventDefault();
      var n = this.hash;
      n &&
        "#" != n &&
        ($(".toggle-menu").slideUp(150),
        setTimeout(function () {
          $("html, body").animate({ scrollTop: $(n).offset().top }, 750);
        }, 200));
    });
  }),
  jQuery(document).ready(function (e) {
    e = e(".section-testimony .swiper-container");
    e.length &&
      new Swiper(e, {
        autoplay: { delay: 7e3 },
        slidesPerView: 2,
        speed: 550,
        spaceBetween: 30,
        pagination: {
          el: ".testimony-pagination",
          clickable: !0,
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active",
          modifierClass: "slide-pagination-",
        },
        breakpoints: { 991: { slidesPerView: 1 } },
      });
  }),
  jQuery(document).ready(function (e) {
    e("select.select2").select2({ language: "pt-BR", width: "100%" }),
      e("select.select2-nosearch").select2({
        language: "pt-BR",
        width: "100%",
        minimumResultsForSearch: -1,
      });
  }),
  jQuery(document).ready(function (e) {
    e = e(".section-plans-mobile .swiper-container");
    e.length &&
      new Swiper(e, {
        autoplay: { delay: 7e3 },
        navigation: {
          prevEl: e.parent().find(".slide-navigation.prev"),
          nextEl: e.parent().find(".slide-navigation.next"),
        },
        speed: 550,
      });
  });
//# sourceMappingURL=scripts.js.map

!(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("nothing selected, can't validate, returning nothing")
        );
      var c = a.data(this[0], "validator");
      return (
        c ||
        ((c = new a.validator(b, this[0])),
        a.data(this[0], "validator", c),
        c.settings.onsubmit &&
          (this.find("input, button")
            .filter(".cancel")
            .click(function () {
              c.cancelSubmit = !0;
            }),
          c.settings.submitHandler &&
            this.find("input, button")
              .filter(":submit")
              .click(function () {
                c.submitButton = this;
              }),
          this.submit(function (b) {
            function d() {
              if (c.settings.submitHandler) {
                if (c.submitButton)
                  var b = a("<input type='hidden'/>")
                    .attr("name", c.submitButton.name)
                    .val(c.submitButton.value)
                    .appendTo(c.currentForm);
                return (
                  c.settings.submitHandler.call(c, c.currentForm),
                  c.submitButton && b.remove(),
                  !1
                );
              }
              return !0;
            }
            return (
              c.settings.debug && b.preventDefault(),
              c.cancelSubmit
                ? ((c.cancelSubmit = !1), d())
                : c.form()
                ? c.pendingRequest
                  ? ((c.formSubmitted = !0), !1)
                  : d()
                : (c.focusInvalid(), !1)
            );
          })),
        c)
      );
    },
    valid: function () {
      if (a(this[0]).is("form")) return this.validate().form();
      var b = !0,
        c = a(this[0].form).validate();
      return (
        this.each(function () {
          b &= c.element(this);
        }),
        b
      );
    },
    removeAttrs: function (b) {
      var c = {},
        d = this;
      return (
        a.each(b.split(/\s/), function (a, b) {
          (c[b] = d.attr(b)), d.removeAttr(b);
        }),
        c
      );
    },
    rules: function (b, c) {
      var d = this[0];
      if (b) {
        var e = a.data(d.form, "validator").settings,
          f = e.rules,
          g = a.validator.staticRules(d);
        switch (b) {
          case "add":
            a.extend(g, a.validator.normalizeRule(c)),
              (f[d.name] = g),
              c.messages &&
                (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
            break;
          case "remove":
            if (!c) return delete f[d.name], g;
            var h = {};
            return (
              a.each(c.split(/\s/), function (a, b) {
                (h[b] = g[b]), delete g[b];
              }),
              h
            );
        }
      }
      var i = a.validator.normalizeRules(
        a.extend(
          {},
          a.validator.metadataRules(d),
          a.validator.classRules(d),
          a.validator.attributeRules(d),
          a.validator.staticRules(d)
        ),
        d
      );
      if (i.required) {
        var j = i.required;
        delete i.required, (i = a.extend({ required: j }, i));
      }
      return i;
    },
  }),
    a.extend(a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + b.value);
      },
      filled: function (b) {
        return !!a.trim("" + b.value);
      },
      unchecked: function (a) {
        return !a.checked;
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 == arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : (arguments.length > 2 &&
            c.constructor != Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor != Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), c);
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: [],
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              !this.blockFocusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.errorsFor(a).hide());
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (a) {
          (a.name in this.submitted || a == this.lastElement) &&
            this.element(a);
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function d(b) {
            var c = a.data(this[0].form, "validator"),
              d = "on" + b.type.replace(/^validate/, "");
            c.settings[d] && c.settings[d].call(c, this[0]);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var b = (this.groups = {});
          a.each(this.settings.groups, function (c, d) {
            a.each(d.split(/\s/), function (a, d) {
              b[d] = c;
            });
          });
          var c = this.settings.rules;
          a.each(c, function (b, d) {
            c[b] = a.validator.normalizeRule(d);
          }),
            a(this.currentForm)
              .validateDelegate(
                ":text, :password, :file, select, textarea",
                "focusin focusout keyup",
                d
              )
              .validateDelegate(
                ":radio, :checkbox, select, option",
                "click",
                d
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).bind(
                "invalid-form.validate",
                this.settings.invalidHandler
              );
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          (b = this.clean(b)),
            (this.lastElement = b),
            this.prepareElement(b),
            (this.currentElements = a(b));
          var c = this.check(b);
          return (
            c ? delete this.invalid[b.name] : (this.invalid[b.name] = !0),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            c
          );
        },
        showErrors: function (b) {
          if (b) {
            a.extend(this.errorMap, b), (this.errorList = []);
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0],
              });
            this.successList = a.grep(this.successList, function (a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors(),
            this.elements().removeClass(this.settings.errorClass);
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b = 0;
          for (var c in a) b++;
          return b;
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide();
        },
        valid: function () {
          return 0 == this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (a) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ==
              a.grep(this.errorList, function (a) {
                return a.element.name == b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a([])
            .add(this.currentForm.elements)
            .filter(":input")
            .not(":submit, :reset, :image, [disabled]")
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                !(this.name in c || !b.objectLength(a(this).rules())) &&
                  ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          return a(
            this.settings.errorElement + "." + this.settings.errorClass,
            this.errorContext
          );
        },
        reset: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        check: function (b) {
          (b = this.clean(b)),
            this.checkable(b) && (b = this.findByName(b.name)[0]);
          var c = a(b).rules(),
            d = !1;
          for (method in c) {
            var e = { method: method, parameters: c[method] };
            try {
              var f = a.validator.methods[method].call(
                this,
                b.value.replace(/\r/g, ""),
                b,
                e.parameters
              );
              if ("dependency-mismatch" == f) {
                d = !0;
                continue;
              }
              if (((d = !1), "pending" == f))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!f) return this.formatAndAdd(b, e), !1;
            } catch (a) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "exception occured when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method",
                    a
                  ),
                a)
              );
            }
          }
          if (!d) return this.objectLength(c) && this.successList.push(b), !0;
        },
        customMetaMessage: function (b, c) {
          if (a.metadata) {
            var d = this.settings.meta
              ? a(b).metadata()[this.settings.meta]
              : a(b).metadata();
            return d && d.messages && d.messages[c];
          }
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor == String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customMetaMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            "<strong>Warning: No message defined for " + b.name + "</strong>"
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b.method),
            d = /\$?\{(\d+)\}/g;
          "function" == typeof c
            ? (c = c.call(this, b.parameters, a))
            : d.test(c) &&
              (c = jQuery.format(c.replace(d, "{$1}"), b.parameters)),
            this.errorList.push({ message: c, element: a }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          for (var a = 0; this.errorList[a]; a++) {
            var b = this.errorList[a];
            this.settings.highlight &&
              this.settings.highlight.call(
                this,
                b.element,
                this.settings.errorClass,
                this.settings.validClass
              ),
              this.showLabel(b.element, b.message);
          }
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (var a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (var a = 0, c = this.validElements(); c[a]; a++)
              this.settings.unhighlight.call(
                this,
                c[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d = this.errorsFor(b);
          d.length
            ? (d.removeClass().addClass(this.settings.errorClass),
              d.attr("generated") && d.html(c))
            : ((d = a("<" + this.settings.errorElement + "/>")
                .attr({ for: this.idOrName(b), generated: !0 })
                .addClass(this.settings.errorClass)
                .html(c || "")),
              this.settings.wrapper &&
                (d = d
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.append(d).length ||
                (this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b))),
            !c &&
              this.settings.success &&
              (d.text(""),
              "string" == typeof this.settings.success
                ? d.addClass(this.settings.success)
                : this.settings.success(d)),
            (this.toShow = this.toShow.add(d));
        },
        errorsFor: function (b) {
          var c = this.idOrName(b);
          return this.errors().filter(function () {
            return a(this).attr("for") == c;
          });
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          var c = this.currentForm;
          return a(document.getElementsByName(b)).map(function (a, d) {
            return (d.form == c && d.name == b && d) || null;
          });
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a, b) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          return (
            !a.validator.methods.required.call(this, a.trim(b.value), b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 == this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 == this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b) {
          return (
            a.data(b, "previousValue") ||
            a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote"),
            })
          );
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        dateDE: { dateDE: !0 },
        number: { number: !0 },
        numberDE: { numberDE: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor == String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      attributeRules: function (b) {
        var c = {},
          d = a(b);
        for (method in a.validator.methods) {
          var e = d.attr(method);
          e && (c[method] = e);
        }
        return (
          c.maxlength &&
            /-1|2147483647|524288/.test(c.maxlength) &&
            delete c.maxlength,
          c
        );
      },
      metadataRules: function (b) {
        if (!a.metadata) return {};
        var c = a.data(b.form, "validator").settings.meta;
        return c ? a(b).metadata()[c] : a(b).metadata();
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (!1 === e) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 === e.param || e.param) : delete b[d];
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(["minlength", "maxlength", "min", "max"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])]);
          }),
          a.validator.autoCreateRanges &&
            (b.min &&
              b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            b.minlength &&
              b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b.messages && delete b.messages,
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] = void 0 != d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          switch (c.nodeName.toLowerCase()) {
            case "select":
              var e = a(c).val();
              return e && e.length > 0;
            case "input":
              if (this.checkable(c)) return this.getLength(b, c) > 0;
            default:
              return a.trim(b).length > 0;
          }
        },
        remote: function (b, c, d) {
          if (this.optional(c)) return "dependency-mismatch";
          var e = this.previousValue(c);
          if (
            (this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (e.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = e.message),
            (d = ("string" == typeof d && { url: d }) || d),
            e.old !== b)
          ) {
            e.old = b;
            var f = this;
            this.startRequest(c);
            var g = {};
            return (
              (g[c.name] = b),
              a.ajax(
                a.extend(
                  !0,
                  {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function (d) {
                      f.settings.messages[c.name].remote = e.originalMessage;
                      var g = !0 === d;
                      if (g) {
                        var h = f.formSubmitted;
                        f.prepareElement(c),
                          (f.formSubmitted = h),
                          f.successList.push(c),
                          f.showErrors();
                      } else {
                        var i = {},
                          j = (e.message = d || f.defaultMessage(c, "remote"));
                        (i[c.name] = a.isFunction(j) ? j(b) : j),
                          f.showErrors(i);
                      }
                      (e.valid = g), f.stopRequest(c, g);
                    },
                  },
                  d
                )
              ),
              "pending"
            );
          }
          return this.pending[c.name] ? "pending" : e.valid;
        },
        minlength: function (b, c, d) {
          return this.optional(c) || this.getLength(a.trim(b), c) >= d;
        },
        maxlength: function (b, c, d) {
          return this.optional(c) || this.getLength(a.trim(b), c) <= d;
        },
        rangelength: function (b, c, d) {
          var e = this.getLength(a.trim(b), c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return this.optional(b) || !/Invalid|NaN/.test(new Date(a));
        },
        dateISO: function (a, b) {
          return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a);
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function (a, b) {
          if (this.optional(b)) return "dependency-mismatch";
          if (/[^0-9-]+/.test(a)) return !1;
          var c = 0,
            d = 0,
            e = !1;
          a = a.replace(/\D/g, "");
          for (var f = a.length - 1; f >= 0; f--) {
            var g = a.charAt(f),
              d = parseInt(g, 10);
            e && (d *= 2) > 9 && (d -= 9), (c += d), (e = !e);
          }
          return c % 10 == 0;
        },
        accept: function (a, b, c) {
          return (
            (c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif"),
            this.optional(b) || a.match(new RegExp(".(" + c + ")$", "i"))
          );
        },
        equalTo: function (b, c, d) {
          return (
            b ==
            a(d)
              .unbind(".validate-equalTo")
              .bind("blur.validate-equalTo", function () {
                a(c).valid();
              })
              .val()
          );
        },
      },
    }),
    (a.format = a.validator.format);
})(jQuery),
  (function (a) {
    var b = a.ajax,
      c = {};
    a.ajax = function (d) {
      d = a.extend(d, a.extend({}, a.ajaxSettings, d));
      var e = d.port;
      return "abort" == d.mode
        ? (c[e] && c[e].abort(), (c[e] = b.apply(this, arguments)))
        : b.apply(this, arguments);
    };
  })(jQuery),
  (function (a) {
    jQuery.event.special.focusin ||
      jQuery.event.special.focusout ||
      !document.addEventListener ||
      a.each({ focus: "focusin", blur: "focusout" }, function (b, c) {
        function d(b) {
          return (
            (b = a.event.fix(b)), (b.type = c), a.event.handle.call(this, b)
          );
        }
        a.event.special[c] = {
          setup: function () {
            this.addEventListener(b, d, !0);
          },
          teardown: function () {
            this.removeEventListener(b, d, !0);
          },
          handler: function (b) {
            return (
              (arguments[0] = a.event.fix(b)),
              (arguments[0].type = c),
              a.event.handle.apply(this, arguments)
            );
          },
        };
      }),
      a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
          return this.bind(c, function (c) {
            var e = a(c.target);
            if (e.is(b)) return d.apply(e, arguments);
          });
        },
      });
  })(jQuery);

        $(".select2").on("change", function () {
          window.location = $(this).val();
        });
