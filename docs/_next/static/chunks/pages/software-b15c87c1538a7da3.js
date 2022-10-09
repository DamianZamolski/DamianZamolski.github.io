(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [206],
  {
    8370: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/software',
        function () {
          return c(2512);
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
    2512: function (a, b, c) {
      'use strict';
      c.r(b),
        c.d(b, {
          default: function () {
            return m;
          },
        });
      var d = c(5893),
        e = c(7433),
        f = c(3697),
        g = c(8100);
      function h(a) {
        var b = a.heading,
          c = a.children;
        return (0, d.jsx)('article', {
          children: (0, d.jsxs)(f.t, {
            children: [(0, d.jsx)(g.Z, { children: b }), c],
          }),
        });
      }
      function i() {
        return (0, d.jsx)('a', {
          href: 'https://archlinux.org',
          children: 'Arch Linux',
        });
      }
      function j() {
        return (0, d.jsx)('a', {
          href: 'https://www.zsh.org',
          children: 'Zsh',
        });
      }
      function k() {
        return (0, d.jsx)('a', {
          href: 'https://neovim.io',
          children: 'Neovim',
        });
      }
      function l() {
        return (0, d.jsx)('a', {
          href: 'https://git-scm.com',
          children: 'Git',
        });
      }
      function m() {
        return (0, d.jsx)(e.Z, {
          title: 'Software',
          children: (0, d.jsx)(h, {
            heading: 'Software',
            children: (0, d.jsxs)('table', {
              children: [
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { children: 'Operating System' }),
                    (0, d.jsx)('td', { children: (0, d.jsx)(i, {}) }),
                  ],
                }),
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { children: 'Shell' }),
                    (0, d.jsx)('td', { children: (0, d.jsx)(j, {}) }),
                  ],
                }),
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { children: 'Text Editor' }),
                    (0, d.jsx)('td', { children: (0, d.jsx)(k, {}) }),
                  ],
                }),
                (0, d.jsxs)('tr', {
                  children: [
                    (0, d.jsx)('th', { children: 'Version Control System' }),
                    (0, d.jsx)('td', { children: (0, d.jsx)(l, {}) }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    9008: function (a, b, c) {
      a.exports = c(5443);
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b;
      return a((a.s = 8370));
    }),
      (_N_E = a.O());
  },
]);
