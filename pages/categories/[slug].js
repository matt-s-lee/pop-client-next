import styled from "styled-components";
import ResourceCard from "../../components/ResourceCard";

export default function CategoryPage({ category, resources }) {
  const tag = category.metadata.tags[0].sys.id;
  const assetDetails = resources.includes.Asset;
  let matchedResources = [];
  if (tag) {
    resources?.items?.forEach((resource) => {
      if (resource.metadata.tags.find((object) => object.sys.id === tag)) {
        matchedResources.push(resource);
      }
    });
  }

  return (
    <Wrapper>
      <h1>{category.fields.titleNavBar}</h1>
      <Overview>
        <h2>Overview</h2>
        <p>{category?.fields?.description?.content[0]?.content[0]?.value}</p>
      </Overview>
      <div>
        <h2>Resources</h2>
        <ResourcesWrapper>
          {matchedResources &&
            matchedResources.map((match) => {
              if (match.fields.image) {
                return (
                  <ResourceCard
                    key={match.sys.id}
                    title={match.fields.title}
                    link={match.fields.link}
                    description={
                      match?.fields?.descriptionForSmallCard?.content[0]
                        ?.content[0]?.value
                    }
                    imageUrl={
                      assetDetails.find((asset) => {
                        return asset.sys.id === match.fields.image.sys.id;
                      }).fields.file.url
                    }
                    tags={match.metadata.tags}
                  />
                );
              } else {
                return <></>;
              }
            })}
        </ResourcesWrapper>
      </div>
    </Wrapper>
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
  // Get category name from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA&fields.slug[in]=${context.params.slug}`
  );
  const category = await res.json();

  // Get all resources
  const resourceRes = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=resourceBilingual&locale=en-CA&order=fields.resourceOrderNumber`
  );
  const resourceJson = await resourceRes.json();

  // Passed to the CategoryPage component as props
  return {
    props: { category: category.items[0], resources: resourceJson },
  };
}

const Wrapper = styled.div`
  padding: 1em;
`;

const ResourcesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Overview = styled.div`
  margin: 1em 0;
`;

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
