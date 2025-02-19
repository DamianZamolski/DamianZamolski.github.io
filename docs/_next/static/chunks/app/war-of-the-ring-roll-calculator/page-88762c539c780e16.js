(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [497],
  {
    3822: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 6777));
    },
    6777: (e, l, r) => {
      'use strict';
      r.r(l), r.d(l, { default: () => t });
      var s = r(4884),
        c = r(4843),
        n = r(3278);
      function t() {
        let [e, l] = (0, c.useState)(5),
          [r, t] = (0, c.useState)(6),
          [i, a] = (0, c.useState)(0),
          [d, h] = (0, c.useState)(6),
          o = (0, c.useMemo)(
            () =>
              (function (e, l, r, s) {
                r = Math.min(e, r);
                let c = e - r,
                  n = (7 - l) / 6;
                return r * n + r * (1 - n) * ((7 - s) / 6) + c * n;
              })(e, r, i, d),
            [d, i, r, e],
          ),
          u = (0, c.useMemo)(
            () =>
              (function (e, l, r, s) {
                let c = (7 - l) / 6,
                  n = (7 - s) / 6,
                  t = {};
                for (let l = 1; l <= e; l++)
                  t[l] = (function e(l, r, s, c, n) {
                    return 0 === l
                      ? r <= 0
                        ? 1
                        : 0
                      : r <= 0
                        ? 1
                        : c * e(l - 1, r - 1, s, c, n) +
                          (1 - c) *
                            (s > 0
                              ? n * e(l - 1, r - 1, s - 1, c, n) +
                                (1 - n) * e(l - 1, r, s - 1, c, n)
                              : e(l - 1, r, s, c, n));
                  })(e, l, r, c, n);
                return t;
              })(e, r, i, d),
            [d, i, r, e],
          ),
          j = (0, c.useCallback)(
            (e) => {
              let r = Number(e.target.value);
              l(r), r < i && a(r);
            },
            [i],
          ),
          x = (0, c.useCallback)(
            (e) => (l) => {
              e(Number(l.target.value));
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
                    Array.from({ length: 5 }, (e, l) => l + 1).map((l) =>
                      (0, s.jsxs)(
                        c.Fragment,
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
                        c.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'roll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: r === e,
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
                    Array.from({ length: e + 1 }, (e, l) => l).map((e) =>
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
                      let [l, r] = e;
                      return (0, s.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, s.jsx)('th', { scope: 'row', children: l }),
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
    3831: (e, l, r) => {
      'use strict';
      r.d(l, { Breadcrumbs: () => i });
      var s = r(4884),
        c = r(1968),
        n = r.n(c),
        t = r(9269);
      function i() {
        let e = (0, t.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((l, r) => {
                let c = '/' + e.slice(0, r + 1).join('/'),
                  t = l
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
    3278: (e, l, r) => {
      'use strict';
      r.d(l, { Y: () => n });
      var s = r(4884),
        c = r(3831);
      function n(e) {
        let { title: l, children: r } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(c.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: l }),
              ],
            }),
            r,
          ],
        });
      }
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [812, 449, 919, 358], () => l(3822)), (_N_E = e.O());
  },
]);
