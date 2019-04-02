'use strict';

/**
 * The element selector
 * @type {string}
 */
const selector = '.spotlight';

class Spotlight {
  /**
   * Component constructor, sets initial state
   * @param el
   */
  constructor(el) {
    // Elements
    this.el = el;
    this.items = el.querySelectorAll('.spotlight__slide');
    this.wrapper = el.querySelector('.spotlight__slides-wrapper');
    this.prev = el.querySelector('.spotlight__prev');
    this.next = el.querySelector('.spotlight__next');

    // State
    this.slideCount = this.items.length;
    this.activeSlide = 0;

    // Bindings
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.setWrapperWidth = this.setWrapperWidth.bind(this);
    this.setWrapperTransform = this.setWrapperTransform.bind(this);

    // Listeners
    this.prev.addEventListener('click', this.prevSlide);
    this.next.addEventListener('click', this.nextSlide);

    // Initialize
    this.setWrapperWidth();
    this.setWrapperTransform();
  }

  /**
   * Sets active slide to next slide
   */
  nextSlide() {
    const nextSlide = this.activeSlide + 1;

    this.activeSlide = nextSlide < this.slideCount ? nextSlide : 0;
    this.setWrapperTransform();
  }

  prevSlide() {
    const prevSlide = this.activeSlide - 1;

    this.activeSlide = prevSlide >= 0 ? prevSlide : this.slideCount - 1;
    this.setWrapperTransform();
  }

  /**
   * Sets the wrapper width
   */
  setWrapperWidth() {
    this.wrapper.style.width = `calc(${this.slideCount} * (100% + 16px))`;
  }

  /**
   * Sets the wrapper transform
   */
  setWrapperTransform() {
    this.wrapper.style.transform = `translateX(calc(-${
      this.activeSlide
    } * ((100% + 16px) / ${this.slideCount})))`;
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
