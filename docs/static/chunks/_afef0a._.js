(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'static/chunks/_afef0a._.js',
  {
    '[project]/src/shuffleArray.ts [app-client] (ecmascript)': (
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
        k: __turbopack_refresh__,
        m: module,
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
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_refresh__.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[project]/src/app/unfathomable/characters.ts [app-client] (ecmascript)': (
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
        k: __turbopack_refresh__,
        m: module,
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
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_refresh__.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[project]/src/app/unfathomable/page.tsx [app-client] (ecmascript)': (
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
        k: __turbopack_refresh__,
        m: module,
        z: require,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => UnfathomablePage,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shuffleArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/src/shuffleArray.ts [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$unfathomable$2f$characters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/src/app/unfathomable/characters.ts [app-client] (ecmascript)',
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateVariance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/src/calculateVariance.ts [app-client] (ecmascript)',
          );
        var _s = __turbopack_refresh__.signature();
        ('use client');
        function UnfathomablePage() {
          _s();
          const [playerCount, setPlayerCount] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(3);
          const [characters, setCharacters] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          const onGenerateClick = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useCallback'
          ])(
            {
              'UnfathomablePage.useCallback[onGenerateClick]': () => {
                setCharacters(
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shuffleArray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'shuffleArray'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$unfathomable$2f$characters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'unfathomableCharacters'
                    ],
                  )
                    .slice(0, playerCount)
                    .sort(
                      {
                        'UnfathomablePage.useCallback[onGenerateClick]': (
                          a,
                          b,
                        ) => a.name.localeCompare(b.name),
                      }['UnfathomablePage.useCallback[onGenerateClick]'],
                    ),
                );
              },
            }['UnfathomablePage.useCallback[onGenerateClick]'],
            [playerCount],
          );
          const onPlayerCountChange = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useCallback'
          ])(
            {
              'UnfathomablePage.useCallback[onPlayerCountChange]': (event) => {
                setPlayerCount(Number(event.target.value));
              },
            }['UnfathomablePage.useCallback[onPlayerCountChange]'],
            [],
          );
          const totalWplyw = characters.reduce(
            (sum, char) => sum + (char.wplyw ?? 0),
            0,
          );
          const totalWiedza = characters.reduce(
            (sum, char) => sum + (char.wiedza ?? 0),
            0,
          );
          const totalPercepcja = characters.reduce(
            (sum, char) => sum + (char.percepcja ?? 0),
            0,
          );
          const totalSila = characters.reduce(
            (sum, char) => sum + (char.sila ?? 0),
            0,
          );
          const totalWola = characters.reduce(
            (sum, char) => sum + (char.wola ?? 0),
            0,
          );
          const variance = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$calculateVariance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'calculateVariance'
          ])([totalWplyw, totalWiedza, totalPercepcja, totalSila, totalWola]);
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'main',
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'header',
                  {
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      this,
                    ),
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'label',
                  {
                    children: [
                      'Player Count: ',
                      playerCount,
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                          lineNumber: 57,
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
                    lineNumber: 55,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    onClick: onGenerateClick,
                    children: 'generate',
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/app/unfathomable/page.tsx',
                    lineNumber: 65,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'table',
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'thead',
                        {
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'tr',
                            {
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 69,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 70,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 71,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 72,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 73,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                    lineNumber: 74,
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
                              lineNumber: 68,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/app/unfathomable/page.tsx',
                          lineNumber: 67,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'tbody',
                        {
                          children: characters.map((character) =>
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'tr',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 80,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 81,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 82,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 83,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 84,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                      lineNumber: 85,
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
                                lineNumber: 79,
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
                          lineNumber: 77,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'tfoot',
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'tr',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: 'Total',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 91,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: totalWplyw,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 92,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: totalWiedza,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 93,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: totalPercepcja,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 94,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: totalSila,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 95,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: totalWola,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 96,
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
                                lineNumber: 90,
                                columnNumber: 11,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'tr',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'td',
                                    {
                                      children: 'Variance',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/app/unfathomable/page.tsx',
                                      lineNumber: 99,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
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
                                      lineNumber: 100,
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
                                lineNumber: 98,
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
                          lineNumber: 89,
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
                    lineNumber: 66,
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
              lineNumber: 51,
              columnNumber: 5,
            },
            this,
          );
        }
        _s(UnfathomablePage, 'OeRJimNuBpyEohuTkO1UXJPUIO8=');
        _c = UnfathomablePage;
        var _c;
        __turbopack_refresh__.register(_c, 'UnfathomablePage');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_refresh__.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[project]/src/app/unfathomable/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)':
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
    '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)':
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
          m: module,
          e: exports,
          t: require,
        } = __turbopack_context__;
        {
          /**
           * @license React
           * react-jsx-dev-runtime.development.js
           *
           * Copyright (c) Meta Platforms, Inc. and affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
            );
          ('use strict');
          'production' !== ('TURBOPACK compile-time value', 'development') &&
            (function () {
              function getComponentNameFromType(type) {
                if (null == type) return null;
                if ('function' === typeof type)
                  return type.$$typeof === REACT_CLIENT_REFERENCE$2
                    ? null
                    : type.displayName || type.name || null;
                if ('string' === typeof type) return type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                  case REACT_PORTAL_TYPE:
                    return 'Portal';
                  case REACT_PROFILER_TYPE:
                    return 'Profiler';
                  case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                  case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                  case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                }
                if ('object' === typeof type)
                  switch (
                    ('number' === typeof type.tag &&
                      console.error(
                        'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                      ),
                    type.$$typeof)
                  ) {
                    case REACT_CONTEXT_TYPE:
                      return (type.displayName || 'Context') + '.Provider';
                    case REACT_CONSUMER_TYPE:
                      return (
                        (type._context.displayName || 'Context') + '.Consumer'
                      );
                    case REACT_FORWARD_REF_TYPE:
                      var innerType = type.render;
                      type = type.displayName;
                      type ||
                        ((type = innerType.displayName || innerType.name || ''),
                        (type =
                          '' !== type
                            ? 'ForwardRef(' + type + ')'
                            : 'ForwardRef'));
                      return type;
                    case REACT_MEMO_TYPE:
                      return (
                        (innerType = type.displayName || null),
                        null !== innerType
                          ? innerType
                          : getComponentNameFromType(type.type) || 'Memo'
                      );
                    case REACT_LAZY_TYPE:
                      innerType = type._payload;
                      type = type._init;
                      try {
                        return getComponentNameFromType(type(innerType));
                      } catch (x) {}
                  }
                return null;
              }
              function testStringCoercion(value) {
                return '' + value;
              }
              function checkKeyStringCoercion(value) {
                try {
                  testStringCoercion(value);
                  var JSCompiler_inline_result = !1;
                } catch (e) {
                  JSCompiler_inline_result = !0;
                }
                if (JSCompiler_inline_result) {
                  JSCompiler_inline_result = console;
                  var JSCompiler_temp_const = JSCompiler_inline_result.error;
                  var JSCompiler_inline_result$jscomp$0 =
                    ('function' === typeof Symbol &&
                      Symbol.toStringTag &&
                      value[Symbol.toStringTag]) ||
                    value.constructor.name ||
                    'Object';
                  JSCompiler_temp_const.call(
                    JSCompiler_inline_result,
                    'The provided key is an unsupported type %s. This value must be coerced to a string before using it here.',
                    JSCompiler_inline_result$jscomp$0,
                  );
                  return testStringCoercion(value);
                }
              }
              function disabledLog() {}
              function disableLogs() {
                if (0 === disabledDepth) {
                  prevLog = console.log;
                  prevInfo = console.info;
                  prevWarn = console.warn;
                  prevError = console.error;
                  prevGroup = console.group;
                  prevGroupCollapsed = console.groupCollapsed;
                  prevGroupEnd = console.groupEnd;
                  var props = {
                    configurable: !0,
                    enumerable: !0,
                    value: disabledLog,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    info: props,
                    log: props,
                    warn: props,
                    error: props,
                    group: props,
                    groupCollapsed: props,
                    groupEnd: props,
                  });
                }
                disabledDepth++;
              }
              function reenableLogs() {
                disabledDepth--;
                if (0 === disabledDepth) {
                  var props = {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                  };
                  Object.defineProperties(console, {
                    log: assign({}, props, {
                      value: prevLog,
                    }),
                    info: assign({}, props, {
                      value: prevInfo,
                    }),
                    warn: assign({}, props, {
                      value: prevWarn,
                    }),
                    error: assign({}, props, {
                      value: prevError,
                    }),
                    group: assign({}, props, {
                      value: prevGroup,
                    }),
                    groupCollapsed: assign({}, props, {
                      value: prevGroupCollapsed,
                    }),
                    groupEnd: assign({}, props, {
                      value: prevGroupEnd,
                    }),
                  });
                }
                0 > disabledDepth &&
                  console.error(
                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
                  );
              }
              function describeBuiltInComponentFrame(name) {
                if (void 0 === prefix)
                  try {
                    throw Error();
                  } catch (x) {
                    var match = x.stack.trim().match(/\n( *(at )?)/);
                    prefix = (match && match[1]) || '';
                    suffix =
                      -1 < x.stack.indexOf('\n    at')
                        ? ' (<anonymous>)'
                        : -1 < x.stack.indexOf('@')
                          ? '@unknown:0:0'
                          : '';
                  }
                return '\n' + prefix + name + suffix;
              }
              function describeNativeComponentFrame(fn, construct) {
                if (!fn || reentry) return '';
                var frame = componentFrameCache.get(fn);
                if (void 0 !== frame) return frame;
                reentry = !0;
                frame = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                var previousDispatcher = null;
                previousDispatcher = ReactSharedInternals.H;
                ReactSharedInternals.H = null;
                disableLogs();
                try {
                  var RunInRootFrame = {
                    DetermineComponentFrameRoot: function () {
                      try {
                        if (construct) {
                          var Fake = function () {
                            throw Error();
                          };
                          Object.defineProperty(Fake.prototype, 'props', {
                            set: function () {
                              throw Error();
                            },
                          });
                          if (
                            'object' === typeof Reflect &&
                            Reflect.construct
                          ) {
                            try {
                              Reflect.construct(Fake, []);
                            } catch (x) {
                              var control = x;
                            }
                            Reflect.construct(fn, [], Fake);
                          } else {
                            try {
                              Fake.call();
                            } catch (x$0) {
                              control = x$0;
                            }
                            fn.call(Fake.prototype);
                          }
                        } else {
                          try {
                            throw Error();
                          } catch (x$1) {
                            control = x$1;
                          }
                          (Fake = fn()) &&
                            'function' === typeof Fake.catch &&
                            Fake.catch(function () {});
                        }
                      } catch (sample) {
                        if (
                          sample &&
                          control &&
                          'string' === typeof sample.stack
                        )
                          return [sample.stack, control.stack];
                      }
                      return [null, null];
                    },
                  };
                  RunInRootFrame.DetermineComponentFrameRoot.displayName =
                    'DetermineComponentFrameRoot';
                  var namePropDescriptor = Object.getOwnPropertyDescriptor(
                    RunInRootFrame.DetermineComponentFrameRoot,
                    'name',
                  );
                  namePropDescriptor &&
                    namePropDescriptor.configurable &&
                    Object.defineProperty(
                      RunInRootFrame.DetermineComponentFrameRoot,
                      'name',
                      {
                        value: 'DetermineComponentFrameRoot',
                      },
                    );
                  var _RunInRootFrame$Deter =
                      RunInRootFrame.DetermineComponentFrameRoot(),
                    sampleStack = _RunInRootFrame$Deter[0],
                    controlStack = _RunInRootFrame$Deter[1];
                  if (sampleStack && controlStack) {
                    var sampleLines = sampleStack.split('\n'),
                      controlLines = controlStack.split('\n');
                    for (
                      _RunInRootFrame$Deter = namePropDescriptor = 0;
                      namePropDescriptor < sampleLines.length &&
                      !sampleLines[namePropDescriptor].includes(
                        'DetermineComponentFrameRoot',
                      );

                    )
                      namePropDescriptor++;
                    for (
                      ;
                      _RunInRootFrame$Deter < controlLines.length &&
                      !controlLines[_RunInRootFrame$Deter].includes(
                        'DetermineComponentFrameRoot',
                      );

                    )
                      _RunInRootFrame$Deter++;
                    if (
                      namePropDescriptor === sampleLines.length ||
                      _RunInRootFrame$Deter === controlLines.length
                    )
                      for (
                        namePropDescriptor = sampleLines.length - 1,
                          _RunInRootFrame$Deter = controlLines.length - 1;
                        1 <= namePropDescriptor &&
                        0 <= _RunInRootFrame$Deter &&
                        sampleLines[namePropDescriptor] !==
                          controlLines[_RunInRootFrame$Deter];

                      )
                        _RunInRootFrame$Deter--;
                    for (
                      ;
                      1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
                      namePropDescriptor--, _RunInRootFrame$Deter--
                    )
                      if (
                        sampleLines[namePropDescriptor] !==
                        controlLines[_RunInRootFrame$Deter]
                      ) {
                        if (
                          1 !== namePropDescriptor ||
                          1 !== _RunInRootFrame$Deter
                        ) {
                          do
                            if (
                              (namePropDescriptor--,
                              _RunInRootFrame$Deter--,
                              0 > _RunInRootFrame$Deter ||
                                sampleLines[namePropDescriptor] !==
                                  controlLines[_RunInRootFrame$Deter])
                            ) {
                              var _frame =
                                '\n' +
                                sampleLines[namePropDescriptor].replace(
                                  ' at new ',
                                  ' at ',
                                );
                              fn.displayName &&
                                _frame.includes('<anonymous>') &&
                                (_frame = _frame.replace(
                                  '<anonymous>',
                                  fn.displayName,
                                ));
                              'function' === typeof fn &&
                                componentFrameCache.set(fn, _frame);
                              return _frame;
                            }
                          while (
                            1 <= namePropDescriptor &&
                            0 <= _RunInRootFrame$Deter
                          );
                        }
                        break;
                      }
                  }
                } finally {
                  (reentry = !1),
                    (ReactSharedInternals.H = previousDispatcher),
                    reenableLogs(),
                    (Error.prepareStackTrace = frame);
                }
                sampleLines = (sampleLines = fn
                  ? fn.displayName || fn.name
                  : '')
                  ? describeBuiltInComponentFrame(sampleLines)
                  : '';
                'function' === typeof fn &&
                  componentFrameCache.set(fn, sampleLines);
                return sampleLines;
              }
              function describeUnknownElementTypeFrameInDEV(type) {
                if (null == type) return '';
                if ('function' === typeof type) {
                  var prototype = type.prototype;
                  return describeNativeComponentFrame(
                    type,
                    !(!prototype || !prototype.isReactComponent),
                  );
                }
                if ('string' === typeof type)
                  return describeBuiltInComponentFrame(type);
                switch (type) {
                  case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                  case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
                }
                if ('object' === typeof type)
                  switch (type.$$typeof) {
                    case REACT_FORWARD_REF_TYPE:
                      return (
                        (type = describeNativeComponentFrame(type.render, !1)),
                        type
                      );
                    case REACT_MEMO_TYPE:
                      return describeUnknownElementTypeFrameInDEV(type.type);
                    case REACT_LAZY_TYPE:
                      prototype = type._payload;
                      type = type._init;
                      try {
                        return describeUnknownElementTypeFrameInDEV(
                          type(prototype),
                        );
                      } catch (x) {}
                  }
                return '';
              }
              function getOwner() {
                var dispatcher = ReactSharedInternals.A;
                return null === dispatcher ? null : dispatcher.getOwner();
              }
              function hasValidKey(config) {
                if (hasOwnProperty.call(config, 'key')) {
                  var getter = Object.getOwnPropertyDescriptor(
                    config,
                    'key',
                  ).get;
                  if (getter && getter.isReactWarning) return !1;
                }
                return void 0 !== config.key;
              }
              function defineKeyPropWarningGetter(props, displayName) {
                function warnAboutAccessingKey() {
                  specialPropKeyWarningShown ||
                    ((specialPropKeyWarningShown = !0),
                    console.error(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)',
                      displayName,
                    ));
                }
                warnAboutAccessingKey.isReactWarning = !0;
                Object.defineProperty(props, 'key', {
                  get: warnAboutAccessingKey,
                  configurable: !0,
                });
              }
              function elementRefGetterWithDeprecationWarning() {
                var componentName = getComponentNameFromType(this.type);
                didWarnAboutElementRef[componentName] ||
                  ((didWarnAboutElementRef[componentName] = !0),
                  console.error(
                    'Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.',
                  ));
                componentName = this.props.ref;
                return void 0 !== componentName ? componentName : null;
              }
              function ReactElement(type, key, self, source, owner, props) {
                self = props.ref;
                type = {
                  $$typeof: REACT_ELEMENT_TYPE,
                  type: type,
                  key: key,
                  props: props,
                  _owner: owner,
                };
                null !== (void 0 !== self ? self : null)
                  ? Object.defineProperty(type, 'ref', {
                      enumerable: !1,
                      get: elementRefGetterWithDeprecationWarning,
                    })
                  : Object.defineProperty(type, 'ref', {
                      enumerable: !1,
                      value: null,
                    });
                type._store = {};
                Object.defineProperty(type._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: 0,
                });
                Object.defineProperty(type, '_debugInfo', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: null,
                });
                Object.freeze &&
                  (Object.freeze(type.props), Object.freeze(type));
                return type;
              }
              function jsxDEVImpl(
                type,
                config,
                maybeKey,
                isStaticChildren,
                source,
                self,
              ) {
                if (
                  'string' === typeof type ||
                  'function' === typeof type ||
                  type === REACT_FRAGMENT_TYPE ||
                  type === REACT_PROFILER_TYPE ||
                  type === REACT_STRICT_MODE_TYPE ||
                  type === REACT_SUSPENSE_TYPE ||
                  type === REACT_SUSPENSE_LIST_TYPE ||
                  type === REACT_OFFSCREEN_TYPE ||
                  ('object' === typeof type &&
                    null !== type &&
                    (type.$$typeof === REACT_LAZY_TYPE ||
                      type.$$typeof === REACT_MEMO_TYPE ||
                      type.$$typeof === REACT_CONTEXT_TYPE ||
                      type.$$typeof === REACT_CONSUMER_TYPE ||
                      type.$$typeof === REACT_FORWARD_REF_TYPE ||
                      type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
                      void 0 !== type.getModuleId))
                ) {
                  var children = config.children;
                  if (void 0 !== children)
                    if (isStaticChildren)
                      if (isArrayImpl(children)) {
                        for (
                          isStaticChildren = 0;
                          isStaticChildren < children.length;
                          isStaticChildren++
                        )
                          validateChildKeys(children[isStaticChildren], type);
                        Object.freeze && Object.freeze(children);
                      } else
                        console.error(
                          'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                        );
                    else validateChildKeys(children, type);
                } else {
                  children = '';
                  if (
                    void 0 === type ||
                    ('object' === typeof type &&
                      null !== type &&
                      0 === Object.keys(type).length)
                  )
                    children +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                  null === type
                    ? (isStaticChildren = 'null')
                    : isArrayImpl(type)
                      ? (isStaticChildren = 'array')
                      : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
                        ? ((isStaticChildren =
                            '<' +
                            (getComponentNameFromType(type.type) || 'Unknown') +
                            ' />'),
                          (children =
                            ' Did you accidentally export a JSX literal instead of a component?'))
                        : (isStaticChildren = typeof type);
                  console.error(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    isStaticChildren,
                    children,
                  );
                }
                if (hasOwnProperty.call(config, 'key')) {
                  children = getComponentNameFromType(type);
                  var keys = Object.keys(config).filter(function (k) {
                    return 'key' !== k;
                  });
                  isStaticChildren =
                    0 < keys.length
                      ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}'
                      : '{key: someKey}';
                  didWarnAboutKeySpread[children + isStaticChildren] ||
                    ((keys =
                      0 < keys.length
                        ? '{' + keys.join(': ..., ') + ': ...}'
                        : '{}'),
                    console.error(
                      'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                      isStaticChildren,
                      children,
                      keys,
                      children,
                    ),
                    (didWarnAboutKeySpread[children + isStaticChildren] = !0));
                }
                children = null;
                void 0 !== maybeKey &&
                  (checkKeyStringCoercion(maybeKey),
                  (children = '' + maybeKey));
                hasValidKey(config) &&
                  (checkKeyStringCoercion(config.key),
                  (children = '' + config.key));
                if ('key' in config) {
                  maybeKey = {};
                  for (var propName in config)
                    'key' !== propName &&
                      (maybeKey[propName] = config[propName]);
                } else maybeKey = config;
                children &&
                  defineKeyPropWarningGetter(
                    maybeKey,
                    'function' === typeof type
                      ? type.displayName || type.name || 'Unknown'
                      : type,
                  );
                return ReactElement(
                  type,
                  children,
                  self,
                  source,
                  getOwner(),
                  maybeKey,
                );
              }
              function validateChildKeys(node, parentType) {
                if (
                  'object' === typeof node &&
                  node &&
                  node.$$typeof !== REACT_CLIENT_REFERENCE
                ) {
                  if (isArrayImpl(node))
                    for (var i = 0; i < node.length; i++) {
                      var child = node[i];
                      isValidElement(child) &&
                        validateExplicitKey(child, parentType);
                    }
                  else if (isValidElement(node))
                    node._store && (node._store.validated = 1);
                  else if (
                    (null === node || 'object' !== typeof node
                      ? (i = null)
                      : ((i =
                          (MAYBE_ITERATOR_SYMBOL &&
                            node[MAYBE_ITERATOR_SYMBOL]) ||
                          node['@@iterator']),
                        (i = 'function' === typeof i ? i : null)),
                    'function' === typeof i &&
                      i !== node.entries &&
                      ((i = i.call(node)), i !== node))
                  )
                    for (; !(node = i.next()).done; )
                      isValidElement(node.value) &&
                        validateExplicitKey(node.value, parentType);
                }
              }
              function isValidElement(object) {
                return (
                  'object' === typeof object &&
                  null !== object &&
                  object.$$typeof === REACT_ELEMENT_TYPE
                );
              }
              function validateExplicitKey(element, parentType) {
                if (
                  element._store &&
                  !element._store.validated &&
                  null == element.key &&
                  ((element._store.validated = 1),
                  (parentType = getCurrentComponentErrorInfo(parentType)),
                  !ownerHasKeyUseWarning[parentType])
                ) {
                  ownerHasKeyUseWarning[parentType] = !0;
                  var childOwner = '';
                  element &&
                    null != element._owner &&
                    element._owner !== getOwner() &&
                    ((childOwner = null),
                    'number' === typeof element._owner.tag
                      ? (childOwner = getComponentNameFromType(
                          element._owner.type,
                        ))
                      : 'string' === typeof element._owner.name &&
                        (childOwner = element._owner.name),
                    (childOwner =
                      ' It was passed a child from ' + childOwner + '.'));
                  var prevGetCurrentStack =
                    ReactSharedInternals.getCurrentStack;
                  ReactSharedInternals.getCurrentStack = function () {
                    var stack = describeUnknownElementTypeFrameInDEV(
                      element.type,
                    );
                    prevGetCurrentStack &&
                      (stack += prevGetCurrentStack() || '');
                    return stack;
                  };
                  console.error(
                    'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                    parentType,
                    childOwner,
                  );
                  ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
                }
              }
              function getCurrentComponentErrorInfo(parentType) {
                var info = '',
                  owner = getOwner();
                owner &&
                  (owner = getComponentNameFromType(owner.type)) &&
                  (info = '\n\nCheck the render method of `' + owner + '`.');
                info ||
                  ((parentType = getComponentNameFromType(parentType)) &&
                    (info =
                      '\n\nCheck the top-level render call using <' +
                      parentType +
                      '>.'));
                return info;
              }
              var React = __turbopack_require__(
                  '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
                ),
                REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
                REACT_PORTAL_TYPE = Symbol.for('react.portal'),
                REACT_FRAGMENT_TYPE = Symbol.for('react.fragment'),
                REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode'),
                REACT_PROFILER_TYPE = Symbol.for('react.profiler');
              Symbol.for('react.provider');
              var REACT_CONSUMER_TYPE = Symbol.for('react.consumer'),
                REACT_CONTEXT_TYPE = Symbol.for('react.context'),
                REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref'),
                REACT_SUSPENSE_TYPE = Symbol.for('react.suspense'),
                REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list'),
                REACT_MEMO_TYPE = Symbol.for('react.memo'),
                REACT_LAZY_TYPE = Symbol.for('react.lazy'),
                REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen'),
                MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
                REACT_CLIENT_REFERENCE$2 = Symbol.for('react.client.reference'),
                ReactSharedInternals =
                  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                hasOwnProperty = Object.prototype.hasOwnProperty,
                assign = Object.assign,
                REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference'),
                isArrayImpl = Array.isArray,
                disabledDepth = 0,
                prevLog,
                prevInfo,
                prevWarn,
                prevError,
                prevGroup,
                prevGroupCollapsed,
                prevGroupEnd;
              disabledLog.__reactDisabledLog = !0;
              var prefix,
                suffix,
                reentry = !1;
              var componentFrameCache = new (
                'function' === typeof WeakMap ? WeakMap : Map
              )();
              var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference'),
                specialPropKeyWarningShown;
              var didWarnAboutElementRef = {};
              var didWarnAboutKeySpread = {},
                ownerHasKeyUseWarning = {};
              exports.Fragment = REACT_FRAGMENT_TYPE;
              exports.jsxDEV = function (
                type,
                config,
                maybeKey,
                isStaticChildren,
                source,
                self,
              ) {
                return jsxDEVImpl(
                  type,
                  config,
                  maybeKey,
                  isStaticChildren,
                  source,
                  self,
                );
              };
            })();
        }
      },
    '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)':
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
          m: module,
          e: exports,
          t: require,
        } = __turbopack_context__;
        {
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_import__(
              '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
            );
          ('use strict');
          if (('TURBOPACK compile-time falsy', 0)) {
            ('TURBOPACK unreachable');
          } else {
            module.exports = __turbopack_require__(
              '[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)',
            );
          }
        }
      },
  },
]);

//# sourceMappingURL=_afef0a._.js.map
