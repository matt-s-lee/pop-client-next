import styled from "styled-components";
import Link from "next/link";
import Divider from "../components/Divider";

export default function Custom404() {
  return (
    <Wrapper>
      <Message>
        <Title>Sorry - this page doesn&apos;t exist</Title>
        <div>
          Are you looking for resources? Click{" "}
          <StyledLink href="/">here</StyledLink> to return to the homepage
        </div>
      </Message>
      <Divider />
      <Message>
        <Title>Désolé - cette page n&apos;existe pas</Title>
        <div>
          Cherchez-vous des ressources? Cliquez{" "}
          <StyledLink href="/">ici</StyledLink> pour vous rendre à la page
          principale
        </div>
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1em 1em 1em;
  height: 77vh;

  @media only screen and (min-width: 450px) {
    height: 70vh;
  }
`;

const Title = styled.h2`
  margin-bottom: 0.5em;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: grey;
    transition: all 0.2s ease-in-out;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;
