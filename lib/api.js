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
    // Trending topics
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/ZPzKdIT01nuHdRSjwSYiY?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
  ])
    .then(
      ([
        categoriesRes,
        resourcesRes,
        heroRes,
        searchTermsRes,
        tagsRes,
        trendingRes,
      ]) =>
        Promise.all([
          categoriesRes.json(),
          resourcesRes.json(),
          heroRes.json(),
          searchTermsRes.json(),
          tagsRes.json(),
          trendingRes.json(),
        ])
    )
    .then(
      ([
        categoriesJson,
        resourcesJson,
        heroJson,
        searchTermsJson,
        tagsJson,
        trendingJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            resources: resourcesJson,
            hero: heroJson,
            searchTerms: searchTermsJson,
            allTags: tagsJson,
            trendingTopics: trendingJson,
          },
        };
      }
    );
};
