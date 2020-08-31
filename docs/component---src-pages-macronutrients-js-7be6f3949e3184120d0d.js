;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    G3Xh: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        l = n.n(a),
        u = n('xKBe'),
        r = function (e) {
          var t = e.label,
            n = e.onChange,
            a = e.value
          return l.a.createElement(
            'label',
            null,
            t,
            l.a.createElement('input', {
              onChange: n,
              type: 'number',
              min: 0,
              max: 99,
              value: a,
            })
          )
        },
        c = function (e, t) {
          var n = Object(a.useState)(0),
            l = n[0],
            u = n[1]
          return [
            l,
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
        var e = c(0, 200),
          t = e[0],
          n = e[1],
          o = c(0, 100),
          i = o[0],
          m = o[1],
          s = c(),
          E = s[0],
          b = s[1],
          M = Object(a.useMemo)(
            function () {
              return t * (1 - i / 100)
            },
            [i, t]
          ),
          d = Object(a.useMemo)(
            function () {
              return M.toFixed(1)
            },
            [M]
          ),
          f = Object(a.useMemo)(
            function () {
              return 370 + 21.6 * M
            },
            [M]
          ),
          B = Object(a.useMemo)(
            function () {
              return f.toFixed(0)
            },
            [f]
          ),
          g = Object(a.useMemo)(
            function () {
              return f * (1.2 + 0.35 * E)
            },
            [f, E]
          ),
          j = Object(a.useMemo)(
            function () {
              return g.toFixed(0)
            },
            [g]
          ),
          v = Object(a.useMemo)(
            function () {
              return (2.5 * M).toFixed(0)
            },
            [M]
          ),
          O = Object(a.useMemo)(
            function () {
              return ((g - 4 * v) / 18).toFixed(0)
            },
            [g, v]
          ),
          x = Object(a.useMemo)(
            function () {
              return ((g - 4 * v) / 8).toFixed(0)
            },
            [g, v]
          )
        return l.a.createElement(
          u.a,
          { title: 'Macronutrients' },
          l.a.createElement(
            'ol',
            { style: { paddingLeft: '1em' } },
            l.a.createElement(
              'li',
              null,
              l.a.createElement(r, {
                label: 'Body Mass (BM) ≈',
                onChange: n,
                value: t,
              }),
              'kg'
            ),
            l.a.createElement(
              'li',
              null,
              l.a.createElement(r, {
                label: 'Body Fat (BF) ≈',
                onChange: m,
                value: i,
              }),
              '%'
            ),
            l.a.createElement(
              'li',
              null,
              l.a.createElement(r, {
                label: 'Exercise Time (ET) ≈',
                onChange: b,
                value: E,
              })
            ),
            l.a.createElement(
              'li',
              null,
              'Lean Body Mass (LBM) ≈ BM * (1 - BF / 100) ≈ ',
              d
            ),
            l.a.createElement(
              'li',
              null,
              'Basal Metabolic Rate (BMR) ≈ 370 + 21.6 * LBM ≈',
              ' ',
              B,
              'kcal'
            ),
            l.a.createElement(
              'li',
              null,
              'Total Daily Energy Expenditure (TDEE) ≈ BMR * (1.2 + ET * 0.35) ≈',
              ' ',
              j,
              'kcal'
            ),
            l.a.createElement('li', null, 'Proteins ≈ ', v, 'g'),
            l.a.createElement('li', null, 'Fats ≈ ', O, 'g'),
            l.a.createElement('li', null, 'Carbohydrates ≈ ', x, 'g')
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-macronutrients-js-7be6f3949e3184120d0d.js.map
