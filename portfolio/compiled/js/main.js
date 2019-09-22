/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__);

 // import './assets/header.html';
// import './assets/footer.html';
//
// import './index.html';

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

window.addEventListener('DOMContentLoaded', function () {
  // Overwrites native 'children' prototype.
  // Adds Document & DocumentFragment support for IE9 & Safari.
  // Returns array instead of HTMLCollection.
  (function (constructor) {
    if (constructor && constructor.prototype && constructor.prototype.children == null) {
      Object.defineProperty(constructor.prototype, 'children', {
        get: function get() {
          var i = 0;
          var node;
          var nodes = this.childNodes;
          var children = [];

          while (node = nodes[i++]) {
            if (node.nodeType === 1) {
              children.push(node);
            }
          }

          return children;
        }
      });
    }
  })(window.Node || window.Element); // Lazy load images.


  new LazyLoad({
    elements_selector: '.lazy'
  }); // Init sliders.

  var productPageSlider = document.querySelector('#product-main-image-slider');
  var productPreviews = document.querySelector('#product-image-previews');

  if (productPageSlider && productPreviews) {
    var quantity = productPreviews.querySelectorAll('.swiper-slide').length;

    if (quantity >= 3) {
      productPreviews = new Swiper('.previews-slider', {
        spaceBetween: 20,
        slidesPerView: quantity > 2 ? 2 : quantity,
        loop: false,
        normalizeSlideIndex: false,
        navigation: {
          nextEl: '.previews-next',
          prevEl: '.previews-prev'
        }
      });
      productPageSlider = new Swiper('.main-image-slider', {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: false,
        normalizeSlideIndex: false
      });
      productPageSlider.controller.control = productPreviews;
      productPreviews.controller.control = productPageSlider;
    } else {
      var parent = productPreviews.$el[0].parentElement;
      parent.querySelector('.previews-next').classList.add('js-none');
      parent.querySelector('.previews-prev').classList.add('js-none');
    }
  }

  var solutionSlider = document.querySelector('#solution-images-slider');

  if (solutionSlider) {
    var _quantity = solutionSlider.querySelectorAll('.swiper-slide').length;
    solutionSlider = new Swiper('.solution-images-slider', {
      spaceBetween: 20,
      slidesPerView: _quantity >= 4 ? 4 : _quantity,
      loop: _quantity >= 4,
      loopedSlides: _quantity,
      navigation: {
        prevEl: '.prev-solution-image',
        nextEl: '.next-solution-image'
      },
      breakpoints: {
        768: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 2
        },
        500: {
          slidesPerView: 1
        }
      }
    });

    if (_quantity < 4) {
      solutionSlider.el.parentElement.querySelectorAll('.svg-button').forEach(function (button) {
        button.classList.add('js-none');
      });
      solutionSlider.el.classList.add('dead-slider');
    }
  }

  var productSimilarItems = document.querySelector('#product-similar-items');

  if (productSimilarItems) {
    productSimilarItems = new Swiper('#product-similar-items', {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: '.prev-similar-slide',
        nextEl: '.next-similar-slide'
      },
      breakpoints: {
        1024: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        }
      }
    });
  }

  var productTogetherItems = document.querySelector('#product-together-items');

  if (productTogetherItems) {
    productTogetherItems = new Swiper('#product-together-items', {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: '.prev-together-item',
        nextEl: '.next-together-item'
      },
      breakpoints: {
        1024: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        }
      }
    });
  }

  var albumSlider = document.querySelector('#album-slider');

  if (albumSlider) {
    albumSlider = new Swiper('#album-slider', {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl: '.album-swiper-prev',
        nextEl: '.album-swiper-next'
      }
    });
  }

  var reviewSlider = document.querySelector('#review-slider');

  if (reviewSlider) {
    reviewSlider = new Swiper('#review-slider', {
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl: '.prev-review',
        nextEl: '.next-review'
      }
    });
  } // Main page slider


  var mainSwiper = document.querySelector('#main-swiper');

  if (mainSwiper) {
    /** @function renderDots */
    var renderDots = function renderDots() {
      var index = null;
      var slides = mainSwiper.el.querySelectorAll('.swiper-slide');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slide = _step.value;

          if (slide.classList.contains('swiper-slide-active')) {
            index = slide.dataset.swiperSlideIndex;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (index !== null) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = pagination.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var dot = _step2.value;

            if (+dot.dataset.slide === +index) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    };

    var slides = mainSwiper.querySelectorAll('.swiper-slide');
    mainSwiper = new Swiper('#main-swiper', {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true
    });
    var pagination = mainSwiper.$el[0].querySelector('.slider-nav');

    for (var i = 0; i < slides.length; i++) {
      var label = document.createElement('LABEL');
      var image = slides[i].querySelector('img');
      label.className = 'slider-dot';
      label.innerHTML = "\n        <span class=\"dot-number\">".concat((i < 11 ? '0' : '') + (i + 1) + '.', "</span>\n        <span class=\"dot-text\">\n        ").concat(image.dataset.title.replace(/\s{2,}/, '').slice(0, 34), "\n        ...\n        </span>\n      ");
      label.dataset.slide = i;
      pagination.appendChild(label);
    }

    mainSwiper.on('slideChangeTransitionEnd', renderDots);
    pagination.addEventListener('click', function (event) {
      if (event.target.closest('.slider-dot')) {
        event.stopPropagation();
        var index = +event.target.closest('.slider-dot').dataset.slide;
        mainSwiper.slideToLoop(index);
        renderDots();
      }
    });
    renderDots();
  } // Debouncer.

  /** @function debounce
  * @param {Function} func
  * @param {Number} time
  * @return {Function}
  */


  function debounce(func, time) {
    var timer = null;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        func.apply(void 0, args);
      }, time);
    };
  } // Error decorator.

  /** @function errorDecorator
  * @param {Function} func
  * @return {Function}
  */


  function errorDecorator(func) {
    return function () {
      try {
        func.apply(void 0, arguments);
      } catch (error) {
        console.error(error);
      }
    };
  } // Function for getting coordinates of the element.

  /** @function getCoordinates
  * @param {HTMLElement} elem
  * @return {Object}
  */


  function getCoordinates(elem) {
    return {
      top: window.pageYOffset + elem.getBoundingClientRect().top,
      left: window.pageXOffset + elem.getBoundingClientRect().left
    };
  } // Reset and clear.

  /** @function resetAll */


  function resetAll() {
    clearDropdowns();
  }

  document.addEventListener('click', resetAll); // Ui elements.
  // Quantity counter.

  /** @function initCounter
  * @param {HTMLInputElement} input
  */

  function initCounter(input) {
    var min = 1;
    var max = 9999;
    var value = input.value == '' ? min : input.value;
    var wrap = document.createElement('DIV');
    wrap.innerHTML = "\n      <button class=\"minus-counter\" data-action=\"minus\">-</button>\n      <input type=\"text\" class=\"counter-value\" value=".concat(value, ">\n      <button class=\"plus-counter\" data-action=\"plus\">+</button>\n    ");
    wrap.className = input.className;
    input.parentElement.insertBefore(wrap, input);
    wrap.appendChild(input);
    input.setAttribute('style', 'display: none;');
    var inputValue = wrap.querySelector('.counter-value');
    /** @function changeCounter
    * @param {Event} event
    */

    function changeCounter(event) {
      if (event.target.tagName.toLowerCase() === 'button') {
        event.preventDefault(); // event.stopPropagation();

        if (event.target.dataset.action == 'plus' && value !== max) {
          value = ++value;
        } else if (event.target.dataset.action == 'minus' && value !== min) {
          value = --value;
        }

        render();
      }
    }
    /** @function setValue
    * @param {Event} event
    */


    function setValue(event) {
      value = input.value;
      render();
    }
    /** @function validate
    * @param {Event} event
    */


    function validate(event) {
      value = +event.target.value.replace(/\D/g, '');

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      render();
    }
    /** @function render */


    function render() {
      inputValue.value = value;
      input.value = value;
      input.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    }

    wrap.addEventListener('click', changeCounter);
    inputValue.addEventListener('input', validate);
    inputValue.addEventListener('change', validate);
    input.classList.add('js-init');
    input.addEventListener('change-value', setValue);
  }
  /** @function beautifyCounters */


  function beautifyCounters() {
    var counters = document.querySelectorAll('input.product-quantity:not(.js-init)');

    if (counters.length !== 0) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = counters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var counter = _step3.value;
          initCounter(counter);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }

  beautifyCounters();
  document.body.addEventListener('reinit-counters', beautifyCounters); // Beautify selects.

  /** @function initSelector
  * @param {HTMLSelectElement} select
  */

  function initSelector(select) {
    var value = select.value;
    var wrap = document.createElement('DIV');
    var options = '';

    for (var _i = 0, _Array$from = Array.from(select.children); _i < _Array$from.length; _i++) {
      var opt = _Array$from[_i];
      options += "<span>".concat(opt.value, "</span>");
    }

    wrap.innerHTML = "\n      <button class=\"site-selector-value\"></button>\n      <div class=\"site-select-list\">\n        ".concat(options, "\n      </div>\n    ");
    wrap.className = select.className;
    select.parentElement.insertBefore(wrap, select);
    wrap.appendChild(select);
    var optionsWrap = wrap.querySelector('.site-select-list');
    var valueEl = wrap.querySelector('.site-selector-value');
    /** @function render */

    function render() {
      valueEl.textContent = value;
    }
    /** @function toggleSelect
    * @param {Event} event
    */


    function toggleSelect(event) {
      event.preventDefault();
      event.stopPropagation();

      if (!event.target.closest('.site-select-list')) {
        document.body.dispatchEvent(new Event('close-selects'));
      }

      wrap.classList.toggle('active');
    }
    /** @function choose
    * @param {Event} event
    */


    function choose(event) {
      var target = event.target;

      if (target.classList.contains('site-select-list')) {
        event.stopPropagation();
      }

      value = target.textContent;
      select.value = value;
      select.dispatchEvent(new Event('change'));
      render();
    }

    render();
    optionsWrap.addEventListener('click', choose);
    wrap.addEventListener('click', toggleSelect);
  }
  /** @function closeSelects
  * @param {Event} event
  */


  function closeSelects(event) {
    document.querySelectorAll('div.site-selector.active').forEach(function (select) {
      select.classList.remove('active');
    });
  }

  var selectors = document.querySelectorAll('.site-selector');

  if (selectors.length !== 0) {
    selectors.forEach(function (selector) {
      initSelector(selector);
    });
    document.body.addEventListener('close-selects', closeSelects);
    document.body.addEventListener('click', closeSelects);
  } // Range sliders.


  var ranges = document.querySelectorAll('.range-input');
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    var _loop2 = function _loop2() {
      var range = _step4.value;
      var minValue = range.dataset.min !== undefined && !isNaN(range.dataset.min) ? +range.dataset.min : 0;
      var maxValue = range.dataset.max !== undefined && !isNaN(range.dataset.max) ? +range.dataset.max : 100;
      var percent = (maxValue - minValue) / 100;
      var name = range.dataset.name;
      console.log(minValue, maxValue);
      noUiSlider.create(range, {
        start: [minValue, maxValue],
        connect: false,
        range: {
          min: minValue,
          max: maxValue
        },
        margin: (maxValue - minValue) / 10 * 1.8,
        step: 1,
        cssClasses: {
          target: 'range-target',
          base: 'base',
          origin: 'origin',
          handle: 'range-handle',
          handleLower: 'handle-lower',
          handleUpper: 'handle-upper',
          touchArea: 'touch-area',
          horizontal: 'horizontal',
          vertical: 'vertical',
          background: 'background',
          connect: 'connect',
          connects: 'connects',
          ltr: 'ltr',
          rtl: 'rtl',
          draggable: 'draggable',
          drag: 'state-drag',
          tap: 'state-tap',
          active: 'active',
          tooltip: 'tooltip',
          pips: 'pips',
          pipsHorizontal: 'pips-horizontal',
          pipsVertical: 'pips-vertical',
          marker: 'marker',
          markerHorizontal: 'marker-horizontal',
          markerVertical: 'marker-vertical',
          markerNormal: 'marker-normal',
          markerLarge: 'marker-large',
          markerSub: 'marker-sub',
          value: 'value',
          valueHorizontal: 'value-horizontal',
          valueVertical: 'value-vertical',
          valueNormal: 'value-normal',
          valueLarge: 'value-large',
          valueSub: 'value-sub'
        }
      });
      var min = range.querySelector('.range-min-output');
      var max = range.querySelector('.range-max-output');
      var minInput = range.querySelector("[name=\"min-".concat(name, "\"]"));
      var maxInput = range.querySelector("[name=\"max-".concat(name, "\"]"));
      /** @function changeRangeValue
      * @param {Array} values
      */

      function changeRangeValue(values) {
        min.textContent = "\u043E\u0442\xA0" + Math.round(values[0]);
        max.textContent = "\u0434\u043E\xA0" + Math.round(values[1]);
        minInput.value = Math.round(values[0]);
        maxInput.value = Math.round(values[1]);
        min.style.left = values[0] / percent + '%';
        max.style.left = values[1] / percent + '%';
      }

      range.noUiSlider.on('update', changeRangeValue);
    };

    for (var _iterator4 = ranges[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      _loop2();
    } // All tabs on site functionality.

  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var tabsElements = document.getElementsByClassName('site-tabs');

  if (tabsElements.length !== 0) {
    /** @function changeTab
    * @param {Event} event
    */
    var changeTab = function changeTab(event) {
      var target = event.target;

      if (target.classList.contains('tab-button') && target.getAttribute('data-tab')) {
        var tabId = target.dataset.tab;
        var allTabs = target.closest('.site-tabs').querySelectorAll('.tab-content *[data-tab]');
        var position = {
          left: target.offsetLeft,
          top: target.offsetTop + target.offsetHeight
        };
        var brick = target.closest('.site-tabs').querySelector('.tabs-brick');
        brick.style.left = position.left + 'px';
        brick.style.top = position.top + 'px';
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = allTabs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var tab = _step5.value;

            if (tab.dataset.tab == tabId) {
              tab.classList.add('js-active');
            } else {
              tab.classList.remove('js-active');
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    };

    for (var t = 0; t < tabsElements.length; t++) {
      tabsElements[t].querySelector('.tabs-nav').addEventListener('click', changeTab);
      tabsElements[t].querySelector('.tab-button').dispatchEvent(new Event('click', {
        bubbles: true
      }));
    }
  } // Categories dropdown


  var categoriesWraps = document.getElementsByClassName('categories-wrap');
  /** @function showCategoryDropdown
  * @param {Event} event
  */

  function showCategoryDropdown(event) {
    if (event.target.classList.contains('category-expand')) {
      event.stopPropagation(); // first - remove all active dropdowns.

      clearDropdowns();
      var item = event.target.closest('.category-item');
      item.classList.add('active');
    } else if (event.target.closest('.category-item')) {
      event.stopPropagation();
    }
  }
  /** @function clearDropdowns */


  function clearDropdowns() {
    var drops = document.getElementsByClassName('category-item');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = drops[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var drop = _step6.value;
        drop.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }

  if (categoriesWraps.length !== 0) {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = categoriesWraps[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var wrap = _step7.value;
        wrap.addEventListener('click', showCategoryDropdown);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }
  } // Footer dropdowns


  var footerDrop = document.getElementById('footer-dropdowns');
  /** @function footerDropdown
  * @param {Event} event
  */

  function footerDropdown(event) {
    if (event.target.classList.contains('show-stuff')) {
      event.stopPropagation();
      resetFooterDropdowns();
      event.target.classList.add('active');
    }
  }
  /** @function resetFooterDropdowns */


  function resetFooterDropdowns() {
    var drops = document.getElementsByClassName('show-stuff');
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = drops[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var drop = _step8.value;
        drop.classList.remove('active');
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
          _iterator8["return"]();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }
  }

  if (footerDrop) {
    footerDrop.addEventListener('click', footerDropdown);
  } // Show/hide fixed button.


  var returnButton = document.getElementById('return-top-button');
  /** @function handleScroll
  * @param {Event} event
  */

  function handleScroll(event) {
    if (window.pageYOffset < 700) {
      returnButton.classList.add('hide');
    } else {
      returnButton.classList.remove('hide');
    }
  }
  /** @function returnToTop */


  function returnToTop() {
    var currentY = window.pageYOffset;
    var distancePart = currentY / 20;

    var _loop = function _loop(_i2) {
      setTimeout(function () {
        window.scrollTo(0, distancePart * _i2);
      }, 20 * (20 - _i2));
    };

    for (var _i2 = 19; _i2 >= 0; _i2--) {
      _loop(_i2);
    }
  }

  if (returnButton) {
    // Add handler to button itself.
    returnButton.addEventListener('click', returnToTop); // Add scroll handler.

    window.addEventListener('scroll', debounce(handleScroll, 100)); // Use it, when page has been loaded. But only if the button is present.

    handleScroll();
  } // Header menu.


  var burgerButton = document.getElementById('head-burger');
  var headMenu = document.getElementById('head-menu');
  /** @function toggleMenu
  * @param {Event} event
  */

  function toggleMenu(event) {
    if (event.target.tagName.toLowerCase() !== 'a') {
      event.preventDefault();
      headMenu.classList.toggle('active');
    }
  }

  if (burgerButton && headMenu) {
    burgerButton.addEventListener('click', toggleMenu);
    headMenu.addEventListener('click', toggleMenu);
  }

  if (headMenu) {
    headerPopup(headMenu);
  } // Header popup menu

  /** @function headerPopup
  * @param {HTMLElement} menuWrapper
  */


  function headerPopup(menuWrapper) {
    var currentBranch = null;
    /** @function showHeaderSubmenu
    * @param {Event} event
    */

    function showHeaderSubmenu(event) {
      var target = event.target;
      var pimp = target.parentElement.querySelector('.menu-pimp');

      if (target.tagName.toLowerCase() === 'a' && target.nextElementSibling && target.nextElementSibling.classList.contains('header-popup-menu')) {
        target.nextElementSibling.classList.add('active');
        pimp.setAttribute('style', 'left: ' + (target.offsetLeft + Math.ceil(target.offsetWidth / 2 - pimp.offsetWidth / 2)) + 'px;');
        currentBranch = target.closest('.header-menu > .menu-item');
      }
    }
    /** @function hideHeaderMenu
    * @param {Event} event
    */


    function hideHeaderMenu(event) {
      var related = event.relatedTarget;

      if (!related || related.closest('.header-menu > .menu-item') != currentBranch) {
        menuWrapper.querySelectorAll('.header-popup-menu').forEach(function (submenu) {
          submenu.classList.remove('active');
        });
      }
    }

    menuWrapper.addEventListener('mouseover', showHeaderSubmenu);
    menuWrapper.addEventListener('mouseout', hideHeaderMenu);
  } // Mobile version of menu.

  /** @function initMobileMenu
  * @param {HTMLElement} el
  * @param {HTMLElement} caller
  */


  function initMobileMenu(el, caller) {
    if (!el || !caller) {
      console.error('Pls provide menu element and button, that will open it!');
      return;
    }

    var wrap = el;
    var menuMap = null;
    var currentMenu = [];
    var popupBody = document.createElement('DIV');
    popupBody.className = 'black-popup-wrap';
    var menuIsOpenned = false; // Function, that return new menu every time. Old menu gets overwritten.

    /** @function getTemplate
    * @param {Map} map
    * @return {String}
    */

    function getTemplate(map) {
      var length = currentMenu.length;
      var list = '';
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = map[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _step9$value = _slicedToArray(_step9.value, 2),
              link = _step9$value[0],
              value = _step9$value[1];

          list += "\n          <div class=\"menu-item".concat(value.submenu ? ' has-sub' : '', "\">\n            <a ").concat(value.classes ? 'class="' + value.classes + '"' : '', "\n            href=\"").concat(value.href, "\">").concat(link, "</a>\n            ").concat(value.submenu ? '<button class="next-submenu"></button>' : '', "\n          </div>\n        ");
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return "\n        <div class=\"menu-wrapper\">\n          <div class=\"menu-top\">\n            <button class=\"back-to-parent".concat(length === 0 ? ' js-hide' : '', "\">\n              <svg width=\"15\" height=\"17\" viewBox=\"0 0 15 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.26203\n                 16.6619L0.319526 9.31619C-0.106501 8.86542 -0.106501 8.13458\n                 0.319527 7.68381L7.26203 0.338077C7.68805 -0.112694 8.37878\n                 -0.112694 8.80481 0.338077C9.23083 0.788848 9.23083 1.51969\n                 8.80481 1.97046L3.7246 7.34573L15 7.34573L15 9.65427L3.7246\n                 9.65427L8.8048 15.0295C9.23083 15.4803 9.23083 16.2112 8.8048\n                 16.6619C8.37878 17.1127 7.68805 17.1127 7.26203 16.6619Z\"\n                 fill=\"white\"/>\n              </svg>\n            </button>\n            <form>\n              <input type=\"text\" class=\"menu-search site-input\"\n               placeholder=\"\u041F\u043E\u0438\u0441\u043A\">\n            </form>\n            <button class=\"exit-menu popup-cross\"></button>\n          </div>\n          <div class=\"current-place\">\n            ").concat(length === 0 ? 'Меню' : currentMenu[length - 1] + '', "\n          </div>\n          <div class=\"scrollable-list\" data-simplebar>\n            <div class=\"link-list\">\n              ").concat(list, "\n            </div>\n          </div>\n        </div>\n      ");
    }
    /** @function clickHandler
    * @param {Event} event
    */


    function clickHandler(event) {
      var target = event.target;

      if (target.classList.contains('next-submenu')) {
        enterSubmenu(target);
      } else if (target.classList.contains('back-to-parent') || target.closest('.back-to-parent')) {
        exitSubmenu();
      } else if (target.classList.contains('exit-menu')) {
        closeMenu();
      }
    }
    /** @function enterSubmenu
    * @param {HTMLElement} target
    */


    function enterSubmenu(target) {
      var link = target.closest('.menu-item').querySelector('a').textContent.replace(/\s\s/g, '');
      var menuItem = findMapItem(link, menuMap);

      if (menuItem) {
        currentMenu.push(menuItem.link);
        renderMenu();
      } else {
        console.error('Submenu were not found!');
      }
    }
    /** @function exitSubmenu */


    function exitSubmenu() {
      currentMenu.pop();
      renderMenu();
    }
    /** @function closeMenu */


    function closeMenu() {
      if (menuIsOpenned) {
        popupBody.remove();
        menuIsOpenned = false;
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    }
    /** @function openMenu
    * @param {Event} event
    */


    function openMenu(event) {
      if (!menuIsOpenned) {
        renderMenu();
        document.body.appendChild(popupBody);
        menuIsOpenned = true;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      }
    }
    /** @function findMapItem
    * @param {HTMLElement} target
    * @param {Map} map
    * @return {Object|Null}
    */


    function findMapItem(target, map) {
      var tempArr = [];
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = map[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var _step10$value = _slicedToArray(_step10.value, 2),
              link = _step10$value[0],
              value = _step10$value[1];

          if (value.submenu === null) continue;

          if (link === target) {
            return {
              link: link,
              value: value
            };
          } else {
            tempArr.push(value);
          }
        } // If it's not on this level, search deeper.

      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      var result = null;

      for (var _i3 = 0, _tempArr = tempArr; _i3 < _tempArr.length; _i3++) {
        var list = _tempArr[_i3];
        result = findMapItem(target, list.submenu);

        if (result) {
          break;
        }
      }

      return result;
    } // Parse menu to make a map of it. Use map to navigate in menu.

    /** @function parseMenu
    * @param {HTMLElement} wrapper
    * @return {Map}
    */


    function parseMenu(wrapper) {
      var item = wrapper.querySelector('.menu-item');
      if (!item) return null;
      var children = item.parentElement.children;
      var map = new Map();

      for (var _i4 = 0; _i4 < children.length; _i4++) {
        if (children[_i4].classList.contains('menu-item')) {
          var submenu = children[_i4].querySelector('.submenu');

          var linkName = children[_i4].querySelector('a').textContent.replace(/\s\s/g, '');

          var linkHref = children[_i4].querySelector('a').href;

          map.set(linkName, {
            href: linkHref,
            classes: children[_i4].querySelector('a').className,
            submenu: submenu ? parseMenu(submenu) : null
          });
        } else if (children[_i4].classList.contains('menu-item-list')) {
          var itemLists = children[_i4].querySelectorAll('.menu-item');

          for (var j = 0; j < itemLists.length; j++) {
            var _linkName = itemLists[j].querySelector('a').textContent.replace(/\s\s/g, '');

            var _linkHref = itemLists[j].querySelector('a').href;
            map.set(_linkName, {
              href: _linkHref,
              classes: itemLists[j].querySelector('a').className,
              submenu: null
            });
          }
        }
      }

      return map;
    }

    menuMap = parseMenu(wrap);
    /* Render menu every time user clicks on something,
      that is not link, or search field.*/

    /** @function renderMenu */

    function renderMenu() {
      popupBody.classList.add('hide-scroll');
      var menuItems = null;

      if (currentMenu.length !== 0) {
        menuItems = getMenu(currentMenu[currentMenu.length - 1], menuMap);
      } else {
        menuItems = menuMap;
      }

      popupBody.innerHTML = getTemplate(menuItems);
      setTimeout(function () {
        popupBody.classList.remove('hide-scroll');
      });
    }
    /** @function getMenu
    * @param {HTMLElement} elem
    * @param {Map} map
    * @return {Map|undefined}
    */


    function getMenu(elem, map) {
      var mapItem = map.get(elem);

      if (mapItem) {
        return mapItem.submenu;
      } else {
        var result;
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = menuMap[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var _step11$value = _slicedToArray(_step11.value, 2),
                value = _step11$value[1];

            if (value.submenu) {
              result = getMenu(elem, value.submenu);
              if (result) break;
            }
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
              _iterator11["return"]();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        return result;
      }
    }

    caller.addEventListener('click', openMenu);
    popupBody.addEventListener('click', clickHandler);
  }

  if (headMenu) {
    initMobileMenu(headMenu, burgerButton);
  } // Function for hiding sidebars when they ar enot visible.

  /** @function hideColumn
  * @param {HTMLElement} wrap
  * @param {HTMLElement} column
  */


  function hideColumn(wrap, column) {
    if (getCoordinates(column).top + column.offsetHeight < window.pageYOffset) {
      wrap.classList.add('hidden');
    } else {
      wrap.classList.remove('hidden');
    }
  } // News list scroll past column.


  var expertColumn = document.getElementById('news-expert-column');
  var newsListWrap = document.getElementById('news-wrap');
  /** @function hideExpertColumn */

  function hideExpertColumn() {
    hideColumn(newsListWrap, expertColumn);
  }

  if (expertColumn && newsListWrap) {
    window.addEventListener('scroll', debounce(hideExpertColumn, 100));
    hideExpertColumn();
  } // ... and Catalog scroll too.


  var catalogWrap = document.querySelector('#catalog-wrap');
  var catalogFilter = document.querySelector('#catalog-filter');
  /** @function hideFilterColumn */

  function hideFilterColumn() {
    hideColumn(catalogWrap, catalogFilter);
  } // Toggle filter groups

  /** @function toggleFilterBlock
  * @param {Event} event
  */


  function toggleFilterBlock(event) {
    var target = event.target;

    if (target.classList.contains('filter-item-title')) {
      target.classList.toggle('hidden');
    }
  }
  /** @function toggleFilter
  * @param {Event} event
  */


  function toggleFilter(event) {
    var target = event.target;

    if (target.classList.contains('filter-toggle')) {
      catalogFilter.classList.toggle('show');
    }
  }

  if (catalogWrap && catalogFilter) {
    window.addEventListener('scroll', debounce(hideFilterColumn, 100));
    hideFilterColumn();
    catalogFilter.addEventListener('click', toggleFilterBlock);
    catalogFilter.addEventListener('click', toggleFilter);
  } // Change catalog view.


  var productWraps = document.querySelectorAll('.products-wrap');
  var sortButtons = document.querySelectorAll('.sort-button');
  /** @function changeCatalogView
  * @param {Event} event
  */

  function changeCatalogView(event) {
    var target = event.target;
    if (!target.closest('.sort-button')) return;
    event.preventDefault();

    if (target.closest('.sort-button').dataset.view === 'lines') {
      productWraps.forEach(function (wrap) {
        wrap.classList.add('lines');
      });
      target.closest('.sort-button').classList.add('active');
      document.querySelector('[data-view="grid"]').classList.remove('active');
    } else {
      productWraps.forEach(function (wrap) {
        wrap.classList.remove('lines');
      });
      target.closest('.sort-button').classList.add('active');
      document.querySelector('[data-view="lines"]').classList.remove('active');
    }
  }

  if (productWraps.length !== 0 && sortButtons.length !== 0) {
    sortButtons.forEach(function (button) {
      button.addEventListener('click', changeCatalogView);
    });
  } // Solution page Calculator.

  /** @function initCalculator
  * @param {HTMLElement} elem
  */


  function initCalculator(elem) {
    var wrap = elem;
    var total = wrap.querySelector('.total-price span');
    var removePopup = document.querySelector('#remove-product-popup');
    var removePopupIsInitiated = false;
    var products = new Map();
    var targetCache = null;
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = wrap.querySelectorAll('.product-item')[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var product = _step12.value;
        products.set(product.dataset.id, {
          quantity: product.querySelector('[type="number"]').value,
          price: +product.querySelector('.product-price span').textContent.replace(/\D/g, ''),
          coefficient: product.dataset.coef && !isNaN(product.dataset.coef) ? +product.dataset.coef.replace(/[\s]/g, '') : 1
        });
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
          _iterator12["return"]();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }

    var state = {
      peopleNumber: +wrap.querySelector('[name="number-of-people"]').value.replace(/\D/g),
      goods: products
    };
    /** @function handleHover
    * @param {Event} event
    */

    var handleHover = function handleHover(event) {
      var target = event.target.closest('.product-image img');

      if (target) {
        var imageWrap = document.createElement('DIV');
        imageWrap.className = 'image-popup';

        var _image = new Image(target.naturalWidth, target.naturalHeight);

        _image.src = target.src;
        _image.alt = target.alt;
        imageWrap.appendChild(_image);
        target.closest('.product-image').appendChild(imageWrap);
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = target.closest('.solution-page-form').querySelectorAll('.product-item')[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var item = _step13.value;
            item.classList.remove('active');
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
              _iterator13["return"]();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        target.closest('.product-item').classList.add('active');
      }
    };

    handleHover = errorDecorator(handleHover);
    /** @function handleOut
    * @param {Event} event
    */

    var handleOut = function handleOut(event) {
      var target = event.target.closest('.product-image img');

      if (target) {
        document.querySelectorAll('.image-popup').forEach(function (pop) {
          pop.remove();
        });
      }
    };

    handleOut = errorDecorator(handleOut);
    /** @function handleClick
    * @param {Event} event
    */

    var handleClick = function handleClick(event) {
      var target = event.target;

      if (target.classList.contains('apply-changes')) {
        event.preventDefault();
        renderGoods();
      } else if (target.classList.contains('product-cart-remove')) {
        event.preventDefault();
        showPopup(target);
      } else if (target.closest('.product-quantity')) {
        changeQuantity(target, event.type);
      } else if (target.classList.contains('complete-order')) {
        event.preventDefault();
        submitForm();
      }
    };

    handleClick = errorDecorator(handleClick);
    /** @function render */

    var render = function render() {
      var totalPrice = 0;
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = state.goods[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var _step14$value = _slicedToArray(_step14.value, 2),
              value = _step14$value[1];

          totalPrice += value.price * value.quantity;
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
            _iterator14["return"]();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }

      total.textContent = totalPrice;
    };

    render = errorDecorator(render);
    /** @function renderGoods */

    var renderGoods = function renderGoods() {
      state.peopleNumber = wrap.querySelector('[name="number-of-people"]').value;
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = state.goods[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var _step15$value = _slicedToArray(_step15.value, 2),
              key = _step15$value[0],
              value = _step15$value[1];

          value.quantity = Math.ceil(state.peopleNumber * value.coefficient);
          var prod = document.querySelector("[data-id=\"".concat(key, "\"]"));
          prod.querySelector('[type="number"]').value = value.quantity;
          prod.querySelector('[type="number"]').dispatchEvent(new Event('change-value'));
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
            _iterator15["return"]();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }

      render();
    };

    renderGoods = errorDecorator(renderGoods);
    renderGoods();
    /** @function popupHandler
    * @param {Event} event
    */

    var popupHandler = function popupHandler(event) {
      event.preventDefault();
      var target = event.target;

      if (target.dataset.action) {
        if (target.dataset.action == 'cancel') {
          removePopup.classList.add('js-none');
        } else if (target.dataset.action == 'delete') {
          removePopup.classList.add('js-none');
          removeProduct(targetCache);
          render();
        }
      }
    };

    popupHandler = errorDecorator(popupHandler);
    /** @function showPopup
    * @param {HTMLElement} target
    */

    var showPopup = function showPopup(target) {
      removePopup.classList.remove('js-none');

      if (!removePopupIsInitiated) {
        removePopup.addEventListener('click', popupHandler);
        removePopupIsInitiated = true;
      }

      targetCache = target;
    };

    showPopup = errorDecorator(showPopup);
    /** @function removeProduct
    * @param {HTMLElement} target
    */

    var removeProduct = function removeProduct(target) {
      state.goods["delete"](target.closest('.product-item').dataset.id);
      target.closest('.product-item').remove();
      targetCache = null;
    };

    removeProduct = errorDecorator(removeProduct);
    /** @function changeQuantity
    * @param {HTMLElement} target
    * @param {String} eventType
    */

    var changeQuantity = function changeQuantity(target, eventType) {
      if (!target.closest('.product-item') || eventType !== 'change') return;
      var key = target.closest('.product-item').dataset.id;
      var values = state.goods.get(key);
      values.quantity = target.value;
      render();
    };

    changeQuantity = errorDecorator(changeQuantity);
    /** @function submitForm */

    var submitForm = function submitForm() {
      var jsonArr = [{}];
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = state.goods[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var _step16$value = _slicedToArray(_step16.value, 2),
              key = _step16$value[0],
              value = _step16$value[1];

          jsonArr[0][key] = value.quantity;
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
            _iterator16["return"]();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      console.log(jsonArr);
      var requestData = JSON.stringify(jsonArr);
      console.log(requestData); // Ajax here. Just send requestData.
    };

    submitForm = errorDecorator(submitForm);
    render();
    wrap.addEventListener('click', handleClick);
    wrap.addEventListener('change', handleClick);
    wrap.addEventListener('mouseover', handleHover);
    wrap.addEventListener('mouseout', handleOut);
  }

  var solutionForms = document.querySelectorAll('.solution-page-form');

  if (solutionForms.length !== 0) {
    solutionForms.forEach(function (form) {
      initCalculator(form);
    });
  }

  var specialistPopupButton = document.querySelector('#ask-spec-button');
  var specialistPopup = document.querySelector('#ask-specialist');
  /** @function toggleSpecPopup
  * @param {Event} event
  */

  function toggleSpecPopup(event) {
    event.preventDefault();
    var target = event.target;

    if (target.closest('.popup-wrap') && (target.classList.contains('popup-close') || target.classList.contains('popup-wrap'))) {
      specialistPopup.classList.toggle('js-none');
    } else if (target.tagName.toLowerCase() == 'a') {
      specialistPopup.classList.toggle('js-none');
    }
  }

  if (specialistPopup && specialistPopupButton) {
    specialistPopupButton.addEventListener('click', toggleSpecPopup);
    specialistPopup.addEventListener('click', toggleSpecPopup);
  } // Contacts form validation

  /** @function validateContactsForm
  * @param {Event} event
  */


  function validateContactsForm(event) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    event.preventDefault();
    var allowSubmit = true;
    var email = event.target.querySelector('[name="email"]');

    if (email.value.length < 5 || !email.value.match(emailRegex)) {
      email.classList.add('js-invalid-input');
      allowSubmit = false;
    }

    if (allowSubmit) {
      console.log('ajax'); // ajax here
    }
  }
  /** @function clearErrors
  * @param {Event} event
  */


  function clearErrors(event) {
    event.target.classList.remove('js-invalid-input');
  }

  var contactsForm = document.querySelector('#contacts-form');

  if (contactsForm) {
    contactsForm.addEventListener('submit', validateContactsForm);
    contactsForm.addEventListener('input', clearErrors);
    contactsForm.addEventListener('change', clearErrors);
  } // Spread text on content pages.


  var spreadButtons = document.querySelectorAll('.js-spread-text');

  if (spreadButtons.length !== 0) {
    document.body.addEventListener('click', function (event) {
      var target = event.target;

      if (target.classList.contains('js-spread-text')) {
        event.preventDefault();

        var _parent = target.closest('.page-content');

        if (_parent) {
          var dataText = target.textContent;
          target.textContent = target.dataset.text;
          target.dataset.text = dataText;

          _parent.classList.toggle('show');
        }
      }
    });
    var _iteratorNormalCompletion17 = true;
    var _didIteratorError17 = false;
    var _iteratorError17 = undefined;

    try {
      for (var _iterator17 = spreadButtons[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
        var button = _step17.value;

        var _parent2 = button.closest('.page-content');

        if (_parent2) {
          if (_parent2.offsetHeight < 400) {
            button.classList.add('js-none');
          }
        } else {
          button.classList.add('js-none');
        }
      }
    } catch (err) {
      _didIteratorError17 = true;
      _iteratorError17 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
          _iterator17["return"]();
        }
      } finally {
        if (_didIteratorError17) {
          throw _iteratorError17;
        }
      }
    }
  }

  var callPopup = document.querySelector('#call-popup');
  var phonesWrap = document.querySelector('#phones-wrap');
  /** @function togglePhonePopup
  * @param {Event} event
  */

  function togglePhonesPopup(event) {
    var target = event.target;

    if (target.dataset.action == 'open') {
      var back = document.createElement('DIV');
      back.classList.add('phones-wrap-back');
      phonesWrap.classList.add('active');
      document.body.appendChild(back);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        back.classList.add('ready');
      }, 500);
    } else if (target.dataset.action == 'close') {
      phonesWrap.classList.remove('active');
      document.querySelectorAll('.phones-wrap-back').forEach(function (el) {
        el.remove();
      });
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  if (callPopup && phonesWrap) {
    callPopup.addEventListener('click', togglePhonesPopup);
    phonesWrap.addEventListener('click', togglePhonesPopup);
  }
});

/***/ })

/******/ });