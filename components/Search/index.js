import { useState } from "react";

import styled from "styled-components";
import HideComponent from "../../hooks/useHideComponent";

import SearchField from "./SearchField";
import SearchPreview from "./SearchPreview/index.js";

export default function Search({ categories }) {
  const [value, setValue] = useState("");
  const [resultIndex, setResultIndex] = useState(0);
  const [matches, setMatches] = useState();
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);

  // Make list of all categories
  const allCategories = [];
  categories.items.forEach((category) => {
    allCategories.push(category.fields.sectionTitle);
  });
  // console.log("allCategories", allCategories);

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
      {isSuggestionVisible ? (
        <HideComponent
          state={isSuggestionVisible}
          setState={setIsSuggestionVisible}
        >
          <SearchPreview
            value={value}
            setValue={setValue}
            allCategories={allCategories}
          />
        </HideComponent>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  height: 15em;
  z-index: 5;
`;
