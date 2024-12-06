(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    6354: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 2120));
    },
    2120: (e, l, r) => {
      'use strict';
      r.r(l), r.d(l, { default: () => c });
      var s = r(632),
        n = r(7691),
        t = r(5268);
      function c() {
        let [e, l] = (0, t.useState)(5),
          [r, c] = (0, t.useState)(6),
          [a, i] = (0, t.useState)(0),
          [d, h] = (0, t.useState)(6),
          o = (function (e, l, r, s) {
            r = Math.min(e, r);
            let n = e - r,
              t = (7 - l) / 6;
            return r * t + r * (1 - t) * ((7 - s) / 6) + n * t;
          })(e, r, a, d),
          u = (function (e, l, r, s) {
            let n = (7 - l) / 6,
              t = (7 - s) / 6,
              c = {};
            for (let l = 1; l <= e; l++)
              c[l] = (function e(l, r, s, n, t) {
                return 0 === l
                  ? r <= 0
                    ? 1
                    : 0
                  : r <= 0
                    ? 1
                    : n * e(l - 1, r - 1, s, n, t) +
                      (1 - n) *
                        (s > 0
                          ? t * e(l - 1, r - 1, s - 1, n, t) +
                            (1 - t) * e(l - 1, r, s - 1, n, t)
                          : e(l - 1, r, s, n, t));
              })(e, l, r, n, t);
            return c;
          })(e, r, a, d),
          j = (0, t.useCallback)(
            (e) => {
              let r = Number(e.target.value);
              l(r), r < a && i(r);
            },
            [a],
          ),
          x = (0, t.useCallback)(
            (e) => (l) => {
              e(Number(l.target.value));
            },
            [],
          );
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
                    Array.from({ length: 5 }, (e, l) => l + 1).map((l) =>
                      (0, s.jsxs)(
                        t.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rolls-'.concat(l),
                              type: 'radio',
                              value: l,
                              checked: e === l,
                              onChange: j,
                            }),
                            (0, s.jsx)('label', {
                              htmlFor: 'rolls-'.concat(l),
                              children: l,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                  ],
                }),
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Roll Success Value' }),
                    Array.from({ length: 5 }, (e, l) => l + 2).map((e) =>
                      (0, s.jsxs)(
                        t.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'roll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: r === e,
                              onChange: x(c),
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
                    Array.from({ length: e + 1 }, (e, l) => l).map((e) =>
                      (0, s.jsxs)(
                        t.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rerolls-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: a === e,
                              onChange: x(i),
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
                        t.Fragment,
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
                          (0, s.jsx)('th', { children: 'Expected Value' }),
                          (0, s.jsx)('th', { children: o.toFixed(2) }),
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
                    children: Object.entries(u).map((e) => {
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
      r.d(l, { Breadcrumbs: () => c });
      var s = r(632),
        n = r(715),
        t = r(641);
      function c() {
        let e = (0, t.usePathname)().split('/').slice(0, -1).filter(Boolean);
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
                let t = '/' + e.slice(0, r + 1).join('/'),
                  c = l
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n.default, { href: t, children: c }) },
                  t,
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
