'use strict';

const ScrollMagic = require('scrollmagic');
const ScrollManager = require('../util/scroll-manager');

/**
 * The element selector
 * @type {string}
 */
const selector = '.small-team-grid';

class SmallTeamGrid {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    this.el = el;

    // Scroll animations
    const items = el.querySelectorAll('.small-team-grid__item');

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
      new SmallTeamGrid(el);
    });
  }
}

module.exports = SmallTeamGrid;
