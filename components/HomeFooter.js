import styled from "styled-components";

export default function HomeFooter() {
  return (
    <Wrapper>
      <DecorativeDiv />
      <Text>
        <Title>Your pain is real and you belong here. </Title>
        <ul>
          <li>Accessible 24/7</li>
          <li>Private and confidential</li>
          <li>Free to use</li>
        </ul>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin-bottom: 2em;
`;

const DecorativeDiv = styled.div`
  position: absolute;
  top: -5em;
  background: #d7e5f2;
  height: 70vh;
  width: 100vh;
  border-radius: 50%;
`;

const Text = styled.div`
  position: relative;
  z-index: 2;
`;
const Title = styled.h2`
  padding: 1em;
`;
