'use strict';

const ScrollMagic = require('scrollmagic');

/**
 * Creates a singleton ScrollMagic controller
 */
class ScrollManager {
  /**
   * Creates internal ScrollMagic controller
   */
  constructor() {
    if (typeof window !== 'undefined') {
      this.controller = new ScrollMagic.Controller();
    }
  }
}

module.exports = new ScrollManager();
