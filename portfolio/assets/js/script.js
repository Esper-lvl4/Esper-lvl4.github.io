window.addEventListener('DOMContentLoaded', function() {
  // Overwrites native 'children' prototype.
  // Adds Document & DocumentFragment support for IE9 & Safari.
  // Returns array instead of HTMLCollection.
  (function(constructor) {
    if (constructor &&
      constructor.prototype &&
      constructor.prototype.children == null) {
      Object.defineProperty(constructor.prototype, 'children', {
        get: function() {
          let i = 0;
          let node;
          const nodes = this.childNodes;
          const children = [];
          while (node = nodes[i++]) {
            if (node.nodeType === 1) {
              children.push(node);
            }
          }
          return children;
        },
      });
    }
  })(window.Node || window.Element);

  // Lazy load images.

  new LazyLoad({
    elements_selector: '.lazy',
  });

  // Init sliders.

  let productPageSlider = document.querySelector('#product-main-image-slider');
  let productPreviews = document.querySelector('#product-image-previews');

  if (productPageSlider && productPreviews) {
    const quantity = productPreviews.querySelectorAll('.swiper-slide').length;

    if (quantity >= 3) {
      productPreviews = new Swiper('.previews-slider', {
        spaceBetween: 20,
        slidesPerView: quantity > 2 ? 2 : quantity,
        loop: false,
        normalizeSlideIndex: false,
        navigation: {
          nextEl: '.previews-next',
          prevEl: '.previews-prev',
        },
      });

      productPageSlider = new Swiper('.main-image-slider', {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: false,
        normalizeSlideIndex: false,
      });

      productPageSlider.controller.control = productPreviews;
      productPreviews.controller.control = productPageSlider;
    } else {
      const parent = productPreviews.$el[0].parentElement;
      parent.querySelector('.previews-next').classList.add('js-none');
      parent.querySelector('.previews-prev').classList.add('js-none');
    }
  }

  let solutionSlider = document.querySelector('#solution-images-slider');

  if (solutionSlider) {
    const quantity = solutionSlider.querySelectorAll('.swiper-slide').length;

    solutionSlider = new Swiper('.solution-images-slider', {
      spaceBetween: 20,
      slidesPerView: quantity >= 4 ? 4 : quantity,
      loop: quantity >= 4,
      loopedSlides: quantity,
      navigation: {
        prevEl: '.prev-solution-image',
        nextEl: '.next-solution-image',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 1,
        },
      },
    });

    if (quantity < 4) {
      solutionSlider.el.parentElement.querySelectorAll('.svg-button')
          .forEach((button) => {
            button.classList.add('js-none');
          });
      solutionSlider.el.classList.add('dead-slider');
    }
  }

  let productSimilarItems = document.querySelector('#product-similar-items');

  if (productSimilarItems) {
    productSimilarItems = new Swiper('#product-similar-items', {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: '.prev-similar-slide',
        nextEl: '.next-similar-slide',
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });
  }

  let productTogetherItems = document.querySelector('#product-together-items');
  if (productTogetherItems) {
    productTogetherItems = new Swiper('#product-together-items', {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: '.prev-together-item',
        nextEl: '.next-together-item',
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });
  }

  let albumSlider = document.querySelector('#album-slider');
  if (albumSlider) {
    albumSlider = new Swiper('#album-slider', {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl: '.album-swiper-prev',
        nextEl: '.album-swiper-next',
      },
    });
  }

  let reviewSlider = document.querySelector('#review-slider');
  if (reviewSlider) {
    reviewSlider = new Swiper('#review-slider', {
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl: '.prev-review',
        nextEl: '.next-review',
      },
    });
  }

  // Main page slider
  let mainSwiper = document.querySelector('#main-swiper');
  if (mainSwiper) {
    const slides = mainSwiper.querySelectorAll('.swiper-slide');
    mainSwiper = new Swiper('#main-swiper', {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
    });
    const pagination = mainSwiper.$el[0].querySelector('.slider-nav');
    for (let i = 0; i < slides.length; i++) {
      const label = document.createElement('LABEL');
      const image = slides[i].querySelector('img');
      label.className = 'slider-dot';
      label.innerHTML = `
        <span class="dot-number">${(i < 11 ? '0': '') + (i + 1) + '.'}</span>
        <span class="dot-text">
        ${image.dataset.title.replace(/\s{2,}/, '').slice(0, 34)}
        ...
        </span>
      `;
      label.dataset.slide = i;
      pagination.appendChild(label);
    }

    /** @function renderDots */
    function renderDots() {
      let index = null;
      const slides = mainSwiper.el.querySelectorAll('.swiper-slide');
      for (const slide of slides) {
        if (slide.classList.contains('swiper-slide-active')) {
          index = slide.dataset.swiperSlideIndex;
          break;
        }
      }
      if (index !== null) {
        for (const dot of pagination.children) {
          if (+dot.dataset.slide === +index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        }
      }
    }
    mainSwiper.on('slideChangeTransitionEnd', renderDots);
    pagination.addEventListener('click', (event) => {
      if (event.target.closest('.slider-dot')) {
        event.stopPropagation();
        const index = +event.target.closest('.slider-dot').dataset.slide;
        mainSwiper.slideToLoop(index);
        renderDots();
      }
    });
    renderDots();
  }

  // Debouncer.

  /** @function debounce
  * @param {Function} func
  * @param {Number} time
  * @return {Function}
  */
  function debounce(func, time) {
    let timer = null;
    return function(...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        func(...args);
      }, time);
    };
  }

  // Error decorator.

  /** @function errorDecorator
  * @param {Function} func
  * @return {Function}
  */
  function errorDecorator(func) {
    return function(...args) {
      try {
        func(...args);
      } catch (error) {
        console.error(error);
      }
    };
  }

  // Function for getting coordinates of the element.

  /** @function getCoordinates
  * @param {HTMLElement} elem
  * @return {Object}
  */
  function getCoordinates(elem) {
    return {
      top: window.pageYOffset + elem.getBoundingClientRect().top,
      left: window.pageXOffset + elem.getBoundingClientRect().left,
    };
  }

  // Reset and clear.
  /** @function resetAll */
  function resetAll() {
    clearDropdowns();
  }

  document.addEventListener('click', resetAll);

  // Ui elements.

  // Quantity counter.

  /** @function initCounter
  * @param {HTMLInputElement} input
  */
  function initCounter(input) {
    const min = 1;
    const max = 9999;
    let value = input.value == '' ? min : input.value;

    const wrap = document.createElement('DIV');
    wrap.innerHTML = `
      <button class="minus-counter" data-action="minus">-</button>
      <input type="text" class="counter-value" value=${value}>
      <button class="plus-counter" data-action="plus">+</button>
    `;
    wrap.className = input.className;

    input.parentElement.insertBefore(wrap, input);
    wrap.appendChild(input);
    input.setAttribute('style', 'display: none;');

    const inputValue = wrap.querySelector('.counter-value');

    /** @function changeCounter
    * @param {Event} event
    */
    function changeCounter(event) {
      if (event.target.tagName.toLowerCase() === 'button') {
        event.preventDefault();
        // event.stopPropagation();
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
      input.dispatchEvent(new Event('change', {bubbles: true}));
    }

    wrap.addEventListener('click', changeCounter);
    inputValue.addEventListener('input', validate);
    inputValue.addEventListener('change', validate);
    input.classList.add('js-init');
    input.addEventListener('change-value', setValue);
  }

  /** @function beautifyCounters */
  function beautifyCounters() {
    const counters = document
        .querySelectorAll('input.product-quantity:not(.js-init)');
    if (counters.length !== 0) {
      for (const counter of counters) {
        initCounter(counter);
      }
    }
  }
  beautifyCounters();

  document.body.addEventListener('reinit-counters', beautifyCounters);

  // Beautify selects.

  /** @function initSelector
  * @param {HTMLSelectElement} select
  */
  function initSelector(select) {
    let value = select.value;
    const wrap = document.createElement('DIV');
    let options = '';
    for (const opt of Array.from(select.children)) {
      options += `<span>${opt.value}</span>`;
    }

    wrap.innerHTML = `
      <button class="site-selector-value"></button>
      <div class="site-select-list">
        ${options}
      </div>
    `;
    wrap.className = select.className;
    select.parentElement.insertBefore(wrap, select);
    wrap.appendChild(select);

    const optionsWrap = wrap.querySelector('.site-select-list');
    const valueEl = wrap.querySelector('.site-selector-value');

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
      const target = event.target;
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
    document.querySelectorAll('div.site-selector.active').forEach((select) => {
      select.classList.remove('active');
    });
  }

  const selectors = document.querySelectorAll('.site-selector');
  if (selectors.length !== 0) {
    selectors.forEach((selector) => {
      initSelector(selector);
    });
    document.body.addEventListener('close-selects', closeSelects);
    document.body.addEventListener('click', closeSelects);
  }

  // Range sliders.

  const ranges = document.querySelectorAll('.range-input');
  for (const range of ranges) {
    const minValue = range.dataset.min !== undefined &&
        !isNaN(range.dataset.min) ? +range.dataset.min : 0;
    const maxValue = range.dataset.max !== undefined &&
        !isNaN(range.dataset.max) ? +range.dataset.max : 100;
    const percent = (maxValue - minValue) / 100;
    const name = range.dataset.name;
    console.log(minValue, maxValue);

    noUiSlider.create(range, {
      start: [minValue, maxValue],
      connect: false,
      range: {
        min: minValue,
        max: maxValue,
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
        valueSub: 'value-sub',
      },
    });

    const min = range.querySelector('.range-min-output');
    const max = range.querySelector('.range-max-output');
    const minInput = range.querySelector(`[name="min-${name}"]`);
    const maxInput = range.querySelector(`[name="max-${name}"]`);

    /** @function changeRangeValue
    * @param {Array} values
    */
    function changeRangeValue(values) {
      min.textContent = 'от\u00A0' + Math.round(values[0]);
      max.textContent = 'до\u00A0' + Math.round(values[1]);
      minInput.value = Math.round(values[0]);
      maxInput.value = Math.round(values[1]);
      min.style.left = values[0]/percent + '%';
      max.style.left = values[1]/percent + '%';
    }

    range.noUiSlider.on('update', changeRangeValue);
  }

  // All tabs on site functionality.
  const tabsElements = document.getElementsByClassName('site-tabs');
  if (tabsElements.length !== 0) {
    /** @function changeTab
    * @param {Event} event
    */
    function changeTab(event) {
      const target = event.target;
      if (target.classList.contains('tab-button') &&
          target.getAttribute('data-tab')) {
        const tabId = target.dataset.tab;
        const allTabs = target.closest('.site-tabs')
            .querySelectorAll('.tab-content *[data-tab]');
        const position = {
          left: target.offsetLeft,
          top: target.offsetTop + target.offsetHeight,
        };
        const brick = target.closest('.site-tabs').querySelector('.tabs-brick');
        brick.style.left = position.left + 'px';
        brick.style.top = position.top + 'px';

        for (const tab of allTabs) {
          if (tab.dataset.tab == tabId) {
            tab.classList.add('js-active');
          } else {
            tab.classList.remove('js-active');
          }
        }
      }
    }

    for (let t = 0; t < tabsElements.length; t++) {
      tabsElements[t].querySelector('.tabs-nav')
          .addEventListener('click', changeTab);
      tabsElements[t].querySelector('.tab-button')
          .dispatchEvent(new Event('click', {bubbles: true}));
    }
  }

  // Categories dropdown
  const categoriesWraps = document.getElementsByClassName('categories-wrap');

  /** @function showCategoryDropdown
  * @param {Event} event
  */
  function showCategoryDropdown(event) {
    if (event.target.classList.contains('category-expand')) {
      event.stopPropagation();
      // first - remove all active dropdowns.
      clearDropdowns();
      const item = event.target.closest('.category-item');
      item.classList.add('active');
    } else if (event.target.closest('.category-item')) {
      event.stopPropagation();
    }
  }

  /** @function clearDropdowns */
  function clearDropdowns() {
    const drops = document.getElementsByClassName('category-item');
    for (const drop of drops) {
      drop.classList.remove('active');
    }
  }

  if (categoriesWraps.length !== 0) {
    for (const wrap of categoriesWraps) {
      wrap.addEventListener('click', showCategoryDropdown);
    }
  }

  // Footer dropdowns
  const footerDrop = document.getElementById('footer-dropdowns');

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
    const drops = document.getElementsByClassName('show-stuff');
    for (const drop of drops) {
      drop.classList.remove('active');
    }
  }

  if (footerDrop) {
    footerDrop.addEventListener('click', footerDropdown);
  }

  // Show/hide fixed button.

  const returnButton = document.getElementById('return-top-button');

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
    const currentY = window.pageYOffset;
    const distancePart = currentY / 20;
    for (let i = 19; i >= 0; i--) {
      setTimeout(function() {
        window.scrollTo(0, distancePart * i);
      }, 20 * (20 - i));
    }
  }

  if (returnButton) {
    // Add handler to button itself.
    returnButton.addEventListener('click', returnToTop);

    // Add scroll handler.
    window.addEventListener('scroll', debounce(handleScroll, 100));
    // Use it, when page has been loaded. But only if the button is present.
    handleScroll();
  }

  // Header menu.
  const burgerButton = document.getElementById('head-burger');
  const headMenu = document.getElementById('head-menu');

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
  }

  // Header popup menu

  /** @function headerPopup
  * @param {HTMLElement} menuWrapper
  */
  function headerPopup(menuWrapper) {
    let currentBranch = null;

    /** @function showHeaderSubmenu
    * @param {Event} event
    */
    function showHeaderSubmenu(event) {
      const target = event.target;
      const pimp = target.parentElement.querySelector('.menu-pimp');
      if (target.tagName.toLowerCase() === 'a' &&
          target.nextElementSibling &&
          target.nextElementSibling.classList.contains('header-popup-menu')) {
        target.nextElementSibling.classList.add('active');
        pimp.setAttribute('style', 'left: ' + (target.offsetLeft +
          (Math.ceil(target.offsetWidth / 2 - pimp.offsetWidth / 2))) + 'px;');

        currentBranch = target.closest('.header-menu > .menu-item');
      }
    }

    /** @function hideHeaderMenu
    * @param {Event} event
    */
    function hideHeaderMenu(event) {
      const related = event.relatedTarget;
      if (!related ||
        related.closest('.header-menu > .menu-item') != currentBranch) {
        menuWrapper.querySelectorAll('.header-popup-menu')
            .forEach((submenu) => {
              submenu.classList.remove('active');
            });
      }
    }

    menuWrapper.addEventListener('mouseover', showHeaderSubmenu);
    menuWrapper.addEventListener('mouseout', hideHeaderMenu);
  }

  // Mobile version of menu.
  /** @function initMobileMenu
  * @param {HTMLElement} el
  * @param {HTMLElement} caller
  */
  function initMobileMenu(el, caller) {
    if (!el || !caller) {
      console.error('Pls provide menu element and button, that will open it!');
      return;
    }
    const wrap = el;
    let menuMap = null;
    const currentMenu = [];
    const popupBody = document.createElement('DIV');
    popupBody.className = 'black-popup-wrap';

    let menuIsOpenned = false;

    // Function, that return new menu every time. Old menu gets overwritten.
    /** @function getTemplate
    * @param {Map} map
    * @return {String}
    */
    function getTemplate(map) {
      const length = currentMenu.length;
      let list = '';
      for (const [link, value] of map) {
        list += `
          <div class="menu-item${value.submenu ? ' has-sub' : ''}">
            <a ${value.classes ? 'class="' + value.classes + '"' : ''}
            href="${value.href}">${link}</a>
            ${value.submenu ? '<button class="next-submenu"></button>' : ''}
          </div>
        `;
      }
      return `
        <div class="menu-wrapper">
          <div class="menu-top">
            <button class="back-to-parent${length === 0 ? ' js-hide' : ''}">
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26203
                 16.6619L0.319526 9.31619C-0.106501 8.86542 -0.106501 8.13458
                 0.319527 7.68381L7.26203 0.338077C7.68805 -0.112694 8.37878
                 -0.112694 8.80481 0.338077C9.23083 0.788848 9.23083 1.51969
                 8.80481 1.97046L3.7246 7.34573L15 7.34573L15 9.65427L3.7246
                 9.65427L8.8048 15.0295C9.23083 15.4803 9.23083 16.2112 8.8048
                 16.6619C8.37878 17.1127 7.68805 17.1127 7.26203 16.6619Z"
                 fill="white"/>
              </svg>
            </button>
            <form>
              <input type="text" class="menu-search site-input"
               placeholder="Поиск">
            </form>
            <button class="exit-menu popup-cross"></button>
          </div>
          <div class="current-place">
            ${length === 0 ? 'Меню' : currentMenu[length - 1] + ''}
          </div>
          <div class="scrollable-list" data-simplebar>
            <div class="link-list">
              ${list}
            </div>
          </div>
        </div>
      `;
    }

    /** @function clickHandler
    * @param {Event} event
    */
    function clickHandler(event) {
      const target = event.target;
      if (target.classList.contains('next-submenu')) {
        enterSubmenu(target);
      } else if (target.classList.contains('back-to-parent') ||
          target.closest('.back-to-parent')) {
        exitSubmenu();
      } else if (target.classList.contains('exit-menu')) {
        closeMenu();
      }
    }

    /** @function enterSubmenu
    * @param {HTMLElement} target
    */
    function enterSubmenu(target) {
      const link = target.closest('.menu-item').querySelector('a')
          .textContent.replace(/\s\s/g, '');
      const menuItem = findMapItem(link, menuMap);
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
      const tempArr = [];
      for (const [link, value] of map) {
        if (value.submenu === null) continue;

        if (link === target) {
          return {link, value};
        } else {
          tempArr.push(value);
        }
      }

      // If it's not on this level, search deeper.
      let result = null;
      for (const list of tempArr) {
        result = findMapItem(target, list.submenu);
        if (result) {
          break;
        }
      }
      return result;
    }

    // Parse menu to make a map of it. Use map to navigate in menu.
    /** @function parseMenu
    * @param {HTMLElement} wrapper
    * @return {Map}
    */
    function parseMenu(wrapper) {
      const item = wrapper.querySelector('.menu-item');
      if (!item) return null;

      const children = item.parentElement.children;
      const map = new Map();
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('menu-item')) {
          const submenu = children[i].querySelector('.submenu');
          const linkName = children[i].querySelector('a')
              .textContent.replace(/\s\s/g, '');
          const linkHref = children[i].querySelector('a').href;
          map.set(linkName, {
            href: linkHref,
            classes: children[i].querySelector('a').className,
            submenu: submenu ? parseMenu(submenu) : null,
          });
        } else if (children[i].classList.contains('menu-item-list')) {
          const itemLists = children[i].querySelectorAll('.menu-item');

          for (let j = 0; j < itemLists.length; j++) {
            const linkName = itemLists[j].querySelector('a')
                .textContent.replace(/\s\s/g, '');
            const linkHref = itemLists[j].querySelector('a').href;
            map.set(linkName, {
              href: linkHref,
              classes: itemLists[j].querySelector('a').className,
              submenu: null,
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
      let menuItems = null;
      if (currentMenu.length !== 0) {
        menuItems = getMenu(currentMenu[currentMenu.length - 1], menuMap);
      } else {
        menuItems = menuMap;
      }

      popupBody.innerHTML = getTemplate(menuItems);
      setTimeout(() => {
        popupBody.classList.remove('hide-scroll');
      });
    }

    /** @function getMenu
    * @param {HTMLElement} elem
    * @param {Map} map
    * @return {Map|undefined}
    */
    function getMenu(elem, map) {
      const mapItem = map.get(elem);
      if (mapItem) {
        return mapItem.submenu;
      } else {
        let result;
        for (const [, value] of menuMap) {
          if (value.submenu) {
            result = getMenu(elem, value.submenu);
            if (result) break;
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
  }

  // Function for hiding sidebars when they ar enot visible.
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
  }

  // News list scroll past column.
  const expertColumn = document.getElementById('news-expert-column');
  const newsListWrap = document.getElementById('news-wrap');

  /** @function hideExpertColumn */
  function hideExpertColumn() {
    hideColumn(newsListWrap, expertColumn);
  }

  if (expertColumn && newsListWrap) {
    window.addEventListener('scroll', debounce(hideExpertColumn, 100));
    hideExpertColumn();
  }

  // ... and Catalog scroll too.

  const catalogWrap = document.querySelector('#catalog-wrap');
  const catalogFilter = document.querySelector('#catalog-filter');

  /** @function hideFilterColumn */
  function hideFilterColumn() {
    hideColumn(catalogWrap, catalogFilter);
  }

  // Toggle filter groups
  /** @function toggleFilterBlock
  * @param {Event} event
  */
  function toggleFilterBlock(event) {
    const target = event.target;
    if (target.classList.contains('filter-item-title')) {
      target.classList.toggle('hidden');
    }
  }

  /** @function toggleFilter
  * @param {Event} event
  */
  function toggleFilter(event) {
    const target = event.target;
    if (target.classList.contains('filter-toggle')) {
      catalogFilter.classList.toggle('show');
    }
  }

  if (catalogWrap && catalogFilter) {
    window.addEventListener('scroll', debounce(hideFilterColumn, 100));
    hideFilterColumn();

    catalogFilter.addEventListener('click', toggleFilterBlock);
    catalogFilter.addEventListener('click', toggleFilter);
  }

  // Change catalog view.

  const productWraps = document.querySelectorAll('.products-wrap');
  const sortButtons = document.querySelectorAll('.sort-button');

  /** @function changeCatalogView
  * @param {Event} event
  */
  function changeCatalogView(event) {
    const target = event.target;
    if (!target.closest('.sort-button')) return;
    event.preventDefault();
    if (target.closest('.sort-button').dataset.view === 'lines') {
      productWraps.forEach((wrap) => {
        wrap.classList.add('lines');
      });
      target.closest('.sort-button').classList.add('active');
      document.querySelector('[data-view="grid"]').classList.remove('active');
    } else {
      productWraps.forEach((wrap) => {
        wrap.classList.remove('lines');
      });
      target.closest('.sort-button').classList.add('active');
      document.querySelector('[data-view="lines"]').classList.remove('active');
    }
  }

  if (productWraps.length !== 0 && sortButtons.length !== 0) {
    sortButtons.forEach((button) => {
      button.addEventListener('click', changeCatalogView);
    });
  }

  // Solution page Calculator.

  /** @function initCalculator
  * @param {HTMLElement} elem
  */
  function initCalculator(elem) {
    const wrap = elem;
    const total = wrap.querySelector('.total-price span');
    const removePopup = document.querySelector('#remove-product-popup');
    let removePopupIsInitiated = false;
    const products = new Map();
    let targetCache = null;

    for (const product of wrap.querySelectorAll('.product-item')) {
      products.set(product.dataset.id, {
        quantity: product.querySelector('[type="number"]').value,
        price: +product.querySelector('.product-price span')
            .textContent.replace(/\D/g, ''),
        coefficient: product.dataset.coef && !isNaN(product.dataset.coef) ?
            +product.dataset.coef.replace(/[\s]/g, '') : 1,
      });
    }

    const state = {
      peopleNumber: +wrap.querySelector('[name="number-of-people"]')
          .value.replace(/\D/g),
      goods: products,
    };

    /** @function handleHover
    * @param {Event} event
    */
    let handleHover = function(event) {
      const target = event.target.closest('.product-image img');
      if (target) {
        const imageWrap = document.createElement('DIV');
        imageWrap.className = 'image-popup';
        const image = new Image(target.naturalWidth, target.naturalHeight);
        image.src = target.src;
        image.alt = target.alt;
        imageWrap.appendChild(image);
        target.closest('.product-image').appendChild(imageWrap);
        for (const item of target.closest('.solution-page-form')
            .querySelectorAll('.product-item')) {
          item.classList.remove('active');
        }
        target.closest('.product-item').classList.add('active');
      }
    };
    handleHover = errorDecorator(handleHover);

    /** @function handleOut
    * @param {Event} event
    */
    let handleOut = function(event) {
      const target = event.target.closest('.product-image img');
      if (target) {
        document.querySelectorAll('.image-popup').forEach((pop) => {
          pop.remove();
        });
      }
    };
    handleOut = errorDecorator(handleOut);

    /** @function handleClick
    * @param {Event} event
    */
    let handleClick = function(event) {
      const target = event.target;
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
    let render = function() {
      let totalPrice = 0;
      for (const [, value] of state.goods) {
        totalPrice += value.price * value.quantity;
      }
      total.textContent = totalPrice;
    };
    render = errorDecorator(render);

    /** @function renderGoods */
    let renderGoods = function() {
      state.peopleNumber = wrap
          .querySelector('[name="number-of-people"]').value;
      for (const [key, value] of state.goods) {
        value.quantity = Math.ceil(state.peopleNumber * value.coefficient);
        const prod = document.querySelector(`[data-id="${key}"]`);
        prod.querySelector('[type="number"]').value = value.quantity;
        prod.querySelector('[type="number"]')
            .dispatchEvent(new Event('change-value'));
      }
      render();
    };
    renderGoods = errorDecorator(renderGoods);
    renderGoods();

    /** @function popupHandler
    * @param {Event} event
    */
    let popupHandler = function(event) {
      event.preventDefault();
      const target = event.target;
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
    let showPopup = function(target) {
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
    let removeProduct = function(target) {
      state.goods.delete(target.closest('.product-item').dataset.id);
      target.closest('.product-item').remove();
      targetCache = null;
    };
    removeProduct = errorDecorator(removeProduct);

    /** @function changeQuantity
    * @param {HTMLElement} target
    * @param {String} eventType
    */
    let changeQuantity = function(target, eventType) {
      if (!target.closest('.product-item') || eventType !== 'change') return;
      const key = target.closest('.product-item').dataset.id;
      const values = state.goods.get(key);
      values.quantity = target.value;
      render();
    };
    changeQuantity = errorDecorator(changeQuantity);

    /** @function submitForm */
    let submitForm = function() {
      const jsonArr = [{}];
      for (const [key, value] of state.goods) {
        jsonArr[0][key] = value.quantity;
      }
      console.log(jsonArr);
      const requestData = JSON.stringify(jsonArr);
      console.log(requestData);

      // Ajax here. Just send requestData.
    };
    submitForm = errorDecorator(submitForm);

    render();

    wrap.addEventListener('click', handleClick);
    wrap.addEventListener('change', handleClick);
    wrap.addEventListener('mouseover', handleHover);
    wrap.addEventListener('mouseout', handleOut);
  }

  const solutionForms = document.querySelectorAll('.solution-page-form');

  if (solutionForms.length !== 0) {
    solutionForms.forEach((form) => {
      initCalculator(form);
    });
  }

  const specialistPopupButton = document.querySelector('#ask-spec-button');
  const specialistPopup = document.querySelector('#ask-specialist');

  /** @function toggleSpecPopup
  * @param {Event} event
  */
  function toggleSpecPopup(event) {
    event.preventDefault();
    const target = event.target;
    if (target.closest('.popup-wrap') &&
        (target.classList.contains('popup-close') ||
        target.classList.contains('popup-wrap'))) {
      specialistPopup.classList.toggle('js-none');
    } else if (target.tagName.toLowerCase() == 'a') {
      specialistPopup.classList.toggle('js-none');
    }
  }
  if (specialistPopup && specialistPopupButton) {
    specialistPopupButton.addEventListener('click', toggleSpecPopup);
    specialistPopup.addEventListener('click', toggleSpecPopup);
  }

  // Contacts form validation
  /** @function validateContactsForm
  * @param {Event} event
  */
  function validateContactsForm(event) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    event.preventDefault();
    let allowSubmit = true;

    const email = event.target.querySelector('[name="email"]');

    if (email.value.length < 5 || !email.value.match(emailRegex)) {
      email.classList.add('js-invalid-input');
      allowSubmit = false;
    }
    if (allowSubmit) {
      console.log('ajax');
      // ajax here
    }
  }

  /** @function clearErrors
  * @param {Event} event
  */
  function clearErrors(event) {
    event.target.classList.remove('js-invalid-input');
  }

  const contactsForm = document.querySelector('#contacts-form');
  if (contactsForm) {
    contactsForm.addEventListener('submit', validateContactsForm);
    contactsForm.addEventListener('input', clearErrors);
    contactsForm.addEventListener('change', clearErrors);
  }

  // Spread text on content pages.
  const spreadButtons = document.querySelectorAll('.js-spread-text');
  if (spreadButtons.length !== 0) {
    document.body.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('js-spread-text')) {
        event.preventDefault();
        const parent = target.closest('.page-content');
        if (parent) {
          const dataText = target.textContent;
          target.textContent = target.dataset.text;
          target.dataset.text = dataText;
          parent.classList.toggle('show');
        }
      }
    });

    for (const button of spreadButtons) {
      const parent = button.closest('.page-content');
      if (parent) {
        if (parent.offsetHeight < 400) {
          button.classList.add('js-none');
        }
      } else {
        button.classList.add('js-none');
      }
    }
  }

  const callPopup = document.querySelector('#call-popup');
  const phonesWrap = document.querySelector('#phones-wrap');

  /** @function togglePhonePopup
  * @param {Event} event
  */
  function togglePhonesPopup(event) {
    const target = event.target;
    if (target.dataset.action == 'open') {
      const back = document.createElement('DIV');
      back.classList.add('phones-wrap-back');
      phonesWrap.classList.add('active');
      document.body.appendChild(back);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        back.classList.add('ready');
      }, 500);
    } else if (target.dataset.action == 'close') {
      phonesWrap.classList.remove('active');
      document.querySelectorAll('.phones-wrap-back').forEach((el) => {
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
