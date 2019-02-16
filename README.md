# WitSage Blocks for WordPress


### A collection of WordPress blocks for use with the private WitSage theme framework by [Wit Digital](https://witdelivers.com/).

Documentation exists within the project. todo comments exist throughout with recomendation solutions and resources when possible. An example follows this sentence in the raw code for this README.md file.

[List of Blocks](blocks.MD)

<!--@todo implement https://github.com/apps/todo-->
<!--@todo implement https://docs.travis-ci.com-->

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0.html)
[![Wordpress : 5.1](https://img.shields.io/badge/WordPress-v5.1%20Tested-brightgreen.svg)](https://github.com/WordPress/WordPress)
![](https://img.shields.io/github/issues/ryanemitchell/witsage-blocks.svg?style=flat)

## Overview

This plugin provides a a collection of blocks to be used with the witsage theme. 

All efforts have been made to make regular and dynamic blocks share as much as possible with with Core Wordpress capabilities.  Currently this requires a mix of JS and PHP. The architecture will evolve PHP components to JavaScript as Gutenberg and the Rest API allow. All efforts will be made to make this transition work gracefully, however proper technique will trump backwards compatibility when necessary.

**Base Namespace**: witdigital\witsage_blocks
**Text Domain**: witsageblocks




## Installation

Download, clone or fork into /wp-content/plugins/

```shell
# @ wp-content/plugins/
$ npm install
```
`npm run dev` for development with file watching.
`npm run build` build for production.


## Plugin Structure


```shell
plugins/witsage-blocks/                 # → Root
├── assets/                             # → Shared Assets
│   ├── css/                            # → Build Stylesheets (never edit)
│   │   ├── blocks.editor.css           # → Compiled Editor Stylesheet (never edit)
│   │   ├── blocks.style.css            # → Compiled Frontend Stylesheet (never edit)
│   ├── images/                         # → Shared Images
│   ├── js/                             # → Build JS files (never edit)
│   │   ├── editor.blocks.js            # → Compiled Editor JS (never edit)
│   │   ├── frontend.blocks.js          # → Compiled Frontend JS (never edit)
├── blocks/                             # → Blocks Library
│   ├── frontend.js                     # → Main block loader
│   ├── i18n.js                         # → i18n language config (configured, not used)
│   ├── index.js                        # → Main block loader
│   ├── style.css                       # → Global frontend Styles
│   ├── example-block/                  # → Individual Block (example)
│   │   ├── config.json                 # → Settings for compiled assets
│   │   ├── build/                      # → Webpack and ESLint config
│   │   ├── fonts/                      # → Theme fonts
│   │   ├── images/                     # → Theme images
│   │   ├── scripts/                    # → Theme JS
│   │   └── styles/                     # → Theme stylesheets
│   │   └── resources/                  # → Additional required files (wp exports etc)
├── languages/                          # → i18n language files (configured, not used)
├── lib/                                # → Shared PHP assets and templates
│   ├── witsage-block-functions.php     # → Global functions for blocks
│   ├── enqueue-scripts.php             # → Enqueue Stylesheets and JS
│   ├── dynamic-templates/              # → Templates for wrapping dynamic blocks
    │   │   ├── []                      # → [not yet created]
├── resources/                          # → Stylesheets, Scripts (future images)
│   ├── block_structures/               # → Templates for structures shared between blocks
│   │   ├──  witsage-block-builders.js  # → Block outer structures
│   │   ├──  witsage-block-content.js   # → Block Content wrappers
│   ├── styles/                         # → Stylesheets
│   │   ├──  editor.scss                # → Global editor only styles
│   │   ├──  styles.scss                # → Main Stylesheet (imports only)
│   │   ├──  _development.scss          # → Development styles, debugging etc.
│   │   ├──  _utilities.scss            # → Mixins and other utilities
│   │   ├──  _theme.scss                # → Variables
│   │   ├──  _development.scss          # → Development styles, debugging etc.
│   │   ├──  _block-styles.scss         # → Global block styles
├── node_modules/                       # → Node.js packages (never edit)
├── package.json                        # → Node.js dependencies and scripts
├── webpack.config.js                   # → Webpack configuration
├── .babelrc                            # → Babel configuration
├── .editorconfig                       # → Coding styles, IDE configuration
├── .eslintrc.js                        # → ESLint configuration
```
## Theme Shortcodes and fields used in blocks
<!--@todo add Witsage theme components used in this project.-->

## Naming Conventions

    


## Block Structure


```

<witsage-block witsage-blocks-{blockname} align{blockAlignment} style=textAlign: textAlignment>

    ** block_builders.starter **
    
    <div witsage-block-outer> backgroundColor - backgroundImage
        <div witsage_block_background_overlay>
            <witsage_block_content_wrapper>
                 <witsage_block_content>
    ** block_ui.main

```


### Block attributes

* blockBackground


#####  blockVisibility

Applies [Foundation Visibility class](https://foundation.zurb.com/sites/docs/visibility.html) to outer block div element.  
Values:
    
        


## Dynamic Blocks
### PHP Functions
lib/block_functions.php
#### is_editor_context($verbose)

```
is_editor_context(true)
```

Returns 'true' if server side rendering PHP is being viewed in the editor.

Any value for verbose argument will render the current URL.

-------

## Notes

-------

Editor and linting configurations can be tweaked for your individual needs. Please add appropriate files to your **local** .gitignore if you choose to modify these settings.
 
-------


icons need to be JSX SVG with height and width attributes of 20 defined in thesvg root element. Example:

`<svg height="20" width="20" viewBox="0 0 480 480"  xmlns="http://www.w3.org/2000/svg">`

SVG ➞ JSX Converter:  [https://svg2jsx.herokuapp.com/](https://svg2jsx.herokuapp.com/)

-------

There is what some may consider an overuse of specific element classes applied. This is to allow for more simplified targeting when additional functionality is required from outside this system. e.g. split testing

## References and Resources

Good blocks for studying techniques:
* [Stackable Blocks](https://github.com/gambitph/Stackable)

*  [PHPStorm Settings for Gutenberg ](https://gist.github.com/ryo-utsunomiya/768e68d574faaba40756c0a26800b17d)

* [classnames utility](https://github.com/JedWatson/classnames)


## Roadmap

@todo Implement code splitting similar to the technique used in [Stackable Plugins](https://github.com/gambitph/Stackable/blob/master/src/blocks.js).

@todo Make styling conditional rather than CSS coded into attributes for toggle, radios. etc.

@todo Add support for gutenberg colors: https://richtabor.com/gutenberg-color-palettes/

@todo Add customizer colors to pallette (in themes). https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#block-color-palettes

@todo Optimize and copy images from `resources/images`

@todo Import / Convert libraries and styling from WitSage Theme. ** reduce theme footprint

@todo add make sticky option - choose element and position

@todo add controls for more block content styling - background, flex styles etc. - pull  ideas from SCSS

@todo lazy loading

@todo add theme shortcodes as blocks


## Issues

Issues prior to implementing issue tracking.

**Gutenberg source related:**

Need to manually add block className to Save for regular blocks. 
[https://github.com/WordPress/gutenberg/issues/7308#issuecomment-439944741](https://github.com/WordPress/gutenberg/issues/7308#issuecomment-439944741)

Additional Class not saved - using custom attribute until resolved.
https://github.com/WordPress/gutenberg/issues/9991
