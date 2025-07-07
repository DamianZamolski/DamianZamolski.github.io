(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    527: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => b }));
      var r = t(9605),
        l = t(247),
        s = t(2090),
        i = t(3456),
        n = t(5489),
        c = t(1012),
        d = t(9585),
        o = t(3545),
        h = t(4105).Buffer;
      let p = /https:\/\/swudb\.com\/deck\/\S+/g,
        u = (0, s.tG)('text', ''),
        m = l.A.create(),
        f = o.Ik({
          leader: o.Ik({ defaultImagePath: o.Yj() }),
          base: o.Ik({ defaultImagePath: o.Yj() }),
          shuffledDeck: o.YO(
            o.Ik({ card: o.Ik({ defaultImagePath: o.Yj() }) }),
          ),
        }),
        g = o.YO(f);
      function b() {
        let [e, a] = (0, c.fp)(u),
          [t, l] = (0, d.useState)(!1),
          s = async () => {
            l(!0);
            try {
              var a;
              let t = (null != (a = e.match(p)) ? a : []).map((e) =>
                  e.replaceAll('deck', 'api/deck'),
                ),
                r = await Promise.all(
                  t.map(async (e) =>
                    m.get('https://corsproxy.io/?url='.concat(e)),
                  ),
                ),
                l = g.parse(r.map((e) => e.data)),
                s = l
                  .flatMap((e) => [
                    e.leader.defaultImagePath,
                    e.leader.defaultImagePath.replace('.png', '-back.png'),
                    e.leader.defaultImagePath.replace('.png', '-portrait.png'),
                    e.base.defaultImagePath,
                  ])
                  .map((e) => e.replace('~', 'https://swudb.com/images')),
                n = (
                  await Promise.allSettled(
                    s.map((e) =>
                      m.get('https://corsproxy.io/?url='.concat(e), {
                        responseType: 'arraybuffer',
                      }),
                    ),
                  )
                )
                  .filter((e) => 'fulfilled' === e.status)
                  .map((e) => e.value.data)
                  .map((e) =>
                    'data:image/png;base64,'.concat(
                      h.from(e).toString('base64'),
                    ),
                  ),
                c = l
                  .flatMap((e) => [
                    ...e.shuffledDeck.map((e) => e.card.defaultImagePath),
                  ])
                  .map((e) => e.replace('~', 'https://swudb.com/images')),
                d = (
                  await Promise.allSettled(
                    c.map((e) =>
                      m.get('https://corsproxy.io/?url='.concat(e), {
                        responseType: 'arraybuffer',
                      }),
                    ),
                  )
                )
                  .filter((e) => 'fulfilled' === e.status)
                  .map((e) => e.value.data)
                  .map((e) =>
                    'data:image/png;base64,'.concat(
                      btoa(
                        new Uint8Array(e).reduce(
                          (e, a) => e + String.fromCharCode(a),
                          '',
                        ),
                      ),
                    ),
                  )
                  .flatMap((e) => [e, e, e]),
                o = [...n, ...d],
                u = (function (e) {
                  let a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 9,
                    t = [];
                  for (let r = 0; r < e.length; r += a)
                    t.push(e.slice(r, r + a));
                  return t;
                })(o),
                f = new i.uE(),
                b = (f.internal.pageSize.width - 186) / 2,
                w = (f.internal.pageSize.height - 264) / 2;
              f.setFillColor(0, 0, 0);
              for (let e = 0; e < u.length; e++) {
                let a = u[e];
                for (let e = 0; e < a.length; e++) {
                  let t = a[e];
                  console.debug(t);
                  let r = await (await fetch(t)).blob(),
                    l = await createImageBitmap(r),
                    s = l.width > l.height;
                  l.close();
                  let i = Math.floor(e / 3),
                    n = e - 3 * i,
                    c = b + 62 * n,
                    d = w + 88 * i;
                  (f.rect(c, d, 62, 88, 'F'),
                    f.addImage({
                      imageData: t,
                      x: c + 62 * !!s,
                      y: d + 26 * !!s,
                      width: s ? 88 : 62,
                      height: s ? 62 : 88,
                      rotation: 90 * !!s,
                    }));
                }
                e < u.length - 1 && f.addPage();
              }
              f.save('deck.pdf');
            } catch (e) {
              console.error(e);
            }
            l(!1);
          };
        return (0, r.jsx)(n.Y, {
          title: 'Star Wars: Unlimited Deck Downloader',
          children: (0, r.jsxs)('form', {
            onSubmit: (e) => {
              (e.preventDefault(), s());
            },
            children: [
              (0, r.jsxs)('label', {
                children: [
                  'SWUDB URLs',
                  (0, r.jsx)('textarea', {
                    onChange: (e) => a(e.target.value),
                    placeholder:
                      'Paste SWUDB URLs here. Separate them with spaces or enters.',
                    rows: e.split('\n').length + 2,
                    style: { resize: 'none' },
                    value: e,
                  }),
                ],
              }),
              (0, r.jsx)('button', {
                type: 'submit',
                'aria-busy': t,
                disabled: t,
                children: 'Download',
              }),
            ],
          }),
        });
      }
    },
    1910: (e, a, t) => {
      'use strict';
      t.d(a, { Breadcrumbs: () => n });
      var r = t(9605),
        l = t(6762),
        s = t.n(l),
        i = t(5935);
      function n() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, r.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, r.jsxs)('ul', {
            children: [
              (0, r.jsx)('li', {
                children: (0, r.jsx)(s(), { href: '/', children: 'Home' }),
              }),
              e.map((a, t) => {
                let l = '/' + e.slice(0, t + 1).join('/'),
                  i = a
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, r.jsx)(
                  'li',
                  { children: (0, r.jsx)(s(), { href: l, children: i }) },
                  l,
                );
              }),
            ],
          }),
        });
      }
    },
    5489: (e, a, t) => {
      'use strict';
      t.d(a, { Y: () => s });
      var r = t(9605),
        l = t(1910);
      function s(e) {
        let { title: a, children: t } = e;
        return (0, r.jsxs)('main', {
          children: [
            (0, r.jsxs)('header', {
              children: [
                (0, r.jsx)(l.Breadcrumbs, {}),
                (0, r.jsx)('h1', { children: a }),
              ],
            }),
            t,
          ],
        });
      }
    },
    7221: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 527));
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [570, 436, 851, 46, 390, 110, 358], () => a(7221)), (_N_E = e.O()));
  },
]);
