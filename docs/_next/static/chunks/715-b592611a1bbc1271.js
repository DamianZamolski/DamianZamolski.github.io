'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [715],
  {
    2676: (e, t, a) => {
      a.d(t, { fp: () => h });
      var r = a(4843),
        n = a(2925);
      let i = (0, r.createContext)(void 0),
        s = (e) => {
          let t = (0, r.useContext)(i);
          return (null == e ? void 0 : e.store) || t || (0, n.zp)();
        },
        d = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        o = (e) => {
          (e.status = 'pending'),
            e.then(
              (t) => {
                (e.status = 'fulfilled'), (e.value = t);
              },
              (t) => {
                (e.status = 'rejected'), (e.reason = t);
              },
            );
        },
        l =
          r.use ||
          ((e) => {
            if ('pending' === e.status) throw e;
            if ('fulfilled' === e.status) return e.value;
            if ('rejected' === e.status) throw e.reason;
            throw (o(e), e);
          }),
        u = new WeakMap(),
        c = (e) => {
          let t = u.get(e);
          return (
            t ||
              ((t = new Promise((a, r) => {
                let n = e,
                  i = (e) => (t) => {
                    n === e && a(t);
                  },
                  s = (e) => (t) => {
                    n === e && r(t);
                  },
                  o = (e) => {
                    'onCancel' in e &&
                      'function' == typeof e.onCancel &&
                      e.onCancel((r) => {
                        if (r === e)
                          throw Error(
                            '[Bug] p is not updated even after cancelation',
                          );
                        d(r)
                          ? (u.set(r, t), (n = r), r.then(i(r), s(r)), o(r))
                          : a(r);
                      });
                  };
                e.then(i(e), s(e)), o(e);
              })),
              u.set(e, t)),
            t
          );
        };
      function h(e, t) {
        return [
          (function (e, t) {
            let a = s(t),
              [[n, i, u], h] = (0, r.useReducer)(
                (t) => {
                  let r = a.get(e);
                  return Object.is(t[0], r) && t[1] === a && t[2] === e
                    ? t
                    : [r, a, e];
                },
                void 0,
                () => [a.get(e), a, e],
              ),
              p = n;
            (i !== a || u !== e) && (h(), (p = a.get(e)));
            let f = null == t ? void 0 : t.delay;
            return ((0, r.useEffect)(() => {
              let t = a.sub(e, () => {
                if ('number' == typeof f) {
                  let t = a.get(e);
                  d(t) && o(c(t)), setTimeout(h, f);
                  return;
                }
                h();
              });
              return h(), t;
            }, [a, e, f]),
            (0, r.useDebugValue)(p),
            d(p))
              ? l(c(p))
              : p;
          })(e, t),
          (function (e, t) {
            let a = s(t);
            return (0, r.useCallback)(
              function () {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                  r[n] = arguments[n];
                if (!('write' in e)) throw Error('not writable atom');
                return a.set(e, ...r);
              },
              [a, e],
            );
          })(e, t),
        ];
      }
    },
    2925: (e, t, a) => {
      let r;
      a.d(t, { eU: () => Z, zp: () => E });
      let n = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
        i = (e) => 'init' in e,
        s = (e) => !!e.write,
        d = (e) => 'v' in e || 'e' in e,
        o = (e) => {
          if ('e' in e) throw e.e;
          if (!('v' in e)) throw Error('[Bug] atom state is not initialized');
          return e.v;
        },
        l = Symbol(),
        u = (e) => e[l],
        c = (e) => {
          var t;
          return f(e) && !(null == (t = u(e)) ? void 0 : t[1]);
        },
        h = (e, t) => {
          let a = u(e);
          if (a) (a[1] = !0), a[0].forEach((e) => e(t));
          else throw Error('[Bug] cancelable promise not found');
        },
        p = (e) => {
          if (u(e)) return;
          let t = [new Set(), !1];
          e[l] = t;
          let a = () => {
            t[1] = !0;
          };
          e.then(a, a),
            (e.onCancel = (e) => {
              t[0].add(e);
            });
        },
        f = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        m = (e, t, a) => {
          a.p.has(e) ||
            (a.p.add(e),
            t.then(
              () => {
                a.p.delete(e);
              },
              () => {
                a.p.delete(e);
              },
            ));
        },
        v = (e, t, a) => {
          let r = a(e),
            n = 'v' in r,
            i = r.v,
            s = c(r.v) ? r.v : null;
          if (f(t)) for (let n of (p(t), r.d.keys())) m(e, t, a(n));
          (r.v = t),
            delete r.e,
            (n && Object.is(i, r.v)) || (++r.n, s && h(s, t));
        },
        y = (e, t, a) => {
          var r;
          let n = new Set();
          for (let t of (null == (r = a.get(e)) ? void 0 : r.t) || [])
            a.has(t) && n.add(t);
          for (let e of t.p) n.add(e);
          return n;
        },
        _ = () => {
          let e = new Set(),
            t = () => {
              e.forEach((e) => e());
            };
          return (
            (t.add = (t) => (
              e.add(t),
              () => {
                e.delete(t);
              }
            )),
            t
          );
        },
        g = () => {
          let e = {},
            t = new WeakMap(),
            a = (a) => {
              var r, n;
              null == (r = t.get(e)) || r.forEach((e) => e(a)),
                null == (n = t.get(a)) || n.forEach((e) => e());
            };
          return (
            (a.add = (a, r) => {
              let n = a || e,
                i = (t.has(n) ? t : t.set(n, new Set())).get(n);
              return (
                i.add(r),
                () => {
                  null == i || i.delete(r), i.size || t.delete(n);
                }
              );
            }),
            a
          );
        },
        b = Symbol(),
        k = (
          e = new WeakMap(),
          t = new WeakMap(),
          a = new WeakMap(),
          r = new Set(),
          l = new Set(),
          u = new Set(),
          h = {},
          p = (e, ...t) => e.read(...t),
          _ = (e, ...t) => e.write(...t),
          g = (e, t) => {
            var a;
            return null == (a = e.unstable_onInit) ? void 0 : a.call(e, t);
          },
          k = (e, t) => {
            var a;
            return null == (a = e.onMount) ? void 0 : a.call(e, t);
          },
          ...w
        ) => {
          let x =
              w[0] ||
              ((t) => {
                if (!t) throw Error('Atom is undefined or null');
                let a = e.get(t);
                return (
                  a ||
                    ((a = { d: new Map(), p: new Set(), n: 0 }),
                    e.set(t, a),
                    null == g || g(t, j)),
                  a
                );
              }),
            Z =
              w[1] ||
              (() => {
                let e, a;
                let n = (t) => {
                  try {
                    t();
                  } catch (t) {
                    e || ((e = !0), (a = t));
                  }
                };
                do {
                  h.f && n(h.f);
                  let e = new Set(),
                    a = e.add.bind(e);
                  r.forEach((e) => {
                    var r;
                    return null == (r = t.get(e)) ? void 0 : r.l.forEach(a);
                  }),
                    r.clear(),
                    u.forEach(a),
                    u.clear(),
                    l.forEach(a),
                    l.clear(),
                    e.forEach(n),
                    r.size && T();
                } while (r.size || u.size || l.size);
                if (e) throw a;
              }),
            T =
              w[2] ||
              (() => {
                let e = [],
                  n = new WeakSet(),
                  i = new WeakSet(),
                  s = Array.from(r);
                for (; s.length; ) {
                  let r = s[s.length - 1],
                    d = x(r);
                  if (i.has(r)) {
                    s.pop();
                    continue;
                  }
                  if (n.has(r)) {
                    if (a.get(r) === d.n) e.push([r, d]);
                    else if (a.has(r))
                      throw Error('[Bug] invalidated atom exists');
                    i.add(r), s.pop();
                    continue;
                  }
                  for (let e of (n.add(r), y(r, d, t))) n.has(e) || s.push(e);
                }
                for (let t = e.length - 1; t >= 0; --t) {
                  let [n, i] = e[t],
                    s = !1;
                  for (let e of i.d.keys())
                    if (e !== n && r.has(e)) {
                      s = !0;
                      break;
                    }
                  s && (S(n), E(n)), a.delete(n);
                }
              }),
            S =
              w[3] ||
              ((e) => {
                var l, u;
                let y, _;
                let g = x(e);
                if (
                  d(g) &&
                  ((t.has(e) && a.get(e) !== g.n) ||
                    Array.from(g.d).every(([e, t]) => S(e).n === t))
                )
                  return g;
                g.d.clear();
                let b = !0,
                  k = () => {
                    t.has(e) && (E(e), T(), Z());
                  },
                  w = g.n;
                try {
                  let a = p(
                    e,
                    (a) => {
                      var r;
                      if (n(e, a)) {
                        let e = x(a);
                        if (!d(e)) {
                          if (i(a)) v(a, a.init, x);
                          else throw Error('no atom init');
                        }
                        return o(e);
                      }
                      let s = S(a);
                      try {
                        return o(s);
                      } finally {
                        g.d.set(a, s.n),
                          c(g.v) && m(e, g.v, s),
                          null == (r = t.get(a)) || r.t.add(e),
                          b || k();
                      }
                    },
                    {
                      get signal() {
                        return y || (y = new AbortController()), y.signal;
                      },
                      get setSelf() {
                        return (
                          s(e) ||
                            console.warn(
                              'setSelf function cannot be used with read-only atom',
                            ),
                          !_ &&
                            s(e) &&
                            (_ = (...t) => {
                              if (
                                (b &&
                                  console.warn(
                                    'setSelf function cannot be called in sync',
                                  ),
                                !b)
                              )
                                try {
                                  return C(e, ...t);
                                } finally {
                                  T(), Z();
                                }
                            }),
                          _
                        );
                      },
                    },
                  );
                  return (
                    v(e, a, x),
                    f(a) &&
                      (null == (l = a.onCancel) ||
                        l.call(a, () => (null == y ? void 0 : y.abort())),
                      a.then(k, k)),
                    g
                  );
                } catch (e) {
                  return delete g.v, (g.e = e), ++g.n, g;
                } finally {
                  (b = !1),
                    w !== g.n &&
                      a.get(e) === w &&
                      (a.set(e, g.n),
                      r.add(e),
                      null == (u = h.c) || u.call(h, e));
                }
              }),
            O =
              w[4] ||
              ((e) => {
                let r = [e];
                for (; r.length; ) {
                  let e = r.pop(),
                    n = x(e);
                  for (let i of y(e, n, t)) {
                    let e = x(i);
                    a.set(i, e.n), r.push(i);
                  }
                }
              }),
            C =
              w[5] ||
              ((e, ...t) => {
                let a = !0;
                try {
                  return _(
                    e,
                    (e) => o(S(e)),
                    (t, ...s) => {
                      var d;
                      let o = x(t);
                      try {
                        if (!n(e, t)) return C(t, ...s);
                        {
                          if (!i(t)) throw Error('atom not writable');
                          let e = o.n,
                            a = s[0];
                          v(t, a, x),
                            E(t),
                            e !== o.n &&
                              (r.add(t),
                              null == (d = h.c) || d.call(h, t),
                              O(t));
                          return;
                        }
                      } finally {
                        a || (T(), Z());
                      }
                    },
                    ...t,
                  );
                } finally {
                  a = !1;
                }
              }),
            E =
              w[6] ||
              ((e) => {
                var a;
                let n = x(e),
                  i = t.get(e);
                if (i && !c(n.v)) {
                  for (let [t, s] of n.d)
                    if (!i.d.has(t)) {
                      let n = x(t);
                      A(t).t.add(e),
                        i.d.add(t),
                        s !== n.n &&
                          (r.add(t), null == (a = h.c) || a.call(h, t), O(t));
                    }
                  for (let t of i.d || [])
                    if (!n.d.has(t)) {
                      i.d.delete(t);
                      let a = N(t);
                      null == a || a.t.delete(e);
                    }
                }
              }),
            A =
              w[7] ||
              ((e) => {
                var a;
                let r = x(e),
                  n = t.get(e);
                if (!n) {
                  for (let t of (S(e), r.d.keys())) A(t).t.add(e);
                  (n = { l: new Set(), d: new Set(r.d.keys()), t: new Set() }),
                    t.set(e, n),
                    null == (a = h.m) || a.call(h, e),
                    s(e) &&
                      l.add(() => {
                        let t = !0;
                        try {
                          let a = k(e, (...a) => {
                            try {
                              return C(e, ...a);
                            } finally {
                              t || (T(), Z());
                            }
                          });
                          a &&
                            (n.u = () => {
                              t = !0;
                              try {
                                a();
                              } finally {
                                t = !1;
                              }
                            });
                        } finally {
                          t = !1;
                        }
                      });
                }
                return n;
              }),
            N =
              w[8] ||
              ((e) => {
                var a;
                let r = x(e),
                  n = t.get(e);
                if (
                  n &&
                  !n.l.size &&
                  !Array.from(n.t).some((a) => {
                    var r;
                    return null == (r = t.get(a)) ? void 0 : r.d.has(e);
                  })
                ) {
                  for (let i of (n.u && u.add(n.u),
                  (n = void 0),
                  t.delete(e),
                  null == (a = h.u) || a.call(h, e),
                  r.d.keys())) {
                    let t = N(i);
                    null == t || t.t.delete(e);
                  }
                  return;
                }
                return n;
              }),
            j = {
              get: (e) => o(S(e)),
              set: (e, ...t) => {
                try {
                  return C(e, ...t);
                } finally {
                  T(), Z();
                }
              },
              sub: (e, t) => {
                let a = A(e).l;
                return (
                  a.add(t),
                  Z(),
                  () => {
                    a.delete(t), N(e), Z();
                  }
                );
              },
            };
          return (
            Object.defineProperty(j, b, {
              value: [
                e,
                t,
                a,
                r,
                l,
                u,
                h,
                p,
                _,
                g,
                k,
                x,
                Z,
                T,
                S,
                O,
                C,
                E,
                A,
                N,
              ],
            }),
            j
          );
        },
        w = (e) => (
          e.c || (e.c = g()),
          e.m || (e.m = g()),
          e.u || (e.u = g()),
          e.f || (e.f = _()),
          e
        ),
        x = 0;
      function Z(e, t) {
        let a = `atom${++x}`,
          r = {
            toString() {
              return this.debugLabel ? a + ':' + this.debugLabel : a;
            },
          };
        return (
          'function' == typeof e
            ? (r.read = e)
            : ((r.init = e), (r.read = T), (r.write = S)),
          t && (r.write = t),
          r
        );
      }
      function T(e) {
        return e(this);
      }
      function S(e, t, a) {
        return t(this, 'function' == typeof a ? a(e(this)) : a);
      }
      let O = () => {
          let e = 0,
            t = w({}),
            a = new WeakMap(),
            r = new WeakMap(),
            n = k(
              a,
              r,
              void 0,
              void 0,
              void 0,
              void 0,
              t,
              void 0,
              (t, a, r, ...n) => (e ? r(t, ...n) : t.write(a, r, ...n)),
            ),
            i = new Set();
          return (
            t.m.add(void 0, (e) => {
              i.add(e), (a.get(e).m = r.get(e));
            }),
            t.u.add(void 0, (e) => {
              i.delete(e);
              let t = a.get(e);
              delete t.m;
            }),
            Object.assign(n, {
              dev4_get_internal_weak_map: () => a,
              dev4_get_mounted_atoms: () => i,
              dev4_restore_atoms: (t) => {
                n.set({
                  read: () => null,
                  write: (a, r) => {
                    ++e;
                    try {
                      for (let [e, a] of t) 'init' in e && r(e, a);
                    } finally {
                      --e;
                    }
                  },
                });
              },
            })
          );
        },
        C = () => O(),
        E = () => (
          r ||
            ((r = C()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = r),
            globalThis.__JOTAI_DEFAULT_STORE__ !== r &&
              console.warn(
                'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044',
              )),
          r
        );
    },
    5546: (e, t, a) => {
      a.d(t, { tG: () => d });
      var r = a(2925);
      let n = Symbol('RESET'),
        i = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        s = (function (
          e = () => {
            try {
              return window.localStorage;
            } catch (e) {
              'undefined' != typeof window && console.warn(e);
              return;
            }
          },
          t,
        ) {
          var a;
          let r, n, s;
          let d = {
            getItem: (t, a) => {
              var s, d;
              let o = (e) => {
                  if (r !== (e = e || '')) {
                    try {
                      n = JSON.parse(e, void 0);
                    } catch (e) {
                      return a;
                    }
                    r = e;
                  }
                  return n;
                },
                l =
                  null != (d = null == (s = e()) ? void 0 : s.getItem(t))
                    ? d
                    : null;
              return i(l) ? l.then(o) : o(l);
            },
            setItem: (t, a) => {
              var r;
              return null == (r = e())
                ? void 0
                : r.setItem(t, JSON.stringify(a, void 0));
            },
            removeItem: (t) => {
              var a;
              return null == (a = e()) ? void 0 : a.removeItem(t);
            },
          };
          try {
            s = null == (a = e()) ? void 0 : a.subscribe;
          } catch (e) {}
          if (
            (!s &&
              'undefined' != typeof window &&
              'function' == typeof window.addEventListener &&
              window.Storage &&
              (s = (t, a) => {
                if (!(e() instanceof window.Storage)) return () => {};
                let r = (r) => {
                  r.storageArea === e() && r.key === t && a(r.newValue);
                };
                return (
                  window.addEventListener('storage', r),
                  () => {
                    window.removeEventListener('storage', r);
                  }
                );
              }),
            s)
          ) {
            let e;
            d.subscribe =
              ((e = s),
              (t, a, r) =>
                e(t, (e) => {
                  let t;
                  try {
                    t = JSON.parse(e || '');
                  } catch (e) {
                    t = r;
                  }
                  a(t);
                }));
          }
          return d;
        })();
      function d(e, t, a = s, i) {
        let o = null == i ? void 0 : i.getOnInit,
          l = (0, r.eU)(o ? a.getItem(e, t) : t);
        return (
          (l.debugPrivate = !0),
          (l.onMount = (r) => {
            let n;
            return (
              r(a.getItem(e, t)), a.subscribe && (n = a.subscribe(e, r, t)), n
            );
          }),
          (0, r.eU)(
            (e) => e(l),
            (r, i, s) => {
              let d = 'function' == typeof s ? s(r(l)) : s;
              return d === n
                ? (i(l, t), a.removeItem(e))
                : d instanceof Promise
                  ? d.then((t) => (i(l, t), a.setItem(e, t)))
                  : (i(l, d), a.setItem(e, d));
            },
          )
        );
      }
    },
    6923: (e, t, a) => {
      let r;
      a.d(t, { z: () => tl }),
        (function (e) {
          (e.assertEqual = (e) => e),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw Error();
            }),
            (e.arrayToEnum = (e) => {
              let t = {};
              for (let a of e) t[a] = a;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              let a = e.objectKeys(t).filter((e) => 'number' != typeof t[t[e]]),
                r = {};
              for (let e of a) r[e] = t[e];
              return e.objectValues(r);
            }),
            (e.objectValues = (t) =>
              e.objectKeys(t).map(function (e) {
                return t[e];
              })),
            (e.objectKeys =
              'function' == typeof Object.keys
                ? (e) => Object.keys(e)
                : (e) => {
                    let t = [];
                    for (let a in e)
                      Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (let a of e) if (t(a)) return a;
            }),
            (e.isInteger =
              'function' == typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) =>
                    'number' == typeof e && isFinite(e) && Math.floor(e) === e),
            (e.joinValues = function (e, t = ' | ') {
              return e
                .map((e) => ('string' == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              'bigint' == typeof t ? t.toString() : t);
        })(tr || (tr = {})),
        ((tn || (tn = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let n = tr.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        i = (e) => {
          switch (typeof e) {
            case 'undefined':
              return n.undefined;
            case 'string':
              return n.string;
            case 'number':
              return isNaN(e) ? n.nan : n.number;
            case 'boolean':
              return n.boolean;
            case 'function':
              return n.function;
            case 'bigint':
              return n.bigint;
            case 'symbol':
              return n.symbol;
            case 'object':
              if (Array.isArray(e)) return n.array;
              if (null === e) return n.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return n.promise;
              if ('undefined' != typeof Map && e instanceof Map) return n.map;
              if ('undefined' != typeof Set && e instanceof Set) return n.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return n.date;
              return n.object;
            default:
              return n.unknown;
          }
        },
        s = tr.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class d extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            a = { _errors: [] },
            r = (e) => {
              for (let n of e.issues)
                if ('invalid_union' === n.code) n.unionErrors.map(r);
                else if ('invalid_return_type' === n.code) r(n.returnTypeError);
                else if ('invalid_arguments' === n.code) r(n.argumentsError);
                else if (0 === n.path.length) a._errors.push(t(n));
                else {
                  let e = a,
                    r = 0;
                  for (; r < n.path.length; ) {
                    let a = n.path[r];
                    r === n.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }),
                        e[a]._errors.push(t(n)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      r++;
                  }
                }
            };
          return r(this), a;
        }
        static assert(e) {
          if (!(e instanceof d)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, tr.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            a = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : a.push(e(r));
          return { formErrors: a, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      d.create = (e) => new d(e);
      let o = (e, t) => {
          let a;
          switch (e.code) {
            case s.invalid_type:
              a =
                e.received === n.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case s.invalid_literal:
              a = `Invalid literal value, expected ${JSON.stringify(e.expected, tr.jsonStringifyReplacer)}`;
              break;
            case s.unrecognized_keys:
              a = `Unrecognized key(s) in object: ${tr.joinValues(e.keys, ', ')}`;
              break;
            case s.invalid_union:
              a = 'Invalid input';
              break;
            case s.invalid_union_discriminator:
              a = `Invalid discriminator value. Expected ${tr.joinValues(e.options)}`;
              break;
            case s.invalid_enum_value:
              a = `Invalid enum value. Expected ${tr.joinValues(e.options)}, received '${e.received}'`;
              break;
            case s.invalid_arguments:
              a = 'Invalid function arguments';
              break;
            case s.invalid_return_type:
              a = 'Invalid function return type';
              break;
            case s.invalid_date:
              a = 'Invalid date';
              break;
            case s.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((a = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (a = `${a} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : tr.assertNever(e.validation)
                : (a =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case s.too_small:
              a =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                      : 'date' === e.type
                        ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                        : 'Invalid input';
              break;
            case s.too_big:
              a =
                'array' === e.type
                  ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`
                  : 'string' === e.type
                    ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`
                    : 'number' === e.type
                      ? `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                      : 'bigint' === e.type
                        ? `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`
                        : 'date' === e.type
                          ? `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`
                          : 'Invalid input';
              break;
            case s.custom:
              a = 'Invalid input';
              break;
            case s.invalid_intersection_types:
              a = 'Intersection results could not be merged';
              break;
            case s.not_multiple_of:
              a = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case s.not_finite:
              a = 'Number must be finite';
              break;
            default:
              (a = t.defaultError), tr.assertNever(e);
          }
          return { message: a };
        },
        l = o;
      function u() {
        return l;
      }
      let c = (e) => {
        let { data: t, path: a, errorMaps: r, issueData: n } = e,
          i = [...a, ...(n.path || [])],
          s = { ...n, path: i };
        if (void 0 !== n.message) return { ...n, path: i, message: n.message };
        let d = '';
        for (let e of r
          .filter((e) => !!e)
          .slice()
          .reverse())
          d = e(s, { data: t, defaultError: d }).message;
        return { ...n, path: i, message: d };
      };
      function h(e, t) {
        let a = u(),
          r = c({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              a,
              a === o ? void 0 : o,
            ].filter((e) => !!e),
          });
        e.common.issues.push(r);
      }
      class p {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let a = [];
          for (let r of t) {
            if ('aborted' === r.status) return f;
            'dirty' === r.status && e.dirty(), a.push(r.value);
          }
          return { status: e.value, value: a };
        }
        static async mergeObjectAsync(e, t) {
          let a = [];
          for (let e of t) {
            let t = await e.key,
              r = await e.value;
            a.push({ key: t, value: r });
          }
          return p.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          let a = {};
          for (let r of t) {
            let { key: t, value: n } = r;
            if ('aborted' === t.status || 'aborted' === n.status) return f;
            'dirty' === t.status && e.dirty(),
              'dirty' === n.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== n.value || r.alwaysSet) &&
                (a[t.value] = n.value);
          }
          return { status: e.value, value: a };
        }
      }
      let f = Object.freeze({ status: 'aborted' }),
        m = (e) => ({ status: 'dirty', value: e }),
        v = (e) => ({ status: 'valid', value: e }),
        y = (e) => 'aborted' === e.status,
        _ = (e) => 'dirty' === e.status,
        g = (e) => 'valid' === e.status,
        b = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      function k(e, t, a, r) {
        if ('a' === a && !r)
          throw TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            'Cannot read private member from an object whose class did not declare it',
          );
        return 'm' === a ? r : 'a' === a ? r.call(e) : r ? r.value : t.get(e);
      }
      function w(e, t, a, r, n) {
        if ('m' === r) throw TypeError('Private method is not writable');
        if ('a' === r && !n)
          throw TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            'Cannot write private member to an object whose class did not declare it',
          );
        return 'a' === r ? n.call(e, a) : n ? (n.value = a) : t.set(e, a), a;
      }
      'function' == typeof SuppressedError && SuppressedError,
        (function (e) {
          (e.errToObj = (e) =>
            'string' == typeof e ? { message: e } : e || {}),
            (e.toString = (e) =>
              'string' == typeof e ? e : null == e ? void 0 : e.message);
        })(ti || (ti = {}));
      class x {
        constructor(e, t, a, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = a),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let Z = (e, t) => {
        if (g(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new d(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function T(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: a,
          required_error: r,
          description: n,
        } = e;
        if (t && (a || r))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: n }
          : {
              errorMap: (t, n) => {
                var i, s;
                let { message: d } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: null != d ? d : n.defaultError }
                  : void 0 === n.data
                    ? {
                        message:
                          null !== (i = null != d ? d : r) && void 0 !== i
                            ? i
                            : n.defaultError,
                      }
                    : 'invalid_type' !== t.code
                      ? { message: n.defaultError }
                      : {
                          message:
                            null !== (s = null != d ? d : a) && void 0 !== s
                              ? s
                              : n.defaultError,
                        };
              },
              description: n,
            };
      }
      class S {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return i(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new p(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (b(t)) throw Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let a = this.safeParse(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        safeParse(e, t) {
          var a;
          let r = {
              common: {
                issues: [],
                async:
                  null !== (a = null == t ? void 0 : t.async) &&
                  void 0 !== a &&
                  a,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            n = this._parseSync({ data: e, path: r.path, parent: r });
          return Z(r, n);
        }
        '~validate'(e) {
          var t, a;
          let r = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: i(e),
          };
          if (!this['~standard'].async)
            try {
              let t = this._parseSync({ data: e, path: [], parent: r });
              return g(t) ? { value: t.value } : { issues: r.common.issues };
            } catch (e) {
              (null ===
                (a =
                  null === (t = null == e ? void 0 : e.message) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) || void 0 === a
                ? void 0
                : a.includes('encountered')) && (this['~standard'].async = !0),
                (r.common = { issues: [], async: !0 });
            }
          return this._parseAsync({ data: e, path: [], parent: r }).then((e) =>
            g(e) ? { value: e.value } : { issues: r.common.issues },
          );
        }
        async parseAsync(e, t) {
          let a = await this.safeParseAsync(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        async safeParseAsync(e, t) {
          let a = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            r = this._parse({ data: e, path: a.path, parent: a });
          return Z(a, await (b(r) ? r : Promise.resolve(r)));
        }
        refine(e, t) {
          let a = (e) =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
                ? t(e)
                : t;
          return this._refinement((t, r) => {
            let n = e(t),
              i = () => r.addIssue({ code: s.custom, ...a(t) });
            return 'undefined' != typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (i(), !1))
              : !!n || (i(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, r) =>
              !!e(a) || (r.addIssue('function' == typeof t ? t(a, r) : t), !1),
          );
        }
        _refinement(e) {
          return new eb({
            schema: this,
            typeName: to.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this['~standard'] = {
              version: 1,
              vendor: 'zod',
              validate: (e) => this['~validate'](e),
            });
        }
        optional() {
          return ek.create(this, this._def);
        }
        nullable() {
          return ew.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return er.create(this);
        }
        promise() {
          return eg.create(this, this._def);
        }
        or(e) {
          return ei.create([this, e], this._def);
        }
        and(e) {
          return eo.create(this, e, this._def);
        }
        transform(e) {
          return new eb({
            ...T(this._def),
            schema: this,
            typeName: to.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new ex({
            ...T(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: to.ZodDefault,
          });
        }
        brand() {
          return new eO({
            typeName: to.ZodBranded,
            type: this,
            ...T(this._def),
          });
        }
        catch(e) {
          return new eZ({
            ...T(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: to.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eC.create(this, e);
        }
        readonly() {
          return eE.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let O = /^c[^\s-]{8,}$/i,
        C = /^[0-9a-z]+$/,
        E = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        A =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        N = /^[a-z0-9_-]{21}$/i,
        j = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        I =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        R =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        P =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        $ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        M =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        F =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        L = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        z =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        D =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        V = RegExp(`^${D}$`);
      function U(e) {
        let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function W(e) {
        let t = `${D}T${U(e)}`,
          a = [];
        return (
          a.push(e.local ? 'Z?' : 'Z'),
          e.offset && a.push('([+-]\\d{2}:?\\d{2})'),
          (t = `${t}(${a.join('|')})`),
          RegExp(`^${t}$`)
        );
      }
      class B extends S {
        _parse(e) {
          var t, a, i, d;
          let o;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== n.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.string,
                received: t.parsedType,
              }),
              f
            );
          }
          let l = new p();
          for (let n of this._def.checks)
            if ('min' === n.kind)
              e.data.length < n.value &&
                (h((o = this._getOrReturnCtx(e, o)), {
                  code: s.too_small,
                  minimum: n.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                l.dirty());
            else if ('max' === n.kind)
              e.data.length > n.value &&
                (h((o = this._getOrReturnCtx(e, o)), {
                  code: s.too_big,
                  maximum: n.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                l.dirty());
            else if ('length' === n.kind) {
              let t = e.data.length > n.value,
                a = e.data.length < n.value;
              (t || a) &&
                ((o = this._getOrReturnCtx(e, o)),
                t
                  ? h(o, {
                      code: s.too_big,
                      maximum: n.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    })
                  : a &&
                    h(o, {
                      code: s.too_small,
                      minimum: n.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    }),
                l.dirty());
            } else if ('email' === n.kind)
              R.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'email',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('emoji' === n.kind)
              r ||
                (r = RegExp(
                  '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
                  'u',
                )),
                r.test(e.data) ||
                  (h((o = this._getOrReturnCtx(e, o)), {
                    validation: 'emoji',
                    code: s.invalid_string,
                    message: n.message,
                  }),
                  l.dirty());
            else if ('uuid' === n.kind)
              A.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'uuid',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('nanoid' === n.kind)
              N.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'nanoid',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('cuid' === n.kind)
              O.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'cuid',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('cuid2' === n.kind)
              C.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'cuid2',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('ulid' === n.kind)
              E.test(e.data) ||
                (h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'ulid',
                  code: s.invalid_string,
                  message: n.message,
                }),
                l.dirty());
            else if ('url' === n.kind)
              try {
                new URL(e.data);
              } catch (t) {
                h((o = this._getOrReturnCtx(e, o)), {
                  validation: 'url',
                  code: s.invalid_string,
                  message: n.message,
                }),
                  l.dirty();
              }
            else
              'regex' === n.kind
                ? ((n.regex.lastIndex = 0),
                  n.regex.test(e.data) ||
                    (h((o = this._getOrReturnCtx(e, o)), {
                      validation: 'regex',
                      code: s.invalid_string,
                      message: n.message,
                    }),
                    l.dirty()))
                : 'trim' === n.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === n.kind
                    ? e.data.includes(n.value, n.position) ||
                      (h((o = this._getOrReturnCtx(e, o)), {
                        code: s.invalid_string,
                        validation: { includes: n.value, position: n.position },
                        message: n.message,
                      }),
                      l.dirty())
                    : 'toLowerCase' === n.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === n.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === n.kind
                          ? e.data.startsWith(n.value) ||
                            (h((o = this._getOrReturnCtx(e, o)), {
                              code: s.invalid_string,
                              validation: { startsWith: n.value },
                              message: n.message,
                            }),
                            l.dirty())
                          : 'endsWith' === n.kind
                            ? e.data.endsWith(n.value) ||
                              (h((o = this._getOrReturnCtx(e, o)), {
                                code: s.invalid_string,
                                validation: { endsWith: n.value },
                                message: n.message,
                              }),
                              l.dirty())
                            : 'datetime' === n.kind
                              ? W(n).test(e.data) ||
                                (h((o = this._getOrReturnCtx(e, o)), {
                                  code: s.invalid_string,
                                  validation: 'datetime',
                                  message: n.message,
                                }),
                                l.dirty())
                              : 'date' === n.kind
                                ? V.test(e.data) ||
                                  (h((o = this._getOrReturnCtx(e, o)), {
                                    code: s.invalid_string,
                                    validation: 'date',
                                    message: n.message,
                                  }),
                                  l.dirty())
                                : 'time' === n.kind
                                  ? RegExp(`^${U(n)}$`).test(e.data) ||
                                    (h((o = this._getOrReturnCtx(e, o)), {
                                      code: s.invalid_string,
                                      validation: 'time',
                                      message: n.message,
                                    }),
                                    l.dirty())
                                  : 'duration' === n.kind
                                    ? I.test(e.data) ||
                                      (h((o = this._getOrReturnCtx(e, o)), {
                                        validation: 'duration',
                                        code: s.invalid_string,
                                        message: n.message,
                                      }),
                                      l.dirty())
                                    : 'ip' === n.kind
                                      ? ((t = e.data),
                                        (('v4' === (a = n.version) || !a) &&
                                          P.test(t)) ||
                                          (('v6' === a || !a) && M.test(t)) ||
                                          (h((o = this._getOrReturnCtx(e, o)), {
                                            validation: 'ip',
                                            code: s.invalid_string,
                                            message: n.message,
                                          }),
                                          l.dirty()))
                                      : 'jwt' === n.kind
                                        ? !(function (e, t) {
                                            if (!j.test(e)) return !1;
                                            try {
                                              let [a] = e.split('.'),
                                                r = a
                                                  .replace(/-/g, '+')
                                                  .replace(/_/g, '/')
                                                  .padEnd(
                                                    a.length +
                                                      ((4 - (a.length % 4)) %
                                                        4),
                                                    '=',
                                                  ),
                                                n = JSON.parse(atob(r));
                                              if (
                                                'object' != typeof n ||
                                                null === n ||
                                                !n.typ ||
                                                !n.alg ||
                                                (t && n.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch (e) {
                                              return !1;
                                            }
                                          })(e.data, n.alg) &&
                                          (h((o = this._getOrReturnCtx(e, o)), {
                                            validation: 'jwt',
                                            code: s.invalid_string,
                                            message: n.message,
                                          }),
                                          l.dirty())
                                        : 'cidr' === n.kind
                                          ? ((i = e.data),
                                            (('v4' === (d = n.version) || !d) &&
                                              $.test(i)) ||
                                              (('v6' === d || !d) &&
                                                F.test(i)) ||
                                              (h(
                                                (o = this._getOrReturnCtx(
                                                  e,
                                                  o,
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: s.invalid_string,
                                                  message: n.message,
                                                },
                                              ),
                                              l.dirty()))
                                          : 'base64' === n.kind
                                            ? L.test(e.data) ||
                                              (h(
                                                (o = this._getOrReturnCtx(
                                                  e,
                                                  o,
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: s.invalid_string,
                                                  message: n.message,
                                                },
                                              ),
                                              l.dirty())
                                            : 'base64url' === n.kind
                                              ? z.test(e.data) ||
                                                (h(
                                                  (o = this._getOrReturnCtx(
                                                    e,
                                                    o,
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: s.invalid_string,
                                                    message: n.message,
                                                  },
                                                ),
                                                l.dirty())
                                              : tr.assertNever(n);
          return { status: l.value, value: e.data };
        }
        _regex(e, t, a) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: s.invalid_string,
            ...ti.errToObj(a),
          });
        }
        _addCheck(e) {
          return new B({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...ti.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...ti.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...ti.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...ti.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...ti.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...ti.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...ti.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...ti.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...ti.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...ti.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...ti.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...ti.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...ti.errToObj(e) });
        }
        datetime(e) {
          var t, a;
          return 'string' == typeof e
            ? this._addCheck({
                kind: 'datetime',
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                local:
                  null !== (a = null == e ? void 0 : e.local) &&
                  void 0 !== a &&
                  a,
                ...ti.errToObj(null == e ? void 0 : e.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: 'date', message: e });
        }
        time(e) {
          return 'string' == typeof e
            ? this._addCheck({ kind: 'time', precision: null, message: e })
            : this._addCheck({
                kind: 'time',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                      ? void 0
                      : e.precision,
                ...ti.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...ti.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...ti.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...ti.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...ti.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...ti.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...ti.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...ti.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({
            kind: 'length',
            value: e,
            ...ti.errToObj(t),
          });
        }
        nonempty(e) {
          return this.min(1, ti.errToObj(e));
        }
        trim() {
          return new B({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new B({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new B({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toUpperCase' }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => 'datetime' === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => 'date' === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => 'time' === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => 'duration' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => 'uuid' === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => 'nanoid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => 'ip' === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => 'cidr' === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => 'base64' === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => 'base64url' === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      B.create = (e) => {
        var t;
        return new B({
          checks: [],
          typeName: to.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...T(e),
        });
      };
      class K extends S {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== n.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.number,
                received: t.parsedType,
              }),
              f
            );
          }
          let a = new p();
          for (let r of this._def.checks)
            'int' === r.kind
              ? tr.isInteger(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: r.message,
                }),
                a.dirty())
              : 'min' === r.kind
                ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                  (h((t = this._getOrReturnCtx(e, t)), {
                    code: s.too_small,
                    minimum: r.value,
                    type: 'number',
                    inclusive: r.inclusive,
                    exact: !1,
                    message: r.message,
                  }),
                  a.dirty())
                : 'max' === r.kind
                  ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                    (h((t = this._getOrReturnCtx(e, t)), {
                      code: s.too_big,
                      maximum: r.value,
                      type: 'number',
                      inclusive: r.inclusive,
                      exact: !1,
                      message: r.message,
                    }),
                    a.dirty())
                  : 'multipleOf' === r.kind
                    ? 0 !==
                        (function (e, t) {
                          let a = (e.toString().split('.')[1] || '').length,
                            r = (t.toString().split('.')[1] || '').length,
                            n = a > r ? a : r;
                          return (
                            (parseInt(e.toFixed(n).replace('.', '')) %
                              parseInt(t.toFixed(n).replace('.', ''))) /
                            Math.pow(10, n)
                          );
                        })(e.data, r.value) &&
                      (h((t = this._getOrReturnCtx(e, t)), {
                        code: s.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message,
                      }),
                      a.dirty())
                    : 'finite' === r.kind
                      ? Number.isFinite(e.data) ||
                        (h((t = this._getOrReturnCtx(e, t)), {
                          code: s.not_finite,
                          message: r.message,
                        }),
                        a.dirty())
                      : tr.assertNever(r);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, ti.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, ti.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, ti.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, ti.toString(t));
        }
        setLimit(e, t, a, r) {
          return new K({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: ti.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new K({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: ti.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: ti.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: ti.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ti.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ti.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              'int' === e.kind ||
              ('multipleOf' === e.kind && tr.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let a of this._def.checks) {
            if (
              'finite' === a.kind ||
              'int' === a.kind ||
              'multipleOf' === a.kind
            )
              return !0;
            'min' === a.kind
              ? (null === t || a.value > t) && (t = a.value)
              : 'max' === a.kind &&
                (null === e || a.value < e) &&
                (e = a.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      K.create = (e) =>
        new K({
          checks: [],
          typeName: to.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...T(e),
        });
      class q extends S {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch (t) {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== n.bigint) return this._getInvalidInput(e);
          let a = new p();
          for (let r of this._def.checks)
            'min' === r.kind
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_small,
                  type: 'bigint',
                  minimum: r.value,
                  inclusive: r.inclusive,
                  message: r.message,
                }),
                a.dirty())
              : 'max' === r.kind
                ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                  (h((t = this._getOrReturnCtx(e, t)), {
                    code: s.too_big,
                    type: 'bigint',
                    maximum: r.value,
                    inclusive: r.inclusive,
                    message: r.message,
                  }),
                  a.dirty())
                : 'multipleOf' === r.kind
                  ? e.data % r.value !== BigInt(0) &&
                    (h((t = this._getOrReturnCtx(e, t)), {
                      code: s.not_multiple_of,
                      multipleOf: r.value,
                      message: r.message,
                    }),
                    a.dirty())
                  : tr.assertNever(r);
          return { status: a.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: s.invalid_type,
              expected: n.bigint,
              received: t.parsedType,
            }),
            f
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, ti.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, ti.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, ti.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, ti.toString(t));
        }
        setLimit(e, t, a, r) {
          return new q({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: ti.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new q({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: ti.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      q.create = (e) => {
        var t;
        return new q({
          checks: [],
          typeName: to.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...T(e),
        });
      };
      class J extends S {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== n.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.boolean,
                received: t.parsedType,
              }),
              f
            );
          }
          return v(e.data);
        }
      }
      J.create = (e) =>
        new J({
          typeName: to.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...T(e),
        });
      class Y extends S {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== n.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.date,
                received: t.parsedType,
              }),
              f
            );
          }
          if (isNaN(e.data.getTime()))
            return h(this._getOrReturnCtx(e), { code: s.invalid_date }), f;
          let a = new p();
          for (let r of this._def.checks)
            'min' === r.kind
              ? e.data.getTime() < r.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_small,
                  message: r.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: r.value,
                  type: 'date',
                }),
                a.dirty())
              : 'max' === r.kind
                ? e.data.getTime() > r.value &&
                  (h((t = this._getOrReturnCtx(e, t)), {
                    code: s.too_big,
                    message: r.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: r.value,
                    type: 'date',
                  }),
                  a.dirty())
                : tr.assertNever(r);
          return { status: a.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new Y({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: ti.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: ti.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      Y.create = (e) =>
        new Y({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: to.ZodDate,
          ...T(e),
        });
      class H extends S {
        _parse(e) {
          if (this._getType(e) !== n.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.symbol,
                received: t.parsedType,
              }),
              f
            );
          }
          return v(e.data);
        }
      }
      H.create = (e) => new H({ typeName: to.ZodSymbol, ...T(e) });
      class G extends S {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.undefined,
                received: t.parsedType,
              }),
              f
            );
          }
          return v(e.data);
        }
      }
      G.create = (e) => new G({ typeName: to.ZodUndefined, ...T(e) });
      class X extends S {
        _parse(e) {
          if (this._getType(e) !== n.null) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.null,
                received: t.parsedType,
              }),
              f
            );
          }
          return v(e.data);
        }
      }
      X.create = (e) => new X({ typeName: to.ZodNull, ...T(e) });
      class Q extends S {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return v(e.data);
        }
      }
      Q.create = (e) => new Q({ typeName: to.ZodAny, ...T(e) });
      class ee extends S {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return v(e.data);
        }
      }
      ee.create = (e) => new ee({ typeName: to.ZodUnknown, ...T(e) });
      class et extends S {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: s.invalid_type,
              expected: n.never,
              received: t.parsedType,
            }),
            f
          );
        }
      }
      et.create = (e) => new et({ typeName: to.ZodNever, ...T(e) });
      class ea extends S {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.void,
                received: t.parsedType,
              }),
              f
            );
          }
          return v(e.data);
        }
      }
      ea.create = (e) => new ea({ typeName: to.ZodVoid, ...T(e) });
      class er extends S {
        _parse(e) {
          let { ctx: t, status: a } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== n.array)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.array,
                received: t.parsedType,
              }),
              f
            );
          if (null !== r.exactLength) {
            let e = t.data.length > r.exactLength.value,
              n = t.data.length < r.exactLength.value;
            (e || n) &&
              (h(t, {
                code: e ? s.too_big : s.too_small,
                minimum: n ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message,
              }),
              a.dirty());
          }
          if (
            (null !== r.minLength &&
              t.data.length < r.minLength.value &&
              (h(t, {
                code: s.too_small,
                minimum: r.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              a.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (h(t, {
                code: s.too_big,
                maximum: r.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.maxLength.message,
              }),
              a.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, a) =>
                r.type._parseAsync(new x(t, e, t.path, a)),
              ),
            ).then((e) => p.mergeArray(a, e));
          let i = [...t.data].map((e, a) =>
            r.type._parseSync(new x(t, e, t.path, a)),
          );
          return p.mergeArray(a, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new er({
            ...this._def,
            minLength: { value: e, message: ti.toString(t) },
          });
        }
        max(e, t) {
          return new er({
            ...this._def,
            maxLength: { value: e, message: ti.toString(t) },
          });
        }
        length(e, t) {
          return new er({
            ...this._def,
            exactLength: { value: e, message: ti.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      er.create = (e, t) =>
        new er({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: to.ZodArray,
          ...T(t),
        });
      class en extends S {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = tr.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== n.object) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              f
            );
          }
          let { status: t, ctx: a } = this._processInputParams(e),
            { shape: r, keys: i } = this._getCached(),
            d = [];
          if (
            !(
              this._def.catchall instanceof et &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in a.data) i.includes(e) || d.push(e);
          let o = [];
          for (let e of i) {
            let t = r[e],
              n = a.data[e];
            o.push({
              key: { status: 'valid', value: e },
              value: t._parse(new x(a, n, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof et) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of d)
                o.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: a.data[e] },
                });
            else if ('strict' === e)
              d.length > 0 &&
                (h(a, { code: s.unrecognized_keys, keys: d }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.',
              );
          } else {
            let e = this._def.catchall;
            for (let t of d) {
              let r = a.data[t];
              o.push({
                key: { status: 'valid', value: t },
                value: e._parse(new x(a, r, a.path, t)),
                alwaysSet: t in a.data,
              });
            }
          }
          return a.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of o) {
                    let a = await t.key,
                      r = await t.value;
                    e.push({ key: a, value: r, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => p.mergeObjectSync(t, e))
            : p.mergeObjectSync(t, o);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            ti.errToObj,
            new en({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      var r, n, i, s;
                      let d =
                        null !==
                          (i =
                            null === (n = (r = this._def).errorMap) ||
                            void 0 === n
                              ? void 0
                              : n.call(r, t, a).message) && void 0 !== i
                          ? i
                          : a.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? {
                            message:
                              null !== (s = ti.errToObj(e).message) &&
                              void 0 !== s
                                ? s
                                : d,
                          }
                        : { message: d };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new en({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new en({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new en({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new en({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: to.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new en({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            tr.objectKeys(e).forEach((a) => {
              e[a] && this.shape[a] && (t[a] = this.shape[a]);
            }),
            new en({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((a) => {
              e[a] || (t[a] = this.shape[a]);
            }),
            new en({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof en) {
              let a = {};
              for (let r in t.shape) {
                let n = t.shape[r];
                a[r] = ek.create(e(n));
              }
              return new en({ ...t._def, shape: () => a });
            }
            return t instanceof er
              ? new er({ ...t._def, type: e(t.element) })
              : t instanceof ek
                ? ek.create(e(t.unwrap()))
                : t instanceof ew
                  ? ew.create(e(t.unwrap()))
                  : t instanceof el
                    ? el.create(t.items.map((t) => e(t)))
                    : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((a) => {
              let r = this.shape[a];
              e && !e[a] ? (t[a] = r) : (t[a] = r.optional());
            }),
            new en({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((a) => {
              if (e && !e[a]) t[a] = this.shape[a];
              else {
                let e = this.shape[a];
                for (; e instanceof ek; ) e = e._def.innerType;
                t[a] = e;
              }
            }),
            new en({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return ev(tr.objectKeys(this.shape));
        }
      }
      (en.create = (e, t) =>
        new en({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: et.create(),
          typeName: to.ZodObject,
          ...T(t),
        })),
        (en.strictCreate = (e, t) =>
          new en({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: et.create(),
            typeName: to.ZodObject,
            ...T(t),
          })),
        (en.lazycreate = (e, t) =>
          new en({
            shape: e,
            unknownKeys: 'strip',
            catchall: et.create(),
            typeName: to.ZodObject,
            ...T(t),
          }));
      class ei extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = this._def.options;
          if (t.common.async)
            return Promise.all(
              a.map(async (e) => {
                let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: a,
                  }),
                  ctx: a,
                };
              }),
            ).then(function (e) {
              for (let t of e) if ('valid' === t.result.status) return t.result;
              for (let a of e)
                if ('dirty' === a.result.status)
                  return t.common.issues.push(...a.ctx.common.issues), a.result;
              let a = e.map((e) => new d(e.ctx.common.issues));
              return h(t, { code: s.invalid_union, unionErrors: a }), f;
            });
          {
            let e;
            let r = [];
            for (let n of a) {
              let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                i = n._parseSync({ data: t.data, path: t.path, parent: a });
              if ('valid' === i.status) return i;
              'dirty' !== i.status || e || (e = { result: i, ctx: a }),
                a.common.issues.length && r.push(a.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let n = r.map((e) => new d(e));
            return h(t, { code: s.invalid_union, unionErrors: n }), f;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      ei.create = (e, t) =>
        new ei({ options: e, typeName: to.ZodUnion, ...T(t) });
      let es = (e) => {
        if (e instanceof ef) return es(e.schema);
        if (e instanceof eb) return es(e.innerType());
        if (e instanceof em) return [e.value];
        if (e instanceof ey) return e.options;
        if (e instanceof e_) return tr.objectValues(e.enum);
        if (e instanceof ex) return es(e._def.innerType);
        if (e instanceof G) return [void 0];
        else if (e instanceof X) return [null];
        else if (e instanceof ek) return [void 0, ...es(e.unwrap())];
        else if (e instanceof ew) return [null, ...es(e.unwrap())];
        else if (e instanceof eO) return es(e.unwrap());
        else if (e instanceof eE) return es(e.unwrap());
        else if (e instanceof eZ) return es(e._def.innerType);
        else return [];
      };
      class ed extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.object)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              f
            );
          let a = this.discriminator,
            r = t.data[a],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (h(t, {
                code: s.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              f);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, a) {
          let r = new Map();
          for (let a of t) {
            let t = es(a.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let n of t) {
              if (r.has(n))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(n)}`,
                );
              r.set(n, a);
            }
          }
          return new ed({
            typeName: to.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...T(a),
          });
        }
      }
      class eo extends S {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            r = (e, r) => {
              if (y(e) || y(r)) return f;
              let d = (function e(t, a) {
                let r = i(t),
                  s = i(a);
                if (t === a) return { valid: !0, data: t };
                if (r === n.object && s === n.object) {
                  let r = tr.objectKeys(a),
                    n = tr.objectKeys(t).filter((e) => -1 !== r.indexOf(e)),
                    i = { ...t, ...a };
                  for (let r of n) {
                    let n = e(t[r], a[r]);
                    if (!n.valid) return { valid: !1 };
                    i[r] = n.data;
                  }
                  return { valid: !0, data: i };
                }
                if (r === n.array && s === n.array) {
                  if (t.length !== a.length) return { valid: !1 };
                  let r = [];
                  for (let n = 0; n < t.length; n++) {
                    let i = e(t[n], a[n]);
                    if (!i.valid) return { valid: !1 };
                    r.push(i.data);
                  }
                  return { valid: !0, data: r };
                }
                return r === n.date && s === n.date && +t == +a
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, r.value);
              return d.valid
                ? ((_(e) || _(r)) && t.dirty(),
                  { status: t.value, value: d.data })
                : (h(a, { code: s.invalid_intersection_types }), f);
            };
          return a.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
                this._def.right._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
              ]).then(([e, t]) => r(e, t))
            : r(
                this._def.left._parseSync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
                this._def.right._parseSync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
              );
        }
      }
      eo.create = (e, t, a) =>
        new eo({ left: e, right: t, typeName: to.ZodIntersection, ...T(a) });
      class el extends S {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== n.array)
            return (
              h(a, {
                code: s.invalid_type,
                expected: n.array,
                received: a.parsedType,
              }),
              f
            );
          if (a.data.length < this._def.items.length)
            return (
              h(a, {
                code: s.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              f
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (h(a, {
              code: s.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let r = [...a.data]
            .map((e, t) => {
              let r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new x(a, e, a.path, t)) : null;
            })
            .filter((e) => !!e);
          return a.common.async
            ? Promise.all(r).then((e) => p.mergeArray(t, e))
            : p.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new el({ ...this._def, rest: e });
        }
      }
      el.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new el({ items: e, typeName: to.ZodTuple, rest: null, ...T(t) });
      };
      class eu extends S {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== n.object)
            return (
              h(a, {
                code: s.invalid_type,
                expected: n.object,
                received: a.parsedType,
              }),
              f
            );
          let r = [],
            i = this._def.keyType,
            d = this._def.valueType;
          for (let e in a.data)
            r.push({
              key: i._parse(new x(a, e, a.path, e)),
              value: d._parse(new x(a, a.data[e], a.path, e)),
              alwaysSet: e in a.data,
            });
          return a.common.async
            ? p.mergeObjectAsync(t, r)
            : p.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new eu(
            t instanceof S
              ? { keyType: e, valueType: t, typeName: to.ZodRecord, ...T(a) }
              : {
                  keyType: B.create(),
                  valueType: e,
                  typeName: to.ZodRecord,
                  ...T(t),
                },
          );
        }
      }
      class ec extends S {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== n.map)
            return (
              h(a, {
                code: s.invalid_type,
                expected: n.map,
                received: a.parsedType,
              }),
              f
            );
          let r = this._def.keyType,
            i = this._def.valueType,
            d = [...a.data.entries()].map(([e, t], n) => ({
              key: r._parse(new x(a, e, a.path, [n, 'key'])),
              value: i._parse(new x(a, t, a.path, [n, 'value'])),
            }));
          if (a.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let a of d) {
                let r = await a.key,
                  n = await a.value;
                if ('aborted' === r.status || 'aborted' === n.status) return f;
                ('dirty' === r.status || 'dirty' === n.status) && t.dirty(),
                  e.set(r.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let a of d) {
              let r = a.key,
                n = a.value;
              if ('aborted' === r.status || 'aborted' === n.status) return f;
              ('dirty' === r.status || 'dirty' === n.status) && t.dirty(),
                e.set(r.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      ec.create = (e, t, a) =>
        new ec({ valueType: t, keyType: e, typeName: to.ZodMap, ...T(a) });
      class eh extends S {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== n.set)
            return (
              h(a, {
                code: s.invalid_type,
                expected: n.set,
                received: a.parsedType,
              }),
              f
            );
          let r = this._def;
          null !== r.minSize &&
            a.data.size < r.minSize.value &&
            (h(a, {
              code: s.too_small,
              minimum: r.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              a.data.size > r.maxSize.value &&
              (h(a, {
                code: s.too_big,
                maximum: r.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty());
          let i = this._def.valueType;
          function d(e) {
            let a = new Set();
            for (let r of e) {
              if ('aborted' === r.status) return f;
              'dirty' === r.status && t.dirty(), a.add(r.value);
            }
            return { status: t.value, value: a };
          }
          let o = [...a.data.values()].map((e, t) =>
            i._parse(new x(a, e, a.path, t)),
          );
          return a.common.async ? Promise.all(o).then((e) => d(e)) : d(o);
        }
        min(e, t) {
          return new eh({
            ...this._def,
            minSize: { value: e, message: ti.toString(t) },
          });
        }
        max(e, t) {
          return new eh({
            ...this._def,
            maxSize: { value: e, message: ti.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      eh.create = (e, t) =>
        new eh({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: to.ZodSet,
          ...T(t),
        });
      class ep extends S {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.function)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.function,
                received: t.parsedType,
              }),
              f
            );
          function a(e, a) {
            return c({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                o,
              ].filter((e) => !!e),
              issueData: { code: s.invalid_arguments, argumentsError: a },
            });
          }
          function r(e, a) {
            return c({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                o,
              ].filter((e) => !!e),
              issueData: { code: s.invalid_return_type, returnTypeError: a },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            l = t.data;
          if (this._def.returns instanceof eg) {
            let e = this;
            return v(async function (...t) {
              let n = new d([]),
                s = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (n.addIssue(a(t, e)), n);
                }),
                o = await Reflect.apply(l, this, s);
              return await e._def.returns._def.type
                .parseAsync(o, i)
                .catch((e) => {
                  throw (n.addIssue(r(o, e)), n);
                });
            });
          }
          {
            let e = this;
            return v(function (...t) {
              let n = e._def.args.safeParse(t, i);
              if (!n.success) throw new d([a(t, n.error)]);
              let s = Reflect.apply(l, this, n.data),
                o = e._def.returns.safeParse(s, i);
              if (!o.success) throw new d([r(s, o.error)]);
              return o.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ep({ ...this._def, args: el.create(e).rest(ee.create()) });
        }
        returns(e) {
          return new ep({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new ep({
            args: e || el.create([]).rest(ee.create()),
            returns: t || ee.create(),
            typeName: to.ZodFunction,
            ...T(a),
          });
        }
      }
      class ef extends S {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ef.create = (e, t) =>
        new ef({ getter: e, typeName: to.ZodLazy, ...T(t) });
      class em extends S {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                received: t.data,
                code: s.invalid_literal,
                expected: this._def.value,
              }),
              f
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ev(e, t) {
        return new ey({ values: e, typeName: to.ZodEnum, ...T(t) });
      }
      em.create = (e, t) =>
        new em({ value: e, typeName: to.ZodLiteral, ...T(t) });
      class ey extends S {
        constructor() {
          super(...arguments), ts.set(this, void 0);
        }
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              h(t, {
                expected: tr.joinValues(a),
                received: t.parsedType,
                code: s.invalid_type,
              }),
              f
            );
          }
          if (
            (k(this, ts, 'f') || w(this, ts, new Set(this._def.values), 'f'),
            !k(this, ts, 'f').has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              h(t, {
                received: t.data,
                code: s.invalid_enum_value,
                options: a,
              }),
              f
            );
          }
          return v(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return ey.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return ey.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t },
          );
        }
      }
      (ts = new WeakMap()), (ey.create = ev);
      class e_ extends S {
        constructor() {
          super(...arguments), td.set(this, void 0);
        }
        _parse(e) {
          let t = tr.getValidEnumValues(this._def.values),
            a = this._getOrReturnCtx(e);
          if (a.parsedType !== n.string && a.parsedType !== n.number) {
            let e = tr.objectValues(t);
            return (
              h(a, {
                expected: tr.joinValues(e),
                received: a.parsedType,
                code: s.invalid_type,
              }),
              f
            );
          }
          if (
            (k(this, td, 'f') ||
              w(
                this,
                td,
                new Set(tr.getValidEnumValues(this._def.values)),
                'f',
              ),
            !k(this, td, 'f').has(e.data))
          ) {
            let e = tr.objectValues(t);
            return (
              h(a, {
                received: a.data,
                code: s.invalid_enum_value,
                options: e,
              }),
              f
            );
          }
          return v(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (td = new WeakMap()),
        (e_.create = (e, t) =>
          new e_({ values: e, typeName: to.ZodNativeEnum, ...T(t) }));
      class eg extends S {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== n.promise && !1 === t.common.async
            ? (h(t, {
                code: s.invalid_type,
                expected: n.promise,
                received: t.parsedType,
              }),
              f)
            : v(
                (t.parsedType === n.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  }),
                ),
              );
        }
      }
      eg.create = (e, t) =>
        new eg({ type: e, typeName: to.ZodPromise, ...T(t) });
      class eb extends S {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === to.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            r = this._def.effect || null,
            n = {
              addIssue: (e) => {
                h(a, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return a.path;
              },
            };
          if (((n.addIssue = n.addIssue.bind(n)), 'preprocess' === r.type)) {
            let e = r.transform(a.data, n);
            if (a.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return f;
                let r = await this._def.schema._parseAsync({
                  data: e,
                  path: a.path,
                  parent: a,
                });
                return 'aborted' === r.status
                  ? f
                  : 'dirty' === r.status || 'dirty' === t.value
                    ? m(r.value)
                    : r;
              });
            {
              if ('aborted' === t.value) return f;
              let r = this._def.schema._parseSync({
                data: e,
                path: a.path,
                parent: a,
              });
              return 'aborted' === r.status
                ? f
                : 'dirty' === r.status || 'dirty' === t.value
                  ? m(r.value)
                  : r;
            }
          }
          if ('refinement' === r.type) {
            let e = (e) => {
              let t = r.refinement(e, n);
              if (a.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return e;
            };
            if (!1 !== a.common.async)
              return this._def.schema
                ._parseAsync({ data: a.data, path: a.path, parent: a })
                .then((a) =>
                  'aborted' === a.status
                    ? f
                    : ('dirty' === a.status && t.dirty(),
                      e(a.value).then(() => ({
                        status: t.value,
                        value: a.value,
                      }))),
                );
            {
              let r = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              return 'aborted' === r.status
                ? f
                : ('dirty' === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
          }
          if ('transform' === r.type) {
            if (!1 !== a.common.async)
              return this._def.schema
                ._parseAsync({ data: a.data, path: a.path, parent: a })
                .then((e) =>
                  g(e)
                    ? Promise.resolve(r.transform(e.value, n)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e,
                );
            {
              let e = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              if (!g(e)) return e;
              let i = r.transform(e.value, n);
              if (i instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: i };
            }
          }
          tr.assertNever(r);
        }
      }
      (eb.create = (e, t, a) =>
        new eb({ schema: e, typeName: to.ZodEffects, effect: t, ...T(a) })),
        (eb.createWithPreprocess = (e, t, a) =>
          new eb({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: to.ZodEffects,
            ...T(a),
          }));
      class ek extends S {
        _parse(e) {
          return this._getType(e) === n.undefined
            ? v(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ek.create = (e, t) =>
        new ek({ innerType: e, typeName: to.ZodOptional, ...T(t) });
      class ew extends S {
        _parse(e) {
          return this._getType(e) === n.null
            ? v(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ew.create = (e, t) =>
        new ew({ innerType: e, typeName: to.ZodNullable, ...T(t) });
      class ex extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return (
            t.parsedType === n.undefined && (a = this._def.defaultValue()),
            this._def.innerType._parse({ data: a, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ex.create = (e, t) =>
        new ex({
          innerType: e,
          typeName: to.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...T(t),
        });
      class eZ extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: a.data,
              path: a.path,
              parent: { ...a },
            });
          return b(r)
            ? r.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new d(a.common.issues);
                        },
                        input: a.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === r.status
                    ? r.value
                    : this._def.catchValue({
                        get error() {
                          return new d(a.common.issues);
                        },
                        input: a.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      eZ.create = (e, t) =>
        new eZ({
          innerType: e,
          typeName: to.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...T(t),
        });
      class eT extends S {
        _parse(e) {
          if (this._getType(e) !== n.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.nan,
                received: t.parsedType,
              }),
              f
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      eT.create = (e) => new eT({ typeName: to.ZodNaN, ...T(e) });
      let eS = Symbol('zod_brand');
      class eO extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eC extends S {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              return 'aborted' === e.status
                ? f
                : 'dirty' === e.status
                  ? (t.dirty(), m(e.value))
                  : this._def.out._parseAsync({
                      data: e.value,
                      path: a.path,
                      parent: a,
                    });
            })();
          {
            let e = this._def.in._parseSync({
              data: a.data,
              path: a.path,
              parent: a,
            });
            return 'aborted' === e.status
              ? f
              : 'dirty' === e.status
                ? (t.dirty(), { status: 'dirty', value: e.value })
                : this._def.out._parseSync({
                    data: e.value,
                    path: a.path,
                    parent: a,
                  });
          }
        }
        static create(e, t) {
          return new eC({ in: e, out: t, typeName: to.ZodPipeline });
        }
      }
      class eE extends S {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            a = (e) => (g(e) && (e.value = Object.freeze(e.value)), e);
          return b(t) ? t.then((e) => a(e)) : a(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function eA(e, t) {
        let a =
          'function' == typeof e
            ? e(t)
            : 'string' == typeof e
              ? { message: e }
              : e;
        return 'string' == typeof a ? { message: a } : a;
      }
      function eN(e, t = {}, a) {
        return e
          ? Q.create().superRefine((r, n) => {
              var i, s;
              let d = e(r);
              if (d instanceof Promise)
                return d.then((e) => {
                  var i, s;
                  if (!e) {
                    let e = eA(t, r),
                      d =
                        null ===
                          (s =
                            null !== (i = e.fatal) && void 0 !== i ? i : a) ||
                        void 0 === s ||
                        s;
                    n.addIssue({ code: 'custom', ...e, fatal: d });
                  }
                });
              if (!d) {
                let e = eA(t, r),
                  d =
                    null ===
                      (s = null !== (i = e.fatal) && void 0 !== i ? i : a) ||
                    void 0 === s ||
                    s;
                n.addIssue({ code: 'custom', ...e, fatal: d });
              }
            })
          : Q.create();
      }
      eE.create = (e, t) =>
        new eE({ innerType: e, typeName: to.ZodReadonly, ...T(t) });
      let ej = { object: en.lazycreate };
      !(function (e) {
        (e.ZodString = 'ZodString'),
          (e.ZodNumber = 'ZodNumber'),
          (e.ZodNaN = 'ZodNaN'),
          (e.ZodBigInt = 'ZodBigInt'),
          (e.ZodBoolean = 'ZodBoolean'),
          (e.ZodDate = 'ZodDate'),
          (e.ZodSymbol = 'ZodSymbol'),
          (e.ZodUndefined = 'ZodUndefined'),
          (e.ZodNull = 'ZodNull'),
          (e.ZodAny = 'ZodAny'),
          (e.ZodUnknown = 'ZodUnknown'),
          (e.ZodNever = 'ZodNever'),
          (e.ZodVoid = 'ZodVoid'),
          (e.ZodArray = 'ZodArray'),
          (e.ZodObject = 'ZodObject'),
          (e.ZodUnion = 'ZodUnion'),
          (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
          (e.ZodIntersection = 'ZodIntersection'),
          (e.ZodTuple = 'ZodTuple'),
          (e.ZodRecord = 'ZodRecord'),
          (e.ZodMap = 'ZodMap'),
          (e.ZodSet = 'ZodSet'),
          (e.ZodFunction = 'ZodFunction'),
          (e.ZodLazy = 'ZodLazy'),
          (e.ZodLiteral = 'ZodLiteral'),
          (e.ZodEnum = 'ZodEnum'),
          (e.ZodEffects = 'ZodEffects'),
          (e.ZodNativeEnum = 'ZodNativeEnum'),
          (e.ZodOptional = 'ZodOptional'),
          (e.ZodNullable = 'ZodNullable'),
          (e.ZodDefault = 'ZodDefault'),
          (e.ZodCatch = 'ZodCatch'),
          (e.ZodPromise = 'ZodPromise'),
          (e.ZodBranded = 'ZodBranded'),
          (e.ZodPipeline = 'ZodPipeline'),
          (e.ZodReadonly = 'ZodReadonly');
      })(to || (to = {}));
      let eI = B.create,
        eR = K.create,
        eP = eT.create,
        e$ = q.create,
        eM = J.create,
        eF = Y.create,
        eL = H.create,
        ez = G.create,
        eD = X.create,
        eV = Q.create,
        eU = ee.create,
        eW = et.create,
        eB = ea.create,
        eK = er.create,
        eq = en.create,
        eJ = en.strictCreate,
        eY = ei.create,
        eH = ed.create,
        eG = eo.create,
        eX = el.create,
        eQ = eu.create,
        e0 = ec.create,
        e1 = eh.create,
        e9 = ep.create,
        e4 = ef.create,
        e2 = em.create,
        e5 = ey.create,
        e6 = e_.create,
        e3 = eg.create,
        e7 = eb.create,
        e8 = ek.create,
        te = ew.create,
        tt = eb.createWithPreprocess,
        ta = eC.create;
      var tr,
        tn,
        ti,
        ts,
        td,
        to,
        tl = Object.freeze({
          __proto__: null,
          defaultErrorMap: o,
          setErrorMap: function (e) {
            l = e;
          },
          getErrorMap: u,
          makeIssue: c,
          EMPTY_PATH: [],
          addIssueToContext: h,
          ParseStatus: p,
          INVALID: f,
          DIRTY: m,
          OK: v,
          isAborted: y,
          isDirty: _,
          isValid: g,
          isAsync: b,
          get util() {
            return tr;
          },
          get objectUtil() {
            return tn;
          },
          ZodParsedType: n,
          getParsedType: i,
          ZodType: S,
          datetimeRegex: W,
          ZodString: B,
          ZodNumber: K,
          ZodBigInt: q,
          ZodBoolean: J,
          ZodDate: Y,
          ZodSymbol: H,
          ZodUndefined: G,
          ZodNull: X,
          ZodAny: Q,
          ZodUnknown: ee,
          ZodNever: et,
          ZodVoid: ea,
          ZodArray: er,
          ZodObject: en,
          ZodUnion: ei,
          ZodDiscriminatedUnion: ed,
          ZodIntersection: eo,
          ZodTuple: el,
          ZodRecord: eu,
          ZodMap: ec,
          ZodSet: eh,
          ZodFunction: ep,
          ZodLazy: ef,
          ZodLiteral: em,
          ZodEnum: ey,
          ZodNativeEnum: e_,
          ZodPromise: eg,
          ZodEffects: eb,
          ZodTransformer: eb,
          ZodOptional: ek,
          ZodNullable: ew,
          ZodDefault: ex,
          ZodCatch: eZ,
          ZodNaN: eT,
          BRAND: eS,
          ZodBranded: eO,
          ZodPipeline: eC,
          ZodReadonly: eE,
          custom: eN,
          Schema: S,
          ZodSchema: S,
          late: ej,
          get ZodFirstPartyTypeKind() {
            return to;
          },
          coerce: {
            string: (e) => B.create({ ...e, coerce: !0 }),
            number: (e) => K.create({ ...e, coerce: !0 }),
            boolean: (e) => J.create({ ...e, coerce: !0 }),
            bigint: (e) => q.create({ ...e, coerce: !0 }),
            date: (e) => Y.create({ ...e, coerce: !0 }),
          },
          any: eV,
          array: eK,
          bigint: e$,
          boolean: eM,
          date: eF,
          discriminatedUnion: eH,
          effect: e7,
          enum: e5,
          function: e9,
          instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
            eN((t) => t instanceof e, t),
          intersection: eG,
          lazy: e4,
          literal: e2,
          map: e0,
          nan: eP,
          nativeEnum: e6,
          never: eW,
          null: eD,
          nullable: te,
          number: eR,
          object: eq,
          oboolean: () => eM().optional(),
          onumber: () => eR().optional(),
          optional: e8,
          ostring: () => eI().optional(),
          pipeline: ta,
          preprocess: tt,
          promise: e3,
          record: eQ,
          set: e1,
          strictObject: eJ,
          string: eI,
          symbol: eL,
          transformer: e7,
          tuple: eX,
          undefined: ez,
          union: eY,
          unknown: eU,
          void: eB,
          NEVER: f,
          ZodIssueCode: s,
          quotelessJson: (e) =>
            JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
          ZodError: d,
        });
    },
  },
]);
