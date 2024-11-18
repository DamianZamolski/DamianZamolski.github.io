(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [541],
  {
    9612: (e, a, l) => {
      Promise.resolve().then(l.bind(l, 4413));
    },
    4413: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { default: () => c });
      var n = l(632),
        s = l(5268);
      let r = [
          {
            name: 'antar al-fakahany',
            expansion: 'from-the-abyss',
            wiedza: 2,
            percepcja: 3,
          },
          { name: 'arjun singh', wplyw: 2, percepcja: 1, sila: 2 },
          {
            name: 'avery engelbrecht',
            expansion: 'from-the-abyss',
            wplyw: 2,
            sila: 2,
            wola: 1,
          },
          { name: 'beatrice sharpe', wplyw: 1, wiedza: 2, percepcja: 2 },
          {
            name: 'edmund mallory',
            wplyw: 1,
            wiedza: 1,
            percepcja: 1,
            sila: 1,
            wola: 1,
          },
          {
            name: 'guillaume delacroix',
            expansion: 'from-the-abyss',
            wplyw: 2,
            wiedza: 2,
            wola: 1,
          },
          {
            name: 'ida lawrence',
            expansion: 'from-the-abyss',
            wplyw: 2,
            wiedza: 1,
            sila: 2,
          },
          { name: 'ismael marsh', wiedza: 2, sila: 2, wola: 1 },
          { name: 'jamie snell', sila: 3, wola: 2 },
          { name: 'jeanne lafarge', wplyw: 1, percepcja: 2, sila: 2 },
          { name: 'keilani tatupu', wplyw: 3, wola: 2 },
          {
            name: 'sardaana morgunova',
            expansion: 'from-the-abyss',
            wplyw: 2,
            percepcja: 2,
            wola: 1,
          },
          {
            name: 'kokoj fernandes',
            expansion: 'from-the-abyss',
            wiedza: 2,
            wola: 3,
          },
          {
            name: 'raul martinez garcia',
            expansion: 'from-the-abyss',
            wiedza: 1,
            percepcja: 2,
            sila: 2,
          },
          { name: 'samira dualeh', wiedza: 1, percepcja: 2, wola: 2 },
          { name: 'svetlana gedroits', wplyw: 2, wiedza: 1, percepcja: 2 },
          { name: 'william bowleg', wiedza: 3, wola: 2 },
          {
            name: 'wong mui choo',
            expansion: 'from-the-abyss',
            percepcja: 1,
            sila: 2,
            wola: 2,
          },
        ],
        i = (e) => {
          let a = e.reduce((e, a) => e + a, 0) / e.length;
          return e.reduce((e, l) => e + (l - a) ** 2, 0) / e.length;
        };
      function t(e) {
        return e.reduce(
          (e, a) => {
            var l, n, s, r, i;
            return (
              (e.wplyw += null !== (l = a.wplyw) && void 0 !== l ? l : 0),
              (e.wiedza += null !== (n = a.wiedza) && void 0 !== n ? n : 0),
              (e.percepcja +=
                null !== (s = a.percepcja) && void 0 !== s ? s : 0),
              (e.sila += null !== (r = a.sila) && void 0 !== r ? r : 0),
              (e.wola += null !== (i = a.wola) && void 0 !== i ? i : 0),
              e
            );
          },
          { wplyw: 0, wiedza: 0, percepcja: 0, sila: 0, wola: 0 },
        );
      }
      function c() {
        let [e, a] = (0, s.useState)(6),
          [l, c] = (0, s.useState)(!0),
          [d, o] = (0, s.useState)(2),
          [h, p] = (0, s.useState)([]),
          [w, u] = (0, s.useState)(0),
          m = (0, s.useMemo)(
            () => (l ? r : r.filter((e) => 'from-the-abyss' !== e.expansion)),
            [l],
          ),
          j = (0, s.useCallback)((e) => {
            a(Math.min(Math.max(Number(e.target.value), 3), 6));
          }, []),
          x = (0, s.useCallback)((e) => {
            let a = Number(e.target.value);
            a < 0 && (a = 0), o(a);
          }, []),
          y = (0, s.useCallback)((e) => {
            c(e.target.checked);
          }, []),
          b = (0, s.useCallback)(
            (a) => {
              a.preventDefault();
              let l = [],
                n = 0;
              do
                n = i(
                  Object.values(
                    t(
                      (l = (function (e) {
                        let a = e.slice();
                        for (let e = a.length - 1; e > 0; e--) {
                          let l = Math.floor(Math.random() * (e + 1));
                          [a[e], a[l]] = [a[l], a[e]];
                        }
                        return a;
                      })(m)
                        .slice(0, e)
                        .sort((e, a) => e.name.localeCompare(a.name))),
                    ),
                  ),
                );
              while (n > d);
              p(l), u(n);
            },
            [m, e, d],
          ),
          f = t(h);
        return (0, n.jsxs)('main', {
          children: [
            (0, n.jsx)('header', {
              children: (0, n.jsx)('h1', { children: 'Unfathomable' }),
            }),
            (0, n.jsxs)('form', {
              children: [
                (0, n.jsxs)('fieldset', {
                  children: [
                    (0, n.jsxs)('label', {
                      children: [
                        'Player Count',
                        (0, n.jsx)('input', {
                          type: 'number',
                          min: 3,
                          max: 6,
                          value: e,
                          onChange: j,
                        }),
                      ],
                    }),
                    (0, n.jsxs)('label', {
                      children: [
                        'Variance Threshold',
                        (0, n.jsx)('input', {
                          type: 'number',
                          min: 0,
                          step: 0.1,
                          value: d,
                          onChange: x,
                        }),
                      ],
                    }),
                    (0, n.jsxs)('label', {
                      children: [
                        (0, n.jsx)('input', {
                          type: 'checkbox',
                          checked: l,
                          onChange: y,
                        }),
                        'Include From The Abyss Characters',
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)('button', {
                  type: 'submit',
                  onClick: b,
                  children: 'Pick',
                }),
              ],
            }),
            h.length > 0 &&
              (0, n.jsxs)('table', {
                children: [
                  (0, n.jsx)('thead', {
                    children: (0, n.jsxs)('tr', {
                      children: [
                        (0, n.jsx)('th', { children: 'Name' }),
                        (0, n.jsx)('th', { children: 'Wpływ' }),
                        (0, n.jsx)('th', { children: 'Wiedza' }),
                        (0, n.jsx)('th', { children: 'Percepcja' }),
                        (0, n.jsx)('th', { children: 'Siła' }),
                        (0, n.jsx)('th', { children: 'Wola' }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('tbody', {
                    children: h.map((e) => {
                      var a, l, s, r, i;
                      return (0, n.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, n.jsx)('td', { children: e.name }),
                            (0, n.jsx)('td', {
                              children:
                                null !== (a = e.wplyw) && void 0 !== a
                                  ? a
                                  : '-',
                            }),
                            (0, n.jsx)('td', {
                              children:
                                null !== (l = e.wiedza) && void 0 !== l
                                  ? l
                                  : '-',
                            }),
                            (0, n.jsx)('td', {
                              children:
                                null !== (s = e.percepcja) && void 0 !== s
                                  ? s
                                  : '-',
                            }),
                            (0, n.jsx)('td', {
                              children:
                                null !== (r = e.sila) && void 0 !== r ? r : '-',
                            }),
                            (0, n.jsx)('td', {
                              children:
                                null !== (i = e.wola) && void 0 !== i ? i : '-',
                            }),
                          ],
                        },
                        e.name,
                      );
                    }),
                  }),
                  (0, n.jsxs)('tfoot', {
                    children: [
                      (0, n.jsxs)('tr', {
                        children: [
                          (0, n.jsx)('td', { children: 'Total' }),
                          (0, n.jsx)('td', { children: f.wplyw }),
                          (0, n.jsx)('td', { children: f.wiedza }),
                          (0, n.jsx)('td', { children: f.percepcja }),
                          (0, n.jsx)('td', { children: f.sila }),
                          (0, n.jsx)('td', { children: f.wola }),
                        ],
                      }),
                      (0, n.jsxs)('tr', {
                        children: [
                          (0, n.jsx)('td', { children: 'Variance' }),
                          (0, n.jsx)('td', {
                            colSpan: 5,
                            children: w.toFixed(2),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [15, 723, 358], () => a(9612)), (_N_E = e.O());
  },
]);
