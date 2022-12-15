/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-CA", "fr-CA", "en", "fr"], // all supported locales
    defaultLocale: "en-CA", // for non-locale prefixed paths

    // domains: [
    //   {
    //     domain: 'poweroverpain.ca',
    //     defaultLocale: 'en-CA',
    //     locales: ['en'] // locales redirected to this domain
    //   },
    //   {
    //     domain: 'surmontersadouleur.ca',
    //     defaultLocale: 'fr-CA',
    //     locales: ['fr']
    //   },
    // ],
  },
};

module.exports = nextConfig

//localeDetection: false, Next.js will no longer automatically redirect based on the user's preferred locale and will only provide locale information detected from either the locale based domain or locale path as described above.