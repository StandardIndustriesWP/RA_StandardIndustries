'use strict';

const { MAX_WIDTH_MD } = require('../util/constants');

/**
 * The element selector
 * @type {string}
 */
const selector = '.global-nav';

class Nav {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Elements
    this.el = el;
    this.triggers = el.querySelectorAll('.menu__trigger');
    this.panels = el.querySelectorAll('.sub-menu');

    // State
    this.renderWidth = window.innerWidth;

    // Listeners
    window.addEventListener('resize', this.resize, false);

    // Bindings
    this.togglePanel = this.togglePanel.bind(this);

    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.togglePanel(trigger));
    });
  }

  /**
   * Toggles a nav menu panel
   * @param trigger
   */
  togglePanel(trigger) {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = this.el.querySelector(`#${panelId}`);
    const expanded = trigger.getAttribute('aria-expanded');

    // Open this panel
    trigger.setAttribute('aria-expanded', expanded === 'false' ? 'true' : 'false');
    trigger.classList.toggle('.menu__trigger--expanded');
    panel.classList.toggle('sub-menu--expanded');
  }

  /**
   * Updates the component when viewport size changes
   */
  resize() {
    if (
      (this.renderWidth <= MAX_WIDTH_MD && window.innerWidth > MAX_WIDTH_MD) ||
      (this.renderWidth > MAX_WIDTH_MD && window.innerWidth <= MAX_WIDTH_MD)
    ) {
      this.renderWidth = window.innerWidth;
    }
  }

  /**
   * Initializes all spotlights on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new Nav(el);
    });
  }
}

module.exports = Nav;
