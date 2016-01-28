# Skeletal

Skeletal is the development theme for Neto. This theme contains all of our supported front-end features, so we build all new custom websites and themes with Skeletal as the starting point. Skeletal is built on Bootstrap 3.

![screenshot](http://design.neto.com.au/assets/uploads/Ch5ATF1S58.jpg)

## Installation

The safest way to install Skeletal is through Neto's theme store. Go to **Content** > **Website Themes** in your Neto control panel, hover over _Skeletal_ and click the green _Install_ button.

To install the latest version of Skeletal directly from this repository you simply need to copy two folders from this repository onto your Neto system. You will need FTP access to your Neto website, which you can request [here](http://docs.neto.com.au/designer-documentati/tips-tricks/how-to-connect-to-neto-via-ftp/). 

Copy the following `skeletal` folders to the same location on the server:

```
/
├── httpdocs/
│   ├── assets/
│   │   ├── themes/
│   │   │   ├── skeletal/
├── private/
│   ├── www/
│   │   ├── netosuite/
│   │   │   ├── Templates/
│   │   │   │   ├── skeletal/
```

## Documentation

Documentation for designers and developers can be found [here](https://www.neto.com.au/designer-documentation/).

As Skeletal is built almost entirely upon Bootstrap 3, the [Bootstrap documentation](http://getbootstrap.com) is perhaps the most valuable source of documentation for a web designer who isn't looking to build complex functionality.

## Compiling .less files

If you are not comfortable working with [LESS](http://lesscss.org/), you are best off writing all CSS in your own custom CSS file. As our `.less` files are compiled into `app.css`, avoid modifying `app.css`. Otherwise, if for whatever reason you eventually do need to re-compile the less files, any changes to `app.css` would be lost.

If you are comfortable with Less, you're best off developing in you're own less file and adding it to the imports in ``httpdocs/assets/themes/skeletal/css/app.less``, which needs to be compiled to ``httpdocs/assets/themes/skeletal/css/app.css`` using Gulp. See our [Advanced Workflow documentation](https://www.neto.com.au/designer-documentation/developing-a-website-with-neto/advanced-development-workflow/, which helps you start from Skeletal to build your own theme.

If you are compiling `.less` files for the purpose of contributing to Skeletal, follow these steps:

_Note that steps 1 and 2 only need to be completed once per system, so no need to repeat them again._

1. Install [node.js](https://nodejs.org/)
2. Install Gulp globally with `npm install --global gulp` in your terminal
3. CD into your local folder for Skeletal and run the `npm install` command to install all relevant dependencies
4. Run `gulp`—this will now watch your `.less` files and compile them as they change

## Testing

We have a testing guide located [here](/testing.md).

## Creators

Skeletal was created by the design team at [Neto E-commerce Solutions](http://neto.com.au).
