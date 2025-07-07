(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [251],
  {
    1910: (e, n, l) => {
      'use strict';
      l.d(n, { Breadcrumbs: () => s });
      var r = l(9605),
        a = l(6762),
        t = l.n(a),
        c = l(5935);
      function s() {
        let e = (0, c.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, r.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, r.jsxs)('ul', {
            children: [
              (0, r.jsx)('li', {
                children: (0, r.jsx)(t(), { href: '/', children: 'Home' }),
              }),
              e.map((n, l) => {
                let a = '/' + e.slice(0, l + 1).join('/'),
                  c = n
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, r.jsx)(
                  'li',
                  { children: (0, r.jsx)(t(), { href: a, children: c }) },
                  a,
                );
              }),
            ],
          }),
        });
      }
    },
    4635: (e, n, l) => {
      Promise.resolve().then(l.bind(l, 7604));
    },
    5489: (e, n, l) => {
      'use strict';
      l.d(n, { Y: () => t });
      var r = l(9605),
        a = l(1910);
      function t(e) {
        let { title: n, children: l } = e;
        return (0, r.jsxs)('main', {
          children: [
            (0, r.jsxs)('header', {
              children: [
                (0, r.jsx)(a.Breadcrumbs, {}),
                (0, r.jsx)('h1', { children: n }),
              ],
            }),
            l,
          ],
        });
      }
    },
    7604: (e, n, l) => {
      'use strict';
      (l.r(n), l.d(n, { default: () => p }));
      var r = l(9605);
      function a(e) {
        return e.reduce(
          (e, n) => {
            var l, r, a, t, c;
            return (
              (e.influence += null != (l = n.influence) ? l : 0),
              (e.lore += null != (r = n.lore) ? r : 0),
              (e.perception += null != (a = n.perception) ? a : 0),
              (e.strength += null != (t = n.strength) ? t : 0),
              (e.will += null != (c = n.will) ? c : 0),
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
      var c = l(9585);
      let s = [
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
      var i = l(9426),
        o = l.n(i),
        h = l(5489);
      function p() {
        let [e, n] = (0, c.useState)(3),
          [l, i] = (0, c.useState)(!0),
          p = (0, c.useMemo)(
            () => (l ? s : s.filter((e) => 'from-the-abyss' !== e.expansion)),
            [l],
          ),
          [m, u] = (0, c.useState)([]),
          d = (0, c.useMemo)(
            () =>
              m.reduce((e, n) => (n.captain < e.captain ? n : e), {
                name: '',
                captain: 100,
              }),
            [m],
          ),
          f = (0, c.useMemo)(
            () =>
              m.reduce(
                (e, n) => (n.keeperOfTheTome < e.keeperOfTheTome ? n : e),
                { name: '', keeperOfTheTome: 100 },
              ),
            [m],
          ),
          x = (0, c.useMemo)(
            () => ({ [d.name]: 'Captain', [f.name]: 'Keeper of The Tome' }),
            [d.name, f.name],
          ),
          j = (0, c.useMemo)(() => a(m), [m]),
          T = (0, c.useCallback)((e) => {
            n(Number(e.target.value));
          }, []),
          k = (0, c.useCallback)((e) => {
            i(e.target.checked);
          }, []),
          g = (0, c.useCallback)(() => {
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
                    })(p).slice(0, e)),
                  ),
                ),
              );
            while (l > 0.5);
            u(n);
          }, [p, e]);
        return (0, r.jsxs)(h.Y, {
          title: 'Unfathomable Crew Randomizer',
          children: [
            (0, r.jsxs)('form', {
              children: [
                (0, r.jsxs)('fieldset', {
                  children: [
                    (0, r.jsxs)('fieldset', {
                      children: [
                        (0, r.jsx)('legend', { children: 'Player Count' }),
                        Array.from({ length: 4 }, (e, n) => n + 3).map((n) =>
                          (0, r.jsxs)(
                            c.Fragment,
                            {
                              children: [
                                (0, r.jsx)('input', {
                                  id: 'player-count-'.concat(n),
                                  type: 'radio',
                                  value: n,
                                  checked: e === n,
                                  onChange: T,
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
                          onChange: k,
                        }),
                        'Include From The Abyss Characters',
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)('input', {
                  type: 'button',
                  value: 'Randomize',
                  onClick: g,
                }),
              ],
            }),
            m.length > 0 &&
              (0, r.jsxs)('table', {
                children: [
                  (0, r.jsx)('thead', {
                    children: (0, r.jsxs)('tr', {
                      children: [
                        (0, r.jsx)('th', { scope: 'col', children: 'Name' }),
                        (0, r.jsx)('th', { scope: 'col', children: 'Title' }),
                        (0, r.jsx)('th', {
                          scope: 'col',
                          children: 'Influence',
                        }),
                        (0, r.jsx)('th', { scope: 'col', children: 'Lore' }),
                        (0, r.jsx)('th', {
                          scope: 'col',
                          children: 'Perception',
                        }),
                        (0, r.jsx)('th', {
                          scope: 'col',
                          children: 'Strength',
                        }),
                        (0, r.jsx)('th', { scope: 'col', children: 'Will' }),
                      ],
                    }),
                  }),
                  (0, r.jsx)('tbody', {
                    children: m.map((e) => {
                      var n, l, a, t, c, s;
                      return (0, r.jsxs)(
                        'tr',
                        {
                          children: [
                            (0, r.jsx)('th', {
                              scope: 'row',
                              children: e.name,
                            }),
                            (0, r.jsx)('td', {
                              children: null != (n = x[e.name]) ? n : '',
                            }),
                            (0, r.jsx)('td', {
                              className: o().center,
                              children: null != (l = e.influence) ? l : '',
                            }),
                            (0, r.jsx)('td', {
                              className: o().center,
                              children: null != (a = e.lore) ? a : '',
                            }),
                            (0, r.jsx)('td', {
                              className: o().center,
                              children: null != (t = e.perception) ? t : '',
                            }),
                            (0, r.jsx)('td', {
                              className: o().center,
                              children: null != (c = e.strength) ? c : '',
                            }),
                            (0, r.jsx)('td', {
                              className: o().center,
                              children: null != (s = e.will) ? s : '',
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
                        (0, r.jsx)('th', {
                          scope: 'row',
                          colSpan: 2,
                          children: 'Total',
                        }),
                        (0, r.jsx)('td', {
                          className: o().center,
                          children: j.influence,
                        }),
                        (0, r.jsx)('td', {
                          className: o().center,
                          children: j.lore,
                        }),
                        (0, r.jsx)('td', {
                          className: o().center,
                          children: j.perception,
                        }),
                        (0, r.jsx)('td', {
                          className: o().center,
                          children: j.strength,
                        }),
                        (0, r.jsx)('td', {
                          className: o().center,
                          children: j.will,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    9426: (e) => {
      e.exports = { center: 'styles_center__NC8Js' };
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    (e.O(0, [433, 436, 390, 110, 358], () => n(4635)), (_N_E = e.O()));
  },
]);
