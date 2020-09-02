;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    L7Jh: function (e, t, n) {
      e.exports = { item: 'checklist-module--item--BWhGa' }
    },
    X6dS: function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        l = n.n(a),
        r = n('UZXO'),
        u = n('L7Jh')
      t.a = function (e) {
        var t = e.items,
          n = Object(a.useMemo)(
            function () {
              return t.map(function (e) {
                return l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement('input', { type: 'checkbox' }),
                  e
                )
              })
            },
            [t]
          )
        return l.a.createElement(r.a, {
          itemClassName: u.item,
          items: n,
          ordered: !0,
        })
      }
    },
    xUc0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        l = n.n(a),
        r = n('xKBe'),
        u = n('X6dS'),
        c = n('10BB')
      t.default = function () {
        return l.a.createElement(
          r.a,
          { title: 'Evening Routine' },
          l.a.createElement(u.a, {
            items: [
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.j, null),
                'Plug in the phone.'
              ),
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.f, null),
                'Start listening to an audiobook.'
              ),
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.n, null),
                'Wash the dishes.'
              ),
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.a, null),
                'Apply an antiperspirant.'
              ),
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.p, null),
                'Clean your mouth.'
              ),
              l.a.createElement(
                'h2',
                null,
                l.a.createElement(c.b, null),
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
//# sourceMappingURL=component---src-pages-routines-evening-js-6d73b72ea3e63441e78c.js.map
