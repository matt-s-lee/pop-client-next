import styled from "styled-components";
import Continue from "./Continue";
import FilterDropdown from "./FilterDropdown";
import FilterResults from "./FilterResults";
import FilterTagSection from "./FilterTagSection";

// Props from /pages/index.js
export default function Filter({ searchTerms, resources }) {
  let topicArray,
    supportTypeArray,
    formatArray = [];
  searchTerms.items.forEach((entry) => {
    switch (entry.fields.termType) {
      case "Topic":
        topicArray = entry.fields.listOfTerms;
        break;
      case "Format":
        formatArray = entry.fields.listOfTerms;
        break;
      case "Support Type":
        supportTypeArray = entry.fields.listOfTerms;
        break;
    }
  });

  return (
    <Wrapper>
      <SubWrapper>
        <Description>
          <h2>What support are you interested in today?</h2>
          <Tagline>
            Find resources and programs to help you manage your chronic pain
          </Tagline>
        </Description>
        <FilterSection>
          <FilterDropdown items={topicArray} title="Topic" />
          <FilterDropdown items={formatArray} title="Format" />
          <FilterDropdown items={supportTypeArray} title="Support Type" />
        </FilterSection>
        <FilterTagSection />
      </SubWrapper>
      <FilterResults resources={resources} />
      <Continue />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5em;
`;

const SubWrapper = styled.div`
  border-radius: 1em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
  padding: 1em;
  background: white;
`;

const Description = styled.div`
  color: black;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

const Tagline = styled.h3`
  margin: 1em 0;
  font-weight: 400;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;

  @media only screen and (min-width: 650px) {
    justify-content: center;
    margin: none;
  }
`;



      // {/* <TagsWrapper>
      //   {sampleTags.map((tag) => {
      //     return <FilterTag key={tag} tag={tag} />;
      //   })}
      // </TagsWrapper> */}
// const TagsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   padding: 1em;
//   justify-content: center;
// `;