/*! For license information please see commons-e7f20de9d7604e8fe4b9.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '10BB': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      }),
        n.d(t, 'b', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return j
        }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'e', function () {
          return x
        }),
        n.d(t, 'f', function () {
          return k
        }),
        n.d(t, 'g', function () {
          return P
        }),
        n.d(t, 'h', function () {
          return I
        }),
        n.d(t, 'i', function () {
          return L
        }),
        n.d(t, 'j', function () {
          return N
        }),
        n.d(t, 'k', function () {
          return M
        }),
        n.d(t, 'l', function () {
          return q
        }),
        n.d(t, 'm', function () {
          return D
        }),
        n.d(t, 'n', function () {
          return R
        }),
        n.d(t, 'o', function () {
          return B
        }),
        n.d(t, 'p', function () {
          return F
        }),
        n.d(t, 'q', function () {
          return z
        }),
        n.d(t, 'r', function () {
          return _
        }),
        n.d(t, 's', function () {
          return H
        }),
        n.d(t, 't', function () {
          return Y
        })
      var r = n('q1tI'),
        a = n.n(r),
        o = (n('E9XD'), n('7O5W')),
        i = n('17x9'),
        c = n.n(i)
      function u(e) {
        return (u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                l(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function p(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      function d(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      function m(e) {
        return (
          (t = e),
          (t -= 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ''
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        )
        var t
      }
      function y(e) {
        return e
          .split(';')
          .map(function (e) {
            return e.trim()
          })
          .filter(function (e) {
            return e
          })
          .reduce(function (e, t) {
            var n,
              r = t.indexOf(':'),
              a = m(t.slice(0, r)),
              o = t.slice(r + 1).trim()
            return (
              a.startsWith('webkit')
                ? (e[((n = a), n.charAt(0).toUpperCase() + n.slice(1))] = o)
                : (e[a] = o),
              e
            )
          }, {})
      }
      var h = !1
      try {
        h = !0
      } catch (W) {}
      function b(e) {
        return o.c.icon
          ? o.c.icon(e)
          : null === e
          ? null
          : 'object' === u(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : 'string' == typeof e
          ? { prefix: 'fas', iconName: e }
          : void 0
      }
      function v(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? l({}, e, t)
          : {}
      }
      function g(e) {
        var t = e.forwardedRef,
          n = p(e, ['forwardedRef']),
          r = n.icon,
          a = n.mask,
          i = n.symbol,
          c = n.className,
          u = n.title,
          s = n.titleId,
          m = b(r),
          y = v(
            'classes',
            [].concat(
              d(
                (function (e) {
                  var t,
                    n = e.spin,
                    r = e.pulse,
                    a = e.fixedWidth,
                    o = e.inverse,
                    i = e.border,
                    c = e.listItem,
                    u = e.flip,
                    s = e.size,
                    f = e.rotation,
                    p = e.pull,
                    d =
                      (l(
                        (t = {
                          'fa-spin': n,
                          'fa-pulse': r,
                          'fa-fw': a,
                          'fa-inverse': o,
                          'fa-border': i,
                          'fa-li': c,
                          'fa-flip-horizontal':
                            'horizontal' === u || 'both' === u,
                          'fa-flip-vertical': 'vertical' === u || 'both' === u,
                        }),
                        'fa-'.concat(s),
                        null != s
                      ),
                      l(t, 'fa-rotate-'.concat(f), null != f && 0 !== f),
                      l(t, 'fa-pull-'.concat(p), null != p),
                      l(t, 'fa-swap-opacity', e.swapOpacity),
                      t)
                  return Object.keys(d)
                    .map(function (e) {
                      return d[e] ? e : null
                    })
                    .filter(function (e) {
                      return e
                    })
                })(n)
              ),
              d(c.split(' '))
            )
          ),
          O = v(
            'transform',
            'string' == typeof n.transform
              ? o.c.transform(n.transform)
              : n.transform
          ),
          w = v('mask', b(a)),
          E = Object(o.b)(
            m,
            f({}, y, {}, O, {}, w, { symbol: i, title: u, titleId: s })
          )
        if (!E)
          return (
            (function () {
              var e
              !h &&
                console &&
                'function' == typeof console.error &&
                (e = console).error.apply(e, arguments)
            })('Could not find icon', m),
            null
          )
        var A = E.abstract,
          C = { ref: t }
        return (
          Object.keys(n).forEach(function (e) {
            g.defaultProps.hasOwnProperty(e) || (C[e] = n[e])
          }),
          T(A[0], C)
        )
      }
      ;(g.displayName = 'FontAwesomeIcon'),
        (g.propTypes = {
          border: c.a.bool,
          className: c.a.string,
          mask: c.a.oneOfType([c.a.object, c.a.array, c.a.string]),
          fixedWidth: c.a.bool,
          inverse: c.a.bool,
          flip: c.a.oneOf(['horizontal', 'vertical', 'both']),
          icon: c.a.oneOfType([c.a.object, c.a.array, c.a.string]),
          listItem: c.a.bool,
          pull: c.a.oneOf(['right', 'left']),
          pulse: c.a.bool,
          rotation: c.a.oneOf([0, 90, 180, 270]),
          size: c.a.oneOf([
            'lg',
            'xs',
            'sm',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ]),
          spin: c.a.bool,
          symbol: c.a.oneOfType([c.a.bool, c.a.string]),
          title: c.a.string,
          transform: c.a.oneOfType([c.a.string, c.a.object]),
          swapOpacity: c.a.bool,
        }),
        (g.defaultProps = {
          border: !1,
          className: '',
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: '',
          transform: null,
          swapOpacity: !1,
        })
      var T = function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          if ('string' == typeof n) return n
          var a = (n.children || []).map(function (n) {
              return e(t, n)
            }),
            o = Object.keys(n.attributes || {}).reduce(
              function (e, t) {
                var r = n.attributes[t]
                switch (t) {
                  case 'class':
                    ;(e.attrs.className = r), delete n.attributes.class
                    break
                  case 'style':
                    e.attrs.style = y(r)
                    break
                  default:
                    0 === t.indexOf('aria-') || 0 === t.indexOf('data-')
                      ? (e.attrs[t.toLowerCase()] = r)
                      : (e.attrs[m(t)] = r)
                }
                return e
              },
              { attrs: {} }
            ),
            i = r.style,
            c = void 0 === i ? {} : i,
            u = p(r, ['style'])
          return (
            (o.attrs.style = f({}, o.attrs.style, {}, c)),
            t.apply(void 0, [n.tag, f({}, o.attrs, {}, u)].concat(d(a)))
          )
        }.bind(null, a.a.createElement),
        O = n('8tEE'),
        w = n('wHSu'),
        E = function (e) {
          return function () {
            return a.a.createElement(g, { fixedWidth: !0, icon: e })
          }
        },
        A = E(w.a),
        C = E(w.b),
        j = E(w.c),
        S = E(w.d),
        x = E(w.e),
        k = E(w.f),
        P = E(w.g),
        I = E(w.h),
        L = E(w.i),
        N = E(O.a),
        M = E(w.j),
        q = E(w.k),
        D = E(w.l),
        R = E(w.m),
        B = E(w.n),
        F = E(w.o),
        z = E(w.p),
        _ = E(w.q),
        H = E(w.r),
        Y = E(w.s)
    },
    '6r2t': function (e, t, n) {
      e.exports = { header: 'Header-module--header--3OZ6N' }
    },
    '8+s/': function (e, t, n) {
      'use strict'
      var r,
        a = n('q1tI'),
        o = (r = a) && 'object' == typeof r && 'default' in r ? r.default : r
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var c = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      e.exports = function (e, t, n) {
        if ('function' != typeof e)
          throw new Error('Expected reducePropsToState to be a function.')
        if ('function' != typeof t)
          throw new Error(
            'Expected handleStateChangeOnClient to be a function.'
          )
        if (void 0 !== n && 'function' != typeof n)
          throw new Error(
            'Expected mapStateOnServer to either be undefined or a function.'
          )
        return function (r) {
          if ('function' != typeof r)
            throw new Error(
              'Expected WrappedComponent to be a React component.'
            )
          var u,
            l = []
          function s() {
            ;(u = e(
              l.map(function (e) {
                return e.props
              })
            )),
              f.canUseDOM ? t(u) : n && (u = n(u))
          }
          var f = (function (e) {
            var t, n
            function a() {
              return e.apply(this, arguments) || this
            }
            ;(n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return u
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.'
                  )
                var e = u
                return (u = void 0), (l = []), e
              })
            var i = a.prototype
            return (
              (i.UNSAFE_componentWillMount = function () {
                l.push(this), s()
              }),
              (i.componentDidUpdate = function () {
                s()
              }),
              (i.componentWillUnmount = function () {
                var e = l.indexOf(this)
                l.splice(e, 1), s()
              }),
              (i.render = function () {
                return o.createElement(r, this.props)
              }),
              a
            )
          })(a.PureComponent)
          return (
            i(
              f,
              'displayName',
              'SideEffect(' +
                (function (e) {
                  return e.displayName || e.name || 'Component'
                })(r) +
                ')'
            ),
            i(f, 'canUseDOM', c),
            f
          )
        }
      }
    },
    FZDs: function (e, t, n) {
      e.exports = { footer: 'Footer-module--footer--V8wej' }
    },
    I77B: function (e, t, n) {
      e.exports = { area: 'area-module--area--2kuCT' }
    },
    LIDZ: function (e, t, n) {
      e.exports = { lightArea: 'light-area-module--light-area--2D3IV' }
    },
    NyQI: function (e, t, n) {
      e.exports = { main: 'Main-module--main--3Jql9' }
    },
    QVrL: function (e, t, n) {
      e.exports = { darkArea: 'dark-area-module--dark-area--3Cn6t' }
    },
    TKWK: function (e, t, n) {
      e.exports = { page: 'Page-module--page--Mo1Sm' }
    },
    TSYQ: function (e, t, n) {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var o = typeof r
              if ('string' === o || 'number' === o) e.push(r)
              else if (Array.isArray(r) && r.length) {
                var i = a.apply(null, r)
                i && e.push(i)
              } else if ('object' === o)
                for (var c in r) n.call(r, c) && r[c] && e.push(c)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (r = function () {
                return a
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    UZXO: function (e, t, n) {
      'use strict'
      var r = n('q1tI'),
        a = n.n(r),
        o = n('TSYQ'),
        i = n.n(o),
        c = n('ngtq')
      t.a = function (e) {
        var t = e.itemClassName,
          n = e.items,
          o = e.ordered,
          u = e.padded,
          l = Object(r.useMemo)(
            function () {
              return o ? 'ol' : 'ul'
            },
            [o]
          ),
          s = Object(r.useMemo)(
            function () {
              return n.map(function (e, n) {
                return a.a.createElement(
                  'li',
                  { className: i()(t, u && c.padded), key: n },
                  e
                )
              })
            },
            [t, n]
          )
        return a.a.createElement(l, { className: c.list }, s)
      }
    },
    Z6Se: function (e, t, n) {
      e.exports = { nav: 'nav-module--nav--XOa-H' }
    },
    ZhWT: function (e, t) {
      var n = 'undefined' != typeof Element,
        r = 'function' == typeof Map,
        a = 'function' == typeof Set,
        o = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      e.exports = function (e, t) {
        try {
          return (function e(t, i) {
            if (t === i) return !0
            if (t && i && 'object' == typeof t && 'object' == typeof i) {
              if (t.constructor !== i.constructor) return !1
              var c, u, l, s
              if (Array.isArray(t)) {
                if ((c = t.length) != i.length) return !1
                for (u = c; 0 != u--; ) if (!e(t[u], i[u])) return !1
                return !0
              }
              if (r && t instanceof Map && i instanceof Map) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!i.has(u.value[0])) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!e(u.value[1], i.get(u.value[0]))) return !1
                return !0
              }
              if (a && t instanceof Set && i instanceof Set) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!i.has(u.value[0])) return !1
                return !0
              }
              if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
                if ((c = t.length) != i.length) return !1
                for (u = c; 0 != u--; ) if (t[u] !== i[u]) return !1
                return !0
              }
              if (t.constructor === RegExp)
                return t.source === i.source && t.flags === i.flags
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === i.valueOf()
              if (t.toString !== Object.prototype.toString)
                return t.toString() === i.toString()
              if ((c = (l = Object.keys(t)).length) !== Object.keys(i).length)
                return !1
              for (u = c; 0 != u--; )
                if (!Object.prototype.hasOwnProperty.call(i, l[u])) return !1
              if (n && t instanceof Element) return !1
              for (u = c; 0 != u--; )
                if (
                  (('_owner' !== l[u] && '__v' !== l[u] && '__o' !== l[u]) ||
                    !t.$$typeof) &&
                  !e(t[l[u]], i[l[u]])
                )
                  return !1
              return !0
            }
            return t != t && i != i
          })(e, t)
        } catch (i) {
          if ((i.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw i
        }
      }
    },
    ngtq: function (e, t, n) {
      e.exports = {
        list: 'list-module--list--lGEmL',
        padded: 'list-module--padded--pL3tO',
      }
    },
    qhky: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return ye
        })
        n('E9XD')
        var r,
          a,
          o,
          i,
          c = n('17x9'),
          u = n.n(c),
          l = n('8+s/'),
          s = n.n(l),
          f = n('ZhWT'),
          p = n.n(f),
          d = n('q1tI'),
          m = n.n(d),
          y = n('YVoz'),
          h = n.n(y),
          b = 'bodyAttributes',
          v = 'htmlAttributes',
          g = 'titleAttributes',
          T = {
            BASE: 'base',
            BODY: 'body',
            HEAD: 'head',
            HTML: 'html',
            LINK: 'link',
            META: 'meta',
            NOSCRIPT: 'noscript',
            SCRIPT: 'script',
            STYLE: 'style',
            TITLE: 'title',
          },
          O =
            (Object.keys(T).map(function (e) {
              return T[e]
            }),
            'charset'),
          w = 'cssText',
          E = 'href',
          A = 'http-equiv',
          C = 'innerHTML',
          j = 'itemprop',
          S = 'name',
          x = 'property',
          k = 'rel',
          P = 'src',
          I = 'target',
          L = {
            accesskey: 'accessKey',
            charset: 'charSet',
            class: 'className',
            contenteditable: 'contentEditable',
            contextmenu: 'contextMenu',
            'http-equiv': 'httpEquiv',
            itemprop: 'itemProp',
            tabindex: 'tabIndex',
          },
          N = 'defaultTitle',
          M = 'defer',
          q = 'encodeSpecialCharacters',
          D = 'onChangeClientState',
          R = 'titleTemplate',
          B = Object.keys(L).reduce(function (e, t) {
            return (e[L[t]] = t), e
          }, {}),
          F = [T.NOSCRIPT, T.SCRIPT, T.STYLE],
          z =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          _ = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          },
          H = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })(),
          Y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            },
          W = function (e, t) {
            var n = {}
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
            return n
          },
          U = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          },
          Z = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;')
          },
          K = function (e) {
            var t = $(e, T.TITLE),
              n = $(e, R)
            if (n && t)
              return n.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join('') : t
              })
            var r = $(e, N)
            return t || r || void 0
          },
          V = function (e) {
            return $(e, D) || function () {}
          },
          Q = function (e, t) {
            return t
              .filter(function (t) {
                return void 0 !== t[e]
              })
              .map(function (t) {
                return t[e]
              })
              .reduce(function (e, t) {
                return Y({}, e, t)
              }, {})
          },
          X = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[T.BASE]
              })
              .map(function (e) {
                return e[T.BASE]
              })
              .reverse()
              .reduce(function (t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                    var o = r[a].toLowerCase()
                    if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
                  }
                return t
              }, [])
          },
          J = function (e, t, n) {
            var r = {}
            return n
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    re(
                      'Helmet: ' +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        z(t[e]) +
                        '"'
                    ),
                  !1)
                )
              })
              .map(function (t) {
                return t[e]
              })
              .reverse()
              .reduce(function (e, n) {
                var a = {}
                n.filter(function (e) {
                  for (
                    var n = void 0, o = Object.keys(e), i = 0;
                    i < o.length;
                    i++
                  ) {
                    var c = o[i],
                      u = c.toLowerCase()
                    ;-1 === t.indexOf(u) ||
                      (n === k && 'canonical' === e[n].toLowerCase()) ||
                      (u === k && 'stylesheet' === e[u].toLowerCase()) ||
                      (n = u),
                      -1 === t.indexOf(c) ||
                        (c !== C && c !== w && c !== j) ||
                        (n = c)
                  }
                  if (!n || !e[n]) return !1
                  var l = e[n].toLowerCase()
                  return (
                    r[n] || (r[n] = {}),
                    a[n] || (a[n] = {}),
                    !r[n][l] && ((a[n][l] = !0), !0)
                  )
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t)
                  })
                for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                  var c = o[i],
                    u = h()({}, r[c], a[c])
                  r[c] = u
                }
                return e
              }, [])
              .reverse()
          },
          $ = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n]
              if (r.hasOwnProperty(t)) return r[t]
            }
            return null
          },
          G =
            ((r = Date.now()),
            function (e) {
              var t = Date.now()
              t - r > 16
                ? ((r = t), e(t))
                : setTimeout(function () {
                    G(e)
                  }, 0)
            }),
          ee = function (e) {
            return clearTimeout(e)
          },
          te =
            'undefined' != typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                G
              : e.requestAnimationFrame || G,
          ne =
            'undefined' != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                ee
              : e.cancelAnimationFrame || ee,
          re = function (e) {
            return (
              console && 'function' == typeof console.warn && console.warn(e)
            )
          },
          ae = null,
          oe = function (e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              u = e.onChangeClientState,
              l = e.scriptTags,
              s = e.styleTags,
              f = e.title,
              p = e.titleAttributes
            ue(T.BODY, r), ue(T.HTML, a), ce(f, p)
            var d = {
                baseTag: le(T.BASE, n),
                linkTags: le(T.LINK, o),
                metaTags: le(T.META, i),
                noscriptTags: le(T.NOSCRIPT, c),
                scriptTags: le(T.SCRIPT, l),
                styleTags: le(T.STYLE, s),
              },
              m = {},
              y = {}
            Object.keys(d).forEach(function (e) {
              var t = d[e],
                n = t.newTags,
                r = t.oldTags
              n.length && (m[e] = n), r.length && (y[e] = d[e].oldTags)
            }),
              t && t(),
              u(e, m, y)
          },
          ie = function (e) {
            return Array.isArray(e) ? e.join('') : e
          },
          ce = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = ie(e)),
              ue(T.TITLE, t)
          },
          ue = function (e, t) {
            var n = document.getElementsByTagName(e)[0]
            if (n) {
              for (
                var r = n.getAttribute('data-react-helmet'),
                  a = r ? r.split(',') : [],
                  o = [].concat(a),
                  i = Object.keys(t),
                  c = 0;
                c < i.length;
                c++
              ) {
                var u = i[c],
                  l = t[u] || ''
                n.getAttribute(u) !== l && n.setAttribute(u, l),
                  -1 === a.indexOf(u) && a.push(u)
                var s = o.indexOf(u)
                ;-1 !== s && o.splice(s, 1)
              }
              for (var f = o.length - 1; f >= 0; f--) n.removeAttribute(o[f])
              a.length === o.length
                ? n.removeAttribute('data-react-helmet')
                : n.getAttribute('data-react-helmet') !== i.join(',') &&
                  n.setAttribute('data-react-helmet', i.join(','))
            }
          },
          le = function (e, t) {
            var n = document.head || document.querySelector(T.HEAD),
              r = n.querySelectorAll(e + '[data-react-helmet]'),
              a = Array.prototype.slice.call(r),
              o = [],
              i = void 0
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var n = document.createElement(e)
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === C) n.innerHTML = t.innerHTML
                      else if (r === w)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText))
                      else {
                        var c = void 0 === t[r] ? '' : t[r]
                        n.setAttribute(r, c)
                      }
                  n.setAttribute('data-react-helmet', 'true'),
                    a.some(function (e, t) {
                      return (i = t), n.isEqualNode(e)
                    })
                      ? a.splice(i, 1)
                      : o.push(n)
                }),
              a.forEach(function (e) {
                return e.parentNode.removeChild(e)
              }),
              o.forEach(function (e) {
                return n.appendChild(e)
              }),
              { oldTags: a, newTags: o }
            )
          },
          se = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n
              return t ? t + ' ' + r : r
            }, '')
          },
          fe = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return Object.keys(e).reduce(function (t, n) {
              return (t[L[n] || n] = e[n]), t
            }, t)
          },
          pe = function (e, t, n) {
            switch (e) {
              case T.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })['data-react-helmet'] = !0),
                      (a = fe(n, r)),
                      [m.a.createElement(T.TITLE, a, e)]
                    )
                    var e, n, r, a
                  },
                  toString: function () {
                    return (function (e, t, n, r) {
                      var a = se(n),
                        o = ie(t)
                      return a
                        ? '<' +
                            e +
                            ' data-react-helmet="true" ' +
                            a +
                            '>' +
                            Z(o, r) +
                            '</' +
                            e +
                            '>'
                        : '<' +
                            e +
                            ' data-react-helmet="true">' +
                            Z(o, r) +
                            '</' +
                            e +
                            '>'
                    })(e, t.title, t.titleAttributes, n)
                  },
                }
              case b:
              case v:
                return {
                  toComponent: function () {
                    return fe(t)
                  },
                  toString: function () {
                    return se(t)
                  },
                }
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, n) {
                        var r,
                          a = (((r = { key: n })['data-react-helmet'] = !0), r)
                        return (
                          Object.keys(t).forEach(function (e) {
                            var n = L[e] || e
                            if (n === C || n === w) {
                              var r = t.innerHTML || t.cssText
                              a.dangerouslySetInnerHTML = { __html: r }
                            } else a[n] = t[e]
                          }),
                          m.a.createElement(e, a)
                        )
                      })
                    })(e, t)
                  },
                  toString: function () {
                    return (function (e, t, n) {
                      return t.reduce(function (t, r) {
                        var a = Object.keys(r)
                            .filter(function (e) {
                              return !(e === C || e === w)
                            })
                            .reduce(function (e, t) {
                              var a =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + Z(r[t], n) + '"'
                              return e ? e + ' ' + a : a
                            }, ''),
                          o = r.innerHTML || r.cssText || '',
                          i = -1 === F.indexOf(e)
                        return (
                          t +
                          '<' +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          (i ? '/>' : '>' + o + '</' + e + '>')
                        )
                      }, '')
                    })(e, t, n)
                  },
                }
            }
          },
          de = function (e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              u = e.scriptTags,
              l = e.styleTags,
              s = e.title,
              f = void 0 === s ? '' : s,
              p = e.titleAttributes
            return {
              base: pe(T.BASE, t, r),
              bodyAttributes: pe(b, n, r),
              htmlAttributes: pe(v, a, r),
              link: pe(T.LINK, o, r),
              meta: pe(T.META, i, r),
              noscript: pe(T.NOSCRIPT, c, r),
              script: pe(T.SCRIPT, u, r),
              style: pe(T.STYLE, l, r),
              title: pe(T.TITLE, { title: f, titleAttributes: p }, r),
            }
          },
          me = s()(
            function (e) {
              return {
                baseTag: X([E, I], e),
                bodyAttributes: Q(b, e),
                defer: $(e, M),
                encode: $(e, q),
                htmlAttributes: Q(v, e),
                linkTags: J(T.LINK, [k, E], e),
                metaTags: J(T.META, [S, O, A, x, j], e),
                noscriptTags: J(T.NOSCRIPT, [C], e),
                onChangeClientState: V(e),
                scriptTags: J(T.SCRIPT, [P, C], e),
                styleTags: J(T.STYLE, [w], e),
                title: K(e),
                titleAttributes: Q(g, e),
              }
            },
            function (e) {
              ae && ne(ae),
                e.defer
                  ? (ae = te(function () {
                      oe(e, function () {
                        ae = null
                      })
                    }))
                  : (oe(e), (ae = null))
            },
            de
          )(function () {
            return null
          }),
          ye =
            ((a = me),
            (i = o = (function (e) {
              function t() {
                return _(this, t), U(this, e.apply(this, arguments))
              }
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof t
                    )
                  ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t))
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !p()(this.props, e)
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null
                  switch (e.type) {
                    case T.SCRIPT:
                    case T.NOSCRIPT:
                      return { innerHTML: t }
                    case T.STYLE:
                      return { cssText: t }
                  }
                  throw new Error(
                    '<' +
                      e.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
                  )
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    o = e.nestedChildren
                  return Y(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      Y({}, a, this.mapNestedChildrenToProps(n, o)),
                    ])),
                    t)
                  )
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    o = e.newChildProps,
                    i = e.nestedChildren
                  switch (r.type) {
                    case T.TITLE:
                      return Y(
                        {},
                        a,
                        (((t = {})[r.type] = i),
                        (t.titleAttributes = Y({}, o)),
                        t)
                      )
                    case T.BODY:
                      return Y({}, a, { bodyAttributes: Y({}, o) })
                    case T.HTML:
                      return Y({}, a, { htmlAttributes: Y({}, o) })
                  }
                  return Y({}, a, (((n = {})[r.type] = Y({}, o)), n))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = Y({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r
                      n = Y({}, n, (((r = {})[t] = e[t]), r))
                    }),
                    n
                  )
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {}
                  return (
                    m.a.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          o = a.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[B[n] || n] = e[n]), t
                            }, t)
                          })(W(a, ['children']))
                        switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                          case T.LINK:
                          case T.META:
                          case T.NOSCRIPT:
                          case T.SCRIPT:
                          case T.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                            break
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: o,
                            })
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  )
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = W(e, ['children']),
                    r = Y({}, n)
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    m.a.createElement(a, r)
                  )
                }),
                H(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function (e) {
                      a.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(m.a.Component)),
            (o.propTypes = {
              base: u.a.object,
              bodyAttributes: u.a.object,
              children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]),
              defaultTitle: u.a.string,
              defer: u.a.bool,
              encodeSpecialCharacters: u.a.bool,
              htmlAttributes: u.a.object,
              link: u.a.arrayOf(u.a.object),
              meta: u.a.arrayOf(u.a.object),
              noscript: u.a.arrayOf(u.a.object),
              onChangeClientState: u.a.func,
              script: u.a.arrayOf(u.a.object),
              style: u.a.arrayOf(u.a.object),
              title: u.a.string,
              titleAttributes: u.a.object,
              titleTemplate: u.a.string,
            }),
            (o.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (o.peek = a.peek),
            (o.rewind = function () {
              var e = a.rewind()
              return (
                e ||
                  (e = de({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: '',
                    titleAttributes: {},
                  })),
                e
              )
            }),
            i)
        ye.renderStatic = ye.rewind
      }.call(this, n('yLpj')))
    },
    xKBe: function (e, t, n) {
      'use strict'
      var r = n('q1tI'),
        a = n.n(r),
        o = n('qhky'),
        i = function (e) {
          var t = e.title
          return a.a.createElement(
            o.a,
            null,
            a.a.createElement('title', null, t),
            a.a.createElement('link', {
              href:
                'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
              rel: 'stylesheet',
            })
          )
        },
        c = n('TSYQ'),
        u = n.n(c),
        l = n('I77B'),
        s = function (e) {
          var t = e.children,
            n = e.className,
            r = e.Component,
            o = void 0 === r ? 'div' : r,
            i = e.id
          return a.a.createElement(o, { id: i, className: u()(l.area, n) }, t)
        },
        f = n('UZXO'),
        p = n('10BB'),
        d = n('FZDs'),
        m = function () {
          return a.a.createElement(
            s,
            { Component: 'footer', id: d.footer },
            a.a.createElement(f.a, {
              items: [
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.k, null),
                  'damian.zamola.zamolski@gmail.com'
                ),
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.j, null),
                  'DamianZamolski#8167'
                ),
              ],
            })
          )
        },
        y = n('6r2t'),
        h = function (e) {
          var t = e.title
          return a.a.createElement(
            s,
            { Component: 'header', id: y.header },
            a.a.createElement('h1', null, t)
          )
        },
        b = function (e) {
          var t = e.children,
            n = e.className,
            r = e.Component,
            o = void 0 === r ? 'div' : r,
            i = e.id
          return a.a.createElement(o, { id: i, className: u()(l.area, n) }, t)
        },
        v = n('LIDZ'),
        g = function (e) {
          var t = e.children,
            n = e.Component,
            r = e.id
          return a.a.createElement(
            b,
            { className: v.lightArea, Component: n, id: r },
            t
          )
        },
        T = n('NyQI'),
        O = function (e) {
          var t = e.children
          return a.a.createElement(g, { Component: 'main', id: T.main }, t)
        },
        w = n('QVrL'),
        E = function (e) {
          var t = e.children,
            n = e.Component,
            r = e.id
          return a.a.createElement(
            b,
            { className: w.darkArea, Component: n, id: r },
            t
          )
        },
        A = n('Wbzz'),
        C = function (e) {
          var t = e.children,
            n = e.page
          return a.a.createElement(A.a, { to: n }, t)
        },
        j = n('Z6Se'),
        S = function () {
          return a.a.createElement(
            E,
            { Component: 'nav', id: j.nav },
            a.a.createElement(f.a, {
              items: [
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.h, null),
                  'Journal',
                  a.a.createElement(f.a, {
                    items: [
                      a.a.createElement(
                        C,
                        { page: '/journal/2020-09-09' },
                        '2020-09-09'
                      ),
                    ],
                    ordered: !0,
                    padded: !0,
                  })
                ),
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.b, null),
                  'Routines:',
                  a.a.createElement(f.a, {
                    items: [
                      a.a.createElement(
                        C,
                        { page: '/routines/morning' },
                        a.a.createElement(p.q, null),
                        'Morning'
                      ),
                      a.a.createElement(
                        C,
                        { page: '/routines/evening' },
                        a.a.createElement(p.m, null),
                        'Evening'
                      ),
                    ],
                    ordered: !0,
                    padded: !0,
                  })
                ),
                a.a.createElement(
                  C,
                  { page: '/macronutrients' },
                  a.a.createElement(p.t, null),
                  'Macronutrients'
                ),
                a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.g, null),
                  'Books',
                  a.a.createElement(f.a, {
                    items: [
                      a.a.createElement(
                        C,
                        { page: '/books/12-rules-for-life' },
                        '12 Rules for Life'
                      ),
                      a.a.createElement(
                        C,
                        { page: '/books/first-man-in' },
                        'First Man In'
                      ),
                    ],
                    padded: !0,
                  })
                ),
              ],
            })
          )
        },
        x = function (e) {
          var t = e.children,
            n = e.title
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(S, null),
            a.a.createElement(h, { title: n }),
            a.a.createElement(O, null, t),
            a.a.createElement(m, null)
          )
        },
        k = n('TKWK')
      t.a = function (e) {
        var t = e.children,
          n = e.title
        return a.a.createElement(
          'div',
          { id: k.page },
          a.a.createElement(i, { title: n }),
          a.a.createElement(x, { title: n }, t)
        )
      }
    },
  },
])
//# sourceMappingURL=commons-e7f20de9d7604e8fe4b9.js.map
