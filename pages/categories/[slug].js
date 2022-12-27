// import { useRouter } from "next/router";

export default function CategoryPage({ category }) {
  return (
    <>
      <div>
        <>{category.fields.sectionTitle}</>
        <div>{category.fields.description.content[0].content[0].value}</div>
        <div></div>
      </div>
    </>
  );
}

// export async function getStaticPaths({ locales }) {
export async function getStaticPaths() {
  // When in preview environments, don't prerender any static pages
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Fetch all categories in English, from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA`
  );
  const categories = await res.json();

  // Create array of slugs from objects, i.e. {locale: slug}
  const allSlugs = [];
  categories.items.forEach((category) => {
    allSlugs.push(category.fields.slug);
  });

  // Get slug paths to prerender
  const paths = allSlugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false, // All other routes should 404
  };
}

export async function getStaticProps(context) {
  // Get resource cards for this category from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&fields.slug[in]=${context.params.slug}`
  );
  const category = await res.json();

  // Passed to the CategoryPage component as props
  return {
    props: { category: category.items[0] },
  };
}

// console.log("category page props", categories);

// return category.items.map((category) => {
//   return (
//     <div key={category.fields.sectionTitle}>
//       <>{category.fields.sectionTitle}</>
//       <div>{category.fields.description.content[0].content[0].value}</div>
//       <div></div>
//     </div>
//   );
// });

// const [categoryData, setCategoryData] = useState();
// setCategoryData(categories.items);
// const router = useRouter();
// const slug = router.query.slug;
// const locale = router.locale;
