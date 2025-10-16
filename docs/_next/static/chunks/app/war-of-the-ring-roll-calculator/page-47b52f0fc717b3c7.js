(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [497],
  {
    2091: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => i });
      var s = l(6700),
        c = l(580),
        n = l.n(c),
        t = l(1446);
      function i() {
        let e = (0, t.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((r, l) => {
                let c = '/' + e.slice(0, l + 1).join('/'),
                  t = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n(), { href: c, children: t }) },
                  c,
                );
              }),
            ],
          }),
        });
      }
    },
    2613: (e, r, l) => {
      'use strict';
      (l.r(r), l.d(r, { default: () => t }));
      var s = l(6700),
        c = l(7568),
        n = l(7514);
      function t() {
        let [e, r] = (0, c.useState)(5),
          [l, t] = (0, c.useState)(6),
          [i, a] = (0, c.useState)(0),
          [d, h] = (0, c.useState)(6),
          o = (0, c.useMemo)(
            () =>
              (function (e, r, l, s) {
                l = Math.min(e, l);
                let c = e - l,
                  n = (7 - r) / 6;
                return l * n + l * (1 - n) * ((7 - s) / 6) + c * n;
              })(e, l, i, d),
            [d, i, l, e],
          ),
          u = (0, c.useMemo)(
            () =>
              (function (e, r, l, s) {
                let c = (7 - r) / 6,
                  n = (7 - s) / 6,
                  t = {};
                for (let r = 1; r <= e; r++)
                  t[r] = (function e(r, l, s, c, n) {
                    var t, i, a, d, h;
                    if (0 === r) return +(l <= 0);
                    if (l <= 0) return 1;
                    return (
                      c * e(r - 1, l - 1, s, c, n) +
                      (1 - c) *
                        (s > 0
                          ? ((t = r),
                            (i = l),
                            (a = s),
                            (d = c),
                            (h = n) * e(t - 1, i - 1, a - 1, d, h) +
                              (1 - h) * e(t - 1, i, a - 1, d, h))
                          : e(r - 1, l, s, c, n))
                    );
                  })(e, r, l, c, n);
                return t;
              })(e, l, i, d),
            [d, i, l, e],
          ),
          j = (0, c.useCallback)(
            (e) => {
              let l = Number(e.target.value);
              (r(l), l < i && a(l));
            },
            [i],
          ),
          x = (0, c.useCallback)(
            (e) => (r) => {
              e(Number(r.target.value));
            },
            [],
          );
        return (0, s.jsxs)(n.Y, {
          title: 'War of the Ring Roll Calculator',
          children: [
            (0, s.jsxs)('form', {
              children: [
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Rolls' }),
                    Array.from({ length: 5 }, (e, r) => r + 1).map((r) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rolls-'.concat(r),
                              type: 'radio',
                              value: r,
                              checked: e === r,
                              onChange: j,
                            }),
                            (0, s.jsx)('label', {
                              htmlFor: 'rolls-'.concat(r),
                              children: r,
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  ],
                }),
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Roll Success Value' }),
                    Array.from({ length: 5 }, (e, r) => r + 2).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'roll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: l === e,
                              onChange: x(t),
                            }),
                            (0, s.jsx)('label', {
                              htmlFor: 'roll-success-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Rerolls' }),
                    Array.from({ length: e + 1 }, (e, r) => r).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rerolls-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: i === e,
                              onChange: x(a),
                            }),
                            (0, s.jsx)('label', {
                              htmlFor: 'rerolls-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Reroll Success Value' }),
                    Array.from({ length: 5 }, (e, r) => r + 2).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'reroll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: d === e,
                              onChange: x(h),
                            }),
                            (0, s.jsx)('label', {
                              htmlFor: 'reroll-success-'.concat(e),
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
            Object.keys(u).length > 0 &&
              (0, s.jsxs)('table', {
                children: [
                  (0, s.jsxs)('thead', {
                    children: [
                      (0, s.jsxs)('tr', {
                        children: [
                          (0, s.jsx)('th', {
                            scope: 'row',
                            children: 'Expected Value',
                          }),
                          (0, s.jsx)('td', { children: o.toFixed(2) }),
                        ],
                      }),
                      (0, s.jsxs)('tr', {
                        children: [
                          (0, s.jsx)('th', {
                            scope: 'col',
                            children: 'Successes',
                          }),
                          (0, s.jsx)('th', {
                            scope: 'col',
                            children: 'Probability',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)('tbody', {
                    children: Object.entries(u).map((e) => {
                      let [r, l] = e;
                      return (0, s.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, s.jsx)('th', { scope: 'row', children: r }),
                            (0, s.jsxs)('td', {
                              children: [(100 * l).toFixed(2), '%'],
                            }),
                          ],
                        },
                        r,
                      );
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    7514: (e, r, l) => {
      'use strict';
      l.d(r, { Y: () => n });
      var s = l(6700),
        c = l(2091);
      function n(e) {
        let { title: r, children: l } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(c.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: r }),
              ],
            }),
            l,
          ],
        });
      }
    },
    9628: (e, r, l) => {
      Promise.resolve().then(l.bind(l, 2613));
    },
  },
  (e) => {
    (e.O(0, [924, 709, 766, 358], () => e((e.s = 9628))), (_N_E = e.O()));
  },
]);
