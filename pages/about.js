import styled from "styled-components";
import Logo from "../components/Logo";

export default function About({ data }) {
  const allInfo = data.items[0];
  const assetDetails = data.includes.Asset;
  console.log(assetDetails);

  return (
    <Wrapper>
      <h1>About</h1>
      <Section>
        <h2>Who we are</h2>
        <p>{allInfo.fields.aboutUsText}</p>
      </Section>
      <Section>
        <h2>Our partners</h2>
        <LogosWrapper>
          {allInfo.fields.aboutUsLogos.map((logo) => {
            return (
              <Logo key={logo.sys.id} logo={logo} assetDetails={assetDetails} />
            );
          })}
        </LogosWrapper>
      </Section>
    </Wrapper>
  );
}

export async function getStaticProps(context) {
  // Get about us information
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=aboutUsInfo`
  );
  const json = await res.json();

  // Passed to the CategoryPage component as props
  return {
    props: { data: json },
  };
}

const Wrapper = styled.div`
  padding: 1em;
`;

const Section = styled.div`
  margin: 1em 0;
`;

const LogosWrapper = styled.div``;

