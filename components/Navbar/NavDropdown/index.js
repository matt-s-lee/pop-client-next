import { useState } from "react";

import styled from "styled-components";
import Button from "@mui/material/Button";
import ResourcesMenu from "./ResourcesMenu";
import ProvincesMenu from "./ProvincesMenu";
import { theme } from "../../../styles/font";

export default function NavDropdown({ text }) {
  const [anchorEl, setAnchorEl] = useState(null);

  // Logic for Material UI menu
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonStyled
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {text}
      </ButtonStyled>
      {text === "Access Resources" || text === "Accéder aux ressources" ? (
        <ResourcesMenu
          text={text}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      ) : (
        <ProvincesMenu
          text={text}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

// const Wrapper = styled.div``;

const ButtonStyled = styled(Button)`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
`;

// // Extract topics for "Access Resources"
// const topicsForList = [];
// if (categories && topics) {
//   topics.fields.orderSections.forEach((topic) => {
//     categories.items.forEach((category) => {
//       if (category.sys.id === topic.sys.id) {
//         topicsForList.push(category);
//       }
//     });
//   });
// }

{
  /* <MenuStyled
        // id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        // onClose={handleClose}
        // MenuListProps={{
        //   "aria-labelledby": "basic-button",
        // }}
      >
        <Title>Explore by Topic</Title>
        {categories ? (
          topicsForList.map((category) => {
            return (
              <MenuItem key={category.sys.id} onClick={handleClose}>
                <Link href={`/categories/${category.fields.slug}`}>
                  {category.fields.sectionTitle}
                </Link>
              </MenuItem>
            );
          })
        ) : (3
          <div></div>
        )}
        <Divider />
        <Title>Explore By Support Type</Title>
        {}
      </MenuStyled> */
}
