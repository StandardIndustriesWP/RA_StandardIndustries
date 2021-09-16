'use strict';

const ScrollMagic = require('scrollmagic');
const ScrollManager = require('../util/scroll-manager');

/**
 * The element selector
 * @type {string}
 */
const selector = '.info_text';

class InfoText{
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Scroll animations
    const items = el.querySelectorAll('.info-stack__item');

    items.forEach((item) => {
      new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 'onEnter'
      })
        .setClassToggle(item, 'active')
        .addTo(ScrollManager.controller);
    });
  }

  /**
   * Initializes all instances on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new InfoText(el);
    });
  }
}

module.exports = InfoText;
