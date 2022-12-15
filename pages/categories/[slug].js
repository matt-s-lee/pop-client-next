import { useRouter } from "next/router";

export default function CategoryPage({ category }) {
  const router = useRouter();
  const slug = router.query.slug;
  const locale = router.locale;

  return <div>{category.fields.sectionTitle[locale]}</div>;
}

export async function getStaticPaths(props) {
  // When in preview environments, don't prerender any static pages
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Get all categories from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=sectionTest&locale=*`
  );
  const categories = await res.json();

  // Create array of slugs from objects, i.e. {locale: slug}
  const allSlugs = [];
  categories.items.forEach((category) => {
    let slugs = Object.values(category.fields.slug);
    slugs.forEach((slug) => {
      allSlugs.push(slug);
    });
  });

  // Get slug paths to prerender
  const paths = allSlugs.map((slug) => {
    return { params: { slug } };
  });
  console.log(paths);

  return {
    paths,
    fallback: false, // All other routes should 404
  };
}

export async function getStaticProps(context) {
  // Get one category from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=sectionTest&locale=*&fields.slug[in]=${context.params.slug}`
  );
  const category = await res.json();

  // "metadata", "sys" and "fields" passed to the page component as props
  return {
    props: { category: category.items[0] },
  };
}
