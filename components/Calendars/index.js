import styled from "styled-components";
import BigCalendar from "./BigCalendar";
import SmallCalendar from "./SmallCalendar";

export default function Calendars({ events }) {
  const eventsArray = events.items.map((event) => {
    return {
      title: event.fields.eventTitle,
      start: event.fields.dateAndTime,
      end: event.fields.endDateAndTime,
      description: event.fields.eventDescription?.content[0]?.content[0]?.value,
      url: event.fields.registrationLink,
      backgroundColor: event.fields.color,
    };
  });

  return (
    <Wrapper id="eventCalendar">
      <SectionTitle>Event Calendar</SectionTitle>
      <BigCalendar events={eventsArray} />
      <SmallCalendar events={eventsArray} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  background: lightgrey;
  margin-top: 2em;
  padding: 2em;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1em;
`;
