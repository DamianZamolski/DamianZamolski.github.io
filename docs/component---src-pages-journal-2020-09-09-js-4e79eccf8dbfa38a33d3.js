;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '8VgL': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        l = a('xKBe'),
        u = (a('E9XD'), a('QTeS')),
        c = function (e, t) {
          return {
            macronutrients: {
              carbohydrates: e.carbohydrates * t,
              fats: e.fats * t,
              proteins: e.proteins * t,
            },
            product: e,
            quantity: t,
          }
        },
        o = function (e, t) {
          return { ingredients: t, macronutrients: m(t), name: e }
        },
        m = function (e) {
          return e.reduce(
            function (e, t) {
              var a = t.macronutrients,
                n = a.carbohydrates,
                r = a.fats,
                l = a.proteins
              return (e.carbohydrates += n), (e.fats += r), (e.proteins += l), e
            },
            { proteins: 0, fats: 0, carbohydrates: 0 }
          )
        },
        s = function (e) {
          var t = e.value
          return r.a.createElement('td', { className: u.numberCell }, t)
        },
        i = function (e) {
          var t = e.value
          return r.a.createElement(s, { value: t.toFixed(3) })
        },
        E = function (e) {
          var t = e.diet,
            a = t.macronutrients,
            l = a.carbohydrates,
            u = a.fats,
            c = a.proteins,
            o = t.meals
          return r.a.createElement(
            'table',
            null,
            r.a.createElement(
              'thead',
              null,
              r.a.createElement(
                'tr',
                null,
                r.a.createElement('th', null, 'Name'),
                r.a.createElement('th', null, 'Quantity'),
                r.a.createElement('th', null, 'Proteins'),
                r.a.createElement('th', null, 'Fats'),
                r.a.createElement('th', null, 'Carbohydrates')
              )
            ),
            r.a.createElement(
              'tbody',
              null,
              r.a.createElement(
                'tr',
                null,
                r.a.createElement('td', null, 'Total'),
                r.a.createElement('td', null),
                r.a.createElement(i, { value: c }),
                r.a.createElement(i, { value: u }),
                r.a.createElement(i, { value: l })
              ),
              o.map(function (e) {
                var t = e.ingredients,
                  a = e.macronutrients,
                  l = a.carbohydrates,
                  u = a.fats,
                  c = a.proteins,
                  o = e.name
                return r.a.createElement(
                  n.Fragment,
                  { key: o },
                  r.a.createElement(
                    'tr',
                    null,
                    r.a.createElement('td', null, o),
                    r.a.createElement('td', null),
                    r.a.createElement(i, { value: c }),
                    r.a.createElement(i, { value: u }),
                    r.a.createElement(i, { value: l })
                  ),
                  t.map(function (e) {
                    var t = e.macronutrients,
                      a = t.carbohydrates,
                      n = t.fats,
                      l = t.proteins,
                      u = e.product.name,
                      c = e.quantity
                    return r.a.createElement(
                      'tr',
                      { key: u },
                      r.a.createElement('td', null, u),
                      r.a.createElement(s, { value: c }),
                      r.a.createElement(i, { value: l }),
                      r.a.createElement(i, { value: n }),
                      r.a.createElement(i, { value: a })
                    )
                  })
                )
              })
            )
          )
        },
        d = function (e, t, a, n) {
          return {
            name: e,
            proteins: t / 100,
            fats: a / 100,
            carbohydrates: n / 100,
          }
        },
        f = d('Bananas', 1.09, 0.33, 22.84),
        p = d('Chickpeas', 6.2, 2.2, 14),
        v = (d('Eggs', 12.56, 9.51, 0.72), d('Hazelnuts', 14.95, 60.75, 16.7)),
        h = d('Kerrygold Butter', 0.7, 82.5, 0.7),
        b = d('KFD WPC', 78, 7, 5),
        y = d('MCT Oil', 0, 100, 0),
        g = d('Oats', 13.15, 6.52, 67.7)
      t.default = function () {
        return r.a.createElement(
          l.a,
          { title: '2020-09-03' },
          r.a.createElement(E, {
            diet:
              ((e = [
                o('Bulletproof Coffee', [c(b, 30), c(y, 15), c(h, 15)]),
                o('Pre-Workout smoothie', [
                  c(b, 20),
                  c(v, 50),
                  c(g, 100),
                  c(f, 120),
                ]),
                o('Salad', [c(p, 400)]),
              ]),
              { macronutrients: m(e), meals: e }),
          })
        )
        var e
      }
    },
    QTeS: function (e, t, a) {
      e.exports = { numberCell: 'diet-module--number-cell--1jn1q' }
    },
  },
])
//# sourceMappingURL=component---src-pages-journal-2020-09-09-js-4e79eccf8dbfa38a33d3.js.map
