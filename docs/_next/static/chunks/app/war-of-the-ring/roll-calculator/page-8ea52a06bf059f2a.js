(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    6354: (e, l, s) => {
      Promise.resolve().then(s.bind(s, 2120));
    },
    2120: (e, l, s) => {
      'use strict';
      s.r(l), s.d(l, { default: () => a });
      var t = s(632),
        n = s(9999),
        r = s(5268);
      function a() {
        let [e, l] = (0, r.useState)(5),
          [s, a] = (0, r.useState)(6),
          [u, i] = (0, r.useState)(0),
          [c, h] = (0, r.useState)(6),
          d = (0, r.useCallback)((e) => {
            l((0, n.q)(Number(e.target.value), 1, 5));
          }, []),
          x = (0, r.useCallback)((e) => {
            a((0, n.q)(Number(e.target.value), 2, 6));
          }, []),
          j = (0, r.useCallback)((e) => {
            i((0, n.q)(Number(e.target.value), 0, 5));
          }, []),
          o = (0, r.useCallback)((e) => {
            h((0, n.q)(Number(e.target.value), 2, 6));
          }, []),
          b = (function (e, l, s, t) {
            let n = (7 - l) / 6,
              r = (7 - t) / 6,
              a = {};
            for (let l = 1; l <= e; l++)
              a[l] = (function e(l, s, t, n, r) {
                return 0 === l
                  ? s <= 0
                    ? 1
                    : 0
                  : s <= 0
                    ? 1
                    : n * e(l - 1, s - 1, t, n, r) +
                      (1 - n) *
                        (t > 0
                          ? r * e(l - 1, s - 1, t - 1, n, r) +
                            (1 - r) * e(l - 1, s, t - 1, n, r)
                          : e(l - 1, s, t, n, r));
              })(e, l, s, n, r);
            return a;
          })(e, s, u, c);
        return (0, t.jsxs)('main', {
          children: [
            (0, t.jsx)('header', {
              children: (0, t.jsx)('h1', {
                children: 'War of the Ring Roll Calculator',
              }),
            }),
            (0, t.jsx)('form', {
              children: (0, t.jsxs)('fieldset', {
                children: [
                  (0, t.jsxs)('fieldset', {
                    role: 'group',
                    children: [
                      (0, t.jsxs)('label', {
                        children: [
                          'Rolls',
                          (0, t.jsx)('input', {
                            type: 'number',
                            min: 1,
                            max: 5,
                            value: e,
                            onChange: d,
                          }),
                        ],
                      }),
                      (0, t.jsxs)('label', {
                        children: [
                          'Roll Min Success Value',
                          (0, t.jsx)('input', {
                            type: 'number',
                            min: 1,
                            max: 6,
                            value: s,
                            onChange: x,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)('fieldset', {
                    role: 'group',
                    children: [
                      (0, t.jsxs)('label', {
                        children: [
                          'Rerolls',
                          (0, t.jsx)('input', {
                            type: 'number',
                            min: 0,
                            max: 5,
                            value: u,
                            onChange: j,
                          }),
                        ],
                      }),
                      (0, t.jsxs)('label', {
                        children: [
                          'Reroll Min Success Value',
                          (0, t.jsx)('input', {
                            type: 'number',
                            min: 1,
                            max: 6,
                            value: c,
                            onChange: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object.keys(b).length > 0 &&
              (0, t.jsxs)('table', {
                children: [
                  (0, t.jsx)('thead', {
                    children: (0, t.jsxs)('tr', {
                      children: [
                        (0, t.jsx)('th', { children: 'Successes' }),
                        (0, t.jsx)('th', { children: 'Probability' }),
                      ],
                    }),
                  }),
                  (0, t.jsx)('tbody', {
                    children: Object.entries(b).map((e) => {
                      let [l, s] = e;
                      return (0, t.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, t.jsx)('td', { children: l }),
                            (0, t.jsxs)('td', {
                              children: [(100 * s).toFixed(2), '%'],
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
    9999: (e, l, s) => {
      'use strict';
      function t(e, l, s) {
        return Math.min(Math.max(e, l), s);
      }
      s.d(l, { q: () => t });
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [15, 723, 358], () => l(6354)), (_N_E = e.O());
  },
]);
