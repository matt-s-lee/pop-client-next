import styled from "styled-components";
import BigCalendar from "./BigCalendar";
import SmallCalendar from "./SmallCalendar";

export default function Calendars() {
  return (
    <Wrapper>
      <SectionTitle>Event Calendar</SectionTitle>
      <BigCalendar />
      <SmallCalendar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  /* padding: 0 10vw 10vw 10vw; */
`;

const SectionTitle = styled.h2`
  margin-bottom: 1em;
`;
