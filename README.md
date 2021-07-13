[![Build status](https://badge.buildkite.com/5a56074c3e84be99497d29dced76a15755a02cf00c642e7855.svg)](https://buildkite.com/neto-ecommerce/skeletal)

<img width="407" src="https://design.neto.com.au/assets/uploads/9LEhG1shTr.png">

Skeletal is the development theme for Maropost Commerce Cloud. This theme contains all of our supported front-end features, so we build all new custom websites and themes with Skeletal as the starting point. Skeletal is built on Bootstrap 4.

## Table of content

- [Installation](#installation)
- [Documentation](#documentation)
- [Testing](#testing)
- [Contribute](#contribute)
- [Support](#support)
- [Creators](#creators)

## Installation

**Theme editor**

The safest way to install Skeletal is through Maropost Commerce Cloud's theme store. Go to **Webstore** > **Theme editor** in your Maropost Commerce Cloud control panel, hover over _Skeletal_ and click the green _Install_ button.

**Directly install**

To install the latest version of Skeletal directly from this repository you simply need to upload the `src` directory from this repository into the `httpdocs/assets/themes` directory on your Maropost Commerce Cloud website. You should also rename this new `src` directory to whatever you would like your custom theme to be named. You will want to have ran `npm run build` first so you have the compiled css. 

For the above, you will need FTP access to your Maropost Commerce Cloud website, which you can request [here](http://forms.neto.com.au/design/requestftp.html).

**New theme**

For creating a new Maropost Commerce Cloud theme, you will want to use the [Theme Starter Kit](https://www.npmjs.com/package/ntheme).

## Documentation

Documentation for designers and developers can be found [here](https://developers.neto.com.au/).

As Skeletal is built almost entirely upon Bootstrap 4, the [Bootstrap documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) is perhaps the most valuable source of documentation for a web designer who isn't looking to build complex functionality.

## Compiling .scss files

Skeletal uses [SASS](https://sass-lang.com/) to build its CSS. Our `.scss` files are compiled into `app.css`, avoid modifying `app.css`. Otherwise, if for whatever reason you eventually do need to re-compile the `.scss` files, any changes to `app.css` would be lost. You're best off developing in you're own `.scss` file and adding it to the imports in `src/scss/app.scss`, which needs to be compiled to `src/css/app.css` using Gulp.

If you are compiling `.scss` files for the purpose of contributing to Skeletal, follow these steps:

_Note that steps 1 and 2 only need to be completed once per system, so no need to repeat them again._

1. Install [node.js](https://nodejs.org/),
2. CD into your local folder of Skeletal and run the `npm ci` command to install all relevant dependencies,
3. Run either of these two commands:
    - `npm run build` — this will compile your `.scss` files.
    - `npm run watch` — this will watch your `.scss` files and compile them as they change.

## Testing

We have a simple testing guide located [here](/testing.md).

## Contributing

Contributing to Skeletal is open and welcome, please read the [contribution guidelines here](https://github.com/NetoECommerce/Skeletal/blob/master/CONTRIBUTING.md).

## Support

The current version of Skeletal will only work on websites running Maropost Commerce Cloud 6+. For older websites, you will need to install from a previous [release](https://github.com/NetoECommerce/Skeletal/releases/tag/2.4.0).

### Bootstrap 3

Release `#18.7.0` updated the CSS framework from Bootstrap 3.3.6 to 4.1. We no longer add features to the Bootstrap 3 version of Skeletal, however you can view it by checking out the [`v3` branch](https://github.com/NetoECommerce/Skeletal/tree/v3).

## Creators

Made w/ 🔥 by [Maropost](http://neto.com.au).
