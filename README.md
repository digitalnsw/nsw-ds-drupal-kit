# NSW Design System Drupal Kit

NSW Design System Drupal Kit is a dev starter kit for starting a Drupal 9 site using the [NSW Design System theme](https://github.com/digitalnsw/nsw-design-system).

View the demo [here](https://dev-drupal-dev-kit-demo.pantheonsite.io)

## Table of Contents

- [Local Development](#local-development)
- [Installing theme](#installing-theme)
- [Front end build](#front-end-build)
- [Support](#support)

## Local Development


1. Download DDEV
    ```
    curl -L https://raw.githubusercontent.com/drud/ddev/master/scripts/install_ddev.sh | bash
    ```
    For more info on installing [DDEV](https://ddev.readthedocs.io/en/stable/)
2. Run starter kit
    ```sh
    ddev start
    ```
    Note: You need to have Docker installed to run DDEV. If you don't get the Docker community version [here](https://hub.docker.com/search?type=edition&offering=community)

    Local URL: https://nsw-ds-drupal-kit.ddev.site/

3. Install Drupal
    ```
    ddev exec drush site-install --account-name=admin --account-pass=my-password
    ```

## Installing theme
Once logged in to Drupal admin, go to Appearance, and install the NSW Design System. Set the theme as default.

The theme will automatically assign the standard blocks in the theme's regions.


### Theme regions:
  - Header
  - Header Center
  - Banner
  - Breadcrumb
  - Content
  - Sidenav Left
  - Sidenav Right
  - Content Bottom
  - Featured Bottom
  - Footer Upper
  - Footer Text
  - Footer Lower


## Front End Build

To update the NSW Design System, run:
```sh
cd fe-src
npm install
npm run build
```

Extending the NSW Design System
In the fe-src folder, you can write or import your own js/scss files as you build new components and templates.


```
fe-src
│
└───js
│    main.js
└───scss
     main.scss
```
fe-srce/scss/main.scss
```css
@import 'node_modules/nsw-design-system/src/main.scss';

/* Add you imports here */
```

## Support

Please [open an issue](https://github.com/digitalnsw/NSW-DS-Drupal-Kit/issues) for support.

