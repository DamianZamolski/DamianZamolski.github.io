(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [736],
  {
    711: (e, r, l) => {
      Promise.resolve().then(l.bind(l, 9326));
    },
    9326: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => c });
      var s = l(6814),
        i = l(1235),
        n = l.n(i),
        a = l(2900);
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
    (e.O(0, [46, 788, 97, 358], () => r(711)), (_N_E = e.O()));
  },
]);
