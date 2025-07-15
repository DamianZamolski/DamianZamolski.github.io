(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    527: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => g }));
      var l = t(9605),
        r = t(247),
        s = t(2090),
        i = t(3456),
        n = t(5489),
        c = t(1012),
        d = t(9585),
        h = t(3545);
      let p = /https:\/\/swudb\.com\/deck\/\S+/g,
        o = (0, s.tG)('text', ''),
        u = r.A.create(),
        m = h.Ik({
          leader: h.Ik({ defaultImagePath: h.Yj() }),
          base: h.Ik({ defaultImagePath: h.Yj() }),
          shuffledDeck: h.YO(
            h.Ik({ card: h.Ik({ defaultImagePath: h.Yj() }) }),
          ),
        }),
        f = h.YO(m);
      function g() {
        let [e, a] = (0, c.fp)(o),
          [t, r] = (0, d.useState)(!1),
          s = async () => {
            var a;
            r(!0);
            let t = (null != (a = e.match(p)) ? a : []).map((e) =>
                e.replaceAll('deck', 'api/deck'),
              ),
              l = await Promise.all(
                t.map((e) => u.get('https://corsproxy.io/?url='.concat(e))),
              ),
              s = f.parse(l.map((e) => e.data)),
              n = s
                .flatMap((e) => [
                  e.leader.defaultImagePath,
                  e.leader.defaultImagePath.replace('.png', '-back.png'),
                  e.leader.defaultImagePath.replace('.png', '-portrait.png'),
                  e.base.defaultImagePath,
                ])
                .map((e) => e.replace('~', 'https://swudb.com/images')),
              c = (
                await Promise.allSettled(
                  n.map((e) =>
                    u.get('https://corsproxy.io/?url='.concat(e), {
                      responseType: 'arraybuffer',
                    }),
                  ),
                )
              )
                .filter((e) => 'fulfilled' === e.status)
                .map((e) => e.value.data),
              d = s
                .flatMap((e) => e.shuffledDeck)
                .map((e) => e.card.defaultImagePath)
                .map((e) => e.replace('~', 'https://swudb.com/images')),
              h = (function (e) {
                let a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 9,
                  t = [];
                for (let l = 0; l < e.length; l += a) t.push(e.slice(l, l + a));
                return t;
              })([
                ...c,
                ...(
                  await Promise.allSettled(
                    d.map((e) =>
                      u.get('https://corsproxy.io/?url='.concat(e), {
                        responseType: 'arraybuffer',
                      }),
                    ),
                  )
                )
                  .filter((e) => 'fulfilled' === e.status)
                  .map((e) => e.value.data)
                  .flatMap((e) => [e, e, e]),
              ]),
              o = new i.uE(),
              m = (o.internal.pageSize.width - 186) / 2,
              g = (o.internal.pageSize.height - 264) / 2;
            o.setFillColor(0, 0, 0);
            for (let e = 0; e < h.length; e++) {
              let a = h[e];
              for (let e = 0; e < a.length; e++) {
                let t = a[e],
                  l = new Blob([t], { type: 'image/png' }),
                  r = !1;
                try {
                  let e = await createImageBitmap(l);
                  r = e.width > e.height;
                } catch (e) {
                  console.error('invalid image', { image: new Uint8Array(t) });
                  continue;
                }
                let s = Math.floor(e / 3),
                  i = m + (e - 3 * s) * 62,
                  n = g + 88 * s;
                (o.rect(i, n, 62, 88, 'F'),
                  o.addImage({
                    imageData: new Uint8Array(t),
                    x: i + 62 * !!r,
                    y: n + 26 * !!r,
                    width: r ? 88 : 62,
                    height: r ? 62 : 88,
                    rotation: 90 * !!r,
                  }));
              }
              e < h.length - 1 && o.addPage();
            }
            (o.save('deck.pdf'), r(!1));
          };
        return (0, l.jsx)(n.Y, {
          title: 'Star Wars: Unlimited Deck Downloader',
          children: (0, l.jsxs)('form', {
            onSubmit: (e) => {
              (e.preventDefault(), s());
            },
            children: [
              (0, l.jsxs)('label', {
                children: [
                  'SWUDB URLs',
                  (0, l.jsx)('textarea', {
                    onChange: (e) => a(e.target.value),
                    placeholder:
                      'Paste SWUDB URLs here. Separate them with spaces or enters.',
                    rows: e.split('\n').length + 2,
                    style: { resize: 'none' },
                    value: e,
                  }),
                ],
              }),
              (0, l.jsx)('button', {
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
      var l = t(9605),
        r = t(6762),
        s = t.n(r),
        i = t(5935);
      function n() {
        let e = (0, i.usePathname)().split('/').slice(0, -1).filter(Boolean);
        return (0, l.jsx)('nav', {
          'aria-label': 'breadcrumb',
          children: (0, l.jsxs)('ul', {
            children: [
              (0, l.jsx)('li', {
                children: (0, l.jsx)(s(), { href: '/', children: 'Home' }),
              }),
              e.map((a, t) => {
                let r = '/' + e.slice(0, t + 1).join('/'),
                  i = a
                    .replace(/-/g, ' ')
                    .trim()
                    .replace(/\b\w/g, (e) => e.toUpperCase());
                return (0, l.jsx)(
                  'li',
                  { children: (0, l.jsx)(s(), { href: r, children: i }) },
                  r,
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
      var l = t(9605),
        r = t(1910);
      function s(e) {
        let { title: a, children: t } = e;
        return (0, l.jsxs)('main', {
          children: [
            (0, l.jsxs)('header', {
              children: [
                (0, l.jsx)(r.Breadcrumbs, {}),
                (0, l.jsx)('h1', { children: a }),
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
