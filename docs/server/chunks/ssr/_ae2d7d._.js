module.exports = {
  '[project]/src/shuffleArray.ts [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: require,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        shuffleArray: () => shuffleArray,
      });
      function shuffleArray(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        return shuffledArray;
      }
    }
  },
  '[project]/src/app/unfathomable/characters.ts [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: require,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        unfathomableCharacters: () => unfathomableCharacters,
      });
      const unfathomableCharacters = [
        {
          name: 'antar al-fakahany',
          wiedza: 2,
          percepcja: 3,
        },
        {
          name: 'arjun singh',
          wplyw: 2,
          percepcja: 1,
          sila: 2,
        },
        {
          name: 'avery engelbrecht',
          wplyw: 2,
          sila: 2,
          wola: 1,
        },
        {
          name: 'beatrice sharpe',
          wplyw: 1,
          wiedza: 2,
          percepcja: 2,
        },
        {
          name: 'edmund mallory',
          wplyw: 1,
          wiedza: 1,
          percepcja: 1,
          sila: 1,
          wola: 1,
        },
        {
          name: 'guillaume delacroix',
          wplyw: 2,
          wiedza: 2,
          wola: 1,
        },
        {
          name: 'ismael marsh',
          wiedza: 2,
          sila: 2,
          wola: 1,
        },
        {
          name: 'jamie snell',
          sila: 3,
          wola: 2,
        },
        {
          name: 'jeanne lafarge',
          wplyw: 1,
          percepcja: 2,
          sila: 2,
        },
        {
          name: 'keilani tatupu',
          wplyw: 2,
          wola: 2,
        },
        {
          name: 'kokoj fernandes',
          wiedza: 2,
          wola: 3,
        },
        {
          name: 'raul martinez garcia',
          wiedza: 1,
          percepcja: 2,
          sila: 2,
        },
        {
          name: 'samira dualeh',
          wiedza: 1,
          percepcja: 2,
          wola: 2,
        },
        {
          name: 'svetlana gedroits',
          wplyw: 2,
          wiedza: 1,
          percepcja: 2,
        },
        {
          name: 'william bowleg',
          wiedza: 3,
          wola: 2,
        },
        {
          name: 'wong mui choo',
          percepcja: 1,
          sila: 2,
          wola: 2,
        },
      ];
    }
  },
  '[project]/src/calculateVariance.ts [app-ssr] (ecmascript)': (
    __turbopack_context__,
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: require,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        calculateVariance: () => calculateVariance,
      });
      const calculateVariance = (values) => {
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        return (
          values.reduce(
            (variance, value) => variance + (value - mean) ** 2,
            0,
          ) / values.length
        );
      };
    }
  },
  '[project]/src/app/unfathomable/page.tsx [app-ssr] (ecmascript)': function (
    __turbopack_context__,
  ) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      m: module,
      e: exports,
      t: require,
    } = __turbopack_context__;
    {
      const e = new Error(
        "Could not parse module '[project]/src/app/unfathomable/page.tsx'",
      );
      e.code = 'MODULE_UNPARSEABLE';
      throw e;
    }
  },
  '[project]/src/app/unfathomable/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)':
    (__turbopack_context__) => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        t: require,
      } = __turbopack_context__;
      {
      }
    },
  '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)':
    function (__turbopack_context__) {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        m: module,
        e: exports,
        t: require,
      } = __turbopack_context__;
      {
        ('use strict');
        module.exports = __turbopack_require__(
          '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
        ).vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
      }
    },
};

//# sourceMappingURL=_ae2d7d._.js.map
