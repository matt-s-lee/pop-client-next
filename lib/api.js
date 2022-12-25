export default async function fetchAllData() {
  return Promise.all([
    // Categories (in order)
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&order=fields.categoryOrderNumber`
    ),
    // All resources (in order)
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=resourceBilingual&order=fields.resourceOrderNumber`
    ),
    // Hero carousel content
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=carouselImage`
    ),
    // Banner content
    // Search terms for filter
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=filterSearchTerms`
    ),
    // Topics for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
  ])
    .then(([categoriesRes, resourcesRes, heroRes, searchTermsRes, navBarRes]) =>
      Promise.all([
        categoriesRes.json(),
        resourcesRes.json(),
        heroRes.json(),
        searchTermsRes.json(),
        navBarRes.json(),
      ])
    )
    .then(
      ([
        categoriesJson,
        resourcesJson,
        heroJson,
        searchTermsJson,
        navBarJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            resources: resourcesJson,
            hero: heroJson,
            searchTerms: searchTermsJson,
            topics: navBarJson,
          },
        };
      }
    );
}
