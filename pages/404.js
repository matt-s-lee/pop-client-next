import styled from "styled-components";
import Link from "next/link";

export default function Custom404() {
  return (
    <Wrapper>
      <Title>Sorry - this page doesn't exist</Title>
      <div>
        Are you looking for resources? Click{" "}
        <StyledLink href="/">here</StyledLink> to return to the homepage
      </div>
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

const Title = styled.h1`
  margin-bottom: 0.5em;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: grey;
    transition: all 0.2s ease-in-out;
  }
`;
