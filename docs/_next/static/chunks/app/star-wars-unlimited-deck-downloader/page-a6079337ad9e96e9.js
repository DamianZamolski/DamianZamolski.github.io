(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    3481: (e, a, t) => {
      'use strict';
      t.d(a, { Y: () => s });
      var r = t(6814),
        l = t(9326);
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
    4680: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 9639));
    },
    9326: (e, a, t) => {
      'use strict';
      t.d(a, { Breadcrumbs: () => n });
      var r = t(6814),
        l = t(1235),
        s = t.n(l),
        i = t(2900);
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
    9639: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => f }));
      var r = t(6814),
        l = t(7750),
        s = t(1930),
        i = t(9976),
        n = t(3481),
        c = t(1044),
        o = t(2094),
        d = t(710);
      let p = (0, s.tG)('text', ''),
        h = l.A.create();
      h.interceptors.response.use(
        (e) => e,
        (e) => {
          console.error(e);
        },
      );
      let u = d.z.object({
          leader: d.z.object({ defaultImagePath: d.z.string() }),
          base: d.z.object({ defaultImagePath: d.z.string() }),
          shuffledDeck: d.z.array(
            d.z.object({
              card: d.z.object({ defaultImagePath: d.z.string() }),
            }),
          ),
        }),
        m = d.z.array(u);
      function f() {
        let [e, a] = (0, c.fp)(p),
          [t, l] = (0, o.useState)(!1),
          s = async () => {
            l(!0);
            let a = e.replaceAll('deck', 'api/deck').split(/\s+/),
              t = await Promise.all(
                a.map(async (e) =>
                  h.get('https://corsproxy.io/?url='.concat(e)),
                ),
              ),
              r = m.parse(t.map((e) => e.data)),
              s = r
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
                    h.get('https://corsproxy.io/?url='.concat(e), {
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
                ),
              c = r
                .flatMap((e) => [
                  ...e.shuffledDeck.map((e) => e.card.defaultImagePath),
                ])
                .map((e) => e.replace('~', 'https://swudb.com/images')),
              o = (function (e) {
                let a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 9,
                  t = [];
                for (let r = 0; r < e.length; r += a) t.push(e.slice(r, r + a));
                return t;
              })([
                ...n,
                ...(
                  await Promise.allSettled(
                    c.map((e) =>
                      h.get('https://corsproxy.io/?url='.concat(e), {
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
              ]),
              d = new i.uE(),
              p = (d.internal.pageSize.width - 186) / 2,
              u = (d.internal.pageSize.height - 264) / 2;
            d.setFillColor(0, 0, 0);
            for (let e = 0; e < o.length; e++) {
              let a = o[e];
              for (let e = 0; e < a.length; e++) {
                let t = a[e],
                  r = await (await fetch(t)).blob(),
                  l = await createImageBitmap(r),
                  s = l.width > l.height;
                l.close();
                let i = Math.floor(e / 3),
                  n = p + (e - 3 * i) * 62,
                  c = u + 88 * i;
                (d.rect(n, c, 62, 88, 'F'),
                  d.addImage({
                    imageData: t,
                    x: n + 62 * !!s,
                    y: c + 26 * !!s,
                    width: s ? 88 : 62,
                    height: s ? 62 : 88,
                    rotation: 90 * !!s,
                  }));
              }
              e < o.length - 1 && d.addPage();
            }
            (d.save('deck.pdf'), l(!1));
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
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [570, 46, 920, 871, 788, 97, 358], () => a(4680)), (_N_E = e.O()));
  },
]);
