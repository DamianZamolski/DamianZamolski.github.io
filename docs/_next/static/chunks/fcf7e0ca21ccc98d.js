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
        return a;
      },
      formatWithValidation: function () {
        return l;
      },
      urlObjectKeys: function () {
        return s;
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
        s = e.query || '',
        l = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (l = t + e.host)
          : r &&
            ((l = t + (~r.indexOf(':') ? `[${r}]` : r)),
            e.port && (l += ':' + e.port)),
        s && 'object' == typeof s && (s = String(u.urlQueryToSearchParams(s))));
      let c = e.search || (s && `?${s}`) || '';
      return (
        n && !n.endsWith(':') && (n += ':'),
        e.slashes || ((!n || i.test(n)) && !1 !== l)
          ? ((l = '//' + (l || '')), o && '/' !== o[0] && (o = '/' + o))
          : l || (l = ''),
        a && '#' !== a[0] && (a = '#' + a),
        c && '?' !== c[0] && (c = '?' + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace('#', '%23')),
        `${n}${l}${o}${c}${a}`
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
    function l(e) {
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
        return m;
      },
      MiddlewareNotFoundError: function () {
        return P;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return j;
      },
      SP: function () {
        return y;
      },
      ST: function () {
        return g;
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
        return l;
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
        return x;
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
      s = (e) => a.test(e);
    function l() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ':' + r : ''}`;
    }
    function c() {
      let { href: e } = window.location,
        t = l();
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
    let y = 'undefined' != typeof performance,
      g =
        y &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e],
        );
    class m extends Error {}
    class b extends Error {}
    class j extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class v extends Error {
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
    function x(e) {
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
        return m;
      },
      useLinkStatus: function () {
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(44066),
      i = e.r(78042),
      a = u._(e.r(45456)),
      s = e.r(16033),
      l = e.r(54080),
      c = e.r(94400),
      f = e.r(89134),
      d = e.r(29401);
    e.r(87035);
    let p = e.r(52055),
      h = e.r(72489),
      y = e.r(22204);
    function g(e) {
      return 'string' == typeof e ? e : (0, s.formatUrl)(e);
    }
    function m(t) {
      var r;
      let n,
        o,
        u,
        [s, m] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
        j = (0, a.useRef)(null),
        {
          href: v,
          as: P,
          children: x,
          prefetch: O = null,
          passHref: S,
          replace: _,
          shallow: E,
          scroll: T,
          onClick: C,
          onMouseEnter: w,
          onTouchStart: R,
          legacyBehavior: L = !1,
          onNavigate: A,
          ref: N,
          unstable_dynamicOnHover: U,
          ...M
        } = t;
      ((n = x),
        L &&
          ('string' == typeof n || 'number' == typeof n) &&
          (n = (0, i.jsx)('a', { children: n })));
      let $ = a.default.useContext(l.AppRouterContext),
        k = !1 !== O,
        I =
          !1 !== O
            ? null === (r = O) || 'auto' === r
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        { href: z, as: B } = a.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: P ? g(P) : e };
        }, [v, P]);
      if (L) {
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
      let F = L ? o && 'object' == typeof o && o.ref : N,
        D = a.default.useCallback(
          (e) => (
            null !== $ &&
              (j.current = (0, p.mountLinkInstance)(e, z, $, I, k, m)),
            () => {
              (j.current &&
                ((0, p.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [k, z, $, I, m],
        ),
        K = {
          ref: (0, c.useMergedRef)(D, F),
          onClick(t) {
            (L || 'function' != typeof C || C(t),
              L &&
                o.props &&
                'function' == typeof o.props.onClick &&
                o.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, i, s) {
                  if ('undefined' != typeof window) {
                    let l,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ('A' === c.toUpperCase() &&
                        (((l = t.currentTarget.getAttribute('target')) &&
                          '_self' !== l) ||
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
                    a.default.startTransition(() => {
                      f(n || r, u ? 'replace' : 'push', i ?? !0, o.current);
                    });
                  }
                })(t, z, B, j, _, T, A));
          },
          onMouseEnter(e) {
            (L || 'function' != typeof w || w(e),
              L &&
                o.props &&
                'function' == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              $ && k && (0, p.onNavigationIntent)(e.currentTarget, !0 === U));
          },
          onTouchStart: function (e) {
            (L || 'function' != typeof R || R(e),
              L &&
                o.props &&
                'function' == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              $ && k && (0, p.onNavigationIntent)(e.currentTarget, !0 === U));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (K.href = B)
          : (L && !S && ('a' !== o.type || 'href' in o.props)) ||
            (K.href = (0, d.addBasePath)(B)),
        (u = L
          ? a.default.cloneElement(o, K)
          : (0, i.jsx)('a', { ...M, ...K, children: n })),
        (0, i.jsx)(b.Provider, { value: s, children: u })
      );
    }
    e.r(88464);
    let b = (0, a.createContext)(p.IDLE_LINK_STATUS),
      j = () => (0, a.useContext)(b);
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
  53719,
  (e) => {
    'use strict';
    var t = e.i(78042),
      r = e.i(17017),
      n = e.i(90583);
    let o = n.z
        .object({
          width: n.z.string(),
          height: n.z.string(),
          quantity: n.z.string(),
        })
        .passthrough(),
      u = n.z.object({ cardTypes: n.z.array(o) }).passthrough(),
      i = n.z.object({ cardSets: n.z.array(u) }).passthrough();
    async function a(e) {
      let t = await fetch(
        `https://corsproxy.io/?url=https://api.geekdo.com/api/cardsetsbygame?objectid=${e}`,
      );
      if (!t.ok) return {};
      let r = await t.json();
      return i
        .parse(r)
        .cardSets[0].cardTypes.reduce(
          (e, { width: t, height: r, quantity: n }) => (
            (e[`${t} - ${r}`] = parseInt(n, 10)),
            e
          ),
          {},
        );
    }
    async function s(e) {
      return (await Promise.all(e.map(a))).reduce(
        (e, t) => (
          Object.entries(t).forEach(([t, r]) => {
            e[t] = (e[t] ?? 0) + r;
          }),
          e
        ),
        {},
      );
    }
    let l = /\d+/g;
    var c = e.i(39911),
      f = e.i(88345),
      d = e.i(45456);
    let p = (0, r.atomWithStorage)('text', '');
    function h() {
      let [e, r] = (0, f.useAtom)(p),
        [n, o] = (0, d.useState)(!1),
        [u, i] = (0, d.useState)({}),
        a = async () => {
          o(!0);
          let t = Array.from(new Set(e.matchAll(l).map(String)));
          (i(await s(t)), o(!1));
        };
      return (0, t.jsxs)(c.Page, {
        title: 'Sleeves',
        children: [
          (0, t.jsxs)('form', {
            onSubmit: (e) => {
              (e.preventDefault(), a());
            },
            children: [
              (0, t.jsxs)('label', {
                children: [
                  'BGG URLs',
                  (0, t.jsx)('textarea', {
                    onChange: (e) => r(e.target.value),
                    placeholder:
                      'Paste BGG URLs here. Separate them with spaces or enters.',
                    rows: e.split('\n').length + 2,
                    style: { resize: 'none' },
                    value: e,
                  }),
                ],
              }),
              (0, t.jsx)('button', {
                type: 'submit',
                'aria-busy': n,
                disabled: n,
                children: 'Count sleeves',
              }),
            ],
          }),
          Object.keys(u).length > 0 &&
            (0, t.jsxs)('table', {
              children: [
                (0, t.jsx)('thead', {
                  children: (0, t.jsxs)('tr', {
                    children: [
                      (0, t.jsx)('th', { children: 'Size' }),
                      (0, t.jsx)('th', { children: 'Quantity' }),
                    ],
                  }),
                }),
                (0, t.jsx)('tbody', {
                  children: Object.entries(u)
                    .sort()
                    .map(([e, r]) =>
                      (0, t.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, t.jsx)('td', { children: e }),
                            (0, t.jsx)('td', { children: r }),
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
    e.s(['default', () => h], 53719);
  },
]);
