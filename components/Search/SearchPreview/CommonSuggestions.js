import styled from "styled-components";
import Suggestion from "./Suggestion";

export default function CommonSuggestions() {
  return (
    <SuggestionUl>
      Common Suggestions
      <Suggestion />
    </SuggestionUl>
  );
}

const SuggestionUl = styled.ul`
  list-style-type: none;
`;
