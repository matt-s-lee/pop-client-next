import styled from "styled-components";

export default function HeroImage({ title, text, imageUrl }) {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Row>
        <TextBox>
          <Title>
            <Span>{title}</Span>
          </Title>
          <Body>{text}</Body>
        </TextBox>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 150px;
    width: 100%;
  }
`;

const TextBox = styled.div`
  color: white;
  min-width: 300px;
  width: 50%;

  & > * {
    margin: 10px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  background: darkgrey;
  text-align: center;
`;

const Body = styled.div`
  font-size: 18px;
  line-height: 1.2em;
  background: darkgrey;
  padding: 1em;
`;

const Span = styled.span`
  padding: 5px 15px;
`;
