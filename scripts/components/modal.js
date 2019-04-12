'use strict';

/**
 * The element selector
 * @type {string}
 */
const selector = '.modal';

/**
 * Finds the focusable children of a DOM element
 * @param el
 * @returns {NodeListOf<SVGElementTagNameMap[[string]]> | NodeListOf<HTMLElementTagNameMap[[string]]> | NodeListOf<Element>}
 */
function getFocusableChildren(el) {
  const focusableSelector =
    'a:not([disabled]), button:not([disabled]), input:not([disabled]), select';

  return el.querySelectorAll(focusableSelector);
}

class Modal {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Elements
    this.el = el;
    this.content = el.querySelector('.modal__content');
    this.openTrigger = el.querySelector('.modal__open');
    this.closeTrigger = el.querySelector('.modal__close');
    this.focusStart = el.querySelector('.modal__focus-start');
    this.focusEnd = el.querySelector('.modal__focus-end');

    // State
    this.open = false;

    // Listeners
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    });

    // Bindings
    this.closeModal = this.closeModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleReverseFocus = this.handleReverseFocus.bind(this);
    this.restartFocus = this.restartFocus.bind(this);
    this.openTrigger.addEventListener('click', this.toggleModal);
    this.closeTrigger.addEventListener('click', this.toggleModal);
    this.focusStart.addEventListener('focus', this.handleReverseFocus);
    this.focusEnd.addEventListener('focus', this.restartFocus);
  }

  /**
   * Closes the modal
   */
  closeModal() {
    if (open) {
      this.open = false;
      this.content.classList.remove('modal__content--open');
      document.body.classList.remove('modal--open');
      this.openTrigger.focus();
    }
  }

  /**
   * Toggles the modal visibility
   */
  toggleModal() {
    this.open = !this.open;
    this.content.classList.toggle('modal__content--open');
    document.body.classList.toggle('modal--open');

    if (this.open) {
      this.closeTrigger.focus();
    } else {
      this.openTrigger.focus();
    }
  }

  /**
   * Sets focus on the last element that focus came from
   * @param e
   */
  handleReverseFocus(e) {
    const focusableElements = getFocusableChildren(this.content);

    if (e.relatedTarget === focusableElements[0]) {
      const lastFocusable = focusableElements[focusableElements.length - 1];

      lastFocusable.focus();
    }
  }

  /**
   * Focuses the first focusable element on the modal
   */
  restartFocus() {
    const focusableElements = getFocusableChildren(this.content);
    const firstFocusable = focusableElements[0];

    firstFocusable && firstFocusable.focus();
  }

  /**
   * Initializes all spotlights on a page
   */
  static init() {
    const modules = document.querySelectorAll(selector);

    modules.forEach((el) => {
      new Modal(el);
    });
  }
}

module.exports = Modal;
