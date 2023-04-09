const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]);

module.exports = withTM({
  // -----------------------------------------------------------------
  // Enables MUI with styled components
  // -----------------------------------------------------------------
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
  

  reactStrictMode: true,

  // -----------------------------------------------------------------
  // Rewrite urls from En<->fr
  // eventually route using the following format: 
  // source: 'https://poweroverpain.ca/support/talk-to-a-counsellor',
  // destination: 'https://surmontersadouleur.ca/support/parler-avec-quelqu-un',
  // -----------------------------------------------------------------
  async rewrites() {
    return {
      beforeFiles: [
        // Explore by Support Type
      {
        source: '/fr-CA/support/talk-to-a-counsellor',
        destination: '/fr-CA/support/parler-avec-quelqu-un',
        locale: false,
      },
      {
        source: '/fr-CA/support/connect-with-peer-support',
        destination: '/fr-CA/support/soutien-des-paires',
        locale: false,
      },
      {
        source: '/fr-CA/support/practice-new-skills',
        destination: '/fr-CA/support/developper-de-nouvelles-competences',
        locale: false,
      },
      // Explore by Topic
      {
        source: '/fr-CA/categories/pain-education',
        destination: '/fr-CA/categories/apprendre-sur-la-douleur',
        locale: false,
      },
      {
        source: '/fr-CA/categories/managing-substance-use',
        destination: '/fr-CA/categories/consommation-des-substances',
        locale: false,
      },
      {
        source: '/fr-CA/categories/podcasts',
        destination: '/fr-CA/categories/balados',
        locale: false,
      },
      {
        source: '/fr-CA/categories/sleep',
        destination: '/fr-CA/categories/sommeil',
        locale: false,
      },
      {
        source: '/fr-CA/categories/research',
        destination: '/fr-CA/categories/recherches-scientifiques',
        locale: false,
      },
      {
        source: '/fr-CA/categories/physical-activity-and-movement',
        destination: '/fr-CA/categories/mouvement',
        locale: false,
      },
      {
        source: '/fr-CA/categories/indigenous-healing',
        destination: '/fr-CA/categories/guerison-autochones',
        locale: false,
      },
      {
        source: '/fr-CA/categories/phone-counselling',
        destination: '/fr-CA/categories/soutien-au-telephone', 
        locale: false,
      },
      {
        source: '/fr-CA/categories/get-involved',
        destination: '/fr-CA/categories/impliquez-vous',
        locale: false,
      },
      {
        source: '/fr-CA/categories/neuroscience',
        destination: '/fr-CA/categories/neurosciences',
        locale: false,
      },
      {
        source: '/fr-CA/categories/pain-management-courses',
        destination: '/fr-CA/categories/cours-de-gestion-de-douleur',
        locale: false,
      },
      {
        source: '/categories/cours-de-gestion-de-douleur',
        destination: '/categories/pain-management-courses',
        locale: false,
      },
      // Explore by Province
      {
        source: '/fr-CA/provinces/british-columbia',
        destination: '/fr-CA/provinces/colombie-britannique',
        locale: false,
      },
      {
        source: '/fr-CA/provinces/new-brunswick',
        destination: '/fr-CA/provinces/nouveau-brunswick',
        locale: false,
      },
      {
        source: '/fr-CA/provinces/newfoundland-and-labrador',
        destination: '/fr-CA/provinces/terre-neuve-et-labrador',
        locale: false,
      },
      {
        source: '/fr-CA/provinces/northwest-territories',
        destination: '/fr-CA/provinces/territoires-du-nord-ouest',
        locale: false,
      },
      {
        source: '/fr-CA/provinces/nova-scotia',
        destination: '/fr-CA/provinces/nouvelle-ecosse',
        locale: false,
      },
      {
        source: '/fr-CA/provinces/prince-edward-island',
        destination: '/fr-CA/provinces/ile-du-prince-edouard',
        locale: false,
      }
    ]}
  },

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
    locales: ['en-CA', 'fr-CA'], // all supported locales
    defaultLocale: 'en-CA', // for non-locale prefixed paths

    domains: [
      {
        domain: 'poweroverpain.ca',
        defaultLocale: 'en-CA',
        // locales: ['en'], // locales redirected to this domain
      },
      {
        domain: 'surmontersadouleur.ca',
        defaultLocale: 'fr-CA',
        // locales: ['fr'], // necessary?
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
