;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '8VgL': function (t, e, a) {
      'use strict'
      a.r(e)
      var r = a('q1tI'),
        n = a.n(r),
        s = a('xKBe'),
        o = a('UZXO'),
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
        u = function (t, e) {
          return { ingredients: e, macronutrients: c(e), name: t }
        },
        c = function (t) {
          return t.reduce(
            function (t, e) {
              var a = e.macronutrients,
                r = a.carbohydrates,
                n = a.fats,
                s = a.proteins
              return (t.carbohydrates += r), (t.fats += n), (t.proteins += s), t
            },
            { proteins: 0, fats: 0, carbohydrates: 0 }
          )
        },
        m = function (t) {
          var e = t.diet,
            a = e.macronutrients,
            r = a.carbohydrates,
            s = a.fats,
            i = a.proteins,
            u = e.meals
          return n.a.createElement(
            n.a.Fragment,
            null,
            'Proteins: ',
            i,
            'g Fats: ',
            s,
            'g Carbohydrates: ',
            r,
            'g',
            n.a.createElement(o.a, {
              items: u.map(function (t) {
                var e = t.ingredients,
                  a = t.macronutrients,
                  r = a.carbohydrates,
                  s = a.fats,
                  i = a.proteins,
                  u = t.name
                return n.a.createElement(
                  n.a.Fragment,
                  null,
                  'Name: ',
                  u,
                  ' Proteins: ',
                  i,
                  'g Fats: ',
                  s,
                  'g Carbohydrates:',
                  ' ',
                  r,
                  'g',
                  n.a.createElement(o.a, {
                    items: e.map(function (t) {
                      var e = t.macronutrients,
                        a = e.carbohydrates,
                        r = e.fats,
                        s = e.proteins,
                        o = t.product.name,
                        i = t.quantity
                      return n.a.createElement(
                        n.a.Fragment,
                        null,
                        'Name: ',
                        o,
                        ' Quantity: ',
                        i,
                        'g Proteins: ',
                        s,
                        'g Fats: ',
                        r,
                        'g Carbohydrates: ',
                        a,
                        'g'
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
        d = function (t, e, a, r) {
          return { name: t, proteins: e, fats: a, carbohydrates: r }
        },
        f = d('Bananas', 0.0109, 0.0033, 0.2284),
        l = d('Butter', 0, 1, 0),
        p = d('Chickpeas', 0.062, 0.022, 0.14),
        g =
          (d('Eggs', 0.1256, 0.0951, 0.0072),
          d('Hazelnuts', 0.1495, 0.6075, 0.167)),
        h = d('KFD WPC', 0.78, 0.07, 0.05),
        y = d('MCT Oil', 0, 1, 0),
        b = d('Oats', 0.1315, 0.0652, 0.677)
      e.default = function () {
        return n.a.createElement(
          s.a,
          { title: '2020-09-03' },
          n.a.createElement(m, {
            diet:
              ((t = [
                u('Bulletproof Coffee', [i(h, 30), i(y, 15), i(l, 15)]),
                u('Pre-Workout smoothie', [
                  i(h, 20),
                  i(g, 50),
                  i(b, 100),
                  i(f, 120),
                ]),
                u('Salad', [i(p, 400)]),
              ]),
              { macronutrients: c(t), meals: t }),
          })
        )
        var t
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-journal-2020-09-09-js-44cfd65317b1ccb8ab98.js.map
