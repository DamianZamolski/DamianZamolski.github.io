(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [541],
  {
    9612: (e, a, l) => {
      Promise.resolve().then(l.bind(l, 4478));
    },
    4478: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { default: () => t });
      var n = l(632);
      function r(e) {
        return e.reduce(
          (e, a) => {
            var l, n, r, i, d;
            return {
              wplyw: e.wplyw + (null !== (l = a.wplyw) && void 0 !== l ? l : 0),
              wiedza:
                e.wiedza + (null !== (n = a.wiedza) && void 0 !== n ? n : 0),
              percepcja:
                e.percepcja +
                (null !== (r = a.percepcja) && void 0 !== r ? r : 0),
              sila: e.sila + (null !== (i = a.sila) && void 0 !== i ? i : 0),
              wola: e.wola + (null !== (d = a.wola) && void 0 !== d ? d : 0),
            };
          },
          { wplyw: 0, wiedza: 0, percepcja: 0, sila: 0, wola: 0 },
        );
      }
      let i = (e) => {
        let a = e.reduce((e, a) => e + a, 0) / e.length;
        return e.reduce((e, l) => e + (l - a) ** 2, 0) / e.length;
      };
      var d = l(5268);
      let c = [
        { name: 'antar al-fakahany', wiedza: 2, percepcja: 3 },
        { name: 'arjun singh', wplyw: 2, percepcja: 1, sila: 2 },
        { name: 'avery engelbrecht', wplyw: 2, sila: 2, wola: 1 },
        { name: 'beatrice sharpe', wplyw: 1, wiedza: 2, percepcja: 2 },
        {
          name: 'edmund mallory',
          wplyw: 1,
          wiedza: 1,
          percepcja: 1,
          sila: 1,
          wola: 1,
        },
        { name: 'guillaume delacroix', wplyw: 2, wiedza: 2, wola: 1 },
        { name: 'ismael marsh', wiedza: 2, sila: 2, wola: 1 },
        { name: 'jamie snell', sila: 3, wola: 2 },
        { name: 'jeanne lafarge', wplyw: 1, percepcja: 2, sila: 2 },
        { name: 'keilani tatupu', wplyw: 3, wola: 2 },
        { name: 'sardaana morgunova', wplyw: 2, percepcja: 2, wola: 1 },
        { name: 'kokoj fernandes', wiedza: 2, wola: 3 },
        { name: 'raul martinez garcia', wiedza: 1, percepcja: 2, sila: 2 },
        { name: 'samira dualeh', wiedza: 1, percepcja: 2, wola: 2 },
        { name: 'svetlana gedroits', wplyw: 2, wiedza: 1, percepcja: 2 },
        { name: 'william bowleg', wiedza: 3, wola: 2 },
        { name: 'wong mui choo', percepcja: 1, sila: 2, wola: 2 },
      ];
      function t() {
        let [e, a] = (0, d.useState)(6),
          [l, t] = (0, d.useState)(2),
          [s, w] = (0, d.useState)([]),
          [h, o] = (0, d.useState)(0),
          p = (0, d.useCallback)((e) => {
            a(Math.min(Math.max(Number(e.target.value), 3), 6));
          }, []),
          j = (0, d.useCallback)((e) => {
            let a = Number(e.target.value);
            a < 0 && (a = 0), t(a);
          }, []),
          u = (0, d.useCallback)(() => {
            let a = [],
              n = 0;
            do
              n = i(
                Object.values(
                  r(
                    (a = (function (e) {
                      let a = e.slice();
                      for (let e = a.length - 1; e > 0; e--) {
                        let l = Math.floor(Math.random() * (e + 1));
                        [a[e], a[l]] = [a[l], a[e]];
                      }
                      return a;
                    })(c)
                      .slice(0, e)
                      .sort((e, a) => e.name.localeCompare(a.name))),
                  ),
                ),
              );
            while (n > l);
            w(a), o(n);
          }, [e, l]),
          m = r(s);
        return (0, n.jsxs)('main', {
          children: [
            (0, n.jsx)('header', {
              children: (0, n.jsx)('h1', { children: 'Unfathomable' }),
            }),
            (0, n.jsxs)('label', {
              children: [
                'Player Count',
                (0, n.jsx)('input', {
                  type: 'number',
                  min: 3,
                  max: 6,
                  value: e,
                  onChange: p,
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
                  value: l,
                  onChange: j,
                }),
              ],
            }),
            (0, n.jsx)('button', { onClick: u, children: 'Pick' }),
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
                  children: s.map((e) => {
                    var a, l, r, i, d;
                    return (0, n.jsxs)(
                      'tr',
                      {
                        children: [
                          (0, n.jsx)('td', { children: e.name }),
                          (0, n.jsx)('td', {
                            children:
                              null !== (a = e.wplyw) && void 0 !== a ? a : '-',
                          }),
                          (0, n.jsx)('td', {
                            children:
                              null !== (l = e.wiedza) && void 0 !== l ? l : '-',
                          }),
                          (0, n.jsx)('td', {
                            children:
                              null !== (r = e.percepcja) && void 0 !== r
                                ? r
                                : '-',
                          }),
                          (0, n.jsx)('td', {
                            children:
                              null !== (i = e.sila) && void 0 !== i ? i : '-',
                          }),
                          (0, n.jsx)('td', {
                            children:
                              null !== (d = e.wola) && void 0 !== d ? d : '-',
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
                        (0, n.jsx)('td', { children: m.wplyw }),
                        (0, n.jsx)('td', { children: m.wiedza }),
                        (0, n.jsx)('td', { children: m.percepcja }),
                        (0, n.jsx)('td', { children: m.sila }),
                        (0, n.jsx)('td', { children: m.wola }),
                      ],
                    }),
                    (0, n.jsxs)('tr', {
                      children: [
                        (0, n.jsx)('td', { children: 'Variance' }),
                        (0, n.jsx)('td', {
                          colSpan: 5,
                          children: h.toFixed(2),
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
