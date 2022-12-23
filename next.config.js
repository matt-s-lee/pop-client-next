const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },

  reactStrictMode: true,

  // -----------------------------------------------------------------
  // Configure external images stored in Contentful database
  // -----------------------------------------------------------------
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
  // -----------------------------------------------------------------
  // Enables the styled-components SWC transform (https://stackoverflow.com/questions/51791163/warning-prop-classname-did-not-match-when-using-styled-components-with-seman)
  // -----------------------------------------------------------------
  compiler: {
    styledComponents: true,
  },

  // -----------------------------------------------------------------
  // Configures locales and language settings
  // -----------------------------------------------------------------
  i18n: {
    locales: ['en-CA', 'fr-CA', 'en', 'fr'], // all supported locales
    defaultLocale: 'en-CA', // for non-locale prefixed paths

    domains: [
      {
        domain: 'poweroverpain.ca',
        defaultLocale: 'en-CA',
        locales: ['en'], // locales redirected to this domain
      },
      {
        domain: 'surmontersadouleur.ca',
        defaultLocale: 'fr-CA',
        locales: ['fr'],
      },
    ],
    localeDetection: false,
    //Next.js will no longer automatically redirect
    //based on the user's preferred locale and will only provide locale information
    //detected from either the locale based domain or locale path as described above.
  },
});

// const nextConfig = {
//   reactStrictMode: true,

//   // -----------------------------------------------------------------
//   // Configure external images stored in Contentful database
//   // -----------------------------------------------------------------
//   images: {
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.ctfassets.net",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
//   // -----------------------------------------------------------------
//   // Enables the styled-components SWC transform (https://stackoverflow.com/questions/51791163/warning-prop-classname-did-not-match-when-using-styled-components-with-seman)
//   // -----------------------------------------------------------------
//   compiler: {
//     styledComponents: true,
//   },
// };
// module.exports = nextConfig;
// // -----------------------------------------------------------------
// // Replaces emotion style-engine with styled components (for MUI)
// // -----------------------------------------------------------------

// const withTM = require("next-transpile-modules")([
//   "@mui/material",
//   "@mui/system",
// ]);

// module.exports = withTM({
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@mui/styled-engine": "@mui/styled-engine-sc",
//     };
//     return config;
//   },
// });

// module.exports = {
//     // -----------------------------------------------------------------
//   // Configures locales and language settings
//   // -----------------------------------------------------------------
//   i18n: {
//     locales: ['en-CA', 'fr-CA', 'en', 'fr'], // all supported locales
//     defaultLocale: 'en-CA', // for non-locale prefixed paths

//     domains: [
//       {
//         domain: 'poweroverpain.ca',
//         defaultLocale: 'en-CA',
//         locales: ['en'], // locales redirected to this domain
//       },
//       {
//         domain: 'surmontersadouleur.ca',
//         defaultLocale: 'fr-CA',
//         locales: ['fr'],
//       },
//     ],
//     localeDetection: false,
//     //Next.js will no longer automatically redirect
//     //based on the user's preferred locale and will only provide locale information
//     //detected from either the locale based domain or locale path as described above.
//   },
// }
