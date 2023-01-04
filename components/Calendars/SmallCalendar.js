import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import list from "@fullcalendar/list";
import Tooltip from "@mui/material/Tooltip";

export default function SmallCalendar({ events }) {
  function renderInnerContent(innerProps) {
    return (
      <div className="fc-event-main-frame">
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky">
            <a href={innerProps.event.url}>{innerProps.event.title}</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <FullCalendar
        eventContent={(arg) => {
          return (
            <Tooltip title={arg.event.extendedProps.description} arrow>
              {renderInnerContent(arg)}
            </Tooltip>
          );
        }}
        headerToolbar={{
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        plugins={[list]}
        initialView="listMonth"
        events={events}
        // To open in a new tab
        eventClick={(info) => {
          info.jsEvent.preventDefault();
          if (info.event.url) {
            window.open(info.event.url);
          }
        }}
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
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;
