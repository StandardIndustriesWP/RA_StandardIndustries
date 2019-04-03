'use strict';

require('core-js/modules/es6.promise');
require('core-js/modules/es6.array.iterator');
require('swiped-events');

const Spotlight = require('./modules/spotlight');

const modules = [Spotlight];

// Initialize all modules
modules.forEach((module) => {
  module.init();
});
