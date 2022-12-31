export const fetchHomeData = async () => {
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
    // Tags
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/tags?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
  ])
    .then(
      ([
        categoriesRes,
        resourcesRes,
        supportTypesRes,
        heroRes,
        searchTermsRes,
        tagsRes,
      ]) =>
        Promise.all([
          categoriesRes.json(),
          resourcesRes.json(),
          supportTypesRes.json(),
          heroRes.json(),
          searchTermsRes.json(),
          tagsRes.json(),
        ])
    )
    .then(
      ([
        categoriesJson,
        resourcesJson,
        supportTypesJson,
        heroJson,
        searchTermsJson,
        tagsJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            resources: resourcesJson,
            supportTypes: supportTypesJson,
            hero: heroJson,
            searchTerms: searchTermsJson,
            allTags: tagsJson,
          },
        };
      }
    );
};
