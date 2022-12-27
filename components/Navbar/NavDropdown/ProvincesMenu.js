import styled from "styled-components";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ProvincesMenu({ anchorEl, open, handleClose }) {
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  return (
    <MenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {provinces.map((province) => {
        return <MenuItem key={province}>{province}</MenuItem>;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled(Menu)`
  margin-top: 1em;
`;
