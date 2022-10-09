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
    8100: function (a, b, c) {
      'use strict';
      c.d(b, {
        Z: function () {
          return f;
        },
      });
      var d = c(5893),
        e = c(2374);
      function f(a) {
        var b = a.children,
          c = (0, e.Z)(),
          f = 'h'.concat(c);
        return (0, d.jsx)(f, { children: b });
      }
    },
    3147: function (a, b, c) {
      'use strict';
      var d = c(7294);
      b.Z = (0, d.createContext)(0);
    },
    3697: function (a, b, c) {
      'use strict';
      c.d(b, {
        t: function () {
          return h;
        },
      });
      var d = c(5893),
        e = c(3147);
      function f(a) {
        var b = a.level,
          c = a.children;
        return (0, d.jsx)(e.Z.Provider, { value: b, children: c });
      }
      var g = c(2374);
      function h(a) {
        var b = a.children,
          c = (0, g.Z)() + 1;
        return (0, d.jsx)(f, { level: c, children: b });
      }
    },
    2374: function (a, b, c) {
      'use strict';
      c.d(b, {
        Z: function () {
          return f;
        },
      });
      var d = c(7294),
        e = c(3147);
      function f() {
        return (0, d.useContext)(e.Z);
      }
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
    7433: function (a, b, c) {
      'use strict';
      c.d(b, {
        Z: function () {
          return i;
        },
      });
      var d = c(5893),
        e = c(3697),
        f = c(9008),
        g = c.n(f);
      function h(a) {
        var b = a.title;
        return (0, d.jsx)(g(), {
          children: (0, d.jsx)('title', { children: b }),
        });
      }
      function i(a) {
        var b = a.title,
          c = a.children;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(h, { title: b }),
            (0, d.jsx)(e.t, { children: c }),
          ],
        });
      }
    },
    441: function (a, b, c) {
      'use strict';
      c.r(b),
        c.d(b, {
          default: function () {
            return h;
          },
        });
      var d = c(5893),
        e = c(7433),
        f = c(8100),
        g = c(1508);
      function h() {
        return (0, d.jsxs)(e.Z, {
          title: 'Damian Zamolski',
          children: [
            (0, d.jsx)(f.Z, { children: 'Damian Zamolski' }),
            (0, d.jsx)('nav', {
              children: (0, d.jsxs)('ul', {
                children: [
                  (0, d.jsx)('li', {
                    children: (0, d.jsx)(g.Z, {
                      target: 'software',
                      children: 'Software',
                    }),
                  }),
                  (0, d.jsx)('li', {
                    children: (0, d.jsx)(g.Z, {
                      target: 'grooming',
                      children: 'Grooming',
                    }),
                  }),
                  (0, d.jsx)('li', {
                    children: (0, d.jsx)(g.Z, {
                      target: 'smoothie',
                      children: 'Smoothie',
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9008: function (a, b, c) {
      a.exports = c(5443);
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
