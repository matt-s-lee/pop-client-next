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
        <DecorativeDiv />
        <SecondDecorativeDiv />
        <ThirdDecorativeDiv />
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
  position: absolute;
  top: 10em;
  left: -10em;
  background: #f26d9d;
  height: 9em;
  width: 30em;
  border-radius: 60%;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
`;

const SecondDecorativeDiv = styled.div`
  position: absolute;
  top: -4em;
  left: 45em;
  background: #fcc4d8;
  height: 10em;
  width: 30em;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 0px rgba(87, 87, 87, 0.62);
`;

const ThirdDecorativeDiv = styled.div`
  position: absolute;
  top: 5em;
  left: 55em;
  background: #f64c5e;
  height: 30em;
  width: 30em;
  border-radius: 50%;
  box-shadow: 1px 3px 12px 0px rgba(87, 87, 87, 0.62);
`;

const Description = styled.div`
  text-align: center;
  color: #333333;
  z-index: 2;
  position: relative;
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