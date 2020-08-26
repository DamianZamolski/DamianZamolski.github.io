;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    G3Xh: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        l = a('xKBe')
      t.default = function () {
        var e = Object(n.useState)(80),
          t = e[0],
          a = e[1],
          u = Object(n.useState)(0.2),
          o = u[0],
          c = u[1],
          i = Object(n.useState)(0.8),
          s = i[0],
          m = i[1],
          p = Object(n.useMemo)(
            function () {
              return t * (1 - o)
            },
            [t, o]
          )
        return r.a.createElement(
          l.a,
          { title: 'Macronutrients' },
          r.a.createElement(
            'div',
            null,
            r.a.createElement('label', { for: 'body-mass' }, 'Body Mass (kg)'),
            r.a.createElement('input', {
              id: 'body-mass',
              type: 'number',
              value: t,
              onChange: function (e) {
                var t = e.target.value
                return a(t)
              },
            })
          ),
          r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'label',
              { for: 'body-fat-percentage' },
              'Body Fat (%)'
            ),
            r.a.createElement('input', {
              id: 'body-fat-percentage',
              max: 1,
              min: 0,
              onChange: function (e) {
                var t = e.target.value
                return c(t)
              },
              step: 0.01,
              type: 'range',
              value: o,
            })
          ),
          r.a.createElement('div', null, p),
          r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'label',
              { for: 'proteinsPerKg' },
              s,
              ' grams of proteins per kg'
            ),
            r.a.createElement('input', {
              id: 'proteinsPerKg',
              max: 2.6,
              min: 0.8,
              onChange: function (e) {
                var t = e.target.value
                return m(t)
              },
              step: 0.01,
              type: 'range',
              value: s,
            })
          ),
          r.a.createElement('div', null, Math.round(p * s))
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-macronutrients-js-bac5f6d49df71e66cf97.js.map
