import styled from "styled-components";
import Suggestion from "./Suggestion";

export default function MatchedSuggestions() {
  return (
    <SuggestionUl>
      <Suggestion />
    </SuggestionUl>
  );
}

const SuggestionUl = styled.ul`
  list-style-type: none;
`;
