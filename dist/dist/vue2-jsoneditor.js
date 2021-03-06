/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_minimalist_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_minimalist_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_minimalist_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsoneditor_dist_jsoneditor_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'json-editor',
  data: function data() {
    return {
      editor: null
    };
  },

  props: {
    json: {
      required: true
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    onChange: {
      type: Function
    }
  },
  watch: {
    json: {
      handler: function handler(newJson) {
        if (this.editor) {
          this.editor.set(newJson);
        }
      },

      deep: true
    }
  },
  methods: {
    _onChange: function _onChange(e) {
      if (this.onChange && this.editor) {
        this.onChange(this.editor.get());
      }
    }
  },
  mounted: function mounted() {
    var container = this.$refs.jsoneditor;
    var options = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.extend({
      onChange: this._onChange
    }, this.options);

    this.editor = new __WEBPACK_IMPORTED_MODULE_0_jsoneditor_dist_jsoneditor_minimalist_js___default.a(container, options);
    this.editor.set(this.json);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/adam/workspace/vue2-jsoneditor/src/components/JsonEditor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] JsonEditor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a9983da8", Component.options)
  } else {
    hotAPI.reload("data-v-a9983da8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "jsoneditor"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a9983da8", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("12a70dfe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a9983da8\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JsonEditor.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a9983da8\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./JsonEditor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * jsoneditor.js
 *
 * @brief
 * JSONEditor is a web-based tool to view, edit, format, and validate JSON.
 * It has various modes such as a tree editor, a code editor, and a plain text
 * editor.
 *
 * Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 8+
 *
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (c) 2011-2017 Jos de Jong, http://jsoneditoronline.org
 *
 * @author  Jos de Jong, <wjosdejong@gmail.com>
 * @version 5.5.11
 * @date    2017-01-06
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSONEditor"] = factory();
	else
		root["JSONEditor"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Ajv;
	try {
	  Ajv = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ajv\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	}
	catch (err) {
	  // no problem... when we need Ajv we will throw a neat exception
	}

	var treemode = __webpack_require__(1);
	var textmode = __webpack_require__(12);
	var util = __webpack_require__(4);

	/**
	 * @constructor JSONEditor
	 * @param {Element} container    Container element
	 * @param {Object}  [options]    Object with options. available options:
	 *                               {String} mode        Editor mode. Available values:
	 *                                                    'tree' (default), 'view',
	 *                                                    'form', 'text', and 'code'.
	 *                               {function} onChange  Callback method, triggered
	 *                                                    on change of contents
	 *                               {function} onError   Callback method, triggered
	 *                                                    when an error occurs
	 *                               {Boolean} search     Enable search box.
	 *                                                    True by default
	 *                                                    Only applicable for modes
	 *                                                    'tree', 'view', and 'form'
	 *                               {Boolean} history    Enable history (undo/redo).
	 *                                                    True by default
	 *                                                    Only applicable for modes
	 *                                                    'tree', 'view', and 'form'
	 *                               {String} name        Field name for the root node.
	 *                                                    Only applicable for modes
	 *                                                    'tree', 'view', and 'form'
	 *                               {Number} indentation     Number of indentation
	 *                                                        spaces. 4 by default.
	 *                                                        Only applicable for
	 *                                                        modes 'text' and 'code'
	 *                               {boolean} escapeUnicode  If true, unicode
	 *                                                        characters are escaped.
	 *                                                        false by default.
	 *                               {boolean} sortObjectKeys If true, object keys are
	 *                                                        sorted before display.
	 *                                                        false by default.
	 * @param {Object | undefined} json JSON object
	 */
	function JSONEditor (container, options, json) {
	  if (!(this instanceof JSONEditor)) {
	    throw new Error('JSONEditor constructor called without "new".');
	  }

	  // check for unsupported browser (IE8 and older)
	  var ieVersion = util.getInternetExplorerVersion();
	  if (ieVersion != -1 && ieVersion < 9) {
	    throw new Error('Unsupported browser, IE9 or newer required. ' +
	        'Please install the newest version of your browser.');
	  }

	  if (options) {
	    // check for deprecated options
	    if (options.error) {
	      console.warn('Option "error" has been renamed to "onError"');
	      options.onError = options.error;
	      delete options.error;
	    }
	    if (options.change) {
	      console.warn('Option "change" has been renamed to "onChange"');
	      options.onChange = options.change;
	      delete options.change;
	    }
	    if (options.editable) {
	      console.warn('Option "editable" has been renamed to "onEditable"');
	      options.onEditable = options.editable;
	      delete options.editable;
	    }

	    // validate options
	    if (options) {
	      var VALID_OPTIONS = [
	        'ace', 'theme',
	        'ajv', 'schema',
	        'onChange', 'onEditable', 'onError', 'onModeChange',
	        'escapeUnicode', 'history', 'search', 'mode', 'modes', 'name', 'indentation', 'sortObjectKeys'
	      ];

	      Object.keys(options).forEach(function (option) {
	        if (VALID_OPTIONS.indexOf(option) === -1) {
	          console.warn('Unknown option "' + option + '". This option will be ignored');
	        }
	      });
	    }
	  }

	  if (arguments.length) {
	    this._create(container, options, json);
	  }
	}

	/**
	 * Configuration for all registered modes. Example:
	 * {
	 *     tree: {
	 *         mixin: TreeEditor,
	 *         data: 'json'
	 *     },
	 *     text: {
	 *         mixin: TextEditor,
	 *         data: 'text'
	 *     }
	 * }
	 *
	 * @type { Object.<String, {mixin: Object, data: String} > }
	 */
	JSONEditor.modes = {};

	// debounce interval for JSON schema vaidation in milliseconds
	JSONEditor.prototype.DEBOUNCE_INTERVAL = 150;

	/**
	 * Create the JSONEditor
	 * @param {Element} container    Container element
	 * @param {Object}  [options]    See description in constructor
	 * @param {Object | undefined} json JSON object
	 * @private
	 */
	JSONEditor.prototype._create = function (container, options, json) {
	  this.container = container;
	  this.options = options || {};
	  this.json = json || {};

	  var mode = this.options.mode || 'tree';
	  this.setMode(mode);
	};

	/**
	 * Destroy the editor. Clean up DOM, event listeners, and web workers.
	 */
	JSONEditor.prototype.destroy = function () {};

	/**
	 * Set JSON object in editor
	 * @param {Object | undefined} json      JSON data
	 */
	JSONEditor.prototype.set = function (json) {
	  this.json = json;
	};

	/**
	 * Get JSON from the editor
	 * @returns {Object} json
	 */
	JSONEditor.prototype.get = function () {
	  return this.json;
	};

	/**
	 * Set string containing JSON for the editor
	 * @param {String | undefined} jsonText
	 */
	JSONEditor.prototype.setText = function (jsonText) {
	  this.json = util.parse(jsonText);
	};

	/**
	 * Get stringified JSON contents from the editor
	 * @returns {String} jsonText
	 */
	JSONEditor.prototype.getText = function () {
	  return JSON.stringify(this.json);
	};

	/**
	 * Set a field name for the root node.
	 * @param {String | undefined} name
	 */
	JSONEditor.prototype.setName = function (name) {
	  if (!this.options) {
	    this.options = {};
	  }
	  this.options.name = name;
	};

	/**
	 * Get the field name for the root node.
	 * @return {String | undefined} name
	 */
	JSONEditor.prototype.getName = function () {
	  return this.options && this.options.name;
	};

	/**
	 * Change the mode of the editor.
	 * JSONEditor will be extended with all methods needed for the chosen mode.
	 * @param {String} mode     Available modes: 'tree' (default), 'view', 'form',
	 *                          'text', and 'code'.
	 */
	JSONEditor.prototype.setMode = function (mode) {
	  var container = this.container;
	  var options = util.extend({}, this.options);
	  var oldMode = options.mode;
	  var data;
	  var name;

	  options.mode = mode;
	  var config = JSONEditor.modes[mode];
	  if (config) {
	    try {
	      var asText = (config.data == 'text');
	      name = this.getName();
	      data = this[asText ? 'getText' : 'get'](); // get text or json

	      this.destroy();
	      util.clear(this);
	      util.extend(this, config.mixin);
	      this.create(container, options);

	      this.setName(name);
	      this[asText ? 'setText' : 'set'](data); // set text or json

	      if (typeof config.load === 'function') {
	        try {
	          config.load.call(this);
	        }
	        catch (err) {
	          console.error(err);
	        }
	      }

	      if (typeof options.onModeChange === 'function' && mode !== oldMode) {
	        try {
	          options.onModeChange(mode, oldMode);
	        }
	        catch (err) {
	          console.error(err);
	        }
	      }
	    }
	    catch (err) {
	      this._onError(err);
	    }
	  }
	  else {
	    throw new Error('Unknown mode "' + options.mode + '"');
	  }
	};

	/**
	 * Get the current mode
	 * @return {string}
	 */
	JSONEditor.prototype.getMode = function () {
	  return this.options.mode;
	};

	/**
	 * Throw an error. If an error callback is configured in options.error, this
	 * callback will be invoked. Else, a regular error is thrown.
	 * @param {Error} err
	 * @private
	 */
	JSONEditor.prototype._onError = function(err) {
	  if (this.options && typeof this.options.onError === 'function') {
	    this.options.onError(err);
	  }
	  else {
	    throw err;
	  }
	};

	/**
	 * Set a JSON schema for validation of the JSON object.
	 * To remove the schema, call JSONEditor.setSchema(null)
	 * @param {Object | null} schema
	 */
	JSONEditor.prototype.setSchema = function (schema) {
	  // compile a JSON schema validator if a JSON schema is provided
	  if (schema) {
	    var ajv;
	    try {
	      // grab ajv from options if provided, else create a new instance
	      ajv = this.options.ajv || Ajv({ allErrors: true, verbose: true });

	    }
	    catch (err) {
	      console.warn('Failed to create an instance of Ajv, JSON Schema validation is not available. Please use a JSONEditor bundle including Ajv, or pass an instance of Ajv as via the configuration option `ajv`.');
	    }

	    if (ajv) {
	      this.validateSchema = ajv.compile(schema);

	      // add schema to the options, so that when switching to an other mode,
	      // the set schema is not lost
	      this.options.schema = schema;

	      // validate now
	      this.validate();
	    }

	    this.refresh(); // update DOM
	  }
	  else {
	    // remove current schema
	    this.validateSchema = null;
	    this.options.schema = null;
	    this.validate(); // to clear current error messages
	    this.refresh();  // update DOM
	  }
	};

	/**
	 * Validate current JSON object against the configured JSON schema
	 * Throws an exception when no JSON schema is configured
	 */
	JSONEditor.prototype.validate = function () {
	  // must be implemented by treemode and textmode
	};

	/**
	 * Refresh the rendered contents
	 */
	JSONEditor.prototype.refresh = function () {
	  // can be implemented by treemode and textmode
	};

	/**
	 * Register a plugin with one ore multiple modes for the JSON Editor.
	 *
	 * A mode is described as an object with properties:
	 *
	 * - `mode: String`           The name of the mode.
	 * - `mixin: Object`          An object containing the mixin functions which
	 *                            will be added to the JSONEditor. Must contain functions
	 *                            create, get, getText, set, and setText. May have
	 *                            additional functions.
	 *                            When the JSONEditor switches to a mixin, all mixin
	 *                            functions are added to the JSONEditor, and then
	 *                            the function `create(container, options)` is executed.
	 * - `data: 'text' | 'json'`  The type of data that will be used to load the mixin.
	 * - `[load: function]`       An optional function called after the mixin
	 *                            has been loaded.
	 *
	 * @param {Object | Array} mode  A mode object or an array with multiple mode objects.
	 */
	JSONEditor.registerMode = function (mode) {
	  var i, prop;

	  if (util.isArray(mode)) {
	    // multiple modes
	    for (i = 0; i < mode.length; i++) {
	      JSONEditor.registerMode(mode[i]);
	    }
	  }
	  else {
	    // validate the new mode
	    if (!('mode' in mode)) throw new Error('Property "mode" missing');
	    if (!('mixin' in mode)) throw new Error('Property "mixin" missing');
	    if (!('data' in mode)) throw new Error('Property "data" missing');
	    var name = mode.mode;
	    if (name in JSONEditor.modes) {
	      throw new Error('Mode "' + name + '" already registered');
	    }

	    // validate the mixin
	    if (typeof mode.mixin.create !== 'function') {
	      throw new Error('Required function "create" missing on mixin');
	    }
	    var reserved = ['setMode', 'registerMode', 'modes'];
	    for (i = 0; i < reserved.length; i++) {
	      prop = reserved[i];
	      if (prop in mode.mixin) {
	        throw new Error('Reserved property "' + prop + '" not allowed in mixin');
	      }
	    }

	    JSONEditor.modes[name] = mode;
	  }
	};

	// register tree and text modes
	JSONEditor.registerMode(treemode);
	JSONEditor.registerMode(textmode);

	module.exports = JSONEditor;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	var Highlighter = __webpack_require__(2);
	var History = __webpack_require__(3);
	var SearchBox = __webpack_require__(6);
	var ContextMenu = __webpack_require__(7);
	var Node = __webpack_require__(8);
	var ModeSwitcher = __webpack_require__(11);
	var util = __webpack_require__(4);

	// create a mixin with the functions for tree mode
	var treemode = {};

	/**
	 * Create a tree editor
	 * @param {Element} container    Container element
	 * @param {Object}  [options]    Object with options. available options:
	 *                               {String} mode            Editor mode. Available values:
	 *                                                        'tree' (default), 'view',
	 *                                                        and 'form'.
	 *                               {Boolean} search         Enable search box.
	 *                                                        True by default
	 *                               {Boolean} history        Enable history (undo/redo).
	 *                                                        True by default
	 *                               {function} onChange      Callback method, triggered
	 *                                                        on change of contents
	 *                               {String} name            Field name for the root node.
	 *                               {boolean} escapeUnicode  If true, unicode
	 *                                                        characters are escaped.
	 *                                                        false by default.
	 *                               {Object} schema          A JSON Schema for validation
	 * @private
	 */
	treemode.create = function (container, options) {
	  if (!container) {
	    throw new Error('No container element provided.');
	  }
	  this.container = container;
	  this.dom = {};
	  this.highlighter = new Highlighter();
	  this.selection = undefined; // will hold the last input selection
	  this.multiselection = {
	    nodes: []
	  };
	  this.validateSchema = null; // will be set in .setSchema(schema)
	  this.errorNodes = [];

	  this.node = null;
	  this.focusTarget = null;

	  this._setOptions(options);

	  if (this.options.history && this.options.mode !== 'view') {
	    this.history = new History(this);
	  }

	  this._createFrame();
	  this._createTable();
	};

	/**
	 * Destroy the editor. Clean up DOM, event listeners, and web workers.
	 */
	treemode.destroy = function () {
	  if (this.frame && this.container && this.frame.parentNode == this.container) {
	    this.container.removeChild(this.frame);
	    this.frame = null;
	  }
	  this.container = null;

	  this.dom = null;

	  this.clear();
	  this.node = null;
	  this.focusTarget = null;
	  this.selection = null;
	  this.multiselection = null;
	  this.errorNodes = null;
	  this.validateSchema = null;
	  this._debouncedValidate = null;

	  if (this.history) {
	    this.history.destroy();
	    this.history = null;
	  }

	  if (this.searchBox) {
	    this.searchBox.destroy();
	    this.searchBox = null;
	  }

	  if (this.modeSwitcher) {
	    this.modeSwitcher.destroy();
	    this.modeSwitcher = null;
	  }
	};

	/**
	 * Initialize and set default options
	 * @param {Object}  [options]    See description in constructor
	 * @private
	 */
	treemode._setOptions = function (options) {
	  this.options = {
	    search: true,
	    history: true,
	    mode: 'tree',
	    name: undefined,   // field name of root node
	    schema: null
	  };

	  // copy all options
	  if (options) {
	    for (var prop in options) {
	      if (options.hasOwnProperty(prop)) {
	        this.options[prop] = options[prop];
	      }
	    }
	  }

	  // compile a JSON schema validator if a JSON schema is provided
	  this.setSchema(this.options.schema);

	  // create a debounced validate function
	  this._debouncedValidate = util.debounce(this.validate.bind(this), this.DEBOUNCE_INTERVAL);
	};

	/**
	 * Set JSON object in editor
	 * @param {Object | undefined} json      JSON data
	 * @param {String}             [name]    Optional field name for the root node.
	 *                                       Can also be set using setName(name).
	 */
	treemode.set = function (json, name) {
	  // adjust field name for root node
	  if (name) {
	    // TODO: deprecated since version 2.2.0. Cleanup some day.
	    console.warn('Second parameter "name" is deprecated. Use setName(name) instead.');
	    this.options.name = name;
	  }

	  // verify if json is valid JSON, ignore when a function
	  if (json instanceof Function || (json === undefined)) {
	    this.clear();
	  }
	  else {
	    this.content.removeChild(this.table);  // Take the table offline

	    // replace the root node
	    var params = {
	      field: this.options.name,
	      value: json
	    };
	    var node = new Node(this, params);
	    this._setRoot(node);

	    // validate JSON schema (if configured)
	    this.validate();

	    // expand
	    var recurse = false;
	    this.node.expand(recurse);

	    this.content.appendChild(this.table);  // Put the table online again
	  }

	  // TODO: maintain history, store last state and previous document
	  if (this.history) {
	    this.history.clear();
	  }

	  // clear search
	  if (this.searchBox) {
	    this.searchBox.clear();
	  }
	};

	/**
	 * Get JSON object from editor
	 * @return {Object | undefined} json
	 */
	treemode.get = function () {
	  // remove focus from currently edited node
	  if (this.focusTarget) {
	    var node = Node.getNodeFromTarget(this.focusTarget);
	    if (node) {
	      node.blur();
	    }
	  }

	  if (this.node) {
	    return this.node.getValue();
	  }
	  else {
	    return undefined;
	  }
	};

	/**
	 * Get the text contents of the editor
	 * @return {String} jsonText
	 */
	treemode.getText = function() {
	  return JSON.stringify(this.get());
	};

	/**
	 * Set the text contents of the editor
	 * @param {String} jsonText
	 */
	treemode.setText = function(jsonText) {
	  this.set(util.parse(jsonText));
	};

	/**
	 * Set a field name for the root node.
	 * @param {String | undefined} name
	 */
	treemode.setName = function (name) {
	  this.options.name = name;
	  if (this.node) {
	    this.node.updateField(this.options.name);
	  }
	};

	/**
	 * Get the field name for the root node.
	 * @return {String | undefined} name
	 */
	treemode.getName = function () {
	  return this.options.name;
	};

	/**
	 * Set focus to the editor. Focus will be set to:
	 * - the first editable field or value, or else
	 * - to the expand button of the root node, or else
	 * - to the context menu button of the root node, or else
	 * - to the first button in the top menu
	 */
	treemode.focus = function () {
	  var input = this.content.querySelector('[contenteditable=true]');
	  if (input) {
	    input.focus();
	  }
	  else if (this.node.dom.expand) {
	    this.node.dom.expand.focus();
	  }
	  else if (this.node.dom.menu) {
	    this.node.dom.menu.focus();
	  }
	  else {
	    // focus to the first button in the menu
	    input = this.frame.querySelector('button');
	    if (input) {
	      input.focus();
	    }
	  }
	};

	/**
	 * Remove the root node from the editor
	 */
	treemode.clear = function () {
	  if (this.node) {
	    this.node.collapse();
	    this.tbody.removeChild(this.node.getDom());
	    delete this.node;
	  }
	};

	/**
	 * Set the root node for the json editor
	 * @param {Node} node
	 * @private
	 */
	treemode._setRoot = function (node) {
	  this.clear();

	  this.node = node;

	  // append to the dom
	  this.tbody.appendChild(node.getDom());
	};

	/**
	 * Search text in all nodes
	 * The nodes will be expanded when the text is found one of its childs,
	 * else it will be collapsed. Searches are case insensitive.
	 * @param {String} text
	 * @return {Object[]} results  Array with nodes containing the search results
	 *                             The result objects contains fields:
	 *                             - {Node} node,
	 *                             - {String} elem  the dom element name where
	 *                                              the result is found ('field' or
	 *                                              'value')
	 */
	treemode.search = function (text) {
	  var results;
	  if (this.node) {
	    this.content.removeChild(this.table);  // Take the table offline
	    results = this.node.search(text);
	    this.content.appendChild(this.table);  // Put the table online again
	  }
	  else {
	    results = [];
	  }

	  return results;
	};

	/**
	 * Expand all nodes
	 */
	treemode.expandAll = function () {
	  if (this.node) {
	    this.content.removeChild(this.table);  // Take the table offline
	    this.node.expand();
	    this.content.appendChild(this.table);  // Put the table online again
	  }
	};

	/**
	 * Collapse all nodes
	 */
	treemode.collapseAll = function () {
	  if (this.node) {
	    this.content.removeChild(this.table);  // Take the table offline
	    this.node.collapse();
	    this.content.appendChild(this.table);  // Put the table online again
	  }
	};

	/**
	 * The method onChange is called whenever a field or value is changed, created,
	 * deleted, duplicated, etc.
	 * @param {String} action  Change action. Available values: "editField",
	 *                         "editValue", "changeType", "appendNode",
	 *                         "removeNode", "duplicateNode", "moveNode", "expand",
	 *                         "collapse".
	 * @param {Object} params  Object containing parameters describing the change.
	 *                         The parameters in params depend on the action (for
	 *                         example for "editValue" the Node, old value, and new
	 *                         value are provided). params contains all information
	 *                         needed to undo or redo the action.
	 * @private
	 */
	treemode._onAction = function (action, params) {
	  // add an action to the history
	  if (this.history) {
	    this.history.add(action, params);
	  }

	  this._onChange();
	};

	/**
	 * Handle a change:
	 * - Validate JSON schema
	 * - Send a callback to the onChange listener if provided
	 * @private
	 */
	treemode._onChange = function () {
	  // validate JSON schema (if configured)
	  this._debouncedValidate();

	  // trigger the onChange callback
	  if (this.options.onChange) {
	    try {
	      this.options.onChange();
	    }
	    catch (err) {
	      console.error('Error in onChange callback: ', err);
	    }
	  }
	};

	/**
	 * Validate current JSON object against the configured JSON schema
	 * Throws an exception when no JSON schema is configured
	 */
	treemode.validate = function () {
	  // clear all current errors
	  if (this.errorNodes) {
	    this.errorNodes.forEach(function (node) {
	      node.setError(null);
	    });
	  }

	  var root = this.node;
	  if (!root) { // TODO: this should be redundant but is needed on mode switch
	    return;
	  }

	  // check for duplicate keys
	  var duplicateErrors = root.validate();

	  // validate the JSON
	  var schemaErrors = [];
	  if (this.validateSchema) {
	    var valid = this.validateSchema(root.getValue());
	    if (!valid) {
	      // apply all new errors
	      schemaErrors = this.validateSchema.errors
	          .map(function (error) {
	            return util.improveSchemaError(error);
	          })
	          .map(function findNode (error) {
	            return {
	              node: root.findNode(error.dataPath),
	              error: error
	            }
	          })
	          .filter(function hasNode (entry) {
	            return entry.node != null
	          });
	    }
	  }

	  // display the error in the nodes with a problem
	  this.errorNodes = duplicateErrors
	      .concat(schemaErrors)
	      .reduce(function expandParents (all, entry) {
	        // expand parents, then merge such that parents come first and
	        // original entries last
	        return entry.node
	            .findParents()
	            .map(function (parent) {
	              return {
	                node: parent,
	                child: entry.node,
	                error: {
	                  message: parent.type === 'object'
	                      ? 'Contains invalid properties' // object
	                      : 'Contains invalid items'      // array
	                }
	              };
	            })
	            .concat(all, [entry]);
	      }, [])
	      // TODO: dedupe the parent nodes
	      .map(function setError (entry) {
	        entry.node.setError(entry.error, entry.child);
	        return entry.node;
	      });
	};

	/**
	 * Refresh the rendered contents
	 */
	treemode.refresh = function () {
	  if (this.node) {
	    this.node.updateDom({recurse: true});
	  }
	};

	/**
	 * Start autoscrolling when given mouse position is above the top of the
	 * editor contents, or below the bottom.
	 * @param {Number} mouseY  Absolute mouse position in pixels
	 */
	treemode.startAutoScroll = function (mouseY) {
	  var me = this;
	  var content = this.content;
	  var top = util.getAbsoluteTop(content);
	  var height = content.clientHeight;
	  var bottom = top + height;
	  var margin = 24;
	  var interval = 50; // ms

	  if ((mouseY < top + margin) && content.scrollTop > 0) {
	    this.autoScrollStep = ((top + margin) - mouseY) / 3;
	  }
	  else if (mouseY > bottom - margin &&
	      height + content.scrollTop < content.scrollHeight) {
	    this.autoScrollStep = ((bottom - margin) - mouseY) / 3;
	  }
	  else {
	    this.autoScrollStep = undefined;
	  }

	  if (this.autoScrollStep) {
	    if (!this.autoScrollTimer) {
	      this.autoScrollTimer = setInterval(function () {
	        if (me.autoScrollStep) {
	          content.scrollTop -= me.autoScrollStep;
	        }
	        else {
	          me.stopAutoScroll();
	        }
	      }, interval);
	    }
	  }
	  else {
	    this.stopAutoScroll();
	  }
	};

	/**
	 * Stop auto scrolling. Only applicable when scrolling
	 */
	treemode.stopAutoScroll = function () {
	  if (this.autoScrollTimer) {
	    clearTimeout(this.autoScrollTimer);
	    delete this.autoScrollTimer;
	  }
	  if (this.autoScrollStep) {
	    delete this.autoScrollStep;
	  }
	};


	/**
	 * Set the focus to an element in the editor, set text selection, and
	 * set scroll position.
	 * @param {Object} selection  An object containing fields:
	 *                            {Element | undefined} dom     The dom element
	 *                                                          which has focus
	 *                            {Range | TextRange} range     A text selection
	 *                            {Node[]} nodes                Nodes in case of multi selection
	 *                            {Number} scrollTop            Scroll position
	 */
	treemode.setSelection = function (selection) {
	  if (!selection) {
	    return;
	  }

	  if ('scrollTop' in selection && this.content) {
	    // TODO: animated scroll
	    this.content.scrollTop = selection.scrollTop;
	  }
	  if (selection.nodes) {
	    // multi-select
	    this.select(selection.nodes);
	  }
	  if (selection.range) {
	    util.setSelectionOffset(selection.range);
	  }
	  if (selection.dom) {
	    selection.dom.focus();
	  }
	};

	/**
	 * Get the current focus
	 * @return {Object} selection An object containing fields:
	 *                            {Element | undefined} dom     The dom element
	 *                                                          which has focus
	 *                            {Range | TextRange} range     A text selection
	 *                            {Node[]} nodes                Nodes in case of multi selection
	 *                            {Number} scrollTop            Scroll position
	 */
	treemode.getSelection = function () {
	  var range = util.getSelectionOffset();
	  if (range && range.container.nodeName !== 'DIV') { // filter on (editable) divs)
	    range = null;
	  }

	  return {
	    dom: this.focusTarget,
	    range: range,
	    nodes: this.multiselection.nodes.slice(0),
	    scrollTop: this.content ? this.content.scrollTop : 0
	  };
	};

	/**
	 * Adjust the scroll position such that given top position is shown at 1/4
	 * of the window height.
	 * @param {Number} top
	 * @param {function(boolean)} [callback]   Callback, executed when animation is
	 *                                         finished. The callback returns true
	 *                                         when animation is finished, or false
	 *                                         when not.
	 */
	treemode.scrollTo = function (top, callback) {
	  var content = this.content;
	  if (content) {
	    var editor = this;
	    // cancel any running animation
	    if (editor.animateTimeout) {
	      clearTimeout(editor.animateTimeout);
	      delete editor.animateTimeout;
	    }
	    if (editor.animateCallback) {
	      editor.animateCallback(false);
	      delete editor.animateCallback;
	    }

	    // calculate final scroll position
	    var height = content.clientHeight;
	    var bottom = content.scrollHeight - height;
	    var finalScrollTop = Math.min(Math.max(top - height / 4, 0), bottom);

	    // animate towards the new scroll position
	    var animate = function () {
	      var scrollTop = content.scrollTop;
	      var diff = (finalScrollTop - scrollTop);
	      if (Math.abs(diff) > 3) {
	        content.scrollTop += diff / 3;
	        editor.animateCallback = callback;
	        editor.animateTimeout = setTimeout(animate, 50);
	      }
	      else {
	        // finished
	        if (callback) {
	          callback(true);
	        }
	        content.scrollTop = finalScrollTop;
	        delete editor.animateTimeout;
	        delete editor.animateCallback;
	      }
	    };
	    animate();
	  }
	  else {
	    if (callback) {
	      callback(false);
	    }
	  }
	};

	/**
	 * Create main frame
	 * @private
	 */
	treemode._createFrame = function () {
	  // create the frame
	  this.frame = document.createElement('div');
	  this.frame.className = 'jsoneditor jsoneditor-mode-' + this.options.mode;
	  this.container.appendChild(this.frame);

	  // create one global event listener to handle all events from all nodes
	  var editor = this;
	  function onEvent(event) {
	    // when switching to mode "code" or "text" via the menu, some events
	    // are still fired whilst the _onEvent methods is already removed.
	    if (editor._onEvent) {
	      editor._onEvent(event);
	    }
	  }
	  this.frame.onclick = function (event) {
	    var target = event.target;// || event.srcElement;

	    onEvent(event);

	    // prevent default submit action of buttons when editor is located
	    // inside a form
	    if (target.nodeName == 'BUTTON') {
	      event.preventDefault();
	    }
	  };
	  this.frame.oninput = onEvent;
	  this.frame.onchange = onEvent;
	  this.frame.onkeydown = onEvent;
	  this.frame.onkeyup = onEvent;
	  this.frame.oncut = onEvent;
	  this.frame.onpaste = onEvent;
	  this.frame.onmousedown = onEvent;
	  this.frame.onmouseup = onEvent;
	  this.frame.onmouseover = onEvent;
	  this.frame.onmouseout = onEvent;
	  // Note: focus and blur events do not propagate, therefore they defined
	  // using an eventListener with useCapture=true
	  // see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	  util.addEventListener(this.frame, 'focus', onEvent, true);
	  util.addEventListener(this.frame, 'blur', onEvent, true);
	  this.frame.onfocusin = onEvent;  // for IE
	  this.frame.onfocusout = onEvent; // for IE

	  // create menu
	  this.menu = document.createElement('div');
	  this.menu.className = 'jsoneditor-menu';
	  this.frame.appendChild(this.menu);

	  // create expand all button
	  var expandAll = document.createElement('button');
	  expandAll.type = 'button';
	  expandAll.className = 'jsoneditor-expand-all';
	  expandAll.title = 'Expand all fields';
	  expandAll.onclick = function () {
	    editor.expandAll();
	  };
	  this.menu.appendChild(expandAll);

	  // create expand all button
	  var collapseAll = document.createElement('button');
	  collapseAll.type = 'button';
	  collapseAll.title = 'Collapse all fields';
	  collapseAll.className = 'jsoneditor-collapse-all';
	  collapseAll.onclick = function () {
	    editor.collapseAll();
	  };
	  this.menu.appendChild(collapseAll);

	  // create undo/redo buttons
	  if (this.history) {
	    // create undo button
	    var undo = document.createElement('button');
	    undo.type = 'button';
	    undo.className = 'jsoneditor-undo jsoneditor-separator';
	    undo.title = 'Undo last action (Ctrl+Z)';
	    undo.onclick = function () {
	      editor._onUndo();
	    };
	    this.menu.appendChild(undo);
	    this.dom.undo = undo;

	    // create redo button
	    var redo = document.createElement('button');
	    redo.type = 'button';
	    redo.className = 'jsoneditor-redo';
	    redo.title = 'Redo (Ctrl+Shift+Z)';
	    redo.onclick = function () {
	      editor._onRedo();
	    };
	    this.menu.appendChild(redo);
	    this.dom.redo = redo;

	    // register handler for onchange of history
	    this.history.onChange = function () {
	      undo.disabled = !editor.history.canUndo();
	      redo.disabled = !editor.history.canRedo();
	    };
	    this.history.onChange();
	  }

	  // create mode box
	  if (this.options && this.options.modes && this.options.modes.length) {
	    var me = this;
	    this.modeSwitcher = new ModeSwitcher(this.menu, this.options.modes, this.options.mode, function onSwitch(mode) {
	      me.modeSwitcher.destroy();

	      // switch mode and restore focus
	      me.setMode(mode);
	      me.modeSwitcher.focus();
	    });
	  }

	  // create search box
	  if (this.options.search) {
	    this.searchBox = new SearchBox(this, this.menu);
	  }
	};

	/**
	 * Perform an undo action
	 * @private
	 */
	treemode._onUndo = function () {
	  if (this.history) {
	    // undo last action
	    this.history.undo();

	    // fire change event
	    this._onChange();
	  }
	};

	/**
	 * Perform a redo action
	 * @private
	 */
	treemode._onRedo = function () {
	  if (this.history) {
	    // redo last action
	    this.history.redo();

	    // fire change event
	    this._onChange();
	  }
	};

	/**
	 * Event handler
	 * @param event
	 * @private
	 */
	treemode._onEvent = function (event) {
	  if (event.type == 'keydown') {
	    this._onKeyDown(event);
	  }

	  if (event.type == 'focus') {
	    this.focusTarget = event.target;
	  }

	  if (event.type == 'mousedown') {
	    this._startDragDistance(event);
	  }
	  if (event.type == 'mousemove' || event.type == 'mouseup' || event.type == 'click') {
	    this._updateDragDistance(event);
	  }

	  var node = Node.getNodeFromTarget(event.target);

	  if (node && node.selected) {
	    if (event.type == 'click') {
	      if (event.target == node.dom.menu) {
	        this.showContextMenu(event.target);

	        // stop propagation (else we will open the context menu of a single node)
	        return;
	      }

	      // deselect a multi selection
	      if (!event.hasMoved) {
	        this.deselect();
	      }
	    }

	    if (event.type == 'mousedown') {
	      // drag multiple nodes
	      Node.onDragStart(this.multiselection.nodes, event);
	    }
	  }
	  else {
	    if (event.type == 'mousedown') {
	      this.deselect();

	      if (node && event.target == node.dom.drag) {
	        // drag a singe node
	        Node.onDragStart(node, event);
	      }
	      else if (!node || (event.target != node.dom.field && event.target != node.dom.value && event.target != node.dom.select)) {
	        // select multiple nodes
	        this._onMultiSelectStart(event);
	      }
	    }
	  }

	  if (node) {
	    node.onEvent(event);
	  }
	};

	treemode._startDragDistance = function (event) {
	  this.dragDistanceEvent = {
	    initialTarget: event.target,
	    initialPageX: event.pageX,
	    initialPageY: event.pageY,
	    dragDistance: 0,
	    hasMoved: false
	  };
	};

	treemode._updateDragDistance = function (event) {
	  if (!this.dragDistanceEvent) {
	    this._startDragDistance(event);
	  }

	  var diffX = event.pageX - this.dragDistanceEvent.initialPageX;
	  var diffY = event.pageY - this.dragDistanceEvent.initialPageY;

	  this.dragDistanceEvent.dragDistance = Math.sqrt(diffX * diffX + diffY * diffY);
	  this.dragDistanceEvent.hasMoved =
	      this.dragDistanceEvent.hasMoved || this.dragDistanceEvent.dragDistance > 10;

	  event.dragDistance = this.dragDistanceEvent.dragDistance;
	  event.hasMoved = this.dragDistanceEvent.hasMoved;

	  return event.dragDistance;
	};

	/**
	 * Start multi selection of nodes by dragging the mouse
	 * @param event
	 * @private
	 */
	treemode._onMultiSelectStart = function (event) {
	  var node = Node.getNodeFromTarget(event.target);

	  if (this.options.mode !== 'tree' || this.options.onEditable !== undefined) {
	    // dragging not allowed in modes 'view' and 'form'
	    // TODO: allow multiselection of items when option onEditable is specified
	    return;
	  }

	  this.multiselection = {
	    start: node || null,
	    end: null,
	    nodes: []
	  };

	  this._startDragDistance(event);

	  var editor = this;
	  if (!this.mousemove) {
	    this.mousemove = util.addEventListener(window, 'mousemove', function (event) {
	      editor._onMultiSelect(event);
	    });
	  }
	  if (!this.mouseup) {
	    this.mouseup = util.addEventListener(window, 'mouseup', function (event ) {
	      editor._onMultiSelectEnd(event);
	    });
	  }

	};

	/**
	 * Multiselect nodes by dragging
	 * @param event
	 * @private
	 */
	treemode._onMultiSelect = function (event) {
	  event.preventDefault();

	  this._updateDragDistance(event);
	  if (!event.hasMoved) {
	    return;
	  }

	  var node = Node.getNodeFromTarget(event.target);

	  if (node) {
	    if (this.multiselection.start == null) {
	      this.multiselection.start = node;
	    }
	    this.multiselection.end = node;
	  }

	  // deselect previous selection
	  this.deselect();

	  // find the selected nodes in the range from first to last
	  var start = this.multiselection.start;
	  var end = this.multiselection.end || this.multiselection.start;
	  if (start && end) {
	    // find the top level childs, all having the same parent
	    this.multiselection.nodes = this._findTopLevelNodes(start, end);
	    this.select(this.multiselection.nodes);
	  }
	};

	/**
	 * End of multiselect nodes by dragging
	 * @param event
	 * @private
	 */
	treemode._onMultiSelectEnd = function (event) {
	  // set focus to the context menu button of the first node
	  if (this.multiselection.nodes[0]) {
	    this.multiselection.nodes[0].dom.menu.focus();
	  }

	  this.multiselection.start = null;
	  this.multiselection.end = null;

	  // cleanup global event listeners
	  if (this.mousemove) {
	    util.removeEventListener(window, 'mousemove', this.mousemove);
	    delete this.mousemove;
	  }
	  if (this.mouseup) {
	    util.removeEventListener(window, 'mouseup', this.mouseup);
	    delete this.mouseup;
	  }
	};

	/**
	 * deselect currently selected nodes
	 * @param {boolean} [clearStartAndEnd=false]  If true, the `start` and `end`
	 *                                            state is cleared too.
	 */
	treemode.deselect = function (clearStartAndEnd) {
	  this.multiselection.nodes.forEach(function (node) {
	    node.setSelected(false);
	  });
	  this.multiselection.nodes = [];

	  if (clearStartAndEnd) {
	    this.multiselection.start = null;
	    this.multiselection.end = null;
	  }
	};

	/**
	 * select nodes
	 * @param {Node[] | Node} nodes
	 */
	treemode.select = function (nodes) {
	  if (!Array.isArray(nodes)) {
	    return this.select([nodes]);
	  }

	  if (nodes) {
	    this.deselect();

	    this.multiselection.nodes = nodes.slice(0);

	    var first = nodes[0];
	    nodes.forEach(function (node) {
	      node.setSelected(true, node === first);
	    });
	  }
	};

	/**
	 * From two arbitrary selected nodes, find their shared parent node.
	 * From that parent node, select the two child nodes in the brances going to
	 * nodes `start` and `end`, and select all childs in between.
	 * @param {Node} start
	 * @param {Node} end
	 * @return {Array.<Node>} Returns an ordered list with child nodes
	 * @private
	 */
	treemode._findTopLevelNodes = function (start, end) {
	  var startPath = start.getNodePath();
	  var endPath = end.getNodePath();
	  var i = 0;
	  while (i < startPath.length && startPath[i] === endPath[i]) {
	    i++;
	  }
	  var root = startPath[i - 1];
	  var startChild = startPath[i];
	  var endChild = endPath[i];

	  if (!startChild || !endChild) {
	    if (root.parent) {
	      // startChild is a parent of endChild or vice versa
	      startChild = root;
	      endChild = root;
	      root = root.parent
	    }
	    else {
	      // we have selected the root node (which doesn't have a parent)
	      startChild = root.childs[0];
	      endChild = root.childs[root.childs.length - 1];
	    }
	  }

	  if (root && startChild && endChild) {
	    var startIndex = root.childs.indexOf(startChild);
	    var endIndex = root.childs.indexOf(endChild);
	    var firstIndex = Math.min(startIndex, endIndex);
	    var lastIndex = Math.max(startIndex, endIndex);

	    return root.childs.slice(firstIndex, lastIndex + 1);
	  }
	  else {
	    return [];
	  }
	};

	/**
	 * Event handler for keydown. Handles shortcut keys
	 * @param {Event} event
	 * @private
	 */
	treemode._onKeyDown = function (event) {
	  var keynum = event.which || event.keyCode;
	  var ctrlKey = event.ctrlKey;
	  var shiftKey = event.shiftKey;
	  var handled = false;

	  if (keynum == 9) { // Tab or Shift+Tab
	    var me = this;
	    setTimeout(function () {
	      // select all text when moving focus to an editable div
	      util.selectContentEditable(me.focusTarget);
	    }, 0);
	  }

	  if (this.searchBox) {
	    if (ctrlKey && keynum == 70) { // Ctrl+F
	      this.searchBox.dom.search.focus();
	      this.searchBox.dom.search.select();
	      handled = true;
	    }
	    else if (keynum == 114 || (ctrlKey && keynum == 71)) { // F3 or Ctrl+G
	      var focus = true;
	      if (!shiftKey) {
	        // select next search result (F3 or Ctrl+G)
	        this.searchBox.next(focus);
	      }
	      else {
	        // select previous search result (Shift+F3 or Ctrl+Shift+G)
	        this.searchBox.previous(focus);
	      }

	      handled = true;
	    }
	  }

	  if (this.history) {
	    if (ctrlKey && !shiftKey && keynum == 90) { // Ctrl+Z
	      // undo
	      this._onUndo();
	      handled = true;
	    }
	    else if (ctrlKey && shiftKey && keynum == 90) { // Ctrl+Shift+Z
	      // redo
	      this._onRedo();
	      handled = true;
	    }
	  }

	  if (handled) {
	    event.preventDefault();
	    event.stopPropagation();
	  }
	};

	/**
	 * Create main table
	 * @private
	 */
	treemode._createTable = function () {
	  var contentOuter = document.createElement('div');
	  contentOuter.className = 'jsoneditor-outer';
	  this.contentOuter = contentOuter;

	  this.content = document.createElement('div');
	  this.content.className = 'jsoneditor-tree';
	  contentOuter.appendChild(this.content);

	  this.table = document.createElement('table');
	  this.table.className = 'jsoneditor-tree';
	  this.content.appendChild(this.table);

	  // create colgroup where the first two columns don't have a fixed
	  // width, and the edit columns do have a fixed width
	  var col;
	  this.colgroupContent = document.createElement('colgroup');
	  if (this.options.mode === 'tree') {
	    col = document.createElement('col');
	    col.width = "24px";
	    this.colgroupContent.appendChild(col);
	  }
	  col = document.createElement('col');
	  col.width = "24px";
	  this.colgroupContent.appendChild(col);
	  col = document.createElement('col');
	  this.colgroupContent.appendChild(col);
	  this.table.appendChild(this.colgroupContent);

	  this.tbody = document.createElement('tbody');
	  this.table.appendChild(this.tbody);

	  this.frame.appendChild(contentOuter);
	};

	/**
	 * Show a contextmenu for this node.
	 * Used for multiselection
	 * @param {HTMLElement} anchor   Anchor element to attache the context menu to.
	 * @param {function} [onClose]   Callback method called when the context menu
	 *                               is being closed.
	 */
	treemode.showContextMenu = function (anchor, onClose) {
	  var items = [];
	  var editor = this;

	  // create duplicate button
	  items.push({
	    text: 'Duplicate',
	    title: 'Duplicate selected fields (Ctrl+D)',
	    className: 'jsoneditor-duplicate',
	    click: function () {
	      Node.onDuplicate(editor.multiselection.nodes);
	    }
	  });

	  // create remove button
	  items.push({
	    text: 'Remove',
	    title: 'Remove selected fields (Ctrl+Del)',
	    className: 'jsoneditor-remove',
	    click: function () {
	      Node.onRemove(editor.multiselection.nodes);
	    }
	  });

	  var menu = new ContextMenu(items, {close: onClose});
	  menu.show(anchor, this.content);
	};


	// define modes
	module.exports = [
	  {
	    mode: 'tree',
	    mixin: treemode,
	    data: 'json'
	  },
	  {
	    mode: 'view',
	    mixin: treemode,
	    data: 'json'
	  },
	  {
	    mode: 'form',
	    mixin: treemode,
	    data: 'json'
	  }
	];


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * The highlighter can highlight/unhighlight a node, and
	 * animate the visibility of a context menu.
	 * @constructor Highlighter
	 */
	function Highlighter () {
	  this.locked = false;
	}

	/**
	 * Hightlight given node and its childs
	 * @param {Node} node
	 */
	Highlighter.prototype.highlight = function (node) {
	  if (this.locked) {
	    return;
	  }

	  if (this.node != node) {
	    // unhighlight current node
	    if (this.node) {
	      this.node.setHighlight(false);
	    }

	    // highlight new node
	    this.node = node;
	    this.node.setHighlight(true);
	  }

	  // cancel any current timeout
	  this._cancelUnhighlight();
	};

	/**
	 * Unhighlight currently highlighted node.
	 * Will be done after a delay
	 */
	Highlighter.prototype.unhighlight = function () {
	  if (this.locked) {
	    return;
	  }

	  var me = this;
	  if (this.node) {
	    this._cancelUnhighlight();

	    // do the unhighlighting after a small delay, to prevent re-highlighting
	    // the same node when moving from the drag-icon to the contextmenu-icon
	    // or vice versa.
	    this.unhighlightTimer = setTimeout(function () {
	      me.node.setHighlight(false);
	      me.node = undefined;
	      me.unhighlightTimer = undefined;
	    }, 0);
	  }
	};

	/**
	 * Cancel an unhighlight action (if before the timeout of the unhighlight action)
	 * @private
	 */
	Highlighter.prototype._cancelUnhighlight = function () {
	  if (this.unhighlightTimer) {
	    clearTimeout(this.unhighlightTimer);
	    this.unhighlightTimer = undefined;
	  }
	};

	/**
	 * Lock highlighting or unhighlighting nodes.
	 * methods highlight and unhighlight do not work while locked.
	 */
	Highlighter.prototype.lock = function () {
	  this.locked = true;
	};

	/**
	 * Unlock highlighting or unhighlighting nodes
	 */
	Highlighter.prototype.unlock = function () {
	  this.locked = false;
	};

	module.exports = Highlighter;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(4);

	/**
	 * @constructor History
	 * Store action history, enables undo and redo
	 * @param {JSONEditor} editor
	 */
	function History (editor) {
	  this.editor = editor;
	  this.history = [];
	  this.index = -1;

	  this.clear();

	  // map with all supported actions
	  this.actions = {
	    'editField': {
	      'undo': function (params) {
	        params.node.updateField(params.oldValue);
	      },
	      'redo': function (params) {
	        params.node.updateField(params.newValue);
	      }
	    },
	    'editValue': {
	      'undo': function (params) {
	        params.node.updateValue(params.oldValue);
	      },
	      'redo': function (params) {
	        params.node.updateValue(params.newValue);
	      }
	    },
	    'changeType': {
	      'undo': function (params) {
	        params.node.changeType(params.oldType);
	      },
	      'redo': function (params) {
	        params.node.changeType(params.newType);
	      }
	    },

	    'appendNodes': {
	      'undo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.removeChild(node);
	        });
	      },
	      'redo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.appendChild(node);
	        });
	      }
	    },
	    'insertBeforeNodes': {
	      'undo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.removeChild(node);
	        });
	      },
	      'redo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.insertBefore(node, params.beforeNode);
	        });
	      }
	    },
	    'insertAfterNodes': {
	      'undo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.removeChild(node);
	        });
	      },
	      'redo': function (params) {
	        var afterNode = params.afterNode;
	        params.nodes.forEach(function (node) {
	          params.parent.insertAfter(params.node, afterNode);
	          afterNode = node;
	        });
	      }
	    },
	    'removeNodes': {
	      'undo': function (params) {
	        var parent = params.parent;
	        var beforeNode = parent.childs[params.index] || parent.append;
	        params.nodes.forEach(function (node) {
	          parent.insertBefore(node, beforeNode);
	        });
	      },
	      'redo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.removeChild(node);
	        });
	      }
	    },
	    'duplicateNodes': {
	      'undo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.parent.removeChild(node);
	        });
	      },
	      'redo': function (params) {
	        var afterNode = params.afterNode;
	        params.nodes.forEach(function (node) {
	          params.parent.insertAfter(node, afterNode);
	          afterNode = node;
	        });
	      }
	    },
	    'moveNodes': {
	      'undo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.oldBeforeNode.parent.moveBefore(node, params.oldBeforeNode);
	        });
	      },
	      'redo': function (params) {
	        params.nodes.forEach(function (node) {
	          params.newBeforeNode.parent.moveBefore(node, params.newBeforeNode);
	        });
	      }
	    },

	    'sort': {
	      'undo': function (params) {
	        var node = params.node;
	        node.hideChilds();
	        node.sort = params.oldSort;
	        node.childs = params.oldChilds;
	        node.showChilds();
	      },
	      'redo': function (params) {
	        var node = params.node;
	        node.hideChilds();
	        node.sort = params.newSort;
	        node.childs = params.newChilds;
	        node.showChilds();
	      }
	    }

	    // TODO: restore the original caret position and selection with each undo
	    // TODO: implement history for actions "expand", "collapse", "scroll", "setDocument"
	  };
	}

	/**
	 * The method onChange is executed when the History is changed, and can
	 * be overloaded.
	 */
	History.prototype.onChange = function () {};

	/**
	 * Add a new action to the history
	 * @param {String} action  The executed action. Available actions: "editField",
	 *                         "editValue", "changeType", "appendNode",
	 *                         "removeNode", "duplicateNode", "moveNode"
	 * @param {Object} params  Object containing parameters describing the change.
	 *                         The parameters in params depend on the action (for
	 *                         example for "editValue" the Node, old value, and new
	 *                         value are provided). params contains all information
	 *                         needed to undo or redo the action.
	 */
	History.prototype.add = function (action, params) {
	  this.index++;
	  this.history[this.index] = {
	    'action': action,
	    'params': params,
	    'timestamp': new Date()
	  };

	  // remove redo actions which are invalid now
	  if (this.index < this.history.length - 1) {
	    this.history.splice(this.index + 1, this.history.length - this.index - 1);
	  }

	  // fire onchange event
	  this.onChange();
	};

	/**
	 * Clear history
	 */
	History.prototype.clear = function () {
	  this.history = [];
	  this.index = -1;

	  // fire onchange event
	  this.onChange();
	};

	/**
	 * Check if there is an action available for undo
	 * @return {Boolean} canUndo
	 */
	History.prototype.canUndo = function () {
	  return (this.index >= 0);
	};

	/**
	 * Check if there is an action available for redo
	 * @return {Boolean} canRedo
	 */
	History.prototype.canRedo = function () {
	  return (this.index < this.history.length - 1);
	};

	/**
	 * Undo the last action
	 */
	History.prototype.undo = function () {
	  if (this.canUndo()) {
	    var obj = this.history[this.index];
	    if (obj) {
	      var action = this.actions[obj.action];
	      if (action && action.undo) {
	        action.undo(obj.params);
	        if (obj.params.oldSelection) {
	          this.editor.setSelection(obj.params.oldSelection);
	        }
	      }
	      else {
	        console.error(new Error('unknown action "' + obj.action + '"'));
	      }
	    }
	    this.index--;

	    // fire onchange event
	    this.onChange();
	  }
	};

	/**
	 * Redo the last action
	 */
	History.prototype.redo = function () {
	  if (this.canRedo()) {
	    this.index++;

	    var obj = this.history[this.index];
	    if (obj) {
	      var action = this.actions[obj.action];
	      if (action && action.redo) {
	        action.redo(obj.params);
	        if (obj.params.newSelection) {
	          this.editor.setSelection(obj.params.newSelection);
	        }
	      }
	      else {
	        console.error(new Error('unknown action "' + obj.action + '"'));
	      }
	    }

	    // fire onchange event
	    this.onChange();
	  }
	};

	/**
	 * Destroy history
	 */
	History.prototype.destroy = function () {
	  this.editor = null;

	  this.history = [];
	  this.index = -1;
	};

	module.exports = History;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jsonlint = __webpack_require__(5);

	/**
	 * Parse JSON using the parser built-in in the browser.
	 * On exception, the jsonString is validated and a detailed error is thrown.
	 * @param {String} jsonString
	 * @return {JSON} json
	 */
	exports.parse = function parse(jsonString) {
	  try {
	    return JSON.parse(jsonString);
	  }
	  catch (err) {
	    // try to throw a more detailed error message using validate
	    exports.validate(jsonString);

	    // rethrow the original error
	    throw err;
	  }
	};

	/**
	 * Sanitize a JSON-like string containing. For example changes JavaScript
	 * notation into JSON notation.
	 * This function for example changes a string like "{a: 2, 'b': {c: 'd'}"
	 * into '{"a": 2, "b": {"c": "d"}'
	 * @param {string} jsString
	 * @returns {string} json
	 */
	exports.sanitize = function (jsString) {
	  // escape all single and double quotes inside strings
	  var chars = [];
	  var i = 0;

	  //If JSON starts with a function (characters/digits/"_-"), remove this function.
	  //This is useful for "stripping" JSONP objects to become JSON
	  //For example: /* some comment */ function_12321321 ( [{"a":"b"}] ); => [{"a":"b"}]
	  var match = jsString.match(/^\s*(\/\*(.|[\r\n])*?\*\/)?\s*[\da-zA-Z_$]+\s*\(([\s\S]*)\)\s*;?\s*$/);
	  if (match) {
	    jsString = match[3];
	  }

	  // helper functions to get the current/prev/next character
	  function curr () { return jsString.charAt(i);     }
	  function next()  { return jsString.charAt(i + 1); }
	  function prev()  { return jsString.charAt(i - 1); }

	  // get the last parsed non-whitespace character
	  function lastNonWhitespace () {
	    var p = chars.length - 1;

	    while (p >= 0) {
	      var pp = chars[p];
	      if (pp !== ' ' && pp !== '\n' && pp !== '\r' && pp !== '\t') { // non whitespace
	        return pp;
	      }
	      p--;
	    }

	    return '';
	  }

	  // skip a block comment '/* ... */'
	  function skipBlockComment () {
	    i += 2;
	    while (i < jsString.length && (curr() !== '*' || next() !== '/')) {
	      i++;
	    }
	    i += 2;
	  }

	  // skip a comment '// ...'
	  function skipComment () {
	    i += 2;
	    while (i < jsString.length && (curr() !== '\n')) {
	      i++;
	    }
	  }

	  // parse single or double quoted string
	  function parseString(quote) {
	    chars.push('"');
	    i++;
	    var c = curr();
	    while (i < jsString.length && c !== quote) {
	      if (c === '"' && prev() !== '\\') {
	        // unescaped double quote, escape it
	        chars.push('\\');
	      }

	      // handle escape character
	      if (c === '\\') {
	        i++;
	        c = curr();

	        // remove the escape character when followed by a single quote ', not needed
	        if (c !== '\'') {
	          chars.push('\\');
	        }
	      }
	      chars.push(c);

	      i++;
	      c = curr();
	    }
	    if (c === quote) {
	      chars.push('"');
	      i++;
	    }
	  }

	  // parse an unquoted key
	  function parseKey() {
	    var specialValues = ['null', 'true', 'false'];
	    var key = '';
	    var c = curr();

	    var regexp = /[a-zA-Z_$\d]/; // letter, number, underscore, dollar character
	    while (regexp.test(c)) {
	      key += c;
	      i++;
	      c = curr();
	    }

	    if (specialValues.indexOf(key) === -1) {
	      chars.push('"' + key + '"');
	    }
	    else {
	      chars.push(key);
	    }
	  }

	  while(i < jsString.length) {
	    var c = curr();

	    if (c === '/' && next() === '*') {
	      skipBlockComment();
	    }
	    else if (c === '/' && next() === '/') {
	      skipComment();
	    }
	    else if (c === '\'' || c === '"') {
	      parseString(c);
	    }
	    else if (/[a-zA-Z_$]/.test(c) && ['{', ','].indexOf(lastNonWhitespace()) !== -1) {
	      // an unquoted object key (like a in '{a:2}')
	      parseKey();
	    }
	    else {
	      chars.push(c);
	      i++;
	    }
	  }

	  return chars.join('');
	};

	/**
	 * Escape unicode characters.
	 * For example input '\u2661' (length 1) will output '\\u2661' (length 5).
	 * @param {string} text
	 * @return {string}
	 */
	exports.escapeUnicodeChars = function (text) {
	  // see https://www.wikiwand.com/en/UTF-16
	  // note: we leave surrogate pairs as two individual chars,
	  // as JSON doesn't interpret them as a single unicode char.
	  return text.replace(/[\u007F-\uFFFF]/g, function(c) {
	    return '\\u'+('0000' + c.charCodeAt(0).toString(16)).slice(-4);
	  })
	};

	/**
	 * Validate a string containing a JSON object
	 * This method uses JSONLint to validate the String. If JSONLint is not
	 * available, the built-in JSON parser of the browser is used.
	 * @param {String} jsonString   String with an (invalid) JSON object
	 * @throws Error
	 */
	exports.validate = function validate(jsonString) {
	  if (typeof(jsonlint) != 'undefined') {
	    jsonlint.parse(jsonString);
	  }
	  else {
	    JSON.parse(jsonString);
	  }
	};

	/**
	 * Extend object a with the properties of object b
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 */
	exports.extend = function extend(a, b) {
	  for (var prop in b) {
	    if (b.hasOwnProperty(prop)) {
	      a[prop] = b[prop];
	    }
	  }
	  return a;
	};

	/**
	 * Remove all properties from object a
	 * @param {Object} a
	 * @return {Object} a
	 */
	exports.clear = function clear (a) {
	  for (var prop in a) {
	    if (a.hasOwnProperty(prop)) {
	      delete a[prop];
	    }
	  }
	  return a;
	};

	/**
	 * Get the type of an object
	 * @param {*} object
	 * @return {String} type
	 */
	exports.type = function type (object) {
	  if (object === null) {
	    return 'null';
	  }
	  if (object === undefined) {
	    return 'undefined';
	  }
	  if ((object instanceof Number) || (typeof object === 'number')) {
	    return 'number';
	  }
	  if ((object instanceof String) || (typeof object === 'string')) {
	    return 'string';
	  }
	  if ((object instanceof Boolean) || (typeof object === 'boolean')) {
	    return 'boolean';
	  }
	  if ((object instanceof RegExp) || (typeof object === 'regexp')) {
	    return 'regexp';
	  }
	  if (exports.isArray(object)) {
	    return 'array';
	  }

	  return 'object';
	};

	/**
	 * Test whether a text contains a url (matches when a string starts
	 * with 'http://*' or 'https://*' and has no whitespace characters)
	 * @param {String} text
	 */
	var isUrlRegex = /^https?:\/\/\S+$/;
	exports.isUrl = function isUrl (text) {
	  return (typeof text == 'string' || text instanceof String) &&
	      isUrlRegex.test(text);
	};

	/**
	 * Tes whether given object is an Array
	 * @param {*} obj
	 * @returns {boolean} returns true when obj is an array
	 */
	exports.isArray = function (obj) {
	  return Object.prototype.toString.call(obj) === '[object Array]';
	};

	/**
	 * Retrieve the absolute left value of a DOM element
	 * @param {Element} elem    A dom element, for example a div
	 * @return {Number} left    The absolute left position of this element
	 *                          in the browser page.
	 */
	exports.getAbsoluteLeft = function getAbsoluteLeft(elem) {
	  var rect = elem.getBoundingClientRect();
	  return rect.left + window.pageXOffset || document.scrollLeft || 0;
	};

	/**
	 * Retrieve the absolute top value of a DOM element
	 * @param {Element} elem    A dom element, for example a div
	 * @return {Number} top     The absolute top position of this element
	 *                          in the browser page.
	 */
	exports.getAbsoluteTop = function getAbsoluteTop(elem) {
	  var rect = elem.getBoundingClientRect();
	  return rect.top + window.pageYOffset || document.scrollTop || 0;
	};

	/**
	 * add a className to the given elements style
	 * @param {Element} elem
	 * @param {String} className
	 */
	exports.addClassName = function addClassName(elem, className) {
	  var classes = elem.className.split(' ');
	  if (classes.indexOf(className) == -1) {
	    classes.push(className); // add the class to the array
	    elem.className = classes.join(' ');
	  }
	};

	/**
	 * add a className to the given elements style
	 * @param {Element} elem
	 * @param {String} className
	 */
	exports.removeClassName = function removeClassName(elem, className) {
	  var classes = elem.className.split(' ');
	  var index = classes.indexOf(className);
	  if (index != -1) {
	    classes.splice(index, 1); // remove the class from the array
	    elem.className = classes.join(' ');
	  }
	};

	/**
	 * Strip the formatting from the contents of a div
	 * the formatting from the div itself is not stripped, only from its childs.
	 * @param {Element} divElement
	 */
	exports.stripFormatting = function stripFormatting(divElement) {
	  var childs = divElement.childNodes;
	  for (var i = 0, iMax = childs.length; i < iMax; i++) {
	    var child = childs[i];

	    // remove the style
	    if (child.style) {
	      // TODO: test if child.attributes does contain style
	      child.removeAttribute('style');
	    }

	    // remove all attributes
	    var attributes = child.attributes;
	    if (attributes) {
	      for (var j = attributes.length - 1; j >= 0; j--) {
	        var attribute = attributes[j];
	        if (attribute.specified === true) {
	          child.removeAttribute(attribute.name);
	        }
	      }
	    }

	    // recursively strip childs
	    exports.stripFormatting(child);
	  }
	};

	/**
	 * Set focus to the end of an editable div
	 * code from Nico Burns
	 * http://stackoverflow.com/users/140293/nico-burns
	 * http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
	 * @param {Element} contentEditableElement   A content editable div
	 */
	exports.setEndOfContentEditable = function setEndOfContentEditable(contentEditableElement) {
	  var range, selection;
	  if(document.createRange) {
	    range = document.createRange();//Create a range (a range is a like the selection but invisible)
	    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
	    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
	    selection = window.getSelection();//get the selection object (allows you to change selection)
	    selection.removeAllRanges();//remove any selections already made
	    selection.addRange(range);//make the range you have just created the visible selection
	  }
	};

	/**
	 * Select all text of a content editable div.
	 * http://stackoverflow.com/a/3806004/1262753
	 * @param {Element} contentEditableElement   A content editable div
	 */
	exports.selectContentEditable = function selectContentEditable(contentEditableElement) {
	  if (!contentEditableElement || contentEditableElement.nodeName != 'DIV') {
	    return;
	  }

	  var sel, range;
	  if (window.getSelection && document.createRange) {
	    range = document.createRange();
	    range.selectNodeContents(contentEditableElement);
	    sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	  }
	};

	/**
	 * Get text selection
	 * http://stackoverflow.com/questions/4687808/contenteditable-selected-text-save-and-restore
	 * @return {Range | TextRange | null} range
	 */
	exports.getSelection = function getSelection() {
	  if (window.getSelection) {
	    var sel = window.getSelection();
	    if (sel.getRangeAt && sel.rangeCount) {
	      return sel.getRangeAt(0);
	    }
	  }
	  return null;
	};

	/**
	 * Set text selection
	 * http://stackoverflow.com/questions/4687808/contenteditable-selected-text-save-and-restore
	 * @param {Range | TextRange | null} range
	 */
	exports.setSelection = function setSelection(range) {
	  if (range) {
	    if (window.getSelection) {
	      var sel = window.getSelection();
	      sel.removeAllRanges();
	      sel.addRange(range);
	    }
	  }
	};

	/**
	 * Get selected text range
	 * @return {Object} params  object containing parameters:
	 *                              {Number}  startOffset
	 *                              {Number}  endOffset
	 *                              {Element} container  HTML element holding the
	 *                                                   selected text element
	 *                          Returns null if no text selection is found
	 */
	exports.getSelectionOffset = function getSelectionOffset() {
	  var range = exports.getSelection();

	  if (range && 'startOffset' in range && 'endOffset' in range &&
	      range.startContainer && (range.startContainer == range.endContainer)) {
	    return {
	      startOffset: range.startOffset,
	      endOffset: range.endOffset,
	      container: range.startContainer.parentNode
	    };
	  }

	  return null;
	};

	/**
	 * Set selected text range in given element
	 * @param {Object} params   An object containing:
	 *                              {Element} container
	 *                              {Number} startOffset
	 *                              {Number} endOffset
	 */
	exports.setSelectionOffset = function setSelectionOffset(params) {
	  if (document.createRange && window.getSelection) {
	    var selection = window.getSelection();
	    if(selection) {
	      var range = document.createRange();

	      if (!params.container.firstChild) {
	        params.container.appendChild(document.createTextNode(''));
	      }

	      // TODO: do not suppose that the first child of the container is a textnode,
	      //       but recursively find the textnodes
	      range.setStart(params.container.firstChild, params.startOffset);
	      range.setEnd(params.container.firstChild, params.endOffset);

	      exports.setSelection(range);
	    }
	  }
	};

	/**
	 * Get the inner text of an HTML element (for example a div element)
	 * @param {Element} element
	 * @param {Object} [buffer]
	 * @return {String} innerText
	 */
	exports.getInnerText = function getInnerText(element, buffer) {
	  var first = (buffer == undefined);
	  if (first) {
	    buffer = {
	      'text': '',
	      'flush': function () {
	        var text = this.text;
	        this.text = '';
	        return text;
	      },
	      'set': function (text) {
	        this.text = text;
	      }
	    };
	  }

	  // text node
	  if (element.nodeValue) {
	    return buffer.flush() + element.nodeValue;
	  }

	  // divs or other HTML elements
	  if (element.hasChildNodes()) {
	    var childNodes = element.childNodes;
	    var innerText = '';

	    for (var i = 0, iMax = childNodes.length; i < iMax; i++) {
	      var child = childNodes[i];

	      if (child.nodeName == 'DIV' || child.nodeName == 'P') {
	        var prevChild = childNodes[i - 1];
	        var prevName = prevChild ? prevChild.nodeName : undefined;
	        if (prevName && prevName != 'DIV' && prevName != 'P' && prevName != 'BR') {
	          innerText += '\n';
	          buffer.flush();
	        }
	        innerText += exports.getInnerText(child, buffer);
	        buffer.set('\n');
	      }
	      else if (child.nodeName == 'BR') {
	        innerText += buffer.flush();
	        buffer.set('\n');
	      }
	      else {
	        innerText += exports.getInnerText(child, buffer);
	      }
	    }

	    return innerText;
	  }
	  else {
	    if (element.nodeName == 'P' && exports.getInternetExplorerVersion() != -1) {
	      // On Internet Explorer, a <p> with hasChildNodes()==false is
	      // rendered with a new line. Note that a <p> with
	      // hasChildNodes()==true is rendered without a new line
	      // Other browsers always ensure there is a <br> inside the <p>,
	      // and if not, the <p> does not render a new line
	      return buffer.flush();
	    }
	  }

	  // br or unknown
	  return '';
	};

	/**
	 * Returns the version of Internet Explorer or a -1
	 * (indicating the use of another browser).
	 * Source: http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
	 * @return {Number} Internet Explorer version, or -1 in case of an other browser
	 */
	exports.getInternetExplorerVersion = function getInternetExplorerVersion() {
	  if (_ieVersion == -1) {
	    var rv = -1; // Return value assumes failure.
	    if (navigator.appName == 'Microsoft Internet Explorer')
	    {
	      var ua = navigator.userAgent;
	      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	      if (re.exec(ua) != null) {
	        rv = parseFloat( RegExp.$1 );
	      }
	    }

	    _ieVersion = rv;
	  }

	  return _ieVersion;
	};

	/**
	 * Test whether the current browser is Firefox
	 * @returns {boolean} isFirefox
	 */
	exports.isFirefox = function isFirefox () {
	  return (navigator.userAgent.indexOf("Firefox") != -1);
	};

	/**
	 * cached internet explorer version
	 * @type {Number}
	 * @private
	 */
	var _ieVersion = -1;

	/**
	 * Add and event listener. Works for all browsers
	 * @param {Element}     element    An html element
	 * @param {string}      action     The action, for example "click",
	 *                                 without the prefix "on"
	 * @param {function}    listener   The callback function to be executed
	 * @param {boolean}     [useCapture] false by default
	 * @return {function}   the created event listener
	 */
	exports.addEventListener = function addEventListener(element, action, listener, useCapture) {
	  if (element.addEventListener) {
	    if (useCapture === undefined)
	      useCapture = false;

	    if (action === "mousewheel" && exports.isFirefox()) {
	      action = "DOMMouseScroll";  // For Firefox
	    }

	    element.addEventListener(action, listener, useCapture);
	    return listener;
	  } else if (element.attachEvent) {
	    // Old IE browsers
	    var f = function () {
	      return listener.call(element, window.event);
	    };
	    element.attachEvent("on" + action, f);
	    return f;
	  }
	};

	/**
	 * Remove an event listener from an element
	 * @param {Element}  element   An html dom element
	 * @param {string}   action    The name of the event, for example "mousedown"
	 * @param {function} listener  The listener function
	 * @param {boolean}  [useCapture]   false by default
	 */
	exports.removeEventListener = function removeEventListener(element, action, listener, useCapture) {
	  if (element.removeEventListener) {
	    if (useCapture === undefined)
	      useCapture = false;

	    if (action === "mousewheel" && exports.isFirefox()) {
	      action = "DOMMouseScroll";  // For Firefox
	    }

	    element.removeEventListener(action, listener, useCapture);
	  } else if (element.detachEvent) {
	    // Old IE browsers
	    element.detachEvent("on" + action, listener);
	  }
	};

	/**
	 * Parse a JSON path like '.items[3].name' into an array
	 * @param {string} jsonPath
	 * @return {Array}
	 */
	exports.parsePath = function parsePath(jsonPath) {
	  var prop, remainder;

	  if (jsonPath.length === 0) {
	    return [];
	  }

	  // find a match like '.prop'
	  var match = jsonPath.match(/^\.(\w+)/);
	  if (match) {
	    prop = match[1];
	    remainder = jsonPath.substr(prop.length + 1);
	  }
	  else if (jsonPath[0] === '[') {
	    // find a match like
	    var end = jsonPath.indexOf(']');
	    if (end === -1) {
	      throw new SyntaxError('Character ] expected in path');
	    }
	    if (end === 1) {
	      throw new SyntaxError('Index expected after [');
	    }

	    var value = jsonPath.substring(1, end);
	    if (value[0] === '\'') {
	      // ajv produces string prop names with single quotes, so we need
	      // to reformat them into valid double-quoted JSON strings
	      value = '\"' + value.substring(1, value.length - 1) + '\"';
	    }

	    prop = value === '*' ? value : JSON.parse(value); // parse string and number
	    remainder = jsonPath.substr(end + 1);
	  }
	  else {
	    throw new SyntaxError('Failed to parse path');
	  }

	  return [prop].concat(parsePath(remainder))
	};

	/**
	 * Improve the error message of a JSON schema error
	 * @param {Object} error
	 * @return {Object} The error
	 */
	exports.improveSchemaError = function (error) {
	  if (error.keyword === 'enum' && Array.isArray(error.schema)) {
	    var enums = error.schema;
	    if (enums) {
	      enums = enums.map(function (value) {
	        return JSON.stringify(value);
	      });

	      if (enums.length > 5) {
	        var more = ['(' + (enums.length - 5) + ' more...)'];
	        enums = enums.slice(0, 5);
	        enums.push(more);
	      }
	      error.message = 'should be equal to one of: ' + enums.join(', ');
	    }
	  }

	  if (error.keyword === 'additionalProperties') {
	    error.message = 'should NOT have additional property: ' + error.params.additionalProperty;
	  }

	  return error;
	};

	/**
	 * Test whether the child rect fits completely inside the parent rect.
	 * @param {ClientRect} parent
	 * @param {ClientRect} child
	 * @param {number} margin
	 */
	exports.insideRect = function (parent, child, margin) {
	  var _margin = margin !== undefined ? margin : 0;
	  return child.left   - _margin >= parent.left
	      && child.right  + _margin <= parent.right
	      && child.top    - _margin >= parent.top
	      && child.bottom + _margin <= parent.bottom;
	};

	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds.
	 *
	 * Source: https://davidwalsh.name/javascript-debounce-function
	 *
	 * @param {function} func
	 * @param {number} wait                 Number in milliseconds
	 * @param {boolean} [immediate=false]   If `immediate` is passed, trigger the
	 *                                      function on the leading edge, instead
	 *                                      of the trailing.
	 * @return {function} Return the debounced function
	 */
	exports.debounce = function debounce(func, wait, immediate) {
	  var timeout;
	  return function() {
	    var context = this, args = arguments;
	    var later = function() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	};

	/**
	 * Determines the difference between two texts.
	 * Can only detect one removed or inserted block of characters.
	 * @param {string} oldText
	 * @param {string} newText
	 * @return {{start: number, end: number}} Returns the start and end
	 *                                        of the changed part in newText.
	 */
	exports.textDiff = function textDiff(oldText, newText) {
	  var len = newText.length;
	  var start = 0;
	  var oldEnd = oldText.length;
	  var newEnd = newText.length;

	  while (newText.charAt(start) === oldText.charAt(start)
	  && start < len) {
	    start++;
	  }

	  while (newText.charAt(newEnd - 1) === oldText.charAt(oldEnd - 1)
	  && newEnd > start && oldEnd > 0) {
	    newEnd--;
	    oldEnd--;
	  }

	  return {start: start, end: newEnd};
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* Jison generated parser */
	var jsonlint = (function(){
	var parser = {trace: function trace() { },
	yy: {},
	symbols_: {"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},
	terminals_: {2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},
	productions_: [0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],
	performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

	var $0 = $$.length - 1;
	switch (yystate) {
	case 1: // replace escaped characters with actual character
	          this.$ = yytext.replace(/\\(\\|")/g, "$"+"1")
	                     .replace(/\\n/g,'\n')
	                     .replace(/\\r/g,'\r')
	                     .replace(/\\t/g,'\t')
	                     .replace(/\\v/g,'\v')
	                     .replace(/\\f/g,'\f')
	                     .replace(/\\b/g,'\b');
	        
	break;
	case 2:this.$ = Number(yytext);
	break;
	case 3:this.$ = null;
	break;
	case 4:this.$ = true;
	break;
	case 5:this.$ = false;
	break;
	case 6:return this.$ = $$[$0-1];
	break;
	case 13:this.$ = {};
	break;
	case 14:this.$ = $$[$0-1];
	break;
	case 15:this.$ = [$$[$0-2], $$[$0]];
	break;
	case 16:this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
	break;
	case 17:this.$ = $$[$0-2]; $$[$0-2][$$[$0][0]] = $$[$0][1];
	break;
	case 18:this.$ = [];
	break;
	case 19:this.$ = $$[$0-1];
	break;
	case 20:this.$ = [$$[$0]];
	break;
	case 21:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
	break;
	}
	},
	table: [{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],
	defaultActions: {16:[2,6]},
	parseError: function parseError(str, hash) {
	    throw new Error(str);
	},
	parse: function parse(input) {
	    var self = this,
	        stack = [0],
	        vstack = [null], // semantic value stack
	        lstack = [], // location stack
	        table = this.table,
	        yytext = '',
	        yylineno = 0,
	        yyleng = 0,
	        recovering = 0,
	        TERROR = 2,
	        EOF = 1;

	    //this.reductionCount = this.shiftCount = 0;

	    this.lexer.setInput(input);
	    this.lexer.yy = this.yy;
	    this.yy.lexer = this.lexer;
	    if (typeof this.lexer.yylloc == 'undefined')
	        this.lexer.yylloc = {};
	    var yyloc = this.lexer.yylloc;
	    lstack.push(yyloc);

	    if (typeof this.yy.parseError === 'function')
	        this.parseError = this.yy.parseError;

	    function popStack (n) {
	        stack.length = stack.length - 2*n;
	        vstack.length = vstack.length - n;
	        lstack.length = lstack.length - n;
	    }

	    function lex() {
	        var token;
	        token = self.lexer.lex() || 1; // $end = 1
	        // if token isn't its numeric value, convert
	        if (typeof token !== 'number') {
	            token = self.symbols_[token] || token;
	        }
	        return token;
	    }

	    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
	    while (true) {
	        // retreive state number from top of stack
	        state = stack[stack.length-1];

	        // use default actions if available
	        if (this.defaultActions[state]) {
	            action = this.defaultActions[state];
	        } else {
	            if (symbol == null)
	                symbol = lex();
	            // read action for current state and first input
	            action = table[state] && table[state][symbol];
	        }

	        // handle parse error
	        _handle_error:
	        if (typeof action === 'undefined' || !action.length || !action[0]) {

	            if (!recovering) {
	                // Report error
	                expected = [];
	                for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                    expected.push("'"+this.terminals_[p]+"'");
	                }
	                var errStr = '';
	                if (this.lexer.showPosition) {
	                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
	                } else {
	                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
	                                  (symbol == 1 /*EOF*/ ? "end of input" :
	                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
	                }
	                this.parseError(errStr,
	                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
	            }

	            // just recovered from another error
	            if (recovering == 3) {
	                if (symbol == EOF) {
	                    throw new Error(errStr || 'Parsing halted.');
	                }

	                // discard current lookahead and grab another
	                yyleng = this.lexer.yyleng;
	                yytext = this.lexer.yytext;
	                yylineno = this.lexer.yylineno;
	                yyloc = this.lexer.yylloc;
	                symbol = lex();
	            }

	            // try to recover from error
	            while (1) {
	                // check for error recovery rule in this state
	                if ((TERROR.toString()) in table[state]) {
	                    break;
	                }
	                if (state == 0) {
	                    throw new Error(errStr || 'Parsing halted.');
	                }
	                popStack(1);
	                state = stack[stack.length-1];
	            }

	            preErrorSymbol = symbol; // save the lookahead token
	            symbol = TERROR;         // insert generic error symbol as new lookahead
	            state = stack[stack.length-1];
	            action = table[state] && table[state][TERROR];
	            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
	        }

	        // this shouldn't happen, unless resolve defaults are off
	        if (action[0] instanceof Array && action.length > 1) {
	            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
	        }

	        switch (action[0]) {

	            case 1: // shift
	                //this.shiftCount++;

	                stack.push(symbol);
	                vstack.push(this.lexer.yytext);
	                lstack.push(this.lexer.yylloc);
	                stack.push(action[1]); // push state
	                symbol = null;
	                if (!preErrorSymbol) { // normal execution/no error
	                    yyleng = this.lexer.yyleng;
	                    yytext = this.lexer.yytext;
	                    yylineno = this.lexer.yylineno;
	                    yyloc = this.lexer.yylloc;
	                    if (recovering > 0)
	                        recovering--;
	                } else { // error just occurred, resume old lookahead f/ before error
	                    symbol = preErrorSymbol;
	                    preErrorSymbol = null;
	                }
	                break;

	            case 2: // reduce
	                //this.reductionCount++;

	                len = this.productions_[action[1]][1];

	                // perform semantic action
	                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
	                // default location, uses first token for firsts, last for lasts
	                yyval._$ = {
	                    first_line: lstack[lstack.length-(len||1)].first_line,
	                    last_line: lstack[lstack.length-1].last_line,
	                    first_column: lstack[lstack.length-(len||1)].first_column,
	                    last_column: lstack[lstack.length-1].last_column
	                };
	                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

	                if (typeof r !== 'undefined') {
	                    return r;
	                }

	                // pop off stack
	                if (len) {
	                    stack = stack.slice(0,-1*len*2);
	                    vstack = vstack.slice(0, -1*len);
	                    lstack = lstack.slice(0, -1*len);
	                }

	                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
	                vstack.push(yyval.$);
	                lstack.push(yyval._$);
	                // goto new state = table[STATE][NONTERMINAL]
	                newState = table[stack[stack.length-2]][stack[stack.length-1]];
	                stack.push(newState);
	                break;

	            case 3: // accept
	                return true;
	        }

	    }

	    return true;
	}};
	/* Jison generated lexer */
	var lexer = (function(){
	var lexer = ({EOF:1,
	parseError:function parseError(str, hash) {
	        if (this.yy.parseError) {
	            this.yy.parseError(str, hash);
	        } else {
	            throw new Error(str);
	        }
	    },
	setInput:function (input) {
	        this._input = input;
	        this._more = this._less = this.done = false;
	        this.yylineno = this.yyleng = 0;
	        this.yytext = this.matched = this.match = '';
	        this.conditionStack = ['INITIAL'];
	        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
	        return this;
	    },
	input:function () {
	        var ch = this._input[0];
	        this.yytext+=ch;
	        this.yyleng++;
	        this.match+=ch;
	        this.matched+=ch;
	        var lines = ch.match(/\n/);
	        if (lines) this.yylineno++;
	        this._input = this._input.slice(1);
	        return ch;
	    },
	unput:function (ch) {
	        this._input = ch + this._input;
	        return this;
	    },
	more:function () {
	        this._more = true;
	        return this;
	    },
	less:function (n) {
	        this._input = this.match.slice(n) + this._input;
	    },
	pastInput:function () {
	        var past = this.matched.substr(0, this.matched.length - this.match.length);
	        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
	    },
	upcomingInput:function () {
	        var next = this.match;
	        if (next.length < 20) {
	            next += this._input.substr(0, 20-next.length);
	        }
	        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
	    },
	showPosition:function () {
	        var pre = this.pastInput();
	        var c = new Array(pre.length + 1).join("-");
	        return pre + this.upcomingInput() + "\n" + c+"^";
	    },
	next:function () {
	        if (this.done) {
	            return this.EOF;
	        }
	        if (!this._input) this.done = true;

	        var token,
	            match,
	            tempMatch,
	            index,
	            col,
	            lines;
	        if (!this._more) {
	            this.yytext = '';
	            this.match = '';
	        }
	        var rules = this._currentRules();
	        for (var i=0;i < rules.length; i++) {
	            tempMatch = this._input.match(this.rules[rules[i]]);
	            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                match = tempMatch;
	                index = i;
	                if (!this.options.flex) break;
	            }
	        }
	        if (match) {
	            lines = match[0].match(/\n.*/g);
	            if (lines) this.yylineno += lines.length;
	            this.yylloc = {first_line: this.yylloc.last_line,
	                           last_line: this.yylineno+1,
	                           first_column: this.yylloc.last_column,
	                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
	            this.yytext += match[0];
	            this.match += match[0];
	            this.yyleng = this.yytext.length;
	            this._more = false;
	            this._input = this._input.slice(match[0].length);
	            this.matched += match[0];
	            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
	            if (this.done && this._input) this.done = false;
	            if (token) return token;
	            else return;
	        }
	        if (this._input === "") {
	            return this.EOF;
	        } else {
	            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
	                    {text: "", token: null, line: this.yylineno});
	        }
	    },
	lex:function lex() {
	        var r = this.next();
	        if (typeof r !== 'undefined') {
	            return r;
	        } else {
	            return this.lex();
	        }
	    },
	begin:function begin(condition) {
	        this.conditionStack.push(condition);
	    },
	popState:function popState() {
	        return this.conditionStack.pop();
	    },
	_currentRules:function _currentRules() {
	        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
	    },
	topState:function () {
	        return this.conditionStack[this.conditionStack.length-2];
	    },
	pushState:function begin(condition) {
	        this.begin(condition);
	    }});
	lexer.options = {};
	lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

	var YYSTATE=YY_START
	switch($avoiding_name_collisions) {
	case 0:/* skip whitespace */
	break;
	case 1:return 6
	break;
	case 2:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 4
	break;
	case 3:return 17
	break;
	case 4:return 18
	break;
	case 5:return 23
	break;
	case 6:return 24
	break;
	case 7:return 22
	break;
	case 8:return 21
	break;
	case 9:return 10
	break;
	case 10:return 11
	break;
	case 11:return 8
	break;
	case 12:return 14
	break;
	case 13:return 'INVALID'
	break;
	}
	};
	lexer.rules = [/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/];
	lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}};


	;
	return lexer;})()
	parser.lexer = lexer;
	return parser;
	})();
	if (true) {
	  exports.parser = jsonlint;
	  exports.parse = jsonlint.parse.bind(jsonlint);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @constructor SearchBox
	 * Create a search box in given HTML container
	 * @param {JSONEditor} editor    The JSON Editor to attach to
	 * @param {Element} container               HTML container element of where to
	 *                                          create the search box
	 */
	function SearchBox (editor, container) {
	  var searchBox = this;

	  this.editor = editor;
	  this.timeout = undefined;
	  this.delay = 200; // ms
	  this.lastText = undefined;

	  this.dom = {};
	  this.dom.container = container;

	  var table = document.createElement('table');
	  this.dom.table = table;
	  table.className = 'jsoneditor-search';
	  container.appendChild(table);
	  var tbody = document.createElement('tbody');
	  this.dom.tbody = tbody;
	  table.appendChild(tbody);
	  var tr = document.createElement('tr');
	  tbody.appendChild(tr);

	  var td = document.createElement('td');
	  tr.appendChild(td);
	  var results = document.createElement('div');
	  this.dom.results = results;
	  results.className = 'jsoneditor-results';
	  td.appendChild(results);

	  td = document.createElement('td');
	  tr.appendChild(td);
	  var divInput = document.createElement('div');
	  this.dom.input = divInput;
	  divInput.className = 'jsoneditor-frame';
	  divInput.title = 'Search fields and values';
	  td.appendChild(divInput);

	  // table to contain the text input and search button
	  var tableInput = document.createElement('table');
	  divInput.appendChild(tableInput);
	  var tbodySearch = document.createElement('tbody');
	  tableInput.appendChild(tbodySearch);
	  tr = document.createElement('tr');
	  tbodySearch.appendChild(tr);

	  var refreshSearch = document.createElement('button');
	  refreshSearch.type = 'button';
	  refreshSearch.className = 'jsoneditor-refresh';
	  td = document.createElement('td');
	  td.appendChild(refreshSearch);
	  tr.appendChild(td);

	  var search = document.createElement('input');
	  // search.type = 'button';
	  this.dom.search = search;
	  search.oninput = function (event) {
	    searchBox._onDelayedSearch(event);
	  };
	  search.onchange = function (event) { // For IE 9
	    searchBox._onSearch();
	  };
	  search.onkeydown = function (event) {
	    searchBox._onKeyDown(event);
	  };
	  search.onkeyup = function (event) {
	    searchBox._onKeyUp(event);
	  };
	  refreshSearch.onclick = function (event) {
	    search.select();
	  };

	  // TODO: ESC in FF restores the last input, is a FF bug, https://bugzilla.mozilla.org/show_bug.cgi?id=598819
	  td = document.createElement('td');
	  td.appendChild(search);
	  tr.appendChild(td);

	  var searchNext = document.createElement('button');
	  searchNext.type = 'button';
	  searchNext.title = 'Next result (Enter)';
	  searchNext.className = 'jsoneditor-next';
	  searchNext.onclick = function () {
	    searchBox.next();
	  };
	  td = document.createElement('td');
	  td.appendChild(searchNext);
	  tr.appendChild(td);

	  var searchPrevious = document.createElement('button');
	  searchPrevious.type = 'button';
	  searchPrevious.title = 'Previous result (Shift+Enter)';
	  searchPrevious.className = 'jsoneditor-previous';
	  searchPrevious.onclick = function () {
	    searchBox.previous();
	  };
	  td = document.createElement('td');
	  td.appendChild(searchPrevious);
	  tr.appendChild(td);
	}

	/**
	 * Go to the next search result
	 * @param {boolean} [focus]   If true, focus will be set to the next result
	 *                            focus is false by default.
	 */
	SearchBox.prototype.next = function(focus) {
	  if (this.results != undefined) {
	    var index = (this.resultIndex != undefined) ? this.resultIndex + 1 : 0;
	    if (index > this.results.length - 1) {
	      index = 0;
	    }
	    this._setActiveResult(index, focus);
	  }
	};

	/**
	 * Go to the prevous search result
	 * @param {boolean} [focus]   If true, focus will be set to the next result
	 *                            focus is false by default.
	 */
	SearchBox.prototype.previous = function(focus) {
	  if (this.results != undefined) {
	    var max = this.results.length - 1;
	    var index = (this.resultIndex != undefined) ? this.resultIndex - 1 : max;
	    if (index < 0) {
	      index = max;
	    }
	    this._setActiveResult(index, focus);
	  }
	};

	/**
	 * Set new value for the current active result
	 * @param {Number} index
	 * @param {boolean} [focus]   If true, focus will be set to the next result.
	 *                            focus is false by default.
	 * @private
	 */
	SearchBox.prototype._setActiveResult = function(index, focus) {
	  // de-activate current active result
	  if (this.activeResult) {
	    var prevNode = this.activeResult.node;
	    var prevElem = this.activeResult.elem;
	    if (prevElem == 'field') {
	      delete prevNode.searchFieldActive;
	    }
	    else {
	      delete prevNode.searchValueActive;
	    }
	    prevNode.updateDom();
	  }

	  if (!this.results || !this.results[index]) {
	    // out of range, set to undefined
	    this.resultIndex = undefined;
	    this.activeResult = undefined;
	    return;
	  }

	  this.resultIndex = index;

	  // set new node active
	  var node = this.results[this.resultIndex].node;
	  var elem = this.results[this.resultIndex].elem;
	  if (elem == 'field') {
	    node.searchFieldActive = true;
	  }
	  else {
	    node.searchValueActive = true;
	  }
	  this.activeResult = this.results[this.resultIndex];
	  node.updateDom();

	  // TODO: not so nice that the focus is only set after the animation is finished
	  node.scrollTo(function () {
	    if (focus) {
	      node.focus(elem);
	    }
	  });
	};

	/**
	 * Cancel any running onDelayedSearch.
	 * @private
	 */
	SearchBox.prototype._clearDelay = function() {
	  if (this.timeout != undefined) {
	    clearTimeout(this.timeout);
	    delete this.timeout;
	  }
	};

	/**
	 * Start a timer to execute a search after a short delay.
	 * Used for reducing the number of searches while typing.
	 * @param {Event} event
	 * @private
	 */
	SearchBox.prototype._onDelayedSearch = function (event) {
	  // execute the search after a short delay (reduces the number of
	  // search actions while typing in the search text box)
	  this._clearDelay();
	  var searchBox = this;
	  this.timeout = setTimeout(function (event) {
	    searchBox._onSearch();
	  },
	  this.delay);
	};

	/**
	 * Handle onSearch event
	 * @param {boolean} [forceSearch]  If true, search will be executed again even
	 *                                 when the search text is not changed.
	 *                                 Default is false.
	 * @private
	 */
	SearchBox.prototype._onSearch = function (forceSearch) {
	  this._clearDelay();

	  var value = this.dom.search.value;
	  var text = (value.length > 0) ? value : undefined;
	  if (text != this.lastText || forceSearch) {
	    // only search again when changed
	    this.lastText = text;
	    this.results = this.editor.search(text);
	    this._setActiveResult(undefined);

	    // display search results
	    if (text != undefined) {
	      var resultCount = this.results.length;
	      switch (resultCount) {
	        case 0: this.dom.results.innerHTML = 'no&nbsp;results'; break;
	        case 1: this.dom.results.innerHTML = '1&nbsp;result'; break;
	        default: this.dom.results.innerHTML = resultCount + '&nbsp;results'; break;
	      }
	    }
	    else {
	      this.dom.results.innerHTML = '';
	    }
	  }
	};

	/**
	 * Handle onKeyDown event in the input box
	 * @param {Event} event
	 * @private
	 */
	SearchBox.prototype._onKeyDown = function (event) {
	  var keynum = event.which;
	  if (keynum == 27) { // ESC
	    this.dom.search.value = '';  // clear search
	    this._onSearch();
	    event.preventDefault();
	    event.stopPropagation();
	  }
	  else if (keynum == 13) { // Enter
	    if (event.ctrlKey) {
	      // force to search again
	      this._onSearch(true);
	    }
	    else if (event.shiftKey) {
	      // move to the previous search result
	      this.previous();
	    }
	    else {
	      // move to the next search result
	      this.next();
	    }
	    event.preventDefault();
	    event.stopPropagation();
	  }
	};

	/**
	 * Handle onKeyUp event in the input box
	 * @param {Event} event
	 * @private
	 */
	SearchBox.prototype._onKeyUp = function (event) {
	  var keynum = event.keyCode;
	  if (keynum != 27 && keynum != 13) { // !show and !Enter
	    this._onDelayedSearch(event);   // For IE 9
	  }
	};

	/**
	 * Clear the search results
	 */
	SearchBox.prototype.clear = function () {
	  this.dom.search.value = '';
	  this._onSearch();
	};

	/**
	 * Destroy the search box
	 */
	SearchBox.prototype.destroy = function () {
	  this.editor = null;
	  this.dom.container.removeChild(this.dom.table);
	  this.dom = null;

	  this.results = null;
	  this.activeResult = null;

	  this._clearDelay();

	};

	module.exports = SearchBox;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(4);

	/**
	 * A context menu
	 * @param {Object[]} items    Array containing the menu structure
	 *                            TODO: describe structure
	 * @param {Object} [options]  Object with options. Available options:
	 *                            {function} close    Callback called when the
	 *                                                context menu is being closed.
	 * @constructor
	 */
	function ContextMenu (items, options) {
	  this.dom = {};

	  var me = this;
	  var dom = this.dom;
	  this.anchor = undefined;
	  this.items = items;
	  this.eventListeners = {};
	  this.selection = undefined; // holds the selection before the menu was opened
	  this.onClose = options ? options.close : undefined;

	  // create root element
	  var root = document.createElement('div');
	  root.className = 'jsoneditor-contextmenu-root';
	  dom.root = root;

	  // create a container element
	  var menu = document.createElement('div');
	  menu.className = 'jsoneditor-contextmenu';
	  dom.menu = menu;
	  root.appendChild(menu);

	  // create a list to hold the menu items
	  var list = document.createElement('ul');
	  list.className = 'jsoneditor-menu';
	  menu.appendChild(list);
	  dom.list = list;
	  dom.items = []; // list with all buttons

	  // create a (non-visible) button to set the focus to the menu
	  var focusButton = document.createElement('button');
	  focusButton.type = 'button';
	  dom.focusButton = focusButton;
	  var li = document.createElement('li');
	  li.style.overflow = 'hidden';
	  li.style.height = '0';
	  li.appendChild(focusButton);
	  list.appendChild(li);

	  function createMenuItems (list, domItems, items) {
	    items.forEach(function (item) {
	      if (item.type == 'separator') {
	        // create a separator
	        var separator = document.createElement('div');
	        separator.className = 'jsoneditor-separator';
	        li = document.createElement('li');
	        li.appendChild(separator);
	        list.appendChild(li);
	      }
	      else {
	        var domItem = {};

	        // create a menu item
	        var li = document.createElement('li');
	        list.appendChild(li);

	        // create a button in the menu item
	        var button = document.createElement('button');
	        button.type = 'button';
	        button.className = item.className;
	        domItem.button = button;
	        if (item.title) {
	          button.title = item.title;
	        }
	        if (item.click) {
	          button.onclick = function (event) {
	            event.preventDefault();
	            me.hide();
	            item.click();
	          };
	        }
	        li.appendChild(button);

	        // create the contents of the button
	        if (item.submenu) {
	          // add the icon to the button
	          var divIcon = document.createElement('div');
	          divIcon.className = 'jsoneditor-icon';
	          button.appendChild(divIcon);
	          button.appendChild(document.createTextNode(item.text));

	          var buttonSubmenu;
	          if (item.click) {
	            // submenu and a button with a click handler
	            button.className += ' jsoneditor-default';

	            var buttonExpand = document.createElement('button');
	            buttonExpand.type = 'button';
	            domItem.buttonExpand = buttonExpand;
	            buttonExpand.className = 'jsoneditor-expand';
	            buttonExpand.innerHTML = '<div class="jsoneditor-expand"></div>';
	            li.appendChild(buttonExpand);
	            if (item.submenuTitle) {
	              buttonExpand.title = item.submenuTitle;
	            }

	            buttonSubmenu = buttonExpand;
	          }
	          else {
	            // submenu and a button without a click handler
	            var divExpand = document.createElement('div');
	            divExpand.className = 'jsoneditor-expand';
	            button.appendChild(divExpand);

	            buttonSubmenu = button;
	          }

	          // attach a handler to expand/collapse the submenu
	          buttonSubmenu.onclick = function (event) {
	            event.preventDefault();
	            me._onExpandItem(domItem);
	            buttonSubmenu.focus();
	          };

	          // create the submenu
	          var domSubItems = [];
	          domItem.subItems = domSubItems;
	          var ul = document.createElement('ul');
	          domItem.ul = ul;
	          ul.className = 'jsoneditor-menu';
	          ul.style.height = '0';
	          li.appendChild(ul);
	          createMenuItems(ul, domSubItems, item.submenu);
	        }
	        else {
	          // no submenu, just a button with clickhandler
	          button.innerHTML = '<div class="jsoneditor-icon"></div>' + item.text;
	        }

	        domItems.push(domItem);
	      }
	    });
	  }
	  createMenuItems(list, this.dom.items, items);

	  // TODO: when the editor is small, show the submenu on the right instead of inline?

	  // calculate the max height of the menu with one submenu expanded
	  this.maxHeight = 0; // height in pixels
	  items.forEach(function (item) {
	    var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
	    me.maxHeight = Math.max(me.maxHeight, height);
	  });
	}

	/**
	 * Get the currently visible buttons
	 * @return {Array.<HTMLElement>} buttons
	 * @private
	 */
	ContextMenu.prototype._getVisibleButtons = function () {
	  var buttons = [];
	  var me = this;
	  this.dom.items.forEach(function (item) {
	    buttons.push(item.button);
	    if (item.buttonExpand) {
	      buttons.push(item.buttonExpand);
	    }
	    if (item.subItems && item == me.expandedItem) {
	      item.subItems.forEach(function (subItem) {
	        buttons.push(subItem.button);
	        if (subItem.buttonExpand) {
	          buttons.push(subItem.buttonExpand);
	        }
	        // TODO: change to fully recursive method
	      });
	    }
	  });

	  return buttons;
	};

	// currently displayed context menu, a singleton. We may only have one visible context menu
	ContextMenu.visibleMenu = undefined;

	/**
	 * Attach the menu to an anchor
	 * @param {HTMLElement} anchor          Anchor where the menu will be attached
	 *                                      as sibling.
	 * @param {HTMLElement} [contentWindow] The DIV with with the (scrollable) contents
	 */
	ContextMenu.prototype.show = function (anchor, contentWindow) {
	  this.hide();

	  // determine whether to display the menu below or above the anchor
	  var showBelow = true;
	  if (contentWindow) {
	    var anchorRect = anchor.getBoundingClientRect();
	    var contentRect = contentWindow.getBoundingClientRect();

	    if (anchorRect.bottom + this.maxHeight < contentRect.bottom) {
	      // fits below -> show below
	    }
	    else if (anchorRect.top - this.maxHeight > contentRect.top) {
	      // fits above -> show above
	      showBelow = false;
	    }
	    else {
	      // doesn't fit above nor below -> show below
	    }
	  }

	  // position the menu
	  if (showBelow) {
	    // display the menu below the anchor
	    var anchorHeight = anchor.offsetHeight;
	    this.dom.menu.style.left = '0px';
	    this.dom.menu.style.top = anchorHeight + 'px';
	    this.dom.menu.style.bottom = '';
	  }
	  else {
	    // display the menu above the anchor
	    this.dom.menu.style.left = '0px';
	    this.dom.menu.style.top = '';
	    this.dom.menu.style.bottom = '0px';
	  }

	  // attach the menu to the parent of the anchor
	  var parent = anchor.parentNode;
	  parent.insertBefore(this.dom.root, parent.firstChild);

	  // create and attach event listeners
	  var me = this;
	  var list = this.dom.list;
	  this.eventListeners.mousedown = util.addEventListener(window, 'mousedown', function (event) {
	    // hide menu on click outside of the menu
	    var target = event.target;
	    if ((target != list) && !me._isChildOf(target, list)) {
	      me.hide();
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  });
	  this.eventListeners.keydown = util.addEventListener(window, 'keydown', function (event) {
	    me._onKeyDown(event);
	  });

	  // move focus to the first button in the context menu
	  this.selection = util.getSelection();
	  this.anchor = anchor;
	  setTimeout(function () {
	    me.dom.focusButton.focus();
	  }, 0);

	  if (ContextMenu.visibleMenu) {
	    ContextMenu.visibleMenu.hide();
	  }
	  ContextMenu.visibleMenu = this;
	};

	/**
	 * Hide the context menu if visible
	 */
	ContextMenu.prototype.hide = function () {
	  // remove the menu from the DOM
	  if (this.dom.root.parentNode) {
	    this.dom.root.parentNode.removeChild(this.dom.root);
	    if (this.onClose) {
	      this.onClose();
	    }
	  }

	  // remove all event listeners
	  // all event listeners are supposed to be attached to document.
	  for (var name in this.eventListeners) {
	    if (this.eventListeners.hasOwnProperty(name)) {
	      var fn = this.eventListeners[name];
	      if (fn) {
	        util.removeEventListener(window, name, fn);
	      }
	      delete this.eventListeners[name];
	    }
	  }

	  if (ContextMenu.visibleMenu == this) {
	    ContextMenu.visibleMenu = undefined;
	  }
	};

	/**
	 * Expand a submenu
	 * Any currently expanded submenu will be hided.
	 * @param {Object} domItem
	 * @private
	 */
	ContextMenu.prototype._onExpandItem = function (domItem) {
	  var me = this;
	  var alreadyVisible = (domItem == this.expandedItem);

	  // hide the currently visible submenu
	  var expandedItem = this.expandedItem;
	  if (expandedItem) {
	    //var ul = expandedItem.ul;
	    expandedItem.ul.style.height = '0';
	    expandedItem.ul.style.padding = '';
	    setTimeout(function () {
	      if (me.expandedItem != expandedItem) {
	        expandedItem.ul.style.display = '';
	        util.removeClassName(expandedItem.ul.parentNode, 'jsoneditor-selected');
	      }
	    }, 300); // timeout duration must match the css transition duration
	    this.expandedItem = undefined;
	  }

	  if (!alreadyVisible) {
	    var ul = domItem.ul;
	    ul.style.display = 'block';
	    var height = ul.clientHeight; // force a reflow in Firefox
	    setTimeout(function () {
	      if (me.expandedItem == domItem) {
	        ul.style.height = (ul.childNodes.length * 24) + 'px';
	        ul.style.padding = '5px 10px';
	      }
	    }, 0);
	    util.addClassName(ul.parentNode, 'jsoneditor-selected');
	    this.expandedItem = domItem;
	  }
	};

	/**
	 * Handle onkeydown event
	 * @param {Event} event
	 * @private
	 */
	ContextMenu.prototype._onKeyDown = function (event) {
	  var target = event.target;
	  var keynum = event.which;
	  var handled = false;
	  var buttons, targetIndex, prevButton, nextButton;

	  if (keynum == 27) { // ESC
	    // hide the menu on ESC key

	    // restore previous selection and focus
	    if (this.selection) {
	      util.setSelection(this.selection);
	    }
	    if (this.anchor) {
	      this.anchor.focus();
	    }

	    this.hide();

	    handled = true;
	  }
	  else if (keynum == 9) { // Tab
	    if (!event.shiftKey) { // Tab
	      buttons = this._getVisibleButtons();
	      targetIndex = buttons.indexOf(target);
	      if (targetIndex == buttons.length - 1) {
	        // move to first button
	        buttons[0].focus();
	        handled = true;
	      }
	    }
	    else { // Shift+Tab
	      buttons = this._getVisibleButtons();
	      targetIndex = buttons.indexOf(target);
	      if (targetIndex == 0) {
	        // move to last button
	        buttons[buttons.length - 1].focus();
	        handled = true;
	      }
	    }
	  }
	  else if (keynum == 37) { // Arrow Left
	    if (target.className == 'jsoneditor-expand') {
	      buttons = this._getVisibleButtons();
	      targetIndex = buttons.indexOf(target);
	      prevButton = buttons[targetIndex - 1];
	      if (prevButton) {
	        prevButton.focus();
	      }
	    }
	    handled = true;
	  }
	  else if (keynum == 38) { // Arrow Up
	    buttons = this._getVisibleButtons();
	    targetIndex = buttons.indexOf(target);
	    prevButton = buttons[targetIndex - 1];
	    if (prevButton && prevButton.className == 'jsoneditor-expand') {
	      // skip expand button
	      prevButton = buttons[targetIndex - 2];
	    }
	    if (!prevButton) {
	      // move to last button
	      prevButton = buttons[buttons.length - 1];
	    }
	    if (prevButton) {
	      prevButton.focus();
	    }
	    handled = true;
	  }
	  else if (keynum == 39) { // Arrow Right
	    buttons = this._getVisibleButtons();
	    targetIndex = buttons.indexOf(target);
	    nextButton = buttons[targetIndex + 1];
	    if (nextButton && nextButton.className == 'jsoneditor-expand') {
	      nextButton.focus();
	    }
	    handled = true;
	  }
	  else if (keynum == 40) { // Arrow Down
	    buttons = this._getVisibleButtons();
	    targetIndex = buttons.indexOf(target);
	    nextButton = buttons[targetIndex + 1];
	    if (nextButton && nextButton.className == 'jsoneditor-expand') {
	      // skip expand button
	      nextButton = buttons[targetIndex + 2];
	    }
	    if (!nextButton) {
	      // move to first button
	      nextButton = buttons[0];
	    }
	    if (nextButton) {
	      nextButton.focus();
	      handled = true;
	    }
	    handled = true;
	  }
	  // TODO: arrow left and right

	  if (handled) {
	    event.stopPropagation();
	    event.preventDefault();
	  }
	};

	/**
	 * Test if an element is a child of a parent element.
	 * @param {Element} child
	 * @param {Element} parent
	 * @return {boolean} isChild
	 */
	ContextMenu.prototype._isChildOf = function (child, parent) {
	  var e = child.parentNode;
	  while (e) {
	    if (e == parent) {
	      return true;
	    }
	    e = e.parentNode;
	  }

	  return false;
	};

	module.exports = ContextMenu;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var naturalSort = __webpack_require__(9);
	var ContextMenu = __webpack_require__(7);
	var appendNodeFactory = __webpack_require__(10);
	var util = __webpack_require__(4);

	/**
	 * @constructor Node
	 * Create a new Node
	 * @param {./treemode} editor
	 * @param {Object} [params] Can contain parameters:
	 *                          {string}  field
	 *                          {boolean} fieldEditable
	 *                          {*}       value
	 *                          {String}  type  Can have values 'auto', 'array',
	 *                                          'object', or 'string'.
	 */
	function Node (editor, params) {
	  /** @type {./treemode} */
	  this.editor = editor;
	  this.dom = {};
	  this.expanded = false;

	  if(params && (params instanceof Object)) {
	    this.setField(params.field, params.fieldEditable);
	    this.setValue(params.value, params.type);
	  }
	  else {
	    this.setField('');
	    this.setValue(null);
	  }

	  this._debouncedOnChangeValue = util.debounce(this._onChangeValue.bind(this), Node.prototype.DEBOUNCE_INTERVAL);
	  this._debouncedOnChangeField = util.debounce(this._onChangeField.bind(this), Node.prototype.DEBOUNCE_INTERVAL);
	}

	// debounce interval for keyboard input in milliseconds
	Node.prototype.DEBOUNCE_INTERVAL = 150;

	/**
	 * Determine whether the field and/or value of this node are editable
	 * @private
	 */
	Node.prototype._updateEditability = function () {
	  this.editable = {
	    field: true,
	    value: true
	  };

	  if (this.editor) {
	    this.editable.field = this.editor.options.mode === 'tree';
	    this.editable.value = this.editor.options.mode !== 'view';

	    if ((this.editor.options.mode === 'tree' || this.editor.options.mode === 'form') &&
	        (typeof this.editor.options.onEditable === 'function')) {
	      var editable = this.editor.options.onEditable({
	        field: this.field,
	        value: this.value,
	        path: this.getPath()
	      });

	      if (typeof editable === 'boolean') {
	        this.editable.field = editable;
	        this.editable.value = editable;
	      }
	      else {
	        if (typeof editable.field === 'boolean') this.editable.field = editable.field;
	        if (typeof editable.value === 'boolean') this.editable.value = editable.value;
	      }
	    }
	  }
	};

	/**
	 * Get the path of this node
	 * @return {String[]} Array containing the path to this node
	 */
	Node.prototype.getPath = function () {
	  var node = this;
	  var path = [];
	  while (node) {
	    var field = !node.parent
	        ? undefined  // do not add an (optional) field name of the root node
	        :  (node.parent.type != 'array')
	            ? node.field
	            : node.index;

	    if (field !== undefined) {
	      path.unshift(field);
	    }
	    node = node.parent;
	  }
	  return path;
	};

	/**
	 * Find a Node from a JSON path like '.items[3].name'
	 * @param {string} jsonPath
	 * @return {Node | null} Returns the Node when found, returns null if not found
	 */
	Node.prototype.findNode = function (jsonPath) {
	  var path = util.parsePath(jsonPath);
	  var node = this;
	  while (node && path.length > 0) {
	    var prop = path.shift();
	    if (typeof prop === 'number') {
	      if (node.type !== 'array') {
	        throw new Error('Cannot get child node at index ' + prop + ': node is no array');
	      }
	      node = node.childs[prop];
	    }
	    else { // string
	      if (node.type !== 'object') {
	        throw new Error('Cannot get child node ' + prop + ': node is no object');
	      }
	      node = node.childs.filter(function (child) {
	        return child.field === prop;
	      })[0];
	    }
	  }

	  return node;
	};

	/**
	 * Find all parents of this node. The parents are ordered from root node towards
	 * the original node.
	 * @return {Array.<Node>}
	 */
	Node.prototype.findParents = function () {
	  var parents = [];
	  var parent = this.parent;
	  while (parent) {
	    parents.unshift(parent);
	    parent = parent.parent;
	  }
	  return parents;
	};

	/**
	 *
	 * @param {{dataPath: string, keyword: string, message: string, params: Object, schemaPath: string} | null} error
	 * @param {Node} [child]  When this is the error of a parent node, pointing
	 *                        to an invalid child node, the child node itself
	 *                        can be provided. If provided, clicking the error
	 *                        icon will set focus to the invalid child node.
	 */
	Node.prototype.setError = function (error, child) {
	  // ensure the dom exists
	  this.getDom();

	  this.error = error;
	  var tdError = this.dom.tdError;
	  if (error) {
	    if (!tdError) {
	      tdError = document.createElement('td');
	      this.dom.tdError = tdError;
	      this.dom.tdValue.parentNode.appendChild(tdError);
	    }

	    var popover = document.createElement('div');
	    popover.className = 'jsoneditor-popover jsoneditor-right';
	    popover.appendChild(document.createTextNode(error.message));

	    var button = document.createElement('button');
	    button.type = 'button';
	    button.className = 'jsoneditor-schema-error';
	    button.appendChild(popover);

	    // update the direction of the popover
	    button.onmouseover = button.onfocus = function updateDirection() {
	      var directions = ['right', 'above', 'below', 'left'];
	      for (var i = 0; i < directions.length; i++) {
	        var direction = directions[i];
	        popover.className = 'jsoneditor-popover jsoneditor-' + direction;

	        var contentRect = this.editor.content.getBoundingClientRect();
	        var popoverRect = popover.getBoundingClientRect();
	        var margin = 20; // account for a scroll bar
	        var fit = util.insideRect(contentRect, popoverRect, margin);

	        if (fit) {
	          break;
	        }
	      }
	    }.bind(this);

	    // when clicking the error icon, expand all nodes towards the invalid
	    // child node, and set focus to the child node
	    if (child) {
	      button.onclick = function showInvalidNode() {
	        child.findParents().forEach(function (parent) {
	          parent.expand(false);
	        });

	        child.scrollTo(function () {
	          child.focus();
	        });
	      };
	    }

	    // apply the error message to the node
	    while (tdError.firstChild) {
	      tdError.removeChild(tdError.firstChild);
	    }
	    tdError.appendChild(button);
	  }
	  else {
	    if (tdError) {
	      this.dom.tdError.parentNode.removeChild(this.dom.tdError);
	      delete this.dom.tdError;
	    }
	  }
	};

	/**
	 * Get the index of this node: the index in the list of childs where this
	 * node is part of
	 * @return {number} Returns the index, or -1 if this is the root node
	 */
	Node.prototype.getIndex = function () {
	  return this.parent ? this.parent.childs.indexOf(this) : -1;
	};

	/**
	 * Set parent node
	 * @param {Node} parent
	 */
	Node.prototype.setParent = function(parent) {
	  this.parent = parent;
	};

	/**
	 * Set field
	 * @param {String}  field
	 * @param {boolean} [fieldEditable]
	 */
	Node.prototype.setField = function(field, fieldEditable) {
	  this.field = field;
	  this.previousField = field;
	  this.fieldEditable = (fieldEditable === true);
	};

	/**
	 * Get field
	 * @return {String}
	 */
	Node.prototype.getField = function() {
	  if (this.field === undefined) {
	    this._getDomField();
	  }

	  return this.field;
	};

	/**
	 * Set value. Value is a JSON structure or an element String, Boolean, etc.
	 * @param {*} value
	 * @param {String} [type]  Specify the type of the value. Can be 'auto',
	 *                         'array', 'object', or 'string'
	 */
	Node.prototype.setValue = function(value, type) {
	  var childValue, child;

	  // first clear all current childs (if any)
	  var childs = this.childs;
	  if (childs) {
	    while (childs.length) {
	      this.removeChild(childs[0]);
	    }
	  }

	  // TODO: remove the DOM of this Node

	  this.type = this._getType(value);

	  // check if type corresponds with the provided type
	  if (type && type != this.type) {
	    if (type == 'string' && this.type == 'auto') {
	      this.type = type;
	    }
	    else {
	      throw new Error('Type mismatch: ' +
	          'cannot cast value of type "' + this.type +
	          ' to the specified type "' + type + '"');
	    }
	  }

	  if (this.type == 'array') {
	    // array
	    this.childs = [];
	    for (var i = 0, iMax = value.length; i < iMax; i++) {
	      childValue = value[i];
	      if (childValue !== undefined && !(childValue instanceof Function)) {
	        // ignore undefined and functions
	        child = new Node(this.editor, {
	          value: childValue
	        });
	        this.appendChild(child);
	      }
	    }
	    this.value = '';
	  }
	  else if (this.type == 'object') {
	    // object
	    this.childs = [];
	    for (var childField in value) {
	      if (value.hasOwnProperty(childField)) {
	        childValue = value[childField];
	        if (childValue !== undefined && !(childValue instanceof Function)) {
	          // ignore undefined and functions
	          child = new Node(this.editor, {
	            field: childField,
	            value: childValue
	          });
	          this.appendChild(child);
	        }
	      }
	    }
	    this.value = '';

	    // sort object keys
	    if (this.editor.options.sortObjectKeys === true) {
	      this.sort('asc');
	    }
	  }
	  else {
	    // value
	    this.childs = undefined;
	    this.value = value;
	  }

	  this.previousValue = this.value;
	};

	/**
	 * Get value. Value is a JSON structure
	 * @return {*} value
	 */
	Node.prototype.getValue = function() {
	  //var childs, i, iMax;

	  if (this.type == 'array') {
	    var arr = [];
	    this.childs.forEach (function (child) {
	      arr.push(child.getValue());
	    });
	    return arr;
	  }
	  else if (this.type == 'object') {
	    var obj = {};
	    this.childs.forEach (function (child) {
	      obj[child.getField()] = child.getValue();
	    });
	    return obj;
	  }
	  else {
	    if (this.value === undefined) {
	      this._getDomValue();
	    }

	    return this.value;
	  }
	};

	/**
	 * Get the nesting level of this node
	 * @return {Number} level
	 */
	Node.prototype.getLevel = function() {
	  return (this.parent ? this.parent.getLevel() + 1 : 0);
	};

	/**
	 * Get path of the root node till the current node
	 * @return {Node[]} Returns an array with nodes
	 */
	Node.prototype.getNodePath = function() {
	  var path = this.parent ? this.parent.getNodePath() : [];
	  path.push(this);
	  return path;
	};

	/**
	 * Create a clone of a node
	 * The complete state of a clone is copied, including whether it is expanded or
	 * not. The DOM elements are not cloned.
	 * @return {Node} clone
	 */
	Node.prototype.clone = function() {
	  var clone = new Node(this.editor);
	  clone.type = this.type;
	  clone.field = this.field;
	  clone.fieldInnerText = this.fieldInnerText;
	  clone.fieldEditable = this.fieldEditable;
	  clone.value = this.value;
	  clone.valueInnerText = this.valueInnerText;
	  clone.expanded = this.expanded;

	  if (this.childs) {
	    // an object or array
	    var cloneChilds = [];
	    this.childs.forEach(function (child) {
	      var childClone = child.clone();
	      childClone.setParent(clone);
	      cloneChilds.push(childClone);
	    });
	    clone.childs = cloneChilds;
	  }
	  else {
	    // a value
	    clone.childs = undefined;
	  }

	  return clone;
	};

	/**
	 * Expand this node and optionally its childs.
	 * @param {boolean} [recurse] Optional recursion, true by default. When
	 *                            true, all childs will be expanded recursively
	 */
	Node.prototype.expand = function(recurse) {
	  if (!this.childs) {
	    return;
	  }

	  // set this node expanded
	  this.expanded = true;
	  if (this.dom.expand) {
	    this.dom.expand.className = 'jsoneditor-expanded';
	  }

	  this.showChilds();

	  if (recurse !== false) {
	    this.childs.forEach(function (child) {
	      child.expand(recurse);
	    });
	  }
	};

	/**
	 * Collapse this node and optionally its childs.
	 * @param {boolean} [recurse] Optional recursion, true by default. When
	 *                            true, all childs will be collapsed recursively
	 */
	Node.prototype.collapse = function(recurse) {
	  if (!this.childs) {
	    return;
	  }

	  this.hideChilds();

	  // collapse childs in case of recurse
	  if (recurse !== false) {
	    this.childs.forEach(function (child) {
	      child.collapse(recurse);
	    });

	  }

	  // make this node collapsed
	  if (this.dom.expand) {
	    this.dom.expand.className = 'jsoneditor-collapsed';
	  }
	  this.expanded = false;
	};

	/**
	 * Recursively show all childs when they are expanded
	 */
	Node.prototype.showChilds = function() {
	  var childs = this.childs;
	  if (!childs) {
	    return;
	  }
	  if (!this.expanded) {
	    return;
	  }

	  var tr = this.dom.tr;
	  var table = tr ? tr.parentNode : undefined;
	  if (table) {
	    // show row with append button
	    var append = this.getAppend();
	    var nextTr = tr.nextSibling;
	    if (nextTr) {
	      table.insertBefore(append, nextTr);
	    }
	    else {
	      table.appendChild(append);
	    }

	    // show childs
	    this.childs.forEach(function (child) {
	      table.insertBefore(child.getDom(), append);
	      child.showChilds();
	    });
	  }
	};

	/**
	 * Hide the node with all its childs
	 */
	Node.prototype.hide = function() {
	  var tr = this.dom.tr;
	  var table = tr ? tr.parentNode : undefined;
	  if (table) {
	    table.removeChild(tr);
	  }
	  this.hideChilds();
	};


	/**
	 * Recursively hide all childs
	 */
	Node.prototype.hideChilds = function() {
	  var childs = this.childs;
	  if (!childs) {
	    return;
	  }
	  if (!this.expanded) {
	    return;
	  }

	  // hide append row
	  var append = this.getAppend();
	  if (append.parentNode) {
	    append.parentNode.removeChild(append);
	  }

	  // hide childs
	  this.childs.forEach(function (child) {
	    child.hide();
	  });
	};


	/**
	 * Add a new child to the node.
	 * Only applicable when Node value is of type array or object
	 * @param {Node} node
	 */
	Node.prototype.appendChild = function(node) {
	  if (this._hasChilds()) {
	    // adjust the link to the parent
	    node.setParent(this);
	    node.fieldEditable = (this.type == 'object');
	    if (this.type == 'array') {
	      node.index = this.childs.length;
	    }
	    this.childs.push(node);

	    if (this.expanded) {
	      // insert into the DOM, before the appendRow
	      var newTr = node.getDom();
	      var appendTr = this.getAppend();
	      var table = appendTr ? appendTr.parentNode : undefined;
	      if (appendTr && table) {
	        table.insertBefore(newTr, appendTr);
	      }

	      node.showChilds();
	    }

	    this.updateDom({'updateIndexes': true});
	    node.updateDom({'recurse': true});
	  }
	};


	/**
	 * Move a node from its current parent to this node
	 * Only applicable when Node value is of type array or object
	 * @param {Node} node
	 * @param {Node} beforeNode
	 */
	Node.prototype.moveBefore = function(node, beforeNode) {
	  if (this._hasChilds()) {
	    // create a temporary row, to prevent the scroll position from jumping
	    // when removing the node
	    var tbody = (this.dom.tr) ? this.dom.tr.parentNode : undefined;
	    if (tbody) {
	      var trTemp = document.createElement('tr');
	      trTemp.style.height = tbody.clientHeight + 'px';
	      tbody.appendChild(trTemp);
	    }

	    if (node.parent) {
	      node.parent.removeChild(node);
	    }

	    if (beforeNode instanceof AppendNode) {
	      this.appendChild(node);
	    }
	    else {
	      this.insertBefore(node, beforeNode);
	    }

	    if (tbody) {
	      tbody.removeChild(trTemp);
	    }
	  }
	};

	/**
	 * Move a node from its current parent to this node
	 * Only applicable when Node value is of type array or object.
	 * If index is out of range, the node will be appended to the end
	 * @param {Node} node
	 * @param {Number} index
	 */
	Node.prototype.moveTo = function (node, index) {
	  if (node.parent == this) {
	    // same parent
	    var currentIndex = this.childs.indexOf(node);
	    if (currentIndex < index) {
	      // compensate the index for removal of the node itself
	      index++;
	    }
	  }

	  var beforeNode = this.childs[index] || this.append;
	  this.moveBefore(node, beforeNode);
	};

	/**
	 * Insert a new child before a given node
	 * Only applicable when Node value is of type array or object
	 * @param {Node} node
	 * @param {Node} beforeNode
	 */
	Node.prototype.insertBefore = function(node, beforeNode) {
	  if (this._hasChilds()) {
	    if (beforeNode == this.append) {
	      // append to the child nodes

	      // adjust the link to the parent
	      node.setParent(this);
	      node.fieldEditable = (this.type == 'object');
	      this.childs.push(node);
	    }
	    else {
	      // insert before a child node
	      var index = this.childs.indexOf(beforeNode);
	      if (index == -1) {
	        throw new Error('Node not found');
	      }

	      // adjust the link to the parent
	      node.setParent(this);
	      node.fieldEditable = (this.type == 'object');
	      this.childs.splice(index, 0, node);
	    }

	    if (this.expanded) {
	      // insert into the DOM
	      var newTr = node.getDom();
	      var nextTr = beforeNode.getDom();
	      var table = nextTr ? nextTr.parentNode : undefined;
	      if (nextTr && table) {
	        table.insertBefore(newTr, nextTr);
	      }

	      node.showChilds();
	    }

	    this.updateDom({'updateIndexes': true});
	    node.updateDom({'recurse': true});
	  }
	};

	/**
	 * Insert a new child before a given node
	 * Only applicable when Node value is of type array or object
	 * @param {Node} node
	 * @param {Node} afterNode
	 */
	Node.prototype.insertAfter = function(node, afterNode) {
	  if (this._hasChilds()) {
	    var index = this.childs.indexOf(afterNode);
	    var beforeNode = this.childs[index + 1];
	    if (beforeNode) {
	      this.insertBefore(node, beforeNode);
	    }
	    else {
	      this.appendChild(node);
	    }
	  }
	};

	/**
	 * Search in this node
	 * The node will be expanded when the text is found one of its childs, else
	 * it will be collapsed. Searches are case insensitive.
	 * @param {String} text
	 * @return {Node[]} results  Array with nodes containing the search text
	 */
	Node.prototype.search = function(text) {
	  var results = [];
	  var index;
	  var search = text ? text.toLowerCase() : undefined;

	  // delete old search data
	  delete this.searchField;
	  delete this.searchValue;

	  // search in field
	  if (this.field != undefined) {
	    var field = String(this.field).toLowerCase();
	    index = field.indexOf(search);
	    if (index != -1) {
	      this.searchField = true;
	      results.push({
	        'node': this,
	        'elem': 'field'
	      });
	    }

	    // update dom
	    this._updateDomField();
	  }

	  // search in value
	  if (this._hasChilds()) {
	    // array, object

	    // search the nodes childs
	    if (this.childs) {
	      var childResults = [];
	      this.childs.forEach(function (child) {
	        childResults = childResults.concat(child.search(text));
	      });
	      results = results.concat(childResults);
	    }

	    // update dom
	    if (search != undefined) {
	      var recurse = false;
	      if (childResults.length == 0) {
	        this.collapse(recurse);
	      }
	      else {
	        this.expand(recurse);
	      }
	    }
	  }
	  else {
	    // string, auto
	    if (this.value != undefined ) {
	      var value = String(this.value).toLowerCase();
	      index = value.indexOf(search);
	      if (index != -1) {
	        this.searchValue = true;
	        results.push({
	          'node': this,
	          'elem': 'value'
	        });
	      }
	    }

	    // update dom
	    this._updateDomValue();
	  }

	  return results;
	};

	/**
	 * Move the scroll position such that this node is in the visible area.
	 * The node will not get the focus
	 * @param {function(boolean)} [callback]
	 */
	Node.prototype.scrollTo = function(callback) {
	  if (!this.dom.tr || !this.dom.tr.parentNode) {
	    // if the node is not visible, expand its parents
	    var parent = this.parent;
	    var recurse = false;
	    while (parent) {
	      parent.expand(recurse);
	      parent = parent.parent;
	    }
	  }

	  if (this.dom.tr && this.dom.tr.parentNode) {
	    this.editor.scrollTo(this.dom.tr.offsetTop, callback);
	  }
	};


	// stores the element name currently having the focus
	Node.focusElement = undefined;

	/**
	 * Set focus to this node
	 * @param {String} [elementName]  The field name of the element to get the
	 *                                focus available values: 'drag', 'menu',
	 *                                'expand', 'field', 'value' (default)
	 */
	Node.prototype.focus = function(elementName) {
	  Node.focusElement = elementName;

	  if (this.dom.tr && this.dom.tr.parentNode) {
	    var dom = this.dom;

	    switch (elementName) {
	      case 'drag':
	        if (dom.drag) {
	          dom.drag.focus();
	        }
	        else {
	          dom.menu.focus();
	        }
	        break;

	      case 'menu':
	        dom.menu.focus();
	        break;

	      case 'expand':
	        if (this._hasChilds()) {
	          dom.expand.focus();
	        }
	        else if (dom.field && this.fieldEditable) {
	          dom.field.focus();
	          util.selectContentEditable(dom.field);
	        }
	        else if (dom.value && !this._hasChilds()) {
	          dom.value.focus();
	          util.selectContentEditable(dom.value);
	        }
	        else {
	          dom.menu.focus();
	        }
	        break;

	      case 'field':
	        if (dom.field && this.fieldEditable) {
	          dom.field.focus();
	          util.selectContentEditable(dom.field);
	        }
	        else if (dom.value && !this._hasChilds()) {
	          dom.value.focus();
	          util.selectContentEditable(dom.value);
	        }
	        else if (this._hasChilds()) {
	          dom.expand.focus();
	        }
	        else {
	          dom.menu.focus();
	        }
	        break;

	      case 'value':
	      default:
	        if (dom.value && !this._hasChilds()) {
	          dom.value.focus();
	          util.selectContentEditable(dom.value);
	        }
	        else if (dom.field && this.fieldEditable) {
	          dom.field.focus();
	          util.selectContentEditable(dom.field);
	        }
	        else if (this._hasChilds()) {
	          dom.expand.focus();
	        }
	        else {
	          dom.menu.focus();
	        }
	        break;
	    }
	  }
	};

	/**
	 * Select all text in an editable div after a delay of 0 ms
	 * @param {Element} editableDiv
	 */
	Node.select = function(editableDiv) {
	  setTimeout(function () {
	    util.selectContentEditable(editableDiv);
	  }, 0);
	};

	/**
	 * Update the values from the DOM field and value of this node
	 */
	Node.prototype.blur = function() {
	  // retrieve the actual field and value from the DOM.
	  this._getDomValue(false);
	  this._getDomField(false);
	};

	/**
	 * Check if given node is a child. The method will check recursively to find
	 * this node.
	 * @param {Node} node
	 * @return {boolean} containsNode
	 */
	Node.prototype.containsNode = function(node) {
	  if (this == node) {
	    return true;
	  }

	  var childs = this.childs;
	  if (childs) {
	    // TODO: use the js5 Array.some() here?
	    for (var i = 0, iMax = childs.length; i < iMax; i++) {
	      if (childs[i].containsNode(node)) {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	/**
	 * Move given node into this node
	 * @param {Node} node           the childNode to be moved
	 * @param {Node} beforeNode     node will be inserted before given
	 *                                         node. If no beforeNode is given,
	 *                                         the node is appended at the end
	 * @private
	 */
	Node.prototype._move = function(node, beforeNode) {
	  if (node == beforeNode) {
	    // nothing to do...
	    return;
	  }

	  // check if this node is not a child of the node to be moved here
	  if (node.containsNode(this)) {
	    throw new Error('Cannot move a field into a child of itself');
	  }

	  // remove the original node
	  if (node.parent) {
	    node.parent.removeChild(node);
	  }

	  // create a clone of the node
	  var clone = node.clone();
	  node.clearDom();

	  // insert or append the node
	  if (beforeNode) {
	    this.insertBefore(clone, beforeNode);
	  }
	  else {
	    this.appendChild(clone);
	  }

	  /* TODO: adjust the field name (to prevent equal field names)
	   if (this.type == 'object') {
	   }
	   */
	};

	/**
	 * Remove a child from the node.
	 * Only applicable when Node value is of type array or object
	 * @param {Node} node   The child node to be removed;
	 * @return {Node | undefined} node  The removed node on success,
	 *                                             else undefined
	 */
	Node.prototype.removeChild = function(node) {
	  if (this.childs) {
	    var index = this.childs.indexOf(node);

	    if (index != -1) {
	      node.hide();

	      // delete old search results
	      delete node.searchField;
	      delete node.searchValue;

	      var removedNode = this.childs.splice(index, 1)[0];
	      removedNode.parent = null;

	      this.updateDom({'updateIndexes': true});

	      return removedNode;
	    }
	  }

	  return undefined;
	};

	/**
	 * Remove a child node node from this node
	 * This method is equal to Node.removeChild, except that _remove fire an
	 * onChange event.
	 * @param {Node} node
	 * @private
	 */
	Node.prototype._remove = function (node) {
	  this.removeChild(node);
	};

	/**
	 * Change the type of the value of this Node
	 * @param {String} newType
	 */
	Node.prototype.changeType = function (newType) {
	  var oldType = this.type;

	  if (oldType == newType) {
	    // type is not changed
	    return;
	  }

	  if ((newType == 'string' || newType == 'auto') &&
	      (oldType == 'string' || oldType == 'auto')) {
	    // this is an easy change
	    this.type = newType;
	  }
	  else {
	    // change from array to object, or from string/auto to object/array
	    var table = this.dom.tr ? this.dom.tr.parentNode : undefined;
	    var lastTr;
	    if (this.expanded) {
	      lastTr = this.getAppend();
	    }
	    else {
	      lastTr = this.getDom();
	    }
	    var nextTr = (lastTr && lastTr.parentNode) ? lastTr.nextSibling : undefined;

	    // hide current field and all its childs
	    this.hide();
	    this.clearDom();

	    // adjust the field and the value
	    this.type = newType;

	    // adjust childs
	    if (newType == 'object') {
	      if (!this.childs) {
	        this.childs = [];
	      }

	      this.childs.forEach(function (child, index) {
	        child.clearDom();
	        delete child.index;
	        child.fieldEditable = true;
	        if (child.field == undefined) {
	          child.field = '';
	        }
	      });

	      if (oldType == 'string' || oldType == 'auto') {
	        this.expanded = true;
	      }
	    }
	    else if (newType == 'array') {
	      if (!this.childs) {
	        this.childs = [];
	      }

	      this.childs.forEach(function (child, index) {
	        child.clearDom();
	        child.fieldEditable = false;
	        child.index = index;
	      });

	      if (oldType == 'string' || oldType == 'auto') {
	        this.expanded = true;
	      }
	    }
	    else {
	      this.expanded = false;
	    }

	    // create new DOM
	    if (table) {
	      if (nextTr) {
	        table.insertBefore(this.getDom(), nextTr);
	      }
	      else {
	        table.appendChild(this.getDom());
	      }
	    }
	    this.showChilds();
	  }

	  if (newType == 'auto' || newType == 'string') {
	    // cast value to the correct type
	    if (newType == 'string') {
	      this.value = String(this.value);
	    }
	    else {
	      this.value = this._stringCast(String(this.value));
	    }

	    this.focus();
	  }

	  this.updateDom({'updateIndexes': true});
	};

	/**
	 * Retrieve value from DOM
	 * @param {boolean} [silent]  If true (default), no errors will be thrown in
	 *                            case of invalid data
	 * @private
	 */
	Node.prototype._getDomValue = function(silent) {
	  if (this.dom.value && this.type != 'array' && this.type != 'object') {
	    this.valueInnerText = util.getInnerText(this.dom.value);
	  }

	  if (this.valueInnerText != undefined) {
	    try {
	      // retrieve the value
	      var value;
	      if (this.type == 'string') {
	        value = this._unescapeHTML(this.valueInnerText);
	      }
	      else {
	        var str = this._unescapeHTML(this.valueInnerText);
	        value = this._stringCast(str);
	      }
	      if (value !== this.value) {
	        this.value = value;
	        this._debouncedOnChangeValue();
	      }
	    }
	    catch (err) {
	      this.value = undefined;
	      // TODO: sent an action with the new, invalid value?
	      if (silent !== true) {
	        throw err;
	      }
	    }
	  }
	};

	/**
	 * Handle a changed value
	 * @private
	 */
	Node.prototype._onChangeValue = function () {
	  // get current selection, then override the range such that we can select
	  // the added/removed text on undo/redo
	  var oldSelection = this.editor.getSelection();
	  if (oldSelection.range) {
	    var undoDiff = util.textDiff(String(this.value), String(this.previousValue));
	    oldSelection.range.startOffset = undoDiff.start;
	    oldSelection.range.endOffset = undoDiff.end;
	  }
	  var newSelection = this.editor.getSelection();
	  if (newSelection.range) {
	    var redoDiff = util.textDiff(String(this.previousValue), String(this.value));
	    newSelection.range.startOffset = redoDiff.start;
	    newSelection.range.endOffset = redoDiff.end;
	  }

	  this.editor._onAction('editValue', {
	    node: this,
	    oldValue: this.previousValue,
	    newValue: this.value,
	    oldSelection: oldSelection,
	    newSelection: newSelection
	  });

	  this.previousValue = this.value;
	};

	/**
	 * Handle a changed field
	 * @private
	 */
	Node.prototype._onChangeField = function () {
	  // get current selection, then override the range such that we can select
	  // the added/removed text on undo/redo
	  var oldSelection = this.editor.getSelection();
	  if (oldSelection.range) {
	    var undoDiff = util.textDiff(this.field, this.previousField);
	    oldSelection.range.startOffset = undoDiff.start;
	    oldSelection.range.endOffset = undoDiff.end;
	  }
	  var newSelection = this.editor.getSelection();
	  if (newSelection.range) {
	    var redoDiff = util.textDiff(this.previousField, this.field);
	    newSelection.range.startOffset = redoDiff.start;
	    newSelection.range.endOffset = redoDiff.end;
	  }

	  this.editor._onAction('editField', {
	    node: this,
	    oldValue: this.previousField,
	    newValue: this.field,
	    oldSelection: oldSelection,
	    newSelection: newSelection
	  });

	  this.previousField = this.field;
	};

	/**
	 * Update dom value:
	 * - the text color of the value, depending on the type of the value
	 * - the height of the field, depending on the width
	 * - background color in case it is empty
	 * @private
	 */
	Node.prototype._updateDomValue = function () {
	  var domValue = this.dom.value;
	  if (domValue) {
	    var classNames = ['jsoneditor-value'];


	    // set text color depending on value type
	    var value = this.value;
	    var type = (this.type == 'auto') ? util.type(value) : this.type;
	    var isUrl = type == 'string' && util.isUrl(value);
	    classNames.push('jsoneditor-' + type);
	    if (isUrl) {
	      classNames.push('jsoneditor-url');
	    }

	    // visual styling when empty
	    var isEmpty = (String(this.value) == '' && this.type != 'array' && this.type != 'object');
	    if (isEmpty) {
	      classNames.push('jsoneditor-empty');
	    }

	    // highlight when there is a search result
	    if (this.searchValueActive) {
	      classNames.push('jsoneditor-highlight-active');
	    }
	    if (this.searchValue) {
	      classNames.push('jsoneditor-highlight');
	    }

	    domValue.className = classNames.join(' ');

	    // update title
	    if (type == 'array' || type == 'object') {
	      var count = this.childs ? this.childs.length : 0;
	      domValue.title = this.type + ' containing ' + count + ' items';
	    }
	    else if (isUrl && this.editable.value) {
	      domValue.title = 'Ctrl+Click or Ctrl+Enter to open url in new window';
	    }
	    else {
	      domValue.title = '';
	    }

	    // show checkbox when the value is a boolean
	    if (type === 'boolean' && this.editable.value) {
	      if (!this.dom.checkbox) {
	        this.dom.checkbox = document.createElement('input');
	        this.dom.checkbox.type = 'checkbox';
	        this.dom.tdCheckbox = document.createElement('td');
	        this.dom.tdCheckbox.className = 'jsoneditor-tree';
	        this.dom.tdCheckbox.appendChild(this.dom.checkbox);

	        this.dom.tdValue.parentNode.insertBefore(this.dom.tdCheckbox, this.dom.tdValue);
	      }

	      this.dom.checkbox.checked = this.value;
	    }
	    else {
	      // cleanup checkbox when displayed
	      if (this.dom.tdCheckbox) {
	        this.dom.tdCheckbox.parentNode.removeChild(this.dom.tdCheckbox);
	        delete this.dom.tdCheckbox;
	        delete this.dom.checkbox;
	      }
	    }

	    if (this.enum && this.editable.value) {
	      // create select box when this node has an enum object
	      if (!this.dom.select) {
	        this.dom.select = document.createElement('select');
	        this.id = this.field + "_" + new Date().getUTCMilliseconds();
	        this.dom.select.id = this.id;
	        this.dom.select.name = this.dom.select.id;

	        //Create the default empty option
	        this.dom.select.option = document.createElement('option');
	        this.dom.select.option.value = '';
	        this.dom.select.option.innerHTML = '--';
	        this.dom.select.appendChild(this.dom.select.option);

	        //Iterate all enum values and add them as options
	        for(var i = 0; i < this.enum.length; i++) {
	          this.dom.select.option = document.createElement('option');
	          this.dom.select.option.value = this.enum[i];
	          this.dom.select.option.innerHTML = this.enum[i];
	          if(this.dom.select.option.value == this.value){
	            this.dom.select.option.selected = true;
	          }
	          this.dom.select.appendChild(this.dom.select.option);
	        }

	        this.dom.tdSelect = document.createElement('td');
	        this.dom.tdSelect.className = 'jsoneditor-tree';
	        this.dom.tdSelect.appendChild(this.dom.select);
	        this.dom.tdValue.parentNode.insertBefore(this.dom.tdSelect, this.dom.tdValue);
	      }

	      // If the enum is inside a composite type display
	      // both the simple input and the dropdown field
	      if(this.schema && (
	          !this.schema.hasOwnProperty("oneOf") &&
	          !this.schema.hasOwnProperty("anyOf") &&
	          !this.schema.hasOwnProperty("allOf"))
	      ) {
	        this.valueFieldHTML = this.dom.tdValue.innerHTML;
	        this.dom.tdValue.style.visibility = 'hidden';
	        this.dom.tdValue.innerHTML = '';
	      } else {
	        delete this.valueFieldHTML;
	      }
	    }
	    else {
	      // cleanup select box when displayed
	      if (this.dom.tdSelect) {
	        this.dom.tdSelect.parentNode.removeChild(this.dom.tdSelect);
	        delete this.dom.tdSelect;
	        delete this.dom.select;
	        this.dom.tdValue.innerHTML = this.valueFieldHTML;
	        this.dom.tdValue.style.visibility = '';
	        delete this.valueFieldHTML;
	      }
	    }

	    // strip formatting from the contents of the editable div
	    util.stripFormatting(domValue);
	  }
	};

	/**
	 * Update dom field:
	 * - the text color of the field, depending on the text
	 * - the height of the field, depending on the width
	 * - background color in case it is empty
	 * @private
	 */
	Node.prototype._updateDomField = function () {
	  var domField = this.dom.field;
	  if (domField) {
	    // make backgound color lightgray when empty
	    var isEmpty = (String(this.field) == '' && this.parent.type != 'array');
	    if (isEmpty) {
	      util.addClassName(domField, 'jsoneditor-empty');
	    }
	    else {
	      util.removeClassName(domField, 'jsoneditor-empty');
	    }

	    // highlight when there is a search result
	    if (this.searchFieldActive) {
	      util.addClassName(domField, 'jsoneditor-highlight-active');
	    }
	    else {
	      util.removeClassName(domField, 'jsoneditor-highlight-active');
	    }
	    if (this.searchField) {
	      util.addClassName(domField, 'jsoneditor-highlight');
	    }
	    else {
	      util.removeClassName(domField, 'jsoneditor-highlight');
	    }

	    // strip formatting from the contents of the editable div
	    util.stripFormatting(domField);
	  }
	};

	/**
	 * Retrieve field from DOM
	 * @param {boolean} [silent]  If true (default), no errors will be thrown in
	 *                            case of invalid data
	 * @private
	 */
	Node.prototype._getDomField = function(silent) {
	  if (this.dom.field && this.fieldEditable) {
	    this.fieldInnerText = util.getInnerText(this.dom.field);
	  }

	  if (this.fieldInnerText != undefined) {
	    try {
	      var field = this._unescapeHTML(this.fieldInnerText);

	      if (field !== this.field) {
	        this.field = field;
	        this._debouncedOnChangeField();
	      }
	    }
	    catch (err) {
	      this.field = undefined;
	      // TODO: sent an action here, with the new, invalid value?
	      if (silent !== true) {
	        throw err;
	      }
	    }
	  }
	};

	/**
	 * Validate this node and all it's childs
	 * @return {Array.<{node: Node, error: {message: string}}>} Returns a list with duplicates
	 */
	Node.prototype.validate = function () {
	  var errors = [];

	  // find duplicate keys
	  if (this.type === 'object') {
	    var keys = {};
	    var duplicateKeys = [];
	    for (var i = 0; i < this.childs.length; i++) {
	      var child = this.childs[i];
	      if (keys.hasOwnProperty(child.field)) {
	        duplicateKeys.push(child.field);
	      }
	      keys[child.field] = true;
	    }

	    if (duplicateKeys.length > 0) {
	      errors = this.childs
	          .filter(function (node) {
	            return duplicateKeys.indexOf(node.field) !== -1;
	          })
	          .map(function (node) {
	            return {
	              node: node,
	              error: {
	                message: 'duplicate key "' + node.field + '"'
	              }
	            }
	          });
	    }
	  }

	  // recurse over the childs
	  if (this.childs) {
	    for (var i = 0; i < this.childs.length; i++) {
	      var e = this.childs[i].validate();
	      if (e.length > 0) {
	        errors = errors.concat(e);
	      }
	    }
	  }

	  return errors;
	};

	/**
	 * Clear the dom of the node
	 */
	Node.prototype.clearDom = function() {
	  // TODO: hide the node first?
	  //this.hide();
	  // TODO: recursively clear dom?

	  this.dom = {};
	};

	/**
	 * Get the HTML DOM TR element of the node.
	 * The dom will be generated when not yet created
	 * @return {Element} tr    HTML DOM TR Element
	 */
	Node.prototype.getDom = function() {
	  var dom = this.dom;
	  if (dom.tr) {
	    return dom.tr;
	  }

	  this._updateEditability();

	  // create row
	  dom.tr = document.createElement('tr');
	  dom.tr.node = this;

	  if (this.editor.options.mode === 'tree') { // note: we take here the global setting
	    var tdDrag = document.createElement('td');
	    if (this.editable.field) {
	      // create draggable area
	      if (this.parent) {
	        var domDrag = document.createElement('button');
	        domDrag.type = 'button';
	        dom.drag = domDrag;
	        domDrag.className = 'jsoneditor-dragarea';
	        domDrag.title = 'Drag to move this field (Alt+Shift+Arrows)';
	        tdDrag.appendChild(domDrag);
	      }
	    }
	    dom.tr.appendChild(tdDrag);

	    // create context menu
	    var tdMenu = document.createElement('td');
	    var menu = document.createElement('button');
	    menu.type = 'button';
	    dom.menu = menu;
	    menu.className = 'jsoneditor-contextmenu';
	    menu.title = 'Click to open the actions menu (Ctrl+M)';
	    tdMenu.appendChild(dom.menu);
	    dom.tr.appendChild(tdMenu);
	  }

	  // create tree and field
	  var tdField = document.createElement('td');
	  dom.tr.appendChild(tdField);
	  dom.tree = this._createDomTree();
	  tdField.appendChild(dom.tree);

	  this.updateDom({'updateIndexes': true});

	  return dom.tr;
	};

	/**
	 * DragStart event, fired on mousedown on the dragarea at the left side of a Node
	 * @param {Node[] | Node} nodes
	 * @param {Event} event
	 */
	Node.onDragStart = function (nodes, event) {
	  if (!Array.isArray(nodes)) {
	    return Node.onDragStart([nodes], event);
	  }
	  if (nodes.length === 0) {
	    return;
	  }

	  var firstNode = nodes[0];
	  var lastNode = nodes[nodes.length - 1];
	  var draggedNode = Node.getNodeFromTarget(event.target);
	  var beforeNode = lastNode._nextSibling();
	  var editor = firstNode.editor;

	  // in case of multiple selected nodes, offsetY prevents the selection from
	  // jumping when you start dragging one of the lower down nodes in the selection
	  var offsetY = util.getAbsoluteTop(draggedNode.dom.tr) - util.getAbsoluteTop(firstNode.dom.tr);

	  if (!editor.mousemove) {
	    editor.mousemove = util.addEventListener(window, 'mousemove', function (event) {
	      Node.onDrag(nodes, event);
	    });
	  }

	  if (!editor.mouseup) {
	    editor.mouseup = util.addEventListener(window, 'mouseup',function (event ) {
	      Node.onDragEnd(nodes, event);
	    });
	  }

	  editor.highlighter.lock();
	  editor.drag = {
	    oldCursor: document.body.style.cursor,
	    oldSelection: editor.getSelection(),
	    oldBeforeNode: beforeNode,
	    mouseX: event.pageX,
	    offsetY: offsetY,
	    level: firstNode.getLevel()
	  };
	  document.body.style.cursor = 'move';

	  event.preventDefault();
	};

	/**
	 * Drag event, fired when moving the mouse while dragging a Node
	 * @param {Node[] | Node} nodes
	 * @param {Event} event
	 */
	Node.onDrag = function (nodes, event) {
	  if (!Array.isArray(nodes)) {
	    return Node.onDrag([nodes], event);
	  }
	  if (nodes.length === 0) {
	    return;
	  }

	  // TODO: this method has grown too large. Split it in a number of methods
	  var editor = nodes[0].editor;
	  var mouseY = event.pageY - editor.drag.offsetY;
	  var mouseX = event.pageX;
	  var trThis, trPrev, trNext, trFirst, trLast, trRoot;
	  var nodePrev, nodeNext;
	  var topThis, topPrev, topFirst, heightThis, bottomNext, heightNext;
	  var moved = false;

	  // TODO: add an ESC option, which resets to the original position

	  // move up/down
	  var firstNode = nodes[0];
	  trThis = firstNode.dom.tr;
	  topThis = util.getAbsoluteTop(trThis);
	  heightThis = trThis.offsetHeight;
	  if (mouseY < topThis) {
	    // move up
	    trPrev = trThis;
	    do {
	      trPrev = trPrev.previousSibling;
	      nodePrev = Node.getNodeFromTarget(trPrev);
	      topPrev = trPrev ? util.getAbsoluteTop(trPrev) : 0;
	    }
	    while (trPrev && mouseY < topPrev);

	    if (nodePrev && !nodePrev.parent) {
	      nodePrev = undefined;
	    }

	    if (!nodePrev) {
	      // move to the first node
	      trRoot = trThis.parentNode.firstChild;
	      trPrev = trRoot ? trRoot.nextSibling : undefined;
	      nodePrev = Node.getNodeFromTarget(trPrev);
	      if (nodePrev == firstNode) {
	        nodePrev = undefined;
	      }
	    }

	    if (nodePrev) {
	      // check if mouseY is really inside the found node
	      trPrev = nodePrev.dom.tr;
	      topPrev = trPrev ? util.getAbsoluteTop(trPrev) : 0;
	      if (mouseY > topPrev + heightThis) {
	        nodePrev = undefined;
	      }
	    }

	    if (nodePrev) {
	      nodes.forEach(function (node) {
	        nodePrev.parent.moveBefore(node, nodePrev);
	      });
	      moved = true;
	    }
	  }
	  else {
	    // move down
	    var lastNode = nodes[nodes.length - 1];
	    trLast = (lastNode.expanded && lastNode.append) ? lastNode.append.getDom() : lastNode.dom.tr;
	    trFirst = trLast ? trLast.nextSibling : undefined;
	    if (trFirst) {
	      topFirst = util.getAbsoluteTop(trFirst);
	      trNext = trFirst;
	      do {
	        nodeNext = Node.getNodeFromTarget(trNext);
	        if (trNext) {
	          bottomNext = trNext.nextSibling ?
	              util.getAbsoluteTop(trNext.nextSibling) : 0;
	          heightNext = trNext ? (bottomNext - topFirst) : 0;

	          if (nodeNext.parent.childs.length == nodes.length &&
	              nodeNext.parent.childs[nodes.length - 1] == lastNode) {
	            // We are about to remove the last child of this parent,
	            // which will make the parents appendNode visible.
	            topThis += 27;
	            // TODO: dangerous to suppose the height of the appendNode a constant of 27 px.
	          }
	        }

	        trNext = trNext.nextSibling;
	      }
	      while (trNext && mouseY > topThis + heightNext);

	      if (nodeNext && nodeNext.parent) {
	        // calculate the desired level
	        var diffX = (mouseX - editor.drag.mouseX);
	        var diffLevel = Math.round(diffX / 24 / 2);
	        var level = editor.drag.level + diffLevel; // desired level
	        var levelNext = nodeNext.getLevel();     // level to be

	        // find the best fitting level (move upwards over the append nodes)
	        trPrev = nodeNext.dom.tr.previousSibling;
	        while (levelNext < level && trPrev) {
	          nodePrev = Node.getNodeFromTarget(trPrev);

	          var isDraggedNode = nodes.some(function (node) {
	            return node === nodePrev || nodePrev._isChildOf(node);
	          });

	          if (isDraggedNode) {
	            // neglect the dragged nodes themselves and their childs
	          }
	          else if (nodePrev instanceof AppendNode) {
	            var childs = nodePrev.parent.childs;
	            if (childs.length != nodes.length || childs[nodes.length - 1] != lastNode) {
	              // non-visible append node of a list of childs
	              // consisting of not only this node (else the
	              // append node will change into a visible "empty"
	              // text when removing this node).
	              nodeNext = Node.getNodeFromTarget(trPrev);
	              levelNext = nodeNext.getLevel();
	            }
	            else {
	              break;
	            }
	          }
	          else {
	            break;
	          }

	          trPrev = trPrev.previousSibling;
	        }

	        // move the node when its position is changed
	        if (trLast.nextSibling != nodeNext.dom.tr) {
	          nodes.forEach(function (node) {
	            nodeNext.parent.moveBefore(node, nodeNext);
	          });
	          moved = true;
	        }
	      }
	    }
	  }

	  if (moved) {
	    // update the dragging parameters when moved
	    editor.drag.mouseX = mouseX;
	    editor.drag.level = firstNode.getLevel();
	  }

	  // auto scroll when hovering around the top of the editor
	  editor.startAutoScroll(mouseY);

	  event.preventDefault();
	};

	/**
	 * Drag event, fired on mouseup after having dragged a node
	 * @param {Node[] | Node} nodes
	 * @param {Event} event
	 */
	Node.onDragEnd = function (nodes, event) {
	  if (!Array.isArray(nodes)) {
	    return Node.onDrag([nodes], event);
	  }
	  if (nodes.length === 0) {
	    return;
	  }

	  var firstNode = nodes[0];
	  var editor = firstNode.editor;
	  var parent = firstNode.parent;
	  var firstIndex = parent.childs.indexOf(firstNode);
	  var beforeNode = parent.childs[firstIndex + nodes.length] || parent.append;

	  // set focus to the context menu button of the first node
	  if (nodes[0]) {
	    nodes[0].dom.menu.focus();
	  }

	  var params = {
	    nodes: nodes,
	    oldSelection: editor.drag.oldSelection,
	    newSelection: editor.getSelection(),
	    oldBeforeNode: editor.drag.oldBeforeNode,
	    newBeforeNode: beforeNode
	  };

	  if (params.oldBeforeNode != params.newBeforeNode) {
	    // only register this action if the node is actually moved to another place
	    editor._onAction('moveNodes', params);
	  }

	  document.body.style.cursor = editor.drag.oldCursor;
	  editor.highlighter.unlock();
	  nodes.forEach(function (node) {
	    if (event.target !== node.dom.drag && event.target !== node.dom.menu) {
	      editor.highlighter.unhighlight();
	    }
	  });
	  delete editor.drag;

	  if (editor.mousemove) {
	    util.removeEventListener(window, 'mousemove', editor.mousemove);
	    delete editor.mousemove;
	  }
	  if (editor.mouseup) {
	    util.removeEventListener(window, 'mouseup', editor.mouseup);
	    delete editor.mouseup;
	  }

	  // Stop any running auto scroll
	  editor.stopAutoScroll();

	  event.preventDefault();
	};

	/**
	 * Test if this node is a child of an other node
	 * @param {Node} node
	 * @return {boolean} isChild
	 * @private
	 */
	Node.prototype._isChildOf = function (node) {
	  var n = this.parent;
	  while (n) {
	    if (n == node) {
	      return true;
	    }
	    n = n.parent;
	  }

	  return false;
	};

	/**
	 * Create an editable field
	 * @return {Element} domField
	 * @private
	 */
	Node.prototype._createDomField = function () {
	  return document.createElement('div');
	};

	/**
	 * Set highlighting for this node and all its childs.
	 * Only applied to the currently visible (expanded childs)
	 * @param {boolean} highlight
	 */
	Node.prototype.setHighlight = function (highlight) {
	  if (this.dom.tr) {
	    if (highlight) {
	      util.addClassName(this.dom.tr, 'jsoneditor-highlight');
	    }
	    else {
	      util.removeClassName(this.dom.tr, 'jsoneditor-highlight');
	    }

	    if (this.append) {
	      this.append.setHighlight(highlight);
	    }

	    if (this.childs) {
	      this.childs.forEach(function (child) {
	        child.setHighlight(highlight);
	      });
	    }
	  }
	};

	/**
	 * Select or deselect a node
	 * @param {boolean} selected
	 * @param {boolean} [isFirst]
	 */
	Node.prototype.setSelected = function (selected, isFirst) {
	  this.selected = selected;

	  if (this.dom.tr) {
	    if (selected) {
	      util.addClassName(this.dom.tr, 'jsoneditor-selected');
	    }
	    else {
	      util.removeClassName(this.dom.tr, 'jsoneditor-selected');
	    }

	    if (isFirst) {
	      util.addClassName(this.dom.tr, 'jsoneditor-first');
	    }
	    else {
	      util.removeClassName(this.dom.tr, 'jsoneditor-first');
	    }

	    if (this.append) {
	      this.append.setSelected(selected);
	    }

	    if (this.childs) {
	      this.childs.forEach(function (child) {
	        child.setSelected(selected);
	      });
	    }
	  }
	};

	/**
	 * Update the value of the node. Only primitive types are allowed, no Object
	 * or Array is allowed.
	 * @param {String | Number | Boolean | null} value
	 */
	Node.prototype.updateValue = function (value) {
	  this.value = value;
	  this.updateDom();
	};

	/**
	 * Update the field of the node.
	 * @param {String} field
	 */
	Node.prototype.updateField = function (field) {
	  this.field = field;
	  this.updateDom();
	};

	/**
	 * Update the HTML DOM, optionally recursing through the childs
	 * @param {Object} [options] Available parameters:
	 *                          {boolean} [recurse]         If true, the
	 *                          DOM of the childs will be updated recursively.
	 *                          False by default.
	 *                          {boolean} [updateIndexes]   If true, the childs
	 *                          indexes of the node will be updated too. False by
	 *                          default.
	 */
	Node.prototype.updateDom = function (options) {
	  // update level indentation
	  var domTree = this.dom.tree;
	  if (domTree) {
	    domTree.style.marginLeft = this.getLevel() * 24 + 'px';
	  }

	  // apply field to DOM
	  var domField = this.dom.field;
	  if (domField) {
	    if (this.fieldEditable) {
	      // parent is an object
	      domField.contentEditable = this.editable.field;
	      domField.spellcheck = false;
	      domField.className = 'jsoneditor-field';
	    }
	    else {
	      // parent is an array this is the root node
	      domField.className = 'jsoneditor-readonly';
	    }

	    var fieldText;
	    if (this.index != undefined) {
	      fieldText = this.index;
	    }
	    else if (this.field != undefined) {
	      fieldText = this.field;
	    }
	    else if (this._hasChilds()) {
	      fieldText = this.type;
	    }
	    else {
	      fieldText = '';
	    }
	    domField.innerHTML = this._escapeHTML(fieldText);

	    this._updateSchema();
	  }

	  // apply value to DOM
	  var domValue = this.dom.value;
	  if (domValue) {
	    var count = this.childs ? this.childs.length : 0;
	    if (this.type == 'array') {
	      domValue.innerHTML = '[' + count + ']';
	      util.addClassName(this.dom.tr, 'jsoneditor-expandable');
	    }
	    else if (this.type == 'object') {
	      domValue.innerHTML = '{' + count + '}';
	      util.addClassName(this.dom.tr, 'jsoneditor-expandable');
	    }
	    else {
	      domValue.innerHTML = this._escapeHTML(this.value);
	      util.removeClassName(this.dom.tr, 'jsoneditor-expandable');
	    }
	  }

	  // update field and value
	  this._updateDomField();
	  this._updateDomValue();

	  // update childs indexes
	  if (options && options.updateIndexes === true) {
	    // updateIndexes is true or undefined
	    this._updateDomIndexes();
	  }

	  if (options && options.recurse === true) {
	    // recurse is true or undefined. update childs recursively
	    if (this.childs) {
	      this.childs.forEach(function (child) {
	        child.updateDom(options);
	      });
	    }
	  }

	  // update row with append button
	  if (this.append) {
	    this.append.updateDom();
	  }
	};

	/**
	 * Locate the JSON schema of the node and check for any enum type
	 * @private
	 */
	Node.prototype._updateSchema = function () {
	  //Locating the schema of the node and checking for any enum type
	  if(this.editor && this.editor.options) {
	    // find the part of the json schema matching this nodes path
	    this.schema = Node._findSchema(this.editor.options.schema, this.getPath());
	    if (this.schema) {
	      this.enum = Node._findEnum(this.schema);
	    }
	    else {
	      delete this.enum;
	    }
	  }
	};

	/**
	 * find an enum definition in a JSON schema, as property `enum` or inside
	 * one of the schemas composites (`oneOf`, `anyOf`, `allOf`)
	 * @param  {Object} schema
	 * @return {Array | null} Returns the enum when found, null otherwise.
	 * @private
	 */
	Node._findEnum = function (schema) {
	  if (schema.enum) {
	    return schema.enum;
	  }

	  var composite = schema.oneOf || schema.anyOf || schema.allOf;
	  if (composite) {
	    var match = composite.filter(function (entry) {return entry.enum});
	    if (match.length > 0) {
	      return match[0].enum;
	    }
	  }

	  return null
	};

	/**
	 * Return the part of a JSON schema matching given path.
	 * @param {Object} schema
	 * @param {Array.<string | number>} path
	 * @return {Object | null}
	 * @private
	 */
	Node._findSchema = function (schema, path) {
	  var childSchema = schema;

	  for (var i = 0; i < path.length && childSchema; i++) {
	    var key = path[i];
	    if (typeof key === 'string' && childSchema.properties) {
	      childSchema = childSchema.properties[key] || null
	    }
	    else if (typeof key === 'number' && childSchema.items) {
	      childSchema = childSchema.items
	    }
	  }

	  return childSchema
	};

	/**
	 * Update the DOM of the childs of a node: update indexes and undefined field
	 * names.
	 * Only applicable when structure is an array or object
	 * @private
	 */
	Node.prototype._updateDomIndexes = function () {
	  var domValue = this.dom.value;
	  var childs = this.childs;
	  if (domValue && childs) {
	    if (this.type == 'array') {
	      childs.forEach(function (child, index) {
	        child.index = index;
	        var childField = child.dom.field;
	        if (childField) {
	          childField.innerHTML = index;
	        }
	      });
	    }
	    else if (this.type == 'object') {
	      childs.forEach(function (child) {
	        if (child.index != undefined) {
	          delete child.index;

	          if (child.field == undefined) {
	            child.field = '';
	          }
	        }
	      });
	    }
	  }
	};

	/**
	 * Create an editable value
	 * @private
	 */
	Node.prototype._createDomValue = function () {
	  var domValue;

	  if (this.type == 'array') {
	    domValue = document.createElement('div');
	    domValue.innerHTML = '[...]';
	  }
	  else if (this.type == 'object') {
	    domValue = document.createElement('div');
	    domValue.innerHTML = '{...}';
	  }
	  else {
	    if (!this.editable.value && util.isUrl(this.value)) {
	      // create a link in case of read-only editor and value containing an url
	      domValue = document.createElement('a');
	      domValue.href = this.value;
	      domValue.target = '_blank';
	      domValue.innerHTML = this._escapeHTML(this.value);
	    }
	    else {
	      // create an editable or read-only div
	      domValue = document.createElement('div');
	      domValue.contentEditable = this.editable.value;
	      domValue.spellcheck = false;
	      domValue.innerHTML = this._escapeHTML(this.value);
	    }
	  }

	  return domValue;
	};

	/**
	 * Create an expand/collapse button
	 * @return {Element} expand
	 * @private
	 */
	Node.prototype._createDomExpandButton = function () {
	  // create expand button
	  var expand = document.createElement('button');
	  expand.type = 'button';
	  if (this._hasChilds()) {
	    expand.className = this.expanded ? 'jsoneditor-expanded' : 'jsoneditor-collapsed';
	    expand.title =
	        'Click to expand/collapse this field (Ctrl+E). \n' +
	        'Ctrl+Click to expand/collapse including all childs.';
	  }
	  else {
	    expand.className = 'jsoneditor-invisible';
	    expand.title = '';
	  }

	  return expand;
	};


	/**
	 * Create a DOM tree element, containing the expand/collapse button
	 * @return {Element} domTree
	 * @private
	 */
	Node.prototype._createDomTree = function () {
	  var dom = this.dom;
	  var domTree = document.createElement('table');
	  var tbody = document.createElement('tbody');
	  domTree.style.borderCollapse = 'collapse'; // TODO: put in css
	  domTree.className = 'jsoneditor-values';
	  domTree.appendChild(tbody);
	  var tr = document.createElement('tr');
	  tbody.appendChild(tr);

	  // create expand button
	  var tdExpand = document.createElement('td');
	  tdExpand.className = 'jsoneditor-tree';
	  tr.appendChild(tdExpand);
	  dom.expand = this._createDomExpandButton();
	  tdExpand.appendChild(dom.expand);
	  dom.tdExpand = tdExpand;

	  // create the field
	  var tdField = document.createElement('td');
	  tdField.className = 'jsoneditor-tree';
	  tr.appendChild(tdField);
	  dom.field = this._createDomField();
	  tdField.appendChild(dom.field);
	  dom.tdField = tdField;

	  // create a separator
	  var tdSeparator = document.createElement('td');
	  tdSeparator.className = 'jsoneditor-tree';
	  tr.appendChild(tdSeparator);
	  if (this.type != 'object' && this.type != 'array') {
	    tdSeparator.appendChild(document.createTextNode(':'));
	    tdSeparator.className = 'jsoneditor-separator';
	  }
	  dom.tdSeparator = tdSeparator;

	  // create the value
	  var tdValue = document.createElement('td');
	  tdValue.className = 'jsoneditor-tree';
	  tr.appendChild(tdValue);
	  dom.value = this._createDomValue();
	  tdValue.appendChild(dom.value);
	  dom.tdValue = tdValue;

	  return domTree;
	};

	/**
	 * Handle an event. The event is caught centrally by the editor
	 * @param {Event} event
	 */
	Node.prototype.onEvent = function (event) {
	  var type = event.type,
	      target = event.target || event.srcElement,
	      dom = this.dom,
	      node = this,
	      expandable = this._hasChilds();

	  // check if mouse is on menu or on dragarea.
	  // If so, highlight current row and its childs
	  if (target == dom.drag || target == dom.menu) {
	    if (type == 'mouseover') {
	      this.editor.highlighter.highlight(this);
	    }
	    else if (type == 'mouseout') {
	      this.editor.highlighter.unhighlight();
	    }
	  }

	  // context menu events
	  if (type == 'click' && target == dom.menu) {
	    var highlighter = node.editor.highlighter;
	    highlighter.highlight(node);
	    highlighter.lock();
	    util.addClassName(dom.menu, 'jsoneditor-selected');
	    this.showContextMenu(dom.menu, function () {
	      util.removeClassName(dom.menu, 'jsoneditor-selected');
	      highlighter.unlock();
	      highlighter.unhighlight();
	    });
	  }

	  // expand events
	  if (type == 'click') {
	    if (target == dom.expand ||
	        ((node.editor.options.mode === 'view' || node.editor.options.mode === 'form') && target.nodeName === 'DIV')) {
	      if (expandable) {
	        var recurse = event.ctrlKey; // with ctrl-key, expand/collapse all
	        this._onExpand(recurse);
	      }
	    }
	  }

	  // swap the value of a boolean when the checkbox displayed left is clicked
	  if (type == 'change' && target == dom.checkbox) {
	    this.dom.value.innerHTML = !this.value;
	    this._getDomValue();
	  }

	  // update the value of the node based on the selected option
	  if (type == 'change' && target == dom.select) {
	    this.dom.value.innerHTML = dom.select.value;
	    this._getDomValue();
	    this._updateDomValue();
	  }

	  // value events
	  var domValue = dom.value;
	  if (target == domValue) {
	    //noinspection FallthroughInSwitchStatementJS
	    switch (type) {
	      case 'blur':
	      case 'change':
	        this._getDomValue(true);
	        this._updateDomValue();
	        if (this.value) {
	          domValue.innerHTML = this._escapeHTML(this.value);
	        }
	        break;

	      case 'input':
	        //this._debouncedGetDomValue(true); // TODO
	        this._getDomValue(true);
	        this._updateDomValue();
	        break;

	      case 'keydown':
	      case 'mousedown':
	          // TODO: cleanup
	        this.editor.selection = this.editor.getSelection();
	        break;

	      case 'click':
	        if (event.ctrlKey || !this.editable.value) {
	          if (util.isUrl(this.value)) {
	            window.open(this.value, '_blank');
	          }
	        }
	        break;

	      case 'keyup':
	        //this._debouncedGetDomValue(true); // TODO
	        this._getDomValue(true);
	        this._updateDomValue();
	        break;

	      case 'cut':
	      case 'paste':
	        setTimeout(function () {
	          node._getDomValue(true);
	          node._updateDomValue();
	        }, 1);
	        break;
	    }
	  }

	  // field events
	  var domField = dom.field;
	  if (target == domField) {
	    switch (type) {
	      case 'blur':
	      case 'change':
	        this._getDomField(true);
	        this._updateDomField();
	        if (this.field) {
	          domField.innerHTML = this._escapeHTML(this.field);
	        }
	        break;

	      case 'input':
	        this._getDomField(true);
	        this._updateSchema();
	        this._updateDomField();
	        this._updateDomValue();
	        break;

	      case 'keydown':
	      case 'mousedown':
	        this.editor.selection = this.editor.getSelection();
	        break;

	      case 'keyup':
	        this._getDomField(true);
	        this._updateDomField();
	        break;

	      case 'cut':
	      case 'paste':
	        setTimeout(function () {
	          node._getDomField(true);
	          node._updateDomField();
	        }, 1);
	        break;
	    }
	  }

	  // focus
	  // when clicked in whitespace left or right from the field or value, set focus
	  var domTree = dom.tree;
	  if (target == domTree.parentNode && type == 'click' && !event.hasMoved) {
	    var left = (event.offsetX != undefined) ?
	        (event.offsetX < (this.getLevel() + 1) * 24) :
	        (event.pageX < util.getAbsoluteLeft(dom.tdSeparator));// for FF
	    if (left || expandable) {
	      // node is expandable when it is an object or array
	      if (domField) {
	        util.setEndOfContentEditable(domField);
	        domField.focus();
	      }
	    }
	    else {
	      if (domValue && !this.enum) {
	        util.setEndOfContentEditable(domValue);
	        domValue.focus();
	      }
	    }
	  }
	  if (((target == dom.tdExpand && !expandable) || target == dom.tdField || target == dom.tdSeparator) &&
	      (type == 'click' && !event.hasMoved)) {
	    if (domField) {
	      util.setEndOfContentEditable(domField);
	      domField.focus();
	    }
	  }

	  if (type == 'keydown') {
	    this.onKeyDown(event);
	  }
	};

	/**
	 * Key down event handler
	 * @param {Event} event
	 */
	Node.prototype.onKeyDown = function (event) {
	  var keynum = event.which || event.keyCode;
	  var target = event.target || event.srcElement;
	  var ctrlKey = event.ctrlKey;
	  var shiftKey = event.shiftKey;
	  var altKey = event.altKey;
	  var handled = false;
	  var prevNode, nextNode, nextDom, nextDom2;
	  var editable = this.editor.options.mode === 'tree';
	  var oldSelection;
	  var oldBeforeNode;
	  var nodes;
	  var multiselection;
	  var selectedNodes = this.editor.multiselection.nodes.length > 0
	      ? this.editor.multiselection.nodes
	      : [this];
	  var firstNode = selectedNodes[0];
	  var lastNode = selectedNodes[selectedNodes.length - 1];

	  // console.log(ctrlKey, keynum, event.charCode); // TODO: cleanup
	  if (keynum == 13) { // Enter
	    if (target == this.dom.value) {
	      if (!this.editable.value || event.ctrlKey) {
	        if (util.isUrl(this.value)) {
	          window.open(this.value, '_blank');
	          handled = true;
	        }
	      }
	    }
	    else if (target == this.dom.expand) {
	      var expandable = this._hasChilds();
	      if (expandable) {
	        var recurse = event.ctrlKey; // with ctrl-key, expand/collapse all
	        this._onExpand(recurse);
	        target.focus();
	        handled = true;
	      }
	    }
	  }
	  else if (keynum == 68) {  // D
	    if (ctrlKey && editable) {   // Ctrl+D
	      Node.onDuplicate(selectedNodes);
	      handled = true;
	    }
	  }
	  else if (keynum == 69) { // E
	    if (ctrlKey) {       // Ctrl+E and Ctrl+Shift+E
	      this._onExpand(shiftKey);  // recurse = shiftKey
	      target.focus(); // TODO: should restore focus in case of recursing expand (which takes DOM offline)
	      handled = true;
	    }
	  }
	  else if (keynum == 77 && editable) { // M
	    if (ctrlKey) { // Ctrl+M
	      this.showContextMenu(target);
	      handled = true;
	    }
	  }
	  else if (keynum == 46 && editable) { // Del
	    if (ctrlKey) {       // Ctrl+Del
	      Node.onRemove(selectedNodes);
	      handled = true;
	    }
	  }
	  else if (keynum == 45 && editable) { // Ins
	    if (ctrlKey && !shiftKey) {       // Ctrl+Ins
	      this._onInsertBefore();
	      handled = true;
	    }
	    else if (ctrlKey && shiftKey) {   // Ctrl+Shift+Ins
	      this._onInsertAfter();
	      handled = true;
	    }
	  }
	  else if (keynum == 35) { // End
	    if (altKey) { // Alt+End
	      // find the last node
	      var endNode = this._lastNode();
	      if (endNode) {
	        endNode.focus(Node.focusElement || this._getElementName(target));
	      }
	      handled = true;
	    }
	  }
	  else if (keynum == 36) { // Home
	    if (altKey) { // Alt+Home
	      // find the first node
	      var homeNode = this._firstNode();
	      if (homeNode) {
	        homeNode.focus(Node.focusElement || this._getElementName(target));
	      }
	      handled = true;
	    }
	  }
	  else if (keynum == 37) {        // Arrow Left
	    if (altKey && !shiftKey) {  // Alt + Arrow Left
	      // move to left element
	      var prevElement = this._previousElement(target);
	      if (prevElement) {
	        this.focus(this._getElementName(prevElement));
	      }
	      handled = true;
	    }
	    else if (altKey && shiftKey && editable) { // Alt + Shift + Arrow left
	      if (lastNode.expanded) {
	        var appendDom = lastNode.getAppend();
	        nextDom = appendDom ? appendDom.nextSibling : undefined;
	      }
	      else {
	        var dom = lastNode.getDom();
	        nextDom = dom.nextSibling;
	      }
	      if (nextDom) {
	        nextNode = Node.getNodeFromTarget(nextDom);
	        nextDom2 = nextDom.nextSibling;
	        nextNode2 = Node.getNodeFromTarget(nextDom2);
	        if (nextNode && nextNode instanceof AppendNode &&
	            !(lastNode.parent.childs.length == 1) &&
	            nextNode2 && nextNode2.parent) {
	          oldSelection = this.editor.getSelection();
	          oldBeforeNode = lastNode._nextSibling();

	          selectedNodes.forEach(function (node) {
	            nextNode2.parent.moveBefore(node, nextNode2);
	          });
	          this.focus(Node.focusElement || this._getElementName(target));

	          this.editor._onAction('moveNodes', {
	            nodes: selectedNodes,
	            oldBeforeNode: oldBeforeNode,
	            newBeforeNode: nextNode2,
	            oldSelection: oldSelection,
	            newSelection: this.editor.getSelection()
	          });
	        }
	      }
	    }
	  }
	  else if (keynum == 38) {        // Arrow Up
	    if (altKey && !shiftKey) {  // Alt + Arrow Up
	      // find the previous node
	      prevNode = this._previousNode();
	      if (prevNode) {
	        this.editor.deselect(true);
	        prevNode.focus(Node.focusElement || this._getElementName(target));
	      }
	      handled = true;
	    }
	    else if (!altKey && ctrlKey && shiftKey && editable) { // Ctrl + Shift + Arrow Up
	      // select multiple nodes
	      prevNode = this._previousNode();
	      if (prevNode) {
	        multiselection = this.editor.multiselection;
	        multiselection.start = multiselection.start || this;
	        multiselection.end = prevNode;
	        nodes = this.editor._findTopLevelNodes(multiselection.start, multiselection.end);

	        this.editor.select(nodes);
	        prevNode.focus('field'); // select field as we know this always exists
	      }
	      handled = true;
	    }
	    else if (altKey && shiftKey && editable) { // Alt + Shift + Arrow Up
	      // find the previous node
	      prevNode = firstNode._previousNode();
	      if (prevNode && prevNode.parent) {
	        oldSelection = this.editor.getSelection();
	        oldBeforeNode = lastNode._nextSibling();

	        selectedNodes.forEach(function (node) {
	          prevNode.parent.moveBefore(node, prevNode);
	        });
	        this.focus(Node.focusElement || this._getElementName(target));

	        this.editor._onAction('moveNodes', {
	          nodes: selectedNodes,
	          oldBeforeNode: oldBeforeNode,
	          newBeforeNode: prevNode,
	          oldSelection: oldSelection,
	          newSelection: this.editor.getSelection()
	        });
	      }
	      handled = true;
	    }
	  }
	  else if (keynum == 39) {        // Arrow Right
	    if (altKey && !shiftKey) {  // Alt + Arrow Right
	      // move to right element
	      var nextElement = this._nextElement(target);
	      if (nextElement) {
	        this.focus(this._getElementName(nextElement));
	      }
	      handled = true;
	    }
	    else if (altKey && shiftKey && editable) { // Alt + Shift + Arrow Right
	      dom = firstNode.getDom();
	      var prevDom = dom.previousSibling;
	      if (prevDom) {
	        prevNode = Node.getNodeFromTarget(prevDom);
	        if (prevNode && prevNode.parent &&
	            (prevNode instanceof AppendNode)
	            && !prevNode.isVisible()) {
	          oldSelection = this.editor.getSelection();
	          oldBeforeNode = lastNode._nextSibling();

	          selectedNodes.forEach(function (node) {
	            prevNode.parent.moveBefore(node, prevNode);
	          });
	          this.focus(Node.focusElement || this._getElementName(target));

	          this.editor._onAction('moveNodes', {
	            nodes: selectedNodes,
	            oldBeforeNode: oldBeforeNode,
	            newBeforeNode: prevNode,
	            oldSelection: oldSelection,
	            newSelection: this.editor.getSelection()
	          });
	        }
	      }
	    }
	  }
	  else if (keynum == 40) {        // Arrow Down
	    if (altKey && !shiftKey) {  // Alt + Arrow Down
	      // find the next node
	      nextNode = this._nextNode();
	      if (nextNode) {
	        this.editor.deselect(true);
	        nextNode.focus(Node.focusElement || this._getElementName(target));
	      }
	      handled = true;
	    }
	    else if (!altKey && ctrlKey && shiftKey && editable) { // Ctrl + Shift + Arrow Down
	      // select multiple nodes
	      nextNode = this._nextNode();
	      if (nextNode) {
	        multiselection = this.editor.multiselection;
	        multiselection.start = multiselection.start || this;
	        multiselection.end = nextNode;
	        nodes = this.editor._findTopLevelNodes(multiselection.start, multiselection.end);

	        this.editor.select(nodes);
	        nextNode.focus('field'); // select field as we know this always exists
	      }
	      handled = true;
	    }
	    else if (altKey && shiftKey && editable) { // Alt + Shift + Arrow Down
	      // find the 2nd next node and move before that one
	      if (lastNode.expanded) {
	        nextNode = lastNode.append ? lastNode.append._nextNode() : undefined;
	      }
	      else {
	        nextNode = lastNode._nextNode();
	      }
	      var nextNode2 = nextNode && (nextNode._nextNode() || nextNode.parent.append);
	      if (nextNode2 && nextNode2.parent) {
	        oldSelection = this.editor.getSelection();
	        oldBeforeNode = lastNode._nextSibling();

	        selectedNodes.forEach(function (node) {
	          nextNode2.parent.moveBefore(node, nextNode2);
	        });
	        this.focus(Node.focusElement || this._getElementName(target));

	        this.editor._onAction('moveNodes', {
	          nodes: selectedNodes,
	          oldBeforeNode: oldBeforeNode,
	          newBeforeNode: nextNode2,
	          oldSelection: oldSelection,
	          newSelection: this.editor.getSelection()
	        });
	      }
	      handled = true;
	    }
	  }

	  if (handled) {
	    event.preventDefault();
	    event.stopPropagation();
	  }
	};

	/**
	 * Handle the expand event, when clicked on the expand button
	 * @param {boolean} recurse   If true, child nodes will be expanded too
	 * @private
	 */
	Node.prototype._onExpand = function (recurse) {
	  if (recurse) {
	    // Take the table offline
	    var table = this.dom.tr.parentNode; // TODO: not nice to access the main table like this
	    var frame = table.parentNode;
	    var scrollTop = frame.scrollTop;
	    frame.removeChild(table);
	  }

	  if (this.expanded) {
	    this.collapse(recurse);
	  }
	  else {
	    this.expand(recurse);
	  }

	  if (recurse) {
	    // Put the table online again
	    frame.appendChild(table);
	    frame.scrollTop = scrollTop;
	  }
	};

	/**
	 * Remove nodes
	 * @param {Node[] | Node} nodes
	 */
	Node.onRemove = function(nodes) {
	  if (!Array.isArray(nodes)) {
	    return Node.onRemove([nodes]);
	  }

	  if (nodes && nodes.length > 0) {
	    var firstNode = nodes[0];
	    var parent = firstNode.parent;
	    var editor = firstNode.editor;
	    var firstIndex = firstNode.getIndex();
	    editor.highlighter.unhighlight();

	    // adjust the focus
	    var oldSelection = editor.getSelection();
	    Node.blurNodes(nodes);
	    var newSelection = editor.getSelection();

	    // remove the nodes
	    nodes.forEach(function (node) {
	      node.parent._remove(node);
	    });

	    // store history action
	    editor._onAction('removeNodes', {
	      nodes: nodes.slice(0), // store a copy of the array!
	      parent: parent,
	      index: firstIndex,
	      oldSelection: oldSelection,
	      newSelection: newSelection
	    });
	  }
	};


	/**
	 * Duplicate nodes
	 * duplicated nodes will be added right after the original nodes
	 * @param {Node[] | Node} nodes
	 */
	Node.onDuplicate = function(nodes) {
	  if (!Array.isArray(nodes)) {
	    return Node.onDuplicate([nodes]);
	  }

	  if (nodes && nodes.length > 0) {
	    var lastNode = nodes[nodes.length - 1];
	    var parent = lastNode.parent;
	    var editor = lastNode.editor;

	    editor.deselect(editor.multiselection.nodes);

	    // duplicate the nodes
	    var oldSelection = editor.getSelection();
	    var afterNode = lastNode;
	    var clones = nodes.map(function (node) {
	      var clone = node.clone();
	      parent.insertAfter(clone, afterNode);
	      afterNode = clone;
	      return clone;
	    });

	    // set selection to the duplicated nodes
	    if (nodes.length === 1) {
	      clones[0].focus();
	    }
	    else {
	      editor.select(clones);
	    }
	    var newSelection = editor.getSelection();

	    editor._onAction('duplicateNodes', {
	      afterNode: lastNode,
	      nodes: clones,
	      parent: parent,
	      oldSelection: oldSelection,
	      newSelection: newSelection
	    });
	  }
	};

	/**
	 * Handle insert before event
	 * @param {String} [field]
	 * @param {*} [value]
	 * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
	 * @private
	 */
	Node.prototype._onInsertBefore = function (field, value, type) {
	  var oldSelection = this.editor.getSelection();

	  var newNode = new Node(this.editor, {
	    field: (field != undefined) ? field : '',
	    value: (value != undefined) ? value : '',
	    type: type
	  });
	  newNode.expand(true);
	  this.parent.insertBefore(newNode, this);
	  this.editor.highlighter.unhighlight();
	  newNode.focus('field');
	  var newSelection = this.editor.getSelection();

	  this.editor._onAction('insertBeforeNodes', {
	    nodes: [newNode],
	    beforeNode: this,
	    parent: this.parent,
	    oldSelection: oldSelection,
	    newSelection: newSelection
	  });
	};

	/**
	 * Handle insert after event
	 * @param {String} [field]
	 * @param {*} [value]
	 * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
	 * @private
	 */
	Node.prototype._onInsertAfter = function (field, value, type) {
	  var oldSelection = this.editor.getSelection();

	  var newNode = new Node(this.editor, {
	    field: (field != undefined) ? field : '',
	    value: (value != undefined) ? value : '',
	    type: type
	  });
	  newNode.expand(true);
	  this.parent.insertAfter(newNode, this);
	  this.editor.highlighter.unhighlight();
	  newNode.focus('field');
	  var newSelection = this.editor.getSelection();

	  this.editor._onAction('insertAfterNodes', {
	    nodes: [newNode],
	    afterNode: this,
	    parent: this.parent,
	    oldSelection: oldSelection,
	    newSelection: newSelection
	  });
	};

	/**
	 * Handle append event
	 * @param {String} [field]
	 * @param {*} [value]
	 * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
	 * @private
	 */
	Node.prototype._onAppend = function (field, value, type) {
	  var oldSelection = this.editor.getSelection();

	  var newNode = new Node(this.editor, {
	    field: (field != undefined) ? field : '',
	    value: (value != undefined) ? value : '',
	    type: type
	  });
	  newNode.expand(true);
	  this.parent.appendChild(newNode);
	  this.editor.highlighter.unhighlight();
	  newNode.focus('field');
	  var newSelection = this.editor.getSelection();

	  this.editor._onAction('appendNodes', {
	    nodes: [newNode],
	    parent: this.parent,
	    oldSelection: oldSelection,
	    newSelection: newSelection
	  });
	};

	/**
	 * Change the type of the node's value
	 * @param {String} newType
	 * @private
	 */
	Node.prototype._onChangeType = function (newType) {
	  var oldType = this.type;
	  if (newType != oldType) {
	    var oldSelection = this.editor.getSelection();
	    this.changeType(newType);
	    var newSelection = this.editor.getSelection();

	    this.editor._onAction('changeType', {
	      node: this,
	      oldType: oldType,
	      newType: newType,
	      oldSelection: oldSelection,
	      newSelection: newSelection
	    });
	  }
	};

	/**
	 * Sort the child's of the node. Only applicable when the node has type 'object'
	 * or 'array'.
	 * @param {String} direction   Sorting direction. Available values: "asc", "desc"
	 * @private
	 */
	Node.prototype.sort = function (direction) {
	  if (!this._hasChilds()) {
	    return;
	  }

	  var order = (direction == 'desc') ? -1 : 1;
	  var prop = (this.type == 'array') ? 'value': 'field';
	  this.hideChilds();

	  var oldChilds = this.childs;
	  var oldSortOrder = this.sortOrder;

	  // copy the array (the old one will be kept for an undo action
	  this.childs = this.childs.concat();

	  // sort the arrays
	  this.childs.sort(function (a, b) {
	    return order * naturalSort(a[prop], b[prop]);
	  });
	  this.sortOrder = (order == 1) ? 'asc' : 'desc';

	  this.editor._onAction('sort', {
	    node: this,
	    oldChilds: oldChilds,
	    oldSort: oldSortOrder,
	    newChilds: this.childs,
	    newSort: this.sortOrder
	  });

	  this.showChilds();
	};

	/**
	 * Create a table row with an append button.
	 * @return {HTMLElement | undefined} buttonAppend or undefined when inapplicable
	 */
	Node.prototype.getAppend = function () {
	  if (!this.append) {
	    this.append = new AppendNode(this.editor);
	    this.append.setParent(this);
	  }
	  return this.append.getDom();
	};

	/**
	 * Find the node from an event target
	 * @param {Node} target
	 * @return {Node | undefined} node  or undefined when not found
	 * @static
	 */
	Node.getNodeFromTarget = function (target) {
	  while (target) {
	    if (target.node) {
	      return target.node;
	    }
	    target = target.parentNode;
	  }

	  return undefined;
	};

	/**
	 * Remove the focus of given nodes, and move the focus to the (a) node before,
	 * (b) the node after, or (c) the parent node.
	 * @param {Array.<Node> | Node} nodes
	 */
	Node.blurNodes = function (nodes) {
	  if (!Array.isArray(nodes)) {
	    Node.blurNodes([nodes]);
	    return;
	  }

	  var firstNode = nodes[0];
	  var parent = firstNode.parent;
	  var firstIndex = firstNode.getIndex();

	  if (parent.childs[firstIndex + nodes.length]) {
	    parent.childs[firstIndex + nodes.length].focus();
	  }
	  else if (parent.childs[firstIndex - 1]) {
	    parent.childs[firstIndex - 1].focus();
	  }
	  else {
	    parent.focus();
	  }
	};

	/**
	 * Get the next sibling of current node
	 * @return {Node} nextSibling
	 * @private
	 */
	Node.prototype._nextSibling = function () {
	  var index = this.parent.childs.indexOf(this);
	  return this.parent.childs[index + 1] || this.parent.append;
	};

	/**
	 * Get the previously rendered node
	 * @return {Node | null} previousNode
	 * @private
	 */
	Node.prototype._previousNode = function () {
	  var prevNode = null;
	  var dom = this.getDom();
	  if (dom && dom.parentNode) {
	    // find the previous field
	    var prevDom = dom;
	    do {
	      prevDom = prevDom.previousSibling;
	      prevNode = Node.getNodeFromTarget(prevDom);
	    }
	    while (prevDom && (prevNode instanceof AppendNode && !prevNode.isVisible()));
	  }
	  return prevNode;
	};

	/**
	 * Get the next rendered node
	 * @return {Node | null} nextNode
	 * @private
	 */
	Node.prototype._nextNode = function () {
	  var nextNode = null;
	  var dom = this.getDom();
	  if (dom && dom.parentNode) {
	    // find the previous field
	    var nextDom = dom;
	    do {
	      nextDom = nextDom.nextSibling;
	      nextNode = Node.getNodeFromTarget(nextDom);
	    }
	    while (nextDom && (nextNode instanceof AppendNode && !nextNode.isVisible()));
	  }

	  return nextNode;
	};

	/**
	 * Get the first rendered node
	 * @return {Node | null} firstNode
	 * @private
	 */
	Node.prototype._firstNode = function () {
	  var firstNode = null;
	  var dom = this.getDom();
	  if (dom && dom.parentNode) {
	    var firstDom = dom.parentNode.firstChild;
	    firstNode = Node.getNodeFromTarget(firstDom);
	  }

	  return firstNode;
	};

	/**
	 * Get the last rendered node
	 * @return {Node | null} lastNode
	 * @private
	 */
	Node.prototype._lastNode = function () {
	  var lastNode = null;
	  var dom = this.getDom();
	  if (dom && dom.parentNode) {
	    var lastDom = dom.parentNode.lastChild;
	    lastNode =  Node.getNodeFromTarget(lastDom);
	    while (lastDom && (lastNode instanceof AppendNode && !lastNode.isVisible())) {
	      lastDom = lastDom.previousSibling;
	      lastNode =  Node.getNodeFromTarget(lastDom);
	    }
	  }
	  return lastNode;
	};

	/**
	 * Get the next element which can have focus.
	 * @param {Element} elem
	 * @return {Element | null} nextElem
	 * @private
	 */
	Node.prototype._previousElement = function (elem) {
	  var dom = this.dom;
	  // noinspection FallthroughInSwitchStatementJS
	  switch (elem) {
	    case dom.value:
	      if (this.fieldEditable) {
	        return dom.field;
	      }
	    // intentional fall through
	    case dom.field:
	      if (this._hasChilds()) {
	        return dom.expand;
	      }
	    // intentional fall through
	    case dom.expand:
	      return dom.menu;
	    case dom.menu:
	      if (dom.drag) {
	        return dom.drag;
	      }
	    // intentional fall through
	    default:
	      return null;
	  }
	};

	/**
	 * Get the next element which can have focus.
	 * @param {Element} elem
	 * @return {Element | null} nextElem
	 * @private
	 */
	Node.prototype._nextElement = function (elem) {
	  var dom = this.dom;
	  // noinspection FallthroughInSwitchStatementJS
	  switch (elem) {
	    case dom.drag:
	      return dom.menu;
	    case dom.menu:
	      if (this._hasChilds()) {
	        return dom.expand;
	      }
	    // intentional fall through
	    case dom.expand:
	      if (this.fieldEditable) {
	        return dom.field;
	      }
	    // intentional fall through
	    case dom.field:
	      if (!this._hasChilds()) {
	        return dom.value;
	      }
	    default:
	      return null;
	  }
	};

	/**
	 * Get the dom name of given element. returns null if not found.
	 * For example when element == dom.field, "field" is returned.
	 * @param {Element} element
	 * @return {String | null} elementName  Available elements with name: 'drag',
	 *                                      'menu', 'expand', 'field', 'value'
	 * @private
	 */
	Node.prototype._getElementName = function (element) {
	  var dom = this.dom;
	  for (var name in dom) {
	    if (dom.hasOwnProperty(name)) {
	      if (dom[name] == element) {
	        return name;
	      }
	    }
	  }
	  return null;
	};

	/**
	 * Test if this node has childs. This is the case when the node is an object
	 * or array.
	 * @return {boolean} hasChilds
	 * @private
	 */
	Node.prototype._hasChilds = function () {
	  return this.type == 'array' || this.type == 'object';
	};

	// titles with explanation for the different types
	Node.TYPE_TITLES = {
	  'auto': 'Field type "auto". ' +
	      'The field type is automatically determined from the value ' +
	      'and can be a string, number, boolean, or null.',
	  'object': 'Field type "object". ' +
	      'An object contains an unordered set of key/value pairs.',
	  'array': 'Field type "array". ' +
	      'An array contains an ordered collection of values.',
	  'string': 'Field type "string". ' +
	      'Field type is not determined from the value, ' +
	      'but always returned as string.'
	};

	/**
	 * Show a contextmenu for this node
	 * @param {HTMLElement} anchor   Anchor element to attach the context menu to
	 *                               as sibling.
	 * @param {function} [onClose]   Callback method called when the context menu
	 *                               is being closed.
	 */
	Node.prototype.showContextMenu = function (anchor, onClose) {
	  var node = this;
	  var titles = Node.TYPE_TITLES;
	  var items = [];

	  if (this.editable.value) {
	    items.push({
	      text: 'Type',
	      title: 'Change the type of this field',
	      className: 'jsoneditor-type-' + this.type,
	      submenu: [
	        {
	          text: 'Auto',
	          className: 'jsoneditor-type-auto' +
	              (this.type == 'auto' ? ' jsoneditor-selected' : ''),
	          title: titles.auto,
	          click: function () {
	            node._onChangeType('auto');
	          }
	        },
	        {
	          text: 'Array',
	          className: 'jsoneditor-type-array' +
	              (this.type == 'array' ? ' jsoneditor-selected' : ''),
	          title: titles.array,
	          click: function () {
	            node._onChangeType('array');
	          }
	        },
	        {
	          text: 'Object',
	          className: 'jsoneditor-type-object' +
	              (this.type == 'object' ? ' jsoneditor-selected' : ''),
	          title: titles.object,
	          click: function () {
	            node._onChangeType('object');
	          }
	        },
	        {
	          text: 'String',
	          className: 'jsoneditor-type-string' +
	              (this.type == 'string' ? ' jsoneditor-selected' : ''),
	          title: titles.string,
	          click: function () {
	            node._onChangeType('string');
	          }
	        }
	      ]
	    });
	  }

	  if (this._hasChilds()) {
	    var direction = ((this.sortOrder == 'asc') ? 'desc': 'asc');
	    items.push({
	      text: 'Sort',
	      title: 'Sort the childs of this ' + this.type,
	      className: 'jsoneditor-sort-' + direction,
	      click: function () {
	        node.sort(direction);
	      },
	      submenu: [
	        {
	          text: 'Ascending',
	          className: 'jsoneditor-sort-asc',
	          title: 'Sort the childs of this ' + this.type + ' in ascending order',
	          click: function () {
	            node.sort('asc');
	          }
	        },
	        {
	          text: 'Descending',
	          className: 'jsoneditor-sort-desc',
	          title: 'Sort the childs of this ' + this.type +' in descending order',
	          click: function () {
	            node.sort('desc');
	          }
	        }
	      ]
	    });
	  }

	  if (this.parent && this.parent._hasChilds()) {
	    if (items.length) {
	      // create a separator
	      items.push({
	        'type': 'separator'
	      });
	    }

	    // create append button (for last child node only)
	    var childs = node.parent.childs;
	    if (node == childs[childs.length - 1]) {
	      items.push({
	        text: 'Append',
	        title: 'Append a new field with type \'auto\' after this field (Ctrl+Shift+Ins)',
	        submenuTitle: 'Select the type of the field to be appended',
	        className: 'jsoneditor-append',
	        click: function () {
	          node._onAppend('', '', 'auto');
	        },
	        submenu: [
	          {
	            text: 'Auto',
	            className: 'jsoneditor-type-auto',
	            title: titles.auto,
	            click: function () {
	              node._onAppend('', '', 'auto');
	            }
	          },
	          {
	            text: 'Array',
	            className: 'jsoneditor-type-array',
	            title: titles.array,
	            click: function () {
	              node._onAppend('', []);
	            }
	          },
	          {
	            text: 'Object',
	            className: 'jsoneditor-type-object',
	            title: titles.object,
	            click: function () {
	              node._onAppend('', {});
	            }
	          },
	          {
	            text: 'String',
	            className: 'jsoneditor-type-string',
	            title: titles.string,
	            click: function () {
	              node._onAppend('', '', 'string');
	            }
	          }
	        ]
	      });
	    }

	    // create insert button
	    items.push({
	      text: 'Insert',
	      title: 'Insert a new field with type \'auto\' before this field (Ctrl+Ins)',
	      submenuTitle: 'Select the type of the field to be inserted',
	      className: 'jsoneditor-insert',
	      click: function () {
	        node._onInsertBefore('', '', 'auto');
	      },
	      submenu: [
	        {
	          text: 'Auto',
	          className: 'jsoneditor-type-auto',
	          title: titles.auto,
	          click: function () {
	            node._onInsertBefore('', '', 'auto');
	          }
	        },
	        {
	          text: 'Array',
	          className: 'jsoneditor-type-array',
	          title: titles.array,
	          click: function () {
	            node._onInsertBefore('', []);
	          }
	        },
	        {
	          text: 'Object',
	          className: 'jsoneditor-type-object',
	          title: titles.object,
	          click: function () {
	            node._onInsertBefore('', {});
	          }
	        },
	        {
	          text: 'String',
	          className: 'jsoneditor-type-string',
	          title: titles.string,
	          click: function () {
	            node._onInsertBefore('', '', 'string');
	          }
	        }
	      ]
	    });

	    if (this.editable.field) {
	      // create duplicate button
	      items.push({
	        text: 'Duplicate',
	        title: 'Duplicate this field (Ctrl+D)',
	        className: 'jsoneditor-duplicate',
	        click: function () {
	          Node.onDuplicate(node);
	        }
	      });

	      // create remove button
	      items.push({
	        text: 'Remove',
	        title: 'Remove this field (Ctrl+Del)',
	        className: 'jsoneditor-remove',
	        click: function () {
	          Node.onRemove(node);
	        }
	      });
	    }
	  }

	  var menu = new ContextMenu(items, {close: onClose});
	  menu.show(anchor, this.editor.content);
	};

	/**
	 * get the type of a value
	 * @param {*} value
	 * @return {String} type   Can be 'object', 'array', 'string', 'auto'
	 * @private
	 */
	Node.prototype._getType = function(value) {
	  if (value instanceof Array) {
	    return 'array';
	  }
	  if (value instanceof Object) {
	    return 'object';
	  }
	  if (typeof(value) == 'string' && typeof(this._stringCast(value)) != 'string') {
	    return 'string';
	  }

	  return 'auto';
	};

	/**
	 * cast contents of a string to the correct type. This can be a string,
	 * a number, a boolean, etc
	 * @param {String} str
	 * @return {*} castedStr
	 * @private
	 */
	Node.prototype._stringCast = function(str) {
	  var lower = str.toLowerCase(),
	      num = Number(str),          // will nicely fail with '123ab'
	      numFloat = parseFloat(str); // will nicely fail with '  '

	  if (str == '') {
	    return '';
	  }
	  else if (lower == 'null') {
	    return null;
	  }
	  else if (lower == 'true') {
	    return true;
	  }
	  else if (lower == 'false') {
	    return false;
	  }
	  else if (!isNaN(num) && !isNaN(numFloat)) {
	    return num;
	  }
	  else {
	    return str;
	  }
	};

	/**
	 * escape a text, such that it can be displayed safely in an HTML element
	 * @param {String} text
	 * @return {String} escapedText
	 * @private
	 */
	Node.prototype._escapeHTML = function (text) {
	  if (typeof text !== 'string') {
	    return String(text);
	  }
	  else {
	    var htmlEscaped = String(text)
	        .replace(/&/g, '&amp;')    // must be replaced first!
	        .replace(/</g, '&lt;')
	        .replace(/>/g, '&gt;')
	        .replace(/  /g, ' &nbsp;') // replace double space with an nbsp and space
	        .replace(/^ /, '&nbsp;')   // space at start
	        .replace(/ $/, '&nbsp;');  // space at end

	    var json = JSON.stringify(htmlEscaped);
	    var html = json.substring(1, json.length - 1);
	    if (this.editor.options.escapeUnicode === true) {
	      html = util.escapeUnicodeChars(html);
	    }
	    return html;
	  }
	};

	/**
	 * unescape a string.
	 * @param {String} escapedText
	 * @return {String} text
	 * @private
	 */
	Node.prototype._unescapeHTML = function (escapedText) {
	  var json = '"' + this._escapeJSON(escapedText) + '"';
	  var htmlEscaped = util.parse(json);

	  return htmlEscaped
	      .replace(/&lt;/g, '<')
	      .replace(/&gt;/g, '>')
	      .replace(/&nbsp;|\u00A0/g, ' ')
	      .replace(/&amp;/g, '&');   // must be replaced last
	};

	/**
	 * escape a text to make it a valid JSON string. The method will:
	 *   - replace unescaped double quotes with '\"'
	 *   - replace unescaped backslash with '\\'
	 *   - replace returns with '\n'
	 * @param {String} text
	 * @return {String} escapedText
	 * @private
	 */
	Node.prototype._escapeJSON = function (text) {
	  // TODO: replace with some smart regex (only when a new solution is faster!)
	  var escaped = '';
	  var i = 0;
	  while (i < text.length) {
	    var c = text.charAt(i);
	    if (c == '\n') {
	      escaped += '\\n';
	    }
	    else if (c == '\\') {
	      escaped += c;
	      i++;

	      c = text.charAt(i);
	      if (c === '' || '"\\/bfnrtu'.indexOf(c) == -1) {
	        escaped += '\\';  // no valid escape character
	      }
	      escaped += c;
	    }
	    else if (c == '"') {
	      escaped += '\\"';
	    }
	    else {
	      escaped += c;
	    }
	    i++;
	  }

	  return escaped;
	};

	// TODO: find a nicer solution to resolve this circular dependency between Node and AppendNode
	var AppendNode = appendNodeFactory(Node);

	module.exports = Node;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
	 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
	 */
	/*jshint unused:false */
	module.exports = function naturalSort (a, b) {
		"use strict";
		var re = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
			sre = /(^[ ]*|[ ]*$)/g,
			dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
			hre = /^0x[0-9a-f]+$/i,
			ore = /^0/,
			i = function(s) { return naturalSort.insensitive && ('' + s).toLowerCase() || '' + s; },
			// convert all to strings strip whitespace
			x = i(a).replace(sre, '') || '',
			y = i(b).replace(sre, '') || '',
			// chunk/tokenize
			xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
			yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
			// numeric, hex or date detection
			xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
			yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,
			oFxNcL, oFyNcL;
		// first try and sort Hex codes or Dates
		if (yD) {
			if ( xD < yD ) { return -1; }
			else if ( xD > yD ) { return 1; }
		}
		// natural sorting through split numeric strings and default strings
		for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
			// find floats not starting with '0', string or 0 if not defined (Clint Priest)
			oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
			oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
			// handle numeric vs string comparison - number < string - (Kyle Adams)
			if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
			// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
			else if (typeof oFxNcL !== typeof oFyNcL) {
				oFxNcL += '';
				oFyNcL += '';
			}
			if (oFxNcL < oFyNcL) { return -1; }
			if (oFxNcL > oFyNcL) { return 1; }
		}
		return 0;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(4);
	var ContextMenu = __webpack_require__(7);

	/**
	 * A factory function to create an AppendNode, which depends on a Node
	 * @param {Node} Node
	 */
	function appendNodeFactory(Node) {
	  /**
	   * @constructor AppendNode
	   * @extends Node
	   * @param {TreeEditor} editor
	   * Create a new AppendNode. This is a special node which is created at the
	   * end of the list with childs for an object or array
	   */
	  function AppendNode (editor) {
	    /** @type {TreeEditor} */
	    this.editor = editor;
	    this.dom = {};
	  }

	  AppendNode.prototype = new Node();

	  /**
	   * Return a table row with an append button.
	   * @return {Element} dom   TR element
	   */
	  AppendNode.prototype.getDom = function () {
	    // TODO: implement a new solution for the append node
	    var dom = this.dom;

	    if (dom.tr) {
	      return dom.tr;
	    }

	    this._updateEditability();

	    // a row for the append button
	    var trAppend = document.createElement('tr');
	    trAppend.node = this;
	    dom.tr = trAppend;

	    // TODO: consistent naming

	    if (this.editor.options.mode === 'tree') {
	      // a cell for the dragarea column
	      dom.tdDrag = document.createElement('td');

	      // create context menu
	      var tdMenu = document.createElement('td');
	      dom.tdMenu = tdMenu;
	      var menu = document.createElement('button');
	      menu.type = 'button';
	      menu.className = 'jsoneditor-contextmenu';
	      menu.title = 'Click to open the actions menu (Ctrl+M)';
	      dom.menu = menu;
	      tdMenu.appendChild(dom.menu);
	    }

	    // a cell for the contents (showing text 'empty')
	    var tdAppend = document.createElement('td');
	    var domText = document.createElement('div');
	    domText.innerHTML = '(empty)';
	    domText.className = 'jsoneditor-readonly';
	    tdAppend.appendChild(domText);
	    dom.td = tdAppend;
	    dom.text = domText;

	    this.updateDom();

	    return trAppend;
	  };

	  /**
	   * Update the HTML dom of the Node
	   */
	  AppendNode.prototype.updateDom = function () {
	    var dom = this.dom;
	    var tdAppend = dom.td;
	    if (tdAppend) {
	      tdAppend.style.paddingLeft = (this.getLevel() * 24 + 26) + 'px';
	      // TODO: not so nice hard coded offset
	    }

	    var domText = dom.text;
	    if (domText) {
	      domText.innerHTML = '(empty ' + this.parent.type + ')';
	    }

	    // attach or detach the contents of the append node:
	    // hide when the parent has childs, show when the parent has no childs
	    var trAppend = dom.tr;
	    if (!this.isVisible()) {
	      if (dom.tr.firstChild) {
	        if (dom.tdDrag) {
	          trAppend.removeChild(dom.tdDrag);
	        }
	        if (dom.tdMenu) {
	          trAppend.removeChild(dom.tdMenu);
	        }
	        trAppend.removeChild(tdAppend);
	      }
	    }
	    else {
	      if (!dom.tr.firstChild) {
	        if (dom.tdDrag) {
	          trAppend.appendChild(dom.tdDrag);
	        }
	        if (dom.tdMenu) {
	          trAppend.appendChild(dom.tdMenu);
	        }
	        trAppend.appendChild(tdAppend);
	      }
	    }
	  };

	  /**
	   * Check whether the AppendNode is currently visible.
	   * the AppendNode is visible when its parent has no childs (i.e. is empty).
	   * @return {boolean} isVisible
	   */
	  AppendNode.prototype.isVisible = function () {
	    return (this.parent.childs.length == 0);
	  };

	  /**
	   * Show a contextmenu for this node
	   * @param {HTMLElement} anchor   The element to attach the menu to.
	   * @param {function} [onClose]   Callback method called when the context menu
	   *                               is being closed.
	   */
	  AppendNode.prototype.showContextMenu = function (anchor, onClose) {
	    var node = this;
	    var titles = Node.TYPE_TITLES;
	    var items = [
	      // create append button
	      {
	        'text': 'Append',
	        'title': 'Append a new field with type \'auto\' (Ctrl+Shift+Ins)',
	        'submenuTitle': 'Select the type of the field to be appended',
	        'className': 'jsoneditor-insert',
	        'click': function () {
	          node._onAppend('', '', 'auto');
	        },
	        'submenu': [
	          {
	            'text': 'Auto',
	            'className': 'jsoneditor-type-auto',
	            'title': titles.auto,
	            'click': function () {
	              node._onAppend('', '', 'auto');
	            }
	          },
	          {
	            'text': 'Array',
	            'className': 'jsoneditor-type-array',
	            'title': titles.array,
	            'click': function () {
	              node._onAppend('', []);
	            }
	          },
	          {
	            'text': 'Object',
	            'className': 'jsoneditor-type-object',
	            'title': titles.object,
	            'click': function () {
	              node._onAppend('', {});
	            }
	          },
	          {
	            'text': 'String',
	            'className': 'jsoneditor-type-string',
	            'title': titles.string,
	            'click': function () {
	              node._onAppend('', '', 'string');
	            }
	          }
	        ]
	      }
	    ];

	    var menu = new ContextMenu(items, {close: onClose});
	    menu.show(anchor, this.editor.content);
	  };

	  /**
	   * Handle an event. The event is catched centrally by the editor
	   * @param {Event} event
	   */
	  AppendNode.prototype.onEvent = function (event) {
	    var type = event.type;
	    var target = event.target || event.srcElement;
	    var dom = this.dom;

	    // highlight the append nodes parent
	    var menu = dom.menu;
	    if (target == menu) {
	      if (type == 'mouseover') {
	        this.editor.highlighter.highlight(this.parent);
	      }
	      else if (type == 'mouseout') {
	        this.editor.highlighter.unhighlight();
	      }
	    }

	    // context menu events
	    if (type == 'click' && target == dom.menu) {
	      var highlighter = this.editor.highlighter;
	      highlighter.highlight(this.parent);
	      highlighter.lock();
	      util.addClassName(dom.menu, 'jsoneditor-selected');
	      this.showContextMenu(dom.menu, function () {
	        util.removeClassName(dom.menu, 'jsoneditor-selected');
	        highlighter.unlock();
	        highlighter.unhighlight();
	      });
	    }

	    if (type == 'keydown') {
	      this.onKeyDown(event);
	    }
	  };

	  return AppendNode;
	}

	module.exports = appendNodeFactory;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ContextMenu = __webpack_require__(7);

	/**
	 * Create a select box to be used in the editor menu's, which allows to switch mode
	 * @param {HTMLElement} container
	 * @param {String[]} modes  Available modes: 'code', 'form', 'text', 'tree', 'view'
	 * @param {String} current  Available modes: 'code', 'form', 'text', 'tree', 'view'
	 * @param {function(mode: string)} onSwitch  Callback invoked on switch
	 * @constructor
	 */
	function ModeSwitcher(container, modes, current, onSwitch) {
	  // available modes
	  var availableModes = {
	    code: {
	      'text': 'Code',
	      'title': 'Switch to code highlighter',
	      'click': function () {
	        onSwitch('code')
	      }
	    },
	    form: {
	      'text': 'Form',
	      'title': 'Switch to form editor',
	      'click': function () {
	        onSwitch('form');
	      }
	    },
	    text: {
	      'text': 'Text',
	      'title': 'Switch to plain text editor',
	      'click': function () {
	        onSwitch('text');
	      }
	    },
	    tree: {
	      'text': 'Tree',
	      'title': 'Switch to tree editor',
	      'click': function () {
	        onSwitch('tree');
	      }
	    },
	    view: {
	      'text': 'View',
	      'title': 'Switch to tree view',
	      'click': function () {
	        onSwitch('view');
	      }
	    }
	  };

	  // list the selected modes
	  var items = [];
	  for (var i = 0; i < modes.length; i++) {
	    var mode = modes[i];
	    var item = availableModes[mode];
	    if (!item) {
	      throw new Error('Unknown mode "' + mode + '"');
	    }

	    item.className = 'jsoneditor-type-modes' + ((current == mode) ? ' jsoneditor-selected' : '');
	    items.push(item);
	  }

	  // retrieve the title of current mode
	  var currentMode = availableModes[current];
	  if (!currentMode) {
	    throw new Error('Unknown mode "' + current + '"');
	  }
	  var currentTitle = currentMode.text;

	  // create the html element
	  var box = document.createElement('button');
	  box.type = 'button';
	  box.className = 'jsoneditor-modes jsoneditor-separator';
	  box.innerHTML = currentTitle + ' &#x25BE;';
	  box.title = 'Switch editor mode';
	  box.onclick = function () {
	    var menu = new ContextMenu(items);
	    menu.show(box);
	  };

	  var frame = document.createElement('div');
	  frame.className = 'jsoneditor-modes';
	  frame.style.position = 'relative';
	  frame.appendChild(box);

	  container.appendChild(frame);

	  this.dom = {
	    container: container,
	    box: box,
	    frame: frame
	  };
	}

	/**
	 * Set focus to switcher
	 */
	ModeSwitcher.prototype.focus = function () {
	  this.dom.box.focus();
	};

	/**
	 * Destroy the ModeSwitcher, remove from DOM
	 */
	ModeSwitcher.prototype.destroy = function () {
	  if (this.dom && this.dom.frame && this.dom.frame.parentNode) {
	    this.dom.frame.parentNode.removeChild(this.dom.frame);
	  }
	  this.dom = null;
	};

	module.exports = ModeSwitcher;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ace;
	try {
	  ace = __webpack_require__(13);
	}
	catch (err) {
	  // failed to load ace, no problem, we will fall back to plain text
	}

	var ModeSwitcher = __webpack_require__(11);
	var util = __webpack_require__(4);

	// create a mixin with the functions for text mode
	var textmode = {};

	var MAX_ERRORS = 3; // maximum number of displayed errors at the bottom

	var DEFAULT_THEME = 'ace/theme/jsoneditor';

	/**
	 * Create a text editor
	 * @param {Element} container
	 * @param {Object} [options]   Object with options. available options:
	 *                             {String} mode             Available values:
	 *                                                       "text" (default)
	 *                                                       or "code".
	 *                             {Number} indentation      Number of indentation
	 *                                                       spaces. 2 by default.
	 *                             {function} onChange       Callback method
	 *                                                       triggered on change
	 *                             {function} onModeChange   Callback method
	 *                                                       triggered after setMode
	 *                             {Object} ace              A custom instance of
	 *                                                       Ace editor.
	 *                             {boolean} escapeUnicode   If true, unicode
	 *                                                       characters are escaped.
	 *                                                       false by default.
	 * @private
	 */
	textmode.create = function (container, options) {
	  // read options
	  options = options || {};
	  this.options = options;

	  // indentation
	  if (options.indentation) {
	    this.indentation = Number(options.indentation);
	  }
	  else {
	    this.indentation = 2; // number of spaces
	  }

	  // grab ace from options if provided
	  var _ace = options.ace ? options.ace : ace;

	  // determine mode
	  this.mode = (options.mode == 'code') ? 'code' : 'text';
	  if (this.mode == 'code') {
	    // verify whether Ace editor is available and supported
	    if (typeof _ace === 'undefined') {
	      this.mode = 'text';
	      console.warn('Failed to load Ace editor, falling back to plain text mode. Please use a JSONEditor bundle including Ace, or pass Ace as via the configuration option `ace`.');
	    }
	  }

	  // determine theme
	  this.theme = options.theme || DEFAULT_THEME;
	  if (this.theme === DEFAULT_THEME && window.ace) {
	    __webpack_require__(17);
	  }

	  var me = this;
	  this.container = container;
	  this.dom = {};
	  this.aceEditor = undefined;  // ace code editor
	  this.textarea = undefined;  // plain text editor (fallback when Ace is not available)
	  this.validateSchema = null;

	  // create a debounced validate function
	  this._debouncedValidate = util.debounce(this.validate.bind(this), this.DEBOUNCE_INTERVAL);

	  this.width = container.clientWidth;
	  this.height = container.clientHeight;

	  this.frame = document.createElement('div');
	  this.frame.className = 'jsoneditor jsoneditor-mode-' + this.options.mode;
	  this.frame.onclick = function (event) {
	    // prevent default submit action when the editor is located inside a form
	    event.preventDefault();
	  };
	  this.frame.onkeydown = function (event) {
	    me._onKeyDown(event);
	  };

	  // create menu
	  this.menu = document.createElement('div');
	  this.menu.className = 'jsoneditor-menu';
	  this.frame.appendChild(this.menu);

	  // create format button
	  var buttonFormat = document.createElement('button');
	  buttonFormat.type = 'button';
	  buttonFormat.className = 'jsoneditor-format';
	  buttonFormat.title = 'Format JSON data, with proper indentation and line feeds (Ctrl+\\)';
	  this.menu.appendChild(buttonFormat);
	  buttonFormat.onclick = function () {
	    try {
	      me.format();
	      me._onChange();
	    }
	    catch (err) {
	      me._onError(err);
	    }
	  };

	  // create compact button
	  var buttonCompact = document.createElement('button');
	  buttonCompact.type = 'button';
	  buttonCompact.className = 'jsoneditor-compact';
	  buttonCompact.title = 'Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)';
	  this.menu.appendChild(buttonCompact);
	  buttonCompact.onclick = function () {
	    try {
	      me.compact();
	      me._onChange();
	    }
	    catch (err) {
	      me._onError(err);
	    }
	  };

	  // create mode box
	  if (this.options && this.options.modes && this.options.modes.length) {
	    this.modeSwitcher = new ModeSwitcher(this.menu, this.options.modes, this.options.mode, function onSwitch(mode) {
	      // switch mode and restore focus
	      me.setMode(mode);
	      me.modeSwitcher.focus();
	    });
	  }

	  this.content = document.createElement('div');
	  this.content.className = 'jsoneditor-outer';
	  this.frame.appendChild(this.content);

	  this.container.appendChild(this.frame);

	  if (this.mode == 'code') {
	    this.editorDom = document.createElement('div');
	    this.editorDom.style.height = '100%'; // TODO: move to css
	    this.editorDom.style.width = '100%'; // TODO: move to css
	    this.content.appendChild(this.editorDom);

	    var aceEditor = _ace.edit(this.editorDom);
	    aceEditor.$blockScrolling = Infinity;
	    aceEditor.setTheme(this.theme);
	    aceEditor.setShowPrintMargin(false);
	    aceEditor.setFontSize(13);
	    aceEditor.getSession().setMode('ace/mode/json');
	    aceEditor.getSession().setTabSize(this.indentation);
	    aceEditor.getSession().setUseSoftTabs(true);
	    aceEditor.getSession().setUseWrapMode(true);
	    aceEditor.commands.bindKey('Ctrl-L', null);    // disable Ctrl+L (is used by the browser to select the address bar)
	    aceEditor.commands.bindKey('Command-L', null); // disable Ctrl+L (is used by the browser to select the address bar)
	    this.aceEditor = aceEditor;

	    // TODO: deprecated since v5.0.0. Cleanup backward compatibility some day
	    if (!this.hasOwnProperty('editor')) {
	      Object.defineProperty(this, 'editor', {
	        get: function () {
	          console.warn('Property "editor" has been renamed to "aceEditor".');
	          return me.aceEditor;
	        },
	        set: function (aceEditor) {
	          console.warn('Property "editor" has been renamed to "aceEditor".');
	          me.aceEditor = aceEditor;
	        }
	      });
	    }

	    var poweredBy = document.createElement('a');
	    poweredBy.appendChild(document.createTextNode('powered by ace'));
	    poweredBy.href = 'http://ace.ajax.org';
	    poweredBy.target = '_blank';
	    poweredBy.className = 'jsoneditor-poweredBy';
	    poweredBy.onclick = function () {
	      // TODO: this anchor falls below the margin of the content,
	      // therefore the normal a.href does not work. We use a click event
	      // for now, but this should be fixed.
	      window.open(poweredBy.href, poweredBy.target);
	    };
	    this.menu.appendChild(poweredBy);

	    // register onchange event
	    aceEditor.on('change', this._onChange.bind(this));
	  }
	  else {
	    // load a plain text textarea
	    var textarea = document.createElement('textarea');
	    textarea.className = 'jsoneditor-text';
	    textarea.spellcheck = false;
	    this.content.appendChild(textarea);
	    this.textarea = textarea;

	    // register onchange event
	    if (this.textarea.oninput === null) {
	      this.textarea.oninput = this._onChange.bind(this);
	    }
	    else {
	      // oninput is undefined. For IE8-
	      this.textarea.onchange = this._onChange.bind(this);
	    }
	  }

	  this.setSchema(this.options.schema);
	};

	/**
	 * Handle a change:
	 * - Validate JSON schema
	 * - Send a callback to the onChange listener if provided
	 * @private
	 */
	textmode._onChange = function () {
	  // validate JSON schema (if configured)
	  this._debouncedValidate();

	  // trigger the onChange callback
	  if (this.options.onChange) {
	    try {
	      this.options.onChange();
	    }
	    catch (err) {
	      console.error('Error in onChange callback: ', err);
	    }
	  }
	};

	/**
	 * Event handler for keydown. Handles shortcut keys
	 * @param {Event} event
	 * @private
	 */
	textmode._onKeyDown = function (event) {
	  var keynum = event.which || event.keyCode;
	  var handled = false;

	  if (keynum == 220 && event.ctrlKey) {
	    if (event.shiftKey) { // Ctrl+Shift+\
	      this.compact();
	      this._onChange();
	    }
	    else { // Ctrl+\
	      this.format();
	      this._onChange();
	    }
	    handled = true;
	  }

	  if (handled) {
	    event.preventDefault();
	    event.stopPropagation();
	  }
	};

	/**
	 * Destroy the editor. Clean up DOM, event listeners, and web workers.
	 */
	textmode.destroy = function () {
	  // remove old ace editor
	  if (this.aceEditor) {
	    this.aceEditor.destroy();
	    this.aceEditor = null;
	  }

	  if (this.frame && this.container && this.frame.parentNode == this.container) {
	    this.container.removeChild(this.frame);
	  }

	  if (this.modeSwitcher) {
	    this.modeSwitcher.destroy();
	    this.modeSwitcher = null;
	  }

	  this.textarea = null;
	  
	  this._debouncedValidate = null;
	};

	/**
	 * Compact the code in the formatter
	 */
	textmode.compact = function () {
	  var json = this.get();
	  var text = JSON.stringify(json);
	  this.setText(text);
	};

	/**
	 * Format the code in the formatter
	 */
	textmode.format = function () {
	  var json = this.get();
	  var text = JSON.stringify(json, null, this.indentation);
	  this.setText(text);
	};

	/**
	 * Set focus to the formatter
	 */
	textmode.focus = function () {
	  if (this.textarea) {
	    this.textarea.focus();
	  }
	  if (this.aceEditor) {
	    this.aceEditor.focus();
	  }
	};

	/**
	 * Resize the formatter
	 */
	textmode.resize = function () {
	  if (this.aceEditor) {
	    var force = false;
	    this.aceEditor.resize(force);
	  }
	};

	/**
	 * Set json data in the formatter
	 * @param {Object} json
	 */
	textmode.set = function(json) {
	  this.setText(JSON.stringify(json, null, this.indentation));
	};

	/**
	 * Get json data from the formatter
	 * @return {Object} json
	 */
	textmode.get = function() {
	  var text = this.getText();
	  var json;

	  try {
	    json = util.parse(text); // this can throw an error
	  }
	  catch (err) {
	    // try to sanitize json, replace JavaScript notation with JSON notation
	    text = util.sanitize(text);

	    // try to parse again
	    json = util.parse(text); // this can throw an error
	  }

	  return json;
	};

	/**
	 * Get the text contents of the editor
	 * @return {String} jsonText
	 */
	textmode.getText = function() {
	  if (this.textarea) {
	    return this.textarea.value;
	  }
	  if (this.aceEditor) {
	    return this.aceEditor.getValue();
	  }
	  return '';
	};

	/**
	 * Set the text contents of the editor
	 * @param {String} jsonText
	 */
	textmode.setText = function(jsonText) {
	  var text;

	  if (this.options.escapeUnicode === true) {
	    text = util.escapeUnicodeChars(jsonText);
	  }
	  else {
	    text = jsonText;
	  }

	  if (this.textarea) {
	    this.textarea.value = text;
	  }
	  if (this.aceEditor) {
	    // prevent emitting onChange events while setting new text
	    var originalOnChange = this.options.onChange;
	    this.options.onChange = null;

	    this.aceEditor.setValue(text, -1);

	    this.options.onChange = originalOnChange;
	  }

	  // validate JSON schema
	  this.validate();
	};

	/**
	 * Validate current JSON object against the configured JSON schema
	 * Throws an exception when no JSON schema is configured
	 */
	textmode.validate = function () {
	  // clear all current errors
	  if (this.dom.validationErrors) {
	    this.dom.validationErrors.parentNode.removeChild(this.dom.validationErrors);
	    this.dom.validationErrors = null;

	    this.content.style.marginBottom = '';
	    this.content.style.paddingBottom = '';
	  }

	  var doValidate = false;
	  var errors = [];
	  var json;
	  try {
	    json = this.get(); // this can fail when there is no valid json
	    doValidate = true;
	  }
	  catch (err) {
	    // no valid JSON, don't validate
	  }

	  // only validate the JSON when parsing the JSON succeeded
	  if (doValidate && this.validateSchema) {
	    var valid = this.validateSchema(json);
	    if (!valid) {
	      errors = this.validateSchema.errors.map(function (error) {
	        return util.improveSchemaError(error);
	      });
	    }
	  }

	  if (errors.length > 0) {
	    // limit the number of displayed errors
	    var limit = errors.length > MAX_ERRORS;
	    if (limit) {
	      errors = errors.slice(0, MAX_ERRORS);
	      var hidden = this.validateSchema.errors.length - MAX_ERRORS;
	      errors.push('(' + hidden + ' more errors...)')
	    }

	    var validationErrors = document.createElement('div');
	    validationErrors.innerHTML = '<table class="jsoneditor-text-errors">' +
	        '<tbody>' +
	        errors.map(function (error) {
	          var message;
	          if (typeof error === 'string') {
	            message = '<td colspan="2"><pre>' + error + '</pre></td>';
	          }
	          else {
	            message = '<td>' + error.dataPath + '</td>' +
	                '<td>' + error.message + '</td>';
	          }

	          return '<tr><td><button class="jsoneditor-schema-error"></button></td>' + message + '</tr>'
	        }).join('') +
	        '</tbody>' +
	        '</table>';

	    this.dom.validationErrors = validationErrors;
	    this.frame.appendChild(validationErrors);

	    var height = validationErrors.clientHeight;
	    this.content.style.marginBottom = (-height) + 'px';
	    this.content.style.paddingBottom = height + 'px';
	  }

	  // update the height of the ace editor
	  if (this.aceEditor) {
	    var force = false;
	    this.aceEditor.resize(force);
	  }
	};

	// define modes
	module.exports = [
	  {
	    mode: 'text',
	    mixin: textmode,
	    data: 'text',
	    load: textmode.format
	  },
	  {
	    mode: 'code',
	    mixin: textmode,
	    data: 'text',
	    load: textmode.format
	  }
	];


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// load brace
	var ace = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"brace\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	// load required ace modules
	__webpack_require__(14);
	__webpack_require__(16);

	module.exports = ace;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
	"use strict";

	var oop = acequire("../lib/oop");
	var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

	var JsonHighlightRules = function() {
	    this.$rules = {
	        "start" : [
	            {
	                token : "variable", // single line
	                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
	            }, {
	                token : "string", // single line
	                regex : '"',
	                next  : "string"
	            }, {
	                token : "constant.numeric", // hex
	                regex : "0[xX][0-9a-fA-F]+\\b"
	            }, {
	                token : "constant.numeric", // float
	                regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
	            }, {
	                token : "constant.language.boolean",
	                regex : "(?:true|false)\\b"
	            }, {
	                token : "invalid.illegal", // single quoted strings are not allowed
	                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
	            }, {
	                token : "invalid.illegal", // comments are not allowed
	                regex : "\\/\\/.*$"
	            }, {
	                token : "paren.lparen",
	                regex : "[[({]"
	            }, {
	                token : "paren.rparen",
	                regex : "[\\])}]"
	            }, {
	                token : "text",
	                regex : "\\s+"
	            }
	        ],
	        "string" : [
	            {
	                token : "constant.language.escape",
	                regex : /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
	            }, {
	                token : "string",
	                regex : '[^"\\\\]+'
	            }, {
	                token : "string",
	                regex : '"',
	                next  : "start"
	            }, {
	                token : "string",
	                regex : "",
	                next  : "start"
	            }
	        ]
	    };
	    
	};

	oop.inherits(JsonHighlightRules, TextHighlightRules);

	exports.JsonHighlightRules = JsonHighlightRules;
	});

	ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
	"use strict";

	var Range = acequire("../range").Range;

	var MatchingBraceOutdent = function() {};

	(function() {

	    this.checkOutdent = function(line, input) {
	        if (! /^\s+$/.test(line))
	            return false;

	        return /^\s*\}/.test(input);
	    };

	    this.autoOutdent = function(doc, row) {
	        var line = doc.getLine(row);
	        var match = line.match(/^(\s*\})/);

	        if (!match) return 0;

	        var column = match[1].length;
	        var openBracePos = doc.findMatchingBracket({row: row, column: column});

	        if (!openBracePos || openBracePos.row == row) return 0;

	        var indent = this.$getIndent(doc.getLine(openBracePos.row));
	        doc.replace(new Range(row, 0, row, column-1), indent);
	    };

	    this.$getIndent = function(line) {
	        return line.match(/^\s*/)[0];
	    };

	}).call(MatchingBraceOutdent.prototype);

	exports.MatchingBraceOutdent = MatchingBraceOutdent;
	});

	ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(acequire, exports, module) {
	"use strict";

	var oop = acequire("../../lib/oop");
	var Behaviour = acequire("../behaviour").Behaviour;
	var TokenIterator = acequire("../../token_iterator").TokenIterator;
	var lang = acequire("../../lib/lang");

	var SAFE_INSERT_IN_TOKENS =
	    ["text", "paren.rparen", "punctuation.operator"];
	var SAFE_INSERT_BEFORE_TOKENS =
	    ["text", "paren.rparen", "punctuation.operator", "comment"];

	var context;
	var contextCache = {};
	var initContext = function(editor) {
	    var id = -1;
	    if (editor.multiSelect) {
	        id = editor.selection.index;
	        if (contextCache.rangeCount != editor.multiSelect.rangeCount)
	            contextCache = {rangeCount: editor.multiSelect.rangeCount};
	    }
	    if (contextCache[id])
	        return context = contextCache[id];
	    context = contextCache[id] = {
	        autoInsertedBrackets: 0,
	        autoInsertedRow: -1,
	        autoInsertedLineEnd: "",
	        maybeInsertedBrackets: 0,
	        maybeInsertedRow: -1,
	        maybeInsertedLineStart: "",
	        maybeInsertedLineEnd: ""
	    };
	};

	var getWrapped = function(selection, selected, opening, closing) {
	    var rowDiff = selection.end.row - selection.start.row;
	    return {
	        text: opening + selected + closing,
	        selection: [
	                0,
	                selection.start.column + 1,
	                rowDiff,
	                selection.end.column + (rowDiff ? 0 : 1)
	            ]
	    };
	};

	var CstyleBehaviour = function() {
	    this.add("braces", "insertion", function(state, action, editor, session, text) {
	        var cursor = editor.getCursorPosition();
	        var line = session.doc.getLine(cursor.row);
	        if (text == '{') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '{', '}');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
	                    CstyleBehaviour.recordAutoInsert(editor, session, "}");
	                    return {
	                        text: '{}',
	                        selection: [1, 1]
	                    };
	                } else {
	                    CstyleBehaviour.recordMaybeInsert(editor, session, "{");
	                    return {
	                        text: '{',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        } else if (text == '}') {
	            initContext(editor);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == '}') {
	                var matching = session.$findOpeningBracket('}', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        } else if (text == "\n" || text == "\r\n") {
	            initContext(editor);
	            var closing = "";
	            if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
	                closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
	                CstyleBehaviour.clearMaybeInsertedClosing();
	            }
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar === '}') {
	                var openBracePos = session.findMatchingBracket({row: cursor.row, column: cursor.column+1}, '}');
	                if (!openBracePos)
	                     return null;
	                var next_indent = this.$getIndent(session.getLine(openBracePos.row));
	            } else if (closing) {
	                var next_indent = this.$getIndent(line);
	            } else {
	                CstyleBehaviour.clearMaybeInsertedClosing();
	                return;
	            }
	            var indent = next_indent + session.getTabString();

	            return {
	                text: '\n' + indent + '\n' + next_indent + closing,
	                selection: [1, indent.length, 1, indent.length]
	            };
	        } else {
	            CstyleBehaviour.clearMaybeInsertedClosing();
	        }
	    });

	    this.add("braces", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '{') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.end.column, range.end.column + 1);
	            if (rightChar == '}') {
	                range.end.column++;
	                return range;
	            } else {
	                context.maybeInsertedBrackets--;
	            }
	        }
	    });

	    this.add("parens", "insertion", function(state, action, editor, session, text) {
	        if (text == '(') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '(', ')');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                CstyleBehaviour.recordAutoInsert(editor, session, ")");
	                return {
	                    text: '()',
	                    selection: [1, 1]
	                };
	            }
	        } else if (text == ')') {
	            initContext(editor);
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == ')') {
	                var matching = session.$findOpeningBracket(')', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        }
	    });

	    this.add("parens", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '(') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == ')') {
	                range.end.column++;
	                return range;
	            }
	        }
	    });

	    this.add("brackets", "insertion", function(state, action, editor, session, text) {
	        if (text == '[') {
	            initContext(editor);
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, '[', ']');
	            } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
	                CstyleBehaviour.recordAutoInsert(editor, session, "]");
	                return {
	                    text: '[]',
	                    selection: [1, 1]
	                };
	            }
	        } else if (text == ']') {
	            initContext(editor);
	            var cursor = editor.getCursorPosition();
	            var line = session.doc.getLine(cursor.row);
	            var rightChar = line.substring(cursor.column, cursor.column + 1);
	            if (rightChar == ']') {
	                var matching = session.$findOpeningBracket(']', {column: cursor.column + 1, row: cursor.row});
	                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
	                    CstyleBehaviour.popAutoInsertedClosing();
	                    return {
	                        text: '',
	                        selection: [1, 1]
	                    };
	                }
	            }
	        }
	    });

	    this.add("brackets", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && selected == '[') {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == ']') {
	                range.end.column++;
	                return range;
	            }
	        }
	    });

	    this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
	        if (text == '"' || text == "'") {
	            initContext(editor);
	            var quote = text;
	            var selection = editor.getSelectionRange();
	            var selected = session.doc.getTextRange(selection);
	            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
	                return getWrapped(selection, selected, quote, quote);
	            } else if (!selected) {
	                var cursor = editor.getCursorPosition();
	                var line = session.doc.getLine(cursor.row);
	                var leftChar = line.substring(cursor.column-1, cursor.column);
	                var rightChar = line.substring(cursor.column, cursor.column + 1);
	                
	                var token = session.getTokenAt(cursor.row, cursor.column);
	                var rightToken = session.getTokenAt(cursor.row, cursor.column + 1);
	                if (leftChar == "\\" && token && /escape/.test(token.type))
	                    return null;
	                
	                var stringBefore = token && /string|escape/.test(token.type);
	                var stringAfter = !rightToken || /string|escape/.test(rightToken.type);
	                
	                var pair;
	                if (rightChar == quote) {
	                    pair = stringBefore !== stringAfter;
	                } else {
	                    if (stringBefore && !stringAfter)
	                        return null; // wrap string with different quote
	                    if (stringBefore && stringAfter)
	                        return null; // do not pair quotes inside strings
	                    var wordRe = session.$mode.tokenRe;
	                    wordRe.lastIndex = 0;
	                    var isWordBefore = wordRe.test(leftChar);
	                    wordRe.lastIndex = 0;
	                    var isWordAfter = wordRe.test(leftChar);
	                    if (isWordBefore || isWordAfter)
	                        return null; // before or after alphanumeric
	                    if (rightChar && !/[\s;,.})\]\\]/.test(rightChar))
	                        return null; // there is rightChar and it isn't closing
	                    pair = true;
	                }
	                return {
	                    text: pair ? quote + quote : "",
	                    selection: [1,1]
	                };
	            }
	        }
	    });

	    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
	        var selected = session.doc.getTextRange(range);
	        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
	            initContext(editor);
	            var line = session.doc.getLine(range.start.row);
	            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
	            if (rightChar == selected) {
	                range.end.column++;
	                return range;
	            }
	        }
	    });

	};

	    
	CstyleBehaviour.isSaneInsertion = function(editor, session) {
	    var cursor = editor.getCursorPosition();
	    var iterator = new TokenIterator(session, cursor.row, cursor.column);
	    if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
	        var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
	        if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
	            return false;
	    }
	    iterator.stepForward();
	    return iterator.getCurrentTokenRow() !== cursor.row ||
	        this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
	};

	CstyleBehaviour.$matchTokenType = function(token, types) {
	    return types.indexOf(token.type || token) > -1;
	};

	CstyleBehaviour.recordAutoInsert = function(editor, session, bracket) {
	    var cursor = editor.getCursorPosition();
	    var line = session.doc.getLine(cursor.row);
	    if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
	        context.autoInsertedBrackets = 0;
	    context.autoInsertedRow = cursor.row;
	    context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
	    context.autoInsertedBrackets++;
	};

	CstyleBehaviour.recordMaybeInsert = function(editor, session, bracket) {
	    var cursor = editor.getCursorPosition();
	    var line = session.doc.getLine(cursor.row);
	    if (!this.isMaybeInsertedClosing(cursor, line))
	        context.maybeInsertedBrackets = 0;
	    context.maybeInsertedRow = cursor.row;
	    context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
	    context.maybeInsertedLineEnd = line.substr(cursor.column);
	    context.maybeInsertedBrackets++;
	};

	CstyleBehaviour.isAutoInsertedClosing = function(cursor, line, bracket) {
	    return context.autoInsertedBrackets > 0 &&
	        cursor.row === context.autoInsertedRow &&
	        bracket === context.autoInsertedLineEnd[0] &&
	        line.substr(cursor.column) === context.autoInsertedLineEnd;
	};

	CstyleBehaviour.isMaybeInsertedClosing = function(cursor, line) {
	    return context.maybeInsertedBrackets > 0 &&
	        cursor.row === context.maybeInsertedRow &&
	        line.substr(cursor.column) === context.maybeInsertedLineEnd &&
	        line.substr(0, cursor.column) == context.maybeInsertedLineStart;
	};

	CstyleBehaviour.popAutoInsertedClosing = function() {
	    context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
	    context.autoInsertedBrackets--;
	};

	CstyleBehaviour.clearMaybeInsertedClosing = function() {
	    if (context) {
	        context.maybeInsertedBrackets = 0;
	        context.maybeInsertedRow = -1;
	    }
	};



	oop.inherits(CstyleBehaviour, Behaviour);

	exports.CstyleBehaviour = CstyleBehaviour;
	});

	ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
	"use strict";

	var oop = acequire("../../lib/oop");
	var Range = acequire("../../range").Range;
	var BaseFoldMode = acequire("./fold_mode").FoldMode;

	var FoldMode = exports.FoldMode = function(commentRegex) {
	    if (commentRegex) {
	        this.foldingStartMarker = new RegExp(
	            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
	        );
	        this.foldingStopMarker = new RegExp(
	            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
	        );
	    }
	};
	oop.inherits(FoldMode, BaseFoldMode);

	(function() {
	    
	    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
	    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
	    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
	    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
	    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
	    this._getFoldWidgetBase = this.getFoldWidget;
	    this.getFoldWidget = function(session, foldStyle, row) {
	        var line = session.getLine(row);
	    
	        if (this.singleLineBlockCommentRe.test(line)) {
	            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
	                return "";
	        }
	    
	        var fw = this._getFoldWidgetBase(session, foldStyle, row);
	    
	        if (!fw && this.startRegionRe.test(line))
	            return "start"; // lineCommentRegionStart
	    
	        return fw;
	    };

	    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
	        var line = session.getLine(row);
	        
	        if (this.startRegionRe.test(line))
	            return this.getCommentRegionBlock(session, line, row);
	        
	        var match = line.match(this.foldingStartMarker);
	        if (match) {
	            var i = match.index;

	            if (match[1])
	                return this.openingBracketBlock(session, match[1], row, i);
	                
	            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
	            
	            if (range && !range.isMultiLine()) {
	                if (forceMultiline) {
	                    range = this.getSectionRange(session, row);
	                } else if (foldStyle != "all")
	                    range = null;
	            }
	            
	            return range;
	        }

	        if (foldStyle === "markbegin")
	            return;

	        var match = line.match(this.foldingStopMarker);
	        if (match) {
	            var i = match.index + match[0].length;

	            if (match[1])
	                return this.closingBracketBlock(session, match[1], row, i);

	            return session.getCommentFoldRange(row, i, -1);
	        }
	    };
	    
	    this.getSectionRange = function(session, row) {
	        var line = session.getLine(row);
	        var startIndent = line.search(/\S/);
	        var startRow = row;
	        var startColumn = line.length;
	        row = row + 1;
	        var endRow = row;
	        var maxRow = session.getLength();
	        while (++row < maxRow) {
	            line = session.getLine(row);
	            var indent = line.search(/\S/);
	            if (indent === -1)
	                continue;
	            if  (startIndent > indent)
	                break;
	            var subRange = this.getFoldWidgetRange(session, "all", row);
	            
	            if (subRange) {
	                if (subRange.start.row <= startRow) {
	                    break;
	                } else if (subRange.isMultiLine()) {
	                    row = subRange.end.row;
	                } else if (startIndent == indent) {
	                    break;
	                }
	            }
	            endRow = row;
	        }
	        
	        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
	    };
	    this.getCommentRegionBlock = function(session, line, row) {
	        var startColumn = line.search(/\s*$/);
	        var maxRow = session.getLength();
	        var startRow = row;
	        
	        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
	        var depth = 1;
	        while (++row < maxRow) {
	            line = session.getLine(row);
	            var m = re.exec(line);
	            if (!m) continue;
	            if (m[1]) depth--;
	            else depth++;

	            if (!depth) break;
	        }

	        var endRow = row;
	        if (endRow > startRow) {
	            return new Range(startRow, startColumn, endRow, line.length);
	        }
	    };

	}).call(FoldMode.prototype);

	});

	ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"], function(acequire, exports, module) {
	"use strict";

	var oop = acequire("../lib/oop");
	var TextMode = acequire("./text").Mode;
	var HighlightRules = acequire("./json_highlight_rules").JsonHighlightRules;
	var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
	var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
	var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;
	var WorkerClient = acequire("../worker/worker_client").WorkerClient;

	var Mode = function() {
	    this.HighlightRules = HighlightRules;
	    this.$outdent = new MatchingBraceOutdent();
	    this.$behaviour = new CstyleBehaviour();
	    this.foldingRules = new CStyleFoldMode();
	};
	oop.inherits(Mode, TextMode);

	(function() {

	    this.getNextLineIndent = function(state, line, tab) {
	        var indent = this.$getIndent(line);

	        if (state == "start") {
	            var match = line.match(/^.*[\{\(\[]\s*$/);
	            if (match) {
	                indent += tab;
	            }
	        }

	        return indent;
	    };

	    this.checkOutdent = function(state, line, input) {
	        return this.$outdent.checkOutdent(line, input);
	    };

	    this.autoOutdent = function(state, doc, row) {
	        this.$outdent.autoOutdent(doc, row);
	    };

	    this.createWorker = function(session) {
	        var worker = new WorkerClient(["ace"], __webpack_require__(15), "JsonWorker");
	        worker.attachToDocument(session.getDocument());

	        worker.on("annotate", function(e) {
	            session.setAnnotations(e.data);
	        });

	        worker.on("terminate", function() {
	            session.clearAnnotations();
	        });

	        return worker;
	    };


	    this.$id = "ace/mode/json";
	}).call(Mode.prototype);

	exports.Mode = Mode;
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports.id = 'ace/mode/json_worker';
	module.exports.src = "\"no use strict\";(function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}})(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}var cons=obj.constructor;if(cons===RegExp)return obj;copy=cons();for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/json/json_parse\",[\"require\",\"exports\",\"module\"],function(){\"use strict\";var at,ch,text,value,escapee={'\"':'\"',\"\\\\\":\"\\\\\",\"/\":\"/\",b:\"\\b\",f:\"\\f\",n:\"\\n\",r:\"\\r\",t:\"\t\"},error=function(m){throw{name:\"SyntaxError\",message:m,at:at,text:text}},next=function(c){return c&&c!==ch&&error(\"Expected '\"+c+\"' instead of '\"+ch+\"'\"),ch=text.charAt(at),at+=1,ch},number=function(){var number,string=\"\";for(\"-\"===ch&&(string=\"-\",next(\"-\"));ch>=\"0\"&&\"9\">=ch;)string+=ch,next();if(\".\"===ch)for(string+=\".\";next()&&ch>=\"0\"&&\"9\">=ch;)string+=ch;if(\"e\"===ch||\"E\"===ch)for(string+=ch,next(),(\"-\"===ch||\"+\"===ch)&&(string+=ch,next());ch>=\"0\"&&\"9\">=ch;)string+=ch,next();return number=+string,isNaN(number)?(error(\"Bad number\"),void 0):number},string=function(){var hex,i,uffff,string=\"\";if('\"'===ch)for(;next();){if('\"'===ch)return next(),string;if(\"\\\\\"===ch)if(next(),\"u\"===ch){for(uffff=0,i=0;4>i&&(hex=parseInt(next(),16),isFinite(hex));i+=1)uffff=16*uffff+hex;string+=String.fromCharCode(uffff)}else{if(\"string\"!=typeof escapee[ch])break;string+=escapee[ch]}else string+=ch}error(\"Bad string\")},white=function(){for(;ch&&\" \">=ch;)next()},word=function(){switch(ch){case\"t\":return next(\"t\"),next(\"r\"),next(\"u\"),next(\"e\"),!0;case\"f\":return next(\"f\"),next(\"a\"),next(\"l\"),next(\"s\"),next(\"e\"),!1;case\"n\":return next(\"n\"),next(\"u\"),next(\"l\"),next(\"l\"),null}error(\"Unexpected '\"+ch+\"'\")},array=function(){var array=[];if(\"[\"===ch){if(next(\"[\"),white(),\"]\"===ch)return next(\"]\"),array;for(;ch;){if(array.push(value()),white(),\"]\"===ch)return next(\"]\"),array;next(\",\"),white()}}error(\"Bad array\")},object=function(){var key,object={};if(\"{\"===ch){if(next(\"{\"),white(),\"}\"===ch)return next(\"}\"),object;for(;ch;){if(key=string(),white(),next(\":\"),Object.hasOwnProperty.call(object,key)&&error('Duplicate key \"'+key+'\"'),object[key]=value(),white(),\"}\"===ch)return next(\"}\"),object;next(\",\"),white()}}error(\"Bad object\")};return value=function(){switch(white(),ch){case\"{\":return object();case\"[\":return array();case'\"':return string();case\"-\":return number();default:return ch>=\"0\"&&\"9\">=ch?number():word()}},function(source,reviver){var result;return text=source,at=0,ch=\" \",result=value(),white(),ch&&error(\"Syntax error\"),\"function\"==typeof reviver?function walk(holder,key){var k,v,value=holder[key];if(value&&\"object\"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(v=walk(value,k),void 0!==v?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}({\"\":result},\"\"):result}}),ace.define(\"ace/mode/json_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/json/json_parse\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\"),Mirror=acequire(\"../worker/mirror\").Mirror,parse=acequire(\"./json/json_parse\"),JsonWorker=exports.JsonWorker=function(sender){Mirror.call(this,sender),this.setTimeout(200)};oop.inherits(JsonWorker,Mirror),function(){this.onUpdate=function(){var value=this.doc.getValue(),errors=[];try{value&&parse(value)}catch(e){var pos=this.doc.indexToPosition(e.at-1);errors.push({row:pos.row,column:pos.column,text:e.message,type:\"error\"})}this.sender.emit(\"annotate\",errors)}}.call(JsonWorker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0\n}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ },
/* 16 */
/***/ function(module, exports) {

	ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/keyboard/hash_handler","ace/lib/keys"], function(acequire, exports, module) {
	"use strict";

	var dom = acequire("../lib/dom");
	var lang = acequire("../lib/lang");
	var event = acequire("../lib/event");
	var searchboxCss = "\
	.ace_search {\
	background-color: #ddd;\
	border: 1px solid #cbcbcb;\
	border-top: 0 none;\
	max-width: 325px;\
	overflow: hidden;\
	margin: 0;\
	padding: 4px;\
	padding-right: 6px;\
	padding-bottom: 0;\
	position: absolute;\
	top: 0px;\
	z-index: 99;\
	white-space: normal;\
	}\
	.ace_search.left {\
	border-left: 0 none;\
	border-radius: 0px 0px 5px 0px;\
	left: 0;\
	}\
	.ace_search.right {\
	border-radius: 0px 0px 0px 5px;\
	border-right: 0 none;\
	right: 0;\
	}\
	.ace_search_form, .ace_replace_form {\
	border-radius: 3px;\
	border: 1px solid #cbcbcb;\
	float: left;\
	margin-bottom: 4px;\
	overflow: hidden;\
	}\
	.ace_search_form.ace_nomatch {\
	outline: 1px solid red;\
	}\
	.ace_search_field {\
	background-color: white;\
	border-right: 1px solid #cbcbcb;\
	border: 0 none;\
	-webkit-box-sizing: border-box;\
	-moz-box-sizing: border-box;\
	box-sizing: border-box;\
	float: left;\
	height: 22px;\
	outline: 0;\
	padding: 0 7px;\
	width: 214px;\
	margin: 0;\
	}\
	.ace_searchbtn,\
	.ace_replacebtn {\
	background: #fff;\
	border: 0 none;\
	border-left: 1px solid #dcdcdc;\
	cursor: pointer;\
	float: left;\
	height: 22px;\
	margin: 0;\
	position: relative;\
	}\
	.ace_searchbtn:last-child,\
	.ace_replacebtn:last-child {\
	border-top-right-radius: 3px;\
	border-bottom-right-radius: 3px;\
	}\
	.ace_searchbtn:disabled {\
	background: none;\
	cursor: default;\
	}\
	.ace_searchbtn {\
	background-position: 50% 50%;\
	background-repeat: no-repeat;\
	width: 27px;\
	}\
	.ace_searchbtn.prev {\
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    \
	}\
	.ace_searchbtn.next {\
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    \
	}\
	.ace_searchbtn_close {\
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;\
	border-radius: 50%;\
	border: 0 none;\
	color: #656565;\
	cursor: pointer;\
	float: right;\
	font: 16px/16px Arial;\
	height: 14px;\
	margin: 5px 1px 9px 5px;\
	padding: 0;\
	text-align: center;\
	width: 14px;\
	}\
	.ace_searchbtn_close:hover {\
	background-color: #656565;\
	background-position: 50% 100%;\
	color: white;\
	}\
	.ace_replacebtn.prev {\
	width: 54px\
	}\
	.ace_replacebtn.next {\
	width: 27px\
	}\
	.ace_button {\
	margin-left: 2px;\
	cursor: pointer;\
	-webkit-user-select: none;\
	-moz-user-select: none;\
	-o-user-select: none;\
	-ms-user-select: none;\
	user-select: none;\
	overflow: hidden;\
	opacity: 0.7;\
	border: 1px solid rgba(100,100,100,0.23);\
	padding: 1px;\
	-moz-box-sizing: border-box;\
	box-sizing:    border-box;\
	color: black;\
	}\
	.ace_button:hover {\
	background-color: #eee;\
	opacity:1;\
	}\
	.ace_button:active {\
	background-color: #ddd;\
	}\
	.ace_button.checked {\
	border-color: #3399ff;\
	opacity:1;\
	}\
	.ace_search_options{\
	margin-bottom: 3px;\
	text-align: right;\
	-webkit-user-select: none;\
	-moz-user-select: none;\
	-o-user-select: none;\
	-ms-user-select: none;\
	user-select: none;\
	}";
	var HashHandler = acequire("../keyboard/hash_handler").HashHandler;
	var keyUtil = acequire("../lib/keys");

	dom.importCssString(searchboxCss, "ace_searchbox");

	var html = '<div class="ace_search right">\
	    <button type="button" action="hide" class="ace_searchbtn_close"></button>\
	    <div class="ace_search_form">\
	        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>\
	        <button type="button" action="findNext" class="ace_searchbtn next"></button>\
	        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>\
	        <button type="button" action="findAll" class="ace_searchbtn" title="Alt-Enter">All</button>\
	    </div>\
	    <div class="ace_replace_form">\
	        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>\
	        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>\
	        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>\
	    </div>\
	    <div class="ace_search_options">\
	        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>\
	        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>\
	        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>\
	    </div>\
	</div>'.replace(/>\s+/g, ">");

	var SearchBox = function(editor, range, showReplaceForm) {
	    var div = dom.createElement("div");
	    div.innerHTML = html;
	    this.element = div.firstChild;

	    this.$init();
	    this.setEditor(editor);
	};

	(function() {
	    this.setEditor = function(editor) {
	        editor.searchBox = this;
	        editor.container.appendChild(this.element);
	        this.editor = editor;
	    };

	    this.$initElements = function(sb) {
	        this.searchBox = sb.querySelector(".ace_search_form");
	        this.replaceBox = sb.querySelector(".ace_replace_form");
	        this.searchOptions = sb.querySelector(".ace_search_options");
	        this.regExpOption = sb.querySelector("[action=toggleRegexpMode]");
	        this.caseSensitiveOption = sb.querySelector("[action=toggleCaseSensitive]");
	        this.wholeWordOption = sb.querySelector("[action=toggleWholeWords]");
	        this.searchInput = this.searchBox.querySelector(".ace_search_field");
	        this.replaceInput = this.replaceBox.querySelector(".ace_search_field");
	    };
	    
	    this.$init = function() {
	        var sb = this.element;
	        
	        this.$initElements(sb);
	        
	        var _this = this;
	        event.addListener(sb, "mousedown", function(e) {
	            setTimeout(function(){
	                _this.activeInput.focus();
	            }, 0);
	            event.stopPropagation(e);
	        });
	        event.addListener(sb, "click", function(e) {
	            var t = e.target || e.srcElement;
	            var action = t.getAttribute("action");
	            if (action && _this[action])
	                _this[action]();
	            else if (_this.$searchBarKb.commands[action])
	                _this.$searchBarKb.commands[action].exec(_this);
	            event.stopPropagation(e);
	        });

	        event.addCommandKeyListener(sb, function(e, hashId, keyCode) {
	            var keyString = keyUtil.keyCodeToString(keyCode);
	            var command = _this.$searchBarKb.findKeyCommand(hashId, keyString);
	            if (command && command.exec) {
	                command.exec(_this);
	                event.stopEvent(e);
	            }
	        });

	        this.$onChange = lang.delayedCall(function() {
	            _this.find(false, false);
	        });

	        event.addListener(this.searchInput, "input", function() {
	            _this.$onChange.schedule(20);
	        });
	        event.addListener(this.searchInput, "focus", function() {
	            _this.activeInput = _this.searchInput;
	            _this.searchInput.value && _this.highlight();
	        });
	        event.addListener(this.replaceInput, "focus", function() {
	            _this.activeInput = _this.replaceInput;
	            _this.searchInput.value && _this.highlight();
	        });
	    };
	    this.$closeSearchBarKb = new HashHandler([{
	        bindKey: "Esc",
	        name: "closeSearchBar",
	        exec: function(editor) {
	            editor.searchBox.hide();
	        }
	    }]);
	    this.$searchBarKb = new HashHandler();
	    this.$searchBarKb.bindKeys({
	        "Ctrl-f|Command-f": function(sb) {
	            var isReplace = sb.isReplace = !sb.isReplace;
	            sb.replaceBox.style.display = isReplace ? "" : "none";
	            sb.searchInput.focus();
	        },
	        "Ctrl-H|Command-Option-F": function(sb) {
	            sb.replaceBox.style.display = "";
	            sb.replaceInput.focus();
	        },
	        "Ctrl-G|Command-G": function(sb) {
	            sb.findNext();
	        },
	        "Ctrl-Shift-G|Command-Shift-G": function(sb) {
	            sb.findPrev();
	        },
	        "esc": function(sb) {
	            setTimeout(function() { sb.hide();});
	        },
	        "Return": function(sb) {
	            if (sb.activeInput == sb.replaceInput)
	                sb.replace();
	            sb.findNext();
	        },
	        "Shift-Return": function(sb) {
	            if (sb.activeInput == sb.replaceInput)
	                sb.replace();
	            sb.findPrev();
	        },
	        "Alt-Return": function(sb) {
	            if (sb.activeInput == sb.replaceInput)
	                sb.replaceAll();
	            sb.findAll();
	        },
	        "Tab": function(sb) {
	            (sb.activeInput == sb.replaceInput ? sb.searchInput : sb.replaceInput).focus();
	        }
	    });

	    this.$searchBarKb.addCommands([{
	        name: "toggleRegexpMode",
	        bindKey: {win: "Alt-R|Alt-/", mac: "Ctrl-Alt-R|Ctrl-Alt-/"},
	        exec: function(sb) {
	            sb.regExpOption.checked = !sb.regExpOption.checked;
	            sb.$syncOptions();
	        }
	    }, {
	        name: "toggleCaseSensitive",
	        bindKey: {win: "Alt-C|Alt-I", mac: "Ctrl-Alt-R|Ctrl-Alt-I"},
	        exec: function(sb) {
	            sb.caseSensitiveOption.checked = !sb.caseSensitiveOption.checked;
	            sb.$syncOptions();
	        }
	    }, {
	        name: "toggleWholeWords",
	        bindKey: {win: "Alt-B|Alt-W", mac: "Ctrl-Alt-B|Ctrl-Alt-W"},
	        exec: function(sb) {
	            sb.wholeWordOption.checked = !sb.wholeWordOption.checked;
	            sb.$syncOptions();
	        }
	    }]);

	    this.$syncOptions = function() {
	        dom.setCssClass(this.regExpOption, "checked", this.regExpOption.checked);
	        dom.setCssClass(this.wholeWordOption, "checked", this.wholeWordOption.checked);
	        dom.setCssClass(this.caseSensitiveOption, "checked", this.caseSensitiveOption.checked);
	        this.find(false, false);
	    };

	    this.highlight = function(re) {
	        this.editor.session.highlight(re || this.editor.$search.$options.re);
	        this.editor.renderer.updateBackMarkers()
	    };
	    this.find = function(skipCurrent, backwards, preventScroll) {
	        var range = this.editor.find(this.searchInput.value, {
	            skipCurrent: skipCurrent,
	            backwards: backwards,
	            wrap: true,
	            regExp: this.regExpOption.checked,
	            caseSensitive: this.caseSensitiveOption.checked,
	            wholeWord: this.wholeWordOption.checked,
	            preventScroll: preventScroll
	        });
	        var noMatch = !range && this.searchInput.value;
	        dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
	        this.editor._emit("findSearchBox", { match: !noMatch });
	        this.highlight();
	    };
	    this.findNext = function() {
	        this.find(true, false);
	    };
	    this.findPrev = function() {
	        this.find(true, true);
	    };
	    this.findAll = function(){
	        var range = this.editor.findAll(this.searchInput.value, {            
	            regExp: this.regExpOption.checked,
	            caseSensitive: this.caseSensitiveOption.checked,
	            wholeWord: this.wholeWordOption.checked
	        });
	        var noMatch = !range && this.searchInput.value;
	        dom.setCssClass(this.searchBox, "ace_nomatch", noMatch);
	        this.editor._emit("findSearchBox", { match: !noMatch });
	        this.highlight();
	        this.hide();
	    };
	    this.replace = function() {
	        if (!this.editor.getReadOnly())
	            this.editor.replace(this.replaceInput.value);
	    };    
	    this.replaceAndFindNext = function() {
	        if (!this.editor.getReadOnly()) {
	            this.editor.replace(this.replaceInput.value);
	            this.findNext()
	        }
	    };
	    this.replaceAll = function() {
	        if (!this.editor.getReadOnly())
	            this.editor.replaceAll(this.replaceInput.value);
	    };

	    this.hide = function() {
	        this.element.style.display = "none";
	        this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb);
	        this.editor.focus();
	    };
	    this.show = function(value, isReplace) {
	        this.element.style.display = "";
	        this.replaceBox.style.display = isReplace ? "" : "none";

	        this.isReplace = isReplace;

	        if (value)
	            this.searchInput.value = value;
	        
	        this.find(false, false, true);
	        
	        this.searchInput.focus();
	        this.searchInput.select();

	        this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb);
	    };

	    this.isFocused = function() {
	        var el = document.activeElement;
	        return el == this.searchInput || el == this.replaceInput;
	    }
	}).call(SearchBox.prototype);

	exports.SearchBox = SearchBox;

	exports.Search = function(editor, isReplace) {
	    var sb = editor.searchBox || new SearchBox(editor);
	    sb.show(editor.session.getTextRange(), isReplace);
	};

	});
	                (function() {
	                    ace.acequire(["ace/ext/searchbox"], function() {});
	                })();
	            

