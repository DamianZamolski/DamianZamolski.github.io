webpackHotUpdate_N_E('pages/index', {
  /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Title/Title.module.scss':
    /*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/Page/Title/Title.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
        /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
      )
      exports = ___CSS_LOADER_API_IMPORT___(true)
      // Module
      exports.push([
        module.i,
        '#Title_title__2hXhK {\n  background-color: var(--dark-background-color);\n  grid-area: title;\n}',
        '',
        {
          version: 3,
          sources: [
            'C:/zamola/dev/DamianZamolski.github.io/src/components/Page/Title/Title.module.scss',
          ],
          names: [],
          mappings: 'AAAA;EACE,8CAAA;EACA,gBAAA;AACF',
          file: 'Title.module.scss',
          sourcesContent: [
            '#title {\n  background-color: var(--dark-background-color);\n  grid-area: title;\n}\n',
          ],
        },
      ])
      // Exports
      exports.locals = {
        title: 'Title_title__2hXhK',
      }
      module.exports = exports

      /***/
    },

  /***/ './src/components/Page/Page.js':
    /*!*************************************!*\
  !*** ./src/components/Page/Page.js ***!
  \*************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */ ;(function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Footer/Footer */ './src/components/Page/Footer/Footer.js'
        )
        /* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Header/Header */ './src/components/Page/Header/Header.js'
        )
        /* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Nav/Nav */ './src/components/Page/Nav/Nav.js'
        )
        /* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Page.module.scss */ './src/components/Page/Page.module.scss'
        )
        /* harmony import */ var _Page_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _Page_module_scss__WEBPACK_IMPORTED_MODULE_4__
        )
        /* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Content/Content */ './src/components/Page/Content/Content.js'
        )
        /* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./Title/Title */ './src/components/Page/Title/Title.js'
        )
        var _this = undefined,
          _jsxFileName =
            'C:\\zamola\\dev\\DamianZamolski.github.io\\src\\components\\Page\\Page.js'

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

        var Page = function Page(_ref) {
          var children = _ref.children
          return __jsx(
            'div',
            {
              id: _Page_module_scss__WEBPACK_IMPORTED_MODULE_4__['page'],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 3,
              },
            },
            __jsx(_Title_Title__WEBPACK_IMPORTED_MODULE_6__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            }),
            __jsx(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 5,
              },
            }),
            __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5,
              },
            }),
            __jsx(
              _Content_Content__WEBPACK_IMPORTED_MODULE_5__['default'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 5,
                },
              },
              children
            ),
            __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5,
              },
            })
          )
        }

        _c = Page
        /* harmony default export */ __webpack_exports__['default'] = Page

        var _c

        $RefreshReg$(_c, 'Page')

        var _a, _b
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports = module.__proto__.exports
          var prevExports =
            (_b =
              (_a = module.hot.data) === null || _a === void 0
                ? void 0
                : _a.prevExports) !== null && _b !== void 0
              ? _b
              : null
          // This cannot happen in MainTemplate because the exports mismatch between
          // templating and execution.
          self.$RefreshHelpers$.registerExportsForReactRefresh(
            currentExports,
            module.i
          )
          // A module can be accepted automatically based on its exports, e.g. when
          // it is a Refresh Boundary.
          if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
              data.prevExports = currentExports
            })
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept()
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
              // A boundary can become ineligible if its exports are incompatible
              // with the previous exports.
              //
              // For example, if you add/remove/change exports, we'll want to
              // re-execute the importing modules, and force those components to
              // re-render. Similarly, if you convert a class component to a
              // function, we want to invalidate the boundary.
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports
                )
              ) {
                module.hot.invalidate()
              } else {
                self.$RefreshHelpers$.scheduleUpdate()
              }
            }
          } else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null
            if (isNoLongerABoundary) {
              module.hot.invalidate()
            }
          }
        }

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ))

      /***/
    },

  /***/ './src/components/Page/Title/Title.js':
    /*!********************************************!*\
  !*** ./src/components/Page/Title/Title.js ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* WEBPACK VAR INJECTION */ ;(function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        )
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Title.module.scss */ './src/components/Page/Title/Title.module.scss'
        )
        /* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__
        )
        var _this = undefined,
          _jsxFileName =
            'C:\\zamola\\dev\\DamianZamolski.github.io\\src\\components\\Page\\Title\\Title.js'

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

        var Title = function Title() {
          return __jsx(
            'div',
            {
              id: _Title_module_scss__WEBPACK_IMPORTED_MODULE_1__['title'],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 21,
              },
            },
            'Damian Zamolski'
          )
        }

        _c = Title
        /* harmony default export */ __webpack_exports__['default'] = Title

        var _c

        $RefreshReg$(_c, 'Title')

        var _a, _b
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports = module.__proto__.exports
          var prevExports =
            (_b =
              (_a = module.hot.data) === null || _a === void 0
                ? void 0
                : _a.prevExports) !== null && _b !== void 0
              ? _b
              : null
          // This cannot happen in MainTemplate because the exports mismatch between
          // templating and execution.
          self.$RefreshHelpers$.registerExportsForReactRefresh(
            currentExports,
            module.i
          )
          // A module can be accepted automatically based on its exports, e.g. when
          // it is a Refresh Boundary.
          if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
              data.prevExports = currentExports
            })
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept()
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
              // A boundary can become ineligible if its exports are incompatible
              // with the previous exports.
              //
              // For example, if you add/remove/change exports, we'll want to
              // re-execute the importing modules, and force those components to
              // re-render. Similarly, if you convert a class component to a
              // function, we want to invalidate the boundary.
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports
                )
              ) {
                module.hot.invalidate()
              } else {
                self.$RefreshHelpers$.scheduleUpdate()
              }
            }
          } else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null
            if (isNoLongerABoundary) {
              module.hot.invalidate()
            }
          }
        }

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ))

      /***/
    },

  /***/ './src/components/Page/Title/Title.module.scss':
    /*!*****************************************************!*\
  !*** ./src/components/Page/Title/Title.module.scss ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      var api = __webpack_require__(
        /*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
      )
      var content = __webpack_require__(
        /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Title.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Title/Title.module.scss'
      )

      content = content.__esModule ? content.default : content

      if (typeof content === 'string') {
        content = [[module.i, content, '']]
      }

      var options = {}

      options.insert = function (element) {
        // These elements should always exist. If they do not,
        // this code should fail.
        var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__')
        var parentNode = anchorElement.parentNode // Normally <head>
        // Each style tag should be placed right before our
        // anchor. By inserting before and not after, we do not
        // need to track the last inserted element.
        parentNode.insertBefore(element, anchorElement)
      }
      options.singleton = false

      var update = api(content, options)

      if (true) {
        if (!content.locals || module.hot.invalidate) {
          var isEqualLocals = function isEqualLocals(a, b) {
            if ((!a && b) || (a && !b)) {
              return false
            }

            var p

            for (p in a) {
              if (a[p] !== b[p]) {
                return false
              }
            }

            for (p in b) {
              if (!a[p]) {
                return false
              }
            }

            return true
          }
          var oldLocals = content.locals

          module.hot.accept(
            /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Title.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Title/Title.module.scss',
            function () {
              content = __webpack_require__(
                /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Title.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Title/Title.module.scss'
              )

              content = content.__esModule ? content.default : content

              if (typeof content === 'string') {
                content = [[module.i, content, '']]
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate()

                return
              }

              oldLocals = content.locals

              update(content)
            }
          )
        }

        module.hot.dispose(function () {
          update()
        })
      }

      module.exports = content.locals || {}

      /***/
    },
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZS9UaXRsZS9UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZS9QYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlL1RpdGxlL1RpdGxlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlL1RpdGxlL1RpdGxlLm1vZHVsZS5zY3NzPzk4ODUiXSwibmFtZXMiOlsiUGFnZSIsImNoaWxkcmVuIiwicGFnZSIsIlRpdGxlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLG1EQUFtRCxxQkFBcUIsR0FBRyxPQUFPLHlJQUF5SSxXQUFXLFdBQVcsNERBQTRELG1EQUFtRCxxQkFBcUIsR0FBRyxLQUFLO0FBQzVhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDWDtBQUFLLE1BQUUsRUFBRUMsc0RBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVRCxRQUFWLENBSkYsRUFLRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURXO0FBQUEsQ0FBYjs7S0FBTUQsSTtBQVVTQSxtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOztBQUVBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTTtBQUFLLE1BQUUsRUFBRUMsd0RBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBTjtBQUFBLENBQWQ7O0tBQU1ELEs7QUFFU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLFVBQVUsbUJBQU8sQ0FBQyw0SkFBaUY7QUFDbkcsMEJBQTBCLG1CQUFPLENBQUMsaWhCQUF5VDs7QUFFM1Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0saWhCQUF5VDtBQUMvVDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGloQkFBeVQ7O0FBRW5WOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU0NTMxMDhhOWVkZDY3MTM1YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNUaXRsZV90aXRsZV9fMmhYaEsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3phbW9sYS9kZXYvRGFtaWFuWmFtb2xza2kuZ2l0aHViLmlvL3NyYy9jb21wb25lbnRzL1BhZ2UvVGl0bGUvVGl0bGUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGdCQUFBO0FBQ0ZcIixcImZpbGVcIjpcIlRpdGxlLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGl0bGVcIjogXCJUaXRsZV90aXRsZV9fMmhYaEtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2L05hdidcbmltcG9ydCB7IHBhZ2UgfSBmcm9tICcuL1BhZ2UubW9kdWxlLnNjc3MnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQvQ29udGVudCdcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlL1RpdGxlJ1xuXG5jb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGlkPXtwYWdlfT5cbiAgICA8VGl0bGUgLz5cbiAgICA8TmF2IC8+XG4gICAgPEhlYWRlciAvPlxuICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdGl0bGUgfSBmcm9tICcuL1RpdGxlLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBUaXRsZSA9ICgpID0+IDxkaXYgaWQ9e3RpdGxlfT5EYW1pYW4gWmFtb2xza2k8L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1RpdGxlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGl0bGUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9UaXRsZS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
