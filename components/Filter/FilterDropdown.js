import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
import styled from "styled-components";
import { theme } from "../../styles/font";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ClientOnly from "../ClientOnly";

import { IoChevronDown } from "react-icons/io5";

export default function FilterDropdown({ items, title }) {
  const { queryTerm, setQueryTerm } = useContext(FilterContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Keeps track of all query terms
  const handleSelect = (ev) => {
    setQueryTerm([ev.target.innerText, ...queryTerm]);
    handleClose();
  };

  return (
    <div>
      <ClientOnly>
        <ButtonStyled
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<IoChevronDown />}
          sx={{
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: "1em",
          }}
        >
          {title}
        </ButtonStyled>
      </ClientOnly>
      <ClientOnly>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: { height: 160 },
            //maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          }}
        >
          {items.map((item) => {
            return (
              <MenuItem
                key={item}
                onClick={handleSelect}
                disableRipple
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      </ClientOnly>
    </div>
  );
}

const ButtonStyled = styled(Button)`
  margin: 1em 1em;
  /* background: #143b89; */
`;

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));