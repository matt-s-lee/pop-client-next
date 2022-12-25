import styled from "styled-components";
import FilterDropdown from "./FilterDropdown";
import FilterResults from "./FilterResults";
import FilterTagSection from "./FilterTagSection";

export default function Filter({ topics, resources }) {
  const topicsArray = topics.fields.topicName;

  return (
    <Wrapper>
      <Description>
        <h3>What resources are you interested in?</h3>
      </Description>
      <FilterSection>
        <FilterDropdown items={topicsArray} title="Topics" />
        <FilterDropdown items={topicsArray} title="Format" />
        <FilterDropdown items={topicsArray} title="Support Type" />
      </FilterSection>
      <FilterTagSection />
      <FilterResults resources={resources} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5em;
  background: lightgrey;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
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