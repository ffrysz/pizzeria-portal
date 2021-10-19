import { settings, select, classNames, templates } from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import Home from './components/Home.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    //console.log(thisApp.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        /* Get page id from href */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* Run thisApp. activatePage with that id */
        thisApp.activatePage(id);
        /* Change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    /* Add class "active" to matching page, remove from non matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* Add class "active" to matching link, remove from non matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initHome: function () {
    const thisApp = this;

    thisApp.home = document.querySelector(select.containerOf.home);
    thisApp.Home = new Home(thisApp.home);
    /*console.log(thisApp.navLinks);
    for (let link of thisApp.Home.dom.links) {
      thisApp.navLinks.push(link);
    };
    console.log(thisApp.navLinks);*/

    // for (let link of thisApp.Home.dom.links) {
    //   link.addEventListener('click', function (event) {
    //     const clickedElement = this;
    //     event.preventDefault();
    //     /* Get page id from href */
    //     const id = clickedElement.getAttribute('href').replace('#', '');
    //     /* Run thisApp. activatePage with that id */
    //     thisApp.activatePage(id);
    //     /* Change URL hash */
    //     window.location.hash = '#/' + id;
    //   });
    // }
  },

  initBooking: function () {
    const thisApp = this;

    thisApp.booking = document.querySelector(select.containerOf.booking);
    new Booking(thisApp.booking);
  },

  initMenu: function () {
    const thisApp = this;
    console.log('thisApp.data:', thisApp.data);
    for (let productData in thisApp.data.products) {
      //new Product(productData, thisApp.data.products[productData]); /* Before AJAX */
      //console.log('Product data:', productData);
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  //data: dataSource,
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    //console.log(url);
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        //console.log('Parsed response:', parsedResponse);
        /* Save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* Execute initMenu method */
        thisApp.initMenu();
      });

    //console.log('thisApp.data:', JSON.stringify(thisApp.data));
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function (event) {
      app.cart.add(event.detail.product);
    });
  },

  init: function () {
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);
    console.log('templates:', templates);
    thisApp.initHome();
    thisApp.initPages();
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
  },
};

app.init();