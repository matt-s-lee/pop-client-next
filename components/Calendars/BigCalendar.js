import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import list from "@fullcalendar/list";
import Tooltip from "@mui/material/Tooltip";
// import { showEventInfo, hideEventInfo } from "./eventTooltip";

export default function BigCalendar() {
  function renderInnerContent(innerProps) {
    return (
      <div className="fc-event-main-frame">
        {/* {innerProps.timeText && (
          <div className="fc-event-time">{innerProps.timeText}</div>
        )} */}
        <div className="fc-event-title-container">
          <div className="fc-event-title fc-sticky">
            {innerProps.event.title}
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
        events={[
          {
            title: "Workshop: gentle movement for pain by Dr X",
            description: "Click event to register",
            start: "2022-12-15T10:30:00",
            end: "2022-12-15T12:30:00",
          },
          {
            title: "Workshop: intro to the Power over Pain portal",
            description: "Click event to register",
            start: "2022-12-20T10:30:00",
            end: "2022-12-20T12:30:00",
          },
        ]}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  .fc-event-title {
    white-space: normal;
  }

  @media only screen and (min-width: 650px) {
    display: block;
    margin: 0 10vw 10vw 10vw;
  }
`;
// To load Fr calendar:
// import frLocale from "@fullcalendar/core/locales/fr";
// props:
// locale={frLocale}
//
