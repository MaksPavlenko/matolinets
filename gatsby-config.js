const { languages, defaultLanguage } = require('./languages');

// require('dotenv').config();
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: `Nunox`,
    description: `Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.`,
    author: `@nunox`,
    siteUrl: `https://www.nunox.co`,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: false,
    FAST_DEV: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/documents/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/works/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [576, 768, 992, 1200, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e2e2e2`,
        theme_color: `#e2e2e2`,
        display: `minimal-ui`,
        icon: `src/images/icons/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`ua`, `en`, `de`, `ru`],
        defaultLanguage: `ua`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://www.nunox.co`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['ua'],
          },
          {
            matchPath: '/preview',
            languages: ['ua'],
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     excludes: ['/**/404', '/**/404.html'],
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //         allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
    //           edges {
    //             node {
    //               context {
    //                 i18n {
    //                   defaultLanguage
    //                   languages
    //                   originalPath
    //                 }
    //               }
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     serialize: ({ site, allSitePage }) => {
    //       return allSitePage.edges.map((edge) => {
    //         const {
    //           languages,
    //           originalPath,
    //           defaultLanguage,
    //         } = edge.node.context.i18n;
    //         const { siteUrl } = site.siteMetadata;
    //         const url = siteUrl + originalPath;
    //         const links = [
    //           { lang: defaultLanguage, url },
    //           { lang: 'x-default', url },
    //         ];
    //         languages.forEach((lang) => {
    //           if (lang === defaultLanguage) return;
    //           links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
    //         });
    //         return {
    //           url,
    //           changefreq: 'daily',
    //           priority: originalPath === '/' ? 1.0 : 0.7,
    //           links,
    //         };
    //       });
    //     },
    //   },
    // },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
