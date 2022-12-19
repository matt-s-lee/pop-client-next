import Tooltip from "@mui/material/Tooltip";

export const showEventInfo = (info) => {
  if (info.event.extendedProps.description) {
    tooltipInstance = new Tooltip(info.el, {
      title: info.event.extendedProps.description,
      html: true,
      placement: "top",
      trigger: "hover",
      container: "body",
    });

    tooltipInstance.show();
  }
};

export const hideEventInfo = (info) => {
  if (tooltipInstance) {
    tooltipInstance.dispose();
    tooltipInstance = null;
  }
};
