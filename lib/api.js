// export default async function fetchHomeData() {
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
    // Topics for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // Support types for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // Tags
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/tags?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // Provincial resource lists
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
    ),
  ])
    .then(
      ([
        categoriesRes,
        resourcesRes,
        supportTypesRes,
        heroRes,
        searchTermsRes,
        topicsRes,
        supportTypeNav,
        tagsRes,
        provincialResourcesRes,
      ]) =>
        Promise.all([
          categoriesRes.json(),
          resourcesRes.json(),
          supportTypesRes.json(),
          heroRes.json(),
          searchTermsRes.json(),
          topicsRes.json(),
          supportTypeNav.json(),
          tagsRes.json(),
          provincialResourcesRes.json(),
        ])
    )
    .then(
      ([
        categoriesJson,
        resourcesJson,
        supportTypesJson,
        heroJson,
        searchTermsJson,
        topicsJson,
        supportTypeNavJson,
        tagsJson,
        provincialResourcesJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            resources: resourcesJson,
            supportTypes: supportTypesJson,
            hero: heroJson,
            searchTerms: searchTermsJson,
            topics: topicsJson,
            supportTypesNav: supportTypeNavJson,
            allTags: tagsJson,
            provincialResources: provincialResourcesJson,
          },
        };
      }
    );
};

export const fetchNavBarData = async () => {
  return Promise.all([
    // Categories (in order)
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&order=fields.categoryOrderNumber`
    ),
    // Topics for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/6mA0dNkT5wRCCpEgOIWvlG?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // Support types for navigation bar
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/IHIT9WDkE1WaV5nnszNLP?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
    ),
    // All support types
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&order=fields.orderNumber`
    ),
    // Provincial resource lists
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
    ),
  ])
    .then(
      ([
        categoriesRes,
        topicsRes,
        supportTypesRes,
        supportTypesNavRes,
        provincialResourcesRes,
      ]) =>
        Promise.all([
          categoriesRes.json(),
          topicsRes.json(),
          supportTypesRes.json(),
          supportTypesNavRes.json(),
          provincialResourcesRes.json(),
        ])
    )
    .then(
      ([
        categoriesJson,
        topicsJson,
        supportTypesJson,
        supportTypesNavJson,
        provincialResourcesJson,
      ]) => {
        return {
          props: {
            categories: categoriesJson,
            topics: topicsJson,
            supportTypes: supportTypesJson,
            supportTypesNav: supportTypesNavJson,
            provincialResources: provincialResourcesJson,
          },
        };
      }
    );
};

//  topics,
//   categories,
//   supportTypesNav,
//   supportTypes,
