(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return c(441);
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
    441: function (a, b, c) {
      'use strict';
      c.r(b),
        c.d(b, {
          default: function () {
            return g;
          },
        });
      var d = c(5893),
        e = c(1508),
        f = c(5671);
      function g() {
        return (0, d.jsx)(f.Z, {
          heading: 'Damian Zamolski',
          children: (0, d.jsx)('nav', {
            children: (0, d.jsx)('ul', {
              children: (0, d.jsx)('li', {
                children: (0, d.jsx)(e.Z, {
                  target: 'smoothie',
                  children: 'Smoothie',
                }),
              }),
            }),
          }),
        });
      }
    },
  },
  function (a) {
    a.O(0, [664, 774, 888, 179], function () {
      var b;
      return a((a.s = 8312));
    }),
      (_N_E = a.O());
  },
]);
