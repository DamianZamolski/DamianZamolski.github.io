'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [920],
  {
    710: (e, t, a) => {
      let r;
      a.d(t, { z: () => o });
      var n,
        s,
        i,
        d,
        o = {};
      (a.r(o),
        a.d(o, {
          BRAND: () => ej,
          DIRTY: () => x,
          EMPTY_PATH: () => v,
          INVALID: () => w,
          NEVER: () => tf,
          OK: () => Z,
          ParseStatus: () => k,
          Schema: () => j,
          ZodAny: () => es,
          ZodArray: () => eu,
          ZodBigInt: () => Q,
          ZodBoolean: () => ee,
          ZodBranded: () => eI,
          ZodCatch: () => eN,
          ZodDate: () => et,
          ZodDefault: () => eC,
          ZodDiscriminatedUnion: () => ep,
          ZodEffects: () => eO,
          ZodEnum: () => ex,
          ZodError: () => p,
          ZodFirstPartyTypeKind: () => d,
          ZodFunction: () => ev,
          ZodIntersection: () => ef,
          ZodIssueCode: () => c,
          ZodLazy: () => eb,
          ZodLiteral: () => ek,
          ZodMap: () => ey,
          ZodNaN: () => eE,
          ZodNativeEnum: () => eZ,
          ZodNever: () => ed,
          ZodNull: () => en,
          ZodNullable: () => eA,
          ZodNumber: () => X,
          ZodObject: () => el,
          ZodOptional: () => eS,
          ZodParsedType: () => u,
          ZodPipeline: () => eR,
          ZodPromise: () => eT,
          ZodReadonly: () => eP,
          ZodRecord: () => e_,
          ZodSchema: () => j,
          ZodSet: () => eg,
          ZodString: () => G,
          ZodSymbol: () => ea,
          ZodTransformer: () => eO,
          ZodTuple: () => em,
          ZodType: () => j,
          ZodUndefined: () => er,
          ZodUnion: () => ec,
          ZodUnknown: () => ei,
          ZodVoid: () => eo,
          addIssueToContext: () => b,
          any: () => eY,
          array: () => eQ,
          bigint: () => eU,
          boolean: () => eW,
          coerce: () => tp,
          custom: () => eM,
          date: () => eK,
          datetimeRegex: () => H,
          defaultErrorMap: () => f,
          discriminatedUnion: () => e4,
          effect: () => ts,
          enum: () => ta,
          function: () => e8,
          getErrorMap: () => y,
          getParsedType: () => l,
          instanceof: () => eL,
          intersection: () => e2,
          isAborted: () => T,
          isAsync: () => A,
          isDirty: () => O,
          isValid: () => S,
          late: () => eF,
          lazy: () => te,
          literal: () => tt,
          makeIssue: () => g,
          map: () => e6,
          nan: () => eV,
          nativeEnum: () => tr,
          never: () => eG,
          null: () => eq,
          nullable: () => td,
          number: () => eD,
          object: () => e0,
          objectUtil: () => s,
          oboolean: () => th,
          onumber: () => tc,
          optional: () => ti,
          ostring: () => tl,
          pipeline: () => tu,
          preprocess: () => to,
          promise: () => tn,
          quotelessJson: () => h,
          record: () => e3,
          set: () => e7,
          setErrorMap: () => _,
          strictObject: () => e1,
          string: () => ez,
          symbol: () => eB,
          transformer: () => ts,
          tuple: () => e5,
          undefined: () => eJ,
          union: () => e9,
          unknown: () => eH,
          util: () => n,
          void: () => eX,
        }),
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
        })(n || (n = {})),
        ((s || (s = {})).mergeShapes = (e, t) => ({ ...e, ...t })));
      let u = n.arrayToEnum([
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
        c = n.arrayToEnum([
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
        ]),
        h = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:');
      class p extends Error {
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
                    (r === n.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }),
                        e[a]._errors.push(t(n)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      r++);
                  }
                }
            };
          return (r(this), a);
        }
        static assert(e) {
          if (!(e instanceof p)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, n.jsonStringifyReplacer, 2);
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
      p.create = (e) => new p(e);
      let f = (e, t) => {
          let a;
          switch (e.code) {
            case c.invalid_type:
              a =
                e.received === u.undefined
                  ? 'Required'
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case c.invalid_literal:
              a = `Invalid literal value, expected ${JSON.stringify(e.expected, n.jsonStringifyReplacer)}`;
              break;
            case c.unrecognized_keys:
              a = `Unrecognized key(s) in object: ${n.joinValues(e.keys, ', ')}`;
              break;
            case c.invalid_union:
              a = 'Invalid input';
              break;
            case c.invalid_union_discriminator:
              a = `Invalid discriminator value. Expected ${n.joinValues(e.options)}`;
              break;
            case c.invalid_enum_value:
              a = `Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;
              break;
            case c.invalid_arguments:
              a = 'Invalid function arguments';
              break;
            case c.invalid_return_type:
              a = 'Invalid function return type';
              break;
            case c.invalid_date:
              a = 'Invalid date';
              break;
            case c.invalid_string:
              'object' == typeof e.validation
                ? 'includes' in e.validation
                  ? ((a = `Invalid input: must include "${e.validation.includes}"`),
                    'number' == typeof e.validation.position &&
                      (a = `${a} at one or more positions greater than or equal to ${e.validation.position}`))
                  : 'startsWith' in e.validation
                    ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : 'endsWith' in e.validation
                      ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : n.assertNever(e.validation)
                : (a =
                    'regex' !== e.validation
                      ? `Invalid ${e.validation}`
                      : 'Invalid');
              break;
            case c.too_small:
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
            case c.too_big:
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
            case c.custom:
              a = 'Invalid input';
              break;
            case c.invalid_intersection_types:
              a = 'Intersection results could not be merged';
              break;
            case c.not_multiple_of:
              a = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case c.not_finite:
              a = 'Number must be finite';
              break;
            default:
              ((a = t.defaultError), n.assertNever(e));
          }
          return { message: a };
        },
        m = f;
      function _(e) {
        m = e;
      }
      function y() {
        return m;
      }
      let g = (e) => {
          let { data: t, path: a, errorMaps: r, issueData: n } = e,
            s = [...a, ...(n.path || [])],
            i = { ...n, path: s };
          if (void 0 !== n.message)
            return { ...n, path: s, message: n.message };
          let d = '';
          for (let e of r
            .filter((e) => !!e)
            .slice()
            .reverse())
            d = e(i, { data: t, defaultError: d }).message;
          return { ...n, path: s, message: d };
        },
        v = [];
      function b(e, t) {
        let a = m,
          r = g({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              a,
              a === f ? void 0 : f,
            ].filter((e) => !!e),
          });
        e.common.issues.push(r);
      }
      class k {
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
            if ('aborted' === r.status) return w;
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
          return k.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          let a = {};
          for (let r of t) {
            let { key: t, value: n } = r;
            if ('aborted' === t.status || 'aborted' === n.status) return w;
            ('dirty' === t.status && e.dirty(),
              'dirty' === n.status && e.dirty(),
              '__proto__' !== t.value &&
                (void 0 !== n.value || r.alwaysSet) &&
                (a[t.value] = n.value));
          }
          return { status: e.value, value: a };
        }
      }
      let w = Object.freeze({ status: 'aborted' }),
        x = (e) => ({ status: 'dirty', value: e }),
        Z = (e) => ({ status: 'valid', value: e }),
        T = (e) => 'aborted' === e.status,
        O = (e) => 'dirty' === e.status,
        S = (e) => 'valid' === e.status,
        A = (e) => 'undefined' != typeof Promise && e instanceof Promise;
      !(function (e) {
        ((e.errToObj = (e) =>
          'string' == typeof e ? { message: e } : e || {}),
          (e.toString = (e) => ('string' == typeof e ? e : e?.message)));
      })(i || (i = {}));
      class C {
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
      let N = (e, t) => {
        if (S(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new p(e.common.issues);
            return ((this._error = t), this._error);
          },
        };
      };
      function E(e) {
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
                let { message: s } = e;
                return 'invalid_enum_value' === t.code
                  ? { message: s ?? n.defaultError }
                  : void 0 === n.data
                    ? { message: s ?? r ?? n.defaultError }
                    : 'invalid_type' !== t.code
                      ? { message: n.defaultError }
                      : { message: s ?? a ?? n.defaultError };
              },
              description: n,
            };
      }
      class j {
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
            status: new k(),
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
          if (A(t)) throw Error('Synchronous parse encountered promise.');
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
          return N(a, r);
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
              return S(a) ? { value: a.value } : { issues: t.common.issues };
            } catch (e) {
              (e?.message?.toLowerCase()?.includes('encountered') &&
                (this['~standard'].async = !0),
                (t.common = { issues: [], async: !0 }));
            }
          return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
            S(e) ? { value: e.value } : { issues: t.common.issues },
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
          return N(a, await (A(r) ? r : Promise.resolve(r)));
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
              s = () => r.addIssue({ code: c.custom, ...a(t) });
            return 'undefined' != typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (s(), !1))
              : !!n || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, r) =>
              !!e(a) || (r.addIssue('function' == typeof t ? t(a, r) : t), !1),
          );
        }
        _refinement(e) {
          return new eO({
            schema: this,
            typeName: d.ZodEffects,
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
          return eS.create(this, this._def);
        }
        nullable() {
          return eA.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return eu.create(this);
        }
        promise() {
          return eT.create(this, this._def);
        }
        or(e) {
          return ec.create([this, e], this._def);
        }
        and(e) {
          return ef.create(this, e, this._def);
        }
        transform(e) {
          return new eO({
            ...E(this._def),
            schema: this,
            typeName: d.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          return new eC({
            ...E(this._def),
            innerType: this,
            defaultValue: 'function' == typeof e ? e : () => e,
            typeName: d.ZodDefault,
          });
        }
        brand() {
          return new eI({
            typeName: d.ZodBranded,
            type: this,
            ...E(this._def),
          });
        }
        catch(e) {
          return new eN({
            ...E(this._def),
            innerType: this,
            catchValue: 'function' == typeof e ? e : () => e,
            typeName: d.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eR.create(this, e);
        }
        readonly() {
          return eP.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let I = /^c[^\s-]{8,}$/i,
        R = /^[0-9a-z]+$/,
        P = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        $ =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        M = /^[a-z0-9_-]{21}$/i,
        F = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        L =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        z =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        D =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        V =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        U =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        W =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        K = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        B =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        J =
          '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
        q = RegExp(`^${J}$`);
      function Y(e) {
        let t = '[0-5]\\d';
        e.precision
          ? (t = `${t}\\.\\d{${e.precision}}`)
          : null == e.precision && (t = `${t}(\\.\\d+)?`);
        let a = e.precision ? '+' : '?';
        return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${a}`;
      }
      function H(e) {
        let t = `${J}T${Y(e)}`,
          a = [];
        return (
          a.push(e.local ? 'Z?' : 'Z'),
          e.offset && a.push('([+-]\\d{2}:?\\d{2})'),
          (t = `${t}(${a.join('|')})`),
          RegExp(`^${t}$`)
        );
      }
      class G extends j {
        _parse(e) {
          var t, a, s, i;
          let d;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== u.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.string,
                received: t.parsedType,
              }),
              w
            );
          }
          let o = new k();
          for (let u of this._def.checks)
            if ('min' === u.kind)
              e.data.length < u.value &&
                (b((d = this._getOrReturnCtx(e, d)), {
                  code: c.too_small,
                  minimum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('max' === u.kind)
              e.data.length > u.value &&
                (b((d = this._getOrReturnCtx(e, d)), {
                  code: c.too_big,
                  maximum: u.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: u.message,
                }),
                o.dirty());
            else if ('length' === u.kind) {
              let t = e.data.length > u.value,
                a = e.data.length < u.value;
              (t || a) &&
                ((d = this._getOrReturnCtx(e, d)),
                t
                  ? b(d, {
                      code: c.too_big,
                      maximum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    })
                  : a &&
                    b(d, {
                      code: c.too_small,
                      minimum: u.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: u.message,
                    }),
                o.dirty());
            } else if ('email' === u.kind)
              z.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'email',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('emoji' === u.kind)
              (r ||
                (r = RegExp(
                  '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
                  'u',
                )),
                r.test(e.data) ||
                  (b((d = this._getOrReturnCtx(e, d)), {
                    validation: 'emoji',
                    code: c.invalid_string,
                    message: u.message,
                  }),
                  o.dirty()));
            else if ('uuid' === u.kind)
              $.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'uuid',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('nanoid' === u.kind)
              M.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'nanoid',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid' === u.kind)
              I.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'cuid',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('cuid2' === u.kind)
              R.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'cuid2',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('ulid' === u.kind)
              P.test(e.data) ||
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'ulid',
                  code: c.invalid_string,
                  message: u.message,
                }),
                o.dirty());
            else if ('url' === u.kind)
              try {
                new URL(e.data);
              } catch {
                (b((d = this._getOrReturnCtx(e, d)), {
                  validation: 'url',
                  code: c.invalid_string,
                  message: u.message,
                }),
                  o.dirty());
              }
            else
              'regex' === u.kind
                ? ((u.regex.lastIndex = 0),
                  u.regex.test(e.data) ||
                    (b((d = this._getOrReturnCtx(e, d)), {
                      validation: 'regex',
                      code: c.invalid_string,
                      message: u.message,
                    }),
                    o.dirty()))
                : 'trim' === u.kind
                  ? (e.data = e.data.trim())
                  : 'includes' === u.kind
                    ? e.data.includes(u.value, u.position) ||
                      (b((d = this._getOrReturnCtx(e, d)), {
                        code: c.invalid_string,
                        validation: { includes: u.value, position: u.position },
                        message: u.message,
                      }),
                      o.dirty())
                    : 'toLowerCase' === u.kind
                      ? (e.data = e.data.toLowerCase())
                      : 'toUpperCase' === u.kind
                        ? (e.data = e.data.toUpperCase())
                        : 'startsWith' === u.kind
                          ? e.data.startsWith(u.value) ||
                            (b((d = this._getOrReturnCtx(e, d)), {
                              code: c.invalid_string,
                              validation: { startsWith: u.value },
                              message: u.message,
                            }),
                            o.dirty())
                          : 'endsWith' === u.kind
                            ? e.data.endsWith(u.value) ||
                              (b((d = this._getOrReturnCtx(e, d)), {
                                code: c.invalid_string,
                                validation: { endsWith: u.value },
                                message: u.message,
                              }),
                              o.dirty())
                            : 'datetime' === u.kind
                              ? H(u).test(e.data) ||
                                (b((d = this._getOrReturnCtx(e, d)), {
                                  code: c.invalid_string,
                                  validation: 'datetime',
                                  message: u.message,
                                }),
                                o.dirty())
                              : 'date' === u.kind
                                ? q.test(e.data) ||
                                  (b((d = this._getOrReturnCtx(e, d)), {
                                    code: c.invalid_string,
                                    validation: 'date',
                                    message: u.message,
                                  }),
                                  o.dirty())
                                : 'time' === u.kind
                                  ? RegExp(`^${Y(u)}$`).test(e.data) ||
                                    (b((d = this._getOrReturnCtx(e, d)), {
                                      code: c.invalid_string,
                                      validation: 'time',
                                      message: u.message,
                                    }),
                                    o.dirty())
                                  : 'duration' === u.kind
                                    ? L.test(e.data) ||
                                      (b((d = this._getOrReturnCtx(e, d)), {
                                        validation: 'duration',
                                        code: c.invalid_string,
                                        message: u.message,
                                      }),
                                      o.dirty())
                                    : 'ip' === u.kind
                                      ? ((t = e.data),
                                        !(
                                          (('v4' === (a = u.version) || !a) &&
                                            D.test(t)) ||
                                          (('v6' === a || !a) && U.test(t))
                                        ) &&
                                          1 &&
                                          (b((d = this._getOrReturnCtx(e, d)), {
                                            validation: 'ip',
                                            code: c.invalid_string,
                                            message: u.message,
                                          }),
                                          o.dirty()))
                                      : 'jwt' === u.kind
                                        ? !(function (e, t) {
                                            if (!F.test(e)) return !1;
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
                                                ('typ' in n &&
                                                  n?.typ !== 'JWT') ||
                                                !n.alg ||
                                                (t && n.alg !== t)
                                              )
                                                return !1;
                                              return !0;
                                            } catch {
                                              return !1;
                                            }
                                          })(e.data, u.alg) &&
                                          (b((d = this._getOrReturnCtx(e, d)), {
                                            validation: 'jwt',
                                            code: c.invalid_string,
                                            message: u.message,
                                          }),
                                          o.dirty())
                                        : 'cidr' === u.kind
                                          ? ((s = e.data),
                                            !(
                                              (('v4' === (i = u.version) ||
                                                !i) &&
                                                V.test(s)) ||
                                              (('v6' === i || !i) && W.test(s))
                                            ) &&
                                              1 &&
                                              (b(
                                                (d = this._getOrReturnCtx(
                                                  e,
                                                  d,
                                                )),
                                                {
                                                  validation: 'cidr',
                                                  code: c.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              o.dirty()))
                                          : 'base64' === u.kind
                                            ? K.test(e.data) ||
                                              (b(
                                                (d = this._getOrReturnCtx(
                                                  e,
                                                  d,
                                                )),
                                                {
                                                  validation: 'base64',
                                                  code: c.invalid_string,
                                                  message: u.message,
                                                },
                                              ),
                                              o.dirty())
                                            : 'base64url' === u.kind
                                              ? B.test(e.data) ||
                                                (b(
                                                  (d = this._getOrReturnCtx(
                                                    e,
                                                    d,
                                                  )),
                                                  {
                                                    validation: 'base64url',
                                                    code: c.invalid_string,
                                                    message: u.message,
                                                  },
                                                ),
                                                o.dirty())
                                              : n.assertNever(u);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, a) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: c.invalid_string,
            ...i.errToObj(a),
          });
        }
        _addCheck(e) {
          return new G({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...i.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...i.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...i.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...i.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: 'nanoid', ...i.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...i.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...i.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...i.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: 'base64', ...i.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: 'base64url', ...i.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: 'jwt', ...i.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...i.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: 'cidr', ...i.errToObj(e) });
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
                ...i.errToObj(e?.message),
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
                ...i.errToObj(e?.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: 'duration', ...i.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...i.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: t?.position,
            ...i.errToObj(t?.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: 'startsWith',
            value: e,
            ...i.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: 'endsWith',
            value: e,
            ...i.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...i.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...i.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...i.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, i.errToObj(e));
        }
        trim() {
          return new G({
            ...this._def,
            checks: [...this._def.checks, { kind: 'trim' }],
          });
        }
        toLowerCase() {
          return new G({
            ...this._def,
            checks: [...this._def.checks, { kind: 'toLowerCase' }],
          });
        }
        toUpperCase() {
          return new G({
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
      G.create = (e) =>
        new G({
          checks: [],
          typeName: d.ZodString,
          coerce: e?.coerce ?? !1,
          ...E(e),
        });
      class X extends j {
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
              b(t, {
                code: c.invalid_type,
                expected: u.number,
                received: t.parsedType,
              }),
              w
            );
          }
          let a = new k();
          for (let r of this._def.checks)
            'int' === r.kind
              ? n.isInteger(e.data) ||
                (b((t = this._getOrReturnCtx(e, t)), {
                  code: c.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: r.message,
                }),
                a.dirty())
              : 'min' === r.kind
                ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                  (b((t = this._getOrReturnCtx(e, t)), {
                    code: c.too_small,
                    minimum: r.value,
                    type: 'number',
                    inclusive: r.inclusive,
                    exact: !1,
                    message: r.message,
                  }),
                  a.dirty())
                : 'max' === r.kind
                  ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                    (b((t = this._getOrReturnCtx(e, t)), {
                      code: c.too_big,
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
                            (Number.parseInt(e.toFixed(n).replace('.', '')) %
                              Number.parseInt(t.toFixed(n).replace('.', ''))) /
                            10 ** n
                          );
                        })(e.data, r.value) &&
                      (b((t = this._getOrReturnCtx(e, t)), {
                        code: c.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message,
                      }),
                      a.dirty())
                    : 'finite' === r.kind
                      ? Number.isFinite(e.data) ||
                        (b((t = this._getOrReturnCtx(e, t)), {
                          code: c.not_finite,
                          message: r.message,
                        }),
                        a.dirty())
                      : n.assertNever(r);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, i.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, i.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, i.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, i.toString(t));
        }
        setLimit(e, t, a, r) {
          return new X({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: i.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new X({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: i.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !1,
            message: i.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !1,
            message: i.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: 0,
            inclusive: !0,
            message: i.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: 0,
            inclusive: !0,
            message: i.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: i.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: i.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: i.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: i.toString(e),
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
              ('multipleOf' === e.kind && n.isInteger(e.value)),
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
      X.create = (e) =>
        new X({
          checks: [],
          typeName: d.ZodNumber,
          coerce: e?.coerce || !1,
          ...E(e),
        });
      class Q extends j {
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
          let a = new k();
          for (let r of this._def.checks)
            'min' === r.kind
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                (b((t = this._getOrReturnCtx(e, t)), {
                  code: c.too_small,
                  type: 'bigint',
                  minimum: r.value,
                  inclusive: r.inclusive,
                  message: r.message,
                }),
                a.dirty())
              : 'max' === r.kind
                ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                  (b((t = this._getOrReturnCtx(e, t)), {
                    code: c.too_big,
                    type: 'bigint',
                    maximum: r.value,
                    inclusive: r.inclusive,
                    message: r.message,
                  }),
                  a.dirty())
                : 'multipleOf' === r.kind
                  ? e.data % r.value !== BigInt(0) &&
                    (b((t = this._getOrReturnCtx(e, t)), {
                      code: c.not_multiple_of,
                      multipleOf: r.value,
                      message: r.message,
                    }),
                    a.dirty())
                  : n.assertNever(r);
          return { status: a.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            b(t, {
              code: c.invalid_type,
              expected: u.bigint,
              received: t.parsedType,
            }),
            w
          );
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, i.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, i.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, i.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, i.toString(t));
        }
        setLimit(e, t, a, r) {
          return new Q({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: i.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new Q({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: i.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: i.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: i.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: i.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: 'multipleOf',
            value: e,
            message: i.toString(t),
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
      Q.create = (e) =>
        new Q({
          checks: [],
          typeName: d.ZodBigInt,
          coerce: e?.coerce ?? !1,
          ...E(e),
        });
      class ee extends j {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== u.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.boolean,
                received: t.parsedType,
              }),
              w
            );
          }
          return Z(e.data);
        }
      }
      ee.create = (e) =>
        new ee({ typeName: d.ZodBoolean, coerce: e?.coerce || !1, ...E(e) });
      class et extends j {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== u.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.date,
                received: t.parsedType,
              }),
              w
            );
          }
          if (Number.isNaN(e.data.getTime()))
            return (b(this._getOrReturnCtx(e), { code: c.invalid_date }), w);
          let a = new k();
          for (let r of this._def.checks)
            'min' === r.kind
              ? e.data.getTime() < r.value &&
                (b((t = this._getOrReturnCtx(e, t)), {
                  code: c.too_small,
                  message: r.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: r.value,
                  type: 'date',
                }),
                a.dirty())
              : 'max' === r.kind
                ? e.data.getTime() > r.value &&
                  (b((t = this._getOrReturnCtx(e, t)), {
                    code: c.too_big,
                    message: r.message,
                    inclusive: !0,
                    exact: !1,
                    maximum: r.value,
                    type: 'date',
                  }),
                  a.dirty())
                : n.assertNever(r);
          return { status: a.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new et({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: 'min',
            value: e.getTime(),
            message: i.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: 'max',
            value: e.getTime(),
            message: i.toString(t),
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
      et.create = (e) =>
        new et({
          checks: [],
          coerce: e?.coerce || !1,
          typeName: d.ZodDate,
          ...E(e),
        });
      class ea extends j {
        _parse(e) {
          if (this._getType(e) !== u.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.symbol,
                received: t.parsedType,
              }),
              w
            );
          }
          return Z(e.data);
        }
      }
      ea.create = (e) => new ea({ typeName: d.ZodSymbol, ...E(e) });
      class er extends j {
        _parse(e) {
          if (this._getType(e) !== u.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.undefined,
                received: t.parsedType,
              }),
              w
            );
          }
          return Z(e.data);
        }
      }
      er.create = (e) => new er({ typeName: d.ZodUndefined, ...E(e) });
      class en extends j {
        _parse(e) {
          if (this._getType(e) !== u.null) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.null,
                received: t.parsedType,
              }),
              w
            );
          }
          return Z(e.data);
        }
      }
      en.create = (e) => new en({ typeName: d.ZodNull, ...E(e) });
      class es extends j {
        constructor() {
          (super(...arguments), (this._any = !0));
        }
        _parse(e) {
          return Z(e.data);
        }
      }
      es.create = (e) => new es({ typeName: d.ZodAny, ...E(e) });
      class ei extends j {
        constructor() {
          (super(...arguments), (this._unknown = !0));
        }
        _parse(e) {
          return Z(e.data);
        }
      }
      ei.create = (e) => new ei({ typeName: d.ZodUnknown, ...E(e) });
      class ed extends j {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            b(t, {
              code: c.invalid_type,
              expected: u.never,
              received: t.parsedType,
            }),
            w
          );
        }
      }
      ed.create = (e) => new ed({ typeName: d.ZodNever, ...E(e) });
      class eo extends j {
        _parse(e) {
          if (this._getType(e) !== u.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.void,
                received: t.parsedType,
              }),
              w
            );
          }
          return Z(e.data);
        }
      }
      eo.create = (e) => new eo({ typeName: d.ZodVoid, ...E(e) });
      class eu extends j {
        _parse(e) {
          let { ctx: t, status: a } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== u.array)
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.array,
                received: t.parsedType,
              }),
              w
            );
          if (null !== r.exactLength) {
            let e = t.data.length > r.exactLength.value,
              n = t.data.length < r.exactLength.value;
            (e || n) &&
              (b(t, {
                code: e ? c.too_big : c.too_small,
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
              (b(t, {
                code: c.too_small,
                minimum: r.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              a.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (b(t, {
                code: c.too_big,
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
                r.type._parseAsync(new C(t, e, t.path, a)),
              ),
            ).then((e) => k.mergeArray(a, e));
          let n = [...t.data].map((e, a) =>
            r.type._parseSync(new C(t, e, t.path, a)),
          );
          return k.mergeArray(a, n);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new eu({
            ...this._def,
            minLength: { value: e, message: i.toString(t) },
          });
        }
        max(e, t) {
          return new eu({
            ...this._def,
            maxLength: { value: e, message: i.toString(t) },
          });
        }
        length(e, t) {
          return new eu({
            ...this._def,
            exactLength: { value: e, message: i.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      eu.create = (e, t) =>
        new eu({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: d.ZodArray,
          ...E(t),
        });
      class el extends j {
        constructor() {
          (super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = n.objectKeys(e);
          return ((this._cached = { shape: e, keys: t }), this._cached);
        }
        _parse(e) {
          if (this._getType(e) !== u.object) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.object,
                received: t.parsedType,
              }),
              w
            );
          }
          let { status: t, ctx: a } = this._processInputParams(e),
            { shape: r, keys: n } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof ed &&
              'strip' === this._def.unknownKeys
            )
          )
            for (let e in a.data) n.includes(e) || s.push(e);
          let i = [];
          for (let e of n) {
            let t = r[e],
              n = a.data[e];
            i.push({
              key: { status: 'valid', value: e },
              value: t._parse(new C(a, n, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof ed) {
            let e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (let e of s)
                i.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: a.data[e] },
                });
            else if ('strict' === e)
              s.length > 0 &&
                (b(a, { code: c.unrecognized_keys, keys: s }), t.dirty());
            else if ('strip' === e);
            else
              throw Error(
                'Internal ZodObject error: invalid unknownKeys value.',
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let r = a.data[t];
              i.push({
                key: { status: 'valid', value: t },
                value: e._parse(new C(a, r, a.path, t)),
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
                .then((e) => k.mergeObjectSync(t, e))
            : k.mergeObjectSync(t, i);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            i.errToObj,
            new el({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      let r =
                        this._def.errorMap?.(t, a).message ?? a.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? { message: i.errToObj(e).message ?? r }
                        : { message: r };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new el({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new el({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new el({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new el({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: d.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new el({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          for (let a of n.objectKeys(e))
            e[a] && this.shape[a] && (t[a] = this.shape[a]);
          return new el({ ...this._def, shape: () => t });
        }
        omit(e) {
          let t = {};
          for (let a of n.objectKeys(this.shape))
            e[a] || (t[a] = this.shape[a]);
          return new el({ ...this._def, shape: () => t });
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof el) {
              let a = {};
              for (let r in t.shape) {
                let n = t.shape[r];
                a[r] = eS.create(e(n));
              }
              return new el({ ...t._def, shape: () => a });
            }
            if (t instanceof eu)
              return new eu({ ...t._def, type: e(t.element) });
            if (t instanceof eS) return eS.create(e(t.unwrap()));
            if (t instanceof eA) return eA.create(e(t.unwrap()));
            if (t instanceof em) return em.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          for (let a of n.objectKeys(this.shape)) {
            let r = this.shape[a];
            e && !e[a] ? (t[a] = r) : (t[a] = r.optional());
          }
          return new el({ ...this._def, shape: () => t });
        }
        required(e) {
          let t = {};
          for (let a of n.objectKeys(this.shape))
            if (e && !e[a]) t[a] = this.shape[a];
            else {
              let e = this.shape[a];
              for (; e instanceof eS; ) e = e._def.innerType;
              t[a] = e;
            }
          return new el({ ...this._def, shape: () => t });
        }
        keyof() {
          return ew(n.objectKeys(this.shape));
        }
      }
      ((el.create = (e, t) =>
        new el({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: ed.create(),
          typeName: d.ZodObject,
          ...E(t),
        })),
        (el.strictCreate = (e, t) =>
          new el({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: ed.create(),
            typeName: d.ZodObject,
            ...E(t),
          })),
        (el.lazycreate = (e, t) =>
          new el({
            shape: e,
            unknownKeys: 'strip',
            catchall: ed.create(),
            typeName: d.ZodObject,
            ...E(t),
          })));
      class ec extends j {
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
              let a = e.map((e) => new p(e.ctx.common.issues));
              return (b(t, { code: c.invalid_union, unionErrors: a }), w);
            });
          {
            let e,
              r = [];
            for (let n of a) {
              let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = n._parseSync({ data: t.data, path: t.path, parent: a });
              if ('valid' === s.status) return s;
              ('dirty' !== s.status || e || (e = { result: s, ctx: a }),
                a.common.issues.length && r.push(a.common.issues));
            }
            if (e)
              return (t.common.issues.push(...e.ctx.common.issues), e.result);
            let n = r.map((e) => new p(e));
            return (b(t, { code: c.invalid_union, unionErrors: n }), w);
          }
        }
        get options() {
          return this._def.options;
        }
      }
      ec.create = (e, t) =>
        new ec({ options: e, typeName: d.ZodUnion, ...E(t) });
      let eh = (e) => {
        if (e instanceof eb) return eh(e.schema);
        if (e instanceof eO) return eh(e.innerType());
        if (e instanceof ek) return [e.value];
        if (e instanceof ex) return e.options;
        if (e instanceof eZ) return n.objectValues(e.enum);
        else if (e instanceof eC) return eh(e._def.innerType);
        else if (e instanceof er) return [void 0];
        else if (e instanceof en) return [null];
        else if (e instanceof eS) return [void 0, ...eh(e.unwrap())];
        else if (e instanceof eA) return [null, ...eh(e.unwrap())];
        else if (e instanceof eI) return eh(e.unwrap());
        else if (e instanceof eP) return eh(e.unwrap());
        else if (e instanceof eN) return eh(e._def.innerType);
        else return [];
      };
      class ep extends j {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== u.object)
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.object,
                received: t.parsedType,
              }),
              w
            );
          let a = this.discriminator,
            r = t.data[a],
            n = this.optionsMap.get(r);
          return n
            ? t.common.async
              ? n._parseAsync({ data: t.data, path: t.path, parent: t })
              : n._parseSync({ data: t.data, path: t.path, parent: t })
            : (b(t, {
                code: c.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              w);
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
            let t = eh(a.shape[e]);
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
          return new ep({
            typeName: d.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...E(a),
          });
        }
      }
      class ef extends j {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            r = (e, r) => {
              if (T(e) || T(r)) return w;
              let s = (function e(t, a) {
                let r = l(t),
                  s = l(a);
                if (t === a) return { valid: !0, data: t };
                if (r === u.object && s === u.object) {
                  let r = n.objectKeys(a),
                    s = n.objectKeys(t).filter((e) => -1 !== r.indexOf(e)),
                    i = { ...t, ...a };
                  for (let r of s) {
                    let n = e(t[r], a[r]);
                    if (!n.valid) return { valid: !1 };
                    i[r] = n.data;
                  }
                  return { valid: !0, data: i };
                }
                if (r === u.array && s === u.array) {
                  if (t.length !== a.length) return { valid: !1 };
                  let r = [];
                  for (let n = 0; n < t.length; n++) {
                    let s = e(t[n], a[n]);
                    if (!s.valid) return { valid: !1 };
                    r.push(s.data);
                  }
                  return { valid: !0, data: r };
                }
                if (r === u.date && s === u.date && +t == +a)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, r.value);
              return s.valid
                ? ((O(e) || O(r)) && t.dirty(),
                  { status: t.value, value: s.data })
                : (b(a, { code: c.invalid_intersection_types }), w);
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
      ef.create = (e, t, a) =>
        new ef({ left: e, right: t, typeName: d.ZodIntersection, ...E(a) });
      class em extends j {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.array)
            return (
              b(a, {
                code: c.invalid_type,
                expected: u.array,
                received: a.parsedType,
              }),
              w
            );
          if (a.data.length < this._def.items.length)
            return (
              b(a, {
                code: c.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              w
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (b(a, {
              code: c.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          let r = [...a.data]
            .map((e, t) => {
              let r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new C(a, e, a.path, t)) : null;
            })
            .filter((e) => !!e);
          return a.common.async
            ? Promise.all(r).then((e) => k.mergeArray(t, e))
            : k.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new em({ ...this._def, rest: e });
        }
      }
      em.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new em({ items: e, typeName: d.ZodTuple, rest: null, ...E(t) });
      };
      class e_ extends j {
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
              b(a, {
                code: c.invalid_type,
                expected: u.object,
                received: a.parsedType,
              }),
              w
            );
          let r = [],
            n = this._def.keyType,
            s = this._def.valueType;
          for (let e in a.data)
            r.push({
              key: n._parse(new C(a, e, a.path, e)),
              value: s._parse(new C(a, a.data[e], a.path, e)),
              alwaysSet: e in a.data,
            });
          return a.common.async
            ? k.mergeObjectAsync(t, r)
            : k.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new e_(
            t instanceof j
              ? { keyType: e, valueType: t, typeName: d.ZodRecord, ...E(a) }
              : {
                  keyType: G.create(),
                  valueType: e,
                  typeName: d.ZodRecord,
                  ...E(t),
                },
          );
        }
      }
      class ey extends j {
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
              b(a, {
                code: c.invalid_type,
                expected: u.map,
                received: a.parsedType,
              }),
              w
            );
          let r = this._def.keyType,
            n = this._def.valueType,
            s = [...a.data.entries()].map(([e, t], s) => ({
              key: r._parse(new C(a, e, a.path, [s, 'key'])),
              value: n._parse(new C(a, t, a.path, [s, 'value'])),
            }));
          if (a.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let a of s) {
                let r = await a.key,
                  n = await a.value;
                if ('aborted' === r.status || 'aborted' === n.status) return w;
                (('dirty' === r.status || 'dirty' === n.status) && t.dirty(),
                  e.set(r.value, n.value));
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let a of s) {
              let r = a.key,
                n = a.value;
              if ('aborted' === r.status || 'aborted' === n.status) return w;
              (('dirty' === r.status || 'dirty' === n.status) && t.dirty(),
                e.set(r.value, n.value));
            }
            return { status: t.value, value: e };
          }
        }
      }
      ey.create = (e, t, a) =>
        new ey({ valueType: t, keyType: e, typeName: d.ZodMap, ...E(a) });
      class eg extends j {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== u.set)
            return (
              b(a, {
                code: c.invalid_type,
                expected: u.set,
                received: a.parsedType,
              }),
              w
            );
          let r = this._def;
          (null !== r.minSize &&
            a.data.size < r.minSize.value &&
            (b(a, {
              code: c.too_small,
              minimum: r.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              a.data.size > r.maxSize.value &&
              (b(a, {
                code: c.too_big,
                maximum: r.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty()));
          let n = this._def.valueType;
          function s(e) {
            let a = new Set();
            for (let r of e) {
              if ('aborted' === r.status) return w;
              ('dirty' === r.status && t.dirty(), a.add(r.value));
            }
            return { status: t.value, value: a };
          }
          let i = [...a.data.values()].map((e, t) =>
            n._parse(new C(a, e, a.path, t)),
          );
          return a.common.async ? Promise.all(i).then((e) => s(e)) : s(i);
        }
        min(e, t) {
          return new eg({
            ...this._def,
            minSize: { value: e, message: i.toString(t) },
          });
        }
        max(e, t) {
          return new eg({
            ...this._def,
            maxSize: { value: e, message: i.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      eg.create = (e, t) =>
        new eg({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: d.ZodSet,
          ...E(t),
        });
      class ev extends j {
        constructor() {
          (super(...arguments), (this.validate = this.implement));
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== u.function)
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.function,
                received: t.parsedType,
              }),
              w
            );
          function a(e, a) {
            return g({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                m,
                f,
              ].filter((e) => !!e),
              issueData: { code: c.invalid_arguments, argumentsError: a },
            });
          }
          function r(e, a) {
            return g({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                m,
                f,
              ].filter((e) => !!e),
              issueData: { code: c.invalid_return_type, returnTypeError: a },
            });
          }
          let n = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof eT) {
            let e = this;
            return Z(async function (...t) {
              let i = new p([]),
                d = await e._def.args.parseAsync(t, n).catch((e) => {
                  throw (i.addIssue(a(t, e)), i);
                }),
                o = await Reflect.apply(s, this, d);
              return await e._def.returns._def.type
                .parseAsync(o, n)
                .catch((e) => {
                  throw (i.addIssue(r(o, e)), i);
                });
            });
          }
          {
            let e = this;
            return Z(function (...t) {
              let i = e._def.args.safeParse(t, n);
              if (!i.success) throw new p([a(t, i.error)]);
              let d = Reflect.apply(s, this, i.data),
                o = e._def.returns.safeParse(d, n);
              if (!o.success) throw new p([r(d, o.error)]);
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
          return new ev({ ...this._def, args: em.create(e).rest(ei.create()) });
        }
        returns(e) {
          return new ev({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new ev({
            args: e || em.create([]).rest(ei.create()),
            returns: t || ei.create(),
            typeName: d.ZodFunction,
            ...E(a),
          });
        }
      }
      class eb extends j {
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
      eb.create = (e, t) => new eb({ getter: e, typeName: d.ZodLazy, ...E(t) });
      class ek extends j {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                received: t.data,
                code: c.invalid_literal,
                expected: this._def.value,
              }),
              w
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ew(e, t) {
        return new ex({ values: e, typeName: d.ZodEnum, ...E(t) });
      }
      ek.create = (e, t) =>
        new ek({ value: e, typeName: d.ZodLiteral, ...E(t) });
      class ex extends j {
        _parse(e) {
          if ('string' != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              b(t, {
                expected: n.joinValues(a),
                received: t.parsedType,
                code: c.invalid_type,
              }),
              w
            );
          }
          if (
            (this._cache || (this._cache = new Set(this._def.values)),
            !this._cache.has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              b(t, {
                received: t.data,
                code: c.invalid_enum_value,
                options: a,
              }),
              w
            );
          }
          return Z(e.data);
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
          return ex.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return ex.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t },
          );
        }
      }
      ex.create = ew;
      class eZ extends j {
        _parse(e) {
          let t = n.getValidEnumValues(this._def.values),
            a = this._getOrReturnCtx(e);
          if (a.parsedType !== u.string && a.parsedType !== u.number) {
            let e = n.objectValues(t);
            return (
              b(a, {
                expected: n.joinValues(e),
                received: a.parsedType,
                code: c.invalid_type,
              }),
              w
            );
          }
          if (
            (this._cache ||
              (this._cache = new Set(n.getValidEnumValues(this._def.values))),
            !this._cache.has(e.data))
          ) {
            let e = n.objectValues(t);
            return (
              b(a, {
                received: a.data,
                code: c.invalid_enum_value,
                options: e,
              }),
              w
            );
          }
          return Z(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      eZ.create = (e, t) =>
        new eZ({ values: e, typeName: d.ZodNativeEnum, ...E(t) });
      class eT extends j {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== u.promise && !1 === t.common.async
            ? (b(t, {
                code: c.invalid_type,
                expected: u.promise,
                received: t.parsedType,
              }),
              w)
            : Z(
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
      eT.create = (e, t) =>
        new eT({ type: e, typeName: d.ZodPromise, ...E(t) });
      class eO extends j {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === d.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e),
            r = this._def.effect || null,
            s = {
              addIssue: (e) => {
                (b(a, e), e.fatal ? t.abort() : t.dirty());
              },
              get path() {
                return a.path;
              },
            };
          if (((s.addIssue = s.addIssue.bind(s)), 'preprocess' === r.type)) {
            let e = r.transform(a.data, s);
            if (a.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ('aborted' === t.value) return w;
                let r = await this._def.schema._parseAsync({
                  data: e,
                  path: a.path,
                  parent: a,
                });
                return 'aborted' === r.status
                  ? w
                  : 'dirty' === r.status || 'dirty' === t.value
                    ? x(r.value)
                    : r;
              });
            {
              if ('aborted' === t.value) return w;
              let r = this._def.schema._parseSync({
                data: e,
                path: a.path,
                parent: a,
              });
              return 'aborted' === r.status
                ? w
                : 'dirty' === r.status || 'dirty' === t.value
                  ? x(r.value)
                  : r;
            }
          }
          if ('refinement' === r.type) {
            let e = (e) => {
              let t = r.refinement(e, s);
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
                    ? w
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
                ? w
                : ('dirty' === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
          }
          if ('transform' === r.type)
            if (!1 !== a.common.async)
              return this._def.schema
                ._parseAsync({ data: a.data, path: a.path, parent: a })
                .then((e) =>
                  S(e)
                    ? Promise.resolve(r.transform(e.value, s)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : w,
                );
            else {
              let e = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              if (!S(e)) return w;
              let n = r.transform(e.value, s);
              if (n instanceof Promise)
                throw Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: n };
            }
          n.assertNever(r);
        }
      }
      ((eO.create = (e, t, a) =>
        new eO({ schema: e, typeName: d.ZodEffects, effect: t, ...E(a) })),
        (eO.createWithPreprocess = (e, t, a) =>
          new eO({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: d.ZodEffects,
            ...E(a),
          })));
      class eS extends j {
        _parse(e) {
          return this._getType(e) === u.undefined
            ? Z(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eS.create = (e, t) =>
        new eS({ innerType: e, typeName: d.ZodOptional, ...E(t) });
      class eA extends j {
        _parse(e) {
          return this._getType(e) === u.null
            ? Z(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eA.create = (e, t) =>
        new eA({ innerType: e, typeName: d.ZodNullable, ...E(t) });
      class eC extends j {
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
      eC.create = (e, t) =>
        new eC({
          innerType: e,
          typeName: d.ZodDefault,
          defaultValue:
            'function' == typeof t.default ? t.default : () => t.default,
          ...E(t),
        });
      class eN extends j {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: a.data,
              path: a.path,
              parent: { ...a },
            });
          return A(r)
            ? r.then((e) => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new p(a.common.issues);
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
                          return new p(a.common.issues);
                        },
                        input: a.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      eN.create = (e, t) =>
        new eN({
          innerType: e,
          typeName: d.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...E(t),
        });
      class eE extends j {
        _parse(e) {
          if (this._getType(e) !== u.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              b(t, {
                code: c.invalid_type,
                expected: u.nan,
                received: t.parsedType,
              }),
              w
            );
          }
          return { status: 'valid', value: e.data };
        }
      }
      eE.create = (e) => new eE({ typeName: d.ZodNaN, ...E(e) });
      let ej = Symbol('zod_brand');
      class eI extends j {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eR extends j {
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
                ? w
                : 'dirty' === e.status
                  ? (t.dirty(), x(e.value))
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
              ? w
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
          return new eR({ in: e, out: t, typeName: d.ZodPipeline });
        }
      }
      class eP extends j {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            a = (e) => (S(e) && (e.value = Object.freeze(e.value)), e);
          return A(t) ? t.then((e) => a(e)) : a(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function e$(e, t) {
        let a =
          'function' == typeof e
            ? e(t)
            : 'string' == typeof e
              ? { message: e }
              : e;
        return 'string' == typeof a ? { message: a } : a;
      }
      function eM(e, t = {}, a) {
        return e
          ? es.create().superRefine((r, n) => {
              let s = e(r);
              if (s instanceof Promise)
                return s.then((e) => {
                  if (!e) {
                    let e = e$(t, r),
                      s = e.fatal ?? a ?? !0;
                    n.addIssue({ code: 'custom', ...e, fatal: s });
                  }
                });
              if (!s) {
                let e = e$(t, r),
                  s = e.fatal ?? a ?? !0;
                n.addIssue({ code: 'custom', ...e, fatal: s });
              }
            })
          : es.create();
      }
      eP.create = (e, t) =>
        new eP({ innerType: e, typeName: d.ZodReadonly, ...E(t) });
      let eF = { object: el.lazycreate };
      !(function (e) {
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
      })(d || (d = {}));
      let eL = (e, t = { message: `Input not instance of ${e.name}` }) =>
          eM((t) => t instanceof e, t),
        ez = G.create,
        eD = X.create,
        eV = eE.create,
        eU = Q.create,
        eW = ee.create,
        eK = et.create,
        eB = ea.create,
        eJ = er.create,
        eq = en.create,
        eY = es.create,
        eH = ei.create,
        eG = ed.create,
        eX = eo.create,
        eQ = eu.create,
        e0 = el.create,
        e1 = el.strictCreate,
        e9 = ec.create,
        e4 = ep.create,
        e2 = ef.create,
        e5 = em.create,
        e3 = e_.create,
        e6 = ey.create,
        e7 = eg.create,
        e8 = ev.create,
        te = eb.create,
        tt = ek.create,
        ta = ex.create,
        tr = eZ.create,
        tn = eT.create,
        ts = eO.create,
        ti = eS.create,
        td = eA.create,
        to = eO.createWithPreprocess,
        tu = eR.create,
        tl = () => ez().optional(),
        tc = () => eD().optional(),
        th = () => eW().optional(),
        tp = {
          string: (e) => G.create({ ...e, coerce: !0 }),
          number: (e) => X.create({ ...e, coerce: !0 }),
          boolean: (e) => ee.create({ ...e, coerce: !0 }),
          bigint: (e) => Q.create({ ...e, coerce: !0 }),
          date: (e) => et.create({ ...e, coerce: !0 }),
        },
        tf = w;
    },
    1044: (e, t, a) => {
      a.d(t, { fp: () => p });
      var r = a(2094),
        n = a(4412),
        s = a(3979);
      let i = (0, r.createContext)(void 0);
      function d(e) {
        let t = (0, r.useContext)(i);
        return (null == e ? void 0 : e.store) || t || (0, n.zp)();
      }
      let o = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        u = (e) => {
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
        l =
          r.use ||
          ((e) => {
            if ('pending' === e.status) throw e;
            if ('fulfilled' === e.status) return e.value;
            if ('rejected' === e.status) throw e.reason;
            throw (u(e), e);
          }),
        c = new WeakMap(),
        h = (e, t) => {
          let a = c.get(e);
          return (
            a ||
              ((a = new Promise((r, n) => {
                let i = e,
                  d = (e) => (t) => {
                    i === e && r(t);
                  },
                  u = (e) => (t) => {
                    i === e && n(t);
                  },
                  l = () => {
                    try {
                      let e = t();
                      o(e)
                        ? (c.set(e, a),
                          (i = e),
                          e.then(d(e), u(e)),
                          (0, s.MO)(e, l))
                        : r(e);
                    } catch (e) {
                      n(e);
                    }
                  };
                (e.then(d(e), u(e)), (0, s.MO)(e, l));
              })),
              c.set(e, a)),
            a
          );
        };
      function p(e, t) {
        return [
          (function (e, t) {
            let { delay: a, unstable_promiseStatus: n = !r.use } = t || {},
              s = d(t),
              [[i, c, p], f] = (0, r.useReducer)(
                (t) => {
                  let a = s.get(e);
                  return Object.is(t[0], a) && t[1] === s && t[2] === e
                    ? t
                    : [a, s, e];
                },
                void 0,
                () => [s.get(e), s, e],
              ),
              m = i;
            if (
              ((c !== s || p !== e) && (f(), (m = s.get(e))),
              (0, r.useEffect)(() => {
                let t = s.sub(e, () => {
                  if (n)
                    try {
                      let t = s.get(e);
                      o(t) && u(h(t, () => s.get(e)));
                    } catch (e) {}
                  if ('number' == typeof a) return void setTimeout(f, a);
                  f();
                });
                return (f(), t);
              }, [s, e, a, n]),
              (0, r.useDebugValue)(m),
              o(m))
            ) {
              let t = h(m, () => s.get(e));
              return (n && u(t), l(t));
            }
            return m;
          })(e, t),
          (function (e, t) {
            let a = d(t);
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
    1930: (e, t, a) => {
      a.d(t, { tG: () => c });
      var r = a(4412);
      let n = Symbol('RESET'),
        s = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        i = new WeakMap(),
        d = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        o = new WeakMap(),
        u = (e) => 'function' == typeof (null == e ? void 0 : e.then),
        l = (function (
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
            n,
            s,
            i,
            d = {
              getItem: (t, a) => {
                var s, i;
                let d = (e) => {
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
                  o =
                    null != (i = null == (s = e()) ? void 0 : s.getItem(t))
                      ? i
                      : null;
                return u(o) ? o.then(d) : d(o);
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
          return (
            !s &&
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
            s &&
              ((i = s),
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
      function c(e, t, a = l, s) {
        let i = null == s ? void 0 : s.getOnInit,
          d = (0, r.eU)(i ? a.getItem(e, t) : t);
        return (
          (d.debugPrivate = !0),
          (d.onMount = (r) => {
            let n;
            return (
              r(a.getItem(e, t)),
              a.subscribe && (n = a.subscribe(e, r, t)),
              n
            );
          }),
          (0, r.eU)(
            (e) => e(d),
            (r, s, i) => {
              let o = 'function' == typeof i ? i(r(d)) : i;
              return o === n
                ? (s(d, t), a.removeItem(e))
                : u(o)
                  ? o.then((t) => (s(d, t), a.setItem(e, t)))
                  : (s(d, o), a.setItem(e, o));
            },
          )
        );
      }
      let h = new WeakMap(),
        p = (e, t, a) => (t.has(a) ? t : t.set(a, e())).get(a),
        f = new WeakMap();
    },
    3979: (e, t, a) => {
      a.d(t, { MO: () => k, _w: () => v, eE: () => b });
      let r = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
        n = (e) => 'init' in e,
        s = (e) => !!e.write,
        i = (e) => 'v' in e || 'e' in e,
        d = (e) => {
          if ('e' in e) throw e.e;
          if (!('v' in e)) throw Error('[Bug] atom state is not initialized');
          return e.v;
        },
        o = new WeakMap(),
        u = (e) => {
          var t;
          return h(e) && !!(null == (t = o.get(e)) ? void 0 : t[0]);
        },
        l = (e) => {
          let t = o.get(e);
          (null == t ? void 0 : t[0]) &&
            ((t[0] = !1), t[1].forEach((e) => e()));
        },
        c = (e, t) => {
          let a = o.get(e);
          if (!a) {
            ((a = [!0, new Set()]), o.set(e, a));
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
            n = 'v' in r,
            s = r.v;
          if (h(t)) for (let n of r.d.keys()) p(e, t, a(n));
          ((r.v = t),
            delete r.e,
            (n && Object.is(s, r.v)) || (++r.n, h(s) && l(s)));
        },
        m = (e, t, a) => {
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
        y = () => {
          let e = {},
            t = new WeakMap(),
            a = (a) => {
              var r, n;
              (null == (r = t.get(e)) || r.forEach((e) => e(a)),
                null == (n = t.get(a)) || n.forEach((e) => e()));
            };
          return (
            (a.add = (a, r) => {
              let n = a || e,
                s = (t.has(n) ? t : t.set(n, new Set())).get(n);
              return (
                s.add(r),
                () => {
                  (null == s || s.delete(r), s.size || t.delete(n));
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
          o = new Set(),
          l = new Set(),
          _ = new Set(),
          y = {},
          v = (e, ...t) => e.read(...t),
          b = (e, ...t) => e.write(...t),
          k = (e, t) => {
            var a;
            return null == (a = e.unstable_onInit) ? void 0 : a.call(e, t);
          },
          w = (e, t) => {
            var a;
            return null == (a = e.onMount) ? void 0 : a.call(e, t);
          },
          ...x
        ) => {
          let Z =
              x[0] ||
              ((t) => {
                if (!t) throw Error('Atom is undefined or null');
                let a = e.get(t);
                return (
                  a ||
                    ((a = { d: new Map(), p: new Set(), n: 0 }),
                    e.set(t, a),
                    null == k || k(t, I)),
                  a
                );
              }),
            T =
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
                  (o.forEach((e) => {
                    var a;
                    return null == (a = t.get(e)) ? void 0 : a.l.forEach(r);
                  }),
                    o.clear(),
                    _.forEach(r),
                    _.clear(),
                    l.forEach(r),
                    l.clear(),
                    e.forEach(a),
                    o.size && O());
                } while (o.size || _.size || l.size);
                if (e.length) throw AggregateError(e);
              }),
            O =
              x[2] ||
              (() => {
                let e = [],
                  r = new WeakSet(),
                  n = new WeakSet(),
                  s = Array.from(o);
                for (; s.length; ) {
                  let i = s[s.length - 1],
                    d = Z(i);
                  if (n.has(i)) {
                    s.pop();
                    continue;
                  }
                  if (r.has(i)) {
                    if (a.get(i) === d.n) e.push([i, d]);
                    else if (a.has(i))
                      throw Error('[Bug] invalidated atom exists');
                    (n.add(i), s.pop());
                    continue;
                  }
                  for (let e of (r.add(i), m(i, d, t))) r.has(e) || s.push(e);
                }
                for (let t = e.length - 1; t >= 0; --t) {
                  let [r, n] = e[t],
                    s = !1;
                  for (let e of n.d.keys())
                    if (e !== r && o.has(e)) {
                      s = !0;
                      break;
                    }
                  (s && (S(r), N(r)), a.delete(r));
                }
              }),
            S =
              x[3] ||
              ((e) => {
                var l;
                let m,
                  _,
                  g = Z(e);
                if (
                  i(g) &&
                  ((t.has(e) && a.get(e) !== g.n) ||
                    Array.from(g.d).every(([e, t]) => S(e).n === t))
                )
                  return g;
                g.d.clear();
                let b = !0,
                  k = () => {
                    t.has(e) && (N(e), O(), T());
                  },
                  w = g.n;
                try {
                  let a = v(
                    e,
                    (a) => {
                      var s;
                      if (r(e, a)) {
                        let e = Z(a);
                        if (!i(e))
                          if (n(a)) f(a, a.init, Z);
                          else throw Error('no atom init');
                        return d(e);
                      }
                      let o = S(a);
                      try {
                        return d(o);
                      } finally {
                        (g.d.set(a, o.n),
                          u(g.v) && p(e, g.v, o),
                          null == (s = t.get(a)) || s.t.add(e),
                          b || k());
                      }
                    },
                    {
                      get signal() {
                        return (m || (m = new AbortController()), m.signal);
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
                                  (O(), T());
                                }
                            }),
                          _
                        );
                      },
                    },
                  );
                  return (
                    f(e, a, Z),
                    h(a) &&
                      (c(a, () => (null == m ? void 0 : m.abort())),
                      a.then(k, k)),
                    g
                  );
                } catch (e) {
                  return (delete g.v, (g.e = e), ++g.n, g);
                } finally {
                  ((b = !1),
                    w !== g.n &&
                      a.get(e) === w &&
                      (a.set(e, g.n),
                      o.add(e),
                      null == (l = y.c) || l.call(y, e)));
                }
              }),
            A =
              x[4] ||
              ((e) => {
                let r = [e];
                for (; r.length; ) {
                  let e = r.pop(),
                    n = Z(e);
                  for (let s of m(e, n, t)) {
                    let e = Z(s);
                    (a.set(s, e.n), r.push(s));
                  }
                }
              }),
            C =
              x[5] ||
              ((e, ...t) => {
                let a = !0;
                try {
                  return b(
                    e,
                    (e) => d(S(e)),
                    (t, ...s) => {
                      var i;
                      let d = Z(t);
                      try {
                        if (!r(e, t)) return C(t, ...s);
                        {
                          if (!n(t)) throw Error('atom not writable');
                          let e = d.n,
                            a = s[0];
                          (f(t, a, Z),
                            N(t),
                            e !== d.n &&
                              (o.add(t),
                              null == (i = y.c) || i.call(y, t),
                              A(t)));
                          return;
                        }
                      } finally {
                        a || (O(), T());
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
                let r = Z(e),
                  n = t.get(e);
                if (n && !u(r.v)) {
                  for (let [t, s] of r.d)
                    if (!n.d.has(t)) {
                      let r = Z(t);
                      (E(t).t.add(e),
                        n.d.add(t),
                        s !== r.n &&
                          (o.add(t), null == (a = y.c) || a.call(y, t), A(t)));
                    }
                  for (let t of n.d || [])
                    if (!r.d.has(t)) {
                      n.d.delete(t);
                      let a = j(t);
                      null == a || a.t.delete(e);
                    }
                }
              }),
            E =
              x[7] ||
              ((e) => {
                var a;
                let r = Z(e),
                  n = t.get(e);
                if (!n) {
                  for (let t of (S(e), r.d.keys())) E(t).t.add(e);
                  ((n = { l: new Set(), d: new Set(r.d.keys()), t: new Set() }),
                    t.set(e, n),
                    null == (a = y.m) || a.call(y, e),
                    s(e) &&
                      l.add(() => {
                        let t = !0;
                        try {
                          let a = w(e, (...a) => {
                            try {
                              return C(e, ...a);
                            } finally {
                              t || (O(), T());
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
                      }));
                }
                return n;
              }),
            j =
              x[8] ||
              ((e) => {
                var a;
                let r = Z(e),
                  n = t.get(e);
                if (
                  n &&
                  !n.l.size &&
                  !Array.from(n.t).some((a) => {
                    var r;
                    return null == (r = t.get(a)) ? void 0 : r.d.has(e);
                  })
                ) {
                  for (let s of (n.u && _.add(n.u),
                  (n = void 0),
                  t.delete(e),
                  null == (a = y.u) || a.call(y, e),
                  r.d.keys())) {
                    let t = j(s);
                    null == t || t.t.delete(e);
                  }
                  return;
                }
                return n;
              }),
            I = {
              get: (e) => d(S(e)),
              set: (e, ...t) => {
                try {
                  return C(e, ...t);
                } finally {
                  (O(), T());
                }
              },
              sub: (e, t) => {
                let a = E(e).l;
                return (
                  a.add(t),
                  T(),
                  () => {
                    (a.delete(t), j(e), T());
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
                o,
                l,
                _,
                y,
                v,
                b,
                k,
                w,
                Z,
                T,
                O,
                S,
                A,
                C,
                N,
                E,
                j,
              ],
            }),
            I
          );
        },
        b = (e) => (
          e.c || (e.c = y()),
          e.m || (e.m = y()),
          e.u || (e.u = y()),
          e.f || (e.f = _()),
          e
        ),
        k = c;
    },
    4412: (e, t, a) => {
      let r, n;
      a.d(t, { eU: () => d, zp: () => c });
      var s = a(3979);
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
            : ((r.init = e), (r.read = o), (r.write = u)),
          t && (r.write = t),
          r
        );
      }
      function o(e) {
        return e(this);
      }
      function u(e, t, a) {
        return t(this, 'function' == typeof a ? a(e(this)) : a);
      }
      let l = () => {
        let e = 0,
          t = (0, s.eE)({}),
          a = new WeakMap(),
          r = new WeakMap(),
          n = (0, s._w)(
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
            (i.add(e), (a.get(e).m = r.get(e)));
          }),
          t.u.add(void 0, (e) => {
            i.delete(e);
            let t = a.get(e);
            delete t.m;
          }),
          Object.assign(n, {
            dev4_get_internal_weak_map: () => (
              console.log('Deprecated: Use devstore from the devtools library'),
              a
            ),
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
      };
      function c() {
        return (
          n ||
            ((n = r ? r() : l()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = n),
            globalThis.__JOTAI_DEFAULT_STORE__ !== n &&
              console.warn(
                'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044',
              )),
          n
        );
      }
    },
  },
]);
