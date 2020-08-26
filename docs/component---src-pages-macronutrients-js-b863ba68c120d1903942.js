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
          u = Object(n.useState)(0.8),
          o = u[0],
          i = u[1]
        return r.a.createElement(
          l.a,
          { title: 'Macronutrients' },
          r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'label',
              { for: 'lean-body-mass' },
              'Lean Body Mass (kg)'
            ),
            r.a.createElement('input', {
              id: 'lean-body-mass',
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
              { for: 'proteinsPerKg' },
              o,
              ' grams of proteins per kg'
            ),
            r.a.createElement('input', {
              id: 'proteinsPerKg',
              max: 2.6,
              min: 0.8,
              onChange: function (e) {
                var t = e.target.value
                return i(t)
              },
              step: 0.01,
              type: 'range',
              value: o,
            })
          ),
          r.a.createElement('div', null, Math.round(t * o))
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-macronutrients-js-b863ba68c120d1903942.js.map
