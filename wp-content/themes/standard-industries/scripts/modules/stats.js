'use strict';

const CountUp = require('../util/count-up');
const ScrollMagic = require('scrollmagic');
const ScrollManager = require('../util/scroll-manager');

/**
 * The element selector
 * @type {string}
 */
const selector = '.stats';

class Stats {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Elements
    this.el = el;
    this.stats = el.querySelectorAll('.stats__value');

    // State
    this.hasAnimated = false;

    // Bindings
    this.animateStats = this.animateStats.bind(this);

    // Scroll animations
    new ScrollMagic.Scene({
      triggerElement: el,
      triggerHook: 'onEnter'
    })
      .on('start', this.animateStats)
      .addTo(ScrollManager.controller);
  }

  /**
   * Animates the stats when they enter the screen
   */
  animateStats() {
    if (!this.hasAnimated) {
      this.stats.forEach((item) => {
        const data = item.textContent.split(/(\d+)/);
        if (data.length) {
          const countUp = new CountUp(item, data[1], {
            prefix: data[0],
            suffix: data[2]
          });
          countUp.start();
        }
      });

      // Prevent animation from running twice
      this.hasAnimated = true;
    }
  }

  /**
   * Initializes all instances on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new Stats(el);
    });
  }
}

module.exports = Stats;
