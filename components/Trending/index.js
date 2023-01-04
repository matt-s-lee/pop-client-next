import styled from "styled-components";
import TrendingTag from "./TrendingTag";
import { editTags } from "../../hooks/useFormatTags";

export default function Trending({ trendingTopics }) {
  const topicsToDisplay = trendingTopics.fields.trendingTopicName;
  const topicsHash = editTags(topicsToDisplay);
  return (
    <Wrapper>
      <Description>
        <span>Quick Links</span>
      </Description>
      <TagsWrapper>
        {topicsToDisplay?.map((topic, index) => {
          return (
            <TrendingTag key={topic} topic={topic} hash={topicsHash[index]} />
          );
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
  background: #0a69b5;
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
