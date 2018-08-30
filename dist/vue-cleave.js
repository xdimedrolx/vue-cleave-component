(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cleave.js"));
	else if(typeof define === 'function' && define.amd)
		define("VueCleave", ["cleave.js"], factory);
	else if(typeof exports === 'object')
		exports["VueCleave"] = factory(require("cleave.js"));
	else
		root["VueCleave"] = factory(root["Cleave"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=template&id=2ecde3a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"text"},on:{"blur":_vm.onBlur}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component.vue?vue&type=template&id=2ecde3a6&

// EXTERNAL MODULE: external {"commonjs":"cleave.js","commonjs2":"cleave.js","amd":"cleave.js","root":"Cleave"}
var external_commonjs_cleave_js_commonjs2_cleave_js_amd_cleave_js_root_Cleave_ = __webpack_require__(0);
var external_commonjs_cleave_js_commonjs2_cleave_js_amd_cleave_js_root_Cleave_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_cleave_js_commonjs2_cleave_js_amd_cleave_js_root_Cleave_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//



/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'cleave',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || typeof value === 'string' || value instanceof String || typeof value === 'number';
      }
    },
    // https://github.com/nosir/cleave.js/blob/master/doc/options.md
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // Set this prop to false to emit masked value
    raw: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      // cleave.js instance
      cleave: null,
      // callback backup
      onValueChangedFn: null
    };
  },
  mounted: function mounted() {
    /* istanbul ignore if */
    if (this.cleave) return;

    this.cleave = new external_commonjs_cleave_js_commonjs2_cleave_js_amd_cleave_js_root_Cleave_default.a(this.$el, this.getOptions(this.options));
    this.cleave.setRawValue(this.value);
  },

  methods: {
    /**
     * Inject our method in config options
     *
     * @param options Object
     */
    getOptions: function getOptions(options) {
      // Preserve original callback
      this.onValueChangedFn = options.onValueChanged;

      return _extends({}, options, {
        onValueChanged: this.onValueChanged
      });
    },

    /**
     * Watch for value changed by cleave and notify parent component
     *
     * @param event
     */
    onValueChanged: function onValueChanged(event) {
      var value = this.raw ? event.target.rawValue : event.target.value;
      if (this.value !== value) {
        this.$emit('input', value);
      }

      // Call original callback method
      if (typeof this.onValueChangedFn === 'function') {
        this.onValueChangedFn.call(this, event);
      }
    },
    onBlur: function onBlur(event) {
      this.$emit('blur', this.value);
    }
  },
  watch: {
    /**
     * Watch for any changes in options and redraw
     *
     * @param newOptions Object
     */
    options: {
      deep: true,
      handler: function handler(newOptions) {
        this.cleave.destroy();
        this.cleave = new external_commonjs_cleave_js_commonjs2_cleave_js_amd_cleave_js_root_Cleave_default.a(this.$el, this.getOptions(newOptions));
        this.cleave.setRawValue(this.value);
      }
    },

    /**
     * Watch for changes from parent component and notify cleave instance
     *
     * @param newValue
     */
    value: function value(newValue) {
      /* istanbul ignore if */
      if (!this.cleave) return;

      // when v-model is not masked (raw)
      if (this.raw && newValue === this.cleave.getRawValue()) return;
      //  when v-model is masked (NOT raw)
      if (!this.raw && newValue === this.$el.value) return;
      // Lastly set newValue
      this.cleave.setRawValue(newValue);
    }
  },
  /**
   * Free up memory
   */
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore if */
    if (!this.cleave) return;

    this.cleave.destroy();
    this.cleave = null;
    this.onValueChangedFn = null;
  }
});
// CONCATENATED MODULE: ./src/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component.vue





/* normalize component */

var component = normalizeComponent(
  src_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_component = (component.exports);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return src_plugin; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "component", function() { return src_component; });


var src_plugin = function plugin(Vue, params) {
  var name = 'cleave';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, src_component);
};

src_component.install = src_plugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_component);


/***/ })
/******/ ])["default"];
});