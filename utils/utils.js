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
