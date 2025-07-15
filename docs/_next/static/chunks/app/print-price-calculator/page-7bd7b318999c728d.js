(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    1910: (e, t, r) => {
      'use strict';
      r.d(t, { Breadcrumbs: () => i });
      var s = r(9605),
        n = r(6762),
        l = r.n(n),
        a = r(5935);
      function i() {
        let e = (0, a.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(l(), { href: '/', children: 'Home' }),
              }),
              e.map((t, r) => {
                let n = '/' + e.slice(0, r + 1).join('/'),
                  a = t
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(l(), { href: n, children: a }) },
                  n,
                );
              }),
            ],
          }),
        });
      }
    },
    5489: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => l });
      var s = r(9605),
        n = r(1910);
      function l(e) {
        let { title: t, children: r } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(n.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: t }),
              ],
            }),
            r,
          ],
        });
      }
    },
    7456: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => h }));
      var s = r(9605),
        n = r(7972),
        l = r.n(n),
        a = r(9585);
      function i(e) {
        let { days: t, hours: r, minutes: s, seconds: n } = e;
        return 24 * t + r + s / 60 + n / 3600;
      }
      let c = /(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;
      var u = r(5489);
      function h() {
        let [e, t] = (0, a.useState)(1),
          [r, n] = (0, a.useState)(35),
          [h, d] = (0, a.useState)('1h'),
          [o, x] = (0, a.useState)(null),
          [j, m] = (0, a.useState)(0.5),
          [p, b] = (0, a.useState)(50),
          g = (0, a.useMemo)(() => {
            try {
              let e = (function (e) {
                let t = e.match(c);
                if (!t) throw Error('Invalid duration format: '.concat(e));
                let [, r, s, n, l] = t;
                return {
                  days: r ? parseInt(r, 10) : 0,
                  hours: s ? parseInt(s, 10) : 0,
                  minutes: n ? parseInt(n, 10) : 0,
                  seconds: l ? parseInt(l, 10) : 0,
                };
              })(h);
              return (x(null), e);
            } catch (e) {
              return (x(e), { days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
          }, [h]),
          v = (0, a.useMemo)(
            () =>
              (function (e) {
                let {
                  materialWeight: t,
                  materialCostPerUnit: r,
                  duration: s,
                  hourlyRate: n,
                } = e;
                return t * r + i(s) * n;
              })({
                materialWeight: e,
                materialCostPerUnit: r,
                duration: g,
                hourlyRate: j,
              }),
            [e, r, g, j],
          ),
          y = (0, a.useMemo)(() => v * (1 + p / 100), [v, p]),
          f = (0, a.useCallback)(
            (e) => (t) => e(Math.max(0, Number(t.target.value) || 0)),
            [],
          );
        return (0, s.jsxs)(u.Y, {
          title: 'Print Price Calculator',
          children: [
            (0, s.jsxs)('form', {
              children: [
                (0, s.jsxs)('label', {
                  children: [
                    'Material Weight in Units',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: e,
                      onChange: f(t),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Material Cost per Unit',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: r,
                      onChange: f(n),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Duration',
                    (0, s.jsx)('input', {
                      type: 'text',
                      value: h,
                      onChange: (e) => d(e.target.value),
                      placeholder: '1d5h10m15s',
                      'aria-invalid': !!o,
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Hourly Rate',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: j,
                      onChange: f(m),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Markup',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: p,
                      onChange: f(b),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)('table', {
              children: (0, s.jsxs)('tbody', {
                children: [
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Material Cost' }),
                      (0, s.jsx)('td', {
                        className: l().right,
                        children: (e * r).toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Duration Cost' }),
                      (0, s.jsx)('td', {
                        className: l().right,
                        children: (i(g) * j).toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Total Cost' }),
                      (0, s.jsx)('td', {
                        className: l().right,
                        children: v.toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    className: l().price,
                    children: [
                      (0, s.jsx)('th', { children: 'Total Price' }),
                      (0, s.jsx)('td', {
                        className: l().right,
                        children: y.toFixed(2),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7972: (e) => {
      e.exports = {
        right: 'styles_right__VxdzW',
        price: 'styles_price__tWr58',
      };
    },
    8937: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 7456));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [299, 436, 390, 110, 358], () => t(8937)), (_N_E = e.O()));
  },
]);
