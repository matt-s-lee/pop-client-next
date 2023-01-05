import styled from "styled-components";
import ResourceCard from "../../components/ResourceCard";

export default function SupportTypePage({ supportType, resources }) {
  // Create array of resources with a specific tag
  const tag = supportType.metadata.tags[0].sys.id;
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
      <h1>{supportType.fields.supportTypeName}</h1>
      <ResourceWrapper>
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
      </ResourceWrapper>
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
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&locale=en-CA`
  );
  const supportTypes = await res.json();

  // Create array of slugs from objects, i.e. {locale: slug}
  const slugs = supportTypes.items.map((supportType) => {
    return supportType.fields.slug;
  });

  // Get slug paths to prerender
  const paths = slugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false, // All other routes should 404
  };
}

export async function getStaticProps(context) {
  // Get description for this support type (via slug)
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=supportType&locale=en-CA&fields.slug[in]=${context.params.slug}`
  );
  const json = await res.json();

  // Get all resources
  const resourceRes = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=resourceBilingual&locale=en-CA&order=fields.resourceOrderNumber`
  );
  const resourceJson = await resourceRes.json();

  // Passed to the CategoryPage component as props
  return {
    props: { supportType: json.items[0], resources: resourceJson }, // should only be one result, because all slugs unique
  };
}

const Wrapper = styled.div`
  padding: 1em;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
