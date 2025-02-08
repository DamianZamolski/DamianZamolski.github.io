(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [376],
  {
    5224: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 8464));
    },
    8464: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => b });
      var s = r(1047),
        a = r(6847),
        n = r(8219),
        i = r(7714);
      let l = i.z
          .object({
            width: i.z.string(),
            height: i.z.string(),
            quantity: i.z.string(),
          })
          .passthrough(),
        c = i.z.object({ cardTypes: i.z.array(l) }).passthrough(),
        h = i.z.object({ cardSets: i.z.array(c) }).passthrough();
      async function d(e) {
        let t = await fetch(
          'https://corsproxy.io/?url=https://api.geekdo.com/api/cardsetsbygame?objectid='.concat(
            e,
          ),
        );
        if (!t.ok) return {};
        let r = await t.json();
        return h.parse(r).cardSets[0].cardTypes.reduce((e, t) => {
          let { width: r, height: s, quantity: a } = t;
          return (e[''.concat(r, ' - ').concat(s)] = parseInt(a, 10)), e;
        }, {});
      }
      async function o(e) {
        return (await Promise.all(e.map(d))).reduce(
          (e, t) => (
            Object.entries(t).forEach((t) => {
              var r;
              let [s, a] = t;
              e[s] = (null !== (r = e[s]) && void 0 !== r ? r : 0) + a;
            }),
            e
          ),
          {},
        );
      }
      var u = r(8886),
        j = r(6672);
      let p = (0, u.KU)(() => sessionStorage),
        x = (0, u.tG)('text', '', p);
      function b() {
        let [e, t] = (0, j.fp)(x),
          [r, i] = (0, a.useState)({}),
          l = async () => {
            let t = Array.from(
              new Set(
                e
                  .split('\n')
                  .map((e) => {
                    var t;
                    return null === (t = /\d+/.exec(e)) || void 0 === t
                      ? void 0
                      : t[0];
                  })
                  .filter(Boolean),
              ),
            );
            i(await o(t));
          };
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(n.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: 'Sleeves' }),
              ],
            }),
            (0, s.jsxs)('form', {
              onSubmit: (e) => {
                e.preventDefault(), l();
              },
              children: [
                (0, s.jsxs)('label', {
                  children: [
                    'Games',
                    (0, s.jsx)('textarea', {
                      style: { resize: 'none' },
                      rows: e.split('\n').length + 2,
                      value: e,
                      onChange: (e) => t(e.target.value),
                    }),
                  ],
                }),
                (0, s.jsx)('input', { type: 'submit', value: 'Fetch' }),
              ],
            }),
            Object.keys(r).length > 0 &&
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
                    children: Object.entries(r)
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
    8219: (e, t, r) => {
      'use strict';
      r.d(t, { Breadcrumbs: () => l });
      var s = r(1047),
        a = r(8001),
        n = r.n(a),
        i = r(210);
      function l() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((t, r) => {
                let a = '/' + e.slice(0, r + 1).join('/'),
                  i = t
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n(), { href: a, children: i }) },
                  a,
                );
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [254, 428, 721, 59, 358], () => t(5224)), (_N_E = e.O());
  },
]);
