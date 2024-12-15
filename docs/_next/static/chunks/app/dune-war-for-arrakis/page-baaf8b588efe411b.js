(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [366],
  {
    1833: (e, r, n) => {
      Promise.resolve().then(n.bind(n, 8715));
    },
    8715: (e, r, n) => {
      'use strict';
      n.r(r), n.d(r, { default: () => l });
      var t = n(632),
        a = n(7691),
        s = n(5268);
      function l() {
        let [e, r] = (0, s.useState)(0),
          [n, l] = (0, s.useState)(0),
          [d, c] = (0, s.useState)(0),
          [i, h] = (0, s.useState)(0),
          [u, o] = (0, s.useState)(0),
          [j, x] = (0, s.useState)(0),
          m = (0, s.useCallback)(
            (e) => (r) => {
              e(Number(r.target.value));
            },
            [],
          );
        return (0, t.jsxs)('main', {
          children: [
            (0, t.jsxs)('header', {
              children: [
                (0, t.jsx)(a.Breadcrumbs, {}),
                (0, t.jsx)('h1', { children: 'Battle Setup' }),
              ],
            }),
            (0, t.jsxs)('form', {
              children: [
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Attacker Units' }),
                    Array.from({ length: 7 }, (e, r) => r).map((n) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'attacker-units-'.concat(n),
                              type: 'radio',
                              value: n,
                              checked: e === n,
                              onChange: m(r),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'attacker-units-'.concat(n),
                              children: n,
                            }),
                          ],
                        },
                        n,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Attacker Super Units' }),
                    Array.from({ length: 7 }, (e, r) => r).map((e) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'attacker-super-units-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: n === e,
                              onChange: m(l),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'attacker-super-units-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Attacker Leaders' }),
                    Array.from({ length: 11 }, (e, r) => r).map((e) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'attacker-leaders-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: d === e,
                              onChange: m(c),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'attacker-leaders-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Defender Units' }),
                    Array.from({ length: 7 }, (e, r) => r).map((e) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'defender-units-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: i === e,
                              onChange: m(h),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'defender-units-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Defender Super Units' }),
                    Array.from({ length: 7 }, (e, r) => r).map((e) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'defender-super-units-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: u === e,
                              onChange: m(o),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'defender-super-units-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)('fieldset', {
                  children: [
                    (0, t.jsx)('legend', { children: 'Defender Leaders' }),
                    Array.from({ length: 11 }, (e, r) => r).map((e) =>
                      (0, t.jsxs)(
                        s.Fragment,
                        {
                          children: [
                            (0, t.jsx)('input', {
                              id: 'defender-leaders-'.concat(e),
                              type: 'radio',
                              value: e,
                              checked: j === e,
                              onChange: m(x),
                            }),
                            (0, t.jsx)('label', {
                              htmlFor: 'defender-leaders-'.concat(e),
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    7691: (e, r, n) => {
      'use strict';
      n.d(r, { Breadcrumbs: () => l });
      var t = n(632),
        a = n(715),
        s = n(641);
      function l() {
        let e = (0, s.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, t.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, t.jsxs)('ul', {
            children: [
              (0, t.jsx)('li', {
                children: (0, t.jsx)(a.default, {
                  href: '/',
                  children: 'Home',
                }),
              }),
              e.map((r, n) => {
                let s = '/' + e.slice(0, n + 1).join('/'),
                  l = r
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, t.jsx)(
                  'li',
                  { children: (0, t.jsx)(a.default, { href: s, children: l }) },
                  s,
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
    e.O(0, [63, 15, 723, 358], () => r(1833)), (_N_E = e.O());
  },
]);
