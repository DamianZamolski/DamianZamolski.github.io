;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '9ONH': function (e, t, n) {
      e.exports = { header: 'Header-module--header--3ChRU' }
    },
    BcOW: function (e, t, n) {
      e.exports = { content: 'Content-module--content--3a5Bg' }
    },
    Kz0q: function (e, t, n) {
      e.exports = { nav: 'Nav-module--nav--3HfD7' }
    },
    VcKj: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        a = n.n(r),
        o = n('x65K')
      t.default = function () {
        return a.a.createElement(
          o.a,
          { title: '12 Rules for Life' },
          a.a.createElement('div', null, 'Hello World')
        )
      }
    },
    nDCv: function (e, t, n) {
      e.exports = { footer: 'Footer-module--footer--2SN9c' }
    },
    tkOw: function (e, t, n) {
      e.exports = { page: 'Page-module--page--3LK5q' }
    },
    x65K: function (e, t, n) {
      'use strict'
      var r = n('q1tI'),
        a = n.n(r),
        o = n('BcOW'),
        c = function (e) {
          var t = e.children
          return a.a.createElement('main', { id: o.content }, t)
        },
        l = n('nDCv'),
        u = function () {
          return a.a.createElement('footer', { id: l.footer }, 'Footer')
        },
        i = n('9ONH'),
        d = function (e) {
          var t = e.title
          return a.a.createElement(
            'header',
            { id: i.header },
            a.a.createElement('h1', null, t)
          )
        },
        f = n('Kz0q'),
        m = function () {
          return a.a.createElement('nav', { id: f.nav }, 'Nav')
        },
        v = n('tkOw')
      t.a = function (e) {
        var t = e.children,
          n = e.title
        return a.a.createElement(
          'div',
          { id: v.page },
          a.a.createElement(m, null),
          a.a.createElement(d, { title: n }),
          a.a.createElement(c, null, t),
          a.a.createElement(u, null)
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-books-12-rules-for-life-js-ef05034190c5c9cd351e.js.map
