_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    '8KsS': function (t, e, n) {
      t.exports = { content: 'Content_content__1M24u' }
    },
    Qetd: function (t, e, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(t.exports = r), (t.exports.default = t.exports)
    },
    RBgx: function (t, e, n) {
      t.exports = { page: 'Page_page__1GEsf' }
    },
    RXBc: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('q1tI'),
        o = n.n(r),
        a = n('x65K'),
        i = o.a.createElement
      e.default = function () {
        return i(a.a, { title: 'Index' }, i('div', null, 'Hello World'))
      }
    },
    fwZ0: function (t, e, n) {
      t.exports = { footer: 'Footer_footer__1GsGg' }
    },
    gMtY: function (t, e, n) {
      t.exports = { header: 'Header_header__P0_LE' }
    },
    vlRD: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('RXBc')
        },
      ])
    },
    vtsB: function (t, e, n) {
      t.exports = { nav: 'Nav_nav__2jHIk' }
    },
    x65K: function (t, e, n) {
      'use strict'
      var r = n('q1tI'),
        o = n.n(r),
        a = n('8KsS'),
        i = o.a.createElement,
        c = function (t) {
          var e = t.children
          return i('main', { id: a.content }, e)
        },
        u = n('fwZ0'),
        l = o.a.createElement,
        _ = function () {
          return l('footer', { id: u.footer }, 'Footer')
        },
        s = n('gMtY'),
        f = o.a.createElement,
        d = function (t) {
          var e = t.title
          return f('header', { id: s.header }, f('h1', null, e))
        },
        v = n('vtsB'),
        p = o.a.createElement,
        x = function () {
          return p('nav', { id: v.nav }, 'Nav')
        },
        E = n('RBgx'),
        w = o.a.createElement
      e.a = function (t) {
        var e = t.children,
          n = t.title
        return w(
          'div',
          { id: E.page },
          w(x, null),
          w(d, { title: n }),
          w(c, null, e),
          w(_, null)
        )
      }
    },
  },
  [['vlRD', 0, 1]],
])
