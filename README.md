## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
    - [With `git`](#with-git)
    - [Manual](#manual)
- [Features](#features)
  - [Syntax highlighting](#syntax-highlighting)
  - [Disqus](#disqus)
  - [Google Analytics](#google-analytics)
- [About](#about)
- [License](#license)

  ## Installation

#### With `git`

From the root of your Hugo site, clone the theme into `themes/hugo-sustain-ayntk` by running :
```
cd themes/
git clone https://github.com/altrdev/hugo-sustain-ayntk.git hugo-sustain-ayntk
```

Or use submodule:
```
cd themes/
git submodule add https://github.com/altrdev/hugo-sustain-ayntk.git
```

#### Manual

1. [Download][zip-archive] zip archive.
2. Unarchive it.
3. Move `hugo-sustain-ayntk` folder in `themes` folder of your blog

Hugo includes a development server, so you can view your changes as you go -
very handy. Spin it up with the following command:

``` sh
hugo serve
```

Now you can go to [localhost:1313][local] and the Sustain
theme should be visible.

## Features

### Syntax highlighting

Use `highlight = true` in the front matter to include [`highlight.js`][highlight-js] javascript and css files.

### Disqus

To use this feature, uncomment and fill out the `disqusShortname` parameter in `config.toml`.

### Google Analytics

To add Google Analytics, simply sign up to [Google Analytics][g-analytics] to obtain your Google Tracking ID, and add this tracking ID to the `googleAnalytics` parameter in `config.toml`.

## About

This is a fork of the Hugo theme [Sustain][sustain] by [Nurlan Su][sustain-author].


## License

<p align="center">
  <a href="./LICENSE.md"><img src="https://nurlan.co/cdn/logo.svg" width="100%" height="128"></a>
  <a href="./LICENSE.md"><strong>MIT</strong></a>
</p>

[sustain]: https://github.com/nurlansu/hugo-sustain
[sustain-author]: https://github.com/nurlansu
[zip-archive]: https://github.com/altrdev/hugo-sustain-ayntk/archive/master.zip
[local]: http://localhost:1313/
[highlight-js]: https://highlightjs.org/
[g-analytics]: https://www.google.com/analytics/