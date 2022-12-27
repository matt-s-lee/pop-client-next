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
    // All support types
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&order=fields.orderNumber`
    ),
    // Hero carousel content
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=carouselImage`
    ),
    // Search terms for filter
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=filterSearchTerms`
    ),
    // Topics for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // Support types for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
  ])
    .then(
      ([
        categoriesRes,
        resourcesRes,
        supportTypesRes,
        heroRes,
        searchTermsRes,
        navBarRes,
        supportNavBarRes,
      ]) =>
        Promise.all([
          categoriesRes.json(),
          resourcesRes.json(),
          supportTypesRes.json(),
          heroRes.json(),
          searchTermsRes.json(),
          navBarRes.json(),
          supportNavBarRes.json(),
        ])
    )
    .then(
      ([
        categoriesJson,
        resourcesJson,
        supportTypesJson,
        heroJson,
        searchTermsJson,
        navBarJson,
        supportNavBarJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            resources: resourcesJson,
            supportTypes: supportTypesJson,
            hero: heroJson,
            searchTerms: searchTermsJson,
            topics: navBarJson,
            supportNavBar: supportNavBarJson,
          },
        };
      }
    );
}
