var l1 = Object.defineProperty;
var Jp = (e) => {
  throw TypeError(e);
};
var c1 = (e, t, n) =>
  t in e
    ? l1(e, t, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n,
      })
    : (e[t] = n);
var u1 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Dn = (e, t, n) => c1(e, typeof t != "symbol" ? t + "" : t, n),
  Ec = (e, t, n) => t.has(e) || Jp("Cannot " + n);
var _ = (e, t, n) => (
    Ec(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ye = (e, t, n) =>
    t.has(e)
      ? Jp("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  ae = (e, t, n, r) => (
    Ec(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  st = (e, t, n) => (Ec(e, t, "access private method"), n);
var Yi = (e, t, n, r) => ({
  set _(o) {
    ae(e, t, o, n);
  },
  get _() {
    return _(e, t, r);
  },
});
var bM = u1((DM, qi) => {
  function d1(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
          if (o !== "default" && !(o in e)) {
            const s = Object.getOwnPropertyDescriptor(r, o);
            s &&
              Object.defineProperty(
                e,
                o,
                s.get ? s : { enumerable: true, get: () => r[o] },
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
    new MutationObserver((o) => {
      for (const s of o)
        if (s.type === "childList")
          for (const i of s.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, { childList: true, subtree: true });
    function n(o) {
      const s = {};
      return (
        o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (s.credentials = "include")
          : o.crossOrigin === "anonymous"
            ? (s.credentials = "omit")
            : (s.credentials = "same-origin"),
        s
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = true;
      const s = n(o);
      fetch(o.href, s);
    }
  })();
  function Oi(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Ig = { exports: {} },
    Dl = {},
    _g = { exports: {} },
    fe = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ii = Symbol.for("react.element"),
    f1 = Symbol.for("react.portal"),
    p1 = Symbol.for("react.fragment"),
    h1 = Symbol.for("react.strict_mode"),
    m1 = Symbol.for("react.profiler"),
    g1 = Symbol.for("react.provider"),
    v1 = Symbol.for("react.context"),
    y1 = Symbol.for("react.forward_ref"),
    x1 = Symbol.for("react.suspense"),
    w1 = Symbol.for("react.memo"),
    b1 = Symbol.for("react.lazy"),
    eh = Symbol.iterator;
  function S1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (eh && e[eh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Lg = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Fg = Object.assign,
    zg = {};
  function ds(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = zg),
      (this.updater = n || Lg));
  }
  ds.prototype.isReactComponent = {};
  ds.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  ds.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function $g() {}
  $g.prototype = ds.prototype;
  function ef(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = zg),
      (this.updater = n || Lg));
  }
  var tf = (ef.prototype = new $g());
  tf.constructor = ef;
  Fg(tf, ds.prototype);
  tf.isPureReactComponent = true;
  var th = Array.isArray,
    Bg = Object.prototype.hasOwnProperty,
    nf = { current: null },
    Wg = { key: true, ref: true, __self: true, __source: true };
  function Ug(e, t, n) {
    var r,
      o = {},
      s = null,
      i = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        Bg.call(t, r) && !Wg.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      o.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
      $$typeof: Ii,
      type: e,
      key: s,
      ref: i,
      props: o,
      _owner: nf.current,
    };
  }
  function C1(e, t) {
    return {
      $$typeof: Ii,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function rf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ii;
  }
  function k1(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var nh = /\/+/g;
  function Tc(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? k1("" + e.key)
      : t.toString(36);
  }
  function Ta(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = false;
    if (e === null) i = true;
    else
      switch (s) {
        case "string":
        case "number":
          i = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ii:
            case f1:
              i = true;
          }
      }
    if (i)
      return (
        (i = e),
        (o = o(i)),
        (e = r === "" ? "." + Tc(i, 0) : r),
        th(o)
          ? ((n = ""),
            e != null && (n = e.replace(nh, "$&/") + "/"),
            Ta(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (rf(o) &&
              (o = C1(
                o,
                n +
                  (!o.key || (i && i.key === o.key)
                    ? ""
                    : ("" + o.key).replace(nh, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((i = 0), (r = r === "" ? "." : r + ":"), th(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a];
        var l = r + Tc(s, a);
        i += Ta(s, t, n, l, o);
      }
    else if (((l = S1(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(s = e.next()).done;)
        ((s = s.value), (l = r + Tc(s, a++)), (i += Ta(s, t, n, l, o)));
    else if (s === "object")
      throw (
        (t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return i;
  }
  function Xi(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      Ta(e, r, "", "", function (s) {
        return t.call(n, s, o++);
      }),
      r
    );
  }
  function E1(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var vt = { current: null },
    Na = { transition: null },
    T1 = {
      ReactCurrentDispatcher: vt,
      ReactCurrentBatchConfig: Na,
      ReactCurrentOwner: nf,
    };
  function Hg() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  fe.Children = {
    map: Xi,
    forEach: function (e, t, n) {
      Xi(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Xi(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Xi(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!rf(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  fe.Component = ds;
  fe.Fragment = p1;
  fe.Profiler = m1;
  fe.PureComponent = ef;
  fe.StrictMode = h1;
  fe.Suspense = x1;
  fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1;
  fe.act = Hg;
  fe.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var r = Fg({}, e.props),
      o = e.key,
      s = e.ref,
      i = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (i = nf.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        Bg.call(t, l) &&
          !Wg.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: Ii, type: e.type, key: o, ref: s, props: r, _owner: i };
  };
  fe.createContext = function (e) {
    return (
      (e = {
        $$typeof: v1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: g1, _context: e }),
      (e.Consumer = e)
    );
  };
  fe.createElement = Ug;
  fe.createFactory = function (e) {
    var t = Ug.bind(null, e);
    return ((t.type = e), t);
  };
  fe.createRef = function () {
    return { current: null };
  };
  fe.forwardRef = function (e) {
    return { $$typeof: y1, render: e };
  };
  fe.isValidElement = rf;
  fe.lazy = function (e) {
    return { $$typeof: b1, _payload: { _status: -1, _result: e }, _init: E1 };
  };
  fe.memo = function (e, t) {
    return { $$typeof: w1, type: e, compare: t === void 0 ? null : t };
  };
  fe.startTransition = function (e) {
    var t = Na.transition;
    Na.transition = {};
    try {
      e();
    } finally {
      Na.transition = t;
    }
  };
  fe.unstable_act = Hg;
  fe.useCallback = function (e, t) {
    return vt.current.useCallback(e, t);
  };
  fe.useContext = function (e) {
    return vt.current.useContext(e);
  };
  fe.useDebugValue = function () {};
  fe.useDeferredValue = function (e) {
    return vt.current.useDeferredValue(e);
  };
  fe.useEffect = function (e, t) {
    return vt.current.useEffect(e, t);
  };
  fe.useId = function () {
    return vt.current.useId();
  };
  fe.useImperativeHandle = function (e, t, n) {
    return vt.current.useImperativeHandle(e, t, n);
  };
  fe.useInsertionEffect = function (e, t) {
    return vt.current.useInsertionEffect(e, t);
  };
  fe.useLayoutEffect = function (e, t) {
    return vt.current.useLayoutEffect(e, t);
  };
  fe.useMemo = function (e, t) {
    return vt.current.useMemo(e, t);
  };
  fe.useReducer = function (e, t, n) {
    return vt.current.useReducer(e, t, n);
  };
  fe.useRef = function (e) {
    return vt.current.useRef(e);
  };
  fe.useState = function (e) {
    return vt.current.useState(e);
  };
  fe.useSyncExternalStore = function (e, t, n) {
    return vt.current.useSyncExternalStore(e, t, n);
  };
  fe.useTransition = function () {
    return vt.current.useTransition();
  };
  fe.version = "18.3.1";
  _g.exports = fe;
  var d = _g.exports;
  const O = Oi(d),
    of = d1({ __proto__: null, default: O }, [d]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var N1 = d,
    P1 = Symbol.for("react.element"),
    j1 = Symbol.for("react.fragment"),
    R1 = Object.prototype.hasOwnProperty,
    A1 =
      N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    D1 = { key: true, ref: true, __self: true, __source: true };
  function Vg(e, t, n) {
    var r,
      o = {},
      s = null,
      i = null;
    (n !== void 0 && (s = "" + n),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (i = t.ref));
    for (r in t) R1.call(t, r) && !D1.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: P1,
      type: e,
      key: s,
      ref: i,
      props: o,
      _owner: A1.current,
    };
  }
  Dl.Fragment = j1;
  Dl.jsx = Vg;
  Dl.jsxs = Vg;
  Ig.exports = Dl;
  var c = Ig.exports,
    qg = { exports: {} },
    Ot = {},
    Gg = { exports: {} },
    Qg = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(A, P) {
      var E = A.length;
      A.push(P);
      e: for (; 0 < E;) {
        var S = (E - 1) >>> 1,
          R = A[S];
        if (0 < o(R, P)) ((A[S] = P), (A[E] = R), (E = S));
        else break e;
      }
    }
    function n(A) {
      return A.length === 0 ? null : A[0];
    }
    function r(A) {
      if (A.length === 0) return null;
      var P = A[0],
        E = A.pop();
      if (E !== P) {
        A[0] = E;
        e: for (var S = 0, R = A.length, L = R >>> 1; S < L;) {
          var z = 2 * (S + 1) - 1,
            Q = A[z],
            V = z + 1,
            M = A[V];
          if (0 > o(Q, E))
            V < R && 0 > o(M, Q)
              ? ((A[S] = M), (A[V] = E), (S = V))
              : ((A[S] = Q), (A[z] = E), (S = z));
          else if (V < R && 0 > o(M, E)) ((A[S] = M), (A[V] = E), (S = V));
          else break e;
        }
      }
      return P;
    }
    function o(A, P) {
      var E = A.sortIndex - P.sortIndex;
      return E !== 0 ? E : A.id - P.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var s = performance;
      e.unstable_now = function () {
        return s.now();
      };
    } else {
      var i = Date,
        a = i.now();
      e.unstable_now = function () {
        return i.now() - a;
      };
    }
    var l = [],
      u = [],
      f = 1,
      p = null,
      v = 3,
      h = false,
      b = false,
      m = false,
      x = typeof setTimeout == "function" ? setTimeout : null,
      y = typeof clearTimeout == "function" ? clearTimeout : null,
      g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(A) {
      for (var P = n(u); P !== null;) {
        if (P.callback === null) r(u);
        else if (P.startTime <= A)
          (r(u), (P.sortIndex = P.expirationTime), t(l, P));
        else break;
        P = n(u);
      }
    }
    function C(A) {
      if (((m = false), w(A), !b))
        if (n(l) !== null) ((b = true), G(k));
        else {
          var P = n(u);
          P !== null && H(C, P.startTime - A);
        }
    }
    function k(A, P) {
      ((b = false), m && ((m = false), y(j), (j = -1)), (h = true));
      var E = v;
      try {
        for (
          w(P), p = n(l);
          p !== null && (!(p.expirationTime > P) || (A && !$()));
        ) {
          var S = p.callback;
          if (typeof S == "function") {
            ((p.callback = null), (v = p.priorityLevel));
            var R = S(p.expirationTime <= P);
            ((P = e.unstable_now()),
              typeof R == "function" ? (p.callback = R) : p === n(l) && r(l),
              w(P));
          } else r(l);
          p = n(l);
        }
        if (p !== null) var L = true;
        else {
          var z = n(u);
          (z !== null && H(C, z.startTime - P), (L = false));
        }
        return L;
      } finally {
        ((p = null), (v = E), (h = false));
      }
    }
    var T = false,
      N = null,
      j = -1,
      D = 5,
      I = -1;
    function $() {
      return !(e.unstable_now() - I < D);
    }
    function B() {
      if (N !== null) {
        var A = e.unstable_now();
        I = A;
        var P = true;
        try {
          P = N(true, A);
        } finally {
          P ? K() : ((T = false), (N = null));
        }
      } else T = false;
    }
    var K;
    if (typeof g == "function")
      K = function () {
        g(B);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(),
        te = F.port2;
      ((F.port1.onmessage = B),
        (K = function () {
          te.postMessage(null);
        }));
    } else
      K = function () {
        x(B, 0);
      };
    function G(A) {
      ((N = A), T || ((T = true), K()));
    }
    function H(A, P) {
      j = x(function () {
        A(e.unstable_now());
      }, P);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (A) {
        A.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        b || h || ((b = true), G(k));
      }),
      (e.unstable_forceFrameRate = function (A) {
        0 > A || 125 < A
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (D = 0 < A ? Math.floor(1e3 / A) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return v;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (A) {
        switch (v) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = v;
        }
        var E = v;
        v = P;
        try {
          return A();
        } finally {
          v = E;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (A, P) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var E = v;
        v = A;
        try {
          return P();
        } finally {
          v = E;
        }
      }),
      (e.unstable_scheduleCallback = function (A, P, E) {
        var S = e.unstable_now();
        switch (
          (typeof E == "object" && E !== null
            ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? S + E : S))
            : (E = S),
          A)
        ) {
          case 1:
            var R = -1;
            break;
          case 2:
            R = 250;
            break;
          case 5:
            R = 1073741823;
            break;
          case 4:
            R = 1e4;
            break;
          default:
            R = 5e3;
        }
        return (
          (R = E + R),
          (A = {
            id: f++,
            callback: P,
            priorityLevel: A,
            startTime: E,
            expirationTime: R,
            sortIndex: -1,
          }),
          E > S
            ? ((A.sortIndex = E),
              t(u, A),
              n(l) === null &&
                A === n(u) &&
                (m ? (y(j), (j = -1)) : (m = true), H(C, E - S)))
            : ((A.sortIndex = R), t(l, A), b || h || ((b = true), G(k))),
          A
        );
      }),
      (e.unstable_shouldYield = $),
      (e.unstable_wrapCallback = function (A) {
        var P = v;
        return function () {
          var E = v;
          v = P;
          try {
            return A.apply(this, arguments);
          } finally {
            v = E;
          }
        };
      }));
  })(Qg);
  Gg.exports = Qg;
  var M1 = Gg.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var O1 = d,
    Mt = M1;
  function W(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Kg = new Set(),
    si = {};
  function ho(e, t) {
    (ts(e, t), ts(e + "Capture", t));
  }
  function ts(e, t) {
    for (si[e] = t, e = 0; e < t.length; e++) Kg.add(t[e]);
  }
  var Bn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ku = Object.prototype.hasOwnProperty,
    I1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    rh = {},
    oh = {};
  function _1(e) {
    return ku.call(oh, e)
      ? true
      : ku.call(rh, e)
        ? false
        : I1.test(e)
          ? (oh[e] = true)
          : ((rh[e] = true), false);
  }
  function L1(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r
          ? false
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function F1(e, t, n, r) {
    if (t === null || typeof t > "u" || L1(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return false;
  }
  function yt(e, t, n, r, o, s, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = i));
  }
  var rt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      rt[e] = new yt(e, 0, false, e, null, false, false);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    rt[t] = new yt(t, 1, false, e[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    rt[e] = new yt(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    rt[e] = new yt(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      rt[e] = new yt(e, 3, false, e.toLowerCase(), null, false, false);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    rt[e] = new yt(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function (e) {
    rt[e] = new yt(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    rt[e] = new yt(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (e) {
    rt[e] = new yt(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var sf = /[\-:]([a-z])/g;
  function af(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(sf, af);
      rt[t] = new yt(t, 1, false, e, null, false, false);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(sf, af);
      rt[t] = new yt(
        t,
        1,
        false,
        e,
        "http://www.w3.org/1999/xlink",
        false,
        false,
      );
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(sf, af);
    rt[t] = new yt(
      t,
      1,
      false,
      e,
      "http://www.w3.org/XML/1998/namespace",
      false,
      false,
    );
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    rt[e] = new yt(e, 1, false, e.toLowerCase(), null, false, false);
  });
  rt.xlinkHref = new yt(
    "xlinkHref",
    1,
    false,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    true,
    false,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    rt[e] = new yt(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function lf(e, t, n, r) {
    var o = rt.hasOwnProperty(t) ? rt[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (F1(t, n, o, r) && (n = null),
      r || o === null
        ? _1(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? false : "") : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === true) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Gn = O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Zi = Symbol.for("react.element"),
    Co = Symbol.for("react.portal"),
    ko = Symbol.for("react.fragment"),
    cf = Symbol.for("react.strict_mode"),
    Eu = Symbol.for("react.profiler"),
    Yg = Symbol.for("react.provider"),
    Xg = Symbol.for("react.context"),
    uf = Symbol.for("react.forward_ref"),
    Tu = Symbol.for("react.suspense"),
    Nu = Symbol.for("react.suspense_list"),
    df = Symbol.for("react.memo"),
    nr = Symbol.for("react.lazy"),
    Zg = Symbol.for("react.offscreen"),
    sh = Symbol.iterator;
  function js(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (sh && e[sh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Re = Object.assign,
    Nc;
  function Bs(e) {
    if (Nc === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Nc = (t && t[1]) || "";
      }
    return (
      `
` +
      Nc +
      e
    );
  }
  var Pc = false;
  function jc(e, t) {
    if (!e || Pc) return "";
    Pc = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            s = r.stack.split(`
`),
            i = o.length - 1,
            a = s.length - 1;
          1 <= i && 0 <= a && o[i] !== s[a];
        )
          a--;
        for (; 1 <= i && 0 <= a; i--, a--)
          if (o[i] !== s[a]) {
            if (i !== 1 || a !== 1)
              do
                if ((i--, a--, 0 > a || o[i] !== s[a])) {
                  var l =
                    `
` + o[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= i && 0 <= a);
            break;
          }
      }
    } finally {
      ((Pc = false), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? Bs(e) : "";
  }
  function z1(e) {
    switch (e.tag) {
      case 5:
        return Bs(e.type);
      case 16:
        return Bs("Lazy");
      case 13:
        return Bs("Suspense");
      case 19:
        return Bs("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = jc(e.type, false)), e);
      case 11:
        return ((e = jc(e.type.render, false)), e);
      case 1:
        return ((e = jc(e.type, true)), e);
      default:
        return "";
    }
  }
  function Pu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ko:
        return "Fragment";
      case Co:
        return "Portal";
      case Eu:
        return "Profiler";
      case cf:
        return "StrictMode";
      case Tu:
        return "Suspense";
      case Nu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xg:
          return (e.displayName || "Context") + ".Consumer";
        case Yg:
          return (e._context.displayName || "Context") + ".Provider";
        case uf:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case df:
          return (
            (t = e.displayName || null),
            t !== null ? t : Pu(e.type) || "Memo"
          );
        case nr:
          ((t = e._payload), (e = e._init));
          try {
            return Pu(e(t));
          } catch {}
      }
    return null;
  }
  function $1(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Pu(t);
      case 8:
        return t === cf ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Er(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jg(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function B1(e) {
    var t = Jg(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: true,
          get: function () {
            return o.call(this);
          },
          set: function (i) {
            ((r = "" + i), s.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ji(e) {
    e._valueTracker || (e._valueTracker = B1(e));
  }
  function ev(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Jg(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), true) : false
    );
  }
  function Ga(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ju(e, t) {
    var n = t.checked;
    return Re({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ih(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Er(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function tv(e, t) {
    ((t = t.checked), t != null && lf(e, "checked", t, false));
  }
  function Ru(e, t) {
    tv(e, t);
    var n = Er(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Au(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Au(e, t.type, Er(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function ah(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      ))
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Au(e, t, n) {
    (t !== "number" || Ga(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ws = Array.isArray;
  function Io(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
      for (n = 0; n < e.length; n++)
        ((o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = true));
    } else {
      for (n = "" + Er(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          ((e[o].selected = true), r && (e[o].defaultSelected = true));
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Du(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
    return Re({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function lh(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(W(92));
        if (Ws(n)) {
          if (1 < n.length) throw Error(W(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Er(n) };
  }
  function nv(e, t) {
    var n = Er(t.value),
      r = Er(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function ch(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function rv(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? rv(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var ea,
    ov = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ea = ea || document.createElement("div"),
            ea.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ea.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function ii(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qs = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true,
    },
    W1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qs).forEach(function (e) {
    W1.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qs[t] = qs[e]));
    });
  });
  function sv(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (qs.hasOwnProperty(e) && qs[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function iv(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = sv(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : (e[n] = o));
      }
  }
  var U1 = Re(
    { menuitem: true },
    {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true,
    },
  );
  function Ou(e, t) {
    if (t) {
      if (U1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(W(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(W(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(W(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(W(62));
    }
  }
  function Iu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var _u = null;
  function ff(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Lu = null,
    _o = null,
    Lo = null;
  function uh(e) {
    if ((e = Fi(e))) {
      if (typeof Lu != "function") throw Error(W(280));
      var t = e.stateNode;
      t && ((t = Ll(t)), Lu(e.stateNode, e.type, t));
    }
  }
  function av(e) {
    _o ? (Lo ? Lo.push(e) : (Lo = [e])) : (_o = e);
  }
  function lv() {
    if (_o) {
      var e = _o,
        t = Lo;
      if (((Lo = _o = null), uh(e), t)) for (e = 0; e < t.length; e++) uh(t[e]);
    }
  }
  function cv(e, t) {
    return e(t);
  }
  function uv() {}
  var Rc = false;
  function dv(e, t, n) {
    if (Rc) return e(t, n);
    Rc = true;
    try {
      return cv(e, t, n);
    } finally {
      ((Rc = false), (_o !== null || Lo !== null) && (uv(), lv()));
    }
  }
  function ai(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ll(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(W(231, t, typeof n));
    return n;
  }
  var Fu = false;
  if (Bn)
    try {
      var Rs = {};
      (Object.defineProperty(Rs, "passive", {
        get: function () {
          Fu = true;
        },
      }),
        window.addEventListener("test", Rs, Rs),
        window.removeEventListener("test", Rs, Rs));
    } catch {
      Fu = false;
    }
  function H1(e, t, n, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (f) {
      this.onError(f);
    }
  }
  var Gs = false,
    Qa = null,
    Ka = false,
    zu = null,
    V1 = {
      onError: function (e) {
        ((Gs = true), (Qa = e));
      },
    };
  function q1(e, t, n, r, o, s, i, a, l) {
    ((Gs = false), (Qa = null), H1.apply(V1, arguments));
  }
  function G1(e, t, n, r) {
    if ((q1.apply(this, arguments), Gs)) {
      if (Gs) {
        var u = Qa;
        ((Gs = false), (Qa = null));
      } else throw Error(W(198));
      Ka || ((Ka = true), (zu = u));
    }
  }
  function mo(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function fv(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function dh(e) {
    if (mo(e) !== e) throw Error(W(188));
  }
  function Q1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = mo(e)), t === null)) throw Error(W(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var o = n.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s;) {
          if (s === n) return (dh(o), e);
          if (s === r) return (dh(o), t);
          s = s.sibling;
        }
        throw Error(W(188));
      }
      if (n.return !== r.return) ((n = o), (r = s));
      else {
        for (var i = false, a = o.child; a;) {
          if (a === n) {
            ((i = true), (n = o), (r = s));
            break;
          }
          if (a === r) {
            ((i = true), (r = o), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = s.child; a;) {
            if (a === n) {
              ((i = true), (n = s), (r = o));
              break;
            }
            if (a === r) {
              ((i = true), (r = s), (n = o));
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(W(189));
        }
      }
      if (n.alternate !== r) throw Error(W(190));
    }
    if (n.tag !== 3) throw Error(W(188));
    return n.stateNode.current === n ? e : t;
  }
  function pv(e) {
    return ((e = Q1(e)), e !== null ? hv(e) : null);
  }
  function hv(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = hv(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var mv = Mt.unstable_scheduleCallback,
    fh = Mt.unstable_cancelCallback,
    K1 = Mt.unstable_shouldYield,
    Y1 = Mt.unstable_requestPaint,
    Fe = Mt.unstable_now,
    X1 = Mt.unstable_getCurrentPriorityLevel,
    pf = Mt.unstable_ImmediatePriority,
    gv = Mt.unstable_UserBlockingPriority,
    Ya = Mt.unstable_NormalPriority,
    Z1 = Mt.unstable_LowPriority,
    vv = Mt.unstable_IdlePriority,
    Ml = null,
    En = null;
  function J1(e) {
    if (En && typeof En.onCommitFiberRoot == "function")
      try {
        En.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var on = Math.clz32 ? Math.clz32 : nS,
    eS = Math.log,
    tS = Math.LN2;
  function nS(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((eS(e) / tS) | 0)) | 0);
  }
  var ta = 64,
    na = 4194304;
  function Us(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Xa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      s = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var a = i & ~o;
      a !== 0 ? (r = Us(a)) : ((s &= i), s !== 0 && (r = Us(s)));
    } else ((i = n & ~o), i !== 0 ? (r = Us(i)) : s !== 0 && (r = Us(s)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - on(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
    return r;
  }
  function rS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function oS(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;
    ) {
      var i = 31 - on(s),
        a = 1 << i,
        l = o[i];
      (l === -1
        ? (!(a & n) || a & r) && (o[i] = rS(a, t))
        : l <= t && (e.expiredLanes |= a),
        (s &= ~a));
    }
  }
  function $u(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function yv() {
    var e = ta;
    return ((ta <<= 1), !(ta & 4194240) && (ta = 64), e);
  }
  function Ac(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function _i(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - on(t)),
      (e[t] = n));
  }
  function sS(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
      var o = 31 - on(n),
        s = 1 << o;
      ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
    }
  }
  function hf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - on(n),
        o = 1 << r;
      ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
    }
  }
  var xe = 0;
  function xv(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var wv,
    mf,
    bv,
    Sv,
    Cv,
    Bu = false,
    ra = [],
    mr = null,
    gr = null,
    vr = null,
    li = new Map(),
    ci = new Map(),
    sr = [],
    iS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ph(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mr = null;
        break;
      case "dragenter":
      case "dragleave":
        gr = null;
        break;
      case "mouseover":
      case "mouseout":
        vr = null;
        break;
      case "pointerover":
      case "pointerout":
        li.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ci.delete(t.pointerId);
    }
  }
  function As(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [o],
        }),
        t !== null && ((t = Fi(t)), t !== null && mf(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function aS(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return ((mr = As(mr, e, t, n, r, o)), true);
      case "dragenter":
        return ((gr = As(gr, e, t, n, r, o)), true);
      case "mouseover":
        return ((vr = As(vr, e, t, n, r, o)), true);
      case "pointerover":
        var s = o.pointerId;
        return (li.set(s, As(li.get(s) || null, e, t, n, r, o)), true);
      case "gotpointercapture":
        return (
          (s = o.pointerId),
          ci.set(s, As(ci.get(s) || null, e, t, n, r, o)),
          true
        );
    }
    return false;
  }
  function kv(e) {
    var t = qr(e.target);
    if (t !== null) {
      var n = mo(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = fv(n)), t !== null)) {
            ((e.blockedOn = t),
              Cv(e.priority, function () {
                bv(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pa(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((_u = r), n.target.dispatchEvent(r), (_u = null));
      } else
        return ((t = Fi(n)), t !== null && mf(t), (e.blockedOn = n), false);
      t.shift();
    }
    return true;
  }
  function hh(e, t, n) {
    Pa(e) && n.delete(t);
  }
  function lS() {
    ((Bu = false),
      mr !== null && Pa(mr) && (mr = null),
      gr !== null && Pa(gr) && (gr = null),
      vr !== null && Pa(vr) && (vr = null),
      li.forEach(hh),
      ci.forEach(hh));
  }
  function Ds(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Bu ||
        ((Bu = true),
        Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, lS)));
  }
  function ui(e) {
    function t(o) {
      return Ds(o, e);
    }
    if (0 < ra.length) {
      Ds(ra[0], e);
      for (var n = 1; n < ra.length; n++) {
        var r = ra[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      mr !== null && Ds(mr, e),
        gr !== null && Ds(gr, e),
        vr !== null && Ds(vr, e),
        li.forEach(t),
        ci.forEach(t),
        n = 0;
      n < sr.length;
      n++
    )
      ((r = sr[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < sr.length && ((n = sr[0]), n.blockedOn === null);)
      (kv(n), n.blockedOn === null && sr.shift());
  }
  var Fo = Gn.ReactCurrentBatchConfig,
    Za = true;
  function cS(e, t, n, r) {
    var o = xe,
      s = Fo.transition;
    Fo.transition = null;
    try {
      ((xe = 1), gf(e, t, n, r));
    } finally {
      ((xe = o), (Fo.transition = s));
    }
  }
  function uS(e, t, n, r) {
    var o = xe,
      s = Fo.transition;
    Fo.transition = null;
    try {
      ((xe = 4), gf(e, t, n, r));
    } finally {
      ((xe = o), (Fo.transition = s));
    }
  }
  function gf(e, t, n, r) {
    if (Za) {
      var o = Wu(e, t, n, r);
      if (o === null) (Bc(e, t, r, Ja, n), ph(e, r));
      else if (aS(o, e, t, n, r)) r.stopPropagation();
      else if ((ph(e, r), t & 4 && -1 < iS.indexOf(e))) {
        for (; o !== null;) {
          var s = Fi(o);
          if (
            (s !== null && wv(s),
            (s = Wu(e, t, n, r)),
            s === null && Bc(e, t, r, Ja, n),
            s === o)
          )
            break;
          o = s;
        }
        o !== null && r.stopPropagation();
      } else Bc(e, t, r, null, n);
    }
  }
  var Ja = null;
  function Wu(e, t, n, r) {
    if (((Ja = null), (e = ff(r)), (e = qr(e)), e !== null))
      if (((t = mo(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = fv(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ja = e), null);
  }
  function Ev(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (X1()) {
          case pf:
            return 1;
          case gv:
            return 4;
          case Ya:
          case Z1:
            return 16;
          case vv:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fr = null,
    vf = null,
    ja = null;
  function Tv() {
    if (ja) return ja;
    var e,
      t = vf,
      n = t.length,
      r,
      o = "value" in fr ? fr.value : fr.textContent,
      s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
    return (ja = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ra(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function oa() {
    return true;
  }
  function mh() {
    return false;
  }
  function It(e) {
    function t(n, r, o, s, i) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = i),
        (this.currentTarget = null));
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null
            ? s.defaultPrevented
            : s.returnValue === false
        )
          ? oa
          : mh),
        (this.isPropagationStopped = mh),
        this
      );
    }
    return (
      Re(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = true;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = false),
            (this.isDefaultPrevented = oa));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true),
            (this.isPropagationStopped = oa));
        },
        persist: function () {},
        isPersistent: oa,
      }),
      t
    );
  }
  var fs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yf = It(fs),
    Li = Re({}, fs, { view: 0, detail: 0 }),
    dS = It(Li),
    Dc,
    Mc,
    Ms,
    Ol = Re({}, Li, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xf,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ms &&
              (Ms && e.type === "mousemove"
                ? ((Dc = e.screenX - Ms.screenX), (Mc = e.screenY - Ms.screenY))
                : (Mc = Dc = 0),
              (Ms = e)),
            Dc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mc;
      },
    }),
    gh = It(Ol),
    fS = Re({}, Ol, { dataTransfer: 0 }),
    pS = It(fS),
    hS = Re({}, Li, { relatedTarget: 0 }),
    Oc = It(hS),
    mS = Re({}, fs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gS = It(mS),
    vS = Re({}, fs, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    yS = It(vS),
    xS = Re({}, fs, { data: 0 }),
    vh = It(xS),
    wS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    bS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    SS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function CS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = SS[e])
        ? !!t[e]
        : false;
  }
  function xf() {
    return CS;
  }
  var kS = Re({}, Li, {
      key: function (e) {
        if (e.key) {
          var t = wS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? bS[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xf,
      charCode: function (e) {
        return e.type === "keypress" ? Ra(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ra(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ES = It(kS),
    TS = Re({}, Ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yh = It(TS),
    NS = Re({}, Li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xf,
    }),
    PS = It(NS),
    jS = Re({}, fs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    RS = It(jS),
    AS = Re({}, Ol, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    DS = It(AS),
    MS = [9, 13, 27, 32],
    wf = Bn && "CompositionEvent" in window,
    Qs = null;
  Bn && "documentMode" in document && (Qs = document.documentMode);
  var OS = Bn && "TextEvent" in window && !Qs,
    Nv = Bn && (!wf || (Qs && 8 < Qs && 11 >= Qs)),
    xh = " ",
    wh = false;
  function Pv(e, t) {
    switch (e) {
      case "keyup":
        return MS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function jv(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Eo = false;
  function IS(e, t) {
    switch (e) {
      case "compositionend":
        return jv(t);
      case "keypress":
        return t.which !== 32 ? null : ((wh = true), xh);
      case "textInput":
        return ((e = t.data), e === xh && wh ? null : e);
      default:
        return null;
    }
  }
  function _S(e, t) {
    if (Eo)
      return e === "compositionend" || (!wf && Pv(e, t))
        ? ((e = Tv()), (ja = vf = fr = null), (Eo = false), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var LS = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
  };
  function bh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!LS[e.type] : t === "textarea";
  }
  function Rv(e, t, n, r) {
    (av(r),
      (t = el(t, "onChange")),
      0 < t.length &&
        ((n = new yf("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Ks = null,
    di = null;
  function FS(e) {
    Bv(e, 0);
  }
  function Il(e) {
    var t = Po(e);
    if (ev(t)) return e;
  }
  function zS(e, t) {
    if (e === "change") return t;
  }
  var Av = false;
  if (Bn) {
    var Ic;
    if (Bn) {
      var _c = "oninput" in document;
      if (!_c) {
        var Sh = document.createElement("div");
        (Sh.setAttribute("oninput", "return;"),
          (_c = typeof Sh.oninput == "function"));
      }
      Ic = _c;
    } else Ic = false;
    Av = Ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Ch() {
    Ks && (Ks.detachEvent("onpropertychange", Dv), (di = Ks = null));
  }
  function Dv(e) {
    if (e.propertyName === "value" && Il(di)) {
      var t = [];
      (Rv(t, di, e, ff(e)), dv(FS, t));
    }
  }
  function $S(e, t, n) {
    e === "focusin"
      ? (Ch(), (Ks = t), (di = n), Ks.attachEvent("onpropertychange", Dv))
      : e === "focusout" && Ch();
  }
  function BS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Il(di);
  }
  function WS(e, t) {
    if (e === "click") return Il(t);
  }
  function US(e, t) {
    if (e === "input" || e === "change") return Il(t);
  }
  function HS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var an = typeof Object.is == "function" ? Object.is : HS;
  function fi(e, t) {
    if (an(e, t)) return true;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return false;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!ku.call(t, o) || !an(e[o], t[o])) return false;
    }
    return true;
  }
  function kh(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Eh(e, t) {
    var n = kh(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = kh(n);
    }
  }
  function Mv(e, t) {
    return e && t
      ? e === t
        ? true
        : e && e.nodeType === 3
          ? false
          : t && t.nodeType === 3
            ? Mv(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : false
      : false;
  }
  function Ov() {
    for (var e = window, t = Ga(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ga(e.document);
    }
    return t;
  }
  function bf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function VS(e) {
    var t = Ov(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Mv(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && bf(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            s = Math.min(r.start, o);
          ((r = r.end === void 0 ? s : Math.min(r.end, o)),
            !e.extend && s > r && ((o = r), (r = s), (s = o)),
            (o = Eh(n, s)));
          var i = Eh(n, r);
          o &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var qS = Bn && "documentMode" in document && 11 >= document.documentMode,
    To = null,
    Uu = null,
    Ys = null,
    Hu = false;
  function Th(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hu ||
      To == null ||
      To !== Ga(r) ||
      ((r = To),
      "selectionStart" in r && bf(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ys && fi(Ys, r)) ||
        ((Ys = r),
        (r = el(Uu, "onSelect")),
        0 < r.length &&
          ((t = new yf("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = To))));
  }
  function sa(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var No = {
      animationend: sa("Animation", "AnimationEnd"),
      animationiteration: sa("Animation", "AnimationIteration"),
      animationstart: sa("Animation", "AnimationStart"),
      transitionend: sa("Transition", "TransitionEnd"),
    },
    Lc = {},
    Iv = {};
  Bn &&
    ((Iv = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete No.animationend.animation,
      delete No.animationiteration.animation,
      delete No.animationstart.animation),
    "TransitionEvent" in window || delete No.transitionend.transition);
  function _l(e) {
    if (Lc[e]) return Lc[e];
    if (!No[e]) return e;
    var t = No[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Iv) return (Lc[e] = t[n]);
    return e;
  }
  var _v = _l("animationend"),
    Lv = _l("animationiteration"),
    Fv = _l("animationstart"),
    zv = _l("transitionend"),
    $v = new Map(),
    Nh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dr(e, t) {
    ($v.set(e, t), ho(t, [e]));
  }
  for (var Fc = 0; Fc < Nh.length; Fc++) {
    var zc = Nh[Fc],
      GS = zc.toLowerCase(),
      QS = zc[0].toUpperCase() + zc.slice(1);
    Dr(GS, "on" + QS);
  }
  Dr(_v, "onAnimationEnd");
  Dr(Lv, "onAnimationIteration");
  Dr(Fv, "onAnimationStart");
  Dr("dblclick", "onDoubleClick");
  Dr("focusin", "onFocus");
  Dr("focusout", "onBlur");
  Dr(zv, "onTransitionEnd");
  ts("onMouseEnter", ["mouseout", "mouseover"]);
  ts("onMouseLeave", ["mouseout", "mouseover"]);
  ts("onPointerEnter", ["pointerout", "pointerover"]);
  ts("onPointerLeave", ["pointerout", "pointerover"]);
  ho(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  ho(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  ho("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  ho(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  ho(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  ho(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var Hs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    KS = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Hs),
    );
  function Ph(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), G1(r, t, void 0, e), (e.currentTarget = null));
  }
  function Bv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var a = r[i],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== s && o.isPropagationStopped()))
              break e;
            (Ph(o, a, u), (s = l));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((a = r[i]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== s && o.isPropagationStopped())
            )
              break e;
            (Ph(o, a, u), (s = l));
          }
      }
    }
    if (Ka) throw ((e = zu), (Ka = false), (zu = null), e);
  }
  function Ee(e, t) {
    var n = t[Ku];
    n === void 0 && (n = t[Ku] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wv(t, e, 2, false), n.add(r));
  }
  function $c(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wv(n, e, r, t));
  }
  var ia = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(e) {
    if (!e[ia]) {
      ((e[ia] = true),
        Kg.forEach(function (n) {
          n !== "selectionchange" &&
            (KS.has(n) || $c(n, false, e), $c(n, true, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ia] || ((t[ia] = true), $c("selectionchange", false, t));
    }
  }
  function Wv(e, t, n, r) {
    switch (Ev(t)) {
      case 1:
        var o = cS;
        break;
      case 4:
        o = uS;
        break;
      default:
        o = gf;
    }
    ((n = o.bind(null, t, n, e)),
      (o = void 0),
      !Fu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = true),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: true, passive: o })
          : e.addEventListener(t, n, true)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, false));
  }
  function Bc(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
          if (i === 4)
            for (i = r.return; i !== null;) {
              var l = i.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = i.stateNode.containerInfo),
                l === o || (l.nodeType === 8 && l.parentNode === o))
              )
                return;
              i = i.return;
            }
          for (; a !== null;) {
            if (((i = qr(a)), i === null)) return;
            if (((l = i.tag), l === 5 || l === 6)) {
              r = s = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    dv(function () {
      var u = s,
        f = ff(n),
        p = [];
      e: {
        var v = $v.get(e);
        if (v !== void 0) {
          var h = yf,
            b = e;
          switch (e) {
            case "keypress":
              if (Ra(n) === 0) break e;
            case "keydown":
            case "keyup":
              h = ES;
              break;
            case "focusin":
              ((b = "focus"), (h = Oc));
              break;
            case "focusout":
              ((b = "blur"), (h = Oc));
              break;
            case "beforeblur":
            case "afterblur":
              h = Oc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = gh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = pS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = PS;
              break;
            case _v:
            case Lv:
            case Fv:
              h = gS;
              break;
            case zv:
              h = RS;
              break;
            case "scroll":
              h = dS;
              break;
            case "wheel":
              h = DS;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = yS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = yh;
          }
          var m = (t & 4) !== 0,
            x = !m && e === "scroll",
            y = m ? (v !== null ? v + "Capture" : null) : v;
          m = [];
          for (var g = u, w; g !== null;) {
            w = g;
            var C = w.stateNode;
            if (
              (w.tag === 5 &&
                C !== null &&
                ((w = C),
                y !== null &&
                  ((C = ai(g, y)), C != null && m.push(hi(g, C, w)))),
              x)
            )
              break;
            g = g.return;
          }
          0 < m.length &&
            ((v = new h(v, b, null, n, f)), p.push({ event: v, listeners: m }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (h = e === "mouseout" || e === "pointerout"),
            v &&
              n !== _u &&
              (b = n.relatedTarget || n.fromElement) &&
              (qr(b) || b[Wn]))
          )
            break e;
          if (
            (h || v) &&
            ((v =
              f.window === f
                ? f
                : (v = f.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            h
              ? ((b = n.relatedTarget || n.toElement),
                (h = u),
                (b = b ? qr(b) : null),
                b !== null &&
                  ((x = mo(b)), b !== x || (b.tag !== 5 && b.tag !== 6)) &&
                  (b = null))
              : ((h = null), (b = u)),
            h !== b)
          ) {
            if (
              ((m = gh),
              (C = "onMouseLeave"),
              (y = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((m = yh),
                (C = "onPointerLeave"),
                (y = "onPointerEnter"),
                (g = "pointer")),
              (x = h == null ? v : Po(h)),
              (w = b == null ? v : Po(b)),
              (v = new m(C, g + "leave", h, n, f)),
              (v.target = x),
              (v.relatedTarget = w),
              (C = null),
              qr(f) === u &&
                ((m = new m(y, g + "enter", b, n, f)),
                (m.target = w),
                (m.relatedTarget = x),
                (C = m)),
              (x = C),
              h && b)
            )
              t: {
                for (m = h, y = b, g = 0, w = m; w; w = yo(w)) g++;
                for (w = 0, C = y; C; C = yo(C)) w++;
                for (; 0 < g - w;) ((m = yo(m)), g--);
                for (; 0 < w - g;) ((y = yo(y)), w--);
                for (; g--;) {
                  if (m === y || (y !== null && m === y.alternate)) break t;
                  ((m = yo(m)), (y = yo(y)));
                }
                m = null;
              }
            else m = null;
            (h !== null && jh(p, v, h, m, false),
              b !== null && x !== null && jh(p, x, b, m, true));
          }
        }
        e: {
          if (
            ((v = u ? Po(u) : window),
            (h = v.nodeName && v.nodeName.toLowerCase()),
            h === "select" || (h === "input" && v.type === "file"))
          )
            var k = zS;
          else if (bh(v))
            if (Av) k = US;
            else {
              k = BS;
              var T = $S;
            }
          else
            (h = v.nodeName) &&
              h.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (k = WS);
          if (k && (k = k(e, u))) {
            Rv(p, k, n, f);
            break e;
          }
          (T && T(e, v, u),
            e === "focusout" &&
              (T = v._wrapperState) &&
              T.controlled &&
              v.type === "number" &&
              Au(v, "number", v.value));
        }
        switch (((T = u ? Po(u) : window), e)) {
          case "focusin":
            (bh(T) || T.contentEditable === "true") &&
              ((To = T), (Uu = u), (Ys = null));
            break;
          case "focusout":
            Ys = Uu = To = null;
            break;
          case "mousedown":
            Hu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Hu = false), Th(p, n, f));
            break;
          case "selectionchange":
            if (qS) break;
          case "keydown":
          case "keyup":
            Th(p, n, f);
        }
        var N;
        if (wf)
          e: {
            switch (e) {
              case "compositionstart":
                var j = "onCompositionStart";
                break e;
              case "compositionend":
                j = "onCompositionEnd";
                break e;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break e;
            }
            j = void 0;
          }
        else
          Eo
            ? Pv(e, n) && (j = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (j = "onCompositionStart");
        (j &&
          (Nv &&
            n.locale !== "ko" &&
            (Eo || j !== "onCompositionStart"
              ? j === "onCompositionEnd" && Eo && (N = Tv())
              : ((fr = f),
                (vf = "value" in fr ? fr.value : fr.textContent),
                (Eo = true))),
          (T = el(u, j)),
          0 < T.length &&
            ((j = new vh(j, e, null, n, f)),
            p.push({ event: j, listeners: T }),
            N ? (j.data = N) : ((N = jv(n)), N !== null && (j.data = N)))),
          (N = OS ? IS(e, n) : _S(e, n)) &&
            ((u = el(u, "onBeforeInput")),
            0 < u.length &&
              ((f = new vh("onBeforeInput", "beforeinput", null, n, f)),
              p.push({ event: f, listeners: u }),
              (f.data = N))));
      }
      Bv(p, t);
    });
  }
  function hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function el(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var o = e,
        s = o.stateNode;
      (o.tag === 5 &&
        s !== null &&
        ((o = s),
        (s = ai(e, n)),
        s != null && r.unshift(hi(e, s, o)),
        (s = ai(e, t)),
        s != null && r.push(hi(e, s, o))),
        (e = e.return));
    }
    return r;
  }
  function yo(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function jh(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r;) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      (a.tag === 5 &&
        u !== null &&
        ((a = u),
        o
          ? ((l = ai(n, s)), l != null && i.unshift(hi(n, l, a)))
          : o || ((l = ai(n, s)), l != null && i.push(hi(n, l, a)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var YS = /\r\n?/g,
    XS = /\u0000|\uFFFD/g;
  function Rh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        YS,
        `
`,
      )
      .replace(XS, "");
  }
  function aa(e, t, n) {
    if (((t = Rh(t)), Rh(e) !== t && n)) throw Error(W(425));
  }
  function tl() {}
  var Vu = null,
    qu = null;
  function Gu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qu = typeof setTimeout == "function" ? setTimeout : void 0,
    ZS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ah = typeof Promise == "function" ? Promise : void 0,
    JS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ah < "u"
          ? function (e) {
              return Ah.resolve(null).then(e).catch(eC);
            }
          : Qu;
  function eC(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Wc(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(o), ui(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    ui(t);
  }
  function yr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Dh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ps = Math.random().toString(36).slice(2),
    Cn = "__reactFiber$" + ps,
    mi = "__reactProps$" + ps,
    Wn = "__reactContainer$" + ps,
    Ku = "__reactEvents$" + ps,
    tC = "__reactListeners$" + ps,
    nC = "__reactHandles$" + ps;
  function qr(e) {
    var t = e[Cn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[Wn] || n[Cn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Dh(e); e !== null;) {
            if ((n = e[Cn])) return n;
            e = Dh(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Fi(e) {
    return (
      (e = e[Cn] || e[Wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Po(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(W(33));
  }
  function Ll(e) {
    return e[mi] || null;
  }
  var Yu = [],
    jo = -1;
  function Mr(e) {
    return { current: e };
  }
  function Te(e) {
    0 > jo || ((e.current = Yu[jo]), (Yu[jo] = null), jo--);
  }
  function Ce(e, t) {
    (jo++, (Yu[jo] = e.current), (e.current = t));
  }
  var Tr = {},
    ut = Mr(Tr),
    Ct = Mr(false),
    oo = Tr;
  function ns(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      s;
    for (s in n) o[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function kt(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function nl() {
    (Te(Ct), Te(ut));
  }
  function Mh(e, t, n) {
    if (ut.current !== Tr) throw Error(W(168));
    (Ce(ut, t), Ce(Ct, n));
  }
  function Uv(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(W(108, $1(e) || "Unknown", o));
    return Re({}, n, r);
  }
  function rl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Tr),
      (oo = ut.current),
      Ce(ut, e),
      Ce(Ct, Ct.current),
      true
    );
  }
  function Oh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(W(169));
    (n
      ? ((e = Uv(e, t, oo)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Te(Ct),
        Te(ut),
        Ce(ut, e))
      : Te(Ct),
      Ce(Ct, n));
  }
  var _n = null,
    Fl = false,
    Uc = false;
  function Hv(e) {
    _n === null ? (_n = [e]) : _n.push(e);
  }
  function rC(e) {
    ((Fl = true), Hv(e));
  }
  function Or() {
    if (!Uc && _n !== null) {
      Uc = true;
      var e = 0,
        t = xe;
      try {
        var n = _n;
        for (xe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(true);
          while (r !== null);
        }
        ((_n = null), (Fl = false));
      } catch (o) {
        throw (_n !== null && (_n = _n.slice(e + 1)), mv(pf, Or), o);
      } finally {
        ((xe = t), (Uc = false));
      }
    }
    return null;
  }
  var Ro = [],
    Ao = 0,
    ol = null,
    sl = 0,
    Bt = [],
    Wt = 0,
    so = null,
    Fn = 1,
    zn = "";
  function Hr(e, t) {
    ((Ro[Ao++] = sl), (Ro[Ao++] = ol), (ol = e), (sl = t));
  }
  function Vv(e, t, n) {
    ((Bt[Wt++] = Fn), (Bt[Wt++] = zn), (Bt[Wt++] = so), (so = e));
    var r = Fn;
    e = zn;
    var o = 32 - on(r) - 1;
    ((r &= ~(1 << o)), (n += 1));
    var s = 32 - on(t) + o;
    if (30 < s) {
      var i = o - (o % 5);
      ((s = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (o -= i),
        (Fn = (1 << (32 - on(t) + o)) | (n << o) | r),
        (zn = s + e));
    } else ((Fn = (1 << s) | (n << o) | r), (zn = e));
  }
  function Sf(e) {
    e.return !== null && (Hr(e, 1), Vv(e, 1, 0));
  }
  function Cf(e) {
    for (; e === ol;)
      ((ol = Ro[--Ao]), (Ro[Ao] = null), (sl = Ro[--Ao]), (Ro[Ao] = null));
    for (; e === so;)
      ((so = Bt[--Wt]),
        (Bt[Wt] = null),
        (zn = Bt[--Wt]),
        (Bt[Wt] = null),
        (Fn = Bt[--Wt]),
        (Bt[Wt] = null));
  }
  var At = null,
    Rt = null,
    Ne = false,
    nn = null;
  function qv(e, t) {
    var n = Ut(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Ih(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (At = e), (Rt = yr(t.firstChild)), true)
            : false
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (At = e), (Rt = null), true) : false
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = so !== null ? { id: Fn, overflow: zn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ut(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (At = e),
              (Rt = null),
              true)
            : false
        );
      default:
        return false;
    }
  }
  function Xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zu(e) {
    if (Ne) {
      var t = Rt;
      if (t) {
        var n = t;
        if (!Ih(e, t)) {
          if (Xu(e)) throw Error(W(418));
          t = yr(n.nextSibling);
          var r = At;
          t && Ih(e, t)
            ? qv(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ne = false), (At = e));
        }
      } else {
        if (Xu(e)) throw Error(W(418));
        ((e.flags = (e.flags & -4097) | 2), (Ne = false), (At = e));
      }
    }
  }
  function _h(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    At = e;
  }
  function la(e) {
    if (e !== At) return false;
    if (!Ne) return (_h(e), (Ne = true), false);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Gu(e.type, e.memoizedProps))),
      t && (t = Rt))
    ) {
      if (Xu(e)) throw (Gv(), Error(W(418)));
      for (; t;) (qv(e, t), (t = yr(t.nextSibling)));
    }
    if ((_h(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(W(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Rt = yr(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Rt = null;
      }
    } else Rt = At ? yr(e.stateNode.nextSibling) : null;
    return true;
  }
  function Gv() {
    for (var e = Rt; e;) e = yr(e.nextSibling);
  }
  function rs() {
    ((Rt = At = null), (Ne = false));
  }
  function kf(e) {
    nn === null ? (nn = [e]) : nn.push(e);
  }
  var oC = Gn.ReactCurrentBatchConfig;
  function Os(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(W(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(W(147, e));
        var o = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (i) {
              var a = o.refs;
              i === null ? delete a[s] : (a[s] = i);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(W(284));
      if (!n._owner) throw Error(W(290, e));
    }
    return e;
  }
  function ca(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        W(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Lh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qv(e) {
    function t(y, g) {
      if (e) {
        var w = y.deletions;
        w === null ? ((y.deletions = [g]), (y.flags |= 16)) : w.push(g);
      }
    }
    function n(y, g) {
      if (!e) return null;
      for (; g !== null;) (t(y, g), (g = g.sibling));
      return null;
    }
    function r(y, g) {
      for (y = new Map(); g !== null;)
        (g.key !== null ? y.set(g.key, g) : y.set(g.index, g), (g = g.sibling));
      return y;
    }
    function o(y, g) {
      return ((y = Sr(y, g)), (y.index = 0), (y.sibling = null), y);
    }
    function s(y, g, w) {
      return (
        (y.index = w),
        e
          ? ((w = y.alternate),
            w !== null
              ? ((w = w.index), w < g ? ((y.flags |= 2), g) : w)
              : ((y.flags |= 2), g))
          : ((y.flags |= 1048576), g)
      );
    }
    function i(y) {
      return (e && y.alternate === null && (y.flags |= 2), y);
    }
    function a(y, g, w, C) {
      return g === null || g.tag !== 6
        ? ((g = Yc(w, y.mode, C)), (g.return = y), g)
        : ((g = o(g, w)), (g.return = y), g);
    }
    function l(y, g, w, C) {
      var k = w.type;
      return k === ko
        ? f(y, g, w.props.children, C, w.key)
        : g !== null &&
            (g.elementType === k ||
              (typeof k == "object" &&
                k !== null &&
                k.$$typeof === nr &&
                Lh(k) === g.type))
          ? ((C = o(g, w.props)), (C.ref = Os(y, g, w)), (C.return = y), C)
          : ((C = La(w.type, w.key, w.props, null, y.mode, C)),
            (C.ref = Os(y, g, w)),
            (C.return = y),
            C);
    }
    function u(y, g, w, C) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== w.containerInfo ||
        g.stateNode.implementation !== w.implementation
        ? ((g = Xc(w, y.mode, C)), (g.return = y), g)
        : ((g = o(g, w.children || [])), (g.return = y), g);
    }
    function f(y, g, w, C, k) {
      return g === null || g.tag !== 7
        ? ((g = ro(w, y.mode, C, k)), (g.return = y), g)
        : ((g = o(g, w)), (g.return = y), g);
    }
    function p(y, g, w) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return ((g = Yc("" + g, y.mode, w)), (g.return = y), g);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Zi:
            return (
              (w = La(g.type, g.key, g.props, null, y.mode, w)),
              (w.ref = Os(y, null, g)),
              (w.return = y),
              w
            );
          case Co:
            return ((g = Xc(g, y.mode, w)), (g.return = y), g);
          case nr:
            var C = g._init;
            return p(y, C(g._payload), w);
        }
        if (Ws(g) || js(g))
          return ((g = ro(g, y.mode, w, null)), (g.return = y), g);
        ca(y, g);
      }
      return null;
    }
    function v(y, g, w, C) {
      var k = g !== null ? g.key : null;
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return k !== null ? null : a(y, g, "" + w, C);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Zi:
            return w.key === k ? l(y, g, w, C) : null;
          case Co:
            return w.key === k ? u(y, g, w, C) : null;
          case nr:
            return ((k = w._init), v(y, g, k(w._payload), C));
        }
        if (Ws(w) || js(w)) return k !== null ? null : f(y, g, w, C, null);
        ca(y, w);
      }
      return null;
    }
    function h(y, g, w, C, k) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return ((y = y.get(w) || null), a(g, y, "" + C, k));
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Zi:
            return (
              (y = y.get(C.key === null ? w : C.key) || null),
              l(g, y, C, k)
            );
          case Co:
            return (
              (y = y.get(C.key === null ? w : C.key) || null),
              u(g, y, C, k)
            );
          case nr:
            var T = C._init;
            return h(y, g, w, T(C._payload), k);
        }
        if (Ws(C) || js(C))
          return ((y = y.get(w) || null), f(g, y, C, k, null));
        ca(g, C);
      }
      return null;
    }
    function b(y, g, w, C) {
      for (
        var k = null, T = null, N = g, j = (g = 0), D = null;
        N !== null && j < w.length;
        j++
      ) {
        N.index > j ? ((D = N), (N = null)) : (D = N.sibling);
        var I = v(y, N, w[j], C);
        if (I === null) {
          N === null && (N = D);
          break;
        }
        (e && N && I.alternate === null && t(y, N),
          (g = s(I, g, j)),
          T === null ? (k = I) : (T.sibling = I),
          (T = I),
          (N = D));
      }
      if (j === w.length) return (n(y, N), Ne && Hr(y, j), k);
      if (N === null) {
        for (; j < w.length; j++)
          ((N = p(y, w[j], C)),
            N !== null &&
              ((g = s(N, g, j)),
              T === null ? (k = N) : (T.sibling = N),
              (T = N)));
        return (Ne && Hr(y, j), k);
      }
      for (N = r(y, N); j < w.length; j++)
        ((D = h(N, y, j, w[j], C)),
          D !== null &&
            (e && D.alternate !== null && N.delete(D.key === null ? j : D.key),
            (g = s(D, g, j)),
            T === null ? (k = D) : (T.sibling = D),
            (T = D)));
      return (
        e &&
          N.forEach(function ($) {
            return t(y, $);
          }),
        Ne && Hr(y, j),
        k
      );
    }
    function m(y, g, w, C) {
      var k = js(w);
      if (typeof k != "function") throw Error(W(150));
      if (((w = k.call(w)), w == null)) throw Error(W(151));
      for (
        var T = (k = null), N = g, j = (g = 0), D = null, I = w.next();
        N !== null && !I.done;
        j++, I = w.next()
      ) {
        N.index > j ? ((D = N), (N = null)) : (D = N.sibling);
        var $ = v(y, N, I.value, C);
        if ($ === null) {
          N === null && (N = D);
          break;
        }
        (e && N && $.alternate === null && t(y, N),
          (g = s($, g, j)),
          T === null ? (k = $) : (T.sibling = $),
          (T = $),
          (N = D));
      }
      if (I.done) return (n(y, N), Ne && Hr(y, j), k);
      if (N === null) {
        for (; !I.done; j++, I = w.next())
          ((I = p(y, I.value, C)),
            I !== null &&
              ((g = s(I, g, j)),
              T === null ? (k = I) : (T.sibling = I),
              (T = I)));
        return (Ne && Hr(y, j), k);
      }
      for (N = r(y, N); !I.done; j++, I = w.next())
        ((I = h(N, y, j, I.value, C)),
          I !== null &&
            (e && I.alternate !== null && N.delete(I.key === null ? j : I.key),
            (g = s(I, g, j)),
            T === null ? (k = I) : (T.sibling = I),
            (T = I)));
      return (
        e &&
          N.forEach(function (B) {
            return t(y, B);
          }),
        Ne && Hr(y, j),
        k
      );
    }
    function x(y, g, w, C) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === ko &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case Zi:
            e: {
              for (var k = w.key, T = g; T !== null;) {
                if (T.key === k) {
                  if (((k = w.type), k === ko)) {
                    if (T.tag === 7) {
                      (n(y, T.sibling),
                        (g = o(T, w.props.children)),
                        (g.return = y),
                        (y = g));
                      break e;
                    }
                  } else if (
                    T.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === nr &&
                      Lh(k) === T.type)
                  ) {
                    (n(y, T.sibling),
                      (g = o(T, w.props)),
                      (g.ref = Os(y, T, w)),
                      (g.return = y),
                      (y = g));
                    break e;
                  }
                  n(y, T);
                  break;
                } else t(y, T);
                T = T.sibling;
              }
              w.type === ko
                ? ((g = ro(w.props.children, y.mode, C, w.key)),
                  (g.return = y),
                  (y = g))
                : ((C = La(w.type, w.key, w.props, null, y.mode, C)),
                  (C.ref = Os(y, g, w)),
                  (C.return = y),
                  (y = C));
            }
            return i(y);
          case Co:
            e: {
              for (T = w.key; g !== null;) {
                if (g.key === T)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === w.containerInfo &&
                    g.stateNode.implementation === w.implementation
                  ) {
                    (n(y, g.sibling),
                      (g = o(g, w.children || [])),
                      (g.return = y),
                      (y = g));
                    break e;
                  } else {
                    n(y, g);
                    break;
                  }
                else t(y, g);
                g = g.sibling;
              }
              ((g = Xc(w, y.mode, C)), (g.return = y), (y = g));
            }
            return i(y);
          case nr:
            return ((T = w._init), x(y, g, T(w._payload), C));
        }
        if (Ws(w)) return b(y, g, w, C);
        if (js(w)) return m(y, g, w, C);
        ca(y, w);
      }
      return (typeof w == "string" && w !== "") || typeof w == "number"
        ? ((w = "" + w),
          g !== null && g.tag === 6
            ? (n(y, g.sibling), (g = o(g, w)), (g.return = y), (y = g))
            : (n(y, g), (g = Yc(w, y.mode, C)), (g.return = y), (y = g)),
          i(y))
        : n(y, g);
    }
    return x;
  }
  var os = Qv(true),
    Kv = Qv(false),
    il = Mr(null),
    al = null,
    Do = null,
    Ef = null;
  function Tf() {
    Ef = Do = al = null;
  }
  function Nf(e) {
    var t = il.current;
    (Te(il), (e._currentValue = t));
  }
  function Ju(e, t, n) {
    for (; e !== null;) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zo(e, t) {
    ((al = e),
      (Ef = Do = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (St = true), (e.firstContext = null)));
  }
  function qt(e) {
    var t = e._currentValue;
    if (Ef !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Do === null)) {
        if (al === null) throw Error(W(308));
        ((Do = e), (al.dependencies = { lanes: 0, firstContext: e }));
      } else Do = Do.next = e;
    return t;
  }
  var Gr = null;
  function Pf(e) {
    Gr === null ? (Gr = [e]) : Gr.push(e);
  }
  function Yv(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Pf(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Un(e, r)
    );
  }
  function Un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var rr = false;
  function jf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Xv(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function $n(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function xr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), me & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Un(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Pf(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Un(e, n)
    );
  }
  function Aa(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), hf(e, n));
    }
  }
  function Fh(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
        } while (n !== null);
        s === null ? (o = s = t) : (s = s.next = t);
      } else o = s = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function ll(e, t, n, r) {
    var o = e.updateQueue;
    rr = false;
    var s = o.firstBaseUpdate,
      i = o.lastBaseUpdate,
      a = o.shared.pending;
    if (a !== null) {
      o.shared.pending = null;
      var l = a,
        u = l.next;
      ((l.next = null), i === null ? (s = u) : (i.next = u), (i = l));
      var f = e.alternate;
      f !== null &&
        ((f = f.updateQueue),
        (a = f.lastBaseUpdate),
        a !== i &&
          (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
          (f.lastBaseUpdate = l)));
    }
    if (s !== null) {
      var p = o.baseState;
      ((i = 0), (f = u = l = null), (a = s));
      do {
        var v = a.lane,
          h = a.eventTime;
        if ((r & v) === v) {
          f !== null &&
            (f = f.next =
              {
                eventTime: h,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var b = e,
              m = a;
            switch (((v = t), (h = n), m.tag)) {
              case 1:
                if (((b = m.payload), typeof b == "function")) {
                  p = b.call(h, p, v);
                  break e;
                }
                p = b;
                break e;
              case 3:
                b.flags = (b.flags & -65537) | 128;
              case 0:
                if (
                  ((b = m.payload),
                  (v = typeof b == "function" ? b.call(h, p, v) : b),
                  v == null)
                )
                  break e;
                p = Re({}, p, v);
                break e;
              case 2:
                rr = true;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (v = o.effects),
            v === null ? (o.effects = [a]) : v.push(a));
        } else
          ((h = {
            eventTime: h,
            lane: v,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            f === null ? ((u = f = h), (l = p)) : (f = f.next = h),
            (i |= v));
        if (((a = a.next), a === null)) {
          if (((a = o.shared.pending), a === null)) break;
          ((v = a),
            (a = v.next),
            (v.next = null),
            (o.lastBaseUpdate = v),
            (o.shared.pending = null));
        }
      } while (true);
      if (
        (f === null && (l = p),
        (o.baseState = l),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = f),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do ((i |= o.lane), (o = o.next));
        while (o !== t);
      } else s === null && (o.shared.lanes = 0);
      ((ao |= i), (e.lanes = i), (e.memoizedState = p));
    }
  }
  function zh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(W(191, o));
          o.call(r);
        }
      }
  }
  var zi = {},
    Tn = Mr(zi),
    gi = Mr(zi),
    vi = Mr(zi);
  function Qr(e) {
    if (e === zi) throw Error(W(174));
    return e;
  }
  function Rf(e, t) {
    switch ((Ce(vi, t), Ce(gi, e), Ce(Tn, zi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mu(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Mu(t, e)));
    }
    (Te(Tn), Ce(Tn, t));
  }
  function ss() {
    (Te(Tn), Te(gi), Te(vi));
  }
  function Zv(e) {
    Qr(vi.current);
    var t = Qr(Tn.current),
      n = Mu(t, e.type);
    t !== n && (Ce(gi, e), Ce(Tn, n));
  }
  function Af(e) {
    gi.current === e && (Te(Tn), Te(gi));
  }
  var Pe = Mr(0);
  function cl(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Hc = [];
  function Df() {
    for (var e = 0; e < Hc.length; e++)
      Hc[e]._workInProgressVersionPrimary = null;
    Hc.length = 0;
  }
  var Da = Gn.ReactCurrentDispatcher,
    Vc = Gn.ReactCurrentBatchConfig,
    io = 0,
    je = null,
    Ue = null,
    Ke = null,
    ul = false,
    Xs = false,
    yi = 0,
    sC = 0;
  function it() {
    throw Error(W(321));
  }
  function Mf(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!an(e[n], t[n])) return false;
    return true;
  }
  function Of(e, t, n, r, o, s) {
    if (
      ((io = s),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Da.current = e === null || e.memoizedState === null ? cC : uC),
      (e = n(r, o)),
      Xs)
    ) {
      s = 0;
      do {
        if (((Xs = false), (yi = 0), 25 <= s)) throw Error(W(301));
        ((s += 1),
          (Ke = Ue = null),
          (t.updateQueue = null),
          (Da.current = dC),
          (e = n(r, o)));
      } while (Xs);
    }
    if (
      ((Da.current = dl),
      (t = Ue !== null && Ue.next !== null),
      (io = 0),
      (Ke = Ue = je = null),
      (ul = false),
      t)
    )
      throw Error(W(300));
    return e;
  }
  function If() {
    var e = yi !== 0;
    return ((yi = 0), e);
  }
  function yn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ke === null ? (je.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke);
  }
  function Gt() {
    if (Ue === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Ke === null ? je.memoizedState : Ke.next;
    if (t !== null) ((Ke = t), (Ue = e));
    else {
      if (e === null) throw Error(W(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        Ke === null ? (je.memoizedState = Ke = e) : (Ke = Ke.next = e));
    }
    return Ke;
  }
  function xi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qc(e) {
    var t = Gt(),
      n = t.queue;
    if (n === null) throw Error(W(311));
    n.lastRenderedReducer = e;
    var r = Ue,
      o = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (o !== null) {
        var i = o.next;
        ((o.next = s.next), (s.next = i));
      }
      ((r.baseQueue = o = s), (n.pending = null));
    }
    if (o !== null) {
      ((s = o.next), (r = r.baseState));
      var a = (i = null),
        l = null,
        u = s;
      do {
        var f = u.lane;
        if ((io & f) === f)
          (l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
        else {
          var p = {
            lane: f,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          (l === null ? ((a = l = p), (i = r)) : (l = l.next = p),
            (je.lanes |= f),
            (ao |= f));
        }
        u = u.next;
      } while (u !== null && u !== s);
      (l === null ? (i = r) : (l.next = a),
        an(r, t.memoizedState) || (St = true),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = l),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do ((s = o.lane), (je.lanes |= s), (ao |= s), (o = o.next));
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Gc(e) {
    var t = Gt(),
      n = t.queue;
    if (n === null) throw Error(W(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      s = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var i = (o = o.next);
      do ((s = e(s, i.action)), (i = i.next));
      while (i !== o);
      (an(s, t.memoizedState) || (St = true),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, r];
  }
  function Jv() {}
  function ey(e, t) {
    var n = je,
      r = Gt(),
      o = t(),
      s = !an(r.memoizedState, o);
    if (
      (s && ((r.memoizedState = o), (St = true)),
      (r = r.queue),
      _f(ry.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        wi(9, ny.bind(null, n, r, o, t), void 0, null),
        Xe === null)
      )
        throw Error(W(349));
      io & 30 || ty(n, t, o);
    }
    return o;
  }
  function ty(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ny(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), oy(t) && sy(e));
  }
  function ry(e, t, n) {
    return n(function () {
      oy(t) && sy(e);
    });
  }
  function oy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !an(e, n);
    } catch {
      return true;
    }
  }
  function sy(e) {
    var t = Un(e, 1);
    t !== null && sn(t, e, 1, -1);
  }
  function $h(e) {
    var t = yn();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lC.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function wi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function iy() {
    return Gt().memoizedState;
  }
  function Ma(e, t, n, r) {
    var o = yn();
    ((je.flags |= e),
      (o.memoizedState = wi(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function zl(e, t, n, r) {
    var o = Gt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ue !== null) {
      var i = Ue.memoizedState;
      if (((s = i.destroy), r !== null && Mf(r, i.deps))) {
        o.memoizedState = wi(t, n, s, r);
        return;
      }
    }
    ((je.flags |= e), (o.memoizedState = wi(1 | t, n, s, r)));
  }
  function Bh(e, t) {
    return Ma(8390656, 8, e, t);
  }
  function _f(e, t) {
    return zl(2048, 8, e, t);
  }
  function ay(e, t) {
    return zl(4, 2, e, t);
  }
  function ly(e, t) {
    return zl(4, 4, e, t);
  }
  function cy(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function uy(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      zl(4, 4, cy.bind(null, t, e), n)
    );
  }
  function Lf() {}
  function dy(e, t) {
    var n = Gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mf(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function fy(e, t) {
    var n = Gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mf(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function py(e, t, n) {
    return io & 21
      ? (an(n, t) ||
          ((n = yv()), (je.lanes |= n), (ao |= n), (e.baseState = true)),
        t)
      : (e.baseState && ((e.baseState = false), (St = true)),
        (e.memoizedState = n));
  }
  function iC(e, t) {
    var n = xe;
    ((xe = n !== 0 && 4 > n ? n : 4), e(true));
    var r = Vc.transition;
    Vc.transition = {};
    try {
      (e(false), t());
    } finally {
      ((xe = n), (Vc.transition = r));
    }
  }
  function hy() {
    return Gt().memoizedState;
  }
  function aC(e, t, n) {
    var r = br(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null,
      }),
      my(e))
    )
      gy(t, n);
    else if (((n = Yv(e, t, n, r)), n !== null)) {
      var o = gt();
      (sn(n, e, r, o), vy(n, t, r));
    }
  }
  function lC(e, t, n) {
    var r = br(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null,
      };
    if (my(e)) gy(t, o);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var i = t.lastRenderedState,
            a = s(i, n);
          if (((o.hasEagerState = true), (o.eagerState = a), an(a, i))) {
            var l = t.interleaved;
            (l === null
              ? ((o.next = o), Pf(t))
              : ((o.next = l.next), (l.next = o)),
              (t.interleaved = o));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Yv(e, t, o, r)),
        n !== null && ((o = gt()), sn(n, e, r, o), vy(n, t, r)));
    }
  }
  function my(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function gy(e, t) {
    Xs = ul = true;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function vy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), hf(e, n));
    }
  }
  var dl = {
      readContext: qt,
      useCallback: it,
      useContext: it,
      useEffect: it,
      useImperativeHandle: it,
      useInsertionEffect: it,
      useLayoutEffect: it,
      useMemo: it,
      useReducer: it,
      useRef: it,
      useState: it,
      useDebugValue: it,
      useDeferredValue: it,
      useTransition: it,
      useMutableSource: it,
      useSyncExternalStore: it,
      useId: it,
      unstable_isNewReconciler: false,
    },
    cC = {
      readContext: qt,
      useCallback: function (e, t) {
        return ((yn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: qt,
      useEffect: Bh,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ma(4194308, 4, cy.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ma(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ma(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = yn();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = yn();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = aC.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: $h,
      useDebugValue: Lf,
      useDeferredValue: function (e) {
        return (yn().memoizedState = e);
      },
      useTransition: function () {
        var e = $h(false),
          t = e[0];
        return ((e = iC.bind(null, e[1])), (yn().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          o = yn();
        if (Ne) {
          if (n === void 0) throw Error(W(407));
          n = n();
        } else {
          if (((n = t()), Xe === null)) throw Error(W(349));
          io & 30 || ty(r, t, n);
        }
        o.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (o.queue = s),
          Bh(ry.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          wi(9, ny.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = yn(),
          t = Xe.identifierPrefix;
        if (Ne) {
          var n = zn,
            r = Fn;
          ((n = (r & ~(1 << (32 - on(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = yi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = sC++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: false,
    },
    uC = {
      readContext: qt,
      useCallback: dy,
      useContext: qt,
      useEffect: _f,
      useImperativeHandle: uy,
      useInsertionEffect: ay,
      useLayoutEffect: ly,
      useMemo: fy,
      useReducer: qc,
      useRef: iy,
      useState: function () {
        return qc(xi);
      },
      useDebugValue: Lf,
      useDeferredValue: function (e) {
        var t = Gt();
        return py(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = qc(xi)[0],
          t = Gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Jv,
      useSyncExternalStore: ey,
      useId: hy,
      unstable_isNewReconciler: false,
    },
    dC = {
      readContext: qt,
      useCallback: dy,
      useContext: qt,
      useEffect: _f,
      useImperativeHandle: uy,
      useInsertionEffect: ay,
      useLayoutEffect: ly,
      useMemo: fy,
      useReducer: Gc,
      useRef: iy,
      useState: function () {
        return Gc(xi);
      },
      useDebugValue: Lf,
      useDeferredValue: function (e) {
        var t = Gt();
        return Ue === null ? (t.memoizedState = e) : py(t, Ue.memoizedState, e);
      },
      useTransition: function () {
        var e = Gc(xi)[0],
          t = Gt().memoizedState;
        return [e, t];
      },
      useMutableSource: Jv,
      useSyncExternalStore: ey,
      useId: hy,
      unstable_isNewReconciler: false,
    };
  function Xt(e, t) {
    if (e && e.defaultProps) {
      ((t = Re({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ed(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Re({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var $l = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? mo(e) === e : false;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        o = br(e),
        s = $n(r, o);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = xr(e, s, o)),
        t !== null && (sn(t, e, o, r), Aa(t, e, o)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        o = br(e),
        s = $n(r, o);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = xr(e, s, o)),
        t !== null && (sn(t, e, o, r), Aa(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = gt(),
        r = br(e),
        o = $n(n, r);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = xr(e, o, r)),
        t !== null && (sn(t, e, r, n), Aa(t, e, r)));
    },
  };
  function Wh(e, t, n, r, o, s, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !fi(n, r) || !fi(o, s)
          : true
    );
  }
  function yy(e, t, n) {
    var r = false,
      o = Tr,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = qt(s))
        : ((o = kt(t) ? oo : ut.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? ns(e, o) : Tr)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = $l),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function Uh(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && $l.enqueueReplaceState(t, t.state, null));
  }
  function td(e, t, n, r) {
    var o = e.stateNode;
    ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), jf(e));
    var s = t.contextType;
    (typeof s == "object" && s !== null
      ? (o.context = qt(s))
      : ((s = kt(t) ? oo : ut.current), (o.context = ns(e, s))),
      (o.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (ed(e, t, s, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && $l.enqueueReplaceState(o, o.state, null),
        ll(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function is(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += z1(r)), (r = r.return));
      while (r);
      var o = n;
    } catch (s) {
      o =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Qc(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function nd(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var fC = typeof WeakMap == "function" ? WeakMap : Map;
  function xy(e, t, n) {
    ((n = $n(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (pl || ((pl = true), (fd = r)), nd(e, t));
      }),
      n
    );
  }
  function wy(e, t, n) {
    ((n = $n(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      ((n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          nd(e, t);
        }));
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          (nd(e, t),
            typeof r != "function" &&
              (wr === null ? (wr = new Set([this])) : wr.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      n
    );
  }
  function Hh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new fC();
      var o = new Set();
      r.set(t, o);
    } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
    o.has(n) || (o.add(n), (e = TC.bind(null, e, t, n)), t.then(e, e));
  }
  function Vh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : true)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function qh(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = $n(-1, 1)), (t.tag = 2), xr(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var pC = Gn.ReactCurrentOwner,
    St = false;
  function ht(e, t, n, r) {
    t.child = e === null ? Kv(t, null, n, r) : os(t, e.child, n, r);
  }
  function Gh(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return (
      zo(t, o),
      (r = Of(e, t, n, r, s, o)),
      (n = If()),
      e !== null && !St
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Hn(e, t, o))
        : (Ne && n && Sf(t), (t.flags |= 1), ht(e, t, r, o), t.child)
    );
  }
  function Qh(e, t, n, r, o) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Vf(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), by(e, t, s, r, o))
        : ((e = La(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & o))) {
      var i = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : fi), n(i, r) && e.ref === t.ref)
      )
        return Hn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Sr(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function by(e, t, n, r, o) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (fi(s, r) && e.ref === t.ref)
        if (((St = false), (t.pendingProps = r = s), (e.lanes & o) !== 0))
          e.flags & 131072 && (St = true);
        else return ((t.lanes = e.lanes), Hn(e, t, o));
    }
    return rd(e, t, n, r, o);
  }
  function Sy(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ce(Oo, Pt),
          (Pt |= n));
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ce(Oo, Pt),
            (Pt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          Ce(Oo, Pt),
          (Pt |= r));
      }
    else
      (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ce(Oo, Pt),
        (Pt |= r));
    return (ht(e, t, o, n), t.child);
  }
  function Cy(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function rd(e, t, n, r, o) {
    var s = kt(n) ? oo : ut.current;
    return (
      (s = ns(t, s)),
      zo(t, o),
      (n = Of(e, t, n, r, s, o)),
      (r = If()),
      e !== null && !St
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Hn(e, t, o))
        : (Ne && r && Sf(t), (t.flags |= 1), ht(e, t, n, o), t.child)
    );
  }
  function Kh(e, t, n, r, o) {
    if (kt(n)) {
      var s = true;
      rl(t);
    } else s = false;
    if ((zo(t, o), t.stateNode === null))
      (Oa(e, t), yy(t, n, r), td(t, n, r, o), (r = true));
    else if (e === null) {
      var i = t.stateNode,
        a = t.memoizedProps;
      i.props = a;
      var l = i.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = qt(u))
        : ((u = kt(n) ? oo : ut.current), (u = ns(t, u)));
      var f = n.getDerivedStateFromProps,
        p =
          typeof f == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      (p ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && Uh(t, i, r, u)),
        (rr = false));
      var v = t.memoizedState;
      ((i.state = v),
        ll(t, r, i, o),
        (l = t.memoizedState),
        a !== r || v !== l || Ct.current || rr
          ? (typeof f == "function" && (ed(t, n, f, r), (l = t.memoizedState)),
            (a = rr || Wh(t, n, a, r, v, l, u))
              ? (p ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (i.props = r),
            (i.state = l),
            (i.context = u),
            (r = a))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (r = false)));
    } else {
      ((i = t.stateNode),
        Xv(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : Xt(t.type, a)),
        (i.props = u),
        (p = t.pendingProps),
        (v = i.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = qt(l))
          : ((l = kt(n) ? oo : ut.current), (l = ns(t, l))));
      var h = n.getDerivedStateFromProps;
      ((f =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((a !== p || v !== l) && Uh(t, i, r, l)),
        (rr = false),
        (v = t.memoizedState),
        (i.state = v),
        ll(t, r, i, o));
      var b = t.memoizedState;
      a !== p || v !== b || Ct.current || rr
        ? (typeof h == "function" && (ed(t, n, h, r), (b = t.memoizedState)),
          (u = rr || Wh(t, n, u, r, v, b, l) || false)
            ? (f ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, b, l),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, b, l)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = b)),
          (i.props = r),
          (i.state = b),
          (i.context = l),
          (r = u))
        : (typeof i.componentDidUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = false));
    }
    return od(e, t, n, r, s, o);
  }
  function od(e, t, n, r, o, s) {
    Cy(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (o && Oh(t, n, false), Hn(e, t, s));
    ((r = t.stateNode), (pC.current = t));
    var a =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = os(t, e.child, null, s)), (t.child = os(t, null, a, s)))
        : ht(e, t, a, s),
      (t.memoizedState = r.state),
      o && Oh(t, n, true),
      t.child
    );
  }
  function ky(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Mh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Mh(e, t.context, false),
      Rf(e, t.containerInfo));
  }
  function Yh(e, t, n, r, o) {
    return (rs(), kf(o), (t.flags |= 256), ht(e, t, n, r), t.child);
  }
  var sd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function id(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ey(e, t, n) {
    var r = t.pendingProps,
      o = Pe.current,
      s = false,
      i = (t.flags & 128) !== 0,
      a;
    if (
      ((a = i) ||
        (a = e !== null && e.memoizedState === null ? false : (o & 2) !== 0),
      a
        ? ((s = true), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      Ce(Pe, o & 1),
      e === null)
    )
      return (
        Zu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = i))
                  : (s = Ul(i, r, 0, null)),
                (e = ro(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = id(n)),
                (t.memoizedState = sd),
                e)
              : Ff(t, i))
      );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
      return hC(e, t, i, r, a, o, n);
    if (s) {
      ((s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling));
      var l = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Sr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        a !== null ? (s = Sr(a, s)) : ((s = ro(s, i, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? id(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (s.memoizedState = i),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = sd),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Sr(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ff(e, t) {
    return (
      (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ua(e, t, n, r) {
    return (
      r !== null && kf(r),
      os(t, e.child, null, n),
      (e = Ff(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function hC(e, t, n, r, o, s, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Qc(Error(W(422)))), ua(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (o = t.mode),
            (r = Ul({ mode: "visible", children: r.children }, o, 0, null)),
            (s = ro(s, o, i, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            t.mode & 1 && os(t, e.child, null, i),
            (t.child.memoizedState = id(i)),
            (t.memoizedState = sd),
            s);
    if (!(t.mode & 1)) return ua(e, t, i, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a),
        (s = Error(W(419))),
        (r = Qc(s, r, void 0)),
        ua(e, t, i, r)
      );
    }
    if (((a = (i & e.childLanes) !== 0), St || a)) {
      if (((r = Xe), r !== null)) {
        switch (i & -i) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        ((o = o & (r.suspendedLanes | i) ? 0 : o),
          o !== 0 &&
            o !== s.retryLane &&
            ((s.retryLane = o), Un(e, o), sn(r, e, o, -1)));
      }
      return (Hf(), (r = Qc(Error(W(421)))), ua(e, t, i, r));
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = NC.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (Rt = yr(o.nextSibling)),
        (At = t),
        (Ne = true),
        (nn = null),
        e !== null &&
          ((Bt[Wt++] = Fn),
          (Bt[Wt++] = zn),
          (Bt[Wt++] = so),
          (Fn = e.id),
          (zn = e.overflow),
          (so = t)),
        (t = Ff(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ju(e.return, t, n));
  }
  function Kc(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = o));
  }
  function Ty(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      s = r.tail;
    if ((ht(e, t, r.children, n), (r = Pe.current), r & 2))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Xh(e, n, t);
          else if (e.tag === 19) Xh(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Ce(Pe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null;)
            ((e = n.alternate),
              e !== null && cl(e) === null && (o = n),
              (n = n.sibling));
          ((n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Kc(t, false, o, n, s));
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null;) {
            if (((e = o.alternate), e !== null && cl(e) === null)) {
              t.child = o;
              break;
            }
            ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
          }
          Kc(t, true, n, null, s);
          break;
        case "together":
          Kc(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Oa(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Hn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ao |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(W(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Sr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Sr(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function mC(e, t, n) {
    switch (t.tag) {
      case 3:
        (ky(t), rs());
        break;
      case 5:
        Zv(t);
        break;
      case 1:
        kt(t.type) && rl(t);
        break;
      case 4:
        Rf(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        (Ce(il, r._currentValue), (r._currentValue = o));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ce(Pe, Pe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Ey(e, t, n)
              : (Ce(Pe, Pe.current & 1),
                (e = Hn(e, t, n)),
                e !== null ? e.sibling : null);
        Ce(Pe, Pe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ty(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Ce(Pe, Pe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Sy(e, t, n));
    }
    return Hn(e, t, n);
  }
  var Ny, ad, Py, jy;
  Ny = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  };
  ad = function () {};
  Py = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      ((e = t.stateNode), Qr(Tn.current));
      var s = null;
      switch (n) {
        case "input":
          ((o = ju(e, o)), (r = ju(e, r)), (s = []));
          break;
        case "select":
          ((o = Re({}, o, { value: void 0 })),
            (r = Re({}, r, { value: void 0 })),
            (s = []));
          break;
        case "textarea":
          ((o = Du(e, o)), (r = Du(e, r)), (s = []));
          break;
        default:
          typeof o.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = tl);
      }
      Ou(n, r);
      var i;
      n = null;
      for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
          if (u === "style") {
            var a = o[u];
            for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (si.hasOwnProperty(u)
                ? s || (s = [])
                : (s = s || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((a = o != null ? o[u] : void 0),
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        )
          if (u === "style")
            if (a) {
              for (i in a)
                !a.hasOwnProperty(i) ||
                  (l && l.hasOwnProperty(i)) ||
                  (n || (n = {}), (n[i] = ""));
              for (i in l)
                l.hasOwnProperty(i) &&
                  a[i] !== l[i] &&
                  (n || (n = {}), (n[i] = l[i]));
            } else (n || (s || (s = []), s.push(u, n)), (n = l));
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (s = s || []).push(u, l))
              : u === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (s = s || []).push(u, "" + l)
                : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  (si.hasOwnProperty(u)
                    ? (l != null && u === "onScroll" && Ee("scroll", e),
                      s || a === l || (s = []))
                    : (s = s || []).push(u, l));
      }
      n && (s = s || []).push("style", n);
      var u = s;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  jy = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Is(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;)
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null;)
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling));
    else
      for (o = e.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function gC(e, t, n) {
    var r = t.pendingProps;
    switch ((Cf(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (at(t), null);
      case 1:
        return (kt(t.type) && nl(), at(t), null);
      case 3:
        return (
          (r = t.stateNode),
          ss(),
          Te(Ct),
          Te(ut),
          Df(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (la(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), nn !== null && (md(nn), (nn = null)))),
          ad(e, t),
          at(t),
          null
        );
      case 5:
        Af(t);
        var o = Qr(vi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Py(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(W(166));
            return (at(t), null);
          }
          if (((e = Qr(Tn.current)), la(t))) {
            ((r = t.stateNode), (n = t.type));
            var s = t.memoizedProps;
            switch (((r[Cn] = t), (r[mi] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Ee("cancel", r), Ee("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hs.length; o++) Ee(Hs[o], r);
                break;
              case "source":
                Ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (Ee("error", r), Ee("load", r));
                break;
              case "details":
                Ee("toggle", r);
                break;
              case "input":
                (ih(r, s), Ee("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!s.multiple }),
                  Ee("invalid", r));
                break;
              case "textarea":
                (lh(r, s), Ee("invalid", r));
            }
            (Ou(n, s), (o = null));
            for (var i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== true &&
                        aa(r.textContent, a, e),
                      (o = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (s.suppressHydrationWarning !== true &&
                        aa(r.textContent, a, e),
                      (o = ["children", "" + a]))
                  : si.hasOwnProperty(i) &&
                    a != null &&
                    i === "onScroll" &&
                    Ee("scroll", r);
              }
            switch (n) {
              case "input":
                (Ji(r), ah(r, s, true));
                break;
              case "textarea":
                (Ji(r), ch(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = tl);
            }
            ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = rv(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = true)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[Cn] = t),
              (e[mi] = r),
              Ny(e, t, false, false),
              (t.stateNode = e));
            e: {
              switch (((i = Iu(n, r)), n)) {
                case "dialog":
                  (Ee("cancel", e), Ee("close", e), (o = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Ee("load", e), (o = r));
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Hs.length; o++) Ee(Hs[o], e);
                  o = r;
                  break;
                case "source":
                  (Ee("error", e), (o = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (Ee("error", e), Ee("load", e), (o = r));
                  break;
                case "details":
                  (Ee("toggle", e), (o = r));
                  break;
                case "input":
                  (ih(e, r), (o = ju(e, r)), Ee("invalid", e));
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Re({}, r, { value: void 0 })),
                    Ee("invalid", e));
                  break;
                case "textarea":
                  (lh(e, r), (o = Du(e, r)), Ee("invalid", e));
                  break;
                default:
                  o = r;
              }
              (Ou(n, o), (a = o));
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var l = a[s];
                  s === "style"
                    ? iv(e, l)
                    : s === "dangerouslySetInnerHTML"
                      ? ((l = l ? l.__html : void 0), l != null && ov(e, l))
                      : s === "children"
                        ? typeof l == "string"
                          ? (n !== "textarea" || l !== "") && ii(e, l)
                          : typeof l == "number" && ii(e, "" + l)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (si.hasOwnProperty(s)
                            ? l != null && s === "onScroll" && Ee("scroll", e)
                            : l != null && lf(e, s, l, i));
                }
              switch (n) {
                case "input":
                  (Ji(e), ah(e, r, false));
                  break;
                case "textarea":
                  (Ji(e), ch(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Er(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Io(e, !!r.multiple, s, false)
                      : r.defaultValue != null &&
                        Io(e, !!r.multiple, r.defaultValue, true));
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = tl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (at(t), null);
      case 6:
        if (e && t.stateNode != null) jy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
          if (((n = Qr(vi.current)), Qr(Tn.current), la(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Cn] = t),
              (s = r.nodeValue !== n) && ((e = At), e !== null))
            )
              switch (e.tag) {
                case 3:
                  aa(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true &&
                    aa(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Cn] = t),
              (t.stateNode = r));
        }
        return (at(t), null);
      case 13:
        if (
          (Te(Pe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ne && Rt !== null && t.mode & 1 && !(t.flags & 128))
            (Gv(), rs(), (t.flags |= 98560), (s = false));
          else if (((s = la(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(W(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(W(317));
              s[Cn] = t;
            } else
              (rs(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4));
            (at(t), (s = false));
          } else (nn !== null && (md(nn), (nn = null)), (s = true));
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Pe.current & 1 ? Ve === 0 && (Ve = 3) : Hf())),
            t.updateQueue !== null && (t.flags |= 4),
            at(t),
            null);
      case 4:
        return (
          ss(),
          ad(e, t),
          e === null && pi(t.stateNode.containerInfo),
          at(t),
          null
        );
      case 10:
        return (Nf(t.type._context), at(t), null);
      case 17:
        return (kt(t.type) && nl(), at(t), null);
      case 19:
        if ((Te(Pe), (s = t.memoizedState), s === null)) return (at(t), null);
        if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
          if (r) Is(s, false);
          else {
            if (Ve !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null;) {
                if (((i = cl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Is(s, false),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (i = s.alternate),
                      i === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = i.childLanes),
                          (s.lanes = i.lanes),
                          (s.child = i.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = i.memoizedProps),
                          (s.memoizedState = i.memoizedState),
                          (s.updateQueue = i.updateQueue),
                          (s.type = i.type),
                          (e = i.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Ce(Pe, (Pe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Fe() > as &&
              ((t.flags |= 128), (r = true), Is(s, false), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = cl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = true),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Is(s, true),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !i.alternate &&
                  !Ne)
              )
                return (at(t), null);
            } else
              2 * Fe() - s.renderingStartTime > as &&
                n !== 1073741824 &&
                ((t.flags |= 128),
                (r = true),
                Is(s, false),
                (t.lanes = 4194304));
          s.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = s.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (s.last = i));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Fe()),
            (t.sibling = null),
            (n = Pe.current),
            Ce(Pe, r ? (n & 1) | 2 : n & 1),
            t)
          : (at(t), null);
      case 22:
      case 23:
        return (
          Uf(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Pt & 1073741824 &&
              (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : at(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(W(156, t.tag));
  }
  function vC(e, t) {
    switch ((Cf(t), t.tag)) {
      case 1:
        return (
          kt(t.type) && nl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ss(),
          Te(Ct),
          Te(ut),
          Df(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Af(t), null);
      case 13:
        if (
          (Te(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(W(340));
          rs();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Te(Pe), null);
      case 4:
        return (ss(), null);
      case 10:
        return (Nf(t.type._context), null);
      case 22:
      case 23:
        return (Uf(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var da = false,
    ct = false,
    yC = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function Mo(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function ld(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var Zh = false;
  function xC(e, t) {
    if (((Vu = Za), (e = Ov()), bf(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              a = -1,
              l = -1,
              u = 0,
              f = 0,
              p = e,
              v = null;
            t: for (;;) {
              for (
                var h;
                p !== n || (o !== 0 && p.nodeType !== 3) || (a = i + o),
                  p !== s || (r !== 0 && p.nodeType !== 3) || (l = i + r),
                  p.nodeType === 3 && (i += p.nodeValue.length),
                  (h = p.firstChild) !== null;
              )
                ((v = p), (p = h));
              for (;;) {
                if (p === e) break t;
                if (
                  (v === n && ++u === o && (a = i),
                  v === s && ++f === r && (l = i),
                  (h = p.nextSibling) !== null)
                )
                  break;
                ((p = v), (v = p.parentNode));
              }
              p = h;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      qu = { focusedElem: e, selectionRange: n }, Za = false, J = t;
      J !== null;
    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (J = e));
      else
        for (; J !== null;) {
          t = J;
          try {
            var b = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (b !== null) {
                    var m = b.memoizedProps,
                      x = b.memoizedState,
                      y = t.stateNode,
                      g = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? m : Xt(t.type, m),
                        x,
                      );
                    y.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1
                    ? (w.textContent = "")
                    : w.nodeType === 9 &&
                      w.documentElement &&
                      w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(W(163));
              }
          } catch (C) {
            _e(t, t.return, C);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (J = e));
            break;
          }
          J = t.return;
        }
    return ((b = Zh), (Zh = false), b);
  }
  function Zs(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var s = o.destroy;
          ((o.destroy = void 0), s !== void 0 && ld(t, n, s));
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Bl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function cd(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ry(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ry(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Cn],
          delete t[mi],
          delete t[Ku],
          delete t[tC],
          delete t[nC])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Ay(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Jh(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Ay(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ud(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = tl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ud(e, t, n), e = e.sibling; e !== null;)
        (ud(e, t, n), (e = e.sibling));
  }
  function dd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (dd(e, t, n), e = e.sibling; e !== null;)
        (dd(e, t, n), (e = e.sibling));
  }
  var tt = null,
    tn = false;
  function Xn(e, t, n) {
    for (n = n.child; n !== null;) (Dy(e, t, n), (n = n.sibling));
  }
  function Dy(e, t, n) {
    if (En && typeof En.onCommitFiberUnmount == "function")
      try {
        En.onCommitFiberUnmount(Ml, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ct || Mo(n, t);
      case 6:
        var r = tt,
          o = tn;
        ((tt = null),
          Xn(e, t, n),
          (tt = r),
          (tn = o),
          tt !== null &&
            (tn
              ? ((e = tt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : tt.removeChild(n.stateNode)));
        break;
      case 18:
        tt !== null &&
          (tn
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8
                ? Wc(e.parentNode, n)
                : e.nodeType === 1 && Wc(e, n),
              ui(e))
            : Wc(tt, n.stateNode));
        break;
      case 4:
        ((r = tt),
          (o = tn),
          (tt = n.stateNode.containerInfo),
          (tn = true),
          Xn(e, t, n),
          (tt = r),
          (tn = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ct &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var s = o,
              i = s.destroy;
            ((s = s.tag),
              i !== void 0 && (s & 2 || s & 4) && ld(n, t, i),
              (o = o.next));
          } while (o !== r);
        }
        Xn(e, t, n);
        break;
      case 1:
        if (
          !ct &&
          (Mo(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (a) {
            _e(n, t, a);
          }
        Xn(e, t, n);
        break;
      case 21:
        Xn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ct = (r = ct) || n.memoizedState !== null), Xn(e, t, n), (ct = r))
          : Xn(e, t, n);
        break;
      default:
        Xn(e, t, n);
    }
  }
  function em(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new yC()),
        t.forEach(function (r) {
          var o = PC.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        }));
    }
  }
  function Qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var s = e,
            i = t,
            a = i;
          e: for (; a !== null;) {
            switch (a.tag) {
              case 5:
                ((tt = a.stateNode), (tn = false));
                break e;
              case 3:
                ((tt = a.stateNode.containerInfo), (tn = true));
                break e;
              case 4:
                ((tt = a.stateNode.containerInfo), (tn = true));
                break e;
            }
            a = a.return;
          }
          if (tt === null) throw Error(W(160));
          (Dy(s, i, o), (tt = null), (tn = false));
          var l = o.alternate;
          (l !== null && (l.return = null), (o.return = null));
        } catch (u) {
          _e(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) (My(t, e), (t = t.sibling));
  }
  function My(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Qt(t, e), vn(e), r & 4)) {
          try {
            (Zs(3, e, e.return), Bl(3, e));
          } catch (m) {
            _e(e, e.return, m);
          }
          try {
            Zs(5, e, e.return);
          } catch (m) {
            _e(e, e.return, m);
          }
        }
        break;
      case 1:
        (Qt(t, e), vn(e), r & 512 && n !== null && Mo(n, n.return));
        break;
      case 5:
        if (
          (Qt(t, e),
          vn(e),
          r & 512 && n !== null && Mo(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            ii(o, "");
          } catch (m) {
            _e(e, e.return, m);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var s = e.memoizedProps,
            i = n !== null ? n.memoizedProps : s,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              (a === "input" &&
                s.type === "radio" &&
                s.name != null &&
                tv(o, s),
                Iu(a, i));
              var u = Iu(a, s);
              for (i = 0; i < l.length; i += 2) {
                var f = l[i],
                  p = l[i + 1];
                f === "style"
                  ? iv(o, p)
                  : f === "dangerouslySetInnerHTML"
                    ? ov(o, p)
                    : f === "children"
                      ? ii(o, p)
                      : lf(o, f, p, u);
              }
              switch (a) {
                case "input":
                  Ru(o, s);
                  break;
                case "textarea":
                  nv(o, s);
                  break;
                case "select":
                  var v = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!s.multiple;
                  var h = s.value;
                  h != null
                    ? Io(o, !!s.multiple, h, false)
                    : v !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Io(o, !!s.multiple, s.defaultValue, true)
                        : Io(o, !!s.multiple, s.multiple ? [] : "", false));
              }
              o[mi] = s;
            } catch (m) {
              _e(e, e.return, m);
            }
        }
        break;
      case 6:
        if ((Qt(t, e), vn(e), r & 4)) {
          if (e.stateNode === null) throw Error(W(162));
          ((o = e.stateNode), (s = e.memoizedProps));
          try {
            o.nodeValue = s;
          } catch (m) {
            _e(e, e.return, m);
          }
        }
        break;
      case 3:
        if (
          (Qt(t, e), vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ui(t.containerInfo);
          } catch (m) {
            _e(e, e.return, m);
          }
        break;
      case 4:
        (Qt(t, e), vn(e));
        break;
      case 13:
        (Qt(t, e),
          vn(e),
          (o = e.child),
          o.flags & 8192 &&
            ((s = o.memoizedState !== null),
            (o.stateNode.isHidden = s),
            !s ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Bf = Fe())),
          r & 4 && em(e));
        break;
      case 22:
        if (
          ((f = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ct = (u = ct) || f), Qt(t, e), (ct = u)) : Qt(t, e),
          vn(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
          )
            for (J = e, f = e.child; f !== null;) {
              for (p = J = f; J !== null;) {
                switch (((v = J), (h = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Zs(4, v, v.return);
                    break;
                  case 1:
                    Mo(v, v.return);
                    var b = v.stateNode;
                    if (typeof b.componentWillUnmount == "function") {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (b.props = t.memoizedProps),
                          (b.state = t.memoizedState),
                          b.componentWillUnmount());
                      } catch (m) {
                        _e(r, n, m);
                      }
                    }
                    break;
                  case 5:
                    Mo(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      nm(p);
                      continue;
                    }
                }
                h !== null ? ((h.return = v), (J = h)) : nm(p);
              }
              f = f.sibling;
            }
          e: for (f = null, p = e; ;) {
            if (p.tag === 5) {
              if (f === null) {
                f = p;
                try {
                  ((o = p.stateNode),
                    u
                      ? ((s = o.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = p.stateNode),
                        (l = p.memoizedProps.style),
                        (i =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = sv("display", i))));
                } catch (m) {
                  _e(e, e.return, m);
                }
              }
            } else if (p.tag === 6) {
              if (f === null)
                try {
                  p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                } catch (m) {
                  _e(e, e.return, m);
                }
            } else if (
              ((p.tag !== 22 && p.tag !== 23) ||
                p.memoizedState === null ||
                p === e) &&
              p.child !== null
            ) {
              ((p.child.return = p), (p = p.child));
              continue;
            }
            if (p === e) break e;
            for (; p.sibling === null;) {
              if (p.return === null || p.return === e) break e;
              (f === p && (f = null), (p = p.return));
            }
            (f === p && (f = null),
              (p.sibling.return = p.return),
              (p = p.sibling));
          }
        }
        break;
      case 19:
        (Qt(t, e), vn(e), r & 4 && em(e));
        break;
      case 21:
        break;
      default:
        (Qt(t, e), vn(e));
    }
  }
  function vn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (Ay(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(W(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (ii(o, ""), (r.flags &= -33));
            var s = Jh(e);
            dd(e, s, o);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              a = Jh(e);
            ud(e, a, i);
            break;
          default:
            throw Error(W(161));
        }
      } catch (l) {
        _e(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wC(e) {
    ((J = e), Oy(e));
  }
  function Oy(e) {
    for (var r = (e.mode & 1) !== 0; J !== null;) {
      var o = J,
        s = o.child;
      if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || da;
        if (!i) {
          var a = o.alternate,
            l = (a !== null && a.memoizedState !== null) || ct;
          a = da;
          var u = ct;
          if (((da = i), (ct = l) && !u))
            for (J = o; J !== null;)
              ((i = J),
                (l = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? rm(o)
                  : l !== null
                    ? ((l.return = i), (J = l))
                    : rm(o));
          for (; s !== null;) ((J = s), Oy(s), (s = s.sibling));
          ((J = o), (da = a), (ct = u));
        }
        tm(e);
      } else
        o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (J = s)) : tm(e);
    }
  }
  function tm(e) {
    for (; J !== null;) {
      var t = J;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ct || Bl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !ct)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Xt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && zh(t, s, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  zh(t, i, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var f = u.memoizedState;
                    if (f !== null) {
                      var p = f.dehydrated;
                      p !== null && ui(p);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(W(163));
            }
          ct || (t.flags & 512 && cd(t));
        } catch (v) {
          _e(t, t.return, v);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function nm(e) {
    for (; J !== null;) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function rm(e) {
    for (; J !== null;) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bl(4, t);
            } catch (l) {
              _e(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                _e(t, o, l);
              }
            }
            var s = t.return;
            try {
              cd(t);
            } catch (l) {
              _e(t, s, l);
            }
            break;
          case 5:
            var i = t.return;
            try {
              cd(t);
            } catch (l) {
              _e(t, i, l);
            }
        }
      } catch (l) {
        _e(t, t.return, l);
      }
      if (t === e) {
        J = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        ((a.return = t.return), (J = a));
        break;
      }
      J = t.return;
    }
  }
  var bC = Math.ceil,
    fl = Gn.ReactCurrentDispatcher,
    zf = Gn.ReactCurrentOwner,
    Vt = Gn.ReactCurrentBatchConfig,
    me = 0,
    Xe = null,
    We = null,
    nt = 0,
    Pt = 0,
    Oo = Mr(0),
    Ve = 0,
    bi = null,
    ao = 0,
    Wl = 0,
    $f = 0,
    Js = null,
    bt = null,
    Bf = 0,
    as = 1 / 0,
    In = null,
    pl = false,
    fd = null,
    wr = null,
    fa = false,
    pr = null,
    hl = 0,
    ei = 0,
    pd = null,
    Ia = -1,
    _a = 0;
  function gt() {
    return me & 6 ? Fe() : Ia !== -1 ? Ia : (Ia = Fe());
  }
  function br(e) {
    return e.mode & 1
      ? me & 2 && nt !== 0
        ? nt & -nt
        : oC.transition !== null
          ? (_a === 0 && (_a = yv()), _a)
          : ((e = xe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ev(e.type))),
            e)
      : 1;
  }
  function sn(e, t, n, r) {
    if (50 < ei) throw ((ei = 0), (pd = null), Error(W(185)));
    (_i(e, n, r),
      (!(me & 2) || e !== Xe) &&
        (e === Xe && (!(me & 2) && (Wl |= n), Ve === 4 && ir(e, nt)),
        Et(e, r),
        n === 1 &&
          me === 0 &&
          !(t.mode & 1) &&
          ((as = Fe() + 500), Fl && Or())));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    oS(e, t);
    var r = Xa(e, e === Xe ? nt : 0);
    if (r === 0)
      (n !== null && fh(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && fh(n), t === 1))
        (e.tag === 0 ? rC(om.bind(null, e)) : Hv(om.bind(null, e)),
          JS(function () {
            !(me & 6) && Or();
          }),
          (n = null));
      else {
        switch (xv(r)) {
          case 1:
            n = pf;
            break;
          case 4:
            n = gv;
            break;
          case 16:
            n = Ya;
            break;
          case 536870912:
            n = vv;
            break;
          default:
            n = Ya;
        }
        n = Wy(n, Iy.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Iy(e, t) {
    if (((Ia = -1), (_a = 0), me & 6)) throw Error(W(327));
    var n = e.callbackNode;
    if ($o() && e.callbackNode !== n) return null;
    var r = Xa(e, e === Xe ? nt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ml(e, r);
    else {
      t = r;
      var o = me;
      me |= 2;
      var s = Ly();
      (Xe !== e || nt !== t) && ((In = null), (as = Fe() + 500), no(e, t));
      do
        try {
          kC();
          break;
        } catch (a) {
          _y(e, a);
        }
      while (true);
      (Tf(),
        (fl.current = s),
        (me = o),
        We !== null ? (t = 0) : ((Xe = null), (nt = 0), (t = Ve)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = $u(e)), o !== 0 && ((r = o), (t = hd(e, o)))),
        t === 1)
      )
        throw ((n = bi), no(e, 0), ir(e, r), Et(e, Fe()), n);
      if (t === 6) ir(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !SC(o) &&
            ((t = ml(e, r)),
            t === 2 && ((s = $u(e)), s !== 0 && ((r = s), (t = hd(e, s)))),
            t === 1))
        )
          throw ((n = bi), no(e, 0), ir(e, r), Et(e, Fe()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(W(345));
          case 2:
            Vr(e, bt, In);
            break;
          case 3:
            if (
              (ir(e, r),
              (r & 130023424) === r && ((t = Bf + 500 - Fe()), 10 < t))
            ) {
              if (Xa(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                (gt(), (e.pingedLanes |= e.suspendedLanes & o));
                break;
              }
              e.timeoutHandle = Qu(Vr.bind(null, e, bt, In), t);
              break;
            }
            Vr(e, bt, In);
            break;
          case 4:
            if ((ir(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r;) {
              var i = 31 - on(r);
              ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
            }
            if (
              ((r = o),
              (r = Fe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * bC(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Qu(Vr.bind(null, e, bt, In), r);
              break;
            }
            Vr(e, bt, In);
            break;
          case 5:
            Vr(e, bt, In);
            break;
          default:
            throw Error(W(329));
        }
      }
    }
    return (Et(e, Fe()), e.callbackNode === n ? Iy.bind(null, e) : null);
  }
  function hd(e, t) {
    var n = Js;
    return (
      e.current.memoizedState.isDehydrated && (no(e, t).flags |= 256),
      (e = ml(e, t)),
      e !== 2 && ((t = bt), (bt = n), t !== null && md(t)),
      e
    );
  }
  function md(e) {
    bt === null ? (bt = e) : bt.push.apply(bt, e);
  }
  function SC(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              s = o.getSnapshot;
            o = o.value;
            try {
              if (!an(s(), o)) return false;
            } catch {
              return false;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return true;
  }
  function ir(e, t) {
    for (
      t &= ~$f,
        t &= ~Wl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - on(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function om(e) {
    if (me & 6) throw Error(W(327));
    $o();
    var t = Xa(e, 0);
    if (!(t & 1)) return (Et(e, Fe()), null);
    var n = ml(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $u(e);
      r !== 0 && ((t = r), (n = hd(e, r)));
    }
    if (n === 1) throw ((n = bi), no(e, 0), ir(e, t), Et(e, Fe()), n);
    if (n === 6) throw Error(W(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Vr(e, bt, In),
      Et(e, Fe()),
      null
    );
  }
  function Wf(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      ((me = n), me === 0 && ((as = Fe() + 500), Fl && Or()));
    }
  }
  function lo(e) {
    pr !== null && pr.tag === 0 && !(me & 6) && $o();
    var t = me;
    me |= 1;
    var n = Vt.transition,
      r = xe;
    try {
      if (((Vt.transition = null), (xe = 1), e)) return e();
    } finally {
      ((xe = r), (Vt.transition = n), (me = t), !(me & 6) && Or());
    }
  }
  function Uf() {
    ((Pt = Oo.current), Te(Oo));
  }
  function no(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ZS(n)), We !== null))
      for (n = We.return; n !== null;) {
        var r = n;
        switch ((Cf(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && nl());
            break;
          case 3:
            (ss(), Te(Ct), Te(ut), Df());
            break;
          case 5:
            Af(r);
            break;
          case 4:
            ss();
            break;
          case 13:
            Te(Pe);
            break;
          case 19:
            Te(Pe);
            break;
          case 10:
            Nf(r.type._context);
            break;
          case 22:
          case 23:
            Uf();
        }
        n = n.return;
      }
    if (
      ((Xe = e),
      (We = e = Sr(e.current, null)),
      (nt = Pt = t),
      (Ve = 0),
      (bi = null),
      ($f = Wl = ao = 0),
      (bt = Js = null),
      Gr !== null)
    ) {
      for (t = 0; t < Gr.length; t++)
        if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            s = n.pending;
          if (s !== null) {
            var i = s.next;
            ((s.next = o), (r.next = i));
          }
          n.pending = r;
        }
      Gr = null;
    }
    return e;
  }
  function _y(e, t) {
    do {
      var n = We;
      try {
        if ((Tf(), (Da.current = dl), ul)) {
          for (var r = je.memoizedState; r !== null;) {
            var o = r.queue;
            (o !== null && (o.pending = null), (r = r.next));
          }
          ul = false;
        }
        if (
          ((io = 0),
          (Ke = Ue = je = null),
          (Xs = false),
          (yi = 0),
          (zf.current = null),
          n === null || n.return === null)
        ) {
          ((Ve = 1), (bi = t), (We = null));
          break;
        }
        e: {
          var s = e,
            i = n.return,
            a = n,
            l = t;
          if (
            ((t = nt),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              f = a,
              p = f.tag;
            if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
              var v = f.alternate;
              v
                ? ((f.updateQueue = v.updateQueue),
                  (f.memoizedState = v.memoizedState),
                  (f.lanes = v.lanes))
                : ((f.updateQueue = null), (f.memoizedState = null));
            }
            var h = Vh(i);
            if (h !== null) {
              ((h.flags &= -257),
                qh(h, i, a, s, t),
                h.mode & 1 && Hh(s, u, t),
                (t = h),
                (l = u));
              var b = t.updateQueue;
              if (b === null) {
                var m = new Set();
                (m.add(l), (t.updateQueue = m));
              } else b.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                (Hh(s, u, t), Hf());
                break e;
              }
              l = Error(W(426));
            }
          } else if (Ne && a.mode & 1) {
            var x = Vh(i);
            if (x !== null) {
              (!(x.flags & 65536) && (x.flags |= 256),
                qh(x, i, a, s, t),
                kf(is(l, a)));
              break e;
            }
          }
          ((s = l = is(l, a)),
            Ve !== 4 && (Ve = 2),
            Js === null ? (Js = [s]) : Js.push(s),
            (s = i));
          do {
            switch (s.tag) {
              case 3:
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var y = xy(s, l, t);
                Fh(s, y);
                break e;
              case 1:
                a = l;
                var g = s.type,
                  w = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof g.getDerivedStateFromError == "function" ||
                    (w !== null &&
                      typeof w.componentDidCatch == "function" &&
                      (wr === null || !wr.has(w))))
                ) {
                  ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                  var C = wy(s, a, t);
                  Fh(s, C);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        zy(n);
      } catch (k) {
        ((t = k), We === n && n !== null && (We = n = n.return));
        continue;
      }
      break;
    } while (true);
  }
  function Ly() {
    var e = fl.current;
    return ((fl.current = dl), e === null ? dl : e);
  }
  function Hf() {
    ((Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
      Xe === null || (!(ao & 268435455) && !(Wl & 268435455)) || ir(Xe, nt));
  }
  function ml(e, t) {
    var n = me;
    me |= 2;
    var r = Ly();
    (Xe !== e || nt !== t) && ((In = null), no(e, t));
    do
      try {
        CC();
        break;
      } catch (o) {
        _y(e, o);
      }
    while (true);
    if ((Tf(), (me = n), (fl.current = r), We !== null)) throw Error(W(261));
    return ((Xe = null), (nt = 0), Ve);
  }
  function CC() {
    for (; We !== null;) Fy(We);
  }
  function kC() {
    for (; We !== null && !K1();) Fy(We);
  }
  function Fy(e) {
    var t = By(e.alternate, e, Pt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? zy(e) : (We = t),
      (zf.current = null));
  }
  function zy(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = vC(n, t)), n !== null)) {
          ((n.flags &= 32767), (We = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ve = 6), (We = null));
          return;
        }
      } else if (((n = gC(n, t, Pt)), n !== null)) {
        We = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function Vr(e, t, n) {
    var r = xe,
      o = Vt.transition;
    try {
      ((Vt.transition = null), (xe = 1), EC(e, t, n, r));
    } finally {
      ((Vt.transition = o), (xe = r));
    }
    return null;
  }
  function EC(e, t, n, r) {
    do $o();
    while (pr !== null);
    if (me & 6) throw Error(W(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(W(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var s = n.lanes | n.childLanes;
    if (
      (sS(e, s),
      e === Xe && ((We = Xe = null), (nt = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        fa ||
        ((fa = true),
        Wy(Ya, function () {
          return ($o(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      ((s = Vt.transition), (Vt.transition = null));
      var i = xe;
      xe = 1;
      var a = me;
      ((me |= 4),
        (zf.current = null),
        xC(e, n),
        My(n, e),
        VS(qu),
        (Za = !!Vu),
        (qu = Vu = null),
        (e.current = n),
        wC(n),
        Y1(),
        (me = a),
        (xe = i),
        (Vt.transition = s));
    } else e.current = n;
    if (
      (fa && ((fa = false), (pr = e), (hl = o)),
      (s = e.pendingLanes),
      s === 0 && (wr = null),
      J1(n.stateNode),
      Et(e, Fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
    if (pl) throw ((pl = false), (e = fd), (fd = null), e);
    return (
      hl & 1 && e.tag !== 0 && $o(),
      (s = e.pendingLanes),
      s & 1 ? (e === pd ? ei++ : ((ei = 0), (pd = e))) : (ei = 0),
      Or(),
      null
    );
  }
  function $o() {
    if (pr !== null) {
      var e = xv(hl),
        t = Vt.transition,
        n = xe;
      try {
        if (((Vt.transition = null), (xe = 16 > e ? 16 : e), pr === null))
          var r = false;
        else {
          if (((e = pr), (pr = null), (hl = 0), me & 6)) throw Error(W(331));
          var o = me;
          for (me |= 4, J = e.current; J !== null;) {
            var s = J,
              i = s.child;
            if (J.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (J = u; J !== null;) {
                    var f = J;
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zs(8, f, s);
                    }
                    var p = f.child;
                    if (p !== null) ((p.return = f), (J = p));
                    else
                      for (; J !== null;) {
                        f = J;
                        var v = f.sibling,
                          h = f.return;
                        if ((Ry(f), f === u)) {
                          J = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = h), (J = v));
                          break;
                        }
                        J = h;
                      }
                  }
                }
                var b = s.alternate;
                if (b !== null) {
                  var m = b.child;
                  if (m !== null) {
                    b.child = null;
                    do {
                      var x = m.sibling;
                      ((m.sibling = null), (m = x));
                    } while (m !== null);
                  }
                }
                J = s;
              }
            }
            if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (J = i));
            else
              e: for (; J !== null;) {
                if (((s = J), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zs(9, s, s.return);
                  }
                var y = s.sibling;
                if (y !== null) {
                  ((y.return = s.return), (J = y));
                  break e;
                }
                J = s.return;
              }
          }
          var g = e.current;
          for (J = g; J !== null;) {
            i = J;
            var w = i.child;
            if (i.subtreeFlags & 2064 && w !== null) ((w.return = i), (J = w));
            else
              e: for (i = g; J !== null;) {
                if (((a = J), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bl(9, a);
                    }
                  } catch (k) {
                    _e(a, a.return, k);
                  }
                if (a === i) {
                  J = null;
                  break e;
                }
                var C = a.sibling;
                if (C !== null) {
                  ((C.return = a.return), (J = C));
                  break e;
                }
                J = a.return;
              }
          }
          if (
            ((me = o),
            Or(),
            En && typeof En.onPostCommitFiberRoot == "function")
          )
            try {
              En.onPostCommitFiberRoot(Ml, e);
            } catch {}
          r = true;
        }
        return r;
      } finally {
        ((xe = n), (Vt.transition = t));
      }
    }
    return false;
  }
  function sm(e, t, n) {
    ((t = is(n, t)),
      (t = xy(e, t, 1)),
      (e = xr(e, t, 1)),
      (t = gt()),
      e !== null && (_i(e, 1, t), Et(e, t)));
  }
  function _e(e, t, n) {
    if (e.tag === 3) sm(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          sm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (wr === null || !wr.has(r)))
          ) {
            ((e = is(n, e)),
              (e = wy(t, e, 1)),
              (t = xr(t, e, 1)),
              (e = gt()),
              t !== null && (_i(t, 1, e), Et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function TC(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = gt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Xe === e &&
        (nt & n) === n &&
        (Ve === 4 || (Ve === 3 && (nt & 130023424) === nt && 500 > Fe() - Bf)
          ? no(e, 0)
          : ($f |= n)),
      Et(e, t));
  }
  function $y(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = na), (na <<= 1), !(na & 130023424) && (na = 4194304))
        : (t = 1));
    var n = gt();
    ((e = Un(e, t)), e !== null && (_i(e, t, n), Et(e, n)));
  }
  function NC(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), $y(e, n));
  }
  function PC(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(W(314));
    }
    (r !== null && r.delete(t), $y(e, n));
  }
  var By;
  By = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ct.current) St = true;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return ((St = false), mC(e, t, n));
        St = !!(e.flags & 131072);
      }
    else ((St = false), Ne && t.flags & 1048576 && Vv(t, sl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Oa(e, t), (e = t.pendingProps));
        var o = ns(t, ut.current);
        (zo(t, n), (o = Of(null, t, r, e, o, n)));
        var s = If();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              kt(r) ? ((s = true), rl(t)) : (s = false),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              jf(t),
              (o.updater = $l),
              (t.stateNode = o),
              (o._reactInternals = t),
              td(t, r, e, n),
              (t = od(null, t, r, true, s, n)))
            : ((t.tag = 0), Ne && s && Sf(t), ht(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Oa(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = RC(r)),
            (e = Xt(r, e)),
            o)
          ) {
            case 0:
              t = rd(null, t, r, e, n);
              break e;
            case 1:
              t = Kh(null, t, r, e, n);
              break e;
            case 11:
              t = Gh(null, t, r, e, n);
              break e;
            case 14:
              t = Qh(null, t, r, Xt(r.type, e), n);
              break e;
          }
          throw Error(W(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Xt(r, o)),
          rd(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Xt(r, o)),
          Kh(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((ky(t), e === null)) throw Error(W(387));
          ((r = t.pendingProps),
            (s = t.memoizedState),
            (o = s.element),
            Xv(e, t),
            ll(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: false,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ((o = is(Error(W(423)), t)), (t = Yh(e, t, r, n, o)));
              break e;
            } else if (r !== o) {
              ((o = is(Error(W(424)), t)), (t = Yh(e, t, r, n, o)));
              break e;
            } else
              for (
                Rt = yr(t.stateNode.containerInfo.firstChild),
                  At = t,
                  Ne = true,
                  nn = null,
                  n = Kv(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((rs(), r === o)) {
              t = Hn(e, t, n);
              break e;
            }
            ht(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zv(t),
          e === null && Zu(t),
          (r = t.type),
          (o = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (i = o.children),
          Gu(r, o) ? (i = null) : s !== null && Gu(r, s) && (t.flags |= 32),
          Cy(e, t),
          ht(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Zu(t), null);
      case 13:
        return Ey(e, t, n);
      case 4:
        return (
          Rf(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = os(t, null, r, n)) : ht(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Xt(r, o)),
          Gh(e, t, r, o, n)
        );
      case 7:
        return (ht(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ht(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (s = t.memoizedProps),
            (i = o.value),
            Ce(il, r._currentValue),
            (r._currentValue = i),
            s !== null)
          )
            if (an(s.value, i)) {
              if (s.children === o.children && !Ct.current) {
                t = Hn(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null;) {
                var a = s.dependencies;
                if (a !== null) {
                  i = s.child;
                  for (var l = a.firstContext; l !== null;) {
                    if (l.context === r) {
                      if (s.tag === 1) {
                        ((l = $n(-1, n & -n)), (l.tag = 2));
                        var u = s.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var f = u.pending;
                          (f === null
                            ? (l.next = l)
                            : ((l.next = f.next), (f.next = l)),
                            (u.pending = l));
                        }
                      }
                      ((s.lanes |= n),
                        (l = s.alternate),
                        l !== null && (l.lanes |= n),
                        Ju(s.return, n, t),
                        (a.lanes |= n));
                      break;
                    }
                    l = l.next;
                  }
                } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((i = s.return), i === null)) throw Error(W(341));
                  ((i.lanes |= n),
                    (a = i.alternate),
                    a !== null && (a.lanes |= n),
                    Ju(i, n, t),
                    (i = s.sibling));
                } else i = s.child;
                if (i !== null) i.return = s;
                else
                  for (i = s; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((s = i.sibling), s !== null)) {
                      ((s.return = i.return), (i = s));
                      break;
                    }
                    i = i.return;
                  }
                s = i;
              }
          (ht(e, t, o.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          zo(t, n),
          (o = qt(o)),
          (r = r(o)),
          (t.flags |= 1),
          ht(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = Xt(r, t.pendingProps)),
          (o = Xt(r.type, o)),
          Qh(e, t, r, o, n)
        );
      case 15:
        return by(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : Xt(r, o)),
          Oa(e, t),
          (t.tag = 1),
          kt(r) ? ((e = true), rl(t)) : (e = false),
          zo(t, n),
          yy(t, r, o),
          td(t, r, o, n),
          od(null, t, r, true, e, n)
        );
      case 19:
        return Ty(e, t, n);
      case 22:
        return Sy(e, t, n);
    }
    throw Error(W(156, t.tag));
  };
  function Wy(e, t) {
    return mv(e, t);
  }
  function jC(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ut(e, t, n, r) {
    return new jC(e, t, n, r);
  }
  function Vf(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function RC(e) {
    if (typeof e == "function") return Vf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === uf)) return 11;
      if (e === df) return 14;
    }
    return 2;
  }
  function Sr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ut(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function La(e, t, n, r, o, s) {
    var i = 2;
    if (((r = e), typeof e == "function")) Vf(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case ko:
          return ro(n.children, o, s, t);
        case cf:
          ((i = 8), (o |= 8));
          break;
        case Eu:
          return (
            (e = Ut(12, n, t, o | 2)),
            (e.elementType = Eu),
            (e.lanes = s),
            e
          );
        case Tu:
          return (
            (e = Ut(13, n, t, o)),
            (e.elementType = Tu),
            (e.lanes = s),
            e
          );
        case Nu:
          return (
            (e = Ut(19, n, t, o)),
            (e.elementType = Nu),
            (e.lanes = s),
            e
          );
        case Zg:
          return Ul(n, o, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Yg:
                i = 10;
                break e;
              case Xg:
                i = 9;
                break e;
              case uf:
                i = 11;
                break e;
              case df:
                i = 14;
                break e;
              case nr:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(W(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ut(i, n, t, o)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = s),
      t
    );
  }
  function ro(e, t, n, r) {
    return ((e = Ut(7, e, r, t)), (e.lanes = n), e);
  }
  function Ul(e, t, n, r) {
    return (
      (e = Ut(22, e, r, t)),
      (e.elementType = Zg),
      (e.lanes = n),
      (e.stateNode = { isHidden: false }),
      e
    );
  }
  function Yc(e, t, n) {
    return ((e = Ut(6, e, null, t)), (e.lanes = n), e);
  }
  function Xc(e, t, n) {
    return (
      (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function AC(e, t, n, r, o) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ac(0)),
      (this.expirationTimes = Ac(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ac(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null));
  }
  function qf(e, t, n, r, o, s, i, a, l) {
    return (
      (e = new AC(e, t, n, a, l)),
      t === 1 ? ((t = 1), s === true && (t |= 8)) : (t = 0),
      (s = Ut(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      jf(s),
      e
    );
  }
  function DC(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Co,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Uy(e) {
    if (!e) return Tr;
    e = e._reactInternals;
    e: {
      if (mo(e) !== e || e.tag !== 1) throw Error(W(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(W(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (kt(n)) return Uv(e, n, t);
    }
    return t;
  }
  function Hy(e, t, n, r, o, s, i, a, l) {
    return (
      (e = qf(n, r, true, e, o, s, i, a, l)),
      (e.context = Uy(null)),
      (n = e.current),
      (r = gt()),
      (o = br(n)),
      (s = $n(r, o)),
      (s.callback = t ?? null),
      xr(n, s, o),
      (e.current.lanes = o),
      _i(e, o, r),
      Et(e, r),
      e
    );
  }
  function Hl(e, t, n, r) {
    var o = t.current,
      s = gt(),
      i = br(o);
    return (
      (n = Uy(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = $n(s, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = xr(o, t, i)),
      e !== null && (sn(e, o, i, s), Aa(e, o, i)),
      i
    );
  }
  function gl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function im(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Gf(e, t) {
    (im(e, t), (e = e.alternate) && im(e, t));
  }
  function MC() {
    return null;
  }
  var Vy =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Qf(e) {
    this._internalRoot = e;
  }
  Vl.prototype.render = Qf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(W(409));
    Hl(e, t, null, null);
  };
  Vl.prototype.unmount = Qf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      (lo(function () {
        Hl(null, e, null, null);
      }),
        (t[Wn] = null));
    }
  };
  function Vl(e) {
    this._internalRoot = e;
  }
  Vl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Sv();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < sr.length && t !== 0 && t < sr[n].priority; n++);
      (sr.splice(n, 0, e), n === 0 && kv(e));
    }
  };
  function Kf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ql(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function am() {}
  function OC(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var u = gl(i);
          s.call(u);
        };
      }
      var i = Hy(t, r, e, 0, null, false, false, "", am);
      return (
        (e._reactRootContainer = i),
        (e[Wn] = i.current),
        pi(e.nodeType === 8 ? e.parentNode : e),
        lo(),
        i
      );
    }
    for (; (o = e.lastChild);) e.removeChild(o);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = gl(l);
        a.call(u);
      };
    }
    var l = qf(e, 0, false, null, null, false, false, "", am);
    return (
      (e._reactRootContainer = l),
      (e[Wn] = l.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      lo(function () {
        Hl(t, l, n, r);
      }),
      l
    );
  }
  function Gl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
      var i = s;
      if (typeof o == "function") {
        var a = o;
        o = function () {
          var l = gl(i);
          a.call(l);
        };
      }
      Hl(t, i, e, o);
    } else i = OC(n, t, e, o, r);
    return gl(i);
  }
  wv = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Us(t.pendingLanes);
          n !== 0 &&
            (hf(t, n | 1), Et(t, Fe()), !(me & 6) && ((as = Fe() + 500), Or()));
        }
        break;
      case 13:
        (lo(function () {
          var r = Un(e, 1);
          if (r !== null) {
            var o = gt();
            sn(r, e, 1, o);
          }
        }),
          Gf(e, 1));
    }
  };
  mf = function (e) {
    if (e.tag === 13) {
      var t = Un(e, 134217728);
      if (t !== null) {
        var n = gt();
        sn(t, e, 134217728, n);
      }
      Gf(e, 134217728);
    }
  };
  bv = function (e) {
    if (e.tag === 13) {
      var t = br(e),
        n = Un(e, t);
      if (n !== null) {
        var r = gt();
        sn(n, e, t, r);
      }
      Gf(e, t);
    }
  };
  Sv = function () {
    return xe;
  };
  Cv = function (e, t) {
    var n = xe;
    try {
      return ((xe = e), t());
    } finally {
      xe = n;
    }
  };
  Lu = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Ru(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Ll(r);
              if (!o) throw Error(W(90));
              (ev(r), Ru(r, o));
            }
          }
        }
        break;
      case "textarea":
        nv(e, n);
        break;
      case "select":
        ((t = n.value), t != null && Io(e, !!n.multiple, t, false));
    }
  };
  cv = Wf;
  uv = lo;
  var IC = { usingClientEntryPoint: false, Events: [Fi, Po, Ll, av, lv, Wf] },
    _s = {
      findFiberByHostInstance: qr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    _C = {
      bundleType: _s.bundleType,
      version: _s.version,
      rendererPackageName: _s.rendererPackageName,
      rendererConfig: _s.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Gn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = pv(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: _s.findFiberByHostInstance || MC,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pa.isDisabled && pa.supportsFiber)
      try {
        ((Ml = pa.inject(_C)), (En = pa));
      } catch {}
  }
  Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IC;
  Ot.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kf(t)) throw Error(W(200));
    return DC(e, t, null, n);
  };
  Ot.createRoot = function (e, t) {
    if (!Kf(e)) throw Error(W(299));
    var n = false,
      r = "",
      o = Vy;
    return (
      t != null &&
        (t.unstable_strictMode === true && (n = true),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = qf(e, 1, false, null, null, n, false, r, o)),
      (e[Wn] = t.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      new Qf(t)
    );
  };
  Ot.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(W(188))
        : ((e = Object.keys(e).join(",")), Error(W(268, e)));
    return ((e = pv(t)), (e = e === null ? null : e.stateNode), e);
  };
  Ot.flushSync = function (e) {
    return lo(e);
  };
  Ot.hydrate = function (e, t, n) {
    if (!ql(t)) throw Error(W(200));
    return Gl(null, e, t, true, n);
  };
  Ot.hydrateRoot = function (e, t, n) {
    if (!Kf(e)) throw Error(W(405));
    var r = (n != null && n.hydratedSources) || null,
      o = false,
      s = "",
      i = Vy;
    if (
      (n != null &&
        (n.unstable_strictMode === true && (o = true),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = Hy(t, null, e, 1, n ?? null, o, false, s, i)),
      (e[Wn] = t.current),
      pi(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        ((n = r[e]),
          (o = n._getVersion),
          (o = o(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, o])
            : t.mutableSourceEagerHydrationData.push(n, o));
    return new Vl(t);
  };
  Ot.render = function (e, t, n) {
    if (!ql(t)) throw Error(W(200));
    return Gl(null, e, t, false, n);
  };
  Ot.unmountComponentAtNode = function (e) {
    if (!ql(e)) throw Error(W(40));
    return e._reactRootContainer
      ? (lo(function () {
          Gl(null, null, e, false, function () {
            ((e._reactRootContainer = null), (e[Wn] = null));
          });
        }),
        true)
      : false;
  };
  Ot.unstable_batchedUpdates = Wf;
  Ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ql(n)) throw Error(W(200));
    if (e == null || e._reactInternals === void 0) throw Error(W(38));
    return Gl(e, t, n, false, r);
  };
  Ot.version = "18.3.1-next-f1338f8080-20240426";
  function qy() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qy);
      } catch (e) {
        console.error(e);
      }
  }
  (qy(), (qg.exports = Ot));
  var Ht = qg.exports;
  const Gy = Oi(Ht);
  var Qy,
    lm = Ht;
  ((Qy = lm.createRoot), lm.hydrateRoot);
  var LC = typeof Element < "u",
    FC = typeof Map == "function",
    zC = typeof Set == "function",
    $C = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function Fa(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      var n, r, o;
      if (Array.isArray(e)) {
        if (((n = e.length), n != t.length)) return false;
        for (r = n; r-- !== 0;) if (!Fa(e[r], t[r])) return false;
        return true;
      }
      var s;
      if (FC && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        for (s = e.entries(); !(r = s.next()).done;)
          if (!t.has(r.value[0])) return false;
        for (s = e.entries(); !(r = s.next()).done;)
          if (!Fa(r.value[1], t.get(r.value[0]))) return false;
        return true;
      }
      if (zC && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return false;
        for (s = e.entries(); !(r = s.next()).done;)
          if (!t.has(r.value[0])) return false;
        return true;
      }
      if ($C && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (((n = e.length), n != t.length)) return false;
        for (r = n; r-- !== 0;) if (e[r] !== t[r]) return false;
        return true;
      }
      if (e.constructor === RegExp)
        return e.source === t.source && e.flags === t.flags;
      if (
        e.valueOf !== Object.prototype.valueOf &&
        typeof e.valueOf == "function" &&
        typeof t.valueOf == "function"
      )
        return e.valueOf() === t.valueOf();
      if (
        e.toString !== Object.prototype.toString &&
        typeof e.toString == "function" &&
        typeof t.toString == "function"
      )
        return e.toString() === t.toString();
      if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
        return false;
      for (r = n; r-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(t, o[r])) return false;
      if (LC && e instanceof Element) return false;
      for (r = n; r-- !== 0;)
        if (
          !(
            (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
            e.$$typeof
          ) &&
          !Fa(e[o[r]], t[o[r]])
        )
          return false;
      return true;
    }
    return e !== e && t !== t;
  }
  var BC = function (t, n) {
    try {
      return Fa(t, n);
    } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"),
          false
        );
      throw r;
    }
  };
  const WC = Oi(BC);
  var UC = function (e, t, n, r, o, s, i, a) {
      if (!e) {
        var l;
        if (t === void 0)
          l = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
          );
        else {
          var u = [n, r, o, s, i, a],
            f = 0;
          ((l = new Error(
            t.replace(/%s/g, function () {
              return u[f++];
            }),
          )),
            (l.name = "Invariant Violation"));
        }
        throw ((l.framesToPop = 1), l);
      }
    },
    HC = UC;
  const cm = Oi(HC);
  var VC = function (t, n, r, o) {
    var s = r ? r.call(o, t, n) : void 0;
    if (s !== void 0) return !!s;
    if (t === n) return true;
    if (typeof t != "object" || !t || typeof n != "object" || !n) return false;
    var i = Object.keys(t),
      a = Object.keys(n);
    if (i.length !== a.length) return false;
    for (
      var l = Object.prototype.hasOwnProperty.bind(n), u = 0;
      u < i.length;
      u++
    ) {
      var f = i[u];
      if (!l(f)) return false;
      var p = t[f],
        v = n[f];
      if (
        ((s = r ? r.call(o, p, v, f) : void 0),
        s === false || (s === void 0 && p !== v))
      )
        return false;
    }
    return true;
  };
  const qC = Oi(VC);
  var Ky = ((e) => (
      (e.BASE = "base"),
      (e.BODY = "body"),
      (e.HEAD = "head"),
      (e.HTML = "html"),
      (e.LINK = "link"),
      (e.META = "meta"),
      (e.NOSCRIPT = "noscript"),
      (e.SCRIPT = "script"),
      (e.STYLE = "style"),
      (e.TITLE = "title"),
      (e.FRAGMENT = "Symbol(react.fragment)"),
      e
    ))(Ky || {}),
    Zc = {
      link: { rel: ["amphtml", "canonical", "alternate"] },
      script: { type: ["application/ld+json"] },
      meta: {
        charset: "",
        name: ["generator", "robots", "description"],
        property: [
          "og:type",
          "og:title",
          "og:url",
          "og:image",
          "og:image:alt",
          "og:description",
          "twitter:url",
          "twitter:title",
          "twitter:description",
          "twitter:image",
          "twitter:image:alt",
          "twitter:card",
          "twitter:site",
        ],
      },
    },
    um = Object.values(Ky),
    Ql = {
      accesskey: "accessKey",
      charset: "charSet",
      class: "className",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      "http-equiv": "httpEquiv",
      itemprop: "itemProp",
      tabindex: "tabIndex",
    },
    Yy = Object.entries(Ql).reduce((e, [t, n]) => ((e[n] = t), e), {}),
    rn = "data-rh",
    Bo = {
      DEFAULT_TITLE: "defaultTitle",
      DEFER: "defer",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate",
      PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
    },
    Wo = (e, t) => {
      for (let n = e.length - 1; n >= 0; n -= 1) {
        const r = e[n];
        if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
      }
      return null;
    },
    GC = (e) => {
      let t = Wo(e, "title");
      const n = Wo(e, Bo.TITLE_TEMPLATE);
      if ((Array.isArray(t) && (t = t.join("")), n && t))
        return n.replace(/%s/g, () => t);
      const r = Wo(e, Bo.DEFAULT_TITLE);
      return t || r || void 0;
    },
    QC = (e) => Wo(e, Bo.ON_CHANGE_CLIENT_STATE) || (() => {}),
    Jc = (e, t) =>
      t
        .filter((n) => typeof n[e] < "u")
        .map((n) => n[e])
        .reduce((n, r) => ({ ...n, ...r }), {}),
    KC = (e, t) =>
      t
        .filter((n) => typeof n.base < "u")
        .map((n) => n.base)
        .reverse()
        .reduce((n, r) => {
          if (!n.length) {
            const o = Object.keys(r);
            for (let s = 0; s < o.length; s += 1) {
              const a = o[s].toLowerCase();
              if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
            }
          }
          return n;
        }, []),
    YC = (e) => console && typeof console.warn == "function" && console.warn(e),
    Ls = (e, t, n) => {
      const r = {};
      return n
        .filter((o) =>
          Array.isArray(o[e])
            ? true
            : (typeof o[e] < "u" &&
                YC(
                  `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`,
                ),
              false),
        )
        .map((o) => o[e])
        .reverse()
        .reduce((o, s) => {
          const i = {};
          s.filter((l) => {
            let u;
            const f = Object.keys(l);
            for (let v = 0; v < f.length; v += 1) {
              const h = f[v],
                b = h.toLowerCase();
              (t.indexOf(b) !== -1 &&
                !(u === "rel" && l[u].toLowerCase() === "canonical") &&
                !(b === "rel" && l[b].toLowerCase() === "stylesheet") &&
                (u = b),
                t.indexOf(h) !== -1 &&
                  (h === "innerHTML" || h === "cssText" || h === "itemprop") &&
                  (u = h));
            }
            if (!u || !l[u]) return false;
            const p = l[u].toLowerCase();
            return (
              r[u] || (r[u] = {}),
              i[u] || (i[u] = {}),
              r[u][p] ? false : ((i[u][p] = true), true)
            );
          })
            .reverse()
            .forEach((l) => o.push(l));
          const a = Object.keys(i);
          for (let l = 0; l < a.length; l += 1) {
            const u = a[l],
              f = { ...r[u], ...i[u] };
            r[u] = f;
          }
          return o;
        }, [])
        .reverse();
    },
    XC = (e, t) => {
      if (Array.isArray(e) && e.length) {
        for (let n = 0; n < e.length; n += 1) if (e[n][t]) return true;
      }
      return false;
    },
    ZC = (e) => ({
      baseTag: KC(["href"], e),
      bodyAttributes: Jc("bodyAttributes", e),
      defer: Wo(e, Bo.DEFER),
      encode: Wo(e, Bo.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Jc("htmlAttributes", e),
      linkTags: Ls("link", ["rel", "href"], e),
      metaTags: Ls(
        "meta",
        ["name", "charset", "http-equiv", "property", "itemprop"],
        e,
      ),
      noscriptTags: Ls("noscript", ["innerHTML"], e),
      onChangeClientState: QC(e),
      scriptTags: Ls("script", ["src", "innerHTML"], e),
      styleTags: Ls("style", ["cssText"], e),
      title: GC(e),
      titleAttributes: Jc("titleAttributes", e),
      prioritizeSeoTags: XC(e, Bo.PRIORITIZE_SEO_TAGS),
    }),
    Xy = (e) => (Array.isArray(e) ? e.join("") : e),
    JC = (e, t) => {
      const n = Object.keys(e);
      for (let r = 0; r < n.length; r += 1)
        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return true;
      return false;
    },
    eu = (e, t) =>
      Array.isArray(e)
        ? e.reduce(
            (n, r) => (JC(r, t) ? n.priority.push(r) : n.default.push(r), n),
            { priority: [], default: [] },
          )
        : { default: e, priority: [] },
    dm = (e, t) => ({ ...e, [t]: void 0 }),
    ek = ["noscript", "script", "style"],
    gd = (e, t = true) =>
      t === false
        ? String(e)
        : String(e)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;"),
    Zy = (e) =>
      Object.keys(e).reduce((t, n) => {
        const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
        return t ? `${t} ${r}` : r;
      }, ""),
    tk = (e, t, n, r) => {
      const o = Zy(n),
        s = Xy(t);
      return o
        ? `<${e} ${rn}="true" ${o}>${gd(s, r)}</${e}>`
        : `<${e} ${rn}="true">${gd(s, r)}</${e}>`;
    },
    nk = (e, t, n = true) =>
      t.reduce((r, o) => {
        const s = o,
          i = Object.keys(s)
            .filter((u) => !(u === "innerHTML" || u === "cssText"))
            .reduce((u, f) => {
              const p = typeof s[f] > "u" ? f : `${f}="${gd(s[f], n)}"`;
              return u ? `${u} ${p}` : p;
            }, ""),
          a = s.innerHTML || s.cssText || "",
          l = ek.indexOf(e) === -1;
        return `${r}<${e} ${rn}="true" ${i}${l ? "/>" : `>${a}</${e}>`}`;
      }, ""),
    Jy = (e, t = {}) =>
      Object.keys(e).reduce((n, r) => {
        const o = Ql[r];
        return ((n[o || r] = e[r]), n);
      }, t),
    rk = (e, t, n) => {
      const r = { key: t, [rn]: true },
        o = Jy(n, r);
      return [O.createElement("title", o, t)];
    },
    za = (e, t) =>
      t.map((n, r) => {
        const o = { key: r, [rn]: true };
        return (
          Object.keys(n).forEach((s) => {
            const a = Ql[s] || s;
            if (a === "innerHTML" || a === "cssText") {
              const l = n.innerHTML || n.cssText;
              o.dangerouslySetInnerHTML = { __html: l };
            } else o[a] = n[s];
          }),
          O.createElement(e, o)
        );
      }),
    Ft = (e, t, n = true) => {
      switch (e) {
        case "title":
          return {
            toComponent: () => rk(e, t.title, t.titleAttributes),
            toString: () => tk(e, t.title, t.titleAttributes, n),
          };
        case "bodyAttributes":
        case "htmlAttributes":
          return { toComponent: () => Jy(t), toString: () => Zy(t) };
        default:
          return { toComponent: () => za(e, t), toString: () => nk(e, t, n) };
      }
    },
    ok = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
      const o = eu(e, Zc.meta),
        s = eu(t, Zc.link),
        i = eu(n, Zc.script);
      return {
        priorityMethods: {
          toComponent: () => [
            ...za("meta", o.priority),
            ...za("link", s.priority),
            ...za("script", i.priority),
          ],
          toString: () =>
            `${Ft("meta", o.priority, r)} ${Ft("link", s.priority, r)} ${Ft("script", i.priority, r)}`,
        },
        metaTags: o.default,
        linkTags: s.default,
        scriptTags: i.default,
      };
    },
    sk = (e) => {
      const {
        baseTag: t,
        bodyAttributes: n,
        encode: r = true,
        htmlAttributes: o,
        noscriptTags: s,
        styleTags: i,
        title: a = "",
        titleAttributes: l,
        prioritizeSeoTags: u,
      } = e;
      let { linkTags: f, metaTags: p, scriptTags: v } = e,
        h = { toComponent: () => [], toString: () => "" };
      return (
        u &&
          ({
            priorityMethods: h,
            linkTags: f,
            metaTags: p,
            scriptTags: v,
          } = ok(e)),
        {
          priority: h,
          base: Ft("base", t, r),
          bodyAttributes: Ft("bodyAttributes", n, r),
          htmlAttributes: Ft("htmlAttributes", o, r),
          link: Ft("link", f, r),
          meta: Ft("meta", p, r),
          noscript: Ft("noscript", s, r),
          script: Ft("script", v, r),
          style: Ft("style", i, r),
          title: Ft("title", { title: a, titleAttributes: l }, r),
        }
      );
    },
    vd = sk,
    ha = [],
    Yf = !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    ),
    yd = class {
      constructor(e, t) {
        Dn(this, "instances", []);
        Dn(this, "canUseDOM", Yf);
        Dn(this, "context");
        Dn(this, "value", {
          setHelmet: (e) => {
            this.context.helmet = e;
          },
          helmetInstances: {
            get: () => (this.canUseDOM ? ha : this.instances),
            add: (e) => {
              (this.canUseDOM ? ha : this.instances).push(e);
            },
            remove: (e) => {
              const t = (this.canUseDOM ? ha : this.instances).indexOf(e);
              (this.canUseDOM ? ha : this.instances).splice(t, 1);
            },
          },
        });
        ((this.context = e),
          (this.canUseDOM = t || false),
          t ||
            (e.helmet = vd({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: true,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })));
      }
    },
    ik = parseInt(O.version.split(".")[0], 10),
    xd = ik >= 19,
    ak = {},
    ex = O.createContext(ak),
    Kr,
    tx =
      ((Kr = class extends d.Component {
        constructor(n) {
          super(n);
          Dn(this, "helmetData");
          xd
            ? (this.helmetData = null)
            : (this.helmetData = new yd(
                this.props.context || {},
                Kr.canUseDOM,
              ));
        }
        render() {
          return xd
            ? O.createElement(O.Fragment, null, this.props.children)
            : O.createElement(
                ex.Provider,
                { value: this.helmetData.value },
                this.props.children,
              );
        }
      }),
      Dn(Kr, "canUseDOM", Yf),
      Kr),
    xo = (e, t) => {
      const n = document.head || document.querySelector("head"),
        r = n.querySelectorAll(`${e}[${rn}]`),
        o = [].slice.call(r),
        s = [];
      let i;
      return (
        t &&
          t.length &&
          t.forEach((a) => {
            const l = document.createElement(e);
            for (const u in a)
              if (Object.prototype.hasOwnProperty.call(a, u))
                if (u === "innerHTML") l.innerHTML = a.innerHTML;
                else if (u === "cssText") {
                  const f = a.cssText;
                  l.appendChild(document.createTextNode(f));
                } else {
                  const f = u,
                    p = typeof a[f] > "u" ? "" : a[f];
                  l.setAttribute(u, p);
                }
            (l.setAttribute(rn, "true"),
              o.some((u, f) => ((i = f), l.isEqualNode(u)))
                ? o.splice(i, 1)
                : s.push(l));
          }),
        o.forEach((a) => {
          var l;
          return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
        }),
        s.forEach((a) => n.appendChild(a)),
        { oldTags: o, newTags: s }
      );
    },
    wd = (e, t) => {
      const n = document.getElementsByTagName(e)[0];
      if (!n) return;
      const r = n.getAttribute(rn),
        o = r ? r.split(",") : [],
        s = [...o],
        i = Object.keys(t);
      for (const a of i) {
        const l = t[a] || "";
        (n.getAttribute(a) !== l && n.setAttribute(a, l),
          o.indexOf(a) === -1 && o.push(a));
        const u = s.indexOf(a);
        u !== -1 && s.splice(u, 1);
      }
      for (let a = s.length - 1; a >= 0; a -= 1) n.removeAttribute(s[a]);
      o.length === s.length
        ? n.removeAttribute(rn)
        : n.getAttribute(rn) !== i.join(",") && n.setAttribute(rn, i.join(","));
    },
    lk = (e, t) => {
      (typeof e < "u" && document.title !== e && (document.title = Xy(e)),
        wd("title", t));
    },
    fm = (e, t) => {
      const {
        baseTag: n,
        bodyAttributes: r,
        htmlAttributes: o,
        linkTags: s,
        metaTags: i,
        noscriptTags: a,
        onChangeClientState: l,
        scriptTags: u,
        styleTags: f,
        title: p,
        titleAttributes: v,
      } = e;
      (wd("body", r), wd("html", o), lk(p, v));
      const h = {
          baseTag: xo("base", n),
          linkTags: xo("link", s),
          metaTags: xo("meta", i),
          noscriptTags: xo("noscript", a),
          scriptTags: xo("script", u),
          styleTags: xo("style", f),
        },
        b = {},
        m = {};
      (Object.keys(h).forEach((x) => {
        const { newTags: y, oldTags: g } = h[x];
        (y.length && (b[x] = y), g.length && (m[x] = h[x].oldTags));
      }),
        t && t(),
        l(e, b, m));
    },
    Fs = null,
    ck = (e) => {
      (Fs && cancelAnimationFrame(Fs),
        e.defer
          ? (Fs = requestAnimationFrame(() => {
              fm(e, () => {
                Fs = null;
              });
            }))
          : (fm(e), (Fs = null)));
    },
    uk = ck,
    pm = class extends d.Component {
      constructor() {
        super(...arguments);
        Dn(this, "rendered", false);
      }
      shouldComponentUpdate(t) {
        return !qC(t, this.props);
      }
      componentDidUpdate() {
        this.emitChange();
      }
      componentWillUnmount() {
        const { helmetInstances: t } = this.props.context;
        (t.remove(this), this.emitChange());
      }
      emitChange() {
        const { helmetInstances: t, setHelmet: n } = this.props.context;
        let r = null;
        const o = ZC(
          t.get().map((s) => {
            const { context: i, ...a } = s.props;
            return a;
          }),
        );
        (tx.canUseDOM ? uk(o) : vd && (r = vd(o)), n(r));
      }
      init() {
        if (this.rendered) return;
        this.rendered = true;
        const { helmetInstances: t } = this.props.context;
        (t.add(this), this.emitChange());
      }
      render() {
        return (this.init(), null);
      }
    },
    $a = [],
    hm = (e) => {
      const t = {};
      for (const n of Object.keys(e)) t[Yy[n] || n] = e[n];
      return t;
    },
    Ur = (e) => {
      const t = {};
      for (const n of Object.keys(e)) {
        const r = Ql[n];
        t[r || n] = e[n];
      }
      return t;
    },
    mm = (e, t) => {
      if (!Yf) return;
      const n = document.getElementsByTagName(e)[0];
      if (!n) return;
      const r = "data-rh-managed",
        o = n.getAttribute(r),
        s = o ? o.split(",") : [],
        i = Object.keys(t);
      for (const a of s) i.includes(a) || n.removeAttribute(a);
      for (const a of i) {
        const l = t[a];
        l == null || l === false
          ? n.removeAttribute(a)
          : l === true
            ? n.setAttribute(a, "")
            : n.setAttribute(a, String(l));
      }
      i.length > 0 ? n.setAttribute(r, i.join(",")) : n.removeAttribute(r);
    },
    tu = () => {
      const e = {},
        t = {};
      for (const n of $a) {
        const { htmlAttributes: r, bodyAttributes: o } = n.props;
        (r && Object.assign(e, hm(r)), o && Object.assign(t, hm(o)));
      }
      (mm("html", e), mm("body", t));
    },
    dk = class extends d.Component {
      componentDidMount() {
        ($a.push(this), tu());
      }
      componentDidUpdate() {
        tu();
      }
      componentWillUnmount() {
        const e = $a.indexOf(this);
        (e !== -1 && $a.splice(e, 1), tu());
      }
      resolveTitle() {
        const { title: e, titleTemplate: t, defaultTitle: n } = this.props;
        return e && t
          ? t.replace(/%s/g, () => (Array.isArray(e) ? e.join("") : e))
          : e || n || void 0;
      }
      renderTitle() {
        const e = this.resolveTitle();
        if (e === void 0) return null;
        const t = this.props.titleAttributes || {};
        return O.createElement("title", Ur(t), e);
      }
      renderBase() {
        const { base: e } = this.props;
        return e ? O.createElement("base", Ur(e)) : null;
      }
      renderMeta() {
        const { meta: e } = this.props;
        return !e || !Array.isArray(e)
          ? null
          : e.map((t, n) => O.createElement("meta", { key: n, ...Ur(t) }));
      }
      renderLink() {
        const { link: e } = this.props;
        return !e || !Array.isArray(e)
          ? null
          : e.map((t, n) => O.createElement("link", { key: n, ...Ur(t) }));
      }
      renderScript() {
        const { script: e } = this.props;
        return !e || !Array.isArray(e)
          ? null
          : e.map((t, n) => {
              const { innerHTML: r, ...o } = t,
                s = Ur(o);
              return (
                r && (s.dangerouslySetInnerHTML = { __html: r }),
                O.createElement("script", { key: n, ...s })
              );
            });
      }
      renderStyle() {
        const { style: e } = this.props;
        return !e || !Array.isArray(e)
          ? null
          : e.map((t, n) => {
              const { cssText: r, ...o } = t,
                s = Ur(o);
              return (
                r && (s.dangerouslySetInnerHTML = { __html: r }),
                O.createElement("style", { key: n, ...s })
              );
            });
      }
      renderNoscript() {
        const { noscript: e } = this.props;
        return !e || !Array.isArray(e)
          ? null
          : e.map((t, n) => {
              const { innerHTML: r, ...o } = t,
                s = Ur(o);
              return (
                r && (s.dangerouslySetInnerHTML = { __html: r }),
                O.createElement("noscript", { key: n, ...s })
              );
            });
      }
      render() {
        return O.createElement(
          O.Fragment,
          null,
          this.renderTitle(),
          this.renderBase(),
          this.renderMeta(),
          this.renderLink(),
          this.renderScript(),
          this.renderStyle(),
          this.renderNoscript(),
        );
      }
    },
    Cu,
    Ir =
      ((Cu = class extends d.Component {
        shouldComponentUpdate(e) {
          return !WC(dm(this.props, "helmetData"), dm(e, "helmetData"));
        }
        mapNestedChildrenToProps(e, t) {
          if (!t) return null;
          switch (e.type) {
            case "script":
            case "noscript":
              return { innerHTML: t };
            case "style":
              return { cssText: t };
            default:
              throw new Error(
                `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
              );
          }
        }
        flattenArrayTypeChildren(e, t, n, r) {
          return {
            ...t,
            [e.type]: [
              ...(t[e.type] || []),
              { ...n, ...this.mapNestedChildrenToProps(e, r) },
            ],
          };
        }
        mapObjectTypeChildren(e, t, n, r) {
          switch (e.type) {
            case "title":
              return { ...t, [e.type]: r, titleAttributes: { ...n } };
            case "body":
              return { ...t, bodyAttributes: { ...n } };
            case "html":
              return { ...t, htmlAttributes: { ...n } };
            default:
              return { ...t, [e.type]: { ...n } };
          }
        }
        mapArrayTypeChildrenToProps(e, t) {
          let n = { ...t };
          return (
            Object.keys(e).forEach((r) => {
              n = { ...n, [r]: e[r] };
            }),
            n
          );
        }
        warnOnInvalidChildren(e, t) {
          return (
            cm(
              um.some((n) => e.type === n),
              typeof e.type == "function"
                ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                : `Only elements types ${um.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`,
            ),
            cm(
              !t ||
                typeof t == "string" ||
                (Array.isArray(t) && !t.some((n) => typeof n != "string")),
              `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`,
            ),
            true
          );
        }
        mapChildrenToProps(e, t) {
          let n = {};
          return (
            O.Children.forEach(e, (r) => {
              if (!r || !r.props) return;
              const { children: o, ...s } = r.props,
                i = Object.keys(s).reduce(
                  (l, u) => ((l[Yy[u] || u] = s[u]), l),
                  {},
                );
              let { type: a } = r;
              switch (
                (typeof a == "symbol"
                  ? (a = a.toString())
                  : this.warnOnInvalidChildren(r, o),
                a)
              ) {
                case "Symbol(react.fragment)":
                  t = this.mapChildrenToProps(o, t);
                  break;
                case "link":
                case "meta":
                case "noscript":
                case "script":
                case "style":
                  n = this.flattenArrayTypeChildren(r, n, i, o);
                  break;
                default:
                  t = this.mapObjectTypeChildren(r, t, i, o);
                  break;
              }
            }),
            this.mapArrayTypeChildrenToProps(n, t)
          );
        }
        render() {
          const { children: e, ...t } = this.props;
          let n = { ...t },
            { helmetData: r } = t;
          if (
            (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof yd))
          ) {
            const o = r;
            ((r = new yd(o.context, true)), delete n.helmetData);
          }
          return xd
            ? O.createElement(dk, { ...n })
            : r
              ? O.createElement(pm, { ...n, context: r.value })
              : O.createElement(ex.Consumer, null, (o) =>
                  O.createElement(pm, { ...n, context: o }),
                );
        }
      }),
      Dn(Cu, "defaultProps", {
        defer: true,
        encodeSpecialCharacters: true,
        prioritizeSeoTags: false,
      }),
      Cu);
  const fk = 1,
    pk = 1e6;
  let nu = 0;
  function hk() {
    return ((nu = (nu + 1) % Number.MAX_SAFE_INTEGER), nu.toString());
  }
  const ru = new Map(),
    gm = (e) => {
      if (ru.has(e)) return;
      const t = setTimeout(() => {
        (ru.delete(e), ti({ type: "REMOVE_TOAST", toastId: e }));
      }, pk);
      ru.set(e, t);
    },
    mk = (e, t) => {
      switch (t.type) {
        case "ADD_TOAST":
          return { ...e, toasts: [t.toast, ...e.toasts].slice(0, fk) };
        case "UPDATE_TOAST":
          return {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === t.toast.id ? { ...n, ...t.toast } : n,
            ),
          };
        case "DISMISS_TOAST": {
          const { toastId: n } = t;
          return (
            n
              ? gm(n)
              : e.toasts.forEach((r) => {
                  gm(r.id);
                }),
            {
              ...e,
              toasts: e.toasts.map((r) =>
                r.id === n || n === void 0 ? { ...r, open: false } : r,
              ),
            }
          );
        }
        case "REMOVE_TOAST":
          return t.toastId === void 0
            ? { ...e, toasts: [] }
            : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
      }
    },
    Ba = [];
  let Wa = { toasts: [] };
  function ti(e) {
    ((Wa = mk(Wa, e)),
      Ba.forEach((t) => {
        t(Wa);
      }));
  }
  function gk({ ...e }) {
    const t = hk(),
      n = (o) => ti({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
      r = () => ti({ type: "DISMISS_TOAST", toastId: t });
    return (
      ti({
        type: "ADD_TOAST",
        toast: {
          ...e,
          id: t,
          open: true,
          onOpenChange: (o) => {
            o || r();
          },
        },
      }),
      { id: t, dismiss: r, update: n }
    );
  }
  function oe(e, t, { checkForDefaultPrevented: n = true } = {}) {
    return function (o) {
      if ((e == null || e(o), n === false || !o.defaultPrevented))
        return t == null ? void 0 : t(o);
    };
  }
  function vm(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
  }
  function nx(...e) {
    return (t) => {
      let n = false;
      const r = e.map((o) => {
        const s = vm(o, t);
        return (!n && typeof s == "function" && (n = true), s);
      });
      if (n)
        return () => {
          for (let o = 0; o < r.length; o++) {
            const s = r[o];
            typeof s == "function" ? s() : vm(e[o], null);
          }
        };
    };
  }
  function ge(...e) {
    return d.useCallback(nx(...e), e);
  }
  function yk(e, t) {
    const n = d.createContext(t),
      r = (s) => {
        const { children: i, ...a } = s,
          l = d.useMemo(() => a, Object.values(a));
        return c.jsx(n.Provider, { value: l, children: i });
      };
    r.displayName = e + "Provider";
    function o(s) {
      const i = d.useContext(n);
      if (i) return i;
      if (t !== void 0) return t;
      throw new Error(`\`${s}\` must be used within \`${e}\``);
    }
    return [r, o];
  }
  function Qn(e, t = []) {
    let n = [];
    function r(s, i) {
      const a = d.createContext(i),
        l = n.length;
      n = [...n, i];
      const u = (p) => {
        var y;
        const { scope: v, children: h, ...b } = p,
          m = ((y = v == null ? void 0 : v[e]) == null ? void 0 : y[l]) || a,
          x = d.useMemo(() => b, Object.values(b));
        return c.jsx(m.Provider, { value: x, children: h });
      };
      u.displayName = s + "Provider";
      function f(p, v) {
        var m;
        const h =
            ((m = v == null ? void 0 : v[e]) == null ? void 0 : m[l]) || a,
          b = d.useContext(h);
        if (b) return b;
        if (i !== void 0) return i;
        throw new Error(`\`${p}\` must be used within \`${s}\``);
      }
      return [u, f];
    }
    const o = () => {
      const s = n.map((i) => d.createContext(i));
      return function (a) {
        const l = (a == null ? void 0 : a[e]) || s;
        return d.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
      };
    };
    return ((o.scopeName = e), [r, xk(o, ...t)]);
  }
  function xk(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
      const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (s) {
        const i = r.reduce((a, { useScope: l, scopeName: u }) => {
          const p = l(s)[`__scope${u}`];
          return { ...a, ...p };
        }, {});
        return d.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
      };
    };
    return ((n.scopeName = t.scopeName), n);
  }
  function ls(e) {
    const t = bk(e),
      n = d.forwardRef((r, o) => {
        const { children: s, ...i } = r,
          a = d.Children.toArray(s),
          l = a.find(Ck);
        if (l) {
          const u = l.props.children,
            f = a.map((p) =>
              p === l
                ? d.Children.count(u) > 1
                  ? d.Children.only(null)
                  : d.isValidElement(u)
                    ? u.props.children
                    : null
                : p,
            );
          return c.jsx(t, {
            ...i,
            ref: o,
            children: d.isValidElement(u) ? d.cloneElement(u, void 0, f) : null,
          });
        }
        return c.jsx(t, { ...i, ref: o, children: s });
      });
    return ((n.displayName = `${e}.Slot`), n);
  }
  var wk = ls("Slot");
  function bk(e) {
    const t = d.forwardRef((n, r) => {
      const { children: o, ...s } = n;
      if (d.isValidElement(o)) {
        const i = Ek(o),
          a = kk(s, o.props);
        return (
          o.type !== d.Fragment && (a.ref = r ? nx(r, i) : i),
          d.cloneElement(o, a)
        );
      }
      return d.Children.count(o) > 1 ? d.Children.only(null) : null;
    });
    return ((t.displayName = `${e}.SlotClone`), t);
  }
  var rx = Symbol("radix.slottable");
  function Sk(e) {
    const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
    return ((t.displayName = `${e}.Slottable`), (t.__radixId = rx), t);
  }
  function Ck(e) {
    return (
      d.isValidElement(e) &&
      typeof e.type == "function" &&
      "__radixId" in e.type &&
      e.type.__radixId === rx
    );
  }
  function kk(e, t) {
    const n = { ...t };
    for (const r in t) {
      const o = e[r],
        s = t[r];
      /^on[A-Z]/.test(r)
        ? o && s
          ? (n[r] = (...a) => {
              const l = s(...a);
              return (o(...a), l);
            })
          : o && (n[r] = o)
        : r === "style"
          ? (n[r] = { ...o, ...s })
          : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
  }
  function Ek(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  function Kl(e) {
    const t = e + "CollectionProvider",
      [n, r] = Qn(t),
      [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
      i = (m) => {
        const { scope: x, children: y } = m,
          g = O.useRef(null),
          w = O.useRef(new Map()).current;
        return c.jsx(o, {
          scope: x,
          itemMap: w,
          collectionRef: g,
          children: y,
        });
      };
    i.displayName = t;
    const a = e + "CollectionSlot",
      l = ls(a),
      u = O.forwardRef((m, x) => {
        const { scope: y, children: g } = m,
          w = s(a, y),
          C = ge(x, w.collectionRef);
        return c.jsx(l, { ref: C, children: g });
      });
    u.displayName = a;
    const f = e + "CollectionItemSlot",
      p = "data-radix-collection-item",
      v = ls(f),
      h = O.forwardRef((m, x) => {
        const { scope: y, children: g, ...w } = m,
          C = O.useRef(null),
          k = ge(x, C),
          T = s(f, y);
        return (
          O.useEffect(
            () => (
              T.itemMap.set(C, { ref: C, ...w }),
              () => void T.itemMap.delete(C)
            ),
          ),
          c.jsx(v, { [p]: "", ref: k, children: g })
        );
      });
    h.displayName = f;
    function b(m) {
      const x = s(e + "CollectionConsumer", m);
      return O.useCallback(() => {
        const g = x.collectionRef.current;
        if (!g) return [];
        const w = Array.from(g.querySelectorAll(`[${p}]`));
        return Array.from(x.itemMap.values()).sort(
          (T, N) => w.indexOf(T.ref.current) - w.indexOf(N.ref.current),
        );
      }, [x.collectionRef, x.itemMap]);
    }
    return [{ Provider: i, Slot: u, ItemSlot: h }, b, r];
  }
  var Tk = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "select",
      "span",
      "svg",
      "ul",
    ],
    le = Tk.reduce((e, t) => {
      const n = ls(`Primitive.${t}`),
        r = d.forwardRef((o, s) => {
          const { asChild: i, ...a } = o,
            l = i ? n : t;
          return (
            typeof window < "u" && (window[Symbol.for("radix-ui")] = true),
            c.jsx(l, { ...a, ref: s })
          );
        });
      return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
    }, {});
  function ox(e, t) {
    e && Ht.flushSync(() => e.dispatchEvent(t));
  }
  function ln(e) {
    const t = d.useRef(e);
    return (
      d.useEffect(() => {
        t.current = e;
      }),
      d.useMemo(
        () =>
          (...n) => {
            var r;
            return (r = t.current) == null ? void 0 : r.call(t, ...n);
          },
        [],
      )
    );
  }
  function Nk(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ln(e);
    d.useEffect(() => {
      const r = (o) => {
        o.key === "Escape" && n(o);
      };
      return (
        t.addEventListener("keydown", r, { capture: true }),
        () => t.removeEventListener("keydown", r, { capture: true })
      );
    }, [n, t]);
  }
  var Pk = "DismissableLayer",
    bd = "dismissableLayer.update",
    jk = "dismissableLayer.pointerDownOutside",
    Rk = "dismissableLayer.focusOutside",
    ym,
    sx = d.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set(),
    }),
    $i = d.forwardRef((e, t) => {
      const {
          disableOutsidePointerEvents: n = false,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: s,
          onInteractOutside: i,
          onDismiss: a,
          ...l
        } = e,
        u = d.useContext(sx),
        [f, p] = d.useState(null),
        v =
          (f == null ? void 0 : f.ownerDocument) ??
          (globalThis == null ? void 0 : globalThis.document),
        [, h] = d.useState({}),
        b = ge(t, (N) => p(N)),
        m = Array.from(u.layers),
        [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        y = m.indexOf(x),
        g = f ? m.indexOf(f) : -1,
        w = u.layersWithOutsidePointerEventsDisabled.size > 0,
        C = g >= y,
        k = Dk((N) => {
          const j = N.target,
            D = [...u.branches].some((I) => I.contains(j));
          !C ||
            D ||
            (o == null || o(N),
            i == null || i(N),
            N.defaultPrevented || a == null || a());
        }, v),
        T = Mk((N) => {
          const j = N.target;
          [...u.branches].some((I) => I.contains(j)) ||
            (s == null || s(N),
            i == null || i(N),
            N.defaultPrevented || a == null || a());
        }, v);
      return (
        Nk((N) => {
          g === u.layers.size - 1 &&
            (r == null || r(N),
            !N.defaultPrevented && a && (N.preventDefault(), a()));
        }, v),
        d.useEffect(() => {
          if (f)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((ym = v.body.style.pointerEvents),
                  (v.body.style.pointerEvents = "none")),
                u.layersWithOutsidePointerEventsDisabled.add(f)),
              u.layers.add(f),
              xm(),
              () => {
                n &&
                  u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                  (v.body.style.pointerEvents = ym);
              }
            );
        }, [f, v, n, u]),
        d.useEffect(
          () => () => {
            f &&
              (u.layers.delete(f),
              u.layersWithOutsidePointerEventsDisabled.delete(f),
              xm());
          },
          [f, u],
        ),
        d.useEffect(() => {
          const N = () => h({});
          return (
            document.addEventListener(bd, N),
            () => document.removeEventListener(bd, N)
          );
        }, []),
        c.jsx(le.div, {
          ...l,
          ref: b,
          style: {
            pointerEvents: w ? (C ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: oe(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: oe(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: oe(
            e.onPointerDownCapture,
            k.onPointerDownCapture,
          ),
        })
      );
    });
  $i.displayName = Pk;
  var Ak = "DismissableLayerBranch",
    ix = d.forwardRef((e, t) => {
      const n = d.useContext(sx),
        r = d.useRef(null),
        o = ge(t, r);
      return (
        d.useEffect(() => {
          const s = r.current;
          if (s)
            return (
              n.branches.add(s),
              () => {
                n.branches.delete(s);
              }
            );
        }, [n.branches]),
        c.jsx(le.div, { ...e, ref: o })
      );
    });
  ix.displayName = Ak;
  function Dk(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ln(e),
      r = d.useRef(false),
      o = d.useRef(() => {});
    return (
      d.useEffect(() => {
        const s = (a) => {
            if (a.target && !r.current) {
              let l = function () {
                ax(jk, n, u, { discrete: true });
              };
              const u = { originalEvent: a };
              a.pointerType === "touch"
                ? (t.removeEventListener("click", o.current),
                  (o.current = l),
                  t.addEventListener("click", o.current, { once: true }))
                : l();
            } else t.removeEventListener("click", o.current);
            r.current = false;
          },
          i = window.setTimeout(() => {
            t.addEventListener("pointerdown", s);
          }, 0);
        return () => {
          (window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current));
        };
      }, [t, n]),
      { onPointerDownCapture: () => (r.current = true) }
    );
  }
  function Mk(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ln(e),
      r = d.useRef(false);
    return (
      d.useEffect(() => {
        const o = (s) => {
          s.target &&
            !r.current &&
            ax(Rk, n, { originalEvent: s }, { discrete: false });
        };
        return (
          t.addEventListener("focusin", o),
          () => t.removeEventListener("focusin", o)
        );
      }, [t, n]),
      {
        onFocusCapture: () => (r.current = true),
        onBlurCapture: () => (r.current = false),
      }
    );
  }
  function xm() {
    const e = new CustomEvent(bd);
    document.dispatchEvent(e);
  }
  function ax(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
      s = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
    (t && o.addEventListener(e, t, { once: true }),
      r ? ox(o, s) : o.dispatchEvent(s));
  }
  var Ok = $i,
    Ik = ix,
    Ze =
      globalThis != null && globalThis.document ? d.useLayoutEffect : () => {},
    _k = "Portal",
    Yl = d.forwardRef((e, t) => {
      var a;
      const { container: n, ...r } = e,
        [o, s] = d.useState(false);
      Ze(() => s(true), []);
      const i =
        n ||
        (o &&
          ((a = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : a.body));
      return i ? Gy.createPortal(c.jsx(le.div, { ...r, ref: t }), i) : null;
    });
  Yl.displayName = _k;
  function Lk(e, t) {
    return d.useReducer((n, r) => t[n][r] ?? n, e);
  }
  var go = (e) => {
    const { present: t, children: n } = e,
      r = Fk(t),
      o =
        typeof n == "function"
          ? n({ present: r.isPresent })
          : d.Children.only(n),
      s = ge(r.ref, zk(o));
    return typeof n == "function" || r.isPresent
      ? d.cloneElement(o, { ref: s })
      : null;
  };
  go.displayName = "Presence";
  function Fk(e) {
    const [t, n] = d.useState(),
      r = d.useRef(null),
      o = d.useRef(e),
      s = d.useRef("none"),
      i = e ? "mounted" : "unmounted",
      [a, l] = Lk(i, {
        mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
        unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
        unmounted: { MOUNT: "mounted" },
      });
    return (
      d.useEffect(() => {
        const u = ma(r.current);
        s.current = a === "mounted" ? u : "none";
      }, [a]),
      Ze(() => {
        const u = r.current,
          f = o.current;
        if (f !== e) {
          const v = s.current,
            h = ma(u);
          (e
            ? l("MOUNT")
            : h === "none" || (u == null ? void 0 : u.display) === "none"
              ? l("UNMOUNT")
              : l(f && v !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            (o.current = e));
        }
      }, [e, l]),
      Ze(() => {
        if (t) {
          let u;
          const f = t.ownerDocument.defaultView ?? window,
            p = (h) => {
              const m = ma(r.current).includes(h.animationName);
              if (h.target === t && m && (l("ANIMATION_END"), !o.current)) {
                const x = t.style.animationFillMode;
                ((t.style.animationFillMode = "forwards"),
                  (u = f.setTimeout(() => {
                    t.style.animationFillMode === "forwards" &&
                      (t.style.animationFillMode = x);
                  })));
              }
            },
            v = (h) => {
              h.target === t && (s.current = ma(r.current));
            };
          return (
            t.addEventListener("animationstart", v),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
              (f.clearTimeout(u),
                t.removeEventListener("animationstart", v),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p));
            }
          );
        } else l("ANIMATION_END");
      }, [t, l]),
      {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: d.useCallback((u) => {
          ((r.current = u ? getComputedStyle(u) : null), n(u));
        }, []),
      }
    );
  }
  function ma(e) {
    return (e == null ? void 0 : e.animationName) || "none";
  }
  function zk(e) {
    var r, o;
    let t =
        (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
          ? void 0
          : r.get,
      n = t && "isReactWarning" in t && t.isReactWarning;
    return n
      ? e.ref
      : ((t =
          (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
            ? void 0
            : o.get),
        (n = t && "isReactWarning" in t && t.isReactWarning),
        n ? e.props.ref : e.props.ref || e.ref);
  }
  var $k = of[" useInsertionEffect ".trim().toString()] || Ze;
  function Nr({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, s, i] = Bk({ defaultProp: t, onChange: n }),
      a = e !== void 0,
      l = a ? e : o;
    {
      const f = d.useRef(e !== void 0);
      d.useEffect(() => {
        const p = f.current;
        (p !== a &&
          console.warn(
            `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
          ),
          (f.current = a));
      }, [a, r]);
    }
    const u = d.useCallback(
      (f) => {
        var p;
        if (a) {
          const v = Wk(f) ? f(e) : f;
          v !== e && ((p = i.current) == null || p.call(i, v));
        } else s(f);
      },
      [a, e, s, i],
    );
    return [l, u];
  }
  function Bk({ defaultProp: e, onChange: t }) {
    const [n, r] = d.useState(e),
      o = d.useRef(n),
      s = d.useRef(t);
    return (
      $k(() => {
        s.current = t;
      }, [t]),
      d.useEffect(() => {
        var i;
        o.current !== n &&
          ((i = s.current) == null || i.call(s, n), (o.current = n));
      }, [n, o]),
      [n, r, s]
    );
  }
  function Wk(e) {
    return typeof e == "function";
  }
  var lx = Object.freeze({
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
    }),
    Uk = "VisuallyHidden",
    Xl = d.forwardRef((e, t) =>
      c.jsx(le.span, { ...e, ref: t, style: { ...lx, ...e.style } }),
    );
  Xl.displayName = Uk;
  var Hk = Xl,
    Xf = "ToastProvider",
    [Zf, Vk, qk] = Kl("Toast"),
    [cx, CM] = Qn("Toast", [qk]),
    [Gk, Zl] = cx(Xf),
    ux = (e) => {
      const {
          __scopeToast: t,
          label: n = "Notification",
          duration: r = 5e3,
          swipeDirection: o = "right",
          swipeThreshold: s = 50,
          children: i,
        } = e,
        [a, l] = d.useState(null),
        [u, f] = d.useState(0),
        p = d.useRef(false),
        v = d.useRef(false);
      return (
        n.trim() ||
          console.error(
            `Invalid prop \`label\` supplied to \`${Xf}\`. Expected non-empty \`string\`.`,
          ),
        c.jsx(Zf.Provider, {
          scope: t,
          children: c.jsx(Gk, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: d.useCallback(() => f((h) => h + 1), []),
            onToastRemove: d.useCallback(() => f((h) => h - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: v,
            children: i,
          }),
        })
      );
    };
  ux.displayName = Xf;
  var dx = "ToastViewport",
    Qk = ["F8"],
    Sd = "toast.viewportPause",
    Cd = "toast.viewportResume",
    fx = d.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          hotkey: r = Qk,
          label: o = "Notifications ({hotkey})",
          ...s
        } = e,
        i = Zl(dx, n),
        a = Vk(n),
        l = d.useRef(null),
        u = d.useRef(null),
        f = d.useRef(null),
        p = d.useRef(null),
        v = ge(t, p, i.onViewportChange),
        h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        b = i.toastCount > 0;
      (d.useEffect(() => {
        const x = (y) => {
          var w;
          r.length !== 0 &&
            r.every((C) => y[C] || y.code === C) &&
            ((w = p.current) == null || w.focus());
        };
        return (
          document.addEventListener("keydown", x),
          () => document.removeEventListener("keydown", x)
        );
      }, [r]),
        d.useEffect(() => {
          const x = l.current,
            y = p.current;
          if (b && x && y) {
            const g = () => {
                if (!i.isClosePausedRef.current) {
                  const T = new CustomEvent(Sd);
                  (y.dispatchEvent(T), (i.isClosePausedRef.current = true));
                }
              },
              w = () => {
                if (i.isClosePausedRef.current) {
                  const T = new CustomEvent(Cd);
                  (y.dispatchEvent(T), (i.isClosePausedRef.current = false));
                }
              },
              C = (T) => {
                !x.contains(T.relatedTarget) && w();
              },
              k = () => {
                x.contains(document.activeElement) || w();
              };
            return (
              x.addEventListener("focusin", g),
              x.addEventListener("focusout", C),
              x.addEventListener("pointermove", g),
              x.addEventListener("pointerleave", k),
              window.addEventListener("blur", g),
              window.addEventListener("focus", w),
              () => {
                (x.removeEventListener("focusin", g),
                  x.removeEventListener("focusout", C),
                  x.removeEventListener("pointermove", g),
                  x.removeEventListener("pointerleave", k),
                  window.removeEventListener("blur", g),
                  window.removeEventListener("focus", w));
              }
            );
          }
        }, [b, i.isClosePausedRef]));
      const m = d.useCallback(
        ({ tabbingDirection: x }) => {
          const g = a().map((w) => {
            const C = w.ref.current,
              k = [C, ...aE(C)];
            return x === "forwards" ? k : k.reverse();
          });
          return (x === "forwards" ? g.reverse() : g).flat();
        },
        [a],
      );
      return (
        d.useEffect(() => {
          const x = p.current;
          if (x) {
            const y = (g) => {
              var k, T, N;
              const w = g.altKey || g.ctrlKey || g.metaKey;
              if (g.key === "Tab" && !w) {
                const j = document.activeElement,
                  D = g.shiftKey;
                if (g.target === x && D) {
                  (k = u.current) == null || k.focus();
                  return;
                }
                const B = m({ tabbingDirection: D ? "backwards" : "forwards" }),
                  K = B.findIndex((F) => F === j);
                ou(B.slice(K + 1))
                  ? g.preventDefault()
                  : D
                    ? (T = u.current) == null || T.focus()
                    : (N = f.current) == null || N.focus();
              }
            };
            return (
              x.addEventListener("keydown", y),
              () => x.removeEventListener("keydown", y)
            );
          }
        }, [a, m]),
        c.jsxs(Ik, {
          ref: l,
          role: "region",
          "aria-label": o.replace("{hotkey}", h),
          tabIndex: -1,
          style: { pointerEvents: b ? void 0 : "none" },
          children: [
            b &&
              c.jsx(kd, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  const x = m({ tabbingDirection: "forwards" });
                  ou(x);
                },
              }),
            c.jsx(Zf.Slot, {
              scope: n,
              children: c.jsx(le.ol, { tabIndex: -1, ...s, ref: v }),
            }),
            b &&
              c.jsx(kd, {
                ref: f,
                onFocusFromOutsideViewport: () => {
                  const x = m({ tabbingDirection: "backwards" });
                  ou(x);
                },
              }),
          ],
        })
      );
    });
  fx.displayName = dx;
  var px = "ToastFocusProxy",
    kd = d.forwardRef((e, t) => {
      const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
        s = Zl(px, n);
      return c.jsx(Xl, {
        "aria-hidden": true,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var u;
          const a = i.relatedTarget;
          !((u = s.viewport) != null && u.contains(a)) && r();
        },
      });
    });
  kd.displayName = px;
  var Bi = "Toast",
    Kk = "toast.swipeStart",
    Yk = "toast.swipeMove",
    Xk = "toast.swipeCancel",
    Zk = "toast.swipeEnd",
    hx = d.forwardRef((e, t) => {
      const {
          forceMount: n,
          open: r,
          defaultOpen: o,
          onOpenChange: s,
          ...i
        } = e,
        [a, l] = Nr({
          prop: r,
          defaultProp: o ?? true,
          onChange: s,
          caller: Bi,
        });
      return c.jsx(go, {
        present: n || a,
        children: c.jsx(tE, {
          open: a,
          ...i,
          ref: t,
          onClose: () => l(false),
          onPause: ln(e.onPause),
          onResume: ln(e.onResume),
          onSwipeStart: oe(e.onSwipeStart, (u) => {
            u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: oe(e.onSwipeMove, (u) => {
            const { x: f, y: p } = u.detail.delta;
            (u.currentTarget.setAttribute("data-swipe", "move"),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${f}px`,
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${p}px`,
              ));
          }),
          onSwipeCancel: oe(e.onSwipeCancel, (u) => {
            (u.currentTarget.setAttribute("data-swipe", "cancel"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-end-y",
              ));
          }),
          onSwipeEnd: oe(e.onSwipeEnd, (u) => {
            const { x: f, y: p } = u.detail.delta;
            (u.currentTarget.setAttribute("data-swipe", "end"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x",
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y",
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${f}px`,
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${p}px`,
              ),
              l(false));
          }),
        }),
      });
    });
  hx.displayName = Bi;
  var [Jk, eE] = cx(Bi, { onClose() {} }),
    tE = d.forwardRef((e, t) => {
      const {
          __scopeToast: n,
          type: r = "foreground",
          duration: o,
          open: s,
          onClose: i,
          onEscapeKeyDown: a,
          onPause: l,
          onResume: u,
          onSwipeStart: f,
          onSwipeMove: p,
          onSwipeCancel: v,
          onSwipeEnd: h,
          ...b
        } = e,
        m = Zl(Bi, n),
        [x, y] = d.useState(null),
        g = ge(t, (F) => y(F)),
        w = d.useRef(null),
        C = d.useRef(null),
        k = o || m.duration,
        T = d.useRef(0),
        N = d.useRef(k),
        j = d.useRef(0),
        { onToastAdd: D, onToastRemove: I } = m,
        $ = ln(() => {
          var te;
          ((x == null ? void 0 : x.contains(document.activeElement)) &&
            ((te = m.viewport) == null || te.focus()),
            i());
        }),
        B = d.useCallback(
          (F) => {
            !F ||
              F === 1 / 0 ||
              (window.clearTimeout(j.current),
              (T.current = new Date().getTime()),
              (j.current = window.setTimeout($, F)));
          },
          [$],
        );
      (d.useEffect(() => {
        const F = m.viewport;
        if (F) {
          const te = () => {
              (B(N.current), u == null || u());
            },
            G = () => {
              const H = new Date().getTime() - T.current;
              ((N.current = N.current - H),
                window.clearTimeout(j.current),
                l == null || l());
            };
          return (
            F.addEventListener(Sd, G),
            F.addEventListener(Cd, te),
            () => {
              (F.removeEventListener(Sd, G), F.removeEventListener(Cd, te));
            }
          );
        }
      }, [m.viewport, k, l, u, B]),
        d.useEffect(() => {
          s && !m.isClosePausedRef.current && B(k);
        }, [s, k, m.isClosePausedRef, B]),
        d.useEffect(() => (D(), () => I()), [D, I]));
      const K = d.useMemo(() => (x ? bx(x) : null), [x]);
      return m.viewport
        ? c.jsxs(c.Fragment, {
            children: [
              K &&
                c.jsx(nE, {
                  __scopeToast: n,
                  role: "status",
                  "aria-live": r === "foreground" ? "assertive" : "polite",
                  "aria-atomic": true,
                  children: K,
                }),
              c.jsx(Jk, {
                scope: n,
                onClose: $,
                children: Ht.createPortal(
                  c.jsx(Zf.ItemSlot, {
                    scope: n,
                    children: c.jsx(Ok, {
                      asChild: true,
                      onEscapeKeyDown: oe(a, () => {
                        (m.isFocusedToastEscapeKeyDownRef.current || $(),
                          (m.isFocusedToastEscapeKeyDownRef.current = false));
                      }),
                      children: c.jsx(le.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": true,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...b,
                        ref: g,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style,
                        },
                        onKeyDown: oe(e.onKeyDown, (F) => {
                          F.key === "Escape" &&
                            (a == null || a(F.nativeEvent),
                            F.nativeEvent.defaultPrevented ||
                              ((m.isFocusedToastEscapeKeyDownRef.current = true),
                              $()));
                        }),
                        onPointerDown: oe(e.onPointerDown, (F) => {
                          F.button === 0 &&
                            (w.current = { x: F.clientX, y: F.clientY });
                        }),
                        onPointerMove: oe(e.onPointerMove, (F) => {
                          if (!w.current) return;
                          const te = F.clientX - w.current.x,
                            G = F.clientY - w.current.y,
                            H = !!C.current,
                            A = ["left", "right"].includes(m.swipeDirection),
                            P = ["left", "up"].includes(m.swipeDirection)
                              ? Math.min
                              : Math.max,
                            E = A ? P(0, te) : 0,
                            S = A ? 0 : P(0, G),
                            R = F.pointerType === "touch" ? 10 : 2,
                            L = { x: E, y: S },
                            z = { originalEvent: F, delta: L };
                          H
                            ? ((C.current = L),
                              ga(Yk, p, z, { discrete: false }))
                            : wm(L, m.swipeDirection, R)
                              ? ((C.current = L),
                                ga(Kk, f, z, { discrete: false }),
                                F.target.setPointerCapture(F.pointerId))
                              : (Math.abs(te) > R || Math.abs(G) > R) &&
                                (w.current = null);
                        }),
                        onPointerUp: oe(e.onPointerUp, (F) => {
                          const te = C.current,
                            G = F.target;
                          if (
                            (G.hasPointerCapture(F.pointerId) &&
                              G.releasePointerCapture(F.pointerId),
                            (C.current = null),
                            (w.current = null),
                            te)
                          ) {
                            const H = F.currentTarget,
                              A = { originalEvent: F, delta: te };
                            (wm(te, m.swipeDirection, m.swipeThreshold)
                              ? ga(Zk, h, A, { discrete: true })
                              : ga(Xk, v, A, { discrete: true }),
                              H.addEventListener(
                                "click",
                                (P) => P.preventDefault(),
                                { once: true },
                              ));
                          }
                        }),
                      }),
                    }),
                  }),
                  m.viewport,
                ),
              }),
            ],
          })
        : null;
    }),
    nE = (e) => {
      const { __scopeToast: t, children: n, ...r } = e,
        o = Zl(Bi, t),
        [s, i] = d.useState(false),
        [a, l] = d.useState(false);
      return (
        sE(() => i(true)),
        d.useEffect(() => {
          const u = window.setTimeout(() => l(true), 1e3);
          return () => window.clearTimeout(u);
        }, []),
        a
          ? null
          : c.jsx(Yl, {
              asChild: true,
              children: c.jsx(Xl, {
                ...r,
                children:
                  s && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
              }),
            })
      );
    },
    rE = "ToastTitle",
    mx = d.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return c.jsx(le.div, { ...r, ref: t });
    });
  mx.displayName = rE;
  var oE = "ToastDescription",
    gx = d.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e;
      return c.jsx(le.div, { ...r, ref: t });
    });
  gx.displayName = oE;
  var vx = "ToastAction",
    yx = d.forwardRef((e, t) => {
      const { altText: n, ...r } = e;
      return n.trim()
        ? c.jsx(wx, {
            altText: n,
            asChild: true,
            children: c.jsx(Jf, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${vx}\`. Expected non-empty \`string\`.`,
          ),
          null);
    });
  yx.displayName = vx;
  var xx = "ToastClose",
    Jf = d.forwardRef((e, t) => {
      const { __scopeToast: n, ...r } = e,
        o = eE(xx, n);
      return c.jsx(wx, {
        asChild: true,
        children: c.jsx(le.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: oe(e.onClick, o.onClose),
        }),
      });
    });
  Jf.displayName = xx;
  var wx = d.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return c.jsx(le.div, {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t,
    });
  });
  function bx(e) {
    const t = [];
    return (
      Array.from(e.childNodes).forEach((r) => {
        if (
          (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
          iE(r))
        ) {
          const o = r.ariaHidden || r.hidden || r.style.display === "none",
            s = r.dataset.radixToastAnnounceExclude === "";
          if (!o)
            if (s) {
              const i = r.dataset.radixToastAnnounceAlt;
              i && t.push(i);
            } else t.push(...bx(r));
        }
      }),
      t
    );
  }
  function ga(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
      s = new CustomEvent(e, { bubbles: true, cancelable: true, detail: n });
    (t && o.addEventListener(e, t, { once: true }),
      r ? ox(o, s) : o.dispatchEvent(s));
  }
  var wm = (e, t, n = 0) => {
    const r = Math.abs(e.x),
      o = Math.abs(e.y),
      s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n;
  };
  function sE(e = () => {}) {
    const t = ln(e);
    Ze(() => {
      let n = 0,
        r = 0;
      return (
        (n = window.requestAnimationFrame(
          () => (r = window.requestAnimationFrame(t)),
        )),
        () => {
          (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
        }
      );
    }, [t]);
  }
  function iE(e) {
    return e.nodeType === e.ELEMENT_NODE;
  }
  function aE(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (r) => {
          const o = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || o
            ? NodeFilter.FILTER_SKIP
            : r.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode();) t.push(n.currentNode);
    return t;
  }
  function ou(e) {
    const t = document.activeElement;
    return e.some((n) =>
      n === t ? true : (n.focus(), document.activeElement !== t),
    );
  }
  var lE = ux,
    Sx = fx,
    Cx = hx,
    kx = mx,
    Ex = gx,
    Tx = yx,
    Nx = Jf;
  function Px(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Px(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function jx() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = Px(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const bm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Sm = jx,
    Rx = (e, t) => (n) => {
      var r;
      if ((t == null ? void 0 : t.variants) == null)
        return Sm(
          e,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className,
        );
      const { variants: o, defaultVariants: s } = t,
        i = Object.keys(o).map((u) => {
          const f = n == null ? void 0 : n[u],
            p = s == null ? void 0 : s[u];
          if (f === null) return null;
          const v = bm(f) || bm(p);
          return o[u][v];
        }),
        a =
          n &&
          Object.entries(n).reduce((u, f) => {
            let [p, v] = f;
            return (v === void 0 || (u[p] = v), u);
          }, {}),
        l =
          t == null || (r = t.compoundVariants) === null || r === void 0
            ? void 0
            : r.reduce((u, f) => {
                let { class: p, className: v, ...h } = f;
                return Object.entries(h).every((b) => {
                  let [m, x] = b;
                  return Array.isArray(x)
                    ? x.includes({ ...s, ...a }[m])
                    : { ...s, ...a }[m] === x;
                })
                  ? [...u, p, v]
                  : u;
              }, []);
      return Sm(
        e,
        i,
        l,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const cE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Ax = (...e) =>
      e
        .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
        .join(" ")
        .trim();
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var uE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const dE = d.forwardRef(
    (
      {
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: o = "",
        children: s,
        iconNode: i,
        ...a
      },
      l,
    ) =>
      d.createElement(
        "svg",
        {
          ref: l,
          ...uE,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Ax("lucide", o),
          ...a,
        },
        [
          ...i.map(([u, f]) => d.createElement(u, f)),
          ...(Array.isArray(s) ? s : [s]),
        ],
      ),
  );
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Je = (e, t) => {
    const n = d.forwardRef(({ className: r, ...o }, s) =>
      d.createElement(dE, {
        ref: s,
        iconNode: t,
        className: Ax(`lucide-${cE(e)}`, r),
        ...o,
      }),
    );
    return ((n.displayName = `${e}`), n);
  };
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const fE = Je("Check", [
    ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const tp = Je("ChevronDown", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const pE = Je("ChevronUp", [
    ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const hE = Je("ClipboardPaste", [
    [
      "path",
      {
        d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",
        key: "1pp7kr",
      },
    ],
    [
      "path",
      {
        d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
        key: "2ik1ml",
      },
    ],
    ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const wE = Je("Lock", [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const bE = Je("Maximize", [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const CE = Je("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Dx = Je("Trash2", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
  ]);
  /**
   * @license lucide-react v0.462.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const Jl = Je("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    np = "-",
    TE = (e) => {
      const t = PE(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
      return {
        getClassGroupId: (i) => {
          const a = i.split(np);
          return (
            a[0] === "" && a.length !== 1 && a.shift(),
            Mx(a, t) || NE(i)
          );
        },
        getConflictingClassGroupIds: (i, a) => {
          const l = n[i] || [];
          return a && r[i] ? [...l, ...r[i]] : l;
        },
      };
    },
    Mx = (e, t) => {
      var i;
      if (e.length === 0) return t.classGroupId;
      const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Mx(e.slice(1), r) : void 0;
      if (o) return o;
      if (t.validators.length === 0) return;
      const s = e.join(np);
      return (i = t.validators.find(({ validator: a }) => a(s))) == null
        ? void 0
        : i.classGroupId;
    },
    Cm = /^\[(.+)\]$/,
    NE = (e) => {
      if (Cm.test(e)) {
        const t = Cm.exec(e)[1],
          n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    PE = (e) => {
      const { theme: t, prefix: n } = e,
        r = { nextPart: new Map(), validators: [] };
      return (
        RE(Object.entries(e.classGroups), n).forEach(([s, i]) => {
          Ed(i, r, s, t);
        }),
        r
      );
    },
    Ed = (e, t, n, r) => {
      e.forEach((o) => {
        if (typeof o == "string") {
          const s = o === "" ? t : km(t, o);
          s.classGroupId = n;
          return;
        }
        if (typeof o == "function") {
          if (jE(o)) {
            Ed(o(r), t, n, r);
            return;
          }
          t.validators.push({ validator: o, classGroupId: n });
          return;
        }
        Object.entries(o).forEach(([s, i]) => {
          Ed(i, km(t, s), n, r);
        });
      });
    },
    km = (e, t) => {
      let n = e;
      return (
        t.split(np).forEach((r) => {
          (n.nextPart.has(r) ||
            n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(r)));
        }),
        n
      );
    },
    jE = (e) => e.isThemeGetter,
    RE = (e, t) =>
      t
        ? e.map(([n, r]) => {
            const o = r.map((s) =>
              typeof s == "string"
                ? t + s
                : typeof s == "object"
                  ? Object.fromEntries(
                      Object.entries(s).map(([i, a]) => [t + i, a]),
                    )
                  : s,
            );
            return [n, o];
          })
        : e,
    AE = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        n = new Map(),
        r = new Map();
      const o = (s, i) => {
        (n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map())));
      };
      return {
        get(s) {
          let i = n.get(s);
          if (i !== void 0) return i;
          if ((i = r.get(s)) !== void 0) return (o(s, i), i);
        },
        set(s, i) {
          n.has(s) ? n.set(s, i) : o(s, i);
        },
      };
    },
    Ox = "!",
    DE = (e) => {
      const { separator: t, experimentalParseClassName: n } = e,
        r = t.length === 1,
        o = t[0],
        s = t.length,
        i = (a) => {
          const l = [];
          let u = 0,
            f = 0,
            p;
          for (let x = 0; x < a.length; x++) {
            let y = a[x];
            if (u === 0) {
              if (y === o && (r || a.slice(x, x + s) === t)) {
                (l.push(a.slice(f, x)), (f = x + s));
                continue;
              }
              if (y === "/") {
                p = x;
                continue;
              }
            }
            y === "[" ? u++ : y === "]" && u--;
          }
          const v = l.length === 0 ? a : a.substring(f),
            h = v.startsWith(Ox),
            b = h ? v.substring(1) : v,
            m = p && p > f ? p - f : void 0;
          return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: b,
            maybePostfixModifierPosition: m,
          };
        };
      return n ? (a) => n({ className: a, parseClassName: i }) : i;
    },
    ME = (e) => {
      if (e.length <= 1) return e;
      const t = [];
      let n = [];
      return (
        e.forEach((r) => {
          r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
        }),
        t.push(...n.sort()),
        t
      );
    },
    OE = (e) => ({ cache: AE(e.cacheSize), parseClassName: DE(e), ...TE(e) }),
    IE = /\s+/,
    _E = (e, t) => {
      const {
          parseClassName: n,
          getClassGroupId: r,
          getConflictingClassGroupIds: o,
        } = t,
        s = [],
        i = e.trim().split(IE);
      let a = "";
      for (let l = i.length - 1; l >= 0; l -= 1) {
        const u = i[l],
          {
            modifiers: f,
            hasImportantModifier: p,
            baseClassName: v,
            maybePostfixModifierPosition: h,
          } = n(u);
        let b = !!h,
          m = r(b ? v.substring(0, h) : v);
        if (!m) {
          if (!b) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          if (((m = r(v)), !m)) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          b = false;
        }
        const x = ME(f).join(":"),
          y = p ? x + Ox : x,
          g = y + m;
        if (s.includes(g)) continue;
        s.push(g);
        const w = o(m, b);
        for (let C = 0; C < w.length; ++C) {
          const k = w[C];
          s.push(y + k);
        }
        a = u + (a.length > 0 ? " " + a : a);
      }
      return a;
    };
  function LE() {
    let e = 0,
      t,
      n,
      r = "";
    for (; e < arguments.length;)
      (t = arguments[e++]) && (n = Ix(t)) && (r && (r += " "), (r += n));
    return r;
  }
  const Ix = (e) => {
    if (typeof e == "string") return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Ix(e[r])) && (n && (n += " "), (n += t));
    return n;
  };
  function FE(e, ...t) {
    let n,
      r,
      o,
      s = i;
    function i(l) {
      const u = t.reduce((f, p) => p(f), e());
      return ((n = OE(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l));
    }
    function a(l) {
      const u = r(l);
      if (u) return u;
      const f = _E(l, n);
      return (o(l, f), f);
    }
    return function () {
      return s(LE.apply(null, arguments));
    };
  }
  const ke = (e) => {
      const t = (n) => n[e] || [];
      return ((t.isThemeGetter = true), t);
    },
    _x = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    zE = /^\d+\/\d+$/,
    $E = new Set(["px", "full", "screen"]),
    BE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    WE =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    UE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    HE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    VE =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Mn = (e) => Uo(e) || $E.has(e) || zE.test(e),
    Zn = (e) => hs(e, "length", JE),
    Uo = (e) => !!e && !Number.isNaN(Number(e)),
    su = (e) => hs(e, "number", Uo),
    zs = (e) => !!e && Number.isInteger(Number(e)),
    qE = (e) => e.endsWith("%") && Uo(e.slice(0, -1)),
    ue = (e) => _x.test(e),
    Jn = (e) => BE.test(e),
    GE = new Set(["length", "size", "percentage"]),
    QE = (e) => hs(e, GE, Lx),
    KE = (e) => hs(e, "position", Lx),
    YE = new Set(["image", "url"]),
    XE = (e) => hs(e, YE, tT),
    ZE = (e) => hs(e, "", eT),
    $s = () => true,
    hs = (e, t, n) => {
      const r = _x.exec(e);
      return r
        ? r[1]
          ? typeof t == "string"
            ? r[1] === t
            : t.has(r[1])
          : n(r[2])
        : false;
    },
    JE = (e) => WE.test(e) && !UE.test(e),
    Lx = () => false,
    eT = (e) => HE.test(e),
    tT = (e) => VE.test(e),
    nT = () => {
      const e = ke("colors"),
        t = ke("spacing"),
        n = ke("blur"),
        r = ke("brightness"),
        o = ke("borderColor"),
        s = ke("borderRadius"),
        i = ke("borderSpacing"),
        a = ke("borderWidth"),
        l = ke("contrast"),
        u = ke("grayscale"),
        f = ke("hueRotate"),
        p = ke("invert"),
        v = ke("gap"),
        h = ke("gradientColorStops"),
        b = ke("gradientColorStopPositions"),
        m = ke("inset"),
        x = ke("margin"),
        y = ke("opacity"),
        g = ke("padding"),
        w = ke("saturate"),
        C = ke("scale"),
        k = ke("sepia"),
        T = ke("skew"),
        N = ke("space"),
        j = ke("translate"),
        D = () => ["auto", "contain", "none"],
        I = () => ["auto", "hidden", "clip", "visible", "scroll"],
        $ = () => ["auto", ue, t],
        B = () => [ue, t],
        K = () => ["", Mn, Zn],
        F = () => ["auto", Uo, ue],
        te = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        G = () => ["solid", "dashed", "dotted", "double", "none"],
        H = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        A = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        P = () => ["", "0", ue],
        E = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        S = () => [Uo, ue];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [$s],
          spacing: [Mn, Zn],
          blur: ["none", "", Jn, ue],
          brightness: S(),
          borderColor: [e],
          borderRadius: ["none", "", "full", Jn, ue],
          borderSpacing: B(),
          borderWidth: K(),
          contrast: S(),
          grayscale: P(),
          hueRotate: S(),
          invert: P(),
          gap: B(),
          gradientColorStops: [e],
          gradientColorStopPositions: [qE, Zn],
          inset: $(),
          margin: $(),
          opacity: S(),
          padding: B(),
          saturate: S(),
          scale: S(),
          sepia: P(),
          skew: S(),
          space: B(),
          translate: B(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", ue] }],
          container: ["container"],
          columns: [{ columns: [Jn] }],
          "break-after": [{ "break-after": E() }],
          "break-before": [{ "break-before": E() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...te(), ue] }],
          overflow: [{ overflow: I() }],
          "overflow-x": [{ "overflow-x": I() }],
          "overflow-y": [{ "overflow-y": I() }],
          overscroll: [{ overscroll: D() }],
          "overscroll-x": [{ "overscroll-x": D() }],
          "overscroll-y": [{ "overscroll-y": D() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [m] }],
          "inset-x": [{ "inset-x": [m] }],
          "inset-y": [{ "inset-y": [m] }],
          start: [{ start: [m] }],
          end: [{ end: [m] }],
          top: [{ top: [m] }],
          right: [{ right: [m] }],
          bottom: [{ bottom: [m] }],
          left: [{ left: [m] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", zs, ue] }],
          basis: [{ basis: $() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", ue] }],
          grow: [{ grow: P() }],
          shrink: [{ shrink: P() }],
          order: [{ order: ["first", "last", "none", zs, ue] }],
          "grid-cols": [{ "grid-cols": [$s] }],
          "col-start-end": [{ col: ["auto", { span: ["full", zs, ue] }, ue] }],
          "col-start": [{ "col-start": F() }],
          "col-end": [{ "col-end": F() }],
          "grid-rows": [{ "grid-rows": [$s] }],
          "row-start-end": [{ row: ["auto", { span: [zs, ue] }, ue] }],
          "row-start": [{ "row-start": F() }],
          "row-end": [{ "row-end": F() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ue] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ue] }],
          gap: [{ gap: [v] }],
          "gap-x": [{ "gap-x": [v] }],
          "gap-y": [{ "gap-y": [v] }],
          "justify-content": [{ justify: ["normal", ...A()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...A(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...A(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [g] }],
          px: [{ px: [g] }],
          py: [{ py: [g] }],
          ps: [{ ps: [g] }],
          pe: [{ pe: [g] }],
          pt: [{ pt: [g] }],
          pr: [{ pr: [g] }],
          pb: [{ pb: [g] }],
          pl: [{ pl: [g] }],
          m: [{ m: [x] }],
          mx: [{ mx: [x] }],
          my: [{ my: [x] }],
          ms: [{ ms: [x] }],
          me: [{ me: [x] }],
          mt: [{ mt: [x] }],
          mr: [{ mr: [x] }],
          mb: [{ mb: [x] }],
          ml: [{ ml: [x] }],
          "space-x": [{ "space-x": [N] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [N] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ue, t] }],
          "min-w": [{ "min-w": [ue, t, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                ue,
                t,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [Jn] },
                Jn,
              ],
            },
          ],
          h: [{ h: [ue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [ue, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [ue, t, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", Jn, Zn] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                su,
              ],
            },
          ],
          "font-family": [{ font: [$s] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                ue,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", Uo, su] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                Mn,
                ue,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", ue] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", ue] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [y] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [y] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", Mn, Zn] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", Mn, ue] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: B() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                ue,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", ue] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [y] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...te(), KE] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", QE] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                XE,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [b] }],
          "gradient-via-pos": [{ via: [b] }],
          "gradient-to-pos": [{ to: [b] }],
          "gradient-from": [{ from: [h] }],
          "gradient-via": [{ via: [h] }],
          "gradient-to": [{ to: [h] }],
          rounded: [{ rounded: [s] }],
          "rounded-s": [{ "rounded-s": [s] }],
          "rounded-e": [{ "rounded-e": [s] }],
          "rounded-t": [{ "rounded-t": [s] }],
          "rounded-r": [{ "rounded-r": [s] }],
          "rounded-b": [{ "rounded-b": [s] }],
          "rounded-l": [{ "rounded-l": [s] }],
          "rounded-ss": [{ "rounded-ss": [s] }],
          "rounded-se": [{ "rounded-se": [s] }],
          "rounded-ee": [{ "rounded-ee": [s] }],
          "rounded-es": [{ "rounded-es": [s] }],
          "rounded-tl": [{ "rounded-tl": [s] }],
          "rounded-tr": [{ "rounded-tr": [s] }],
          "rounded-br": [{ "rounded-br": [s] }],
          "rounded-bl": [{ "rounded-bl": [s] }],
          "border-w": [{ border: [a] }],
          "border-w-x": [{ "border-x": [a] }],
          "border-w-y": [{ "border-y": [a] }],
          "border-w-s": [{ "border-s": [a] }],
          "border-w-e": [{ "border-e": [a] }],
          "border-w-t": [{ "border-t": [a] }],
          "border-w-r": [{ "border-r": [a] }],
          "border-w-b": [{ "border-b": [a] }],
          "border-w-l": [{ "border-l": [a] }],
          "border-opacity": [{ "border-opacity": [y] }],
          "border-style": [{ border: [...G(), "hidden"] }],
          "divide-x": [{ "divide-x": [a] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [a] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [y] }],
          "divide-style": [{ divide: G() }],
          "border-color": [{ border: [o] }],
          "border-color-x": [{ "border-x": [o] }],
          "border-color-y": [{ "border-y": [o] }],
          "border-color-s": [{ "border-s": [o] }],
          "border-color-e": [{ "border-e": [o] }],
          "border-color-t": [{ "border-t": [o] }],
          "border-color-r": [{ "border-r": [o] }],
          "border-color-b": [{ "border-b": [o] }],
          "border-color-l": [{ "border-l": [o] }],
          "divide-color": [{ divide: [o] }],
          "outline-style": [{ outline: ["", ...G()] }],
          "outline-offset": [{ "outline-offset": [Mn, ue] }],
          "outline-w": [{ outline: [Mn, Zn] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: K() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [y] }],
          "ring-offset-w": [{ "ring-offset": [Mn, Zn] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", Jn, ZE] }],
          "shadow-color": [{ shadow: [$s] }],
          opacity: [{ opacity: [y] }],
          "mix-blend": [
            { "mix-blend": [...H(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": H() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [l] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", Jn, ue] }],
          grayscale: [{ grayscale: [u] }],
          "hue-rotate": [{ "hue-rotate": [f] }],
          invert: [{ invert: [p] }],
          saturate: [{ saturate: [w] }],
          sepia: [{ sepia: [k] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [l] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
          "backdrop-invert": [{ "backdrop-invert": [p] }],
          "backdrop-opacity": [{ "backdrop-opacity": [y] }],
          "backdrop-saturate": [{ "backdrop-saturate": [w] }],
          "backdrop-sepia": [{ "backdrop-sepia": [k] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [i] }],
          "border-spacing-x": [{ "border-spacing-x": [i] }],
          "border-spacing-y": [{ "border-spacing-y": [i] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                ue,
              ],
            },
          ],
          duration: [{ duration: S() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", ue] }],
          delay: [{ delay: S() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", ue] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [C] }],
          "scale-x": [{ "scale-x": [C] }],
          "scale-y": [{ "scale-y": [C] }],
          rotate: [{ rotate: [zs, ue] }],
          "translate-x": [{ "translate-x": [j] }],
          "translate-y": [{ "translate-y": [j] }],
          "skew-x": [{ "skew-x": [T] }],
          "skew-y": [{ "skew-y": [T] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                ue,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                ue,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": B() }],
          "scroll-mx": [{ "scroll-mx": B() }],
          "scroll-my": [{ "scroll-my": B() }],
          "scroll-ms": [{ "scroll-ms": B() }],
          "scroll-me": [{ "scroll-me": B() }],
          "scroll-mt": [{ "scroll-mt": B() }],
          "scroll-mr": [{ "scroll-mr": B() }],
          "scroll-mb": [{ "scroll-mb": B() }],
          "scroll-ml": [{ "scroll-ml": B() }],
          "scroll-p": [{ "scroll-p": B() }],
          "scroll-px": [{ "scroll-px": B() }],
          "scroll-py": [{ "scroll-py": B() }],
          "scroll-ps": [{ "scroll-ps": B() }],
          "scroll-pe": [{ "scroll-pe": B() }],
          "scroll-pt": [{ "scroll-pt": B() }],
          "scroll-pr": [{ "scroll-pr": B() }],
          "scroll-pb": [{ "scroll-pb": B() }],
          "scroll-pl": [{ "scroll-pl": B() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", ue] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [Mn, Zn, su] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    },
    rT = FE(nT);
  function be(...e) {
    return rT(jx(e));
  }
  const Fx = d.forwardRef(({ className: e, ...t }, n) =>
      c.jsx(Sx, {
        ref: n,
        className: be(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          e,
        ),
        ...t,
      }),
    );
  Fx.displayName = Sx.displayName;
  const sT = Rx(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
      {
        variants: {
          variant: {
            default: "border bg-background text-foreground",
            destructive:
              "destructive group border-destructive bg-destructive text-destructive-foreground",
          },
        },
        defaultVariants: { variant: "default" },
      },
    ),
    zx = d.forwardRef(({ className: e, variant: t, ...n }, r) =>
      c.jsx(Cx, { ref: r, className: be(sT({ variant: t }), e), ...n }),
    );
  zx.displayName = Cx.displayName;
  const iT = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Tx, {
      ref: n,
      className: be(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
        e,
      ),
      ...t,
    }),
  );
  iT.displayName = Tx.displayName;
  const $x = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Nx, {
      ref: n,
      className: be(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        e,
      ),
      "toast-close": "",
      ...t,
      children: c.jsx(Jl, { className: "h-4 w-4" }),
    }),
  );
  $x.displayName = Nx.displayName;
  const Bx = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(kx, { ref: n, className: be("text-sm font-semibold", e), ...t }),
  );
  Bx.displayName = kx.displayName;
  const Wx = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Ex, { ref: n, className: be("text-sm opacity-90", e), ...t }),
  );
  Wx.displayName = Ex.displayName;
  var Em = ["light", "dark"],
    lT = "(prefers-color-scheme: dark)",
    cT = d.createContext(void 0),
    uT = { setTheme: () => {}, themes: [] };
  d.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: n,
      enableSystem: r,
      enableColorScheme: o,
      defaultTheme: s,
      value: i,
      attrs: a,
      nonce: l,
    }) => {
      let u = s === "system",
        f =
          n === "class"
            ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
            : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        p = o
          ? Em.includes(s) && s
            ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
            : "if(e==='light'||e==='dark')d.style.colorScheme=e"
          : "",
        v = (b, m = false, x = true) => {
          let y = i ? i[b] : b,
            g = m ? b + "|| ''" : `'${y}'`,
            w = "";
          return (
            o &&
              x &&
              !m &&
              Em.includes(b) &&
              (w += `d.style.colorScheme = '${b}';`),
            n === "class"
              ? m || y
                ? (w += `c.add(${g})`)
                : (w += "null")
              : y && (w += `d[s](n,${g})`),
            w
          );
        },
        h = e
          ? `!function(){${f}${v(e)}}()`
          : r
            ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${lT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${v(i ? "x[e]" : "e", true)}}${u ? "" : "else{" + v(s, false, false) + "}"}${p}}catch(e){}}()`
            : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${v(i ? "x[e]" : "e", true)}}else{${v(s, false, false)};}${p}}catch(t){}}();`;
      return d.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: { __html: h },
      });
    },
  );
  var fT = (e) => {
      switch (e) {
        case "success":
          return mT;
        case "info":
          return vT;
        case "warning":
          return gT;
        case "error":
          return yT;
        default:
          return null;
      }
    },
    pT = Array(12).fill(0),
    hT = ({ visible: e, className: t }) =>
      O.createElement(
        "div",
        {
          className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
          "data-visible": e,
        },
        O.createElement(
          "div",
          { className: "sonner-spinner" },
          pT.map((n, r) =>
            O.createElement("div", {
              className: "sonner-loading-bar",
              key: `spinner-bar-${r}`,
            }),
          ),
        ),
      ),
    mT = O.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      O.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      }),
    ),
    gT = O.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      O.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      }),
    ),
    vT = O.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      O.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      }),
    ),
    yT = O.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      O.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      }),
    ),
    xT = O.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    ),
    wT = () => {
      let [e, t] = O.useState(document.hidden);
      return (
        O.useEffect(() => {
          let n = () => {
            t(document.hidden);
          };
          return (
            document.addEventListener("visibilitychange", n),
            () => window.removeEventListener("visibilitychange", n)
          );
        }, []),
        e
      );
    },
    Td = 1,
    bT = class {
      constructor() {
        ((this.subscribe = (e) => (
          this.subscribers.push(e),
          () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1);
          }
        )),
          (this.publish = (e) => {
            this.subscribers.forEach((t) => t(e));
          }),
          (this.addToast = (e) => {
            (this.publish(e), (this.toasts = [...this.toasts, e]));
          }),
          (this.create = (e) => {
            var t;
            let { message: n, ...r } = e,
              o =
                typeof (e == null ? void 0 : e.id) == "number" ||
                ((t = e.id) == null ? void 0 : t.length) > 0
                  ? e.id
                  : Td++,
              s = this.toasts.find((a) => a.id === o),
              i = e.dismissible === void 0 ? true : e.dismissible;
            return (
              this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
              s
                ? (this.toasts = this.toasts.map((a) =>
                    a.id === o
                      ? (this.publish({ ...a, ...e, id: o, title: n }),
                        { ...a, ...e, id: o, dismissible: i, title: n })
                      : a,
                  ))
                : this.addToast({ title: n, ...r, dismissible: i, id: o }),
              o
            );
          }),
          (this.dismiss = (e) => (
            this.dismissedToasts.add(e),
            e ||
              this.toasts.forEach((t) => {
                this.subscribers.forEach((n) => n({ id: t.id, dismiss: true }));
              }),
            this.subscribers.forEach((t) => t({ id: e, dismiss: true })),
            e
          )),
          (this.message = (e, t) => this.create({ ...t, message: e })),
          (this.error = (e, t) =>
            this.create({ ...t, message: e, type: "error" })),
          (this.success = (e, t) =>
            this.create({ ...t, type: "success", message: e })),
          (this.info = (e, t) =>
            this.create({ ...t, type: "info", message: e })),
          (this.warning = (e, t) =>
            this.create({ ...t, type: "warning", message: e })),
          (this.loading = (e, t) =>
            this.create({ ...t, type: "loading", message: e })),
          (this.promise = (e, t) => {
            if (!t) return;
            let n;
            t.loading !== void 0 &&
              (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  typeof t.description != "function" ? t.description : void 0,
              }));
            let r = e instanceof Promise ? e : e(),
              o = n !== void 0,
              s,
              i = r
                .then(async (l) => {
                  if (((s = ["resolve", l]), O.isValidElement(l)))
                    ((o = false),
                      this.create({ id: n, type: "default", message: l }));
                  else if (CT(l) && !l.ok) {
                    o = false;
                    let u =
                        typeof t.error == "function"
                          ? await t.error(`HTTP error! status: ${l.status}`)
                          : t.error,
                      f =
                        typeof t.description == "function"
                          ? await t.description(
                              `HTTP error! status: ${l.status}`,
                            )
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: u,
                      description: f,
                    });
                  } else if (t.success !== void 0) {
                    o = false;
                    let u =
                        typeof t.success == "function"
                          ? await t.success(l)
                          : t.success,
                      f =
                        typeof t.description == "function"
                          ? await t.description(l)
                          : t.description;
                    this.create({
                      id: n,
                      type: "success",
                      message: u,
                      description: f,
                    });
                  }
                })
                .catch(async (l) => {
                  if (((s = ["reject", l]), t.error !== void 0)) {
                    o = false;
                    let u =
                        typeof t.error == "function"
                          ? await t.error(l)
                          : t.error,
                      f =
                        typeof t.description == "function"
                          ? await t.description(l)
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: u,
                      description: f,
                    });
                  }
                })
                .finally(() => {
                  var l;
                  (o && (this.dismiss(n), (n = void 0)),
                    (l = t.finally) == null || l.call(t));
                }),
              a = () =>
                new Promise((l, u) =>
                  i
                    .then(() => (s[0] === "reject" ? u(s[1]) : l(s[1])))
                    .catch(u),
                );
            return typeof n != "string" && typeof n != "number"
              ? { unwrap: a }
              : Object.assign(n, { unwrap: a });
          }),
          (this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Td++;
            return (this.create({ jsx: e(n), id: n, ...t }), n);
          }),
          (this.getActiveToasts = () =>
            this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
          (this.subscribers = []),
          (this.toasts = []),
          (this.dismissedToasts = new Set()));
      }
    },
    wt = new bT(),
    ST = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Td++;
      return (wt.addToast({ title: e, ...t, id: n }), n);
    },
    CT = (e) =>
      e &&
      typeof e == "object" &&
      "ok" in e &&
      typeof e.ok == "boolean" &&
      "status" in e &&
      typeof e.status == "number",
    kT = ST,
    ET = () => wt.toasts,
    TT = () => wt.getActiveToasts();
  Object.assign(
    kT,
    {
      success: wt.success,
      info: wt.info,
      warning: wt.warning,
      error: wt.error,
      custom: wt.custom,
      message: wt.message,
      promise: wt.promise,
      dismiss: wt.dismiss,
      loading: wt.loading,
    },
    { getHistory: ET, getToasts: TT },
  );
  function NT(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    ((r.type = "text/css"),
      t === "top" && n.firstChild
        ? n.insertBefore(r, n.firstChild)
        : n.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = e)
        : r.appendChild(document.createTextNode(e)));
  }
  NT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function va(e) {
    return e.label !== void 0;
  }
  var PT = 3,
    jT = "32px",
    RT = "16px",
    Tm = 4e3,
    AT = 356,
    DT = 14,
    MT = 20,
    OT = 200;
  function Kt(...e) {
    return e.filter(Boolean).join(" ");
  }
  function IT(e) {
    let [t, n] = e.split("-"),
      r = [];
    return (t && r.push(t), n && r.push(n), r);
  }
  var _T = (e) => {
    var t, n, r, o, s, i, a, l, u, f, p;
    let {
        invert: v,
        toast: h,
        unstyled: b,
        interacting: m,
        setHeights: x,
        visibleToasts: y,
        heights: g,
        index: w,
        toasts: C,
        expanded: k,
        removeToast: T,
        defaultRichColors: N,
        closeButton: j,
        style: D,
        cancelButtonStyle: I,
        actionButtonStyle: $,
        className: B = "",
        descriptionClassName: K = "",
        duration: F,
        position: te,
        gap: G,
        loadingIcon: H,
        expandByDefault: A,
        classNames: P,
        icons: E,
        closeButtonAriaLabel: S = "Close toast",
        pauseWhenPageIsHidden: R,
      } = e,
      [L, z] = O.useState(null),
      [Q, V] = O.useState(null),
      [M, q] = O.useState(false),
      [ee, U] = O.useState(false),
      [Y, X] = O.useState(false),
      [ie, ne] = O.useState(false),
      [he, ve] = O.useState(false),
      [we, Le] = O.useState(0),
      [qe, Ae] = O.useState(0),
      _t = O.useRef(h.duration || F || Tm),
      Rn = O.useRef(null),
      Lt = O.useRef(null),
      $r = w === 0,
      Es = w + 1 <= y,
      et = h.type,
      dt = h.dismissible !== false,
      hn = h.className || "",
      mn = h.descriptionClassName || "",
      gn = O.useMemo(
        () => g.findIndex((re) => re.toastId === h.id) || 0,
        [g, h.id],
      ),
      xt = O.useMemo(() => {
        var re;
        return (re = h.closeButton) != null ? re : j;
      }, [h.closeButton, j]),
      Br = O.useMemo(() => h.duration || F || Tm, [h.duration, F]),
      Wr = O.useRef(0),
      Kn = O.useRef(0),
      vo = O.useRef(0),
      An = O.useRef(null),
      [Sc, Gi] = te.split("-"),
      Qi = O.useMemo(
        () => g.reduce((re, ce, de) => (de >= gn ? re : re + ce.height), 0),
        [g, gn],
      ),
      Ki = wT(),
      Cc = h.invert || v,
      Be = et === "loading";
    ((Kn.current = O.useMemo(() => gn * G + Qi, [gn, Qi])),
      O.useEffect(() => {
        _t.current = Br;
      }, [Br]),
      O.useEffect(() => {
        q(true);
      }, []),
      O.useEffect(() => {
        let re = Lt.current;
        if (re) {
          let ce = re.getBoundingClientRect().height;
          return (
            Ae(ce),
            x((de) => [
              { toastId: h.id, height: ce, position: h.position },
              ...de,
            ]),
            () => x((de) => de.filter((Me) => Me.toastId !== h.id))
          );
        }
      }, [x, h.id]),
      O.useLayoutEffect(() => {
        if (!M) return;
        let re = Lt.current,
          ce = re.style.height;
        re.style.height = "auto";
        let de = re.getBoundingClientRect().height;
        ((re.style.height = ce),
          Ae(de),
          x((Me) =>
            Me.find((Ge) => Ge.toastId === h.id)
              ? Me.map((Ge) =>
                  Ge.toastId === h.id ? { ...Ge, height: de } : Ge,
                )
              : [{ toastId: h.id, height: de, position: h.position }, ...Me],
          ));
      }, [M, h.title, h.description, x, h.id]));
    let De = O.useCallback(() => {
      (U(true),
        Le(Kn.current),
        x((re) => re.filter((ce) => ce.toastId !== h.id)),
        setTimeout(() => {
          T(h);
        }, OT));
    }, [h, T, x, Kn]);
    (O.useEffect(() => {
      if (
        (h.promise && et === "loading") ||
        h.duration === 1 / 0 ||
        h.type === "loading"
      )
        return;
      let re;
      return (
        k || m || (R && Ki)
          ? (() => {
              if (vo.current < Wr.current) {
                let ce = new Date().getTime() - Wr.current;
                _t.current = _t.current - ce;
              }
              vo.current = new Date().getTime();
            })()
          : _t.current !== 1 / 0 &&
            ((Wr.current = new Date().getTime()),
            (re = setTimeout(() => {
              var ce;
              ((ce = h.onAutoClose) == null || ce.call(h, h), De());
            }, _t.current))),
        () => clearTimeout(re)
      );
    }, [k, m, h, et, R, Ki, De]),
      O.useEffect(() => {
        h.delete && De();
      }, [De, h.delete]));
    function ft() {
      var re, ce, de;
      return E != null && E.loading
        ? O.createElement(
            "div",
            {
              className: Kt(
                P == null ? void 0 : P.loader,
                (re = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : re.loader,
                "sonner-loader",
              ),
              "data-visible": et === "loading",
            },
            E.loading,
          )
        : H
          ? O.createElement(
              "div",
              {
                className: Kt(
                  P == null ? void 0 : P.loader,
                  (ce = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : ce.loader,
                  "sonner-loader",
                ),
                "data-visible": et === "loading",
              },
              H,
            )
          : O.createElement(hT, {
              className: Kt(
                P == null ? void 0 : P.loader,
                (de = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : de.loader,
              ),
              visible: et === "loading",
            });
    }
    return O.createElement(
      "li",
      {
        tabIndex: 0,
        ref: Lt,
        className: Kt(
          B,
          hn,
          P == null ? void 0 : P.toast,
          (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
          P == null ? void 0 : P.default,
          P == null ? void 0 : P[et],
          (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[et],
        ),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : N,
        "data-styled": !(h.jsx || h.unstyled || b),
        "data-mounted": M,
        "data-promise": !!h.promise,
        "data-swiped": he,
        "data-removed": ee,
        "data-visible": Es,
        "data-y-position": Sc,
        "data-x-position": Gi,
        "data-index": w,
        "data-front": $r,
        "data-swiping": Y,
        "data-dismissible": dt,
        "data-type": et,
        "data-invert": Cc,
        "data-swipe-out": ie,
        "data-swipe-direction": Q,
        "data-expanded": !!(k || (A && M)),
        style: {
          "--index": w,
          "--toasts-before": w,
          "--z-index": C.length - w,
          "--offset": `${ee ? we : Kn.current}px`,
          "--initial-height": A ? "auto" : `${qe}px`,
          ...D,
          ...h.style,
        },
        onDragEnd: () => {
          (X(false), z(null), (An.current = null));
        },
        onPointerDown: (re) => {
          Be ||
            !dt ||
            ((Rn.current = new Date()),
            Le(Kn.current),
            re.target.setPointerCapture(re.pointerId),
            re.target.tagName !== "BUTTON" &&
              (X(true), (An.current = { x: re.clientX, y: re.clientY })));
        },
        onPointerUp: () => {
          var re, ce, de, Me;
          if (ie || !dt) return;
          An.current = null;
          let Ge = Number(
              ((re = Lt.current) == null
                ? void 0
                : re.style
                    .getPropertyValue("--swipe-amount-x")
                    .replace("px", "")) || 0,
            ),
            Se = Number(
              ((ce = Lt.current) == null
                ? void 0
                : ce.style
                    .getPropertyValue("--swipe-amount-y")
                    .replace("px", "")) || 0,
            ),
            ot =
              new Date().getTime() -
              ((de = Rn.current) == null ? void 0 : de.getTime()),
            Oe = L === "x" ? Ge : Se,
            Qe = Math.abs(Oe) / ot;
          if (Math.abs(Oe) >= MT || Qe > 0.11) {
            (Le(Kn.current),
              (Me = h.onDismiss) == null || Me.call(h, h),
              V(
                L === "x"
                  ? Ge > 0
                    ? "right"
                    : "left"
                  : Se > 0
                    ? "down"
                    : "up",
              ),
              De(),
              ne(true),
              ve(false));
            return;
          }
          (X(false), z(null));
        },
        onPointerMove: (re) => {
          var ce, de, Me, Ge;
          if (
            !An.current ||
            !dt ||
            ((ce = window.getSelection()) == null
              ? void 0
              : ce.toString().length) > 0
          )
            return;
          let Se = re.clientY - An.current.y,
            ot = re.clientX - An.current.x,
            Oe = (de = e.swipeDirections) != null ? de : IT(te);
          !L &&
            (Math.abs(ot) > 1 || Math.abs(Se) > 1) &&
            z(Math.abs(ot) > Math.abs(Se) ? "x" : "y");
          let Qe = { x: 0, y: 0 };
          (L === "y"
            ? (Oe.includes("top") || Oe.includes("bottom")) &&
              ((Oe.includes("top") && Se < 0) ||
                (Oe.includes("bottom") && Se > 0)) &&
              (Qe.y = Se)
            : L === "x" &&
              (Oe.includes("left") || Oe.includes("right")) &&
              ((Oe.includes("left") && ot < 0) ||
                (Oe.includes("right") && ot > 0)) &&
              (Qe.x = ot),
            (Math.abs(Qe.x) > 0 || Math.abs(Qe.y) > 0) && ve(true),
            (Me = Lt.current) == null ||
              Me.style.setProperty("--swipe-amount-x", `${Qe.x}px`),
            (Ge = Lt.current) == null ||
              Ge.style.setProperty("--swipe-amount-y", `${Qe.y}px`));
        },
      },
      xt && !h.jsx
        ? O.createElement(
            "button",
            {
              "aria-label": S,
              "data-disabled": Be,
              "data-close-button": true,
              onClick:
                Be || !dt
                  ? () => {}
                  : () => {
                      var re;
                      (De(), (re = h.onDismiss) == null || re.call(h, h));
                    },
              className: Kt(
                P == null ? void 0 : P.closeButton,
                (o = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : o.closeButton,
              ),
            },
            (s = E == null ? void 0 : E.close) != null ? s : xT,
          )
        : null,
      h.jsx || d.isValidElement(h.title)
        ? h.jsx
          ? h.jsx
          : typeof h.title == "function"
            ? h.title()
            : h.title
        : O.createElement(
            O.Fragment,
            null,
            et || h.icon || h.promise
              ? O.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: Kt(
                      P == null ? void 0 : P.icon,
                      (i = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : i.icon,
                    ),
                  },
                  h.promise || (h.type === "loading" && !h.icon)
                    ? h.icon || ft()
                    : null,
                  h.type !== "loading"
                    ? h.icon || (E == null ? void 0 : E[et]) || fT(et)
                    : null,
                )
              : null,
            O.createElement(
              "div",
              {
                "data-content": "",
                className: Kt(
                  P == null ? void 0 : P.content,
                  (a = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : a.content,
                ),
              },
              O.createElement(
                "div",
                {
                  "data-title": "",
                  className: Kt(
                    P == null ? void 0 : P.title,
                    (l = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : l.title,
                  ),
                },
                typeof h.title == "function" ? h.title() : h.title,
              ),
              h.description
                ? O.createElement(
                    "div",
                    {
                      "data-description": "",
                      className: Kt(
                        K,
                        mn,
                        P == null ? void 0 : P.description,
                        (u = h == null ? void 0 : h.classNames) == null
                          ? void 0
                          : u.description,
                      ),
                    },
                    typeof h.description == "function"
                      ? h.description()
                      : h.description,
                  )
                : null,
            ),
            d.isValidElement(h.cancel)
              ? h.cancel
              : h.cancel && va(h.cancel)
                ? O.createElement(
                    "button",
                    {
                      "data-button": true,
                      "data-cancel": true,
                      style: h.cancelButtonStyle || I,
                      onClick: (re) => {
                        var ce, de;
                        va(h.cancel) &&
                          dt &&
                          ((de = (ce = h.cancel).onClick) == null ||
                            de.call(ce, re),
                          De());
                      },
                      className: Kt(
                        P == null ? void 0 : P.cancelButton,
                        (f = h == null ? void 0 : h.classNames) == null
                          ? void 0
                          : f.cancelButton,
                      ),
                    },
                    h.cancel.label,
                  )
                : null,
            d.isValidElement(h.action)
              ? h.action
              : h.action && va(h.action)
                ? O.createElement(
                    "button",
                    {
                      "data-button": true,
                      "data-action": true,
                      style: h.actionButtonStyle || $,
                      onClick: (re) => {
                        var ce, de;
                        va(h.action) &&
                          ((de = (ce = h.action).onClick) == null ||
                            de.call(ce, re),
                          !re.defaultPrevented && De());
                      },
                      className: Kt(
                        P == null ? void 0 : P.actionButton,
                        (p = h == null ? void 0 : h.classNames) == null
                          ? void 0
                          : p.actionButton,
                      ),
                    },
                    h.action.label,
                  )
                : null,
          ),
    );
  };
  function Nm() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e
      ? window.getComputedStyle(document.documentElement).direction
      : e;
  }
  function LT(e, t) {
    let n = {};
    return (
      [e, t].forEach((r, o) => {
        let s = o === 1,
          i = s ? "--mobile-offset" : "--offset",
          a = s ? RT : jT;
        function l(u) {
          ["top", "right", "bottom", "left"].forEach((f) => {
            n[`${i}-${f}`] = typeof u == "number" ? `${u}px` : u;
          });
        }
        typeof r == "number" || typeof r == "string"
          ? l(r)
          : typeof r == "object"
            ? ["top", "right", "bottom", "left"].forEach((u) => {
                r[u] === void 0
                  ? (n[`${i}-${u}`] = a)
                  : (n[`${i}-${u}`] =
                      typeof r[u] == "number" ? `${r[u]}px` : r[u]);
              })
            : l(a);
      }),
      n
    );
  }
  var $T = of[" useId ".trim().toString()] || (() => {}),
    BT = 0;
  function Cr(e) {
    const [t, n] = d.useState($T());
    return (
      Ze(() => {
        n((r) => r ?? String(BT++));
      }, [e]),
      t ? `radix-${t}` : ""
    );
  }
  const WT = ["top", "right", "bottom", "left"],
    Pr = Math.min,
    jt = Math.max,
    vl = Math.round,
    ya = Math.floor,
    jr = (e) => ({ x: e, y: e }),
    UT = { left: "right", right: "left", bottom: "top", top: "bottom" },
    HT = { start: "end", end: "start" };
  function Nd(e, t, n) {
    return jt(e, Pr(t, n));
  }
  function Vn(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function qn(e) {
    return e.split("-")[0];
  }
  function ms(e) {
    return e.split("-")[1];
  }
  function rp(e) {
    return e === "x" ? "y" : "x";
  }
  function op(e) {
    return e === "y" ? "height" : "width";
  }
  function Rr(e) {
    return ["top", "bottom"].includes(qn(e)) ? "y" : "x";
  }
  function sp(e) {
    return rp(Rr(e));
  }
  function VT(e, t, n) {
    n === void 0 && (n = false);
    const r = ms(e),
      o = sp(e),
      s = op(o);
    let i =
      o === "x"
        ? r === (n ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
          ? "bottom"
          : "top";
    return (t.reference[s] > t.floating[s] && (i = yl(i)), [i, yl(i)]);
  }
  function qT(e) {
    const t = yl(e);
    return [Pd(e), t, Pd(t)];
  }
  function Pd(e) {
    return e.replace(/start|end/g, (t) => HT[t]);
  }
  function GT(e, t, n) {
    const r = ["left", "right"],
      o = ["right", "left"],
      s = ["top", "bottom"],
      i = ["bottom", "top"];
    switch (e) {
      case "top":
      case "bottom":
        return n ? (t ? o : r) : t ? r : o;
      case "left":
      case "right":
        return t ? s : i;
      default:
        return [];
    }
  }
  function QT(e, t, n, r) {
    const o = ms(e);
    let s = GT(qn(e), n === "start", r);
    return (
      o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Pd)))),
      s
    );
  }
  function yl(e) {
    return e.replace(/left|right|bottom|top/g, (t) => UT[t]);
  }
  function KT(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Ux(e) {
    return typeof e != "number"
      ? KT(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function xl(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return {
      width: r,
      height: o,
      top: n,
      left: t,
      right: t + r,
      bottom: n + o,
      x: t,
      y: n,
    };
  }
  function Pm(e, t, n) {
    let { reference: r, floating: o } = e;
    const s = Rr(t),
      i = sp(t),
      a = op(i),
      l = qn(t),
      u = s === "y",
      f = r.x + r.width / 2 - o.width / 2,
      p = r.y + r.height / 2 - o.height / 2,
      v = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
      case "top":
        h = { x: f, y: r.y - o.height };
        break;
      case "bottom":
        h = { x: f, y: r.y + r.height };
        break;
      case "right":
        h = { x: r.x + r.width, y: p };
        break;
      case "left":
        h = { x: r.x - o.width, y: p };
        break;
      default:
        h = { x: r.x, y: r.y };
    }
    switch (ms(t)) {
      case "start":
        h[i] -= v * (n && u ? -1 : 1);
        break;
      case "end":
        h[i] += v * (n && u ? -1 : 1);
        break;
    }
    return h;
  }
  const YT = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: i,
      } = n,
      a = s.filter(Boolean),
      l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: f, y: p } = Pm(u, r, l),
      v = r,
      h = {},
      b = 0;
    for (let m = 0; m < a.length; m++) {
      const { name: x, fn: y } = a[m],
        {
          x: g,
          y: w,
          data: C,
          reset: k,
        } = await y({
          x: f,
          y: p,
          initialPlacement: r,
          placement: v,
          strategy: o,
          middlewareData: h,
          rects: u,
          platform: i,
          elements: { reference: e, floating: t },
        });
      ((f = g ?? f),
        (p = w ?? p),
        (h = { ...h, [x]: { ...h[x], ...C } }),
        k &&
          b <= 50 &&
          (b++,
          typeof k == "object" &&
            (k.placement && (v = k.placement),
            k.rects &&
              (u =
                k.rects === true
                  ? await i.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : k.rects),
            ({ x: f, y: p } = Pm(u, v, l))),
          (m = -1)));
    }
    return { x: f, y: p, placement: v, strategy: o, middlewareData: h };
  };
  async function Si(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
      {
        boundary: u = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: p = "floating",
        altBoundary: v = false,
        padding: h = 0,
      } = Vn(t, e),
      b = Ux(h),
      x = a[v ? (p === "floating" ? "reference" : "floating") : p],
      y = xl(
        await s.getClippingRect({
          element:
            (n = await (s.isElement == null ? void 0 : s.isElement(x))) ==
              null || n
              ? x
              : x.contextElement ||
                (await (s.getDocumentElement == null
                  ? void 0
                  : s.getDocumentElement(a.floating))),
          boundary: u,
          rootBoundary: f,
          strategy: l,
        }),
      ),
      g =
        p === "floating"
          ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
          : i.reference,
      w = await (s.getOffsetParent == null
        ? void 0
        : s.getOffsetParent(a.floating)),
      C = (await (s.isElement == null ? void 0 : s.isElement(w)))
        ? (await (s.getScale == null ? void 0 : s.getScale(w))) || {
            x: 1,
            y: 1,
          }
        : { x: 1, y: 1 },
      k = xl(
        s.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: a,
              rect: g,
              offsetParent: w,
              strategy: l,
            })
          : g,
      );
    return {
      top: (y.top - k.top + b.top) / C.y,
      bottom: (k.bottom - y.bottom + b.bottom) / C.y,
      left: (y.left - k.left + b.left) / C.x,
      right: (k.right - y.right + b.right) / C.x,
    };
  }
  const XT = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: s,
            platform: i,
            elements: a,
            middlewareData: l,
          } = t,
          { element: u, padding: f = 0 } = Vn(e, t) || {};
        if (u == null) return {};
        const p = Ux(f),
          v = { x: n, y: r },
          h = sp(o),
          b = op(h),
          m = await i.getDimensions(u),
          x = h === "y",
          y = x ? "top" : "left",
          g = x ? "bottom" : "right",
          w = x ? "clientHeight" : "clientWidth",
          C = s.reference[b] + s.reference[h] - v[h] - s.floating[b],
          k = v[h] - s.reference[h],
          T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
        let N = T ? T[w] : 0;
        (!N || !(await (i.isElement == null ? void 0 : i.isElement(T)))) &&
          (N = a.floating[w] || s.floating[b]);
        const j = C / 2 - k / 2,
          D = N / 2 - m[b] / 2 - 1,
          I = Pr(p[y], D),
          $ = Pr(p[g], D),
          B = I,
          K = N - m[b] - $,
          F = N / 2 - m[b] / 2 + j,
          te = Nd(B, F, K),
          G =
            !l.arrow &&
            ms(o) != null &&
            F !== te &&
            s.reference[b] / 2 - (F < B ? I : $) - m[b] / 2 < 0,
          H = G ? (F < B ? F - B : F - K) : 0;
        return {
          [h]: v[h] + H,
          data: {
            [h]: te,
            centerOffset: F - te - H,
            ...(G && { alignmentOffset: H }),
          },
          reset: G,
        };
      },
    }),
    ZT = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r;
            const {
                placement: o,
                middlewareData: s,
                rects: i,
                initialPlacement: a,
                platform: l,
                elements: u,
              } = t,
              {
                mainAxis: f = true,
                crossAxis: p = true,
                fallbackPlacements: v,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: b = "none",
                flipAlignment: m = true,
                ...x
              } = Vn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset) return {};
            const y = qn(o),
              g = Rr(a),
              w = qn(a) === a,
              C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
              k = v || (w || !m ? [yl(a)] : qT(a)),
              T = b !== "none";
            !v && T && k.push(...QT(a, m, b, C));
            const N = [a, ...k],
              j = await Si(t, x),
              D = [];
            let I = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if ((f && D.push(j[y]), p)) {
              const F = VT(o, i, C);
              D.push(j[F[0]], j[F[1]]);
            }
            if (
              ((I = [...I, { placement: o, overflows: D }]),
              !D.every((F) => F <= 0))
            ) {
              var $, B;
              const F = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1,
                te = N[F];
              if (te)
                return {
                  data: { index: F, overflows: I },
                  reset: { placement: te },
                };
              let G =
                (B = I.filter((H) => H.overflows[0] <= 0).sort(
                  (H, A) => H.overflows[1] - A.overflows[1],
                )[0]) == null
                  ? void 0
                  : B.placement;
              if (!G)
                switch (h) {
                  case "bestFit": {
                    var K;
                    const H =
                      (K = I.filter((A) => {
                        if (T) {
                          const P = Rr(A.placement);
                          return P === g || P === "y";
                        }
                        return true;
                      })
                        .map((A) => [
                          A.placement,
                          A.overflows
                            .filter((P) => P > 0)
                            .reduce((P, E) => P + E, 0),
                        ])
                        .sort((A, P) => A[1] - P[1])[0]) == null
                        ? void 0
                        : K[0];
                    H && (G = H);
                    break;
                  }
                  case "initialPlacement":
                    G = a;
                    break;
                }
              if (o !== G) return { reset: { placement: G } };
            }
            return {};
          },
        }
      );
    };
  function jm(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function Rm(e) {
    return WT.some((t) => e[t] >= 0);
  }
  const JT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Vn(e, t);
          switch (r) {
            case "referenceHidden": {
              const s = await Si(t, { ...o, elementContext: "reference" }),
                i = jm(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: Rm(i) },
              };
            }
            case "escaped": {
              const s = await Si(t, { ...o, altBoundary: true }),
                i = jm(s, n.floating);
              return { data: { escapedOffsets: i, escaped: Rm(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  };
  async function eN(e, t) {
    const { placement: n, platform: r, elements: o } = e,
      s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
      i = qn(n),
      a = ms(n),
      l = Rr(n) === "y",
      u = ["left", "top"].includes(i) ? -1 : 1,
      f = s && l ? -1 : 1,
      p = Vn(t, e);
    let {
      mainAxis: v,
      crossAxis: h,
      alignmentAxis: b,
    } = typeof p == "number"
      ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: p.mainAxis || 0,
          crossAxis: p.crossAxis || 0,
          alignmentAxis: p.alignmentAxis,
        };
    return (
      a && typeof b == "number" && (h = a === "end" ? b * -1 : b),
      l ? { x: h * f, y: v * u } : { x: v * u, y: h * f }
    );
  }
  const tN = function (e) {
      return (
        e === void 0 && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            const { x: o, y: s, placement: i, middlewareData: a } = t,
              l = await eN(t, e);
            return i === ((n = a.offset) == null ? void 0 : n.placement) &&
              (r = a.arrow) != null &&
              r.alignmentOffset
              ? {}
              : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
          },
        }
      );
    },
    nN = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            const { x: n, y: r, placement: o } = t,
              {
                mainAxis: s = true,
                crossAxis: i = false,
                limiter: a = {
                  fn: (x) => {
                    let { x: y, y: g } = x;
                    return { x: y, y: g };
                  },
                },
                ...l
              } = Vn(e, t),
              u = { x: n, y: r },
              f = await Si(t, l),
              p = Rr(qn(o)),
              v = rp(p);
            let h = u[v],
              b = u[p];
            if (s) {
              const x = v === "y" ? "top" : "left",
                y = v === "y" ? "bottom" : "right",
                g = h + f[x],
                w = h - f[y];
              h = Nd(g, h, w);
            }
            if (i) {
              const x = p === "y" ? "top" : "left",
                y = p === "y" ? "bottom" : "right",
                g = b + f[x],
                w = b - f[y];
              b = Nd(g, b, w);
            }
            const m = a.fn({ ...t, [v]: h, [p]: b });
            return {
              ...m,
              data: { x: m.x - n, y: m.y - r, enabled: { [v]: s, [p]: i } },
            };
          },
        }
      );
    },
    rN = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          options: e,
          fn(t) {
            const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
              {
                offset: a = 0,
                mainAxis: l = true,
                crossAxis: u = true,
              } = Vn(e, t),
              f = { x: n, y: r },
              p = Rr(o),
              v = rp(p);
            let h = f[v],
              b = f[p];
            const m = Vn(a, t),
              x =
                typeof m == "number"
                  ? { mainAxis: m, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...m };
            if (l) {
              const w = v === "y" ? "height" : "width",
                C = s.reference[v] - s.floating[w] + x.mainAxis,
                k = s.reference[v] + s.reference[w] - x.mainAxis;
              h < C ? (h = C) : h > k && (h = k);
            }
            if (u) {
              var y, g;
              const w = v === "y" ? "width" : "height",
                C = ["top", "left"].includes(qn(o)),
                k =
                  s.reference[p] -
                  s.floating[w] +
                  ((C && ((y = i.offset) == null ? void 0 : y[p])) || 0) +
                  (C ? 0 : x.crossAxis),
                T =
                  s.reference[p] +
                  s.reference[w] +
                  (C ? 0 : ((g = i.offset) == null ? void 0 : g[p]) || 0) -
                  (C ? x.crossAxis : 0);
              b < k ? (b = k) : b > T && (b = T);
            }
            return { [v]: h, [p]: b };
          },
        }
      );
    },
    oN = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            const { placement: o, rects: s, platform: i, elements: a } = t,
              { apply: l = () => {}, ...u } = Vn(e, t),
              f = await Si(t, u),
              p = qn(o),
              v = ms(o),
              h = Rr(o) === "y",
              { width: b, height: m } = s.floating;
            let x, y;
            p === "top" || p === "bottom"
              ? ((x = p),
                (y =
                  v ===
                  ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((y = p), (x = v === "end" ? "top" : "bottom"));
            const g = m - f.top - f.bottom,
              w = b - f.left - f.right,
              C = Pr(m - f[x], g),
              k = Pr(b - f[y], w),
              T = !t.middlewareData.shift;
            let N = C,
              j = k;
            if (
              ((n = t.middlewareData.shift) != null && n.enabled.x && (j = w),
              (r = t.middlewareData.shift) != null && r.enabled.y && (N = g),
              T && !v)
            ) {
              const I = jt(f.left, 0),
                $ = jt(f.right, 0),
                B = jt(f.top, 0),
                K = jt(f.bottom, 0);
              h
                ? (j =
                    b - 2 * (I !== 0 || $ !== 0 ? I + $ : jt(f.left, f.right)))
                : (N =
                    m - 2 * (B !== 0 || K !== 0 ? B + K : jt(f.top, f.bottom)));
            }
            await l({ ...t, availableWidth: j, availableHeight: N });
            const D = await i.getDimensions(a.floating);
            return b !== D.width || m !== D.height
              ? { reset: { rects: true } }
              : {};
          },
        }
      );
    };
  function ec() {
    return typeof window < "u";
  }
  function gs(e) {
    return Hx(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function Dt(e) {
    var t;
    return (
      (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
      window
    );
  }
  function jn(e) {
    var t;
    return (t = (Hx(e) ? e.ownerDocument : e.document) || window.document) ==
      null
      ? void 0
      : t.documentElement;
  }
  function Hx(e) {
    return ec() ? e instanceof Node || e instanceof Dt(e).Node : false;
  }
  function cn(e) {
    return ec() ? e instanceof Element || e instanceof Dt(e).Element : false;
  }
  function Nn(e) {
    return ec()
      ? e instanceof HTMLElement || e instanceof Dt(e).HTMLElement
      : false;
  }
  function Am(e) {
    return !ec() || typeof ShadowRoot > "u"
      ? false
      : e instanceof ShadowRoot || e instanceof Dt(e).ShadowRoot;
  }
  function Wi(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = un(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
      !["inline", "contents"].includes(o)
    );
  }
  function sN(e) {
    return ["table", "td", "th"].includes(gs(e));
  }
  function tc(e) {
    return [":popover-open", ":modal"].some((t) => {
      try {
        return e.matches(t);
      } catch {
        return false;
      }
    });
  }
  function ip(e) {
    const t = ap(),
      n = cn(e) ? un(e) : e;
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      (n.containerType ? n.containerType !== "normal" : false) ||
      (!t && (n.backdropFilter ? n.backdropFilter !== "none" : false)) ||
      (!t && (n.filter ? n.filter !== "none" : false)) ||
      ["transform", "perspective", "filter"].some((r) =>
        (n.willChange || "").includes(r),
      ) ||
      ["paint", "layout", "strict", "content"].some((r) =>
        (n.contain || "").includes(r),
      )
    );
  }
  function iN(e) {
    let t = Ar(e);
    for (; Nn(t) && !cs(t);) {
      if (ip(t)) return t;
      if (tc(t)) return null;
      t = Ar(t);
    }
    return null;
  }
  function ap() {
    return typeof CSS > "u" || !CSS.supports
      ? false
      : CSS.supports("-webkit-backdrop-filter", "none");
  }
  function cs(e) {
    return ["html", "body", "#document"].includes(gs(e));
  }
  function un(e) {
    return Dt(e).getComputedStyle(e);
  }
  function nc(e) {
    return cn(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function Ar(e) {
    if (gs(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (Am(e) && e.host) || jn(e);
    return Am(t) ? t.host : t;
  }
  function Vx(e) {
    const t = Ar(e);
    return cs(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : Nn(t) && Wi(t)
        ? t
        : Vx(t);
  }
  function Ci(e, t, n) {
    var r;
    (t === void 0 && (t = []), n === void 0 && (n = true));
    const o = Vx(e),
      s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
      i = Dt(o);
    if (s) {
      const a = jd(i);
      return t.concat(
        i,
        i.visualViewport || [],
        Wi(o) ? o : [],
        a && n ? Ci(a) : [],
      );
    }
    return t.concat(o, Ci(o, [], n));
  }
  function jd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
  function qx(e) {
    const t = un(e);
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0;
    const o = Nn(e),
      s = o ? e.offsetWidth : n,
      i = o ? e.offsetHeight : r,
      a = vl(n) !== s || vl(r) !== i;
    return (a && ((n = s), (r = i)), { width: n, height: r, $: a });
  }
  function lp(e) {
    return cn(e) ? e : e.contextElement;
  }
  function Ho(e) {
    const t = lp(e);
    if (!Nn(t)) return jr(1);
    const n = t.getBoundingClientRect(),
      { width: r, height: o, $: s } = qx(t);
    let i = (s ? vl(n.width) : n.width) / r,
      a = (s ? vl(n.height) : n.height) / o;
    return (
      (!i || !Number.isFinite(i)) && (i = 1),
      (!a || !Number.isFinite(a)) && (a = 1),
      { x: i, y: a }
    );
  }
  const aN = jr(0);
  function Gx(e) {
    const t = Dt(e);
    return !ap() || !t.visualViewport
      ? aN
      : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
  }
  function lN(e, t, n) {
    return (t === void 0 && (t = false), !n || (t && n !== Dt(e)) ? false : t);
  }
  function co(e, t, n, r) {
    (t === void 0 && (t = false), n === void 0 && (n = false));
    const o = e.getBoundingClientRect(),
      s = lp(e);
    let i = jr(1);
    t && (r ? cn(r) && (i = Ho(r)) : (i = Ho(e)));
    const a = lN(s, n, r) ? Gx(s) : jr(0);
    let l = (o.left + a.x) / i.x,
      u = (o.top + a.y) / i.y,
      f = o.width / i.x,
      p = o.height / i.y;
    if (s) {
      const v = Dt(s),
        h = r && cn(r) ? Dt(r) : r;
      let b = v,
        m = jd(b);
      for (; m && r && h !== b;) {
        const x = Ho(m),
          y = m.getBoundingClientRect(),
          g = un(m),
          w = y.left + (m.clientLeft + parseFloat(g.paddingLeft)) * x.x,
          C = y.top + (m.clientTop + parseFloat(g.paddingTop)) * x.y;
        ((l *= x.x),
          (u *= x.y),
          (f *= x.x),
          (p *= x.y),
          (l += w),
          (u += C),
          (b = Dt(m)),
          (m = jd(b)));
      }
    }
    return xl({ width: f, height: p, x: l, y: u });
  }
  function cN(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const s = o === "fixed",
      i = jn(r),
      a = t ? tc(t.floating) : false;
    if (r === i || (a && s)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
      u = jr(1);
    const f = jr(0),
      p = Nn(r);
    if (
      (p || (!p && !s)) &&
      ((gs(r) !== "body" || Wi(i)) && (l = nc(r)), Nn(r))
    ) {
      const v = co(r);
      ((u = Ho(r)), (f.x = v.x + r.clientLeft), (f.y = v.y + r.clientTop));
    }
    return {
      width: n.width * u.x,
      height: n.height * u.y,
      x: n.x * u.x - l.scrollLeft * u.x + f.x,
      y: n.y * u.y - l.scrollTop * u.y + f.y,
    };
  }
  function uN(e) {
    return Array.from(e.getClientRects());
  }
  function Rd(e, t) {
    const n = nc(e).scrollLeft;
    return t ? t.left + n : co(jn(e)).left + n;
  }
  function dN(e) {
    const t = jn(e),
      n = nc(e),
      r = e.ownerDocument.body,
      o = jt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
      s = jt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Rd(e);
    const a = -n.scrollTop;
    return (
      un(r).direction === "rtl" && (i += jt(t.clientWidth, r.clientWidth) - o),
      { width: o, height: s, x: i, y: a }
    );
  }
  function fN(e, t) {
    const n = Dt(e),
      r = jn(e),
      o = n.visualViewport;
    let s = r.clientWidth,
      i = r.clientHeight,
      a = 0,
      l = 0;
    if (o) {
      ((s = o.width), (i = o.height));
      const u = ap();
      (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
    }
    return { width: s, height: i, x: a, y: l };
  }
  function pN(e, t) {
    const n = co(e, true, t === "fixed"),
      r = n.top + e.clientTop,
      o = n.left + e.clientLeft,
      s = Nn(e) ? Ho(e) : jr(1),
      i = e.clientWidth * s.x,
      a = e.clientHeight * s.y,
      l = o * s.x,
      u = r * s.y;
    return { width: i, height: a, x: l, y: u };
  }
  function Dm(e, t, n) {
    let r;
    if (t === "viewport") r = fN(e, n);
    else if (t === "document") r = dN(jn(e));
    else if (cn(t)) r = pN(t, n);
    else {
      const o = Gx(e);
      r = { ...t, x: t.x - o.x, y: t.y - o.y };
    }
    return xl(r);
  }
  function Qx(e, t) {
    const n = Ar(e);
    return n === t || !cn(n) || cs(n)
      ? false
      : un(n).position === "fixed" || Qx(n, t);
  }
  function hN(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Ci(e, [], false).filter((a) => cn(a) && gs(a) !== "body"),
      o = null;
    const s = un(e).position === "fixed";
    let i = s ? Ar(e) : e;
    for (; cn(i) && !cs(i);) {
      const a = un(i),
        l = ip(i);
      (!l && a.position === "fixed" && (o = null),
        (
          s
            ? !l && !o
            : (!l &&
                a.position === "static" &&
                !!o &&
                ["absolute", "fixed"].includes(o.position)) ||
              (Wi(i) && !l && Qx(e, i))
        )
          ? (r = r.filter((f) => f !== i))
          : (o = a),
        (i = Ar(i)));
    }
    return (t.set(e, r), r);
  }
  function mN(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const i = [
        ...(n === "clippingAncestors"
          ? tc(t)
            ? []
            : hN(t, this._c)
          : [].concat(n)),
        r,
      ],
      a = i[0],
      l = i.reduce(
        (u, f) => {
          const p = Dm(t, f, o);
          return (
            (u.top = jt(p.top, u.top)),
            (u.right = Pr(p.right, u.right)),
            (u.bottom = Pr(p.bottom, u.bottom)),
            (u.left = jt(p.left, u.left)),
            u
          );
        },
        Dm(t, a, o),
      );
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top,
    };
  }
  function gN(e) {
    const { width: t, height: n } = qx(e);
    return { width: t, height: n };
  }
  function vN(e, t, n) {
    const r = Nn(t),
      o = jn(t),
      s = n === "fixed",
      i = co(e, true, s, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = jr(0);
    if (r || (!r && !s))
      if (((gs(t) !== "body" || Wi(o)) && (a = nc(t)), r)) {
        const h = co(t, true, s, t);
        ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
      } else o && (l.x = Rd(o));
    let u = 0,
      f = 0;
    if (o && !r && !s) {
      const h = o.getBoundingClientRect();
      ((f = h.top + a.scrollTop), (u = h.left + a.scrollLeft - Rd(o, h)));
    }
    const p = i.left + a.scrollLeft - l.x - u,
      v = i.top + a.scrollTop - l.y - f;
    return { x: p, y: v, width: i.width, height: i.height };
  }
  function iu(e) {
    return un(e).position === "static";
  }
  function Mm(e, t) {
    if (!Nn(e) || un(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (jn(e) === n && (n = n.ownerDocument.body), n);
  }
  function Kx(e, t) {
    const n = Dt(e);
    if (tc(e)) return n;
    if (!Nn(e)) {
      let o = Ar(e);
      for (; o && !cs(o);) {
        if (cn(o) && !iu(o)) return o;
        o = Ar(o);
      }
      return n;
    }
    let r = Mm(e, t);
    for (; r && sN(r) && iu(r);) r = Mm(r, t);
    return r && cs(r) && iu(r) && !ip(r) ? n : r || iN(e) || n;
  }
  const yN = async function (e) {
    const t = this.getOffsetParent || Kx,
      n = this.getDimensions,
      r = await n(e.floating);
    return {
      reference: vN(e.reference, await t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  };
  function xN(e) {
    return un(e).direction === "rtl";
  }
  const wN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: cN,
    getDocumentElement: jn,
    getClippingRect: mN,
    getOffsetParent: Kx,
    getElementRects: yN,
    getClientRects: uN,
    getDimensions: gN,
    getScale: Ho,
    isElement: cn,
    isRTL: xN,
  };
  function bN(e, t) {
    let n = null,
      r;
    const o = jn(e);
    function s() {
      var a;
      (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
    }
    function i(a, l) {
      (a === void 0 && (a = false), l === void 0 && (l = 1), s());
      const {
        left: u,
        top: f,
        width: p,
        height: v,
      } = e.getBoundingClientRect();
      if ((a || t(), !p || !v)) return;
      const h = ya(f),
        b = ya(o.clientWidth - (u + p)),
        m = ya(o.clientHeight - (f + v)),
        x = ya(u),
        g = {
          rootMargin: -h + "px " + -b + "px " + -m + "px " + -x + "px",
          threshold: jt(0, Pr(1, l)) || 1,
        };
      let w = true;
      function C(k) {
        const T = k[0].intersectionRatio;
        if (T !== l) {
          if (!w) return i();
          T
            ? i(false, T)
            : (r = setTimeout(() => {
                i(false, 1e-7);
              }, 1e3));
        }
        w = false;
      }
      try {
        n = new IntersectionObserver(C, { ...g, root: o.ownerDocument });
      } catch {
        n = new IntersectionObserver(C, g);
      }
      n.observe(e);
    }
    return (i(true), s);
  }
  function SN(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = true,
        ancestorResize: s = true,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = false,
      } = r,
      u = lp(e),
      f = o || s ? [...(u ? Ci(u) : []), ...Ci(t)] : [];
    f.forEach((y) => {
      (o && y.addEventListener("scroll", n, { passive: true }),
        s && y.addEventListener("resize", n));
    });
    const p = u && a ? bN(u, n) : null;
    let v = -1,
      h = null;
    i &&
      ((h = new ResizeObserver((y) => {
        let [g] = y;
        (g &&
          g.target === u &&
          h &&
          (h.unobserve(t),
          cancelAnimationFrame(v),
          (v = requestAnimationFrame(() => {
            var w;
            (w = h) == null || w.observe(t);
          }))),
          n());
      })),
      u && !l && h.observe(u),
      h.observe(t));
    let b,
      m = l ? co(e) : null;
    l && x();
    function x() {
      const y = co(e);
      (m &&
        (y.x !== m.x ||
          y.y !== m.y ||
          y.width !== m.width ||
          y.height !== m.height) &&
        n(),
        (m = y),
        (b = requestAnimationFrame(x)));
    }
    return (
      n(),
      () => {
        var y;
        (f.forEach((g) => {
          (o && g.removeEventListener("scroll", n),
            s && g.removeEventListener("resize", n));
        }),
          p == null || p(),
          (y = h) == null || y.disconnect(),
          (h = null),
          l && cancelAnimationFrame(b));
      }
    );
  }
  const CN = tN,
    kN = nN,
    EN = ZT,
    TN = oN,
    NN = JT,
    Om = XT,
    PN = rN,
    jN = (e, t, n) => {
      const r = new Map(),
        o = { platform: wN, ...n },
        s = { ...o.platform, _c: r };
      return YT(e, t, { ...o, platform: s });
    };
  var Ua = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
  function wl(e, t) {
    if (e === t) return true;
    if (typeof e != typeof t) return false;
    if (typeof e == "function" && e.toString() === t.toString()) return true;
    let n, r, o;
    if (e && t && typeof e == "object") {
      if (Array.isArray(e)) {
        if (((n = e.length), n !== t.length)) return false;
        for (r = n; r-- !== 0;) if (!wl(e[r], t[r])) return false;
        return true;
      }
      if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
        return false;
      for (r = n; r-- !== 0;)
        if (!{}.hasOwnProperty.call(t, o[r])) return false;
      for (r = n; r-- !== 0;) {
        const s = o[r];
        if (!(s === "_owner" && e.$$typeof) && !wl(e[s], t[s])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function Yx(e) {
    return typeof window > "u"
      ? 1
      : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function Im(e, t) {
    const n = Yx(e);
    return Math.round(t * n) / n;
  }
  function au(e) {
    const t = d.useRef(e);
    return (
      Ua(() => {
        t.current = e;
      }),
      t
    );
  }
  function RN(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: { reference: s, floating: i } = {},
        transform: a = true,
        whileElementsMounted: l,
        open: u,
      } = e,
      [f, p] = d.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: false,
      }),
      [v, h] = d.useState(r);
    wl(v, r) || h(r);
    const [b, m] = d.useState(null),
      [x, y] = d.useState(null),
      g = d.useCallback((A) => {
        A !== T.current && ((T.current = A), m(A));
      }, []),
      w = d.useCallback((A) => {
        A !== N.current && ((N.current = A), y(A));
      }, []),
      C = s || b,
      k = i || x,
      T = d.useRef(null),
      N = d.useRef(null),
      j = d.useRef(f),
      D = l != null,
      I = au(l),
      $ = au(o),
      B = au(u),
      K = d.useCallback(() => {
        if (!T.current || !N.current) return;
        const A = { placement: t, strategy: n, middleware: v };
        ($.current && (A.platform = $.current),
          jN(T.current, N.current, A).then((P) => {
            const E = { ...P, isPositioned: B.current !== false };
            F.current &&
              !wl(j.current, E) &&
              ((j.current = E),
              Ht.flushSync(() => {
                p(E);
              }));
          }));
      }, [v, t, n, $, B]);
    Ua(() => {
      u === false &&
        j.current.isPositioned &&
        ((j.current.isPositioned = false),
        p((A) => ({ ...A, isPositioned: false })));
    }, [u]);
    const F = d.useRef(false);
    (Ua(
      () => (
        (F.current = true),
        () => {
          F.current = false;
        }
      ),
      [],
    ),
      Ua(() => {
        if ((C && (T.current = C), k && (N.current = k), C && k)) {
          if (I.current) return I.current(C, k, K);
          K();
        }
      }, [C, k, K, I, D]));
    const te = d.useMemo(
        () => ({ reference: T, floating: N, setReference: g, setFloating: w }),
        [g, w],
      ),
      G = d.useMemo(() => ({ reference: C, floating: k }), [C, k]),
      H = d.useMemo(() => {
        const A = { position: n, left: 0, top: 0 };
        if (!G.floating) return A;
        const P = Im(G.floating, f.x),
          E = Im(G.floating, f.y);
        return a
          ? {
              ...A,
              transform: "translate(" + P + "px, " + E + "px)",
              ...(Yx(G.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: P, top: E };
      }, [n, a, G.floating, f.x, f.y]);
    return d.useMemo(
      () => ({ ...f, update: K, refs: te, elements: G, floatingStyles: H }),
      [f, K, te, G, H],
    );
  }
  const AN = (e) => {
      function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }
      return {
        name: "arrow",
        options: e,
        fn(n) {
          const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
          return r && t(r)
            ? r.current != null
              ? Om({ element: r.current, padding: o }).fn(n)
              : {}
            : r
              ? Om({ element: r, padding: o }).fn(n)
              : {};
        },
      };
    },
    DN = (e, t) => ({ ...CN(e), options: [e, t] }),
    MN = (e, t) => ({ ...kN(e), options: [e, t] }),
    ON = (e, t) => ({ ...PN(e), options: [e, t] }),
    IN = (e, t) => ({ ...EN(e), options: [e, t] }),
    _N = (e, t) => ({ ...TN(e), options: [e, t] }),
    LN = (e, t) => ({ ...NN(e), options: [e, t] }),
    FN = (e, t) => ({ ...AN(e), options: [e, t] });
  var zN = "Arrow",
    Xx = d.forwardRef((e, t) => {
      const { children: n, width: r = 10, height: o = 5, ...s } = e;
      return c.jsx(le.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
      });
    });
  Xx.displayName = zN;
  var $N = Xx;
  function Zx(e) {
    const [t, n] = d.useState(void 0);
    return (
      Ze(() => {
        if (e) {
          n({ width: e.offsetWidth, height: e.offsetHeight });
          const r = new ResizeObserver((o) => {
            if (!Array.isArray(o) || !o.length) return;
            const s = o[0];
            let i, a;
            if ("borderBoxSize" in s) {
              const l = s.borderBoxSize,
                u = Array.isArray(l) ? l[0] : l;
              ((i = u.inlineSize), (a = u.blockSize));
            } else ((i = e.offsetWidth), (a = e.offsetHeight));
            n({ width: i, height: a });
          });
          return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
        } else n(void 0);
      }, [e]),
      t
    );
  }
  var cp = "Popper",
    [Jx, rc] = Qn(cp),
    [BN, ew] = Jx(cp),
    tw = (e) => {
      const { __scopePopper: t, children: n } = e,
        [r, o] = d.useState(null);
      return c.jsx(BN, { scope: t, anchor: r, onAnchorChange: o, children: n });
    };
  tw.displayName = cp;
  var nw = "PopperAnchor",
    rw = d.forwardRef((e, t) => {
      const { __scopePopper: n, virtualRef: r, ...o } = e,
        s = ew(nw, n),
        i = d.useRef(null),
        a = ge(t, i);
      return (
        d.useEffect(() => {
          s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
        }),
        r ? null : c.jsx(le.div, { ...o, ref: a })
      );
    });
  rw.displayName = nw;
  var up = "PopperContent",
    [WN, UN] = Jx(up),
    ow = d.forwardRef((e, t) => {
      var M, q, ee, U, Y, X;
      const {
          __scopePopper: n,
          side: r = "bottom",
          sideOffset: o = 0,
          align: s = "center",
          alignOffset: i = 0,
          arrowPadding: a = 0,
          avoidCollisions: l = true,
          collisionBoundary: u = [],
          collisionPadding: f = 0,
          sticky: p = "partial",
          hideWhenDetached: v = false,
          updatePositionStrategy: h = "optimized",
          onPlaced: b,
          ...m
        } = e,
        x = ew(up, n),
        [y, g] = d.useState(null),
        w = ge(t, (ie) => g(ie)),
        [C, k] = d.useState(null),
        T = Zx(C),
        N = (T == null ? void 0 : T.width) ?? 0,
        j = (T == null ? void 0 : T.height) ?? 0,
        D = r + (s !== "center" ? "-" + s : ""),
        I =
          typeof f == "number"
            ? f
            : { top: 0, right: 0, bottom: 0, left: 0, ...f },
        $ = Array.isArray(u) ? u : [u],
        B = $.length > 0,
        K = { padding: I, boundary: $.filter(VN), altBoundary: B },
        {
          refs: F,
          floatingStyles: te,
          placement: G,
          isPositioned: H,
          middlewareData: A,
        } = RN({
          strategy: "fixed",
          placement: D,
          whileElementsMounted: (...ie) =>
            SN(...ie, { animationFrame: h === "always" }),
          elements: { reference: x.anchor },
          middleware: [
            DN({ mainAxis: o + j, alignmentAxis: i }),
            l &&
              MN({
                mainAxis: true,
                crossAxis: false,
                limiter: p === "partial" ? ON() : void 0,
                ...K,
              }),
            l && IN({ ...K }),
            _N({
              ...K,
              apply: ({
                elements: ie,
                rects: ne,
                availableWidth: he,
                availableHeight: ve,
              }) => {
                const { width: we, height: Le } = ne.reference,
                  qe = ie.floating.style;
                (qe.setProperty("--radix-popper-available-width", `${he}px`),
                  qe.setProperty("--radix-popper-available-height", `${ve}px`),
                  qe.setProperty("--radix-popper-anchor-width", `${we}px`),
                  qe.setProperty("--radix-popper-anchor-height", `${Le}px`));
              },
            }),
            C && FN({ element: C, padding: a }),
            qN({ arrowWidth: N, arrowHeight: j }),
            v && LN({ strategy: "referenceHidden", ...K }),
          ],
        }),
        [P, E] = aw(G),
        S = ln(b);
      Ze(() => {
        H && (S == null || S());
      }, [H, S]);
      const R = (M = A.arrow) == null ? void 0 : M.x,
        L = (q = A.arrow) == null ? void 0 : q.y,
        z = ((ee = A.arrow) == null ? void 0 : ee.centerOffset) !== 0,
        [Q, V] = d.useState();
      return (
        Ze(() => {
          y && V(window.getComputedStyle(y).zIndex);
        }, [y]),
        c.jsx("div", {
          ref: F.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...te,
            transform: H ? te.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Q,
            "--radix-popper-transform-origin": [
              (U = A.transformOrigin) == null ? void 0 : U.x,
              (Y = A.transformOrigin) == null ? void 0 : Y.y,
            ].join(" "),
            ...(((X = A.hide) == null ? void 0 : X.referenceHidden) && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: e.dir,
          children: c.jsx(WN, {
            scope: n,
            placedSide: P,
            onArrowChange: k,
            arrowX: R,
            arrowY: L,
            shouldHideArrow: z,
            children: c.jsx(le.div, {
              "data-side": P,
              "data-align": E,
              ...m,
              ref: w,
              style: { ...m.style, animation: H ? void 0 : "none" },
            }),
          }),
        })
      );
    });
  ow.displayName = up;
  var sw = "PopperArrow",
    HN = { top: "bottom", right: "left", bottom: "top", left: "right" },
    iw = d.forwardRef(function (t, n) {
      const { __scopePopper: r, ...o } = t,
        s = UN(sw, r),
        i = HN[s.placedSide];
      return c.jsx("span", {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0",
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)",
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0,
        },
        children: c.jsx($N, {
          ...o,
          ref: n,
          style: { ...o.style, display: "block" },
        }),
      });
    });
  iw.displayName = sw;
  function VN(e) {
    return e !== null;
  }
  var qN = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      var x, y, g;
      const { placement: n, rects: r, middlewareData: o } = t,
        i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
        a = i ? 0 : e.arrowWidth,
        l = i ? 0 : e.arrowHeight,
        [u, f] = aw(n),
        p = { start: "0%", center: "50%", end: "100%" }[f],
        v = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + a / 2,
        h = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
      let b = "",
        m = "";
      return (
        u === "bottom"
          ? ((b = i ? p : `${v}px`), (m = `${-l}px`))
          : u === "top"
            ? ((b = i ? p : `${v}px`), (m = `${r.floating.height + l}px`))
            : u === "right"
              ? ((b = `${-l}px`), (m = i ? p : `${h}px`))
              : u === "left" &&
                ((b = `${r.floating.width + l}px`), (m = i ? p : `${h}px`)),
        { data: { x: b, y: m } }
      );
    },
  });
  function aw(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var GN = tw,
    lw = rw,
    cw = ow,
    uw = iw,
    [oc, kM] = Qn("Tooltip", [rc]),
    dp = rc(),
    dw = "TooltipProvider",
    QN = 700,
    _m = "tooltip.open",
    [KN, fw] = oc(dw),
    pw = (e) => {
      const {
          __scopeTooltip: t,
          delayDuration: n = QN,
          skipDelayDuration: r = 300,
          disableHoverableContent: o = false,
          children: s,
        } = e,
        i = d.useRef(true),
        a = d.useRef(false),
        l = d.useRef(0);
      return (
        d.useEffect(() => {
          const u = l.current;
          return () => window.clearTimeout(u);
        }, []),
        c.jsx(KN, {
          scope: t,
          isOpenDelayedRef: i,
          delayDuration: n,
          onOpen: d.useCallback(() => {
            (window.clearTimeout(l.current), (i.current = false));
          }, []),
          onClose: d.useCallback(() => {
            (window.clearTimeout(l.current),
              (l.current = window.setTimeout(() => (i.current = true), r)));
          }, [r]),
          isPointerInTransitRef: a,
          onPointerInTransitChange: d.useCallback((u) => {
            a.current = u;
          }, []),
          disableHoverableContent: o,
          children: s,
        })
      );
    };
  pw.displayName = dw;
  var hw = "Tooltip",
    [EM, sc] = oc(hw),
    Ad = "TooltipTrigger",
    YN = d.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = sc(Ad, n),
        s = fw(Ad, n),
        i = dp(n),
        a = d.useRef(null),
        l = ge(t, a, o.onTriggerChange),
        u = d.useRef(false),
        f = d.useRef(false),
        p = d.useCallback(() => (u.current = false), []);
      return (
        d.useEffect(
          () => () => document.removeEventListener("pointerup", p),
          [p],
        ),
        c.jsx(lw, {
          asChild: true,
          ...i,
          children: c.jsx(le.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: oe(e.onPointerMove, (v) => {
              v.pointerType !== "touch" &&
                !f.current &&
                !s.isPointerInTransitRef.current &&
                (o.onTriggerEnter(), (f.current = true));
            }),
            onPointerLeave: oe(e.onPointerLeave, () => {
              (o.onTriggerLeave(), (f.current = false));
            }),
            onPointerDown: oe(e.onPointerDown, () => {
              (o.open && o.onClose(),
                (u.current = true),
                document.addEventListener("pointerup", p, { once: true }));
            }),
            onFocus: oe(e.onFocus, () => {
              u.current || o.onOpen();
            }),
            onBlur: oe(e.onBlur, o.onClose),
            onClick: oe(e.onClick, o.onClose),
          }),
        })
      );
    });
  YN.displayName = Ad;
  var XN = "TooltipPortal",
    [TM, ZN] = oc(XN, { forceMount: void 0 }),
    us = "TooltipContent",
    mw = d.forwardRef((e, t) => {
      const n = ZN(us, e.__scopeTooltip),
        { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
        i = sc(us, e.__scopeTooltip);
      return c.jsx(go, {
        present: r || i.open,
        children: i.disableHoverableContent
          ? c.jsx(gw, { side: o, ...s, ref: t })
          : c.jsx(JN, { side: o, ...s, ref: t }),
      });
    }),
    JN = d.forwardRef((e, t) => {
      const n = sc(us, e.__scopeTooltip),
        r = fw(us, e.__scopeTooltip),
        o = d.useRef(null),
        s = ge(t, o),
        [i, a] = d.useState(null),
        { trigger: l, onClose: u } = n,
        f = o.current,
        { onPointerInTransitChange: p } = r,
        v = d.useCallback(() => {
          (a(null), p(false));
        }, [p]),
        h = d.useCallback(
          (b, m) => {
            const x = b.currentTarget,
              y = { x: b.clientX, y: b.clientY },
              g = oP(y, x.getBoundingClientRect()),
              w = sP(y, g),
              C = iP(m.getBoundingClientRect()),
              k = lP([...w, ...C]);
            (a(k), p(true));
          },
          [p],
        );
      return (
        d.useEffect(() => () => v(), [v]),
        d.useEffect(() => {
          if (l && f) {
            const b = (x) => h(x, f),
              m = (x) => h(x, l);
            return (
              l.addEventListener("pointerleave", b),
              f.addEventListener("pointerleave", m),
              () => {
                (l.removeEventListener("pointerleave", b),
                  f.removeEventListener("pointerleave", m));
              }
            );
          }
        }, [l, f, h, v]),
        d.useEffect(() => {
          if (i) {
            const b = (m) => {
              const x = m.target,
                y = { x: m.clientX, y: m.clientY },
                g =
                  (l == null ? void 0 : l.contains(x)) ||
                  (f == null ? void 0 : f.contains(x)),
                w = !aP(y, i);
              g ? v() : w && (v(), u());
            };
            return (
              document.addEventListener("pointermove", b),
              () => document.removeEventListener("pointermove", b)
            );
          }
        }, [l, f, i, u, v]),
        c.jsx(gw, { ...e, ref: s })
      );
    }),
    [eP, tP] = oc(hw, { isInside: false }),
    nP = Sk("TooltipContent"),
    gw = d.forwardRef((e, t) => {
      const {
          __scopeTooltip: n,
          children: r,
          "aria-label": o,
          onEscapeKeyDown: s,
          onPointerDownOutside: i,
          ...a
        } = e,
        l = sc(us, n),
        u = dp(n),
        { onClose: f } = l;
      return (
        d.useEffect(
          () => (
            document.addEventListener(_m, f),
            () => document.removeEventListener(_m, f)
          ),
          [f],
        ),
        d.useEffect(() => {
          if (l.trigger) {
            const p = (v) => {
              const h = v.target;
              h != null && h.contains(l.trigger) && f();
            };
            return (
              window.addEventListener("scroll", p, { capture: true }),
              () => window.removeEventListener("scroll", p, { capture: true })
            );
          }
        }, [l.trigger, f]),
        c.jsx($i, {
          asChild: true,
          disableOutsidePointerEvents: false,
          onEscapeKeyDown: s,
          onPointerDownOutside: i,
          onFocusOutside: (p) => p.preventDefault(),
          onDismiss: f,
          children: c.jsxs(cw, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
            children: [
              c.jsx(nP, { children: r }),
              c.jsx(eP, {
                scope: n,
                isInside: true,
                children: c.jsx(Hk, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r,
                }),
              }),
            ],
          }),
        })
      );
    });
  mw.displayName = us;
  var vw = "TooltipArrow",
    rP = d.forwardRef((e, t) => {
      const { __scopeTooltip: n, ...r } = e,
        o = dp(n);
      return tP(vw, n).isInside ? null : c.jsx(uw, { ...o, ...r, ref: t });
    });
  rP.displayName = vw;
  function oP(e, t) {
    const n = Math.abs(t.top - e.y),
      r = Math.abs(t.bottom - e.y),
      o = Math.abs(t.right - e.x),
      s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
      case s:
        return "left";
      case o:
        return "right";
      case n:
        return "top";
      case r:
        return "bottom";
      default:
        throw new Error("unreachable");
    }
  }
  function sP(e, t, n = 5) {
    const r = [];
    switch (t) {
      case "top":
        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
        break;
      case "bottom":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
        break;
      case "left":
        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
        break;
      case "right":
        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
        break;
    }
    return r;
  }
  function iP(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
      { x: o, y: t },
      { x: n, y: t },
      { x: n, y: r },
      { x: o, y: r },
    ];
  }
  function aP(e, t) {
    const { x: n, y: r } = e;
    let o = false;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
      const a = t[s],
        l = t[i],
        u = a.x,
        f = a.y,
        p = l.x,
        v = l.y;
      f > r != v > r && n < ((p - u) * (r - f)) / (v - f) + u && (o = !o);
    }
    return o;
  }
  function lP(e) {
    const t = e.slice();
    return (
      t.sort((n, r) =>
        n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
      ),
      cP(t)
    );
  }
  function cP(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      for (; t.length >= 2;) {
        const s = t[t.length - 1],
          i = t[t.length - 2];
        if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
        else break;
      }
      t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r];
      for (; n.length >= 2;) {
        const s = n[n.length - 1],
          i = n[n.length - 2];
        if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
        else break;
      }
      n.push(o);
    }
    return (
      n.pop(),
      t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
        ? t
        : t.concat(n)
    );
  }
  var uP = pw,
    yw = mw;
  const dP = uP,
    fP = d.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
      c.jsx(yw, {
        ref: r,
        sideOffset: t,
        className: be(
          "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e,
        ),
        ...n,
      }),
    );
  fP.displayName = yw.displayName;
  var ic = class {
      constructor() {
        ((this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this)));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            (this.listeners.delete(e), this.onUnsubscribe());
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    ac = typeof window > "u" || "Deno" in globalThis;
  function Zt() {}
  function pP(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function hP(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
  }
  function mP(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
  }
  function Dd(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function gP(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Lm(e, t) {
    const {
      type: n = "all",
      exact: r,
      fetchStatus: o,
      predicate: s,
      queryKey: i,
      stale: a,
    } = e;
    if (i) {
      if (r) {
        if (t.queryHash !== fp(i, t.options)) return false;
      } else if (!Ei(t.queryKey, i)) return false;
    }
    if (n !== "all") {
      const l = t.isActive();
      if ((n === "active" && !l) || (n === "inactive" && l)) return false;
    }
    return !(
      (typeof a == "boolean" && t.isStale() !== a) ||
      (o && o !== t.state.fetchStatus) ||
      (s && !s(t))
    );
  }
  function Fm(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: s } = e;
    if (s) {
      if (!t.options.mutationKey) return false;
      if (n) {
        if (ki(t.options.mutationKey) !== ki(s)) return false;
      } else if (!Ei(t.options.mutationKey, s)) return false;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
  }
  function fp(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ki)(e);
  }
  function ki(e) {
    return JSON.stringify(e, (t, n) =>
      Md(n)
        ? Object.keys(n)
            .sort()
            .reduce((r, o) => ((r[o] = n[o]), r), {})
        : n,
    );
  }
  function Ei(e, t) {
    return e === t
      ? true
      : typeof e != typeof t
        ? false
        : e && t && typeof e == "object" && typeof t == "object"
          ? Object.keys(t).every((n) => Ei(e[n], t[n]))
          : false;
  }
  function xw(e, t) {
    if (e === t) return e;
    const n = zm(e) && zm(t);
    if (n || (Md(e) && Md(t))) {
      const r = n ? e : Object.keys(e),
        o = r.length,
        s = n ? t : Object.keys(t),
        i = s.length,
        a = n ? [] : {},
        l = new Set(r);
      let u = 0;
      for (let f = 0; f < i; f++) {
        const p = n ? f : s[f];
        ((!n && l.has(p)) || n) && e[p] === void 0 && t[p] === void 0
          ? ((a[p] = void 0), u++)
          : ((a[p] = xw(e[p], t[p])), a[p] === e[p] && e[p] !== void 0 && u++);
      }
      return o === i && u === o ? e : a;
    }
    return t;
  }
  function zm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
  }
  function Md(e) {
    if (!$m(e)) return false;
    const t = e.constructor;
    if (t === void 0) return true;
    const n = t.prototype;
    return !(
      !$m(n) ||
      !n.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(e) !== Object.prototype
    );
  }
  function $m(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function vP(e) {
    return new Promise((t) => {
      setTimeout(t, e);
    });
  }
  function yP(e, t, n) {
    return typeof n.structuralSharing == "function"
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== false
        ? xw(e, t)
        : t;
  }
  function xP(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
  }
  function wP(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var pp = Symbol();
  function ww(e, t) {
    return !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === pp
        ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
        : e.queryFn;
  }
  var Yr,
    ar,
    Go,
    Ng,
    bP =
      ((Ng = class extends ic {
        constructor() {
          super();
          ye(this, Yr);
          ye(this, ar);
          ye(this, Go);
          ae(this, Go, (t) => {
            if (!ac && window.addEventListener) {
              const n = () => t();
              return (
                window.addEventListener("visibilitychange", n, false),
                () => {
                  window.removeEventListener("visibilitychange", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          _(this, ar) || this.setEventListener(_(this, Go));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = _(this, ar)) == null || t.call(this), ae(this, ar, void 0));
        }
        setEventListener(t) {
          var n;
          (ae(this, Go, t),
            (n = _(this, ar)) == null || n.call(this),
            ae(
              this,
              ar,
              t((r) => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
              }),
            ));
        }
        setFocused(t) {
          _(this, Yr) !== t && (ae(this, Yr, t), this.onFocus());
        }
        onFocus() {
          const t = this.isFocused();
          this.listeners.forEach((n) => {
            n(t);
          });
        }
        isFocused() {
          var t;
          return typeof _(this, Yr) == "boolean"
            ? _(this, Yr)
            : ((t = globalThis.document) == null
                ? void 0
                : t.visibilityState) !== "hidden";
        }
      }),
      (Yr = new WeakMap()),
      (ar = new WeakMap()),
      (Go = new WeakMap()),
      Ng),
    bw = new bP(),
    Qo,
    lr,
    Ko,
    Pg,
    SP =
      ((Pg = class extends ic {
        constructor() {
          super();
          ye(this, Qo, true);
          ye(this, lr);
          ye(this, Ko);
          ae(this, Ko, (t) => {
            if (!ac && window.addEventListener) {
              const n = () => t(true),
                r = () => t(false);
              return (
                window.addEventListener("online", n, false),
                window.addEventListener("offline", r, false),
                () => {
                  (window.removeEventListener("online", n),
                    window.removeEventListener("offline", r));
                }
              );
            }
          });
        }
        onSubscribe() {
          _(this, lr) || this.setEventListener(_(this, Ko));
        }
        onUnsubscribe() {
          var t;
          this.hasListeners() ||
            ((t = _(this, lr)) == null || t.call(this), ae(this, lr, void 0));
        }
        setEventListener(t) {
          var n;
          (ae(this, Ko, t),
            (n = _(this, lr)) == null || n.call(this),
            ae(this, lr, t(this.setOnline.bind(this))));
        }
        setOnline(t) {
          _(this, Qo) !== t &&
            (ae(this, Qo, t),
            this.listeners.forEach((r) => {
              r(t);
            }));
        }
        isOnline() {
          return _(this, Qo);
        }
      }),
      (Qo = new WeakMap()),
      (lr = new WeakMap()),
      (Ko = new WeakMap()),
      Pg),
    bl = new SP();
  function CP() {
    let e, t;
    const n = new Promise((o, s) => {
      ((e = o), (t = s));
    });
    ((n.status = "pending"), n.catch(() => {}));
    function r(o) {
      (Object.assign(n, o), delete n.resolve, delete n.reject);
    }
    return (
      (n.resolve = (o) => {
        (r({ status: "fulfilled", value: o }), e(o));
      }),
      (n.reject = (o) => {
        (r({ status: "rejected", reason: o }), t(o));
      }),
      n
    );
  }
  function kP(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
  }
  function Sw(e) {
    return (e ?? "online") === "online" ? bl.isOnline() : true;
  }
  var Cw = class extends Error {
    constructor(e) {
      (super("CancelledError"),
        (this.revert = e == null ? void 0 : e.revert),
        (this.silent = e == null ? void 0 : e.silent));
    }
  };
  function lu(e) {
    return e instanceof Cw;
  }
  function kw(e) {
    let t = false,
      n = 0,
      r = false,
      o;
    const s = CP(),
      i = (m) => {
        var x;
        r || (v(new Cw(m)), (x = e.abort) == null || x.call(e));
      },
      a = () => {
        t = true;
      },
      l = () => {
        t = false;
      },
      u = () =>
        bw.isFocused() &&
        (e.networkMode === "always" || bl.isOnline()) &&
        e.canRun(),
      f = () => Sw(e.networkMode) && e.canRun(),
      p = (m) => {
        var x;
        r ||
          ((r = true),
          (x = e.onSuccess) == null || x.call(e, m),
          o == null || o(),
          s.resolve(m));
      },
      v = (m) => {
        var x;
        r ||
          ((r = true),
          (x = e.onError) == null || x.call(e, m),
          o == null || o(),
          s.reject(m));
      },
      h = () =>
        new Promise((m) => {
          var x;
          ((o = (y) => {
            (r || u()) && m(y);
          }),
            (x = e.onPause) == null || x.call(e));
        }).then(() => {
          var m;
          ((o = void 0), r || (m = e.onContinue) == null || m.call(e));
        }),
      b = () => {
        if (r) return;
        let m;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
          m = x ?? e.fn();
        } catch (y) {
          m = Promise.reject(y);
        }
        Promise.resolve(m)
          .then(p)
          .catch((y) => {
            var T;
            if (r) return;
            const g = e.retry ?? (ac ? 0 : 3),
              w = e.retryDelay ?? kP,
              C = typeof w == "function" ? w(n, y) : w,
              k =
                g === true ||
                (typeof g == "number" && n < g) ||
                (typeof g == "function" && g(n, y));
            if (t || !k) {
              v(y);
              return;
            }
            (n++,
              (T = e.onFail) == null || T.call(e, n, y),
              vP(C)
                .then(() => (u() ? void 0 : h()))
                .then(() => {
                  t ? v(y) : b();
                }));
          });
      };
    return {
      promise: s,
      cancel: i,
      continue: () => (o == null || o(), s),
      cancelRetry: a,
      continueRetry: l,
      canStart: f,
      start: () => (f() ? b() : h().then(b), s),
    };
  }
  var EP = (e) => setTimeout(e, 0);
  function TP() {
    let e = [],
      t = 0,
      n = (a) => {
        a();
      },
      r = (a) => {
        a();
      },
      o = EP;
    const s = (a) => {
        t
          ? e.push(a)
          : o(() => {
              n(a);
            });
      },
      i = () => {
        const a = e;
        ((e = []),
          a.length &&
            o(() => {
              r(() => {
                a.forEach((l) => {
                  n(l);
                });
              });
            }));
      };
    return {
      batch: (a) => {
        let l;
        t++;
        try {
          l = a();
        } finally {
          (t--, t || i());
        }
        return l;
      },
      batchCalls:
        (a) =>
        (...l) => {
          s(() => {
            a(...l);
          });
        },
      schedule: s,
      setNotifyFunction: (a) => {
        n = a;
      },
      setBatchNotifyFunction: (a) => {
        r = a;
      },
      setScheduler: (a) => {
        o = a;
      },
    };
  }
  var mt = TP(),
    Xr,
    jg,
    Ew =
      ((jg = class {
        constructor() {
          ye(this, Xr);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          (this.clearGcTimeout(),
            hP(this.gcTime) &&
              ae(
                this,
                Xr,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime),
              ));
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (ac ? 1 / 0 : 5 * 60 * 1e3),
          );
        }
        clearGcTimeout() {
          _(this, Xr) && (clearTimeout(_(this, Xr)), ae(this, Xr, void 0));
        }
      }),
      (Xr = new WeakMap()),
      jg),
    Yo,
    Zr,
    zt,
    Jr,
    lt,
    Di,
    eo,
    Jt,
    On,
    Rg,
    NP =
      ((Rg = class extends Ew {
        constructor(t) {
          super();
          ye(this, Jt);
          ye(this, Yo);
          ye(this, Zr);
          ye(this, zt);
          ye(this, Jr);
          ye(this, lt);
          ye(this, Di);
          ye(this, eo);
          (ae(this, eo, false),
            ae(this, Di, t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            ae(this, Jr, t.client),
            ae(this, zt, _(this, Jr).getQueryCache()),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            ae(this, Yo, jP(this.options)),
            (this.state = t.state ?? _(this, Yo)),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var t;
          return (t = _(this, lt)) == null ? void 0 : t.promise;
        }
        setOptions(t) {
          ((this.options = { ..._(this, Di), ...t }),
            this.updateGcTime(this.options.gcTime));
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            _(this, zt).remove(this);
        }
        setData(t, n) {
          const r = yP(this.state.data, t, this.options);
          return (
            st(this, Jt, On).call(this, {
              data: r,
              type: "success",
              dataUpdatedAt: n == null ? void 0 : n.updatedAt,
              manual: n == null ? void 0 : n.manual,
            }),
            r
          );
        }
        setState(t, n) {
          st(this, Jt, On).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n,
          });
        }
        cancel(t) {
          var r, o;
          const n = (r = _(this, lt)) == null ? void 0 : r.promise;
          return (
            (o = _(this, lt)) == null || o.cancel(t),
            n ? n.then(Zt).catch(Zt) : Promise.resolve()
          );
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: true }));
        }
        reset() {
          (this.destroy(), this.setState(_(this, Yo)));
        }
        isActive() {
          return this.observers.some(
            (t) => gP(t.options.enabled, this) !== false,
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === pp ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return this.getObserversCount() > 0
            ? this.observers.some(
                (t) => Dd(t.options.staleTime, this) === "static",
              )
            : false;
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0 || this.state.isInvalidated;
        }
        isStaleByTime(t = 0) {
          return this.state.data === void 0
            ? true
            : t === "static"
              ? false
              : this.state.isInvalidated
                ? true
                : !mP(this.state.dataUpdatedAt, t);
        }
        onFocus() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
          (t == null || t.refetch({ cancelRefetch: false }),
            (n = _(this, lt)) == null || n.continue());
        }
        onOnline() {
          var n;
          const t = this.observers.find((r) => r.shouldFetchOnReconnect());
          (t == null || t.refetch({ cancelRefetch: false }),
            (n = _(this, lt)) == null || n.continue());
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            _(this, zt).notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((n) => n !== t)),
            this.observers.length ||
              (_(this, lt) &&
                (_(this, eo)
                  ? _(this, lt).cancel({ revert: true })
                  : _(this, lt).cancelRetry()),
              this.scheduleGc()),
            _(this, zt).notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            st(this, Jt, On).call(this, { type: "invalidate" });
        }
        fetch(t, n) {
          var u, f, p;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n != null && n.cancelRefetch)
              this.cancel({ silent: true });
            else if (_(this, lt))
              return (_(this, lt).continueRetry(), _(this, lt).promise);
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            const v = this.observers.find((h) => h.options.queryFn);
            v && this.setOptions(v.options);
          }
          const r = new AbortController(),
            o = (v) => {
              Object.defineProperty(v, "signal", {
                enumerable: true,
                get: () => (ae(this, eo, true), r.signal),
              });
            },
            s = () => {
              const v = ww(this.options, n),
                b = (() => {
                  const m = {
                    client: _(this, Jr),
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return (o(m), m);
                })();
              return (
                ae(this, eo, false),
                this.options.persister
                  ? this.options.persister(v, b, this)
                  : v(b)
              );
            },
            a = (() => {
              const v = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: _(this, Jr),
                state: this.state,
                fetchFn: s,
              };
              return (o(v), v);
            })();
          ((u = this.options.behavior) == null || u.onFetch(a, this),
            ae(this, Zr, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((f = a.fetchOptions) == null ? void 0 : f.meta)) &&
              st(this, Jt, On).call(this, {
                type: "fetch",
                meta: (p = a.fetchOptions) == null ? void 0 : p.meta,
              }));
          const l = (v) => {
            var h, b, m, x;
            ((lu(v) && v.silent) ||
              st(this, Jt, On).call(this, { type: "error", error: v }),
              lu(v) ||
                ((b = (h = _(this, zt).config).onError) == null ||
                  b.call(h, v, this),
                (x = (m = _(this, zt).config).onSettled) == null ||
                  x.call(m, this.state.data, v, this)),
              this.scheduleGc());
          };
          return (
            ae(
              this,
              lt,
              kw({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (v) => {
                  var h, b, m, x;
                  if (v === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(v);
                  } catch (y) {
                    l(y);
                    return;
                  }
                  ((b = (h = _(this, zt).config).onSuccess) == null ||
                    b.call(h, v, this),
                    (x = (m = _(this, zt).config).onSettled) == null ||
                      x.call(m, v, this.state.error, this),
                    this.scheduleGc());
                },
                onError: l,
                onFail: (v, h) => {
                  st(this, Jt, On).call(this, {
                    type: "failed",
                    failureCount: v,
                    error: h,
                  });
                },
                onPause: () => {
                  st(this, Jt, On).call(this, { type: "pause" });
                },
                onContinue: () => {
                  st(this, Jt, On).call(this, { type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => true,
              }),
            ),
            _(this, lt).start()
          );
        }
      }),
      (Yo = new WeakMap()),
      (Zr = new WeakMap()),
      (zt = new WeakMap()),
      (Jr = new WeakMap()),
      (lt = new WeakMap()),
      (Di = new WeakMap()),
      (eo = new WeakMap()),
      (Jt = new WeakSet()),
      (On = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...PP(r.data, this.options),
                fetchMeta: t.meta ?? null,
              };
            case "success":
              return (
                ae(this, Zr, void 0),
                {
                  ...r,
                  data: t.data,
                  dataUpdateCount: r.dataUpdateCount + 1,
                  dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: false,
                  status: "success",
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                }
              );
            case "error":
              const o = t.error;
              return lu(o) && o.revert && _(this, Zr)
                ? { ..._(this, Zr), fetchStatus: "idle" }
                : {
                    ...r,
                    error: o,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...r, isInvalidated: true };
            case "setState":
              return { ...r, ...t.state };
          }
        };
        ((this.state = n(this.state)),
          mt.batch(() => {
            (this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              _(this, zt).notify({ query: this, type: "updated", action: t }));
          }));
      }),
      Rg);
  function PP(e, t) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: Sw(t.networkMode) ? "fetching" : "paused",
      ...(e === void 0 && { error: null, status: "pending" }),
    };
  }
  function jP(e) {
    const t =
        typeof e.initialData == "function" ? e.initialData() : e.initialData,
      n = t !== void 0,
      r = n
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0;
    return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? (r ?? Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: false,
      status: n ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var xn,
    Ag,
    RP =
      ((Ag = class extends ic {
        constructor(t = {}) {
          super();
          ye(this, xn);
          ((this.config = t), ae(this, xn, new Map()));
        }
        build(t, n, r) {
          const o = n.queryKey,
            s = n.queryHash ?? fp(o, n);
          let i = this.get(s);
          return (
            i ||
              ((i = new NP({
                client: t,
                queryKey: o,
                queryHash: s,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o),
              })),
              this.add(i)),
            i
          );
        }
        add(t) {
          _(this, xn).has(t.queryHash) ||
            (_(this, xn).set(t.queryHash, t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          const n = _(this, xn).get(t.queryHash);
          n &&
            (t.destroy(),
            n === t && _(this, xn).delete(t.queryHash),
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          mt.batch(() => {
            this.getAll().forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return _(this, xn).get(t);
        }
        getAll() {
          return [..._(this, xn).values()];
        }
        find(t) {
          const n = { exact: true, ...t };
          return this.getAll().find((r) => Lm(n, r));
        }
        findAll(t = {}) {
          const n = this.getAll();
          return Object.keys(t).length > 0 ? n.filter((r) => Lm(t, r)) : n;
        }
        notify(t) {
          mt.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        onFocus() {
          mt.batch(() => {
            this.getAll().forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          mt.batch(() => {
            this.getAll().forEach((t) => {
              t.onOnline();
            });
          });
        }
      }),
      (xn = new WeakMap()),
      Ag),
    wn,
    pt,
    to,
    bn,
    er,
    Dg,
    AP =
      ((Dg = class extends Ew {
        constructor(t) {
          super();
          ye(this, bn);
          ye(this, wn);
          ye(this, pt);
          ye(this, to);
          ((this.mutationId = t.mutationId),
            ae(this, pt, t.mutationCache),
            ae(this, wn, []),
            (this.state = t.state || DP()),
            this.setOptions(t.options),
            this.scheduleGc());
        }
        setOptions(t) {
          ((this.options = t), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(t) {
          _(this, wn).includes(t) ||
            (_(this, wn).push(t),
            this.clearGcTimeout(),
            _(this, pt).notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          (ae(
            this,
            wn,
            _(this, wn).filter((n) => n !== t),
          ),
            this.scheduleGc(),
            _(this, pt).notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            }));
        }
        optionalRemove() {
          _(this, wn).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : _(this, pt).remove(this));
        }
        continue() {
          var t;
          return (
            ((t = _(this, to)) == null ? void 0 : t.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(t) {
          var s, i, a, l, u, f, p, v, h, b, m, x, y, g, w, C, k, T, N, j;
          const n = () => {
            st(this, bn, er).call(this, { type: "continue" });
          };
          ae(
            this,
            to,
            kw({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (D, I) => {
                st(this, bn, er).call(this, {
                  type: "failed",
                  failureCount: D,
                  error: I,
                });
              },
              onPause: () => {
                st(this, bn, er).call(this, { type: "pause" });
              },
              onContinue: n,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => _(this, pt).canRun(this),
            }),
          );
          const r = this.state.status === "pending",
            o = !_(this, to).canStart();
          try {
            if (r) n();
            else {
              (st(this, bn, er).call(this, {
                type: "pending",
                variables: t,
                isPaused: o,
              }),
                await ((i = (s = _(this, pt).config).onMutate) == null
                  ? void 0
                  : i.call(s, t, this)));
              const I = await ((l = (a = this.options).onMutate) == null
                ? void 0
                : l.call(a, t));
              I !== this.state.context &&
                st(this, bn, er).call(this, {
                  type: "pending",
                  context: I,
                  variables: t,
                  isPaused: o,
                });
            }
            const D = await _(this, to).start();
            return (
              await ((f = (u = _(this, pt).config).onSuccess) == null
                ? void 0
                : f.call(u, D, t, this.state.context, this)),
              await ((v = (p = this.options).onSuccess) == null
                ? void 0
                : v.call(p, D, t, this.state.context)),
              await ((b = (h = _(this, pt).config).onSettled) == null
                ? void 0
                : b.call(
                    h,
                    D,
                    null,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((x = (m = this.options).onSettled) == null
                ? void 0
                : x.call(m, D, null, t, this.state.context)),
              st(this, bn, er).call(this, { type: "success", data: D }),
              D
            );
          } catch (D) {
            try {
              throw (
                await ((g = (y = _(this, pt).config).onError) == null
                  ? void 0
                  : g.call(y, D, t, this.state.context, this)),
                await ((C = (w = this.options).onError) == null
                  ? void 0
                  : C.call(w, D, t, this.state.context)),
                await ((T = (k = _(this, pt).config).onSettled) == null
                  ? void 0
                  : T.call(
                      k,
                      void 0,
                      D,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await ((j = (N = this.options).onSettled) == null
                  ? void 0
                  : j.call(N, void 0, D, t, this.state.context)),
                D
              );
            } finally {
              st(this, bn, er).call(this, { type: "error", error: D });
            }
          } finally {
            _(this, pt).runNext(this);
          }
        }
      }),
      (wn = new WeakMap()),
      (pt = new WeakMap()),
      (to = new WeakMap()),
      (bn = new WeakSet()),
      (er = function (t) {
        const n = (r) => {
          switch (t.type) {
            case "failed":
              return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error,
              };
            case "pause":
              return { ...r, isPaused: true };
            case "continue":
              return { ...r, isPaused: false };
            case "pending":
              return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: false,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: false,
                status: "error",
              };
          }
        };
        ((this.state = n(this.state)),
          mt.batch(() => {
            (_(this, wn).forEach((r) => {
              r.onMutationUpdate(t);
            }),
              _(this, pt).notify({
                mutation: this,
                type: "updated",
                action: t,
              }));
          }));
      }),
      Dg);
  function DP() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var Ln,
    en,
    Mi,
    Mg,
    MP =
      ((Mg = class extends ic {
        constructor(t = {}) {
          super();
          ye(this, Ln);
          ye(this, en);
          ye(this, Mi);
          ((this.config = t),
            ae(this, Ln, new Set()),
            ae(this, en, new Map()),
            ae(this, Mi, 0));
        }
        build(t, n, r) {
          const o = new AP({
            mutationCache: this,
            mutationId: ++Yi(this, Mi)._,
            options: t.defaultMutationOptions(n),
            state: r,
          });
          return (this.add(o), o);
        }
        add(t) {
          _(this, Ln).add(t);
          const n = xa(t);
          if (typeof n == "string") {
            const r = _(this, en).get(n);
            r ? r.push(t) : _(this, en).set(n, [t]);
          }
          this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          if (_(this, Ln).delete(t)) {
            const n = xa(t);
            if (typeof n == "string") {
              const r = _(this, en).get(n);
              if (r)
                if (r.length > 1) {
                  const o = r.indexOf(t);
                  o !== -1 && r.splice(o, 1);
                } else r[0] === t && _(this, en).delete(n);
            }
          }
          this.notify({ type: "removed", mutation: t });
        }
        canRun(t) {
          const n = xa(t);
          if (typeof n == "string") {
            const r = _(this, en).get(n),
              o =
                r == null
                  ? void 0
                  : r.find((s) => s.state.status === "pending");
            return !o || o === t;
          } else return true;
        }
        runNext(t) {
          var r;
          const n = xa(t);
          if (typeof n == "string") {
            const o =
              (r = _(this, en).get(n)) == null
                ? void 0
                : r.find((s) => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
          } else return Promise.resolve();
        }
        clear() {
          mt.batch(() => {
            (_(this, Ln).forEach((t) => {
              this.notify({ type: "removed", mutation: t });
            }),
              _(this, Ln).clear(),
              _(this, en).clear());
          });
        }
        getAll() {
          return Array.from(_(this, Ln));
        }
        find(t) {
          const n = { exact: true, ...t };
          return this.getAll().find((r) => Fm(n, r));
        }
        findAll(t = {}) {
          return this.getAll().filter((n) => Fm(t, n));
        }
        notify(t) {
          mt.batch(() => {
            this.listeners.forEach((n) => {
              n(t);
            });
          });
        }
        resumePausedMutations() {
          const t = this.getAll().filter((n) => n.state.isPaused);
          return mt.batch(() =>
            Promise.all(t.map((n) => n.continue().catch(Zt))),
          );
        }
      }),
      (Ln = new WeakMap()),
      (en = new WeakMap()),
      (Mi = new WeakMap()),
      Mg);
  function xa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
  }
  function Bm(e) {
    return {
      onFetch: (t, n) => {
        var f, p, v, h, b;
        const r = t.options,
          o =
            (v =
              (p = (f = t.fetchOptions) == null ? void 0 : f.meta) == null
                ? void 0
                : p.fetchMore) == null
              ? void 0
              : v.direction,
          s = ((h = t.state.data) == null ? void 0 : h.pages) || [],
          i = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
        let a = { pages: [], pageParams: [] },
          l = 0;
        const u = async () => {
          let m = false;
          const x = (w) => {
              Object.defineProperty(w, "signal", {
                enumerable: true,
                get: () => (
                  t.signal.aborted
                    ? (m = true)
                    : t.signal.addEventListener("abort", () => {
                        m = true;
                      }),
                  t.signal
                ),
              });
            },
            y = ww(t.options, t.fetchOptions),
            g = async (w, C, k) => {
              if (m) return Promise.reject();
              if (C == null && w.pages.length) return Promise.resolve(w);
              const N = (() => {
                  const $ = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: C,
                    direction: k ? "backward" : "forward",
                    meta: t.options.meta,
                  };
                  return (x($), $);
                })(),
                j = await y(N),
                { maxPages: D } = t.options,
                I = k ? wP : xP;
              return {
                pages: I(w.pages, j, D),
                pageParams: I(w.pageParams, C, D),
              };
            };
          if (o && s.length) {
            const w = o === "backward",
              C = w ? OP : Wm,
              k = { pages: s, pageParams: i },
              T = C(r, k);
            a = await g(k, T, w);
          } else {
            const w = e ?? s.length;
            do {
              const C = l === 0 ? (i[0] ?? r.initialPageParam) : Wm(r, a);
              if (l > 0 && C == null) break;
              ((a = await g(a, C)), l++);
            } while (l < w);
          }
          return a;
        };
        t.options.persister
          ? (t.fetchFn = () => {
              var m, x;
              return (x = (m = t.options).persister) == null
                ? void 0
                : x.call(
                    m,
                    u,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n,
                  );
            })
          : (t.fetchFn = u);
      },
    };
  }
  function Wm(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
  }
  function OP(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0
      ? (r = e.getPreviousPageParam) == null
        ? void 0
        : r.call(e, t[0], t, n[0], n)
      : void 0;
  }
  var Ie,
    cr,
    ur,
    Xo,
    Zo,
    dr,
    Jo,
    es,
    Og,
    IP =
      ((Og = class {
        constructor(e = {}) {
          ye(this, Ie);
          ye(this, cr);
          ye(this, ur);
          ye(this, Xo);
          ye(this, Zo);
          ye(this, dr);
          ye(this, Jo);
          ye(this, es);
          (ae(this, Ie, e.queryCache || new RP()),
            ae(this, cr, e.mutationCache || new MP()),
            ae(this, ur, e.defaultOptions || {}),
            ae(this, Xo, new Map()),
            ae(this, Zo, new Map()),
            ae(this, dr, 0));
        }
        mount() {
          (Yi(this, dr)._++,
            _(this, dr) === 1 &&
              (ae(
                this,
                Jo,
                bw.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(), _(this, Ie).onFocus());
                }),
              ),
              ae(
                this,
                es,
                bl.subscribe(async (e) => {
                  e &&
                    (await this.resumePausedMutations(),
                    _(this, Ie).onOnline());
                }),
              )));
        }
        unmount() {
          var e, t;
          (Yi(this, dr)._--,
            _(this, dr) === 0 &&
              ((e = _(this, Jo)) == null || e.call(this),
              ae(this, Jo, void 0),
              (t = _(this, es)) == null || t.call(this),
              ae(this, es, void 0)));
        }
        isFetching(e) {
          return _(this, Ie).findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return _(this, cr).findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = _(this, Ie).get(t.queryHash)) == null
            ? void 0
            : n.state.data;
        }
        ensureQueryData(e) {
          const t = this.defaultQueryOptions(e),
            n = _(this, Ie).build(this, t),
            r = n.state.data;
          return r === void 0
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                n.isStaleByTime(Dd(t.staleTime, n)) &&
                this.prefetchQuery(t),
              Promise.resolve(r));
        }
        getQueriesData(e) {
          return _(this, Ie)
            .findAll(e)
            .map(({ queryKey: t, state: n }) => {
              const r = n.data;
              return [t, r];
            });
        }
        setQueryData(e, t, n) {
          const r = this.defaultQueryOptions({ queryKey: e }),
            o = _(this, Ie).get(r.queryHash),
            s = o == null ? void 0 : o.state.data,
            i = pP(t, s);
          if (i !== void 0)
            return _(this, Ie)
              .build(this, r)
              .setData(i, { ...n, manual: true });
        }
        setQueriesData(e, t, n) {
          return mt.batch(() =>
            _(this, Ie)
              .findAll(e)
              .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
          );
        }
        getQueryState(e) {
          var n;
          const t = this.defaultQueryOptions({ queryKey: e });
          return (n = _(this, Ie).get(t.queryHash)) == null ? void 0 : n.state;
        }
        removeQueries(e) {
          const t = _(this, Ie);
          mt.batch(() => {
            t.findAll(e).forEach((n) => {
              t.remove(n);
            });
          });
        }
        resetQueries(e, t) {
          const n = _(this, Ie);
          return mt.batch(
            () => (
              n.findAll(e).forEach((r) => {
                r.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            ),
          );
        }
        cancelQueries(e, t = {}) {
          const n = { revert: true, ...t },
            r = mt.batch(() =>
              _(this, Ie)
                .findAll(e)
                .map((o) => o.cancel(n)),
            );
          return Promise.all(r).then(Zt).catch(Zt);
        }
        invalidateQueries(e, t = {}) {
          return mt.batch(
            () => (
              _(this, Ie)
                .findAll(e)
                .forEach((n) => {
                  n.invalidate();
                }),
              (e == null ? void 0 : e.refetchType) === "none"
                ? Promise.resolve()
                : this.refetchQueries(
                    {
                      ...e,
                      type:
                        (e == null ? void 0 : e.refetchType) ??
                        (e == null ? void 0 : e.type) ??
                        "active",
                    },
                    t,
                  )
            ),
          );
        }
        refetchQueries(e, t = {}) {
          const n = { ...t, cancelRefetch: t.cancelRefetch ?? true },
            r = mt.batch(() =>
              _(this, Ie)
                .findAll(e)
                .filter((o) => !o.isDisabled() && !o.isStatic())
                .map((o) => {
                  let s = o.fetch(void 0, n);
                  return (
                    n.throwOnError || (s = s.catch(Zt)),
                    o.state.fetchStatus === "paused" ? Promise.resolve() : s
                  );
                }),
            );
          return Promise.all(r).then(Zt);
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e);
          t.retry === void 0 && (t.retry = false);
          const n = _(this, Ie).build(this, t);
          return n.isStaleByTime(Dd(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(Zt).catch(Zt);
        }
        fetchInfiniteQuery(e) {
          return ((e.behavior = Bm(e.pages)), this.fetchQuery(e));
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(Zt).catch(Zt);
        }
        ensureInfiniteQueryData(e) {
          return ((e.behavior = Bm(e.pages)), this.ensureQueryData(e));
        }
        resumePausedMutations() {
          return bl.isOnline()
            ? _(this, cr).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return _(this, Ie);
        }
        getMutationCache() {
          return _(this, cr);
        }
        getDefaultOptions() {
          return _(this, ur);
        }
        setDefaultOptions(e) {
          ae(this, ur, e);
        }
        setQueryDefaults(e, t) {
          _(this, Xo).set(ki(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          const t = [..._(this, Xo).values()],
            n = {};
          return (
            t.forEach((r) => {
              Ei(e, r.queryKey) && Object.assign(n, r.defaultOptions);
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          _(this, Zo).set(ki(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          const t = [..._(this, Zo).values()],
            n = {};
          return (
            t.forEach((r) => {
              Ei(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          const t = {
            ..._(this, ur).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: true,
          };
          return (
            t.queryHash || (t.queryHash = fp(t.queryKey, t)),
            t.refetchOnReconnect === void 0 &&
              (t.refetchOnReconnect = t.networkMode !== "always"),
            t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === pp && (t.enabled = false),
            t
          );
        }
        defaultMutationOptions(e) {
          return e != null && e._defaulted
            ? e
            : {
                ..._(this, ur).mutations,
                ...((e == null ? void 0 : e.mutationKey) &&
                  this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: true,
              };
        }
        clear() {
          (_(this, Ie).clear(), _(this, cr).clear());
        }
      }),
      (Ie = new WeakMap()),
      (cr = new WeakMap()),
      (ur = new WeakMap()),
      (Xo = new WeakMap()),
      (Zo = new WeakMap()),
      (dr = new WeakMap()),
      (Jo = new WeakMap()),
      (es = new WeakMap()),
      Og),
    _P = d.createContext(void 0),
    LP = ({ client: e, children: t }) => (
      d.useEffect(
        () => (
          e.mount(),
          () => {
            e.unmount();
          }
        ),
        [e],
      ),
      c.jsx(_P.Provider, { value: e, children: t })
    );
  /**
   * @remix-run/router v1.23.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Ti() {
    return (
      (Ti = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ti.apply(this, arguments)
    );
  }
  var hr;
  (function (e) {
    ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
  })(hr || (hr = {}));
  const Um = "popstate";
  function FP(e) {
    e === void 0 && (e = {});
    function t(r, o) {
      let { pathname: s, search: i, hash: a } = r.location;
      return Od(
        "",
        { pathname: s, search: i, hash: a },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      );
    }
    function n(r, o) {
      return typeof o == "string" ? o : Sl(o);
    }
    return $P(t, n, null, e);
  }
  function $e(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function Tw(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function zP() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Hm(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Od(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      Ti(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? vs(t) : t,
        { state: n, key: (t && t.key) || r || zP() },
      )
    );
  }
  function Sl(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function vs(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function $P(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: s = false } = r,
      i = o.history,
      a = hr.Pop,
      l = null,
      u = f();
    u == null && ((u = 0), i.replaceState(Ti({}, i.state, { idx: u }), ""));
    function f() {
      return (i.state || { idx: null }).idx;
    }
    function p() {
      a = hr.Pop;
      let x = f(),
        y = x == null ? null : x - u;
      ((u = x), l && l({ action: a, location: m.location, delta: y }));
    }
    function v(x, y) {
      a = hr.Push;
      let g = Od(m.location, x, y);
      u = f() + 1;
      let w = Hm(g, u),
        C = m.createHref(g);
      try {
        i.pushState(w, "", C);
      } catch (k) {
        if (k instanceof DOMException && k.name === "DataCloneError") throw k;
        o.location.assign(C);
      }
      s && l && l({ action: a, location: m.location, delta: 1 });
    }
    function h(x, y) {
      a = hr.Replace;
      let g = Od(m.location, x, y);
      u = f();
      let w = Hm(g, u),
        C = m.createHref(g);
      (i.replaceState(w, "", C),
        s && l && l({ action: a, location: m.location, delta: 0 }));
    }
    function b(x) {
      let y =
          o.location.origin !== "null" ? o.location.origin : o.location.href,
        g = typeof x == "string" ? x : Sl(x);
      return (
        (g = g.replace(/ $/, "%20")),
        $e(
          y,
          "No window.location.(origin|href) available to create URL for href: " +
            g,
        ),
        new URL(g, y)
      );
    }
    let m = {
      get action() {
        return a;
      },
      get location() {
        return e(o, i);
      },
      listen(x) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(Um, p),
          (l = x),
          () => {
            (o.removeEventListener(Um, p), (l = null));
          }
        );
      },
      createHref(x) {
        return t(o, x);
      },
      createURL: b,
      encodeLocation(x) {
        let y = b(x);
        return { pathname: y.pathname, search: y.search, hash: y.hash };
      },
      push: v,
      replace: h,
      go(x) {
        return i.go(x);
      },
    };
    return m;
  }
  var Vm;
  (function (e) {
    ((e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error"));
  })(Vm || (Vm = {}));
  function BP(e, t, n) {
    return (n === void 0 && (n = "/"), WP(e, t, n, false));
  }
  function WP(e, t, n, r) {
    let o = typeof t == "string" ? vs(t) : t,
      s = hp(o.pathname || "/", n);
    if (s == null) return null;
    let i = Nw(e);
    UP(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
      let u = ej(s);
      a = ZP(i[l], u, r);
    }
    return a;
  }
  function Nw(e, t, n, r) {
    (t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = ""));
    let o = (s, i, a) => {
      let l = {
        relativePath: a === void 0 ? s.path || "" : a,
        caseSensitive: s.caseSensitive === true,
        childrenIndex: i,
        route: s,
      };
      l.relativePath.startsWith("/") &&
        ($e(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = kr([r, l.relativePath]),
        f = n.concat(l);
      (s.children &&
        s.children.length > 0 &&
        ($e(
          s.index !== true,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        Nw(s.children, t, f, u)),
        !(s.path == null && !s.index) &&
          t.push({ path: u, score: YP(u, s.index), routesMeta: f }));
    };
    return (
      e.forEach((s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
          o(s, i);
        else for (let l of Pw(s.path)) o(s, i, l);
      }),
      t
    );
  }
  function Pw(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      o = n.endsWith("?"),
      s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let i = Pw(r.join("/")),
      a = [];
    return (
      a.push(...i.map((l) => (l === "" ? s : [s, l].join("/")))),
      o && a.push(...i),
      a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function UP(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : XP(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const HP = /^:[\w-]+$/,
    VP = 3,
    qP = 2,
    GP = 1,
    QP = 10,
    KP = -2,
    qm = (e) => e === "*";
  function YP(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(qm) && (r += KP),
      t && (r += qP),
      n
        .filter((o) => !qm(o))
        .reduce((o, s) => o + (HP.test(s) ? VP : s === "" ? GP : QP), r)
    );
  }
  function XP(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function ZP(e, t, n) {
    let { routesMeta: r } = e,
      o = {},
      s = "/",
      i = [];
    for (let a = 0; a < r.length; ++a) {
      let l = r[a],
        u = a === r.length - 1,
        f = s === "/" ? t : t.slice(s.length) || "/",
        p = Gm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
          f,
        ),
        v = l.route;
      if (
        (!p &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (p = Gm(
            {
              path: l.relativePath,
              caseSensitive: l.caseSensitive,
              end: false,
            },
            f,
          )),
        !p)
      )
        return null;
      (Object.assign(o, p.params),
        i.push({
          params: o,
          pathname: kr([s, p.pathname]),
          pathnameBase: oj(kr([s, p.pathnameBase])),
          route: v,
        }),
        p.pathnameBase !== "/" && (s = kr([s, p.pathnameBase])));
    }
    return i;
  }
  function Gm(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: false, end: true });
    let [n, r] = JP(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let s = o[0],
      i = s.replace(/(.)\/+$/, "$1"),
      a = o.slice(1);
    return {
      params: r.reduce((u, f, p) => {
        let { paramName: v, isOptional: h } = f;
        if (v === "*") {
          let m = a[p] || "";
          i = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
        }
        const b = a[p];
        return (
          h && !b ? (u[v] = void 0) : (u[v] = (b || "").replace(/%2F/g, "/")),
          u
        );
      }, {}),
      pathname: s,
      pathnameBase: i,
      pattern: e,
    };
  }
  function JP(e, t, n) {
    (t === void 0 && (t = false),
      n === void 0 && (n = true),
      Tw(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      ));
    let r = [],
      o =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (i, a, l) => (
              r.push({ paramName: a, isOptional: l != null }),
              l ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (o += "\\/*$")
          : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
      [new RegExp(o, t ? void 0 : "i"), r]
    );
  }
  function ej(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        Tw(
          false,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ")."),
        ),
        e
      );
    }
  }
  function hp(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function tj(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: o = "",
    } = typeof e == "string" ? vs(e) : e;
    return {
      pathname: n ? (n.startsWith("/") ? n : nj(n, t)) : t,
      search: sj(r),
      hash: ij(o),
    };
  }
  function nj(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((o) => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function cu(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the ") +
      ("`to." +
        n +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function rj(e) {
    return e.filter(
      (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function mp(e, t) {
    let n = rj(e);
    return t
      ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
      : n.map((r) => r.pathnameBase);
  }
  function gp(e, t, n, r) {
    r === void 0 && (r = false);
    let o;
    typeof e == "string"
      ? (o = vs(e))
      : ((o = Ti({}, e)),
        $e(
          !o.pathname || !o.pathname.includes("?"),
          cu("?", "pathname", "search", o),
        ),
        $e(
          !o.pathname || !o.pathname.includes("#"),
          cu("#", "pathname", "hash", o),
        ),
        $e(!o.search || !o.search.includes("#"), cu("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "",
      i = s ? "/" : o.pathname,
      a;
    if (i == null) a = n;
    else {
      let p = t.length - 1;
      if (!r && i.startsWith("..")) {
        let v = i.split("/");
        for (; v[0] === "..";) (v.shift(), (p -= 1));
        o.pathname = v.join("/");
      }
      a = p >= 0 ? t[p] : "/";
    }
    let l = tj(o, a),
      u = i && i !== "/" && i.endsWith("/"),
      f = (s || i === ".") && n.endsWith("/");
    return (!l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l);
  }
  const kr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    oj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    sj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    ij = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function aj(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const jw = ["post", "put", "patch", "delete"];
  new Set(jw);
  const lj = ["get", ...jw];
  new Set(lj);
  /**
   * React Router v6.30.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function Ni() {
    return (
      (Ni = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ni.apply(this, arguments)
    );
  }
  const vp = d.createContext(null),
    cj = d.createContext(null),
    _r = d.createContext(null),
    lc = d.createContext(null),
    Lr = d.createContext({ outlet: null, matches: [], isDataRoute: false }),
    Rw = d.createContext(null);
  function ys() {
    return d.useContext(lc) != null;
  }
  function xs() {
    return (ys() || $e(false), d.useContext(lc).location);
  }
  function Aw(e) {
    d.useContext(_r).static || d.useLayoutEffect(e);
  }
  function Dw() {
    let { isDataRoute: e } = d.useContext(Lr);
    return e ? Cj() : dj();
  }
  function dj() {
    ys() || $e(false);
    let e = d.useContext(vp),
      { basename: t, future: n, navigator: r } = d.useContext(_r),
      { matches: o } = d.useContext(Lr),
      { pathname: s } = xs(),
      i = JSON.stringify(mp(o, n.v7_relativeSplatPath)),
      a = d.useRef(false);
    return (
      Aw(() => {
        a.current = true;
      }),
      d.useCallback(
        function (u, f) {
          if ((f === void 0 && (f = {}), !a.current)) return;
          if (typeof u == "number") {
            r.go(u);
            return;
          }
          let p = gp(u, JSON.parse(i), s, f.relative === "path");
          (e == null &&
            t !== "/" &&
            (p.pathname = p.pathname === "/" ? t : kr([t, p.pathname])),
            (f.replace ? r.replace : r.push)(p, f.state, f));
        },
        [t, r, i, s, e],
      )
    );
  }
  function Mw(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
      { future: r } = d.useContext(_r),
      { matches: o } = d.useContext(Lr),
      { pathname: s } = xs(),
      i = JSON.stringify(mp(o, r.v7_relativeSplatPath));
    return d.useMemo(() => gp(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
  }
  function fj(e, t) {
    return pj(e, t);
  }
  function pj(e, t, n, r) {
    ys() || $e(false);
    let { navigator: o } = d.useContext(_r),
      { matches: s } = d.useContext(Lr),
      i = s[s.length - 1],
      a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = xs(),
      f;
    if (t) {
      var p;
      let x = typeof t == "string" ? vs(t) : t;
      (l === "/" || ((p = x.pathname) != null && p.startsWith(l)) || $e(false),
        (f = x));
    } else f = u;
    let v = f.pathname || "/",
      h = v;
    if (l !== "/") {
      let x = l.replace(/^\//, "").split("/");
      h = "/" + v.replace(/^\//, "").split("/").slice(x.length).join("/");
    }
    let b = BP(e, { pathname: h }),
      m = yj(
        b &&
          b.map((x) =>
            Object.assign({}, x, {
              params: Object.assign({}, a, x.params),
              pathname: kr([
                l,
                o.encodeLocation
                  ? o.encodeLocation(x.pathname).pathname
                  : x.pathname,
              ]),
              pathnameBase:
                x.pathnameBase === "/"
                  ? l
                  : kr([
                      l,
                      o.encodeLocation
                        ? o.encodeLocation(x.pathnameBase).pathname
                        : x.pathnameBase,
                    ]),
            }),
          ),
        s,
        n,
        r,
      );
    return t && m
      ? d.createElement(
          lc.Provider,
          {
            value: {
              location: Ni(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                f,
              ),
              navigationType: hr.Pop,
            },
          },
          m,
        )
      : m;
  }
  function hj() {
    let e = Sj(),
      t = aj(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return d.createElement(
      d.Fragment,
      null,
      d.createElement("h2", null, "Unexpected Application Error!"),
      d.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? d.createElement("pre", { style: o }, n) : null,
      null,
    );
  }
  const mj = d.createElement(hj, null);
  class gj extends d.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n,
      );
    }
    render() {
      return this.state.error !== void 0
        ? d.createElement(
            Lr.Provider,
            { value: this.props.routeContext },
            d.createElement(Rw.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function vj(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = d.useContext(vp);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      d.createElement(Lr.Provider, { value: t }, r)
    );
  }
  function yj(e, t, n, r) {
    var o;
    if (
      (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
    ) {
      var s;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (
        (s = r) != null &&
        s.v7_partialHydration &&
        t.length === 0 &&
        !n.initialized &&
        n.matches.length > 0
      )
        e = n.matches;
      else return null;
    }
    let i = e,
      a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
      let f = i.findIndex(
        (p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0,
      );
      (f >= 0 || $e(false), (i = i.slice(0, Math.min(i.length, f + 1))));
    }
    let l = false,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let f = 0; f < i.length; f++) {
        let p = i[f];
        if (
          ((p.route.HydrateFallback || p.route.hydrateFallbackElement) &&
            (u = f),
          p.route.id)
        ) {
          let { loaderData: v, errors: h } = n,
            b =
              p.route.loader &&
              v[p.route.id] === void 0 &&
              (!h || h[p.route.id] === void 0);
          if (p.route.lazy || b) {
            ((l = true), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]));
            break;
          }
        }
      }
    return i.reduceRight((f, p, v) => {
      let h,
        b = false,
        m = null,
        x = null;
      n &&
        ((h = a && p.route.id ? a[p.route.id] : void 0),
        (m = p.route.errorElement || mj),
        l &&
          (u < 0 && v === 0
            ? ((b = true), (x = null))
            : u === v &&
              ((b = true), (x = p.route.hydrateFallbackElement || null))));
      let y = t.concat(i.slice(0, v + 1)),
        g = () => {
          let w;
          return (
            h
              ? (w = m)
              : b
                ? (w = x)
                : p.route.Component
                  ? (w = d.createElement(p.route.Component, null))
                  : p.route.element
                    ? (w = p.route.element)
                    : (w = f),
            d.createElement(vj, {
              match: p,
              routeContext: { outlet: f, matches: y, isDataRoute: n != null },
              children: w,
            })
          );
        };
      return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
        ? d.createElement(gj, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: h,
            children: g(),
            routeContext: { outlet: null, matches: y, isDataRoute: true },
          })
        : g();
    }, null);
  }
  var Ow = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(Ow || {}),
    Cl = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(Cl || {});
  function xj(e) {
    let t = d.useContext(vp);
    return (t || $e(false), t);
  }
  function wj(e) {
    let t = d.useContext(cj);
    return (t || $e(false), t);
  }
  function bj() {
    let t = d.useContext(Lr);
    return (t || $e(false), t);
  }
  function Iw(e) {
    let t = bj(),
      n = t.matches[t.matches.length - 1];
    return (n.route.id || $e(false), n.route.id);
  }
  function Sj() {
    var e;
    let t = d.useContext(Rw),
      n = wj(Cl.UseRouteError),
      r = Iw(Cl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function Cj() {
    let { router: e } = xj(Ow.UseNavigateStable),
      t = Iw(Cl.UseNavigateStable),
      n = d.useRef(false);
    return (
      Aw(() => {
        n.current = true;
      }),
      d.useCallback(
        function (o, s) {
          (s === void 0 && (s = {}),
            n.current &&
              (typeof o == "number"
                ? e.navigate(o)
                : e.navigate(o, Ni({ fromRouteId: t }, s))));
        },
        [e, t],
      )
    );
  }
  function kj(e) {
    (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
  }
  function Nt(e) {
    $e(false);
  }
  function Ej(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: o = hr.Pop,
      navigator: s,
      static: i = false,
      future: a,
    } = e;
    ys() && $e(false);
    let l = t.replace(/^\/*/, "/"),
      u = d.useMemo(
        () => ({
          basename: l,
          navigator: s,
          static: i,
          future: Ni({ v7_relativeSplatPath: false }, a),
        }),
        [l, a, s, i],
      );
    typeof r == "string" && (r = vs(r));
    let {
        pathname: f = "/",
        search: p = "",
        hash: v = "",
        state: h = null,
        key: b = "default",
      } = r,
      m = d.useMemo(() => {
        let x = hp(f, l);
        return x == null
          ? null
          : {
              location: { pathname: x, search: p, hash: v, state: h, key: b },
              navigationType: o,
            };
      }, [l, f, p, v, h, b, o]);
    return m == null
      ? null
      : d.createElement(
          _r.Provider,
          { value: u },
          d.createElement(lc.Provider, { children: n, value: m }),
        );
  }
  function Tj(e) {
    let { children: t, location: n } = e;
    return fj(Id(t), n);
  }
  new Promise(() => {});
  function Id(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      d.Children.forEach(e, (r, o) => {
        if (!d.isValidElement(r)) return;
        let s = [...t, o];
        if (r.type === d.Fragment) {
          n.push.apply(n, Id(r.props.children, s));
          return;
        }
        (r.type !== Nt && $e(false),
          !r.props.index || !r.props.children || $e(false));
        let i = {
          id: r.props.id || s.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        (r.props.children && (i.children = Id(r.props.children, s)), n.push(i));
      }),
      n
    );
  }
  function Pj(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function jj(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Pj(e);
  }
  const Aj = "6";
  try {
    window.__reactRouterVersion = Aj;
  } catch {}
  const Dj = "startTransition",
    Qm = of[Dj];
  function Mj(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      s = d.useRef();
    s.current == null && (s.current = FP({ window: o, v5Compat: true }));
    let i = s.current,
      [a, l] = d.useState({ action: i.action, location: i.location }),
      { v7_startTransition: u } = r || {},
      f = d.useCallback(
        (p) => {
          u && Qm ? Qm(() => l(p)) : l(p);
        },
        [l, u],
      );
    return (
      d.useLayoutEffect(() => i.listen(f), [i, f]),
      d.useEffect(() => kj(r), [r]),
      d.createElement(Ej, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r,
      })
    );
  }
  var Km;
  (function (e) {
    ((e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState"));
  })(Km || (Km = {}));
  var Ym;
  (function (e) {
    ((e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration"));
  })(Ym || (Ym = {}));
  const yp = {
    pastel: [
      "#FFB3BA",
      "#FFDFBA",
      "#FFFFBA",
      "#BAFFC9",
      "#BAE1FF",
      "#E8BAFF",
      "#FFB3DE",
      "#B3FFE0",
    ],
    bold: [
      "#FF6B6B",
      "#FFA726",
      "#FFEE58",
      "#66BB6A",
      "#42A5F5",
      "#AB47BC",
      "#EC407A",
      "#26C6DA",
    ],
    neon: [
      "#FF006E",
      "#FB5607",
      "#FFBE0B",
      "#8338EC",
      "#3A86FF",
      "#06D6A0",
      "#FF49DB",
      "#00F5D4",
    ],
    classic: [
      "#E74C3C",
      "#3498DB",
      "#2ECC71",
      "#F39C12",
      "#9B59B6",
      "#1ABC9C",
      "#E67E22",
      "#34495E",
    ],
    ocean: [
      "#0077B6",
      "#00B4D8",
      "#90E0EF",
      "#CAF0F8",
      "#023E8A",
      "#48CAE4",
      "#ADE8F4",
      "#0096C7",
    ],
  };
  function Sn() {
    return Math.random().toString(36).substring(2, 9);
  }
  const Xm = {
    en: {
      guidesTitle: "Guides & Tutorials",
      guideClassroom: "Classroom Games with a Rigged Wheel",
      guideParty: "How to Rig a Wheel for Parties",
      guideGiveaway: "Wheel of Names for Giveaways",
      readGuide: "Read guide",
      navAbout: "About",
      navPrivacy: "Privacy",
      navCookies: "Cookies",
      navTerms: "Terms",
      cookieBannerText:
        "We use essential storage to keep your wheel settings on your device, and optional cookies for analytics and advertising. Read our",
      cookiePolicy: "Cookie Policy",
      acceptAll: "Accept all",
      declineOptional: "Decline optional",
      cookieConsent: "Cookie consent",
      title: "Fake Wheel Decide",
      stealthTitle: "Spin the Wheel",
      subtitle: "Add your choices, set secret probabilities, and spin!",
      stealthSubtitle: "Add your choices and spin!",
      spin: "SPIN",
      addEntry: "Add entry",
      pasteList: "Paste List",
      clearAll: "Clear All",
      entryPlaceholder: "Enter option...",
      secretSettings: "Secret Settings",
      weight: "Weight",
      colorTheme: "Color Theme",
      spinMode: "Spin Mode",
      normal: "Normal",
      elimination: "Elimination",
      order: "Order",
      predetermined: "Predetermined",
      result: "Result",
      winner: "Winner!",
      spinAgain: "Spin Again",
      close: "Close",
      soundOn: "Sound On",
      soundOff: "Sound Off",
      fullScreen: "Full Screen",
      exitFullScreen: "Exit Full Screen",
      predeterminedDesc:
        "Set the exact order of winners below. Each spin picks the next entry.",
      predeterminedSlot: "Spin",
      selectWinner: "Select winner...",
      howToUseTitle: "How to Use Fake Wheel Decide",
      howToUseDesc:
        "Fake Wheel Decide is a free online tool that lets you secretly control the outcome of a spinning wheel. Set hidden probabilities, predetermine winners, or use it as a normal random picker. Perfect for pranks, games, classroom activities, and entertainment!",
      howToStep1: "1. Add your options by typing them in or pasting a list.",
      howToStep2:
        "2. Open Secret Settings to set hidden probabilities or predetermined winners.",
      howToStep3:
        "3. Click SPIN — the wheel looks random but lands where you want!",
      faqTitle: "Frequently Asked Questions",
      faq1Q: "Is this wheel really rigged?",
      faq1A:
        "Yes! You can set hidden probabilities for each option so the wheel is secretly weighted. Visually, all slices look equal — but the outcome is controlled by your secret settings. You can also predetermine the exact order of winners.",
      faq2Q: "Can spectators tell it's rigged?",
      faq2A:
        "No. The wheel looks completely normal and fair. Use Full Screen mode to hide all settings, and the stealth dark mode makes configuring look like a different app entirely.",
      faq3Q: "Can I use it on my phone?",
      faq3A:
        "Absolutely. Fake Wheel Decide is fully responsive and works great on mobile devices, tablets, and desktops.",
      faq4Q: "What are the different spin modes?",
      faq4A:
        "Normal mode picks based on your hidden probabilities. Elimination removes the winner each spin. Order creates a full ranking. Predetermined lets you set the exact sequence of winners in advance.",
      faq5Q: "Can you use it without rigging?",
      faq5A:
        "Of course! If you don't change anything in the Secret Settings, it's a completely random wheel. Total fairness — no rigging at all.",
      faq6Q: "Is it free to use?",
      faq6A:
        "Yes, Fake Wheel Decide is 100% free. No sign-up, no downloads, no hidden fees. Just open the page and start spinning.",
      faq7Q: "Can I use this for giveaways or raffles?",
      faq7A:
        "Absolutely! Add participant names, spin the wheel, and let it pick a winner. Use Elimination mode to draw multiple winners without repeats.",
      faq8Q: "Does it work offline?",
      faq8A:
        "Once the page is loaded, the wheel runs entirely in your browser. No internet connection is needed to spin, though you'll need to be online to initially load the page.",
      faq9Q: "How do I share my wheel with others?",
      faq9A:
        "Currently you can share your screen or use Full Screen mode to display the wheel to others. Shareable links are coming in a future update!",
      faq10Q: "Is my data stored anywhere?",
      faq10A:
        "No. Everything stays in your browser. We don't collect, store, or transmit any of your wheel data or personal information.",
      useCaseTitle: "What Can You Use It For?",
      useCaseDecisionTitle: "Family Game Night",
      useCaseDecisionDesc:
        "Can't agree on what board game to play, whose turn it is to pick the movie, or who gets the last slice of pizza? Let the wheel settle it. No more arguments — just spin and go with it. Half the fun is watching everyone hold their breath while it slows down.",
      useCaseGamesTitle: "Kids' Birthday Parties",
      useCaseGamesDesc: `Need to pick who goes first in a party game? Want your birthday kid to "randomly" win a prize? Add all the kids' names, set a little secret weight, and let the magic happen. It looks totally fair, everyone cheers, and nobody has to know you gave the birthday star a little extra luck.`,
      useCaseClassroomTitle: "Classroom Fun",
      useCaseClassroomDesc:
        "Teachers love this for picking students to answer questions, assigning group projects, or choosing topics for discussion. It turns boring random selection into an event the whole class gets excited about. Works great on projectors and smartboards too — just go full screen and let the kids watch it spin.",
      useCaseBusinessTitle: "Office Decisions & Team Building",
      useCaseBusinessDesc:
        "Who's buying coffee this morning? Which team tackles the bug backlog? Where are we going for the holiday party? Throw it on the wheel and let fate decide. It's a surprisingly effective way to break deadlocks in meetings — and way more fun than voting.",
      useCaseCreatorsTitle: "Streams, Videos & Content Creation",
      useCaseCreatorsDesc:
        "Streamers and YouTubers use spinning wheels all the time for challenge videos, viewer polls, and random dares. It adds real suspense to your content. Plus, if you're doing a giveaway, Elimination mode means you can draw multiple winners without repeats — your audience will love the drama.",
      pasteInstructions: "Paste items, one per line:",
      paste: "Add Items",
      cancel: "Cancel",
      nextSpin: "Next",
      orderComplete: "Order Complete!",
      ordering: "Ordering",
      eliminated: "eliminated",
      spinHistory: "Spin History",
      clearHistory: "Clear",
      noHistory: "No spins yet — give the wheel a go!",
      spinDuration: "Spin Duration",
      seconds: "sec",
    },
  };
  function Z(e, t) {
    var n;
    return ((n = Xm[t]) == null ? void 0 : n[e]) ?? Xm.en[e] ?? e;
  }
  let du = null;
  function Lw() {
    return (du || (du = new AudioContext()), du);
  }
  function Zm() {
    try {
      const e = Lw(),
        t = e.createOscillator(),
        n = e.createGain();
      (t.connect(n),
        n.connect(e.destination),
        (t.frequency.value = 800 + Math.random() * 400),
        (t.type = "triangle"),
        n.gain.setValueAtTime(0.08, e.currentTime),
        n.gain.exponentialRampToValueAtTime(0.001, e.currentTime + 0.05),
        t.start(e.currentTime),
        t.stop(e.currentTime + 0.05));
    } catch {}
  }
  function Jm() {
    try {
      const e = Lw();
      [523, 659, 784, 1047].forEach((n, r) => {
        const o = e.createOscillator(),
          s = e.createGain();
        (o.connect(s),
          s.connect(e.destination),
          (o.frequency.value = n),
          (o.type = "sine"));
        const i = e.currentTime + r * 0.12;
        (s.gain.setValueAtTime(0.12, i),
          s.gain.exponentialRampToValueAtTime(0.001, i + 0.3),
          o.start(i),
          o.stop(i + 0.3));
      });
    } catch {}
  }
  const eg = ({
    entries: e,
    palette: t,
    soundEnabled: n,
    spinning: r,
    onSpinEnd: o,
    onSpinStart: s,
    fullScreen: i = false,
    forcedWinnerIndex: a = null,
    spinDuration: l = 5,
  }) => {
    const u = d.useRef(null),
      [f, p] = d.useState(0),
      v = d.useRef(0),
      h = d.useRef(0),
      b = d.useRef(false),
      m = d.useRef(0),
      x = d.useRef(0),
      y = d.useRef(0),
      g = d.useRef(0),
      w = d.useRef(0),
      C = yp[t],
      k = i ? 650 : 520,
      T = k / 2,
      N = T - 10,
      j = d.useCallback(
        (P) => {
          const E = u.current;
          if (!E || e.length === 0) return;
          const S = E.getContext("2d");
          if (!S) return;
          const R = window.devicePixelRatio || 1;
          ((E.width = k * R),
            (E.height = k * R),
            S.scale(R, R),
            S.clearRect(0, 0, k, k));
          const L = (2 * Math.PI) / e.length;
          (e.forEach((z, Q) => {
            const V = P + Q * L,
              M = V + L,
              q = z.color || C[Q % C.length];
            (S.beginPath(),
              S.moveTo(T, T),
              S.arc(T, T, N, V, M),
              S.closePath(),
              (S.fillStyle = q),
              S.fill(),
              (S.strokeStyle = "rgba(255,255,255,0.6)"),
              (S.lineWidth = 2),
              S.stroke(),
              S.save(),
              S.translate(T, T),
              S.rotate(V + L / 2),
              (S.textAlign = "right"),
              (S.fillStyle = Bj(q) > 0.5 ? "#1a1a2e" : "#ffffff"),
              (S.font = `bold ${Math.min(16, 160 / e.length)}px system-ui, sans-serif`));
            const ee = z.text.length > 16 ? z.text.slice(0, 14) + "…" : z.text;
            (S.fillText(ee, N - 18, 5), S.restore());
          }),
            S.beginPath(),
            S.arc(T, T, 36, 0, 2 * Math.PI),
            (S.fillStyle = "#ffffff"),
            S.fill(),
            (S.strokeStyle = "#e2e8f0"),
            (S.lineWidth = 3),
            S.stroke());
        },
        [e, C, k, T, N],
      );
    d.useEffect(() => {
      j(f);
    }, [f, j]);
    const D = d.useCallback(() => {
        const P = e.reduce((S, R) => S + R.weight, 0);
        let E = Math.random() * P;
        for (let S = 0; S < e.length; S++)
          if (((E -= e[S].weight), E <= 0)) return S;
        return e.length - 1;
      }, [e]),
      I = d.useCallback(() => {
        if (r || e.length < 2) return;
        s();
        const P = a ?? D(),
          E = (2 * Math.PI) / e.length,
          S = Math.random() * E,
          R = -Math.PI / 2 - P * E - S,
          L = f % (2 * Math.PI);
        let z = R - L;
        z = ((z % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const V = (5 + Math.floor(Math.random() * 3)) * 2 * Math.PI + z,
          M = f + V,
          q = l * 1e3 + Math.random() * 1e3,
          ee = performance.now(),
          U = f,
          Y = (X) => {
            const ie = X - ee,
              ne = Math.min(ie / q, 1),
              he = 1 - Math.pow(1 - ne, 3),
              ve = U + V * he;
            if ((p(ve), n)) {
              const we = Math.floor(
                (((-ve % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / E,
              );
              we !== h.current && ((h.current = we), Zm());
            }
            ne < 1
              ? (v.current = requestAnimationFrame(Y))
              : (p(M), n && Jm(), o(e[P]));
          };
        v.current = requestAnimationFrame(Y);
      }, [r, e, f, D, s, o, n, a, l]);
    d.useEffect(() => () => cancelAnimationFrame(v.current), []);
    const $ = d.useCallback((P, E) => {
        const S = u.current;
        if (!S) return 0;
        const R = S.getBoundingClientRect(),
          L = R.left + R.width / 2,
          z = R.top + R.height / 2;
        return Math.atan2(E - z, P - L);
      }, []),
      B = d.useCallback(
        (P, E) => {
          if (r || e.length < 2) return;
          (cancelAnimationFrame(v.current), (b.current = true));
          const S = $(P, E);
          ((m.current = S),
            (x.current = f),
            (y.current = S),
            (g.current = performance.now()),
            (w.current = 0));
        },
        [r, e.length, f, $],
      ),
      K = d.useCallback(
        (P, E) => {
          if (!b.current) return;
          const S = $(P, E),
            R = S - m.current,
            L = performance.now(),
            z = L - g.current;
          if (z > 0) {
            const V =
              ((((S - y.current + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) %
                (2 * Math.PI)) -
              Math.PI;
            w.current = V / (z / 1e3);
          }
          ((y.current = S), (g.current = L), p(x.current + R));
        },
        [$],
      ),
      F = d.useCallback(() => {
        if (!b.current) return;
        b.current = false;
        const P = w.current;
        if (Math.abs(P) > 3 && e.length >= 2 && !r) {
          s();
          const E = a ?? D(),
            S = (2 * Math.PI) / e.length,
            R = Math.random() * S,
            L = -Math.PI / 2 - E * S - R,
            z = f % (2 * Math.PI);
          let Q = L - z;
          Q = ((Q % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
          const M = (5 + Math.floor(Math.random() * 3)) * 2 * Math.PI + Q,
            q = f + M,
            ee = l * 1e3 + Math.random() * 1e3,
            U = performance.now(),
            Y = f,
            X = (ie) => {
              const ne = ie - U,
                he = Math.min(ne / ee, 1),
                ve = 1 - Math.pow(1 - he, 3),
                we = Y + M * ve;
              if ((p(we), n)) {
                const Le = Math.floor(
                  (((-we % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / S,
                );
                Le !== h.current && ((h.current = Le), Zm());
              }
              he < 1
                ? (v.current = requestAnimationFrame(X))
                : (p(q), n && Jm(), o(e[E]));
            };
          v.current = requestAnimationFrame(X);
        }
      }, [e, r, f, D, s, o, n, a]),
      te = d.useCallback(
        (P) => {
          B(P.clientX, P.clientY);
        },
        [B],
      );
    d.useEffect(() => {
      const P = (S) => K(S.clientX, S.clientY),
        E = () => F();
      return (
        window.addEventListener("mousemove", P),
        window.addEventListener("mouseup", E),
        () => {
          (window.removeEventListener("mousemove", P),
            window.removeEventListener("mouseup", E));
        }
      );
    }, [K, F]);
    const G = d.useCallback(
        (P) => {
          P.touches.length === 1 &&
            B(P.touches[0].clientX, P.touches[0].clientY);
        },
        [B],
      ),
      H = d.useCallback(
        (P) => {
          P.touches.length === 1 &&
            (P.preventDefault(), K(P.touches[0].clientX, P.touches[0].clientY));
        },
        [K],
      ),
      A = d.useCallback(() => {
        F();
      }, [F]);
    return c.jsxs("div", {
      className: "relative inline-block select-none",
      children: [
        c.jsx("div", {
          className:
            "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-10",
          children: c.jsx("div", {
            className: "w-0 h-0",
            style: {
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: "24px solid hsl(var(--foreground))",
            },
          }),
        }),
        c.jsx("canvas", {
          ref: u,
          style: {
            width: k,
            height: k,
            maxWidth: "90vw",
            maxHeight: "90vw",
            touchAction: "none",
          },
          className:
            "rounded-full shadow-xl cursor-grab active:cursor-grabbing",
          onClick: I,
          onMouseDown: te,
          onTouchStart: G,
          onTouchMove: H,
          onTouchEnd: A,
        }),
        c.jsx("button", {
          onClick: I,
          disabled: r || e.length < 2,
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-background border-2 border-border shadow-lg text-foreground font-bold text-xs tracking-wider hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed",
          children: r ? "..." : "SPIN",
        }),
      ],
    });
  };
  function Bj(e) {
    const t = parseInt(e.slice(1, 3), 16) / 255,
      n = parseInt(e.slice(3, 5), 16) / 255,
      r = parseInt(e.slice(5, 7), 16) / 255;
    return 0.299 * t + 0.587 * n + 0.114 * r;
  }
  const wp = d.forwardRef(({ className: e, type: t, ...n }, r) =>
    c.jsx("input", {
      type: t,
      className: be(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e,
      ),
      ref: r,
      ...n,
    }),
  );
  wp.displayName = "Input";
  const Wj = Rx(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    ),
    ze = d.forwardRef(
      ({ className: e, variant: t, size: n, asChild: r = false, ...o }, s) => {
        const i = r ? wk : "button";
        return c.jsx(i, {
          className: be(Wj({ variant: t, size: n, className: e })),
          ref: s,
          ...o,
        });
      },
    );
  ze.displayName = "Button";
  var fu = "focusScope.autoFocusOnMount",
    pu = "focusScope.autoFocusOnUnmount",
    tg = { bubbles: false, cancelable: true },
    Uj = "FocusScope",
    bp = d.forwardRef((e, t) => {
      const {
          loop: n = false,
          trapped: r = false,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          ...i
        } = e,
        [a, l] = d.useState(null),
        u = ln(o),
        f = ln(s),
        p = d.useRef(null),
        v = ge(t, (m) => l(m)),
        h = d.useRef({
          paused: false,
          pause() {
            this.paused = true;
          },
          resume() {
            this.paused = false;
          },
        }).current;
      (d.useEffect(() => {
        if (r) {
          let m = function (w) {
              if (h.paused || !a) return;
              const C = w.target;
              a.contains(C) ? (p.current = C) : tr(p.current, { select: true });
            },
            x = function (w) {
              if (h.paused || !a) return;
              const C = w.relatedTarget;
              C !== null && (a.contains(C) || tr(p.current, { select: true }));
            },
            y = function (w) {
              if (document.activeElement === document.body)
                for (const k of w) k.removedNodes.length > 0 && tr(a);
            };
          (document.addEventListener("focusin", m),
            document.addEventListener("focusout", x));
          const g = new MutationObserver(y);
          return (
            a && g.observe(a, { childList: true, subtree: true }),
            () => {
              (document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", x),
                g.disconnect());
            }
          );
        }
      }, [r, a, h.paused]),
        d.useEffect(() => {
          if (a) {
            rg.add(h);
            const m = document.activeElement;
            if (!a.contains(m)) {
              const y = new CustomEvent(fu, tg);
              (a.addEventListener(fu, u),
                a.dispatchEvent(y),
                y.defaultPrevented ||
                  (Hj(Kj(Fw(a)), { select: true }),
                  document.activeElement === m && tr(a)));
            }
            return () => {
              (a.removeEventListener(fu, u),
                setTimeout(() => {
                  const y = new CustomEvent(pu, tg);
                  (a.addEventListener(pu, f),
                    a.dispatchEvent(y),
                    y.defaultPrevented ||
                      tr(m ?? document.body, { select: true }),
                    a.removeEventListener(pu, f),
                    rg.remove(h));
                }, 0));
            };
          }
        }, [a, u, f, h]));
      const b = d.useCallback(
        (m) => {
          if ((!n && !r) || h.paused) return;
          const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
            y = document.activeElement;
          if (x && y) {
            const g = m.currentTarget,
              [w, C] = Vj(g);
            w && C
              ? !m.shiftKey && y === C
                ? (m.preventDefault(), n && tr(w, { select: true }))
                : m.shiftKey &&
                  y === w &&
                  (m.preventDefault(), n && tr(C, { select: true }))
              : y === g && m.preventDefault();
          }
        },
        [n, r, h.paused],
      );
      return c.jsx(le.div, { tabIndex: -1, ...i, ref: v, onKeyDown: b });
    });
  bp.displayName = Uj;
  function Hj(e, { select: t = false } = {}) {
    const n = document.activeElement;
    for (const r of e)
      if ((tr(r, { select: t }), document.activeElement !== n)) return;
  }
  function Vj(e) {
    const t = Fw(e),
      n = ng(t, e),
      r = ng(t.reverse(), e);
    return [n, r];
  }
  function Fw(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (r) => {
          const o = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || o
            ? NodeFilter.FILTER_SKIP
            : r.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
        },
      });
    for (; n.nextNode();) t.push(n.currentNode);
    return t;
  }
  function ng(e, t) {
    for (const n of e) if (!qj(n, { upTo: t })) return n;
  }
  function qj(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return true;
    for (; e;) {
      if (t !== void 0 && e === t) return false;
      if (getComputedStyle(e).display === "none") return true;
      e = e.parentElement;
    }
    return false;
  }
  function Gj(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function tr(e, { select: t = false } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      (e.focus({ preventScroll: true }), e !== n && Gj(e) && t && e.select());
    }
  }
  var rg = Qj();
  function Qj() {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        (t !== n && (n == null || n.pause()), (e = og(e, t)), e.unshift(t));
      },
      remove(t) {
        var n;
        ((e = og(e, t)), (n = e[0]) == null || n.resume());
      },
    };
  }
  function og(e, t) {
    const n = [...e],
      r = n.indexOf(t);
    return (r !== -1 && n.splice(r, 1), n);
  }
  function Kj(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  var hu = 0;
  function zw() {
    d.useEffect(() => {
      const e = document.querySelectorAll("[data-radix-focus-guard]");
      return (
        document.body.insertAdjacentElement("afterbegin", e[0] ?? sg()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? sg()),
        hu++,
        () => {
          (hu === 1 &&
            document
              .querySelectorAll("[data-radix-focus-guard]")
              .forEach((t) => t.remove()),
            hu--);
        }
      );
    }, []);
  }
  function sg() {
    const e = document.createElement("span");
    return (
      e.setAttribute("data-radix-focus-guard", ""),
      (e.tabIndex = 0),
      (e.style.outline = "none"),
      (e.style.opacity = "0"),
      (e.style.position = "fixed"),
      (e.style.pointerEvents = "none"),
      e
    );
  }
  var kn = function () {
    return (
      (kn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      kn.apply(this, arguments)
    );
  };
  function $w(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  }
  function Yj(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, o = t.length, s; r < o; r++)
        (s || !(r in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
    return e.concat(s || Array.prototype.slice.call(t));
  }
  var Ha = "right-scroll-bar-position",
    Va = "width-before-scroll-bar",
    Xj = "with-scroll-bars-hidden",
    Zj = "--removed-body-scroll-bar-size";
  function mu(e, t) {
    return (typeof e == "function" ? e(t) : e && (e.current = t), e);
  }
  function Jj(e, t) {
    var n = d.useState(function () {
      return {
        value: e,
        callback: t,
        facade: {
          get current() {
            return n.value;
          },
          set current(r) {
            var o = n.value;
            o !== r && ((n.value = r), n.callback(r, o));
          },
        },
      };
    })[0];
    return ((n.callback = t), n.facade);
  }
  var eR = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
    ig = new WeakMap();
  function tR(e) {
    var n = Jj(null, function (r) {
      return e.forEach(function (o) {
        return mu(o, r);
      });
    });
    return (
      eR(
        function () {
          var r = ig.get(n);
          if (r) {
            var o = new Set(r),
              s = new Set(e),
              i = n.current;
            (o.forEach(function (a) {
              s.has(a) || mu(a, null);
            }),
              s.forEach(function (a) {
                o.has(a) || mu(a, i);
              }));
          }
          ig.set(n, e);
        },
        [e],
      ),
      n
    );
  }
  function nR(e) {
    return e;
  }
  function rR(e, t) {
    t === void 0 && (t = nR);
    var n = [],
      r = false,
      o = {
        read: function () {
          if (r)
            throw new Error(
              "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
            );
          return n.length ? n[n.length - 1] : e;
        },
        useMedium: function (s) {
          var i = t(s, r);
          return (
            n.push(i),
            function () {
              n = n.filter(function (a) {
                return a !== i;
              });
            }
          );
        },
        assignSyncMedium: function (s) {
          for (r = true; n.length;) {
            var i = n;
            ((n = []), i.forEach(s));
          }
          n = {
            push: function (a) {
              return s(a);
            },
            filter: function () {
              return n;
            },
          };
        },
        assignMedium: function (s) {
          r = true;
          var i = [];
          if (n.length) {
            var a = n;
            ((n = []), a.forEach(s), (i = n));
          }
          var l = function () {
              var f = i;
              ((i = []), f.forEach(s));
            },
            u = function () {
              return Promise.resolve().then(l);
            };
          (u(),
            (n = {
              push: function (f) {
                (i.push(f), u());
              },
              filter: function (f) {
                return ((i = i.filter(f)), n);
              },
            }));
        },
      };
    return o;
  }
  function oR(e) {
    e === void 0 && (e = {});
    var t = rR(null);
    return ((t.options = kn({ async: true, ssr: false }, e)), t);
  }
  var Bw = function (e) {
    var t = e.sideCar,
      n = $w(e, ["sideCar"]);
    if (!t)
      throw new Error(
        "Sidecar: please provide `sideCar` property to import the right car",
      );
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return d.createElement(r, kn({}, n));
  };
  Bw.isSideCarExport = true;
  function sR(e, t) {
    return (e.useMedium(t), Bw);
  }
  var Ww = oR(),
    gu = function () {},
    cc = d.forwardRef(function (e, t) {
      var n = d.useRef(null),
        r = d.useState({
          onScrollCapture: gu,
          onWheelCapture: gu,
          onTouchMoveCapture: gu,
        }),
        o = r[0],
        s = r[1],
        i = e.forwardProps,
        a = e.children,
        l = e.className,
        u = e.removeScrollBar,
        f = e.enabled,
        p = e.shards,
        v = e.sideCar,
        h = e.noRelative,
        b = e.noIsolation,
        m = e.inert,
        x = e.allowPinchZoom,
        y = e.as,
        g = y === void 0 ? "div" : y,
        w = e.gapMode,
        C = $w(e, [
          "forwardProps",
          "children",
          "className",
          "removeScrollBar",
          "enabled",
          "shards",
          "sideCar",
          "noRelative",
          "noIsolation",
          "inert",
          "allowPinchZoom",
          "as",
          "gapMode",
        ]),
        k = v,
        T = tR([n, t]),
        N = kn(kn({}, C), o);
      return d.createElement(
        d.Fragment,
        null,
        f &&
          d.createElement(k, {
            sideCar: Ww,
            removeScrollBar: u,
            shards: p,
            noRelative: h,
            noIsolation: b,
            inert: m,
            setCallbacks: s,
            allowPinchZoom: !!x,
            lockRef: n,
            gapMode: w,
          }),
        i
          ? d.cloneElement(d.Children.only(a), kn(kn({}, N), { ref: T }))
          : d.createElement(g, kn({}, N, { className: l, ref: T }), a),
      );
    });
  cc.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
  cc.classNames = { fullWidth: Va, zeroRight: Ha };
  var iR = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function aR() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = iR();
    return (t && e.setAttribute("nonce", t), e);
  }
  function lR(e, t) {
    e.styleSheet
      ? (e.styleSheet.cssText = t)
      : e.appendChild(document.createTextNode(t));
  }
  function cR(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
  }
  var uR = function () {
      var e = 0,
        t = null;
      return {
        add: function (n) {
          (e == 0 && (t = aR()) && (lR(t, n), cR(t)), e++);
        },
        remove: function () {
          (e--,
            !e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null)));
        },
      };
    },
    dR = function () {
      var e = uR();
      return function (t, n) {
        d.useEffect(
          function () {
            return (
              e.add(t),
              function () {
                e.remove();
              }
            );
          },
          [t && n],
        );
      };
    },
    Uw = function () {
      var e = dR(),
        t = function (n) {
          var r = n.styles,
            o = n.dynamic;
          return (e(r, o), null);
        };
      return t;
    },
    fR = { left: 0, top: 0, right: 0, gap: 0 },
    vu = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    pR = function (e) {
      var t = window.getComputedStyle(document.body),
        n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
        r = t[e === "padding" ? "paddingTop" : "marginTop"],
        o = t[e === "padding" ? "paddingRight" : "marginRight"];
      return [vu(n), vu(r), vu(o)];
    },
    hR = function (e) {
      if ((e === void 0 && (e = "margin"), typeof window > "u")) return fR;
      var t = pR(e),
        n = document.documentElement.clientWidth,
        r = window.innerWidth;
      return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0]),
      };
    },
    mR = Uw(),
    Vo = "data-scroll-locked",
    gR = function (e, t, n, r) {
      var o = e.left,
        s = e.top,
        i = e.right,
        a = e.gap;
      return (
        n === void 0 && (n = "margin"),
        `
  .`
          .concat(
            Xj,
            ` {
   overflow: hidden `,
          )
          .concat(
            r,
            `;
   padding-right: `,
          )
          .concat(a, "px ")
          .concat(
            r,
            `;
  }
  body[`,
          )
          .concat(
            Vo,
            `] {
    overflow: hidden `,
          )
          .concat(
            r,
            `;
    overscroll-behavior: contain;
    `,
          )
          .concat(
            [
              t && "position: relative ".concat(r, ";"),
              n === "margin" &&
                `
    padding-left: `
                  .concat(
                    o,
                    `px;
    padding-top: `,
                  )
                  .concat(
                    s,
                    `px;
    padding-right: `,
                  )
                  .concat(
                    i,
                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                  )
                  .concat(a, "px ")
                  .concat(
                    r,
                    `;
    `,
                  ),
              n === "padding" &&
                "padding-right: ".concat(a, "px ").concat(r, ";"),
            ]
              .filter(Boolean)
              .join(""),
            `
  }
  
  .`,
          )
          .concat(
            Ha,
            ` {
    right: `,
          )
          .concat(a, "px ")
          .concat(
            r,
            `;
  }
  
  .`,
          )
          .concat(
            Va,
            ` {
    margin-right: `,
          )
          .concat(a, "px ")
          .concat(
            r,
            `;
  }
  
  .`,
          )
          .concat(Ha, " .")
          .concat(
            Ha,
            ` {
    right: 0 `,
          )
          .concat(
            r,
            `;
  }
  
  .`,
          )
          .concat(Va, " .")
          .concat(
            Va,
            ` {
    margin-right: 0 `,
          )
          .concat(
            r,
            `;
  }
  
  body[`,
          )
          .concat(
            Vo,
            `] {
    `,
          )
          .concat(Zj, ": ")
          .concat(
            a,
            `px;
  }
`,
          )
      );
    },
    ag = function () {
      var e = parseInt(document.body.getAttribute(Vo) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    vR = function () {
      d.useEffect(function () {
        return (
          document.body.setAttribute(Vo, (ag() + 1).toString()),
          function () {
            var e = ag() - 1;
            e <= 0
              ? document.body.removeAttribute(Vo)
              : document.body.setAttribute(Vo, e.toString());
          }
        );
      }, []);
    },
    yR = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        r = e.gapMode,
        o = r === void 0 ? "margin" : r;
      vR();
      var s = d.useMemo(
        function () {
          return hR(o);
        },
        [o],
      );
      return d.createElement(mR, {
        styles: gR(s, !t, o, n ? "" : "!important"),
      });
    },
    Fd = false;
  if (typeof window < "u")
    try {
      var wa = Object.defineProperty({}, "passive", {
        get: function () {
          return ((Fd = true), true);
        },
      });
      (window.addEventListener("test", wa, wa),
        window.removeEventListener("test", wa, wa));
    } catch {
      Fd = false;
    }
  var wo = Fd ? { passive: false } : false,
    xR = function (e) {
      return e.tagName === "TEXTAREA";
    },
    Hw = function (e, t) {
      if (!(e instanceof Element)) return false;
      var n = window.getComputedStyle(e);
      return (
        n[t] !== "hidden" &&
        !(n.overflowY === n.overflowX && !xR(e) && n[t] === "visible")
      );
    },
    wR = function (e) {
      return Hw(e, "overflowY");
    },
    bR = function (e) {
      return Hw(e, "overflowX");
    },
    lg = function (e, t) {
      var n = t.ownerDocument,
        r = t;
      do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Vw(e, r);
        if (o) {
          var s = qw(e, r),
            i = s[1],
            a = s[2];
          if (i > a) return true;
        }
        r = r.parentNode;
      } while (r && r !== n.body);
      return false;
    },
    SR = function (e) {
      var t = e.scrollTop,
        n = e.scrollHeight,
        r = e.clientHeight;
      return [t, n, r];
    },
    CR = function (e) {
      var t = e.scrollLeft,
        n = e.scrollWidth,
        r = e.clientWidth;
      return [t, n, r];
    },
    Vw = function (e, t) {
      return e === "v" ? wR(t) : bR(t);
    },
    qw = function (e, t) {
      return e === "v" ? SR(t) : CR(t);
    },
    kR = function (e, t) {
      return e === "h" && t === "rtl" ? -1 : 1;
    },
    ER = function (e, t, n, r, o) {
      var s = kR(e, window.getComputedStyle(t).direction),
        i = s * r,
        a = n.target,
        l = t.contains(a),
        u = false,
        f = i > 0,
        p = 0,
        v = 0;
      do {
        if (!a) break;
        var h = qw(e, a),
          b = h[0],
          m = h[1],
          x = h[2],
          y = m - x - s * b;
        (b || y) && Vw(e, a) && ((p += y), (v += b));
        var g = a.parentNode;
        a = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
      } while (
        (!l && a !== document.body) ||
        (l && (t.contains(a) || t === a))
      );
      return (
        ((f && (Math.abs(p) < 1 || !o)) || (!f && (Math.abs(v) < 1 || !o))) &&
          (u = true),
        u
      );
    },
    ba = function (e) {
      return "changedTouches" in e
        ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
        : [0, 0];
    },
    cg = function (e) {
      return [e.deltaX, e.deltaY];
    },
    ug = function (e) {
      return e && "current" in e ? e.current : e;
    },
    TR = function (e, t) {
      return e[0] === t[0] && e[1] === t[1];
    },
    NR = function (e) {
      return `
  .block-interactivity-`
        .concat(
          e,
          ` {pointer-events: none;}
  .allow-interactivity-`,
        )
        .concat(
          e,
          ` {pointer-events: all;}
`,
        );
    },
    PR = 0,
    bo = [];
  function jR(e) {
    var t = d.useRef([]),
      n = d.useRef([0, 0]),
      r = d.useRef(),
      o = d.useState(PR++)[0],
      s = d.useState(Uw)[0],
      i = d.useRef(e);
    (d.useEffect(
      function () {
        i.current = e;
      },
      [e],
    ),
      d.useEffect(
        function () {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = Yj(
              [e.lockRef.current],
              (e.shards || []).map(ug),
              true,
            ).filter(Boolean);
            return (
              m.forEach(function (x) {
                return x.classList.add("allow-interactivity-".concat(o));
              }),
              function () {
                (document.body.classList.remove(
                  "block-interactivity-".concat(o),
                ),
                  m.forEach(function (x) {
                    return x.classList.remove("allow-interactivity-".concat(o));
                  }));
              }
            );
          }
        },
        [e.inert, e.lockRef.current, e.shards],
      ));
    var a = d.useCallback(function (m, x) {
        if (
          ("touches" in m && m.touches.length === 2) ||
          (m.type === "wheel" && m.ctrlKey)
        )
          return !i.current.allowPinchZoom;
        var y = ba(m),
          g = n.current,
          w = "deltaX" in m ? m.deltaX : g[0] - y[0],
          C = "deltaY" in m ? m.deltaY : g[1] - y[1],
          k,
          T = m.target,
          N = Math.abs(w) > Math.abs(C) ? "h" : "v";
        if ("touches" in m && N === "h" && T.type === "range") return false;
        var j = lg(N, T);
        if (!j) return true;
        if ((j ? (k = N) : ((k = N === "v" ? "h" : "v"), (j = lg(N, T))), !j))
          return false;
        if (
          (!r.current && "changedTouches" in m && (w || C) && (r.current = k),
          !k)
        )
          return true;
        var D = r.current || k;
        return ER(D, x, m, D === "h" ? w : C, true);
      }, []),
      l = d.useCallback(function (m) {
        var x = m;
        if (!(!bo.length || bo[bo.length - 1] !== s)) {
          var y = "deltaY" in x ? cg(x) : ba(x),
            g = t.current.filter(function (k) {
              return (
                k.name === x.type &&
                (k.target === x.target || x.target === k.shadowParent) &&
                TR(k.delta, y)
              );
            })[0];
          if (g && g.should) {
            x.cancelable && x.preventDefault();
            return;
          }
          if (!g) {
            var w = (i.current.shards || [])
                .map(ug)
                .filter(Boolean)
                .filter(function (k) {
                  return k.contains(x.target);
                }),
              C = w.length > 0 ? a(x, w[0]) : !i.current.noIsolation;
            C && x.cancelable && x.preventDefault();
          }
        }
      }, []),
      u = d.useCallback(function (m, x, y, g) {
        var w = {
          name: m,
          delta: x,
          target: y,
          should: g,
          shadowParent: RR(y),
        };
        (t.current.push(w),
          setTimeout(function () {
            t.current = t.current.filter(function (C) {
              return C !== w;
            });
          }, 1));
      }, []),
      f = d.useCallback(function (m) {
        ((n.current = ba(m)), (r.current = void 0));
      }, []),
      p = d.useCallback(function (m) {
        u(m.type, cg(m), m.target, a(m, e.lockRef.current));
      }, []),
      v = d.useCallback(function (m) {
        u(m.type, ba(m), m.target, a(m, e.lockRef.current));
      }, []);
    d.useEffect(function () {
      return (
        bo.push(s),
        e.setCallbacks({
          onScrollCapture: p,
          onWheelCapture: p,
          onTouchMoveCapture: v,
        }),
        document.addEventListener("wheel", l, wo),
        document.addEventListener("touchmove", l, wo),
        document.addEventListener("touchstart", f, wo),
        function () {
          ((bo = bo.filter(function (m) {
            return m !== s;
          })),
            document.removeEventListener("wheel", l, wo),
            document.removeEventListener("touchmove", l, wo),
            document.removeEventListener("touchstart", f, wo));
        }
      );
    }, []);
    var h = e.removeScrollBar,
      b = e.inert;
    return d.createElement(
      d.Fragment,
      null,
      b ? d.createElement(s, { styles: NR(o) }) : null,
      h
        ? d.createElement(yR, { noRelative: e.noRelative, gapMode: e.gapMode })
        : null,
    );
  }
  function RR(e) {
    for (var t = null; e !== null;)
      (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
        (e = e.parentNode));
    return t;
  }
  const AR = sR(Ww, jR);
  var Sp = d.forwardRef(function (e, t) {
    return d.createElement(cc, kn({}, e, { ref: t, sideCar: AR }));
  });
  Sp.classNames = cc.classNames;
  var DR = function (e) {
      if (typeof document > "u") return null;
      var t = Array.isArray(e) ? e[0] : e;
      return t.ownerDocument.body;
    },
    So = new WeakMap(),
    Sa = new WeakMap(),
    Ca = {},
    yu = 0,
    Gw = function (e) {
      return e && (e.host || Gw(e.parentNode));
    },
    MR = function (e, t) {
      return t
        .map(function (n) {
          if (e.contains(n)) return n;
          var r = Gw(n);
          return r && e.contains(r)
            ? r
            : (console.error(
                "aria-hidden",
                n,
                "in not contained inside",
                e,
                ". Doing nothing",
              ),
              null);
        })
        .filter(function (n) {
          return !!n;
        });
    },
    OR = function (e, t, n, r) {
      var o = MR(t, Array.isArray(e) ? e : [e]);
      Ca[n] || (Ca[n] = new WeakMap());
      var s = Ca[n],
        i = [],
        a = new Set(),
        l = new Set(o),
        u = function (p) {
          !p || a.has(p) || (a.add(p), u(p.parentNode));
        };
      o.forEach(u);
      var f = function (p) {
        !p ||
          l.has(p) ||
          Array.prototype.forEach.call(p.children, function (v) {
            if (a.has(v)) f(v);
            else
              try {
                var h = v.getAttribute(r),
                  b = h !== null && h !== "false",
                  m = (So.get(v) || 0) + 1,
                  x = (s.get(v) || 0) + 1;
                (So.set(v, m),
                  s.set(v, x),
                  i.push(v),
                  m === 1 && b && Sa.set(v, true),
                  x === 1 && v.setAttribute(n, "true"),
                  b || v.setAttribute(r, "true"));
              } catch (y) {
                console.error("aria-hidden: cannot operate on ", v, y);
              }
          });
      };
      return (
        f(t),
        a.clear(),
        yu++,
        function () {
          (i.forEach(function (p) {
            var v = So.get(p) - 1,
              h = s.get(p) - 1;
            (So.set(p, v),
              s.set(p, h),
              v || (Sa.has(p) || p.removeAttribute(r), Sa.delete(p)),
              h || p.removeAttribute(n));
          }),
            yu--,
            yu ||
              ((So = new WeakMap()),
              (So = new WeakMap()),
              (Sa = new WeakMap()),
              (Ca = {})));
        }
      );
    },
    Qw = function (e, t, n) {
      n === void 0 && (n = "data-aria-hidden");
      var r = Array.from(Array.isArray(e) ? e : [e]),
        o = DR(e);
      return o
        ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
          OR(r, o, n, "aria-hidden"))
        : function () {
            return null;
          };
    },
    uc = "Dialog",
    [Kw, NM] = Qn(uc),
    [IR, fn] = Kw(uc),
    Yw = (e) => {
      const {
          __scopeDialog: t,
          children: n,
          open: r,
          defaultOpen: o,
          onOpenChange: s,
          modal: i = true,
        } = e,
        a = d.useRef(null),
        l = d.useRef(null),
        [u, f] = Nr({
          prop: r,
          defaultProp: o ?? false,
          onChange: s,
          caller: uc,
        });
      return c.jsx(IR, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: Cr(),
        titleId: Cr(),
        descriptionId: Cr(),
        open: u,
        onOpenChange: f,
        onOpenToggle: d.useCallback(() => f((p) => !p), [f]),
        modal: i,
        children: n,
      });
    };
  Yw.displayName = uc;
  var Xw = "DialogTrigger",
    _R = d.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        o = fn(Xw, n),
        s = ge(t, o.triggerRef);
      return c.jsx(le.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ep(o.open),
        ...r,
        ref: s,
        onClick: oe(e.onClick, o.onOpenToggle),
      });
    });
  _R.displayName = Xw;
  var Cp = "DialogPortal",
    [LR, Zw] = Kw(Cp, { forceMount: void 0 }),
    Jw = (e) => {
      const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
        s = fn(Cp, t);
      return c.jsx(LR, {
        scope: t,
        forceMount: n,
        children: d.Children.map(r, (i) =>
          c.jsx(go, {
            present: n || s.open,
            children: c.jsx(Yl, { asChild: true, container: o, children: i }),
          }),
        ),
      });
    };
  Jw.displayName = Cp;
  var kl = "DialogOverlay",
    e0 = d.forwardRef((e, t) => {
      const n = Zw(kl, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...o } = e,
        s = fn(kl, e.__scopeDialog);
      return s.modal
        ? c.jsx(go, {
            present: r || s.open,
            children: c.jsx(zR, { ...o, ref: t }),
          })
        : null;
    });
  e0.displayName = kl;
  var FR = ls("DialogOverlay.RemoveScroll"),
    zR = d.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        o = fn(kl, n);
      return c.jsx(Sp, {
        as: FR,
        allowPinchZoom: true,
        shards: [o.contentRef],
        children: c.jsx(le.div, {
          "data-state": Ep(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        }),
      });
    }),
    uo = "DialogContent",
    t0 = d.forwardRef((e, t) => {
      const n = Zw(uo, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...o } = e,
        s = fn(uo, e.__scopeDialog);
      return c.jsx(go, {
        present: r || s.open,
        children: s.modal
          ? c.jsx($R, { ...o, ref: t })
          : c.jsx(BR, { ...o, ref: t }),
      });
    });
  t0.displayName = uo;
  var $R = d.forwardRef((e, t) => {
      const n = fn(uo, e.__scopeDialog),
        r = d.useRef(null),
        o = ge(t, n.contentRef, r);
      return (
        d.useEffect(() => {
          const s = r.current;
          if (s) return Qw(s);
        }, []),
        c.jsx(n0, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: oe(e.onCloseAutoFocus, (s) => {
            var i;
            (s.preventDefault(),
              (i = n.triggerRef.current) == null || i.focus());
          }),
          onPointerDownOutside: oe(e.onPointerDownOutside, (s) => {
            const i = s.detail.originalEvent,
              a = i.button === 0 && i.ctrlKey === true;
            (i.button === 2 || a) && s.preventDefault();
          }),
          onFocusOutside: oe(e.onFocusOutside, (s) => s.preventDefault()),
        })
      );
    }),
    BR = d.forwardRef((e, t) => {
      const n = fn(uo, e.__scopeDialog),
        r = d.useRef(false),
        o = d.useRef(false);
      return c.jsx(n0, {
        ...e,
        ref: t,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (s) => {
          var i, a;
          ((i = e.onCloseAutoFocus) == null || i.call(e, s),
            s.defaultPrevented ||
              (r.current || (a = n.triggerRef.current) == null || a.focus(),
              s.preventDefault()),
            (r.current = false),
            (o.current = false));
        },
        onInteractOutside: (s) => {
          var l, u;
          ((l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented ||
              ((r.current = true),
              s.detail.originalEvent.type === "pointerdown" &&
                (o.current = true)));
          const i = s.target;
          (((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) &&
            s.preventDefault(),
            s.detail.originalEvent.type === "focusin" &&
              o.current &&
              s.preventDefault());
        },
      });
    }),
    n0 = d.forwardRef((e, t) => {
      const {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: o,
          onCloseAutoFocus: s,
          ...i
        } = e,
        a = fn(uo, n),
        l = d.useRef(null),
        u = ge(t, l);
      return (
        zw(),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(bp, {
              asChild: true,
              loop: true,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: c.jsx($i, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Ep(a.open),
                ...i,
                ref: u,
                onDismiss: () => a.onOpenChange(false),
              }),
            }),
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(WR, { titleId: a.titleId }),
                c.jsx(HR, { contentRef: l, descriptionId: a.descriptionId }),
              ],
            }),
          ],
        })
      );
    }),
    kp = "DialogTitle",
    r0 = d.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        o = fn(kp, n);
      return c.jsx(le.h2, { id: o.titleId, ...r, ref: t });
    });
  r0.displayName = kp;
  var o0 = "DialogDescription",
    s0 = d.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        o = fn(o0, n);
      return c.jsx(le.p, { id: o.descriptionId, ...r, ref: t });
    });
  s0.displayName = o0;
  var i0 = "DialogClose",
    a0 = d.forwardRef((e, t) => {
      const { __scopeDialog: n, ...r } = e,
        o = fn(i0, n);
      return c.jsx(le.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: oe(e.onClick, () => o.onOpenChange(false)),
      });
    });
  a0.displayName = i0;
  function Ep(e) {
    return e ? "open" : "closed";
  }
  var l0 = "DialogTitleWarning",
    [PM, c0] = yk(l0, { contentName: uo, titleName: kp, docsSlug: "dialog" }),
    WR = ({ titleId: e }) => {
      const t = c0(l0),
        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
      return (
        d.useEffect(() => {
          e && (document.getElementById(e) || console.error(n));
        }, [n, e]),
        null
      );
    },
    UR = "DialogDescriptionWarning",
    HR = ({ contentRef: e, descriptionId: t }) => {
      const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${c0(UR).contentName}}.`;
      return (
        d.useEffect(() => {
          var s;
          const o =
            (s = e.current) == null
              ? void 0
              : s.getAttribute("aria-describedby");
          t && o && (document.getElementById(t) || console.warn(r));
        }, [r, e, t]),
        null
      );
    },
    VR = Yw,
    qR = Jw,
    u0 = e0,
    d0 = t0,
    f0 = r0,
    p0 = s0,
    GR = a0;
  const h0 = VR,
    QR = qR,
    m0 = d.forwardRef(({ className: e, ...t }, n) =>
      c.jsx(u0, {
        ref: n,
        className: be(
          "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e,
        ),
        ...t,
      }),
    );
  m0.displayName = u0.displayName;
  const Tp = d.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(QR, {
      children: [
        c.jsx(m0, {}),
        c.jsxs(d0, {
          ref: r,
          className: be(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            e,
          ),
          ...n,
          children: [
            t,
            c.jsxs(GR, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
              children: [
                c.jsx(Jl, { className: "h-4 w-4" }),
                c.jsx("span", { className: "sr-only", children: "Close" }),
              ],
            }),
          ],
        }),
      ],
    }),
  );
  Tp.displayName = d0.displayName;
  const Np = ({ className: e, ...t }) =>
    c.jsx("div", {
      className: be("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...t,
    });
  Np.displayName = "DialogHeader";
  const Pp = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(f0, {
      ref: n,
      className: be("text-lg font-semibold leading-none tracking-tight", e),
      ...t,
    }),
  );
  Pp.displayName = f0.displayName;
  const KR = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(p0, {
      ref: n,
      className: be("text-sm text-muted-foreground", e),
      ...t,
    }),
  );
  KR.displayName = p0.displayName;
  const g0 = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx("textarea", {
      className: be(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e,
      ),
      ref: n,
      ...t,
    }),
  );
  g0.displayName = "Textarea";
  const YR = ({ entries: e, setEntries: t, palette: n, lang: r }) => {
    const [o, s] = d.useState(false),
      [i, a] = d.useState(""),
      l = yp[n],
      u = () => {
        t((b) => [...b, { id: Sn(), text: "", weight: 1 }]);
      },
      f = (b) => {
        t((m) => m.filter((x) => x.id !== b));
      },
      p = (b, m) => {
        t((x) => x.map((y) => (y.id === b ? { ...y, text: m } : y)));
      },
      v = () => {
        t([
          { id: Sn(), text: "", weight: 1 },
          { id: Sn(), text: "", weight: 1 },
        ]);
      },
      h = () => {
        const b = i
          .split(
            `
`,
          )
          .map((m) => m.trim())
          .filter(Boolean);
        (b.length > 0 &&
          t((m) => [
            ...m.filter((x) => x.text.trim() !== ""),
            ...b.map((x) => ({ id: Sn(), text: x, weight: 1 })),
          ]),
          a(""),
          s(false));
      };
    return c.jsxs("div", {
      className: "space-y-3",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            c.jsx("h2", {
              className:
                "text-sm font-semibold text-foreground tracking-wide uppercase",
              children: Z("addEntry", r),
            }),
            c.jsxs("div", {
              className: "flex gap-1.5",
              children: [
                c.jsx(ze, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => s(true),
                  title: Z("pasteList", r),
                  "aria-label": Z("pasteList", r),
                  children: c.jsx(hE, { className: "h-4 w-4" }),
                }),
                c.jsx(ze, {
                  variant: "ghost",
                  size: "sm",
                  onClick: v,
                  title: Z("clearAll", r),
                  "aria-label": Z("clearAll", r),
                  children: c.jsx(Dx, { className: "h-4 w-4" }),
                }),
              ],
            }),
          ],
        }),
        c.jsx("div", {
          className: "space-y-2 max-h-[50vh] overflow-y-auto pr-1",
          children: e.map((b, m) =>
            c.jsxs(
              "div",
              {
                className: "flex items-center gap-2 group",
                children: [
                  c.jsx("div", {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: b.color || l[m % l.length] },
                  }),
                  c.jsx(wp, {
                    value: b.text,
                    onChange: (x) => p(b.id, x.target.value),
                    placeholder: Z("entryPlaceholder", r),
                    "aria-label": `Wheel entry ${m + 1}`,
                    className: "h-9 text-sm",
                  }),
                  c.jsx("button", {
                    onClick: () => f(b.id),
                    className:
                      "opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive flex-shrink-0",
                    "aria-label": `Remove ${b.text || "entry"}`,
                    children: c.jsx(Jl, { className: "h-4 w-4" }),
                  }),
                ],
              },
              b.id,
            ),
          ),
        }),
        c.jsxs(ze, {
          variant: "outline",
          size: "sm",
          onClick: u,
          className: "w-full",
          children: [
            c.jsx(CE, { className: "h-4 w-4 mr-1" }),
            Z("addEntry", r),
          ],
        }),
        c.jsx(h0, {
          open: o,
          onOpenChange: s,
          children: c.jsxs(Tp, {
            className: "sm:max-w-md",
            children: [
              c.jsx(Np, {
                children: c.jsx(Pp, { children: Z("pasteList", r) }),
              }),
              c.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: Z("pasteInstructions", r),
              }),
              c.jsx(g0, {
                value: i,
                onChange: (b) => a(b.target.value),
                rows: 8,
                "aria-label": Z("pasteList", r),
                placeholder: `Option 1
Option 2
Option 3`,
              }),
              c.jsxs("div", {
                className: "flex justify-end gap-2",
                children: [
                  c.jsx(ze, {
                    variant: "ghost",
                    onClick: () => s(false),
                    children: Z("cancel", r),
                  }),
                  c.jsx(ze, { onClick: h, children: Z("paste", r) }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
  function El(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
  }
  var XR = d.createContext(void 0);
  function jp(e) {
    const t = d.useContext(XR);
    return e || t || "ltr";
  }
  function v0(e) {
    const t = d.useRef({ value: e, previous: e });
    return d.useMemo(
      () => (
        t.current.value !== e &&
          ((t.current.previous = t.current.value), (t.current.value = e)),
        t.current.previous
      ),
      [e],
    );
  }
  var y0 = ["PageUp", "PageDown"],
    x0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    w0 = {
      "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
      "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
      "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
      "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
    },
    ws = "Slider",
    [zd, ZR, JR] = Kl(ws),
    [b0, jM] = Qn(ws, [JR]),
    [eA, dc] = b0(ws),
    S0 = d.forwardRef((e, t) => {
      const {
          name: n,
          min: r = 0,
          max: o = 100,
          step: s = 1,
          orientation: i = "horizontal",
          disabled: a = false,
          minStepsBetweenThumbs: l = 0,
          defaultValue: u = [r],
          value: f,
          onValueChange: p = () => {},
          onValueCommit: v = () => {},
          inverted: h = false,
          form: b,
          ...m
        } = e,
        x = d.useRef(new Set()),
        y = d.useRef(0),
        w = i === "horizontal" ? tA : nA,
        [C = [], k] = Nr({
          prop: f,
          defaultProp: u,
          onChange: ($) => {
            var K;
            ((K = [...x.current][y.current]) == null || K.focus(), p($));
          },
        }),
        T = d.useRef(C);
      function N($) {
        const B = aA(C, $);
        I($, B);
      }
      function j($) {
        I($, y.current);
      }
      function D() {
        const $ = T.current[y.current];
        C[y.current] !== $ && v(C);
      }
      function I($, B, { commit: K } = { commit: false }) {
        const F = dA(s),
          te = fA(Math.round(($ - r) / s) * s + r, F),
          G = El(te, [r, o]);
        k((H = []) => {
          const A = sA(H, G, B);
          if (uA(A, l * s)) {
            y.current = A.indexOf(G);
            const P = String(A) !== String(H);
            return (P && K && v(A), P ? A : H);
          } else return H;
        });
      }
      return c.jsx(eA, {
        scope: e.__scopeSlider,
        name: n,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: x.current,
        values: C,
        orientation: i,
        form: b,
        children: c.jsx(zd.Provider, {
          scope: e.__scopeSlider,
          children: c.jsx(zd.Slot, {
            scope: e.__scopeSlider,
            children: c.jsx(w, {
              "aria-disabled": a,
              "data-disabled": a ? "" : void 0,
              ...m,
              ref: t,
              onPointerDown: oe(m.onPointerDown, () => {
                a || (T.current = C);
              }),
              min: r,
              max: o,
              inverted: h,
              onSlideStart: a ? void 0 : N,
              onSlideMove: a ? void 0 : j,
              onSlideEnd: a ? void 0 : D,
              onHomeKeyDown: () => !a && I(r, 0, { commit: true }),
              onEndKeyDown: () => !a && I(o, C.length - 1, { commit: true }),
              onStepKeyDown: ({ event: $, direction: B }) => {
                if (!a) {
                  const te =
                      y0.includes($.key) || ($.shiftKey && x0.includes($.key))
                        ? 10
                        : 1,
                    G = y.current,
                    H = C[G],
                    A = s * te * B;
                  I(H + A, G, { commit: true });
                }
              },
            }),
          }),
        }),
      });
    });
  S0.displayName = ws;
  var [C0, k0] = b0(ws, {
      startEdge: "left",
      endEdge: "right",
      size: "width",
      direction: 1,
    }),
    tA = d.forwardRef((e, t) => {
      const {
          min: n,
          max: r,
          dir: o,
          inverted: s,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...f
        } = e,
        [p, v] = d.useState(null),
        h = ge(t, (w) => v(w)),
        b = d.useRef(void 0),
        m = jp(o),
        x = m === "ltr",
        y = (x && !s) || (!x && s);
      function g(w) {
        const C = b.current || p.getBoundingClientRect(),
          k = [0, C.width],
          N = Rp(k, y ? [n, r] : [r, n]);
        return ((b.current = C), N(w - C.left));
      }
      return c.jsx(C0, {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: c.jsx(E0, {
          dir: m,
          "data-orientation": "horizontal",
          ...f,
          ref: h,
          style: {
            ...f.style,
            "--radix-slider-thumb-transform": "translateX(-50%)",
          },
          onSlideStart: (w) => {
            const C = g(w.clientX);
            i == null || i(C);
          },
          onSlideMove: (w) => {
            const C = g(w.clientX);
            a == null || a(C);
          },
          onSlideEnd: () => {
            ((b.current = void 0), l == null || l());
          },
          onStepKeyDown: (w) => {
            const k = w0[y ? "from-left" : "from-right"].includes(w.key);
            u == null || u({ event: w, direction: k ? -1 : 1 });
          },
        }),
      });
    }),
    nA = d.forwardRef((e, t) => {
      const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...u
        } = e,
        f = d.useRef(null),
        p = ge(t, f),
        v = d.useRef(void 0),
        h = !o;
      function b(m) {
        const x = v.current || f.current.getBoundingClientRect(),
          y = [0, x.height],
          w = Rp(y, h ? [r, n] : [n, r]);
        return ((v.current = x), w(m - x.top));
      }
      return c.jsx(C0, {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: c.jsx(E0, {
          "data-orientation": "vertical",
          ...u,
          ref: p,
          style: {
            ...u.style,
            "--radix-slider-thumb-transform": "translateY(50%)",
          },
          onSlideStart: (m) => {
            const x = b(m.clientY);
            s == null || s(x);
          },
          onSlideMove: (m) => {
            const x = b(m.clientY);
            i == null || i(x);
          },
          onSlideEnd: () => {
            ((v.current = void 0), a == null || a());
          },
          onStepKeyDown: (m) => {
            const y = w0[h ? "from-bottom" : "from-top"].includes(m.key);
            l == null || l({ event: m, direction: y ? -1 : 1 });
          },
        }),
      });
    }),
    E0 = d.forwardRef((e, t) => {
      const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: i,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...u
        } = e,
        f = dc(ws, n);
      return c.jsx(le.span, {
        ...u,
        ref: t,
        onKeyDown: oe(e.onKeyDown, (p) => {
          p.key === "Home"
            ? (i(p), p.preventDefault())
            : p.key === "End"
              ? (a(p), p.preventDefault())
              : y0.concat(x0).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: oe(e.onPointerDown, (p) => {
          const v = p.target;
          (v.setPointerCapture(p.pointerId),
            p.preventDefault(),
            f.thumbs.has(v) ? v.focus() : r(p));
        }),
        onPointerMove: oe(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && o(p);
        }),
        onPointerUp: oe(e.onPointerUp, (p) => {
          const v = p.target;
          v.hasPointerCapture(p.pointerId) &&
            (v.releasePointerCapture(p.pointerId), s(p));
        }),
      });
    }),
    T0 = "SliderTrack",
    N0 = d.forwardRef((e, t) => {
      const { __scopeSlider: n, ...r } = e,
        o = dc(T0, n);
      return c.jsx(le.span, {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t,
      });
    });
  N0.displayName = T0;
  var $d = "SliderRange",
    P0 = d.forwardRef((e, t) => {
      const { __scopeSlider: n, ...r } = e,
        o = dc($d, n),
        s = k0($d, n),
        i = d.useRef(null),
        a = ge(t, i),
        l = o.values.length,
        u = o.values.map((v) => A0(v, o.min, o.max)),
        f = l > 1 ? Math.min(...u) : 0,
        p = 100 - Math.max(...u);
      return c.jsx(le.span, {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: a,
        style: { ...e.style, [s.startEdge]: f + "%", [s.endEdge]: p + "%" },
      });
    });
  P0.displayName = $d;
  var Bd = "SliderThumb",
    j0 = d.forwardRef((e, t) => {
      const n = ZR(e.__scopeSlider),
        [r, o] = d.useState(null),
        s = ge(t, (a) => o(a)),
        i = d.useMemo(
          () => (r ? n().findIndex((a) => a.ref.current === r) : -1),
          [n, r],
        );
      return c.jsx(rA, { ...e, ref: s, index: i });
    }),
    rA = d.forwardRef((e, t) => {
      const { __scopeSlider: n, index: r, name: o, ...s } = e,
        i = dc(Bd, n),
        a = k0(Bd, n),
        [l, u] = d.useState(null),
        f = ge(t, (g) => u(g)),
        p = l ? i.form || !!l.closest("form") : true,
        v = Zx(l),
        h = i.values[r],
        b = h === void 0 ? 0 : A0(h, i.min, i.max),
        m = iA(r, i.values.length),
        x = v == null ? void 0 : v[a.size],
        y = x ? lA(x, b, a.direction) : 0;
      return (
        d.useEffect(() => {
          if (l)
            return (
              i.thumbs.add(l),
              () => {
                i.thumbs.delete(l);
              }
            );
        }, [l, i.thumbs]),
        c.jsxs("span", {
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [a.startEdge]: `calc(${b}% + ${y}px)`,
          },
          children: [
            c.jsx(zd.ItemSlot, {
              scope: e.__scopeSlider,
              children: c.jsx(le.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": i.min,
                "aria-valuenow": h,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...s,
                ref: f,
                style: h === void 0 ? { display: "none" } : e.style,
                onFocus: oe(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = r;
                }),
              }),
            }),
            p &&
              c.jsx(
                R0,
                {
                  name:
                    o ??
                    (i.name
                      ? i.name + (i.values.length > 1 ? "[]" : "")
                      : void 0),
                  form: i.form,
                  value: h,
                },
                r,
              ),
          ],
        })
      );
    });
  j0.displayName = Bd;
  var oA = "RadioBubbleInput",
    R0 = d.forwardRef(({ __scopeSlider: e, value: t, ...n }, r) => {
      const o = d.useRef(null),
        s = ge(o, r),
        i = v0(t);
      return (
        d.useEffect(() => {
          const a = o.current;
          if (!a) return;
          const l = window.HTMLInputElement.prototype,
            f = Object.getOwnPropertyDescriptor(l, "value").set;
          if (i !== t && f) {
            const p = new Event("input", { bubbles: true });
            (f.call(a, t), a.dispatchEvent(p));
          }
        }, [i, t]),
        c.jsx(le.input, {
          style: { display: "none" },
          ...n,
          ref: s,
          defaultValue: t,
        })
      );
    });
  R0.displayName = oA;
  function sA(e = [], t, n) {
    const r = [...e];
    return ((r[n] = t), r.sort((o, s) => o - s));
  }
  function A0(e, t, n) {
    const s = (100 / (n - t)) * (e - t);
    return El(s, [0, 100]);
  }
  function iA(e, t) {
    return t > 2
      ? `Value ${e + 1} of ${t}`
      : t === 2
        ? ["Minimum", "Maximum"][e]
        : void 0;
  }
  function aA(e, t) {
    if (e.length === 1) return 0;
    const n = e.map((o) => Math.abs(o - t)),
      r = Math.min(...n);
    return n.indexOf(r);
  }
  function lA(e, t, n) {
    const r = e / 2,
      s = Rp([0, 50], [0, r]);
    return (r - s(t) * n) * n;
  }
  function cA(e) {
    return e.slice(0, -1).map((t, n) => e[n + 1] - t);
  }
  function uA(e, t) {
    if (t > 0) {
      const n = cA(e);
      return Math.min(...n) >= t;
    }
    return true;
  }
  function Rp(e, t) {
    return (n) => {
      if (e[0] === e[1] || t[0] === t[1]) return t[0];
      const r = (t[1] - t[0]) / (e[1] - e[0]);
      return t[0] + r * (n - e[0]);
    };
  }
  function dA(e) {
    return (String(e).split(".")[1] || "").length;
  }
  function fA(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n;
  }
  var D0 = S0,
    pA = N0,
    hA = P0,
    mA = j0;
  const Ap = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsxs(D0, {
      ref: n,
      className: be(
        "relative flex w-full touch-none select-none items-center",
        e,
      ),
      ...t,
      children: [
        c.jsx(pA, {
          className:
            "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
          children: c.jsx(hA, { className: "absolute h-full bg-primary" }),
        }),
        c.jsx(mA, {
          className:
            "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        }),
      ],
    }),
  );
  Ap.displayName = D0.displayName;
  var fc = "Collapsible",
    [gA, M0] = Qn(fc),
    [vA, Dp] = gA(fc),
    O0 = d.forwardRef((e, t) => {
      const {
          __scopeCollapsible: n,
          open: r,
          defaultOpen: o,
          disabled: s,
          onOpenChange: i,
          ...a
        } = e,
        [l, u] = Nr({
          prop: r,
          defaultProp: o ?? false,
          onChange: i,
          caller: fc,
        });
      return c.jsx(vA, {
        scope: n,
        disabled: s,
        contentId: Cr(),
        open: l,
        onOpenToggle: d.useCallback(() => u((f) => !f), [u]),
        children: c.jsx(le.div, {
          "data-state": _p(l),
          "data-disabled": s ? "" : void 0,
          ...a,
          ref: t,
        }),
      });
    });
  O0.displayName = fc;
  var I0 = "CollapsibleTrigger",
    Mp = d.forwardRef((e, t) => {
      const { __scopeCollapsible: n, ...r } = e,
        o = Dp(I0, n);
      return c.jsx(le.button, {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || false,
        "data-state": _p(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: oe(e.onClick, o.onOpenToggle),
      });
    });
  Mp.displayName = I0;
  var Op = "CollapsibleContent",
    Ip = d.forwardRef((e, t) => {
      const { forceMount: n, ...r } = e,
        o = Dp(Op, e.__scopeCollapsible);
      return c.jsx(go, {
        present: n || o.open,
        children: ({ present: s }) => c.jsx(yA, { ...r, ref: t, present: s }),
      });
    });
  Ip.displayName = Op;
  var yA = d.forwardRef((e, t) => {
    const { __scopeCollapsible: n, present: r, children: o, ...s } = e,
      i = Dp(Op, n),
      [a, l] = d.useState(r),
      u = d.useRef(null),
      f = ge(t, u),
      p = d.useRef(0),
      v = p.current,
      h = d.useRef(0),
      b = h.current,
      m = i.open || a,
      x = d.useRef(m),
      y = d.useRef(void 0);
    return (
      d.useEffect(() => {
        const g = requestAnimationFrame(() => (x.current = false));
        return () => cancelAnimationFrame(g);
      }, []),
      Ze(() => {
        const g = u.current;
        if (g) {
          ((y.current = y.current || {
            transitionDuration: g.style.transitionDuration,
            animationName: g.style.animationName,
          }),
            (g.style.transitionDuration = "0s"),
            (g.style.animationName = "none"));
          const w = g.getBoundingClientRect();
          ((p.current = w.height),
            (h.current = w.width),
            x.current ||
              ((g.style.transitionDuration = y.current.transitionDuration),
              (g.style.animationName = y.current.animationName)),
            l(r));
        }
      }, [i.open, r]),
      c.jsx(le.div, {
        "data-state": _p(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !m,
        ...s,
        ref: f,
        style: {
          "--radix-collapsible-content-height": v ? `${v}px` : void 0,
          "--radix-collapsible-content-width": b ? `${b}px` : void 0,
          ...e.style,
        },
        children: m && o,
      })
    );
  });
  function _p(e) {
    return e ? "open" : "closed";
  }
  var _0 = O0;
  const bA = _0,
    SA = Mp,
    CA = Ip;
  var kA = [" ", "Enter", "ArrowUp", "ArrowDown"],
    EA = [" ", "Enter"],
    fo = "Select",
    [pc, hc, TA] = Kl(fo),
    [bs, RM] = Qn(fo, [TA, rc]),
    mc = rc(),
    [NA, Fr] = bs(fo),
    [PA, jA] = bs(fo),
    L0 = (e) => {
      const {
          __scopeSelect: t,
          children: n,
          open: r,
          defaultOpen: o,
          onOpenChange: s,
          value: i,
          defaultValue: a,
          onValueChange: l,
          dir: u,
          name: f,
          autoComplete: p,
          disabled: v,
          required: h,
          form: b,
        } = e,
        m = mc(t),
        [x, y] = d.useState(null),
        [g, w] = d.useState(null),
        [C, k] = d.useState(false),
        T = jp(u),
        [N, j] = Nr({
          prop: r,
          defaultProp: o ?? false,
          onChange: s,
          caller: fo,
        }),
        [D, I] = Nr({ prop: i, defaultProp: a, onChange: l, caller: fo }),
        $ = d.useRef(null),
        B = x ? b || !!x.closest("form") : true,
        [K, F] = d.useState(new Set()),
        te = Array.from(K)
          .map((G) => G.props.value)
          .join(";");
      return c.jsx(GN, {
        ...m,
        children: c.jsxs(NA, {
          required: h,
          scope: t,
          trigger: x,
          onTriggerChange: y,
          valueNode: g,
          onValueNodeChange: w,
          valueNodeHasChildren: C,
          onValueNodeHasChildrenChange: k,
          contentId: Cr(),
          value: D,
          onValueChange: I,
          open: N,
          onOpenChange: j,
          dir: T,
          triggerPointerDownPosRef: $,
          disabled: v,
          children: [
            c.jsx(pc.Provider, {
              scope: t,
              children: c.jsx(PA, {
                scope: e.__scopeSelect,
                onNativeOptionAdd: d.useCallback((G) => {
                  F((H) => new Set(H).add(G));
                }, []),
                onNativeOptionRemove: d.useCallback((G) => {
                  F((H) => {
                    const A = new Set(H);
                    return (A.delete(G), A);
                  });
                }, []),
                children: n,
              }),
            }),
            B
              ? c.jsxs(
                  ab,
                  {
                    "aria-hidden": true,
                    required: h,
                    tabIndex: -1,
                    name: f,
                    autoComplete: p,
                    value: D,
                    onChange: (G) => I(G.target.value),
                    disabled: v,
                    form: b,
                    children: [
                      D === void 0 ? c.jsx("option", { value: "" }) : null,
                      Array.from(K),
                    ],
                  },
                  te,
                )
              : null,
          ],
        }),
      });
    };
  L0.displayName = fo;
  var F0 = "SelectTrigger",
    z0 = d.forwardRef((e, t) => {
      const { __scopeSelect: n, disabled: r = false, ...o } = e,
        s = mc(n),
        i = Fr(F0, n),
        a = i.disabled || r,
        l = ge(t, i.onTriggerChange),
        u = hc(n),
        f = d.useRef("touch"),
        [p, v, h] = cb((m) => {
          const x = u().filter((w) => !w.disabled),
            y = x.find((w) => w.value === i.value),
            g = ub(x, m, y);
          g !== void 0 && i.onValueChange(g.value);
        }),
        b = (m) => {
          (a || (i.onOpenChange(true), h()),
            m &&
              (i.triggerPointerDownPosRef.current = {
                x: Math.round(m.pageX),
                y: Math.round(m.pageY),
              }));
        };
      return c.jsx(lw, {
        asChild: true,
        ...s,
        children: c.jsx(le.button, {
          type: "button",
          role: "combobox",
          "aria-controls": i.contentId,
          "aria-expanded": i.open,
          "aria-required": i.required,
          "aria-autocomplete": "none",
          dir: i.dir,
          "data-state": i.open ? "open" : "closed",
          disabled: a,
          "data-disabled": a ? "" : void 0,
          "data-placeholder": lb(i.value) ? "" : void 0,
          ...o,
          ref: l,
          onClick: oe(o.onClick, (m) => {
            (m.currentTarget.focus(), f.current !== "mouse" && b(m));
          }),
          onPointerDown: oe(o.onPointerDown, (m) => {
            f.current = m.pointerType;
            const x = m.target;
            (x.hasPointerCapture(m.pointerId) &&
              x.releasePointerCapture(m.pointerId),
              m.button === 0 &&
                m.ctrlKey === false &&
                m.pointerType === "mouse" &&
                (b(m), m.preventDefault()));
          }),
          onKeyDown: oe(o.onKeyDown, (m) => {
            const x = p.current !== "";
            (!(m.ctrlKey || m.altKey || m.metaKey) &&
              m.key.length === 1 &&
              v(m.key),
              !(x && m.key === " ") &&
                kA.includes(m.key) &&
                (b(), m.preventDefault()));
          }),
        }),
      });
    });
  z0.displayName = F0;
  var $0 = "SelectValue",
    B0 = d.forwardRef((e, t) => {
      const {
          __scopeSelect: n,
          className: r,
          style: o,
          children: s,
          placeholder: i = "",
          ...a
        } = e,
        l = Fr($0, n),
        { onValueNodeHasChildrenChange: u } = l,
        f = s !== void 0,
        p = ge(t, l.onValueNodeChange);
      return (
        Ze(() => {
          u(f);
        }, [u, f]),
        c.jsx(le.span, {
          ...a,
          ref: p,
          style: { pointerEvents: "none" },
          children: lb(l.value) ? c.jsx(c.Fragment, { children: i }) : s,
        })
      );
    });
  B0.displayName = $0;
  var RA = "SelectIcon",
    W0 = d.forwardRef((e, t) => {
      const { __scopeSelect: n, children: r, ...o } = e;
      return c.jsx(le.span, {
        "aria-hidden": true,
        ...o,
        ref: t,
        children: r || "▼",
      });
    });
  W0.displayName = RA;
  var AA = "SelectPortal",
    U0 = (e) => c.jsx(Yl, { asChild: true, ...e });
  U0.displayName = AA;
  var po = "SelectContent",
    H0 = d.forwardRef((e, t) => {
      const n = Fr(po, e.__scopeSelect),
        [r, o] = d.useState();
      if (
        (Ze(() => {
          o(new DocumentFragment());
        }, []),
        !n.open)
      ) {
        const s = r;
        return s
          ? Ht.createPortal(
              c.jsx(V0, {
                scope: e.__scopeSelect,
                children: c.jsx(pc.Slot, {
                  scope: e.__scopeSelect,
                  children: c.jsx("div", { children: e.children }),
                }),
              }),
              s,
            )
          : null;
      }
      return c.jsx(q0, { ...e, ref: t });
    });
  H0.displayName = po;
  var Yt = 10,
    [V0, zr] = bs(po),
    DA = "SelectContentImpl",
    MA = ls("SelectContent.RemoveScroll"),
    q0 = d.forwardRef((e, t) => {
      const {
          __scopeSelect: n,
          position: r = "item-aligned",
          onCloseAutoFocus: o,
          onEscapeKeyDown: s,
          onPointerDownOutside: i,
          side: a,
          sideOffset: l,
          align: u,
          alignOffset: f,
          arrowPadding: p,
          collisionBoundary: v,
          collisionPadding: h,
          sticky: b,
          hideWhenDetached: m,
          avoidCollisions: x,
          ...y
        } = e,
        g = Fr(po, n),
        [w, C] = d.useState(null),
        [k, T] = d.useState(null),
        N = ge(t, (M) => C(M)),
        [j, D] = d.useState(null),
        [I, $] = d.useState(null),
        B = hc(n),
        [K, F] = d.useState(false),
        te = d.useRef(false);
      (d.useEffect(() => {
        if (w) return Qw(w);
      }, [w]),
        zw());
      const G = d.useCallback(
          (M) => {
            const [q, ...ee] = B().map((X) => X.ref.current),
              [U] = ee.slice(-1),
              Y = document.activeElement;
            for (const X of M)
              if (
                X === Y ||
                (X == null || X.scrollIntoView({ block: "nearest" }),
                X === q && k && (k.scrollTop = 0),
                X === U && k && (k.scrollTop = k.scrollHeight),
                X == null || X.focus(),
                document.activeElement !== Y)
              )
                return;
          },
          [B, k],
        ),
        H = d.useCallback(() => G([j, w]), [G, j, w]);
      d.useEffect(() => {
        K && H();
      }, [K, H]);
      const { onOpenChange: A, triggerPointerDownPosRef: P } = g;
      (d.useEffect(() => {
        if (w) {
          let M = { x: 0, y: 0 };
          const q = (U) => {
              var Y, X;
              M = {
                x: Math.abs(
                  Math.round(U.pageX) -
                    (((Y = P.current) == null ? void 0 : Y.x) ?? 0),
                ),
                y: Math.abs(
                  Math.round(U.pageY) -
                    (((X = P.current) == null ? void 0 : X.y) ?? 0),
                ),
              };
            },
            ee = (U) => {
              (M.x <= 10 && M.y <= 10
                ? U.preventDefault()
                : w.contains(U.target) || A(false),
                document.removeEventListener("pointermove", q),
                (P.current = null));
            };
          return (
            P.current !== null &&
              (document.addEventListener("pointermove", q),
              document.addEventListener("pointerup", ee, {
                capture: true,
                once: true,
              })),
            () => {
              (document.removeEventListener("pointermove", q),
                document.removeEventListener("pointerup", ee, {
                  capture: true,
                }));
            }
          );
        }
      }, [w, A, P]),
        d.useEffect(() => {
          const M = () => A(false);
          return (
            window.addEventListener("blur", M),
            window.addEventListener("resize", M),
            () => {
              (window.removeEventListener("blur", M),
                window.removeEventListener("resize", M));
            }
          );
        }, [A]));
      const [E, S] = cb((M) => {
          const q = B().filter((Y) => !Y.disabled),
            ee = q.find((Y) => Y.ref.current === document.activeElement),
            U = ub(q, M, ee);
          U && setTimeout(() => U.ref.current.focus());
        }),
        R = d.useCallback(
          (M, q, ee) => {
            const U = !te.current && !ee;
            ((g.value !== void 0 && g.value === q) || U) &&
              (D(M), U && (te.current = true));
          },
          [g.value],
        ),
        L = d.useCallback(() => (w == null ? void 0 : w.focus()), [w]),
        z = d.useCallback(
          (M, q, ee) => {
            const U = !te.current && !ee;
            ((g.value !== void 0 && g.value === q) || U) && $(M);
          },
          [g.value],
        ),
        Q = r === "popper" ? Wd : G0,
        V =
          Q === Wd
            ? {
                side: a,
                sideOffset: l,
                align: u,
                alignOffset: f,
                arrowPadding: p,
                collisionBoundary: v,
                collisionPadding: h,
                sticky: b,
                hideWhenDetached: m,
                avoidCollisions: x,
              }
            : {};
      return c.jsx(V0, {
        scope: n,
        content: w,
        viewport: k,
        onViewportChange: T,
        itemRefCallback: R,
        selectedItem: j,
        onItemLeave: L,
        itemTextRefCallback: z,
        focusSelectedItem: H,
        selectedItemText: I,
        position: r,
        isPositioned: K,
        searchRef: E,
        children: c.jsx(Sp, {
          as: MA,
          allowPinchZoom: true,
          children: c.jsx(bp, {
            asChild: true,
            trapped: g.open,
            onMountAutoFocus: (M) => {
              M.preventDefault();
            },
            onUnmountAutoFocus: oe(o, (M) => {
              var q;
              ((q = g.trigger) == null || q.focus({ preventScroll: true }),
                M.preventDefault());
            }),
            children: c.jsx($i, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: s,
              onPointerDownOutside: i,
              onFocusOutside: (M) => M.preventDefault(),
              onDismiss: () => g.onOpenChange(false),
              children: c.jsx(Q, {
                role: "listbox",
                id: g.contentId,
                "data-state": g.open ? "open" : "closed",
                dir: g.dir,
                onContextMenu: (M) => M.preventDefault(),
                ...y,
                ...V,
                onPlaced: () => F(true),
                ref: N,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...y.style,
                },
                onKeyDown: oe(y.onKeyDown, (M) => {
                  const q = M.ctrlKey || M.altKey || M.metaKey;
                  if (
                    (M.key === "Tab" && M.preventDefault(),
                    !q && M.key.length === 1 && S(M.key),
                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key))
                  ) {
                    let U = B()
                      .filter((Y) => !Y.disabled)
                      .map((Y) => Y.ref.current);
                    if (
                      (["ArrowUp", "End"].includes(M.key) &&
                        (U = U.slice().reverse()),
                      ["ArrowUp", "ArrowDown"].includes(M.key))
                    ) {
                      const Y = M.target,
                        X = U.indexOf(Y);
                      U = U.slice(X + 1);
                    }
                    (setTimeout(() => G(U)), M.preventDefault());
                  }
                }),
              }),
            }),
          }),
        }),
      });
    });
  q0.displayName = DA;
  var OA = "SelectItemAlignedPosition",
    G0 = d.forwardRef((e, t) => {
      const { __scopeSelect: n, onPlaced: r, ...o } = e,
        s = Fr(po, n),
        i = zr(po, n),
        [a, l] = d.useState(null),
        [u, f] = d.useState(null),
        p = ge(t, (N) => f(N)),
        v = hc(n),
        h = d.useRef(false),
        b = d.useRef(true),
        {
          viewport: m,
          selectedItem: x,
          selectedItemText: y,
          focusSelectedItem: g,
        } = i,
        w = d.useCallback(() => {
          if (s.trigger && s.valueNode && a && u && m && x && y) {
            const N = s.trigger.getBoundingClientRect(),
              j = u.getBoundingClientRect(),
              D = s.valueNode.getBoundingClientRect(),
              I = y.getBoundingClientRect();
            if (s.dir !== "rtl") {
              const Y = I.left - j.left,
                X = D.left - Y,
                ie = N.left - X,
                ne = N.width + ie,
                he = Math.max(ne, j.width),
                ve = window.innerWidth - Yt,
                we = El(X, [Yt, Math.max(Yt, ve - he)]);
              ((a.style.minWidth = ne + "px"), (a.style.left = we + "px"));
            } else {
              const Y = j.right - I.right,
                X = window.innerWidth - D.right - Y,
                ie = window.innerWidth - N.right - X,
                ne = N.width + ie,
                he = Math.max(ne, j.width),
                ve = window.innerWidth - Yt,
                we = El(X, [Yt, Math.max(Yt, ve - he)]);
              ((a.style.minWidth = ne + "px"), (a.style.right = we + "px"));
            }
            const $ = v(),
              B = window.innerHeight - Yt * 2,
              K = m.scrollHeight,
              F = window.getComputedStyle(u),
              te = parseInt(F.borderTopWidth, 10),
              G = parseInt(F.paddingTop, 10),
              H = parseInt(F.borderBottomWidth, 10),
              A = parseInt(F.paddingBottom, 10),
              P = te + G + K + A + H,
              E = Math.min(x.offsetHeight * 5, P),
              S = window.getComputedStyle(m),
              R = parseInt(S.paddingTop, 10),
              L = parseInt(S.paddingBottom, 10),
              z = N.top + N.height / 2 - Yt,
              Q = B - z,
              V = x.offsetHeight / 2,
              M = x.offsetTop + V,
              q = te + G + M,
              ee = P - q;
            if (q <= z) {
              const Y = $.length > 0 && x === $[$.length - 1].ref.current;
              a.style.bottom = "0px";
              const X = u.clientHeight - m.offsetTop - m.offsetHeight,
                ie = Math.max(Q, V + (Y ? L : 0) + X + H),
                ne = q + ie;
              a.style.height = ne + "px";
            } else {
              const Y = $.length > 0 && x === $[0].ref.current;
              a.style.top = "0px";
              const ie = Math.max(z, te + m.offsetTop + (Y ? R : 0) + V) + ee;
              ((a.style.height = ie + "px"),
                (m.scrollTop = q - z + m.offsetTop));
            }
            ((a.style.margin = `${Yt}px 0`),
              (a.style.minHeight = E + "px"),
              (a.style.maxHeight = B + "px"),
              r == null || r(),
              requestAnimationFrame(() => (h.current = true)));
          }
        }, [v, s.trigger, s.valueNode, a, u, m, x, y, s.dir, r]);
      Ze(() => w(), [w]);
      const [C, k] = d.useState();
      Ze(() => {
        u && k(window.getComputedStyle(u).zIndex);
      }, [u]);
      const T = d.useCallback(
        (N) => {
          N &&
            b.current === true &&
            (w(), g == null || g(), (b.current = false));
        },
        [w, g],
      );
      return c.jsx(_A, {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: h,
        onScrollButtonChange: T,
        children: c.jsx("div", {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C,
          },
          children: c.jsx(le.div, {
            ...o,
            ref: p,
            style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
          }),
        }),
      });
    });
  G0.displayName = OA;
  var IA = "SelectPopperPosition",
    Wd = d.forwardRef((e, t) => {
      const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Yt,
          ...s
        } = e,
        i = mc(n);
      return c.jsx(cw, {
        ...i,
        ...s,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
          boxSizing: "border-box",
          ...s.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
  Wd.displayName = IA;
  var [_A, Lp] = bs(po, {}),
    Ud = "SelectViewport",
    Q0 = d.forwardRef((e, t) => {
      const { __scopeSelect: n, nonce: r, ...o } = e,
        s = zr(Ud, n),
        i = Lp(Ud, n),
        a = ge(t, s.onViewportChange),
        l = d.useRef(0);
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("style", {
            dangerouslySetInnerHTML: {
              __html:
                "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
            },
            nonce: r,
          }),
          c.jsx(pc.Slot, {
            scope: n,
            children: c.jsx(le.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: a,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style,
              },
              onScroll: oe(o.onScroll, (u) => {
                const f = u.currentTarget,
                  { contentWrapper: p, shouldExpandOnScrollRef: v } = i;
                if (v != null && v.current && p) {
                  const h = Math.abs(l.current - f.scrollTop);
                  if (h > 0) {
                    const b = window.innerHeight - Yt * 2,
                      m = parseFloat(p.style.minHeight),
                      x = parseFloat(p.style.height),
                      y = Math.max(m, x);
                    if (y < b) {
                      const g = y + h,
                        w = Math.min(b, g),
                        C = g - w;
                      ((p.style.height = w + "px"),
                        p.style.bottom === "0px" &&
                          ((f.scrollTop = C > 0 ? C : 0),
                          (p.style.justifyContent = "flex-end")));
                    }
                  }
                }
                l.current = f.scrollTop;
              }),
            }),
          }),
        ],
      });
    });
  Q0.displayName = Ud;
  var K0 = "SelectGroup",
    [LA, FA] = bs(K0),
    zA = d.forwardRef((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = Cr();
      return c.jsx(LA, {
        scope: n,
        id: o,
        children: c.jsx(le.div, {
          role: "group",
          "aria-labelledby": o,
          ...r,
          ref: t,
        }),
      });
    });
  zA.displayName = K0;
  var Y0 = "SelectLabel",
    X0 = d.forwardRef((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = FA(Y0, n);
      return c.jsx(le.div, { id: o.id, ...r, ref: t });
    });
  X0.displayName = Y0;
  var Tl = "SelectItem",
    [$A, Z0] = bs(Tl),
    J0 = d.forwardRef((e, t) => {
      const {
          __scopeSelect: n,
          value: r,
          disabled: o = false,
          textValue: s,
          ...i
        } = e,
        a = Fr(Tl, n),
        l = zr(Tl, n),
        u = a.value === r,
        [f, p] = d.useState(s ?? ""),
        [v, h] = d.useState(false),
        b = ge(t, (g) => {
          var w;
          return (w = l.itemRefCallback) == null ? void 0 : w.call(l, g, r, o);
        }),
        m = Cr(),
        x = d.useRef("touch"),
        y = () => {
          o || (a.onValueChange(r), a.onOpenChange(false));
        };
      if (r === "")
        throw new Error(
          "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
        );
      return c.jsx($A, {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: u,
        onItemTextChange: d.useCallback((g) => {
          p((w) => w || ((g == null ? void 0 : g.textContent) ?? "").trim());
        }, []),
        children: c.jsx(pc.ItemSlot, {
          scope: n,
          value: r,
          disabled: o,
          textValue: f,
          children: c.jsx(le.div, {
            role: "option",
            "aria-labelledby": m,
            "data-highlighted": v ? "" : void 0,
            "aria-selected": u && v,
            "data-state": u ? "checked" : "unchecked",
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            tabIndex: o ? void 0 : -1,
            ...i,
            ref: b,
            onFocus: oe(i.onFocus, () => h(true)),
            onBlur: oe(i.onBlur, () => h(false)),
            onClick: oe(i.onClick, () => {
              x.current !== "mouse" && y();
            }),
            onPointerUp: oe(i.onPointerUp, () => {
              x.current === "mouse" && y();
            }),
            onPointerDown: oe(i.onPointerDown, (g) => {
              x.current = g.pointerType;
            }),
            onPointerMove: oe(i.onPointerMove, (g) => {
              var w;
              ((x.current = g.pointerType),
                o
                  ? (w = l.onItemLeave) == null || w.call(l)
                  : x.current === "mouse" &&
                    g.currentTarget.focus({ preventScroll: true }));
            }),
            onPointerLeave: oe(i.onPointerLeave, (g) => {
              var w;
              g.currentTarget === document.activeElement &&
                ((w = l.onItemLeave) == null || w.call(l));
            }),
            onKeyDown: oe(i.onKeyDown, (g) => {
              var C;
              (((C = l.searchRef) == null ? void 0 : C.current) !== "" &&
                g.key === " ") ||
                (EA.includes(g.key) && y(),
                g.key === " " && g.preventDefault());
            }),
          }),
        }),
      });
    });
  J0.displayName = Tl;
  var Vs = "SelectItemText",
    eb = d.forwardRef((e, t) => {
      const { __scopeSelect: n, className: r, style: o, ...s } = e,
        i = Fr(Vs, n),
        a = zr(Vs, n),
        l = Z0(Vs, n),
        u = jA(Vs, n),
        [f, p] = d.useState(null),
        v = ge(
          t,
          (y) => p(y),
          l.onItemTextChange,
          (y) => {
            var g;
            return (g = a.itemTextRefCallback) == null
              ? void 0
              : g.call(a, y, l.value, l.disabled);
          },
        ),
        h = f == null ? void 0 : f.textContent,
        b = d.useMemo(
          () =>
            c.jsx(
              "option",
              { value: l.value, disabled: l.disabled, children: h },
              l.value,
            ),
          [l.disabled, l.value, h],
        ),
        { onNativeOptionAdd: m, onNativeOptionRemove: x } = u;
      return (
        Ze(() => (m(b), () => x(b)), [m, x, b]),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(le.span, { id: l.textId, ...s, ref: v }),
            l.isSelected && i.valueNode && !i.valueNodeHasChildren
              ? Ht.createPortal(s.children, i.valueNode)
              : null,
          ],
        })
      );
    });
  eb.displayName = Vs;
  var tb = "SelectItemIndicator",
    nb = d.forwardRef((e, t) => {
      const { __scopeSelect: n, ...r } = e;
      return Z0(tb, n).isSelected
        ? c.jsx(le.span, { "aria-hidden": true, ...r, ref: t })
        : null;
    });
  nb.displayName = tb;
  var Hd = "SelectScrollUpButton",
    rb = d.forwardRef((e, t) => {
      const n = zr(Hd, e.__scopeSelect),
        r = Lp(Hd, e.__scopeSelect),
        [o, s] = d.useState(false),
        i = ge(t, r.onScrollButtonChange);
      return (
        Ze(() => {
          if (n.viewport && n.isPositioned) {
            let a = function () {
              const u = l.scrollTop > 0;
              s(u);
            };
            const l = n.viewport;
            return (
              a(),
              l.addEventListener("scroll", a),
              () => l.removeEventListener("scroll", a)
            );
          }
        }, [n.viewport, n.isPositioned]),
        o
          ? c.jsx(sb, {
              ...e,
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: l } = n;
                a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
              },
            })
          : null
      );
    });
  rb.displayName = Hd;
  var Vd = "SelectScrollDownButton",
    ob = d.forwardRef((e, t) => {
      const n = zr(Vd, e.__scopeSelect),
        r = Lp(Vd, e.__scopeSelect),
        [o, s] = d.useState(false),
        i = ge(t, r.onScrollButtonChange);
      return (
        Ze(() => {
          if (n.viewport && n.isPositioned) {
            let a = function () {
              const u = l.scrollHeight - l.clientHeight,
                f = Math.ceil(l.scrollTop) < u;
              s(f);
            };
            const l = n.viewport;
            return (
              a(),
              l.addEventListener("scroll", a),
              () => l.removeEventListener("scroll", a)
            );
          }
        }, [n.viewport, n.isPositioned]),
        o
          ? c.jsx(sb, {
              ...e,
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: l } = n;
                a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
              },
            })
          : null
      );
    });
  ob.displayName = Vd;
  var sb = d.forwardRef((e, t) => {
      const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
        s = zr("SelectScrollButton", n),
        i = d.useRef(null),
        a = hc(n),
        l = d.useCallback(() => {
          i.current !== null &&
            (window.clearInterval(i.current), (i.current = null));
        }, []);
      return (
        d.useEffect(() => () => l(), [l]),
        Ze(() => {
          var f;
          const u = a().find((p) => p.ref.current === document.activeElement);
          (f = u == null ? void 0 : u.ref.current) == null ||
            f.scrollIntoView({ block: "nearest" });
        }, [a]),
        c.jsx(le.div, {
          "aria-hidden": true,
          ...o,
          ref: t,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: oe(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: oe(o.onPointerMove, () => {
            var u;
            ((u = s.onItemLeave) == null || u.call(s),
              i.current === null && (i.current = window.setInterval(r, 50)));
          }),
          onPointerLeave: oe(o.onPointerLeave, () => {
            l();
          }),
        })
      );
    }),
    BA = "SelectSeparator",
    ib = d.forwardRef((e, t) => {
      const { __scopeSelect: n, ...r } = e;
      return c.jsx(le.div, { "aria-hidden": true, ...r, ref: t });
    });
  ib.displayName = BA;
  var qd = "SelectArrow",
    WA = d.forwardRef((e, t) => {
      const { __scopeSelect: n, ...r } = e,
        o = mc(n),
        s = Fr(qd, n),
        i = zr(qd, n);
      return s.open && i.position === "popper"
        ? c.jsx(uw, { ...o, ...r, ref: t })
        : null;
    });
  WA.displayName = qd;
  var UA = "SelectBubbleInput",
    ab = d.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
      const o = d.useRef(null),
        s = ge(r, o),
        i = v0(t);
      return (
        d.useEffect(() => {
          const a = o.current;
          if (!a) return;
          const l = window.HTMLSelectElement.prototype,
            f = Object.getOwnPropertyDescriptor(l, "value").set;
          if (i !== t && f) {
            const p = new Event("change", { bubbles: true });
            (f.call(a, t), a.dispatchEvent(p));
          }
        }, [i, t]),
        c.jsx(le.select, {
          ...n,
          style: { ...lx, ...n.style },
          ref: s,
          defaultValue: t,
        })
      );
    });
  ab.displayName = UA;
  function lb(e) {
    return e === "" || e === void 0;
  }
  function cb(e) {
    const t = ln(e),
      n = d.useRef(""),
      r = d.useRef(0),
      o = d.useCallback(
        (i) => {
          const a = n.current + i;
          (t(a),
            (function l(u) {
              ((n.current = u),
                window.clearTimeout(r.current),
                u !== "" && (r.current = window.setTimeout(() => l(""), 1e3)));
            })(a));
        },
        [t],
      ),
      s = d.useCallback(() => {
        ((n.current = ""), window.clearTimeout(r.current));
      }, []);
    return (
      d.useEffect(() => () => window.clearTimeout(r.current), []),
      [n, o, s]
    );
  }
  function ub(e, t, n) {
    const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
      s = n ? e.indexOf(n) : -1;
    let i = HA(e, Math.max(s, 0));
    o.length === 1 && (i = i.filter((u) => u !== n));
    const l = i.find((u) =>
      u.textValue.toLowerCase().startsWith(o.toLowerCase()),
    );
    return l !== n ? l : void 0;
  }
  function HA(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
  }
  var db = z0,
    GA = W0,
    QA = U0,
    fb = H0,
    KA = Q0,
    pb = X0,
    hb = J0,
    YA = eb,
    XA = nb,
    mb = rb,
    gb = ob,
    vb = ib;
  const Fp = d.forwardRef(({ className: e, children: t, ...n }, r) =>
      c.jsxs(db, {
        ref: r,
        className: be(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          e,
        ),
        ...n,
        children: [
          t,
          c.jsx(GA, {
            asChild: true,
            children: c.jsx(tp, { className: "h-4 w-4 opacity-50" }),
          }),
        ],
      }),
    );
  Fp.displayName = db.displayName;
  const wb = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(mb, {
      ref: n,
      className: be("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: c.jsx(pE, { className: "h-4 w-4" }),
    }),
  );
  wb.displayName = mb.displayName;
  const bb = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(gb, {
      ref: n,
      className: be("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: c.jsx(tp, { className: "h-4 w-4" }),
    }),
  );
  bb.displayName = gb.displayName;
  const zp = d.forwardRef(
    ({ className: e, children: t, position: n = "popper", ...r }, o) =>
      c.jsx(QA, {
        children: c.jsxs(fb, {
          ref: o,
          className: be(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            e,
          ),
          position: n,
          ...r,
          children: [
            c.jsx(wb, {}),
            c.jsx(KA, {
              className: be(
                "p-1",
                n === "popper" &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
              ),
              children: t,
            }),
            c.jsx(bb, {}),
          ],
        }),
      }),
  );
  zp.displayName = fb.displayName;
  const ZA = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(pb, {
      ref: n,
      className: be("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
      ...t,
    }),
  );
  ZA.displayName = pb.displayName;
  const $p = d.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(hb, {
      ref: r,
      className: be(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
        e,
      ),
      ...n,
      children: [
        c.jsx("span", {
          className:
            "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
          children: c.jsx(XA, {
            children: c.jsx(fE, { className: "h-4 w-4" }),
          }),
        }),
        c.jsx(YA, { children: t }),
      ],
    }),
  );
  $p.displayName = hb.displayName;
  const JA = d.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(vb, { ref: n, className: be("-mx-1 my-1 h-px bg-muted", e), ...t }),
  );
  JA.displayName = vb.displayName;
  const gc =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u";
  function Ss(e) {
    const t = Object.prototype.toString.call(e);
    return t === "[object Window]" || t === "[object global]";
  }
  function Bp(e) {
    return "nodeType" in e;
  }
  function Tt(e) {
    var t, n;
    return e
      ? Ss(e)
        ? e
        : Bp(e) &&
            (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null
          ? t
          : window
      : window;
  }
  function Wp(e) {
    const { Document: t } = Tt(e);
    return e instanceof t;
  }
  function Ui(e) {
    return Ss(e) ? false : e instanceof Tt(e).HTMLElement;
  }
  function Sb(e) {
    return e instanceof Tt(e).SVGElement;
  }
  function Cs(e) {
    return e
      ? Ss(e)
        ? e.document
        : Bp(e)
          ? Wp(e)
            ? e
            : Ui(e) || Sb(e)
              ? e.ownerDocument
              : document
          : document
      : document;
  }
  function Cb(e) {
    return function (t) {
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return r.reduce(
        (s, i) => {
          const a = Object.entries(i);
          for (const [l, u] of a) {
            const f = s[l];
            f != null && (s[l] = f + e * u);
          }
          return s;
        },
        { ...t },
      );
    };
  }
  const qo = Cb(1),
    ji = Cb(-1);
  function n2(e) {
    return "clientX" in e && "clientY" in e;
  }
  function Hp(e) {
    if (!e) return false;
    const { KeyboardEvent: t } = Tt(e.target);
    return t && e instanceof t;
  }
  function r2(e) {
    if (!e) return false;
    const { TouchEvent: t } = Tt(e.target);
    return t && e instanceof t;
  }
  function Qd(e) {
    if (r2(e)) {
      if (e.touches && e.touches.length) {
        const { clientX: t, clientY: n } = e.touches[0];
        return { x: t, y: n };
      } else if (e.changedTouches && e.changedTouches.length) {
        const { clientX: t, clientY: n } = e.changedTouches[0];
        return { x: t, y: n };
      }
    }
    return n2(e) ? { x: e.clientX, y: e.clientY } : null;
  }
  const Ri = Object.freeze({
      Translate: {
        toString(e) {
          if (!e) return;
          const { x: t, y: n } = e;
          return (
            "translate3d(" +
            (t ? Math.round(t) : 0) +
            "px, " +
            (n ? Math.round(n) : 0) +
            "px, 0)"
          );
        },
      },
      Scale: {
        toString(e) {
          if (!e) return;
          const { scaleX: t, scaleY: n } = e;
          return "scaleX(" + t + ") scaleY(" + n + ")";
        },
      },
      Transform: {
        toString(e) {
          if (e)
            return [Ri.Translate.toString(e), Ri.Scale.toString(e)].join(" ");
        },
      },
      Transition: {
        toString(e) {
          let { property: t, duration: n, easing: r } = e;
          return t + " " + n + "ms " + r;
        },
      },
    });
  const dn = Object.freeze({ x: 0, y: 0 });
  function C2(e) {
    if (e.startsWith("matrix3d(")) {
      const t = e.slice(9, -1).split(/, /);
      return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
    } else if (e.startsWith("matrix(")) {
      const t = e.slice(7, -1).split(/, /);
      return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
    }
    return null;
  }
  function k2(e, t, n) {
    const r = C2(t);
    if (!r) return e;
    const { scaleX: o, scaleY: s, x: i, y: a } = r,
      l = e.left - i - (1 - o) * parseFloat(n),
      u = e.top - a - (1 - s) * parseFloat(n.slice(n.indexOf(" ") + 1)),
      f = o ? e.width / o : e.width,
      p = s ? e.height / s : e.height;
    return {
      width: f,
      height: p,
      top: u,
      right: l + f,
      bottom: u + p,
      left: l,
    };
  }
  const E2 = { ignoreTransform: false };
  function ks(e, t) {
    t === void 0 && (t = E2);
    let n = e.getBoundingClientRect();
    if (t.ignoreTransform) {
      const { transform: u, transformOrigin: f } = Tt(e).getComputedStyle(e);
      u && (n = k2(n, u, f));
    }
    const { top: r, left: o, width: s, height: i, bottom: a, right: l } = n;
    return { top: r, left: o, width: s, height: i, bottom: a, right: l };
  }
  function N2(e, t) {
    return (
      t === void 0 && (t = Tt(e).getComputedStyle(e)),
      t.position === "fixed"
    );
  }
  function P2(e, t) {
    t === void 0 && (t = Tt(e).getComputedStyle(e));
    const n = /(auto|scroll|overlay)/;
    return ["overflow", "overflowX", "overflowY"].some((o) => {
      const s = t[o];
      return typeof s == "string" ? n.test(s) : false;
    });
  }
  function vc(e, t) {
    const n = [];
    function r(o) {
      if ((t != null && n.length >= t) || !o) return n;
      if (
        Wp(o) &&
        o.scrollingElement != null &&
        !n.includes(o.scrollingElement)
      )
        return (n.push(o.scrollingElement), n);
      if (!Ui(o) || Sb(o) || n.includes(o)) return n;
      const s = Tt(e).getComputedStyle(o);
      return (o !== e && P2(o, s) && n.push(o), N2(o, s) ? n : r(o.parentNode));
    }
    return e ? r(e) : n;
  }
  function jb(e) {
    const [t] = vc(e, 1);
    return t ?? null;
  }
  function Db(e) {
    return !gc || !e ? false : e === document.scrollingElement;
  }
  function Mb(e) {
    const t = { x: 0, y: 0 },
      n = Db(e)
        ? { height: window.innerHeight, width: window.innerWidth }
        : { height: e.clientHeight, width: e.clientWidth },
      r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height },
      o = e.scrollTop <= t.y,
      s = e.scrollLeft <= t.x,
      i = e.scrollTop >= r.y,
      a = e.scrollLeft >= r.x;
    return {
      isTop: o,
      isLeft: s,
      isBottom: i,
      isRight: a,
      maxScroll: r,
      minScroll: t,
    };
  }
  function A2(e) {
    if (e === document.scrollingElement) {
      const { innerWidth: s, innerHeight: i } = window;
      return { top: 0, left: 0, right: s, bottom: i, width: s, height: i };
    }
    const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
    return {
      top: t,
      left: n,
      right: r,
      bottom: o,
      width: e.clientWidth,
      height: e.clientHeight,
    };
  }
  function O2(e, t) {
    if ((t === void 0 && (t = ks), !e)) return;
    const { top: n, left: r, bottom: o, right: s } = t(e);
    jb(e) &&
      (o <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
      e.scrollIntoView({ block: "center", inline: "center" });
  }
  
  class ni {
    constructor(t) {
      ((this.target = void 0),
        (this.listeners = []),
        (this.removeAll = () => {
          this.listeners.forEach((n) => {
            var r;
            return (r = this.target) == null
              ? void 0
              : r.removeEventListener(...n);
          });
        }),
        (this.target = t));
    }
    add(t, n, r) {
      var o;
      ((o = this.target) == null || o.addEventListener(t, n, r),
        this.listeners.push([t, n, r]));
    }
  }
  function _2(e) {
    const { EventTarget: t } = Tt(e);
    return e instanceof t ? e : Cs(e);
  }
  function bu(e, t) {
    const n = Math.abs(e.x),
      r = Math.abs(e.y);
    return typeof t == "number"
      ? Math.sqrt(n ** 2 + r ** 2) > t
      : "x" in t && "y" in t
        ? n > t.x && r > t.y
        : "x" in t
          ? n > t.x
          : "y" in t
            ? r > t.y
            : false;
  }
  var $t;
  (function (e) {
    ((e.Click = "click"),
      (e.DragStart = "dragstart"),
      (e.Keydown = "keydown"),
      (e.ContextMenu = "contextmenu"),
      (e.Resize = "resize"),
      (e.SelectionChange = "selectionchange"),
      (e.VisibilityChange = "visibilitychange"));
  })($t || ($t = {}));
  function gg(e) {
    e.preventDefault();
  }
  function L2(e) {
    e.stopPropagation();
  }
  var pe;
  (function (e) {
    ((e.Space = "Space"),
      (e.Down = "ArrowDown"),
      (e.Right = "ArrowRight"),
      (e.Left = "ArrowLeft"),
      (e.Up = "ArrowUp"),
      (e.Esc = "Escape"),
      (e.Enter = "Enter"),
      (e.Tab = "Tab"));
  })(pe || (pe = {}));
  const Ib = {
      start: [pe.Space, pe.Enter],
      cancel: [pe.Esc],
      end: [pe.Space, pe.Enter, pe.Tab],
    },
    F2 = (e, t) => {
      let { currentCoordinates: n } = t;
      switch (e.code) {
        case pe.Right:
          return { ...n, x: n.x + 25 };
        case pe.Left:
          return { ...n, x: n.x - 25 };
        case pe.Down:
          return { ...n, y: n.y + 25 };
        case pe.Up:
          return { ...n, y: n.y - 25 };
      }
    };
  class qp {
    constructor(t) {
      ((this.props = void 0),
        (this.autoScrollEnabled = false),
        (this.referenceCoordinates = void 0),
        (this.listeners = void 0),
        (this.windowListeners = void 0),
        (this.props = t));
      const {
        event: { target: n },
      } = t;
      ((this.props = t),
        (this.listeners = new ni(Cs(n))),
        (this.windowListeners = new ni(Tt(n))),
        (this.handleKeyDown = this.handleKeyDown.bind(this)),
        (this.handleCancel = this.handleCancel.bind(this)),
        this.attach());
    }
    attach() {
      (this.handleStart(),
        this.windowListeners.add($t.Resize, this.handleCancel),
        this.windowListeners.add($t.VisibilityChange, this.handleCancel),
        setTimeout(() => this.listeners.add($t.Keydown, this.handleKeyDown)));
    }
    handleStart() {
      const { activeNode: t, onStart: n } = this.props,
        r = t.node.current;
      (r && O2(r), n(dn));
    }
    handleKeyDown(t) {
      if (Hp(t)) {
        const { active: n, context: r, options: o } = this.props,
          {
            keyboardCodes: s = Ib,
            coordinateGetter: i = F2,
            scrollBehavior: a = "smooth",
          } = o,
          { code: l } = t;
        if (s.end.includes(l)) {
          this.handleEnd(t);
          return;
        }
        if (s.cancel.includes(l)) {
          this.handleCancel(t);
          return;
        }
        const { collisionRect: u } = r.current,
          f = u ? { x: u.left, y: u.top } : dn;
        this.referenceCoordinates || (this.referenceCoordinates = f);
        const p = i(t, {
          active: n,
          context: r.current,
          currentCoordinates: f,
        });
        if (p) {
          const v = ji(p, f),
            h = { x: 0, y: 0 },
            { scrollableAncestors: b } = r.current;
          for (const m of b) {
            const x = t.code,
              {
                isTop: y,
                isRight: g,
                isLeft: w,
                isBottom: C,
                maxScroll: k,
                minScroll: T,
              } = Mb(m),
              N = A2(m),
              j = {
                x: Math.min(
                  x === pe.Right ? N.right - N.width / 2 : N.right,
                  Math.max(x === pe.Right ? N.left : N.left + N.width / 2, p.x),
                ),
                y: Math.min(
                  x === pe.Down ? N.bottom - N.height / 2 : N.bottom,
                  Math.max(x === pe.Down ? N.top : N.top + N.height / 2, p.y),
                ),
              },
              D = (x === pe.Right && !g) || (x === pe.Left && !w),
              I = (x === pe.Down && !C) || (x === pe.Up && !y);
            if (D && j.x !== p.x) {
              const $ = m.scrollLeft + v.x,
                B = (x === pe.Right && $ <= k.x) || (x === pe.Left && $ >= T.x);
              if (B && !v.y) {
                m.scrollTo({ left: $, behavior: a });
                return;
              }
              (B
                ? (h.x = m.scrollLeft - $)
                : (h.x =
                    x === pe.Right ? m.scrollLeft - k.x : m.scrollLeft - T.x),
                h.x && m.scrollBy({ left: -h.x, behavior: a }));
              break;
            } else if (I && j.y !== p.y) {
              const $ = m.scrollTop + v.y,
                B = (x === pe.Down && $ <= k.y) || (x === pe.Up && $ >= T.y);
              if (B && !v.x) {
                m.scrollTo({ top: $, behavior: a });
                return;
              }
              (B
                ? (h.y = m.scrollTop - $)
                : (h.y = x === pe.Down ? m.scrollTop - k.y : m.scrollTop - T.y),
                h.y && m.scrollBy({ top: -h.y, behavior: a }));
              break;
            }
          }
          this.handleMove(t, qo(ji(p, this.referenceCoordinates), h));
        }
      }
    }
    handleMove(t, n) {
      const { onMove: r } = this.props;
      (t.preventDefault(), r(n));
    }
    handleEnd(t) {
      const { onEnd: n } = this.props;
      (t.preventDefault(), this.detach(), n());
    }
    handleCancel(t) {
      const { onCancel: n } = this.props;
      (t.preventDefault(), this.detach(), n());
    }
    detach() {
      (this.listeners.removeAll(), this.windowListeners.removeAll());
    }
  }
  qp.activators = [
    {
      eventName: "onKeyDown",
      handler: (e, t, n) => {
        let { keyboardCodes: r = Ib, onActivation: o } = t,
          { active: s } = n;
        const { code: i } = e.nativeEvent;
        if (r.start.includes(i)) {
          const a = s.activatorNode.current;
          return a && e.target !== a
            ? false
            : (e.preventDefault(),
              o == null || o({ event: e.nativeEvent }),
              true);
        }
        return false;
      },
    },
  ];
  function vg(e) {
    return !!(e && "distance" in e);
  }
  function yg(e) {
    return !!(e && "delay" in e);
  }
  class Gp {
    constructor(t, n, r) {
      var o;
      (r === void 0 && (r = _2(t.event.target)),
        (this.props = void 0),
        (this.events = void 0),
        (this.autoScrollEnabled = true),
        (this.document = void 0),
        (this.activated = false),
        (this.initialCoordinates = void 0),
        (this.timeoutId = null),
        (this.listeners = void 0),
        (this.documentListeners = void 0),
        (this.windowListeners = void 0),
        (this.props = t),
        (this.events = n));
      const { event: s } = t,
        { target: i } = s;
      ((this.props = t),
        (this.events = n),
        (this.document = Cs(i)),
        (this.documentListeners = new ni(this.document)),
        (this.listeners = new ni(r)),
        (this.windowListeners = new ni(Tt(i))),
        (this.initialCoordinates = (o = Qd(s)) != null ? o : dn),
        (this.handleStart = this.handleStart.bind(this)),
        (this.handleMove = this.handleMove.bind(this)),
        (this.handleEnd = this.handleEnd.bind(this)),
        (this.handleCancel = this.handleCancel.bind(this)),
        (this.handleKeydown = this.handleKeydown.bind(this)),
        (this.removeTextSelection = this.removeTextSelection.bind(this)),
        this.attach());
    }
    attach() {
      const {
        events: t,
        props: {
          options: { activationConstraint: n, bypassActivationConstraint: r },
        },
      } = this;
      if (
        (this.listeners.add(t.move.name, this.handleMove, { passive: false }),
        this.listeners.add(t.end.name, this.handleEnd),
        t.cancel && this.listeners.add(t.cancel.name, this.handleCancel),
        this.windowListeners.add($t.Resize, this.handleCancel),
        this.windowListeners.add($t.DragStart, gg),
        this.windowListeners.add($t.VisibilityChange, this.handleCancel),
        this.windowListeners.add($t.ContextMenu, gg),
        this.documentListeners.add($t.Keydown, this.handleKeydown),
        n)
      ) {
        if (
          r != null &&
          r({
            event: this.props.event,
            activeNode: this.props.activeNode,
            options: this.props.options,
          })
        )
          return this.handleStart();
        if (yg(n)) {
          ((this.timeoutId = setTimeout(this.handleStart, n.delay)),
            this.handlePending(n));
          return;
        }
        if (vg(n)) {
          this.handlePending(n);
          return;
        }
      }
      this.handleStart();
    }
    detach() {
      (this.listeners.removeAll(),
        this.windowListeners.removeAll(),
        setTimeout(this.documentListeners.removeAll, 50),
        this.timeoutId !== null &&
          (clearTimeout(this.timeoutId), (this.timeoutId = null)));
    }
    handlePending(t, n) {
      const { active: r, onPending: o } = this.props;
      o(r, t, this.initialCoordinates, n);
    }
    handleStart() {
      const { initialCoordinates: t } = this,
        { onStart: n } = this.props;
      t &&
        ((this.activated = true),
        this.documentListeners.add($t.Click, L2, { capture: true }),
        this.removeTextSelection(),
        this.documentListeners.add(
          $t.SelectionChange,
          this.removeTextSelection,
        ),
        n(t));
    }
    handleMove(t) {
      var n;
      const { activated: r, initialCoordinates: o, props: s } = this,
        {
          onMove: i,
          options: { activationConstraint: a },
        } = s;
      if (!o) return;
      const l = (n = Qd(t)) != null ? n : dn,
        u = ji(o, l);
      if (!r && a) {
        if (vg(a)) {
          if (a.tolerance != null && bu(u, a.tolerance))
            return this.handleCancel();
          if (bu(u, a.distance)) return this.handleStart();
        }
        if (yg(a) && bu(u, a.tolerance)) return this.handleCancel();
        this.handlePending(a, u);
        return;
      }
      (t.cancelable && t.preventDefault(), i(l));
    }
    handleEnd() {
      const { onAbort: t, onEnd: n } = this.props;
      (this.detach(), this.activated || t(this.props.active), n());
    }
    handleCancel() {
      const { onAbort: t, onCancel: n } = this.props;
      (this.detach(), this.activated || t(this.props.active), n());
    }
    handleKeydown(t) {
      t.code === pe.Esc && this.handleCancel();
    }
    removeTextSelection() {
      var t;
      (t = this.document.getSelection()) == null || t.removeAllRanges();
    }
  }
  const z2 = {
    cancel: { name: "pointercancel" },
    move: { name: "pointermove" },
    end: { name: "pointerup" },
  };
  class Qp extends Gp {
    constructor(t) {
      const { event: n } = t,
        r = Cs(n.target);
      super(t, z2, r);
    }
  }
  Qp.activators = [
    {
      eventName: "onPointerDown",
      handler: (e, t) => {
        let { nativeEvent: n } = e,
          { onActivation: r } = t;
        return !n.isPrimary || n.button !== 0
          ? false
          : (r == null || r({ event: n }), true);
      },
    },
  ];
  const $2 = { move: { name: "mousemove" }, end: { name: "mouseup" } };
  var Yd;
  (function (e) {
    e[(e.RightClick = 2)] = "RightClick";
  })(Yd || (Yd = {}));
  class B2 extends Gp {
    constructor(t) {
      super(t, $2, Cs(t.event.target));
    }
  }
  B2.activators = [
    {
      eventName: "onMouseDown",
      handler: (e, t) => {
        let { nativeEvent: n } = e,
          { onActivation: r } = t;
        return n.button === Yd.RightClick
          ? false
          : (r == null || r({ event: n }), true);
      },
    },
  ];
  const Su = {
    cancel: { name: "touchcancel" },
    move: { name: "touchmove" },
    end: { name: "touchend" },
  };
  class W2 extends Gp {
    constructor(t) {
      super(t, Su);
    }
    static setup() {
      return (
        window.addEventListener(Su.move.name, t, {
          capture: false,
          passive: false,
        }),
        function () {
          window.removeEventListener(Su.move.name, t);
        }
      );
      function t() {}
    }
  }
  W2.activators = [
    {
      eventName: "onTouchStart",
      handler: (e, t) => {
        let { nativeEvent: n } = e,
          { onActivation: r } = t;
        const { touches: o } = n;
        return o.length > 1 ? false : (r == null || r({ event: n }), true);
      },
    },
  ];
  const BD = ({ entries: e, setEntries: t, lang: n, onOpenChange: a }) => {
    const l = e.filter((x) => x.text.trim()),
      u = d.useMemo(() => {
        if (l.length === 0) return {};
        const x = l.reduce((g, w) => g + w.weight, 0),
          y = {};
        return (
          l.forEach((g) => {
            y[g.id] = x > 0 ? (g.weight / x) * 100 : 100 / l.length;
          }),
          y
        );
      }, [l]),
      f = (x, y) => {
        const g = Math.max(0, Math.min(100, y));
        t((w) => {
          const C = w.map((D) => (D.id === x ? { ...D, weight: g } : D)),
            k = C.filter((D) => D.text.trim() && D.id !== x),
            T = k.reduce((D, I) => D + I.weight, 0),
            N = 100 - g;
          if (T === 0 && k.length > 0) {
            const D = N / k.length;
            return C.map((I) =>
              I.id === x || !I.text.trim() ? I : { ...I, weight: D },
            );
          }
          if (k.length === 0) return C;
          const j = N / T;
          return C.map((D) =>
            D.id === x || !D.text.trim()
              ? D
              : { ...D, weight: Math.max(0, D.weight * j) },
          );
        });
      };
    return c.jsxs(bA, {
      onOpenChange: a,
      children: [
        c.jsxs(SA, {
          className:
            "flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 transition-colors w-full py-3 px-4 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50",
          children: [
            c.jsx(wE, { className: "h-4 w-4" }),
            Z("secretSettings", n),
          ],
        }),
        c.jsxs(CA, {
          className:
            "space-y-4 pt-3 px-4 pb-4 rounded-b-lg bg-amber-50/50 dark:bg-amber-950/20 border border-t-0 border-amber-200 dark:border-amber-800/50",
          children: [
            c.jsxs(c.Fragment, {
              children: [
                l.map((x) => {
                  const y = u[x.id] ?? 0;
                  return c.jsxs(
                    "div",
                    {
                      className: "space-y-1",
                      children: [
                        c.jsxs("div", {
                          className:
                            "flex items-center justify-between text-sm",
                          children: [
                            c.jsx("span", {
                              className:
                                "text-foreground truncate max-w-[140px]",
                              children: x.text,
                            }),
                            c.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                c.jsx(wp, {
                                  type: "number",
                                  min: 0,
                                  max: 100,
                                  step: 0.1,
                                  value: y.toFixed(1),
                                  onChange: (g) =>
                                    f(x.id, parseFloat(g.target.value) || 0),
                                  "aria-label": `Win chance percentage for ${x.text || "entry"}`,
                                  className:
                                    "w-16 h-6 text-xs text-right px-1 py-0 tabular-nums",
                                }),
                                c.jsx("span", {
                                  className: "text-muted-foreground text-xs",
                                  children: "%",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx(Ap, {
                          value: [y],
                          onValueChange: ([g]) => f(x.id, g),
                          min: 0,
                          max: 100,
                          step: 0.1,
                          className: "w-full",
                        }),
                      ],
                    },
                    x.id,
                  );
                }),
                l.length === 0 &&
                  c.jsx("p", {
                    className: "text-xs text-muted-foreground italic",
                    children: "Add entries first.",
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  var qi = {};
  (function e(t, n, r, o) {
    var s = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
      ),
      i = typeof Path2D == "function" && typeof DOMMatrix == "function",
      a = (function () {
        if (!t.OffscreenCanvas) return false;
        try {
          var E = new OffscreenCanvas(1, 1),
            S = E.getContext("2d");
          S.fillRect(0, 0, 1, 1);
          var R = E.transferToImageBitmap();
          S.createPattern(R, "no-repeat");
        } catch {
          return false;
        }
        return true;
      })();
    function l() {}
    function u(E) {
      var S = n.exports.Promise,
        R = S !== void 0 ? S : t.Promise;
      return typeof R == "function" ? new R(E) : (E(l, l), null);
    }
    var f = (function (E, S) {
        return {
          transform: function (R) {
            if (E) return R;
            if (S.has(R)) return S.get(R);
            var L = new OffscreenCanvas(R.width, R.height),
              z = L.getContext("2d");
            return (z.drawImage(R, 0, 0), S.set(R, L), L);
          },
          clear: function () {
            S.clear();
          },
        };
      })(a, new Map()),
      p = (function () {
        var E = Math.floor(16.666666666666668),
          S,
          R,
          L = {},
          z = 0;
        return (
          typeof requestAnimationFrame == "function" &&
          typeof cancelAnimationFrame == "function"
            ? ((S = function (Q) {
                var V = Math.random();
                return (
                  (L[V] = requestAnimationFrame(function M(q) {
                    z === q || z + E - 1 < q
                      ? ((z = q), delete L[V], Q())
                      : (L[V] = requestAnimationFrame(M));
                  })),
                  V
                );
              }),
              (R = function (Q) {
                L[Q] && cancelAnimationFrame(L[Q]);
              }))
            : ((S = function (Q) {
                return setTimeout(Q, E);
              }),
              (R = function (Q) {
                return clearTimeout(Q);
              })),
          { frame: S, cancel: R }
        );
      })(),
      v = (function () {
        var E,
          S,
          R = {};
        function L(z) {
          function Q(V, M) {
            z.postMessage({ options: V || {}, callback: M });
          }
          ((z.init = function (M) {
            var q = M.transferControlToOffscreen();
            z.postMessage({ canvas: q }, [q]);
          }),
            (z.fire = function (M, q, ee) {
              if (S) return (Q(M, null), S);
              var U = Math.random().toString(36).slice(2);
              return (
                (S = u(function (Y) {
                  function X(ie) {
                    ie.data.callback === U &&
                      (delete R[U],
                      z.removeEventListener("message", X),
                      (S = null),
                      f.clear(),
                      ee(),
                      Y());
                  }
                  (z.addEventListener("message", X),
                    Q(M, U),
                    (R[U] = X.bind(null, { data: { callback: U } })));
                })),
                S
              );
            }),
            (z.reset = function () {
              z.postMessage({ reset: true });
              for (var M in R) (R[M](), delete R[M]);
            }));
        }
        return function () {
          if (E) return E;
          if (!r && s) {
            var z = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + e.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join(`
`);
            try {
              E = new Worker(URL.createObjectURL(new Blob([z])));
            } catch (Q) {
              return (
                typeof console < "u" &&
                  typeof console.warn == "function" &&
                  console.warn("🎊 Could not load worker", Q),
                null
              );
            }
            L(E);
          }
          return E;
        };
      })(),
      h = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        disableForReducedMotion: false,
        scalar: 1,
      };
    function b(E, S) {
      return S ? S(E) : E;
    }
    function m(E) {
      return E != null;
    }
    function x(E, S, R) {
      return b(E && m(E[S]) ? E[S] : h[S], R);
    }
    function y(E) {
      return E < 0 ? 0 : Math.floor(E);
    }
    function g(E, S) {
      return Math.floor(Math.random() * (S - E)) + E;
    }
    function w(E) {
      return parseInt(E, 16);
    }
    function C(E) {
      return E.map(k);
    }
    function k(E) {
      var S = String(E).replace(/[^0-9a-f]/gi, "");
      return (
        S.length < 6 && (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]),
        {
          r: w(S.substring(0, 2)),
          g: w(S.substring(2, 4)),
          b: w(S.substring(4, 6)),
        }
      );
    }
    function T(E) {
      var S = x(E, "origin", Object);
      return ((S.x = x(S, "x", Number)), (S.y = x(S, "y", Number)), S);
    }
    function N(E) {
      ((E.width = document.documentElement.clientWidth),
        (E.height = document.documentElement.clientHeight));
    }
    function j(E) {
      var S = E.getBoundingClientRect();
      ((E.width = S.width), (E.height = S.height));
    }
    function D(E) {
      var S = document.createElement("canvas");
      return (
        (S.style.position = "fixed"),
        (S.style.top = "0px"),
        (S.style.left = "0px"),
        (S.style.pointerEvents = "none"),
        (S.style.zIndex = E),
        S
      );
    }
    function I(E, S, R, L, z, Q, V, M, q) {
      (E.save(),
        E.translate(S, R),
        E.rotate(Q),
        E.scale(L, z),
        E.arc(0, 0, 1, V, M, q),
        E.restore());
    }
    function $(E) {
      var S = E.angle * (Math.PI / 180),
        R = E.spread * (Math.PI / 180);
      return {
        x: E.x,
        y: E.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: E.startVelocity * 0.5 + Math.random() * E.startVelocity,
        angle2D: -S + (0.5 * R - Math.random() * R),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: E.color,
        shape: E.shape,
        tick: 0,
        totalTicks: E.ticks,
        decay: E.decay,
        drift: E.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: E.gravity * 3,
        ovalScalar: 0.6,
        scalar: E.scalar,
        flat: E.flat,
      };
    }
    function B(E, S) {
      ((S.x += Math.cos(S.angle2D) * S.velocity + S.drift),
        (S.y += Math.sin(S.angle2D) * S.velocity + S.gravity),
        (S.velocity *= S.decay),
        S.flat
          ? ((S.wobble = 0),
            (S.wobbleX = S.x + 10 * S.scalar),
            (S.wobbleY = S.y + 10 * S.scalar),
            (S.tiltSin = 0),
            (S.tiltCos = 0),
            (S.random = 1))
          : ((S.wobble += S.wobbleSpeed),
            (S.wobbleX = S.x + 10 * S.scalar * Math.cos(S.wobble)),
            (S.wobbleY = S.y + 10 * S.scalar * Math.sin(S.wobble)),
            (S.tiltAngle += 0.1),
            (S.tiltSin = Math.sin(S.tiltAngle)),
            (S.tiltCos = Math.cos(S.tiltAngle)),
            (S.random = Math.random() + 2)));
      var R = S.tick++ / S.totalTicks,
        L = S.x + S.random * S.tiltCos,
        z = S.y + S.random * S.tiltSin,
        Q = S.wobbleX + S.random * S.tiltCos,
        V = S.wobbleY + S.random * S.tiltSin;
      if (
        ((E.fillStyle =
          "rgba(" +
          S.color.r +
          ", " +
          S.color.g +
          ", " +
          S.color.b +
          ", " +
          (1 - R) +
          ")"),
        E.beginPath(),
        i &&
          S.shape.type === "path" &&
          typeof S.shape.path == "string" &&
          Array.isArray(S.shape.matrix))
      )
        E.fill(
          H(
            S.shape.path,
            S.shape.matrix,
            S.x,
            S.y,
            Math.abs(Q - L) * 0.1,
            Math.abs(V - z) * 0.1,
            (Math.PI / 10) * S.wobble,
          ),
        );
      else if (S.shape.type === "bitmap") {
        var M = (Math.PI / 10) * S.wobble,
          q = Math.abs(Q - L) * 0.1,
          ee = Math.abs(V - z) * 0.1,
          U = S.shape.bitmap.width * S.scalar,
          Y = S.shape.bitmap.height * S.scalar,
          X = new DOMMatrix([
            Math.cos(M) * q,
            Math.sin(M) * q,
            -Math.sin(M) * ee,
            Math.cos(M) * ee,
            S.x,
            S.y,
          ]);
        X.multiplySelf(new DOMMatrix(S.shape.matrix));
        var ie = E.createPattern(f.transform(S.shape.bitmap), "no-repeat");
        (ie.setTransform(X),
          (E.globalAlpha = 1 - R),
          (E.fillStyle = ie),
          E.fillRect(S.x - U / 2, S.y - Y / 2, U, Y),
          (E.globalAlpha = 1));
      } else if (S.shape === "circle")
        E.ellipse
          ? E.ellipse(
              S.x,
              S.y,
              Math.abs(Q - L) * S.ovalScalar,
              Math.abs(V - z) * S.ovalScalar,
              (Math.PI / 10) * S.wobble,
              0,
              2 * Math.PI,
            )
          : I(
              E,
              S.x,
              S.y,
              Math.abs(Q - L) * S.ovalScalar,
              Math.abs(V - z) * S.ovalScalar,
              (Math.PI / 10) * S.wobble,
              0,
              2 * Math.PI,
            );
      else if (S.shape === "star")
        for (
          var ne = (Math.PI / 2) * 3,
            he = 4 * S.scalar,
            ve = 8 * S.scalar,
            we = S.x,
            Le = S.y,
            qe = 5,
            Ae = Math.PI / qe;
          qe--;
        )
          ((we = S.x + Math.cos(ne) * ve),
            (Le = S.y + Math.sin(ne) * ve),
            E.lineTo(we, Le),
            (ne += Ae),
            (we = S.x + Math.cos(ne) * he),
            (Le = S.y + Math.sin(ne) * he),
            E.lineTo(we, Le),
            (ne += Ae));
      else
        (E.moveTo(Math.floor(S.x), Math.floor(S.y)),
          E.lineTo(Math.floor(S.wobbleX), Math.floor(z)),
          E.lineTo(Math.floor(Q), Math.floor(V)),
          E.lineTo(Math.floor(L), Math.floor(S.wobbleY)));
      return (E.closePath(), E.fill(), S.tick < S.totalTicks);
    }
    function K(E, S, R, L, z) {
      var Q = S.slice(),
        V = E.getContext("2d"),
        M,
        q,
        ee = u(function (U) {
          function Y() {
            ((M = q = null),
              V.clearRect(0, 0, L.width, L.height),
              f.clear(),
              z(),
              U());
          }
          function X() {
            (r &&
              !(L.width === o.width && L.height === o.height) &&
              ((L.width = E.width = o.width), (L.height = E.height = o.height)),
              !L.width &&
                !L.height &&
                (R(E), (L.width = E.width), (L.height = E.height)),
              V.clearRect(0, 0, L.width, L.height),
              (Q = Q.filter(function (ie) {
                return B(V, ie);
              })),
              Q.length ? (M = p.frame(X)) : Y());
          }
          ((M = p.frame(X)), (q = Y));
        });
      return {
        addFettis: function (U) {
          return ((Q = Q.concat(U)), ee);
        },
        canvas: E,
        promise: ee,
        reset: function () {
          (M && p.cancel(M), q && q());
        },
      };
    }
    function F(E, S) {
      var R = !E,
        L = !!x(S || {}, "resize"),
        z = false,
        Q = x(S, "disableForReducedMotion", Boolean),
        V = s && !!x(S || {}, "useWorker"),
        M = V ? v() : null,
        q = R ? N : j,
        ee = E && M ? !!E.__confetti_initialized : false,
        U =
          typeof matchMedia == "function" &&
          matchMedia("(prefers-reduced-motion)").matches,
        Y;
      function X(ne, he, ve) {
        for (
          var we = x(ne, "particleCount", y),
            Le = x(ne, "angle", Number),
            qe = x(ne, "spread", Number),
            Ae = x(ne, "startVelocity", Number),
            _t = x(ne, "decay", Number),
            Rn = x(ne, "gravity", Number),
            Lt = x(ne, "drift", Number),
            $r = x(ne, "colors", C),
            Es = x(ne, "ticks", Number),
            et = x(ne, "shapes"),
            dt = x(ne, "scalar"),
            hn = !!x(ne, "flat"),
            mn = T(ne),
            gn = we,
            xt = [],
            Br = E.width * mn.x,
            Wr = E.height * mn.y;
          gn--;
        )
          xt.push(
            $({
              x: Br,
              y: Wr,
              angle: Le,
              spread: qe,
              startVelocity: Ae,
              color: $r[gn % $r.length],
              shape: et[g(0, et.length)],
              ticks: Es,
              decay: _t,
              gravity: Rn,
              drift: Lt,
              scalar: dt,
              flat: hn,
            }),
          );
        return Y ? Y.addFettis(xt) : ((Y = K(E, xt, q, he, ve)), Y.promise);
      }
      function ie(ne) {
        var he = Q || x(ne, "disableForReducedMotion", Boolean),
          ve = x(ne, "zIndex", Number);
        if (he && U)
          return u(function (Ae) {
            Ae();
          });
        (R && Y
          ? (E = Y.canvas)
          : R && !E && ((E = D(ve)), document.body.appendChild(E)),
          L && !ee && q(E));
        var we = { width: E.width, height: E.height };
        (M && !ee && M.init(E),
          (ee = true),
          M && (E.__confetti_initialized = true));
        function Le() {
          if (M) {
            var Ae = {
              getBoundingClientRect: function () {
                if (!R) return E.getBoundingClientRect();
              },
            };
            (q(Ae),
              M.postMessage({
                resize: { width: Ae.width, height: Ae.height },
              }));
            return;
          }
          we.width = we.height = null;
        }
        function qe() {
          ((Y = null),
            L && ((z = false), t.removeEventListener("resize", Le)),
            R &&
              E &&
              (document.body.contains(E) && document.body.removeChild(E),
              (E = null),
              (ee = false)));
        }
        return (
          L && !z && ((z = true), t.addEventListener("resize", Le, false)),
          M ? M.fire(ne, we, qe) : X(ne, we, qe)
        );
      }
      return (
        (ie.reset = function () {
          (M && M.reset(), Y && Y.reset());
        }),
        ie
      );
    }
    var te;
    function G() {
      return (te || (te = F(null, { useWorker: true, resize: true })), te);
    }
    function H(E, S, R, L, z, Q, V) {
      var M = new Path2D(E),
        q = new Path2D();
      q.addPath(M, new DOMMatrix(S));
      var ee = new Path2D();
      return (
        ee.addPath(
          q,
          new DOMMatrix([
            Math.cos(V) * z,
            Math.sin(V) * z,
            -Math.sin(V) * Q,
            Math.cos(V) * Q,
            R,
            L,
          ]),
        ),
        ee
      );
    }
    function A(E) {
      if (!i)
        throw new Error("path confetti are not supported in this browser");
      var S, R;
      typeof E == "string" ? (S = E) : ((S = E.path), (R = E.matrix));
      var L = new Path2D(S),
        z = document.createElement("canvas"),
        Q = z.getContext("2d");
      if (!R) {
        for (
          var V = 1e3, M = V, q = V, ee = 0, U = 0, Y, X, ie = 0;
          ie < V;
          ie += 2
        )
          for (var ne = 0; ne < V; ne += 2)
            Q.isPointInPath(L, ie, ne, "nonzero") &&
              ((M = Math.min(M, ie)),
              (q = Math.min(q, ne)),
              (ee = Math.max(ee, ie)),
              (U = Math.max(U, ne)));
        ((Y = ee - M), (X = U - q));
        var he = 10,
          ve = Math.min(he / Y, he / X);
        R = [
          ve,
          0,
          0,
          ve,
          -Math.round(Y / 2 + M) * ve,
          -Math.round(X / 2 + q) * ve,
        ];
      }
      return { type: "path", path: S, matrix: R };
    }
    function P(E) {
      var S,
        R = 1,
        L = "#000000",
        z =
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof E == "string"
        ? (S = E)
        : ((S = E.text),
          (R = "scalar" in E ? E.scalar : R),
          (z = "fontFamily" in E ? E.fontFamily : z),
          (L = "color" in E ? E.color : L));
      var Q = 10 * R,
        V = "" + Q + "px " + z,
        M = new OffscreenCanvas(Q, Q),
        q = M.getContext("2d");
      q.font = V;
      var ee = q.measureText(S),
        U = Math.ceil(ee.actualBoundingBoxRight + ee.actualBoundingBoxLeft),
        Y = Math.ceil(ee.actualBoundingBoxAscent + ee.actualBoundingBoxDescent),
        X = 2,
        ie = ee.actualBoundingBoxLeft + X,
        ne = ee.actualBoundingBoxAscent + X;
      ((U += X + X),
        (Y += X + X),
        (M = new OffscreenCanvas(U, Y)),
        (q = M.getContext("2d")),
        (q.font = V),
        (q.fillStyle = L),
        q.fillText(S, ie, ne));
      var he = 1 / R;
      return {
        type: "bitmap",
        bitmap: M.transferToImageBitmap(),
        matrix: [he, 0, 0, he, (-U * he) / 2, (-Y * he) / 2],
      };
    }
    ((n.exports = function () {
      return G().apply(this, arguments);
    }),
      (n.exports.reset = function () {
        G().reset();
      }),
      (n.exports.create = F),
      (n.exports.shapeFromPath = A),
      (n.exports.shapeFromText = P));
  })(
    (function () {
      return typeof window < "u"
        ? window
        : typeof self < "u"
          ? self
          : this || {};
    })(),
    qi,
    false,
  );
  const Eg = qi.exports;
  qi.exports.create;
  const Tg = ({
    open: e,
    winner: t,
    lang: n,
    onClose: r,
    onSpinAgain: o,
    spinAgainLabel: s,
  }) => {
    const i = d.useRef(false);
    return (
      d.useEffect(() => {
        if (e && t && !i.current) {
          i.current = true;
          const l = Date.now() + 1500,
            u = () => {
              (Eg({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6eb4"],
              }),
                Eg({
                  particleCount: 3,
                  angle: 120,
                  spread: 55,
                  origin: { x: 1, y: 0.7 },
                  colors: [
                    "#ff6b6b",
                    "#ffd93d",
                    "#6bcb77",
                    "#4d96ff",
                    "#ff6eb4",
                  ],
                }),
                Date.now() < l && requestAnimationFrame(u));
            };
          u();
        }
        e || (i.current = false);
      }, [e, t]),
      t
        ? c.jsx(h0, {
            open: e,
            onOpenChange: (a) => !a && r(),
            children: c.jsxs(Tp, {
              className: "sm:max-w-sm text-center",
              children: [
                c.jsx(Np, {
                  children: c.jsx(Pp, {
                    className: "text-2xl",
                    children: Z("winner", n),
                  }),
                }),
                c.jsx("p", {
                  className: "text-3xl font-bold text-foreground py-4",
                  children: t.text,
                }),
                c.jsxs("div", {
                  className: "flex justify-center gap-3",
                  children: [
                    c.jsx(ze, {
                      variant: "outline",
                      onClick: r,
                      children: Z("close", n),
                    }),
                    c.jsx(ze, {
                      onClick: o,
                      children: s || Z("spinAgain", n),
                    }),
                  ],
                }),
              ],
            }),
          })
        : null
    );
  };
  var pn = "Accordion",
    [Yp, QD, KD] = Kl(pn);
  const iM = () => [
      { id: Sn(), text: "GBVSR", weight: 80 },
      { id: Sn(), text: "GBVS", weight: 0 },
      { id: Sn(), text: "BBCF", weight: 5 },
      { id: Sn(), text: "BBCP", weight: 0 },
      { id: Sn(), text: "BBCS", weight: 0 },
      { id: Sn(), text: "BBCT", weight: 0 },
      { id: Sn(), text: "BBCTB", weight: 5 },
      { id: Sn(), text: "P4AU (P3 only)", weight: 5 },
      { id: Sn(), text: "Deadlock (Abrams only)", weight: 0 },
      { id: Sn(), text: "Blue Prince Speedrun", weight: 0 },
      { id: Sn(), text: "Avatar water tribe only", weight: 5 },
    ],
    aM = () => {
      const [e, t] = d.useState(iM),
        [l, u] = d.useState(false),
        [v, h] = d.useState(null),
        [b, m] = d.useState(false),
        [g, w] = d.useState(false), //fullscreen
        [C, k] = d.useState(false),
        F = e.filter((S) => S.text.trim());
      (d.useEffect(() => {
        const S = (R) => {
          R.key === "Escape" && g && w(false);
        };
        return (
          window.addEventListener("keydown", S),
          () => window.removeEventListener("keydown", S)
        );
      }, [g]),
        d.useEffect(() => {
          C
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
        }, [C]));
      const te = d.useCallback(() => {
          u(true);
        }, []),
        G = d.useCallback(
          (S) => {
            (u(false), h(S), m(true));
          },
          ["normal"],
        ),
        A = () => {
          (m(false), h(null));
        };
      return g
        ? c.jsxs("div", {
            className:
              "fixed inset-0 z-50 bg-background flex items-center justify-center stealth-transition",
            children: [
              c.jsx("button", {
                onClick: () => w(false),
                className:
                  "absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-50",
                children: c.jsx(Jl, { className: "h-6 w-6" }),
              }),
              c.jsx(eg, {
                entries: F,
                palette: "ocean",
                soundEnabled: true,
                spinning: l,
                onSpinEnd: G,
                onSpinStart: te,
                fullScreen: true,
                forcedWinnerIndex: null,
                spinDuration: 8,
              }),
              c.jsx(Tg, {
                open: b,
                winner: v,
                lang: "en",
                onClose: () => m(false),
                onSpinAgain: A,
                spinAgainLabel: Z("spinAgain", "en"),
              }),
            ],
          })
        : c.jsxs("div", {
            className: "stealth-transition",
            children: [
              c.jsxs(Ir, {}),
              c.jsxs("main", {
                className: "max-w-7xl mx-auto px-6 py-10",
                children: [
                  c.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-10 items-start",
                    children: [
                      c.jsxs("section", {
                        className: "flex-1 flex flex-col items-center gap-5",
                        children: [
                          c.jsx(ze, {
                            variant: "ghost",
                            size: "icon",
                            className: "h-8 w-8",
                            onClick: () => w(true),
                            children: c.jsx(bE, { className: "h-4 w-4" }),
                          }),
                          c.jsx(eg, {
                            entries: F,
                            palette: "ocean",
                            soundEnabled: true,
                            spinning: l,
                            onSpinEnd: G,
                            onSpinStart: te,
                            forcedWinnerIndex: null,
                            spinDuration: 8,
                          }),
                        ],
                      }),
                      c.jsxs("aside", {
                        className: "w-full lg:w-96 space-y-7",
                        children: [
                          c.jsx(YR, {
                            entries: e,
                            setEntries: t,
                            palette: "ocean",
                            lang: "en",
                          }),
                          c.jsx(BD, {
                            entries: e,
                            setEntries: t,
                            lang: "en",
                            spinMode: "normal",
                            onOpenChange: k,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx(Tg, {
                open: b,
                winner: v,
                lang: "en",
                onClose: () => m(false),
                onSpinAgain: A,
                spinAgainLabel: Z("spinAgain", "en"),
              }),
            ],
          });
    },
    wM = () =>
      c.jsx(LP, {
        client: new IP(),
        children: c.jsxs(dP, {
          children: [
            c.jsxs(Mj, {
              children: [
                c.jsxs(Tj, {
                  children: [c.jsx(Nt, { path: "/", element: c.jsx(aM, {}) })],
                }),
              ],
            }),
          ],
        }),
      });
  Qy(document.getElementById("root")).render(
    c.jsx(tx, { children: c.jsx(wM, {}) }),
  );
});
export default bM();
