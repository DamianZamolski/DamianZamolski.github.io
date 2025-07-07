'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    1012: (e, t, a) => {
      a.d(t, { fp: () => p });
      var r = a(9585),
        s = a(9964),
        n = a(4027);
      let i = (0, r.createContext)(void 0);
      function d(e) {
        let t = (0, r.useContext)(i);
        return (null == e ? void 0 : e.store) || t || (0, s.zp)();
      }
      let u = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        l = (e) => {
          e.status ||
            ((e.status = 'pending'),
            e.then(
              (t) => {
                ((e.status = 'fulfilled'), (e.value = t));
              },
              (t) => {
                ((e.status = 'rejected'), (e.reason = t));
              },
            ));
        },
        o =
          r.use ||
          ((e) => {
            if ('pending' === e.status) throw e;
            if ('fulfilled' === e.status) return e.value;
            if ('rejected' === e.status) throw e.reason;
            throw (l(e), e);
          }),
        c = new WeakMap(),
        h = (e, t) => {
          let a = c.get(e);
          return (
            a ||
              ((a = new Promise((r, s) => {
                let i = e,
                  d = (e) => (t) => {
                    i === e && r(t);
                  },
                  l = (e) => (t) => {
                    i === e && s(t);
                  },
                  o = () => {
                    try {
                      let e = t();
                      u(e)
                        ? (c.set(e, a),
                          (i = e),
                          e.then(d(e), l(e)),
                          (0, n.MO)(e, o))
                        : r(e);
                    } catch (e) {
                      s(e);
                    }
                  };
                (e.then(d(e), l(e)), (0, n.MO)(e, o));
              })),
              c.set(e, a)),
            a
          );
        };
      function p(e, t) {
        return [
          (function (e, t) {
            let { delay: a, unstable_promiseStatus: s = !r.use } = t || {},
              n = d(t),
              [[i, c, p], f] = (0, r.useReducer)(
                (t) => {
                  let a = n.get(e);
                  return Object.is(t[0], a) && t[1] === n && t[2] === e
                    ? t
                    : [a, n, e];
                },
                void 0,
                () => [n.get(e), n, e],
              ),
              m = i;
            if (
              ((c !== n || p !== e) && (f(), (m = n.get(e))),
              (0, r.useEffect)(() => {
                let t = n.sub(e, () => {
                  if (s)
                    try {
                      let t = n.get(e);
                      u(t) && l(h(t, () => n.get(e)));
                    } catch (e) {}
                  if ('number' == typeof a) return void setTimeout(f, a);
                  f();
                });
                return (f(), t);
              }, [n, e, a, s]),
              (0, r.useDebugValue)(m),
              u(m))
            ) {
              let t = h(m, () => n.get(e));
              return (s && l(t), o(t));
            }
            return m;
          })(e, t),
          (function (e, t) {
            let a = d(t);
            return (0, r.useCallback)(
              function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++)
                  r[s] = arguments[s];
                if (!('write' in e)) throw Error('not writable atom');
                return a.set(e, ...r);
              },
              [a, e],
            );
          })(e, t),
        ];
      }
    },
    2090: (e, t, a) => {
      a.d(t, { tG: () => c });
      var r = a(9964);
      let s = Symbol('RESET'),
        n = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        i = new WeakMap(),
        d = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        u = new WeakMap(),
        l = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        o = (function (
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
          let r,
            s,
            n,
            i,
            d = {
              getItem: (t, a) => {
                var n, i;
                let d = (e) => {
                    if (r !== (e = e || '')) {
                      try {
                        s = JSON.parse(e, void 0);
                      } catch (e) {
                        return a;
                      }
                      r = e;
                    }
                    return s;
                  },
                  u =
                    null != (i = null == (n = e()) ? void 0 : n.getItem(t))
                      ? i
                      : null;
                return l(u) ? u.then(d) : d(u);
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
            n = null == (a = e()) ? void 0 : a.subscribe;
          } catch (e) {}
          return (
            !n &&
              'undefined' != typeof window &&
              'function' == typeof window.addEventListener &&
              window.Storage &&
              (n = (t, a) => {
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
            n &&
              ((i = n),
              (d.subscribe = (e, t, a) =>
                i(e, (e) => {
                  let r;
                  try {
                    r = JSON.parse(e || '');
                  } catch (e) {
                    r = a;
                  }
                  t(r);
                }))),
            d
          );
        })();
      function c(e, t, a = o, n) {
        let i = null == n ? void 0 : n.getOnInit,
          d = (0, r.eU)(i ? a.getItem(e, t) : t);
        return (
          (d.debugPrivate = !0),
          (d.onMount = (r) => {
            let s;
            return (
              r(a.getItem(e, t)),
              a.subscribe && (s = a.subscribe(e, r, t)),
              s
            );
          }),
          (0, r.eU)(
            (e) => e(d),
            (r, n, i) => {
              let u = 'function' == typeof i ? i(r(d)) : i;
              return u === s
                ? (n(d, t), a.removeItem(e))
                : l(u)
                  ? u.then((t) => (n(d, t), a.setItem(e, t)))
                  : (n(d, u), a.setItem(e, u));
            },
          )
        );
      }
      let h = new WeakMap(),
        p = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        f = new WeakMap();
    },
    3545: (e, t, a) => {
      var r, s, n, i;
      let d;
      (a.d(t, { YO: () => eA, Ik: () => eN, Yj: () => eC }),
        (function (e) {
          ((e.assertEqual = (e) => {}),
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
                    'number' == typeof e &&
                    Number.isFinite(e) &&
                    Math.floor(e) === e),
            (e.joinValues = function (e, t = ' | ') {
              return e
                .map((e) => ('string' == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              'bigint' == typeof t ? t.toString() : t));
        })(r || (r = {})),
        ((s || (s = {})).mergeShapes = (e, t) => ({ ...e, ...t })));
      let u = r.arrayToEnum([
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
        l = (e) => {
          switch (typeof e) {
            case 'undefined':
              return u.undefined;
            case 'string':
              return u.string;
            case 'number':
              return Number.isNaN(e) ? u.nan : u.number;
            case 'boolean':
              return u.boolean;
            case 'function':
              return u.function;
            case 'bigint':
              return u.bigint;
            case 'symbol':
              return u.symbol;
            case 'object':
              if (Array.isArray(e)) return u.array;
              if (null === e) return u.null;
              if (
                e.then &&
                'function' == typeof e.then &&
                e.catch &&
                'function' == typeof e.catch
              )
                return u.promise;
              if ('undefined' != typeof Map && e instanceof Map) return u.map;
              if ('undefined' != typeof Set && e instanceof Set) return u.set;
              if ('undefined' != typeof Date && e instanceof Date)
                return u.date;
              return u.object;
            default:
              return u.unknown;
          }
        },
        o = r.arrayToEnum([
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
      class c extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          (super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            }));
          let t = new.target.prototype;
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e));
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            a = { _errors: [] },
            r = (e) => {
              for (let s of e.issues)
                if ('invalid_union' === s.code) s.unionErrors.map(r);
                else if ('invalid_return_type' === s.code) r(s.returnTypeError);
                else if ('invalid_arguments' === s.code) r(s.argumentsError);
                else if (0 === s.path.length) a._errors.push(t(s));
                else {
                  let e = a,
                    r = 0;
                  for (; r < s.path.length; ) {
                    let a = s.path[r];
                    (r === s.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }),
                        e[a]._errors.push(t(s)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      r++);
                  }
                }
            };
          return (r(this), a);
        }
        static assert(e) {
          if (!(e instanceof c)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, r.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            a = [];
          for (let r of this.issues)
            if (r.path.length > 0) {
              let a = r.path[0];
              ((t[a] = t[a] || []), t[a].push(e(r)));
            } else a.push(e(r));
          return { formErrors: a, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      c.create = (e) => new c(e);
      let h = (e, t) => {
        let a;
        switch (e.code) {
          case o.invalid_type:
            a =
              e.received === u.undefined
                ? 'Required'
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case o.invalid_literal:
            a = `Invalid literal value, expected ${JSON.stringify(e.expected, r.jsonStringifyReplacer)}`;
            break;
          case o.unrecognized_keys:
            a = `Unrecognized key(s) in object: ${r.joinValues(e.keys, ', ')}`;
            break;
          case o.invalid_union:
            a = 'Invalid input';
            break;
          case o.invalid_union_discriminator:
            a = `Invalid discriminator value. Expected ${r.joinValues(e.options)}`;
            break;
          case o.invalid_enum_value:
            a = `Invalid enum value. Expected ${r.joinValues(e.options)}, received '${e.received}'`;
            break;
          case o.invalid_arguments:
            a = 'Invalid function arguments';
            break;
          case o.invalid_return_type:
            a = 'Invalid function return type';
            break;
          case o.invalid_date:
            a = 'Invalid date';
            break;
          case o.invalid_string:
            'object' == typeof e.validation
              ? 'includes' in e.validation
                ? ((a = `Invalid input: must include "${e.validation.includes}"`),
                  'number' == typeof e.validation.position &&
                    (a = `${a} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                  ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : 'endsWith' in e.validation
                    ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
                    : r.assertNever(e.validation)
              : (a =
                  'regex' !== e.validation
                    ? `Invalid ${e.validation}`
                    : 'Invalid');
            break;
          case o.too_small:
            a =
              'array' === e.type
                ? `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`
                : 'string' === e.type
                  ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`
                  : 'number' === e.type || 'bigint' === e.type
                    ? `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`
                    : 'date' === e.type
                      ? `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`
                      : 'Invalid input';
            break;
          case o.too_big:
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
          case o.custom:
            a = 'Invalid input';
            break;
          case o.invalid_intersection_types:
            a = 'Intersection results could not be merged';
            break;
          case o.not_multiple_of:
            a = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case o.not_finite:
            a = 'Number must be finite';
            break;
          default:
            ((a = t.defaultError), r.assertNever(e));
        }
        return { message: a };
      };
      !(function (e) {
        ((e.errToObj = (e) =>
          'string' == typeof e ? { message: e } : e || {}),
          (e.toString = (e) => ('string' == typeof e ? e : e?.message)));
      })(n || (n = {}));
      let p = (e) => {
        let { data: t, path: a, errorMaps: r, issueData: s } = e,
          n = [...a, ...(s.path || [])],
          i = { ...s, path: n };
        if (void 0 !== s.message) return { ...s, path: n, message: s.message };
        let d = '';
        for (let e of r
          .filter((e) => !!e)
          .slice()
          .reverse())
          d = e(i, { data: t, defaultError: d }).message;
        return { ...s, path: n, message: d };
      };
      function f(e, t) {
        let a = p({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            h,
            h == h ? void 0 : h,
          ].filter((e) => !!e),
        });
        e.common.issues.push(a);
      }
      class m {
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
            if ('aborted' === r.status) return _;
            ('dirty' === r.status && e.dirty(), a.push(r.value));
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
          return m.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          let a = {};
          for (let r of t) {
            let { key: t, value: s } = r;
            if ('aborted' === t.status || 'aborted' === s.status) return _;
            ('dirty' === t.status && e.dirty(),
              'dirty' === s.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== s.value || r.alwaysSet) &&
                (a[t.value] = s.value));
          }
          return { status: e.value, value: a };
        }
      }
      let _ = Object.freeze({ status: 'aborted' }),
        y = (e) => ({ status: 'dirty', value: e }),
        g = (e) => ({ status: 'valid', value: e }),
        v = (e) => 'aborted' === e.status,
        k = (e) => 'dirty' === e.status,
        b = (e) => 'valid' === e.status,
        w = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      class x {
        constructor(e, t, a, r) {
          ((this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = a),
            (this._key = r));
        }
        get path() {
          return (
            this._cachedPath.length ||
              (Array.isArray(this._key)
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let T = (e, t) => {
        if (b(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new c(e.common.issues);
            return ((this._error = t), this._error);
          },
        };
      };
      function O(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: a,
          required_error: r,
          description: s,
        } = e;
        if (t && (a || r))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: s }
          : {
              errorMap: (t, s) => {
                let { message: n } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: n ?? s.defaultError }
                  : void 0 === s.data
                    ? { message: n ?? r ?? s.defaultError }
                    : 'invalid_type' !== t.code
                      ? { message: s.defaultError }
                      : { message: n ?? a ?? s.defaultError };
              },
              description: s,
            };
      }
      class Z {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return l(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: l(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new m(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: l(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (w(t)) throw Error('Synchronous parse encountered promise.');
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
          let a = {
              common: {
                issues: [],
                async: t?.async ?? !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: l(e),
            },
            r = this._parseSync({ data: e, path: a.path, parent: a });
          return T(a, r);
        }
        '~validate'(e) {
          let t = {
            common: { issues: [], async: !!this['~standard'].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: l(e),
          };
          if (!this['~standard'].async)
            try {
              let a = this._parseSync({ data: e, path: [], parent: t });
              return b(a) ? { value: a.value } : { issues: t.common.issues };
            } catch (e) {
              (e?.message?.toLowerCase()?.includes('encountered') &&
                (this['~standard'].async = !0),
                (t.common = { issues: [], async: !0 }));
            }
          return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
            b(e) ? { value: e.value } : { issues: t.common.issues },
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
                contextualErrorMap: t?.errorMap,
                async: !0,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: l(e),
            },
            r = this._parse({ data: e, path: a.path, parent: a });
          return T(a, await (w(r) ? r : Promise.resolve(r)));
        }
        refine(e, t) {
          let a = (e) =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
                ? t(e)
                : t;
          return this._refinement((t, r) => {
            let s = e(t),
              n = () => r.addIssue({ code: o.custom, ...a(t) });
            return 'undefined' != typeof Promise && s instanceof Promise
              ? s.then((e) => !!e || (n(), !1))
              : !!s || (n(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, r) =>
              !!e(a) || (r.addIssue('function' == typeof t ? t(a, r) : t), !1),
          );
        }
        _refinement(e) {
          return new ev({
            schema: this,
            typeName: i.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          ((this.spa = this.safeParseAsync),
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
            }));
        }
        optional() {
          return ek.create(this, this._def);
        }
        nullable() {
          return eb.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return ea.create(this);
        }
        promise() {
          return eg.create(this, this._def);
        }
        or(e) {
          return es.create([this, e], this._def);
        }
        and(e) {
          return ed.create(this, e, this._def);
        }
        transform(e) {
          return new ev({
            ...O(this._def),
            schema: this,
            typeName: i.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new ew({
            ...O(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: i.ZodDefault,
          });
        }
        brand() {
          return new eO({
            typeName: i.ZodBranded,
            type: this,
            ...O(this._def),
          });
        }
        catch(e) {
          return new ex({
            ...O(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: i.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eZ.create(this, e);
        }
        readonly() {
          return eS.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let S = /^c[^\s-]{8,}$/i,
        C = /^[0-9a-z]+$/,
        A = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        N =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        E = /^[a-z0-9_-]{21}$/i,
        j = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        I =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        R =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        $ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        P =
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
        let t = '[0-5]\\d';
        e.precision
          ? (t = `${t}\\.\\d{${e.precision}}`)
          : null == e.precision && (t = `${t}(\\.\\d+)?`);
        let a = e.precision ? '+' : '?';
        return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${a}`;
      }
      class W extends Z {
        _parse(e) {
          var t, a, s, n;
          let i;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== u.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.string,
                received: t.parsedType,
              }),
              _
            );
          }
          let l = new m();
          for (let u of this._def.checks)
            if ('min' === u.kind)
              e.data.length < u.value &&
                (f((i = this._getOrReturnCtx(e, i)), {
                  code: o.too_small,
                  minimum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                l.dirty());
            else if ('max' === u.kind)
              e.data.length > u.value &&
                (f((i = this._getOrReturnCtx(e, i)), {
                  code: o.too_big,
                  maximum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                l.dirty());
            else if ('length' === u.kind) {
              let t = e.data.length > u.value,
                a = e.data.length < u.value;
              (t || a) &&
                ((i = this._getOrReturnCtx(e, i)),
                t
                  ? f(i, {
                      code: o.too_big,
                      maximum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : a &&
                    f(i, {
                      code: o.too_small,
                      minimum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                l.dirty());
            } else if ('email' === u.kind)
              R.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'email',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('emoji' === u.kind)
              (d ||
                (d = RegExp(
                  '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
                  'u',
                )),
                d.test(e.data) ||
                  (f((i = this._getOrReturnCtx(e, i)), {
                    validation: 'emoji',
                    code: o.invalid_string,
                    message: u.message,
                  }),
                  l.dirty()));
            else if ('uuid' === u.kind)
              N.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'uuid',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('nanoid' === u.kind)
              E.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'nanoid',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('cuid' === u.kind)
              S.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'cuid',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('cuid2' === u.kind)
              C.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'cuid2',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('ulid' === u.kind)
              A.test(e.data) ||
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'ulid',
                  code: o.invalid_string,
                  message: u.message,
                }),
                l.dirty());
            else if ('url' === u.kind)
              try {
                new URL(e.data);
              } catch {
                (f((i = this._getOrReturnCtx(e, i)), {
                  validation: 'url',
                  code: o.invalid_string,
                  message: u.message,
                }),
                  l.dirty());
              }
            else
              'regex' === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (f((i = this._getOrReturnCtx(e, i)), {
                      validation: 'regex',
                      code: o.invalid_string,
                      message: u.message,
                    }),
                    l.dirty()))
                : 'trim' === u.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (f((i = this._getOrReturnCtx(e, i)), {
                        code: o.invalid_string,
                        validation: { includes: u.value, position: u.position },
                        message: u.message,
                      }),
                      l.dirty())
                    : 'toLowerCase' === u.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === u.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === u.kind
                          ? e.data.startsWith(u.value) ||
                            (f((i = this._getOrReturnCtx(e, i)), {
                              code: o.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            l.dirty())
                          : 'endsWith' === u.kind
                            ? e.data.endsWith(u.value) ||
                              (f((i = this._getOrReturnCtx(e, i)), {
                                code: o.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              l.dirty())
                            : 'datetime' === u.kind
                              ? (function (e) {
                                  let t = `${D}T${U(e)}`,
                                    a = [];
                                  return (
                                    a.push(e.local ? 'Z?' : 'Z'),
                                    e.offset && a.push('([+-]\\d{2}:?\\d{2})'),
                                    (t = `${t}(${a.join('|')})`),
                                    RegExp(`^${t}$`)
                                  );
                                })(u).test(e.data) ||
                                (f((i = this._getOrReturnCtx(e, i)), {
                                  code: o.invalid_string,
                                  validation: 'datetime',
                                  message: u.message,
                                }),
                                l.dirty())
                              : 'date' === u.kind
                                ? V.test(e.data) ||
                                  (f((i = this._getOrReturnCtx(e, i)), {
                                    code: o.invalid_string,
                                    validation: 'date',
                                    message: u.message,
                                  }),
                                  l.dirty())
                                : 'time' === u.kind
                                  ? RegExp(`^${U(u)}$`).test(e.data) ||
                                    (f((i = this._getOrReturnCtx(e, i)), {
                                      code: o.invalid_string,
                                      validation: 'time',
                                      message: u.message,
                                    }),
                                    l.dirty())
                                  : 'duration' === u.kind
                                    ? I.test(e.data) ||
                                      (f((i = this._getOrReturnCtx(e, i)), {
                                        validation: 'duration',
                                        code: o.invalid_string,
                                        message: u.message,
                                      }),
                                      l.dirty())
                                    : 'ip' === u.kind
                                      ? ((t = e.data),
                                        !(
                                          (('v4' === (a = u.version) || !a) &&
                                            $.test(t)) ||
                                          (('v6' === a || !a) && M.test(t))
                                        ) &&
                                          1 &&
                                          (f((i = this._getOrReturnCtx(e, i)), {
                                            validation: 'ip',
                                            code: o.invalid_string,
                                            message: u.message,
                                          }),
                                          l.dirty()))
                                      : 'jwt' === u.kind
                                        ? !(function (e, t) {
                                            if (!j.test(e)) return !1;
                                            try {
                                              let [a] = e.split('.');
                                              if (!a) return !1;
                                              let r = a
                                                  .replace(/-/g, '+')
                                                  .replace(/_/g, '/')
                                                  .padEnd(
                                                    a.length +
                                                      ((4 - (a.length % 4)) %
                                                        4),
                                                    '=',
                                                  ),
                                                s = JSON.parse(atob(r));
                                              if (
                                                'object' != typeof s ||
                                                null === s ||
                                                ('typ' in s &&
                                                  s?.typ !== 'JWT') ||
                                                !s.alg ||
                                                (t && s.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch {
                                              return !1;
                                            }
                                          })(e.data, u.alg) &&
                                          (f((i = this._getOrReturnCtx(e, i)), {
                                            validation: 'jwt',
                                            code: o.invalid_string,
                                            message: u.message,
                                          }),
                                          l.dirty())
                                        : 'cidr' === u.kind
                                          ? ((s = e.data),
                                            !(
                                              (('v4' === (n = u.version) ||
                                                !n) &&
                                                P.test(s)) ||
                                              (('v6' === n || !n) && F.test(s))
                                            ) &&
                                              1 &&
                                              (f(
                                                (i = this._getOrReturnCtx(
                                                  e,
                                                  i,
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: o.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              l.dirty()))
                                          : 'base64' === u.kind
                                            ? L.test(e.data) ||
                                              (f(
                                                (i = this._getOrReturnCtx(
                                                  e,
                                                  i,
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: o.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              l.dirty())
                                            : 'base64url' === u.kind
                                              ? z.test(e.data) ||
                                                (f(
                                                  (i = this._getOrReturnCtx(
                                                    e,
                                                    i,
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: o.invalid_string,
                                                    message: u.message,
                                                  },
                                                ),
                                                l.dirty())
                                              : r.assertNever(u);
          return { status: l.value, value: e.data };
        }
        _regex(e, t, a) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: o.invalid_string,
            ...n.errToObj(a),
          });
        }
        _addCheck(e) {
          return new W({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...n.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...n.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...n.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...n.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...n.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...n.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...n.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...n.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...n.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...n.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...n.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...n.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...n.errToObj(e) });
        }
        datetime(e) {
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
                precision: void 0 === e?.precision ? null : e?.precision,
                offset: e?.offset ?? !1,
                local: e?.local ?? !1,
                ...n.errToObj(e?.message),
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
                precision: void 0 === e?.precision ? null : e?.precision,
                ...n.errToObj(e?.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...n.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...n.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: t?.position,
            ...n.errToObj(t?.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...n.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...n.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...n.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...n.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...n.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, n.errToObj(e));
        }
        trim() {
          return new W({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new W({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new W({
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
      W.create = (e) =>
        new W({
          checks: [],
          typeName: i.ZodString,
          coerce: e?.coerce ?? !1,
          ...O(e),
        });
      class K extends Z {
        constructor() {
          (super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf));
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== u.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.number,
                received: t.parsedType,
              }),
              _
            );
          }
          let a = new m();
          for (let s of this._def.checks)
            'int' === s.kind
              ? r.isInteger(e.data) ||
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: o.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: s.message,
                }),
                a.dirty())
              : 'min' === s.kind
                ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                  (f((t = this._getOrReturnCtx(e, t)), {
                    code: o.too_small,
                    minimum: s.value,
                    type: 'number',
                    inclusive: s.inclusive,
                    exact: !1,
                    message: s.message,
                  }),
                  a.dirty())
                : 'max' === s.kind
                  ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                    (f((t = this._getOrReturnCtx(e, t)), {
                      code: o.too_big,
                      maximum: s.value,
                      type: 'number',
                      inclusive: s.inclusive,
                      exact: !1,
                      message: s.message,
                    }),
                    a.dirty())
                  : 'multipleOf' === s.kind
                    ? 0 !==
                        (function (e, t) {
                          let a = (e.toString().split('.')[1] || '').length,
                            r = (t.toString().split('.')[1] || '').length,
                            s = a > r ? a : r;
                          return (
                            (Number.parseInt(e.toFixed(s).replace('.', '')) %
                              Number.parseInt(t.toFixed(s).replace('.', ''))) /
                            10 ** s
                          );
                        })(e.data, s.value) &&
                      (f((t = this._getOrReturnCtx(e, t)), {
                        code: o.not_multiple_of,
                        multipleOf: s.value,
                        message: s.message,
                      }),
                      a.dirty())
                    : 'finite' === s.kind
                      ? Number.isFinite(e.data) ||
                        (f((t = this._getOrReturnCtx(e, t)), {
                          code: o.not_finite,
                          message: s.message,
                        }),
                        a.dirty())
                      : r.assertNever(s);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, n.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, n.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, n.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, n.toString(t));
        }
        setLimit(e, t, a, r) {
          return new K({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: n.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new K({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: n.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: n.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: n.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: n.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: n.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: n.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: n.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: n.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: n.toString(e),
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
              ('multipleOf' === e.kind && r.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let a of this._def.checks)
            if (
              'finite' === a.kind ||
              'int' === a.kind ||
              'multipleOf' === a.kind
            )
              return !0;
            else
              'min' === a.kind
                ? (null === t || a.value > t) && (t = a.value)
                : 'max' === a.kind &&
                  (null === e || a.value < e) &&
                  (e = a.value);
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      K.create = (e) =>
        new K({
          checks: [],
          typeName: i.ZodNumber,
          coerce: e?.coerce || !1,
          ...O(e),
        });
      class B extends Z {
        constructor() {
          (super(...arguments), (this.min = this.gte), (this.max = this.lte));
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== u.bigint) return this._getInvalidInput(e);
          let a = new m();
          for (let s of this._def.checks)
            'min' === s.kind
              ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: o.too_small,
                  type: 'bigint',
                  minimum: s.value,
                  inclusive: s.inclusive,
                  message: s.message,
                }),
                a.dirty())
              : 'max' === s.kind
                ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                  (f((t = this._getOrReturnCtx(e, t)), {
                    code: o.too_big,
                    type: 'bigint',
                    maximum: s.value,
                    inclusive: s.inclusive,
                    message: s.message,
                  }),
                  a.dirty())
                : 'multipleOf' === s.kind
                  ? e.data % s.value !== BigInt(0) &&
                    (f((t = this._getOrReturnCtx(e, t)), {
                      code: o.not_multiple_of,
                      multipleOf: s.value,
                      message: s.message,
                    }),
                    a.dirty())
                  : r.assertNever(s);
          return { status: a.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            f(t, {
              code: o.invalid_type,
              expected: u.bigint,
              received: t.parsedType,
            }),
            _
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, n.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, n.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, n.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, n.toString(t));
        }
        setLimit(e, t, a, r) {
          return new B({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: n.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new B({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: n.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: n.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: n.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: n.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: n.toString(t),
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
      B.create = (e) =>
        new B({
          checks: [],
          typeName: i.ZodBigInt,
          coerce: e?.coerce ?? !1,
          ...O(e),
        });
      class q extends Z {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== u.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.boolean,
                received: t.parsedType,
              }),
              _
            );
          }
          return g(e.data);
        }
      }
      q.create = (e) =>
        new q({ typeName: i.ZodBoolean, coerce: e?.coerce || !1, ...O(e) });
      class J extends Z {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== u.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.date,
                received: t.parsedType,
              }),
              _
            );
          }
          if (Number.isNaN(e.data.getTime()))
            return (f(this._getOrReturnCtx(e), { code: o.invalid_date }), _);
          let a = new m();
          for (let s of this._def.checks)
            'min' === s.kind
              ? e.data.getTime() < s.value &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: o.too_small,
                  message: s.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: s.value,
                  type: 'date',
                }),
                a.dirty())
              : 'max' === s.kind
                ? e.data.getTime() > s.value &&
                  (f((t = this._getOrReturnCtx(e, t)), {
                    code: o.too_big,
                    message: s.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: s.value,
                    type: 'date',
                  }),
                  a.dirty())
                : r.assertNever(s);
          return { status: a.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new J({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: n.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: n.toString(t),
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
      J.create = (e) =>
        new J({
          checks: [],
          coerce: e?.coerce || !1,
          typeName: i.ZodDate,
          ...O(e),
        });
      class Y extends Z {
        _parse(e) {
          if (this._getType(e) !== u.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.symbol,
                received: t.parsedType,
              }),
              _
            );
          }
          return g(e.data);
        }
      }
      Y.create = (e) => new Y({ typeName: i.ZodSymbol, ...O(e) });
      class G extends Z {
        _parse(e) {
          if (this._getType(e) !== u.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.undefined,
                received: t.parsedType,
              }),
              _
            );
          }
          return g(e.data);
        }
      }
      G.create = (e) => new G({ typeName: i.ZodUndefined, ...O(e) });
      class H extends Z {
        _parse(e) {
          if (this._getType(e) !== u.null) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.null,
                received: t.parsedType,
              }),
              _
            );
          }
          return g(e.data);
        }
      }
      H.create = (e) => new H({ typeName: i.ZodNull, ...O(e) });
      class X extends Z {
        constructor() {
          (super(...arguments), (this._any = !0));
        }
        _parse(e) {
          return g(e.data);
        }
      }
      X.create = (e) => new X({ typeName: i.ZodAny, ...O(e) });
      class Q extends Z {
        constructor() {
          (super(...arguments), (this._unknown = !0));
        }
        _parse(e) {
          return g(e.data);
        }
      }
      Q.create = (e) => new Q({ typeName: i.ZodUnknown, ...O(e) });
      class ee extends Z {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            f(t, {
              code: o.invalid_type,
              expected: u.never,
              received: t.parsedType,
            }),
            _
          );
        }
      }
      ee.create = (e) => new ee({ typeName: i.ZodNever, ...O(e) });
      class et extends Z {
        _parse(e) {
          if (this._getType(e) !== u.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.void,
                received: t.parsedType,
              }),
              _
            );
          }
          return g(e.data);
        }
      }
      et.create = (e) => new et({ typeName: i.ZodVoid, ...O(e) });
      class ea extends Z {
        _parse(e) {
          let { ctx: t, status: a } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== u.array)
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.array,
                received: t.parsedType,
              }),
              _
            );
          if (null !== r.exactLength) {
            let e = t.data.length > r.exactLength.value,
              s = t.data.length < r.exactLength.value;
            (e || s) &&
              (f(t, {
                code: e ? o.too_big : o.too_small,
                minimum: s ? r.exactLength.value : void 0,
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
              (f(t, {
                code: o.too_small,
                minimum: r.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              a.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (f(t, {
                code: o.too_big,
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
            ).then((e) => m.mergeArray(a, e));
          let s = [...t.data].map((e, a) =>
            r.type._parseSync(new x(t, e, t.path, a)),
          );
          return m.mergeArray(a, s);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new ea({
            ...this._def,
            minLength: { value: e, message: n.toString(t) },
          });
        }
        max(e, t) {
          return new ea({
            ...this._def,
            maxLength: { value: e, message: n.toString(t) },
          });
        }
        length(e, t) {
          return new ea({
            ...this._def,
            exactLength: { value: e, message: n.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ea.create = (e, t) =>
        new ea({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: i.ZodArray,
          ...O(t),
        });
      class er extends Z {
        constructor() {
          (super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = r.objectKeys(e);
          return ((this._cached = { shape: e, keys: t }), this._cached);
        }
        _parse(e) {
          if (this._getType(e) !== u.object) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.object,
                received: t.parsedType,
              }),
              _
            );
          }
          let { status: t, ctx: a } = this._processInputParams(e),
            { shape: r, keys: s } = this._getCached(),
            n = [];
          if (
            !(
              this._def.catchall instanceof ee &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in a.data) s.includes(e) || n.push(e);
          let i = [];
          for (let e of s) {
            let t = r[e],
              s = a.data[e];
            i.push({
              key: { status: 'valid', value: e },
              value: t._parse(new x(a, s, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof ee) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of n)
                i.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: a.data[e] },
                });
            else if ('strict' === e)
              n.length > 0 &&
                (f(a, { code: o.unrecognized_keys, keys: n }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.',
              );
          } else {
            let e = this._def.catchall;
            for (let t of n) {
              let r = a.data[t];
              i.push({
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
                  for (let t of i) {
                    let a = await t.key,
                      r = await t.value;
                    e.push({ key: a, value: r, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => m.mergeObjectSync(t, e))
            : m.mergeObjectSync(t, i);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            n.errToObj,
            new er({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      let r =
                        this._def.errorMap?.(t, a).message ?? a.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? { message: n.errToObj(e).message ?? r }
                        : { message: r };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new er({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new er({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new er({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new er({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: i.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new er({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          for (let a of r.objectKeys(e))
            e[a] && this.shape[a] && (t[a] = this.shape[a]);
          return new er({ ...this._def, shape: () => t });
        }
        omit(e) {
          let t = {};
          for (let a of r.objectKeys(this.shape))
            e[a] || (t[a] = this.shape[a]);
          return new er({ ...this._def, shape: () => t });
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof er) {
              let a = {};
              for (let r in t.shape) {
                let s = t.shape[r];
                a[r] = ek.create(e(s));
              }
              return new er({ ...t._def, shape: () => a });
            }
            if (t instanceof ea)
              return new ea({ ...t._def, type: e(t.element) });
            if (t instanceof ek) return ek.create(e(t.unwrap()));
            if (t instanceof eb) return eb.create(e(t.unwrap()));
            if (t instanceof eu) return eu.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          for (let a of r.objectKeys(this.shape)) {
            let r = this.shape[a];
            e && !e[a] ? (t[a] = r) : (t[a] = r.optional());
          }
          return new er({ ...this._def, shape: () => t });
        }
        required(e) {
          let t = {};
          for (let a of r.objectKeys(this.shape))
            if (e && !e[a]) t[a] = this.shape[a];
            else {
              let e = this.shape[a];
              for (; e instanceof ek; ) e = e._def.innerType;
              t[a] = e;
            }
          return new er({ ...this._def, shape: () => t });
        }
        keyof() {
          return em(r.objectKeys(this.shape));
        }
      }
      ((er.create = (e, t) =>
        new er({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: ee.create(),
          typeName: i.ZodObject,
          ...O(t),
        })),
        (er.strictCreate = (e, t) =>
          new er({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: ee.create(),
            typeName: i.ZodObject,
            ...O(t),
          })),
        (er.lazycreate = (e, t) =>
          new er({
            shape: e,
            unknownKeys: 'strip',
            catchall: ee.create(),
            typeName: i.ZodObject,
            ...O(t),
          })));
      class es extends Z {
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
                  return (
                    t.common.issues.push(...a.ctx.common.issues),
                    a.result
                  );
              let a = e.map((e) => new c(e.ctx.common.issues));
              return (f(t, { code: o.invalid_union, unionErrors: a }), _);
            });
          {
            let e,
              r = [];
            for (let s of a) {
              let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                n = s._parseSync({ data: t.data, path: t.path, parent: a });
              if ('valid' === n.status) return n;
              ('dirty' !== n.status || e || (e = { result: n, ctx: a }),
                a.common.issues.length && r.push(a.common.issues));
            }
            if (e)
              return (t.common.issues.push(...e.ctx.common.issues), e.result);
            let s = r.map((e) => new c(e));
            return (f(t, { code: o.invalid_union, unionErrors: s }), _);
          }
        }
        get options() {
          return this._def.options;
        }
      }
      es.create = (e, t) =>
        new es({ options: e, typeName: i.ZodUnion, ...O(t) });
      let en = (e) => {
        if (e instanceof ep) return en(e.schema);
        if (e instanceof ev) return en(e.innerType());
        if (e instanceof ef) return [e.value];
        if (e instanceof e_) return e.options;
        if (e instanceof ey) return r.objectValues(e.enum);
        else if (e instanceof ew) return en(e._def.innerType);
        else if (e instanceof G) return [void 0];
        else if (e instanceof H) return [null];
        else if (e instanceof ek) return [void 0, ...en(e.unwrap())];
        else if (e instanceof eb) return [null, ...en(e.unwrap())];
        else if (e instanceof eO) return en(e.unwrap());
        else if (e instanceof eS) return en(e.unwrap());
        else if (e instanceof ex) return en(e._def.innerType);
        else return [];
      };
      class ei extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== u.object)
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.object,
                received: t.parsedType,
              }),
              _
            );
          let a = this.discriminator,
            r = t.data[a],
            s = this.optionsMap.get(r);
          return s
            ? t.common.async
              ? s._parseAsync({ data: t.data, path: t.path, parent: t })
              : s._parseSync({ data: t.data, path: t.path, parent: t })
            : (f(t, {
                code: o.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              _);
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
            let t = en(a.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let s of t) {
              if (r.has(s))
                throw Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(s)}`,
                );
              r.set(s, a);
            }
          }
          return new ei({
            typeName: i.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...O(a),
          });
        }
      }
      class ed extends Z {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            s = (e, s) => {
              if (v(e) || v(s)) return _;
              let n = (function e(t, a) {
                let s = l(t),
                  n = l(a);
                if (t === a) return { valid: !0, data: t };
                if (s === u.object && n === u.object) {
                  let s = r.objectKeys(a),
                    n = r.objectKeys(t).filter((e) => -1 !== s.indexOf(e)),
                    i = { ...t, ...a };
                  for (let r of n) {
                    let s = e(t[r], a[r]);
                    if (!s.valid) return { valid: !1 };
                    i[r] = s.data;
                  }
                  return { valid: !0, data: i };
                }
                if (s === u.array && n === u.array) {
                  if (t.length !== a.length) return { valid: !1 };
                  let r = [];
                  for (let s = 0; s < t.length; s++) {
                    let n = e(t[s], a[s]);
                    if (!n.valid) return { valid: !1 };
                    r.push(n.data);
                  }
                  return { valid: !0, data: r };
                }
                if (s === u.date && n === u.date && +t == +a)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, s.value);
              return n.valid
                ? ((k(e) || k(s)) && t.dirty(),
                  { status: t.value, value: n.data })
                : (f(a, { code: o.invalid_intersection_types }), _);
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
              ]).then(([e, t]) => s(e, t))
            : s(
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
      ed.create = (e, t, a) =>
        new ed({ left: e, right: t, typeName: i.ZodIntersection, ...O(a) });
      class eu extends Z {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.array)
            return (
              f(a, {
                code: o.invalid_type,
                expected: u.array,
                received: a.parsedType,
              }),
              _
            );
          if (a.data.length < this._def.items.length)
            return (
              f(a, {
                code: o.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              _
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (f(a, {
              code: o.too_big,
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
            ? Promise.all(r).then((e) => m.mergeArray(t, e))
            : m.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new eu({ ...this._def, rest: e });
        }
      }
      eu.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new eu({ items: e, typeName: i.ZodTuple, rest: null, ...O(t) });
      };
      class el extends Z {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.object)
            return (
              f(a, {
                code: o.invalid_type,
                expected: u.object,
                received: a.parsedType,
              }),
              _
            );
          let r = [],
            s = this._def.keyType,
            n = this._def.valueType;
          for (let e in a.data)
            r.push({
              key: s._parse(new x(a, e, a.path, e)),
              value: n._parse(new x(a, a.data[e], a.path, e)),
              alwaysSet: e in a.data,
            });
          return a.common.async
            ? m.mergeObjectAsync(t, r)
            : m.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new el(
            t instanceof Z
              ? { keyType: e, valueType: t, typeName: i.ZodRecord, ...O(a) }
              : {
                  keyType: W.create(),
                  valueType: e,
                  typeName: i.ZodRecord,
                  ...O(t),
                },
          );
        }
      }
      class eo extends Z {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.map)
            return (
              f(a, {
                code: o.invalid_type,
                expected: u.map,
                received: a.parsedType,
              }),
              _
            );
          let r = this._def.keyType,
            s = this._def.valueType,
            n = [...a.data.entries()].map(([e, t], n) => ({
              key: r._parse(new x(a, e, a.path, [n, 'key'])),
              value: s._parse(new x(a, t, a.path, [n, 'value'])),
            }));
          if (a.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let a of n) {
                let r = await a.key,
                  s = await a.value;
                if ('aborted' === r.status || 'aborted' === s.status) return _;
                (('dirty' === r.status || 'dirty' === s.status) && t.dirty(),
                  e.set(r.value, s.value));
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let a of n) {
              let r = a.key,
                s = a.value;
              if ('aborted' === r.status || 'aborted' === s.status) return _;
              (('dirty' === r.status || 'dirty' === s.status) && t.dirty(),
                e.set(r.value, s.value));
            }
            return { status: t.value, value: e };
          }
        }
      }
      eo.create = (e, t, a) =>
        new eo({ valueType: t, keyType: e, typeName: i.ZodMap, ...O(a) });
      class ec extends Z {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.set)
            return (
              f(a, {
                code: o.invalid_type,
                expected: u.set,
                received: a.parsedType,
              }),
              _
            );
          let r = this._def;
          (null !== r.minSize &&
            a.data.size < r.minSize.value &&
            (f(a, {
              code: o.too_small,
              minimum: r.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              a.data.size > r.maxSize.value &&
              (f(a, {
                code: o.too_big,
                maximum: r.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty()));
          let s = this._def.valueType;
          function n(e) {
            let a = new Set();
            for (let r of e) {
              if ('aborted' === r.status) return _;
              ('dirty' === r.status && t.dirty(), a.add(r.value));
            }
            return { status: t.value, value: a };
          }
          let i = [...a.data.values()].map((e, t) =>
            s._parse(new x(a, e, a.path, t)),
          );
          return a.common.async ? Promise.all(i).then((e) => n(e)) : n(i);
        }
        min(e, t) {
          return new ec({
            ...this._def,
            minSize: { value: e, message: n.toString(t) },
          });
        }
        max(e, t) {
          return new ec({
            ...this._def,
            maxSize: { value: e, message: n.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ec.create = (e, t) =>
        new ec({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: i.ZodSet,
          ...O(t),
        });
      class eh extends Z {
        constructor() {
          (super(...arguments), (this.validate = this.implement));
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== u.function)
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.function,
                received: t.parsedType,
              }),
              _
            );
          function a(e, a) {
            return p({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                h,
                h,
              ].filter((e) => !!e),
              issueData: { code: o.invalid_arguments, argumentsError: a },
            });
          }
          function r(e, a) {
            return p({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                h,
                h,
              ].filter((e) => !!e),
              issueData: { code: o.invalid_return_type, returnTypeError: a },
            });
          }
          let s = { errorMap: t.common.contextualErrorMap },
            n = t.data;
          if (this._def.returns instanceof eg) {
            let e = this;
            return g(async function (...t) {
              let i = new c([]),
                d = await e._def.args.parseAsync(t, s).catch((e) => {
                  throw (i.addIssue(a(t, e)), i);
                }),
                u = await Reflect.apply(n, this, d);
              return await e._def.returns._def.type
                .parseAsync(u, s)
                .catch((e) => {
                  throw (i.addIssue(r(u, e)), i);
                });
            });
          }
          {
            let e = this;
            return g(function (...t) {
              let i = e._def.args.safeParse(t, s);
              if (!i.success) throw new c([a(t, i.error)]);
              let d = Reflect.apply(n, this, i.data),
                u = e._def.returns.safeParse(d, s);
              if (!u.success) throw new c([r(d, u.error)]);
              return u.data;
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
          return new eh({ ...this._def, args: eu.create(e).rest(Q.create()) });
        }
        returns(e) {
          return new eh({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new eh({
            args: e || eu.create([]).rest(Q.create()),
            returns: t || Q.create(),
            typeName: i.ZodFunction,
            ...O(a),
          });
        }
      }
      class ep extends Z {
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
      ep.create = (e, t) => new ep({ getter: e, typeName: i.ZodLazy, ...O(t) });
      class ef extends Z {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                received: t.data,
                code: o.invalid_literal,
                expected: this._def.value,
              }),
              _
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function em(e, t) {
        return new e_({ values: e, typeName: i.ZodEnum, ...O(t) });
      }
      ef.create = (e, t) =>
        new ef({ value: e, typeName: i.ZodLiteral, ...O(t) });
      class e_ extends Z {
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              f(t, {
                expected: r.joinValues(a),
                received: t.parsedType,
                code: o.invalid_type,
              }),
              _
            );
          }
          if (
            (this._cache || (this._cache = new Set(this._def.values)),
            !this._cache.has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              f(t, {
                received: t.data,
                code: o.invalid_enum_value,
                options: a,
              }),
              _
            );
          }
          return g(e.data);
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
          return e_.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return e_.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t },
          );
        }
      }
      e_.create = em;
      class ey extends Z {
        _parse(e) {
          let t = r.getValidEnumValues(this._def.values),
            a = this._getOrReturnCtx(e);
          if (a.parsedType !== u.string && a.parsedType !== u.number) {
            let e = r.objectValues(t);
            return (
              f(a, {
                expected: r.joinValues(e),
                received: a.parsedType,
                code: o.invalid_type,
              }),
              _
            );
          }
          if (
            (this._cache ||
              (this._cache = new Set(r.getValidEnumValues(this._def.values))),
            !this._cache.has(e.data))
          ) {
            let e = r.objectValues(t);
            return (
              f(a, {
                received: a.data,
                code: o.invalid_enum_value,
                options: e,
              }),
              _
            );
          }
          return g(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ey.create = (e, t) =>
        new ey({ values: e, typeName: i.ZodNativeEnum, ...O(t) });
      class eg extends Z {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== u.promise && !1 === t.common.async
            ? (f(t, {
                code: o.invalid_type,
                expected: u.promise,
                received: t.parsedType,
              }),
              _)
            : g(
                (t.parsedType === u.promise
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
        new eg({ type: e, typeName: i.ZodPromise, ...O(t) });
      class ev extends Z {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === i.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            s = this._def.effect || null,
            n = {
              addIssue: (e) => {
                (f(a, e), e.fatal ? t.abort() : t.dirty());
              },
              get path() {
                return a.path;
              },
            };
          if (((n.addIssue = n.addIssue.bind(n)), 'preprocess' === s.type)) {
            let e = s.transform(a.data, n);
            if (a.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return _;
                let r = await this._def.schema._parseAsync({
                  data: e,
                  path: a.path,
                  parent: a,
                });
                return 'aborted' === r.status
                  ? _
                  : 'dirty' === r.status || 'dirty' === t.value
                    ? y(r.value)
                    : r;
              });
            {
              if ('aborted' === t.value) return _;
              let r = this._def.schema._parseSync({
                data: e,
                path: a.path,
                parent: a,
              });
              return 'aborted' === r.status
                ? _
                : 'dirty' === r.status || 'dirty' === t.value
                  ? y(r.value)
                  : r;
            }
          }
          if ('refinement' === s.type) {
            let e = (e) => {
              let t = s.refinement(e, n);
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
                    ? _
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
                ? _
                : ('dirty' === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
          }
          if ('transform' === s.type)
            if (!1 !== a.common.async)
              return this._def.schema
                ._parseAsync({ data: a.data, path: a.path, parent: a })
                .then((e) =>
                  b(e)
                    ? Promise.resolve(s.transform(e.value, n)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : _,
                );
            else {
              let e = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              if (!b(e)) return _;
              let r = s.transform(e.value, n);
              if (r instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: r };
            }
          r.assertNever(s);
        }
      }
      ((ev.create = (e, t, a) =>
        new ev({ schema: e, typeName: i.ZodEffects, effect: t, ...O(a) })),
        (ev.createWithPreprocess = (e, t, a) =>
          new ev({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: i.ZodEffects,
            ...O(a),
          })));
      class ek extends Z {
        _parse(e) {
          return this._getType(e) === u.undefined
            ? g(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ek.create = (e, t) =>
        new ek({ innerType: e, typeName: i.ZodOptional, ...O(t) });
      class eb extends Z {
        _parse(e) {
          return this._getType(e) === u.null
            ? g(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eb.create = (e, t) =>
        new eb({ innerType: e, typeName: i.ZodNullable, ...O(t) });
      class ew extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return (
            t.parsedType === u.undefined && (a = this._def.defaultValue()),
            this._def.innerType._parse({ data: a, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ew.create = (e, t) =>
        new ew({
          innerType: e,
          typeName: i.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...O(t),
        });
      class ex extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: a.data,
              path: a.path,
              parent: { ...a },
            });
          return w(r)
            ? r.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new c(a.common.issues);
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
                          return new c(a.common.issues);
                        },
                        input: a.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ex.create = (e, t) =>
        new ex({
          innerType: e,
          typeName: i.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...O(t),
        });
      class eT extends Z {
        _parse(e) {
          if (this._getType(e) !== u.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: o.invalid_type,
                expected: u.nan,
                received: t.parsedType,
              }),
              _
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      ((eT.create = (e) => new eT({ typeName: i.ZodNaN, ...O(e) })),
        Symbol('zod_brand'));
      class eO extends Z {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eZ extends Z {
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
                ? _
                : 'dirty' === e.status
                  ? (t.dirty(), y(e.value))
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
              ? _
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
          return new eZ({ in: e, out: t, typeName: i.ZodPipeline });
        }
      }
      class eS extends Z {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            a = (e) => (b(e) && (e.value = Object.freeze(e.value)), e);
          return w(t) ? t.then((e) => a(e)) : a(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ((eS.create = (e, t) =>
        new eS({ innerType: e, typeName: i.ZodReadonly, ...O(t) })),
        er.lazycreate,
        (function (e) {
          ((e.ZodString = 'ZodString'),
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
            (e.ZodReadonly = 'ZodReadonly'));
        })(i || (i = {})));
      let eC = W.create;
      (K.create,
        eT.create,
        B.create,
        q.create,
        J.create,
        Y.create,
        G.create,
        H.create,
        X.create,
        Q.create,
        ee.create,
        et.create);
      let eA = ea.create,
        eN = er.create;
      (er.strictCreate,
        es.create,
        ei.create,
        ed.create,
        eu.create,
        el.create,
        eo.create,
        ec.create,
        eh.create,
        ep.create,
        ef.create,
        e_.create,
        ey.create,
        eg.create,
        ev.create,
        ek.create,
        eb.create,
        ev.createWithPreprocess,
        eZ.create);
    },
    4027: (e, t, a) => {
      a.d(t, { MO: () => b, _w: () => v, eE: () => k });
      let r = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
        s = (e) => 'init' in e,
        n = (e) => !!e.write,
        i = (e) => 'v' in e || 'e' in e,
        d = (e) => {
          if ('e' in e) throw e.e;
          if (!('v' in e)) throw Error('[Bug] atom state is not initialized');
          return e.v;
        },
        u = new WeakMap(),
        l = (e) => {
          var t;
          return h(e) && !!(null == (t = u.get(e)) ? void 0 : t[0]);
        },
        o = (e) => {
          let t = u.get(e);
          (null == t ? void 0 : t[0]) &&
            ((t[0] = !1), t[1].forEach((e) => e()));
        },
        c = (e, t) => {
          let a = u.get(e);
          if (!a) {
            ((a = [!0, new Set()]), u.set(e, a));
            let t = () => {
              a[0] = !1;
            };
            e.then(t, t);
          }
          a[1].add(t);
        },
        h = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        p = (e, t, a) => {
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
        f = (e, t, a) => {
          let r = a(e),
            s = 'v' in r,
            n = r.v;
          if (h(t)) for (let s of r.d.keys()) p(e, t, a(s));
          ((r.v = t),
            delete r.e,
            (s && Object.is(n, r.v)) || (++r.n, h(n) && o(n)));
        },
        m = (e, t, a) => {
          var r;
          let s = new Set();
          for (let t of (null == (r = a.get(e)) ? void 0 : r.t) || [])
            a.has(t) && s.add(t);
          for (let e of t.p) s.add(e);
          return s;
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
        y = () => {
          let e = {},
            t = new WeakMap(),
            a = (a) => {
              var r, s;
              (null == (r = t.get(e)) || r.forEach((e) => e(a)),
                null == (s = t.get(a)) || s.forEach((e) => e()));
            };
          return (
            (a.add = (a, r) => {
              let s = a || e,
                n = (t.has(s) ? t : t.set(s, new Set())).get(s);
              return (
                n.add(r),
                () => {
                  (null == n || n.delete(r), n.size || t.delete(s));
                }
              );
            }),
            a
          );
        },
        g = Symbol(),
        v = (
          e = new WeakMap(),
          t = new WeakMap(),
          a = new WeakMap(),
          u = new Set(),
          o = new Set(),
          _ = new Set(),
          y = {},
          v = (e, ...t) => e.read(...t),
          k = (e, ...t) => e.write(...t),
          b = (e, t) => {
            var a;
            return null == (a = e.unstable_onInit) ? void 0 : a.call(e, t);
          },
          w = (e, t) => {
            var a;
            return null == (a = e.onMount) ? void 0 : a.call(e, t);
          },
          ...x
        ) => {
          let T =
              x[0] ||
              ((t) => {
                if (!t) throw Error('Atom is undefined or null');
                let a = e.get(t);
                return (
                  a ||
                    ((a = { d: new Map(), p: new Set(), n: 0 }),
                    e.set(t, a),
                    null == b || b(t, I)),
                  a
                );
              }),
            O =
              x[1] ||
              (() => {
                let e = [],
                  a = (t) => {
                    try {
                      t();
                    } catch (t) {
                      e.push(t);
                    }
                  };
                do {
                  y.f && a(y.f);
                  let e = new Set(),
                    r = e.add.bind(e);
                  (u.forEach((e) => {
                    var a;
                    return null == (a = t.get(e)) ? void 0 : a.l.forEach(r);
                  }),
                    u.clear(),
                    _.forEach(r),
                    _.clear(),
                    o.forEach(r),
                    o.clear(),
                    e.forEach(a),
                    u.size && Z());
                } while (u.size || _.size || o.size);
                if (e.length) throw AggregateError(e);
              }),
            Z =
              x[2] ||
              (() => {
                let e = [],
                  r = new WeakSet(),
                  s = new WeakSet(),
                  n = Array.from(u);
                for (; n.length; ) {
                  let i = n[n.length - 1],
                    d = T(i);
                  if (s.has(i)) {
                    n.pop();
                    continue;
                  }
                  if (r.has(i)) {
                    if (a.get(i) === d.n) e.push([i, d]);
                    else if (a.has(i))
                      throw Error('[Bug] invalidated atom exists');
                    (s.add(i), n.pop());
                    continue;
                  }
                  for (let e of (r.add(i), m(i, d, t))) r.has(e) || n.push(e);
                }
                for (let t = e.length - 1; t >= 0; --t) {
                  let [r, s] = e[t],
                    n = !1;
                  for (let e of s.d.keys())
                    if (e !== r && u.has(e)) {
                      n = !0;
                      break;
                    }
                  (n && (S(r), N(r)), a.delete(r));
                }
              }),
            S =
              x[3] ||
              ((e) => {
                var o;
                let m,
                  _,
                  g = T(e);
                if (
                  i(g) &&
                  ((t.has(e) && a.get(e) !== g.n) ||
                    Array.from(g.d).every(([e, t]) => S(e).n === t))
                )
                  return g;
                g.d.clear();
                let k = !0,
                  b = () => {
                    t.has(e) && (N(e), Z(), O());
                  },
                  w = g.n;
                try {
                  let a = v(
                    e,
                    (a) => {
                      var n;
                      if (r(e, a)) {
                        let e = T(a);
                        if (!i(e))
                          if (s(a)) f(a, a.init, T);
                          else throw Error('no atom init');
                        return d(e);
                      }
                      let u = S(a);
                      try {
                        return d(u);
                      } finally {
                        (g.d.set(a, u.n),
                          l(g.v) && p(e, g.v, u),
                          null == (n = t.get(a)) || n.t.add(e),
                          k || b());
                      }
                    },
                    {
                      get signal() {
                        return (m || (m = new AbortController()), m.signal);
                      },
                      get setSelf() {
                        return (
                          n(e) ||
                            console.warn(
                              'setSelf function cannot be used with read-only atom',
                            ),
                          !_ &&
                            n(e) &&
                            (_ = (...t) => {
                              if (
                                (k &&
                                  console.warn(
                                    'setSelf function cannot be called in sync',
                                  ),
                                !k)
                              )
                                try {
                                  return A(e, ...t);
                                } finally {
                                  (Z(), O());
                                }
                            }),
                          _
                        );
                      },
                    },
                  );
                  return (
                    f(e, a, T),
                    h(a) &&
                      (c(a, () => (null == m ? void 0 : m.abort())),
                      a.then(b, b)),
                    g
                  );
                } catch (e) {
                  return (delete g.v, (g.e = e), ++g.n, g);
                } finally {
                  ((k = !1),
                    w !== g.n &&
                      a.get(e) === w &&
                      (a.set(e, g.n),
                      u.add(e),
                      null == (o = y.c) || o.call(y, e)));
                }
              }),
            C =
              x[4] ||
              ((e) => {
                let r = [e];
                for (; r.length; ) {
                  let e = r.pop(),
                    s = T(e);
                  for (let n of m(e, s, t)) {
                    let e = T(n);
                    (a.set(n, e.n), r.push(n));
                  }
                }
              }),
            A =
              x[5] ||
              ((e, ...t) => {
                let a = !0;
                try {
                  return k(
                    e,
                    (e) => d(S(e)),
                    (t, ...n) => {
                      var i;
                      let d = T(t);
                      try {
                        if (!r(e, t)) return A(t, ...n);
                        {
                          if (!s(t)) throw Error('atom not writable');
                          let e = d.n,
                            a = n[0];
                          (f(t, a, T),
                            N(t),
                            e !== d.n &&
                              (u.add(t),
                              null == (i = y.c) || i.call(y, t),
                              C(t)));
                          return;
                        }
                      } finally {
                        a || (Z(), O());
                      }
                    },
                    ...t,
                  );
                } finally {
                  a = !1;
                }
              }),
            N =
              x[6] ||
              ((e) => {
                var a;
                let r = T(e),
                  s = t.get(e);
                if (s && !l(r.v)) {
                  for (let [t, n] of r.d)
                    if (!s.d.has(t)) {
                      let r = T(t);
                      (E(t).t.add(e),
                        s.d.add(t),
                        n !== r.n &&
                          (u.add(t), null == (a = y.c) || a.call(y, t), C(t)));
                    }
                  for (let t of s.d || [])
                    if (!r.d.has(t)) {
                      s.d.delete(t);
                      let a = j(t);
                      null == a || a.t.delete(e);
                    }
                }
              }),
            E =
              x[7] ||
              ((e) => {
                var a;
                let r = T(e),
                  s = t.get(e);
                if (!s) {
                  for (let t of (S(e), r.d.keys())) E(t).t.add(e);
                  ((s = { l: new Set(), d: new Set(r.d.keys()), t: new Set() }),
                    t.set(e, s),
                    null == (a = y.m) || a.call(y, e),
                    n(e) &&
                      o.add(() => {
                        let t = !0;
                        try {
                          let a = w(e, (...a) => {
                            try {
                              return A(e, ...a);
                            } finally {
                              t || (Z(), O());
                            }
                          });
                          a &&
                            (s.u = () => {
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
                      }));
                }
                return s;
              }),
            j =
              x[8] ||
              ((e) => {
                var a;
                let r = T(e),
                  s = t.get(e);
                if (
                  s &&
                  !s.l.size &&
                  !Array.from(s.t).some((a) => {
                    var r;
                    return null == (r = t.get(a)) ? void 0 : r.d.has(e);
                  })
                ) {
                  for (let n of (s.u && _.add(s.u),
                  (s = void 0),
                  t.delete(e),
                  null == (a = y.u) || a.call(y, e),
                  r.d.keys())) {
                    let t = j(n);
                    null == t || t.t.delete(e);
                  }
                  return;
                }
                return s;
              }),
            I = {
              get: (e) => d(S(e)),
              set: (e, ...t) => {
                try {
                  return A(e, ...t);
                } finally {
                  (Z(), O());
                }
              },
              sub: (e, t) => {
                let a = E(e).l;
                return (
                  a.add(t),
                  O(),
                  () => {
                    (a.delete(t), j(e), O());
                  }
                );
              },
            };
          return (
            Object.defineProperty(I, g, {
              value: [
                e,
                t,
                a,
                u,
                o,
                _,
                y,
                v,
                k,
                b,
                w,
                T,
                O,
                Z,
                S,
                C,
                A,
                N,
                E,
                j,
              ],
            }),
            I
          );
        },
        k = (e) => (
          e.c || (e.c = y()),
          e.m || (e.m = y()),
          e.u || (e.u = y()),
          e.f || (e.f = _()),
          e
        ),
        b = c;
    },
    9964: (e, t, a) => {
      let r, s;
      a.d(t, { eU: () => d, zp: () => c });
      var n = a(4027);
      let i = 0;
      function d(e, t) {
        let a = `atom${++i}`,
          r = {
            toString() {
              return this.debugLabel ? a + ':' + this.debugLabel : a;
            },
          };
        return (
          'function' == typeof e
            ? (r.read = e)
            : ((r.init = e), (r.read = u), (r.write = l)),
          t && (r.write = t),
          r
        );
      }
      function u(e) {
        return e(this);
      }
      function l(e, t, a) {
        return t(this, 'function' == typeof a ? a(e(this)) : a);
      }
      let o = () => {
        let e = 0,
          t = (0, n.eE)({}),
          a = new WeakMap(),
          r = new WeakMap(),
          s = (0, n._w)(
            a,
            r,
            void 0,
            void 0,
            void 0,
            void 0,
            t,
            void 0,
            (t, a, r, ...s) => (e ? r(t, ...s) : t.write(a, r, ...s)),
          ),
          i = new Set();
        return (
          t.m.add(void 0, (e) => {
            (i.add(e), (a.get(e).m = r.get(e)));
          }),
          t.u.add(void 0, (e) => {
            i.delete(e);
            let t = a.get(e);
            delete t.m;
          }),
          Object.assign(s, {
            dev4_get_internal_weak_map: () => (
              console.log('Deprecated: Use devstore from the devtools library'),
              a
            ),
            dev4_get_mounted_atoms: () => i,
            dev4_restore_atoms: (t) => {
              s.set({
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
      };
      function c() {
        return (
          s ||
            ((s = r ? r() : o()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = s),
            globalThis.__JOTAI_DEFAULT_STORE__ !== s &&
              console.warn(
                'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044',
              )),
          s
        );
      }
    },
  },
]);
