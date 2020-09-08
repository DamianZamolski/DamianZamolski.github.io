;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    Ro7P: function (t, e, r) {
      'use strict'
      r.r(e)
      var a = r('q1tI'),
        n = r.n(a),
        o = r('xKBe'),
        s = r('UZXO'),
        i = function (t, e) {
          return {
            macronutrients: {
              carbohydrates: t.carbohydrates * e,
              fats: t.fats * e,
              proteins: t.proteins * e,
            },
            product: t,
            quantity: e,
          }
        },
        c = function (t) {
          return t.reduce(
            function (t, e) {
              var r = e.macronutrients,
                a = r.carbohydrates,
                n = r.fats,
                o = r.proteins
              return (t.carbohydrates += a), (t.fats += n), (t.proteins += o), t
            },
            { proteins: 0, fats: 0, carbohydrates: 0 }
          )
        },
        u = function (t) {
          var e = t.diet,
            r = e.macronutrients,
            a = r.carbohydrates,
            o = r.fats,
            i = r.proteins,
            c = e.meals
          return n.a.createElement(
            n.a.Fragment,
            null,
            a,
            ' ',
            o,
            ' ',
            i,
            n.a.createElement(s.a, {
              items: c.map(function (t) {
                var e = t.ingredients,
                  r = t.macronutrients,
                  a = r.carbohydrates,
                  o = r.fats,
                  i = r.proteins,
                  c = t.name
                return n.a.createElement(
                  n.a.Fragment,
                  null,
                  c,
                  ' ',
                  a,
                  ' ',
                  o,
                  ' ',
                  i,
                  n.a.createElement(s.a, {
                    items: e.map(function (t) {
                      var e = t.macronutrients,
                        r = e.carbohydrates,
                        a = e.fats,
                        o = e.proteins,
                        s = t.product.name,
                        i = t.quantity
                      return n.a.createElement(
                        n.a.Fragment,
                        null,
                        s,
                        ' ',
                        i,
                        ' ',
                        r,
                        ' ',
                        a,
                        ' ',
                        o
                      )
                    }),
                    padded: !0,
                  })
                )
              }),
              ordered: !0,
            })
          )
        },
        m = function (t, e, r, a) {
          return { name: t, proteins: e, fats: r, carbohydrates: a }
        },
        d = m('Banana', 0.0109, 0.0033, 0.2284),
        f = m('KFD WPC', 0.78, 0.07, 0.05)
      e.default = function () {
        return n.a.createElement(
          o.a,
          { title: '2020-09-03' },
          n.a.createElement(u, {
            diet:
              ((t = [
                ((e = 'Bulletproof Coffee'),
                (r = [i(d, 100), i(f, 30)]),
                { ingredients: r, macronutrients: c(r), name: e }),
              ]),
              { macronutrients: c(t), meals: t }),
          })
        )
        var t, e, r
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-journal-2020-09-03-js-9a98d7abbbd9420c83c2.js.map
