import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import list from "@fullcalendar/list";

export default function SmallCalendar() {
  return (
    <Wrapper>
      <FullCalendar
        headerToolbar={{
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        plugins={[list]}
        initialView="listMonth"
        events={[
          {
            title: "Event",
            description: "Description for Event",
            start: "2022-12-18T10:30:00",
            end: "2022-12-18T12:30:00",
          },
          { title: "event 2", date: "2022-12-19" },
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 10vw 10vw 10vw;
  .fc-toolbar {
    flex-direction: column;
  }
  /* .fc-toolbar-title {
    margin: 1em;
  } */
  @media only screen and (min-width: 650px) {
    display: none;
  }
`;
