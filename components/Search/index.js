import { useState } from "react";

import styled from "styled-components";

import SearchField from "./SearchField";
import SearchPreview from "./SearchPreview";

export default function Search() {
  const [value, setValue] = useState("");
  const [resultIndex, setResultIndex] = useState(0);

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
      />
      <SearchPreview value={value} setValue={setValue} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;