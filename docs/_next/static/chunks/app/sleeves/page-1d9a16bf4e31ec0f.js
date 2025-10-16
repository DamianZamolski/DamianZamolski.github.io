(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [376],
  {
    2091: (e, t, r) => {
      'use strict';
      r.d(t, { Breadcrumbs: () => c });
      var s = r(6700),
        a = r(580),
        n = r.n(a),
        l = r(1446);
      function c() {
        let e = (0, l.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((t, r) => {
                let a = '/' + e.slice(0, r + 1).join('/'),
                  l = t
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n(), { href: a, children: l }) },
                  a,
                );
              }),
            ],
          }),
        });
      }
    },
    3712: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { default: () => b }));
      var s = r(6700),
        a = r(4735),
        n = r(6931);
      let l = n
          .Ikc({ width: n.YjP(), height: n.YjP(), quantity: n.YjP() })
          .passthrough(),
        c = n.Ikc({ cardTypes: n.YOg(l) }).passthrough(),
        i = n.Ikc({ cardSets: n.YOg(c) }).passthrough();
      async function h(e) {
        let t = await fetch(
          'https://corsproxy.io/?url=https://api.geekdo.com/api/cardsetsbygame?objectid='.concat(
            e,
          ),
        );
        if (!t.ok) return {};
        let r = await t.json();
        return i.parse(r).cardSets[0].cardTypes.reduce((e, t) => {
          let { width: r, height: s, quantity: a } = t;
          return ((e[''.concat(r, ' - ').concat(s)] = parseInt(a, 10)), e);
        }, {});
      }
      async function d(e) {
        return (await Promise.all(e.map(h))).reduce(
          (e, t) => (
            Object.entries(t).forEach((t) => {
              var r;
              let [s, a] = t;
              e[s] = (null != (r = e[s]) ? r : 0) + a;
            }),
            e
          ),
          {},
        );
      }
      let u = /\d+/g;
      var o = r(7514),
        j = r(1677),
        p = r(7568);
      let x = (0, a.tG)('text', '');
      function b() {
        let [e, t] = (0, j.fp)(x),
          [r, a] = (0, p.useState)(!1),
          [n, l] = (0, p.useState)({}),
          c = async () => {
            a(!0);
            let t = Array.from(new Set(e.matchAll(u).map(String)));
            (l(await d(t)), a(!1));
          };
        return (0, s.jsxs)(o.Y, {
          title: 'Sleeves',
          children: [
            (0, s.jsxs)('form', {
              onSubmit: (e) => {
                (e.preventDefault(), c());
              },
              children: [
                (0, s.jsxs)('label', {
                  children: [
                    'BGG URLs',
                    (0, s.jsx)('textarea', {
                      onChange: (e) => t(e.target.value),
                      placeholder:
                        'Paste BGG URLs here. Separate them with spaces or enters.',
                      rows: e.split('\n').length + 2,
                      style: { resize: 'none' },
                      value: e,
                    }),
                  ],
                }),
                (0, s.jsx)('button', {
                  type: 'submit',
                  'aria-busy': r,
                  disabled: r,
                  children: 'Count sleeves',
                }),
              ],
            }),
            Object.keys(n).length > 0 &&
              (0, s.jsxs)('table', {
                children: [
                  (0, s.jsx)('thead', {
                    children: (0, s.jsxs)('tr', {
                      children: [
                        (0, s.jsx)('th', { children: 'Size' }),
                        (0, s.jsx)('th', { children: 'Quantity' }),
                      ],
                    }),
                  }),
                  (0, s.jsx)('tbody', {
                    children: Object.entries(n)
                      .sort()
                      .map((e) => {
                        let [t, r] = e;
                        return (0, s.jsxs)(
                          'tr',
                          {
                            children: [
                              (0, s.jsx)('td', { children: t }),
                              (0, s.jsx)('td', { children: r }),
                            ],
                          },
                          t,
                        );
                      }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    7514: (e, t, r) => {
      'use strict';
      r.d(t, { Y: () => n });
      var s = r(6700),
        a = r(2091);
      function n(e) {
        let { title: t, children: r } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(a.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: t }),
              ],
            }),
            r,
          ],
        });
      }
    },
    7723: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 3712));
    },
  },
  (e) => {
    (e.O(0, [924, 173, 709, 766, 358], () => e((e.s = 7723))), (_N_E = e.O()));
  },
]);
