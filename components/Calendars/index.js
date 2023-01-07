import styled from "styled-components";
import BigCalendar from "./BigCalendar";
import SmallCalendar from "./SmallCalendar";
import { TitleWrapper } from "../Category";

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
      <TitleWrapper>
        <h1>Event Calendar</h1>
      </TitleWrapper>
      <Description>
        Please see below for workshops on pain-related topics delivered by
        experts in the field and Orientation sessions helping you make your way
        around the Power Over Pain Portal
      </Description>
      <BigCalendar events={eventsArray} />
      <SmallCalendar events={eventsArray} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  /* background: lightgrey; */
  padding: 2em;
`;

const Description = styled(TitleWrapper)`
  box-shadow: none;
  margin: -2em 3em 3em 3em;
  background: #f2f1ef;
`;
