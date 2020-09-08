;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    G3Xh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        r = n.n(a),
        u = n('xKBe'),
        l = n('UZXO'),
        c = function (e) {
          var t = e.label,
            n = e.onChange,
            a = e.value
          return r.a.createElement(
            'label',
            null,
            t,
            r.a.createElement('input', {
              onChange: n,
              type: 'number',
              min: 0,
              max: 99,
              value: a,
            })
          )
        },
        o = function (e, t) {
          var n = Object(a.useState)(0),
            r = n[0],
            u = n[1]
          return [
            r,
            Object(a.useCallback)(
              function (n) {
                var a = n.target.value
                return u(a < e ? a : a > t ? t : a)
              },
              [u]
            ),
          ]
        }
      t.default = function () {
        var e = o(0, 200),
          t = e[0],
          n = e[1],
          m = o(0, 100),
          i = m[0],
          s = m[1],
          b = o(),
          E = b[0],
          g = b[1],
          M = Object(a.useMemo)(
            function () {
              return t * (1 - i / 100)
            },
            [i, t]
          ),
          F = Object(a.useMemo)(
            function () {
              return M.toFixed(1)
            },
            [M]
          ),
          d = Object(a.useMemo)(
            function () {
              return 370 + 21.6 * M
            },
            [M]
          ),
          f = Object(a.useMemo)(
            function () {
              return d.toFixed(0)
            },
            [d]
          ),
          B = Object(a.useMemo)(
            function () {
              return d * (1.2 + 0.35 * E)
            },
            [d, E]
          ),
          O = Object(a.useMemo)(
            function () {
              return B.toFixed(0)
            },
            [B]
          ),
          j = Object(a.useMemo)(
            function () {
              return (2.5 * M).toFixed(0)
            },
            [M]
          ),
          v = Object(a.useMemo)(
            function () {
              return ((B - 4 * j) / 18).toFixed(0)
            },
            [B, j]
          ),
          x = Object(a.useMemo)(
            function () {
              return ((B - 4 * j) / 8).toFixed(0)
            },
            [B, j]
          )
        return r.a.createElement(
          u.a,
          { title: 'Macronutrients' },
          r.a.createElement(l.a, {
            items: [
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(c, {
                  label: 'Body Mass (BM) ≈',
                  onChange: n,
                  value: t,
                }),
                'kg'
              ),
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(c, {
                  label: 'Body Fat (BF) ≈',
                  onChange: s,
                  value: i,
                }),
                '%'
              ),
              r.a.createElement(c, {
                label: 'Exercise Time (ET) ≈',
                onChange: g,
                value: E,
              }),
              r.a.createElement(
                r.a.Fragment,
                null,
                'Lean Body Mass (LBM) ≈ BM * (1 - BF / 100) ≈ ',
                F
              ),
              r.a.createElement(
                r.a.Fragment,
                null,
                'Basal Metabolic Rate (BMR) ≈ 370 + 21.6 * LBM ≈',
                ' ',
                f,
                'kcal'
              ),
              r.a.createElement(
                r.a.Fragment,
                null,
                'Total Daily Energy Expenditure (TDEE) ≈ BMR * (1.2 + ET * 0.35) ≈',
                ' ',
                O,
                'kcal'
              ),
              r.a.createElement(r.a.Fragment, null, 'Proteins ≈ ', j, 'g'),
              r.a.createElement(r.a.Fragment, null, 'Fats ≈ ', v, 'g'),
              r.a.createElement(r.a.Fragment, null, 'Carbohydrates ≈ ', x, 'g'),
            ],
            ordered: !0,
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-macronutrients-js-34c893c33f2a7f989e7d.js.map
