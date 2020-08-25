;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
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
          h = r.n(d),
          m = r('6qGY'),
          y = r.n(m),
          b = 'bodyAttributes',
          v = 'htmlAttributes',
          T = 'titleAttributes',
          g = {
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
          w =
            (Object.keys(g).map(function (e) {
              return g[e]
            }),
            'charset'),
          E = 'cssText',
          A = 'href',
          O = 'http-equiv',
          C = 'innerHTML',
          S = 'itemprop',
          j = 'name',
          k = 'property',
          x = 'rel',
          I = 'src',
          P = 'target',
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
          q = 'onChangeClientState',
          D = 'titleTemplate',
          B = Object.keys(L).reduce(function (e, t) {
            return (e[L[t]] = t), e
          }, {}),
          F = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
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
          _ = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          },
          Y = (function () {
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
          K =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            },
          U = function (e, t) {
            var r = {}
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]))
            return r
          },
          Z = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t
          },
          z = function (e) {
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
          W = function (e) {
            var t = G(e, g.TITLE),
              r = G(e, D)
            if (r && t)
              return r.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join('') : t
              })
            var n = G(e, N)
            return t || n || void 0
          },
          V = function (e) {
            return G(e, q) || function () {}
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
                return K({}, e, t)
              }, {})
          },
          J = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[g.BASE]
              })
              .map(function (e) {
                return e[g.BASE]
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
                      (r === x && 'canonical' === e[r].toLowerCase()) ||
                      (u === x && 'stylesheet' === e[u].toLowerCase()) ||
                      (r = u),
                      -1 === t.indexOf(c) ||
                        (c !== C && c !== E && c !== S) ||
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
                    u = y()({}, n[c], o[c])
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
            ue(g.BODY, n), ue(g.HTML, o), ce(f, p)
            var d = {
                baseTag: le(g.BASE, r),
                linkTags: le(g.LINK, a),
                metaTags: le(g.META, i),
                noscriptTags: le(g.NOSCRIPT, c),
                scriptTags: le(g.SCRIPT, l),
                styleTags: le(g.STYLE, s),
              },
              h = {},
              m = {}
            Object.keys(d).forEach(function (e) {
              var t = d[e],
                r = t.newTags,
                n = t.oldTags
              r.length && (h[e] = r), n.length && (m[e] = d[e].oldTags)
            }),
              t && t(),
              u(e, h, m)
          },
          ie = function (e) {
            return Array.isArray(e) ? e.join('') : e
          },
          ce = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = ie(e)),
              ue(g.TITLE, t)
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
            var r = document.head || document.querySelector(g.HEAD),
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
                      if (n === C) r.innerHTML = t.innerHTML
                      else if (n === E)
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
              case g.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (r = t.titleAttributes),
                      ((n = { key: e })['data-react-helmet'] = !0),
                      (o = fe(r, n)),
                      [h.a.createElement(g.TITLE, o, e)]
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
                            z(a, n) +
                            '</' +
                            e +
                            '>'
                        : '<' +
                            e +
                            ' data-react-helmet="true">' +
                            z(a, n) +
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
                            if (r === C || r === E) {
                              var n = t.innerHTML || t.cssText
                              o.dangerouslySetInnerHTML = { __html: n }
                            } else o[r] = t[e]
                          }),
                          h.a.createElement(e, o)
                        )
                      })
                    })(e, t)
                  },
                  toString: function () {
                    return (function (e, t, r) {
                      return t.reduce(function (t, n) {
                        var o = Object.keys(n)
                            .filter(function (e) {
                              return !(e === C || e === E)
                            })
                            .reduce(function (e, t) {
                              var o =
                                void 0 === n[t]
                                  ? t
                                  : t + '="' + z(n[t], r) + '"'
                              return e ? e + ' ' + o : o
                            }, ''),
                          a = n.innerHTML || n.cssText || '',
                          i = -1 === F.indexOf(e)
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
              base: pe(g.BASE, t, n),
              bodyAttributes: pe(b, r, n),
              htmlAttributes: pe(v, o, n),
              link: pe(g.LINK, a, n),
              meta: pe(g.META, i, n),
              noscript: pe(g.NOSCRIPT, c, n),
              script: pe(g.SCRIPT, u, n),
              style: pe(g.STYLE, l, n),
              title: pe(g.TITLE, { title: f, titleAttributes: p }, n),
            }
          },
          he = s()(
            function (e) {
              return {
                baseTag: J([A, P], e),
                bodyAttributes: Q(b, e),
                defer: G(e, M),
                encode: G(e, R),
                htmlAttributes: Q(v, e),
                linkTags: $(g.LINK, [x, A], e),
                metaTags: $(g.META, [j, w, O, k, S], e),
                noscriptTags: $(g.NOSCRIPT, [C], e),
                onChangeClientState: V(e),
                scriptTags: $(g.SCRIPT, [I, C], e),
                styleTags: $(g.STYLE, [E], e),
                title: W(e),
                titleAttributes: Q(T, e),
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
            ((o = he),
            (i = a = (function (e) {
              function t() {
                return _(this, t), Z(this, e.apply(this, arguments))
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
                    case g.SCRIPT:
                    case g.NOSCRIPT:
                      return { innerHTML: t }
                    case g.STYLE:
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
                  return K(
                    {},
                    n,
                    (((t = {})[r.type] = [].concat(n[r.type] || [], [
                      K({}, o, this.mapNestedChildrenToProps(r, a)),
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
                    case g.TITLE:
                      return K(
                        {},
                        o,
                        (((t = {})[n.type] = i),
                        (t.titleAttributes = K({}, a)),
                        t)
                      )
                    case g.BODY:
                      return K({}, o, { bodyAttributes: K({}, a) })
                    case g.HTML:
                      return K({}, o, { htmlAttributes: K({}, a) })
                  }
                  return K({}, o, (((r = {})[n.type] = K({}, a)), r))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var r = K({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var n
                      r = K({}, r, (((n = {})[t] = e[t]), n))
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
                    h.a.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var o = e.props,
                          a = o.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, r) {
                              return (t[B[r] || r] = e[r]), t
                            }, t)
                          })(U(o, ['children']))
                        switch ((r.warnOnInvalidChildren(e, a), e.type)) {
                          case g.LINK:
                          case g.META:
                          case g.NOSCRIPT:
                          case g.SCRIPT:
                          case g.STYLE:
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
                    r = U(e, ['children']),
                    n = K({}, r)
                  return (
                    t && (n = this.mapChildrenToProps(t, n)),
                    h.a.createElement(o, n)
                  )
                }),
                Y(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function (e) {
                      o.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(h.a.Component)),
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
        c = r('TSYQ'),
        u = r.n(c),
        l = r('I77B'),
        s = function (e) {
          var t = e.children,
            r = e.className,
            n = e.id
          return o.a.createElement(
            'div',
            { id: n, className: u()(l.area, r) },
            t
          )
        },
        f = r('FZDs'),
        p = function () {
          return o.a.createElement(s, { id: f.footer }, 'Footer')
        },
        d = r('6r2t'),
        h = function (e) {
          var t = e.title
          return o.a.createElement(
            s,
            { id: d.header },
            o.a.createElement('h1', null, t)
          )
        },
        m = function (e) {
          var t = e.children,
            r = e.className,
            n = e.id
          return o.a.createElement(
            'div',
            { id: n, className: u()(l.area, r) },
            t
          )
        },
        y = r('LIDZ'),
        b = function (e) {
          var t = e.children,
            r = e.id
          return o.a.createElement(m, { className: y.lightArea, id: r }, t)
        },
        v = r('NyQI'),
        T = function (e) {
          var t = e.children
          return o.a.createElement(b, { id: v.main }, t)
        },
        g = r('QVrL'),
        w = function (e) {
          var t = e.children,
            r = e.id
          return o.a.createElement(m, { className: g.darkArea, id: r }, t)
        },
        E = r('Z6Se'),
        A = r('Wbzz'),
        O = function (e) {
          var t = e.children,
            r = e.to
          return o.a.createElement(A.a, { to: r }, t)
        },
        C = function () {
          return o.a.createElement(
            w,
            { id: E.nav },
            o.a.createElement(
              'ul',
              { id: E.list },
              o.a.createElement(O, { to: '/macronutrients' }, 'Macronutrients')
            )
          )
        },
        S = function (e) {
          var t = e.children,
            r = e.title
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(C, null),
            o.a.createElement(h, { title: r }),
            o.a.createElement(T, null, t),
            o.a.createElement(p, null)
          )
        },
        j = r('TKWK')
      t.a = function (e) {
        var t = e.children,
          r = e.title
        return o.a.createElement(
          'div',
          { id: j.page },
          o.a.createElement(i, { title: r }),
          o.a.createElement(S, { title: r }, t)
        )
      }
    },
    yLpj: function (e, t) {
      var r
      r = (function () {
        return this
      })()
      try {
        r = r || new Function('return this')()
      } catch (n) {
        'object' == typeof window && (r = window)
      }
      e.exports = r
    },
  },
])
//# sourceMappingURL=commons-9d0964e692c459b4394b.js.map
