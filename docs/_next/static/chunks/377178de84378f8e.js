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
        return s;
      },
      searchParamsToUrlQuery: function () {
        return l;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function l(e) {
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
    function u(e) {
      return 'string' == typeof e
        ? e
        : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
          ? ''
          : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, u(e));
        else t.set(r, u(n));
      return t;
    }
    function s(e, ...t) {
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
        return i;
      },
      formatWithValidation: function () {
        return a;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = e.r(44066)._(e.r(78281)),
      u = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || '',
        o = e.pathname || '',
        i = e.hash || '',
        s = e.query || '',
        a = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (a = t + e.host)
          : r &&
            ((a = t + (~r.indexOf(':') ? `[${r}]` : r)),
            e.port && (a += ':' + e.port)),
        s && 'object' == typeof s && (s = String(l.urlQueryToSearchParams(s))));
      let c = e.search || (s && `?${s}`) || '';
      return (
        n && !n.endsWith(':') && (n += ':'),
        e.slashes || ((!n || u.test(n)) && !1 !== a)
          ? ((a = '//' + (a || '')), o && '/' !== o[0] && (o = '/' + o))
          : a || (a = ''),
        i && '#' !== i[0] && (i = '#' + i),
        c && '?' !== c[0] && (c = '?' + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace('#', '%23')),
        `${n}${a}${o}${c}${i}`
      );
    }
    let s = [
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
    function a(e) {
      return i(e);
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
          } else (e && (r.current = l(e, n)), t && (o.current = l(t, n)));
        },
        [e, t],
      );
    }
    function l(e, t) {
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
        return y;
      },
      MiddlewareNotFoundError: function () {
        return v;
      },
      MissingStaticPage: function () {
        return x;
      },
      NormalizeError: function () {
        return j;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return g;
      },
      ST: function () {
        return m;
      },
      WEB_VITALS: function () {
        return l;
      },
      execOnce: function () {
        return u;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return a;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return s;
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
        return P;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function u(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => i.test(e);
    function a() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ':' + r : ''}`;
    }
    function c() {
      let { href: e } = window.location,
        t = a();
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
    let g = 'undefined' != typeof performance,
      m =
        g &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e],
        );
    class y extends Error {}
    class j extends Error {}
    class b extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class x extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class v extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function P(e) {
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
          return l;
        },
      }));
    let n = e.r(89134),
      o = e.r(65421);
    function l(e) {
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
        return y;
      },
      useLinkStatus: function () {
        return b;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = e.r(44066),
      u = e.r(78042),
      i = l._(e.r(45456)),
      s = e.r(16033),
      a = e.r(54080),
      c = e.r(94400),
      f = e.r(89134),
      d = e.r(29401);
    e.r(87035);
    let p = e.r(52055),
      h = e.r(72489),
      g = e.r(22204);
    function m(e) {
      return 'string' == typeof e ? e : (0, s.formatUrl)(e);
    }
    function y(t) {
      var r;
      let n,
        o,
        l,
        [s, y] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
        b = (0, i.useRef)(null),
        {
          href: x,
          as: v,
          children: P,
          prefetch: O = null,
          passHref: _,
          replace: E,
          shallow: S,
          scroll: C,
          onClick: R,
          onMouseEnter: T,
          onTouchStart: $,
          legacyBehavior: M = !1,
          onNavigate: N,
          ref: k,
          unstable_dynamicOnHover: w,
          ...A
        } = t;
      ((n = P),
        M &&
          ('string' == typeof n || 'number' == typeof n) &&
          (n = (0, u.jsx)('a', { children: n })));
      let F = i.default.useContext(a.AppRouterContext),
        L = !1 !== O,
        U =
          !1 !== O
            ? null === (r = O) || 'auto' === r
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        { href: I, as: B } = i.default.useMemo(() => {
          let e = m(x);
          return { href: e, as: v ? m(v) : e };
        }, [x, v]);
      if (M) {
        if (n?.$$typeof === Symbol.for('react.lazy'))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E863', enumerable: !1, configurable: !0 },
          );
        o = i.default.Children.only(n);
      }
      let D = M ? o && 'object' == typeof o && o.ref : k,
        K = i.default.useCallback(
          (e) => (
            null !== F &&
              (b.current = (0, p.mountLinkInstance)(e, I, F, U, L, y)),
            () => {
              (b.current &&
                ((0, p.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [L, I, F, U, y],
        ),
        z = {
          ref: (0, c.useMergedRef)(K, D),
          onClick(t) {
            (M || 'function' != typeof R || R(t),
              M &&
                o.props &&
                'function' == typeof o.props.onClick &&
                o.props.onClick(t),
              !F ||
                t.defaultPrevented ||
                (function (t, r, n, o, l, u, s) {
                  if ('undefined' != typeof window) {
                    let a,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ('A' === c.toUpperCase() &&
                        (((a = t.currentTarget.getAttribute('target')) &&
                          '_self' !== a) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute('download')
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      l && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), s)) {
                      let e = !1;
                      if (
                        (s({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(21229);
                    i.default.startTransition(() => {
                      f(n || r, l ? 'replace' : 'push', u ?? !0, o.current);
                    });
                  }
                })(t, I, B, b, E, C, N));
          },
          onMouseEnter(e) {
            (M || 'function' != typeof T || T(e),
              M &&
                o.props &&
                'function' == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              F && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === w));
          },
          onTouchStart: function (e) {
            (M || 'function' != typeof $ || $(e),
              M &&
                o.props &&
                'function' == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              F && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === w));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (z.href = B)
          : (M && !_ && ('a' !== o.type || 'href' in o.props)) ||
            (z.href = (0, d.addBasePath)(B)),
        (l = M
          ? i.default.cloneElement(o, z)
          : (0, u.jsx)('a', { ...A, ...z, children: n })),
        (0, u.jsx)(j.Provider, { value: s, children: l })
      );
    }
    e.r(88464);
    let j = (0, i.createContext)(p.IDLE_LINK_STATUS),
      b = () => (0, i.useContext)(j);
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
              let l = '/' + e.slice(0, o + 1).join('/'),
                u = n
                  .replace(/-/g, ' ')
                  .trim()
                  .replace(/\b\w/g, (e) => e.toUpperCase());
              return (0, t.jsx)(
                'li',
                { children: (0, t.jsx)(r.default, { href: l, children: u }) },
                l,
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
  66666,
  (e) => {
    'use strict';
    var t = e.i(78042),
      r = e.i(45456),
      n = e.i(39911);
    function o() {
      let [e, o] = (0, r.useState)(5),
        [l, u] = (0, r.useState)(6),
        [i, s] = (0, r.useState)(0),
        [a, c] = (0, r.useState)(6),
        f = (0, r.useMemo)(() => {
          var t, r, n, o;
          let u, s;
          return (
            (t = e),
            (r = l),
            (n = i),
            (o = a),
            (n = Math.min(t, n)),
            (u = t - n),
            n * (s = (7 - r) / 6) + n * (1 - s) * ((7 - o) / 6) + u * s
          );
        }, [a, i, l, e]),
        d = (0, r.useMemo)(
          () =>
            (function (e, t, r, n) {
              let o = (7 - t) / 6,
                l = (7 - n) / 6,
                u = {};
              for (let t = 1; t <= e; t++)
                u[t] = (function e(t, r, n, o, l) {
                  return 0 === t
                    ? +(r <= 0)
                    : r <= 0
                      ? 1
                      : o * e(t - 1, r - 1, n, o, l) +
                        (1 - o) *
                          (n > 0
                            ? l * e(t - 1, r - 1, n - 1, o, l) +
                              (1 - l) * e(t - 1, r, n - 1, o, l)
                            : e(t - 1, r, n, o, l));
                })(e, t, r, o, l);
              return u;
            })(e, l, i, a),
          [a, i, l, e],
        ),
        p = (0, r.useCallback)(
          (e) => {
            let t = Number(e.target.value);
            (o(t), t < i && s(t));
          },
          [i],
        ),
        h = (0, r.useCallback)(
          (e) => (t) => {
            e(Number(t.target.value));
          },
          [],
        );
      return (0, t.jsxs)(n.Page, {
        title: 'War of the Ring Roll Calculator',
        children: [
          (0, t.jsxs)('form', {
            children: [
              (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsx)('legend', { children: 'Rolls' }),
                  Array.from({ length: 5 }, (e, t) => t + 1).map((n) =>
                    (0, t.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, t.jsx)('input', {
                            id: `rolls-${n}`,
                            type: 'radio',
                            value: n,
                            checked: e === n,
                            onChange: p,
                          }),
                          (0, t.jsx)('label', {
                            htmlFor: `rolls-${n}`,
                            children: n,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                ],
              }),
              (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsx)('legend', { children: 'Roll Success Value' }),
                  Array.from({ length: 5 }, (e, t) => t + 2).map((e) =>
                    (0, t.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, t.jsx)('input', {
                            id: `roll-success-${e}`,
                            type: 'radio',
                            value: e,
                            checked: l === e,
                            onChange: h(u),
                          }),
                          (0, t.jsx)('label', {
                            htmlFor: `roll-success-${e}`,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                ],
              }),
              (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsx)('legend', { children: 'Rerolls' }),
                  Array.from({ length: e + 1 }, (e, t) => t).map((e) =>
                    (0, t.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, t.jsx)('input', {
                            id: `rerolls-${e}`,
                            type: 'radio',
                            value: e,
                            checked: i === e,
                            onChange: h(s),
                          }),
                          (0, t.jsx)('label', {
                            htmlFor: `rerolls-${e}`,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                ],
              }),
              (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsx)('legend', { children: 'Reroll Success Value' }),
                  Array.from({ length: 5 }, (e, t) => t + 2).map((e) =>
                    (0, t.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, t.jsx)('input', {
                            id: `reroll-success-${e}`,
                            type: 'radio',
                            value: e,
                            checked: a === e,
                            onChange: h(c),
                          }),
                          (0, t.jsx)('label', {
                            htmlFor: `reroll-success-${e}`,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                ],
              }),
            ],
          }),
          Object.keys(d).length > 0 &&
            (0, t.jsxs)('table', {
              children: [
                (0, t.jsxs)('thead', {
                  children: [
                    (0, t.jsxs)('tr', {
                      children: [
                        (0, t.jsx)('th', {
                          scope: 'row',
                          children: 'Expected Value',
                        }),
                        (0, t.jsx)('td', { children: f.toFixed(2) }),
                      ],
                    }),
                    (0, t.jsxs)('tr', {
                      children: [
                        (0, t.jsx)('th', {
                          scope: 'col',
                          children: 'Successes',
                        }),
                        (0, t.jsx)('th', {
                          scope: 'col',
                          children: 'Probability',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)('tbody', {
                  children: Object.entries(d).map(([e, r]) =>
                    (0, t.jsxs)(
                      'tr',
                      {
                        children: [
                          (0, t.jsx)('th', { scope: 'row', children: e }),
                          (0, t.jsxs)('td', {
                            children: [(100 * r).toFixed(2), '%'],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
        ],
      });
    }
    e.s(['default', () => o], 66666);
  },
]);
