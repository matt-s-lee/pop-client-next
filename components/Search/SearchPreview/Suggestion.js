import styled from "styled-components";

export default function Suggestion({ suggestion }) {
  return <SuggestedLi>{suggestion}</SuggestedLi>;
}

const SuggestedLi = styled.li`
  margin: 0.3em;
  padding: 0.1em;
`;
