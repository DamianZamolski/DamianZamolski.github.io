(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  87035,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  78281,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return u;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function u(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return 'string' == typeof e
        ? e
        : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
          ? ''
          : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  16033,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return s;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(44066)._(e.r(78281)),
      i = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || '',
        o = e.pathname || '',
        a = e.hash || '',
        l = e.query || '',
        s = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(':') ? `[${r}]` : r)),
            e.port && (s += ':' + e.port)),
        l && 'object' == typeof l && (l = String(u.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || '';
      return (
        n && !n.endsWith(':') && (n += ':'),
        e.slashes || ((!n || i.test(n)) && !1 !== s)
          ? ((s = '//' + (s || '')), o && '/' !== o[0] && (o = '/' + o))
          : s || (s = ''),
        a && '#' !== a[0] && (a = '#' + a),
        c && '?' !== c[0] && (c = '?' + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace('#', '%23')),
        `${n}${s}${o}${c}${a}`
      );
    }
    let l = [
      'auth',
      'hash',
      'host',
      'hostname',
      'href',
      'path',
      'pathname',
      'port',
      'protocol',
      'query',
      'search',
      'slashes',
    ];
    function s(e) {
      return a(e);
    }
  },
  94400,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(45456);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
        },
        [e, t],
      );
    }
    function u(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return 'function' == typeof r ? r : () => e(null);
      }
    }
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  89134,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return P;
      },
      MissingStaticPage: function () {
        return j;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return u;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => a.test(e);
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ':' + r : ''}`;
    }
    function c() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split('?');
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
        (t[1] ? `?${t.slice(1).join('?')}` : '')
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let m = 'undefined' != typeof performance,
      y =
        m &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e],
        );
    class g extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class j extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class P extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  72489,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isLocalURL', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(89134),
      o = e.r(65421);
    function u(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  88464,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'errorOnce', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  27112,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(44066),
      i = e.r(78042),
      a = u._(e.r(45456)),
      l = e.r(16033),
      s = e.r(54080),
      c = e.r(94400),
      f = e.r(89134),
      d = e.r(29401);
    e.r(87035);
    let p = e.r(52055),
      h = e.r(72489),
      m = e.r(22204);
    function y(e) {
      return 'string' == typeof e ? e : (0, l.formatUrl)(e);
    }
    function g(t) {
      var r;
      let n,
        o,
        u,
        [l, g] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
        v = (0, a.useRef)(null),
        {
          href: j,
          as: P,
          children: _,
          prefetch: O = null,
          passHref: x,
          replace: E,
          shallow: S,
          scroll: T,
          onClick: C,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: N = !1,
          onNavigate: w,
          ref: A,
          unstable_dynamicOnHover: L,
          ...U
        } = t;
      ((n = _),
        N &&
          ('string' == typeof n || 'number' == typeof n) &&
          (n = (0, i.jsx)('a', { children: n })));
      let $ = a.default.useContext(s.AppRouterContext),
        k = !1 !== O,
        I =
          !1 !== O
            ? null === (r = O) || 'auto' === r
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        { href: B, as: F } = a.default.useMemo(() => {
          let e = y(j);
          return { href: e, as: P ? y(P) : e };
        }, [j, P]);
      if (N) {
        if (n?.$$typeof === Symbol.for('react.lazy'))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E863', enumerable: !1, configurable: !0 },
          );
        o = a.default.Children.only(n);
      }
      let z = N ? o && 'object' == typeof o && o.ref : A,
        D = a.default.useCallback(
          (e) => (
            null !== $ &&
              (v.current = (0, p.mountLinkInstance)(e, B, $, I, k, g)),
            () => {
              (v.current &&
                ((0, p.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [k, B, $, I, g],
        ),
        K = {
          ref: (0, c.useMergedRef)(D, z),
          onClick(t) {
            (N || 'function' != typeof C || C(t),
              N &&
                o.props &&
                'function' == typeof o.props.onClick &&
                o.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, i, l) {
                  if ('undefined' != typeof window) {
                    let s,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ('A' === c.toUpperCase() &&
                        (((s = t.currentTarget.getAttribute('target')) &&
                          '_self' !== s) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute('download')
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      u && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(21229);
                    a.default.startTransition(() => {
                      f(n || r, u ? 'replace' : 'push', i ?? !0, o.current);
                    });
                  }
                })(t, B, F, v, E, T, w));
          },
          onMouseEnter(e) {
            (N || 'function' != typeof R || R(e),
              N &&
                o.props &&
                'function' == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              $ && k && (0, p.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (N || 'function' != typeof M || M(e),
              N &&
                o.props &&
                'function' == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              $ && k && (0, p.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(F)
          ? (K.href = F)
          : (N && !x && ('a' !== o.type || 'href' in o.props)) ||
            (K.href = (0, d.addBasePath)(F)),
        (u = N
          ? a.default.cloneElement(o, K)
          : (0, i.jsx)('a', { ...U, ...K, children: n })),
        (0, i.jsx)(b.Provider, { value: l, children: u })
      );
    }
    e.r(88464);
    let b = (0, a.createContext)(p.IDLE_LINK_STATUS),
      v = () => (0, a.useContext)(b);
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  45227,
  (e, t, r) => {
    t.exports = e.r(8077);
  },
  7335,
  (e) => {
    'use strict';
    var t = e.i(78042),
      r = e.i(27112),
      n = e.i(45227);
    function o() {
      let e = (0, n.usePathname)().split('/').slice(0, -1).filter(Boolean);
      return (0, t.jsx)('nav', {
        'aria-label': 'breadcrumb',
        children: (0, t.jsxs)('ul', {
          children: [
            (0, t.jsx)('li', {
              children: (0, t.jsx)(r.default, { href: '/', children: 'Home' }),
            }),
            e.map((n, o) => {
              let u = '/' + e.slice(0, o + 1).join('/'),
                i = n
                  .replace(/-/g, ' ')
                  .trim()
                  .replace(/\b\w/g, (e) => e.toUpperCase());
              return (0, t.jsx)(
                'li',
                { children: (0, t.jsx)(r.default, { href: u, children: i }) },
                u,
              );
            }),
          ],
        }),
      });
    }
    e.s(['Breadcrumbs', () => o]);
  },
  39911,
  (e) => {
    'use strict';
    var t = e.i(78042),
      r = e.i(7335);
    function n({ title: e, children: n }) {
      return (0, t.jsxs)('main', {
        children: [
          (0, t.jsxs)('header', {
            children: [
              (0, t.jsx)(r.Breadcrumbs, {}),
              (0, t.jsx)('h1', { children: e }),
            ],
          }),
          n,
        ],
      });
    }
    e.s(['Page', () => n]);
  },
  58148,
  (e) => {
    'use strict';
    function t(e) {
      let t = e.slice();
      for (let e = t.length - 1; e > 0; e--) {
        let r = Math.floor(Math.random() * (e + 1));
        [t[e], t[r]] = [t[r], t[e]];
      }
      return t;
    }
    e.s(['shuffleArray', () => t]);
  },
  15921,
  (e) => {
    e.v({ noResize: 'styles-module___KrXhq__noResize' });
  },
  90933,
  (e) => {
    'use strict';
    var t = e.i(78042),
      r = e.i(15921),
      n = e.i(45456),
      o = e.i(39911),
      u = e.i(58148);
    function i() {
      let [e, i] = (0, n.useState)(2),
        [a, l] = (0, n.useState)(''),
        [s, c] = (0, n.useState)([]),
        f = a.split('\n');
      return (0, t.jsxs)(o.Page, {
        title: 'Teams Randomizer',
        children: [
          (0, t.jsxs)('form', {
            onSubmit: (t) => {
              (t.preventDefault(),
                c(
                  (function (e, t) {
                    let r = e.flatMap(u.shuffleArray),
                      n = [];
                    for (; r.length > 0; ) {
                      for (let e = 0; e < t; e++) {
                        let t = r.shift();
                        if (!t) break;
                        (n[e] || (n[e] = []), n[e].push(t));
                      }
                      r.reverse();
                    }
                    return n;
                  })(
                    f
                      .map((e) => e.trim())
                      .filter(Boolean)
                      .map((e) => e.split(/\s+/)),
                    e,
                  ),
                ));
            },
            children: [
              (0, t.jsxs)('label', {
                children: [
                  'Teams count:',
                  (0, t.jsx)('input', {
                    type: 'number',
                    min: 2,
                    value: e,
                    onChange: (e) => {
                      let t = Number(e.target.value);
                      t >= 0 && i(t);
                    },
                  }),
                ],
              }),
              (0, t.jsx)('textarea', {
                onChange: (e) => {
                  l(e.target.value);
                },
                rows: f.length + 1,
                className: r.default.noResize,
              }),
              (0, t.jsx)('button', { type: 'submit', children: 'Randomize' }),
            ],
          }),
          s.length > 0 &&
            s.map((e, r) =>
              (0, t.jsxs)(
                'div',
                { children: ['Team ', r, ': ', e.join(' ')] },
                `team-${r}`,
              ),
            ),
        ],
      });
    }
    e.s(['default', () => i], 90933);
  },
]);
