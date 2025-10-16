(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5],
  {
    1684: (e, r, t) => {
      'use strict';
      (t.r(r), t.d(r, { default: () => u }));
      var s = t(6700),
        l = t(7514),
        n = t(2530),
        i = t(7568),
        a = t(8552),
        c = t.n(a);
      function u() {
        let [e, r] = (0, i.useState)(''),
          [t, a] = (0, i.useState)(2),
          [u, h] = (0, i.useState)([]),
          d = (0, i.useCallback)((e) => {
            r(e.target.value);
          }, []),
          o = e.split('\n');
        return (0, s.jsxs)(l.Y, {
          title: 'Teams Randomizer',
          children: [
            (0, s.jsxs)('form', {
              onSubmit: (e) => {
                (e.preventDefault(),
                  h(
                    (function (e, r) {
                      let t = e.flatMap(n.R),
                        s = [];
                      for (; t.length > 0; ) {
                        for (let e = 0; e < r; e++) {
                          let r = t.shift();
                          if (!r) break;
                          (s[e] || (s[e] = []), s[e].push(r));
                        }
                        t.reverse();
                      }
                      return s;
                    })(
                      o
                        .map((e) => e.trim())
                        .filter(Boolean)
                        .map((e) => e.split(/\s+/)),
                      t,
                    ),
                  ));
              },
              children: [
                (0, s.jsx)('textarea', {
                  onChange: d,
                  rows: o.length + 1,
                  className: c().noResize,
                }),
                (0, s.jsx)('button', { type: 'submit', children: 'Randomize' }),
              ],
            }),
            u.length > 0 &&
              u.map((e, r) =>
                (0, s.jsxs)(
                  'div',
                  {
                    children: [
                      (0, s.jsxs)('div', { children: ['Team ', r] }),
                      e.map((e, r) => (0, s.jsx)('div', { children: e }, r)),
                    ],
                  },
                  r,
                ),
              ),
          ],
        });
      }
    },
    2091: (e, r, t) => {
      'use strict';
      t.d(r, { Breadcrumbs: () => a });
      var s = t(6700),
        l = t(580),
        n = t.n(l),
        i = t(1446);
      function a() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, s.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, s.jsxs)('ul', {
            children: [
              (0, s.jsx)('li', {
                children: (0, s.jsx)(n(), { href: '/', children: 'Home' }),
              }),
              e.map((r, t) => {
                let l = '/' + e.slice(0, t + 1).join('/'),
                  i = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, s.jsx)(
                  'li',
                  { children: (0, s.jsx)(n(), { href: l, children: i }) },
                  l,
                );
              }),
            ],
          }),
        });
      }
    },
    2530: (e, r, t) => {
      'use strict';
      function s(e) {
        let r = e.slice();
        for (let e = r.length - 1; e > 0; e--) {
          let t = Math.floor(Math.random() * (e + 1));
          [r[e], r[t]] = [r[t], r[e]];
        }
        return r;
      }
      t.d(r, { R: () => s });
    },
    3590: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 1684));
    },
    7514: (e, r, t) => {
      'use strict';
      t.d(r, { Y: () => n });
      var s = t(6700),
        l = t(2091);
      function n(e) {
        let { title: r, children: t } = e;
        return (0, s.jsxs)('main', {
          children: [
            (0, s.jsxs)('header', {
              children: [
                (0, s.jsx)(l.Breadcrumbs, {}),
                (0, s.jsx)('h1', { children: r }),
              ],
            }),
            t,
          ],
        });
      }
    },
    8552: (e) => {
      e.exports = { noResize: 'styles_noResize__y__8i' };
    },
  },
  (e) => {
    (e.O(0, [789, 924, 709, 766, 358], () => e((e.s = 3590))), (_N_E = e.O()));
  },
]);
