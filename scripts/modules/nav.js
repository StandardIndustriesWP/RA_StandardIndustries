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
    this.getPanelFromTrigger = this.getPanelFromTrigger.bind(this);
    this.getTriggerFromPanel = this.getTriggerFromPanel.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => this.togglePanel(trigger));
    });
    this.panels.forEach((panel) => {
      const trigger = this.getTriggerFromPanel(panel);

      panel.addEventListener('mouseout', () => this.closePanel(trigger));
    });
  }

  /**
   * Gets the panel node from the trigger node
   * @param trigger
   * @returns {Element | any}
   */
  getPanelFromTrigger(trigger) {
    const panelId = trigger.getAttribute('aria-controls');
    return this.el.querySelector(`#${panelId}`);
  }

  /**
   * Gets the trigger node from the panel node
   * @param panel
   * @returns {Element | any}
   */
  getTriggerFromPanel(panel) {
    const triggerId = panel.getAttribute('aria-labelledby');
    return this.el.querySelector(`#${triggerId}`);
  }

  /**
   * Toggles a nav menu panel
   * @param trigger
   */
  togglePanel(trigger) {
    const panel = this.getPanelFromTrigger(trigger);
    const expanded = trigger.getAttribute('aria-expanded');

    // Open this panel
    trigger.setAttribute(
      'aria-expanded',
      expanded === 'false' ? 'true' : 'false'
    );
    trigger.classList.toggle('.menu__trigger--expanded');
    panel.classList.toggle('sub-menu--expanded');

    // Close other panels
    this.triggers.forEach((current) => {
      if (current !== trigger) {
        this.closePanel(current);
      }
    });
  }

  closePanel(trigger) {
    const panel = this.getPanelFromTrigger(trigger);

    trigger.setAttribute('aria-expanded', 'false');
    trigger.classList.remove('menu__trigger--expanded');
    panel.classList.remove('sub-menu--expanded');
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
