(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [385],
  {
    1106: (e, n, l) => {
      Promise.resolve().then(l.bind(l, 4639));
    },
    4639: (e, n, l) => {
      'use strict';
      l.r(n), l.d(n, { default: () => c });
      var r = l(632);
      function a(e) {
        return e.reduce(
          (e, n) => {
            var l, r, a, t, i;
            return (
              (e.influence +=
                null !== (l = n.influence) && void 0 !== l ? l : 0),
              (e.lore += null !== (r = n.lore) && void 0 !== r ? r : 0),
              (e.perception +=
                null !== (a = n.perception) && void 0 !== a ? a : 0),
              (e.strength += null !== (t = n.strength) && void 0 !== t ? t : 0),
              (e.will += null !== (i = n.will) && void 0 !== i ? i : 0),
              e
            );
          },
          { influence: 0, lore: 0, perception: 0, strength: 0, will: 0 },
        );
      }
      let t = (e) => {
        let n = e.reduce((e, n) => e + n, 0) / e.length;
        return e.reduce((e, l) => e + (l - n) ** 2, 0) / e.length;
      };
      var i = l(5268);
      let o = [
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
      ];
      function c() {
        let [e, n] = (0, i.useState)(3),
          [l, c] = (0, i.useState)(!0),
          h = (0, i.useMemo)(
            () => (l ? o : o.filter((e) => 'from-the-abyss' !== e.expansion)),
            [l],
          ),
          [s, p] = (0, i.useState)([]),
          d = s.reduce((e, n) => (n.captain < e.captain ? n : e), {
            name: '',
            captain: 100,
          }),
          m = s.reduce(
            (e, n) => (n.keeperOfTheTome < e.keeperOfTheTome ? n : e),
            { name: '', keeperOfTheTome: 100 },
          ),
          u = { [d.name]: 'Captain', [m.name]: 'Keeper of The Tome' },
          f = a(s),
          x = (0, i.useCallback)((e) => {
            n(Number(e.target.value));
          }, []),
          T = (0, i.useCallback)((e) => {
            c(e.target.checked);
          }, []),
          j = (0, i.useCallback)(() => {
            let n, l;
            do
              l = t(
                Object.values(
                  a(
                    (n = (function (e) {
                      let n = e.slice();
                      for (let e = n.length - 1; e > 0; e--) {
                        let l = Math.floor(Math.random() * (e + 1));
                        [n[e], n[l]] = [n[l], n[e]];
                      }
                      return n;
                    })(h)
                      .slice(0, e)
                      .sort((e, n) => e.name.localeCompare(n.name))),
                  ),
                ),
              );
            while (l > 0.5);
            p(n);
          }, [h, e]);
        return (0, r.jsxs)('main', {
          children: [
            (0, r.jsx)('header', {
              children: (0, r.jsx)('h1', {
                children: 'Unfathomable Crew Randomizer',
              }),
            }),
            (0, r.jsxs)('form', {
              children: [
                (0, r.jsxs)('fieldset', {
                  children: [
                    (0, r.jsxs)('fieldset', {
                      children: [
                        (0, r.jsx)('legend', { children: 'Player Count' }),
                        Array.from({ length: 4 }, (e, n) => n + 3).map((n) =>
                          (0, r.jsxs)(
                            i.Fragment,
                            {
                              children: [
                                (0, r.jsx)('input', {
                                  id: 'player-count-'.concat(n),
                                  type: 'radio',
                                  value: n,
                                  checked: e === n,
                                  onChange: x,
                                }),
                                (0, r.jsx)('label', {
                                  htmlFor: 'player-count-'.concat(n),
                                  children: n,
                                }),
                              ],
                            },
                            n,
                          ),
                        ),
                      ],
                    }),
                    (0, r.jsxs)('label', {
                      children: [
                        (0, r.jsx)('input', {
                          type: 'checkbox',
                          checked: l,
                          onChange: T,
                        }),
                        'Include From The Abyss Characters',
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)('input', {
                  type: 'button',
                  value: 'Randomize',
                  onClick: j,
                }),
              ],
            }),
            s.length > 0 &&
              (0, r.jsxs)('table', {
                children: [
                  (0, r.jsx)('thead', {
                    children: (0, r.jsxs)('tr', {
                      children: [
                        (0, r.jsx)('th', { children: 'Name' }),
                        (0, r.jsx)('th', { children: 'Title' }),
                        (0, r.jsx)('th', { children: 'Influence' }),
                        (0, r.jsx)('th', { children: 'Lore' }),
                        (0, r.jsx)('th', { children: 'Perception' }),
                        (0, r.jsx)('th', { children: 'Strength' }),
                        (0, r.jsx)('th', { children: 'Will' }),
                      ],
                    }),
                  }),
                  (0, r.jsx)('tbody', {
                    children: s.map((e) => {
                      var n, l, a, t, i, o;
                      return (0, r.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, r.jsx)('td', { children: e.name }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (n = u[e.name]) && void 0 !== n
                                  ? n
                                  : '',
                            }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (l = e.influence) && void 0 !== l
                                  ? l
                                  : '',
                            }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (a = e.lore) && void 0 !== a ? a : '',
                            }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (t = e.perception) && void 0 !== t
                                  ? t
                                  : '',
                            }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (i = e.strength) && void 0 !== i
                                  ? i
                                  : '',
                            }),
                            (0, r.jsx)('td', {
                              children:
                                null !== (o = e.will) && void 0 !== o ? o : '',
                            }),
                          ],
                        },
                        e.name,
                      );
                    }),
                  }),
                  (0, r.jsx)('tfoot', {
                    children: (0, r.jsxs)('tr', {
                      children: [
                        (0, r.jsx)('td', { colSpan: 2, children: 'Total' }),
                        (0, r.jsx)('td', { children: f.influence }),
                        (0, r.jsx)('td', { children: f.lore }),
                        (0, r.jsx)('td', { children: f.perception }),
                        (0, r.jsx)('td', { children: f.strength }),
                        (0, r.jsx)('td', { children: f.will }),
                      ],
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
    var n = (n) => e((e.s = n));
    e.O(0, [15, 723, 358], () => n(1106)), (_N_E = e.O());
  },
]);
