import styled from "styled-components";

export default function Footer() {
  return <Wrapper>Footer Text</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4em;
  background: black;
  color: white;
  padding-left: 1em;
`;
