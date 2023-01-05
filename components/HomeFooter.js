import styled from "styled-components";

export default function HomeFooter() {
  return (
    <Wrapper>
      <Title>Your pain is real and you belong here. </Title>
      <ul>
        <li>Accessible 24/7</li>
        <li>Private and confidential</li>
        <li>Free to use</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin-bottom: 2em;
`;

const Title = styled.h2`
  padding: 1em;
`;
