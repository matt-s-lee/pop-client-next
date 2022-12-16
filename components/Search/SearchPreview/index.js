import styled from "styled-components";
import { useState } from "react";
import CommonSuggestions from "./CommonSuggestions";
import MatchedSuggestions from "./MatchedSuggestions";

export default function SearchPreview({ value, isSuggestionVisible }) {
  return (
    <Wrapper isSuggestionVisible={isSuggestionVisible}>
      {value ? <MatchedSuggestions /> : <CommonSuggestions />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  visibility: ${(props) => (props.isSuggestionVisible ? "visible" : "hidden")};
  position: absolute;
  top: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  border-radius: 1em;
  background: white;
  border: none;
  box-shadow: 0px 2px 45px -16px rgba(13, 5, 46, 0.58);
  padding: 0.5em;
`;
