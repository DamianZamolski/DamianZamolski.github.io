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
        l = r(7714);
      let i = l.z
          .object({
            width: l.z.string(),
            height: l.z.string(),
            quantity: l.z.string(),
          })
          .passthrough(),
        c = l.z.object({ cardTypes: l.z.array(i) }).passthrough(),
        h = l.z.object({ cardSets: l.z.array(c) }).passthrough();
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
        p = r(6672);
      let j = (0, u.KU)(() => localStorage),
        x = (0, u.tG)('text', '', j);
      function b() {
        let [e, t] = (0, p.fp)(x),
          [r, l] = (0, a.useState)({}),
          i = async () => {
            let t = Array.from(
              new Set(
                e
                  .split('\n')
                  .flatMap((e) => e.split(/\s+/))
                  .map((e) => {
                    var t;
                    return null === (t = /\d+/.exec(e)) || void 0 === t
                      ? void 0
                      : t[0];
                  })
                  .filter(Boolean),
              ),
            );
            l(await o(t));
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
                e.preventDefault(), i();
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
      r.d(t, { Breadcrumbs: () => i });
      var s = r(1047),
        a = r(8001),
        n = r.n(a),
        l = r(210);
      function i() {
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [254, 428, 721, 59, 358], () => t(5224)), (_N_E = e.O());
  },
]);
