(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [541, 970, 974],
  {
    8726: (e, r, l) => {
      Promise.resolve().then(l.t.bind(l, 1968, 23)),
        Promise.resolve().then(l.bind(l, 3831));
    },
    3831: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => c });
      var s = l(4884),
        i = l(1968),
        n = l.n(i),
        a = l(9269);
      function c() {
        let e = (0, a.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((r, l) => {
                let i = '/' + e.slice(0, l + 1).join('/'),
                  a = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n(), { href: i, children: a }) },
                  i,
                );
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [812, 449, 919, 358], () => r(8726)), (_N_E = e.O());
  },
]);
