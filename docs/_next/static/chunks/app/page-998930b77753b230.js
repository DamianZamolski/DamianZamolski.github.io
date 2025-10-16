(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2091: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => c });
      var s = l(6700),
        i = l(580),
        n = l.n(i),
        a = l(1446);
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
    4966: (e, r, l) => {
      (Promise.resolve().then(l.t.bind(l, 580, 23)),
        Promise.resolve().then(l.bind(l, 2091)));
    },
  },
  (e) => {
    (e.O(0, [924, 709, 766, 358], () => e((e.s = 4966))), (_N_E = e.O()));
  },
]);
