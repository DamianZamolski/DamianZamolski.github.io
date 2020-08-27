;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '6r2t': function (e, t, r) {
      e.exports = { header: 'Header-module--header--3OZ6N' }
    },
    '8+s/': function (e, t, r) {
      'use strict'
      var n,
        o = r('q1tI'),
        a = (n = o) && 'object' == typeof n && 'default' in n ? n.default : n
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var c = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      e.exports = function (e, t, r) {
        if ('function' != typeof e)
          throw new Error('Expected reducePropsToState to be a function.')
        if ('function' != typeof t)
          throw new Error(
            'Expected handleStateChangeOnClient to be a function.'
          )
        if (void 0 !== r && 'function' != typeof r)
          throw new Error(
            'Expected mapStateOnServer to either be undefined or a function.'
          )
        return function (n) {
          if ('function' != typeof n)
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
              f.canUseDOM ? t(u) : r && (u = r(u))
          }
          var f = (function (e) {
            var t, r
            function o() {
              return e.apply(this, arguments) || this
            }
            ;(r = e),
              ((t = o).prototype = Object.create(r.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = r),
              (o.peek = function () {
                return u
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    'You may only call rewind() on the server. Call peek() to read the current state.'
                  )
                var e = u
                return (u = void 0), (l = []), e
              })
            var i = o.prototype
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
                return a.createElement(n, this.props)
              }),
              o
            )
          })(o.PureComponent)
          return (
            i(
              f,
              'displayName',
              'SideEffect(' +
                (function (e) {
                  return e.displayName || e.name || 'Component'
                })(n) +
                ')'
            ),
            i(f, 'canUseDOM', c),
            f
          )
        }
      }
    },
    FZDs: function (e, t, r) {
      e.exports = { footer: 'Footer-module--footer--V8wej' }
    },
    I77B: function (e, t, r) {
      e.exports = { area: 'area-module--area--2kuCT' }
    },
    LIDZ: function (e, t, r) {
      e.exports = { lightArea: 'light-area-module--light-area--2D3IV' }
    },
    NyQI: function (e, t, r) {
      e.exports = { main: 'Main-module--main--3Jql9' }
    },
    QVrL: function (e, t, r) {
      e.exports = { darkArea: 'dark-area-module--dark-area--3Cn6t' }
    },
    TKWK: function (e, t, r) {
      e.exports = { page: 'Page-module--page--Mo1Sm' }
    },
    TSYQ: function (e, t, r) {
      var n
      !(function () {
        'use strict'
        var r = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t]
            if (n) {
              var a = typeof n
              if ('string' === a || 'number' === a) e.push(n)
              else if (Array.isArray(n) && n.length) {
                var i = o.apply(null, n)
                i && e.push(i)
              } else if ('object' === a)
                for (var c in n) r.call(n, c) && n[c] && e.push(c)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o
              }.apply(t, [])) || (e.exports = n)
      })()
    },
    Z6Se: function (e, t, r) {
      e.exports = {
        nav: 'nav-module--nav--XOa-H',
        list: 'nav-module--list--2gdHL',
      }
    },
    ZhWT: function (e, t) {
      var r = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        o = 'function' == typeof Set,
        a = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
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
              if (n && t instanceof Map && i instanceof Map) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!i.has(u.value[0])) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!e(u.value[1], i.get(u.value[0]))) return !1
                return !0
              }
              if (o && t instanceof Set && i instanceof Set) {
                if (t.size !== i.size) return !1
                for (s = t.entries(); !(u = s.next()).done; )
                  if (!i.has(u.value[0])) return !1
                return !0
              }
              if (a && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
              if (r && t instanceof Element) return !1
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
    qhky: function (e, t, r) {
      'use strict'
      ;(function (e) {
        r.d(t, 'a', function () {
          return me
        })
        var n,
          o,
          a,
          i,
          c = r('17x9'),
          u = r.n(c),
          l = r('8+s/'),
          s = r.n(l),
          f = r('ZhWT'),
          p = r.n(f),
          d = r('q1tI'),
          y = r.n(d),
          m = r('6qGY'),
          h = r.n(m),
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
          A = 'href',
          E = 'http-equiv',
          S = 'innerHTML',
          C = 'itemprop',
          j = 'name',
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
          R = 'encodeSpecialCharacters',
          D = 'onChangeClientState',
          q = 'titleTemplate',
          _ = Object.keys(L).reduce(function (e, t) {
            return (e[L[t]] = t), e
          }, {}),
          B = [T.NOSCRIPT, T.SCRIPT, T.STYLE],
          H =
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
          F = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          },
          z = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r]
                ;(n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t
            }
          })(),
          Y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            },
          W = function (e, t) {
            var r = {}
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]))
            return r
          },
          K = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          },
          U = function (e) {
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
          Z = function (e) {
            var t = G(e, T.TITLE),
              r = G(e, q)
            if (r && t)
              return r.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join('') : t
              })
            var n = G(e, N)
            return t || n || void 0
          },
          V = function (e) {
            return G(e, D) || function () {}
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
          J = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[T.BASE]
              })
              .map(function (e) {
                return e[T.BASE]
              })
              .reverse()
              .reduce(function (t, r) {
                if (!t.length)
                  for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                    var a = n[o].toLowerCase()
                    if (-1 !== e.indexOf(a) && r[a]) return t.concat(r)
                  }
                return t
              }, [])
          },
          $ = function (e, t, r) {
            var n = {}
            return r
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    ne(
                      'Helmet: ' +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        H(t[e]) +
                        '"'
                    ),
                  !1)
                )
              })
              .map(function (t) {
                return t[e]
              })
              .reverse()
              .reduce(function (e, r) {
                var o = {}
                r.filter(function (e) {
                  for (
                    var r = void 0, a = Object.keys(e), i = 0;
                    i < a.length;
                    i++
                  ) {
                    var c = a[i],
                      u = c.toLowerCase()
                    ;-1 === t.indexOf(u) ||
                      (r === k && 'canonical' === e[r].toLowerCase()) ||
                      (u === k && 'stylesheet' === e[u].toLowerCase()) ||
                      (r = u),
                      -1 === t.indexOf(c) ||
                        (c !== S && c !== w && c !== C) ||
                        (r = c)
                  }
                  if (!r || !e[r]) return !1
                  var l = e[r].toLowerCase()
                  return (
                    n[r] || (n[r] = {}),
                    o[r] || (o[r] = {}),
                    !n[r][l] && ((o[r][l] = !0), !0)
                  )
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t)
                  })
                for (var a = Object.keys(o), i = 0; i < a.length; i++) {
                  var c = a[i],
                    u = h()({}, n[c], o[c])
                  n[c] = u
                }
                return e
              }, [])
              .reverse()
          },
          G = function (e, t) {
            for (var r = e.length - 1; r >= 0; r--) {
              var n = e[r]
              if (n.hasOwnProperty(t)) return n[t]
            }
            return null
          },
          X =
            ((n = Date.now()),
            function (e) {
              var t = Date.now()
              t - n > 16
                ? ((n = t), e(t))
                : setTimeout(function () {
                    X(e)
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
                X
              : e.requestAnimationFrame || X,
          re =
            'undefined' != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                ee
              : e.cancelAnimationFrame || ee,
          ne = function (e) {
            return (
              console && 'function' == typeof console.warn && console.warn(e)
            )
          },
          oe = null,
          ae = function (e, t) {
            var r = e.baseTag,
              n = e.bodyAttributes,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              u = e.onChangeClientState,
              l = e.scriptTags,
              s = e.styleTags,
              f = e.title,
              p = e.titleAttributes
            ue(T.BODY, n), ue(T.HTML, o), ce(f, p)
            var d = {
                baseTag: le(T.BASE, r),
                linkTags: le(T.LINK, a),
                metaTags: le(T.META, i),
                noscriptTags: le(T.NOSCRIPT, c),
                scriptTags: le(T.SCRIPT, l),
                styleTags: le(T.STYLE, s),
              },
              y = {},
              m = {}
            Object.keys(d).forEach(function (e) {
              var t = d[e],
                r = t.newTags,
                n = t.oldTags
              r.length && (y[e] = r), n.length && (m[e] = d[e].oldTags)
            }),
              t && t(),
              u(e, y, m)
          },
          ie = function (e) {
            return Array.isArray(e) ? e.join('') : e
          },
          ce = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = ie(e)),
              ue(T.TITLE, t)
          },
          ue = function (e, t) {
            var r = document.getElementsByTagName(e)[0]
            if (r) {
              for (
                var n = r.getAttribute('data-react-helmet'),
                  o = n ? n.split(',') : [],
                  a = [].concat(o),
                  i = Object.keys(t),
                  c = 0;
                c < i.length;
                c++
              ) {
                var u = i[c],
                  l = t[u] || ''
                r.getAttribute(u) !== l && r.setAttribute(u, l),
                  -1 === o.indexOf(u) && o.push(u)
                var s = a.indexOf(u)
                ;-1 !== s && a.splice(s, 1)
              }
              for (var f = a.length - 1; f >= 0; f--) r.removeAttribute(a[f])
              o.length === a.length
                ? r.removeAttribute('data-react-helmet')
                : r.getAttribute('data-react-helmet') !== i.join(',') &&
                  r.setAttribute('data-react-helmet', i.join(','))
            }
          },
          le = function (e, t) {
            var r = document.head || document.querySelector(T.HEAD),
              n = r.querySelectorAll(e + '[data-react-helmet]'),
              o = Array.prototype.slice.call(n),
              a = [],
              i = void 0
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var r = document.createElement(e)
                  for (var n in t)
                    if (t.hasOwnProperty(n))
                      if (n === S) r.innerHTML = t.innerHTML
                      else if (n === w)
                        r.styleSheet
                          ? (r.styleSheet.cssText = t.cssText)
                          : r.appendChild(document.createTextNode(t.cssText))
                      else {
                        var c = void 0 === t[n] ? '' : t[n]
                        r.setAttribute(n, c)
                      }
                  r.setAttribute('data-react-helmet', 'true'),
                    o.some(function (e, t) {
                      return (i = t), r.isEqualNode(e)
                    })
                      ? o.splice(i, 1)
                      : a.push(r)
                }),
              o.forEach(function (e) {
                return e.parentNode.removeChild(e)
              }),
              a.forEach(function (e) {
                return r.appendChild(e)
              }),
              { oldTags: o, newTags: a }
            )
          },
          se = function (e) {
            return Object.keys(e).reduce(function (t, r) {
              var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : '' + r
              return t ? t + ' ' + n : n
            }, '')
          },
          fe = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return Object.keys(e).reduce(function (t, r) {
              return (t[L[r] || r] = e[r]), t
            }, t)
          },
          pe = function (e, t, r) {
            switch (e) {
              case T.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (r = t.titleAttributes),
                      ((n = { key: e })['data-react-helmet'] = !0),
                      (o = fe(r, n)),
                      [y.a.createElement(T.TITLE, o, e)]
                    )
                    var e, r, n, o
                  },
                  toString: function () {
                    return (function (e, t, r, n) {
                      var o = se(r),
                        a = ie(t)
                      return o
                        ? '<' +
                            e +
                            ' data-react-helmet="true" ' +
                            o +
                            '>' +
                            U(a, n) +
                            '</' +
                            e +
                            '>'
                        : '<' +
                            e +
                            ' data-react-helmet="true">' +
                            U(a, n) +
                            '</' +
                            e +
                            '>'
                    })(e, t.title, t.titleAttributes, r)
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
                      return t.map(function (t, r) {
                        var n,
                          o = (((n = { key: r })['data-react-helmet'] = !0), n)
                        return (
                          Object.keys(t).forEach(function (e) {
                            var r = L[e] || e
                            if (r === S || r === w) {
                              var n = t.innerHTML || t.cssText
                              o.dangerouslySetInnerHTML = { __html: n }
                            } else o[r] = t[e]
                          }),
                          y.a.createElement(e, o)
                        )
                      })
                    })(e, t)
                  },
                  toString: function () {
                    return (function (e, t, r) {
                      return t.reduce(function (t, n) {
                        var o = Object.keys(n)
                            .filter(function (e) {
                              return !(e === S || e === w)
                            })
                            .reduce(function (e, t) {
                              var o =
                                void 0 === n[t]
                                  ? t
                                  : t + '="' + U(n[t], r) + '"'
                              return e ? e + ' ' + o : o
                            }, ''),
                          a = n.innerHTML || n.cssText || '',
                          i = -1 === B.indexOf(e)
                        return (
                          t +
                          '<' +
                          e +
                          ' data-react-helmet="true" ' +
                          o +
                          (i ? '/>' : '>' + a + '</' + e + '>')
                        )
                      }, '')
                    })(e, t, r)
                  },
                }
            }
          },
          de = function (e) {
            var t = e.baseTag,
              r = e.bodyAttributes,
              n = e.encode,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              u = e.scriptTags,
              l = e.styleTags,
              s = e.title,
              f = void 0 === s ? '' : s,
              p = e.titleAttributes
            return {
              base: pe(T.BASE, t, n),
              bodyAttributes: pe(b, r, n),
              htmlAttributes: pe(v, o, n),
              link: pe(T.LINK, a, n),
              meta: pe(T.META, i, n),
              noscript: pe(T.NOSCRIPT, c, n),
              script: pe(T.SCRIPT, u, n),
              style: pe(T.STYLE, l, n),
              title: pe(T.TITLE, { title: f, titleAttributes: p }, n),
            }
          },
          ye = s()(
            function (e) {
              return {
                baseTag: J([A, I], e),
                bodyAttributes: Q(b, e),
                defer: G(e, M),
                encode: G(e, R),
                htmlAttributes: Q(v, e),
                linkTags: $(T.LINK, [k, A], e),
                metaTags: $(T.META, [j, O, E, x, C], e),
                noscriptTags: $(T.NOSCRIPT, [S], e),
                onChangeClientState: V(e),
                scriptTags: $(T.SCRIPT, [P, S], e),
                styleTags: $(T.STYLE, [w], e),
                title: Z(e),
                titleAttributes: Q(g, e),
              }
            },
            function (e) {
              oe && re(oe),
                e.defer
                  ? (oe = te(function () {
                      ae(e, function () {
                        oe = null
                      })
                    }))
                  : (ae(e), (oe = null))
            },
            de
          )(function () {
            return null
          }),
          me =
            ((o = ye),
            (i = a = (function (e) {
              function t() {
                return F(this, t), K(this, e.apply(this, arguments))
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
                    r = e.child,
                    n = e.arrayTypeChildren,
                    o = e.newChildProps,
                    a = e.nestedChildren
                  return Y(
                    {},
                    n,
                    (((t = {})[r.type] = [].concat(n[r.type] || [], [
                      Y({}, o, this.mapNestedChildrenToProps(r, a)),
                    ])),
                    t)
                  )
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    r,
                    n = e.child,
                    o = e.newProps,
                    a = e.newChildProps,
                    i = e.nestedChildren
                  switch (n.type) {
                    case T.TITLE:
                      return Y(
                        {},
                        o,
                        (((t = {})[n.type] = i),
                        (t.titleAttributes = Y({}, a)),
                        t)
                      )
                    case T.BODY:
                      return Y({}, o, { bodyAttributes: Y({}, a) })
                    case T.HTML:
                      return Y({}, o, { htmlAttributes: Y({}, a) })
                  }
                  return Y({}, o, (((r = {})[n.type] = Y({}, a)), r))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var r = Y({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var n
                      r = Y({}, r, (((n = {})[t] = e[t]), n))
                    }),
                    r
                  )
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var r = this,
                    n = {}
                  return (
                    y.a.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var o = e.props,
                          a = o.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, r) {
                              return (t[_[r] || r] = e[r]), t
                            }, t)
                          })(W(o, ['children']))
                        switch ((r.warnOnInvalidChildren(e, a), e.type)) {
                          case T.LINK:
                          case T.META:
                          case T.NOSCRIPT:
                          case T.SCRIPT:
                          case T.STYLE:
                            n = r.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: n,
                              newChildProps: i,
                              nestedChildren: a,
                            })
                            break
                          default:
                            t = r.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: a,
                            })
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(n, t))
                  )
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    r = W(e, ['children']),
                    n = Y({}, r)
                  return (
                    t && (n = this.mapChildrenToProps(t, n)),
                    y.a.createElement(o, n)
                  )
                }),
                z(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function (e) {
                      o.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(y.a.Component)),
            (a.propTypes = {
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
            (a.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (a.peek = o.peek),
            (a.rewind = function () {
              var e = o.rewind()
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
        me.renderStatic = me.rewind
      }.call(this, r('yLpj')))
    },
    xKBe: function (e, t, r) {
      'use strict'
      var n = r('q1tI'),
        o = r.n(n),
        a = r('qhky'),
        i = function (e) {
          var t = e.title
          return o.a.createElement(
            a.a,
            null,
            o.a.createElement('title', null, t),
            o.a.createElement('link', {
              href:
                'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
              rel: 'stylesheet',
            })
          )
        },
        c = r('7O5W'),
        u = r('17x9'),
        l = r.n(u)
      function s(e) {
        return (s =
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
      function f(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function p(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                f(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function y(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]))
        }
        return o
      }
      function m(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t]
              return r
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
      function h(e) {
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
      function b(e) {
        return e
          .split(';')
          .map(function (e) {
            return e.trim()
          })
          .filter(function (e) {
            return e
          })
          .reduce(function (e, t) {
            var r,
              n = t.indexOf(':'),
              o = h(t.slice(0, n)),
              a = t.slice(n + 1).trim()
            return (
              o.startsWith('webkit')
                ? (e[((r = o), r.charAt(0).toUpperCase() + r.slice(1))] = a)
                : (e[o] = a),
              e
            )
          }, {})
      }
      var v = !1
      try {
        v = !0
      } catch (K) {}
      function g(e) {
        return null === e
          ? null
          : 'object' === s(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : 'string' == typeof e
          ? { prefix: 'fas', iconName: e }
          : void 0
      }
      function T(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? f({}, e, t)
          : {}
      }
      function O(e) {
        var t = e.forwardedRef,
          r = y(e, ['forwardedRef']),
          n = r.icon,
          o = r.mask,
          a = r.symbol,
          i = r.className,
          u = r.title,
          l = g(n),
          s = T(
            'classes',
            [].concat(
              m(
                (function (e) {
                  var t,
                    r = e.spin,
                    n = e.pulse,
                    o = e.fixedWidth,
                    a = e.inverse,
                    i = e.border,
                    c = e.listItem,
                    u = e.flip,
                    l = e.size,
                    s = e.rotation,
                    p = e.pull,
                    d =
                      (f(
                        (t = {
                          'fa-spin': r,
                          'fa-pulse': n,
                          'fa-fw': o,
                          'fa-inverse': a,
                          'fa-border': i,
                          'fa-li': c,
                          'fa-flip-horizontal':
                            'horizontal' === u || 'both' === u,
                          'fa-flip-vertical': 'vertical' === u || 'both' === u,
                        }),
                        'fa-'.concat(l),
                        null != l
                      ),
                      f(t, 'fa-rotate-'.concat(s), null != s && 0 !== s),
                      f(t, 'fa-pull-'.concat(p), null != p),
                      f(t, 'fa-swap-opacity', e.swapOpacity),
                      t)
                  return Object.keys(d)
                    .map(function (e) {
                      return d[e] ? e : null
                    })
                    .filter(function (e) {
                      return e
                    })
                })(r)
              ),
              m(i.split(' '))
            )
          ),
          p = T(
            'transform',
            'string' == typeof r.transform
              ? c.c.transform(r.transform)
              : r.transform
          ),
          h = T('mask', g(o)),
          b = Object(c.b)(l, d({}, s, {}, p, {}, h, { symbol: a, title: u }))
        if (!b)
          return (
            (function () {
              var e
              !v &&
                console &&
                'function' == typeof console.error &&
                (e = console).error.apply(e, arguments)
            })('Could not find icon', l),
            null
          )
        var A = b.abstract,
          E = { ref: t }
        return (
          Object.keys(r).forEach(function (e) {
            O.defaultProps.hasOwnProperty(e) || (E[e] = r[e])
          }),
          w(A[0], E)
        )
      }
      ;(O.displayName = 'FontAwesomeIcon'),
        (O.propTypes = {
          border: l.a.bool,
          className: l.a.string,
          mask: l.a.oneOfType([l.a.object, l.a.array, l.a.string]),
          fixedWidth: l.a.bool,
          inverse: l.a.bool,
          flip: l.a.oneOf(['horizontal', 'vertical', 'both']),
          icon: l.a.oneOfType([l.a.object, l.a.array, l.a.string]),
          listItem: l.a.bool,
          pull: l.a.oneOf(['right', 'left']),
          pulse: l.a.bool,
          rotation: l.a.oneOf([0, 90, 180, 270]),
          size: l.a.oneOf([
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
          spin: l.a.bool,
          symbol: l.a.oneOfType([l.a.bool, l.a.string]),
          title: l.a.string,
          transform: l.a.oneOfType([l.a.string, l.a.object]),
          swapOpacity: l.a.bool,
        }),
        (O.defaultProps = {
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
      var w = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          if ('string' == typeof r) return r
          var o = (r.children || []).map(function (r) {
              return e(t, r)
            }),
            a = Object.keys(r.attributes || {}).reduce(
              function (e, t) {
                var n = r.attributes[t]
                switch (t) {
                  case 'class':
                    ;(e.attrs.className = n), delete r.attributes.class
                    break
                  case 'style':
                    e.attrs.style = b(n)
                    break
                  default:
                    0 === t.indexOf('aria-') || 0 === t.indexOf('data-')
                      ? (e.attrs[t.toLowerCase()] = n)
                      : (e.attrs[h(t)] = n)
                }
                return e
              },
              { attrs: {} }
            ),
            i = n.style,
            c = void 0 === i ? {} : i,
            u = y(n, ['style'])
          return (
            (a.attrs.style = d({}, a.attrs.style, {}, c)),
            t.apply(void 0, [r.tag, d({}, a.attrs, {}, u)].concat(m(o)))
          )
        }.bind(null, o.a.createElement),
        A = r('8tEE'),
        E = r('TSYQ'),
        S = r.n(E),
        C = r('I77B'),
        j = function (e) {
          var t = e.children,
            r = e.className,
            n = e.id
          return o.a.createElement(
            'div',
            { id: n, className: S()(C.area, r) },
            t
          )
        },
        x = r('FZDs'),
        k = function () {
          return o.a.createElement(
            j,
            { id: x.footer },
            o.a.createElement(O, { icon: A.b }),
            o.a.createElement(O, { icon: A.a })
          )
        },
        P = r('6r2t'),
        I = function (e) {
          var t = e.title
          return o.a.createElement(
            j,
            { id: P.header },
            o.a.createElement('h1', null, t)
          )
        },
        L = function (e) {
          var t = e.children,
            r = e.className,
            n = e.id
          return o.a.createElement(
            'div',
            { id: n, className: S()(C.area, r) },
            t
          )
        },
        N = r('LIDZ'),
        M = function (e) {
          var t = e.children,
            r = e.id
          return o.a.createElement(L, { className: N.lightArea, id: r }, t)
        },
        R = r('NyQI'),
        D = function (e) {
          var t = e.children
          return o.a.createElement(M, { id: R.main }, t)
        },
        q = r('QVrL'),
        _ = function (e) {
          var t = e.children,
            r = e.id
          return o.a.createElement(L, { className: q.darkArea, id: r }, t)
        },
        B = r('Z6Se'),
        H = r('Wbzz'),
        F = function (e) {
          var t = e.children,
            r = e.to
          return o.a.createElement(H.a, { to: r }, t)
        },
        z = function () {
          return o.a.createElement(
            _,
            { id: B.nav },
            o.a.createElement(
              'ul',
              { id: B.list },
              o.a.createElement(F, { to: '/macronutrients' }, 'Macronutrients')
            )
          )
        },
        Y = function (e) {
          var t = e.children,
            r = e.title
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(z, null),
            o.a.createElement(I, { title: r }),
            o.a.createElement(D, null, t),
            o.a.createElement(k, null)
          )
        },
        W = r('TKWK')
      t.a = function (e) {
        var t = e.children,
          r = e.title
        return o.a.createElement(
          'div',
          { id: W.page },
          o.a.createElement(i, { title: r }),
          o.a.createElement(Y, { title: r }, t)
        )
      }
    },
  },
])
//# sourceMappingURL=commons-35508588c2909041474d.js.map
