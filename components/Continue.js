import styled from "styled-components";

import { IoChevronDown } from "react-icons/io5";

export default function Continue() {
  return (
    <Wrapper>
      <IoChevronDown fontSize={"3em"} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4em;
  animation: 3s infinite alternate down;

  @keyframes down {
    0% {
      transform: translate(0, 0);
    }
    66% {
      transform: translate(0, 1em);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
