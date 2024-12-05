(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    6354: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 2120));
    },
    2120: (e, l, r) => {
      'use strict';
      r.r(l), r.d(l, { default: () => t });
      var s = r(632),
        n = r(7691),
        c = r(5268);
      function t() {
        let [e, l] = (0, c.useState)(5),
          [r, t] = (0, c.useState)(6),
          [i, a] = (0, c.useState)(0),
          [d, h] = (0, c.useState)(6),
          o = (0, c.useCallback)(
            (e) => (l) => {
              e(Number(l.target.value));
            },
            [],
          ),
          u = (function (e, l, r, s) {
            r = Math.min(e, r);
            let n = e - r,
              c = (7 - l) / 6;
            return r * c + r * (1 - c) * ((7 - s) / 6) + n * c;
          })(e, r, i, d),
          j = (function (e, l, r, s) {
            let n = (7 - l) / 6,
              c = (7 - s) / 6,
              t = {};
            for (let l = 1; l <= e; l++)
              t[l] = (function e(l, r, s, n, c) {
                return 0 === l
                  ? r <= 0
                    ? 1
                    : 0
                  : r <= 0
                    ? 1
                    : n * e(l - 1, r - 1, s, n, c) +
                      (1 - n) *
                        (s > 0
                          ? c * e(l - 1, r - 1, s - 1, n, c) +
                            (1 - c) * e(l - 1, r, s - 1, n, c)
                          : e(l - 1, r, s, n, c));
              })(e, l, r, n, c);
            return t;
          })(e, r, i, d);
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(n.Breadcrumbs, {}),
                (0, s.jsx)('h1', {
                  children: 'War of the Ring Roll Calculator',
                }),
              ],
            }),
            (0, s.jsxs)('form', {
              children: [
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Rolls' }),
                    Array.from({ length: 5 }, (e, l) => l + 1).map((r) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rolls-'.concat(r),
                              type: 'radio',
                              value: r,
                              checked: e === r,
                              onChange: o(l),
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
                    Array.from({ length: 5 }, (e, l) => l + 2).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'roll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: r === e,
                              onChange: o(t),
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
                    Array.from({ length: 6 }, (e, l) => l).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rerolls-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: i === e,
                              onChange: o(a),
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
                    Array.from({ length: 5 }, (e, l) => l + 2).map((e) =>
                      (0, s.jsxs)(
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'reroll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: d === e,
                              onChange: o(h),
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
            Object.keys(j).length > 0 &&
              (0, s.jsxs)('table', {
                children: [
                  (0, s.jsxs)('thead', {
                    children: [
                      (0, s.jsxs)('tr', {
                        children: [
                          (0, s.jsx)('th', { children: 'Expected Value' }),
                          (0, s.jsx)('th', { children: u.toFixed(2) }),
                        ],
                      }),
                      (0, s.jsxs)('tr', {
                        children: [
                          (0, s.jsx)('th', { children: 'Successes' }),
                          (0, s.jsx)('th', { children: 'Probability' }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)('tbody', {
                    children: Object.entries(j).map((e) => {
                      let [l, r] = e;
                      return (0, s.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, s.jsx)('td', { children: l }),
                            (0, s.jsxs)('td', {
                              children: [(100 * r).toFixed(2), '%'],
                            }),
                          ],
                        },
                        l,
                      );
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    7691: (e, l, r) => {
      'use strict';
      r.d(l, { Breadcrumbs: () => t });
      var s = r(632),
        n = r(715),
        c = r(641);
      function t() {
        let e = (0, c.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n.default, {
                  href: '/',
                  children: 'Home',
                }),
              }),
              e.map((l, r) => {
                let c = '/' + e.slice(0, r + 1).join('/'),
                  t = l
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n.default, { href: c, children: t }) },
                  c,
                );
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [63, 15, 723, 358], () => l(6354)), (_N_E = e.O());
  },
]);
