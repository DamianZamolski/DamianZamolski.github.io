_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '8KsS': function (e, t, n) {
      e.exports = { content: 'Content_content__1M24u' }
    },
    'F/uu': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/books/12-rules-for-life',
        function () {
          return n('VcKj')
        },
      ])
    },
    Qetd: function (e, t, n) {
      'use strict'
      var r = Object.assign.bind(Object)
      ;(e.exports = r), (e.exports.default = e.exports)
    },
    RBgx: function (e, t, n) {
      e.exports = { page: 'Page_page__1GEsf' }
    },
    VcKj: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        o = n.n(r),
        u = n('x65K'),
        a = o.a.createElement
      t.default = function () {
        return a(
          u.a,
          { title: '12 Rules for Life' },
          a('div', null, 'Hello World')
        )
      }
    },
    fwZ0: function (e, t, n) {
      e.exports = { footer: 'Footer_footer__1GsGg' }
    },
    gMtY: function (e, t, n) {
      e.exports = { header: 'Header_header__P0_LE' }
    },
    vtsB: function (e, t, n) {
      e.exports = { nav: 'Nav_nav__2jHIk' }
    },
    x65K: function (e, t, n) {
      'use strict'
      var r = n('q1tI'),
        o = n.n(r),
        u = n('8KsS'),
        a = o.a.createElement,
        i = function (e) {
          var t = e.children
          return a('main', { id: u.content }, t)
        },
        c = n('fwZ0'),
        l = o.a.createElement,
        f = function () {
          return l('footer', { id: c.footer }, 'Footer')
        },
        s = n('gMtY'),
        _ = o.a.createElement,
        d = function (e) {
          var t = e.title
          return _('header', { id: s.header }, _('h1', null, t))
        },
        p = n('vtsB'),
        v = o.a.createElement,
        E = function () {
          return v('nav', { id: p.nav }, 'Nav')
        },
        w = n('RBgx'),
        x = o.a.createElement
      t.a = function (e) {
        var t = e.children,
          n = e.title
        return x(
          'div',
          { id: w.page },
          x(E, null),
          x(d, { title: n }),
          x(i, null, t),
          x(f, null)
        )
      }
    },
  },
  [['F/uu', 0, 1]],
])
