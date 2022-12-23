import styled from "styled-components";
import Suggestion from "./Suggestion";

export default function CommonSuggestions() {
  const commonSuggestions = ["Movement", "Neuroscience", "Podcasts"];
  return (
    <SuggestionUl>
      <b>Common Suggestions</b>
      {commonSuggestions.map((suggestion) => {
        return <Suggestion key={suggestion} suggestion={suggestion} />;
      })}
    </SuggestionUl>
  );
}

const SuggestionUl = styled.ul`
  list-style-type: none;
`;
