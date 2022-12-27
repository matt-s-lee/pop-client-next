// import { useRouter } from "next/router";

import Layout from "../../components/Layout";

export default function ProvincePage() {
  return (
    <>
      {/* <div>
        <>{category.fields.sectionTitle}</>
        <div>{category.fields.description.content[0].content[0].value}</div>
        <div></div>
      </div> */}
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
  // const res = await fetch(
  //   `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA`
  // );
  // const categories = await res.json();

  // Create array of slugs from objects, i.e. {locale: slug}
  // const allSlugs = [];
  // categories.items.forEach((category) => {
  //   allSlugs.push(category.fields.slug);
  // });
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  // Get slug paths to prerender
  const paths = provinces.map((slug) => {
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
