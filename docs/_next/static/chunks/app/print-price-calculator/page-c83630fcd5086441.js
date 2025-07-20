(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    1910: (e, r, t) => {
      'use strict';
      t.d(r, { Breadcrumbs: () => i });
      var s = t(9605),
        n = t(6762),
        a = t.n(n),
        l = t(5935);
      function i() {
        let e = (0, l.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(a(), { href: '/', children: 'Home' }),
              }),
              e.map((r, t) => {
                let n = '/' + e.slice(0, t + 1).join('/'),
                  l = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(a(), { href: n, children: l }) },
                  n,
                );
              }),
            ],
          }),
        });
      }
    },
    5489: (e, r, t) => {
      'use strict';
      t.d(r, { Y: () => a });
      var s = t(9605),
        n = t(1910);
      function a(e) {
        let { title: r, children: t } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(n.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: r }),
              ],
            }),
            t,
          ],
        });
      }
    },
    7456: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => d }));
      var s = t(9605),
        n = t(7972),
        a = t.n(n),
        l = t(9585);
      function i(e) {
        let { days: r, hours: t, minutes: s, seconds: n } = e;
        return 24 * r + t + s / 60 + n / 3600;
      }
      let c = /(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;
      var u = t(5489);
      function d() {
        let [e, r] = (0, l.useState)(1),
          [t, n] = (0, l.useState)(40),
          [d, h] = (0, l.useState)('1h'),
          [o, x] = (0, l.useState)(null),
          [m, j] = (0, l.useState)(0.5),
          [p, b] = (0, l.useState)(50),
          g = (0, l.useMemo)(() => {
            try {
              let e = (function (e) {
                let r = e.match(c);
                if (!r) throw Error('No matches found');
                let [, t, s, n, a] = r,
                  l = {
                    days: t ? parseInt(t, 10) : 0,
                    hours: s ? parseInt(s, 10) : 0,
                    minutes: n ? parseInt(n, 10) : 0,
                    seconds: a ? parseInt(a, 10) : 0,
                  };
                if (!(l.days || l.hours || l.minutes || l.seconds))
                  throw Error('Duration should not be zero');
                return l;
              })(d);
              return (x(null), e);
            } catch (e) {
              return (
                x(e instanceof Error ? e.message : 'unknown error'),
                { days: 0, hours: 0, minutes: 0, seconds: 0 }
              );
            }
          }, [d]),
          y = (0, l.useMemo)(
            () =>
              (function (e) {
                let {
                  materialWeight: r,
                  materialCostPerUnit: t,
                  duration: s,
                  hourlyRate: n,
                } = e;
                return r * t + i(s) * n;
              })({
                materialWeight: e,
                materialCostPerUnit: t,
                duration: g,
                hourlyRate: m,
              }),
            [e, t, g, m],
          ),
          f = (0, l.useMemo)(() => y * (1 + p / 100), [y, p]),
          v = (0, l.useCallback)(
            (e) => (r) => e(Math.max(0, Number(r.target.value) || 0)),
            [],
          );
        return (0, s.jsxs)(u.Y, {
          title: 'Print Price Calculator',
          children: [
            (0, s.jsxs)('form', {
              children: [
                (0, s.jsxs)('label', {
                  children: [
                    'Material weight in kilograms',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: e,
                      onChange: v(r),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Material cost Per Kilogram',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: t,
                      onChange: v(n),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Duration',
                    (0, s.jsx)('input', {
                      type: 'text',
                      value: d,
                      onChange: (e) => h(e.target.value),
                      placeholder: '1d5h10m15s',
                      'aria-invalid': !!o,
                      'aria-describedby': o ? 'duration-error' : void 0,
                    }),
                    !!o &&
                      (0, s.jsx)('small', {
                        id: 'duration-error',
                        children: o,
                      }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Hourly rate',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: m,
                      onChange: v(j),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'markup',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: p,
                      onChange: v(b),
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
                      (0, s.jsx)('th', { children: 'Material cost' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: (e * t).toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Duration cost' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: (i(g) * m).toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Total cost' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: y.toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    className: a().price,
                    children: [
                      (0, s.jsx)('th', { children: 'Total price' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: f.toFixed(2),
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
    8937: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 7456));
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    (e.O(0, [299, 436, 390, 110, 358], () => r(8937)), (_N_E = e.O()));
  },
]);
