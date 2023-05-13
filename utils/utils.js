export function createSlugs(apiData) {
  const slugs = apiData.items
    .map((item) => {
      return item.fields.slug;
    })
    .reduce((acc, category) => {
      acc.push([
        { params: { slug: category["en-CA"] }, locale: "en-CA" },
        { params: { slug: category["fr-CA"] }, locale: "fr-CA" },
      ]);
      return acc;
    }, [])
    .flat();
  return slugs;
}

export function findCorrespondingUrl(data, locale, slug) {
  const urlPair = data.urls.find((obj) => Object.values(obj).includes(slug));
  if (urlPair) {
    if (locale === "fr-CA") {
      return urlPair["en-CA"];
    } else {
      return urlPair["fr-CA"];
    }
  } else {
    return "/404";
  }
}
