(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [301],
  {
    9429: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/smoothie',
        function () {
          return c(3353);
        },
      ]);
    },
    1508: function (a, b, c) {
      'use strict';
      c.d(b, {
        Z: function () {
          return g;
        },
      });
      var d = c(5893),
        e = c(1664),
        f = c.n(e);
      function g(a) {
        var b = a.target,
          c = a.children;
        return (0, d.jsx)(f(), {
          href: b,
          children: (0, d.jsx)('a', { children: c }),
        });
      }
    },
    5671: function (a, b, c) {
      'use strict';
      c.d(b, {
        Z: function () {
          return k;
        },
      });
      var d = c(5893),
        e = c(7294),
        f = (0, e.createContext)(0);
      function g(a) {
        var b = a.level,
          c = a.children;
        return (0, d.jsx)(f.Provider, { value: b, children: c });
      }
      function h() {
        return (0, e.useContext)(f);
      }
      function i(a) {
        var b = a.children,
          c = h() + 1;
        return (0, d.jsx)(g, { level: c, children: b });
      }
      function j(a) {
        var b = a.children,
          c = h(),
          e = 'h'.concat(c);
        return (0, d.jsx)(e, { children: b });
      }
      function k(a) {
        var b = a.heading,
          c = a.children;
        return (0, d.jsx)(i, {
          children: (0, d.jsxs)('section', {
            children: [(0, d.jsx)(j, { children: b }), c],
          }),
        });
      }
    },
    3353: function (a, b, c) {
      'use strict';
      c.r(b),
        c.d(b, {
          default: function () {
            return p;
          },
        });
      var d = c(5893),
        e = c(1508),
        f = c(1799),
        g = c(7294);
      function h(a) {
        var b = a.ingredients,
          c = b.reduce(
            function (a, b) {
              var c = b.product.macros,
                d = c.proteinsPercentage,
                e = c.fatsPercentage,
                f = c.carbohydratesPercentage,
                g = c.sugarsPercentage,
                h = b.massInGrams;
              return (
                (a.mass += h),
                (a.proteins += (h * (void 0 === d ? 0 : d)) / 100),
                (a.fats += (h * (void 0 === e ? 0 : e)) / 100),
                (a.carbohydrates += (h * (void 0 === f ? 0 : f)) / 100),
                (a.sugars += (h * (void 0 === g ? 0 : g)) / 100),
                a
              );
            },
            { mass: 0, proteins: 0, fats: 0, carbohydrates: 0, sugars: 0 }
          ),
          e = c.mass,
          h = c.proteins,
          k = c.fats,
          l = c.carbohydrates,
          m = c.sugars;
        return (0, d.jsxs)('table', {
          children: [
            (0, d.jsxs)('thead', {
              children: [
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { scope: 'col', children: 'Name' }),
                    (0, d.jsx)('th', { scope: 'col', children: 'Mass (g)' }),
                    (0, d.jsx)('th', {
                      scope: 'col',
                      children: 'Proteins (g)',
                    }),
                    (0, d.jsx)('th', { scope: 'col', children: 'Fats (g)' }),
                    (0, d.jsx)('th', {
                      scope: 'col',
                      children: 'Carbohydrates (g)',
                    }),
                    (0, d.jsx)('th', { scope: 'col', children: 'Sugars (g)' }),
                  ],
                }),
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { scope: 'row', children: 'TOTAL' }),
                    (0, d.jsx)(i, { children: e }),
                    (0, d.jsx)(i, { children: h }),
                    (0, d.jsx)(i, { children: k }),
                    (0, d.jsx)(i, { children: l }),
                    (0, d.jsx)(i, { children: m }),
                  ],
                }),
              ],
            }),
            (0, d.jsx)('tbody', {
              children: b.map(function (a) {
                var b, c;
                return (0, g.createElement)(
                  j,
                  ((b = (0, f.Z)({}, a)),
                  (c = { key: a.product.name }),
                  (c = null != c ? c : {}),
                  Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        b,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : (function (a, b) {
                        var c = Object.keys(a);
                        if (Object.getOwnPropertySymbols) {
                          var d = Object.getOwnPropertySymbols(a);
                          c.push.apply(c, d);
                        }
                        return c;
                      })(Object(c)).forEach(function (a) {
                        Object.defineProperty(
                          b,
                          a,
                          Object.getOwnPropertyDescriptor(c, a)
                        );
                      }),
                  b)
                );
              }),
            }),
          ],
        });
      }
      function i(a) {
        var b = a.children;
        return (0, d.jsx)('th', {
          className: 'number',
          children: b.toFixed(1),
        });
      }
      function j(a) {
        var b = a.product,
          c = b.name,
          e = b.macros,
          f = e.proteinsPercentage,
          g = e.fatsPercentage,
          h = e.carbohydratesPercentage,
          i = e.sugarsPercentage,
          j = a.massInGrams;
        return (0, d.jsxs)('tr', {
          children: [
            (0, d.jsx)('th', { scope: 'row', children: c }),
            (0, d.jsx)(k, { children: j }),
            (0, d.jsx)(k, { children: (j * (void 0 === f ? 0 : f)) / 100 }),
            (0, d.jsx)(k, { children: (j * (void 0 === g ? 0 : g)) / 100 }),
            (0, d.jsx)(k, { children: (j * (void 0 === h ? 0 : h)) / 100 }),
            (0, d.jsx)(k, { children: (j * (void 0 === i ? 0 : i)) / 100 }),
          ],
        });
      }
      function k(a) {
        var b = a.children;
        return (0, d.jsx)('td', {
          className: 'number',
          children: b.toFixed(1),
        });
      }
      var l = {
          name: 'Banana',
          macros: {
            proteinsPercentage: 1.1,
            fatsPercentage: 0.3,
            carbohydratesPercentage: 20.2,
            sugarsPercentage: 12.2,
          },
        },
        m = {
          name: 'KFD WPC (Salted Carmel)',
          macros: {
            proteinsPercentage: 79,
            fatsPercentage: 4.5,
            carbohydratesPercentage: 3.8,
            sugarsPercentage: 2.2,
          },
        },
        n = {
          name: 'Millet Flakes',
          macros: {
            proteinsPercentage: 11,
            fatsPercentage: 1,
            carbohydratesPercentage: 65,
          },
        },
        o = c(5671);
      function p() {
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)('nav', {
              children: (0, d.jsx)(e.Z, { target: '/', children: 'Home' }),
            }),
            (0, d.jsx)(o.Z, {
              heading: 'Smoothie',
              children: (0, d.jsx)(h, {
                ingredients: [
                  { product: m, massInGrams: 30 },
                  { product: n, massInGrams: 80 },
                  { product: l, massInGrams: 120 },
                ],
              }),
            }),
          ],
        });
      }
    },
  },
  function (a) {
    a.O(0, [664, 774, 888, 179], function () {
      var b;
      return a((a.s = 9429));
    }),
      (_N_E = a.O());
  },
]);
