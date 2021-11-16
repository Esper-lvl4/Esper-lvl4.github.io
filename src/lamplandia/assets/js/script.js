const Swiper = require('../libs/js/swiper.min.js');

window.addEventListener('load', function() {
  // Quantity counter webcomponent.

  /** @function initCounter
   * @param {HTMLInputElement} input
   */
  function initCounter(input) {
    const min = 1;
    const max = 999;
    let value = input.value == '' ? min : input.value;

    const wrap = document.createElement('DIV');
    wrap.innerHTML = `
      Кол-во: <button>-</button>
      <input type="text" class="counter-value" value=${value}>
      <button>+</button>
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
    const counters = document
        .querySelectorAll('input.quantity-counter:not(.js-init)');
    if (counters.length !== 0) {
      for (const counter of counters) {
        initCounter(counter);
      }
    }
  }
  beautifyCounters();

  document.body.addEventListener('reinit-counters', beautifyCounters);

  const elems = document.querySelectorAll('.sort-item select');
  M.FormSelect.init(elems, {});

  // Catalog selectors redirects.

  if (elems.length !== 0) {
    /** @function redirectFromSelect
     * @param {Event} event
     */
    function redirectFromSelect(event) {
      const childs = event.target.children;
      for (const option of childs) {
        if (option.selected) {
          if (option.dataset.hasOwnProperty('url')) {
            const href = window.location.href;
            window.location.href = href.slice(0, href.indexOf('/')) +
                option.dataset.url;
          }
          break;
        }
      }
    }
    elems.forEach((el) => {
      el.addEventListener('change', redirectFromSelect);
    });
  }


  // Debouncer for scroll events.
  /** @function redirectFromSelect
   * @param {Function} func
   * @param {Number} ms
   * @return {Function}
   */
  function debounce(func, ms) {
    let timer = null;
    return function(...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, ms);
    };
  };

  // Handler for showing or hiding products on interior item page.
  const spots = document.getElementsByClassName('toggle-spot');

  /** @function toggleSpot
   * @param {Event} event
   */
  function toggleSpot(event) {
    if (event.target.classList.contains('toggle-spot')) {
      event.preventDefault();
      event.stopPropagation();
      for (let i = 0; i < spots.length; i++) {
        if (event.target !== spots[i]) {
          spots[i].classList.remove('active');
        }
      }
      event.target.classList.toggle('active');
    }
  };

  const interiorGallery = document.getElementById('interior-top-gallery');
  if (interiorGallery) {
    interiorGallery.addEventListener('click', toggleSpot);
  }

  // Product Page. Show product info, when page is scrolled down.

  const topBlockLimit = document.getElementById('top-block-limit');
  const topScrollWrap = document.getElementById('top-scroll-wrap');

  /** @function toggleTopProductBlock
   * @param {Event} event
   */
  function toggleTopProductBlock() {
    if (!topBlockLimit) return;
    if (window.pageYOffset > topBlockLimit.getBoundingClientRect().bottom +
      window.pageYOffset) {
      topScrollWrap.classList.add('active');
    } else {
      topScrollWrap.classList.remove('active');
    }
  }

  if (topBlockLimit) {
    toggleTopProductBlock();
    const func = debounce(toggleTopProductBlock, 100);
    window.addEventListener('scroll', func);
  }

  // Hide filter, when it's not in the viewport.
  let catalogFilter = document.getElementsByClassName('catalog-filter');
  const catalogWrap = document.getElementById('catalog-wrap');

  /** @function hideOrShowFilter */
  function hideOrShowFilter() {
    if (!catalogFilter || window.innerWidth <= 640) return;
    if (window.pageYOffset > catalogFilter.getBoundingClientRect().bottom +
      window.pageYOffset) {
      catalogWrap.classList.add('hidden');
    } else {
      catalogWrap.classList.remove('hidden');
    }
  }

  if (catalogFilter.length !== 0) {
    catalogFilter = catalogFilter[0];
    hideOrShowFilter();
    const func = debounce(hideOrShowFilter, 100);
    window.addEventListener('scroll', func);
  }

  // Product image popup. (to fix)
  const productImage = document.getElementById('product-image-slider');
  const productPopup = document.getElementById('product-popup');
  const productImageWrap = productPopup ? productPopup
      .querySelector('.image-wrap') : null;

  /** @function showProductPopup
   * @param {Event} event
   */
  function showProductPopup(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      productImageWrap.innerHTML = '';
      const bigImage = event.target.getAttribute('data-image');
      const img = new Image();
      img.alt = 'popup image';

      img.addEventListener('load', () => {
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
    let width = img.naturalWidth;
    let height = img.naturalHeight;

    const maxWidth = window.innerWidth * 0.9 - 80;
    const maxHeight = window.innerHeight * 0.9 - 80;

    const coef = width / height;

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
    const target = event.target;
    if (target == productPopup || target.classList.contains('popup-close')) {
      event.preventDefault();
      event.stopPropagation();
      productPopup.classList.remove('active');
    }
  }

  if (productImage) {
    productImage.addEventListener('click', showProductPopup);
    productPopup.addEventListener('click', closePopup);
  }

  // Toggles for Filter and his props.

  const filters = document.getElementsByClassName('filter-form');
  const filterToggle = document.getElementsByClassName('filter-toggle');

  /** @function toggleFilterProp
   * @param {Event} event
   */
  function toggleFilterProp(event) {
    const classes = event.target.classList;
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
    const target = event.target;
    if (target.classList.contains('upper-title')) {
      target.parentNode.classList.toggle('active');
    }
  }

  /** @function hideFilterBlock
   * @param {HTMLElement} filterBlock
   */
  function hideFilterBlock(filterBlock) {
    const children = filterBlock.querySelectorAll('.site-checkbox-label');
    if (children.length > 4) {
      const button = document.createElement('BUTTON');
      button.className = 'spread-all';
      button.textContent = 'Развернуть';
      if (filterBlock.nextElementSibling) {
        filterBlock.parentElement
            .insertBefore(button, filterBlock.nextElementSibling);
      } else {
        filterBlock.parentElement.appendChild(button);
      }

      filterBlock.style.maxHeight = children[3].offsetTop +
          children[3].offsetHeight + 'px';
    }
  }

  if (filters.length !== 0) {
    for (const filter of filters) {
      filter.addEventListener('click', toggleFilterProp);
      filter.querySelectorAll('.filter-block').forEach((block) => {
        hideFilterBlock(block);
      });
    }
  }

  if (filterToggle.length !== 0) {
    for (const toggle of filterToggle) {
      toggle.addEventListener('click', toggleFilter);
    }
  }

  // Catalog view change
  const productWrap = document.getElementById('product-wrap');
  const catalogChangeButtons = document
      .querySelectorAll('.grid-icon, .lines-icon');

  /** @function changeCatalog
   * @param {Event} event
   */
  function changeCatalog(event) {
    event.preventDefault();
    const type = event.target.dataset.type;
    if (type == 'grid') {
      productWrap.classList.remove('lines');
    } else if (type == 'lines') {
      productWrap.classList.add('lines');
    }
    for (const button of catalogChangeButtons) {
      button.classList.remove('active');
    }
    event.target.classList.add('active');
  }

  if (catalogChangeButtons.length !== 0 && productWrap) {
    for (const button of catalogChangeButtons) {
      button.addEventListener('click', changeCatalog);
    }
  }

  // Header interactions.

  const headMenu = document.getElementById('header-menu');
  const catalogMenuButton = document.querySelector('.catalog-menu-hover');
  const catalogMenu = document.getElementById('catalog-menu');
  const burgerButton = document.getElementById('burger-button');
  const searchButton = document.querySelector('#toggle-search-button');

  // Clicks on menu button.
  /** @function toggleMenu */
  function toggleMenu() {
    headMenu.classList.toggle('active');
  }

  // Hovers on menu button.
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
      const classes = event.relatedTarget.classList;
      if (!classes.contains('catalog-menu') &&
          !classes.contains('catalog-menu-hover')) {
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
    const searchWrap = document.querySelector('.header-search');
    searchWrap.addEventListener('keypress', (event) => {
      if (event.code == 'Enter') {
        console.log(event);
        searchWrap.submit();
      }
    });
  }

  // Product page characteristics.
  const stats = document.getElementById('product-stats');

  /** @function toggleMoreStats
   * @param {Event} event
   */
  function toggleMoreStats() {
    const target = event.target;
    if (target.classList.contains('more')) {
      event.preventDefault();
      stats.querySelector('.product-info-list').classList.toggle('active');
      const text = target.textContent;
      target.textContent = target.dataset.text;
      target.dataset.text = text;
    }
  }
  if (stats) {
    const list = stats.querySelector('.product-info-list');
    let height = 0;
    for (const child of list.children) {
      height += child.offsetHeight + 7;
    }
    if (height < 210) {
      stats.querySelector('.more').classList.add('js-none');
    } else {
      stats.addEventListener('click', toggleMoreStats);
    }
  }

  // Initialize sliders.
  new Swiper('.classic-adv-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.next-adv',
      prevEl: '.prev-adv',
    },
  });

  new Swiper('.main-new-products-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-new',
      prevEl: '.prev-new',
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
    },
  });

  new Swiper('.products-special-slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-special',
      prevEl: '.prev-special',
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
    },
  });

  new Swiper('.main-news-slider', {
    spaceBetween: 42,
    slidesPerView: 3,
    centerInsufficientSlides: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.next-news',
      prevEl: '.prev-news',
    },
    breakpoints: {
      400: {
        slidesOffsetBefore: 0,
        spaceBetween: 40,
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
    },
  });

  const swiperProduct = new Swiper('.product-image-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 5,
    navigation: {
      nextEl: '.next-image',
      prevEl: '.prev-image',
    },
    pagination: {
      el: '.product-slider-bullets',
      type: 'bullets',
      bulletElement: 'button',
      clickable: true,
      bulletClass: 'production-bullet',
    },
  });

  const sliderImages = document.querySelectorAll('.product-image-slider img');
  if (sliderImages.length !== 0) {
    for (const image of sliderImages) {
      image.width = image.naturalWidth;
      image.height = image.naturalHeight;
    }
  }

  const swiperProductThumbs = new Swiper('.product-thumbs-slider', {
    spaceBetween: 10,
    slidesPerView: 3,
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 5,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.next-image-thumb',
      prevEl: '.prev-image-thumb',
    },
  });

  // Wiring product sliders together on product page.

  if (swiperProduct.$el && swiperProductThumbs.$el) {
    swiperProduct.controller.control = swiperProductThumbs;
    swiperProductThumbs.controller.control = swiperProduct;
  }


  const swiperProductInteriorWrap = document
      .querySelector('.product-interior-slider .swiper-wrapper');
  if (swiperProductInteriorWrap) {
    new Swiper('.product-interior-slider', {
      spaceBetween: 10,
      slidesPerView: swiperProductInteriorWrap.children.length < 5 ?
          swiperProductInteriorWrap.children.length : 5,
      navigation: {
        nextEl: '.next-interior',
        prevEl: '.prev-interior',
      },
      breakpoints: {
        460: {
          slidesPerView: 1,
        },
        660: {
          slidesPerView: swiperProductInteriorWrap.children.length < 2 ?
              swiperProductInteriorWrap.children.length : 2,
        },
        960: {
          slidesPerView: swiperProductInteriorWrap.children.length < 3 ?
              swiperProductInteriorWrap.children.length : 3,
        },
        1120: {
          slidesPerView: swiperProductInteriorWrap.children.length < 4 ?
              swiperProductInteriorWrap.children.length : 4,
        },
      },
    });
  }

  // Add to cart popup.

  const cartPopup = document.querySelector('#cart-popup');

  /** @function closeCartPopups
   * @param {Event} event
   */
  function closeCartPopup(event) {
    if (!event) {
      cartPopup.classList.remove('active');
    }
    const target = event.target;
    if (target.classList.contains('popup-wrap')) {
      cartPopup.classList.remove('active');
    }
  }

  if (cartPopup) {
    cartPopup.addEventListener('click', closeCartPopup);
  }
});
