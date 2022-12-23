import styled from "styled-components";
import FilterTag from "./Filter/FilterTag";

export default function Trending() {
  const sampleTags = [
    "pain education",
    "self-directed courses",
    "pain and neuroscience",
  ];
  return (
    <Wrapper>
      <Description>
        <span>Trending</span>
      </Description>
      <TagsWrapper>
        {sampleTags.map((tag) => {
          return <FilterTag key={tag} tag={tag} />;
        })}
      </TagsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* margin: 1.5em; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkblue;
  padding: 0.25em 0;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: center;
`;

const Description = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`;
