import styled from "styled-components";
import FilterTag from "./FilterTag";

export default function Filter() {
  const sampleTags = ["neuroscience", "movement", "podcasts", "general"];

  return (
    <Wrapper>
      <span>Browse a topic or check out what's trending</span>
      <TagsWrapper>
        {sampleTags.map((tag) => {
          return <FilterTag key={tag} tag={tag} />;
        })}
      </TagsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
