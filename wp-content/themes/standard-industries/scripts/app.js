'use strict';

require('core-js/modules/es6.promise');
require('core-js/modules/es6.array.iterator');
require('swiped-events');

const BigLinks = require('./modules/big-links');
const BusinessLinks = require('./modules/business-links');
const ContactForm = require('./modules/contact-form');
const ContactList = require('./modules/contact-list');
const FeatureArticle = require('./modules/feature-article');
const Header = require('./components/header');
const HomepageHero = require('./modules/homepage-hero');
const InfoStack = require('./modules/info-stack');
const Nav = require('./components/nav');
const Press = require('./modules/press');
const Search = require('./components/search');
const Spotlight = require('./modules/spotlight');
const TeamList = require('./modules/team-list');

const modules = [
  BigLinks,
  BusinessLinks,
  ContactForm,
  ContactList,
  FeatureArticle,
  Header,
  HomepageHero,
  InfoStack,
  Nav,
  Press,
  Search,
  Spotlight,
  TeamList
];

// Initialize all modules
modules.forEach((module) => {
  module.init();
});
