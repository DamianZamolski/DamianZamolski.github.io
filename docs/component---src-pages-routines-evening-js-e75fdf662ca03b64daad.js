;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    L7Jh: function (e, t, n) {
      e.exports = { item: 'checklist-module--item--BWhGa' }
    },
    X6dS: function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        r = n.n(a),
        c = n('UZXO'),
        i = n('L7Jh')
      t.a = function (e) {
        var t = e.items,
          n = Object(a.useMemo)(
            function () {
              return t.map(function (e) {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('input', { type: 'checkbox' }),
                  e
                )
              })
            },
            [t]
          )
        return r.a.createElement(c.a, {
          itemClassName: i.item,
          items: n,
          ordered: !0,
        })
      }
    },
    xUc0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        r = n.n(a),
        c = n('xKBe'),
        i = n('X6dS'),
        u = n('10BB')
      t.default = function () {
        return r.a.createElement(
          c.a,
          { title: 'Evening Routine' },
          r.a.createElement(i.a, {
            items: [
              r.a.createElement(
                'h2',
                null,
                r.a.createElement(u.a, null),
                'Go to bed at 23:30'
              ),
            ],
            ordered: !0,
          })
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-routines-evening-js-e75fdf662ca03b64daad.js.map
