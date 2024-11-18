module.exports = {
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
  '[project]/src/calculateCharactersVariance.ts [app-ssr] (ecmascript)': (
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
        calculateCharactersVariance: () => calculateCharactersVariance,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateCharactersTotals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/calculateCharactersTotals.ts [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateVariance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/calculateVariance.ts [app-ssr] (ecmascript)',
        );
      function calculateCharactersVariance(characters) {
        const totalsObject = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateCharactersTotals$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'calculateCharactersTotals'
        ])(characters);
        const totalsArray = Object.values(totalsObject);
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateVariance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'calculateVariance'
        ])(totalsArray);
      }
    }
  },
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
  '[project]/src/app/unfathomable/page.tsx [app-ssr] (ecmascript)': (
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
        default: () => UnfathomablePage,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateCharactersVariance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/calculateCharactersVariance.ts [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shuffleArray$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/shuffleArray.ts [app-ssr] (ecmascript)',
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$unfathomable$2f$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/app/unfathomable/characters.ts [app-ssr] (ecmascript)',
        );
      ('use client');
      export default function UnfathomablePage() {
        const [playerCount, setPlayerCount] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])(3);
        const [characters, setCharacters] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useState'
        ])([]);
        const [variance, setVariance] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'useCallback'
        ])(0);
        const onPickClick = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shuffleArray$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'shuffleArray'
        ])(() => {
          let newCharacters = [];
          let newVariance = 0;
          do {
            newCharacters = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$unfathomable$2f$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'unfathomableCharacters'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateCharactersVariance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'calculateCharactersVariance'
              ],
            )
              .slice(0, playerCount)
              .sort((a, b) => a.name.localeCompare(b.name));
            newVariance = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'useCallback'
            ])(newCharacters);
          } while (newVariance > 3);
          setCharacters(newCharacters);
          setVariance(newVariance);
        }, [playerCount]);
        const onPlayerCountChange = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])((event) => {
          setPlayerCount(Number(event.target.value));
        }, []);
        const totals = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(characters);
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'main',
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'header',
                {
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'h1',
                    {
                      children: 'Unfathomable',
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/app/unfathomable/page.tsx',
                      lineNumber: 40,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: '[project]/src/app/unfathomable/page.tsx',
                  lineNumber: 39,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'label',
                {
                  children: [
                    'Player Count: ',
                    playerCount,
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'input',
                      {
                        type: 'range',
                        min: 3,
                        max: 6,
                        value: playerCount,
                        onChange: onPlayerCountChange,
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/app/unfathomable/page.tsx',
                        lineNumber: 44,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/src/app/unfathomable/page.tsx',
                  lineNumber: 42,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'button',
                {
                  onClick: onPickClick,
                  children: 'Pick',
                },
                void 0,
                false,
                {
                  fileName: '[project]/src/app/unfathomable/page.tsx',
                  lineNumber: 52,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'table',
                {
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'thead',
                      {
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'tr',
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Name',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 56,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Wpływ',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 57,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Wiedza',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 58,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Percepcja',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 59,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Siła',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 60,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'th',
                                {
                                  children: 'Wola',
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/src/app/unfathomable/page.tsx',
                                  lineNumber: 61,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: '[project]/src/app/unfathomable/page.tsx',
                            lineNumber: 55,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/app/unfathomable/page.tsx',
                        lineNumber: 54,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'tbody',
                      {
                        children: characters.map((character) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'tr',
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.name,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 67,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.wplyw ?? '-',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 68,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.wiedza ?? '-',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 69,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.percepcja ?? '-',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 70,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.sila ?? '-',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 71,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'td',
                                  {
                                    children: character.wola ?? '-',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 72,
                                    columnNumber: 15,
                                  },
                                  this,
                                ),
                              ],
                            },
                            character.name,
                            true,
                            {
                              fileName:
                                '[project]/src/app/unfathomable/page.tsx',
                              lineNumber: 66,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/app/unfathomable/page.tsx',
                        lineNumber: 64,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'tfoot',
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'tr',
                            {
                              children: [
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: 'Total',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 78,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: totals.wplyw,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 79,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: totals.wiedza,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 80,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: totals.percepcja,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 81,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: totals.sila,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 82,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: totals.wola,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 83,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/src/app/unfathomable/page.tsx',
                              lineNumber: 77,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ _jsxDEV(
                            'tr',
                            {
                              children: [
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    children: 'Variance',
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 86,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ _jsxDEV(
                                  'td',
                                  {
                                    colSpan: 5,
                                    children: variance.toFixed(2),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/app/unfathomable/page.tsx',
                                    lineNumber: 87,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                '[project]/src/app/unfathomable/page.tsx',
                              lineNumber: 85,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: '[project]/src/app/unfathomable/page.tsx',
                        lineNumber: 76,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/src/app/unfathomable/page.tsx',
                  lineNumber: 53,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: '[project]/src/app/unfathomable/page.tsx',
            lineNumber: 38,
            columnNumber: 5,
          },
          this,
        );
      }
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

//# sourceMappingURL=_897b6d._.js.map
