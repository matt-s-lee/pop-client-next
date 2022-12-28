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
      <Description>
        <h3>What resources are you interested in?</h3>
      </Description>
      <FilterSection>
        <FilterDropdown items={topicArray} title="Topic" />
        <FilterDropdown items={formatArray} title="Format" />
        <FilterDropdown items={supportTypeArray} title="Support Type" />
      </FilterSection>
      <FilterTagSection />
      <FilterResults resources={resources} />
      <Continue />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5em;
  background: lightgrey;
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

const Description = styled.div`
  color: black;
  display: flex;
  justify-content: center;
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