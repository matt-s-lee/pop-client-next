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
        <DecorativeDiv />
        <Description>
          <Title>What support are you interested in today?</Title>
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
        <SecondDecorativeDiv />
      </SubWrapper>
      <FilterResults resources={resources} />
      <Continue />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2em;
  padding: 1.5em;
`;

const SubWrapper = styled.div`
  border-radius: 1em;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
  padding: 1em;
  background: white;
  background: #f2efd5;
  position: relative;
  overflow: hidden;
`;

const DecorativeDiv = styled.div`
  background: #f26d9d;
  height: 9em;
  width: 30em;
  border-radius: 60%;
  position: absolute;
  top: 10em;
  left: -10em;
`;

const SecondDecorativeDiv = styled.div`
  top: -4em;
  left: 38em;
  background: #edb8cb;
  height: 10em;
  width: 30em;
  border-radius: 50%;
  position: absolute;
`;

const Description = styled.div`
  text-align: center;
  color: #333333;
  z-index: 2;
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

const Title = styled.h2`
  color: black;
`;

const Tagline = styled.h3`
  margin: 1em 0;
  font-weight: 400;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 1em 0;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
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