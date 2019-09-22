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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-lamp3.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interior-product-slide1.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interior-product-slide2.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-page-image.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-lamp1.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"./css/normalize.css\">\n    <link rel=\"stylesheet\" href=\"./css/swiper.min.css\">\n  <!-- Compiled and minified JavaScript -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  <link rel=\"stylesheet\" href=\"./css/lamplandia.css\">\n</head>\n<body>\n    <div id=\"apps\"></div>\n    <div class=\"global-wrap\" id=\"app\">\n        <header>\n            <div class=\"header-top site-size\">\n                <a href=\"#\" class=\"logo-wrap\"><img src=\"" + __webpack_require__(20) + "\" alt=\"logo\" width=\"196\" height=\"39\"></a>\n                <div class=\"logo-text\">Группа компаний <br>LampLandia</div>\n                <a href=\"tel:+78123088811\" class=\"header-phone\">+7&nbsp;(812)&nbsp;308-88-11</a>\n                <a href=\"mailto:info@lamplandia.ru\" class=\"header-email\">info@lamplandia.ru</a>\n                <div class=\"header-user-link\">\n                    <a href=\"#\" class=\"site-icon user-icon\"></a>\n                    <a href=\"#\" class=\"site-icon heart-icon\"></a>\n                    <a href=\"#\" class=\"site-icon cart-icon active\"></a>\n                </div>\n            </div>\n            <div class=\"header-bottom\">\n                <nav class=\"site-size header-menu\" id=\"header-menu\">\n                    <a href=\"#\" class=\"catalog-menu-hover\">Каталог</a>\n                    <button class=\"burger-menu\" id=\"burger-button\"><span></span>Меню</button>\n                    <a href=\"#\">О компании</a>\n                    <a href=\"#\">Контакты</a>\n                    <a href=\"#\">Где купить</a>\n                    <a href=\"#\">Доставка</a>\n                    <a href=\"#\">Интерьеры</a>\n                    <a href=\"#\">Новинки</a>\n                    <form class=\"header-search\">\n                        <input class=\"site-input search\" name=\"search-query\" type=\"text\" placeholder=\"Поиск\">\n                        <button class=\"site-button\" id=\"toggle-search-button\">\n                            <svg width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M18.6014 16.8889L13.641 11.9112C14.5268 10.6667 15.0583 9.15556 15.0583 7.55556C15.0583 3.37774 11.6923 0 7.52916 0C3.36601 0 0 3.37779 0 7.55556C0 11.7333 3.36597 15.1111 7.52911 15.1111C9.12352 15.1111 10.6294 14.5778 11.8695 13.6889L16.8298 18.6667C17.2727 19.1111 18.0699 19.1111 18.6014 18.6667C19.1329 18.1334 19.1329 17.4222 18.6014 16.8889ZM7.52911 13.3334C4.3403 13.3334 1.77156 10.7556 1.77156 7.5556C1.77156 4.35559 4.3403 1.77783 7.52911 1.77783C10.7179 1.77783 13.2867 4.35559 13.2867 7.5556C13.2867 10.7556 10.7179 13.3334 7.52911 13.3334Z\" fill=\"#ffffff\"/>\n                            </svg>\n                        </button>\n                    </form>\n                </nav>\n                <nav class=\"catalog-menu\" id=\"catalog-menu\">\n                    <div class=\"site-size\">\n                        <div class=\"catalog-menu-item\">\n                            <h2 class=\"upper-title\">Товары по назначению</h2>\n                            <a href=\"#\">Люстры</a>\n                            <a href=\"#\">Бра</a>\n                            <a href=\"#\">Настенно-потолочный светильник</a>\n                            <a href=\"#\">Подвесы</a>\n                            <a href=\"#\">Споты</a>\n                            <a href=\"#\">Настольные лампы</a>\n                            <a href=\"#\">Потолочные светильники</a>\n                            <a href=\"#\">Абажур</a>\n                            <a href=\"#\">Торшер</a>\n                            <a href=\"#\" class=\"arrow-link\">Показать все</a>\n                        </div>\n                        <div class=\"catalog-menu-item\">\n                            <h2 class=\"upper-title\">Товары по стилю</h2>\n                            <a href=\"#\">Современный</a>\n                            <a href=\"#\">LED</a>\n                            <a href=\"#\">Американский</a>\n                            <a href=\"#\">Лофт</a>\n                            <a href=\"#\">Классический</a>\n                            <a href=\"#\">Скандинавия</a>\n                        </div>\n                        <div class=\"catalog-menu-item\">\n                            <h2 class=\"upper-title\">Товары по коллекциям</h2>\n                            <div class=\"big-category\">\n                                <a href=\"#\">Bradal</a>\n                                <a href=\"#\">Eyran</a>\n                                <a href=\"#\">Hongyi</a>\n                                <a href=\"#\">Kenny</a>\n                                <a href=\"#\">IDEA</a>\n                                <a href=\"#\">Finase</a>\n                                <a href=\"#\">Ido</a>\n                                <a href=\"#\">Kingbery</a>\n                                <a href=\"#\">Yanlighting</a>\n                                <a href=\"#\">First</a>\n                                <a href=\"#\">Indoorlux</a>\n                                <a href=\"#\">Lissin</a>\n                                <a href=\"#\">EJ</a>\n                                <a href=\"#\">Himiter</a>\n                                <a href=\"#\">Kadywell</a>\n                                <a href=\"#\">Luoka</a>\n                            </div>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </header>\n        <main class=\"main-wrap\">\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "\t\t</main>\n        <footer class=\"footer-wrap\">\n            <div class=\"footer-top site-size\">\n                <div class=\"footer-menu\">\n                    <span class=\"footer-menu-title\">Карта сайта</span>\n                    <a href=\"#\">Главная</a>\n                    <a href=\"#\">О компании</a>\n                    <a href=\"#\">Где купить</a>\n                    <a href=\"#\">Доставка</a>\n                    <a href=\"#\">Интерьеры</a>\n                    <a href=\"#\">Новинки</a>\n                </div>\n                <div class=\"footer-menu\">\n                    <span class=\"footer-menu-title\">Популярные покупки</span>\n                    <a href=\"#\">Настенно-потолочный светильник 12067/2 Soul</a>\n                    <a href=\"#\">Настольная лампа L1117P Finn, E14* макс. 40Вт</a>\n                    <a href=\"#\">Бра 8952-2 PRINCESSA ANNA</a>\n                    <a href=\"#\">Люкстра L1052-5 Concept, E14*макс 60Вт</a>\n                    <a href=\"#\">Настенно-потолочный светильник 12067/2 Soul</a>\n                    <a class=\"arrow-link\" href=\"#\">Показать все</a>\n                </div>\n                <div class=\"footer-menu\">\n                    <span class=\"footer-menu-title\">Партнеры</span>\n                    <a href=\"#\">ООО \"Южный Скобяной Двор\"</a>\n                    <a href=\"#\">Мебельный Клуб</a>\n                    <a href=\"#\">Маркет света</a>\n                    <a href=\"#\">220 Вольт</a>\n                    <a href=\"#\">Максидом</a>\n                    <a href=\"#\">Домовой</a>\n                    <a href=\"#\">ЛЕРУА МЕРЛЕН</a>\n                </div>\n                <div class=\"footer-menu\">\n                    <span class=\"footer-menu-title\">Контакты</span>\n                    <span class=\"just-name\">Головной офис</span>\n                    <a class=\"violet-link\" href=\"tel:+78123088811\">+7&nbsp;(812)&nbsp;308-88-11</a>\n                    <a class=\"violet-link\" href=\"mailto:info@lamplandia.ru\">info@lamplandia.ru</a>\n                    <span class=\"violet-link\">197022, Санкт-Петербург,<br> Каменоостровский пр-т,<br> д.62, лит. А пом. 7Н</span>\n                    <a href=\"#\">Схема прохода в офис</a>\n                    <a href=\"#\">Новинки</a>\n                    <div class=\"social-links\">\n                        <a class=\"social-icon twitter-icon\" href=\"#\"></a>\n                        <a class=\"social-icon facebook-icon\" href=\"#\"></a>\n                        <a class=\"social-icon instagram-icon\" href=\"#\"></a>\n                        <a class=\"social-icon whatsup-icon\" href=\"#\"></a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"footer-bottom\">\n                <div class=\"footer-copyright site-size\">\n                    <span>&copy; 2011 Группа компаний LampLandia</span>\n                    <span>Разработано в Аccept.agency</span>\n                </div>\n            </div>\n        </footer>\n    </div>\n    <script src=\"./js/swiper.min.js\"></script>\n  <script src=\"./js/lamplandia.js\"></script>\n</body>\n</html>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitchen.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-lamp2.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-lamp4.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-image3.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-page-image1.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-page-image2.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-page-image3.jpg";

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _assets_js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_script_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _assets_header_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_header_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_footer_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _assets_footer_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_footer_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  // Quantity counter webcomponent.

  /** @function initCounter
   * @param {HTMLInputElement} input
   */
  function initCounter(input) {
    var min = 1;
    var max = 999;
    var value = input.value == '' ? min : input.value;
    var wrap = document.createElement('DIV');
    wrap.innerHTML = "\n      \u041A\u043E\u043B-\u0432\u043E: <button>-</button>\n      <input type=\"text\" class=\"counter-value\" value=".concat(value, ">\n      <button>+</button>\n    ");
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
        event.preventDefault();
        event.stopPropagation();

        if (event.target.textContent == '+' && value !== max) {
          value = ++value;
        } else if (event.target.textContent == '-' && value !== min) {
          value = --value;
        }

        render();
      }
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
      input.dispatchEvent(new Event('change'));
    }

    wrap.addEventListener('click', changeCounter);
    inputValue.addEventListener('input', validate);
    inputValue.addEventListener('change', validate);
    input.classList.add('js-init');
  }
  /** @function beautifyCounters */


  function beautifyCounters() {
    var counters = document.querySelectorAll('input.quantity-counter:not(.js-init)');

    if (counters.length !== 0) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = counters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var counter = _step.value;
          initCounter(counter);
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
    }
  }

  beautifyCounters();
  document.body.addEventListener('reinit-counters', beautifyCounters);
  var elems = document.querySelectorAll('.sort-item select');
  M.FormSelect.init(elems, {}); // Catalog selectors redirects.

  if (elems.length !== 0) {
    /** @function redirectFromSelect
     * @param {Event} event
     */
    var redirectFromSelect = function redirectFromSelect(event) {
      var childs = event.target.children;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = childs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var option = _step2.value;

          if (option.selected) {
            if (option.dataset.hasOwnProperty('url')) {
              var href = window.location.href;
              window.location.href = href.slice(0, href.indexOf('/')) + option.dataset.url;
            }

            break;
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
    };

    elems.forEach(function (el) {
      el.addEventListener('change', redirectFromSelect);
    });
  } // Debouncer for scroll events.

  /** @function redirectFromSelect
   * @param {Function} func
   * @param {Number} ms
   * @return {Function}
   */


  function debounce(func, ms) {
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
        timer = null;
      }, ms);
    };
  }

  ; // Handler for showing or hiding products on interior item page.

  var spots = document.getElementsByClassName('toggle-spot');
  /** @function toggleSpot
   * @param {Event} event
   */

  function toggleSpot(event) {
    if (event.target.classList.contains('toggle-spot')) {
      event.preventDefault();
      event.stopPropagation();

      for (var i = 0; i < spots.length; i++) {
        if (event.target !== spots[i]) {
          spots[i].classList.remove('active');
        }
      }

      event.target.classList.toggle('active');
    }
  }

  ;
  var interiorGallery = document.getElementById('interior-top-gallery');

  if (interiorGallery) {
    interiorGallery.addEventListener('click', toggleSpot);
  } // Product Page. Show product info, when page is scrolled down.


  var topBlockLimit = document.getElementById('top-block-limit');
  var topScrollWrap = document.getElementById('top-scroll-wrap');
  /** @function toggleTopProductBlock
   * @param {Event} event
   */

  function toggleTopProductBlock() {
    if (!topBlockLimit) return;

    if (window.pageYOffset > topBlockLimit.getBoundingClientRect().bottom + window.pageYOffset) {
      topScrollWrap.classList.add('active');
    } else {
      topScrollWrap.classList.remove('active');
    }
  }

  if (topBlockLimit) {
    toggleTopProductBlock();
    var func = debounce(toggleTopProductBlock, 100);
    window.addEventListener('scroll', func);
  } // Hide filter, when it's not in the viewport.


  var catalogFilter = document.getElementsByClassName('catalog-filter');
  var catalogWrap = document.getElementById('catalog-wrap');
  /** @function hideOrShowFilter */

  function hideOrShowFilter() {
    if (!catalogFilter || window.innerWidth <= 640) return;

    if (window.pageYOffset > catalogFilter.getBoundingClientRect().bottom + window.pageYOffset) {
      catalogWrap.classList.add('hidden');
    } else {
      catalogWrap.classList.remove('hidden');
    }
  }

  if (catalogFilter.length !== 0) {
    catalogFilter = catalogFilter[0];
    hideOrShowFilter();

    var _func = debounce(hideOrShowFilter, 100);

    window.addEventListener('scroll', _func);
  } // Product image popup. (to fix)


  var productImage = document.getElementById('product-image-slider');
  var productPopup = document.getElementById('product-popup');
  var productImageWrap = productPopup ? productPopup.querySelector('.image-wrap') : null;
  /** @function showProductPopup
   * @param {Event} event
   */

  function showProductPopup(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      productImageWrap.innerHTML = '';
      var bigImage = event.target.getAttribute('data-image');
      var img = new Image();
      img.alt = 'popup image';
      img.addEventListener('load', function () {
        fixPopupImageWidth(img);
        console.log(img);
      });
      console.log(bigImage);

      if (bigImage) {
        img.src = bigImage;
      } else {
        img.src = event.target.src;
      }
    }
  }
  /** @function fixPopupImageWidth
   * @param {HTMLImageElement} img
   */


  function fixPopupImageWidth(img) {
    var width = img.naturalWidth;
    var height = img.naturalHeight;
    var maxWidth = window.innerWidth * 0.9 - 80;
    var maxHeight = window.innerHeight * 0.9 - 80;
    var coef = width / height;

    if (width > maxWidth) {
      width = maxWidth;
      height = width / coef;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * coef;
    }

    img.width = width;
    img.height = height;
    productImageWrap.appendChild(img);
    productPopup.classList.add('active');
  }
  /** @function closePopup
   * @param {Event} event
   */


  function closePopup(event) {
    var target = event.target;

    if (target == productPopup || target.classList.contains('popup-close')) {
      event.preventDefault();
      event.stopPropagation();
      productPopup.classList.remove('active');
    }
  }

  if (productImage) {
    productImage.addEventListener('click', showProductPopup);
    productPopup.addEventListener('click', closePopup);
  } // Toggles for Filter and his props.


  var filters = document.getElementsByClassName('filter-form');
  var filterToggle = document.getElementsByClassName('filter-toggle');
  /** @function toggleFilterProp
   * @param {Event} event
   */

  function toggleFilterProp(event) {
    var classes = event.target.classList;

    if (classes.contains('spread-all')) {
      event.preventDefault();
      classes.toggle('active');
      event.target.previousElementSibling.classList.toggle('show');
    }
  }
  /** @function toggleFilter
   * @param {Event} event
   */


  function toggleFilter(event) {
    event.preventDefault();
    var target = event.target;

    if (target.classList.contains('upper-title')) {
      target.parentNode.classList.toggle('active');
    }
  }
  /** @function hideFilterBlock
   * @param {HTMLElement} filterBlock
   */


  function hideFilterBlock(filterBlock) {
    var children = filterBlock.querySelectorAll('.site-checkbox-label');

    if (children.length > 4) {
      var button = document.createElement('BUTTON');
      button.className = 'spread-all';
      button.textContent = 'Развернуть';

      if (filterBlock.nextElementSibling) {
        filterBlock.parentElement.insertBefore(button, filterBlock.nextElementSibling);
      } else {
        filterBlock.parentElement.appendChild(button);
      }

      filterBlock.style.maxHeight = children[3].offsetTop + children[3].offsetHeight + 'px';
    }
  }

  if (filters.length !== 0) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = filters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var filter = _step3.value;
        filter.addEventListener('click', toggleFilterProp);
        filter.querySelectorAll('.filter-block').forEach(function (block) {
          hideFilterBlock(block);
        });
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

  if (filterToggle.length !== 0) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = filterToggle[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var toggle = _step4.value;
        toggle.addEventListener('click', toggleFilter);
      }
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
  } // Catalog view change


  var productWrap = document.getElementById('product-wrap');
  var catalogChangeButtons = document.querySelectorAll('.grid-icon, .lines-icon');
  /** @function changeCatalog
   * @param {Event} event
   */

  function changeCatalog(event) {
    event.preventDefault();
    var type = event.target.dataset.type;

    if (type == 'grid') {
      productWrap.classList.remove('lines');
    } else if (type == 'lines') {
      productWrap.classList.add('lines');
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = catalogChangeButtons[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var button = _step5.value;
        button.classList.remove('active');
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

    event.target.classList.add('active');
  }

  if (catalogChangeButtons.length !== 0 && productWrap) {
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = catalogChangeButtons[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var button = _step6.value;
        button.addEventListener('click', changeCatalog);
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
  } // Header interactions.


  var headMenu = document.getElementById('header-menu');
  var catalogMenuButton = document.querySelector('.catalog-menu-hover');
  var catalogMenu = document.getElementById('catalog-menu');
  var burgerButton = document.getElementById('burger-button');
  var searchButton = document.querySelector('#toggle-search-button'); // Clicks on menu button.

  /** @function toggleMenu */

  function toggleMenu() {
    headMenu.classList.toggle('active');
  } // Hovers on menu button.

  /** @function showHeadCatalog
   * @param {Event} event
   */


  function showHeadCatalog(event) {
    catalogMenu.classList.add('active');
  }
  /** @function hideHeadCatalog
   * @param {Event} event
   */


  function hideHeadCatalog(event) {
    if (event.relatedTarget) {
      var classes = event.relatedTarget.classList;

      if (!classes.contains('catalog-menu') && !classes.contains('catalog-menu-hover')) {
        catalogMenu.classList.remove('active');
      }
    } else {
      catalogMenu.classList.remove('active');
    }
  }
  /** @function toggleSearch
   * @param {Event} event
   */


  function toggleSearch(event) {
    event.preventDefault();
    event.target.closest('.header-search').classList.toggle('active');
  }

  if (headMenu && catalogMenu && catalogMenuButton) {
    catalogMenuButton.addEventListener('mouseenter', showHeadCatalog);
    catalogMenuButton.addEventListener('mouseleave', hideHeadCatalog);
    catalogMenu.addEventListener('mouseenter', showHeadCatalog);
    catalogMenu.addEventListener('mouseleave', hideHeadCatalog);
  }

  if (burgerButton && headMenu) {
    burgerButton.addEventListener('click', toggleMenu);
  }

  if (searchButton) {
    searchButton.addEventListener('click', toggleSearch);
    var searchWrap = document.querySelector('.header-search');
    searchWrap.addEventListener('keypress', function (event) {
      if (event.code == 'Enter') {
        console.log(event);
        searchWrap.submit();
      }
    });
  } // Product page characteristics.


  var stats = document.getElementById('product-stats');
  /** @function toggleMoreStats
   * @param {Event} event
   */

  function toggleMoreStats() {
    var target = event.target;

    if (target.classList.contains('more')) {
      event.preventDefault();
      stats.querySelector('.product-info-list').classList.toggle('active');
      var text = target.textContent;
      target.textContent = target.dataset.text;
      target.dataset.text = text;
    }
  }

  if (stats) {
    var list = stats.querySelector('.product-info-list');
    var height = 0;
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = list.children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var child = _step7.value;
        height += child.offsetHeight + 7;
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

    if (height < 210) {
      stats.querySelector('.more').classList.add('js-none');
    } else {
      stats.addEventListener('click', toggleMoreStats);
    }
  } // Initialize sliders.


  new Swiper('.classic-adv-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.next-adv',
      prevEl: '.prev-adv'
    }
  });
  new Swiper('.main-new-products-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-new',
      prevEl: '.prev-new'
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1
      },
      550: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      }
    }
  });
  new Swiper('.products-special-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-special',
      prevEl: '.prev-special'
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1
      },
      550: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      }
    }
  });
  new Swiper('.main-news-slider', {
    spaceBetween: 42,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-news',
      prevEl: '.prev-news'
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1
      },
      550: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      }
    }
  });
  var swiperProduct = new Swiper('.product-image-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 5,
    navigation: {
      nextEl: '.next-image',
      prevEl: '.prev-image'
    },
    pagination: {
      el: '.product-slider-bullets',
      type: 'bullets',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'production-bullet'
    }
  });
  var sliderImages = document.querySelectorAll('.product-image-slider img');

  if (sliderImages.length !== 0) {
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = sliderImages[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var image = _step8.value;
        image.width = image.naturalWidth;
        image.height = image.naturalHeight;
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

  var swiperProductThumbs = new Swiper('.product-thumbs-slider', {
    spaceBetween: 10,
    slidesPerView: 3,
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 5,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.next-image-thumb',
      prevEl: '.prev-image-thumb'
    }
  }); // Wiring product sliders together on product page.

  if (swiperProduct.$el && swiperProductThumbs.$el) {
    swiperProduct.controller.control = swiperProductThumbs;
    swiperProductThumbs.controller.control = swiperProduct;
  }

  var swiperProductInteriorWrap = document.querySelector('.product-interior-slider .swiper-wrapper');

  if (swiperProductInteriorWrap) {
    new Swiper('.product-interior-slider', {
      spaceBetween: 10,
      slidesPerView: swiperProductInteriorWrap.children.length < 5 ? swiperProductInteriorWrap.children.length : 5,
      navigation: {
        nextEl: '.next-interior',
        prevEl: '.prev-interior'
      },
      breakpoints: {
        460: {
          slidesPerView: 1
        },
        660: {
          slidesPerView: swiperProductInteriorWrap.children.length < 2 ? swiperProductInteriorWrap.children.length : 2
        },
        960: {
          slidesPerView: swiperProductInteriorWrap.children.length < 3 ? swiperProductInteriorWrap.children.length : 3
        },
        1120: {
          slidesPerView: swiperProductInteriorWrap.children.length < 4 ? swiperProductInteriorWrap.children.length : 4
        }
      }
    });
  } // Add to cart popup.


  var cartPopup = document.querySelector('#cart-popup');
  /** @function closeCartPopups
   * @param {Event} event
   */

  function closeCartPopup(event) {
    if (!event) {
      cartPopup.classList.remove('active');
    }

    var target = event.target;

    if (target.classList.contains('popup-wrap')) {
      cartPopup.classList.remove('active');
    }
  }

  if (cartPopup) {
    cartPopup.addEventListener('click', closeCartPopup);
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(5) + "\n    <div class=\"main-page\">\n        <div class=\"main-page-lamps site-size\">\n            <a href=\"#\" class=\"category big-category\">\n                <img src=\"" + __webpack_require__(22) + "\" alt=\"floor-lamp\" width=\"1140\" height=\"276\">\n                <span>Люстры</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(23) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Бра</span>\n            </a>\n            <a href=\"#\" class=\"category medium-category\">\n                <img src=\"" + __webpack_require__(24) + "\" alt=\"floor-lamp\" width=\"500\" height=\"200\">\n                <span>Настенно-потолочный-светильник</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(25) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Подвесы</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(26) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Споты</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(27) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Настольная лампа</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(28) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Абажур</span>\n            </a>\n            <a href=\"#\" class=\"category medium-category\">\n                <img src=\"" + __webpack_require__(29) + "\" alt=\"floor-lamp\" width=\"500\" height=\"200\">\n                <span>Потолочный светильник</span>\n            </a>\n            <a href=\"#\" class=\"category\">\n                <img src=\"" + __webpack_require__(30) + "\" alt=\"floor-lamp\" width=\"200\" height=\"200\">\n                <span>Торшер</span>\n            </a>\n        </div>\n        <article class=\"classic-block\">\n            <div class=\"classic-wrapper site-size\">\n                <div class=\"classic-adv-slider swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        <div class=\"classic-wrap swiper-slide\">\n                            <h2 class=\"block-title\">Классика в современном исполнении</h2>\n                            <div class=\"classic-text-wrap\">\n                                <div class=\"classic-text\">Стилизация интерьера в доме непременно предусматривает тщательный подбор мельчайших предметов. Более 3 000 светильников из коллекций всемирно знаменитых брендов Gabbiani, IDL, EuroLampArt и других представленные в каталоге.</div>\n                                <a href=\"#\" class=\"site-button\">Подробнее</a>\n                            </div>\n                            <div class=\"classic-image-wrap\">\n                                <img src=\"" + __webpack_require__(7) + "\" alt=\"kitchen\" width=\"581\" height=\"313\">\n                            </div>\n                        </div>\n                        <div class=\"classic-wrap swiper-slide\">\n                            <h2 class=\"block-title\">Классика в современном исполнении</h2>\n                            <div class=\"classic-text-wrap\">\n                                <div class=\"classic-text\">Стилизация интерьера в доме непременно предусматривает тщательный подбор мельчайших предметов. Более 3 000 светильников из коллекций всемирно знаменитых брендов Gabbiani, IDL, EuroLampArt и других представленные в каталоге.</div>\n                                <a href=\"#\" class=\"site-button\">Подробнее</a>\n                            </div>\n                            <div class=\"classic-image-wrap\">\n                                <img src=\"" + __webpack_require__(7) + "\" alt=\"kitchen\" width=\"581\" height=\"313\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"classic-nav\">\n                        <button class=\"arrow-button prev-adv left\" slot=\"button-prev\"></button>\n                        <button class=\"arrow-button next-adv\" slot=\"button-next\"></button>\n                    </div>\n                </div>\n            </div>\n        </article>\n        <div class=\"main-products site-size\">\n            <h2 class=\"page-title\">Новинки</h2>\n            <a href=\"#\" class=\"arrow-link\">Показать все</a>\n            <div class=\"slider-wrapping\">\n                <div class=\"main-new-products-slider swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(4) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"new-product-label\">Новинка</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon pressed\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(8) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"new-product-label\">Новинка</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(0) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"new-product-label\">Новинка</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(0) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"new-product-label\">Новинка</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"arrow-button next-new\" slot=\"button-next\"></button>\n                <button class=\"arrow-button prev-new left\" slot=\"button-prev\"></button>\n            </div>\n        </div>\n        <div class=\"main-products site-size bottom-products\">\n            <h2 class=\"page-title\">Спецпредложения</h2>\n            <a href=\"#\" class=\"arrow-link\">Показать все</a>\n            <div class=\"slider-wrapping\">\n                <div class=\"products-special-slider swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(4) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"cheap-product-label\">Выгода</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                        <span class=\"discount\">7 700 руб.</span>\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(0) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"cheap-product-label\">Выгода</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                        <span class=\"discount\">7 700 руб.</span>\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(9) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"cheap-product-label\">Выгода</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                        <span class=\"discount\">7 700 руб.</span>\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"product-item\">\n                                <div class=\"like-button\">\n                                    <span class=\"site-icon heart-icon\"></span>\n                                </div>\n                                <div class=\"product-image\">\n                                    <img src=\"" + __webpack_require__(9) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                                </div>\n                                <div class=\"product-item-info\">\n                                    <div class=\"product-labels\">\n                                        <span class=\"cheap-product-label\">Выгода</span>\n                                    </div>\n                                    <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                                </div>\n                                <div class=\"product-bottom\">\n                                    <div class=\"product-prices\">\n                                        <span class=\"discount\">7 700 руб.</span>\n                                      <span class=\"price\">3 658 руб.</span>\n                                    </div>\n                                    <span class=\"small-button\">Корзина</span>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"arrow-button next-special\" slot=\"button-next\"></button>\n                <button class=\"arrow-button prev-special left\" slot=\"button-prev\"></button>\n            </div>\n        </div>\n        <section class=\"classic-block\">\n            <div class=\"classic-wrap site-size fixed\">\n                <h1 class=\"block-title\">Группа компаний LampLandia</h1>\n                <div class=\"classic-text-wrap\">\n                    <div class=\"classic-text\">Наша компания была основана в 2000 году и на сегодняшний день она является  одной из крупнейших компанией  в России, специализирующихся на поставке светильников. Мы предлагаем оптовые поставки: Люстр, Светильников, Бра, Торшеров. Компания реализует как эксклюзивную продукцию мировых производителей, так и фабрик давно и хорошо зарекомендовавших себя на рынке.</div>\n                </div>\n                <div class=\"classic-image-wrap group-image-wrap\">\n                    <img src=\"" + __webpack_require__(31) + "\" alt=\"lamp group\" width=\"497\" height=\"373\">\n                </div>\n            </div>\n        </section>\n        <div class=\"main-news-block site-size\">\n            <h2 class=\"page-title\">Новости</h2>\n            <a href=\"#\" class=\"arrow-link\">Показать все</a>\n            <div class=\"slider-wrapping\">\n                <div class=\"main-news-slider swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"news-item\">\n                                <span class=\"news-title\">Как найти подходящее освещение для дизайна в стиле лофт</span>\n                                <div class=\"news-image\">\n                                    <img src=\"" + __webpack_require__(32) + "\" alt=\"news image\" width=\"309\" height=\"211\">\n                                </div>\n                                <div class=\"news-info\">\n                                    <span class=\"news-date\">29.08.2019</span>\n                                    <span class=\"news-name\">Автор: Ирина Иванова</span>\n                                </div>\n                                <div class=\"news-text\">\n                                    Нашумевший стиль интерьера под названием «лофт» привнёс в индустрию дух раскрепощённой и креативности...\n                                </div>\n                                <span class=\"small-arrow-link\">Читать</span>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"news-item\">\n                                <span class=\"news-title\">Российский дизайнер Дима Логинов показал новые лампы на Salone del Mobile</span>\n                                <div class=\"news-image\">\n                                    <img src=\"" + __webpack_require__(33) + "\" alt=\"news image\" width=\"309\" height=\"211\">\n                                </div>\n                                <div class=\"news-info\">\n                                    <span class=\"news-date\">29.08.2019</span>\n                                    <span class=\"news-name\">Автор: Ирина Иванова</span>\n                                </div>\n                                <div class=\"news-text\">\n                                    Промышленный дизайнер из России Дима Логинов представил в Милане на Salone del Mobile коллекции светильников Urban и...\n                                </div>\n                                <span class=\"small-arrow-link\">Читать</span>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"news-item\">\n                                <span class=\"news-title\">Точечные светильники: разновидности и роль в дизайне</span>\n                                <div class=\"news-image\">\n                                    <img src=\"" + __webpack_require__(10) + "\" alt=\"news image\" width=\"309\" height=\"211\">\n                                </div>\n                                <div class=\"news-info\">\n                                    <span class=\"news-date\">29.08.2019</span>\n                                    <span class=\"news-name\">Автор: Ирина Иванова</span>\n                                </div>\n                                <div class=\"news-text\">\n                                    Большинство владельцев домов и квартир поменяли стандартные люстры на более современные точечные светильники. Эти...\n                                </div>\n                                <span class=\"small-arrow-link\">Читать</span>\n                            </a>\n                        </div>\n                        <div class=\"swiper-slide\">\n                            <a href=\"#\" class=\"news-item\">\n                                <span class=\"news-title\">Точечные светильники: разновидности и роль в дизайне</span>\n                                <div class=\"news-image\">\n                                    <img src=\"" + __webpack_require__(10) + "\" alt=\"news image\" width=\"309\" height=\"211\">\n                                </div>\n                                <div class=\"news-info\">\n                                    <span class=\"news-date\">29.08.2019</span>\n                                    <span class=\"news-name\">Автор: Ирина Иванова</span>\n                                </div>\n                                <div class=\"news-text\">\n                                    Большинство владельцев домов и квартир поменяли стандартные люстры на более современные точечные светильники. Эти...\n                                </div>\n                                <span class=\"small-arrow-link\">Читать</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"arrow-button next-news\" slot=\"button-next\"></button>\n                <button class=\"arrow-button prev-news left\" slot=\"button-prev\"></button>\n            </div>\n        </div>\n    </div>\n\n\n<div class=\"interior-item-page page-block site-size\">\n    <div class=\"top-scroll-wrap\" id=\"top-scroll-wrap\">\n        <div class=\"top-scroll-block site-size\">\n            <div class=\"top-scroll-left\">\n                <img class=\"small-logo\" src=\"" + __webpack_require__(34) + "\" alt=\"small logo\" width=\"43\" height=\"43\">\n                <div class=\"product-thumb\">\n                    <img src=\"" + __webpack_require__(3) + "\" alt=\"product thumb\" width=\"443\" height=\"443\">\n                </div>\n                <span class=\"block-subtitle\">Люстра EMMA</span>\n            </div>\n            <div class=\"product-bottom\">\n                <div class=\"product-prices\">\n                    <span class=\"discount\">42 000 руб.</span>\n                    <span class=\"price\"><span>33 503</span> руб.</span>\n                </div>\n                <button class=\"small-button\">В корзину</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"top-navigation\">\n        <a href=\"#\" class=\"back-arrow-link\">Назад</a>\n        <a href=\"#\" class=\"arrow-link\">Вперед</a>\n    </div>\n    <div class=\"product-page-image\">\n        <div class=\"like-button\">\n            <span class=\"site-icon heart-icon\"></span>\n        </div>\n        <div class=\"product-image-slider swiper-container\" id=\"product-image-slider\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <img src=\"" + __webpack_require__(3) + "\" alt=\"product image\" width=\"443\" height=\"443\">\n                </div>\n            <div class=\"swiper-slide\">\n                    <img src=\"" + __webpack_require__(11) + "\" alt=\"product image\" width=\"443\" height=\"295\">\n                </div>\n                <div class=\"swiper-slide\">\n                    <img src=\"" + __webpack_require__(12) + "\" alt=\"product image\" width=\"295\" height=\"443\">\n                </div>\n                <div class=\"swiper-slide\">\n                    <img src=\"" + __webpack_require__(13) + "\" alt=\"product image\" width=\"295\" height=\"443\">\n                </div>\n                <div class=\"swiper-slide\">\n                    <img src=\"" + __webpack_require__(35) + "\" alt=\"product image\" width=\"443\" height=\"295\">\n                </div>\n            </div>\n            <button class=\"arrow-button next-image\" slot=\"button-next\"></button>\n        <button class=\"arrow-button prev-image left\" slot=\"button-prev\"></button>\n            <div class=\"product-slider-bullets\" slot=\"pagination\"></div>\n        </div>\n\n        <div class=\"product-thumbs-wrap\">\n            <div class=\"product-thumbs-slider swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <img src=\"" + __webpack_require__(3) + "\" alt=\"product image\" width=\"443\" height=\"443\">\n                    </div>\n                <div class=\"swiper-slide\">\n                        <img src=\"" + __webpack_require__(11) + "\" alt=\"product image\" width=\"443\" height=\"295\">\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <img src=\"" + __webpack_require__(12) + "\" alt=\"product image\" width=\"295\" height=\"443\">\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <img src=\"" + __webpack_require__(13) + "\" alt=\"product image\" width=\"295\" height=\"443\">\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <img src=\"" + __webpack_require__(3) + "\" alt=\"product image\" width=\"443\" height=\"443\">\n                    </div>\n                </div>\n            </div>\n            <button class=\"arrow-button next-image-thumb\" slot=\"button-next\"></button>\n            <button class=\"arrow-button prev-image-thumb left\" slot=\"button-prev\"></button>\n        </div>\n    </div>\n    <div class=\"product-page-info\">\n        <h1 class=\"page-subtitle\">Люстра EMMA</h1>\n        <div class=\"product-labels\">\n            <span class=\"new-product-label\">Новинка</span>\n            <span class=\"cheap-product-label\">Выгода</span>\n        </div>\n        <div class=\"product-bottom\" id=\"top-block-limit\">\n            <div class=\"product-prices\">\n                <span class=\"price\"><span>3 503</span> руб.</span>\n                <span class=\"discount\">4 200 руб.</span>\n            </div>\n            <button class=\"small-button\">В корзину</button>\n            <div class=\"conditions-links\">\n                <a href=\"#\">Условия оплаты</a>\n                <a href=\"#\">Условия доставки</a>\n            </div>\n        </div>\n        <div class=\"product-description\">\n            <span class=\"upper-title\">Описание</span>\n            <div class=\"site-text\">\n                Классическая хрустальная люстра. Основание выполнено из хромированного металла. Подойдет для спальни или гостиной.\n            </div>\n            <ul class=\"product-info-list\">\n                <li>Наличие: <span>Есть</span></li>\n                <li>Поступление: <span>май 2020</span></li>\n                <li>Артикул: <span>7379-6</span></li>\n                <li>Серия: <a href=\"#\">Deamur</a></li>\n                <li>Коллекция: <a href=\"#\">EMMA</a></li>\n                <li>Стиль: <a href=\"#\">EMMA</a></li>\n            </ul>\n        </div>\n        <div class=\"product-stats\" id=\"product-stats\">\n            <span class=\"upper-title\">Характеристики</span>\n            <ul class=\"product-info-list\">\n                <li>Мощность: <a href=\"#\">40 Вт</a></li>\n                <li>Гарантийный срок: <span>12 месяцев</span></li>\n                <li>Патрон: <span>Е14</span></li>\n                <li>Материал плафона: <a href=\"#\">Стекло</a>, <a href=\"#\">Хрусталь</a></li>\n                <li>Материал арматуры: <a href=\"#\">Металл</a></li>\n                <li>Вид светильника: <a href=\"#\">Потолочный</a></li>\n                <li>Кол-во лампочек: <span>3</span></li>\n            </ul>\n            <a href=\"#\" class=\"small-link more\" data-text=\"Скрыть\">Показать еще</a>\n        </div>\n        <div class=\"product-shops\">\n            <span class=\"upper-title\">Где купить</span>\n            <a href=\"#\">220 Вольт</a>\n            <a href=\"#\">Максидом</a>\n            <a href=\"#\">Леруа Мерлин</a>\n            <a href=\"#\">Маркет Света</a>\n        </div>\n    </div>\n    <div class=\"product-block product-in-interior\">\n        <h2 class=\"page-title\">В интерьере</h2>\n        <a href=\"#\" class=\"arrow-link\">Показать все</a>\n        <div class=\"product-interior-slider swiper-container\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(1) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Столовая</span>\n                    </a>\n                </div>\n            <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(2) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Люстра</span>\n                    </a>\n                </div>\n                <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(1) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Столовая</span>\n                    </a>\n                </div>\n             <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(2) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Люстра</span>\n                    </a>\n                </div>\n                <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(1) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Столовая</span>\n                    </a>\n                </div>\n           <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(2) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Люстра</span>\n                    </a>\n                </div>\n                <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(1) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Столовая</span>\n                    </a>\n                </div>\n            <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(2) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Люстра</span>\n                    </a>\n                </div>\n                <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(1) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Столовая</span>\n                    </a>\n                </div>\n            <div class=\"swiper-slide\">\n                    <a href=\"#\">\n                        <img src=\"" + __webpack_require__(2) + "\" alt=\"product image\" width=\"200\" height=\"200\">\n                        <span class=\"interior-category\">Люстра</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <button class=\"arrow-button next-interior\" slot=\"button-next\"></button>\n        <button class=\"arrow-button prev-interior left\" slot=\"button-prev\"></button>\n    </div>\n    <div class=\"main-products site-size similar-block\">\n        <h2 class=\"page-title\">Похожие товары</h2>\n        <a href=\"#\" class=\"arrow-link\">Показать все</a>\n        <div class=\"slider-wrapping\">\n            <div class=\"main-new-products-slider swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\">\n                        <a href=\"#\" class=\"product-item\">\n                            <div class=\"like-button\">\n                                <span class=\"site-icon heart-icon\"></span>\n                            </div>\n                            <div class=\"product-image\">\n                                <img src=\"" + __webpack_require__(4) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                            </div>\n                            <div class=\"product-item-info\">\n                                <div class=\"product-labels\">\n                                    <span class=\"new-product-label\">Новинка</span>\n                                </div>\n                                <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                            </div>\n                            <div class=\"product-bottom\">\n                                <div class=\"product-prices\">\n                                    <span class=\"price\">3 658 руб.</span>\n                                </div>\n                                <span class=\"small-button\">Корзина</span>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <a href=\"#\" class=\"product-item\">\n                            <div class=\"like-button\">\n                                <span class=\"site-icon heart-icon pressed\"></span>\n                            </div>\n                            <div class=\"product-image\">\n                                <img src=\"" + __webpack_require__(8) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                            </div>\n                            <div class=\"product-item-info\">\n                                <div class=\"product-labels\">\n                                    <span class=\"new-product-label\">Новинка</span>\n                                </div>\n                                <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                            </div>\n                            <div class=\"product-bottom\">\n                                <div class=\"product-prices\">\n                                    <span class=\"price\">3 658 руб.</span>\n                                </div>\n                                <span class=\"small-button\">Корзина</span>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <a href=\"#\" class=\"product-item\">\n                            <div class=\"like-button\">\n                                <span class=\"site-icon heart-icon\"></span>\n                            </div>\n                            <div class=\"product-image\">\n                                <img src=\"" + __webpack_require__(0) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                            </div>\n                            <div class=\"product-item-info\">\n                                <div class=\"product-labels\">\n                                    <span class=\"new-product-label\">Новинка</span>\n                                </div>\n                                <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                            </div>\n                            <div class=\"product-bottom\">\n                                <div class=\"product-prices\">\n                                    <span class=\"price\">3 658 руб.</span>\n                                </div>\n                                <span class=\"small-button\">Корзина</span>\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"swiper-slide\">\n                        <a href=\"#\" class=\"product-item\">\n                            <div class=\"like-button\">\n                                <span class=\"site-icon heart-icon\"></span>\n                            </div>\n                            <div class=\"product-image\">\n                                <img src=\"" + __webpack_require__(0) + "\" alt=\"product-image\" width=\"228\" height=\"162\">\n                            </div>\n                            <div class=\"product-item-info\">\n                                <div class=\"product-labels\">\n                                    <span class=\"new-product-label\">Новинка</span>\n                                </div>\n                                <div class=\"product-title\">Люстра на штанге L1118-3 Anabel, Е27*макс. 60Вт</div>\n                            </div>\n                            <div class=\"product-bottom\">\n                                <div class=\"product-prices\">\n                                    <span class=\"price\">3 658 руб.</span>\n                                </div>\n                                <span class=\"small-button\">Корзина</span>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <button class=\"arrow-button next-new\" slot=\"button-next\"></button>\n            <button class=\"arrow-button prev-new left\" slot=\"button-prev\"></button>\n        </div>\n    </div>\n\n\n    <div class=\"popup-wrap\" id=\"product-popup\">\n        <div class=\"popup-body\">\n            <button class=\"popup-close\"></button>\n            <div class=\"image-wrap\">\n\n            </div>\n        </div>\n    </div>\n\n</div>\n" + __webpack_require__(6) + "\n";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chandelier.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bra.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plafond.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lifting-bar.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spot.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/table-lamp.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lamp-shade.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plafond2.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/floor-lamp.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lamp-group.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-image1.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-image2.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/smaller-logo.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product-page-image4.jpg";

/***/ })
/******/ ]);