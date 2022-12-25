import { useState } from "react";
import Link from "next/link";

import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ClientOnly from "../../ClientOnly";
import { Divider } from "@mui/material";

export default function FullDropdown(props) {
  // console.log("props", props);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ClientOnly>
      <Wrapper>
        <ButtonStyled
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {props.text}
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
          {props.data ? (
            props.data.items.map((category) => {
              return (
                <MenuItem key={category.sys.id} onClick={handleClose}>
                  <Link href="/categories/indigenous-resources">
                    {category.fields.sectionTitle}
                  </Link>
                </MenuItem>
              );
            })
          ) : (
            <div></div>
          )}
        </MenuStyled>
        <Divider />
      </Wrapper>
    </ClientOnly>
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