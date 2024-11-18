(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [251],
  {
    8326: (e, n, l) => {
      Promise.resolve().then(l.bind(l, 3819));
    },
    3819: (e, n, l) => {
      'use strict';
      l.r(n), l.d(n, { default: () => o });
      var a = l(632),
        r = l(5268);
      let t = [
          {
            name: 'Antar Al-Fakahany',
            expansion: 'from-the-abyss',
            captain: 11,
            keeperOfTheTome: 5,
            lore: 2,
            perception: 3,
          },
          {
            name: 'Arjun Singh',
            captain: 2,
            keeperOfTheTome: 17,
            influence: 2,
            perception: 1,
            strength: 2,
          },
          {
            name: 'Avery Engelbrecht',
            expansion: 'from-the-abyss',
            captain: 3,
            keeperOfTheTome: 16,
            influence: 2,
            strength: 2,
            will: 1,
          },
          {
            name: 'Beatrice Sharpe',
            captain: 10,
            keeperOfTheTome: 6,
            influence: 1,
            lore: 2,
            perception: 2,
          },
          {
            name: 'Edmund Mallory',
            captain: 12,
            keeperOfTheTome: 7,
            influence: 1,
            lore: 1,
            perception: 1,
            strength: 1,
            will: 1,
          },
          {
            name: 'Guillaume Delacroix',
            expansion: 'from-the-abyss',
            captain: 17,
            keeperOfTheTome: 3,
            influence: 2,
            lore: 2,
            will: 1,
          },
          {
            name: 'Ida Lawrence',
            captain: 13,
            keeperOfTheTome: 9,
            expansion: 'from-the-abyss',
            influence: 2,
            lore: 1,
            strength: 2,
          },
          {
            name: 'Ismael Marsh',
            captain: 14,
            keeperOfTheTome: 4,
            lore: 2,
            strength: 2,
            will: 1,
          },
          {
            name: 'Jamie Snell',
            captain: 5,
            keeperOfTheTome: 14,
            strength: 3,
            will: 2,
          },
          {
            name: 'Jeanne Lafarge',
            captain: 4,
            keeperOfTheTome: 15,
            influence: 1,
            perception: 2,
            strength: 2,
          },
          {
            name: 'Keilani Tatupu',
            captain: 1,
            keeperOfTheTome: 18,
            influence: 3,
            will: 2,
          },
          {
            name: 'Sardaana Morgunova',
            captain: 6,
            keeperOfTheTome: 13,
            expansion: 'from-the-abyss',
            influence: 2,
            perception: 2,
            will: 1,
          },
          {
            name: 'Kokoj Fernandes',
            captain: 15,
            keeperOfTheTome: 2,
            expansion: 'from-the-abyss',
            lore: 2,
            will: 3,
          },
          {
            name: 'Raul Martinez Garcia',
            captain: 9,
            keeperOfTheTome: 10,
            expansion: 'from-the-abyss',
            lore: 1,
            perception: 2,
            strength: 2,
          },
          {
            name: 'Samira Dualeh',
            captain: 18,
            keeperOfTheTome: 8,
            lore: 1,
            perception: 2,
            will: 2,
          },
          {
            name: 'Svetlana Gedroits',
            captain: 7,
            keeperOfTheTome: 12,
            influence: 2,
            lore: 1,
            perception: 2,
          },
          {
            name: 'William Bowleg',
            captain: 16,
            keeperOfTheTome: 1,
            lore: 3,
            will: 2,
          },
          {
            name: 'Wong Mui Choo',
            captain: 8,
            keeperOfTheTome: 11,
            expansion: 'from-the-abyss',
            perception: 1,
            strength: 2,
            will: 2,
          },
        ],
        i = (e) => {
          let n = e.reduce((e, n) => e + n, 0) / e.length;
          return e.reduce((e, l) => e + (l - n) ** 2, 0) / e.length;
        };
      function c(e) {
        return e.reduce(
          (e, n) => {
            var l, a, r, t, i;
            return (
              (e.influence +=
                null !== (l = n.influence) && void 0 !== l ? l : 0),
              (e.lore += null !== (a = n.lore) && void 0 !== a ? a : 0),
              (e.perception +=
                null !== (r = n.perception) && void 0 !== r ? r : 0),
              (e.strength += null !== (t = n.strength) && void 0 !== t ? t : 0),
              (e.will += null !== (i = n.will) && void 0 !== i ? i : 0),
              e
            );
          },
          { influence: 0, lore: 0, perception: 0, strength: 0, will: 0 },
        );
      }
      function o() {
        let [e, n] = (0, r.useState)(6),
          [l, o] = (0, r.useState)(!0),
          s = (0, r.useMemo)(
            () => (l ? t : t.filter((e) => 'from-the-abyss' !== e.expansion)),
            [l],
          ),
          [h, p] = (0, r.useState)(2),
          [d, m] = (0, r.useState)([]),
          u = d.reduce((e, n) => (n.captain < e.captain ? n : e), {
            name: '',
            captain: 100,
          }),
          f = d.reduce(
            (e, n) => (n.keeperOfTheTome < e.keeperOfTheTome ? n : e),
            { name: '', keeperOfTheTome: 100 },
          ),
          x = { [u.name]: 'Captain', [f.name]: 'Keeper of The Tome' },
          T = c(d),
          [j, k] = (0, r.useState)(0),
          b = (0, r.useCallback)((e) => {
            n(Math.min(Math.max(Number(e.target.value), 3), 6));
          }, []),
          g = (0, r.useCallback)((e) => {
            let n = Number(e.target.value);
            n < 0 && (n = 0), p(n);
          }, []),
          v = (0, r.useCallback)((e) => {
            o(e.target.checked);
          }, []),
          O = (0, r.useCallback)(
            (n) => {
              n.preventDefault();
              let l = [],
                a = 0;
              do
                a = i(
                  Object.values(
                    c(
                      (l = (function (e) {
                        let n = e.slice();
                        for (let e = n.length - 1; e > 0; e--) {
                          let l = Math.floor(Math.random() * (e + 1));
                          [n[e], n[l]] = [n[l], n[e]];
                        }
                        return n;
                      })(s)
                        .slice(0, e)
                        .sort((e, n) => e.name.localeCompare(n.name))),
                    ),
                  ),
                );
              while (a > h);
              m(l), k(a);
            },
            [s, e, h],
          );
        return (0, a.jsxs)('main', {
          children: [
            (0, a.jsx)('header', {
              children: (0, a.jsx)('h1', {
                children: 'Unfathomable Crew Randomizer',
              }),
            }),
            (0, a.jsxs)('form', {
              children: [
                (0, a.jsxs)('fieldset', {
                  children: [
                    (0, a.jsxs)('label', {
                      children: [
                        'Player Count',
                        (0, a.jsx)('input', {
                          type: 'number',
                          min: 3,
                          max: 6,
                          value: e,
                          onChange: b,
                        }),
                      ],
                    }),
                    (0, a.jsxs)('label', {
                      children: [
                        'Max Variance',
                        (0, a.jsx)('input', {
                          type: 'number',
                          min: 0,
                          step: 0.1,
                          value: h,
                          onChange: g,
                        }),
                      ],
                    }),
                    (0, a.jsxs)('label', {
                      children: [
                        (0, a.jsx)('input', {
                          type: 'checkbox',
                          checked: l,
                          onChange: v,
                        }),
                        'Include From The Abyss Characters',
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)('button', {
                  type: 'submit',
                  onClick: O,
                  children: 'Randomize',
                }),
              ],
            }),
            d.length > 0 &&
              (0, a.jsxs)('table', {
                children: [
                  (0, a.jsx)('thead', {
                    children: (0, a.jsxs)('tr', {
                      children: [
                        (0, a.jsx)('th', { children: 'Name' }),
                        (0, a.jsx)('th', { children: 'Title' }),
                        (0, a.jsx)('th', { children: 'Influence' }),
                        (0, a.jsx)('th', { children: 'Lore' }),
                        (0, a.jsx)('th', { children: 'Perception' }),
                        (0, a.jsx)('th', { children: 'Strength' }),
                        (0, a.jsx)('th', { children: 'Will' }),
                      ],
                    }),
                  }),
                  (0, a.jsx)('tbody', {
                    children: d.map((e) => {
                      var n, l, r, t, i, c;
                      return (0, a.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, a.jsx)('td', { children: e.name }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (n = x[e.name]) && void 0 !== n
                                  ? n
                                  : '-',
                            }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (l = e.influence) && void 0 !== l
                                  ? l
                                  : '-',
                            }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (r = e.lore) && void 0 !== r ? r : '-',
                            }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (t = e.perception) && void 0 !== t
                                  ? t
                                  : '-',
                            }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (i = e.strength) && void 0 !== i
                                  ? i
                                  : '-',
                            }),
                            (0, a.jsx)('td', {
                              children:
                                null !== (c = e.will) && void 0 !== c ? c : '-',
                            }),
                          ],
                        },
                        e.name,
                      );
                    }),
                  }),
                  (0, a.jsxs)('tfoot', {
                    children: [
                      (0, a.jsxs)('tr', {
                        children: [
                          (0, a.jsx)('td', { colSpan: 2, children: 'Total' }),
                          (0, a.jsx)('td', { children: T.influence }),
                          (0, a.jsx)('td', { children: T.lore }),
                          (0, a.jsx)('td', { children: T.perception }),
                          (0, a.jsx)('td', { children: T.strength }),
                          (0, a.jsx)('td', { children: T.will }),
                        ],
                      }),
                      (0, a.jsxs)('tr', {
                        children: [
                          (0, a.jsx)('td', { children: 'Variance' }),
                          (0, a.jsx)('td', { colSpan: 6, children: j }),
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
    var n = (n) => e((e.s = n));
    e.O(0, [15, 723, 358], () => n(8326)), (_N_E = e.O());
  },
]);
