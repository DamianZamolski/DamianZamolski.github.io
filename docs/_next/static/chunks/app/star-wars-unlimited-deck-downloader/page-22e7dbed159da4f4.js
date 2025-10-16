(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [233],
  {
    334: (e, a, t) => {
      'use strict';
      (t.r(a), t.d(a, { default: () => g }));
      var r = t(6700),
        l = t(4440),
        s = t(4735),
        i = t(3039),
        n = t(7514),
        c = t(1677),
        d = t(7568),
        h = t(6931);
      let p = /https:\/\/swudb\.com\/deck\/\S+/g,
        o = (0, s.tG)('text', ''),
        u = l.A.create(),
        m = h.Ikc({
          leader: h.Ikc({ defaultImagePath: h.YjP() }),
          base: h.Ikc({ defaultImagePath: h.YjP() }),
          shuffledDeck: h.YOg(
            h.Ikc({ card: h.Ikc({ defaultImagePath: h.YjP() }) }),
          ),
        }),
        f = h.YOg(m);
      function g() {
        let [e, a] = (0, c.fp)(o),
          [t, l] = (0, d.useState)(!1),
          s = async () => {
            var a;
            l(!0);
            let t = (null != (a = e.match(p)) ? a : []).map((e) =>
                e.replaceAll('deck', 'api/deck'),
              ),
              r = await Promise.all(
                t.map((e) => u.get('https://corsproxy.io/?url='.concat(e))),
              ),
              s = f.parse(r.map((e) => e.data)),
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
                for (let r = 0; r < e.length; r += a) t.push(e.slice(r, r + a));
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
                  r = new Blob([t], { type: 'image/png' }),
                  l = !1;
                try {
                  let e = await createImageBitmap(r);
                  l = e.width > e.height;
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
                    x: i + 62 * !!l,
                    y: n + 26 * !!l,
                    width: l ? 88 : 62,
                    height: l ? 62 : 88,
                    rotation: 90 * !!l,
                  }));
              }
              e < h.length - 1 && o.addPage();
            }
            (o.save('deck.pdf'), l(!1));
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
    2091: (e, a, t) => {
      'use strict';
      t.d(a, { Breadcrumbs: () => n });
      var r = t(6700),
        l = t(580),
        s = t.n(l),
        i = t(1446);
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
    3780: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 334));
    },
    7514: (e, a, t) => {
      'use strict';
      t.d(a, { Y: () => s });
      var r = t(6700),
        l = t(2091);
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
  },
  (e) => {
    (e.O(0, [346, 951, 924, 173, 98, 709, 766, 358], () => e((e.s = 3780))),
      (_N_E = e.O()));
  },
]);
