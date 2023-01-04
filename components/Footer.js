import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <CrisisText>Immediate Crisis Support: Text WELLNESS to 741741</CrisisText>
      <Link href="/">Feedback</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
