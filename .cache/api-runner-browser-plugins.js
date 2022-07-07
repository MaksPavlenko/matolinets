module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#e2e2e2","theme_color":"#e2e2e2","display":"minimal-ui","icon":"src/images/icons/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f39f757900ba72cd76452620921e681b"},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"localeJsonSourceName":"locale","languages":["ua","en","de","ru"],"defaultLanguage":"ua","siteUrl":"https://www.nunox.co","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["ua"]},{"matchPath":"/preview","languages":["ua"]}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
