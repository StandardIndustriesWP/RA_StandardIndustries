'use strict';

require('core-js/modules/es6.promise');
require('core-js/modules/es6.array.iterator');
require('swiped-events');

const Nav = require('./components/nav');
const Spotlight = require('./modules/spotlight');
const TeamList = require('./modules/team-list');

const modules = [Nav, Spotlight, TeamList];

// Initialize all modules
modules.forEach((module) => {
  module.init();
});
