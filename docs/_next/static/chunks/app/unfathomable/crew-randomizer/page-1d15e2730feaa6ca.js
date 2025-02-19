(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [385],
  {
    270: (e, n, r) => {
      Promise.resolve().then(r.bind(r, 5270));
    },
    5270: (e, n, r) => {
      'use strict';
      r.r(n), r.d(n, { default: () => s });
      var l = r(4884);
      function a(e) {
        return e.reduce(
          (e, n) => {
            var r, l, a, t, i;
            return (
              (e.influence +=
                null !== (r = n.influence) && void 0 !== r ? r : 0),
              (e.lore += null !== (l = n.lore) && void 0 !== l ? l : 0),
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
        return e.reduce((e, r) => e + (r - n) ** 2, 0) / e.length;
      };
      var i = r(4843);
      let c = [
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
      var o = r(3831);
      function s() {
        let [e, n] = (0, i.useState)(3),
          [r, s] = (0, i.useState)(!0),
          h = (0, i.useMemo)(
            () => (r ? c : c.filter((e) => 'from-the-abyss' !== e.expansion)),
            [r],
          ),
          [p, d] = (0, i.useState)([]),
          m = p.reduce((e, n) => (n.captain < e.captain ? n : e), {
            name: '',
            captain: 100,
          }),
          u = p.reduce(
            (e, n) => (n.keeperOfTheTome < e.keeperOfTheTome ? n : e),
            { name: '', keeperOfTheTome: 100 },
          ),
          f = { [m.name]: 'Captain', [u.name]: 'Keeper of The Tome' },
          x = a(p),
          j = (0, i.useCallback)((e) => {
            n(Number(e.target.value));
          }, []),
          T = (0, i.useCallback)((e) => {
            s(e.target.checked);
          }, []),
          k = (0, i.useCallback)(() => {
            let n, r;
            do
              r = t(
                Object.values(
                  a(
                    (n = (function (e) {
                      let n = e.slice();
                      for (let e = n.length - 1; e > 0; e--) {
                        let r = Math.floor(Math.random() * (e + 1));
                        [n[e], n[r]] = [n[r], n[e]];
                      }
                      return n;
                    })(h).slice(0, e)),
                  ),
                ),
              );
            while (r > 0.5);
            d(n);
          }, [h, e]);
        return (0, l.jsxs)('main', {
          children: [
            (0, l.jsxs)('header', {
              children: [
                (0, l.jsx)(o.Breadcrumbs, {}),
                (0, l.jsx)('h1', { children: 'Unfathomable Crew Randomizer' }),
              ],
            }),
            (0, l.jsxs)('form', {
              children: [
                (0, l.jsxs)('fieldset', {
                  children: [
                    (0, l.jsxs)('fieldset', {
                      children: [
                        (0, l.jsx)('legend', { children: 'Player Count' }),
                        Array.from({ length: 4 }, (e, n) => n + 3).map((n) =>
                          (0, l.jsxs)(
                            i.Fragment,
                            {
                              children: [
                                (0, l.jsx)('input', {
                                  id: 'player-count-'.concat(n),
                                  type: 'radio',
                                  value: n,
                                  checked: e === n,
                                  onChange: j,
                                }),
                                (0, l.jsx)('label', {
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
                    (0, l.jsxs)('label', {
                      children: [
                        (0, l.jsx)('input', {
                          type: 'checkbox',
                          checked: r,
                          onChange: T,
                        }),
                        'Include From The Abyss Characters',
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)('input', {
                  type: 'button',
                  value: 'Randomize',
                  onClick: k,
                }),
              ],
            }),
            p.length > 0 &&
              (0, l.jsxs)('table', {
                children: [
                  (0, l.jsx)('thead', {
                    children: (0, l.jsxs)('tr', {
                      children: [
                        (0, l.jsx)('th', { children: 'Name' }),
                        (0, l.jsx)('th', { children: 'Title' }),
                        (0, l.jsx)('th', { children: 'Influence' }),
                        (0, l.jsx)('th', { children: 'Lore' }),
                        (0, l.jsx)('th', { children: 'Perception' }),
                        (0, l.jsx)('th', { children: 'Strength' }),
                        (0, l.jsx)('th', { children: 'Will' }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('tbody', {
                    children: p.map((e) => {
                      var n, r, a, t, i, c;
                      return (0, l.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, l.jsx)('td', { children: e.name }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (n = f[e.name]) && void 0 !== n
                                  ? n
                                  : '',
                            }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (r = e.influence) && void 0 !== r
                                  ? r
                                  : '',
                            }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (a = e.lore) && void 0 !== a ? a : '',
                            }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (t = e.perception) && void 0 !== t
                                  ? t
                                  : '',
                            }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (i = e.strength) && void 0 !== i
                                  ? i
                                  : '',
                            }),
                            (0, l.jsx)('td', {
                              children:
                                null !== (c = e.will) && void 0 !== c ? c : '',
                            }),
                          ],
                        },
                        e.name,
                      );
                    }),
                  }),
                  (0, l.jsx)('tfoot', {
                    children: (0, l.jsxs)('tr', {
                      children: [
                        (0, l.jsx)('td', { colSpan: 2, children: 'Total' }),
                        (0, l.jsx)('td', { children: x.influence }),
                        (0, l.jsx)('td', { children: x.lore }),
                        (0, l.jsx)('td', { children: x.perception }),
                        (0, l.jsx)('td', { children: x.strength }),
                        (0, l.jsx)('td', { children: x.will }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    3831: (e, n, r) => {
      'use strict';
      r.d(n, { Breadcrumbs: () => c });
      var l = r(4884),
        a = r(1968),
        t = r.n(a),
        i = r(9269);
      function c() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, l.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, l.jsxs)('ul', {
            children: [
              (0, l.jsx)('li', {
                children: (0, l.jsx)(t(), { href: '/', children: 'Home' }),
              }),
              e.map((n, r) => {
                let a = '/' + e.slice(0, r + 1).join('/'),
                  i = n
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, l.jsx)(
                  'li',
                  { children: (0, l.jsx)(t(), { href: a, children: i }) },
                  a,
                );
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [812, 449, 919, 358], () => n(270)), (_N_E = e.O());
  },
]);
