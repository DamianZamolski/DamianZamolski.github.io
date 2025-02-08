(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [541, 970, 974],
  {
    2656: (e, r, l) => {
      Promise.resolve().then(l.t.bind(l, 8001, 23)),
        Promise.resolve().then(l.bind(l, 8219));
    },
    8219: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => c });
      var s = l(1047),
        i = l(8001),
        n = l.n(i),
        a = l(210);
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
    e.O(0, [254, 721, 59, 358], () => r(2656)), (_N_E = e.O());
  },
]);
