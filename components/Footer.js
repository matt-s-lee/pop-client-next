import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Message>
        <DecorativeDiv />
        <Text>
          <Title>Your pain is real and you belong here. </Title>
          <ul>
            <li>Accessible 24/7</li>
            <li>Private and confidential</li>
            <li>Free to use</li>
          </ul>
        </Text>
      </Message>
      <Banner>
        <CrisisText>
          Immediate Crisis Support: Text WELLNESS to 741741
        </CrisisText>
        <Link href="/">Feedback</Link>
      </Banner>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const Message = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin-bottom: 2em;
`;

const DecorativeDiv = styled.div`
  position: absolute;
  top: 3em;
  background: #d7e5f2;
  height: 50vh;
  width: 100vw;
  border-radius: 50%;
`;

const Text = styled.div`
  position: relative;
  padding-top: 3em;
  z-index: 2;
`;

const Title = styled.h2`
  padding: 1em;
`;

const Banner = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 4em;
  background: black;
  color: white;
  padding: 0 1em;
`;

const CrisisText = styled.span`
  flex-grow: 4;
`;