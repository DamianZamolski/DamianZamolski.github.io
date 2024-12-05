(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [541, 970, 974],
  {
    2737: (e, r, l) => {
      Promise.resolve().then(l.t.bind(l, 2190, 23)),
        Promise.resolve().then(l.bind(l, 7691));
    },
    7691: (e, r, l) => {
      'use strict';
      l.d(r, { Breadcrumbs: () => a });
      var s = l(632),
        i = l(715),
        n = l(641);
      function a() {
        let e = (0, n.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(i.default, {
                  href: '/',
                  children: 'Home',
                }),
              }),
              e.map((r, l) => {
                let n = '/' + e.slice(0, l + 1).join('/'),
                  a = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(i.default, { href: n, children: a }) },
                  n,
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
    e.O(0, [63, 15, 723, 358], () => r(2737)), (_N_E = e.O());
  },
]);
