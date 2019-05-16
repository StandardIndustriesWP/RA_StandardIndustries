'use strict';

/**
 * The element selector
 * @type {string}
 */
const selector = '.homepage-hero';

class HomepageHero {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Elements
    this.el = el;
  }

  /**
   * Initializes all spotlights on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new HomepageHero(el);
    });
  }
}

module.exports = HomepageHero;
