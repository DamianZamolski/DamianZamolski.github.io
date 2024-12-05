(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [385],
  {
    1106: (e, l, r) => {
      Promise.resolve().then(r.bind(r, 2972));
    },
    2972: (e, l, r) => {
      'use strict';
      r.r(l), r.d(l, { default: () => t });
      var s = r(632),
        n = r(5268);
      function t() {
        let [e, l] = (0, n.useState)(5),
          [r, t] = (0, n.useState)(6),
          [c, d] = (0, n.useState)(0),
          [i, a] = (0, n.useState)(6),
          h = (0, n.useCallback)(
            (e) => (l) => {
              e(Number(l.target.value));
            },
            [],
          ),
          o = (function (e, l, r, s) {
            r = Math.min(e, r);
            let n = e - r,
              t = (7 - l) / 6;
            return r * t + r * (1 - t) * ((7 - s) / 6) + n * t;
          })(e, r, c, i),
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
          })(e, r, c, i);
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsx)('header', {
              children: (0, s.jsx)('h1', {
                children: 'War of the Ring Roll Calculator',
              }),
            }),
            (0, s.jsxs)('form', {
              children: [
                (0, s.jsxs)('fieldset', {
                  children: [
                    (0, s.jsx)('legend', { children: 'Rolls' }),
                    Array.from({ length: 5 }, (e, l) => l + 1).map((r) =>
                      (0, s.jsxs)(
                        n.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rolls-'.concat(r),
                              type: 'radio',
                              value: r,
                              checked: e === r,
                              onChange: h(l),
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
                        n.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'roll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: r === e,
                              onChange: h(t),
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
                        n.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'rerolls-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: c === e,
                              onChange: h(d),
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
                        n.Fragment,
                        {
                          children: [
                            (0, s.jsx)('input', {
                              id: 'reroll-success-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: i === e,
                              onChange: h(a),
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
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [15, 723, 358], () => l(1106)), (_N_E = e.O());
  },
]);
