webpackHotUpdate_N_E('pages/index', {
  /***/ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Content/Content.module.scss':
    /*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/Page/Content/Content.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
        '#Content_content__1M24u {\n  grid-area: "content";\n}',
        '',
        {
          version: 3,
          sources: [
            'C:/zamola/dev/DamianZamolski.github.io/src/components/Page/Content/Content.module.scss',
          ],
          names: [],
          mappings: 'AAAA;EACE,oBAAA;AACF',
          file: 'Content.module.scss',
          sourcesContent: ["#content {\r\n  grid-area: 'content';\r\n}\r\n"],
        },
      ])
      // Exports
      exports.locals = {
        content: 'Content_content__1M24u',
      }
      module.exports = exports

      /***/
    },

  /***/ './src/components/Page/Content/Content.js':
    /*!************************************************!*\
  !*** ./src/components/Page/Content/Content.js ***!
  \************************************************/
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
        /* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Content.module.scss */ './src/components/Page/Content/Content.module.scss'
        )
        /* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__
        )
        var _this = undefined,
          _jsxFileName =
            'C:\\zamola\\dev\\DamianZamolski.github.io\\src\\components\\Page\\Content\\Content.js'

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

        var Content = function Content(_ref) {
          var children = _ref.children
          return __jsx(
            'main',
            {
              id: _Content_module_scss__WEBPACK_IMPORTED_MODULE_1__['content'],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4,
                columnNumber: 35,
              },
            },
            children
          )
        }

        _c = Content
        /* harmony default export */ __webpack_exports__['default'] = Content

        var _c

        $RefreshReg$(_c, 'Content')

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

  /***/ './src/components/Page/Content/Content.module.scss':
    /*!*********************************************************!*\
  !*** ./src/components/Page/Content/Content.module.scss ***!
  \*********************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      var api = __webpack_require__(
        /*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
      )
      var content = __webpack_require__(
        /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Content/Content.module.scss'
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
            /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Content/Content.module.scss',
            function () {
              content = __webpack_require__(
                /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ './node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Page/Content/Content.module.scss'
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
                lineNumber: 9,
                columnNumber: 3,
              },
            },
            __jsx(_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 5,
              },
            }),
            __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_2__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
            }),
            __jsx(
              _Content_Content__WEBPACK_IMPORTED_MODULE_5__['default'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 5,
                },
              },
              children
            ),
            __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__['default'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13,
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
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZS9Db250ZW50L0NvbnRlbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2UvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuc2Nzcz8xOTZhIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlL1BhZ2UuanMiXSwibmFtZXMiOlsiQ29udGVudCIsImNoaWxkcmVuIiwiY29udGVudCIsIlBhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0QiwyQkFBMkIsR0FBRyxPQUFPLDZJQUE2SSxXQUFXLGdFQUFnRSwyQkFBMkIsS0FBSyxPQUFPO0FBQ3ZWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0I7QUFBTSxNQUFFLEVBQUVDLDREQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0JELFFBQXBCLENBQWxCO0FBQUEsQ0FBaEI7O0tBQU1ELE87QUFFU0Esc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLFVBQVUsbUJBQU8sQ0FBQyw0SkFBaUY7QUFDbkcsMEJBQTBCLG1CQUFPLENBQUMsdWhCQUEyVDs7QUFFN1Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sdWhCQUEyVDtBQUNqVTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHVoQkFBMlQ7O0FBRXJWOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0YsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDWDtBQUFLLE1BQUUsRUFBRUcsc0RBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVUgsUUFBVixDQUhGLEVBSUUsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEVztBQUFBLENBQWI7O0tBQU1FLEk7QUFTU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU4ZWRlMjllYTkwYTFkZjFiNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNDb250ZW50X2NvbnRlbnRfXzFNMjR1IHtcXG4gIGdyaWQtYXJlYTogXFxcImNvbnRlbnRcXFwiO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi96YW1vbGEvZGV2L0RhbWlhblphbW9sc2tpLmdpdGh1Yi5pby9zcmMvY29tcG9uZW50cy9QYWdlL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFBO0FBQ0ZcIixcImZpbGVcIjpcIkNvbnRlbnQubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnQge1xcclxcbiAgZ3JpZC1hcmVhOiAnY29udGVudCc7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJDb250ZW50X2NvbnRlbnRfXzFNMjR1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gPG1haW4gaWQ9e2NvbnRlbnR9PntjaGlsZHJlbn08L21haW4+XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRlbnQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250ZW50Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGVudC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyL0Zvb3RlcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIvSGVhZGVyJ1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdi9OYXYnXG5pbXBvcnQgeyBwYWdlIH0gZnJvbSAnLi9QYWdlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50L0NvbnRlbnQnXG5cbmNvbnN0IFBhZ2UgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgaWQ9e3BhZ2V9PlxuICAgIDxOYXYgLz5cbiAgICA8SGVhZGVyIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9
