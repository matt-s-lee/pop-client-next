import styled from "styled-components";
import TrendingTag from "./TrendingTag";
import { editTags } from "../../hooks/useFormatTags";
import { useRouter } from "next/router";

export default function Trending({ trendingTopics }) {
  const router = useRouter();
  const { locale } = router;

  const topicsToDisplay = trendingTopics.fields.trendingTopicName[locale];
  console.log(topicsToDisplay);
  const topicsHash = editTags(topicsToDisplay);
  return (
    <Wrapper>
      <Description>
        <span>{locale === "en-CA" ? "Quick Links" : "Liens rapides"}</span>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a69b5;
  padding: 0.25em 0;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  color: white;
  margin-top: 1em;
  @media only screen and (min-width: 800px) {
    justify-content: center;
    margin-top: 0;
  }
`;
