import { useRef, useState } from "react";
import useHideComponent from "../../hooks/useHideComponent";

import styled from "styled-components";

import SearchField from "./SearchField";
import SearchPreview from "./SearchPreview/index.js";

export default function Search(props) {
  const [value, setValue] = useState("");
  const [resultIndex, setResultIndex] = useState(0);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);

  const wrapperRef = useRef(null);
  useHideComponent(wrapperRef, isSuggestionVisible, setIsSuggestionVisible);

  // When users hit enter or up/down-arrow while typing
  const handleKeydown = (ev) => {
    switch (ev.key) {
      case "Enter": {
        handleSelect(ev, resultIndex);
        return;
      }
      case "ArrowUp": {
        setResultIndex(resultIndex - 1);
        return;
      }
      case "ArrowDown": {
        setResultIndex(resultIndex + 1);
        return;
      }
      default: {
        return;
      }
    }
  };

  // When users hit "enter" while typing, or click on a search result
  const handleSelect = (ev) => {};

  return (
    <Wrapper>
      <SearchField
        value={value}
        setValue={setValue}
        handleKeydown={handleKeydown}
        isSuggestionVisible={isSuggestionVisible}
        setIsSuggestionVisible={setIsSuggestionVisible}
      />
      {/* <SearchPreview
        value={value}
        setValue={setValue}
        isSuggestionVisible={isSuggestionVisible}
      /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;
