import styled from "styled-components";
import ResourceCard from "../../components/ResourceCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { createSlugs } from "../../utils/utils";

export default function CategoryPage({ category, resources }) {
  // Find all the resources in this category
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

  // Renders rich text from Contentful
  const Text = ({ children }) => <p className="margin">{children}</p>;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>;
      },
    },
  };

  return (
    <Wrapper>
      <h1>{category.fields.titleNavBar}</h1>
      <Overview>
        <h2>Overview</h2>
        <div>
          {documentToReactComponents(category.fields.overview, options)}
        </div>
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
                    // imageUrl={
                    //   assetDetails.find((asset) => {
                    //     return asset.sys.id === match.fields.image.sys.id;
                    //   }).fields.file.url
                    // }
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
    // `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=en-CA`
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=*`
  );
  const categories = await res.json();

  const slugs = createSlugs(categories);

  return {
    paths: slugs,
    fallback: false, // All other routes should 404
  };
}

export async function getStaticProps(context) {
  // Get information for this cateogry, via slug
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=categories&locale=${context.locale}&fields.slug[in]=${context.params.slug}`
  );
  const category = await res.json();

  // Get all resources by locale:
  const resourceRes = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=resourceBilingual&locale=${context.locale}&order=fields.resourceOrderNumber`
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
  justify-content: center;
`;

const Overview = styled.div`
  margin: 1em 0;

  .margin {
    margin-bottom: 1em;
  }
`;