import { useState } from "react";
import Link from "next/link";

import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";

export default function FullDropdown({ data, text }) {
  const [anchorEl, setAnchorEl] = useState(null);
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
      >
        {text}
      </ButtonStyled>
      <MenuStyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Title>Explore by Topic</Title>
        {data ? (
          data.map((category) => {
            return (
              <MenuItem key={category.sys.id} onClick={handleClose}>
                <Link href={`/categories/${category.fields.slug}`}>
                  {category.fields.sectionTitle}
                </Link>
              </MenuItem>
            );
          })
        ) : (
          <div></div>
        )}
        <Divider />
        <Title>Explore By Support Type</Title>
      </MenuStyled>
    </div>
  );
}

const Wrapper = styled.div``;

const MenuStyled = styled(Menu)`
  margin-top: 1em;
`;

const ButtonStyled = styled(Button)`
  color: #666666;
  font-size: 15px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Title = styled.h3`
  margin-left: 0.5em;
`;