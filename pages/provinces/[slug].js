import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";
import ClientOnly from "../../components/ClientOnly";
import { createSlugs } from "../../utils/utils";

export default function ProvincePage({ data }) {
  const { province, resources } = data.fields;
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.TABLE]: (node, children) => {
        return (
          <table className="table">
            <tbody>{children}</tbody>
          </table>
        );
      },
    },
  };

  return (
    <ClientOnly>
      <Wrapper>
        <h1>Explore resources in {province}</h1>
        <TableWrapper>
          {documentToReactComponents(resources, options)}
        </TableWrapper>
      </Wrapper>
    </ClientOnly>
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
    // `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber`
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&order=fields.orderNumber&locale=*`
  );
  const json = await res.json();

  // Create array of slugs from objects, i.e. {locale: slug}
  const slugs = createSlugs(json);

  return {
    paths: slugs,
    fallback: false, // All other routes should 404
  };
}

export async function getStaticProps(context) {
  // Get resource cards for this province from Contentful API
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=provinceSpecificResourceList&locale=${context.locale}&fields.slug[in]=${context.params.slug}`
  );
  const json = await res.json();

  // Passed to the CategoryPage component as props
  return {
    props: { data: json.items[0] },
  };
}

const Wrapper = styled.div`
  padding: 1em;
  table,
  th,
  td {
    border: 1px solid;
  }

  td {
    padding: 1em;
  }
`;

const TableWrapper = styled.div`
  margin-top: 1em;
`;