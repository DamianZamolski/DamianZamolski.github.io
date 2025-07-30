(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    1910: (e, r, t) => {
      'use strict';
      t.d(r, { Breadcrumbs: () => l });
      var s = t(9605),
        n = t(6762),
        a = t.n(n),
        i = t(5935);
      function l() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(a(), { href: '/', children: 'Home' }),
              }),
              e.map((r, t) => {
                let n = '/' + e.slice(0, t + 1).join('/'),
                  i = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(a(), { href: n, children: i }) },
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
        i = t(9585);
      let l = /(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;
      var u = t(5489);
      function d() {
        let [e, r] = (0, i.useState)(1),
          [t, n] = (0, i.useState)(40),
          [d, c] = (0, i.useState)('1h'),
          [h, o] = (0, i.useState)(null),
          [x, m] = (0, i.useState)(0.5),
          [j, p] = (0, i.useState)(100),
          b = (function (e) {
            let {
              materialWeight: r,
              materialCostPerUnit: t,
              duration: s,
              hourlyRate: n,
            } = e;
            return (
              r * t +
              (function (e) {
                let { days: r, hours: t, minutes: s, seconds: n } = e;
                return 24 * r + t + s / 60 + n / 3600;
              })(s) *
                n
            );
          })({
            materialWeight: e,
            materialCostPerUnit: t,
            duration: (0, i.useMemo)(() => {
              try {
                let e = (function (e) {
                  let r = e.match(l);
                  if (!r) throw Error('No matches found');
                  let [, t, s, n, a] = r,
                    i = {
                      days: t ? parseInt(t, 10) : 0,
                      hours: s ? parseInt(s, 10) : 0,
                      minutes: n ? parseInt(n, 10) : 0,
                      seconds: a ? parseInt(a, 10) : 0,
                    };
                  if (!(i.days || i.hours || i.minutes || i.seconds))
                    throw Error('Duration should not be zero');
                  return i;
                })(d);
                return (o(null), e);
              } catch (e) {
                return (
                  o(e instanceof Error ? e.message : 'unknown error'),
                  { days: 0, hours: 0, minutes: 0, seconds: 0 }
                );
              }
            }, [d]),
            hourlyRate: x,
          }),
          f = (b * j) / 100,
          g = b + f,
          y = (0, i.useCallback)(
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
                      onChange: y(r),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Material cost per kilogram',
                    (0, s.jsx)('input', {
                      type: 'number',
                      min: '0',
                      step: 'any',
                      value: t,
                      onChange: y(n),
                    }),
                  ],
                }),
                (0, s.jsxs)('label', {
                  children: [
                    'Print duration',
                    (0, s.jsx)('input', {
                      type: 'text',
                      value: d,
                      onChange: (e) => c(e.target.value),
                      placeholder: '1d5h10m15s',
                      'aria-invalid': !!h,
                      'aria-describedby': h ? 'duration-error' : void 0,
                    }),
                    !!h &&
                      (0, s.jsx)('small', {
                        id: 'duration-error',
                        children: h,
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
                      value: x,
                      onChange: y(m),
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
                      value: j,
                      onChange: y(p),
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
                      (0, s.jsx)('th', { children: 'Cost' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: b.toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    children: [
                      (0, s.jsx)('th', { children: 'Profit' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: f.toFixed(2),
                      }),
                    ],
                  }),
                  (0, s.jsxs)('tr', {
                    className: a().price,
                    children: [
                      (0, s.jsx)('th', { children: 'Price' }),
                      (0, s.jsx)('td', {
                        className: a().right,
                        children: g.toFixed(2),
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
