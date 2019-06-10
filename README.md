# Standard Industries

The Standard Industries WordPress theme, built using [Timber](https://timber.github.io/docs/) and [Advanced Custom Fields](https://www.advancedcustomfields.com/).

## Installing the Theme

Please make sure the Advanced Custom Fields PRO and Timber plugins are both present before activating the Standard Industries theme.

## Important Notes

- Theme completely disables all comments on the WordPress backend and frontend
- Theme registers custom post and custom field types from within `functions.php`

## Development

The SI theme CSS and JS is compiled using [Gulp](https://gulpjs.com/), [Babel](https://babeljs.io/), and [Browserify](http://browserify.org/).

To begin development, first install `package.json` using [Yarn](https://yarnpkg.com/en/) by running:

```
yarn install
```

To watch for and compile changes to CSS or JS, start Gulp by running:

```
yarn gulp-watch
```

[ESLint](https://eslint.org/) is used on this project. Gulp will throw compilation errors when JS does not conform to ESLint standards.

[Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/) are also implemented to help with code consistency. Prettier formatting can be executed by running `yarn prettier` and Stylelint can be executed by running `yarn stylelint`. Since these commands are generally run in tandem a single "formatting" script has been added to run both at once:

```
yarn format
```

## ACF Modules

All Advance Custom Fields Page modules are contained within the `modules/` folder and are loaded via the `utils/modules.php` class within `functions.php`.

Other custom field sets are loaded from the `fields/` folder.

## Templates / SCSS / JSS

Timber templates are contained within the `templates/` folder, with module-specific templates placed in `templates/modules/`. All ACF modules in the `modules/` folder will need to have a corresponding `templates/modules/` twig file to properly load.

CSS is scoped using [BEM](http://getbem.com/) naming conventions, is written in [SCSS](https://sass-lang.com/) and later compiled to CSS by Gulp. Each module has a corresponding SCSS file in the `styles/modules/` folder.

JS is also compiled using Gulp, with modules and components being loaded within the `scripts/app.js` entry-point. Each module that requires JS to run properly has a corresponding ES6 Class within the `scripts/modules/` folder.

No vendor frameworks are used for this theme and `package.json` vendor scripts are compiled by Babelify.

Scroll transitions are managed by [ScrollMagic](http://scrollmagic.io/) with a singleton container loaded from `scripts/utils/scroll-manager.js`.

## Committing Changes

All CSS and JS is compiled to the `dist/` folder in the root of the Standard Industries theme. The contents of this folder are tracked and should be committed to push any front-end changes to live instances of the site.