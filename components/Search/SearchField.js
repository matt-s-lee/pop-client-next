import styled from "styled-components";
import { useRef } from "react";
import useHideComponent from "../../hooks/useHideComponent";

export default function SearchField({
  value,
  setValue,
  handleKeydown,
  setIsSuggestionVisible,
}) {
  return (
    <Wrapper>
      <Input
        placeholder="What do you want to learn about?"
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={handleKeydown}
        onClick={() => setIsSuggestionVisible(true)}
      ></Input>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1em;
`;

const Input = styled.input`
  height: 3em;
  width: 70vw;
  margin-bottom: 1em;
  border-radius: 1em;
  border: none;
  box-shadow: 0px 2px 45px -16px rgba(13, 5, 46, 0.58);
  text-align: center;
`;
