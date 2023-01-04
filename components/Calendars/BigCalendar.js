import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import list from "@fullcalendar/list";
import Tooltip from "@mui/material/Tooltip";

export default function BigCalendar({ events }) {
  function renderInnerContent(innerProps) {
    return (
      <div className="fc-event-main-frame">
        {innerProps.timeText && (
          <div className="fc-event-time">{innerProps.timeText}</div>
        )}
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
          center: "dayGridMonth,listMonth",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        plugins={[dayGridPlugin, list]}
        initialView="listMonth"
        eventDisplay="block"
        weekends={false}
        events={events}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  .fc-event-title {
    white-space: normal;
  }

  @media only screen and (min-width: 800px) {
    display: block;
    margin: 0 10vw 10vw 10vw;
  }
`;
// To load Fr calendar:
// import frLocale from "@fullcalendar/core/locales/fr";
// props:
// locale={frLocale}