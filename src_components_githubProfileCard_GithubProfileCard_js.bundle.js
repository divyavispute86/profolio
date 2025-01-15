"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprofolio"] = self["webpackChunkprofolio"] || []).push([["src_components_githubProfileCard_GithubProfileCard_js"],{

/***/ "./src/components/githubProfileCard/GithubProfileCard.js":
/*!***************************************************************!*\
  !*** ./src/components/githubProfileCard/GithubProfileCard.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GithubProfileCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GithubProfileCard.scss */ \"./src/components/githubProfileCard/GithubProfileCard.scss\");\n/* harmony import */ var _components_socialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/socialMedia/SocialMedia */ \"./src/components/socialMedia/SocialMedia.js\");\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portfolio */ \"./src/portfolio.js\");\n/* harmony import */ var react_easy_emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-easy-emoji */ \"./node_modules/react-easy-emoji/index.js\");\n/* harmony import */ var react_easy_emoji__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_easy_emoji__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal */ \"./node_modules/react-reveal/index.js\");\n\n\n\n\n\n\nfunction GithubProfileCard(_ref) {\n  let {\n    prof\n  } = _ref;\n  if (_portfolio__WEBPACK_IMPORTED_MODULE_3__.isHireable) {\n    prof.hireable = \"Yes\";\n  } else {\n    prof.hireable = \"No\";\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {\n    bottom: true,\n    duration: 1000,\n    distance: \"20px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"main\",\n    id: \"contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"prof-title\"\n  }, \"Reach Out to me!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"main-content-profile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"blog-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"subTitle blog-subtitle\"\n  }, _portfolio__WEBPACK_IMPORTED_MODULE_3__.contactInfo.subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"bio-text\"\n  }, \"\\\"\", react_easy_emoji__WEBPACK_IMPORTED_MODULE_5___default()(String(prof.bio)), \"\\\"\"), prof.location !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"location-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"desc-prof\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n    viewBox: \"-0.5 -2 20 19\",\n    version: \"1.1\",\n    width: \"22\",\n    height: \"16\",\n    \"aria-hidden\": \"true\",\n    stroke: \"currentColor\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fillRule: \"evenodd\",\n    d: \"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"\n  })), prof.location)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"opp-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"desc-prof\"\n  }, \"Open for opportunities: \", prof.hireable)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_socialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"image-content-profile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: prof.avatarUrl,\n    alt: prof.name,\n    className: \"profile-image\"\n  })))));\n}\n\n//# sourceURL=webpack://profolio/./src/components/githubProfileCard/GithubProfileCard.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/githubProfileCard/GithubProfileCard.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/githubProfileCard/GithubProfileCard.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Change colors in this file to style to your needs on a global level. \nCertain colors are used for different and multiply types of elements. \nFor greater control over colors visit each components .scss file. */\n.profile-image {\n  border-radius: 50%;\n  border: 0.5rem solid #6c63ff;\n  margin-left: auto;\n  width: 100%;\n  max-width: 350px;\n  height: auto;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 30px 30px -30px;\n  transition: all 0.3s ease-out;\n}\n\n.profile-image:hover {\n  box-shadow: none;\n}\n\n.prof-title {\n  margin: 0;\n  font-size: 40px;\n  font-weight: 400;\n}\n\n.location-div {\n  text-shadow: #ffebcd;\n}\n\n.opp-div {\n  padding-bottom: 1rem;\n}\n\n.row {\n  display: flex;\n}\n\n.main-content-profile {\n  flex: 80%;\n}\n\n.image-content-profile {\n  text-align: right;\n  flex: 20%;\n  max-width: 100%;\n  height: auto;\n}\n\n.bio-text {\n  line-height: 30px;\n  font-size: 22px;\n}\n\n.desc-prof {\n  line-height: 45px;\n  font-size: 19px;\n}\n\n.subTitle {\n  color: #868e96;\n}\n\n@media (max-width: 768px) {\n  .row {\n    display: flex;\n    flex-direction: column;\n  }\n  .main-content-profile {\n    text-align: center;\n    order: 2;\n  }\n  .bio-text {\n    font-size: 16px;\n  }\n  .image-content-profile {\n    margin-left: auto;\n    margin-right: auto;\n    order: 1;\n  }\n  .desc-prof {\n    line-height: 30px;\n    font-size: 16px;\n  }\n  .profile-image {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-width: 250px;\n    height: auto;\n  }\n  .profile-image:hover {\n    box-shadow: rgba(0, 0, 0, 0.1) 0 50px 50px -50px;\n    transition: 0.3s ease-out;\n  }\n  .prof-title {\n    padding-bottom: 1rem;\n    font-size: 32px;\n    text-align: center;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://profolio/./src/components/githubProfileCard/GithubProfileCard.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/githubProfileCard/GithubProfileCard.scss":
/*!*****************************************************************!*\
  !*** ./src/components/githubProfileCard/GithubProfileCard.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./GithubProfileCard.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/githubProfileCard/GithubProfileCard.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GithubProfileCard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://profolio/./src/components/githubProfileCard/GithubProfileCard.scss?");

/***/ })

}]);