/***/ },
/* 17 */
/***/ function(module, exports) {

	/* ***** BEGIN LICENSE BLOCK *****
	 * Distributed under the BSD license:
	 *
	 * Copyright (c) 2010, Ajax.org B.V.
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *     * Redistributions of source code must retain the above copyright
	 *       notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above copyright
	 *       notice, this list of conditions and the following disclaimer in the
	 *       documentation and/or other materials provided with the distribution.
	 *     * Neither the name of Ajax.org B.V. nor the
	 *       names of its contributors may be used to endorse or promote products
	 *       derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
	 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 * ***** END LICENSE BLOCK ***** */

	ace.define('ace/theme/jsoneditor', ['require', 'exports', 'module', 'ace/lib/dom'], function(acequire, exports, module) {

	exports.isDark = false;
	exports.cssClass = "ace-jsoneditor";
	exports.cssText = ".ace-jsoneditor .ace_gutter {\
	background: #ebebeb;\
	color: #333\
	}\
	\
	.ace-jsoneditor.ace_editor {\
	font-family: droid sans mono, consolas, monospace, courier new, courier, sans-serif;\
	line-height: 1.3;\
	}\
	.ace-jsoneditor .ace_print-margin {\
	width: 1px;\
	background: #e8e8e8\
	}\
	.ace-jsoneditor .ace_scroller {\
	background-color: #FFFFFF\
	}\
	.ace-jsoneditor .ace_text-layer {\
	color: gray\
	}\
	.ace-jsoneditor .ace_variable {\
	color: #1a1a1a\
	}\
	.ace-jsoneditor .ace_cursor {\
	border-left: 2px solid #000000\
	}\
	.ace-jsoneditor .ace_overwrite-cursors .ace_cursor {\
	border-left: 0px;\
	border-bottom: 1px solid #000000\
	}\
	.ace-jsoneditor .ace_marker-layer .ace_selection {\
	background: lightgray\
	}\
	.ace-jsoneditor.ace_multiselect .ace_selection.ace_start {\
	box-shadow: 0 0 3px 0px #FFFFFF;\
	border-radius: 2px\
	}\
	.ace-jsoneditor .ace_marker-layer .ace_step {\
	background: rgb(255, 255, 0)\
	}\
	.ace-jsoneditor .ace_marker-layer .ace_bracket {\
	margin: -1px 0 0 -1px;\
	border: 1px solid #BFBFBF\
	}\
	.ace-jsoneditor .ace_marker-layer .ace_active-line {\
	background: #FFFBD1\
	}\
	.ace-jsoneditor .ace_gutter-active-line {\
	background-color : #dcdcdc\
	}\
	.ace-jsoneditor .ace_marker-layer .ace_selected-word {\
	border: 1px solid lightgray\
	}\
	.ace-jsoneditor .ace_invisible {\
	color: #BFBFBF\
	}\
	.ace-jsoneditor .ace_keyword,\
	.ace-jsoneditor .ace_meta,\
	.ace-jsoneditor .ace_support.ace_constant.ace_property-value {\
	color: #AF956F\
	}\
	.ace-jsoneditor .ace_keyword.ace_operator {\
	color: #484848\
	}\
	.ace-jsoneditor .ace_keyword.ace_other.ace_unit {\
	color: #96DC5F\
	}\
	.ace-jsoneditor .ace_constant.ace_language {\
	color: darkorange\
	}\
	.ace-jsoneditor .ace_constant.ace_numeric {\
	color: red\
	}\
	.ace-jsoneditor .ace_constant.ace_character.ace_entity {\
	color: #BF78CC\
	}\
	.ace-jsoneditor .ace_invalid {\
	color: #FFFFFF;\
	background-color: #FF002A;\
	}\
	.ace-jsoneditor .ace_fold {\
	background-color: #AF956F;\
	border-color: #000000\
	}\
	.ace-jsoneditor .ace_storage,\
	.ace-jsoneditor .ace_support.ace_class,\
	.ace-jsoneditor .ace_support.ace_function,\
	.ace-jsoneditor .ace_support.ace_other,\
	.ace-jsoneditor .ace_support.ace_type {\
	color: #C52727\
	}\
	.ace-jsoneditor .ace_string {\
	color: green\
	}\
	.ace-jsoneditor .ace_comment {\
	color: #BCC8BA\
	}\
	.ace-jsoneditor .ace_entity.ace_name.ace_tag,\
	.ace-jsoneditor .ace_entity.ace_other.ace_attribute-name {\
	color: #606060\
	}\
	.ace-jsoneditor .ace_markup.ace_underline {\
	text-decoration: underline\
	}\
	.ace-jsoneditor .ace_indent-guide {\
	background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y\
	}";

	var dom = acequire("../lib/dom");
	dom.importCssString(exports.cssText, exports.cssClass);
	});


/***/ }
/******/ ])
});
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(13)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);