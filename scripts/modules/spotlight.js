'use strict';

const selector = '.spotlight';

class Spotlight {
  /**
   * Module constructor, sets initial state
   * @param el
   */
  constructor(el) {
    this.el = el;
    this.items = el.querySelectorAll('.spotlight__slide');
    this.slideCount = this.items.length;
    this.activeSlide = 0;
  }

  /**
   * Initializes all spotlights on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new Spotlight(el);
    });
  }
}

module.exports = Spotlight;
