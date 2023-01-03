import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <h1>About</h1>
      <Text>Text</Text>
      <Logos>Logos</Logos>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em;
`;

const Text = styled.div``;

const Logos = styled.div``;
