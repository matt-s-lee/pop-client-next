import styled from "styled-components";
import FilterTag from "./FilterTag";

export default function Filter() {
  const sampleTags = ["neuroscience", "movement", "podcasts", "general"];

  return (
    <Wrapper>
      <Description>
        <span>Browse a topic or scroll down to see all information</span>
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
  margin: 1.5em;
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