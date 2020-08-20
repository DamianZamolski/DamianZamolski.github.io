;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
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
    RXBc: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        r = n.n(a),
        o = n('x65K')
      t.default = function () {
        return r.a.createElement(
          o.a,
          { title: 'Index' },
          r.a.createElement('div', null, 'Hello World')
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
      var a = n('q1tI'),
        r = n.n(a),
        o = n('BcOW'),
        c = function (e) {
          var t = e.children
          return r.a.createElement('main', { id: o.content }, t)
        },
        l = n('nDCv'),
        u = function () {
          return r.a.createElement('footer', { id: l.footer }, 'Footer')
        },
        i = n('9ONH'),
        d = function (e) {
          var t = e.title
          return r.a.createElement(
            'header',
            { id: i.header },
            r.a.createElement('h1', null, t)
          )
        },
        f = n('Kz0q'),
        m = function () {
          return r.a.createElement('nav', { id: f.nav }, 'Nav')
        },
        v = n('tkOw')
      t.a = function (e) {
        var t = e.children,
          n = e.title
        return r.a.createElement(
          'div',
          { id: v.page },
          r.a.createElement(m, null),
          r.a.createElement(d, { title: n }),
          r.a.createElement(c, null, t),
          r.a.createElement(u, null)
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-8623802120881d7de039.js.map
