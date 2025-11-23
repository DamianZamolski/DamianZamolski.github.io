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
        return c;
      },
      searchParamsToUrlQuery: function () {
        return a;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function a(e) {
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
    function l(e) {
      return 'string' == typeof e
        ? e
        : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e
          ? ''
          : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, l(e));
        else t.set(r, l(n));
      return t;
    }
    function c(e, ...t) {
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
        return s;
      },
      urlObjectKeys: function () {
        return c;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = e.r(44066)._(e.r(78281)),
      l = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || '',
        o = e.pathname || '',
        i = e.hash || '',
        c = e.query || '',
        s = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(':') ? `[${r}]` : r)),
            e.port && (s += ':' + e.port)),
        c && 'object' == typeof c && (c = String(a.urlQueryToSearchParams(c))));
      let u = e.search || (c && `?${c}`) || '';
      return (
        n && !n.endsWith(':') && (n += ':'),
        e.slashes || ((!n || l.test(n)) && !1 !== s)
          ? ((s = '//' + (s || '')), o && '/' !== o[0] && (o = '/' + o))
          : s || (s = ''),
        i && '#' !== i[0] && (i = '#' + i),
        u && '?' !== u[0] && (u = '?' + u),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace('#', '%23')),
        `${n}${s}${o}${u}${i}`
      );
    }
    let c = [
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
          } else (e && (r.current = a(e, n)), t && (o.current = a(t, n)));
        },
        [e, t],
      );
    }
    function a(e, t) {
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
        return T;
      },
      MissingStaticPage: function () {
        return x;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return j;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return a;
      },
      execOnce: function () {
        return l;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return c;
      },
      isResSent: function () {
        return p;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return d;
      },
      stringifyError: function () {
        return O;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function l(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      c = (e) => i.test(e);
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ':' + r : ''}`;
    }
    function u() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function p(e) {
      return e.finished || e.headersSent;
    }
    function d(e) {
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
      if (r && p(r)) return n;
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
      g =
        m &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e],
        );
    class y extends Error {}
    class b extends Error {}
    class j extends Error {
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
    class T extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function O(e) {
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
          return a;
        },
      }));
    let n = e.r(89134),
      o = e.r(65421);
    function a(e) {
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
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = e.r(44066),
      l = e.r(78042),
      i = a._(e.r(45456)),
      c = e.r(16033),
      s = e.r(54080),
      u = e.r(94400),
      f = e.r(89134),
      p = e.r(29401);
    e.r(87035);
    let d = e.r(52055),
      h = e.r(72489),
      m = e.r(22204);
    function g(e) {
      return 'string' == typeof e ? e : (0, c.formatUrl)(e);
    }
    function y(t) {
      var r;
      let n,
        o,
        a,
        [c, y] = (0, i.useOptimistic)(d.IDLE_LINK_STATUS),
        j = (0, i.useRef)(null),
        {
          href: x,
          as: T,
          children: O,
          prefetch: v = null,
          passHref: P,
          replace: k,
          shallow: _,
          scroll: w,
          onClick: S,
          onMouseEnter: C,
          onTouchStart: E,
          legacyBehavior: N = !1,
          onNavigate: M,
          ref: R,
          unstable_dynamicOnHover: A,
          ...L
        } = t;
      ((n = O),
        N &&
          ('string' == typeof n || 'number' == typeof n) &&
          (n = (0, l.jsx)('a', { children: n })));
      let I = i.default.useContext(s.AppRouterContext),
        U = !1 !== v,
        $ =
          !1 !== v
            ? null === (r = v) || 'auto' === r
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        { href: F, as: B } = i.default.useMemo(() => {
          let e = g(x);
          return { href: e, as: T ? g(T) : e };
        }, [x, T]);
      if (N) {
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
      let D = N ? o && 'object' == typeof o && o.ref : R,
        K = i.default.useCallback(
          (e) => (
            null !== I &&
              (j.current = (0, d.mountLinkInstance)(e, F, I, $, U, y)),
            () => {
              (j.current &&
                ((0, d.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, d.unmountPrefetchableInstance)(e));
            }
          ),
          [U, F, I, $, y],
        ),
        z = {
          ref: (0, u.useMergedRef)(K, D),
          onClick(t) {
            (N || 'function' != typeof S || S(t),
              N &&
                o.props &&
                'function' == typeof o.props.onClick &&
                o.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, r, n, o, a, l, c) {
                  if ('undefined' != typeof window) {
                    let s,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ('A' === u.toUpperCase() &&
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
                      a && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), c)) {
                      let e = !1;
                      if (
                        (c({
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
                      f(n || r, a ? 'replace' : 'push', l ?? !0, o.current);
                    });
                  }
                })(t, F, B, j, k, w, M));
          },
          onMouseEnter(e) {
            (N || 'function' != typeof C || C(e),
              N &&
                o.props &&
                'function' == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              I && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === A));
          },
          onTouchStart: function (e) {
            (N || 'function' != typeof E || E(e),
              N &&
                o.props &&
                'function' == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              I && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === A));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (z.href = B)
          : (N && !P && ('a' !== o.type || 'href' in o.props)) ||
            (z.href = (0, p.addBasePath)(B)),
        (a = N
          ? i.default.cloneElement(o, z)
          : (0, l.jsx)('a', { ...L, ...z, children: n })),
        (0, l.jsx)(b.Provider, { value: c, children: a })
      );
    }
    e.r(88464);
    let b = (0, i.createContext)(d.IDLE_LINK_STATUS),
      j = () => (0, i.useContext)(b);
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
              let a = '/' + e.slice(0, o + 1).join('/'),
                l = n
                  .replace(/-/g, ' ')
                  .trim()
                  .replace(/\b\w/g, (e) => e.toUpperCase());
              return (0, t.jsx)(
                'li',
                { children: (0, t.jsx)(r.default, { href: a, children: l }) },
                a,
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
  20554,
  (e) => {
    e.v({ center: 'styles-module__SbmHLq__center' });
  },
  73426,
  (e) => {
    'use strict';
    var t = e.i(78042);
    function r(e) {
      return e.reduce(
        (e, t) => (
          (e.influence += t.influence ?? 0),
          (e.lore += t.lore ?? 0),
          (e.perception += t.perception ?? 0),
          (e.strength += t.strength ?? 0),
          (e.will += t.will ?? 0),
          e
        ),
        { influence: 0, lore: 0, perception: 0, strength: 0, will: 0 },
      );
    }
    var n = e.i(45456),
      o = e.i(58148);
    let a = [
      {
        name: 'Antar Al-Fakahany',
        expansion: 'from-the-abyss',
        captain: 11,
        keeperOfTheTome: 5,
        lore: 2,
        perception: 3,
      },
      {
        name: 'Arjun Singh',
        captain: 2,
        keeperOfTheTome: 17,
        influence: 2,
        perception: 1,
        strength: 2,
      },
      {
        name: 'Avery Engelbrecht',
        expansion: 'from-the-abyss',
        captain: 3,
        keeperOfTheTome: 16,
        influence: 2,
        strength: 2,
        will: 1,
      },
      {
        name: 'Beatrice Sharpe',
        captain: 10,
        keeperOfTheTome: 6,
        influence: 1,
        lore: 2,
        perception: 2,
      },
      {
        name: 'Edmund Mallory',
        captain: 12,
        keeperOfTheTome: 7,
        influence: 1,
        lore: 1,
        perception: 1,
        strength: 1,
        will: 1,
      },
      {
        name: 'Guillaume Delacroix',
        expansion: 'from-the-abyss',
        captain: 17,
        keeperOfTheTome: 3,
        influence: 2,
        lore: 2,
        will: 1,
      },
      {
        name: 'Ida Lawrence',
        captain: 13,
        keeperOfTheTome: 9,
        expansion: 'from-the-abyss',
        influence: 2,
        lore: 1,
        strength: 2,
      },
      {
        name: 'Ismael Marsh',
        captain: 14,
        keeperOfTheTome: 4,
        lore: 2,
        strength: 2,
        will: 1,
      },
      {
        name: 'Jamie Snell',
        captain: 5,
        keeperOfTheTome: 14,
        strength: 3,
        will: 2,
      },
      {
        name: 'Jeanne Lafarge',
        captain: 4,
        keeperOfTheTome: 15,
        influence: 1,
        perception: 2,
        strength: 2,
      },
      {
        name: 'Keilani Tatupu',
        captain: 1,
        keeperOfTheTome: 18,
        influence: 3,
        will: 2,
      },
      {
        name: 'Sardaana Morgunova',
        captain: 6,
        keeperOfTheTome: 13,
        expansion: 'from-the-abyss',
        influence: 2,
        perception: 2,
        will: 1,
      },
      {
        name: 'Kokoj Fernandes',
        captain: 15,
        keeperOfTheTome: 2,
        expansion: 'from-the-abyss',
        lore: 2,
        will: 3,
      },
      {
        name: 'Raul Martinez Garcia',
        captain: 9,
        keeperOfTheTome: 10,
        expansion: 'from-the-abyss',
        lore: 1,
        perception: 2,
        strength: 2,
      },
      {
        name: 'Samira Dualeh',
        captain: 18,
        keeperOfTheTome: 8,
        lore: 1,
        perception: 2,
        will: 2,
      },
      {
        name: 'Svetlana Gedroits',
        captain: 7,
        keeperOfTheTome: 12,
        influence: 2,
        lore: 1,
        perception: 2,
      },
      {
        name: 'William Bowleg',
        captain: 16,
        keeperOfTheTome: 1,
        lore: 3,
        will: 2,
      },
      {
        name: 'Wong Mui Choo',
        captain: 8,
        keeperOfTheTome: 11,
        expansion: 'from-the-abyss',
        perception: 1,
        strength: 2,
        will: 2,
      },
    ];
    var l = e.i(20554),
      i = e.i(39911);
    function c() {
      let [e, c] = (0, n.useState)(3),
        [s, u] = (0, n.useState)(!0),
        f = (0, n.useMemo)(
          () => (s ? a : a.filter((e) => 'from-the-abyss' !== e.expansion)),
          [s],
        ),
        [p, d] = (0, n.useState)([]),
        h = (0, n.useMemo)(
          () =>
            p.reduce((e, t) => (t.captain < e.captain ? t : e), {
              name: '',
              captain: 100,
            }),
          [p],
        ),
        m = (0, n.useMemo)(
          () =>
            p.reduce(
              (e, t) => (t.keeperOfTheTome < e.keeperOfTheTome ? t : e),
              { name: '', keeperOfTheTome: 100 },
            ),
          [p],
        ),
        g = (0, n.useMemo)(
          () => ({ [h.name]: 'Captain', [m.name]: 'Keeper of The Tome' }),
          [h.name, m.name],
        ),
        y = (0, n.useMemo)(() => r(p), [p]),
        b = (0, n.useCallback)((e) => {
          c(Number(e.target.value));
        }, []),
        j = (0, n.useCallback)((e) => {
          u(e.target.checked);
        }, []),
        x = (0, n.useCallback)(() => {
          let t, n;
          do
            n = (function (e) {
              var t;
              let n;
              return (
                (n =
                  (t = Object.values(r(e))).reduce((e, t) => e + t, 0) /
                  t.length),
                t.reduce((e, t) => e + (t - n) ** 2, 0) / t.length
              );
            })((t = (0, o.shuffleArray)(f).slice(0, e)));
          while (n > 0.5);
          d(t);
        }, [f, e]);
      return (0, t.jsxs)(i.Page, {
        title: 'Unfathomable Crew Randomizer',
        children: [
          (0, t.jsxs)('form', {
            children: [
              (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsxs)('fieldset', {
                    children: [
                      (0, t.jsx)('legend', { children: 'Player Count' }),
                      [3, 4, 5, 6].map((r) =>
                        (0, t.jsxs)(
                          n.Fragment,
                          {
                            children: [
                              (0, t.jsx)('input', {
                                id: `player-count-${r}`,
                                type: 'radio',
                                value: r,
                                checked: e === r,
                                onChange: b,
                              }),
                              (0, t.jsx)('label', {
                                htmlFor: `player-count-${r}`,
                                children: r,
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    ],
                  }),
                  (0, t.jsxs)('label', {
                    children: [
                      (0, t.jsx)('input', {
                        type: 'checkbox',
                        checked: s,
                        onChange: j,
                      }),
                      'Include From The Abyss Characters',
                    ],
                  }),
                ],
              }),
              (0, t.jsx)('input', {
                type: 'button',
                value: 'Randomize',
                onClick: x,
              }),
            ],
          }),
          p.length > 0 &&
            (0, t.jsxs)('table', {
              children: [
                (0, t.jsx)('thead', {
                  children: (0, t.jsxs)('tr', {
                    children: [
                      (0, t.jsx)('th', { scope: 'col', children: 'Name' }),
                      (0, t.jsx)('th', { scope: 'col', children: 'Title' }),
                      (0, t.jsx)('th', { scope: 'col', children: 'Influence' }),
                      (0, t.jsx)('th', { scope: 'col', children: 'Lore' }),
                      (0, t.jsx)('th', {
                        scope: 'col',
                        children: 'Perception',
                      }),
                      (0, t.jsx)('th', { scope: 'col', children: 'Strength' }),
                      (0, t.jsx)('th', { scope: 'col', children: 'Will' }),
                    ],
                  }),
                }),
                (0, t.jsx)('tbody', {
                  children: p.map((e) =>
                    (0, t.jsxs)(
                      'tr',
                      {
                        children: [
                          (0, t.jsx)('th', { scope: 'row', children: e.name }),
                          (0, t.jsx)('td', { children: g[e.name] ?? '' }),
                          (0, t.jsx)('td', {
                            className: l.default.center,
                            children: e.influence ?? '',
                          }),
                          (0, t.jsx)('td', {
                            className: l.default.center,
                            children: e.lore ?? '',
                          }),
                          (0, t.jsx)('td', {
                            className: l.default.center,
                            children: e.perception ?? '',
                          }),
                          (0, t.jsx)('td', {
                            className: l.default.center,
                            children: e.strength ?? '',
                          }),
                          (0, t.jsx)('td', {
                            className: l.default.center,
                            children: e.will ?? '',
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
                (0, t.jsx)('tfoot', {
                  children: (0, t.jsxs)('tr', {
                    children: [
                      (0, t.jsx)('th', {
                        scope: 'row',
                        colSpan: 2,
                        children: 'Total',
                      }),
                      (0, t.jsx)('td', {
                        className: l.default.center,
                        children: y.influence,
                      }),
                      (0, t.jsx)('td', {
                        className: l.default.center,
                        children: y.lore,
                      }),
                      (0, t.jsx)('td', {
                        className: l.default.center,
                        children: y.perception,
                      }),
                      (0, t.jsx)('td', {
                        className: l.default.center,
                        children: y.strength,
                      }),
                      (0, t.jsx)('td', {
                        className: l.default.center,
                        children: y.will,
                      }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      });
    }
    e.s(['default', () => c], 73426);
  },
]);
