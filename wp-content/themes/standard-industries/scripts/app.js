'use strict';

require('core-js/modules/es6.promise');
require('core-js/modules/es6.array.iterator');
require('swiped-events');

const Article = require('./modules/article');
const BigLinks = require('./modules/big-links');
const BusinessLinks = require('./modules/business-links');
const ContactForm = require('./modules/contact-form');
const ContactList = require('./modules/contact-list');
const FeatureArticle = require('./modules/feature-article');
const Header = require('./components/header');
const Hero = require('./modules/hero');
const HomepageHero = require('./modules/homepage-hero');
const InfoStack = require('./modules/info-stack');
const Mosaic = require('./modules/mosaic');
const Nav = require('./components/nav');
const News = require('./modules/news');
const NewsList = require('./modules/news-list');
const PageLinks = require('./modules/page-links');
const Press = require('./modules/press');
const Profiles = require('./modules/profiles');
const Quote = require('./modules/quote');
const RelatedArticles = require('./modules/related-articles');
const Search = require('./components/search');
const Services = require('./modules/services');
const Spotlight = require('./modules/spotlight');
const Team = require('./modules/team');
const TeamList = require('./modules/team-list');
const Topic = require('./modules/topic');
const Wysiwyg = require('./modules/wysiwyg');

const modules = [
  Article,
  BigLinks,
  BusinessLinks,
  ContactForm,
  ContactList,
  FeatureArticle,
  Header,
  Hero,
  HomepageHero,
  InfoStack,
  Mosaic,
  Nav,
  News,
  NewsList,
  PageLinks,
  Press,
  Profiles,
  Quote,
  RelatedArticles,
  Search,
  Services,
  Spotlight,
  Team,
  TeamList,
  Topic,
  Wysiwyg
];

// Initialize all modules
modules.forEach((module) => {
  module.init();
});
