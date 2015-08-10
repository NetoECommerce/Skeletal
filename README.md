# Skeletal

Skeletal is the development theme for Neto. It is the base framework that contains all of our front-end features. Skeletal is built on Bootstrap 3 and needs to be installed on a Neto 5 system to work at all.

<img src="http://design.neto.com.au/assets/uploads/Ch5ATF1S58.jpg" alt="screenshot"/>

## Installation

To install Skeletal you simply need to copy two folders onto your Neto system. You will need FTP access to your Neto website, which you can request [here](http://docs.neto.com.au/designer-documentati/tips-tricks/how-to-connect-to-neto-via-ftp/). 

Copy the following ``skeletal`` folders to the same location on the server:

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

Documentation for designers and developers can be found [here](http://docs.neto.com.au/designer-documentation).

As Skeletal is built almost entirely upon Bootstrap 3, the [Bootstrap documentation](http://getbootstrap.com) is perhaps the most valuable source of documentation for a web designer who isn't looking to build complex functionality.

## Compiling .LESS files

If you are not comfortable working with [LESS](http://lesscss.org/), you are best off writing all CSS in ``httpdocs/assets/themes/skeletal/css/style.css``. Avoid modifying ``app.css`` as you may need to update it at some point.

If you are comfortable with LESS, you're best off developing in you're own less file and adding it to the imports in ``httpdocs/assets/themes/skeletal/css/app/app.less``, which needs to be compiled to ``httpdocs/assets/themes/skeletal/css/app.css``. Alternatively you can work in ``httpdocs/assets/themes/skeletal/css/app/neto/neto.less`` which is already imported.

## Contributing

Feel free to submit issues and pull-requests. Please indent with tabs.

## Testing

We have a testing guide located [here](/testing.md).

## Creators

Skeletal was created by the design and development teams at [Neto E-commerce Solutions](http://neto.com.au).
